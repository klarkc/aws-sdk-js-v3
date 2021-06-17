"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateApplicationCommand = exports.deserializeAws_restJson1UnshareApplicationCommand = exports.deserializeAws_restJson1PutApplicationPolicyCommand = exports.deserializeAws_restJson1ListApplicationVersionsCommand = exports.deserializeAws_restJson1ListApplicationsCommand = exports.deserializeAws_restJson1ListApplicationDependenciesCommand = exports.deserializeAws_restJson1GetCloudFormationTemplateCommand = exports.deserializeAws_restJson1GetApplicationPolicyCommand = exports.deserializeAws_restJson1GetApplicationCommand = exports.deserializeAws_restJson1DeleteApplicationCommand = exports.deserializeAws_restJson1CreateCloudFormationTemplateCommand = exports.deserializeAws_restJson1CreateCloudFormationChangeSetCommand = exports.deserializeAws_restJson1CreateApplicationVersionCommand = exports.deserializeAws_restJson1CreateApplicationCommand = exports.serializeAws_restJson1UpdateApplicationCommand = exports.serializeAws_restJson1UnshareApplicationCommand = exports.serializeAws_restJson1PutApplicationPolicyCommand = exports.serializeAws_restJson1ListApplicationVersionsCommand = exports.serializeAws_restJson1ListApplicationsCommand = exports.serializeAws_restJson1ListApplicationDependenciesCommand = exports.serializeAws_restJson1GetCloudFormationTemplateCommand = exports.serializeAws_restJson1GetApplicationPolicyCommand = exports.serializeAws_restJson1GetApplicationCommand = exports.serializeAws_restJson1DeleteApplicationCommand = exports.serializeAws_restJson1CreateCloudFormationTemplateCommand = exports.serializeAws_restJson1CreateCloudFormationChangeSetCommand = exports.serializeAws_restJson1CreateApplicationVersionCommand = exports.serializeAws_restJson1CreateApplicationCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/applications";
    let body;
    body = JSON.stringify({
        ...(input.Author !== undefined && input.Author !== null && { author: input.Author }),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.HomePageUrl !== undefined && input.HomePageUrl !== null && { homePageUrl: input.HomePageUrl }),
        ...(input.Labels !== undefined &&
            input.Labels !== null && { labels: serializeAws_restJson1__listOf__string(input.Labels, context) }),
        ...(input.LicenseBody !== undefined && input.LicenseBody !== null && { licenseBody: input.LicenseBody }),
        ...(input.LicenseUrl !== undefined && input.LicenseUrl !== null && { licenseUrl: input.LicenseUrl }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.ReadmeBody !== undefined && input.ReadmeBody !== null && { readmeBody: input.ReadmeBody }),
        ...(input.ReadmeUrl !== undefined && input.ReadmeUrl !== null && { readmeUrl: input.ReadmeUrl }),
        ...(input.SemanticVersion !== undefined &&
            input.SemanticVersion !== null && { semanticVersion: input.SemanticVersion }),
        ...(input.SourceCodeArchiveUrl !== undefined &&
            input.SourceCodeArchiveUrl !== null && { sourceCodeArchiveUrl: input.SourceCodeArchiveUrl }),
        ...(input.SourceCodeUrl !== undefined && input.SourceCodeUrl !== null && { sourceCodeUrl: input.SourceCodeUrl }),
        ...(input.SpdxLicenseId !== undefined && input.SpdxLicenseId !== null && { spdxLicenseId: input.SpdxLicenseId }),
        ...(input.TemplateBody !== undefined && input.TemplateBody !== null && { templateBody: input.TemplateBody }),
        ...(input.TemplateUrl !== undefined && input.TemplateUrl !== null && { templateUrl: input.TemplateUrl }),
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
exports.serializeAws_restJson1CreateApplicationCommand = serializeAws_restJson1CreateApplicationCommand;
const serializeAws_restJson1CreateApplicationVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/applications/{ApplicationId}/versions/{SemanticVersion}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.SemanticVersion !== undefined) {
        const labelValue = input.SemanticVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SemanticVersion.");
        }
        resolvedPath = resolvedPath.replace("{SemanticVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SemanticVersion.");
    }
    let body;
    body = JSON.stringify({
        ...(input.SourceCodeArchiveUrl !== undefined &&
            input.SourceCodeArchiveUrl !== null && { sourceCodeArchiveUrl: input.SourceCodeArchiveUrl }),
        ...(input.SourceCodeUrl !== undefined && input.SourceCodeUrl !== null && { sourceCodeUrl: input.SourceCodeUrl }),
        ...(input.TemplateBody !== undefined && input.TemplateBody !== null && { templateBody: input.TemplateBody }),
        ...(input.TemplateUrl !== undefined && input.TemplateUrl !== null && { templateUrl: input.TemplateUrl }),
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
exports.serializeAws_restJson1CreateApplicationVersionCommand = serializeAws_restJson1CreateApplicationVersionCommand;
const serializeAws_restJson1CreateCloudFormationChangeSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/applications/{ApplicationId}/changesets";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Capabilities !== undefined &&
            input.Capabilities !== null && {
            capabilities: serializeAws_restJson1__listOf__string(input.Capabilities, context),
        }),
        ...(input.ChangeSetName !== undefined && input.ChangeSetName !== null && { changeSetName: input.ChangeSetName }),
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { clientToken: input.ClientToken }),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.NotificationArns !== undefined &&
            input.NotificationArns !== null && {
            notificationArns: serializeAws_restJson1__listOf__string(input.NotificationArns, context),
        }),
        ...(input.ParameterOverrides !== undefined &&
            input.ParameterOverrides !== null && {
            parameterOverrides: serializeAws_restJson1__listOfParameterValue(input.ParameterOverrides, context),
        }),
        ...(input.ResourceTypes !== undefined &&
            input.ResourceTypes !== null && {
            resourceTypes: serializeAws_restJson1__listOf__string(input.ResourceTypes, context),
        }),
        ...(input.RollbackConfiguration !== undefined &&
            input.RollbackConfiguration !== null && {
            rollbackConfiguration: serializeAws_restJson1RollbackConfiguration(input.RollbackConfiguration, context),
        }),
        ...(input.SemanticVersion !== undefined &&
            input.SemanticVersion !== null && { semanticVersion: input.SemanticVersion }),
        ...(input.StackName !== undefined && input.StackName !== null && { stackName: input.StackName }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { tags: serializeAws_restJson1__listOfTag(input.Tags, context) }),
        ...(input.TemplateId !== undefined && input.TemplateId !== null && { templateId: input.TemplateId }),
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
exports.serializeAws_restJson1CreateCloudFormationChangeSetCommand = serializeAws_restJson1CreateCloudFormationChangeSetCommand;
const serializeAws_restJson1CreateCloudFormationTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/applications/{ApplicationId}/templates";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.SemanticVersion !== undefined &&
            input.SemanticVersion !== null && { semanticVersion: input.SemanticVersion }),
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
exports.serializeAws_restJson1CreateCloudFormationTemplateCommand = serializeAws_restJson1CreateCloudFormationTemplateCommand;
const serializeAws_restJson1DeleteApplicationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{ApplicationId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
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
exports.serializeAws_restJson1DeleteApplicationCommand = serializeAws_restJson1DeleteApplicationCommand;
const serializeAws_restJson1GetApplicationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{ApplicationId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    const query = {
        ...(input.SemanticVersion !== undefined && { semanticVersion: input.SemanticVersion }),
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
exports.serializeAws_restJson1GetApplicationCommand = serializeAws_restJson1GetApplicationCommand;
const serializeAws_restJson1GetApplicationPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{ApplicationId}/policy";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
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
exports.serializeAws_restJson1GetApplicationPolicyCommand = serializeAws_restJson1GetApplicationPolicyCommand;
const serializeAws_restJson1GetCloudFormationTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{ApplicationId}/templates/{TemplateId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
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
exports.serializeAws_restJson1GetCloudFormationTemplateCommand = serializeAws_restJson1GetCloudFormationTemplateCommand;
const serializeAws_restJson1ListApplicationDependenciesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{ApplicationId}/dependencies";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    const query = {
        ...(input.MaxItems !== undefined && { maxItems: input.MaxItems.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.SemanticVersion !== undefined && { semanticVersion: input.SemanticVersion }),
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
exports.serializeAws_restJson1ListApplicationDependenciesCommand = serializeAws_restJson1ListApplicationDependenciesCommand;
const serializeAws_restJson1ListApplicationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications";
    const query = {
        ...(input.MaxItems !== undefined && { maxItems: input.MaxItems.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListApplicationsCommand = serializeAws_restJson1ListApplicationsCommand;
const serializeAws_restJson1ListApplicationVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{ApplicationId}/versions";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    const query = {
        ...(input.MaxItems !== undefined && { maxItems: input.MaxItems.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListApplicationVersionsCommand = serializeAws_restJson1ListApplicationVersionsCommand;
const serializeAws_restJson1PutApplicationPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/applications/{ApplicationId}/policy";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Statements !== undefined &&
            input.Statements !== null && {
            statements: serializeAws_restJson1__listOfApplicationPolicyStatement(input.Statements, context),
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
exports.serializeAws_restJson1PutApplicationPolicyCommand = serializeAws_restJson1PutApplicationPolicyCommand;
const serializeAws_restJson1UnshareApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/applications/{ApplicationId}/unshare";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { organizationId: input.OrganizationId }),
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
exports.serializeAws_restJson1UnshareApplicationCommand = serializeAws_restJson1UnshareApplicationCommand;
const serializeAws_restJson1UpdateApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/applications/{ApplicationId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Author !== undefined && input.Author !== null && { author: input.Author }),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.HomePageUrl !== undefined && input.HomePageUrl !== null && { homePageUrl: input.HomePageUrl }),
        ...(input.Labels !== undefined &&
            input.Labels !== null && { labels: serializeAws_restJson1__listOf__string(input.Labels, context) }),
        ...(input.ReadmeBody !== undefined && input.ReadmeBody !== null && { readmeBody: input.ReadmeBody }),
        ...(input.ReadmeUrl !== undefined && input.ReadmeUrl !== null && { readmeUrl: input.ReadmeUrl }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateApplicationCommand = serializeAws_restJson1UpdateApplicationCommand;
const deserializeAws_restJson1CreateApplicationCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationId: undefined,
        Author: undefined,
        CreationTime: undefined,
        Description: undefined,
        HomePageUrl: undefined,
        IsVerifiedAuthor: undefined,
        Labels: undefined,
        LicenseUrl: undefined,
        Name: undefined,
        ReadmeUrl: undefined,
        SpdxLicenseId: undefined,
        VerifiedAuthorUrl: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applicationId !== undefined && data.applicationId !== null) {
        contents.ApplicationId = data.applicationId;
    }
    if (data.author !== undefined && data.author !== null) {
        contents.Author = data.author;
    }
    if (data.creationTime !== undefined && data.creationTime !== null) {
        contents.CreationTime = data.creationTime;
    }
    if (data.description !== undefined && data.description !== null) {
        contents.Description = data.description;
    }
    if (data.homePageUrl !== undefined && data.homePageUrl !== null) {
        contents.HomePageUrl = data.homePageUrl;
    }
    if (data.isVerifiedAuthor !== undefined && data.isVerifiedAuthor !== null) {
        contents.IsVerifiedAuthor = data.isVerifiedAuthor;
    }
    if (data.labels !== undefined && data.labels !== null) {
        contents.Labels = deserializeAws_restJson1__listOf__string(data.labels, context);
    }
    if (data.licenseUrl !== undefined && data.licenseUrl !== null) {
        contents.LicenseUrl = data.licenseUrl;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.readmeUrl !== undefined && data.readmeUrl !== null) {
        contents.ReadmeUrl = data.readmeUrl;
    }
    if (data.spdxLicenseId !== undefined && data.spdxLicenseId !== null) {
        contents.SpdxLicenseId = data.spdxLicenseId;
    }
    if (data.verifiedAuthorUrl !== undefined && data.verifiedAuthorUrl !== null) {
        contents.VerifiedAuthorUrl = data.verifiedAuthorUrl;
    }
    if (data.version !== undefined && data.version !== null) {
        contents.Version = deserializeAws_restJson1Version(data.version, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateApplicationCommand = deserializeAws_restJson1CreateApplicationCommand;
const deserializeAws_restJson1CreateApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.serverlessapplicationrepository#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
const deserializeAws_restJson1CreateApplicationVersionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateApplicationVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationId: undefined,
        CreationTime: undefined,
        ParameterDefinitions: undefined,
        RequiredCapabilities: undefined,
        ResourcesSupported: undefined,
        SemanticVersion: undefined,
        SourceCodeArchiveUrl: undefined,
        SourceCodeUrl: undefined,
        TemplateUrl: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applicationId !== undefined && data.applicationId !== null) {
        contents.ApplicationId = data.applicationId;
    }
    if (data.creationTime !== undefined && data.creationTime !== null) {
        contents.CreationTime = data.creationTime;
    }
    if (data.parameterDefinitions !== undefined && data.parameterDefinitions !== null) {
        contents.ParameterDefinitions = deserializeAws_restJson1__listOfParameterDefinition(data.parameterDefinitions, context);
    }
    if (data.requiredCapabilities !== undefined && data.requiredCapabilities !== null) {
        contents.RequiredCapabilities = deserializeAws_restJson1__listOfCapability(data.requiredCapabilities, context);
    }
    if (data.resourcesSupported !== undefined && data.resourcesSupported !== null) {
        contents.ResourcesSupported = data.resourcesSupported;
    }
    if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
        contents.SemanticVersion = data.semanticVersion;
    }
    if (data.sourceCodeArchiveUrl !== undefined && data.sourceCodeArchiveUrl !== null) {
        contents.SourceCodeArchiveUrl = data.sourceCodeArchiveUrl;
    }
    if (data.sourceCodeUrl !== undefined && data.sourceCodeUrl !== null) {
        contents.SourceCodeUrl = data.sourceCodeUrl;
    }
    if (data.templateUrl !== undefined && data.templateUrl !== null) {
        contents.TemplateUrl = data.templateUrl;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateApplicationVersionCommand = deserializeAws_restJson1CreateApplicationVersionCommand;
const deserializeAws_restJson1CreateApplicationVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.serverlessapplicationrepository#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
const deserializeAws_restJson1CreateCloudFormationChangeSetCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateCloudFormationChangeSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationId: undefined,
        ChangeSetId: undefined,
        SemanticVersion: undefined,
        StackId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applicationId !== undefined && data.applicationId !== null) {
        contents.ApplicationId = data.applicationId;
    }
    if (data.changeSetId !== undefined && data.changeSetId !== null) {
        contents.ChangeSetId = data.changeSetId;
    }
    if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
        contents.SemanticVersion = data.semanticVersion;
    }
    if (data.stackId !== undefined && data.stackId !== null) {
        contents.StackId = data.stackId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateCloudFormationChangeSetCommand = deserializeAws_restJson1CreateCloudFormationChangeSetCommand;
const deserializeAws_restJson1CreateCloudFormationChangeSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
const deserializeAws_restJson1CreateCloudFormationTemplateCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateCloudFormationTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationId: undefined,
        CreationTime: undefined,
        ExpirationTime: undefined,
        SemanticVersion: undefined,
        Status: undefined,
        TemplateId: undefined,
        TemplateUrl: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applicationId !== undefined && data.applicationId !== null) {
        contents.ApplicationId = data.applicationId;
    }
    if (data.creationTime !== undefined && data.creationTime !== null) {
        contents.CreationTime = data.creationTime;
    }
    if (data.expirationTime !== undefined && data.expirationTime !== null) {
        contents.ExpirationTime = data.expirationTime;
    }
    if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
        contents.SemanticVersion = data.semanticVersion;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.Status = data.status;
    }
    if (data.templateId !== undefined && data.templateId !== null) {
        contents.TemplateId = data.templateId;
    }
    if (data.templateUrl !== undefined && data.templateUrl !== null) {
        contents.TemplateUrl = data.templateUrl;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateCloudFormationTemplateCommand = deserializeAws_restJson1CreateCloudFormationTemplateCommand;
const deserializeAws_restJson1CreateCloudFormationTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteApplicationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteApplicationCommand = deserializeAws_restJson1DeleteApplicationCommand;
const deserializeAws_restJson1DeleteApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.serverlessapplicationrepository#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
const deserializeAws_restJson1GetApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationId: undefined,
        Author: undefined,
        CreationTime: undefined,
        Description: undefined,
        HomePageUrl: undefined,
        IsVerifiedAuthor: undefined,
        Labels: undefined,
        LicenseUrl: undefined,
        Name: undefined,
        ReadmeUrl: undefined,
        SpdxLicenseId: undefined,
        VerifiedAuthorUrl: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applicationId !== undefined && data.applicationId !== null) {
        contents.ApplicationId = data.applicationId;
    }
    if (data.author !== undefined && data.author !== null) {
        contents.Author = data.author;
    }
    if (data.creationTime !== undefined && data.creationTime !== null) {
        contents.CreationTime = data.creationTime;
    }
    if (data.description !== undefined && data.description !== null) {
        contents.Description = data.description;
    }
    if (data.homePageUrl !== undefined && data.homePageUrl !== null) {
        contents.HomePageUrl = data.homePageUrl;
    }
    if (data.isVerifiedAuthor !== undefined && data.isVerifiedAuthor !== null) {
        contents.IsVerifiedAuthor = data.isVerifiedAuthor;
    }
    if (data.labels !== undefined && data.labels !== null) {
        contents.Labels = deserializeAws_restJson1__listOf__string(data.labels, context);
    }
    if (data.licenseUrl !== undefined && data.licenseUrl !== null) {
        contents.LicenseUrl = data.licenseUrl;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.readmeUrl !== undefined && data.readmeUrl !== null) {
        contents.ReadmeUrl = data.readmeUrl;
    }
    if (data.spdxLicenseId !== undefined && data.spdxLicenseId !== null) {
        contents.SpdxLicenseId = data.spdxLicenseId;
    }
    if (data.verifiedAuthorUrl !== undefined && data.verifiedAuthorUrl !== null) {
        contents.VerifiedAuthorUrl = data.verifiedAuthorUrl;
    }
    if (data.version !== undefined && data.version !== null) {
        contents.Version = deserializeAws_restJson1Version(data.version, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApplicationCommand = deserializeAws_restJson1GetApplicationCommand;
const deserializeAws_restJson1GetApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
const deserializeAws_restJson1GetApplicationPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetApplicationPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Statements: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.statements !== undefined && data.statements !== null) {
        contents.Statements = deserializeAws_restJson1__listOfApplicationPolicyStatement(data.statements, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApplicationPolicyCommand = deserializeAws_restJson1GetApplicationPolicyCommand;
const deserializeAws_restJson1GetApplicationPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
const deserializeAws_restJson1GetCloudFormationTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCloudFormationTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationId: undefined,
        CreationTime: undefined,
        ExpirationTime: undefined,
        SemanticVersion: undefined,
        Status: undefined,
        TemplateId: undefined,
        TemplateUrl: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applicationId !== undefined && data.applicationId !== null) {
        contents.ApplicationId = data.applicationId;
    }
    if (data.creationTime !== undefined && data.creationTime !== null) {
        contents.CreationTime = data.creationTime;
    }
    if (data.expirationTime !== undefined && data.expirationTime !== null) {
        contents.ExpirationTime = data.expirationTime;
    }
    if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
        contents.SemanticVersion = data.semanticVersion;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.Status = data.status;
    }
    if (data.templateId !== undefined && data.templateId !== null) {
        contents.TemplateId = data.templateId;
    }
    if (data.templateUrl !== undefined && data.templateUrl !== null) {
        contents.TemplateUrl = data.templateUrl;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCloudFormationTemplateCommand = deserializeAws_restJson1GetCloudFormationTemplateCommand;
const deserializeAws_restJson1GetCloudFormationTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
const deserializeAws_restJson1ListApplicationDependenciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListApplicationDependenciesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Dependencies: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.dependencies !== undefined && data.dependencies !== null) {
        contents.Dependencies = deserializeAws_restJson1__listOfApplicationDependencySummary(data.dependencies, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListApplicationDependenciesCommand = deserializeAws_restJson1ListApplicationDependenciesCommand;
const deserializeAws_restJson1ListApplicationDependenciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
const deserializeAws_restJson1ListApplicationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListApplicationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Applications: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applications !== undefined && data.applications !== null) {
        contents.Applications = deserializeAws_restJson1__listOfApplicationSummary(data.applications, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListApplicationsCommand = deserializeAws_restJson1ListApplicationsCommand;
const deserializeAws_restJson1ListApplicationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListApplicationVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListApplicationVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Versions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    if (data.versions !== undefined && data.versions !== null) {
        contents.Versions = deserializeAws_restJson1__listOfVersionSummary(data.versions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListApplicationVersionsCommand = deserializeAws_restJson1ListApplicationVersionsCommand;
const deserializeAws_restJson1ListApplicationVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
const deserializeAws_restJson1PutApplicationPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutApplicationPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Statements: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.statements !== undefined && data.statements !== null) {
        contents.Statements = deserializeAws_restJson1__listOfApplicationPolicyStatement(data.statements, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutApplicationPolicyCommand = deserializeAws_restJson1PutApplicationPolicyCommand;
const deserializeAws_restJson1PutApplicationPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
const deserializeAws_restJson1UnshareApplicationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UnshareApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UnshareApplicationCommand = deserializeAws_restJson1UnshareApplicationCommand;
const deserializeAws_restJson1UnshareApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationId: undefined,
        Author: undefined,
        CreationTime: undefined,
        Description: undefined,
        HomePageUrl: undefined,
        IsVerifiedAuthor: undefined,
        Labels: undefined,
        LicenseUrl: undefined,
        Name: undefined,
        ReadmeUrl: undefined,
        SpdxLicenseId: undefined,
        VerifiedAuthorUrl: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applicationId !== undefined && data.applicationId !== null) {
        contents.ApplicationId = data.applicationId;
    }
    if (data.author !== undefined && data.author !== null) {
        contents.Author = data.author;
    }
    if (data.creationTime !== undefined && data.creationTime !== null) {
        contents.CreationTime = data.creationTime;
    }
    if (data.description !== undefined && data.description !== null) {
        contents.Description = data.description;
    }
    if (data.homePageUrl !== undefined && data.homePageUrl !== null) {
        contents.HomePageUrl = data.homePageUrl;
    }
    if (data.isVerifiedAuthor !== undefined && data.isVerifiedAuthor !== null) {
        contents.IsVerifiedAuthor = data.isVerifiedAuthor;
    }
    if (data.labels !== undefined && data.labels !== null) {
        contents.Labels = deserializeAws_restJson1__listOf__string(data.labels, context);
    }
    if (data.licenseUrl !== undefined && data.licenseUrl !== null) {
        contents.LicenseUrl = data.licenseUrl;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.readmeUrl !== undefined && data.readmeUrl !== null) {
        contents.ReadmeUrl = data.readmeUrl;
    }
    if (data.spdxLicenseId !== undefined && data.spdxLicenseId !== null) {
        contents.SpdxLicenseId = data.spdxLicenseId;
    }
    if (data.verifiedAuthorUrl !== undefined && data.verifiedAuthorUrl !== null) {
        contents.VerifiedAuthorUrl = data.verifiedAuthorUrl;
    }
    if (data.version !== undefined && data.version !== null) {
        contents.Version = deserializeAws_restJson1Version(data.version, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateApplicationCommand = deserializeAws_restJson1UpdateApplicationCommand;
const deserializeAws_restJson1UpdateApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.serverlessapplicationrepository#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
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
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.errorCode !== undefined && data.errorCode !== null) {
        contents.ErrorCode = data.errorCode;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.errorCode !== undefined && data.errorCode !== null) {
        contents.ErrorCode = data.errorCode;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.errorCode !== undefined && data.errorCode !== null) {
        contents.ErrorCode = data.errorCode;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.errorCode !== undefined && data.errorCode !== null) {
        contents.ErrorCode = data.errorCode;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.errorCode !== undefined && data.errorCode !== null) {
        contents.ErrorCode = data.errorCode;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.errorCode !== undefined && data.errorCode !== null) {
        contents.ErrorCode = data.errorCode;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const serializeAws_restJson1__listOf__string = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1__listOfApplicationPolicyStatement = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ApplicationPolicyStatement(entry, context);
    });
};
const serializeAws_restJson1__listOfParameterValue = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ParameterValue(entry, context);
    });
};
const serializeAws_restJson1__listOfRollbackTrigger = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RollbackTrigger(entry, context);
    });
};
const serializeAws_restJson1__listOfTag = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1ApplicationPolicyStatement = (input, context) => {
    return {
        ...(input.Actions !== undefined &&
            input.Actions !== null && { actions: serializeAws_restJson1__listOf__string(input.Actions, context) }),
        ...(input.PrincipalOrgIDs !== undefined &&
            input.PrincipalOrgIDs !== null && {
            principalOrgIDs: serializeAws_restJson1__listOf__string(input.PrincipalOrgIDs, context),
        }),
        ...(input.Principals !== undefined &&
            input.Principals !== null && { principals: serializeAws_restJson1__listOf__string(input.Principals, context) }),
        ...(input.StatementId !== undefined && input.StatementId !== null && { statementId: input.StatementId }),
    };
};
const serializeAws_restJson1ParameterValue = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { value: input.Value }),
    };
};
const serializeAws_restJson1RollbackConfiguration = (input, context) => {
    return {
        ...(input.MonitoringTimeInMinutes !== undefined &&
            input.MonitoringTimeInMinutes !== null && { monitoringTimeInMinutes: input.MonitoringTimeInMinutes }),
        ...(input.RollbackTriggers !== undefined &&
            input.RollbackTriggers !== null && {
            rollbackTriggers: serializeAws_restJson1__listOfRollbackTrigger(input.RollbackTriggers, context),
        }),
    };
};
const serializeAws_restJson1RollbackTrigger = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { arn: input.Arn }),
        ...(input.Type !== undefined && input.Type !== null && { type: input.Type }),
    };
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { value: input.Value }),
    };
};
const deserializeAws_restJson1__listOf__string = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1__listOfApplicationDependencySummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ApplicationDependencySummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfApplicationPolicyStatement = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ApplicationPolicyStatement(entry, context);
    });
};
const deserializeAws_restJson1__listOfApplicationSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ApplicationSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfCapability = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1__listOfParameterDefinition = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ParameterDefinition(entry, context);
    });
};
const deserializeAws_restJson1__listOfVersionSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1VersionSummary(entry, context);
    });
};
const deserializeAws_restJson1ApplicationDependencySummary = (output, context) => {
    return {
        ApplicationId: output.applicationId !== undefined && output.applicationId !== null ? output.applicationId : undefined,
        SemanticVersion: output.semanticVersion !== undefined && output.semanticVersion !== null ? output.semanticVersion : undefined,
    };
};
const deserializeAws_restJson1ApplicationPolicyStatement = (output, context) => {
    return {
        Actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_restJson1__listOf__string(output.actions, context)
            : undefined,
        PrincipalOrgIDs: output.principalOrgIDs !== undefined && output.principalOrgIDs !== null
            ? deserializeAws_restJson1__listOf__string(output.principalOrgIDs, context)
            : undefined,
        Principals: output.principals !== undefined && output.principals !== null
            ? deserializeAws_restJson1__listOf__string(output.principals, context)
            : undefined,
        StatementId: output.statementId !== undefined && output.statementId !== null ? output.statementId : undefined,
    };
};
const deserializeAws_restJson1ApplicationSummary = (output, context) => {
    return {
        ApplicationId: output.applicationId !== undefined && output.applicationId !== null ? output.applicationId : undefined,
        Author: output.author !== undefined && output.author !== null ? output.author : undefined,
        CreationTime: output.creationTime !== undefined && output.creationTime !== null ? output.creationTime : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        HomePageUrl: output.homePageUrl !== undefined && output.homePageUrl !== null ? output.homePageUrl : undefined,
        Labels: output.labels !== undefined && output.labels !== null
            ? deserializeAws_restJson1__listOf__string(output.labels, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        SpdxLicenseId: output.spdxLicenseId !== undefined && output.spdxLicenseId !== null ? output.spdxLicenseId : undefined,
    };
};
const deserializeAws_restJson1ParameterDefinition = (output, context) => {
    return {
        AllowedPattern: output.allowedPattern !== undefined && output.allowedPattern !== null ? output.allowedPattern : undefined,
        AllowedValues: output.allowedValues !== undefined && output.allowedValues !== null
            ? deserializeAws_restJson1__listOf__string(output.allowedValues, context)
            : undefined,
        ConstraintDescription: output.constraintDescription !== undefined && output.constraintDescription !== null
            ? output.constraintDescription
            : undefined,
        DefaultValue: output.defaultValue !== undefined && output.defaultValue !== null ? output.defaultValue : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        MaxLength: output.maxLength !== undefined && output.maxLength !== null ? output.maxLength : undefined,
        MaxValue: output.maxValue !== undefined && output.maxValue !== null ? output.maxValue : undefined,
        MinLength: output.minLength !== undefined && output.minLength !== null ? output.minLength : undefined,
        MinValue: output.minValue !== undefined && output.minValue !== null ? output.minValue : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        NoEcho: output.noEcho !== undefined && output.noEcho !== null ? output.noEcho : undefined,
        ReferencedByResources: output.referencedByResources !== undefined && output.referencedByResources !== null
            ? deserializeAws_restJson1__listOf__string(output.referencedByResources, context)
            : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1Version = (output, context) => {
    return {
        ApplicationId: output.applicationId !== undefined && output.applicationId !== null ? output.applicationId : undefined,
        CreationTime: output.creationTime !== undefined && output.creationTime !== null ? output.creationTime : undefined,
        ParameterDefinitions: output.parameterDefinitions !== undefined && output.parameterDefinitions !== null
            ? deserializeAws_restJson1__listOfParameterDefinition(output.parameterDefinitions, context)
            : undefined,
        RequiredCapabilities: output.requiredCapabilities !== undefined && output.requiredCapabilities !== null
            ? deserializeAws_restJson1__listOfCapability(output.requiredCapabilities, context)
            : undefined,
        ResourcesSupported: output.resourcesSupported !== undefined && output.resourcesSupported !== null
            ? output.resourcesSupported
            : undefined,
        SemanticVersion: output.semanticVersion !== undefined && output.semanticVersion !== null ? output.semanticVersion : undefined,
        SourceCodeArchiveUrl: output.sourceCodeArchiveUrl !== undefined && output.sourceCodeArchiveUrl !== null
            ? output.sourceCodeArchiveUrl
            : undefined,
        SourceCodeUrl: output.sourceCodeUrl !== undefined && output.sourceCodeUrl !== null ? output.sourceCodeUrl : undefined,
        TemplateUrl: output.templateUrl !== undefined && output.templateUrl !== null ? output.templateUrl : undefined,
    };
};
const deserializeAws_restJson1VersionSummary = (output, context) => {
    return {
        ApplicationId: output.applicationId !== undefined && output.applicationId !== null ? output.applicationId : undefined,
        CreationTime: output.creationTime !== undefined && output.creationTime !== null ? output.creationTime : undefined,
        SemanticVersion: output.semanticVersion !== undefined && output.semanticVersion !== null ? output.semanticVersion : undefined,
        SourceCodeUrl: output.sourceCodeUrl !== undefined && output.sourceCodeUrl !== null ? output.sourceCodeUrl : undefined,
    };
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