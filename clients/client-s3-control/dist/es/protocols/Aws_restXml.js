import { __assign, __awaiter, __generator } from "tslib";
import { ObjectLambdaContentTransformation, } from "../models/models_0";
import { HttpRequest as __HttpRequest, isValidHostname as __isValidHostname, } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_restXmlCreateAccessPointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, node, node, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspoint/{Name}";
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
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("CreateAccessPointRequest");
                bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                if (input.Bucket !== undefined) {
                    node = new __XmlNode("BucketName").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
                    bodyNode.addChildNode(node);
                }
                if (input.PublicAccessBlockConfiguration !== undefined) {
                    node = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context).withName("PublicAccessBlockConfiguration");
                    bodyNode.addChildNode(node);
                }
                if (input.VpcConfiguration !== undefined) {
                    node = serializeAws_restXmlVpcConfiguration(input.VpcConfiguration, context).withName("VpcConfiguration");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlCreateAccessPointForObjectLambdaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}";
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
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("CreateAccessPointForObjectLambdaRequest");
                bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                if (input.Configuration !== undefined) {
                    node = serializeAws_restXmlObjectLambdaConfiguration(input.Configuration, context).withName("Configuration");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlCreateBucketCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL })), (isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl })), (isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead })), (isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP })), (isSerializableHeaderValue(input.GrantWrite) && { "x-amz-grant-write": input.GrantWrite })), (isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP })), (isSerializableHeaderValue(input.ObjectLockEnabledForBucket) && {
                    "x-amz-bucket-object-lock-enabled": input.ObjectLockEnabledForBucket.toString(),
                })), (isSerializableHeaderValue(input.OutpostId) && { "x-amz-outpost-id": input.OutpostId }));
                resolvedPath = "/v20180820/bucket/{Bucket}";
                if (input.Bucket !== undefined) {
                    labelValue = input.Bucket;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    }
                    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Bucket.");
                }
                if (input.CreateBucketConfiguration !== undefined) {
                    body = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
                }
                if (input.CreateBucketConfiguration !== undefined) {
                    contents = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
                    body = '<?xml version="1.0" encoding="UTF-8"?>';
                    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                    body += contents.toString();
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlCreateJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, bodyNode, node, node, node, node, node, node, node, node, nodes, containerNode_1, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/jobs";
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("CreateJobRequest");
                bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                if (input.ClientRequestToken === undefined) {
                    input.ClientRequestToken = generateIdempotencyToken();
                }
                if (input.ClientRequestToken !== undefined) {
                    node = new __XmlNode("NonEmptyMaxLength64String")
                        .addChildNode(new __XmlText(input.ClientRequestToken))
                        .withName("ClientRequestToken");
                    bodyNode.addChildNode(node);
                }
                if (input.ConfirmationRequired !== undefined) {
                    node = new __XmlNode("ConfirmationRequired")
                        .addChildNode(new __XmlText(String(input.ConfirmationRequired)))
                        .withName("ConfirmationRequired");
                    bodyNode.addChildNode(node);
                }
                if (input.Description !== undefined) {
                    node = new __XmlNode("NonEmptyMaxLength256String")
                        .addChildNode(new __XmlText(input.Description))
                        .withName("Description");
                    bodyNode.addChildNode(node);
                }
                if (input.Manifest !== undefined) {
                    node = serializeAws_restXmlJobManifest(input.Manifest, context).withName("Manifest");
                    bodyNode.addChildNode(node);
                }
                if (input.Operation !== undefined) {
                    node = serializeAws_restXmlJobOperation(input.Operation, context).withName("Operation");
                    bodyNode.addChildNode(node);
                }
                if (input.Priority !== undefined) {
                    node = new __XmlNode("JobPriority").addChildNode(new __XmlText(String(input.Priority))).withName("Priority");
                    bodyNode.addChildNode(node);
                }
                if (input.Report !== undefined) {
                    node = serializeAws_restXmlJobReport(input.Report, context).withName("Report");
                    bodyNode.addChildNode(node);
                }
                if (input.RoleArn !== undefined) {
                    node = new __XmlNode("IAMRoleArn").addChildNode(new __XmlText(input.RoleArn)).withName("RoleArn");
                    bodyNode.addChildNode(node);
                }
                if (input.Tags !== undefined) {
                    nodes = serializeAws_restXmlS3TagSet(input.Tags, context);
                    containerNode_1 = new __XmlNode("Tags");
                    nodes.map(function (node) {
                        containerNode_1.addChildNode(node);
                    });
                    bodyNode.addChildNode(containerNode_1);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteAccessPointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspoint/{Name}";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteAccessPointForObjectLambdaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteAccessPointPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspoint/{Name}/policy";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}/policy";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteBucketCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/bucket/{Bucket}";
                if (input.Bucket !== undefined) {
                    labelValue = input.Bucket;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    }
                    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Bucket.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteBucketLifecycleConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
                if (input.Bucket !== undefined) {
                    labelValue = input.Bucket;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    }
                    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Bucket.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteBucketPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/bucket/{Bucket}/policy";
                if (input.Bucket !== undefined) {
                    labelValue = input.Bucket;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    }
                    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Bucket.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteBucketTaggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/bucket/{Bucket}/tagging";
                if (input.Bucket !== undefined) {
                    labelValue = input.Bucket;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    }
                    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Bucket.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteJobTaggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/jobs/{JobId}/tagging";
                if (input.JobId !== undefined) {
                    labelValue = input.JobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: JobId.");
                    }
                    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: JobId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeletePublicAccessBlockCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/configuration/publicAccessBlock";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteStorageLensConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/storagelens/{ConfigId}";
                if (input.ConfigId !== undefined) {
                    labelValue = input.ConfigId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ConfigId.");
                    }
                    resolvedPath = resolvedPath.replace("{ConfigId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ConfigId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/storagelens/{ConfigId}/tagging";
                if (input.ConfigId !== undefined) {
                    labelValue = input.ConfigId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ConfigId.");
                    }
                    resolvedPath = resolvedPath.replace("{ConfigId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ConfigId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlDescribeJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/jobs/{JobId}";
                if (input.JobId !== undefined) {
                    labelValue = input.JobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: JobId.");
                    }
                    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: JobId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetAccessPointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspoint/{Name}";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}/configuration";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetAccessPointForObjectLambdaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetAccessPointPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspoint/{Name}/policy";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}/policy";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetAccessPointPolicyStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspoint/{Name}/policyStatus";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}/policyStatus";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetBucketCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/bucket/{Bucket}";
                if (input.Bucket !== undefined) {
                    labelValue = input.Bucket;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    }
                    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Bucket.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetBucketLifecycleConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
                if (input.Bucket !== undefined) {
                    labelValue = input.Bucket;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    }
                    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Bucket.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetBucketPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/bucket/{Bucket}/policy";
                if (input.Bucket !== undefined) {
                    labelValue = input.Bucket;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    }
                    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Bucket.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetBucketTaggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/bucket/{Bucket}/tagging";
                if (input.Bucket !== undefined) {
                    labelValue = input.Bucket;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    }
                    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Bucket.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetJobTaggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/jobs/{JobId}/tagging";
                if (input.JobId !== undefined) {
                    labelValue = input.JobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: JobId.");
                    }
                    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: JobId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetPublicAccessBlockCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/configuration/publicAccessBlock";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetStorageLensConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/storagelens/{ConfigId}";
                if (input.ConfigId !== undefined) {
                    labelValue = input.ConfigId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ConfigId.");
                    }
                    resolvedPath = resolvedPath.replace("{ConfigId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ConfigId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlGetStorageLensConfigurationTaggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/storagelens/{ConfigId}/tagging";
                if (input.ConfigId !== undefined) {
                    labelValue = input.ConfigId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ConfigId.");
                    }
                    resolvedPath = resolvedPath.replace("{ConfigId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ConfigId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlListAccessPointsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspoint";
                query = __assign(__assign(__assign({}, (input.Bucket !== undefined && { bucket: input.Bucket })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
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
export var serializeAws_restXmlListAccessPointsForObjectLambdaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspointforobjectlambda";
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
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
export var serializeAws_restXmlListJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/jobs";
                query = __assign(__assign(__assign({}, (input.JobStatuses !== undefined && { jobStatuses: (input.JobStatuses || []).map(function (_entry) { return _entry; }) })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
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
export var serializeAws_restXmlListRegionalBucketsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId })), (isSerializableHeaderValue(input.OutpostId) && { "x-amz-outpost-id": input.OutpostId }));
                resolvedPath = "/v20180820/bucket";
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
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
export var serializeAws_restXmlListStorageLensConfigurationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/storagelens";
                query = __assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
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
export var serializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}/configuration";
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
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("PutAccessPointConfigurationForObjectLambdaRequest");
                bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                if (input.Configuration !== undefined) {
                    node = serializeAws_restXmlObjectLambdaConfiguration(input.Configuration, context).withName("Configuration");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlPutAccessPointPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspoint/{Name}/policy";
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
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("PutAccessPointPolicyRequest");
                bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                if (input.Policy !== undefined) {
                    node = new __XmlNode("Policy").addChildNode(new __XmlText(input.Policy)).withName("Policy");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}/policy";
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
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("PutAccessPointPolicyForObjectLambdaRequest");
                bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                if (input.Policy !== undefined) {
                    node = new __XmlNode("ObjectLambdaPolicy").addChildNode(new __XmlText(input.Policy)).withName("Policy");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlPutBucketLifecycleConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
                if (input.Bucket !== undefined) {
                    labelValue = input.Bucket;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    }
                    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Bucket.");
                }
                if (input.LifecycleConfiguration !== undefined) {
                    body = serializeAws_restXmlLifecycleConfiguration(input.LifecycleConfiguration, context);
                }
                if (input.LifecycleConfiguration !== undefined) {
                    contents = serializeAws_restXmlLifecycleConfiguration(input.LifecycleConfiguration, context);
                    body = '<?xml version="1.0" encoding="UTF-8"?>';
                    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                    body += contents.toString();
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlPutBucketPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId })), (isSerializableHeaderValue(input.ConfirmRemoveSelfBucketAccess) && {
                    "x-amz-confirm-remove-self-bucket-access": input.ConfirmRemoveSelfBucketAccess.toString(),
                }));
                resolvedPath = "/v20180820/bucket/{Bucket}/policy";
                if (input.Bucket !== undefined) {
                    labelValue = input.Bucket;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    }
                    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Bucket.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("PutBucketPolicyRequest");
                bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                if (input.Policy !== undefined) {
                    node = new __XmlNode("Policy").addChildNode(new __XmlText(input.Policy)).withName("Policy");
                    bodyNode.addChildNode(node);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlPutBucketTaggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/bucket/{Bucket}/tagging";
                if (input.Bucket !== undefined) {
                    labelValue = input.Bucket;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    }
                    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Bucket.");
                }
                if (input.Tagging !== undefined) {
                    body = serializeAws_restXmlTagging(input.Tagging, context);
                }
                if (input.Tagging !== undefined) {
                    contents = serializeAws_restXmlTagging(input.Tagging, context);
                    body = '<?xml version="1.0" encoding="UTF-8"?>';
                    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                    body += contents.toString();
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlPutJobTaggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, nodes, containerNode_2, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/jobs/{JobId}/tagging";
                if (input.JobId !== undefined) {
                    labelValue = input.JobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: JobId.");
                    }
                    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: JobId.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("PutJobTaggingRequest");
                bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                if (input.Tags !== undefined) {
                    nodes = serializeAws_restXmlS3TagSet(input.Tags, context);
                    containerNode_2 = new __XmlNode("Tags");
                    nodes.map(function (node) {
                        containerNode_2.addChildNode(node);
                    });
                    bodyNode.addChildNode(containerNode_2);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlPutPublicAccessBlockCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, contents, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/configuration/publicAccessBlock";
                if (input.PublicAccessBlockConfiguration !== undefined) {
                    body = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
                }
                if (input.PublicAccessBlockConfiguration !== undefined) {
                    contents = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
                    body = '<?xml version="1.0" encoding="UTF-8"?>';
                    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                    body += contents.toString();
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlPutStorageLensConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, nodes, containerNode_3, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/storagelens/{ConfigId}";
                if (input.ConfigId !== undefined) {
                    labelValue = input.ConfigId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ConfigId.");
                    }
                    resolvedPath = resolvedPath.replace("{ConfigId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ConfigId.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("PutStorageLensConfigurationRequest");
                bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                if (input.StorageLensConfiguration !== undefined) {
                    node = serializeAws_restXmlStorageLensConfiguration(input.StorageLensConfiguration, context).withName("StorageLensConfiguration");
                    bodyNode.addChildNode(node);
                }
                if (input.Tags !== undefined) {
                    nodes = serializeAws_restXmlStorageLensTags(input.Tags, context);
                    containerNode_3 = new __XmlNode("Tags");
                    nodes.map(function (node) {
                        containerNode_3.addChildNode(node);
                    });
                    bodyNode.addChildNode(containerNode_3);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlPutStorageLensConfigurationTaggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, nodes, containerNode_4, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/xml" }, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/storagelens/{ConfigId}/tagging";
                if (input.ConfigId !== undefined) {
                    labelValue = input.ConfigId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ConfigId.");
                    }
                    resolvedPath = resolvedPath.replace("{ConfigId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ConfigId.");
                }
                body = '<?xml version="1.0" encoding="UTF-8"?>';
                bodyNode = new __XmlNode("PutStorageLensConfigurationTaggingRequest");
                bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
                if (input.Tags !== undefined) {
                    nodes = serializeAws_restXmlStorageLensTags(input.Tags, context);
                    containerNode_4 = new __XmlNode("Tags");
                    nodes.map(function (node) {
                        containerNode_4.addChildNode(node);
                    });
                    bodyNode.addChildNode(containerNode_4);
                }
                body += bodyNode.toString();
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlUpdateJobPriorityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/jobs/{JobId}/priority";
                if (input.JobId !== undefined) {
                    labelValue = input.JobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: JobId.");
                    }
                    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: JobId.");
                }
                query = __assign({}, (input.Priority !== undefined && { priority: input.Priority.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restXmlUpdateJobStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }));
                resolvedPath = "/v20180820/jobs/{JobId}/status";
                if (input.JobId !== undefined) {
                    labelValue = input.JobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: JobId.");
                    }
                    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: JobId.");
                }
                query = __assign(__assign({}, (input.RequestedJobStatus !== undefined && { requestedJobStatus: input.RequestedJobStatus })), (input.StatusUpdateReason !== undefined && { statusUpdateReason: input.StatusUpdateReason }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "{AccountId}." + resolvedHostname;
                    if (input.AccountId === undefined) {
                        throw new Error("Empty value provided for input host prefix: AccountId.");
                    }
                    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restXmlCreateAccessPointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateAccessPointCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AccessPointArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["AccessPointArn"] !== undefined) {
                    contents.AccessPointArn = data["AccessPointArn"];
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateAccessPointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlCreateAccessPointForObjectLambdaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateAccessPointForObjectLambdaCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ObjectLambdaAccessPointArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["ObjectLambdaAccessPointArn"] !== undefined) {
                    contents.ObjectLambdaAccessPointArn = data["ObjectLambdaAccessPointArn"];
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateAccessPointForObjectLambdaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlCreateBucketCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateBucketCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    BucketArn: undefined,
                    Location: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.Location = output.headers["location"];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["BucketArn"] !== undefined) {
                    contents.BucketArn = data["BucketArn"];
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateBucketCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BucketAlreadyExists": return [3 /*break*/, 2];
                    case "com.amazonaws.s3control#BucketAlreadyExists": return [3 /*break*/, 2];
                    case "BucketAlreadyOwnedByYou": return [3 /*break*/, 4];
                    case "com.amazonaws.s3control#BucketAlreadyOwnedByYou": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlBucketAlreadyExistsResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlBucketAlreadyOwnedByYouResponse(parsedOutput, context)];
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
export var deserializeAws_restXmlCreateJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlCreateJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    JobId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["JobId"] !== undefined) {
                    contents.JobId = data["JobId"];
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlCreateJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.s3control#BadRequestException": return [3 /*break*/, 2];
                    case "IdempotencyException": return [3 /*break*/, 4];
                    case "com.amazonaws.s3control#IdempotencyException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.s3control#InternalServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.s3control#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlIdempotencyExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restXmlDeleteAccessPointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteAccessPointCommandError(output, context)];
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
var deserializeAws_restXmlDeleteAccessPointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommandError(output, context)];
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
var deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlDeleteAccessPointPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteAccessPointPolicyCommandError(output, context)];
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
var deserializeAws_restXmlDeleteAccessPointPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommandError(output, context)];
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
var deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlDeleteBucketCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteBucketCommandError(output, context)];
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
var deserializeAws_restXmlDeleteBucketCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommandError(output, context)];
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
var deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlDeleteBucketPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteBucketPolicyCommandError(output, context)];
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
var deserializeAws_restXmlDeleteBucketPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlDeleteBucketTaggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteBucketTaggingCommandError(output, context)];
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
var deserializeAws_restXmlDeleteBucketTaggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlDeleteJobTaggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteJobTaggingCommandError(output, context)];
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
var deserializeAws_restXmlDeleteJobTaggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.s3control#InternalServiceException": return [3 /*break*/, 2];
                    case "NotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.s3control#NotFoundException": return [3 /*break*/, 4];
                    case "TooManyRequestsException": return [3 /*break*/, 6];
                    case "com.amazonaws.s3control#TooManyRequestsException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restXmlDeletePublicAccessBlockCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeletePublicAccessBlockCommandError(output, context)];
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
var deserializeAws_restXmlDeletePublicAccessBlockCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlDeleteStorageLensConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteStorageLensConfigurationCommandError(output, context)];
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
var deserializeAws_restXmlDeleteStorageLensConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommandError(output, context)];
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
var deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlDescribeJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlDescribeJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Job: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["Job"] !== undefined) {
                    contents.Job = deserializeAws_restXmlJobDescriptor(data["Job"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlDescribeJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.s3control#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.s3control#InternalServiceException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.s3control#NotFoundException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.s3control#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restXmlGetAccessPointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetAccessPointCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Bucket: undefined,
                    CreationDate: undefined,
                    Name: undefined,
                    NetworkOrigin: undefined,
                    PublicAccessBlockConfiguration: undefined,
                    VpcConfiguration: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["Bucket"] !== undefined) {
                    contents.Bucket = data["Bucket"];
                }
                if (data["CreationDate"] !== undefined) {
                    contents.CreationDate = new Date(data["CreationDate"]);
                }
                if (data["Name"] !== undefined) {
                    contents.Name = data["Name"];
                }
                if (data["NetworkOrigin"] !== undefined) {
                    contents.NetworkOrigin = data["NetworkOrigin"];
                }
                if (data["PublicAccessBlockConfiguration"] !== undefined) {
                    contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(data["PublicAccessBlockConfiguration"], context);
                }
                if (data["VpcConfiguration"] !== undefined) {
                    contents.VpcConfiguration = deserializeAws_restXmlVpcConfiguration(data["VpcConfiguration"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetAccessPointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Configuration: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["Configuration"] !== undefined) {
                    contents.Configuration = deserializeAws_restXmlObjectLambdaConfiguration(data["Configuration"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlGetAccessPointForObjectLambdaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetAccessPointForObjectLambdaCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CreationDate: undefined,
                    Name: undefined,
                    PublicAccessBlockConfiguration: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["CreationDate"] !== undefined) {
                    contents.CreationDate = new Date(data["CreationDate"]);
                }
                if (data["Name"] !== undefined) {
                    contents.Name = data["Name"];
                }
                if (data["PublicAccessBlockConfiguration"] !== undefined) {
                    contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(data["PublicAccessBlockConfiguration"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetAccessPointForObjectLambdaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlGetAccessPointPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetAccessPointPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Policy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["Policy"] !== undefined) {
                    contents.Policy = data["Policy"];
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetAccessPointPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Policy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["Policy"] !== undefined) {
                    contents.Policy = data["Policy"];
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlGetAccessPointPolicyStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetAccessPointPolicyStatusCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    PolicyStatus: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["PolicyStatus"] !== undefined) {
                    contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data["PolicyStatus"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetAccessPointPolicyStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    PolicyStatus: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["PolicyStatus"] !== undefined) {
                    contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data["PolicyStatus"], context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlGetBucketCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetBucketCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Bucket: undefined,
                    CreationDate: undefined,
                    PublicAccessBlockEnabled: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["Bucket"] !== undefined) {
                    contents.Bucket = data["Bucket"];
                }
                if (data["CreationDate"] !== undefined) {
                    contents.CreationDate = new Date(data["CreationDate"]);
                }
                if (data["PublicAccessBlockEnabled"] !== undefined) {
                    contents.PublicAccessBlockEnabled = data["PublicAccessBlockEnabled"] == "true";
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetBucketCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlGetBucketLifecycleConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Rules: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Rules === "") {
                    contents.Rules = [];
                }
                if (data["Rules"] !== undefined && data["Rules"]["Rule"] !== undefined) {
                    contents.Rules = deserializeAws_restXmlLifecycleRules(__getArrayIfSingleItem(data["Rules"]["Rule"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlGetBucketPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetBucketPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Policy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["Policy"] !== undefined) {
                    contents.Policy = data["Policy"];
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetBucketPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlGetBucketTaggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetBucketTaggingCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    TagSet: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.TagSet === "") {
                    contents.TagSet = [];
                }
                if (data["TagSet"] !== undefined && data["TagSet"]["member"] !== undefined) {
                    contents.TagSet = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(data["TagSet"]["member"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetBucketTaggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlGetJobTaggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetJobTaggingCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Tags === "") {
                    contents.Tags = [];
                }
                if (data["Tags"] !== undefined && data["Tags"]["member"] !== undefined) {
                    contents.Tags = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(data["Tags"]["member"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetJobTaggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.s3control#InternalServiceException": return [3 /*break*/, 2];
                    case "NotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.s3control#NotFoundException": return [3 /*break*/, 4];
                    case "TooManyRequestsException": return [3 /*break*/, 6];
                    case "com.amazonaws.s3control#TooManyRequestsException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restXmlGetPublicAccessBlockCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetPublicAccessBlockCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    PublicAccessBlockConfiguration: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(data, context);
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetPublicAccessBlockCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchPublicAccessBlockConfiguration": return [3 /*break*/, 2];
                    case "com.amazonaws.s3control#NoSuchPublicAccessBlockConfiguration": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationResponse(parsedOutput, context)];
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
export var deserializeAws_restXmlGetStorageLensConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetStorageLensConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    StorageLensConfiguration: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents.StorageLensConfiguration = deserializeAws_restXmlStorageLensConfiguration(data, context);
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetStorageLensConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlGetStorageLensConfigurationTaggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlGetStorageLensConfigurationTaggingCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Tags === "") {
                    contents.Tags = [];
                }
                if (data["Tags"] !== undefined && data["Tags"]["Tag"] !== undefined) {
                    contents.Tags = deserializeAws_restXmlStorageLensTags(__getArrayIfSingleItem(data["Tags"]["Tag"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlGetStorageLensConfigurationTaggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlListAccessPointsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListAccessPointsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AccessPointList: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AccessPointList === "") {
                    contents.AccessPointList = [];
                }
                if (data["AccessPointList"] !== undefined && data["AccessPointList"]["AccessPoint"] !== undefined) {
                    contents.AccessPointList = deserializeAws_restXmlAccessPointList(__getArrayIfSingleItem(data["AccessPointList"]["AccessPoint"]), context);
                }
                if (data["NextToken"] !== undefined) {
                    contents.NextToken = data["NextToken"];
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListAccessPointsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlListAccessPointsForObjectLambdaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListAccessPointsForObjectLambdaCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    ObjectLambdaAccessPointList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["NextToken"] !== undefined) {
                    contents.NextToken = data["NextToken"];
                }
                if (data.ObjectLambdaAccessPointList === "") {
                    contents.ObjectLambdaAccessPointList = [];
                }
                if (data["ObjectLambdaAccessPointList"] !== undefined &&
                    data["ObjectLambdaAccessPointList"]["ObjectLambdaAccessPoint"] !== undefined) {
                    contents.ObjectLambdaAccessPointList = deserializeAws_restXmlObjectLambdaAccessPointList(__getArrayIfSingleItem(data["ObjectLambdaAccessPointList"]["ObjectLambdaAccessPoint"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListAccessPointsForObjectLambdaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlListJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListJobsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Jobs: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Jobs === "") {
                    contents.Jobs = [];
                }
                if (data["Jobs"] !== undefined && data["Jobs"]["member"] !== undefined) {
                    contents.Jobs = deserializeAws_restXmlJobListDescriptorList(__getArrayIfSingleItem(data["Jobs"]["member"]), context);
                }
                if (data["NextToken"] !== undefined) {
                    contents.NextToken = data["NextToken"];
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.s3control#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.s3control#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.s3control#InvalidRequestException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restXmlListRegionalBucketsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListRegionalBucketsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    RegionalBucketList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["NextToken"] !== undefined) {
                    contents.NextToken = data["NextToken"];
                }
                if (data.RegionalBucketList === "") {
                    contents.RegionalBucketList = [];
                }
                if (data["RegionalBucketList"] !== undefined && data["RegionalBucketList"]["RegionalBucket"] !== undefined) {
                    contents.RegionalBucketList = deserializeAws_restXmlRegionalBucketList(__getArrayIfSingleItem(data["RegionalBucketList"]["RegionalBucket"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListRegionalBucketsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlListStorageLensConfigurationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlListStorageLensConfigurationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    StorageLensConfigurationList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["NextToken"] !== undefined) {
                    contents.NextToken = data["NextToken"];
                }
                if (data.StorageLensConfigurationList === "") {
                    contents.StorageLensConfigurationList = [];
                }
                if (data["StorageLensConfigurationList"] !== undefined) {
                    contents.StorageLensConfigurationList = deserializeAws_restXmlStorageLensConfigurationList(__getArrayIfSingleItem(data["StorageLensConfigurationList"]), context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlListStorageLensConfigurationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommandError(output, context)];
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
var deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlPutAccessPointPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlPutAccessPointPolicyCommandError(output, context)];
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
var deserializeAws_restXmlPutAccessPointPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommandError(output, context)];
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
var deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlPutBucketLifecycleConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError(output, context)];
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
var deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlPutBucketPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlPutBucketPolicyCommandError(output, context)];
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
var deserializeAws_restXmlPutBucketPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlPutBucketTaggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlPutBucketTaggingCommandError(output, context)];
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
var deserializeAws_restXmlPutBucketTaggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlPutJobTaggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlPutJobTaggingCommandError(output, context)];
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
var deserializeAws_restXmlPutJobTaggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.s3control#InternalServiceException": return [3 /*break*/, 2];
                    case "NotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.s3control#NotFoundException": return [3 /*break*/, 4];
                    case "TooManyRequestsException": return [3 /*break*/, 6];
                    case "com.amazonaws.s3control#TooManyRequestsException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.s3control#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyTagsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restXmlPutPublicAccessBlockCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlPutPublicAccessBlockCommandError(output, context)];
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
var deserializeAws_restXmlPutPublicAccessBlockCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlPutStorageLensConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlPutStorageLensConfigurationCommandError(output, context)];
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
var deserializeAws_restXmlPutStorageLensConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlPutStorageLensConfigurationTaggingCommandError(output, context)];
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
var deserializeAws_restXmlPutStorageLensConfigurationTaggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restXmlUpdateJobPriorityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlUpdateJobPriorityCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    JobId: undefined,
                    Priority: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["JobId"] !== undefined) {
                    contents.JobId = data["JobId"];
                }
                if (data["Priority"] !== undefined) {
                    contents.Priority = parseInt(data["Priority"]);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlUpdateJobPriorityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.s3control#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.s3control#InternalServiceException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.s3control#NotFoundException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.s3control#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restXmlUpdateJobStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restXmlUpdateJobStatusCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    JobId: undefined,
                    Status: undefined,
                    StatusUpdateReason: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data["JobId"] !== undefined) {
                    contents.JobId = data["JobId"];
                }
                if (data["Status"] !== undefined) {
                    contents.Status = data["Status"];
                }
                if (data["StatusUpdateReason"] !== undefined) {
                    contents.StatusUpdateReason = data["StatusUpdateReason"];
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restXmlUpdateJobStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.s3control#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.s3control#InternalServiceException": return [3 /*break*/, 4];
                    case "JobStatusException": return [3 /*break*/, 6];
                    case "com.amazonaws.s3control#JobStatusException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.s3control#NotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.s3control#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restXmlJobStatusExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restXmlBadRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BadRequestException",
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
}); };
var deserializeAws_restXmlBucketAlreadyExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BucketAlreadyExists",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
        };
        data = parsedOutput.body.Error;
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlBucketAlreadyOwnedByYouResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BucketAlreadyOwnedByYou",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
        };
        data = parsedOutput.body.Error;
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restXmlIdempotencyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "IdempotencyException",
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
}); };
var deserializeAws_restXmlInternalServiceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServiceException",
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
}); };
var deserializeAws_restXmlInvalidNextTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidNextTokenException",
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
}); };
var deserializeAws_restXmlInvalidRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidRequestException",
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
}); };
var deserializeAws_restXmlJobStatusExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "JobStatusException",
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
}); };
var deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoSuchPublicAccessBlockConfiguration",
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
}); };
var deserializeAws_restXmlNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NotFoundException",
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
}); };
var deserializeAws_restXmlTooManyRequestsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyRequestsException",
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
}); };
var deserializeAws_restXmlTooManyTagsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyTagsException",
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
}); };
var serializeAws_restXmlAbortIncompleteMultipartUpload = function (input, context) {
    var bodyNode = new __XmlNode("AbortIncompleteMultipartUpload");
    if (input.DaysAfterInitiation !== undefined && input.DaysAfterInitiation !== null) {
        var node = new __XmlNode("DaysAfterInitiation")
            .addChildNode(new __XmlText(String(input.DaysAfterInitiation)))
            .withName("DaysAfterInitiation");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlAccountLevel = function (input, context) {
    var bodyNode = new __XmlNode("AccountLevel");
    if (input.ActivityMetrics !== undefined && input.ActivityMetrics !== null) {
        var node = serializeAws_restXmlActivityMetrics(input.ActivityMetrics, context).withName("ActivityMetrics");
        bodyNode.addChildNode(node);
    }
    if (input.BucketLevel !== undefined && input.BucketLevel !== null) {
        var node = serializeAws_restXmlBucketLevel(input.BucketLevel, context).withName("BucketLevel");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlActivityMetrics = function (input, context) {
    var bodyNode = new __XmlNode("ActivityMetrics");
    if (input.IsEnabled !== undefined && input.IsEnabled !== null) {
        var node = new __XmlNode("IsEnabled").addChildNode(new __XmlText(String(input.IsEnabled))).withName("IsEnabled");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlAwsLambdaTransformation = function (input, context) {
    var bodyNode = new __XmlNode("AwsLambdaTransformation");
    if (input.FunctionArn !== undefined && input.FunctionArn !== null) {
        var node = new __XmlNode("FunctionArnString")
            .addChildNode(new __XmlText(input.FunctionArn))
            .withName("FunctionArn");
        bodyNode.addChildNode(node);
    }
    if (input.FunctionPayload !== undefined && input.FunctionPayload !== null) {
        var node = new __XmlNode("AwsLambdaTransformationPayload")
            .addChildNode(new __XmlText(input.FunctionPayload))
            .withName("FunctionPayload");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlBucketLevel = function (input, context) {
    var bodyNode = new __XmlNode("BucketLevel");
    if (input.ActivityMetrics !== undefined && input.ActivityMetrics !== null) {
        var node = serializeAws_restXmlActivityMetrics(input.ActivityMetrics, context).withName("ActivityMetrics");
        bodyNode.addChildNode(node);
    }
    if (input.PrefixLevel !== undefined && input.PrefixLevel !== null) {
        var node = serializeAws_restXmlPrefixLevel(input.PrefixLevel, context).withName("PrefixLevel");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlBuckets = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = new __XmlNode("S3BucketArnString").addChildNode(new __XmlText(entry));
        return node.withName("Arn");
    });
};
var serializeAws_restXmlCreateBucketConfiguration = function (input, context) {
    var bodyNode = new __XmlNode("CreateBucketConfiguration");
    if (input.LocationConstraint !== undefined && input.LocationConstraint !== null) {
        var node = new __XmlNode("BucketLocationConstraint")
            .addChildNode(new __XmlText(input.LocationConstraint))
            .withName("LocationConstraint");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXml_Exclude = function (input, context) {
    var bodyNode = new __XmlNode("Exclude");
    if (input.Buckets !== undefined && input.Buckets !== null) {
        var nodes = serializeAws_restXmlBuckets(input.Buckets, context);
        var containerNode_5 = new __XmlNode("Buckets");
        nodes.map(function (node) {
            containerNode_5.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_5);
    }
    if (input.Regions !== undefined && input.Regions !== null) {
        var nodes = serializeAws_restXmlRegions(input.Regions, context);
        var containerNode_6 = new __XmlNode("Regions");
        nodes.map(function (node) {
            containerNode_6.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_6);
    }
    return bodyNode;
};
var serializeAws_restXmlInclude = function (input, context) {
    var bodyNode = new __XmlNode("Include");
    if (input.Buckets !== undefined && input.Buckets !== null) {
        var nodes = serializeAws_restXmlBuckets(input.Buckets, context);
        var containerNode_7 = new __XmlNode("Buckets");
        nodes.map(function (node) {
            containerNode_7.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_7);
    }
    if (input.Regions !== undefined && input.Regions !== null) {
        var nodes = serializeAws_restXmlRegions(input.Regions, context);
        var containerNode_8 = new __XmlNode("Regions");
        nodes.map(function (node) {
            containerNode_8.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_8);
    }
    return bodyNode;
};
var serializeAws_restXmlJobManifest = function (input, context) {
    var bodyNode = new __XmlNode("JobManifest");
    if (input.Spec !== undefined && input.Spec !== null) {
        var node = serializeAws_restXmlJobManifestSpec(input.Spec, context).withName("Spec");
        bodyNode.addChildNode(node);
    }
    if (input.Location !== undefined && input.Location !== null) {
        var node = serializeAws_restXmlJobManifestLocation(input.Location, context).withName("Location");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlJobManifestFieldList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = new __XmlNode("JobManifestFieldName").addChildNode(new __XmlText(entry));
        return node.withName("member");
    });
};
var serializeAws_restXmlJobManifestLocation = function (input, context) {
    var bodyNode = new __XmlNode("JobManifestLocation");
    if (input.ObjectArn !== undefined && input.ObjectArn !== null) {
        var node = new __XmlNode("S3KeyArnString").addChildNode(new __XmlText(input.ObjectArn)).withName("ObjectArn");
        bodyNode.addChildNode(node);
    }
    if (input.ObjectVersionId !== undefined && input.ObjectVersionId !== null) {
        var node = new __XmlNode("S3ObjectVersionId")
            .addChildNode(new __XmlText(input.ObjectVersionId))
            .withName("ObjectVersionId");
        bodyNode.addChildNode(node);
    }
    if (input.ETag !== undefined && input.ETag !== null) {
        var node = new __XmlNode("NonEmptyMaxLength1024String").addChildNode(new __XmlText(input.ETag)).withName("ETag");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlJobManifestSpec = function (input, context) {
    var bodyNode = new __XmlNode("JobManifestSpec");
    if (input.Format !== undefined && input.Format !== null) {
        var node = new __XmlNode("JobManifestFormat").addChildNode(new __XmlText(input.Format)).withName("Format");
        bodyNode.addChildNode(node);
    }
    if (input.Fields !== undefined && input.Fields !== null) {
        var nodes = serializeAws_restXmlJobManifestFieldList(input.Fields, context);
        var containerNode_9 = new __XmlNode("Fields");
        nodes.map(function (node) {
            containerNode_9.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_9);
    }
    return bodyNode;
};
var serializeAws_restXmlJobOperation = function (input, context) {
    var bodyNode = new __XmlNode("JobOperation");
    if (input.LambdaInvoke !== undefined && input.LambdaInvoke !== null) {
        var node = serializeAws_restXmlLambdaInvokeOperation(input.LambdaInvoke, context).withName("LambdaInvoke");
        bodyNode.addChildNode(node);
    }
    if (input.S3PutObjectCopy !== undefined && input.S3PutObjectCopy !== null) {
        var node = serializeAws_restXmlS3CopyObjectOperation(input.S3PutObjectCopy, context).withName("S3PutObjectCopy");
        bodyNode.addChildNode(node);
    }
    if (input.S3PutObjectAcl !== undefined && input.S3PutObjectAcl !== null) {
        var node = serializeAws_restXmlS3SetObjectAclOperation(input.S3PutObjectAcl, context).withName("S3PutObjectAcl");
        bodyNode.addChildNode(node);
    }
    if (input.S3PutObjectTagging !== undefined && input.S3PutObjectTagging !== null) {
        var node = serializeAws_restXmlS3SetObjectTaggingOperation(input.S3PutObjectTagging, context).withName("S3PutObjectTagging");
        bodyNode.addChildNode(node);
    }
    if (input.S3DeleteObjectTagging !== undefined && input.S3DeleteObjectTagging !== null) {
        var node = serializeAws_restXmlS3DeleteObjectTaggingOperation(input.S3DeleteObjectTagging, context).withName("S3DeleteObjectTagging");
        bodyNode.addChildNode(node);
    }
    if (input.S3InitiateRestoreObject !== undefined && input.S3InitiateRestoreObject !== null) {
        var node = serializeAws_restXmlS3InitiateRestoreObjectOperation(input.S3InitiateRestoreObject, context).withName("S3InitiateRestoreObject");
        bodyNode.addChildNode(node);
    }
    if (input.S3PutObjectLegalHold !== undefined && input.S3PutObjectLegalHold !== null) {
        var node = serializeAws_restXmlS3SetObjectLegalHoldOperation(input.S3PutObjectLegalHold, context).withName("S3PutObjectLegalHold");
        bodyNode.addChildNode(node);
    }
    if (input.S3PutObjectRetention !== undefined && input.S3PutObjectRetention !== null) {
        var node = serializeAws_restXmlS3SetObjectRetentionOperation(input.S3PutObjectRetention, context).withName("S3PutObjectRetention");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlJobReport = function (input, context) {
    var bodyNode = new __XmlNode("JobReport");
    if (input.Bucket !== undefined && input.Bucket !== null) {
        var node = new __XmlNode("S3BucketArnString").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
        bodyNode.addChildNode(node);
    }
    if (input.Format !== undefined && input.Format !== null) {
        var node = new __XmlNode("JobReportFormat").addChildNode(new __XmlText(input.Format)).withName("Format");
        bodyNode.addChildNode(node);
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        var node = new __XmlNode("Boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    if (input.Prefix !== undefined && input.Prefix !== null) {
        var node = new __XmlNode("ReportPrefixString").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.ReportScope !== undefined && input.ReportScope !== null) {
        var node = new __XmlNode("JobReportScope").addChildNode(new __XmlText(input.ReportScope)).withName("ReportScope");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlLambdaInvokeOperation = function (input, context) {
    var bodyNode = new __XmlNode("LambdaInvokeOperation");
    if (input.FunctionArn !== undefined && input.FunctionArn !== null) {
        var node = new __XmlNode("FunctionArnString")
            .addChildNode(new __XmlText(input.FunctionArn))
            .withName("FunctionArn");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlLifecycleConfiguration = function (input, context) {
    var bodyNode = new __XmlNode("LifecycleConfiguration");
    if (input.Rules !== undefined && input.Rules !== null) {
        var nodes = serializeAws_restXmlLifecycleRules(input.Rules, context);
        var containerNode_10 = new __XmlNode("Rules");
        nodes.map(function (node) {
            containerNode_10.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_10);
    }
    return bodyNode;
};
var serializeAws_restXmlLifecycleExpiration = function (input, context) {
    var bodyNode = new __XmlNode("LifecycleExpiration");
    if (input.Date !== undefined && input.Date !== null) {
        var node = new __XmlNode("Date")
            .addChildNode(new __XmlText(input.Date.toISOString().split(".")[0] + "Z"))
            .withName("Date");
        bodyNode.addChildNode(node);
    }
    if (input.Days !== undefined && input.Days !== null) {
        var node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
        bodyNode.addChildNode(node);
    }
    if (input.ExpiredObjectDeleteMarker !== undefined && input.ExpiredObjectDeleteMarker !== null) {
        var node = new __XmlNode("ExpiredObjectDeleteMarker")
            .addChildNode(new __XmlText(String(input.ExpiredObjectDeleteMarker)))
            .withName("ExpiredObjectDeleteMarker");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlLifecycleRule = function (input, context) {
    var bodyNode = new __XmlNode("LifecycleRule");
    if (input.Expiration !== undefined && input.Expiration !== null) {
        var node = serializeAws_restXmlLifecycleExpiration(input.Expiration, context).withName("Expiration");
        bodyNode.addChildNode(node);
    }
    if (input.ID !== undefined && input.ID !== null) {
        var node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
        bodyNode.addChildNode(node);
    }
    if (input.Filter !== undefined && input.Filter !== null) {
        var node = serializeAws_restXmlLifecycleRuleFilter(input.Filter, context).withName("Filter");
        bodyNode.addChildNode(node);
    }
    if (input.Status !== undefined && input.Status !== null) {
        var node = new __XmlNode("ExpirationStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
        bodyNode.addChildNode(node);
    }
    if (input.Transitions !== undefined && input.Transitions !== null) {
        var nodes = serializeAws_restXmlTransitionList(input.Transitions, context);
        var containerNode_11 = new __XmlNode("Transitions");
        nodes.map(function (node) {
            containerNode_11.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_11);
    }
    if (input.NoncurrentVersionTransitions !== undefined && input.NoncurrentVersionTransitions !== null) {
        var nodes = serializeAws_restXmlNoncurrentVersionTransitionList(input.NoncurrentVersionTransitions, context);
        var containerNode_12 = new __XmlNode("NoncurrentVersionTransitions");
        nodes.map(function (node) {
            containerNode_12.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_12);
    }
    if (input.NoncurrentVersionExpiration !== undefined && input.NoncurrentVersionExpiration !== null) {
        var node = serializeAws_restXmlNoncurrentVersionExpiration(input.NoncurrentVersionExpiration, context).withName("NoncurrentVersionExpiration");
        bodyNode.addChildNode(node);
    }
    if (input.AbortIncompleteMultipartUpload !== undefined && input.AbortIncompleteMultipartUpload !== null) {
        var node = serializeAws_restXmlAbortIncompleteMultipartUpload(input.AbortIncompleteMultipartUpload, context).withName("AbortIncompleteMultipartUpload");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlLifecycleRuleAndOperator = function (input, context) {
    var bodyNode = new __XmlNode("LifecycleRuleAndOperator");
    if (input.Prefix !== undefined && input.Prefix !== null) {
        var node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var nodes = serializeAws_restXmlS3TagSet(input.Tags, context);
        var containerNode_13 = new __XmlNode("Tags");
        nodes.map(function (node) {
            containerNode_13.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_13);
    }
    return bodyNode;
};
var serializeAws_restXmlLifecycleRuleFilter = function (input, context) {
    var bodyNode = new __XmlNode("LifecycleRuleFilter");
    if (input.Prefix !== undefined && input.Prefix !== null) {
        var node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Tag !== undefined && input.Tag !== null) {
        var node = serializeAws_restXmlS3Tag(input.Tag, context).withName("Tag");
        bodyNode.addChildNode(node);
    }
    if (input.And !== undefined && input.And !== null) {
        var node = serializeAws_restXmlLifecycleRuleAndOperator(input.And, context).withName("And");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlLifecycleRules = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = serializeAws_restXmlLifecycleRule(entry, context);
        return node.withName("Rule");
    });
};
var serializeAws_restXmlNoncurrentVersionExpiration = function (input, context) {
    var bodyNode = new __XmlNode("NoncurrentVersionExpiration");
    if (input.NoncurrentDays !== undefined && input.NoncurrentDays !== null) {
        var node = new __XmlNode("Days")
            .addChildNode(new __XmlText(String(input.NoncurrentDays)))
            .withName("NoncurrentDays");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlNoncurrentVersionTransition = function (input, context) {
    var bodyNode = new __XmlNode("NoncurrentVersionTransition");
    if (input.NoncurrentDays !== undefined && input.NoncurrentDays !== null) {
        var node = new __XmlNode("Days")
            .addChildNode(new __XmlText(String(input.NoncurrentDays)))
            .withName("NoncurrentDays");
        bodyNode.addChildNode(node);
    }
    if (input.StorageClass !== undefined && input.StorageClass !== null) {
        var node = new __XmlNode("TransitionStorageClass")
            .addChildNode(new __XmlText(input.StorageClass))
            .withName("StorageClass");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlNoncurrentVersionTransitionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = serializeAws_restXmlNoncurrentVersionTransition(entry, context);
        return node.withName("NoncurrentVersionTransition");
    });
};
var serializeAws_restXmlObjectLambdaAllowedFeaturesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = new __XmlNode("ObjectLambdaAllowedFeature").addChildNode(new __XmlText(entry));
        return node.withName("AllowedFeature");
    });
};
var serializeAws_restXmlObjectLambdaConfiguration = function (input, context) {
    var bodyNode = new __XmlNode("ObjectLambdaConfiguration");
    if (input.SupportingAccessPoint !== undefined && input.SupportingAccessPoint !== null) {
        var node = new __XmlNode("ObjectLambdaSupportingAccessPointArn")
            .addChildNode(new __XmlText(input.SupportingAccessPoint))
            .withName("SupportingAccessPoint");
        bodyNode.addChildNode(node);
    }
    if (input.CloudWatchMetricsEnabled !== undefined && input.CloudWatchMetricsEnabled !== null) {
        var node = new __XmlNode("Boolean")
            .addChildNode(new __XmlText(String(input.CloudWatchMetricsEnabled)))
            .withName("CloudWatchMetricsEnabled");
        bodyNode.addChildNode(node);
    }
    if (input.AllowedFeatures !== undefined && input.AllowedFeatures !== null) {
        var nodes = serializeAws_restXmlObjectLambdaAllowedFeaturesList(input.AllowedFeatures, context);
        var containerNode_14 = new __XmlNode("AllowedFeatures");
        nodes.map(function (node) {
            containerNode_14.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_14);
    }
    if (input.TransformationConfigurations !== undefined && input.TransformationConfigurations !== null) {
        var nodes = serializeAws_restXmlObjectLambdaTransformationConfigurationsList(input.TransformationConfigurations, context);
        var containerNode_15 = new __XmlNode("TransformationConfigurations");
        nodes.map(function (node) {
            containerNode_15.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_15);
    }
    return bodyNode;
};
var serializeAws_restXmlObjectLambdaContentTransformation = function (input, context) {
    var bodyNode = new __XmlNode("ObjectLambdaContentTransformation");
    ObjectLambdaContentTransformation.visit(input, {
        AwsLambda: function (value) {
            var node = serializeAws_restXmlAwsLambdaTransformation(value, context).withName("AwsLambda");
            bodyNode.addChildNode(node);
        },
        _: function (name, value) {
            if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
                throw new Error("Unable to serialize unknown union members in XML.");
            }
            bodyNode.addChildNode(new __XmlNode(name).addChildNode(value));
        },
    });
    return bodyNode;
};
var serializeAws_restXmlObjectLambdaTransformationConfiguration = function (input, context) {
    var bodyNode = new __XmlNode("ObjectLambdaTransformationConfiguration");
    if (input.Actions !== undefined && input.Actions !== null) {
        var nodes = serializeAws_restXmlObjectLambdaTransformationConfigurationActionsList(input.Actions, context);
        var containerNode_16 = new __XmlNode("Actions");
        nodes.map(function (node) {
            containerNode_16.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_16);
    }
    if (input.ContentTransformation !== undefined && input.ContentTransformation !== null) {
        var node = serializeAws_restXmlObjectLambdaContentTransformation(input.ContentTransformation, context).withName("ContentTransformation");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlObjectLambdaTransformationConfigurationActionsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = new __XmlNode("ObjectLambdaTransformationConfigurationAction").addChildNode(new __XmlText(entry));
        return node.withName("Action");
    });
};
var serializeAws_restXmlObjectLambdaTransformationConfigurationsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = serializeAws_restXmlObjectLambdaTransformationConfiguration(entry, context);
        return node.withName("TransformationConfiguration");
    });
};
var serializeAws_restXmlPrefixLevel = function (input, context) {
    var bodyNode = new __XmlNode("PrefixLevel");
    if (input.StorageMetrics !== undefined && input.StorageMetrics !== null) {
        var node = serializeAws_restXmlPrefixLevelStorageMetrics(input.StorageMetrics, context).withName("StorageMetrics");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlPrefixLevelStorageMetrics = function (input, context) {
    var bodyNode = new __XmlNode("PrefixLevelStorageMetrics");
    if (input.IsEnabled !== undefined && input.IsEnabled !== null) {
        var node = new __XmlNode("IsEnabled").addChildNode(new __XmlText(String(input.IsEnabled))).withName("IsEnabled");
        bodyNode.addChildNode(node);
    }
    if (input.SelectionCriteria !== undefined && input.SelectionCriteria !== null) {
        var node = serializeAws_restXmlSelectionCriteria(input.SelectionCriteria, context).withName("SelectionCriteria");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlPublicAccessBlockConfiguration = function (input, context) {
    var bodyNode = new __XmlNode("PublicAccessBlockConfiguration");
    if (input.BlockPublicAcls !== undefined && input.BlockPublicAcls !== null) {
        var node = new __XmlNode("Setting")
            .addChildNode(new __XmlText(String(input.BlockPublicAcls)))
            .withName("BlockPublicAcls");
        bodyNode.addChildNode(node);
    }
    if (input.IgnorePublicAcls !== undefined && input.IgnorePublicAcls !== null) {
        var node = new __XmlNode("Setting")
            .addChildNode(new __XmlText(String(input.IgnorePublicAcls)))
            .withName("IgnorePublicAcls");
        bodyNode.addChildNode(node);
    }
    if (input.BlockPublicPolicy !== undefined && input.BlockPublicPolicy !== null) {
        var node = new __XmlNode("Setting")
            .addChildNode(new __XmlText(String(input.BlockPublicPolicy)))
            .withName("BlockPublicPolicy");
        bodyNode.addChildNode(node);
    }
    if (input.RestrictPublicBuckets !== undefined && input.RestrictPublicBuckets !== null) {
        var node = new __XmlNode("Setting")
            .addChildNode(new __XmlText(String(input.RestrictPublicBuckets)))
            .withName("RestrictPublicBuckets");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlRegions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = new __XmlNode("S3AWSRegion").addChildNode(new __XmlText(entry));
        return node.withName("Region");
    });
};
var serializeAws_restXmlS3AccessControlList = function (input, context) {
    var bodyNode = new __XmlNode("S3AccessControlList");
    if (input.Owner !== undefined && input.Owner !== null) {
        var node = serializeAws_restXmlS3ObjectOwner(input.Owner, context).withName("Owner");
        bodyNode.addChildNode(node);
    }
    if (input.Grants !== undefined && input.Grants !== null) {
        var nodes = serializeAws_restXmlS3GrantList(input.Grants, context);
        var containerNode_17 = new __XmlNode("Grants");
        nodes.map(function (node) {
            containerNode_17.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_17);
    }
    return bodyNode;
};
var serializeAws_restXmlS3AccessControlPolicy = function (input, context) {
    var bodyNode = new __XmlNode("S3AccessControlPolicy");
    if (input.AccessControlList !== undefined && input.AccessControlList !== null) {
        var node = serializeAws_restXmlS3AccessControlList(input.AccessControlList, context).withName("AccessControlList");
        bodyNode.addChildNode(node);
    }
    if (input.CannedAccessControlList !== undefined && input.CannedAccessControlList !== null) {
        var node = new __XmlNode("S3CannedAccessControlList")
            .addChildNode(new __XmlText(input.CannedAccessControlList))
            .withName("CannedAccessControlList");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3BucketDestination = function (input, context) {
    var bodyNode = new __XmlNode("S3BucketDestination");
    if (input.Format !== undefined && input.Format !== null) {
        var node = new __XmlNode("Format").addChildNode(new __XmlText(input.Format)).withName("Format");
        bodyNode.addChildNode(node);
    }
    if (input.OutputSchemaVersion !== undefined && input.OutputSchemaVersion !== null) {
        var node = new __XmlNode("OutputSchemaVersion")
            .addChildNode(new __XmlText(input.OutputSchemaVersion))
            .withName("OutputSchemaVersion");
        bodyNode.addChildNode(node);
    }
    if (input.AccountId !== undefined && input.AccountId !== null) {
        var node = new __XmlNode("AccountId").addChildNode(new __XmlText(input.AccountId)).withName("AccountId");
        bodyNode.addChildNode(node);
    }
    if (input.Arn !== undefined && input.Arn !== null) {
        var node = new __XmlNode("S3BucketArnString").addChildNode(new __XmlText(input.Arn)).withName("Arn");
        bodyNode.addChildNode(node);
    }
    if (input.Prefix !== undefined && input.Prefix !== null) {
        var node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Encryption !== undefined && input.Encryption !== null) {
        var node = serializeAws_restXmlStorageLensDataExportEncryption(input.Encryption, context).withName("Encryption");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3CopyObjectOperation = function (input, context) {
    var bodyNode = new __XmlNode("S3CopyObjectOperation");
    if (input.TargetResource !== undefined && input.TargetResource !== null) {
        var node = new __XmlNode("S3BucketArnString")
            .addChildNode(new __XmlText(input.TargetResource))
            .withName("TargetResource");
        bodyNode.addChildNode(node);
    }
    if (input.CannedAccessControlList !== undefined && input.CannedAccessControlList !== null) {
        var node = new __XmlNode("S3CannedAccessControlList")
            .addChildNode(new __XmlText(input.CannedAccessControlList))
            .withName("CannedAccessControlList");
        bodyNode.addChildNode(node);
    }
    if (input.AccessControlGrants !== undefined && input.AccessControlGrants !== null) {
        var nodes = serializeAws_restXmlS3GrantList(input.AccessControlGrants, context);
        var containerNode_18 = new __XmlNode("AccessControlGrants");
        nodes.map(function (node) {
            containerNode_18.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_18);
    }
    if (input.MetadataDirective !== undefined && input.MetadataDirective !== null) {
        var node = new __XmlNode("S3MetadataDirective")
            .addChildNode(new __XmlText(input.MetadataDirective))
            .withName("MetadataDirective");
        bodyNode.addChildNode(node);
    }
    if (input.ModifiedSinceConstraint !== undefined && input.ModifiedSinceConstraint !== null) {
        var node = new __XmlNode("TimeStamp")
            .addChildNode(new __XmlText(input.ModifiedSinceConstraint.toISOString().split(".")[0] + "Z"))
            .withName("ModifiedSinceConstraint");
        bodyNode.addChildNode(node);
    }
    if (input.NewObjectMetadata !== undefined && input.NewObjectMetadata !== null) {
        var node = serializeAws_restXmlS3ObjectMetadata(input.NewObjectMetadata, context).withName("NewObjectMetadata");
        bodyNode.addChildNode(node);
    }
    if (input.NewObjectTagging !== undefined && input.NewObjectTagging !== null) {
        var nodes = serializeAws_restXmlS3TagSet(input.NewObjectTagging, context);
        var containerNode_19 = new __XmlNode("NewObjectTagging");
        nodes.map(function (node) {
            containerNode_19.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_19);
    }
    if (input.RedirectLocation !== undefined && input.RedirectLocation !== null) {
        var node = new __XmlNode("NonEmptyMaxLength2048String")
            .addChildNode(new __XmlText(input.RedirectLocation))
            .withName("RedirectLocation");
        bodyNode.addChildNode(node);
    }
    if (input.RequesterPays !== undefined && input.RequesterPays !== null) {
        var node = new __XmlNode("Boolean")
            .addChildNode(new __XmlText(String(input.RequesterPays)))
            .withName("RequesterPays");
        bodyNode.addChildNode(node);
    }
    if (input.StorageClass !== undefined && input.StorageClass !== null) {
        var node = new __XmlNode("S3StorageClass")
            .addChildNode(new __XmlText(input.StorageClass))
            .withName("StorageClass");
        bodyNode.addChildNode(node);
    }
    if (input.UnModifiedSinceConstraint !== undefined && input.UnModifiedSinceConstraint !== null) {
        var node = new __XmlNode("TimeStamp")
            .addChildNode(new __XmlText(input.UnModifiedSinceConstraint.toISOString().split(".")[0] + "Z"))
            .withName("UnModifiedSinceConstraint");
        bodyNode.addChildNode(node);
    }
    if (input.SSEAwsKmsKeyId !== undefined && input.SSEAwsKmsKeyId !== null) {
        var node = new __XmlNode("KmsKeyArnString")
            .addChildNode(new __XmlText(input.SSEAwsKmsKeyId))
            .withName("SSEAwsKmsKeyId");
        bodyNode.addChildNode(node);
    }
    if (input.TargetKeyPrefix !== undefined && input.TargetKeyPrefix !== null) {
        var node = new __XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new __XmlText(input.TargetKeyPrefix))
            .withName("TargetKeyPrefix");
        bodyNode.addChildNode(node);
    }
    if (input.ObjectLockLegalHoldStatus !== undefined && input.ObjectLockLegalHoldStatus !== null) {
        var node = new __XmlNode("S3ObjectLockLegalHoldStatus")
            .addChildNode(new __XmlText(input.ObjectLockLegalHoldStatus))
            .withName("ObjectLockLegalHoldStatus");
        bodyNode.addChildNode(node);
    }
    if (input.ObjectLockMode !== undefined && input.ObjectLockMode !== null) {
        var node = new __XmlNode("S3ObjectLockMode")
            .addChildNode(new __XmlText(input.ObjectLockMode))
            .withName("ObjectLockMode");
        bodyNode.addChildNode(node);
    }
    if (input.ObjectLockRetainUntilDate !== undefined && input.ObjectLockRetainUntilDate !== null) {
        var node = new __XmlNode("TimeStamp")
            .addChildNode(new __XmlText(input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z"))
            .withName("ObjectLockRetainUntilDate");
        bodyNode.addChildNode(node);
    }
    if (input.BucketKeyEnabled !== undefined && input.BucketKeyEnabled !== null) {
        var node = new __XmlNode("Boolean")
            .addChildNode(new __XmlText(String(input.BucketKeyEnabled)))
            .withName("BucketKeyEnabled");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3DeleteObjectTaggingOperation = function (input, context) {
    var bodyNode = new __XmlNode("S3DeleteObjectTaggingOperation");
    return bodyNode;
};
var serializeAws_restXmlS3Grant = function (input, context) {
    var bodyNode = new __XmlNode("S3Grant");
    if (input.Grantee !== undefined && input.Grantee !== null) {
        var node = serializeAws_restXmlS3Grantee(input.Grantee, context).withName("Grantee");
        bodyNode.addChildNode(node);
    }
    if (input.Permission !== undefined && input.Permission !== null) {
        var node = new __XmlNode("S3Permission").addChildNode(new __XmlText(input.Permission)).withName("Permission");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3Grantee = function (input, context) {
    var bodyNode = new __XmlNode("S3Grantee");
    if (input.TypeIdentifier !== undefined && input.TypeIdentifier !== null) {
        var node = new __XmlNode("S3GranteeTypeIdentifier")
            .addChildNode(new __XmlText(input.TypeIdentifier))
            .withName("TypeIdentifier");
        bodyNode.addChildNode(node);
    }
    if (input.Identifier !== undefined && input.Identifier !== null) {
        var node = new __XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new __XmlText(input.Identifier))
            .withName("Identifier");
        bodyNode.addChildNode(node);
    }
    if (input.DisplayName !== undefined && input.DisplayName !== null) {
        var node = new __XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new __XmlText(input.DisplayName))
            .withName("DisplayName");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3GrantList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = serializeAws_restXmlS3Grant(entry, context);
        return node.withName("member");
    });
};
var serializeAws_restXmlS3InitiateRestoreObjectOperation = function (input, context) {
    var bodyNode = new __XmlNode("S3InitiateRestoreObjectOperation");
    if (input.ExpirationInDays !== undefined && input.ExpirationInDays !== null) {
        var node = new __XmlNode("S3ExpirationInDays")
            .addChildNode(new __XmlText(String(input.ExpirationInDays)))
            .withName("ExpirationInDays");
        bodyNode.addChildNode(node);
    }
    if (input.GlacierJobTier !== undefined && input.GlacierJobTier !== null) {
        var node = new __XmlNode("S3GlacierJobTier")
            .addChildNode(new __XmlText(input.GlacierJobTier))
            .withName("GlacierJobTier");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3ObjectLockLegalHold = function (input, context) {
    var bodyNode = new __XmlNode("S3ObjectLockLegalHold");
    if (input.Status !== undefined && input.Status !== null) {
        var node = new __XmlNode("S3ObjectLockLegalHoldStatus")
            .addChildNode(new __XmlText(input.Status))
            .withName("Status");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3ObjectMetadata = function (input, context) {
    var bodyNode = new __XmlNode("S3ObjectMetadata");
    if (input.CacheControl !== undefined && input.CacheControl !== null) {
        var node = new __XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new __XmlText(input.CacheControl))
            .withName("CacheControl");
        bodyNode.addChildNode(node);
    }
    if (input.ContentDisposition !== undefined && input.ContentDisposition !== null) {
        var node = new __XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new __XmlText(input.ContentDisposition))
            .withName("ContentDisposition");
        bodyNode.addChildNode(node);
    }
    if (input.ContentEncoding !== undefined && input.ContentEncoding !== null) {
        var node = new __XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new __XmlText(input.ContentEncoding))
            .withName("ContentEncoding");
        bodyNode.addChildNode(node);
    }
    if (input.ContentLanguage !== undefined && input.ContentLanguage !== null) {
        var node = new __XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new __XmlText(input.ContentLanguage))
            .withName("ContentLanguage");
        bodyNode.addChildNode(node);
    }
    if (input.UserMetadata !== undefined && input.UserMetadata !== null) {
        var nodes = serializeAws_restXmlS3UserMetadata(input.UserMetadata, context);
        var containerNode_20 = new __XmlNode("UserMetadata");
        nodes.map(function (node) {
            containerNode_20.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_20);
    }
    if (input.ContentLength !== undefined && input.ContentLength !== null) {
        var node = new __XmlNode("S3ContentLength")
            .addChildNode(new __XmlText(String(input.ContentLength)))
            .withName("ContentLength");
        bodyNode.addChildNode(node);
    }
    if (input.ContentMD5 !== undefined && input.ContentMD5 !== null) {
        var node = new __XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new __XmlText(input.ContentMD5))
            .withName("ContentMD5");
        bodyNode.addChildNode(node);
    }
    if (input.ContentType !== undefined && input.ContentType !== null) {
        var node = new __XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new __XmlText(input.ContentType))
            .withName("ContentType");
        bodyNode.addChildNode(node);
    }
    if (input.HttpExpiresDate !== undefined && input.HttpExpiresDate !== null) {
        var node = new __XmlNode("TimeStamp")
            .addChildNode(new __XmlText(input.HttpExpiresDate.toISOString().split(".")[0] + "Z"))
            .withName("HttpExpiresDate");
        bodyNode.addChildNode(node);
    }
    if (input.RequesterCharged !== undefined && input.RequesterCharged !== null) {
        var node = new __XmlNode("Boolean")
            .addChildNode(new __XmlText(String(input.RequesterCharged)))
            .withName("RequesterCharged");
        bodyNode.addChildNode(node);
    }
    if (input.SSEAlgorithm !== undefined && input.SSEAlgorithm !== null) {
        var node = new __XmlNode("S3SSEAlgorithm")
            .addChildNode(new __XmlText(input.SSEAlgorithm))
            .withName("SSEAlgorithm");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3ObjectOwner = function (input, context) {
    var bodyNode = new __XmlNode("S3ObjectOwner");
    if (input.ID !== undefined && input.ID !== null) {
        var node = new __XmlNode("NonEmptyMaxLength1024String").addChildNode(new __XmlText(input.ID)).withName("ID");
        bodyNode.addChildNode(node);
    }
    if (input.DisplayName !== undefined && input.DisplayName !== null) {
        var node = new __XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new __XmlText(input.DisplayName))
            .withName("DisplayName");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3Retention = function (input, context) {
    var bodyNode = new __XmlNode("S3Retention");
    if (input.RetainUntilDate !== undefined && input.RetainUntilDate !== null) {
        var node = new __XmlNode("TimeStamp")
            .addChildNode(new __XmlText(input.RetainUntilDate.toISOString().split(".")[0] + "Z"))
            .withName("RetainUntilDate");
        bodyNode.addChildNode(node);
    }
    if (input.Mode !== undefined && input.Mode !== null) {
        var node = new __XmlNode("S3ObjectLockRetentionMode").addChildNode(new __XmlText(input.Mode)).withName("Mode");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3SetObjectAclOperation = function (input, context) {
    var bodyNode = new __XmlNode("S3SetObjectAclOperation");
    if (input.AccessControlPolicy !== undefined && input.AccessControlPolicy !== null) {
        var node = serializeAws_restXmlS3AccessControlPolicy(input.AccessControlPolicy, context).withName("AccessControlPolicy");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3SetObjectLegalHoldOperation = function (input, context) {
    var bodyNode = new __XmlNode("S3SetObjectLegalHoldOperation");
    if (input.LegalHold !== undefined && input.LegalHold !== null) {
        var node = serializeAws_restXmlS3ObjectLockLegalHold(input.LegalHold, context).withName("LegalHold");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3SetObjectRetentionOperation = function (input, context) {
    var bodyNode = new __XmlNode("S3SetObjectRetentionOperation");
    if (input.BypassGovernanceRetention !== undefined && input.BypassGovernanceRetention !== null) {
        var node = new __XmlNode("Boolean")
            .addChildNode(new __XmlText(String(input.BypassGovernanceRetention)))
            .withName("BypassGovernanceRetention");
        bodyNode.addChildNode(node);
    }
    if (input.Retention !== undefined && input.Retention !== null) {
        var node = serializeAws_restXmlS3Retention(input.Retention, context).withName("Retention");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3SetObjectTaggingOperation = function (input, context) {
    var bodyNode = new __XmlNode("S3SetObjectTaggingOperation");
    if (input.TagSet !== undefined && input.TagSet !== null) {
        var nodes = serializeAws_restXmlS3TagSet(input.TagSet, context);
        var containerNode_21 = new __XmlNode("TagSet");
        nodes.map(function (node) {
            containerNode_21.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_21);
    }
    return bodyNode;
};
var serializeAws_restXmlS3Tag = function (input, context) {
    var bodyNode = new __XmlNode("S3Tag");
    if (input.Key !== undefined && input.Key !== null) {
        var node = new __XmlNode("TagKeyString").addChildNode(new __XmlText(input.Key)).withName("Key");
        bodyNode.addChildNode(node);
    }
    if (input.Value !== undefined && input.Value !== null) {
        var node = new __XmlNode("TagValueString").addChildNode(new __XmlText(input.Value)).withName("Value");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlS3TagSet = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = serializeAws_restXmlS3Tag(entry, context);
        return node.withName("member");
    });
};
var serializeAws_restXmlS3UserMetadata = function (input, context) {
    return Object.keys(input)
        .filter(function (key) { return input[key] != null; })
        .map(function (key) {
        var entryNode = new __XmlNode("entry");
        var keyNode = new __XmlNode("NonEmptyMaxLength1024String").addChildNode(new __XmlText(key)).withName("key");
        entryNode.addChildNode(keyNode);
        var node;
        node = new __XmlNode("MaxLength1024String").addChildNode(new __XmlText(input[key]));
        entryNode.addChildNode(node.withName("value"));
        return entryNode;
    });
};
var serializeAws_restXmlSelectionCriteria = function (input, context) {
    var bodyNode = new __XmlNode("SelectionCriteria");
    if (input.Delimiter !== undefined && input.Delimiter !== null) {
        var node = new __XmlNode("StorageLensPrefixLevelDelimiter")
            .addChildNode(new __XmlText(input.Delimiter))
            .withName("Delimiter");
        bodyNode.addChildNode(node);
    }
    if (input.MaxDepth !== undefined && input.MaxDepth !== null) {
        var node = new __XmlNode("StorageLensPrefixLevelMaxDepth")
            .addChildNode(new __XmlText(String(input.MaxDepth)))
            .withName("MaxDepth");
        bodyNode.addChildNode(node);
    }
    if (input.MinStorageBytesPercentage !== undefined && input.MinStorageBytesPercentage !== null) {
        var node = new __XmlNode("MinStorageBytesPercentage")
            .addChildNode(new __XmlText(String(input.MinStorageBytesPercentage)))
            .withName("MinStorageBytesPercentage");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlSSEKMS = function (input, context) {
    var bodyNode = new __XmlNode("SSE-KMS");
    if (input.KeyId !== undefined && input.KeyId !== null) {
        var node = new __XmlNode("SSEKMSKeyId").addChildNode(new __XmlText(input.KeyId)).withName("KeyId");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlSSES3 = function (input, context) {
    var bodyNode = new __XmlNode("SSE-S3");
    return bodyNode;
};
var serializeAws_restXmlStorageLensAwsOrg = function (input, context) {
    var bodyNode = new __XmlNode("StorageLensAwsOrg");
    if (input.Arn !== undefined && input.Arn !== null) {
        var node = new __XmlNode("AwsOrgArn").addChildNode(new __XmlText(input.Arn)).withName("Arn");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlStorageLensConfiguration = function (input, context) {
    var bodyNode = new __XmlNode("StorageLensConfiguration");
    if (input.Id !== undefined && input.Id !== null) {
        var node = new __XmlNode("ConfigId").addChildNode(new __XmlText(input.Id)).withName("Id");
        bodyNode.addChildNode(node);
    }
    if (input.AccountLevel !== undefined && input.AccountLevel !== null) {
        var node = serializeAws_restXmlAccountLevel(input.AccountLevel, context).withName("AccountLevel");
        bodyNode.addChildNode(node);
    }
    if (input.Include !== undefined && input.Include !== null) {
        var node = serializeAws_restXmlInclude(input.Include, context).withName("Include");
        bodyNode.addChildNode(node);
    }
    if (input.Exclude !== undefined && input.Exclude !== null) {
        var node = serializeAws_restXml_Exclude(input.Exclude, context).withName("Exclude");
        bodyNode.addChildNode(node);
    }
    if (input.DataExport !== undefined && input.DataExport !== null) {
        var node = serializeAws_restXmlStorageLensDataExport(input.DataExport, context).withName("DataExport");
        bodyNode.addChildNode(node);
    }
    if (input.IsEnabled !== undefined && input.IsEnabled !== null) {
        var node = new __XmlNode("IsEnabled").addChildNode(new __XmlText(String(input.IsEnabled))).withName("IsEnabled");
        bodyNode.addChildNode(node);
    }
    if (input.AwsOrg !== undefined && input.AwsOrg !== null) {
        var node = serializeAws_restXmlStorageLensAwsOrg(input.AwsOrg, context).withName("AwsOrg");
        bodyNode.addChildNode(node);
    }
    if (input.StorageLensArn !== undefined && input.StorageLensArn !== null) {
        var node = new __XmlNode("StorageLensArn")
            .addChildNode(new __XmlText(input.StorageLensArn))
            .withName("StorageLensArn");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlStorageLensDataExport = function (input, context) {
    var bodyNode = new __XmlNode("StorageLensDataExport");
    if (input.S3BucketDestination !== undefined && input.S3BucketDestination !== null) {
        var node = serializeAws_restXmlS3BucketDestination(input.S3BucketDestination, context).withName("S3BucketDestination");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlStorageLensDataExportEncryption = function (input, context) {
    var bodyNode = new __XmlNode("StorageLensDataExportEncryption");
    if (input.SSES3 !== undefined && input.SSES3 !== null) {
        var node = serializeAws_restXmlSSES3(input.SSES3, context).withName("SSE-S3");
        bodyNode.addChildNode(node);
    }
    if (input.SSEKMS !== undefined && input.SSEKMS !== null) {
        var node = serializeAws_restXmlSSEKMS(input.SSEKMS, context).withName("SSE-KMS");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlStorageLensTag = function (input, context) {
    var bodyNode = new __XmlNode("StorageLensTag");
    if (input.Key !== undefined && input.Key !== null) {
        var node = new __XmlNode("TagKeyString").addChildNode(new __XmlText(input.Key)).withName("Key");
        bodyNode.addChildNode(node);
    }
    if (input.Value !== undefined && input.Value !== null) {
        var node = new __XmlNode("TagValueString").addChildNode(new __XmlText(input.Value)).withName("Value");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlStorageLensTags = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = serializeAws_restXmlStorageLensTag(entry, context);
        return node.withName("Tag");
    });
};
var serializeAws_restXmlTagging = function (input, context) {
    var bodyNode = new __XmlNode("Tagging");
    if (input.TagSet !== undefined && input.TagSet !== null) {
        var nodes = serializeAws_restXmlS3TagSet(input.TagSet, context);
        var containerNode_22 = new __XmlNode("TagSet");
        nodes.map(function (node) {
            containerNode_22.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode_22);
    }
    return bodyNode;
};
var serializeAws_restXmlTransition = function (input, context) {
    var bodyNode = new __XmlNode("Transition");
    if (input.Date !== undefined && input.Date !== null) {
        var node = new __XmlNode("Date")
            .addChildNode(new __XmlText(input.Date.toISOString().split(".")[0] + "Z"))
            .withName("Date");
        bodyNode.addChildNode(node);
    }
    if (input.Days !== undefined && input.Days !== null) {
        var node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
        bodyNode.addChildNode(node);
    }
    if (input.StorageClass !== undefined && input.StorageClass !== null) {
        var node = new __XmlNode("TransitionStorageClass")
            .addChildNode(new __XmlText(input.StorageClass))
            .withName("StorageClass");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var serializeAws_restXmlTransitionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        var node = serializeAws_restXmlTransition(entry, context);
        return node.withName("Transition");
    });
};
var serializeAws_restXmlVpcConfiguration = function (input, context) {
    var bodyNode = new __XmlNode("VpcConfiguration");
    if (input.VpcId !== undefined && input.VpcId !== null) {
        var node = new __XmlNode("VpcId").addChildNode(new __XmlText(input.VpcId)).withName("VpcId");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
var deserializeAws_restXmlAbortIncompleteMultipartUpload = function (output, context) {
    var contents = {
        DaysAfterInitiation: undefined,
    };
    if (output["DaysAfterInitiation"] !== undefined) {
        contents.DaysAfterInitiation = parseInt(output["DaysAfterInitiation"]);
    }
    return contents;
};
var deserializeAws_restXmlAccessPoint = function (output, context) {
    var contents = {
        Name: undefined,
        NetworkOrigin: undefined,
        VpcConfiguration: undefined,
        Bucket: undefined,
        AccessPointArn: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["NetworkOrigin"] !== undefined) {
        contents.NetworkOrigin = output["NetworkOrigin"];
    }
    if (output["VpcConfiguration"] !== undefined) {
        contents.VpcConfiguration = deserializeAws_restXmlVpcConfiguration(output["VpcConfiguration"], context);
    }
    if (output["Bucket"] !== undefined) {
        contents.Bucket = output["Bucket"];
    }
    if (output["AccessPointArn"] !== undefined) {
        contents.AccessPointArn = output["AccessPointArn"];
    }
    return contents;
};
var deserializeAws_restXmlAccessPointList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlAccessPoint(entry, context);
    });
};
var deserializeAws_restXmlAccountLevel = function (output, context) {
    var contents = {
        ActivityMetrics: undefined,
        BucketLevel: undefined,
    };
    if (output["ActivityMetrics"] !== undefined) {
        contents.ActivityMetrics = deserializeAws_restXmlActivityMetrics(output["ActivityMetrics"], context);
    }
    if (output["BucketLevel"] !== undefined) {
        contents.BucketLevel = deserializeAws_restXmlBucketLevel(output["BucketLevel"], context);
    }
    return contents;
};
var deserializeAws_restXmlActivityMetrics = function (output, context) {
    var contents = {
        IsEnabled: undefined,
    };
    if (output["IsEnabled"] !== undefined) {
        contents.IsEnabled = output["IsEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_restXmlAwsLambdaTransformation = function (output, context) {
    var contents = {
        FunctionArn: undefined,
        FunctionPayload: undefined,
    };
    if (output["FunctionArn"] !== undefined) {
        contents.FunctionArn = output["FunctionArn"];
    }
    if (output["FunctionPayload"] !== undefined) {
        contents.FunctionPayload = output["FunctionPayload"];
    }
    return contents;
};
var deserializeAws_restXmlBucketLevel = function (output, context) {
    var contents = {
        ActivityMetrics: undefined,
        PrefixLevel: undefined,
    };
    if (output["ActivityMetrics"] !== undefined) {
        contents.ActivityMetrics = deserializeAws_restXmlActivityMetrics(output["ActivityMetrics"], context);
    }
    if (output["PrefixLevel"] !== undefined) {
        contents.PrefixLevel = deserializeAws_restXmlPrefixLevel(output["PrefixLevel"], context);
    }
    return contents;
};
var deserializeAws_restXmlBuckets = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restXml_Exclude = function (output, context) {
    var contents = {
        Buckets: undefined,
        Regions: undefined,
    };
    if (output.Buckets === "") {
        contents.Buckets = [];
    }
    if (output["Buckets"] !== undefined && output["Buckets"]["Arn"] !== undefined) {
        contents.Buckets = deserializeAws_restXmlBuckets(__getArrayIfSingleItem(output["Buckets"]["Arn"]), context);
    }
    if (output.Regions === "") {
        contents.Regions = [];
    }
    if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
        contents.Regions = deserializeAws_restXmlRegions(__getArrayIfSingleItem(output["Regions"]["Region"]), context);
    }
    return contents;
};
var deserializeAws_restXmlInclude = function (output, context) {
    var contents = {
        Buckets: undefined,
        Regions: undefined,
    };
    if (output.Buckets === "") {
        contents.Buckets = [];
    }
    if (output["Buckets"] !== undefined && output["Buckets"]["Arn"] !== undefined) {
        contents.Buckets = deserializeAws_restXmlBuckets(__getArrayIfSingleItem(output["Buckets"]["Arn"]), context);
    }
    if (output.Regions === "") {
        contents.Regions = [];
    }
    if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
        contents.Regions = deserializeAws_restXmlRegions(__getArrayIfSingleItem(output["Regions"]["Region"]), context);
    }
    return contents;
};
var deserializeAws_restXmlJobDescriptor = function (output, context) {
    var contents = {
        JobId: undefined,
        ConfirmationRequired: undefined,
        Description: undefined,
        JobArn: undefined,
        Status: undefined,
        Manifest: undefined,
        Operation: undefined,
        Priority: undefined,
        ProgressSummary: undefined,
        StatusUpdateReason: undefined,
        FailureReasons: undefined,
        Report: undefined,
        CreationTime: undefined,
        TerminationDate: undefined,
        RoleArn: undefined,
        SuspendedDate: undefined,
        SuspendedCause: undefined,
    };
    if (output["JobId"] !== undefined) {
        contents.JobId = output["JobId"];
    }
    if (output["ConfirmationRequired"] !== undefined) {
        contents.ConfirmationRequired = output["ConfirmationRequired"] == "true";
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["JobArn"] !== undefined) {
        contents.JobArn = output["JobArn"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Manifest"] !== undefined) {
        contents.Manifest = deserializeAws_restXmlJobManifest(output["Manifest"], context);
    }
    if (output["Operation"] !== undefined) {
        contents.Operation = deserializeAws_restXmlJobOperation(output["Operation"], context);
    }
    if (output["Priority"] !== undefined) {
        contents.Priority = parseInt(output["Priority"]);
    }
    if (output["ProgressSummary"] !== undefined) {
        contents.ProgressSummary = deserializeAws_restXmlJobProgressSummary(output["ProgressSummary"], context);
    }
    if (output["StatusUpdateReason"] !== undefined) {
        contents.StatusUpdateReason = output["StatusUpdateReason"];
    }
    if (output.FailureReasons === "") {
        contents.FailureReasons = [];
    }
    if (output["FailureReasons"] !== undefined && output["FailureReasons"]["member"] !== undefined) {
        contents.FailureReasons = deserializeAws_restXmlJobFailureList(__getArrayIfSingleItem(output["FailureReasons"]["member"]), context);
    }
    if (output["Report"] !== undefined) {
        contents.Report = deserializeAws_restXmlJobReport(output["Report"], context);
    }
    if (output["CreationTime"] !== undefined) {
        contents.CreationTime = new Date(output["CreationTime"]);
    }
    if (output["TerminationDate"] !== undefined) {
        contents.TerminationDate = new Date(output["TerminationDate"]);
    }
    if (output["RoleArn"] !== undefined) {
        contents.RoleArn = output["RoleArn"];
    }
    if (output["SuspendedDate"] !== undefined) {
        contents.SuspendedDate = new Date(output["SuspendedDate"]);
    }
    if (output["SuspendedCause"] !== undefined) {
        contents.SuspendedCause = output["SuspendedCause"];
    }
    return contents;
};
var deserializeAws_restXmlJobFailure = function (output, context) {
    var contents = {
        FailureCode: undefined,
        FailureReason: undefined,
    };
    if (output["FailureCode"] !== undefined) {
        contents.FailureCode = output["FailureCode"];
    }
    if (output["FailureReason"] !== undefined) {
        contents.FailureReason = output["FailureReason"];
    }
    return contents;
};
var deserializeAws_restXmlJobFailureList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlJobFailure(entry, context);
    });
};
var deserializeAws_restXmlJobListDescriptor = function (output, context) {
    var contents = {
        JobId: undefined,
        Description: undefined,
        Operation: undefined,
        Priority: undefined,
        Status: undefined,
        CreationTime: undefined,
        TerminationDate: undefined,
        ProgressSummary: undefined,
    };
    if (output["JobId"] !== undefined) {
        contents.JobId = output["JobId"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["Operation"] !== undefined) {
        contents.Operation = output["Operation"];
    }
    if (output["Priority"] !== undefined) {
        contents.Priority = parseInt(output["Priority"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["CreationTime"] !== undefined) {
        contents.CreationTime = new Date(output["CreationTime"]);
    }
    if (output["TerminationDate"] !== undefined) {
        contents.TerminationDate = new Date(output["TerminationDate"]);
    }
    if (output["ProgressSummary"] !== undefined) {
        contents.ProgressSummary = deserializeAws_restXmlJobProgressSummary(output["ProgressSummary"], context);
    }
    return contents;
};
var deserializeAws_restXmlJobListDescriptorList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlJobListDescriptor(entry, context);
    });
};
var deserializeAws_restXmlJobManifest = function (output, context) {
    var contents = {
        Spec: undefined,
        Location: undefined,
    };
    if (output["Spec"] !== undefined) {
        contents.Spec = deserializeAws_restXmlJobManifestSpec(output["Spec"], context);
    }
    if (output["Location"] !== undefined) {
        contents.Location = deserializeAws_restXmlJobManifestLocation(output["Location"], context);
    }
    return contents;
};
var deserializeAws_restXmlJobManifestFieldList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restXmlJobManifestLocation = function (output, context) {
    var contents = {
        ObjectArn: undefined,
        ObjectVersionId: undefined,
        ETag: undefined,
    };
    if (output["ObjectArn"] !== undefined) {
        contents.ObjectArn = output["ObjectArn"];
    }
    if (output["ObjectVersionId"] !== undefined) {
        contents.ObjectVersionId = output["ObjectVersionId"];
    }
    if (output["ETag"] !== undefined) {
        contents.ETag = output["ETag"];
    }
    return contents;
};
var deserializeAws_restXmlJobManifestSpec = function (output, context) {
    var contents = {
        Format: undefined,
        Fields: undefined,
    };
    if (output["Format"] !== undefined) {
        contents.Format = output["Format"];
    }
    if (output.Fields === "") {
        contents.Fields = [];
    }
    if (output["Fields"] !== undefined && output["Fields"]["member"] !== undefined) {
        contents.Fields = deserializeAws_restXmlJobManifestFieldList(__getArrayIfSingleItem(output["Fields"]["member"]), context);
    }
    return contents;
};
var deserializeAws_restXmlJobOperation = function (output, context) {
    var contents = {
        LambdaInvoke: undefined,
        S3PutObjectCopy: undefined,
        S3PutObjectAcl: undefined,
        S3PutObjectTagging: undefined,
        S3DeleteObjectTagging: undefined,
        S3InitiateRestoreObject: undefined,
        S3PutObjectLegalHold: undefined,
        S3PutObjectRetention: undefined,
    };
    if (output["LambdaInvoke"] !== undefined) {
        contents.LambdaInvoke = deserializeAws_restXmlLambdaInvokeOperation(output["LambdaInvoke"], context);
    }
    if (output["S3PutObjectCopy"] !== undefined) {
        contents.S3PutObjectCopy = deserializeAws_restXmlS3CopyObjectOperation(output["S3PutObjectCopy"], context);
    }
    if (output["S3PutObjectAcl"] !== undefined) {
        contents.S3PutObjectAcl = deserializeAws_restXmlS3SetObjectAclOperation(output["S3PutObjectAcl"], context);
    }
    if (output["S3PutObjectTagging"] !== undefined) {
        contents.S3PutObjectTagging = deserializeAws_restXmlS3SetObjectTaggingOperation(output["S3PutObjectTagging"], context);
    }
    if (output["S3DeleteObjectTagging"] !== undefined) {
        contents.S3DeleteObjectTagging = deserializeAws_restXmlS3DeleteObjectTaggingOperation(output["S3DeleteObjectTagging"], context);
    }
    if (output["S3InitiateRestoreObject"] !== undefined) {
        contents.S3InitiateRestoreObject = deserializeAws_restXmlS3InitiateRestoreObjectOperation(output["S3InitiateRestoreObject"], context);
    }
    if (output["S3PutObjectLegalHold"] !== undefined) {
        contents.S3PutObjectLegalHold = deserializeAws_restXmlS3SetObjectLegalHoldOperation(output["S3PutObjectLegalHold"], context);
    }
    if (output["S3PutObjectRetention"] !== undefined) {
        contents.S3PutObjectRetention = deserializeAws_restXmlS3SetObjectRetentionOperation(output["S3PutObjectRetention"], context);
    }
    return contents;
};
var deserializeAws_restXmlJobProgressSummary = function (output, context) {
    var contents = {
        TotalNumberOfTasks: undefined,
        NumberOfTasksSucceeded: undefined,
        NumberOfTasksFailed: undefined,
    };
    if (output["TotalNumberOfTasks"] !== undefined) {
        contents.TotalNumberOfTasks = parseInt(output["TotalNumberOfTasks"]);
    }
    if (output["NumberOfTasksSucceeded"] !== undefined) {
        contents.NumberOfTasksSucceeded = parseInt(output["NumberOfTasksSucceeded"]);
    }
    if (output["NumberOfTasksFailed"] !== undefined) {
        contents.NumberOfTasksFailed = parseInt(output["NumberOfTasksFailed"]);
    }
    return contents;
};
var deserializeAws_restXmlJobReport = function (output, context) {
    var contents = {
        Bucket: undefined,
        Format: undefined,
        Enabled: undefined,
        Prefix: undefined,
        ReportScope: undefined,
    };
    if (output["Bucket"] !== undefined) {
        contents.Bucket = output["Bucket"];
    }
    if (output["Format"] !== undefined) {
        contents.Format = output["Format"];
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output["ReportScope"] !== undefined) {
        contents.ReportScope = output["ReportScope"];
    }
    return contents;
};
var deserializeAws_restXmlLambdaInvokeOperation = function (output, context) {
    var contents = {
        FunctionArn: undefined,
    };
    if (output["FunctionArn"] !== undefined) {
        contents.FunctionArn = output["FunctionArn"];
    }
    return contents;
};
var deserializeAws_restXmlLifecycleExpiration = function (output, context) {
    var contents = {
        Date: undefined,
        Days: undefined,
        ExpiredObjectDeleteMarker: undefined,
    };
    if (output["Date"] !== undefined) {
        contents.Date = new Date(output["Date"]);
    }
    if (output["Days"] !== undefined) {
        contents.Days = parseInt(output["Days"]);
    }
    if (output["ExpiredObjectDeleteMarker"] !== undefined) {
        contents.ExpiredObjectDeleteMarker = output["ExpiredObjectDeleteMarker"] == "true";
    }
    return contents;
};
var deserializeAws_restXmlLifecycleRule = function (output, context) {
    var contents = {
        Expiration: undefined,
        ID: undefined,
        Filter: undefined,
        Status: undefined,
        Transitions: undefined,
        NoncurrentVersionTransitions: undefined,
        NoncurrentVersionExpiration: undefined,
        AbortIncompleteMultipartUpload: undefined,
    };
    if (output["Expiration"] !== undefined) {
        contents.Expiration = deserializeAws_restXmlLifecycleExpiration(output["Expiration"], context);
    }
    if (output["ID"] !== undefined) {
        contents.ID = output["ID"];
    }
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlLifecycleRuleFilter(output["Filter"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output.Transitions === "") {
        contents.Transitions = [];
    }
    if (output["Transitions"] !== undefined && output["Transitions"]["Transition"] !== undefined) {
        contents.Transitions = deserializeAws_restXmlTransitionList(__getArrayIfSingleItem(output["Transitions"]["Transition"]), context);
    }
    if (output.NoncurrentVersionTransitions === "") {
        contents.NoncurrentVersionTransitions = [];
    }
    if (output["NoncurrentVersionTransitions"] !== undefined &&
        output["NoncurrentVersionTransitions"]["NoncurrentVersionTransition"] !== undefined) {
        contents.NoncurrentVersionTransitions = deserializeAws_restXmlNoncurrentVersionTransitionList(__getArrayIfSingleItem(output["NoncurrentVersionTransitions"]["NoncurrentVersionTransition"]), context);
    }
    if (output["NoncurrentVersionExpiration"] !== undefined) {
        contents.NoncurrentVersionExpiration = deserializeAws_restXmlNoncurrentVersionExpiration(output["NoncurrentVersionExpiration"], context);
    }
    if (output["AbortIncompleteMultipartUpload"] !== undefined) {
        contents.AbortIncompleteMultipartUpload = deserializeAws_restXmlAbortIncompleteMultipartUpload(output["AbortIncompleteMultipartUpload"], context);
    }
    return contents;
};
var deserializeAws_restXmlLifecycleRuleAndOperator = function (output, context) {
    var contents = {
        Prefix: undefined,
        Tags: undefined,
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_restXmlLifecycleRuleFilter = function (output, context) {
    var contents = {
        Prefix: undefined,
        Tag: undefined,
        And: undefined,
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output["Tag"] !== undefined) {
        contents.Tag = deserializeAws_restXmlS3Tag(output["Tag"], context);
    }
    if (output["And"] !== undefined) {
        contents.And = deserializeAws_restXmlLifecycleRuleAndOperator(output["And"], context);
    }
    return contents;
};
var deserializeAws_restXmlLifecycleRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlLifecycleRule(entry, context);
    });
};
var deserializeAws_restXmlListStorageLensConfigurationEntry = function (output, context) {
    var contents = {
        Id: undefined,
        StorageLensArn: undefined,
        HomeRegion: undefined,
        IsEnabled: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["StorageLensArn"] !== undefined) {
        contents.StorageLensArn = output["StorageLensArn"];
    }
    if (output["HomeRegion"] !== undefined) {
        contents.HomeRegion = output["HomeRegion"];
    }
    if (output["IsEnabled"] !== undefined) {
        contents.IsEnabled = output["IsEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_restXmlNoncurrentVersionExpiration = function (output, context) {
    var contents = {
        NoncurrentDays: undefined,
    };
    if (output["NoncurrentDays"] !== undefined) {
        contents.NoncurrentDays = parseInt(output["NoncurrentDays"]);
    }
    return contents;
};
var deserializeAws_restXmlNoncurrentVersionTransition = function (output, context) {
    var contents = {
        NoncurrentDays: undefined,
        StorageClass: undefined,
    };
    if (output["NoncurrentDays"] !== undefined) {
        contents.NoncurrentDays = parseInt(output["NoncurrentDays"]);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = output["StorageClass"];
    }
    return contents;
};
var deserializeAws_restXmlNoncurrentVersionTransitionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlNoncurrentVersionTransition(entry, context);
    });
};
var deserializeAws_restXmlObjectLambdaAccessPoint = function (output, context) {
    var contents = {
        Name: undefined,
        ObjectLambdaAccessPointArn: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["ObjectLambdaAccessPointArn"] !== undefined) {
        contents.ObjectLambdaAccessPointArn = output["ObjectLambdaAccessPointArn"];
    }
    return contents;
};
var deserializeAws_restXmlObjectLambdaAccessPointList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlObjectLambdaAccessPoint(entry, context);
    });
};
var deserializeAws_restXmlObjectLambdaAllowedFeaturesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restXmlObjectLambdaConfiguration = function (output, context) {
    var contents = {
        SupportingAccessPoint: undefined,
        CloudWatchMetricsEnabled: undefined,
        AllowedFeatures: undefined,
        TransformationConfigurations: undefined,
    };
    if (output["SupportingAccessPoint"] !== undefined) {
        contents.SupportingAccessPoint = output["SupportingAccessPoint"];
    }
    if (output["CloudWatchMetricsEnabled"] !== undefined) {
        contents.CloudWatchMetricsEnabled = output["CloudWatchMetricsEnabled"] == "true";
    }
    if (output.AllowedFeatures === "") {
        contents.AllowedFeatures = [];
    }
    if (output["AllowedFeatures"] !== undefined && output["AllowedFeatures"]["AllowedFeature"] !== undefined) {
        contents.AllowedFeatures = deserializeAws_restXmlObjectLambdaAllowedFeaturesList(__getArrayIfSingleItem(output["AllowedFeatures"]["AllowedFeature"]), context);
    }
    if (output.TransformationConfigurations === "") {
        contents.TransformationConfigurations = [];
    }
    if (output["TransformationConfigurations"] !== undefined &&
        output["TransformationConfigurations"]["TransformationConfiguration"] !== undefined) {
        contents.TransformationConfigurations = deserializeAws_restXmlObjectLambdaTransformationConfigurationsList(__getArrayIfSingleItem(output["TransformationConfigurations"]["TransformationConfiguration"]), context);
    }
    return contents;
};
var deserializeAws_restXmlObjectLambdaContentTransformation = function (output, context) {
    if (output["AwsLambda"] !== undefined) {
        return {
            AwsLambda: deserializeAws_restXmlAwsLambdaTransformation(output["AwsLambda"], context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restXmlObjectLambdaTransformationConfiguration = function (output, context) {
    var contents = {
        Actions: undefined,
        ContentTransformation: undefined,
    };
    if (output.Actions === "") {
        contents.Actions = [];
    }
    if (output["Actions"] !== undefined && output["Actions"]["Action"] !== undefined) {
        contents.Actions = deserializeAws_restXmlObjectLambdaTransformationConfigurationActionsList(__getArrayIfSingleItem(output["Actions"]["Action"]), context);
    }
    if (output["ContentTransformation"] !== undefined) {
        contents.ContentTransformation = deserializeAws_restXmlObjectLambdaContentTransformation(output["ContentTransformation"], context);
    }
    return contents;
};
var deserializeAws_restXmlObjectLambdaTransformationConfigurationActionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restXmlObjectLambdaTransformationConfigurationsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlObjectLambdaTransformationConfiguration(entry, context);
    });
};
var deserializeAws_restXmlPolicyStatus = function (output, context) {
    var contents = {
        IsPublic: undefined,
    };
    if (output["IsPublic"] !== undefined) {
        contents.IsPublic = output["IsPublic"] == "true";
    }
    return contents;
};
var deserializeAws_restXmlPrefixLevel = function (output, context) {
    var contents = {
        StorageMetrics: undefined,
    };
    if (output["StorageMetrics"] !== undefined) {
        contents.StorageMetrics = deserializeAws_restXmlPrefixLevelStorageMetrics(output["StorageMetrics"], context);
    }
    return contents;
};
var deserializeAws_restXmlPrefixLevelStorageMetrics = function (output, context) {
    var contents = {
        IsEnabled: undefined,
        SelectionCriteria: undefined,
    };
    if (output["IsEnabled"] !== undefined) {
        contents.IsEnabled = output["IsEnabled"] == "true";
    }
    if (output["SelectionCriteria"] !== undefined) {
        contents.SelectionCriteria = deserializeAws_restXmlSelectionCriteria(output["SelectionCriteria"], context);
    }
    return contents;
};
var deserializeAws_restXmlPublicAccessBlockConfiguration = function (output, context) {
    var contents = {
        BlockPublicAcls: undefined,
        IgnorePublicAcls: undefined,
        BlockPublicPolicy: undefined,
        RestrictPublicBuckets: undefined,
    };
    if (output["BlockPublicAcls"] !== undefined) {
        contents.BlockPublicAcls = output["BlockPublicAcls"] == "true";
    }
    if (output["IgnorePublicAcls"] !== undefined) {
        contents.IgnorePublicAcls = output["IgnorePublicAcls"] == "true";
    }
    if (output["BlockPublicPolicy"] !== undefined) {
        contents.BlockPublicPolicy = output["BlockPublicPolicy"] == "true";
    }
    if (output["RestrictPublicBuckets"] !== undefined) {
        contents.RestrictPublicBuckets = output["RestrictPublicBuckets"] == "true";
    }
    return contents;
};
var deserializeAws_restXmlRegionalBucket = function (output, context) {
    var contents = {
        Bucket: undefined,
        BucketArn: undefined,
        PublicAccessBlockEnabled: undefined,
        CreationDate: undefined,
        OutpostId: undefined,
    };
    if (output["Bucket"] !== undefined) {
        contents.Bucket = output["Bucket"];
    }
    if (output["BucketArn"] !== undefined) {
        contents.BucketArn = output["BucketArn"];
    }
    if (output["PublicAccessBlockEnabled"] !== undefined) {
        contents.PublicAccessBlockEnabled = output["PublicAccessBlockEnabled"] == "true";
    }
    if (output["CreationDate"] !== undefined) {
        contents.CreationDate = new Date(output["CreationDate"]);
    }
    if (output["OutpostId"] !== undefined) {
        contents.OutpostId = output["OutpostId"];
    }
    return contents;
};
var deserializeAws_restXmlRegionalBucketList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlRegionalBucket(entry, context);
    });
};
var deserializeAws_restXmlRegions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restXmlS3AccessControlList = function (output, context) {
    var contents = {
        Owner: undefined,
        Grants: undefined,
    };
    if (output["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlS3ObjectOwner(output["Owner"], context);
    }
    if (output.Grants === "") {
        contents.Grants = [];
    }
    if (output["Grants"] !== undefined && output["Grants"]["member"] !== undefined) {
        contents.Grants = deserializeAws_restXmlS3GrantList(__getArrayIfSingleItem(output["Grants"]["member"]), context);
    }
    return contents;
};
var deserializeAws_restXmlS3AccessControlPolicy = function (output, context) {
    var contents = {
        AccessControlList: undefined,
        CannedAccessControlList: undefined,
    };
    if (output["AccessControlList"] !== undefined) {
        contents.AccessControlList = deserializeAws_restXmlS3AccessControlList(output["AccessControlList"], context);
    }
    if (output["CannedAccessControlList"] !== undefined) {
        contents.CannedAccessControlList = output["CannedAccessControlList"];
    }
    return contents;
};
var deserializeAws_restXmlS3BucketDestination = function (output, context) {
    var contents = {
        Format: undefined,
        OutputSchemaVersion: undefined,
        AccountId: undefined,
        Arn: undefined,
        Prefix: undefined,
        Encryption: undefined,
    };
    if (output["Format"] !== undefined) {
        contents.Format = output["Format"];
    }
    if (output["OutputSchemaVersion"] !== undefined) {
        contents.OutputSchemaVersion = output["OutputSchemaVersion"];
    }
    if (output["AccountId"] !== undefined) {
        contents.AccountId = output["AccountId"];
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output["Encryption"] !== undefined) {
        contents.Encryption = deserializeAws_restXmlStorageLensDataExportEncryption(output["Encryption"], context);
    }
    return contents;
};
var deserializeAws_restXmlS3CopyObjectOperation = function (output, context) {
    var contents = {
        TargetResource: undefined,
        CannedAccessControlList: undefined,
        AccessControlGrants: undefined,
        MetadataDirective: undefined,
        ModifiedSinceConstraint: undefined,
        NewObjectMetadata: undefined,
        NewObjectTagging: undefined,
        RedirectLocation: undefined,
        RequesterPays: undefined,
        StorageClass: undefined,
        UnModifiedSinceConstraint: undefined,
        SSEAwsKmsKeyId: undefined,
        TargetKeyPrefix: undefined,
        ObjectLockLegalHoldStatus: undefined,
        ObjectLockMode: undefined,
        ObjectLockRetainUntilDate: undefined,
        BucketKeyEnabled: undefined,
    };
    if (output["TargetResource"] !== undefined) {
        contents.TargetResource = output["TargetResource"];
    }
    if (output["CannedAccessControlList"] !== undefined) {
        contents.CannedAccessControlList = output["CannedAccessControlList"];
    }
    if (output.AccessControlGrants === "") {
        contents.AccessControlGrants = [];
    }
    if (output["AccessControlGrants"] !== undefined && output["AccessControlGrants"]["member"] !== undefined) {
        contents.AccessControlGrants = deserializeAws_restXmlS3GrantList(__getArrayIfSingleItem(output["AccessControlGrants"]["member"]), context);
    }
    if (output["MetadataDirective"] !== undefined) {
        contents.MetadataDirective = output["MetadataDirective"];
    }
    if (output["ModifiedSinceConstraint"] !== undefined) {
        contents.ModifiedSinceConstraint = new Date(output["ModifiedSinceConstraint"]);
    }
    if (output["NewObjectMetadata"] !== undefined) {
        contents.NewObjectMetadata = deserializeAws_restXmlS3ObjectMetadata(output["NewObjectMetadata"], context);
    }
    if (output.NewObjectTagging === "") {
        contents.NewObjectTagging = [];
    }
    if (output["NewObjectTagging"] !== undefined && output["NewObjectTagging"]["member"] !== undefined) {
        contents.NewObjectTagging = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(output["NewObjectTagging"]["member"]), context);
    }
    if (output["RedirectLocation"] !== undefined) {
        contents.RedirectLocation = output["RedirectLocation"];
    }
    if (output["RequesterPays"] !== undefined) {
        contents.RequesterPays = output["RequesterPays"] == "true";
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = output["StorageClass"];
    }
    if (output["UnModifiedSinceConstraint"] !== undefined) {
        contents.UnModifiedSinceConstraint = new Date(output["UnModifiedSinceConstraint"]);
    }
    if (output["SSEAwsKmsKeyId"] !== undefined) {
        contents.SSEAwsKmsKeyId = output["SSEAwsKmsKeyId"];
    }
    if (output["TargetKeyPrefix"] !== undefined) {
        contents.TargetKeyPrefix = output["TargetKeyPrefix"];
    }
    if (output["ObjectLockLegalHoldStatus"] !== undefined) {
        contents.ObjectLockLegalHoldStatus = output["ObjectLockLegalHoldStatus"];
    }
    if (output["ObjectLockMode"] !== undefined) {
        contents.ObjectLockMode = output["ObjectLockMode"];
    }
    if (output["ObjectLockRetainUntilDate"] !== undefined) {
        contents.ObjectLockRetainUntilDate = new Date(output["ObjectLockRetainUntilDate"]);
    }
    if (output["BucketKeyEnabled"] !== undefined) {
        contents.BucketKeyEnabled = output["BucketKeyEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_restXmlS3DeleteObjectTaggingOperation = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_restXmlS3Grant = function (output, context) {
    var contents = {
        Grantee: undefined,
        Permission: undefined,
    };
    if (output["Grantee"] !== undefined) {
        contents.Grantee = deserializeAws_restXmlS3Grantee(output["Grantee"], context);
    }
    if (output["Permission"] !== undefined) {
        contents.Permission = output["Permission"];
    }
    return contents;
};
var deserializeAws_restXmlS3Grantee = function (output, context) {
    var contents = {
        TypeIdentifier: undefined,
        Identifier: undefined,
        DisplayName: undefined,
    };
    if (output["TypeIdentifier"] !== undefined) {
        contents.TypeIdentifier = output["TypeIdentifier"];
    }
    if (output["Identifier"] !== undefined) {
        contents.Identifier = output["Identifier"];
    }
    if (output["DisplayName"] !== undefined) {
        contents.DisplayName = output["DisplayName"];
    }
    return contents;
};
var deserializeAws_restXmlS3GrantList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlS3Grant(entry, context);
    });
};
var deserializeAws_restXmlS3InitiateRestoreObjectOperation = function (output, context) {
    var contents = {
        ExpirationInDays: undefined,
        GlacierJobTier: undefined,
    };
    if (output["ExpirationInDays"] !== undefined) {
        contents.ExpirationInDays = parseInt(output["ExpirationInDays"]);
    }
    if (output["GlacierJobTier"] !== undefined) {
        contents.GlacierJobTier = output["GlacierJobTier"];
    }
    return contents;
};
var deserializeAws_restXmlS3ObjectLockLegalHold = function (output, context) {
    var contents = {
        Status: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_restXmlS3ObjectMetadata = function (output, context) {
    var contents = {
        CacheControl: undefined,
        ContentDisposition: undefined,
        ContentEncoding: undefined,
        ContentLanguage: undefined,
        UserMetadata: undefined,
        ContentLength: undefined,
        ContentMD5: undefined,
        ContentType: undefined,
        HttpExpiresDate: undefined,
        RequesterCharged: undefined,
        SSEAlgorithm: undefined,
    };
    if (output["CacheControl"] !== undefined) {
        contents.CacheControl = output["CacheControl"];
    }
    if (output["ContentDisposition"] !== undefined) {
        contents.ContentDisposition = output["ContentDisposition"];
    }
    if (output["ContentEncoding"] !== undefined) {
        contents.ContentEncoding = output["ContentEncoding"];
    }
    if (output["ContentLanguage"] !== undefined) {
        contents.ContentLanguage = output["ContentLanguage"];
    }
    if (output.UserMetadata === "") {
        contents.UserMetadata = {};
    }
    if (output["UserMetadata"] !== undefined && output["UserMetadata"]["entry"] !== undefined) {
        contents.UserMetadata = deserializeAws_restXmlS3UserMetadata(__getArrayIfSingleItem(output["UserMetadata"]["entry"]), context);
    }
    if (output["ContentLength"] !== undefined) {
        contents.ContentLength = parseInt(output["ContentLength"]);
    }
    if (output["ContentMD5"] !== undefined) {
        contents.ContentMD5 = output["ContentMD5"];
    }
    if (output["ContentType"] !== undefined) {
        contents.ContentType = output["ContentType"];
    }
    if (output["HttpExpiresDate"] !== undefined) {
        contents.HttpExpiresDate = new Date(output["HttpExpiresDate"]);
    }
    if (output["RequesterCharged"] !== undefined) {
        contents.RequesterCharged = output["RequesterCharged"] == "true";
    }
    if (output["SSEAlgorithm"] !== undefined) {
        contents.SSEAlgorithm = output["SSEAlgorithm"];
    }
    return contents;
};
var deserializeAws_restXmlS3ObjectOwner = function (output, context) {
    var contents = {
        ID: undefined,
        DisplayName: undefined,
    };
    if (output["ID"] !== undefined) {
        contents.ID = output["ID"];
    }
    if (output["DisplayName"] !== undefined) {
        contents.DisplayName = output["DisplayName"];
    }
    return contents;
};
var deserializeAws_restXmlS3Retention = function (output, context) {
    var contents = {
        RetainUntilDate: undefined,
        Mode: undefined,
    };
    if (output["RetainUntilDate"] !== undefined) {
        contents.RetainUntilDate = new Date(output["RetainUntilDate"]);
    }
    if (output["Mode"] !== undefined) {
        contents.Mode = output["Mode"];
    }
    return contents;
};
var deserializeAws_restXmlS3SetObjectAclOperation = function (output, context) {
    var contents = {
        AccessControlPolicy: undefined,
    };
    if (output["AccessControlPolicy"] !== undefined) {
        contents.AccessControlPolicy = deserializeAws_restXmlS3AccessControlPolicy(output["AccessControlPolicy"], context);
    }
    return contents;
};
var deserializeAws_restXmlS3SetObjectLegalHoldOperation = function (output, context) {
    var contents = {
        LegalHold: undefined,
    };
    if (output["LegalHold"] !== undefined) {
        contents.LegalHold = deserializeAws_restXmlS3ObjectLockLegalHold(output["LegalHold"], context);
    }
    return contents;
};
var deserializeAws_restXmlS3SetObjectRetentionOperation = function (output, context) {
    var contents = {
        BypassGovernanceRetention: undefined,
        Retention: undefined,
    };
    if (output["BypassGovernanceRetention"] !== undefined) {
        contents.BypassGovernanceRetention = output["BypassGovernanceRetention"] == "true";
    }
    if (output["Retention"] !== undefined) {
        contents.Retention = deserializeAws_restXmlS3Retention(output["Retention"], context);
    }
    return contents;
};
var deserializeAws_restXmlS3SetObjectTaggingOperation = function (output, context) {
    var contents = {
        TagSet: undefined,
    };
    if (output.TagSet === "") {
        contents.TagSet = [];
    }
    if (output["TagSet"] !== undefined && output["TagSet"]["member"] !== undefined) {
        contents.TagSet = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(output["TagSet"]["member"]), context);
    }
    return contents;
};
var deserializeAws_restXmlS3Tag = function (output, context) {
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
var deserializeAws_restXmlS3TagSet = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlS3Tag(entry, context);
    });
};
var deserializeAws_restXmlS3UserMetadata = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["key"]] = pair["value"], _a));
    }, {});
};
var deserializeAws_restXmlSelectionCriteria = function (output, context) {
    var contents = {
        Delimiter: undefined,
        MaxDepth: undefined,
        MinStorageBytesPercentage: undefined,
    };
    if (output["Delimiter"] !== undefined) {
        contents.Delimiter = output["Delimiter"];
    }
    if (output["MaxDepth"] !== undefined) {
        contents.MaxDepth = parseInt(output["MaxDepth"]);
    }
    if (output["MinStorageBytesPercentage"] !== undefined) {
        contents.MinStorageBytesPercentage = parseFloat(output["MinStorageBytesPercentage"]);
    }
    return contents;
};
var deserializeAws_restXmlSSEKMS = function (output, context) {
    var contents = {
        KeyId: undefined,
    };
    if (output["KeyId"] !== undefined) {
        contents.KeyId = output["KeyId"];
    }
    return contents;
};
var deserializeAws_restXmlSSES3 = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_restXmlStorageLensAwsOrg = function (output, context) {
    var contents = {
        Arn: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    return contents;
};
var deserializeAws_restXmlStorageLensConfiguration = function (output, context) {
    var contents = {
        Id: undefined,
        AccountLevel: undefined,
        Include: undefined,
        Exclude: undefined,
        DataExport: undefined,
        IsEnabled: undefined,
        AwsOrg: undefined,
        StorageLensArn: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["AccountLevel"] !== undefined) {
        contents.AccountLevel = deserializeAws_restXmlAccountLevel(output["AccountLevel"], context);
    }
    if (output["Include"] !== undefined) {
        contents.Include = deserializeAws_restXmlInclude(output["Include"], context);
    }
    if (output["Exclude"] !== undefined) {
        contents.Exclude = deserializeAws_restXml_Exclude(output["Exclude"], context);
    }
    if (output["DataExport"] !== undefined) {
        contents.DataExport = deserializeAws_restXmlStorageLensDataExport(output["DataExport"], context);
    }
    if (output["IsEnabled"] !== undefined) {
        contents.IsEnabled = output["IsEnabled"] == "true";
    }
    if (output["AwsOrg"] !== undefined) {
        contents.AwsOrg = deserializeAws_restXmlStorageLensAwsOrg(output["AwsOrg"], context);
    }
    if (output["StorageLensArn"] !== undefined) {
        contents.StorageLensArn = output["StorageLensArn"];
    }
    return contents;
};
var deserializeAws_restXmlStorageLensConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlListStorageLensConfigurationEntry(entry, context);
    });
};
var deserializeAws_restXmlStorageLensDataExport = function (output, context) {
    var contents = {
        S3BucketDestination: undefined,
    };
    if (output["S3BucketDestination"] !== undefined) {
        contents.S3BucketDestination = deserializeAws_restXmlS3BucketDestination(output["S3BucketDestination"], context);
    }
    return contents;
};
var deserializeAws_restXmlStorageLensDataExportEncryption = function (output, context) {
    var contents = {
        SSES3: undefined,
        SSEKMS: undefined,
    };
    if (output["SSE-S3"] !== undefined) {
        contents.SSES3 = deserializeAws_restXmlSSES3(output["SSE-S3"], context);
    }
    if (output["SSE-KMS"] !== undefined) {
        contents.SSEKMS = deserializeAws_restXmlSSEKMS(output["SSE-KMS"], context);
    }
    return contents;
};
var deserializeAws_restXmlStorageLensTag = function (output, context) {
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
var deserializeAws_restXmlStorageLensTags = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlStorageLensTag(entry, context);
    });
};
var deserializeAws_restXmlTransition = function (output, context) {
    var contents = {
        Date: undefined,
        Days: undefined,
        StorageClass: undefined,
    };
    if (output["Date"] !== undefined) {
        contents.Date = new Date(output["Date"]);
    }
    if (output["Days"] !== undefined) {
        contents.Days = parseInt(output["Days"]);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = output["StorageClass"];
    }
    return contents;
};
var deserializeAws_restXmlTransitionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlTransition(entry, context);
    });
};
var deserializeAws_restXmlVpcConfiguration = function (output, context) {
    var contents = {
        VpcId: undefined,
    };
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
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