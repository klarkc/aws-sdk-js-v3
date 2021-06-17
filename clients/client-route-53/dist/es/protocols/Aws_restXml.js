import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_restXmlActivateKeySigningKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/activate";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlAssociateVPCWithHostedZoneCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/associatevpc";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("AssociateVPCWithHostedZoneRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.Comment !== undefined) {
                    node = new __XmlNode("AssociateVPCComment").addChildNode(new __XmlText(input.Comment)).withName("Comment");
                    bodyNode.addChildNode(node);
                }
                if (input.VPC !== undefined) {
                    node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlChangeResourceRecordSetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/rrset";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("ChangeResourceRecordSetsRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.ChangeBatch !== undefined) {
                    node = serializeAws_restXmlChangeBatch(input.ChangeBatch, context).withName("ChangeBatch");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlChangeTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, bodyNode, nodes, containerNode_1, nodes, containerNode_2, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/tags/{ResourceType}/{ResourceId}";
                if (input.ResourceType !== undefined) {
                    labelValue = input.ResourceType;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceType.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceType}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceType.");
                }
                if (input.ResourceId !== undefined) {
                    labelValue = input.ResourceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceId.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceId.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("ChangeTagsForResourceRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.AddTags !== undefined) {
                    nodes = serializeAws_restXmlTagList(input.AddTags, context);
                    containerNode_1 = new __XmlNode("AddTags");
                    nodes.map(function (node) {
                        containerNode_1.addChildNode(node);
                    });
                    bodyNode.addChildNode(containerNode_1);
                }
                if (input.RemoveTagKeys !== undefined) {
                    nodes = serializeAws_restXmlTagKeyList(input.RemoveTagKeys, context);
                    containerNode_2 = new __XmlNode("RemoveTagKeys");
                    nodes.map(function (node) {
                        containerNode_2.addChildNode(node);
                    });
                    bodyNode.addChildNode(containerNode_2);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlCreateHealthCheckCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, bodyNode, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/healthcheck";
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("CreateHealthCheckRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.CallerReference !== undefined) {
                    node = new __XmlNode("HealthCheckNonce")
                        .addChildNode(new __XmlText(input.CallerReference))
                        .withName("CallerReference");
                    bodyNode.addChildNode(node);
                }
                if (input.HealthCheckConfig !== undefined) {
                    node = serializeAws_restXmlHealthCheckConfig(input.HealthCheckConfig, context).withName("HealthCheckConfig");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlCreateHostedZoneCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, bodyNode, node, node, node, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/hostedzone";
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("CreateHostedZoneRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.CallerReference !== undefined) {
                    node = new __XmlNode("Nonce").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
                    bodyNode.addChildNode(node);
                }
                if (input.DelegationSetId !== undefined) {
                    node = new __XmlNode("ResourceId")
                        .addChildNode(new __XmlText(input.DelegationSetId))
                        .withName("DelegationSetId");
                    bodyNode.addChildNode(node);
                }
                if (input.HostedZoneConfig !== undefined) {
                    node = serializeAws_restXmlHostedZoneConfig(input.HostedZoneConfig, context).withName("HostedZoneConfig");
                    bodyNode.addChildNode(node);
                }
                if (input.Name !== undefined) {
                    node = new __XmlNode("DNSName").addChildNode(new __XmlText(input.Name)).withName("Name");
                    bodyNode.addChildNode(node);
                }
                if (input.VPC !== undefined) {
                    node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlCreateKeySigningKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, bodyNode, node, node, node, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/keysigningkey";
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("CreateKeySigningKeyRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.CallerReference !== undefined) {
                    node = new __XmlNode("Nonce").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
                    bodyNode.addChildNode(node);
                }
                if (input.HostedZoneId !== undefined) {
                    node = new __XmlNode("ResourceId").addChildNode(new __XmlText(input.HostedZoneId)).withName("HostedZoneId");
                    bodyNode.addChildNode(node);
                }
                if (input.KeyManagementServiceArn !== undefined) {
                    node = new __XmlNode("SigningKeyString")
                        .addChildNode(new __XmlText(input.KeyManagementServiceArn))
                        .withName("KeyManagementServiceArn");
                    bodyNode.addChildNode(node);
                }
                if (input.Name !== undefined) {
                    node = new __XmlNode("SigningKeyName").addChildNode(new __XmlText(input.Name)).withName("Name");
                    bodyNode.addChildNode(node);
                }
                if (input.Status !== undefined) {
                    node = new __XmlNode("SigningKeyStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlCreateQueryLoggingConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, bodyNode, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/queryloggingconfig";
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("CreateQueryLoggingConfigRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.CloudWatchLogsLogGroupArn !== undefined) {
                    node = new __XmlNode("CloudWatchLogsLogGroupArn")
                        .addChildNode(new __XmlText(input.CloudWatchLogsLogGroupArn))
                        .withName("CloudWatchLogsLogGroupArn");
                    bodyNode.addChildNode(node);
                }
                if (input.HostedZoneId !== undefined) {
                    node = new __XmlNode("ResourceId").addChildNode(new __XmlText(input.HostedZoneId)).withName("HostedZoneId");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlCreateReusableDelegationSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, bodyNode, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/delegationset";
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("CreateReusableDelegationSetRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.CallerReference !== undefined) {
                    node = new __XmlNode("Nonce").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
                    bodyNode.addChildNode(node);
                }
                if (input.HostedZoneId !== undefined) {
                    node = new __XmlNode("ResourceId").addChildNode(new __XmlText(input.HostedZoneId)).withName("HostedZoneId");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlCreateTrafficPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, bodyNode, node, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/trafficpolicy";
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("CreateTrafficPolicyRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.Comment !== undefined) {
                    node = new __XmlNode("TrafficPolicyComment").addChildNode(new __XmlText(input.Comment)).withName("Comment");
                    bodyNode.addChildNode(node);
                }
                if (input.Document !== undefined) {
                    node = new __XmlNode("TrafficPolicyDocument")
                        .addChildNode(new __XmlText(input.Document))
                        .withName("Document");
                    bodyNode.addChildNode(node);
                }
                if (input.Name !== undefined) {
                    node = new __XmlNode("TrafficPolicyName").addChildNode(new __XmlText(input.Name)).withName("Name");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlCreateTrafficPolicyInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, bodyNode, node, node, node, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/trafficpolicyinstance";
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("CreateTrafficPolicyInstanceRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.HostedZoneId !== undefined) {
                    node = new __XmlNode("ResourceId").addChildNode(new __XmlText(input.HostedZoneId)).withName("HostedZoneId");
                    bodyNode.addChildNode(node);
                }
                if (input.Name !== undefined) {
                    node = new __XmlNode("DNSName").addChildNode(new __XmlText(input.Name)).withName("Name");
                    bodyNode.addChildNode(node);
                }
                if (input.TTL !== undefined) {
                    node = new __XmlNode("TTL").addChildNode(new __XmlText(String(input.TTL))).withName("TTL");
                    bodyNode.addChildNode(node);
                }
                if (input.TrafficPolicyId !== undefined) {
                    node = new __XmlNode("TrafficPolicyId")
                        .addChildNode(new __XmlText(input.TrafficPolicyId))
                        .withName("TrafficPolicyId");
                    bodyNode.addChildNode(node);
                }
                if (input.TrafficPolicyVersion !== undefined) {
                    node = new __XmlNode("TrafficPolicyVersion")
                        .addChildNode(new __XmlText(String(input.TrafficPolicyVersion)))
                        .withName("TrafficPolicyVersion");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlCreateTrafficPolicyVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/trafficpolicy/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("CreateTrafficPolicyVersionRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.Comment !== undefined) {
                    node = new __XmlNode("TrafficPolicyComment").addChildNode(new __XmlText(input.Comment)).withName("Comment");
                    bodyNode.addChildNode(node);
                }
                if (input.Document !== undefined) {
                    node = new __XmlNode("TrafficPolicyDocument")
                        .addChildNode(new __XmlText(input.Document))
                        .withName("Document");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlCreateVPCAssociationAuthorizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("CreateVPCAssociationAuthorizationRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.VPC !== undefined) {
                    node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeactivateKeySigningKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/deactivate";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteHealthCheckCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}";
                if (input.HealthCheckId !== undefined) {
                    labelValue = input.HealthCheckId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
                    }
                    resolvedPath = resolvedPath.replace("{HealthCheckId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HealthCheckId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteHostedZoneCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/hostedzone/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteKeySigningKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteQueryLoggingConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/queryloggingconfig/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteReusableDelegationSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/delegationset/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteTrafficPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/trafficpolicy/{Id}/{Version}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                if (input.Version !== undefined) {
                    labelValue = input.Version.toString();
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Version.");
                    }
                    resolvedPath = resolvedPath.replace("{Version}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Version.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteTrafficPolicyInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/trafficpolicyinstance/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/deauthorizevpcassociation";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("DeleteVPCAssociationAuthorizationRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.VPC !== undefined) {
                    node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDisableHostedZoneDNSSECCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/disable-dnssec";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDisassociateVPCFromHostedZoneCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/disassociatevpc";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("DisassociateVPCFromHostedZoneRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.Comment !== undefined) {
                    node = new __XmlNode("DisassociateVPCComment").addChildNode(new __XmlText(input.Comment)).withName("Comment");
                    bodyNode.addChildNode(node);
                }
                if (input.VPC !== undefined) {
                    node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlEnableHostedZoneDNSSECCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/enable-dnssec";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetAccountLimitCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/accountlimit/{Type}";
                if (input.Type !== undefined) {
                    labelValue = input.Type;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Type.");
                    }
                    resolvedPath = resolvedPath.replace("{Type}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Type.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetChangeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/change/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetCheckerIpRangesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/checkeripranges";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetDNSSECCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/dnssec";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetGeoLocationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/geolocation";
                query = __assign(__assign(__assign({}, (input.ContinentCode !== undefined && { continentcode: input.ContinentCode })), (input.CountryCode !== undefined && { countrycode: input.CountryCode })), (input.SubdivisionCode !== undefined && { subdivisioncode: input.SubdivisionCode }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetHealthCheckCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}";
                if (input.HealthCheckId !== undefined) {
                    labelValue = input.HealthCheckId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
                    }
                    resolvedPath = resolvedPath.replace("{HealthCheckId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HealthCheckId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetHealthCheckCountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/healthcheckcount";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetHealthCheckLastFailureReasonCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason";
                if (input.HealthCheckId !== undefined) {
                    labelValue = input.HealthCheckId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
                    }
                    resolvedPath = resolvedPath.replace("{HealthCheckId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HealthCheckId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetHealthCheckStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}/status";
                if (input.HealthCheckId !== undefined) {
                    labelValue = input.HealthCheckId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
                    }
                    resolvedPath = resolvedPath.replace("{HealthCheckId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HealthCheckId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetHostedZoneCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/hostedzone/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetHostedZoneCountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/hostedzonecount";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetHostedZoneLimitCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/hostedzonelimit/{HostedZoneId}/{Type}";
                if (input.Type !== undefined) {
                    labelValue = input.Type;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Type.");
                    }
                    resolvedPath = resolvedPath.replace("{Type}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Type.");
                }
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetQueryLoggingConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/queryloggingconfig/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetReusableDelegationSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/delegationset/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetReusableDelegationSetLimitCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/reusabledelegationsetlimit/{DelegationSetId}/{Type}";
                if (input.Type !== undefined) {
                    labelValue = input.Type;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Type.");
                    }
                    resolvedPath = resolvedPath.replace("{Type}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Type.");
                }
                if (input.DelegationSetId !== undefined) {
                    labelValue = input.DelegationSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DelegationSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DelegationSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DelegationSetId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetTrafficPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/trafficpolicy/{Id}/{Version}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                if (input.Version !== undefined) {
                    labelValue = input.Version.toString();
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Version.");
                    }
                    resolvedPath = resolvedPath.replace("{Version}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Version.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetTrafficPolicyInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/trafficpolicyinstance/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetTrafficPolicyInstanceCountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/trafficpolicyinstancecount";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListGeoLocationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/geolocations";
                query = __assign(__assign(__assign(__assign({}, (input.StartContinentCode !== undefined && { startcontinentcode: input.StartContinentCode })), (input.StartCountryCode !== undefined && { startcountrycode: input.StartCountryCode })), (input.StartSubdivisionCode !== undefined && { startsubdivisioncode: input.StartSubdivisionCode })), (input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListHealthChecksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/healthcheck";
                query = __assign(__assign({}, (input.Marker !== undefined && { marker: input.Marker })), (input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListHostedZonesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/hostedzone";
                query = __assign(__assign(__assign({}, (input.Marker !== undefined && { marker: input.Marker })), (input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() })), (input.DelegationSetId !== undefined && { delegationsetid: input.DelegationSetId }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListHostedZonesByNameCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/hostedzonesbyname";
                query = __assign(__assign(__assign({}, (input.DNSName !== undefined && { dnsname: input.DNSName })), (input.HostedZoneId !== undefined && { hostedzoneid: input.HostedZoneId })), (input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListHostedZonesByVPCCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/hostedzonesbyvpc";
                query = __assign(__assign(__assign(__assign({}, (input.VPCId !== undefined && { vpcid: input.VPCId })), (input.VPCRegion !== undefined && { vpcregion: input.VPCRegion })), (input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() })), (input.NextToken !== undefined && { nexttoken: input.NextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListQueryLoggingConfigsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/queryloggingconfig";
                query = __assign(__assign(__assign({}, (input.HostedZoneId !== undefined && { hostedzoneid: input.HostedZoneId })), (input.NextToken !== undefined && { nexttoken: input.NextToken })), (input.MaxResults !== undefined && { maxresults: input.MaxResults.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListResourceRecordSetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/rrset";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                query = __assign(__assign(__assign(__assign({}, (input.StartRecordName !== undefined && { name: input.StartRecordName })), (input.StartRecordType !== undefined && { type: input.StartRecordType })), (input.StartRecordIdentifier !== undefined && { identifier: input.StartRecordIdentifier })), (input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListReusableDelegationSetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/delegationset";
                query = __assign(__assign({}, (input.Marker !== undefined && { marker: input.Marker })), (input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/tags/{ResourceType}/{ResourceId}";
                if (input.ResourceType !== undefined) {
                    labelValue = input.ResourceType;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceType.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceType}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceType.");
                }
                if (input.ResourceId !== undefined) {
                    labelValue = input.ResourceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceId.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListTagsForResourcesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, nodes, containerNode_3, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/tags/{ResourceType}";
                if (input.ResourceType !== undefined) {
                    labelValue = input.ResourceType;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceType.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceType}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceType.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("ListTagsForResourcesRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.ResourceIds !== undefined) {
                    nodes = serializeAws_restXmlTagResourceIdList(input.ResourceIds, context);
                    containerNode_3 = new __XmlNode("ResourceIds");
                    nodes.map(function (node) {
                        containerNode_3.addChildNode(node);
                    });
                    bodyNode.addChildNode(containerNode_3);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListTrafficPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/trafficpolicies";
                query = __assign(__assign({}, (input.TrafficPolicyIdMarker !== undefined && { trafficpolicyid: input.TrafficPolicyIdMarker })), (input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListTrafficPolicyInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/trafficpolicyinstances";
                query = __assign(__assign(__assign(__assign({}, (input.HostedZoneIdMarker !== undefined && { hostedzoneid: input.HostedZoneIdMarker })), (input.TrafficPolicyInstanceNameMarker !== undefined && {
                    trafficpolicyinstancename: input.TrafficPolicyInstanceNameMarker,
                })), (input.TrafficPolicyInstanceTypeMarker !== undefined && {
                    trafficpolicyinstancetype: input.TrafficPolicyInstanceTypeMarker,
                })), (input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/trafficpolicyinstances/hostedzone";
                query = __assign(__assign(__assign(__assign({}, (input.HostedZoneId !== undefined && { id: input.HostedZoneId })), (input.TrafficPolicyInstanceNameMarker !== undefined && {
                    trafficpolicyinstancename: input.TrafficPolicyInstanceNameMarker,
                })), (input.TrafficPolicyInstanceTypeMarker !== undefined && {
                    trafficpolicyinstancetype: input.TrafficPolicyInstanceTypeMarker,
                })), (input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/trafficpolicyinstances/trafficpolicy";
                query = __assign(__assign(__assign(__assign(__assign(__assign({}, (input.TrafficPolicyId !== undefined && { id: input.TrafficPolicyId })), (input.TrafficPolicyVersion !== undefined && { version: input.TrafficPolicyVersion.toString() })), (input.HostedZoneIdMarker !== undefined && { hostedzoneid: input.HostedZoneIdMarker })), (input.TrafficPolicyInstanceNameMarker !== undefined && {
                    trafficpolicyinstancename: input.TrafficPolicyInstanceNameMarker,
                })), (input.TrafficPolicyInstanceTypeMarker !== undefined && {
                    trafficpolicyinstancetype: input.TrafficPolicyInstanceTypeMarker,
                })), (input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListTrafficPolicyVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/trafficpolicies/{Id}/versions";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                query = __assign(__assign({}, (input.TrafficPolicyVersionMarker !== undefined && { trafficpolicyversion: input.TrafficPolicyVersionMarker })), (input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListVPCAssociationAuthorizationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation";
                if (input.HostedZoneId !== undefined) {
                    labelValue = input.HostedZoneId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
                    }
                    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HostedZoneId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nexttoken: input.NextToken })), (input.MaxResults !== undefined && { maxresults: input.MaxResults.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlTestDNSAnswerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-04-01/testdnsanswer";
                query = __assign(__assign(__assign(__assign(__assign(__assign({}, (input.HostedZoneId !== undefined && { hostedzoneid: input.HostedZoneId })), (input.RecordName !== undefined && { recordname: input.RecordName })), (input.RecordType !== undefined && { recordtype: input.RecordType })), (input.ResolverIP !== undefined && { resolverip: input.ResolverIP })), (input.EDNS0ClientSubnetIP !== undefined && { edns0clientsubnetip: input.EDNS0ClientSubnetIP })), (input.EDNS0ClientSubnetMask !== undefined && { edns0clientsubnetmask: input.EDNS0ClientSubnetMask }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlUpdateHealthCheckCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, nodes, containerNode_4, node, node, node, node, node, node, node, node, node, node, nodes, containerNode_5, nodes, containerNode_6, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}";
                if (input.HealthCheckId !== undefined) {
                    labelValue = input.HealthCheckId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
                    }
                    resolvedPath = resolvedPath.replace("{HealthCheckId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HealthCheckId.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("UpdateHealthCheckRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.AlarmIdentifier !== undefined) {
                    node = serializeAws_restXmlAlarmIdentifier(input.AlarmIdentifier, context).withName("AlarmIdentifier");
                    bodyNode.addChildNode(node);
                }
                if (input.ChildHealthChecks !== undefined) {
                    nodes = serializeAws_restXmlChildHealthCheckList(input.ChildHealthChecks, context);
                    containerNode_4 = new __XmlNode("ChildHealthChecks");
                    nodes.map(function (node) {
                        containerNode_4.addChildNode(node);
                    });
                    bodyNode.addChildNode(containerNode_4);
                }
                if (input.Disabled !== undefined) {
                    node = new __XmlNode("Disabled").addChildNode(new __XmlText(String(input.Disabled))).withName("Disabled");
                    bodyNode.addChildNode(node);
                }
                if (input.EnableSNI !== undefined) {
                    node = new __XmlNode("EnableSNI").addChildNode(new __XmlText(String(input.EnableSNI))).withName("EnableSNI");
                    bodyNode.addChildNode(node);
                }
                if (input.FailureThreshold !== undefined) {
                    node = new __XmlNode("FailureThreshold")
                        .addChildNode(new __XmlText(String(input.FailureThreshold)))
                        .withName("FailureThreshold");
                    bodyNode.addChildNode(node);
                }
                if (input.FullyQualifiedDomainName !== undefined) {
                    node = new __XmlNode("FullyQualifiedDomainName")
                        .addChildNode(new __XmlText(input.FullyQualifiedDomainName))
                        .withName("FullyQualifiedDomainName");
                    bodyNode.addChildNode(node);
                }
                if (input.HealthCheckVersion !== undefined) {
                    node = new __XmlNode("HealthCheckVersion")
                        .addChildNode(new __XmlText(String(input.HealthCheckVersion)))
                        .withName("HealthCheckVersion");
                    bodyNode.addChildNode(node);
                }
                if (input.HealthThreshold !== undefined) {
                    node = new __XmlNode("HealthThreshold")
                        .addChildNode(new __XmlText(String(input.HealthThreshold)))
                        .withName("HealthThreshold");
                    bodyNode.addChildNode(node);
                }
                if (input.IPAddress !== undefined) {
                    node = new __XmlNode("IPAddress").addChildNode(new __XmlText(input.IPAddress)).withName("IPAddress");
                    bodyNode.addChildNode(node);
                }
                if (input.InsufficientDataHealthStatus !== undefined) {
                    node = new __XmlNode("InsufficientDataHealthStatus")
                        .addChildNode(new __XmlText(input.InsufficientDataHealthStatus))
                        .withName("InsufficientDataHealthStatus");
                    bodyNode.addChildNode(node);
                }
                if (input.Inverted !== undefined) {
                    node = new __XmlNode("Inverted").addChildNode(new __XmlText(String(input.Inverted))).withName("Inverted");
                    bodyNode.addChildNode(node);
                }
                if (input.Port !== undefined) {
                    node = new __XmlNode("Port").addChildNode(new __XmlText(String(input.Port))).withName("Port");
                    bodyNode.addChildNode(node);
                }
                if (input.Regions !== undefined) {
                    nodes = serializeAws_restXmlHealthCheckRegionList(input.Regions, context);
                    containerNode_5 = new __XmlNode("Regions");
                    nodes.map(function (node) {
                        containerNode_5.addChildNode(node);
                    });
                    bodyNode.addChildNode(containerNode_5);
                }
                if (input.ResetElements !== undefined) {
                    nodes = serializeAws_restXmlResettableElementNameList(input.ResetElements, context);
                    containerNode_6 = new __XmlNode("ResetElements");
                    nodes.map(function (node) {
                        containerNode_6.addChildNode(node);
                    });
                    bodyNode.addChildNode(containerNode_6);
                }
                if (input.ResourcePath !== undefined) {
                    node = new __XmlNode("ResourcePath").addChildNode(new __XmlText(input.ResourcePath)).withName("ResourcePath");
                    bodyNode.addChildNode(node);
                }
                if (input.SearchString !== undefined) {
                    node = new __XmlNode("SearchString").addChildNode(new __XmlText(input.SearchString)).withName("SearchString");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlUpdateHostedZoneCommentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/hostedzone/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("UpdateHostedZoneCommentRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.Comment !== undefined) {
                    node = new __XmlNode("ResourceDescription").addChildNode(new __XmlText(input.Comment)).withName("Comment");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlUpdateTrafficPolicyCommentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, bodyNode, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/trafficpolicy/{Id}/{Version}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                if (input.Version !== undefined) {
                    labelValue = input.Version.toString();
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Version.");
                    }
                    resolvedPath = resolvedPath.replace("{Version}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Version.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("UpdateTrafficPolicyCommentRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.Comment !== undefined) {
                    node = new __XmlNode("TrafficPolicyComment").addChildNode(new __XmlText(input.Comment)).withName("Comment");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlUpdateTrafficPolicyInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/xml",
                };
                resolvedPath = "/2013-04-01/trafficpolicyinstance/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("UpdateTrafficPolicyInstanceRequest");
                bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
                if (input.TTL !== undefined) {
                    node = new __XmlNode("TTL").addChildNode(new __XmlText(String(input.TTL))).withName("TTL");
                    bodyNode.addChildNode(node);
                }
                if (input.TrafficPolicyId !== undefined) {
                    node = new __XmlNode("TrafficPolicyId")
                        .addChildNode(new __XmlText(input.TrafficPolicyId))
                        .withName("TrafficPolicyId");
                    bodyNode.addChildNode(node);
                }
                if (input.TrafficPolicyVersion !== undefined) {
                    node = new __XmlNode("TrafficPolicyVersion")
                        .addChildNode(new __XmlText(String(input.TrafficPolicyVersion)))
                        .withName("TrafficPolicyVersion");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restXmlActivateKeySigningKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlActivateKeySigningKeyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ChangeInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ChangeInfo"] !== undefined) {
                    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlActivateKeySigningKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "InvalidKeySigningKeyStatus": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidKeySigningKeyStatus": return [3 /*break*/, 4];
                    case "InvalidKMSArn": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#InvalidKMSArn": return [3 /*break*/, 6];
                    case "InvalidSigningStatus": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#InvalidSigningStatus": return [3 /*break*/, 8];
                    case "NoSuchKeySigningKey": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#NoSuchKeySigningKey": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchKeySigningKeyResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlAssociateVPCWithHostedZoneCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlAssociateVPCWithHostedZoneCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ChangeInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ChangeInfo"] !== undefined) {
                    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlAssociateVPCWithHostedZoneCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictingDomainExists": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConflictingDomainExists": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "InvalidVPCId": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#InvalidVPCId": return [3 /*break*/, 6];
                    case "LimitsExceeded": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#LimitsExceeded": return [3 /*break*/, 8];
                    case "NoSuchHostedZone": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 10];
                    case "NotAuthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.route53#NotAuthorizedException": return [3 /*break*/, 12];
                    case "PriorRequestNotComplete": return [3 /*break*/, 14];
                    case "com.amazonaws.route53#PriorRequestNotComplete": return [3 /*break*/, 14];
                    case "PublicZoneVPCAssociation": return [3 /*break*/, 16];
                    case "com.amazonaws.route53#PublicZoneVPCAssociation": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConflictingDomainExistsResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlLimitsExceededResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNotAuthorizedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restXmlPublicZoneVPCAssociationResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlChangeResourceRecordSetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlChangeResourceRecordSetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ChangeInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ChangeInfo"] !== undefined) {
                    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlChangeResourceRecordSetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidChangeBatch": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidChangeBatch": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "NoSuchHealthCheck": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchHealthCheck": return [3 /*break*/, 6];
                    case "NoSuchHostedZone": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 8];
                    case "PriorRequestNotComplete": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#PriorRequestNotComplete": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidChangeBatchResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlChangeTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlChangeTagsForResourceCommandError(output, context)];
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
}); };
var deserializeAws_restXmlChangeTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchHealthCheck": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchHealthCheck": return [3 /*break*/, 4];
                    case "NoSuchHostedZone": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 6];
                    case "PriorRequestNotComplete": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#PriorRequestNotComplete": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlCreateHealthCheckCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateHealthCheckCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HealthCheck: undefined,
                    Location: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.Location = output.headers["location"];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["HealthCheck"] !== undefined) {
                    contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateHealthCheckCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "HealthCheckAlreadyExists": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#HealthCheckAlreadyExists": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "TooManyHealthChecks": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#TooManyHealthChecks": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlHealthCheckAlreadyExistsResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyHealthChecksResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlCreateHostedZoneCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateHostedZoneCommandError(output, context)];
                }
                contents = {
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
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateHostedZoneCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictingDomainExists": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConflictingDomainExists": return [3 /*break*/, 2];
                    case "DelegationSetNotAvailable": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#DelegationSetNotAvailable": return [3 /*break*/, 4];
                    case "DelegationSetNotReusable": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#DelegationSetNotReusable": return [3 /*break*/, 6];
                    case "HostedZoneAlreadyExists": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#HostedZoneAlreadyExists": return [3 /*break*/, 8];
                    case "InvalidDomainName": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#InvalidDomainName": return [3 /*break*/, 10];
                    case "InvalidInput": return [3 /*break*/, 12];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 12];
                    case "InvalidVPCId": return [3 /*break*/, 14];
                    case "com.amazonaws.route53#InvalidVPCId": return [3 /*break*/, 14];
                    case "NoSuchDelegationSet": return [3 /*break*/, 16];
                    case "com.amazonaws.route53#NoSuchDelegationSet": return [3 /*break*/, 16];
                    case "TooManyHostedZones": return [3 /*break*/, 18];
                    case "com.amazonaws.route53#TooManyHostedZones": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConflictingDomainExistsResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlDelegationSetNotAvailableResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlHostedZoneAlreadyExistsResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyHostedZonesResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlCreateKeySigningKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateKeySigningKeyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ChangeInfo: undefined,
                    KeySigningKey: undefined,
                    Location: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.Location = output.headers["location"];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ChangeInfo"] !== undefined) {
                    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
                }
                if (data["KeySigningKey"] !== undefined) {
                    contents.KeySigningKey = deserializeAws_restXmlKeySigningKey(data["KeySigningKey"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateKeySigningKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                _a = [__assign({}, output)];
                _o = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_o.body = _p.sent(), _o)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "InvalidArgument": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidArgument": return [3 /*break*/, 4];
                    case "InvalidInput": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 6];
                    case "InvalidKeySigningKeyName": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#InvalidKeySigningKeyName": return [3 /*break*/, 8];
                    case "InvalidKeySigningKeyStatus": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#InvalidKeySigningKeyStatus": return [3 /*break*/, 10];
                    case "InvalidKMSArn": return [3 /*break*/, 12];
                    case "com.amazonaws.route53#InvalidKMSArn": return [3 /*break*/, 12];
                    case "InvalidSigningStatus": return [3 /*break*/, 14];
                    case "com.amazonaws.route53#InvalidSigningStatus": return [3 /*break*/, 14];
                    case "KeySigningKeyAlreadyExists": return [3 /*break*/, 16];
                    case "com.amazonaws.route53#KeySigningKeyAlreadyExists": return [3 /*break*/, 16];
                    case "NoSuchHostedZone": return [3 /*break*/, 18];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 18];
                    case "TooManyKeySigningKeys": return [3 /*break*/, 20];
                    case "com.amazonaws.route53#TooManyKeySigningKeys": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidKeySigningKeyNameResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restXmlKeySigningKeyAlreadyExistsResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyKeySigningKeysResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 22:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _p.label = 23;
            case 23:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlCreateQueryLoggingConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateQueryLoggingConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Location: undefined,
                    QueryLoggingConfig: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.Location = output.headers["location"];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["QueryLoggingConfig"] !== undefined) {
                    contents.QueryLoggingConfig = deserializeAws_restXmlQueryLoggingConfig(data["QueryLoggingConfig"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateQueryLoggingConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "InsufficientCloudWatchLogsResourcePolicy": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InsufficientCloudWatchLogsResourcePolicy": return [3 /*break*/, 4];
                    case "InvalidInput": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 6];
                    case "NoSuchCloudWatchLogsLogGroup": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#NoSuchCloudWatchLogsLogGroup": return [3 /*break*/, 8];
                    case "NoSuchHostedZone": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 10];
                    case "QueryLoggingConfigAlreadyExists": return [3 /*break*/, 12];
                    case "com.amazonaws.route53#QueryLoggingConfigAlreadyExists": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInsufficientCloudWatchLogsResourcePolicyResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchCloudWatchLogsLogGroupResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restXmlQueryLoggingConfigAlreadyExistsResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlCreateReusableDelegationSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateReusableDelegationSetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DelegationSet: undefined,
                    Location: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.Location = output.headers["location"];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["DelegationSet"] !== undefined) {
                    contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateReusableDelegationSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DelegationSetAlreadyCreated": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#DelegationSetAlreadyCreated": return [3 /*break*/, 2];
                    case "DelegationSetAlreadyReusable": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#DelegationSetAlreadyReusable": return [3 /*break*/, 4];
                    case "DelegationSetNotAvailable": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#DelegationSetNotAvailable": return [3 /*break*/, 6];
                    case "HostedZoneNotFound": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#HostedZoneNotFound": return [3 /*break*/, 8];
                    case "InvalidArgument": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#InvalidArgument": return [3 /*break*/, 10];
                    case "InvalidInput": return [3 /*break*/, 12];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 12];
                    case "LimitsExceeded": return [3 /*break*/, 14];
                    case "com.amazonaws.route53#LimitsExceeded": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlDelegationSetAlreadyCreatedResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlDelegationSetAlreadyReusableResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlDelegationSetNotAvailableResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlHostedZoneNotFoundResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restXmlLimitsExceededResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlCreateTrafficPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateTrafficPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Location: undefined,
                    TrafficPolicy: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.Location = output.headers["location"];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["TrafficPolicy"] !== undefined) {
                    contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateTrafficPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "InvalidTrafficPolicyDocument": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidTrafficPolicyDocument": return [3 /*break*/, 4];
                    case "TooManyTrafficPolicies": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#TooManyTrafficPolicies": return [3 /*break*/, 6];
                    case "TrafficPolicyAlreadyExists": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#TrafficPolicyAlreadyExists": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyTrafficPoliciesResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTrafficPolicyAlreadyExistsResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlCreateTrafficPolicyInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateTrafficPolicyInstanceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Location: undefined,
                    TrafficPolicyInstance: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.Location = output.headers["location"];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["TrafficPolicyInstance"] !== undefined) {
                    contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(data["TrafficPolicyInstance"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateTrafficPolicyInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchHostedZone": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 4];
                    case "NoSuchTrafficPolicy": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchTrafficPolicy": return [3 /*break*/, 6];
                    case "TooManyTrafficPolicyInstances": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#TooManyTrafficPolicyInstances": return [3 /*break*/, 8];
                    case "TrafficPolicyInstanceAlreadyExists": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#TrafficPolicyInstanceAlreadyExists": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyTrafficPolicyInstancesResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTrafficPolicyInstanceAlreadyExistsResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlCreateTrafficPolicyVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateTrafficPolicyVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Location: undefined,
                    TrafficPolicy: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.Location = output.headers["location"];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["TrafficPolicy"] !== undefined) {
                    contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateTrafficPolicyVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "InvalidTrafficPolicyDocument": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#InvalidTrafficPolicyDocument": return [3 /*break*/, 6];
                    case "NoSuchTrafficPolicy": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#NoSuchTrafficPolicy": return [3 /*break*/, 8];
                    case "TooManyTrafficPolicyVersionsForCurrentPolicy": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#TooManyTrafficPolicyVersionsForCurrentPolicy": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyTrafficPolicyVersionsForCurrentPolicyResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateVPCAssociationAuthorizationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HostedZoneId: undefined,
                    VPC: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["HostedZoneId"] !== undefined) {
                    contents.HostedZoneId = data["HostedZoneId"];
                }
                if (data["VPC"] !== undefined) {
                    contents.VPC = deserializeAws_restXmlVPC(data["VPC"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateVPCAssociationAuthorizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "InvalidVPCId": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#InvalidVPCId": return [3 /*break*/, 6];
                    case "NoSuchHostedZone": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 8];
                    case "TooManyVPCAssociationAuthorizations": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#TooManyVPCAssociationAuthorizations": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyVPCAssociationAuthorizationsResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlDeactivateKeySigningKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeactivateKeySigningKeyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ChangeInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ChangeInfo"] !== undefined) {
                    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlDeactivateKeySigningKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "InvalidKeySigningKeyStatus": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidKeySigningKeyStatus": return [3 /*break*/, 4];
                    case "InvalidSigningStatus": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#InvalidSigningStatus": return [3 /*break*/, 6];
                    case "KeySigningKeyInParentDSRecord": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#KeySigningKeyInParentDSRecord": return [3 /*break*/, 8];
                    case "KeySigningKeyInUse": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#KeySigningKeyInUse": return [3 /*break*/, 10];
                    case "NoSuchKeySigningKey": return [3 /*break*/, 12];
                    case "com.amazonaws.route53#NoSuchKeySigningKey": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlKeySigningKeyInParentDSRecordResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlKeySigningKeyInUseResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchKeySigningKeyResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlDeleteHealthCheckCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteHealthCheckCommandError(output, context)];
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
}); };
var deserializeAws_restXmlDeleteHealthCheckCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "HealthCheckInUse": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#HealthCheckInUse": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "NoSuchHealthCheck": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchHealthCheck": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlHealthCheckInUseResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlDeleteHostedZoneCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteHostedZoneCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ChangeInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ChangeInfo"] !== undefined) {
                    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlDeleteHostedZoneCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "HostedZoneNotEmpty": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#HostedZoneNotEmpty": return [3 /*break*/, 2];
                    case "InvalidDomainName": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidDomainName": return [3 /*break*/, 4];
                    case "InvalidInput": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 6];
                    case "NoSuchHostedZone": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 8];
                    case "PriorRequestNotComplete": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#PriorRequestNotComplete": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlHostedZoneNotEmptyResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlDeleteKeySigningKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteKeySigningKeyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ChangeInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ChangeInfo"] !== undefined) {
                    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlDeleteKeySigningKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "InvalidKeySigningKeyStatus": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidKeySigningKeyStatus": return [3 /*break*/, 4];
                    case "InvalidKMSArn": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#InvalidKMSArn": return [3 /*break*/, 6];
                    case "InvalidSigningStatus": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#InvalidSigningStatus": return [3 /*break*/, 8];
                    case "NoSuchKeySigningKey": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#NoSuchKeySigningKey": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchKeySigningKeyResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlDeleteQueryLoggingConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteQueryLoggingConfigCommandError(output, context)];
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
}); };
var deserializeAws_restXmlDeleteQueryLoggingConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "NoSuchQueryLoggingConfig": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchQueryLoggingConfig": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchQueryLoggingConfigResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlDeleteReusableDelegationSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteReusableDelegationSetCommandError(output, context)];
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
}); };
var deserializeAws_restXmlDeleteReusableDelegationSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DelegationSetInUse": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#DelegationSetInUse": return [3 /*break*/, 2];
                    case "DelegationSetNotReusable": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#DelegationSetNotReusable": return [3 /*break*/, 4];
                    case "InvalidInput": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 6];
                    case "NoSuchDelegationSet": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#NoSuchDelegationSet": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlDelegationSetInUseResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlDeleteTrafficPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteTrafficPolicyCommandError(output, context)];
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
}); };
var deserializeAws_restXmlDeleteTrafficPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "NoSuchTrafficPolicy": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchTrafficPolicy": return [3 /*break*/, 6];
                    case "TrafficPolicyInUse": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#TrafficPolicyInUse": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTrafficPolicyInUseResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteTrafficPolicyInstanceCommandError(output, context)];
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
}); };
var deserializeAws_restXmlDeleteTrafficPolicyInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchTrafficPolicyInstance": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance": return [3 /*break*/, 4];
                    case "PriorRequestNotComplete": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#PriorRequestNotComplete": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommandError(output, context)];
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
}); };
var deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "InvalidVPCId": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#InvalidVPCId": return [3 /*break*/, 6];
                    case "NoSuchHostedZone": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 8];
                    case "VPCAssociationAuthorizationNotFound": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#VPCAssociationAuthorizationNotFound": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlVPCAssociationAuthorizationNotFoundResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlDisableHostedZoneDNSSECCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDisableHostedZoneDNSSECCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ChangeInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ChangeInfo"] !== undefined) {
                    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlDisableHostedZoneDNSSECCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "DNSSECNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#DNSSECNotFound": return [3 /*break*/, 4];
                    case "InvalidArgument": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#InvalidArgument": return [3 /*break*/, 6];
                    case "InvalidKeySigningKeyStatus": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#InvalidKeySigningKeyStatus": return [3 /*break*/, 8];
                    case "InvalidKMSArn": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#InvalidKMSArn": return [3 /*break*/, 10];
                    case "KeySigningKeyInParentDSRecord": return [3 /*break*/, 12];
                    case "com.amazonaws.route53#KeySigningKeyInParentDSRecord": return [3 /*break*/, 12];
                    case "NoSuchHostedZone": return [3 /*break*/, 14];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlDNSSECNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restXmlKeySigningKeyInParentDSRecordResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDisassociateVPCFromHostedZoneCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ChangeInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ChangeInfo"] !== undefined) {
                    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlDisassociateVPCFromHostedZoneCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "InvalidVPCId": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidVPCId": return [3 /*break*/, 4];
                    case "LastVPCAssociation": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#LastVPCAssociation": return [3 /*break*/, 6];
                    case "NoSuchHostedZone": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 8];
                    case "VPCAssociationNotFound": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#VPCAssociationNotFound": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlLastVPCAssociationResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlVPCAssociationNotFoundResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlEnableHostedZoneDNSSECCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlEnableHostedZoneDNSSECCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ChangeInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ChangeInfo"] !== undefined) {
                    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlEnableHostedZoneDNSSECCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "DNSSECNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#DNSSECNotFound": return [3 /*break*/, 4];
                    case "HostedZonePartiallyDelegated": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#HostedZonePartiallyDelegated": return [3 /*break*/, 6];
                    case "InvalidArgument": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#InvalidArgument": return [3 /*break*/, 8];
                    case "InvalidKeySigningKeyStatus": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#InvalidKeySigningKeyStatus": return [3 /*break*/, 10];
                    case "InvalidKMSArn": return [3 /*break*/, 12];
                    case "com.amazonaws.route53#InvalidKMSArn": return [3 /*break*/, 12];
                    case "KeySigningKeyWithActiveStatusNotFound": return [3 /*break*/, 14];
                    case "com.amazonaws.route53#KeySigningKeyWithActiveStatusNotFound": return [3 /*break*/, 14];
                    case "NoSuchHostedZone": return [3 /*break*/, 16];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlDNSSECNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlHostedZonePartiallyDelegatedResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restXmlKeySigningKeyWithActiveStatusNotFoundResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetAccountLimitCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetAccountLimitCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Count: undefined,
                    Limit: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["Count"] !== undefined) {
                    contents.Count = parseInt(data["Count"]);
                }
                if (data["Limit"] !== undefined) {
                    contents.Limit = deserializeAws_restXmlAccountLimit(data["Limit"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetAccountLimitCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetChangeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetChangeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ChangeInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ChangeInfo"] !== undefined) {
                    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetChangeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchChange": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchChange": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchChangeResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetCheckerIpRangesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetCheckerIpRangesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CheckerIpRanges: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CheckerIpRanges === "") {
                    contents.CheckerIpRanges = [];
                }
                if (data["CheckerIpRanges"] !== undefined && data["CheckerIpRanges"]["member"] !== undefined) {
                    contents.CheckerIpRanges = deserializeAws_restXmlCheckerIpRanges(__getArrayIfSingleItem(data["CheckerIpRanges"]["member"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetCheckerIpRangesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetDNSSECCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetDNSSECCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    KeySigningKeys: undefined,
                    Status: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.KeySigningKeys === "") {
                    contents.KeySigningKeys = [];
                }
                if (data["KeySigningKeys"] !== undefined && data["KeySigningKeys"]["member"] !== undefined) {
                    contents.KeySigningKeys = deserializeAws_restXmlKeySigningKeys(__getArrayIfSingleItem(data["KeySigningKeys"]["member"]), context);
                }
                if (data["Status"] !== undefined) {
                    contents.Status = deserializeAws_restXmlDNSSECStatus(data["Status"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetDNSSECCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidArgument": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidArgument": return [3 /*break*/, 2];
                    case "NoSuchHostedZone": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetGeoLocationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetGeoLocationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    GeoLocationDetails: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["GeoLocationDetails"] !== undefined) {
                    contents.GeoLocationDetails = deserializeAws_restXmlGeoLocationDetails(data["GeoLocationDetails"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetGeoLocationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchGeoLocation": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchGeoLocation": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchGeoLocationResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetHealthCheckCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetHealthCheckCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HealthCheck: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["HealthCheck"] !== undefined) {
                    contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetHealthCheckCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "IncompatibleVersion": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#IncompatibleVersion": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "NoSuchHealthCheck": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchHealthCheck": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlIncompatibleVersionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetHealthCheckCountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetHealthCheckCountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HealthCheckCount: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["HealthCheckCount"] !== undefined) {
                    contents.HealthCheckCount = parseInt(data["HealthCheckCount"]);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetHealthCheckCountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetHealthCheckLastFailureReasonCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HealthCheckObservations: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.HealthCheckObservations === "") {
                    contents.HealthCheckObservations = [];
                }
                if (data["HealthCheckObservations"] !== undefined &&
                    data["HealthCheckObservations"]["HealthCheckObservation"] !== undefined) {
                    contents.HealthCheckObservations = deserializeAws_restXmlHealthCheckObservations(__getArrayIfSingleItem(data["HealthCheckObservations"]["HealthCheckObservation"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetHealthCheckLastFailureReasonCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchHealthCheck": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchHealthCheck": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetHealthCheckStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetHealthCheckStatusCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HealthCheckObservations: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.HealthCheckObservations === "") {
                    contents.HealthCheckObservations = [];
                }
                if (data["HealthCheckObservations"] !== undefined &&
                    data["HealthCheckObservations"]["HealthCheckObservation"] !== undefined) {
                    contents.HealthCheckObservations = deserializeAws_restXmlHealthCheckObservations(__getArrayIfSingleItem(data["HealthCheckObservations"]["HealthCheckObservation"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetHealthCheckStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchHealthCheck": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchHealthCheck": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetHostedZoneCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetHostedZoneCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DelegationSet: undefined,
                    HostedZone: undefined,
                    VPCs: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                    contents.VPCs = deserializeAws_restXmlVPCs(__getArrayIfSingleItem(data["VPCs"]["VPC"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetHostedZoneCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchHostedZone": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetHostedZoneCountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetHostedZoneCountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HostedZoneCount: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["HostedZoneCount"] !== undefined) {
                    contents.HostedZoneCount = parseInt(data["HostedZoneCount"]);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetHostedZoneCountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetHostedZoneLimitCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetHostedZoneLimitCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Count: undefined,
                    Limit: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["Count"] !== undefined) {
                    contents.Count = parseInt(data["Count"]);
                }
                if (data["Limit"] !== undefined) {
                    contents.Limit = deserializeAws_restXmlHostedZoneLimit(data["Limit"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetHostedZoneLimitCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "HostedZoneNotPrivate": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#HostedZoneNotPrivate": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "NoSuchHostedZone": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlHostedZoneNotPrivateResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetQueryLoggingConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetQueryLoggingConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    QueryLoggingConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["QueryLoggingConfig"] !== undefined) {
                    contents.QueryLoggingConfig = deserializeAws_restXmlQueryLoggingConfig(data["QueryLoggingConfig"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetQueryLoggingConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchQueryLoggingConfig": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchQueryLoggingConfig": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchQueryLoggingConfigResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetReusableDelegationSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetReusableDelegationSetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DelegationSet: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["DelegationSet"] !== undefined) {
                    contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetReusableDelegationSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DelegationSetNotReusable": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#DelegationSetNotReusable": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "NoSuchDelegationSet": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchDelegationSet": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetReusableDelegationSetLimitCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetReusableDelegationSetLimitCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Count: undefined,
                    Limit: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["Count"] !== undefined) {
                    contents.Count = parseInt(data["Count"]);
                }
                if (data["Limit"] !== undefined) {
                    contents.Limit = deserializeAws_restXmlReusableDelegationSetLimit(data["Limit"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetReusableDelegationSetLimitCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchDelegationSet": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchDelegationSet": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetTrafficPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetTrafficPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    TrafficPolicy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["TrafficPolicy"] !== undefined) {
                    contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetTrafficPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchTrafficPolicy": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchTrafficPolicy": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetTrafficPolicyInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetTrafficPolicyInstanceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    TrafficPolicyInstance: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["TrafficPolicyInstance"] !== undefined) {
                    contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(data["TrafficPolicyInstance"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetTrafficPolicyInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchTrafficPolicyInstance": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetTrafficPolicyInstanceCountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    TrafficPolicyInstanceCount: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["TrafficPolicyInstanceCount"] !== undefined) {
                    contents.TrafficPolicyInstanceCount = parseInt(data["TrafficPolicyInstanceCount"]);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetTrafficPolicyInstanceCountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListGeoLocationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListGeoLocationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    GeoLocationDetailsList: undefined,
                    IsTruncated: undefined,
                    MaxItems: undefined,
                    NextContinentCode: undefined,
                    NextCountryCode: undefined,
                    NextSubdivisionCode: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.GeoLocationDetailsList === "") {
                    contents.GeoLocationDetailsList = [];
                }
                if (data["GeoLocationDetailsList"] !== undefined &&
                    data["GeoLocationDetailsList"]["GeoLocationDetails"] !== undefined) {
                    contents.GeoLocationDetailsList = deserializeAws_restXmlGeoLocationDetailsList(__getArrayIfSingleItem(data["GeoLocationDetailsList"]["GeoLocationDetails"]), context);
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListGeoLocationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListHealthChecksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListHealthChecksCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HealthChecks: undefined,
                    IsTruncated: undefined,
                    Marker: undefined,
                    MaxItems: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.HealthChecks === "") {
                    contents.HealthChecks = [];
                }
                if (data["HealthChecks"] !== undefined && data["HealthChecks"]["HealthCheck"] !== undefined) {
                    contents.HealthChecks = deserializeAws_restXmlHealthChecks(__getArrayIfSingleItem(data["HealthChecks"]["HealthCheck"]), context);
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListHealthChecksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "IncompatibleVersion": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#IncompatibleVersion": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlIncompatibleVersionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListHostedZonesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListHostedZonesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HostedZones: undefined,
                    IsTruncated: undefined,
                    Marker: undefined,
                    MaxItems: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.HostedZones === "") {
                    contents.HostedZones = [];
                }
                if (data["HostedZones"] !== undefined && data["HostedZones"]["HostedZone"] !== undefined) {
                    contents.HostedZones = deserializeAws_restXmlHostedZones(__getArrayIfSingleItem(data["HostedZones"]["HostedZone"]), context);
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListHostedZonesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DelegationSetNotReusable": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#DelegationSetNotReusable": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "NoSuchDelegationSet": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchDelegationSet": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListHostedZonesByNameCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListHostedZonesByNameCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DNSName: undefined,
                    HostedZoneId: undefined,
                    HostedZones: undefined,
                    IsTruncated: undefined,
                    MaxItems: undefined,
                    NextDNSName: undefined,
                    NextHostedZoneId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                    contents.HostedZones = deserializeAws_restXmlHostedZones(__getArrayIfSingleItem(data["HostedZones"]["HostedZone"]), context);
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListHostedZonesByNameCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidDomainName": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidDomainName": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListHostedZonesByVPCCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListHostedZonesByVPCCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HostedZoneSummaries: undefined,
                    MaxItems: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.HostedZoneSummaries === "") {
                    contents.HostedZoneSummaries = [];
                }
                if (data["HostedZoneSummaries"] !== undefined && data["HostedZoneSummaries"]["HostedZoneSummary"] !== undefined) {
                    contents.HostedZoneSummaries = deserializeAws_restXmlHostedZoneSummaries(__getArrayIfSingleItem(data["HostedZoneSummaries"]["HostedZoneSummary"]), context);
                }
                if (data["MaxItems"] !== undefined) {
                    contents.MaxItems = parseInt(data["MaxItems"]);
                }
                if (data["NextToken"] !== undefined) {
                    contents.NextToken = data["NextToken"];
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListHostedZonesByVPCCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "InvalidPaginationToken": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidPaginationToken": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListQueryLoggingConfigsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListQueryLoggingConfigsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    QueryLoggingConfigs: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["NextToken"] !== undefined) {
                    contents.NextToken = data["NextToken"];
                }
                if (data.QueryLoggingConfigs === "") {
                    contents.QueryLoggingConfigs = [];
                }
                if (data["QueryLoggingConfigs"] !== undefined && data["QueryLoggingConfigs"]["QueryLoggingConfig"] !== undefined) {
                    contents.QueryLoggingConfigs = deserializeAws_restXmlQueryLoggingConfigs(__getArrayIfSingleItem(data["QueryLoggingConfigs"]["QueryLoggingConfig"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListQueryLoggingConfigsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "InvalidPaginationToken": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidPaginationToken": return [3 /*break*/, 4];
                    case "NoSuchHostedZone": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListResourceRecordSetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListResourceRecordSetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    IsTruncated: undefined,
                    MaxItems: undefined,
                    NextRecordIdentifier: undefined,
                    NextRecordName: undefined,
                    NextRecordType: undefined,
                    ResourceRecordSets: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                    contents.ResourceRecordSets = deserializeAws_restXmlResourceRecordSets(__getArrayIfSingleItem(data["ResourceRecordSets"]["ResourceRecordSet"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListResourceRecordSetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchHostedZone": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListReusableDelegationSetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListReusableDelegationSetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DelegationSets: undefined,
                    IsTruncated: undefined,
                    Marker: undefined,
                    MaxItems: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DelegationSets === "") {
                    contents.DelegationSets = [];
                }
                if (data["DelegationSets"] !== undefined && data["DelegationSets"]["DelegationSet"] !== undefined) {
                    contents.DelegationSets = deserializeAws_restXmlDelegationSets(__getArrayIfSingleItem(data["DelegationSets"]["DelegationSet"]), context);
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListReusableDelegationSetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListTagsForResourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ResourceTagSet: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ResourceTagSet"] !== undefined) {
                    contents.ResourceTagSet = deserializeAws_restXmlResourceTagSet(data["ResourceTagSet"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchHealthCheck": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchHealthCheck": return [3 /*break*/, 4];
                    case "NoSuchHostedZone": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 6];
                    case "PriorRequestNotComplete": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#PriorRequestNotComplete": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListTagsForResourcesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListTagsForResourcesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ResourceTagSets: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ResourceTagSets === "") {
                    contents.ResourceTagSets = [];
                }
                if (data["ResourceTagSets"] !== undefined && data["ResourceTagSets"]["ResourceTagSet"] !== undefined) {
                    contents.ResourceTagSets = deserializeAws_restXmlResourceTagSetList(__getArrayIfSingleItem(data["ResourceTagSets"]["ResourceTagSet"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListTagsForResourcesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchHealthCheck": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchHealthCheck": return [3 /*break*/, 4];
                    case "NoSuchHostedZone": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 6];
                    case "PriorRequestNotComplete": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#PriorRequestNotComplete": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListTrafficPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListTrafficPoliciesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    IsTruncated: undefined,
                    MaxItems: undefined,
                    TrafficPolicyIdMarker: undefined,
                    TrafficPolicySummaries: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                    contents.TrafficPolicySummaries = deserializeAws_restXmlTrafficPolicySummaries(__getArrayIfSingleItem(data["TrafficPolicySummaries"]["TrafficPolicySummary"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListTrafficPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListTrafficPolicyInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListTrafficPolicyInstancesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HostedZoneIdMarker: undefined,
                    IsTruncated: undefined,
                    MaxItems: undefined,
                    TrafficPolicyInstanceNameMarker: undefined,
                    TrafficPolicyInstanceTypeMarker: undefined,
                    TrafficPolicyInstances: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                    contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(__getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListTrafficPolicyInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchTrafficPolicyInstance": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    IsTruncated: undefined,
                    MaxItems: undefined,
                    TrafficPolicyInstanceNameMarker: undefined,
                    TrafficPolicyInstanceTypeMarker: undefined,
                    TrafficPolicyInstances: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                    contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(__getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchHostedZone": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 4];
                    case "NoSuchTrafficPolicyInstance": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HostedZoneIdMarker: undefined,
                    IsTruncated: undefined,
                    MaxItems: undefined,
                    TrafficPolicyInstanceNameMarker: undefined,
                    TrafficPolicyInstanceTypeMarker: undefined,
                    TrafficPolicyInstances: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                    contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(__getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchTrafficPolicy": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchTrafficPolicy": return [3 /*break*/, 4];
                    case "NoSuchTrafficPolicyInstance": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListTrafficPolicyVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListTrafficPolicyVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    IsTruncated: undefined,
                    MaxItems: undefined,
                    TrafficPolicies: undefined,
                    TrafficPolicyVersionMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                    contents.TrafficPolicies = deserializeAws_restXmlTrafficPolicies(__getArrayIfSingleItem(data["TrafficPolicies"]["TrafficPolicy"]), context);
                }
                if (data["TrafficPolicyVersionMarker"] !== undefined) {
                    contents.TrafficPolicyVersionMarker = data["TrafficPolicyVersionMarker"];
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListTrafficPolicyVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchTrafficPolicy": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchTrafficPolicy": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlListVPCAssociationAuthorizationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListVPCAssociationAuthorizationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HostedZoneId: undefined,
                    NextToken: undefined,
                    VPCs: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                    contents.VPCs = deserializeAws_restXmlVPCs(__getArrayIfSingleItem(data["VPCs"]["VPC"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListVPCAssociationAuthorizationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "InvalidPaginationToken": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidPaginationToken": return [3 /*break*/, 4];
                    case "NoSuchHostedZone": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlTestDNSAnswerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlTestDNSAnswerCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Nameserver: undefined,
                    Protocol: undefined,
                    RecordData: undefined,
                    RecordName: undefined,
                    RecordType: undefined,
                    ResponseCode: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                    contents.RecordData = deserializeAws_restXmlRecordData(__getArrayIfSingleItem(data["RecordData"]["RecordDataEntry"]), context);
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlTestDNSAnswerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchHostedZone": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlUpdateHealthCheckCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlUpdateHealthCheckCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HealthCheck: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["HealthCheck"] !== undefined) {
                    contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlUpdateHealthCheckCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "HealthCheckVersionMismatch": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#HealthCheckVersionMismatch": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "NoSuchHealthCheck": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchHealthCheck": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlHealthCheckVersionMismatchResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlUpdateHostedZoneCommentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlUpdateHostedZoneCommentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HostedZone: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["HostedZone"] !== undefined) {
                    contents.HostedZone = deserializeAws_restXmlHostedZone(data["HostedZone"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlUpdateHostedZoneCommentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInput": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 2];
                    case "NoSuchHostedZone": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#NoSuchHostedZone": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlUpdateTrafficPolicyCommentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlUpdateTrafficPolicyCommentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    TrafficPolicy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["TrafficPolicy"] !== undefined) {
                    contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlUpdateTrafficPolicyCommentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModification": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConcurrentModification": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "NoSuchTrafficPolicy": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchTrafficPolicy": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlUpdateTrafficPolicyInstanceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    TrafficPolicyInstance: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["TrafficPolicyInstance"] !== undefined) {
                    contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(data["TrafficPolicyInstance"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlUpdateTrafficPolicyInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictingTypes": return [3 /*break*/, 2];
                    case "com.amazonaws.route53#ConflictingTypes": return [3 /*break*/, 2];
                    case "InvalidInput": return [3 /*break*/, 4];
                    case "com.amazonaws.route53#InvalidInput": return [3 /*break*/, 4];
                    case "NoSuchTrafficPolicy": return [3 /*break*/, 6];
                    case "com.amazonaws.route53#NoSuchTrafficPolicy": return [3 /*break*/, 6];
                    case "NoSuchTrafficPolicyInstance": return [3 /*break*/, 8];
                    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance": return [3 /*break*/, 8];
                    case "PriorRequestNotComplete": return [3 /*break*/, 10];
                    case "com.amazonaws.route53#PriorRequestNotComplete": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlConflictingTypesResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restXmlConcurrentModificationResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ConcurrentModification",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlConflictingDomainExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ConflictingDomainExists",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlConflictingTypesResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ConflictingTypes",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlDelegationSetAlreadyCreatedResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DelegationSetAlreadyCreated",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlDelegationSetAlreadyReusableResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DelegationSetAlreadyReusable",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlDelegationSetInUseResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DelegationSetInUse",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlDelegationSetNotAvailableResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DelegationSetNotAvailable",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlDelegationSetNotReusableResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DelegationSetNotReusable",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlDNSSECNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DNSSECNotFound",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlHealthCheckAlreadyExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "HealthCheckAlreadyExists",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlHealthCheckInUseResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "HealthCheckInUse",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlHealthCheckVersionMismatchResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "HealthCheckVersionMismatch",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlHostedZoneAlreadyExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "HostedZoneAlreadyExists",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlHostedZoneNotEmptyResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "HostedZoneNotEmpty",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlHostedZoneNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "HostedZoneNotFound",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlHostedZoneNotPrivateResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "HostedZoneNotPrivate",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlHostedZonePartiallyDelegatedResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "HostedZonePartiallyDelegated",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlIncompatibleVersionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "IncompatibleVersion",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlInsufficientCloudWatchLogsResourcePolicyResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InsufficientCloudWatchLogsResourcePolicy",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlInvalidArgumentResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidArgument",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlInvalidChangeBatchResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidChangeBatch",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
            messages: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        if (data.messages === "") {
            contents.messages = [];
        }
        if (data["messages"] !== undefined && data["messages"]["Message"] !== undefined) {
            contents.messages = deserializeAws_restXmlErrorMessages(__getArrayIfSingleItem(data["messages"]["Message"]), context);
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlInvalidDomainNameResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidDomainName",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlInvalidInputResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidInput",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlInvalidKeySigningKeyNameResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidKeySigningKeyName",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlInvalidKeySigningKeyStatusResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidKeySigningKeyStatus",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlInvalidKMSArnResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidKMSArn",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlInvalidPaginationTokenResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidPaginationToken",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlInvalidSigningStatusResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidSigningStatus",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidTrafficPolicyDocument",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlInvalidVPCIdResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidVPCId",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlKeySigningKeyAlreadyExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "KeySigningKeyAlreadyExists",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlKeySigningKeyInParentDSRecordResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "KeySigningKeyInParentDSRecord",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlKeySigningKeyInUseResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "KeySigningKeyInUse",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlKeySigningKeyWithActiveStatusNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "KeySigningKeyWithActiveStatusNotFound",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlLastVPCAssociationResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "LastVPCAssociation",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlLimitsExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "LimitsExceeded",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlNoSuchChangeResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoSuchChange",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlNoSuchCloudWatchLogsLogGroupResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoSuchCloudWatchLogsLogGroup",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlNoSuchDelegationSetResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoSuchDelegationSet",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlNoSuchGeoLocationResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoSuchGeoLocation",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlNoSuchHealthCheckResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoSuchHealthCheck",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlNoSuchHostedZoneResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoSuchHostedZone",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlNoSuchKeySigningKeyResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoSuchKeySigningKey",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlNoSuchQueryLoggingConfigResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoSuchQueryLoggingConfig",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlNoSuchTrafficPolicyResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoSuchTrafficPolicy",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoSuchTrafficPolicyInstance",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlNotAuthorizedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NotAuthorizedException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlPriorRequestNotCompleteResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "PriorRequestNotComplete",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlPublicZoneVPCAssociationResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "PublicZoneVPCAssociation",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlQueryLoggingConfigAlreadyExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "QueryLoggingConfigAlreadyExists",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ThrottlingException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlTooManyHealthChecksResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyHealthChecks",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlTooManyHostedZonesResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyHostedZones",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlTooManyKeySigningKeysResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyKeySigningKeys",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlTooManyTrafficPoliciesResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyTrafficPolicies",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlTooManyTrafficPolicyInstancesResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyTrafficPolicyInstances",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlTooManyTrafficPolicyVersionsForCurrentPolicyResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyTrafficPolicyVersionsForCurrentPolicy",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlTooManyVPCAssociationAuthorizationsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyVPCAssociationAuthorizations",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlTrafficPolicyAlreadyExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TrafficPolicyAlreadyExists",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlTrafficPolicyInstanceAlreadyExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TrafficPolicyInstanceAlreadyExists",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlTrafficPolicyInUseResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TrafficPolicyInUse",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlVPCAssociationAuthorizationNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "VPCAssociationAuthorizationNotFound",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlVPCAssociationNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "VPCAssociationNotFound",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body.Error;
        if (data["message"] !== undefined) {
            contents.message = data["message"];
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restXmlAlarmIdentifier = function (input, context) {
    var bodyNode = new __XmlNode("AlarmIdentifier");
    if (input.Region !== undefined && input.Region !== null) {
        var node = new __XmlNode("CloudWatchRegion").addChildNode(new __XmlText(input.Region)).withName("Region");
        bodyNode.addChildNode(node);
    }
    if (input.Name !== undefined && input.Name !== null) {
        var node = new __XmlNode("AlarmName").addChildNode(new __XmlText(input.Name)).withName("Name");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlAliasTarget = function (input, context) {
    var bodyNode = new __XmlNode("AliasTarget");
    if (input.HostedZoneId !== undefined && input.HostedZoneId !== null) {
        var node = new __XmlNode("ResourceId").addChildNode(new __XmlText(input.HostedZoneId)).withName("HostedZoneId");
        bodyNode.addChildNode(node);
    }
    if (input.DNSName !== undefined && input.DNSName !== null) {
        var node = new __XmlNode("DNSName").addChildNode(new __XmlText(input.DNSName)).withName("DNSName");
        bodyNode.addChildNode(node);
    }
    if (input.EvaluateTargetHealth !== undefined && input.EvaluateTargetHealth !== null) {
        var node = new __XmlNode("AliasHealthEnabled")
            .addChildNode(new __XmlText(String(input.EvaluateTargetHealth)))
            .withName("EvaluateTargetHealth");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlChange = function (input, context) {
    var bodyNode = new __XmlNode("Change");
    if (input.Action !== undefined && input.Action !== null) {
        var node = new __XmlNode("ChangeAction").addChildNode(new __XmlText(input.Action)).withName("Action");
        bodyNode.addChildNode(node);
    }
    if (input.ResourceRecordSet !== undefined && input.ResourceRecordSet !== null) {
        var node = serializeAws_restXmlResourceRecordSet(input.ResourceRecordSet, context).withName("ResourceRecordSet");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlChangeBatch = function (input, context) {
    var bodyNode = new __XmlNode("ChangeBatch");
    if (input.Comment !== undefined && input.Comment !== null) {
        var node = new __XmlNode("ResourceDescription").addChildNode(new __XmlText(input.Comment)).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.Changes !== undefined && input.Changes !== null) {
        var nodes = serializeAws_restXmlChanges(input.Changes, context);
        var containerNode_7 = new __XmlNode("Changes");
        nodes.map(function (node) {
            containerNode_7.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_7);
    }
    return bodyNode;
};
var serializeAws_restXmlChanges = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = serializeAws_restXmlChange(entry, context);
        return node.withName("Change");
    });
};
var serializeAws_restXmlChildHealthCheckList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = new __XmlNode("HealthCheckId").addChildNode(new __XmlText(entry));
        return node.withName("ChildHealthCheck");
    });
};
var serializeAws_restXmlGeoLocation = function (input, context) {
    var bodyNode = new __XmlNode("GeoLocation");
    if (input.ContinentCode !== undefined && input.ContinentCode !== null) {
        var node = new __XmlNode("GeoLocationContinentCode")
            .addChildNode(new __XmlText(input.ContinentCode))
            .withName("ContinentCode");
        bodyNode.addChildNode(node);
    }
    if (input.CountryCode !== undefined && input.CountryCode !== null) {
        var node = new __XmlNode("GeoLocationCountryCode")
            .addChildNode(new __XmlText(input.CountryCode))
            .withName("CountryCode");
        bodyNode.addChildNode(node);
    }
    if (input.SubdivisionCode !== undefined && input.SubdivisionCode !== null) {
        var node = new __XmlNode("GeoLocationSubdivisionCode")
            .addChildNode(new __XmlText(input.SubdivisionCode))
            .withName("SubdivisionCode");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlHealthCheckConfig = function (input, context) {
    var bodyNode = new __XmlNode("HealthCheckConfig");
    if (input.IPAddress !== undefined && input.IPAddress !== null) {
        var node = new __XmlNode("IPAddress").addChildNode(new __XmlText(input.IPAddress)).withName("IPAddress");
        bodyNode.addChildNode(node);
    }
    if (input.Port !== undefined && input.Port !== null) {
        var node = new __XmlNode("Port").addChildNode(new __XmlText(String(input.Port))).withName("Port");
        bodyNode.addChildNode(node);
    }
    if (input.Type !== undefined && input.Type !== null) {
        var node = new __XmlNode("HealthCheckType").addChildNode(new __XmlText(input.Type)).withName("Type");
        bodyNode.addChildNode(node);
    }
    if (input.ResourcePath !== undefined && input.ResourcePath !== null) {
        var node = new __XmlNode("ResourcePath").addChildNode(new __XmlText(input.ResourcePath)).withName("ResourcePath");
        bodyNode.addChildNode(node);
    }
    if (input.FullyQualifiedDomainName !== undefined && input.FullyQualifiedDomainName !== null) {
        var node = new __XmlNode("FullyQualifiedDomainName")
            .addChildNode(new __XmlText(input.FullyQualifiedDomainName))
            .withName("FullyQualifiedDomainName");
        bodyNode.addChildNode(node);
    }
    if (input.SearchString !== undefined && input.SearchString !== null) {
        var node = new __XmlNode("SearchString").addChildNode(new __XmlText(input.SearchString)).withName("SearchString");
        bodyNode.addChildNode(node);
    }
    if (input.RequestInterval !== undefined && input.RequestInterval !== null) {
        var node = new __XmlNode("RequestInterval")
            .addChildNode(new __XmlText(String(input.RequestInterval)))
            .withName("RequestInterval");
        bodyNode.addChildNode(node);
    }
    if (input.FailureThreshold !== undefined && input.FailureThreshold !== null) {
        var node = new __XmlNode("FailureThreshold")
            .addChildNode(new __XmlText(String(input.FailureThreshold)))
            .withName("FailureThreshold");
        bodyNode.addChildNode(node);
    }
    if (input.MeasureLatency !== undefined && input.MeasureLatency !== null) {
        var node = new __XmlNode("MeasureLatency")
            .addChildNode(new __XmlText(String(input.MeasureLatency)))
            .withName("MeasureLatency");
        bodyNode.addChildNode(node);
    }
    if (input.Inverted !== undefined && input.Inverted !== null) {
        var node = new __XmlNode("Inverted").addChildNode(new __XmlText(String(input.Inverted))).withName("Inverted");
        bodyNode.addChildNode(node);
    }
    if (input.Disabled !== undefined && input.Disabled !== null) {
        var node = new __XmlNode("Disabled").addChildNode(new __XmlText(String(input.Disabled))).withName("Disabled");
        bodyNode.addChildNode(node);
    }
    if (input.HealthThreshold !== undefined && input.HealthThreshold !== null) {
        var node = new __XmlNode("HealthThreshold")
            .addChildNode(new __XmlText(String(input.HealthThreshold)))
            .withName("HealthThreshold");
        bodyNode.addChildNode(node);
    }
    if (input.ChildHealthChecks !== undefined && input.ChildHealthChecks !== null) {
        var nodes = serializeAws_restXmlChildHealthCheckList(input.ChildHealthChecks, context);
        var containerNode_8 = new __XmlNode("ChildHealthChecks");
        nodes.map(function (node) {
            containerNode_8.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_8);
    }
    if (input.EnableSNI !== undefined && input.EnableSNI !== null) {
        var node = new __XmlNode("EnableSNI").addChildNode(new __XmlText(String(input.EnableSNI))).withName("EnableSNI");
        bodyNode.addChildNode(node);
    }
    if (input.Regions !== undefined && input.Regions !== null) {
        var nodes = serializeAws_restXmlHealthCheckRegionList(input.Regions, context);
        var containerNode_9 = new __XmlNode("Regions");
        nodes.map(function (node) {
            containerNode_9.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_9);
    }
    if (input.AlarmIdentifier !== undefined && input.AlarmIdentifier !== null) {
        var node = serializeAws_restXmlAlarmIdentifier(input.AlarmIdentifier, context).withName("AlarmIdentifier");
        bodyNode.addChildNode(node);
    }
    if (input.InsufficientDataHealthStatus !== undefined && input.InsufficientDataHealthStatus !== null) {
        var node = new __XmlNode("InsufficientDataHealthStatus")
            .addChildNode(new __XmlText(input.InsufficientDataHealthStatus))
            .withName("InsufficientDataHealthStatus");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlHealthCheckRegionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = new __XmlNode("HealthCheckRegion").addChildNode(new __XmlText(entry));
        return node.withName("Region");
    });
};
var serializeAws_restXmlHostedZoneConfig = function (input, context) {
    var bodyNode = new __XmlNode("HostedZoneConfig");
    if (input.Comment !== undefined && input.Comment !== null) {
        var node = new __XmlNode("ResourceDescription").addChildNode(new __XmlText(input.Comment)).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.PrivateZone !== undefined && input.PrivateZone !== null) {
        var node = new __XmlNode("IsPrivateZone")
            .addChildNode(new __XmlText(String(input.PrivateZone)))
            .withName("PrivateZone");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlResettableElementNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = new __XmlNode("ResettableElementName").addChildNode(new __XmlText(entry));
        return node.withName("ResettableElementName");
    });
};
var serializeAws_restXmlResourceRecord = function (input, context) {
    var bodyNode = new __XmlNode("ResourceRecord");
    if (input.Value !== undefined && input.Value !== null) {
        var node = new __XmlNode("RData").addChildNode(new __XmlText(input.Value)).withName("Value");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlResourceRecords = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = serializeAws_restXmlResourceRecord(entry, context);
        return node.withName("ResourceRecord");
    });
};
var serializeAws_restXmlResourceRecordSet = function (input, context) {
    var bodyNode = new __XmlNode("ResourceRecordSet");
    if (input.Name !== undefined && input.Name !== null) {
        var node = new __XmlNode("DNSName").addChildNode(new __XmlText(input.Name)).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.Type !== undefined && input.Type !== null) {
        var node = new __XmlNode("RRType").addChildNode(new __XmlText(input.Type)).withName("Type");
        bodyNode.addChildNode(node);
    }
    if (input.SetIdentifier !== undefined && input.SetIdentifier !== null) {
        var node = new __XmlNode("ResourceRecordSetIdentifier")
            .addChildNode(new __XmlText(input.SetIdentifier))
            .withName("SetIdentifier");
        bodyNode.addChildNode(node);
    }
    if (input.Weight !== undefined && input.Weight !== null) {
        var node = new __XmlNode("ResourceRecordSetWeight")
            .addChildNode(new __XmlText(String(input.Weight)))
            .withName("Weight");
        bodyNode.addChildNode(node);
    }
    if (input.Region !== undefined && input.Region !== null) {
        var node = new __XmlNode("ResourceRecordSetRegion").addChildNode(new __XmlText(input.Region)).withName("Region");
        bodyNode.addChildNode(node);
    }
    if (input.GeoLocation !== undefined && input.GeoLocation !== null) {
        var node = serializeAws_restXmlGeoLocation(input.GeoLocation, context).withName("GeoLocation");
        bodyNode.addChildNode(node);
    }
    if (input.Failover !== undefined && input.Failover !== null) {
        var node = new __XmlNode("ResourceRecordSetFailover")
            .addChildNode(new __XmlText(input.Failover))
            .withName("Failover");
        bodyNode.addChildNode(node);
    }
    if (input.MultiValueAnswer !== undefined && input.MultiValueAnswer !== null) {
        var node = new __XmlNode("ResourceRecordSetMultiValueAnswer")
            .addChildNode(new __XmlText(String(input.MultiValueAnswer)))
            .withName("MultiValueAnswer");
        bodyNode.addChildNode(node);
    }
    if (input.TTL !== undefined && input.TTL !== null) {
        var node = new __XmlNode("TTL").addChildNode(new __XmlText(String(input.TTL))).withName("TTL");
        bodyNode.addChildNode(node);
    }
    if (input.ResourceRecords !== undefined && input.ResourceRecords !== null) {
        var nodes = serializeAws_restXmlResourceRecords(input.ResourceRecords, context);
        var containerNode_10 = new __XmlNode("ResourceRecords");
        nodes.map(function (node) {
            containerNode_10.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_10);
    }
    if (input.AliasTarget !== undefined && input.AliasTarget !== null) {
        var node = serializeAws_restXmlAliasTarget(input.AliasTarget, context).withName("AliasTarget");
        bodyNode.addChildNode(node);
    }
    if (input.HealthCheckId !== undefined && input.HealthCheckId !== null) {
        var node = new __XmlNode("HealthCheckId")
            .addChildNode(new __XmlText(input.HealthCheckId))
            .withName("HealthCheckId");
        bodyNode.addChildNode(node);
    }
    if (input.TrafficPolicyInstanceId !== undefined && input.TrafficPolicyInstanceId !== null) {
        var node = new __XmlNode("TrafficPolicyInstanceId")
            .addChildNode(new __XmlText(input.TrafficPolicyInstanceId))
            .withName("TrafficPolicyInstanceId");
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
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = new __XmlNode("TagKey").addChildNode(new __XmlText(entry));
        return node.withName("Key");
    });
};
var serializeAws_restXmlTagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = serializeAws_restXmlTag(entry, context);
        return node.withName("Tag");
    });
};
var serializeAws_restXmlTagResourceIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = new __XmlNode("TagResourceId").addChildNode(new __XmlText(entry));
        return node.withName("ResourceId");
    });
};
var serializeAws_restXmlVPC = function (input, context) {
    var bodyNode = new __XmlNode("VPC");
    if (input.VPCRegion !== undefined && input.VPCRegion !== null) {
        var node = new __XmlNode("VPCRegion").addChildNode(new __XmlText(input.VPCRegion)).withName("VPCRegion");
        bodyNode.addChildNode(node);
    }
    if (input.VPCId !== undefined && input.VPCId !== null) {
        var node = new __XmlNode("VPCId").addChildNode(new __XmlText(input.VPCId)).withName("VPCId");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var deserializeAws_restXmlAccountLimit = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlAlarmIdentifier = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlAliasTarget = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlChangeInfo = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlCheckerIpRanges = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restXmlChildHealthCheckList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restXmlCloudWatchAlarmConfiguration = function (output, context) {
    var contents = {
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
        contents.Dimensions = deserializeAws_restXmlDimensionList(__getArrayIfSingleItem(output["Dimensions"]["Dimension"]), context);
    }
    return contents;
};
var deserializeAws_restXmlDelegationSet = function (output, context) {
    var contents = {
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
        contents.NameServers = deserializeAws_restXmlDelegationSetNameServers(__getArrayIfSingleItem(output["NameServers"]["NameServer"]), context);
    }
    return contents;
};
var deserializeAws_restXmlDelegationSetNameServers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restXmlDelegationSets = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlDelegationSet(entry, context);
    });
};
var deserializeAws_restXmlDimension = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlDimensionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlDimension(entry, context);
    });
};
var deserializeAws_restXmlDNSSECStatus = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlErrorMessages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restXmlGeoLocation = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlGeoLocationDetails = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlGeoLocationDetailsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlGeoLocationDetails(entry, context);
    });
};
var deserializeAws_restXmlHealthCheck = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlHealthCheckConfig = function (output, context) {
    var contents = {
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
        contents.ChildHealthChecks = deserializeAws_restXmlChildHealthCheckList(__getArrayIfSingleItem(output["ChildHealthChecks"]["ChildHealthCheck"]), context);
    }
    if (output["EnableSNI"] !== undefined) {
        contents.EnableSNI = output["EnableSNI"] == "true";
    }
    if (output.Regions === "") {
        contents.Regions = [];
    }
    if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
        contents.Regions = deserializeAws_restXmlHealthCheckRegionList(__getArrayIfSingleItem(output["Regions"]["Region"]), context);
    }
    if (output["AlarmIdentifier"] !== undefined) {
        contents.AlarmIdentifier = deserializeAws_restXmlAlarmIdentifier(output["AlarmIdentifier"], context);
    }
    if (output["InsufficientDataHealthStatus"] !== undefined) {
        contents.InsufficientDataHealthStatus = output["InsufficientDataHealthStatus"];
    }
    return contents;
};
var deserializeAws_restXmlHealthCheckObservation = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlHealthCheckObservations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlHealthCheckObservation(entry, context);
    });
};
var deserializeAws_restXmlHealthCheckRegionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restXmlHealthChecks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlHealthCheck(entry, context);
    });
};
var deserializeAws_restXmlHostedZone = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlHostedZoneConfig = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlHostedZoneLimit = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlHostedZoneOwner = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlHostedZones = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlHostedZone(entry, context);
    });
};
var deserializeAws_restXmlHostedZoneSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlHostedZoneSummary(entry, context);
    });
};
var deserializeAws_restXmlHostedZoneSummary = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlKeySigningKey = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlKeySigningKeys = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlKeySigningKey(entry, context);
    });
};
var deserializeAws_restXmlLinkedService = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlQueryLoggingConfig = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlQueryLoggingConfigs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlQueryLoggingConfig(entry, context);
    });
};
var deserializeAws_restXmlRecordData = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restXmlResourceRecord = function (output, context) {
    var contents = {
        Value: undefined,
    };
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
var deserializeAws_restXmlResourceRecords = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlResourceRecord(entry, context);
    });
};
var deserializeAws_restXmlResourceRecordSet = function (output, context) {
    var contents = {
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
        contents.ResourceRecords = deserializeAws_restXmlResourceRecords(__getArrayIfSingleItem(output["ResourceRecords"]["ResourceRecord"]), context);
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
var deserializeAws_restXmlResourceRecordSets = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlResourceRecordSet(entry, context);
    });
};
var deserializeAws_restXmlResourceTagSet = function (output, context) {
    var contents = {
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
        contents.Tags = deserializeAws_restXmlTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
var deserializeAws_restXmlResourceTagSetList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlResourceTagSet(entry, context);
    });
};
var deserializeAws_restXmlReusableDelegationSetLimit = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlStatusReport = function (output, context) {
    var contents = {
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
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlTag(entry, context);
    });
};
var deserializeAws_restXmlTrafficPolicies = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlTrafficPolicy(entry, context);
    });
};
var deserializeAws_restXmlTrafficPolicy = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlTrafficPolicyInstance = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlTrafficPolicyInstances = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlTrafficPolicyInstance(entry, context);
    });
};
var deserializeAws_restXmlTrafficPolicySummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlTrafficPolicySummary(entry, context);
    });
};
var deserializeAws_restXmlTrafficPolicySummary = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlVPC = function (output, context) {
    var contents = {
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
var deserializeAws_restXmlVPCs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlVPC(entry, context);
    });
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var isSerializableHeaderValue = function (value) {
    return value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            var parsedObj = xmlParse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                trimValues: false,
                tagValueProcessor: function (val, tagName) { return (val.trim() === "" ? "" : decodeHTML(val)); },
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