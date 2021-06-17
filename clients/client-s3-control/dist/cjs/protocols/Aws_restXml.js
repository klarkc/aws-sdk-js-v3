"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restXmlCreateAccessPointCommand = exports.serializeAws_restXmlUpdateJobStatusCommand = exports.serializeAws_restXmlUpdateJobPriorityCommand = exports.serializeAws_restXmlPutStorageLensConfigurationTaggingCommand = exports.serializeAws_restXmlPutStorageLensConfigurationCommand = exports.serializeAws_restXmlPutPublicAccessBlockCommand = exports.serializeAws_restXmlPutJobTaggingCommand = exports.serializeAws_restXmlPutBucketTaggingCommand = exports.serializeAws_restXmlPutBucketPolicyCommand = exports.serializeAws_restXmlPutBucketLifecycleConfigurationCommand = exports.serializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand = exports.serializeAws_restXmlPutAccessPointPolicyCommand = exports.serializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand = exports.serializeAws_restXmlListStorageLensConfigurationsCommand = exports.serializeAws_restXmlListRegionalBucketsCommand = exports.serializeAws_restXmlListJobsCommand = exports.serializeAws_restXmlListAccessPointsForObjectLambdaCommand = exports.serializeAws_restXmlListAccessPointsCommand = exports.serializeAws_restXmlGetStorageLensConfigurationTaggingCommand = exports.serializeAws_restXmlGetStorageLensConfigurationCommand = exports.serializeAws_restXmlGetPublicAccessBlockCommand = exports.serializeAws_restXmlGetJobTaggingCommand = exports.serializeAws_restXmlGetBucketTaggingCommand = exports.serializeAws_restXmlGetBucketPolicyCommand = exports.serializeAws_restXmlGetBucketLifecycleConfigurationCommand = exports.serializeAws_restXmlGetBucketCommand = exports.serializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand = exports.serializeAws_restXmlGetAccessPointPolicyStatusCommand = exports.serializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand = exports.serializeAws_restXmlGetAccessPointPolicyCommand = exports.serializeAws_restXmlGetAccessPointForObjectLambdaCommand = exports.serializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand = exports.serializeAws_restXmlGetAccessPointCommand = exports.serializeAws_restXmlDescribeJobCommand = exports.serializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand = exports.serializeAws_restXmlDeleteStorageLensConfigurationCommand = exports.serializeAws_restXmlDeletePublicAccessBlockCommand = exports.serializeAws_restXmlDeleteJobTaggingCommand = exports.serializeAws_restXmlDeleteBucketTaggingCommand = exports.serializeAws_restXmlDeleteBucketPolicyCommand = exports.serializeAws_restXmlDeleteBucketLifecycleConfigurationCommand = exports.serializeAws_restXmlDeleteBucketCommand = exports.serializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand = exports.serializeAws_restXmlDeleteAccessPointPolicyCommand = exports.serializeAws_restXmlDeleteAccessPointForObjectLambdaCommand = exports.serializeAws_restXmlDeleteAccessPointCommand = exports.serializeAws_restXmlCreateJobCommand = exports.serializeAws_restXmlCreateBucketCommand = exports.serializeAws_restXmlCreateAccessPointForObjectLambdaCommand = exports.serializeAws_restXmlCreateAccessPointCommand = void 0;
exports.deserializeAws_restXmlUpdateJobStatusCommand = exports.deserializeAws_restXmlUpdateJobPriorityCommand = exports.deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand = exports.deserializeAws_restXmlPutStorageLensConfigurationCommand = exports.deserializeAws_restXmlPutPublicAccessBlockCommand = exports.deserializeAws_restXmlPutJobTaggingCommand = exports.deserializeAws_restXmlPutBucketTaggingCommand = exports.deserializeAws_restXmlPutBucketPolicyCommand = exports.deserializeAws_restXmlPutBucketLifecycleConfigurationCommand = exports.deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand = exports.deserializeAws_restXmlPutAccessPointPolicyCommand = exports.deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand = exports.deserializeAws_restXmlListStorageLensConfigurationsCommand = exports.deserializeAws_restXmlListRegionalBucketsCommand = exports.deserializeAws_restXmlListJobsCommand = exports.deserializeAws_restXmlListAccessPointsForObjectLambdaCommand = exports.deserializeAws_restXmlListAccessPointsCommand = exports.deserializeAws_restXmlGetStorageLensConfigurationTaggingCommand = exports.deserializeAws_restXmlGetStorageLensConfigurationCommand = exports.deserializeAws_restXmlGetPublicAccessBlockCommand = exports.deserializeAws_restXmlGetJobTaggingCommand = exports.deserializeAws_restXmlGetBucketTaggingCommand = exports.deserializeAws_restXmlGetBucketPolicyCommand = exports.deserializeAws_restXmlGetBucketLifecycleConfigurationCommand = exports.deserializeAws_restXmlGetBucketCommand = exports.deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand = exports.deserializeAws_restXmlGetAccessPointPolicyStatusCommand = exports.deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand = exports.deserializeAws_restXmlGetAccessPointPolicyCommand = exports.deserializeAws_restXmlGetAccessPointForObjectLambdaCommand = exports.deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand = exports.deserializeAws_restXmlGetAccessPointCommand = exports.deserializeAws_restXmlDescribeJobCommand = exports.deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand = exports.deserializeAws_restXmlDeleteStorageLensConfigurationCommand = exports.deserializeAws_restXmlDeletePublicAccessBlockCommand = exports.deserializeAws_restXmlDeleteJobTaggingCommand = exports.deserializeAws_restXmlDeleteBucketTaggingCommand = exports.deserializeAws_restXmlDeleteBucketPolicyCommand = exports.deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommand = exports.deserializeAws_restXmlDeleteBucketCommand = exports.deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand = exports.deserializeAws_restXmlDeleteAccessPointPolicyCommand = exports.deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommand = exports.deserializeAws_restXmlDeleteAccessPointCommand = exports.deserializeAws_restXmlCreateJobCommand = exports.deserializeAws_restXmlCreateBucketCommand = exports.deserializeAws_restXmlCreateAccessPointForObjectLambdaCommand = void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const xml_builder_1 = require("@aws-sdk/xml-builder");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const uuid_1 = require("uuid");
const serializeAws_restXmlCreateAccessPointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspoint/{Name}";
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
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateAccessPointRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.Bucket !== undefined) {
        const node = new xml_builder_1.XmlNode("BucketName").addChildNode(new xml_builder_1.XmlText(input.Bucket)).withName("Bucket");
        bodyNode.addChildNode(node);
    }
    if (input.PublicAccessBlockConfiguration !== undefined) {
        const node = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context).withName("PublicAccessBlockConfiguration");
        bodyNode.addChildNode(node);
    }
    if (input.VpcConfiguration !== undefined) {
        const node = serializeAws_restXmlVpcConfiguration(input.VpcConfiguration, context).withName("VpcConfiguration");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlCreateAccessPointCommand = serializeAws_restXmlCreateAccessPointCommand;
const serializeAws_restXmlCreateAccessPointForObjectLambdaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}";
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
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateAccessPointForObjectLambdaRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.Configuration !== undefined) {
        const node = serializeAws_restXmlObjectLambdaConfiguration(input.Configuration, context).withName("Configuration");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlCreateAccessPointForObjectLambdaCommand = serializeAws_restXmlCreateAccessPointForObjectLambdaCommand;
const serializeAws_restXmlCreateBucketCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL }),
        ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl }),
        ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead }),
        ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP }),
        ...(isSerializableHeaderValue(input.GrantWrite) && { "x-amz-grant-write": input.GrantWrite }),
        ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP }),
        ...(isSerializableHeaderValue(input.ObjectLockEnabledForBucket) && {
            "x-amz-bucket-object-lock-enabled": input.ObjectLockEnabledForBucket.toString(),
        }),
        ...(isSerializableHeaderValue(input.OutpostId) && { "x-amz-outpost-id": input.OutpostId }),
    };
    let resolvedPath = "/v20180820/bucket/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    if (input.CreateBucketConfiguration !== undefined) {
        body = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
    }
    let contents;
    if (input.CreateBucketConfiguration !== undefined) {
        contents = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
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
exports.serializeAws_restXmlCreateBucketCommand = serializeAws_restXmlCreateBucketCommand;
const serializeAws_restXmlCreateJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/jobs";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateJobRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength64String")
            .addChildNode(new xml_builder_1.XmlText(input.ClientRequestToken))
            .withName("ClientRequestToken");
        bodyNode.addChildNode(node);
    }
    if (input.ConfirmationRequired !== undefined) {
        const node = new xml_builder_1.XmlNode("ConfirmationRequired")
            .addChildNode(new xml_builder_1.XmlText(String(input.ConfirmationRequired)))
            .withName("ConfirmationRequired");
        bodyNode.addChildNode(node);
    }
    if (input.Description !== undefined) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength256String")
            .addChildNode(new xml_builder_1.XmlText(input.Description))
            .withName("Description");
        bodyNode.addChildNode(node);
    }
    if (input.Manifest !== undefined) {
        const node = serializeAws_restXmlJobManifest(input.Manifest, context).withName("Manifest");
        bodyNode.addChildNode(node);
    }
    if (input.Operation !== undefined) {
        const node = serializeAws_restXmlJobOperation(input.Operation, context).withName("Operation");
        bodyNode.addChildNode(node);
    }
    if (input.Priority !== undefined) {
        const node = new xml_builder_1.XmlNode("JobPriority").addChildNode(new xml_builder_1.XmlText(String(input.Priority))).withName("Priority");
        bodyNode.addChildNode(node);
    }
    if (input.Report !== undefined) {
        const node = serializeAws_restXmlJobReport(input.Report, context).withName("Report");
        bodyNode.addChildNode(node);
    }
    if (input.RoleArn !== undefined) {
        const node = new xml_builder_1.XmlNode("IAMRoleArn").addChildNode(new xml_builder_1.XmlText(input.RoleArn)).withName("RoleArn");
        bodyNode.addChildNode(node);
    }
    if (input.Tags !== undefined) {
        const nodes = serializeAws_restXmlS3TagSet(input.Tags, context);
        const containerNode = new xml_builder_1.XmlNode("Tags");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    body += bodyNode.toString();
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlCreateJobCommand = serializeAws_restXmlCreateJobCommand;
const serializeAws_restXmlDeleteAccessPointCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspoint/{Name}";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeleteAccessPointCommand = serializeAws_restXmlDeleteAccessPointCommand;
const serializeAws_restXmlDeleteAccessPointForObjectLambdaCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeleteAccessPointForObjectLambdaCommand = serializeAws_restXmlDeleteAccessPointForObjectLambdaCommand;
const serializeAws_restXmlDeleteAccessPointPolicyCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspoint/{Name}/policy";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeleteAccessPointPolicyCommand = serializeAws_restXmlDeleteAccessPointPolicyCommand;
const serializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}/policy";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand = serializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand;
const serializeAws_restXmlDeleteBucketCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/bucket/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketCommand = serializeAws_restXmlDeleteBucketCommand;
const serializeAws_restXmlDeleteBucketLifecycleConfigurationCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketLifecycleConfigurationCommand = serializeAws_restXmlDeleteBucketLifecycleConfigurationCommand;
const serializeAws_restXmlDeleteBucketPolicyCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/bucket/{Bucket}/policy";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketPolicyCommand = serializeAws_restXmlDeleteBucketPolicyCommand;
const serializeAws_restXmlDeleteBucketTaggingCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/bucket/{Bucket}/tagging";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketTaggingCommand = serializeAws_restXmlDeleteBucketTaggingCommand;
const serializeAws_restXmlDeleteJobTaggingCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/jobs/{JobId}/tagging";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeleteJobTaggingCommand = serializeAws_restXmlDeleteJobTaggingCommand;
const serializeAws_restXmlDeletePublicAccessBlockCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/configuration/publicAccessBlock";
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeletePublicAccessBlockCommand = serializeAws_restXmlDeletePublicAccessBlockCommand;
const serializeAws_restXmlDeleteStorageLensConfigurationCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/storagelens/{ConfigId}";
    if (input.ConfigId !== undefined) {
        const labelValue = input.ConfigId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigId.");
        }
        resolvedPath = resolvedPath.replace("{ConfigId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeleteStorageLensConfigurationCommand = serializeAws_restXmlDeleteStorageLensConfigurationCommand;
const serializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/storagelens/{ConfigId}/tagging";
    if (input.ConfigId !== undefined) {
        const labelValue = input.ConfigId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigId.");
        }
        resolvedPath = resolvedPath.replace("{ConfigId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand = serializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand;
const serializeAws_restXmlDescribeJobCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/jobs/{JobId}";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDescribeJobCommand = serializeAws_restXmlDescribeJobCommand;
const serializeAws_restXmlGetAccessPointCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspoint/{Name}";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetAccessPointCommand = serializeAws_restXmlGetAccessPointCommand;
const serializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}/configuration";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand = serializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand;
const serializeAws_restXmlGetAccessPointForObjectLambdaCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetAccessPointForObjectLambdaCommand = serializeAws_restXmlGetAccessPointForObjectLambdaCommand;
const serializeAws_restXmlGetAccessPointPolicyCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspoint/{Name}/policy";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetAccessPointPolicyCommand = serializeAws_restXmlGetAccessPointPolicyCommand;
const serializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}/policy";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand = serializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand;
const serializeAws_restXmlGetAccessPointPolicyStatusCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspoint/{Name}/policyStatus";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetAccessPointPolicyStatusCommand = serializeAws_restXmlGetAccessPointPolicyStatusCommand;
const serializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}/policyStatus";
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand = serializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand;
const serializeAws_restXmlGetBucketCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/bucket/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetBucketCommand = serializeAws_restXmlGetBucketCommand;
const serializeAws_restXmlGetBucketLifecycleConfigurationCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetBucketLifecycleConfigurationCommand = serializeAws_restXmlGetBucketLifecycleConfigurationCommand;
const serializeAws_restXmlGetBucketPolicyCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/bucket/{Bucket}/policy";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetBucketPolicyCommand = serializeAws_restXmlGetBucketPolicyCommand;
const serializeAws_restXmlGetBucketTaggingCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/bucket/{Bucket}/tagging";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetBucketTaggingCommand = serializeAws_restXmlGetBucketTaggingCommand;
const serializeAws_restXmlGetJobTaggingCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/jobs/{JobId}/tagging";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetJobTaggingCommand = serializeAws_restXmlGetJobTaggingCommand;
const serializeAws_restXmlGetPublicAccessBlockCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/configuration/publicAccessBlock";
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetPublicAccessBlockCommand = serializeAws_restXmlGetPublicAccessBlockCommand;
const serializeAws_restXmlGetStorageLensConfigurationCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/storagelens/{ConfigId}";
    if (input.ConfigId !== undefined) {
        const labelValue = input.ConfigId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigId.");
        }
        resolvedPath = resolvedPath.replace("{ConfigId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetStorageLensConfigurationCommand = serializeAws_restXmlGetStorageLensConfigurationCommand;
const serializeAws_restXmlGetStorageLensConfigurationTaggingCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/storagelens/{ConfigId}/tagging";
    if (input.ConfigId !== undefined) {
        const labelValue = input.ConfigId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigId.");
        }
        resolvedPath = resolvedPath.replace("{ConfigId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlGetStorageLensConfigurationTaggingCommand = serializeAws_restXmlGetStorageLensConfigurationTaggingCommand;
const serializeAws_restXmlListAccessPointsCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspoint";
    const query = {
        ...(input.Bucket !== undefined && { bucket: input.Bucket }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListAccessPointsCommand = serializeAws_restXmlListAccessPointsCommand;
const serializeAws_restXmlListAccessPointsForObjectLambdaCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspointforobjectlambda";
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListAccessPointsForObjectLambdaCommand = serializeAws_restXmlListAccessPointsForObjectLambdaCommand;
const serializeAws_restXmlListJobsCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/jobs";
    const query = {
        ...(input.JobStatuses !== undefined && { jobStatuses: (input.JobStatuses || []).map((_entry) => _entry) }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListJobsCommand = serializeAws_restXmlListJobsCommand;
const serializeAws_restXmlListRegionalBucketsCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
        ...(isSerializableHeaderValue(input.OutpostId) && { "x-amz-outpost-id": input.OutpostId }),
    };
    let resolvedPath = "/v20180820/bucket";
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListRegionalBucketsCommand = serializeAws_restXmlListRegionalBucketsCommand;
const serializeAws_restXmlListStorageLensConfigurationsCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/storagelens";
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListStorageLensConfigurationsCommand = serializeAws_restXmlListStorageLensConfigurationsCommand;
const serializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}/configuration";
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
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("PutAccessPointConfigurationForObjectLambdaRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.Configuration !== undefined) {
        const node = serializeAws_restXmlObjectLambdaConfiguration(input.Configuration, context).withName("Configuration");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand = serializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand;
const serializeAws_restXmlPutAccessPointPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspoint/{Name}/policy";
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
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("PutAccessPointPolicyRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.Policy !== undefined) {
        const node = new xml_builder_1.XmlNode("Policy").addChildNode(new xml_builder_1.XmlText(input.Policy)).withName("Policy");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlPutAccessPointPolicyCommand = serializeAws_restXmlPutAccessPointPolicyCommand;
const serializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/accesspointforobjectlambda/{Name}/policy";
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
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("PutAccessPointPolicyForObjectLambdaRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.Policy !== undefined) {
        const node = new xml_builder_1.XmlNode("ObjectLambdaPolicy").addChildNode(new xml_builder_1.XmlText(input.Policy)).withName("Policy");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand = serializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand;
const serializeAws_restXmlPutBucketLifecycleConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    if (input.LifecycleConfiguration !== undefined) {
        body = serializeAws_restXmlLifecycleConfiguration(input.LifecycleConfiguration, context);
    }
    let contents;
    if (input.LifecycleConfiguration !== undefined) {
        contents = serializeAws_restXmlLifecycleConfiguration(input.LifecycleConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
        body += contents.toString();
    }
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlPutBucketLifecycleConfigurationCommand = serializeAws_restXmlPutBucketLifecycleConfigurationCommand;
const serializeAws_restXmlPutBucketPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
        ...(isSerializableHeaderValue(input.ConfirmRemoveSelfBucketAccess) && {
            "x-amz-confirm-remove-self-bucket-access": input.ConfirmRemoveSelfBucketAccess.toString(),
        }),
    };
    let resolvedPath = "/v20180820/bucket/{Bucket}/policy";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("PutBucketPolicyRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.Policy !== undefined) {
        const node = new xml_builder_1.XmlNode("Policy").addChildNode(new xml_builder_1.XmlText(input.Policy)).withName("Policy");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlPutBucketPolicyCommand = serializeAws_restXmlPutBucketPolicyCommand;
const serializeAws_restXmlPutBucketTaggingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/bucket/{Bucket}/tagging";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    if (input.Tagging !== undefined) {
        body = serializeAws_restXmlTagging(input.Tagging, context);
    }
    let contents;
    if (input.Tagging !== undefined) {
        contents = serializeAws_restXmlTagging(input.Tagging, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
        body += contents.toString();
    }
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlPutBucketTaggingCommand = serializeAws_restXmlPutBucketTaggingCommand;
const serializeAws_restXmlPutJobTaggingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/jobs/{JobId}/tagging";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("PutJobTaggingRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.Tags !== undefined) {
        const nodes = serializeAws_restXmlS3TagSet(input.Tags, context);
        const containerNode = new xml_builder_1.XmlNode("Tags");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    body += bodyNode.toString();
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlPutJobTaggingCommand = serializeAws_restXmlPutJobTaggingCommand;
const serializeAws_restXmlPutPublicAccessBlockCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/configuration/publicAccessBlock";
    let body;
    if (input.PublicAccessBlockConfiguration !== undefined) {
        body = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
    }
    let contents;
    if (input.PublicAccessBlockConfiguration !== undefined) {
        contents = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
        body += contents.toString();
    }
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlPutPublicAccessBlockCommand = serializeAws_restXmlPutPublicAccessBlockCommand;
const serializeAws_restXmlPutStorageLensConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/storagelens/{ConfigId}";
    if (input.ConfigId !== undefined) {
        const labelValue = input.ConfigId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigId.");
        }
        resolvedPath = resolvedPath.replace("{ConfigId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("PutStorageLensConfigurationRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.StorageLensConfiguration !== undefined) {
        const node = serializeAws_restXmlStorageLensConfiguration(input.StorageLensConfiguration, context).withName("StorageLensConfiguration");
        bodyNode.addChildNode(node);
    }
    if (input.Tags !== undefined) {
        const nodes = serializeAws_restXmlStorageLensTags(input.Tags, context);
        const containerNode = new xml_builder_1.XmlNode("Tags");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    body += bodyNode.toString();
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlPutStorageLensConfigurationCommand = serializeAws_restXmlPutStorageLensConfigurationCommand;
const serializeAws_restXmlPutStorageLensConfigurationTaggingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/storagelens/{ConfigId}/tagging";
    if (input.ConfigId !== undefined) {
        const labelValue = input.ConfigId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigId.");
        }
        resolvedPath = resolvedPath.replace("{ConfigId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("PutStorageLensConfigurationTaggingRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.Tags !== undefined) {
        const nodes = serializeAws_restXmlStorageLensTags(input.Tags, context);
        const containerNode = new xml_builder_1.XmlNode("Tags");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    body += bodyNode.toString();
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlPutStorageLensConfigurationTaggingCommand = serializeAws_restXmlPutStorageLensConfigurationTaggingCommand;
const serializeAws_restXmlUpdateJobPriorityCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/jobs/{JobId}/priority";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    const query = {
        ...(input.Priority !== undefined && { priority: input.Priority.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlUpdateJobPriorityCommand = serializeAws_restXmlUpdateJobPriorityCommand;
const serializeAws_restXmlUpdateJobStatusCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId }),
    };
    let resolvedPath = "/v20180820/jobs/{JobId}/status";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    const query = {
        ...(input.RequestedJobStatus !== undefined && { requestedJobStatus: input.RequestedJobStatus }),
        ...(input.StatusUpdateReason !== undefined && { statusUpdateReason: input.StatusUpdateReason }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{AccountId}." + resolvedHostname;
        if (input.AccountId === undefined) {
            throw new Error("Empty value provided for input host prefix: AccountId.");
        }
        resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId);
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlUpdateJobStatusCommand = serializeAws_restXmlUpdateJobStatusCommand;
const deserializeAws_restXmlCreateAccessPointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateAccessPointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccessPointArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["AccessPointArn"] !== undefined) {
        contents.AccessPointArn = data["AccessPointArn"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateAccessPointCommand = deserializeAws_restXmlCreateAccessPointCommand;
const deserializeAws_restXmlCreateAccessPointCommandError = async (output, context) => {
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
const deserializeAws_restXmlCreateAccessPointForObjectLambdaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateAccessPointForObjectLambdaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ObjectLambdaAccessPointArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["ObjectLambdaAccessPointArn"] !== undefined) {
        contents.ObjectLambdaAccessPointArn = data["ObjectLambdaAccessPointArn"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateAccessPointForObjectLambdaCommand = deserializeAws_restXmlCreateAccessPointForObjectLambdaCommand;
const deserializeAws_restXmlCreateAccessPointForObjectLambdaCommandError = async (output, context) => {
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
const deserializeAws_restXmlCreateBucketCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateBucketCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BucketArn: undefined,
        Location: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["BucketArn"] !== undefined) {
        contents.BucketArn = data["BucketArn"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateBucketCommand = deserializeAws_restXmlCreateBucketCommand;
const deserializeAws_restXmlCreateBucketCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BucketAlreadyExists":
        case "com.amazonaws.s3control#BucketAlreadyExists":
            response = {
                ...(await deserializeAws_restXmlBucketAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BucketAlreadyOwnedByYou":
        case "com.amazonaws.s3control#BucketAlreadyOwnedByYou":
            response = {
                ...(await deserializeAws_restXmlBucketAlreadyOwnedByYouResponse(parsedOutput, context)),
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
const deserializeAws_restXmlCreateJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JobId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["JobId"] !== undefined) {
        contents.JobId = data["JobId"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateJobCommand = deserializeAws_restXmlCreateJobCommand;
const deserializeAws_restXmlCreateJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.s3control#BadRequestException":
            response = {
                ...(await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotencyException":
        case "com.amazonaws.s3control#IdempotencyException":
            response = {
                ...(await deserializeAws_restXmlIdempotencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.s3control#InternalServiceException":
            response = {
                ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.s3control#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDeleteAccessPointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteAccessPointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteAccessPointCommand = deserializeAws_restXmlDeleteAccessPointCommand;
const deserializeAws_restXmlDeleteAccessPointCommandError = async (output, context) => {
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
const deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommand = deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommand;
const deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommandError = async (output, context) => {
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
const deserializeAws_restXmlDeleteAccessPointPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteAccessPointPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteAccessPointPolicyCommand = deserializeAws_restXmlDeleteAccessPointPolicyCommand;
const deserializeAws_restXmlDeleteAccessPointPolicyCommandError = async (output, context) => {
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
const deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand = deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand;
const deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommandError = async (output, context) => {
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
const deserializeAws_restXmlDeleteBucketCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteBucketCommand = deserializeAws_restXmlDeleteBucketCommand;
const deserializeAws_restXmlDeleteBucketCommandError = async (output, context) => {
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
const deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommand = deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommand;
const deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommandError = async (output, context) => {
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
const deserializeAws_restXmlDeleteBucketPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteBucketPolicyCommand = deserializeAws_restXmlDeleteBucketPolicyCommand;
const deserializeAws_restXmlDeleteBucketPolicyCommandError = async (output, context) => {
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
const deserializeAws_restXmlDeleteBucketTaggingCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteBucketTaggingCommand = deserializeAws_restXmlDeleteBucketTaggingCommand;
const deserializeAws_restXmlDeleteBucketTaggingCommandError = async (output, context) => {
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
const deserializeAws_restXmlDeleteJobTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteJobTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteJobTaggingCommand = deserializeAws_restXmlDeleteJobTaggingCommand;
const deserializeAws_restXmlDeleteJobTaggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.s3control#InternalServiceException":
            response = {
                ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.s3control#NotFoundException":
            response = {
                ...(await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.s3control#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDeletePublicAccessBlockCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeletePublicAccessBlockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeletePublicAccessBlockCommand = deserializeAws_restXmlDeletePublicAccessBlockCommand;
const deserializeAws_restXmlDeletePublicAccessBlockCommandError = async (output, context) => {
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
const deserializeAws_restXmlDeleteStorageLensConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteStorageLensConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteStorageLensConfigurationCommand = deserializeAws_restXmlDeleteStorageLensConfigurationCommand;
const deserializeAws_restXmlDeleteStorageLensConfigurationCommandError = async (output, context) => {
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
const deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand = deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand;
const deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommandError = async (output, context) => {
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
const deserializeAws_restXmlDescribeJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDescribeJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Job: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["Job"] !== undefined) {
        contents.Job = deserializeAws_restXmlJobDescriptor(data["Job"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDescribeJobCommand = deserializeAws_restXmlDescribeJobCommand;
const deserializeAws_restXmlDescribeJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.s3control#BadRequestException":
            response = {
                ...(await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.s3control#InternalServiceException":
            response = {
                ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.s3control#NotFoundException":
            response = {
                ...(await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.s3control#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetAccessPointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetAccessPointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Bucket: undefined,
        CreationDate: undefined,
        Name: undefined,
        NetworkOrigin: undefined,
        PublicAccessBlockConfiguration: undefined,
        VpcConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetAccessPointCommand = deserializeAws_restXmlGetAccessPointCommand;
const deserializeAws_restXmlGetAccessPointCommandError = async (output, context) => {
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
const deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Configuration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["Configuration"] !== undefined) {
        contents.Configuration = deserializeAws_restXmlObjectLambdaConfiguration(data["Configuration"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand = deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand;
const deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommandError = async (output, context) => {
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
const deserializeAws_restXmlGetAccessPointForObjectLambdaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetAccessPointForObjectLambdaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreationDate: undefined,
        Name: undefined,
        PublicAccessBlockConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["CreationDate"] !== undefined) {
        contents.CreationDate = new Date(data["CreationDate"]);
    }
    if (data["Name"] !== undefined) {
        contents.Name = data["Name"];
    }
    if (data["PublicAccessBlockConfiguration"] !== undefined) {
        contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(data["PublicAccessBlockConfiguration"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetAccessPointForObjectLambdaCommand = deserializeAws_restXmlGetAccessPointForObjectLambdaCommand;
const deserializeAws_restXmlGetAccessPointForObjectLambdaCommandError = async (output, context) => {
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
const deserializeAws_restXmlGetAccessPointPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetAccessPointPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["Policy"] !== undefined) {
        contents.Policy = data["Policy"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetAccessPointPolicyCommand = deserializeAws_restXmlGetAccessPointPolicyCommand;
const deserializeAws_restXmlGetAccessPointPolicyCommandError = async (output, context) => {
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
const deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["Policy"] !== undefined) {
        contents.Policy = data["Policy"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand = deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand;
const deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommandError = async (output, context) => {
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
const deserializeAws_restXmlGetAccessPointPolicyStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetAccessPointPolicyStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        PolicyStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["PolicyStatus"] !== undefined) {
        contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data["PolicyStatus"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetAccessPointPolicyStatusCommand = deserializeAws_restXmlGetAccessPointPolicyStatusCommand;
const deserializeAws_restXmlGetAccessPointPolicyStatusCommandError = async (output, context) => {
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
const deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        PolicyStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["PolicyStatus"] !== undefined) {
        contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data["PolicyStatus"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand = deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand;
const deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommandError = async (output, context) => {
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
const deserializeAws_restXmlGetBucketCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Bucket: undefined,
        CreationDate: undefined,
        PublicAccessBlockEnabled: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["Bucket"] !== undefined) {
        contents.Bucket = data["Bucket"];
    }
    if (data["CreationDate"] !== undefined) {
        contents.CreationDate = new Date(data["CreationDate"]);
    }
    if (data["PublicAccessBlockEnabled"] !== undefined) {
        contents.PublicAccessBlockEnabled = data["PublicAccessBlockEnabled"] == "true";
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetBucketCommand = deserializeAws_restXmlGetBucketCommand;
const deserializeAws_restXmlGetBucketCommandError = async (output, context) => {
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
const deserializeAws_restXmlGetBucketLifecycleConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Rules: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Rules === "") {
        contents.Rules = [];
    }
    if (data["Rules"] !== undefined && data["Rules"]["Rule"] !== undefined) {
        contents.Rules = deserializeAws_restXmlLifecycleRules(smithy_client_1.getArrayIfSingleItem(data["Rules"]["Rule"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetBucketLifecycleConfigurationCommand = deserializeAws_restXmlGetBucketLifecycleConfigurationCommand;
const deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError = async (output, context) => {
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
const deserializeAws_restXmlGetBucketPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["Policy"] !== undefined) {
        contents.Policy = data["Policy"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetBucketPolicyCommand = deserializeAws_restXmlGetBucketPolicyCommand;
const deserializeAws_restXmlGetBucketPolicyCommandError = async (output, context) => {
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
const deserializeAws_restXmlGetBucketTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TagSet: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.TagSet === "") {
        contents.TagSet = [];
    }
    if (data["TagSet"] !== undefined && data["TagSet"]["member"] !== undefined) {
        contents.TagSet = deserializeAws_restXmlS3TagSet(smithy_client_1.getArrayIfSingleItem(data["TagSet"]["member"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetBucketTaggingCommand = deserializeAws_restXmlGetBucketTaggingCommand;
const deserializeAws_restXmlGetBucketTaggingCommandError = async (output, context) => {
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
const deserializeAws_restXmlGetJobTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetJobTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Tags === "") {
        contents.Tags = [];
    }
    if (data["Tags"] !== undefined && data["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_restXmlS3TagSet(smithy_client_1.getArrayIfSingleItem(data["Tags"]["member"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetJobTaggingCommand = deserializeAws_restXmlGetJobTaggingCommand;
const deserializeAws_restXmlGetJobTaggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.s3control#InternalServiceException":
            response = {
                ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.s3control#NotFoundException":
            response = {
                ...(await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.s3control#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetPublicAccessBlockCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetPublicAccessBlockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        PublicAccessBlockConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetPublicAccessBlockCommand = deserializeAws_restXmlGetPublicAccessBlockCommand;
const deserializeAws_restXmlGetPublicAccessBlockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchPublicAccessBlockConfiguration":
        case "com.amazonaws.s3control#NoSuchPublicAccessBlockConfiguration":
            response = {
                ...(await deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetStorageLensConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetStorageLensConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        StorageLensConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.StorageLensConfiguration = deserializeAws_restXmlStorageLensConfiguration(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetStorageLensConfigurationCommand = deserializeAws_restXmlGetStorageLensConfigurationCommand;
const deserializeAws_restXmlGetStorageLensConfigurationCommandError = async (output, context) => {
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
const deserializeAws_restXmlGetStorageLensConfigurationTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetStorageLensConfigurationTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Tags === "") {
        contents.Tags = [];
    }
    if (data["Tags"] !== undefined && data["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_restXmlStorageLensTags(smithy_client_1.getArrayIfSingleItem(data["Tags"]["Tag"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetStorageLensConfigurationTaggingCommand = deserializeAws_restXmlGetStorageLensConfigurationTaggingCommand;
const deserializeAws_restXmlGetStorageLensConfigurationTaggingCommandError = async (output, context) => {
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
const deserializeAws_restXmlListAccessPointsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListAccessPointsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccessPointList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccessPointList === "") {
        contents.AccessPointList = [];
    }
    if (data["AccessPointList"] !== undefined && data["AccessPointList"]["AccessPoint"] !== undefined) {
        contents.AccessPointList = deserializeAws_restXmlAccessPointList(smithy_client_1.getArrayIfSingleItem(data["AccessPointList"]["AccessPoint"]), context);
    }
    if (data["NextToken"] !== undefined) {
        contents.NextToken = data["NextToken"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListAccessPointsCommand = deserializeAws_restXmlListAccessPointsCommand;
const deserializeAws_restXmlListAccessPointsCommandError = async (output, context) => {
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
const deserializeAws_restXmlListAccessPointsForObjectLambdaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListAccessPointsForObjectLambdaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ObjectLambdaAccessPointList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["NextToken"] !== undefined) {
        contents.NextToken = data["NextToken"];
    }
    if (data.ObjectLambdaAccessPointList === "") {
        contents.ObjectLambdaAccessPointList = [];
    }
    if (data["ObjectLambdaAccessPointList"] !== undefined &&
        data["ObjectLambdaAccessPointList"]["ObjectLambdaAccessPoint"] !== undefined) {
        contents.ObjectLambdaAccessPointList = deserializeAws_restXmlObjectLambdaAccessPointList(smithy_client_1.getArrayIfSingleItem(data["ObjectLambdaAccessPointList"]["ObjectLambdaAccessPoint"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListAccessPointsForObjectLambdaCommand = deserializeAws_restXmlListAccessPointsForObjectLambdaCommand;
const deserializeAws_restXmlListAccessPointsForObjectLambdaCommandError = async (output, context) => {
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
const deserializeAws_restXmlListJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Jobs: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Jobs === "") {
        contents.Jobs = [];
    }
    if (data["Jobs"] !== undefined && data["Jobs"]["member"] !== undefined) {
        contents.Jobs = deserializeAws_restXmlJobListDescriptorList(smithy_client_1.getArrayIfSingleItem(data["Jobs"]["member"]), context);
    }
    if (data["NextToken"] !== undefined) {
        contents.NextToken = data["NextToken"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListJobsCommand = deserializeAws_restXmlListJobsCommand;
const deserializeAws_restXmlListJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.s3control#InternalServiceException":
            response = {
                ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.s3control#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restXmlInvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.s3control#InvalidRequestException":
            response = {
                ...(await deserializeAws_restXmlInvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListRegionalBucketsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListRegionalBucketsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RegionalBucketList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["NextToken"] !== undefined) {
        contents.NextToken = data["NextToken"];
    }
    if (data.RegionalBucketList === "") {
        contents.RegionalBucketList = [];
    }
    if (data["RegionalBucketList"] !== undefined && data["RegionalBucketList"]["RegionalBucket"] !== undefined) {
        contents.RegionalBucketList = deserializeAws_restXmlRegionalBucketList(smithy_client_1.getArrayIfSingleItem(data["RegionalBucketList"]["RegionalBucket"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListRegionalBucketsCommand = deserializeAws_restXmlListRegionalBucketsCommand;
const deserializeAws_restXmlListRegionalBucketsCommandError = async (output, context) => {
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
const deserializeAws_restXmlListStorageLensConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListStorageLensConfigurationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        StorageLensConfigurationList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["NextToken"] !== undefined) {
        contents.NextToken = data["NextToken"];
    }
    if (data.StorageLensConfigurationList === "") {
        contents.StorageLensConfigurationList = [];
    }
    if (data["StorageLensConfigurationList"] !== undefined) {
        contents.StorageLensConfigurationList = deserializeAws_restXmlStorageLensConfigurationList(smithy_client_1.getArrayIfSingleItem(data["StorageLensConfigurationList"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListStorageLensConfigurationsCommand = deserializeAws_restXmlListStorageLensConfigurationsCommand;
const deserializeAws_restXmlListStorageLensConfigurationsCommandError = async (output, context) => {
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
const deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand = deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand;
const deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommandError = async (output, context) => {
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
const deserializeAws_restXmlPutAccessPointPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutAccessPointPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlPutAccessPointPolicyCommand = deserializeAws_restXmlPutAccessPointPolicyCommand;
const deserializeAws_restXmlPutAccessPointPolicyCommandError = async (output, context) => {
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
const deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand = deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand;
const deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommandError = async (output, context) => {
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
const deserializeAws_restXmlPutBucketLifecycleConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlPutBucketLifecycleConfigurationCommand = deserializeAws_restXmlPutBucketLifecycleConfigurationCommand;
const deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError = async (output, context) => {
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
const deserializeAws_restXmlPutBucketPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlPutBucketPolicyCommand = deserializeAws_restXmlPutBucketPolicyCommand;
const deserializeAws_restXmlPutBucketPolicyCommandError = async (output, context) => {
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
const deserializeAws_restXmlPutBucketTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlPutBucketTaggingCommand = deserializeAws_restXmlPutBucketTaggingCommand;
const deserializeAws_restXmlPutBucketTaggingCommandError = async (output, context) => {
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
const deserializeAws_restXmlPutJobTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutJobTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlPutJobTaggingCommand = deserializeAws_restXmlPutJobTaggingCommand;
const deserializeAws_restXmlPutJobTaggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.s3control#InternalServiceException":
            response = {
                ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.s3control#NotFoundException":
            response = {
                ...(await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.s3control#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.s3control#TooManyTagsException":
            response = {
                ...(await deserializeAws_restXmlTooManyTagsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restXmlPutPublicAccessBlockCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutPublicAccessBlockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlPutPublicAccessBlockCommand = deserializeAws_restXmlPutPublicAccessBlockCommand;
const deserializeAws_restXmlPutPublicAccessBlockCommandError = async (output, context) => {
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
const deserializeAws_restXmlPutStorageLensConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutStorageLensConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlPutStorageLensConfigurationCommand = deserializeAws_restXmlPutStorageLensConfigurationCommand;
const deserializeAws_restXmlPutStorageLensConfigurationCommandError = async (output, context) => {
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
const deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutStorageLensConfigurationTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand = deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand;
const deserializeAws_restXmlPutStorageLensConfigurationTaggingCommandError = async (output, context) => {
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
const deserializeAws_restXmlUpdateJobPriorityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlUpdateJobPriorityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JobId: undefined,
        Priority: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["JobId"] !== undefined) {
        contents.JobId = data["JobId"];
    }
    if (data["Priority"] !== undefined) {
        contents.Priority = parseInt(data["Priority"]);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateJobPriorityCommand = deserializeAws_restXmlUpdateJobPriorityCommand;
const deserializeAws_restXmlUpdateJobPriorityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.s3control#BadRequestException":
            response = {
                ...(await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.s3control#InternalServiceException":
            response = {
                ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.s3control#NotFoundException":
            response = {
                ...(await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.s3control#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restXmlUpdateJobStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlUpdateJobStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JobId: undefined,
        Status: undefined,
        StatusUpdateReason: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["JobId"] !== undefined) {
        contents.JobId = data["JobId"];
    }
    if (data["Status"] !== undefined) {
        contents.Status = data["Status"];
    }
    if (data["StatusUpdateReason"] !== undefined) {
        contents.StatusUpdateReason = data["StatusUpdateReason"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateJobStatusCommand = deserializeAws_restXmlUpdateJobStatusCommand;
const deserializeAws_restXmlUpdateJobStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.s3control#BadRequestException":
            response = {
                ...(await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.s3control#InternalServiceException":
            response = {
                ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "JobStatusException":
        case "com.amazonaws.s3control#JobStatusException":
            response = {
                ...(await deserializeAws_restXmlJobStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.s3control#NotFoundException":
            response = {
                ...(await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.s3control#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restXmlBadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
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
const deserializeAws_restXmlBucketAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BucketAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
    };
    const data = parsedOutput.body.Error;
    return contents;
};
const deserializeAws_restXmlBucketAlreadyOwnedByYouResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BucketAlreadyOwnedByYou",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
    };
    const data = parsedOutput.body.Error;
    return contents;
};
const deserializeAws_restXmlIdempotencyExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IdempotencyException",
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
const deserializeAws_restXmlInternalServiceExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServiceException",
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
const deserializeAws_restXmlInvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidNextTokenException",
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
const deserializeAws_restXmlInvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
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
const deserializeAws_restXmlJobStatusExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "JobStatusException",
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
const deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchPublicAccessBlockConfiguration",
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
const deserializeAws_restXmlNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
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
const deserializeAws_restXmlTooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
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
const deserializeAws_restXmlTooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTagsException",
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
const serializeAws_restXmlAbortIncompleteMultipartUpload = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AbortIncompleteMultipartUpload");
    if (input.DaysAfterInitiation !== undefined && input.DaysAfterInitiation !== null) {
        const node = new xml_builder_1.XmlNode("DaysAfterInitiation")
            .addChildNode(new xml_builder_1.XmlText(String(input.DaysAfterInitiation)))
            .withName("DaysAfterInitiation");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlAccountLevel = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AccountLevel");
    if (input.ActivityMetrics !== undefined && input.ActivityMetrics !== null) {
        const node = serializeAws_restXmlActivityMetrics(input.ActivityMetrics, context).withName("ActivityMetrics");
        bodyNode.addChildNode(node);
    }
    if (input.BucketLevel !== undefined && input.BucketLevel !== null) {
        const node = serializeAws_restXmlBucketLevel(input.BucketLevel, context).withName("BucketLevel");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlActivityMetrics = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ActivityMetrics");
    if (input.IsEnabled !== undefined && input.IsEnabled !== null) {
        const node = new xml_builder_1.XmlNode("IsEnabled").addChildNode(new xml_builder_1.XmlText(String(input.IsEnabled))).withName("IsEnabled");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlAwsLambdaTransformation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AwsLambdaTransformation");
    if (input.FunctionArn !== undefined && input.FunctionArn !== null) {
        const node = new xml_builder_1.XmlNode("FunctionArnString")
            .addChildNode(new xml_builder_1.XmlText(input.FunctionArn))
            .withName("FunctionArn");
        bodyNode.addChildNode(node);
    }
    if (input.FunctionPayload !== undefined && input.FunctionPayload !== null) {
        const node = new xml_builder_1.XmlNode("AwsLambdaTransformationPayload")
            .addChildNode(new xml_builder_1.XmlText(input.FunctionPayload))
            .withName("FunctionPayload");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlBucketLevel = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("BucketLevel");
    if (input.ActivityMetrics !== undefined && input.ActivityMetrics !== null) {
        const node = serializeAws_restXmlActivityMetrics(input.ActivityMetrics, context).withName("ActivityMetrics");
        bodyNode.addChildNode(node);
    }
    if (input.PrefixLevel !== undefined && input.PrefixLevel !== null) {
        const node = serializeAws_restXmlPrefixLevel(input.PrefixLevel, context).withName("PrefixLevel");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlBuckets = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = new xml_builder_1.XmlNode("S3BucketArnString").addChildNode(new xml_builder_1.XmlText(entry));
        return node.withName("Arn");
    });
};
const serializeAws_restXmlCreateBucketConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CreateBucketConfiguration");
    if (input.LocationConstraint !== undefined && input.LocationConstraint !== null) {
        const node = new xml_builder_1.XmlNode("BucketLocationConstraint")
            .addChildNode(new xml_builder_1.XmlText(input.LocationConstraint))
            .withName("LocationConstraint");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXml_Exclude = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Exclude");
    if (input.Buckets !== undefined && input.Buckets !== null) {
        const nodes = serializeAws_restXmlBuckets(input.Buckets, context);
        const containerNode = new xml_builder_1.XmlNode("Buckets");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Regions !== undefined && input.Regions !== null) {
        const nodes = serializeAws_restXmlRegions(input.Regions, context);
        const containerNode = new xml_builder_1.XmlNode("Regions");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlInclude = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Include");
    if (input.Buckets !== undefined && input.Buckets !== null) {
        const nodes = serializeAws_restXmlBuckets(input.Buckets, context);
        const containerNode = new xml_builder_1.XmlNode("Buckets");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Regions !== undefined && input.Regions !== null) {
        const nodes = serializeAws_restXmlRegions(input.Regions, context);
        const containerNode = new xml_builder_1.XmlNode("Regions");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlJobManifest = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JobManifest");
    if (input.Spec !== undefined && input.Spec !== null) {
        const node = serializeAws_restXmlJobManifestSpec(input.Spec, context).withName("Spec");
        bodyNode.addChildNode(node);
    }
    if (input.Location !== undefined && input.Location !== null) {
        const node = serializeAws_restXmlJobManifestLocation(input.Location, context).withName("Location");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlJobManifestFieldList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = new xml_builder_1.XmlNode("JobManifestFieldName").addChildNode(new xml_builder_1.XmlText(entry));
        return node.withName("member");
    });
};
const serializeAws_restXmlJobManifestLocation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JobManifestLocation");
    if (input.ObjectArn !== undefined && input.ObjectArn !== null) {
        const node = new xml_builder_1.XmlNode("S3KeyArnString").addChildNode(new xml_builder_1.XmlText(input.ObjectArn)).withName("ObjectArn");
        bodyNode.addChildNode(node);
    }
    if (input.ObjectVersionId !== undefined && input.ObjectVersionId !== null) {
        const node = new xml_builder_1.XmlNode("S3ObjectVersionId")
            .addChildNode(new xml_builder_1.XmlText(input.ObjectVersionId))
            .withName("ObjectVersionId");
        bodyNode.addChildNode(node);
    }
    if (input.ETag !== undefined && input.ETag !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String").addChildNode(new xml_builder_1.XmlText(input.ETag)).withName("ETag");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlJobManifestSpec = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JobManifestSpec");
    if (input.Format !== undefined && input.Format !== null) {
        const node = new xml_builder_1.XmlNode("JobManifestFormat").addChildNode(new xml_builder_1.XmlText(input.Format)).withName("Format");
        bodyNode.addChildNode(node);
    }
    if (input.Fields !== undefined && input.Fields !== null) {
        const nodes = serializeAws_restXmlJobManifestFieldList(input.Fields, context);
        const containerNode = new xml_builder_1.XmlNode("Fields");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlJobOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JobOperation");
    if (input.LambdaInvoke !== undefined && input.LambdaInvoke !== null) {
        const node = serializeAws_restXmlLambdaInvokeOperation(input.LambdaInvoke, context).withName("LambdaInvoke");
        bodyNode.addChildNode(node);
    }
    if (input.S3PutObjectCopy !== undefined && input.S3PutObjectCopy !== null) {
        const node = serializeAws_restXmlS3CopyObjectOperation(input.S3PutObjectCopy, context).withName("S3PutObjectCopy");
        bodyNode.addChildNode(node);
    }
    if (input.S3PutObjectAcl !== undefined && input.S3PutObjectAcl !== null) {
        const node = serializeAws_restXmlS3SetObjectAclOperation(input.S3PutObjectAcl, context).withName("S3PutObjectAcl");
        bodyNode.addChildNode(node);
    }
    if (input.S3PutObjectTagging !== undefined && input.S3PutObjectTagging !== null) {
        const node = serializeAws_restXmlS3SetObjectTaggingOperation(input.S3PutObjectTagging, context).withName("S3PutObjectTagging");
        bodyNode.addChildNode(node);
    }
    if (input.S3DeleteObjectTagging !== undefined && input.S3DeleteObjectTagging !== null) {
        const node = serializeAws_restXmlS3DeleteObjectTaggingOperation(input.S3DeleteObjectTagging, context).withName("S3DeleteObjectTagging");
        bodyNode.addChildNode(node);
    }
    if (input.S3InitiateRestoreObject !== undefined && input.S3InitiateRestoreObject !== null) {
        const node = serializeAws_restXmlS3InitiateRestoreObjectOperation(input.S3InitiateRestoreObject, context).withName("S3InitiateRestoreObject");
        bodyNode.addChildNode(node);
    }
    if (input.S3PutObjectLegalHold !== undefined && input.S3PutObjectLegalHold !== null) {
        const node = serializeAws_restXmlS3SetObjectLegalHoldOperation(input.S3PutObjectLegalHold, context).withName("S3PutObjectLegalHold");
        bodyNode.addChildNode(node);
    }
    if (input.S3PutObjectRetention !== undefined && input.S3PutObjectRetention !== null) {
        const node = serializeAws_restXmlS3SetObjectRetentionOperation(input.S3PutObjectRetention, context).withName("S3PutObjectRetention");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlJobReport = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JobReport");
    if (input.Bucket !== undefined && input.Bucket !== null) {
        const node = new xml_builder_1.XmlNode("S3BucketArnString").addChildNode(new xml_builder_1.XmlText(input.Bucket)).withName("Bucket");
        bodyNode.addChildNode(node);
    }
    if (input.Format !== undefined && input.Format !== null) {
        const node = new xml_builder_1.XmlNode("JobReportFormat").addChildNode(new xml_builder_1.XmlText(input.Format)).withName("Format");
        bodyNode.addChildNode(node);
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        const node = new xml_builder_1.XmlNode("Boolean").addChildNode(new xml_builder_1.XmlText(String(input.Enabled))).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    if (input.Prefix !== undefined && input.Prefix !== null) {
        const node = new xml_builder_1.XmlNode("ReportPrefixString").addChildNode(new xml_builder_1.XmlText(input.Prefix)).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.ReportScope !== undefined && input.ReportScope !== null) {
        const node = new xml_builder_1.XmlNode("JobReportScope").addChildNode(new xml_builder_1.XmlText(input.ReportScope)).withName("ReportScope");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlLambdaInvokeOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LambdaInvokeOperation");
    if (input.FunctionArn !== undefined && input.FunctionArn !== null) {
        const node = new xml_builder_1.XmlNode("FunctionArnString")
            .addChildNode(new xml_builder_1.XmlText(input.FunctionArn))
            .withName("FunctionArn");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleConfiguration");
    if (input.Rules !== undefined && input.Rules !== null) {
        const nodes = serializeAws_restXmlLifecycleRules(input.Rules, context);
        const containerNode = new xml_builder_1.XmlNode("Rules");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleExpiration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleExpiration");
    if (input.Date !== undefined && input.Date !== null) {
        const node = new xml_builder_1.XmlNode("Date")
            .addChildNode(new xml_builder_1.XmlText(input.Date.toISOString().split(".")[0] + "Z"))
            .withName("Date");
        bodyNode.addChildNode(node);
    }
    if (input.Days !== undefined && input.Days !== null) {
        const node = new xml_builder_1.XmlNode("Days").addChildNode(new xml_builder_1.XmlText(String(input.Days))).withName("Days");
        bodyNode.addChildNode(node);
    }
    if (input.ExpiredObjectDeleteMarker !== undefined && input.ExpiredObjectDeleteMarker !== null) {
        const node = new xml_builder_1.XmlNode("ExpiredObjectDeleteMarker")
            .addChildNode(new xml_builder_1.XmlText(String(input.ExpiredObjectDeleteMarker)))
            .withName("ExpiredObjectDeleteMarker");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleRule");
    if (input.Expiration !== undefined && input.Expiration !== null) {
        const node = serializeAws_restXmlLifecycleExpiration(input.Expiration, context).withName("Expiration");
        bodyNode.addChildNode(node);
    }
    if (input.ID !== undefined && input.ID !== null) {
        const node = new xml_builder_1.XmlNode("ID").addChildNode(new xml_builder_1.XmlText(input.ID)).withName("ID");
        bodyNode.addChildNode(node);
    }
    if (input.Filter !== undefined && input.Filter !== null) {
        const node = serializeAws_restXmlLifecycleRuleFilter(input.Filter, context).withName("Filter");
        bodyNode.addChildNode(node);
    }
    if (input.Status !== undefined && input.Status !== null) {
        const node = new xml_builder_1.XmlNode("ExpirationStatus").addChildNode(new xml_builder_1.XmlText(input.Status)).withName("Status");
        bodyNode.addChildNode(node);
    }
    if (input.Transitions !== undefined && input.Transitions !== null) {
        const nodes = serializeAws_restXmlTransitionList(input.Transitions, context);
        const containerNode = new xml_builder_1.XmlNode("Transitions");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.NoncurrentVersionTransitions !== undefined && input.NoncurrentVersionTransitions !== null) {
        const nodes = serializeAws_restXmlNoncurrentVersionTransitionList(input.NoncurrentVersionTransitions, context);
        const containerNode = new xml_builder_1.XmlNode("NoncurrentVersionTransitions");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.NoncurrentVersionExpiration !== undefined && input.NoncurrentVersionExpiration !== null) {
        const node = serializeAws_restXmlNoncurrentVersionExpiration(input.NoncurrentVersionExpiration, context).withName("NoncurrentVersionExpiration");
        bodyNode.addChildNode(node);
    }
    if (input.AbortIncompleteMultipartUpload !== undefined && input.AbortIncompleteMultipartUpload !== null) {
        const node = serializeAws_restXmlAbortIncompleteMultipartUpload(input.AbortIncompleteMultipartUpload, context).withName("AbortIncompleteMultipartUpload");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleRuleAndOperator = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleRuleAndOperator");
    if (input.Prefix !== undefined && input.Prefix !== null) {
        const node = new xml_builder_1.XmlNode("Prefix").addChildNode(new xml_builder_1.XmlText(input.Prefix)).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const nodes = serializeAws_restXmlS3TagSet(input.Tags, context);
        const containerNode = new xml_builder_1.XmlNode("Tags");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleRuleFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleRuleFilter");
    if (input.Prefix !== undefined && input.Prefix !== null) {
        const node = new xml_builder_1.XmlNode("Prefix").addChildNode(new xml_builder_1.XmlText(input.Prefix)).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Tag !== undefined && input.Tag !== null) {
        const node = serializeAws_restXmlS3Tag(input.Tag, context).withName("Tag");
        bodyNode.addChildNode(node);
    }
    if (input.And !== undefined && input.And !== null) {
        const node = serializeAws_restXmlLifecycleRuleAndOperator(input.And, context).withName("And");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = serializeAws_restXmlLifecycleRule(entry, context);
        return node.withName("Rule");
    });
};
const serializeAws_restXmlNoncurrentVersionExpiration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("NoncurrentVersionExpiration");
    if (input.NoncurrentDays !== undefined && input.NoncurrentDays !== null) {
        const node = new xml_builder_1.XmlNode("Days")
            .addChildNode(new xml_builder_1.XmlText(String(input.NoncurrentDays)))
            .withName("NoncurrentDays");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlNoncurrentVersionTransition = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("NoncurrentVersionTransition");
    if (input.NoncurrentDays !== undefined && input.NoncurrentDays !== null) {
        const node = new xml_builder_1.XmlNode("Days")
            .addChildNode(new xml_builder_1.XmlText(String(input.NoncurrentDays)))
            .withName("NoncurrentDays");
        bodyNode.addChildNode(node);
    }
    if (input.StorageClass !== undefined && input.StorageClass !== null) {
        const node = new xml_builder_1.XmlNode("TransitionStorageClass")
            .addChildNode(new xml_builder_1.XmlText(input.StorageClass))
            .withName("StorageClass");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlNoncurrentVersionTransitionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = serializeAws_restXmlNoncurrentVersionTransition(entry, context);
        return node.withName("NoncurrentVersionTransition");
    });
};
const serializeAws_restXmlObjectLambdaAllowedFeaturesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = new xml_builder_1.XmlNode("ObjectLambdaAllowedFeature").addChildNode(new xml_builder_1.XmlText(entry));
        return node.withName("AllowedFeature");
    });
};
const serializeAws_restXmlObjectLambdaConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectLambdaConfiguration");
    if (input.SupportingAccessPoint !== undefined && input.SupportingAccessPoint !== null) {
        const node = new xml_builder_1.XmlNode("ObjectLambdaSupportingAccessPointArn")
            .addChildNode(new xml_builder_1.XmlText(input.SupportingAccessPoint))
            .withName("SupportingAccessPoint");
        bodyNode.addChildNode(node);
    }
    if (input.CloudWatchMetricsEnabled !== undefined && input.CloudWatchMetricsEnabled !== null) {
        const node = new xml_builder_1.XmlNode("Boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.CloudWatchMetricsEnabled)))
            .withName("CloudWatchMetricsEnabled");
        bodyNode.addChildNode(node);
    }
    if (input.AllowedFeatures !== undefined && input.AllowedFeatures !== null) {
        const nodes = serializeAws_restXmlObjectLambdaAllowedFeaturesList(input.AllowedFeatures, context);
        const containerNode = new xml_builder_1.XmlNode("AllowedFeatures");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.TransformationConfigurations !== undefined && input.TransformationConfigurations !== null) {
        const nodes = serializeAws_restXmlObjectLambdaTransformationConfigurationsList(input.TransformationConfigurations, context);
        const containerNode = new xml_builder_1.XmlNode("TransformationConfigurations");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlObjectLambdaContentTransformation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectLambdaContentTransformation");
    models_0_1.ObjectLambdaContentTransformation.visit(input, {
        AwsLambda: (value) => {
            const node = serializeAws_restXmlAwsLambdaTransformation(value, context).withName("AwsLambda");
            bodyNode.addChildNode(node);
        },
        _: (name, value) => {
            if (!(value instanceof xml_builder_1.XmlNode || value instanceof xml_builder_1.XmlText)) {
                throw new Error("Unable to serialize unknown union members in XML.");
            }
            bodyNode.addChildNode(new xml_builder_1.XmlNode(name).addChildNode(value));
        },
    });
    return bodyNode;
};
const serializeAws_restXmlObjectLambdaTransformationConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectLambdaTransformationConfiguration");
    if (input.Actions !== undefined && input.Actions !== null) {
        const nodes = serializeAws_restXmlObjectLambdaTransformationConfigurationActionsList(input.Actions, context);
        const containerNode = new xml_builder_1.XmlNode("Actions");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.ContentTransformation !== undefined && input.ContentTransformation !== null) {
        const node = serializeAws_restXmlObjectLambdaContentTransformation(input.ContentTransformation, context).withName("ContentTransformation");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlObjectLambdaTransformationConfigurationActionsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = new xml_builder_1.XmlNode("ObjectLambdaTransformationConfigurationAction").addChildNode(new xml_builder_1.XmlText(entry));
        return node.withName("Action");
    });
};
const serializeAws_restXmlObjectLambdaTransformationConfigurationsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = serializeAws_restXmlObjectLambdaTransformationConfiguration(entry, context);
        return node.withName("TransformationConfiguration");
    });
};
const serializeAws_restXmlPrefixLevel = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("PrefixLevel");
    if (input.StorageMetrics !== undefined && input.StorageMetrics !== null) {
        const node = serializeAws_restXmlPrefixLevelStorageMetrics(input.StorageMetrics, context).withName("StorageMetrics");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlPrefixLevelStorageMetrics = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("PrefixLevelStorageMetrics");
    if (input.IsEnabled !== undefined && input.IsEnabled !== null) {
        const node = new xml_builder_1.XmlNode("IsEnabled").addChildNode(new xml_builder_1.XmlText(String(input.IsEnabled))).withName("IsEnabled");
        bodyNode.addChildNode(node);
    }
    if (input.SelectionCriteria !== undefined && input.SelectionCriteria !== null) {
        const node = serializeAws_restXmlSelectionCriteria(input.SelectionCriteria, context).withName("SelectionCriteria");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlPublicAccessBlockConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("PublicAccessBlockConfiguration");
    if (input.BlockPublicAcls !== undefined && input.BlockPublicAcls !== null) {
        const node = new xml_builder_1.XmlNode("Setting")
            .addChildNode(new xml_builder_1.XmlText(String(input.BlockPublicAcls)))
            .withName("BlockPublicAcls");
        bodyNode.addChildNode(node);
    }
    if (input.IgnorePublicAcls !== undefined && input.IgnorePublicAcls !== null) {
        const node = new xml_builder_1.XmlNode("Setting")
            .addChildNode(new xml_builder_1.XmlText(String(input.IgnorePublicAcls)))
            .withName("IgnorePublicAcls");
        bodyNode.addChildNode(node);
    }
    if (input.BlockPublicPolicy !== undefined && input.BlockPublicPolicy !== null) {
        const node = new xml_builder_1.XmlNode("Setting")
            .addChildNode(new xml_builder_1.XmlText(String(input.BlockPublicPolicy)))
            .withName("BlockPublicPolicy");
        bodyNode.addChildNode(node);
    }
    if (input.RestrictPublicBuckets !== undefined && input.RestrictPublicBuckets !== null) {
        const node = new xml_builder_1.XmlNode("Setting")
            .addChildNode(new xml_builder_1.XmlText(String(input.RestrictPublicBuckets)))
            .withName("RestrictPublicBuckets");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlRegions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = new xml_builder_1.XmlNode("S3AWSRegion").addChildNode(new xml_builder_1.XmlText(entry));
        return node.withName("Region");
    });
};
const serializeAws_restXmlS3AccessControlList = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3AccessControlList");
    if (input.Owner !== undefined && input.Owner !== null) {
        const node = serializeAws_restXmlS3ObjectOwner(input.Owner, context).withName("Owner");
        bodyNode.addChildNode(node);
    }
    if (input.Grants !== undefined && input.Grants !== null) {
        const nodes = serializeAws_restXmlS3GrantList(input.Grants, context);
        const containerNode = new xml_builder_1.XmlNode("Grants");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlS3AccessControlPolicy = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3AccessControlPolicy");
    if (input.AccessControlList !== undefined && input.AccessControlList !== null) {
        const node = serializeAws_restXmlS3AccessControlList(input.AccessControlList, context).withName("AccessControlList");
        bodyNode.addChildNode(node);
    }
    if (input.CannedAccessControlList !== undefined && input.CannedAccessControlList !== null) {
        const node = new xml_builder_1.XmlNode("S3CannedAccessControlList")
            .addChildNode(new xml_builder_1.XmlText(input.CannedAccessControlList))
            .withName("CannedAccessControlList");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3BucketDestination = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3BucketDestination");
    if (input.Format !== undefined && input.Format !== null) {
        const node = new xml_builder_1.XmlNode("Format").addChildNode(new xml_builder_1.XmlText(input.Format)).withName("Format");
        bodyNode.addChildNode(node);
    }
    if (input.OutputSchemaVersion !== undefined && input.OutputSchemaVersion !== null) {
        const node = new xml_builder_1.XmlNode("OutputSchemaVersion")
            .addChildNode(new xml_builder_1.XmlText(input.OutputSchemaVersion))
            .withName("OutputSchemaVersion");
        bodyNode.addChildNode(node);
    }
    if (input.AccountId !== undefined && input.AccountId !== null) {
        const node = new xml_builder_1.XmlNode("AccountId").addChildNode(new xml_builder_1.XmlText(input.AccountId)).withName("AccountId");
        bodyNode.addChildNode(node);
    }
    if (input.Arn !== undefined && input.Arn !== null) {
        const node = new xml_builder_1.XmlNode("S3BucketArnString").addChildNode(new xml_builder_1.XmlText(input.Arn)).withName("Arn");
        bodyNode.addChildNode(node);
    }
    if (input.Prefix !== undefined && input.Prefix !== null) {
        const node = new xml_builder_1.XmlNode("Prefix").addChildNode(new xml_builder_1.XmlText(input.Prefix)).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Encryption !== undefined && input.Encryption !== null) {
        const node = serializeAws_restXmlStorageLensDataExportEncryption(input.Encryption, context).withName("Encryption");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3CopyObjectOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3CopyObjectOperation");
    if (input.TargetResource !== undefined && input.TargetResource !== null) {
        const node = new xml_builder_1.XmlNode("S3BucketArnString")
            .addChildNode(new xml_builder_1.XmlText(input.TargetResource))
            .withName("TargetResource");
        bodyNode.addChildNode(node);
    }
    if (input.CannedAccessControlList !== undefined && input.CannedAccessControlList !== null) {
        const node = new xml_builder_1.XmlNode("S3CannedAccessControlList")
            .addChildNode(new xml_builder_1.XmlText(input.CannedAccessControlList))
            .withName("CannedAccessControlList");
        bodyNode.addChildNode(node);
    }
    if (input.AccessControlGrants !== undefined && input.AccessControlGrants !== null) {
        const nodes = serializeAws_restXmlS3GrantList(input.AccessControlGrants, context);
        const containerNode = new xml_builder_1.XmlNode("AccessControlGrants");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.MetadataDirective !== undefined && input.MetadataDirective !== null) {
        const node = new xml_builder_1.XmlNode("S3MetadataDirective")
            .addChildNode(new xml_builder_1.XmlText(input.MetadataDirective))
            .withName("MetadataDirective");
        bodyNode.addChildNode(node);
    }
    if (input.ModifiedSinceConstraint !== undefined && input.ModifiedSinceConstraint !== null) {
        const node = new xml_builder_1.XmlNode("TimeStamp")
            .addChildNode(new xml_builder_1.XmlText(input.ModifiedSinceConstraint.toISOString().split(".")[0] + "Z"))
            .withName("ModifiedSinceConstraint");
        bodyNode.addChildNode(node);
    }
    if (input.NewObjectMetadata !== undefined && input.NewObjectMetadata !== null) {
        const node = serializeAws_restXmlS3ObjectMetadata(input.NewObjectMetadata, context).withName("NewObjectMetadata");
        bodyNode.addChildNode(node);
    }
    if (input.NewObjectTagging !== undefined && input.NewObjectTagging !== null) {
        const nodes = serializeAws_restXmlS3TagSet(input.NewObjectTagging, context);
        const containerNode = new xml_builder_1.XmlNode("NewObjectTagging");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.RedirectLocation !== undefined && input.RedirectLocation !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength2048String")
            .addChildNode(new xml_builder_1.XmlText(input.RedirectLocation))
            .withName("RedirectLocation");
        bodyNode.addChildNode(node);
    }
    if (input.RequesterPays !== undefined && input.RequesterPays !== null) {
        const node = new xml_builder_1.XmlNode("Boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.RequesterPays)))
            .withName("RequesterPays");
        bodyNode.addChildNode(node);
    }
    if (input.StorageClass !== undefined && input.StorageClass !== null) {
        const node = new xml_builder_1.XmlNode("S3StorageClass")
            .addChildNode(new xml_builder_1.XmlText(input.StorageClass))
            .withName("StorageClass");
        bodyNode.addChildNode(node);
    }
    if (input.UnModifiedSinceConstraint !== undefined && input.UnModifiedSinceConstraint !== null) {
        const node = new xml_builder_1.XmlNode("TimeStamp")
            .addChildNode(new xml_builder_1.XmlText(input.UnModifiedSinceConstraint.toISOString().split(".")[0] + "Z"))
            .withName("UnModifiedSinceConstraint");
        bodyNode.addChildNode(node);
    }
    if (input.SSEAwsKmsKeyId !== undefined && input.SSEAwsKmsKeyId !== null) {
        const node = new xml_builder_1.XmlNode("KmsKeyArnString")
            .addChildNode(new xml_builder_1.XmlText(input.SSEAwsKmsKeyId))
            .withName("SSEAwsKmsKeyId");
        bodyNode.addChildNode(node);
    }
    if (input.TargetKeyPrefix !== undefined && input.TargetKeyPrefix !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.TargetKeyPrefix))
            .withName("TargetKeyPrefix");
        bodyNode.addChildNode(node);
    }
    if (input.ObjectLockLegalHoldStatus !== undefined && input.ObjectLockLegalHoldStatus !== null) {
        const node = new xml_builder_1.XmlNode("S3ObjectLockLegalHoldStatus")
            .addChildNode(new xml_builder_1.XmlText(input.ObjectLockLegalHoldStatus))
            .withName("ObjectLockLegalHoldStatus");
        bodyNode.addChildNode(node);
    }
    if (input.ObjectLockMode !== undefined && input.ObjectLockMode !== null) {
        const node = new xml_builder_1.XmlNode("S3ObjectLockMode")
            .addChildNode(new xml_builder_1.XmlText(input.ObjectLockMode))
            .withName("ObjectLockMode");
        bodyNode.addChildNode(node);
    }
    if (input.ObjectLockRetainUntilDate !== undefined && input.ObjectLockRetainUntilDate !== null) {
        const node = new xml_builder_1.XmlNode("TimeStamp")
            .addChildNode(new xml_builder_1.XmlText(input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z"))
            .withName("ObjectLockRetainUntilDate");
        bodyNode.addChildNode(node);
    }
    if (input.BucketKeyEnabled !== undefined && input.BucketKeyEnabled !== null) {
        const node = new xml_builder_1.XmlNode("Boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.BucketKeyEnabled)))
            .withName("BucketKeyEnabled");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3DeleteObjectTaggingOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3DeleteObjectTaggingOperation");
    return bodyNode;
};
const serializeAws_restXmlS3Grant = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3Grant");
    if (input.Grantee !== undefined && input.Grantee !== null) {
        const node = serializeAws_restXmlS3Grantee(input.Grantee, context).withName("Grantee");
        bodyNode.addChildNode(node);
    }
    if (input.Permission !== undefined && input.Permission !== null) {
        const node = new xml_builder_1.XmlNode("S3Permission").addChildNode(new xml_builder_1.XmlText(input.Permission)).withName("Permission");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3Grantee = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3Grantee");
    if (input.TypeIdentifier !== undefined && input.TypeIdentifier !== null) {
        const node = new xml_builder_1.XmlNode("S3GranteeTypeIdentifier")
            .addChildNode(new xml_builder_1.XmlText(input.TypeIdentifier))
            .withName("TypeIdentifier");
        bodyNode.addChildNode(node);
    }
    if (input.Identifier !== undefined && input.Identifier !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.Identifier))
            .withName("Identifier");
        bodyNode.addChildNode(node);
    }
    if (input.DisplayName !== undefined && input.DisplayName !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.DisplayName))
            .withName("DisplayName");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3GrantList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = serializeAws_restXmlS3Grant(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlS3InitiateRestoreObjectOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3InitiateRestoreObjectOperation");
    if (input.ExpirationInDays !== undefined && input.ExpirationInDays !== null) {
        const node = new xml_builder_1.XmlNode("S3ExpirationInDays")
            .addChildNode(new xml_builder_1.XmlText(String(input.ExpirationInDays)))
            .withName("ExpirationInDays");
        bodyNode.addChildNode(node);
    }
    if (input.GlacierJobTier !== undefined && input.GlacierJobTier !== null) {
        const node = new xml_builder_1.XmlNode("S3GlacierJobTier")
            .addChildNode(new xml_builder_1.XmlText(input.GlacierJobTier))
            .withName("GlacierJobTier");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3ObjectLockLegalHold = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3ObjectLockLegalHold");
    if (input.Status !== undefined && input.Status !== null) {
        const node = new xml_builder_1.XmlNode("S3ObjectLockLegalHoldStatus")
            .addChildNode(new xml_builder_1.XmlText(input.Status))
            .withName("Status");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3ObjectMetadata = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3ObjectMetadata");
    if (input.CacheControl !== undefined && input.CacheControl !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.CacheControl))
            .withName("CacheControl");
        bodyNode.addChildNode(node);
    }
    if (input.ContentDisposition !== undefined && input.ContentDisposition !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.ContentDisposition))
            .withName("ContentDisposition");
        bodyNode.addChildNode(node);
    }
    if (input.ContentEncoding !== undefined && input.ContentEncoding !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.ContentEncoding))
            .withName("ContentEncoding");
        bodyNode.addChildNode(node);
    }
    if (input.ContentLanguage !== undefined && input.ContentLanguage !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.ContentLanguage))
            .withName("ContentLanguage");
        bodyNode.addChildNode(node);
    }
    if (input.UserMetadata !== undefined && input.UserMetadata !== null) {
        const nodes = serializeAws_restXmlS3UserMetadata(input.UserMetadata, context);
        const containerNode = new xml_builder_1.XmlNode("UserMetadata");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.ContentLength !== undefined && input.ContentLength !== null) {
        const node = new xml_builder_1.XmlNode("S3ContentLength")
            .addChildNode(new xml_builder_1.XmlText(String(input.ContentLength)))
            .withName("ContentLength");
        bodyNode.addChildNode(node);
    }
    if (input.ContentMD5 !== undefined && input.ContentMD5 !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.ContentMD5))
            .withName("ContentMD5");
        bodyNode.addChildNode(node);
    }
    if (input.ContentType !== undefined && input.ContentType !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.ContentType))
            .withName("ContentType");
        bodyNode.addChildNode(node);
    }
    if (input.HttpExpiresDate !== undefined && input.HttpExpiresDate !== null) {
        const node = new xml_builder_1.XmlNode("TimeStamp")
            .addChildNode(new xml_builder_1.XmlText(input.HttpExpiresDate.toISOString().split(".")[0] + "Z"))
            .withName("HttpExpiresDate");
        bodyNode.addChildNode(node);
    }
    if (input.RequesterCharged !== undefined && input.RequesterCharged !== null) {
        const node = new xml_builder_1.XmlNode("Boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.RequesterCharged)))
            .withName("RequesterCharged");
        bodyNode.addChildNode(node);
    }
    if (input.SSEAlgorithm !== undefined && input.SSEAlgorithm !== null) {
        const node = new xml_builder_1.XmlNode("S3SSEAlgorithm")
            .addChildNode(new xml_builder_1.XmlText(input.SSEAlgorithm))
            .withName("SSEAlgorithm");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3ObjectOwner = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3ObjectOwner");
    if (input.ID !== undefined && input.ID !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String").addChildNode(new xml_builder_1.XmlText(input.ID)).withName("ID");
        bodyNode.addChildNode(node);
    }
    if (input.DisplayName !== undefined && input.DisplayName !== null) {
        const node = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.DisplayName))
            .withName("DisplayName");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3Retention = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3Retention");
    if (input.RetainUntilDate !== undefined && input.RetainUntilDate !== null) {
        const node = new xml_builder_1.XmlNode("TimeStamp")
            .addChildNode(new xml_builder_1.XmlText(input.RetainUntilDate.toISOString().split(".")[0] + "Z"))
            .withName("RetainUntilDate");
        bodyNode.addChildNode(node);
    }
    if (input.Mode !== undefined && input.Mode !== null) {
        const node = new xml_builder_1.XmlNode("S3ObjectLockRetentionMode").addChildNode(new xml_builder_1.XmlText(input.Mode)).withName("Mode");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3SetObjectAclOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3SetObjectAclOperation");
    if (input.AccessControlPolicy !== undefined && input.AccessControlPolicy !== null) {
        const node = serializeAws_restXmlS3AccessControlPolicy(input.AccessControlPolicy, context).withName("AccessControlPolicy");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3SetObjectLegalHoldOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3SetObjectLegalHoldOperation");
    if (input.LegalHold !== undefined && input.LegalHold !== null) {
        const node = serializeAws_restXmlS3ObjectLockLegalHold(input.LegalHold, context).withName("LegalHold");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3SetObjectRetentionOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3SetObjectRetentionOperation");
    if (input.BypassGovernanceRetention !== undefined && input.BypassGovernanceRetention !== null) {
        const node = new xml_builder_1.XmlNode("Boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.BypassGovernanceRetention)))
            .withName("BypassGovernanceRetention");
        bodyNode.addChildNode(node);
    }
    if (input.Retention !== undefined && input.Retention !== null) {
        const node = serializeAws_restXmlS3Retention(input.Retention, context).withName("Retention");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3SetObjectTaggingOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3SetObjectTaggingOperation");
    if (input.TagSet !== undefined && input.TagSet !== null) {
        const nodes = serializeAws_restXmlS3TagSet(input.TagSet, context);
        const containerNode = new xml_builder_1.XmlNode("TagSet");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlS3Tag = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3Tag");
    if (input.Key !== undefined && input.Key !== null) {
        const node = new xml_builder_1.XmlNode("TagKeyString").addChildNode(new xml_builder_1.XmlText(input.Key)).withName("Key");
        bodyNode.addChildNode(node);
    }
    if (input.Value !== undefined && input.Value !== null) {
        const node = new xml_builder_1.XmlNode("TagValueString").addChildNode(new xml_builder_1.XmlText(input.Value)).withName("Value");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlS3TagSet = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = serializeAws_restXmlS3Tag(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlS3UserMetadata = (input, context) => {
    return Object.keys(input)
        .filter((key) => input[key] != null)
        .map((key) => {
        const entryNode = new xml_builder_1.XmlNode("entry");
        const keyNode = new xml_builder_1.XmlNode("NonEmptyMaxLength1024String").addChildNode(new xml_builder_1.XmlText(key)).withName("key");
        entryNode.addChildNode(keyNode);
        var node;
        node = new xml_builder_1.XmlNode("MaxLength1024String").addChildNode(new xml_builder_1.XmlText(input[key]));
        entryNode.addChildNode(node.withName("value"));
        return entryNode;
    });
};
const serializeAws_restXmlSelectionCriteria = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SelectionCriteria");
    if (input.Delimiter !== undefined && input.Delimiter !== null) {
        const node = new xml_builder_1.XmlNode("StorageLensPrefixLevelDelimiter")
            .addChildNode(new xml_builder_1.XmlText(input.Delimiter))
            .withName("Delimiter");
        bodyNode.addChildNode(node);
    }
    if (input.MaxDepth !== undefined && input.MaxDepth !== null) {
        const node = new xml_builder_1.XmlNode("StorageLensPrefixLevelMaxDepth")
            .addChildNode(new xml_builder_1.XmlText(String(input.MaxDepth)))
            .withName("MaxDepth");
        bodyNode.addChildNode(node);
    }
    if (input.MinStorageBytesPercentage !== undefined && input.MinStorageBytesPercentage !== null) {
        const node = new xml_builder_1.XmlNode("MinStorageBytesPercentage")
            .addChildNode(new xml_builder_1.XmlText(String(input.MinStorageBytesPercentage)))
            .withName("MinStorageBytesPercentage");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlSSEKMS = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SSE-KMS");
    if (input.KeyId !== undefined && input.KeyId !== null) {
        const node = new xml_builder_1.XmlNode("SSEKMSKeyId").addChildNode(new xml_builder_1.XmlText(input.KeyId)).withName("KeyId");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlSSES3 = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SSE-S3");
    return bodyNode;
};
const serializeAws_restXmlStorageLensAwsOrg = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StorageLensAwsOrg");
    if (input.Arn !== undefined && input.Arn !== null) {
        const node = new xml_builder_1.XmlNode("AwsOrgArn").addChildNode(new xml_builder_1.XmlText(input.Arn)).withName("Arn");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlStorageLensConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StorageLensConfiguration");
    if (input.Id !== undefined && input.Id !== null) {
        const node = new xml_builder_1.XmlNode("ConfigId").addChildNode(new xml_builder_1.XmlText(input.Id)).withName("Id");
        bodyNode.addChildNode(node);
    }
    if (input.AccountLevel !== undefined && input.AccountLevel !== null) {
        const node = serializeAws_restXmlAccountLevel(input.AccountLevel, context).withName("AccountLevel");
        bodyNode.addChildNode(node);
    }
    if (input.Include !== undefined && input.Include !== null) {
        const node = serializeAws_restXmlInclude(input.Include, context).withName("Include");
        bodyNode.addChildNode(node);
    }
    if (input.Exclude !== undefined && input.Exclude !== null) {
        const node = serializeAws_restXml_Exclude(input.Exclude, context).withName("Exclude");
        bodyNode.addChildNode(node);
    }
    if (input.DataExport !== undefined && input.DataExport !== null) {
        const node = serializeAws_restXmlStorageLensDataExport(input.DataExport, context).withName("DataExport");
        bodyNode.addChildNode(node);
    }
    if (input.IsEnabled !== undefined && input.IsEnabled !== null) {
        const node = new xml_builder_1.XmlNode("IsEnabled").addChildNode(new xml_builder_1.XmlText(String(input.IsEnabled))).withName("IsEnabled");
        bodyNode.addChildNode(node);
    }
    if (input.AwsOrg !== undefined && input.AwsOrg !== null) {
        const node = serializeAws_restXmlStorageLensAwsOrg(input.AwsOrg, context).withName("AwsOrg");
        bodyNode.addChildNode(node);
    }
    if (input.StorageLensArn !== undefined && input.StorageLensArn !== null) {
        const node = new xml_builder_1.XmlNode("StorageLensArn")
            .addChildNode(new xml_builder_1.XmlText(input.StorageLensArn))
            .withName("StorageLensArn");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlStorageLensDataExport = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StorageLensDataExport");
    if (input.S3BucketDestination !== undefined && input.S3BucketDestination !== null) {
        const node = serializeAws_restXmlS3BucketDestination(input.S3BucketDestination, context).withName("S3BucketDestination");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlStorageLensDataExportEncryption = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StorageLensDataExportEncryption");
    if (input.SSES3 !== undefined && input.SSES3 !== null) {
        const node = serializeAws_restXmlSSES3(input.SSES3, context).withName("SSE-S3");
        bodyNode.addChildNode(node);
    }
    if (input.SSEKMS !== undefined && input.SSEKMS !== null) {
        const node = serializeAws_restXmlSSEKMS(input.SSEKMS, context).withName("SSE-KMS");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlStorageLensTag = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StorageLensTag");
    if (input.Key !== undefined && input.Key !== null) {
        const node = new xml_builder_1.XmlNode("TagKeyString").addChildNode(new xml_builder_1.XmlText(input.Key)).withName("Key");
        bodyNode.addChildNode(node);
    }
    if (input.Value !== undefined && input.Value !== null) {
        const node = new xml_builder_1.XmlNode("TagValueString").addChildNode(new xml_builder_1.XmlText(input.Value)).withName("Value");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlStorageLensTags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = serializeAws_restXmlStorageLensTag(entry, context);
        return node.withName("Tag");
    });
};
const serializeAws_restXmlTagging = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Tagging");
    if (input.TagSet !== undefined && input.TagSet !== null) {
        const nodes = serializeAws_restXmlS3TagSet(input.TagSet, context);
        const containerNode = new xml_builder_1.XmlNode("TagSet");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlTransition = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Transition");
    if (input.Date !== undefined && input.Date !== null) {
        const node = new xml_builder_1.XmlNode("Date")
            .addChildNode(new xml_builder_1.XmlText(input.Date.toISOString().split(".")[0] + "Z"))
            .withName("Date");
        bodyNode.addChildNode(node);
    }
    if (input.Days !== undefined && input.Days !== null) {
        const node = new xml_builder_1.XmlNode("Days").addChildNode(new xml_builder_1.XmlText(String(input.Days))).withName("Days");
        bodyNode.addChildNode(node);
    }
    if (input.StorageClass !== undefined && input.StorageClass !== null) {
        const node = new xml_builder_1.XmlNode("TransitionStorageClass")
            .addChildNode(new xml_builder_1.XmlText(input.StorageClass))
            .withName("StorageClass");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlTransitionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = serializeAws_restXmlTransition(entry, context);
        return node.withName("Transition");
    });
};
const serializeAws_restXmlVpcConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("VpcConfiguration");
    if (input.VpcId !== undefined && input.VpcId !== null) {
        const node = new xml_builder_1.XmlNode("VpcId").addChildNode(new xml_builder_1.XmlText(input.VpcId)).withName("VpcId");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const deserializeAws_restXmlAbortIncompleteMultipartUpload = (output, context) => {
    let contents = {
        DaysAfterInitiation: undefined,
    };
    if (output["DaysAfterInitiation"] !== undefined) {
        contents.DaysAfterInitiation = parseInt(output["DaysAfterInitiation"]);
    }
    return contents;
};
const deserializeAws_restXmlAccessPoint = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlAccessPointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlAccessPoint(entry, context);
    });
};
const deserializeAws_restXmlAccountLevel = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlActivityMetrics = (output, context) => {
    let contents = {
        IsEnabled: undefined,
    };
    if (output["IsEnabled"] !== undefined) {
        contents.IsEnabled = output["IsEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_restXmlAwsLambdaTransformation = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlBucketLevel = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlBuckets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restXml_Exclude = (output, context) => {
    let contents = {
        Buckets: undefined,
        Regions: undefined,
    };
    if (output.Buckets === "") {
        contents.Buckets = [];
    }
    if (output["Buckets"] !== undefined && output["Buckets"]["Arn"] !== undefined) {
        contents.Buckets = deserializeAws_restXmlBuckets(smithy_client_1.getArrayIfSingleItem(output["Buckets"]["Arn"]), context);
    }
    if (output.Regions === "") {
        contents.Regions = [];
    }
    if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
        contents.Regions = deserializeAws_restXmlRegions(smithy_client_1.getArrayIfSingleItem(output["Regions"]["Region"]), context);
    }
    return contents;
};
const deserializeAws_restXmlInclude = (output, context) => {
    let contents = {
        Buckets: undefined,
        Regions: undefined,
    };
    if (output.Buckets === "") {
        contents.Buckets = [];
    }
    if (output["Buckets"] !== undefined && output["Buckets"]["Arn"] !== undefined) {
        contents.Buckets = deserializeAws_restXmlBuckets(smithy_client_1.getArrayIfSingleItem(output["Buckets"]["Arn"]), context);
    }
    if (output.Regions === "") {
        contents.Regions = [];
    }
    if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
        contents.Regions = deserializeAws_restXmlRegions(smithy_client_1.getArrayIfSingleItem(output["Regions"]["Region"]), context);
    }
    return contents;
};
const deserializeAws_restXmlJobDescriptor = (output, context) => {
    let contents = {
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
        contents.FailureReasons = deserializeAws_restXmlJobFailureList(smithy_client_1.getArrayIfSingleItem(output["FailureReasons"]["member"]), context);
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
const deserializeAws_restXmlJobFailure = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlJobFailureList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlJobFailure(entry, context);
    });
};
const deserializeAws_restXmlJobListDescriptor = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlJobListDescriptorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlJobListDescriptor(entry, context);
    });
};
const deserializeAws_restXmlJobManifest = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlJobManifestFieldList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restXmlJobManifestLocation = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlJobManifestSpec = (output, context) => {
    let contents = {
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
        contents.Fields = deserializeAws_restXmlJobManifestFieldList(smithy_client_1.getArrayIfSingleItem(output["Fields"]["member"]), context);
    }
    return contents;
};
const deserializeAws_restXmlJobOperation = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlJobProgressSummary = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlJobReport = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlLambdaInvokeOperation = (output, context) => {
    let contents = {
        FunctionArn: undefined,
    };
    if (output["FunctionArn"] !== undefined) {
        contents.FunctionArn = output["FunctionArn"];
    }
    return contents;
};
const deserializeAws_restXmlLifecycleExpiration = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlLifecycleRule = (output, context) => {
    let contents = {
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
        contents.Transitions = deserializeAws_restXmlTransitionList(smithy_client_1.getArrayIfSingleItem(output["Transitions"]["Transition"]), context);
    }
    if (output.NoncurrentVersionTransitions === "") {
        contents.NoncurrentVersionTransitions = [];
    }
    if (output["NoncurrentVersionTransitions"] !== undefined &&
        output["NoncurrentVersionTransitions"]["NoncurrentVersionTransition"] !== undefined) {
        contents.NoncurrentVersionTransitions = deserializeAws_restXmlNoncurrentVersionTransitionList(smithy_client_1.getArrayIfSingleItem(output["NoncurrentVersionTransitions"]["NoncurrentVersionTransition"]), context);
    }
    if (output["NoncurrentVersionExpiration"] !== undefined) {
        contents.NoncurrentVersionExpiration = deserializeAws_restXmlNoncurrentVersionExpiration(output["NoncurrentVersionExpiration"], context);
    }
    if (output["AbortIncompleteMultipartUpload"] !== undefined) {
        contents.AbortIncompleteMultipartUpload = deserializeAws_restXmlAbortIncompleteMultipartUpload(output["AbortIncompleteMultipartUpload"], context);
    }
    return contents;
};
const deserializeAws_restXmlLifecycleRuleAndOperator = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_restXmlS3TagSet(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_restXmlLifecycleRuleFilter = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlLifecycleRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlLifecycleRule(entry, context);
    });
};
const deserializeAws_restXmlListStorageLensConfigurationEntry = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlNoncurrentVersionExpiration = (output, context) => {
    let contents = {
        NoncurrentDays: undefined,
    };
    if (output["NoncurrentDays"] !== undefined) {
        contents.NoncurrentDays = parseInt(output["NoncurrentDays"]);
    }
    return contents;
};
const deserializeAws_restXmlNoncurrentVersionTransition = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlNoncurrentVersionTransitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlNoncurrentVersionTransition(entry, context);
    });
};
const deserializeAws_restXmlObjectLambdaAccessPoint = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlObjectLambdaAccessPointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlObjectLambdaAccessPoint(entry, context);
    });
};
const deserializeAws_restXmlObjectLambdaAllowedFeaturesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restXmlObjectLambdaConfiguration = (output, context) => {
    let contents = {
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
        contents.AllowedFeatures = deserializeAws_restXmlObjectLambdaAllowedFeaturesList(smithy_client_1.getArrayIfSingleItem(output["AllowedFeatures"]["AllowedFeature"]), context);
    }
    if (output.TransformationConfigurations === "") {
        contents.TransformationConfigurations = [];
    }
    if (output["TransformationConfigurations"] !== undefined &&
        output["TransformationConfigurations"]["TransformationConfiguration"] !== undefined) {
        contents.TransformationConfigurations = deserializeAws_restXmlObjectLambdaTransformationConfigurationsList(smithy_client_1.getArrayIfSingleItem(output["TransformationConfigurations"]["TransformationConfiguration"]), context);
    }
    return contents;
};
const deserializeAws_restXmlObjectLambdaContentTransformation = (output, context) => {
    if (output["AwsLambda"] !== undefined) {
        return {
            AwsLambda: deserializeAws_restXmlAwsLambdaTransformation(output["AwsLambda"], context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restXmlObjectLambdaTransformationConfiguration = (output, context) => {
    let contents = {
        Actions: undefined,
        ContentTransformation: undefined,
    };
    if (output.Actions === "") {
        contents.Actions = [];
    }
    if (output["Actions"] !== undefined && output["Actions"]["Action"] !== undefined) {
        contents.Actions = deserializeAws_restXmlObjectLambdaTransformationConfigurationActionsList(smithy_client_1.getArrayIfSingleItem(output["Actions"]["Action"]), context);
    }
    if (output["ContentTransformation"] !== undefined) {
        contents.ContentTransformation = deserializeAws_restXmlObjectLambdaContentTransformation(output["ContentTransformation"], context);
    }
    return contents;
};
const deserializeAws_restXmlObjectLambdaTransformationConfigurationActionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restXmlObjectLambdaTransformationConfigurationsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlObjectLambdaTransformationConfiguration(entry, context);
    });
};
const deserializeAws_restXmlPolicyStatus = (output, context) => {
    let contents = {
        IsPublic: undefined,
    };
    if (output["IsPublic"] !== undefined) {
        contents.IsPublic = output["IsPublic"] == "true";
    }
    return contents;
};
const deserializeAws_restXmlPrefixLevel = (output, context) => {
    let contents = {
        StorageMetrics: undefined,
    };
    if (output["StorageMetrics"] !== undefined) {
        contents.StorageMetrics = deserializeAws_restXmlPrefixLevelStorageMetrics(output["StorageMetrics"], context);
    }
    return contents;
};
const deserializeAws_restXmlPrefixLevelStorageMetrics = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlPublicAccessBlockConfiguration = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlRegionalBucket = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlRegionalBucketList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlRegionalBucket(entry, context);
    });
};
const deserializeAws_restXmlRegions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restXmlS3AccessControlList = (output, context) => {
    let contents = {
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
        contents.Grants = deserializeAws_restXmlS3GrantList(smithy_client_1.getArrayIfSingleItem(output["Grants"]["member"]), context);
    }
    return contents;
};
const deserializeAws_restXmlS3AccessControlPolicy = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlS3BucketDestination = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlS3CopyObjectOperation = (output, context) => {
    let contents = {
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
        contents.AccessControlGrants = deserializeAws_restXmlS3GrantList(smithy_client_1.getArrayIfSingleItem(output["AccessControlGrants"]["member"]), context);
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
        contents.NewObjectTagging = deserializeAws_restXmlS3TagSet(smithy_client_1.getArrayIfSingleItem(output["NewObjectTagging"]["member"]), context);
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
const deserializeAws_restXmlS3DeleteObjectTaggingOperation = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_restXmlS3Grant = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlS3Grantee = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlS3GrantList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlS3Grant(entry, context);
    });
};
const deserializeAws_restXmlS3InitiateRestoreObjectOperation = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlS3ObjectLockLegalHold = (output, context) => {
    let contents = {
        Status: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_restXmlS3ObjectMetadata = (output, context) => {
    let contents = {
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
        contents.UserMetadata = deserializeAws_restXmlS3UserMetadata(smithy_client_1.getArrayIfSingleItem(output["UserMetadata"]["entry"]), context);
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
const deserializeAws_restXmlS3ObjectOwner = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlS3Retention = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlS3SetObjectAclOperation = (output, context) => {
    let contents = {
        AccessControlPolicy: undefined,
    };
    if (output["AccessControlPolicy"] !== undefined) {
        contents.AccessControlPolicy = deserializeAws_restXmlS3AccessControlPolicy(output["AccessControlPolicy"], context);
    }
    return contents;
};
const deserializeAws_restXmlS3SetObjectLegalHoldOperation = (output, context) => {
    let contents = {
        LegalHold: undefined,
    };
    if (output["LegalHold"] !== undefined) {
        contents.LegalHold = deserializeAws_restXmlS3ObjectLockLegalHold(output["LegalHold"], context);
    }
    return contents;
};
const deserializeAws_restXmlS3SetObjectRetentionOperation = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlS3SetObjectTaggingOperation = (output, context) => {
    let contents = {
        TagSet: undefined,
    };
    if (output.TagSet === "") {
        contents.TagSet = [];
    }
    if (output["TagSet"] !== undefined && output["TagSet"]["member"] !== undefined) {
        contents.TagSet = deserializeAws_restXmlS3TagSet(smithy_client_1.getArrayIfSingleItem(output["TagSet"]["member"]), context);
    }
    return contents;
};
const deserializeAws_restXmlS3Tag = (output, context) => {
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
const deserializeAws_restXmlS3TagSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlS3Tag(entry, context);
    });
};
const deserializeAws_restXmlS3UserMetadata = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: pair["value"],
        };
    }, {});
};
const deserializeAws_restXmlSelectionCriteria = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlSSEKMS = (output, context) => {
    let contents = {
        KeyId: undefined,
    };
    if (output["KeyId"] !== undefined) {
        contents.KeyId = output["KeyId"];
    }
    return contents;
};
const deserializeAws_restXmlSSES3 = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_restXmlStorageLensAwsOrg = (output, context) => {
    let contents = {
        Arn: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    return contents;
};
const deserializeAws_restXmlStorageLensConfiguration = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlStorageLensConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlListStorageLensConfigurationEntry(entry, context);
    });
};
const deserializeAws_restXmlStorageLensDataExport = (output, context) => {
    let contents = {
        S3BucketDestination: undefined,
    };
    if (output["S3BucketDestination"] !== undefined) {
        contents.S3BucketDestination = deserializeAws_restXmlS3BucketDestination(output["S3BucketDestination"], context);
    }
    return contents;
};
const deserializeAws_restXmlStorageLensDataExportEncryption = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlStorageLensTag = (output, context) => {
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
const deserializeAws_restXmlStorageLensTags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlStorageLensTag(entry, context);
    });
};
const deserializeAws_restXmlTransition = (output, context) => {
    let contents = {
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
const deserializeAws_restXmlTransitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlTransition(entry, context);
    });
};
const deserializeAws_restXmlVpcConfiguration = (output, context) => {
    let contents = {
        VpcId: undefined,
    };
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
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