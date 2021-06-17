"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1RestartSimulationJobCommand = exports.serializeAws_restJson1RegisterRobotCommand = exports.serializeAws_restJson1ListWorldTemplatesCommand = exports.serializeAws_restJson1ListWorldsCommand = exports.serializeAws_restJson1ListWorldGenerationJobsCommand = exports.serializeAws_restJson1ListWorldExportJobsCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListSimulationJobsCommand = exports.serializeAws_restJson1ListSimulationJobBatchesCommand = exports.serializeAws_restJson1ListSimulationApplicationsCommand = exports.serializeAws_restJson1ListRobotsCommand = exports.serializeAws_restJson1ListRobotApplicationsCommand = exports.serializeAws_restJson1ListFleetsCommand = exports.serializeAws_restJson1ListDeploymentJobsCommand = exports.serializeAws_restJson1GetWorldTemplateBodyCommand = exports.serializeAws_restJson1DescribeWorldTemplateCommand = exports.serializeAws_restJson1DescribeWorldGenerationJobCommand = exports.serializeAws_restJson1DescribeWorldExportJobCommand = exports.serializeAws_restJson1DescribeWorldCommand = exports.serializeAws_restJson1DescribeSimulationJobBatchCommand = exports.serializeAws_restJson1DescribeSimulationJobCommand = exports.serializeAws_restJson1DescribeSimulationApplicationCommand = exports.serializeAws_restJson1DescribeRobotApplicationCommand = exports.serializeAws_restJson1DescribeRobotCommand = exports.serializeAws_restJson1DescribeFleetCommand = exports.serializeAws_restJson1DescribeDeploymentJobCommand = exports.serializeAws_restJson1DeregisterRobotCommand = exports.serializeAws_restJson1DeleteWorldTemplateCommand = exports.serializeAws_restJson1DeleteSimulationApplicationCommand = exports.serializeAws_restJson1DeleteRobotApplicationCommand = exports.serializeAws_restJson1DeleteRobotCommand = exports.serializeAws_restJson1DeleteFleetCommand = exports.serializeAws_restJson1CreateWorldTemplateCommand = exports.serializeAws_restJson1CreateWorldGenerationJobCommand = exports.serializeAws_restJson1CreateWorldExportJobCommand = exports.serializeAws_restJson1CreateSimulationJobCommand = exports.serializeAws_restJson1CreateSimulationApplicationVersionCommand = exports.serializeAws_restJson1CreateSimulationApplicationCommand = exports.serializeAws_restJson1CreateRobotApplicationVersionCommand = exports.serializeAws_restJson1CreateRobotApplicationCommand = exports.serializeAws_restJson1CreateRobotCommand = exports.serializeAws_restJson1CreateFleetCommand = exports.serializeAws_restJson1CreateDeploymentJobCommand = exports.serializeAws_restJson1CancelWorldGenerationJobCommand = exports.serializeAws_restJson1CancelWorldExportJobCommand = exports.serializeAws_restJson1CancelSimulationJobBatchCommand = exports.serializeAws_restJson1CancelSimulationJobCommand = exports.serializeAws_restJson1CancelDeploymentJobCommand = exports.serializeAws_restJson1BatchDescribeSimulationJobCommand = exports.serializeAws_restJson1BatchDeleteWorldsCommand = void 0;
exports.deserializeAws_restJson1ListSimulationJobsCommand = exports.deserializeAws_restJson1ListSimulationJobBatchesCommand = exports.deserializeAws_restJson1ListSimulationApplicationsCommand = exports.deserializeAws_restJson1ListRobotsCommand = exports.deserializeAws_restJson1ListRobotApplicationsCommand = exports.deserializeAws_restJson1ListFleetsCommand = exports.deserializeAws_restJson1ListDeploymentJobsCommand = exports.deserializeAws_restJson1GetWorldTemplateBodyCommand = exports.deserializeAws_restJson1DescribeWorldTemplateCommand = exports.deserializeAws_restJson1DescribeWorldGenerationJobCommand = exports.deserializeAws_restJson1DescribeWorldExportJobCommand = exports.deserializeAws_restJson1DescribeWorldCommand = exports.deserializeAws_restJson1DescribeSimulationJobBatchCommand = exports.deserializeAws_restJson1DescribeSimulationJobCommand = exports.deserializeAws_restJson1DescribeSimulationApplicationCommand = exports.deserializeAws_restJson1DescribeRobotApplicationCommand = exports.deserializeAws_restJson1DescribeRobotCommand = exports.deserializeAws_restJson1DescribeFleetCommand = exports.deserializeAws_restJson1DescribeDeploymentJobCommand = exports.deserializeAws_restJson1DeregisterRobotCommand = exports.deserializeAws_restJson1DeleteWorldTemplateCommand = exports.deserializeAws_restJson1DeleteSimulationApplicationCommand = exports.deserializeAws_restJson1DeleteRobotApplicationCommand = exports.deserializeAws_restJson1DeleteRobotCommand = exports.deserializeAws_restJson1DeleteFleetCommand = exports.deserializeAws_restJson1CreateWorldTemplateCommand = exports.deserializeAws_restJson1CreateWorldGenerationJobCommand = exports.deserializeAws_restJson1CreateWorldExportJobCommand = exports.deserializeAws_restJson1CreateSimulationJobCommand = exports.deserializeAws_restJson1CreateSimulationApplicationVersionCommand = exports.deserializeAws_restJson1CreateSimulationApplicationCommand = exports.deserializeAws_restJson1CreateRobotApplicationVersionCommand = exports.deserializeAws_restJson1CreateRobotApplicationCommand = exports.deserializeAws_restJson1CreateRobotCommand = exports.deserializeAws_restJson1CreateFleetCommand = exports.deserializeAws_restJson1CreateDeploymentJobCommand = exports.deserializeAws_restJson1CancelWorldGenerationJobCommand = exports.deserializeAws_restJson1CancelWorldExportJobCommand = exports.deserializeAws_restJson1CancelSimulationJobBatchCommand = exports.deserializeAws_restJson1CancelSimulationJobCommand = exports.deserializeAws_restJson1CancelDeploymentJobCommand = exports.deserializeAws_restJson1BatchDescribeSimulationJobCommand = exports.deserializeAws_restJson1BatchDeleteWorldsCommand = exports.serializeAws_restJson1UpdateWorldTemplateCommand = exports.serializeAws_restJson1UpdateSimulationApplicationCommand = exports.serializeAws_restJson1UpdateRobotApplicationCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SyncDeploymentJobCommand = exports.serializeAws_restJson1StartSimulationJobBatchCommand = void 0;
exports.deserializeAws_restJson1UpdateWorldTemplateCommand = exports.deserializeAws_restJson1UpdateSimulationApplicationCommand = exports.deserializeAws_restJson1UpdateRobotApplicationCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SyncDeploymentJobCommand = exports.deserializeAws_restJson1StartSimulationJobBatchCommand = exports.deserializeAws_restJson1RestartSimulationJobCommand = exports.deserializeAws_restJson1RegisterRobotCommand = exports.deserializeAws_restJson1ListWorldTemplatesCommand = exports.deserializeAws_restJson1ListWorldsCommand = exports.deserializeAws_restJson1ListWorldGenerationJobsCommand = exports.deserializeAws_restJson1ListWorldExportJobsCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1BatchDeleteWorldsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/batchDeleteWorlds";
    let body;
    body = JSON.stringify({
        ...(input.worlds !== undefined &&
            input.worlds !== null && { worlds: serializeAws_restJson1Arns(input.worlds, context) }),
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
exports.serializeAws_restJson1BatchDeleteWorldsCommand = serializeAws_restJson1BatchDeleteWorldsCommand;
const serializeAws_restJson1BatchDescribeSimulationJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/batchDescribeSimulationJob";
    let body;
    body = JSON.stringify({
        ...(input.jobs !== undefined && input.jobs !== null && { jobs: serializeAws_restJson1Arns(input.jobs, context) }),
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
exports.serializeAws_restJson1BatchDescribeSimulationJobCommand = serializeAws_restJson1BatchDescribeSimulationJobCommand;
const serializeAws_restJson1CancelDeploymentJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/cancelDeploymentJob";
    let body;
    body = JSON.stringify({
        ...(input.job !== undefined && input.job !== null && { job: input.job }),
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
exports.serializeAws_restJson1CancelDeploymentJobCommand = serializeAws_restJson1CancelDeploymentJobCommand;
const serializeAws_restJson1CancelSimulationJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/cancelSimulationJob";
    let body;
    body = JSON.stringify({
        ...(input.job !== undefined && input.job !== null && { job: input.job }),
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
exports.serializeAws_restJson1CancelSimulationJobCommand = serializeAws_restJson1CancelSimulationJobCommand;
const serializeAws_restJson1CancelSimulationJobBatchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/cancelSimulationJobBatch";
    let body;
    body = JSON.stringify({
        ...(input.batch !== undefined && input.batch !== null && { batch: input.batch }),
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
exports.serializeAws_restJson1CancelSimulationJobBatchCommand = serializeAws_restJson1CancelSimulationJobBatchCommand;
const serializeAws_restJson1CancelWorldExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/cancelWorldExportJob";
    let body;
    body = JSON.stringify({
        ...(input.job !== undefined && input.job !== null && { job: input.job }),
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
exports.serializeAws_restJson1CancelWorldExportJobCommand = serializeAws_restJson1CancelWorldExportJobCommand;
const serializeAws_restJson1CancelWorldGenerationJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/cancelWorldGenerationJob";
    let body;
    body = JSON.stringify({
        ...(input.job !== undefined && input.job !== null && { job: input.job }),
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
exports.serializeAws_restJson1CancelWorldGenerationJobCommand = serializeAws_restJson1CancelWorldGenerationJobCommand;
const serializeAws_restJson1CreateDeploymentJobCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createDeploymentJob";
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.deploymentApplicationConfigs !== undefined &&
            input.deploymentApplicationConfigs !== null && {
            deploymentApplicationConfigs: serializeAws_restJson1DeploymentApplicationConfigs(input.deploymentApplicationConfigs, context),
        }),
        ...(input.deploymentConfig !== undefined &&
            input.deploymentConfig !== null && {
            deploymentConfig: serializeAws_restJson1DeploymentConfig(input.deploymentConfig, context),
        }),
        ...(input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateDeploymentJobCommand = serializeAws_restJson1CreateDeploymentJobCommand;
const serializeAws_restJson1CreateFleetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createFleet";
    let body;
    body = JSON.stringify({
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateFleetCommand = serializeAws_restJson1CreateFleetCommand;
const serializeAws_restJson1CreateRobotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createRobot";
    let body;
    body = JSON.stringify({
        ...(input.architecture !== undefined && input.architecture !== null && { architecture: input.architecture }),
        ...(input.greengrassGroupId !== undefined &&
            input.greengrassGroupId !== null && { greengrassGroupId: input.greengrassGroupId }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateRobotCommand = serializeAws_restJson1CreateRobotCommand;
const serializeAws_restJson1CreateRobotApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createRobotApplication";
    let body;
    body = JSON.stringify({
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.robotSoftwareSuite !== undefined &&
            input.robotSoftwareSuite !== null && {
            robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
        }),
        ...(input.sources !== undefined &&
            input.sources !== null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateRobotApplicationCommand = serializeAws_restJson1CreateRobotApplicationCommand;
const serializeAws_restJson1CreateRobotApplicationVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createRobotApplicationVersion";
    let body;
    body = JSON.stringify({
        ...(input.application !== undefined && input.application !== null && { application: input.application }),
        ...(input.currentRevisionId !== undefined &&
            input.currentRevisionId !== null && { currentRevisionId: input.currentRevisionId }),
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
exports.serializeAws_restJson1CreateRobotApplicationVersionCommand = serializeAws_restJson1CreateRobotApplicationVersionCommand;
const serializeAws_restJson1CreateSimulationApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createSimulationApplication";
    let body;
    body = JSON.stringify({
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.renderingEngine !== undefined &&
            input.renderingEngine !== null && {
            renderingEngine: serializeAws_restJson1RenderingEngine(input.renderingEngine, context),
        }),
        ...(input.robotSoftwareSuite !== undefined &&
            input.robotSoftwareSuite !== null && {
            robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
        }),
        ...(input.simulationSoftwareSuite !== undefined &&
            input.simulationSoftwareSuite !== null && {
            simulationSoftwareSuite: serializeAws_restJson1SimulationSoftwareSuite(input.simulationSoftwareSuite, context),
        }),
        ...(input.sources !== undefined &&
            input.sources !== null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateSimulationApplicationCommand = serializeAws_restJson1CreateSimulationApplicationCommand;
const serializeAws_restJson1CreateSimulationApplicationVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createSimulationApplicationVersion";
    let body;
    body = JSON.stringify({
        ...(input.application !== undefined && input.application !== null && { application: input.application }),
        ...(input.currentRevisionId !== undefined &&
            input.currentRevisionId !== null && { currentRevisionId: input.currentRevisionId }),
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
exports.serializeAws_restJson1CreateSimulationApplicationVersionCommand = serializeAws_restJson1CreateSimulationApplicationVersionCommand;
const serializeAws_restJson1CreateSimulationJobCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createSimulationJob";
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.compute !== undefined &&
            input.compute !== null && { compute: serializeAws_restJson1Compute(input.compute, context) }),
        ...(input.dataSources !== undefined &&
            input.dataSources !== null && {
            dataSources: serializeAws_restJson1DataSourceConfigs(input.dataSources, context),
        }),
        ...(input.failureBehavior !== undefined &&
            input.failureBehavior !== null && { failureBehavior: input.failureBehavior }),
        ...(input.iamRole !== undefined && input.iamRole !== null && { iamRole: input.iamRole }),
        ...(input.loggingConfig !== undefined &&
            input.loggingConfig !== null && {
            loggingConfig: serializeAws_restJson1LoggingConfig(input.loggingConfig, context),
        }),
        ...(input.maxJobDurationInSeconds !== undefined &&
            input.maxJobDurationInSeconds !== null && { maxJobDurationInSeconds: input.maxJobDurationInSeconds }),
        ...(input.outputLocation !== undefined &&
            input.outputLocation !== null && {
            outputLocation: serializeAws_restJson1OutputLocation(input.outputLocation, context),
        }),
        ...(input.robotApplications !== undefined &&
            input.robotApplications !== null && {
            robotApplications: serializeAws_restJson1RobotApplicationConfigs(input.robotApplications, context),
        }),
        ...(input.simulationApplications !== undefined &&
            input.simulationApplications !== null && {
            simulationApplications: serializeAws_restJson1SimulationApplicationConfigs(input.simulationApplications, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.vpcConfig !== undefined &&
            input.vpcConfig !== null && { vpcConfig: serializeAws_restJson1VPCConfig(input.vpcConfig, context) }),
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
exports.serializeAws_restJson1CreateSimulationJobCommand = serializeAws_restJson1CreateSimulationJobCommand;
const serializeAws_restJson1CreateWorldExportJobCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createWorldExportJob";
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.iamRole !== undefined && input.iamRole !== null && { iamRole: input.iamRole }),
        ...(input.outputLocation !== undefined &&
            input.outputLocation !== null && {
            outputLocation: serializeAws_restJson1OutputLocation(input.outputLocation, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.worlds !== undefined &&
            input.worlds !== null && { worlds: serializeAws_restJson1Arns(input.worlds, context) }),
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
exports.serializeAws_restJson1CreateWorldExportJobCommand = serializeAws_restJson1CreateWorldExportJobCommand;
const serializeAws_restJson1CreateWorldGenerationJobCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createWorldGenerationJob";
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.template !== undefined && input.template !== null && { template: input.template }),
        ...(input.worldCount !== undefined &&
            input.worldCount !== null && { worldCount: serializeAws_restJson1WorldCount(input.worldCount, context) }),
        ...(input.worldTags !== undefined &&
            input.worldTags !== null && { worldTags: serializeAws_restJson1TagMap(input.worldTags, context) }),
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
exports.serializeAws_restJson1CreateWorldGenerationJobCommand = serializeAws_restJson1CreateWorldGenerationJobCommand;
const serializeAws_restJson1CreateWorldTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createWorldTemplate";
    let body;
    body = JSON.stringify({
        ...(input.clientRequestToken !== undefined &&
            input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.templateBody !== undefined && input.templateBody !== null && { templateBody: input.templateBody }),
        ...(input.templateLocation !== undefined &&
            input.templateLocation !== null && {
            templateLocation: serializeAws_restJson1TemplateLocation(input.templateLocation, context),
        }),
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
exports.serializeAws_restJson1CreateWorldTemplateCommand = serializeAws_restJson1CreateWorldTemplateCommand;
const serializeAws_restJson1DeleteFleetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deleteFleet";
    let body;
    body = JSON.stringify({
        ...(input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet }),
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
exports.serializeAws_restJson1DeleteFleetCommand = serializeAws_restJson1DeleteFleetCommand;
const serializeAws_restJson1DeleteRobotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deleteRobot";
    let body;
    body = JSON.stringify({
        ...(input.robot !== undefined && input.robot !== null && { robot: input.robot }),
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
exports.serializeAws_restJson1DeleteRobotCommand = serializeAws_restJson1DeleteRobotCommand;
const serializeAws_restJson1DeleteRobotApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deleteRobotApplication";
    let body;
    body = JSON.stringify({
        ...(input.application !== undefined && input.application !== null && { application: input.application }),
        ...(input.applicationVersion !== undefined &&
            input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
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
exports.serializeAws_restJson1DeleteRobotApplicationCommand = serializeAws_restJson1DeleteRobotApplicationCommand;
const serializeAws_restJson1DeleteSimulationApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deleteSimulationApplication";
    let body;
    body = JSON.stringify({
        ...(input.application !== undefined && input.application !== null && { application: input.application }),
        ...(input.applicationVersion !== undefined &&
            input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
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
exports.serializeAws_restJson1DeleteSimulationApplicationCommand = serializeAws_restJson1DeleteSimulationApplicationCommand;
const serializeAws_restJson1DeleteWorldTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deleteWorldTemplate";
    let body;
    body = JSON.stringify({
        ...(input.template !== undefined && input.template !== null && { template: input.template }),
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
exports.serializeAws_restJson1DeleteWorldTemplateCommand = serializeAws_restJson1DeleteWorldTemplateCommand;
const serializeAws_restJson1DeregisterRobotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deregisterRobot";
    let body;
    body = JSON.stringify({
        ...(input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet }),
        ...(input.robot !== undefined && input.robot !== null && { robot: input.robot }),
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
exports.serializeAws_restJson1DeregisterRobotCommand = serializeAws_restJson1DeregisterRobotCommand;
const serializeAws_restJson1DescribeDeploymentJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeDeploymentJob";
    let body;
    body = JSON.stringify({
        ...(input.job !== undefined && input.job !== null && { job: input.job }),
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
exports.serializeAws_restJson1DescribeDeploymentJobCommand = serializeAws_restJson1DescribeDeploymentJobCommand;
const serializeAws_restJson1DescribeFleetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeFleet";
    let body;
    body = JSON.stringify({
        ...(input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet }),
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
exports.serializeAws_restJson1DescribeFleetCommand = serializeAws_restJson1DescribeFleetCommand;
const serializeAws_restJson1DescribeRobotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeRobot";
    let body;
    body = JSON.stringify({
        ...(input.robot !== undefined && input.robot !== null && { robot: input.robot }),
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
exports.serializeAws_restJson1DescribeRobotCommand = serializeAws_restJson1DescribeRobotCommand;
const serializeAws_restJson1DescribeRobotApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeRobotApplication";
    let body;
    body = JSON.stringify({
        ...(input.application !== undefined && input.application !== null && { application: input.application }),
        ...(input.applicationVersion !== undefined &&
            input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
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
exports.serializeAws_restJson1DescribeRobotApplicationCommand = serializeAws_restJson1DescribeRobotApplicationCommand;
const serializeAws_restJson1DescribeSimulationApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeSimulationApplication";
    let body;
    body = JSON.stringify({
        ...(input.application !== undefined && input.application !== null && { application: input.application }),
        ...(input.applicationVersion !== undefined &&
            input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
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
exports.serializeAws_restJson1DescribeSimulationApplicationCommand = serializeAws_restJson1DescribeSimulationApplicationCommand;
const serializeAws_restJson1DescribeSimulationJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeSimulationJob";
    let body;
    body = JSON.stringify({
        ...(input.job !== undefined && input.job !== null && { job: input.job }),
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
exports.serializeAws_restJson1DescribeSimulationJobCommand = serializeAws_restJson1DescribeSimulationJobCommand;
const serializeAws_restJson1DescribeSimulationJobBatchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeSimulationJobBatch";
    let body;
    body = JSON.stringify({
        ...(input.batch !== undefined && input.batch !== null && { batch: input.batch }),
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
exports.serializeAws_restJson1DescribeSimulationJobBatchCommand = serializeAws_restJson1DescribeSimulationJobBatchCommand;
const serializeAws_restJson1DescribeWorldCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeWorld";
    let body;
    body = JSON.stringify({
        ...(input.world !== undefined && input.world !== null && { world: input.world }),
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
exports.serializeAws_restJson1DescribeWorldCommand = serializeAws_restJson1DescribeWorldCommand;
const serializeAws_restJson1DescribeWorldExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeWorldExportJob";
    let body;
    body = JSON.stringify({
        ...(input.job !== undefined && input.job !== null && { job: input.job }),
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
exports.serializeAws_restJson1DescribeWorldExportJobCommand = serializeAws_restJson1DescribeWorldExportJobCommand;
const serializeAws_restJson1DescribeWorldGenerationJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeWorldGenerationJob";
    let body;
    body = JSON.stringify({
        ...(input.job !== undefined && input.job !== null && { job: input.job }),
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
exports.serializeAws_restJson1DescribeWorldGenerationJobCommand = serializeAws_restJson1DescribeWorldGenerationJobCommand;
const serializeAws_restJson1DescribeWorldTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeWorldTemplate";
    let body;
    body = JSON.stringify({
        ...(input.template !== undefined && input.template !== null && { template: input.template }),
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
exports.serializeAws_restJson1DescribeWorldTemplateCommand = serializeAws_restJson1DescribeWorldTemplateCommand;
const serializeAws_restJson1GetWorldTemplateBodyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getWorldTemplateBody";
    let body;
    body = JSON.stringify({
        ...(input.generationJob !== undefined && input.generationJob !== null && { generationJob: input.generationJob }),
        ...(input.template !== undefined && input.template !== null && { template: input.template }),
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
exports.serializeAws_restJson1GetWorldTemplateBodyCommand = serializeAws_restJson1GetWorldTemplateBodyCommand;
const serializeAws_restJson1ListDeploymentJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listDeploymentJobs";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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
exports.serializeAws_restJson1ListDeploymentJobsCommand = serializeAws_restJson1ListDeploymentJobsCommand;
const serializeAws_restJson1ListFleetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listFleets";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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
exports.serializeAws_restJson1ListFleetsCommand = serializeAws_restJson1ListFleetsCommand;
const serializeAws_restJson1ListRobotApplicationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listRobotApplications";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.versionQualifier !== undefined &&
            input.versionQualifier !== null && { versionQualifier: input.versionQualifier }),
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
exports.serializeAws_restJson1ListRobotApplicationsCommand = serializeAws_restJson1ListRobotApplicationsCommand;
const serializeAws_restJson1ListRobotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listRobots";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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
exports.serializeAws_restJson1ListRobotsCommand = serializeAws_restJson1ListRobotsCommand;
const serializeAws_restJson1ListSimulationApplicationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listSimulationApplications";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.versionQualifier !== undefined &&
            input.versionQualifier !== null && { versionQualifier: input.versionQualifier }),
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
exports.serializeAws_restJson1ListSimulationApplicationsCommand = serializeAws_restJson1ListSimulationApplicationsCommand;
const serializeAws_restJson1ListSimulationJobBatchesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listSimulationJobBatches";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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
exports.serializeAws_restJson1ListSimulationJobBatchesCommand = serializeAws_restJson1ListSimulationJobBatchesCommand;
const serializeAws_restJson1ListSimulationJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listSimulationJobs";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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
exports.serializeAws_restJson1ListSimulationJobsCommand = serializeAws_restJson1ListSimulationJobsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
const serializeAws_restJson1ListWorldExportJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listWorldExportJobs";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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
exports.serializeAws_restJson1ListWorldExportJobsCommand = serializeAws_restJson1ListWorldExportJobsCommand;
const serializeAws_restJson1ListWorldGenerationJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listWorldGenerationJobs";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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
exports.serializeAws_restJson1ListWorldGenerationJobsCommand = serializeAws_restJson1ListWorldGenerationJobsCommand;
const serializeAws_restJson1ListWorldsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listWorlds";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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
exports.serializeAws_restJson1ListWorldsCommand = serializeAws_restJson1ListWorldsCommand;
const serializeAws_restJson1ListWorldTemplatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listWorldTemplates";
    let body;
    body = JSON.stringify({
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
exports.serializeAws_restJson1ListWorldTemplatesCommand = serializeAws_restJson1ListWorldTemplatesCommand;
const serializeAws_restJson1RegisterRobotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/registerRobot";
    let body;
    body = JSON.stringify({
        ...(input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet }),
        ...(input.robot !== undefined && input.robot !== null && { robot: input.robot }),
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
exports.serializeAws_restJson1RegisterRobotCommand = serializeAws_restJson1RegisterRobotCommand;
const serializeAws_restJson1RestartSimulationJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/restartSimulationJob";
    let body;
    body = JSON.stringify({
        ...(input.job !== undefined && input.job !== null && { job: input.job }),
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
exports.serializeAws_restJson1RestartSimulationJobCommand = serializeAws_restJson1RestartSimulationJobCommand;
const serializeAws_restJson1StartSimulationJobBatchCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/startSimulationJobBatch";
    let body;
    body = JSON.stringify({
        ...(input.batchPolicy !== undefined &&
            input.batchPolicy !== null && { batchPolicy: serializeAws_restJson1BatchPolicy(input.batchPolicy, context) }),
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.createSimulationJobRequests !== undefined &&
            input.createSimulationJobRequests !== null && {
            createSimulationJobRequests: serializeAws_restJson1CreateSimulationJobRequests(input.createSimulationJobRequests, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1StartSimulationJobBatchCommand = serializeAws_restJson1StartSimulationJobBatchCommand;
const serializeAws_restJson1SyncDeploymentJobCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/syncDeploymentJob";
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet }),
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
exports.serializeAws_restJson1SyncDeploymentJobCommand = serializeAws_restJson1SyncDeploymentJobCommand;
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
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
    }
    else {
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
const serializeAws_restJson1UpdateRobotApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateRobotApplication";
    let body;
    body = JSON.stringify({
        ...(input.application !== undefined && input.application !== null && { application: input.application }),
        ...(input.currentRevisionId !== undefined &&
            input.currentRevisionId !== null && { currentRevisionId: input.currentRevisionId }),
        ...(input.robotSoftwareSuite !== undefined &&
            input.robotSoftwareSuite !== null && {
            robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
        }),
        ...(input.sources !== undefined &&
            input.sources !== null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) }),
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
exports.serializeAws_restJson1UpdateRobotApplicationCommand = serializeAws_restJson1UpdateRobotApplicationCommand;
const serializeAws_restJson1UpdateSimulationApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateSimulationApplication";
    let body;
    body = JSON.stringify({
        ...(input.application !== undefined && input.application !== null && { application: input.application }),
        ...(input.currentRevisionId !== undefined &&
            input.currentRevisionId !== null && { currentRevisionId: input.currentRevisionId }),
        ...(input.renderingEngine !== undefined &&
            input.renderingEngine !== null && {
            renderingEngine: serializeAws_restJson1RenderingEngine(input.renderingEngine, context),
        }),
        ...(input.robotSoftwareSuite !== undefined &&
            input.robotSoftwareSuite !== null && {
            robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
        }),
        ...(input.simulationSoftwareSuite !== undefined &&
            input.simulationSoftwareSuite !== null && {
            simulationSoftwareSuite: serializeAws_restJson1SimulationSoftwareSuite(input.simulationSoftwareSuite, context),
        }),
        ...(input.sources !== undefined &&
            input.sources !== null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) }),
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
exports.serializeAws_restJson1UpdateSimulationApplicationCommand = serializeAws_restJson1UpdateSimulationApplicationCommand;
const serializeAws_restJson1UpdateWorldTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateWorldTemplate";
    let body;
    body = JSON.stringify({
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.template !== undefined && input.template !== null && { template: input.template }),
        ...(input.templateBody !== undefined && input.templateBody !== null && { templateBody: input.templateBody }),
        ...(input.templateLocation !== undefined &&
            input.templateLocation !== null && {
            templateLocation: serializeAws_restJson1TemplateLocation(input.templateLocation, context),
        }),
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
exports.serializeAws_restJson1UpdateWorldTemplateCommand = serializeAws_restJson1UpdateWorldTemplateCommand;
const deserializeAws_restJson1BatchDeleteWorldsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchDeleteWorldsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        unprocessedWorlds: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedWorlds !== undefined && data.unprocessedWorlds !== null) {
        contents.unprocessedWorlds = deserializeAws_restJson1Arns(data.unprocessedWorlds, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchDeleteWorldsCommand = deserializeAws_restJson1BatchDeleteWorldsCommand;
const deserializeAws_restJson1BatchDeleteWorldsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BatchDescribeSimulationJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchDescribeSimulationJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        jobs: undefined,
        unprocessedJobs: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.jobs !== undefined && data.jobs !== null) {
        contents.jobs = deserializeAws_restJson1SimulationJobs(data.jobs, context);
    }
    if (data.unprocessedJobs !== undefined && data.unprocessedJobs !== null) {
        contents.unprocessedJobs = deserializeAws_restJson1Arns(data.unprocessedJobs, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchDescribeSimulationJobCommand = deserializeAws_restJson1BatchDescribeSimulationJobCommand;
const deserializeAws_restJson1BatchDescribeSimulationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CancelDeploymentJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelDeploymentJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelDeploymentJobCommand = deserializeAws_restJson1CancelDeploymentJobCommand;
const deserializeAws_restJson1CancelDeploymentJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CancelSimulationJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelSimulationJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelSimulationJobCommand = deserializeAws_restJson1CancelSimulationJobCommand;
const deserializeAws_restJson1CancelSimulationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CancelSimulationJobBatchCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelSimulationJobBatchCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelSimulationJobBatchCommand = deserializeAws_restJson1CancelSimulationJobBatchCommand;
const deserializeAws_restJson1CancelSimulationJobBatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CancelWorldExportJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelWorldExportJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelWorldExportJobCommand = deserializeAws_restJson1CancelWorldExportJobCommand;
const deserializeAws_restJson1CancelWorldExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CancelWorldGenerationJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelWorldGenerationJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelWorldGenerationJobCommand = deserializeAws_restJson1CancelWorldGenerationJobCommand;
const deserializeAws_restJson1CancelWorldGenerationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateDeploymentJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDeploymentJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        createdAt: undefined,
        deploymentApplicationConfigs: undefined,
        deploymentConfig: undefined,
        failureCode: undefined,
        failureReason: undefined,
        fleet: undefined,
        status: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.deploymentApplicationConfigs !== undefined && data.deploymentApplicationConfigs !== null) {
        contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(data.deploymentApplicationConfigs, context);
    }
    if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
        contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(data.deploymentConfig, context);
    }
    if (data.failureCode !== undefined && data.failureCode !== null) {
        contents.failureCode = data.failureCode;
    }
    if (data.failureReason !== undefined && data.failureReason !== null) {
        contents.failureReason = data.failureReason;
    }
    if (data.fleet !== undefined && data.fleet !== null) {
        contents.fleet = data.fleet;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDeploymentJobCommand = deserializeAws_restJson1CreateDeploymentJobCommand;
const deserializeAws_restJson1CreateDeploymentJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentDeploymentException":
        case "com.amazonaws.robomaker#ConcurrentDeploymentException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentDeploymentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateFleetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateFleetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        createdAt: undefined,
        name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFleetCommand = deserializeAws_restJson1CreateFleetCommand;
const deserializeAws_restJson1CreateFleetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateRobotCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRobotCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        architecture: undefined,
        arn: undefined,
        createdAt: undefined,
        greengrassGroupId: undefined,
        name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.architecture !== undefined && data.architecture !== null) {
        contents.architecture = data.architecture;
    }
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.greengrassGroupId !== undefined && data.greengrassGroupId !== null) {
        contents.greengrassGroupId = data.greengrassGroupId;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRobotCommand = deserializeAws_restJson1CreateRobotCommand;
const deserializeAws_restJson1CreateRobotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateRobotApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRobotApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        lastUpdatedAt: undefined,
        name: undefined,
        revisionId: undefined,
        robotSoftwareSuite: undefined,
        sources: undefined,
        tags: undefined,
        version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
        contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
    }
    if (data.sources !== undefined && data.sources !== null) {
        contents.sources = deserializeAws_restJson1Sources(data.sources, context);
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = data.version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRobotApplicationCommand = deserializeAws_restJson1CreateRobotApplicationCommand;
const deserializeAws_restJson1CreateRobotApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateRobotApplicationVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRobotApplicationVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        lastUpdatedAt: undefined,
        name: undefined,
        revisionId: undefined,
        robotSoftwareSuite: undefined,
        sources: undefined,
        version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
        contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
    }
    if (data.sources !== undefined && data.sources !== null) {
        contents.sources = deserializeAws_restJson1Sources(data.sources, context);
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = data.version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRobotApplicationVersionCommand = deserializeAws_restJson1CreateRobotApplicationVersionCommand;
const deserializeAws_restJson1CreateRobotApplicationVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateSimulationApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSimulationApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        lastUpdatedAt: undefined,
        name: undefined,
        renderingEngine: undefined,
        revisionId: undefined,
        robotSoftwareSuite: undefined,
        simulationSoftwareSuite: undefined,
        sources: undefined,
        tags: undefined,
        version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.renderingEngine !== undefined && data.renderingEngine !== null) {
        contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
        contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
    }
    if (data.simulationSoftwareSuite !== undefined && data.simulationSoftwareSuite !== null) {
        contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(data.simulationSoftwareSuite, context);
    }
    if (data.sources !== undefined && data.sources !== null) {
        contents.sources = deserializeAws_restJson1Sources(data.sources, context);
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = data.version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSimulationApplicationCommand = deserializeAws_restJson1CreateSimulationApplicationCommand;
const deserializeAws_restJson1CreateSimulationApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateSimulationApplicationVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSimulationApplicationVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        lastUpdatedAt: undefined,
        name: undefined,
        renderingEngine: undefined,
        revisionId: undefined,
        robotSoftwareSuite: undefined,
        simulationSoftwareSuite: undefined,
        sources: undefined,
        version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.renderingEngine !== undefined && data.renderingEngine !== null) {
        contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
        contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
    }
    if (data.simulationSoftwareSuite !== undefined && data.simulationSoftwareSuite !== null) {
        contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(data.simulationSoftwareSuite, context);
    }
    if (data.sources !== undefined && data.sources !== null) {
        contents.sources = deserializeAws_restJson1Sources(data.sources, context);
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = data.version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSimulationApplicationVersionCommand = deserializeAws_restJson1CreateSimulationApplicationVersionCommand;
const deserializeAws_restJson1CreateSimulationApplicationVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateSimulationJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSimulationJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        clientRequestToken: undefined,
        compute: undefined,
        dataSources: undefined,
        failureBehavior: undefined,
        failureCode: undefined,
        iamRole: undefined,
        lastStartedAt: undefined,
        lastUpdatedAt: undefined,
        loggingConfig: undefined,
        maxJobDurationInSeconds: undefined,
        outputLocation: undefined,
        robotApplications: undefined,
        simulationApplications: undefined,
        simulationTimeMillis: undefined,
        status: undefined,
        tags: undefined,
        vpcConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
        contents.clientRequestToken = data.clientRequestToken;
    }
    if (data.compute !== undefined && data.compute !== null) {
        contents.compute = deserializeAws_restJson1ComputeResponse(data.compute, context);
    }
    if (data.dataSources !== undefined && data.dataSources !== null) {
        contents.dataSources = deserializeAws_restJson1DataSources(data.dataSources, context);
    }
    if (data.failureBehavior !== undefined && data.failureBehavior !== null) {
        contents.failureBehavior = data.failureBehavior;
    }
    if (data.failureCode !== undefined && data.failureCode !== null) {
        contents.failureCode = data.failureCode;
    }
    if (data.iamRole !== undefined && data.iamRole !== null) {
        contents.iamRole = data.iamRole;
    }
    if (data.lastStartedAt !== undefined && data.lastStartedAt !== null) {
        contents.lastStartedAt = new Date(Math.round(data.lastStartedAt * 1000));
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.loggingConfig !== undefined && data.loggingConfig !== null) {
        contents.loggingConfig = deserializeAws_restJson1LoggingConfig(data.loggingConfig, context);
    }
    if (data.maxJobDurationInSeconds !== undefined && data.maxJobDurationInSeconds !== null) {
        contents.maxJobDurationInSeconds = data.maxJobDurationInSeconds;
    }
    if (data.outputLocation !== undefined && data.outputLocation !== null) {
        contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
    }
    if (data.robotApplications !== undefined && data.robotApplications !== null) {
        contents.robotApplications = deserializeAws_restJson1RobotApplicationConfigs(data.robotApplications, context);
    }
    if (data.simulationApplications !== undefined && data.simulationApplications !== null) {
        contents.simulationApplications = deserializeAws_restJson1SimulationApplicationConfigs(data.simulationApplications, context);
    }
    if (data.simulationTimeMillis !== undefined && data.simulationTimeMillis !== null) {
        contents.simulationTimeMillis = data.simulationTimeMillis;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.vpcConfig !== undefined && data.vpcConfig !== null) {
        contents.vpcConfig = deserializeAws_restJson1VPCConfigResponse(data.vpcConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSimulationJobCommand = deserializeAws_restJson1CreateSimulationJobCommand;
const deserializeAws_restJson1CreateSimulationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.robomaker#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateWorldExportJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateWorldExportJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        clientRequestToken: undefined,
        createdAt: undefined,
        failureCode: undefined,
        iamRole: undefined,
        outputLocation: undefined,
        status: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
        contents.clientRequestToken = data.clientRequestToken;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.failureCode !== undefined && data.failureCode !== null) {
        contents.failureCode = data.failureCode;
    }
    if (data.iamRole !== undefined && data.iamRole !== null) {
        contents.iamRole = data.iamRole;
    }
    if (data.outputLocation !== undefined && data.outputLocation !== null) {
        contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateWorldExportJobCommand = deserializeAws_restJson1CreateWorldExportJobCommand;
const deserializeAws_restJson1CreateWorldExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.robomaker#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateWorldGenerationJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateWorldGenerationJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        clientRequestToken: undefined,
        createdAt: undefined,
        failureCode: undefined,
        status: undefined,
        tags: undefined,
        template: undefined,
        worldCount: undefined,
        worldTags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
        contents.clientRequestToken = data.clientRequestToken;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.failureCode !== undefined && data.failureCode !== null) {
        contents.failureCode = data.failureCode;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.template !== undefined && data.template !== null) {
        contents.template = data.template;
    }
    if (data.worldCount !== undefined && data.worldCount !== null) {
        contents.worldCount = deserializeAws_restJson1WorldCount(data.worldCount, context);
    }
    if (data.worldTags !== undefined && data.worldTags !== null) {
        contents.worldTags = deserializeAws_restJson1TagMap(data.worldTags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateWorldGenerationJobCommand = deserializeAws_restJson1CreateWorldGenerationJobCommand;
const deserializeAws_restJson1CreateWorldGenerationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.robomaker#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateWorldTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateWorldTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        clientRequestToken: undefined,
        createdAt: undefined,
        name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
        contents.clientRequestToken = data.clientRequestToken;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateWorldTemplateCommand = deserializeAws_restJson1CreateWorldTemplateCommand;
const deserializeAws_restJson1CreateWorldTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteFleetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFleetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFleetCommand = deserializeAws_restJson1DeleteFleetCommand;
const deserializeAws_restJson1DeleteFleetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteRobotCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRobotCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRobotCommand = deserializeAws_restJson1DeleteRobotCommand;
const deserializeAws_restJson1DeleteRobotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteRobotApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRobotApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRobotApplicationCommand = deserializeAws_restJson1DeleteRobotApplicationCommand;
const deserializeAws_restJson1DeleteRobotApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteSimulationApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSimulationApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSimulationApplicationCommand = deserializeAws_restJson1DeleteSimulationApplicationCommand;
const deserializeAws_restJson1DeleteSimulationApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteWorldTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteWorldTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteWorldTemplateCommand = deserializeAws_restJson1DeleteWorldTemplateCommand;
const deserializeAws_restJson1DeleteWorldTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeregisterRobotCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeregisterRobotCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        fleet: undefined,
        robot: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.fleet !== undefined && data.fleet !== null) {
        contents.fleet = data.fleet;
    }
    if (data.robot !== undefined && data.robot !== null) {
        contents.robot = data.robot;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeregisterRobotCommand = deserializeAws_restJson1DeregisterRobotCommand;
const deserializeAws_restJson1DeregisterRobotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeDeploymentJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDeploymentJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        createdAt: undefined,
        deploymentApplicationConfigs: undefined,
        deploymentConfig: undefined,
        failureCode: undefined,
        failureReason: undefined,
        fleet: undefined,
        robotDeploymentSummary: undefined,
        status: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.deploymentApplicationConfigs !== undefined && data.deploymentApplicationConfigs !== null) {
        contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(data.deploymentApplicationConfigs, context);
    }
    if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
        contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(data.deploymentConfig, context);
    }
    if (data.failureCode !== undefined && data.failureCode !== null) {
        contents.failureCode = data.failureCode;
    }
    if (data.failureReason !== undefined && data.failureReason !== null) {
        contents.failureReason = data.failureReason;
    }
    if (data.fleet !== undefined && data.fleet !== null) {
        contents.fleet = data.fleet;
    }
    if (data.robotDeploymentSummary !== undefined && data.robotDeploymentSummary !== null) {
        contents.robotDeploymentSummary = deserializeAws_restJson1RobotDeploymentSummary(data.robotDeploymentSummary, context);
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDeploymentJobCommand = deserializeAws_restJson1DescribeDeploymentJobCommand;
const deserializeAws_restJson1DescribeDeploymentJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeFleetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeFleetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        createdAt: undefined,
        lastDeploymentJob: undefined,
        lastDeploymentStatus: undefined,
        lastDeploymentTime: undefined,
        name: undefined,
        robots: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.lastDeploymentJob !== undefined && data.lastDeploymentJob !== null) {
        contents.lastDeploymentJob = data.lastDeploymentJob;
    }
    if (data.lastDeploymentStatus !== undefined && data.lastDeploymentStatus !== null) {
        contents.lastDeploymentStatus = data.lastDeploymentStatus;
    }
    if (data.lastDeploymentTime !== undefined && data.lastDeploymentTime !== null) {
        contents.lastDeploymentTime = new Date(Math.round(data.lastDeploymentTime * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.robots !== undefined && data.robots !== null) {
        contents.robots = deserializeAws_restJson1Robots(data.robots, context);
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeFleetCommand = deserializeAws_restJson1DescribeFleetCommand;
const deserializeAws_restJson1DescribeFleetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeRobotCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeRobotCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        architecture: undefined,
        arn: undefined,
        createdAt: undefined,
        fleetArn: undefined,
        greengrassGroupId: undefined,
        lastDeploymentJob: undefined,
        lastDeploymentTime: undefined,
        name: undefined,
        status: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.architecture !== undefined && data.architecture !== null) {
        contents.architecture = data.architecture;
    }
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.fleetArn !== undefined && data.fleetArn !== null) {
        contents.fleetArn = data.fleetArn;
    }
    if (data.greengrassGroupId !== undefined && data.greengrassGroupId !== null) {
        contents.greengrassGroupId = data.greengrassGroupId;
    }
    if (data.lastDeploymentJob !== undefined && data.lastDeploymentJob !== null) {
        contents.lastDeploymentJob = data.lastDeploymentJob;
    }
    if (data.lastDeploymentTime !== undefined && data.lastDeploymentTime !== null) {
        contents.lastDeploymentTime = new Date(Math.round(data.lastDeploymentTime * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRobotCommand = deserializeAws_restJson1DescribeRobotCommand;
const deserializeAws_restJson1DescribeRobotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeRobotApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeRobotApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        lastUpdatedAt: undefined,
        name: undefined,
        revisionId: undefined,
        robotSoftwareSuite: undefined,
        sources: undefined,
        tags: undefined,
        version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
        contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
    }
    if (data.sources !== undefined && data.sources !== null) {
        contents.sources = deserializeAws_restJson1Sources(data.sources, context);
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = data.version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRobotApplicationCommand = deserializeAws_restJson1DescribeRobotApplicationCommand;
const deserializeAws_restJson1DescribeRobotApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeSimulationApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSimulationApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        lastUpdatedAt: undefined,
        name: undefined,
        renderingEngine: undefined,
        revisionId: undefined,
        robotSoftwareSuite: undefined,
        simulationSoftwareSuite: undefined,
        sources: undefined,
        tags: undefined,
        version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.renderingEngine !== undefined && data.renderingEngine !== null) {
        contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
        contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
    }
    if (data.simulationSoftwareSuite !== undefined && data.simulationSoftwareSuite !== null) {
        contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(data.simulationSoftwareSuite, context);
    }
    if (data.sources !== undefined && data.sources !== null) {
        contents.sources = deserializeAws_restJson1Sources(data.sources, context);
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = data.version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSimulationApplicationCommand = deserializeAws_restJson1DescribeSimulationApplicationCommand;
const deserializeAws_restJson1DescribeSimulationApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeSimulationJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSimulationJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        clientRequestToken: undefined,
        compute: undefined,
        dataSources: undefined,
        failureBehavior: undefined,
        failureCode: undefined,
        failureReason: undefined,
        iamRole: undefined,
        lastStartedAt: undefined,
        lastUpdatedAt: undefined,
        loggingConfig: undefined,
        maxJobDurationInSeconds: undefined,
        name: undefined,
        networkInterface: undefined,
        outputLocation: undefined,
        robotApplications: undefined,
        simulationApplications: undefined,
        simulationTimeMillis: undefined,
        status: undefined,
        tags: undefined,
        vpcConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
        contents.clientRequestToken = data.clientRequestToken;
    }
    if (data.compute !== undefined && data.compute !== null) {
        contents.compute = deserializeAws_restJson1ComputeResponse(data.compute, context);
    }
    if (data.dataSources !== undefined && data.dataSources !== null) {
        contents.dataSources = deserializeAws_restJson1DataSources(data.dataSources, context);
    }
    if (data.failureBehavior !== undefined && data.failureBehavior !== null) {
        contents.failureBehavior = data.failureBehavior;
    }
    if (data.failureCode !== undefined && data.failureCode !== null) {
        contents.failureCode = data.failureCode;
    }
    if (data.failureReason !== undefined && data.failureReason !== null) {
        contents.failureReason = data.failureReason;
    }
    if (data.iamRole !== undefined && data.iamRole !== null) {
        contents.iamRole = data.iamRole;
    }
    if (data.lastStartedAt !== undefined && data.lastStartedAt !== null) {
        contents.lastStartedAt = new Date(Math.round(data.lastStartedAt * 1000));
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.loggingConfig !== undefined && data.loggingConfig !== null) {
        contents.loggingConfig = deserializeAws_restJson1LoggingConfig(data.loggingConfig, context);
    }
    if (data.maxJobDurationInSeconds !== undefined && data.maxJobDurationInSeconds !== null) {
        contents.maxJobDurationInSeconds = data.maxJobDurationInSeconds;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.networkInterface !== undefined && data.networkInterface !== null) {
        contents.networkInterface = deserializeAws_restJson1NetworkInterface(data.networkInterface, context);
    }
    if (data.outputLocation !== undefined && data.outputLocation !== null) {
        contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
    }
    if (data.robotApplications !== undefined && data.robotApplications !== null) {
        contents.robotApplications = deserializeAws_restJson1RobotApplicationConfigs(data.robotApplications, context);
    }
    if (data.simulationApplications !== undefined && data.simulationApplications !== null) {
        contents.simulationApplications = deserializeAws_restJson1SimulationApplicationConfigs(data.simulationApplications, context);
    }
    if (data.simulationTimeMillis !== undefined && data.simulationTimeMillis !== null) {
        contents.simulationTimeMillis = data.simulationTimeMillis;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.vpcConfig !== undefined && data.vpcConfig !== null) {
        contents.vpcConfig = deserializeAws_restJson1VPCConfigResponse(data.vpcConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSimulationJobCommand = deserializeAws_restJson1DescribeSimulationJobCommand;
const deserializeAws_restJson1DescribeSimulationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeSimulationJobBatchCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSimulationJobBatchCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        batchPolicy: undefined,
        clientRequestToken: undefined,
        createdAt: undefined,
        createdRequests: undefined,
        failedRequests: undefined,
        failureCode: undefined,
        failureReason: undefined,
        lastUpdatedAt: undefined,
        pendingRequests: undefined,
        status: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.batchPolicy !== undefined && data.batchPolicy !== null) {
        contents.batchPolicy = deserializeAws_restJson1BatchPolicy(data.batchPolicy, context);
    }
    if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
        contents.clientRequestToken = data.clientRequestToken;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.createdRequests !== undefined && data.createdRequests !== null) {
        contents.createdRequests = deserializeAws_restJson1SimulationJobSummaries(data.createdRequests, context);
    }
    if (data.failedRequests !== undefined && data.failedRequests !== null) {
        contents.failedRequests = deserializeAws_restJson1FailedCreateSimulationJobRequests(data.failedRequests, context);
    }
    if (data.failureCode !== undefined && data.failureCode !== null) {
        contents.failureCode = data.failureCode;
    }
    if (data.failureReason !== undefined && data.failureReason !== null) {
        contents.failureReason = data.failureReason;
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.pendingRequests !== undefined && data.pendingRequests !== null) {
        contents.pendingRequests = deserializeAws_restJson1CreateSimulationJobRequests(data.pendingRequests, context);
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSimulationJobBatchCommand = deserializeAws_restJson1DescribeSimulationJobBatchCommand;
const deserializeAws_restJson1DescribeSimulationJobBatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeWorldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeWorldCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        createdAt: undefined,
        generationJob: undefined,
        tags: undefined,
        template: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.generationJob !== undefined && data.generationJob !== null) {
        contents.generationJob = data.generationJob;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.template !== undefined && data.template !== null) {
        contents.template = data.template;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeWorldCommand = deserializeAws_restJson1DescribeWorldCommand;
const deserializeAws_restJson1DescribeWorldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeWorldExportJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeWorldExportJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        clientRequestToken: undefined,
        createdAt: undefined,
        failureCode: undefined,
        failureReason: undefined,
        iamRole: undefined,
        outputLocation: undefined,
        status: undefined,
        tags: undefined,
        worlds: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
        contents.clientRequestToken = data.clientRequestToken;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.failureCode !== undefined && data.failureCode !== null) {
        contents.failureCode = data.failureCode;
    }
    if (data.failureReason !== undefined && data.failureReason !== null) {
        contents.failureReason = data.failureReason;
    }
    if (data.iamRole !== undefined && data.iamRole !== null) {
        contents.iamRole = data.iamRole;
    }
    if (data.outputLocation !== undefined && data.outputLocation !== null) {
        contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.worlds !== undefined && data.worlds !== null) {
        contents.worlds = deserializeAws_restJson1Arns(data.worlds, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeWorldExportJobCommand = deserializeAws_restJson1DescribeWorldExportJobCommand;
const deserializeAws_restJson1DescribeWorldExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeWorldGenerationJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeWorldGenerationJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        clientRequestToken: undefined,
        createdAt: undefined,
        failureCode: undefined,
        failureReason: undefined,
        finishedWorldsSummary: undefined,
        status: undefined,
        tags: undefined,
        template: undefined,
        worldCount: undefined,
        worldTags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
        contents.clientRequestToken = data.clientRequestToken;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.failureCode !== undefined && data.failureCode !== null) {
        contents.failureCode = data.failureCode;
    }
    if (data.failureReason !== undefined && data.failureReason !== null) {
        contents.failureReason = data.failureReason;
    }
    if (data.finishedWorldsSummary !== undefined && data.finishedWorldsSummary !== null) {
        contents.finishedWorldsSummary = deserializeAws_restJson1FinishedWorldsSummary(data.finishedWorldsSummary, context);
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.template !== undefined && data.template !== null) {
        contents.template = data.template;
    }
    if (data.worldCount !== undefined && data.worldCount !== null) {
        contents.worldCount = deserializeAws_restJson1WorldCount(data.worldCount, context);
    }
    if (data.worldTags !== undefined && data.worldTags !== null) {
        contents.worldTags = deserializeAws_restJson1TagMap(data.worldTags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeWorldGenerationJobCommand = deserializeAws_restJson1DescribeWorldGenerationJobCommand;
const deserializeAws_restJson1DescribeWorldGenerationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeWorldTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeWorldTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        clientRequestToken: undefined,
        createdAt: undefined,
        lastUpdatedAt: undefined,
        name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
        contents.clientRequestToken = data.clientRequestToken;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeWorldTemplateCommand = deserializeAws_restJson1DescribeWorldTemplateCommand;
const deserializeAws_restJson1DescribeWorldTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetWorldTemplateBodyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetWorldTemplateBodyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        templateBody: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.templateBody !== undefined && data.templateBody !== null) {
        contents.templateBody = data.templateBody;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetWorldTemplateBodyCommand = deserializeAws_restJson1GetWorldTemplateBodyCommand;
const deserializeAws_restJson1GetWorldTemplateBodyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDeploymentJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDeploymentJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        deploymentJobs: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.deploymentJobs !== undefined && data.deploymentJobs !== null) {
        contents.deploymentJobs = deserializeAws_restJson1DeploymentJobs(data.deploymentJobs, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDeploymentJobsCommand = deserializeAws_restJson1ListDeploymentJobsCommand;
const deserializeAws_restJson1ListDeploymentJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListFleetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFleetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        fleetDetails: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.fleetDetails !== undefined && data.fleetDetails !== null) {
        contents.fleetDetails = deserializeAws_restJson1Fleets(data.fleetDetails, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFleetsCommand = deserializeAws_restJson1ListFleetsCommand;
const deserializeAws_restJson1ListFleetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListRobotApplicationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRobotApplicationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        robotApplicationSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.robotApplicationSummaries !== undefined && data.robotApplicationSummaries !== null) {
        contents.robotApplicationSummaries = deserializeAws_restJson1RobotApplicationSummaries(data.robotApplicationSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRobotApplicationsCommand = deserializeAws_restJson1ListRobotApplicationsCommand;
const deserializeAws_restJson1ListRobotApplicationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListRobotsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRobotsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        robots: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.robots !== undefined && data.robots !== null) {
        contents.robots = deserializeAws_restJson1Robots(data.robots, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRobotsCommand = deserializeAws_restJson1ListRobotsCommand;
const deserializeAws_restJson1ListRobotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListSimulationApplicationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSimulationApplicationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        simulationApplicationSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.simulationApplicationSummaries !== undefined && data.simulationApplicationSummaries !== null) {
        contents.simulationApplicationSummaries = deserializeAws_restJson1SimulationApplicationSummaries(data.simulationApplicationSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSimulationApplicationsCommand = deserializeAws_restJson1ListSimulationApplicationsCommand;
const deserializeAws_restJson1ListSimulationApplicationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListSimulationJobBatchesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSimulationJobBatchesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        simulationJobBatchSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.simulationJobBatchSummaries !== undefined && data.simulationJobBatchSummaries !== null) {
        contents.simulationJobBatchSummaries = deserializeAws_restJson1SimulationJobBatchSummaries(data.simulationJobBatchSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSimulationJobBatchesCommand = deserializeAws_restJson1ListSimulationJobBatchesCommand;
const deserializeAws_restJson1ListSimulationJobBatchesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListSimulationJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSimulationJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        simulationJobSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.simulationJobSummaries !== undefined && data.simulationJobSummaries !== null) {
        contents.simulationJobSummaries = deserializeAws_restJson1SimulationJobSummaries(data.simulationJobSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSimulationJobsCommand = deserializeAws_restJson1ListSimulationJobsCommand;
const deserializeAws_restJson1ListSimulationJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListWorldExportJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListWorldExportJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        worldExportJobSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.worldExportJobSummaries !== undefined && data.worldExportJobSummaries !== null) {
        contents.worldExportJobSummaries = deserializeAws_restJson1WorldExportJobSummaries(data.worldExportJobSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListWorldExportJobsCommand = deserializeAws_restJson1ListWorldExportJobsCommand;
const deserializeAws_restJson1ListWorldExportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListWorldGenerationJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListWorldGenerationJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        worldGenerationJobSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.worldGenerationJobSummaries !== undefined && data.worldGenerationJobSummaries !== null) {
        contents.worldGenerationJobSummaries = deserializeAws_restJson1WorldGenerationJobSummaries(data.worldGenerationJobSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListWorldGenerationJobsCommand = deserializeAws_restJson1ListWorldGenerationJobsCommand;
const deserializeAws_restJson1ListWorldGenerationJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListWorldsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListWorldsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        worldSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.worldSummaries !== undefined && data.worldSummaries !== null) {
        contents.worldSummaries = deserializeAws_restJson1WorldSummaries(data.worldSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListWorldsCommand = deserializeAws_restJson1ListWorldsCommand;
const deserializeAws_restJson1ListWorldsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListWorldTemplatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListWorldTemplatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        templateSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.templateSummaries !== undefined && data.templateSummaries !== null) {
        contents.templateSummaries = deserializeAws_restJson1TemplateSummaries(data.templateSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListWorldTemplatesCommand = deserializeAws_restJson1ListWorldTemplatesCommand;
const deserializeAws_restJson1ListWorldTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RegisterRobotCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RegisterRobotCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        fleet: undefined,
        robot: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.fleet !== undefined && data.fleet !== null) {
        contents.fleet = data.fleet;
    }
    if (data.robot !== undefined && data.robot !== null) {
        contents.robot = data.robot;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RegisterRobotCommand = deserializeAws_restJson1RegisterRobotCommand;
const deserializeAws_restJson1RegisterRobotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RestartSimulationJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RestartSimulationJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RestartSimulationJobCommand = deserializeAws_restJson1RestartSimulationJobCommand;
const deserializeAws_restJson1RestartSimulationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartSimulationJobBatchCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartSimulationJobBatchCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        batchPolicy: undefined,
        clientRequestToken: undefined,
        createdAt: undefined,
        createdRequests: undefined,
        failedRequests: undefined,
        failureCode: undefined,
        failureReason: undefined,
        pendingRequests: undefined,
        status: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.batchPolicy !== undefined && data.batchPolicy !== null) {
        contents.batchPolicy = deserializeAws_restJson1BatchPolicy(data.batchPolicy, context);
    }
    if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
        contents.clientRequestToken = data.clientRequestToken;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.createdRequests !== undefined && data.createdRequests !== null) {
        contents.createdRequests = deserializeAws_restJson1SimulationJobSummaries(data.createdRequests, context);
    }
    if (data.failedRequests !== undefined && data.failedRequests !== null) {
        contents.failedRequests = deserializeAws_restJson1FailedCreateSimulationJobRequests(data.failedRequests, context);
    }
    if (data.failureCode !== undefined && data.failureCode !== null) {
        contents.failureCode = data.failureCode;
    }
    if (data.failureReason !== undefined && data.failureReason !== null) {
        contents.failureReason = data.failureReason;
    }
    if (data.pendingRequests !== undefined && data.pendingRequests !== null) {
        contents.pendingRequests = deserializeAws_restJson1CreateSimulationJobRequests(data.pendingRequests, context);
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartSimulationJobBatchCommand = deserializeAws_restJson1StartSimulationJobBatchCommand;
const deserializeAws_restJson1StartSimulationJobBatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SyncDeploymentJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SyncDeploymentJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        createdAt: undefined,
        deploymentApplicationConfigs: undefined,
        deploymentConfig: undefined,
        failureCode: undefined,
        failureReason: undefined,
        fleet: undefined,
        status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.deploymentApplicationConfigs !== undefined && data.deploymentApplicationConfigs !== null) {
        contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(data.deploymentApplicationConfigs, context);
    }
    if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
        contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(data.deploymentConfig, context);
    }
    if (data.failureCode !== undefined && data.failureCode !== null) {
        contents.failureCode = data.failureCode;
    }
    if (data.failureReason !== undefined && data.failureReason !== null) {
        contents.failureReason = data.failureReason;
    }
    if (data.fleet !== undefined && data.fleet !== null) {
        contents.fleet = data.fleet;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SyncDeploymentJobCommand = deserializeAws_restJson1SyncDeploymentJobCommand;
const deserializeAws_restJson1SyncDeploymentJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentDeploymentException":
        case "com.amazonaws.robomaker#ConcurrentDeploymentException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentDeploymentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateRobotApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRobotApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        lastUpdatedAt: undefined,
        name: undefined,
        revisionId: undefined,
        robotSoftwareSuite: undefined,
        sources: undefined,
        version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
        contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
    }
    if (data.sources !== undefined && data.sources !== null) {
        contents.sources = deserializeAws_restJson1Sources(data.sources, context);
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = data.version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRobotApplicationCommand = deserializeAws_restJson1UpdateRobotApplicationCommand;
const deserializeAws_restJson1UpdateRobotApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateSimulationApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSimulationApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        lastUpdatedAt: undefined,
        name: undefined,
        renderingEngine: undefined,
        revisionId: undefined,
        robotSoftwareSuite: undefined,
        simulationSoftwareSuite: undefined,
        sources: undefined,
        version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.renderingEngine !== undefined && data.renderingEngine !== null) {
        contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
        contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
    }
    if (data.simulationSoftwareSuite !== undefined && data.simulationSoftwareSuite !== null) {
        contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(data.simulationSoftwareSuite, context);
    }
    if (data.sources !== undefined && data.sources !== null) {
        contents.sources = deserializeAws_restJson1Sources(data.sources, context);
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = data.version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSimulationApplicationCommand = deserializeAws_restJson1UpdateSimulationApplicationCommand;
const deserializeAws_restJson1UpdateSimulationApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.robomaker#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateWorldTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateWorldTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        createdAt: undefined,
        lastUpdatedAt: undefined,
        name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateWorldTemplateCommand = deserializeAws_restJson1UpdateWorldTemplateCommand;
const deserializeAws_restJson1UpdateWorldTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.robomaker#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.robomaker#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.robomaker#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.robomaker#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ConcurrentDeploymentExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConcurrentDeploymentException",
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
const deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IdempotentParameterMismatchException",
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
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterException",
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
const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceAlreadyExistsException",
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
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
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
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
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
const serializeAws_restJson1Arns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1BatchPolicy = (input, context) => {
    return {
        ...(input.maxConcurrency !== undefined &&
            input.maxConcurrency !== null && { maxConcurrency: input.maxConcurrency }),
        ...(input.timeoutInSeconds !== undefined &&
            input.timeoutInSeconds !== null && { timeoutInSeconds: input.timeoutInSeconds }),
    };
};
const serializeAws_restJson1Compute = (input, context) => {
    return {
        ...(input.simulationUnitLimit !== undefined &&
            input.simulationUnitLimit !== null && { simulationUnitLimit: input.simulationUnitLimit }),
    };
};
const serializeAws_restJson1CreateSimulationJobRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SimulationJobRequest(entry, context);
    });
};
const serializeAws_restJson1DataSourceConfig = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket }),
        ...(input.s3Keys !== undefined &&
            input.s3Keys !== null && { s3Keys: serializeAws_restJson1S3Keys(input.s3Keys, context) }),
    };
};
const serializeAws_restJson1DataSourceConfigs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DataSourceConfig(entry, context);
    });
};
const serializeAws_restJson1DeploymentApplicationConfig = (input, context) => {
    return {
        ...(input.application !== undefined && input.application !== null && { application: input.application }),
        ...(input.applicationVersion !== undefined &&
            input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
        ...(input.launchConfig !== undefined &&
            input.launchConfig !== null && {
            launchConfig: serializeAws_restJson1DeploymentLaunchConfig(input.launchConfig, context),
        }),
    };
};
const serializeAws_restJson1DeploymentApplicationConfigs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DeploymentApplicationConfig(entry, context);
    });
};
const serializeAws_restJson1DeploymentConfig = (input, context) => {
    return {
        ...(input.concurrentDeploymentPercentage !== undefined &&
            input.concurrentDeploymentPercentage !== null && {
            concurrentDeploymentPercentage: input.concurrentDeploymentPercentage,
        }),
        ...(input.downloadConditionFile !== undefined &&
            input.downloadConditionFile !== null && {
            downloadConditionFile: serializeAws_restJson1S3Object(input.downloadConditionFile, context),
        }),
        ...(input.failureThresholdPercentage !== undefined &&
            input.failureThresholdPercentage !== null && { failureThresholdPercentage: input.failureThresholdPercentage }),
        ...(input.robotDeploymentTimeoutInSeconds !== undefined &&
            input.robotDeploymentTimeoutInSeconds !== null && {
            robotDeploymentTimeoutInSeconds: input.robotDeploymentTimeoutInSeconds,
        }),
    };
};
const serializeAws_restJson1DeploymentLaunchConfig = (input, context) => {
    return {
        ...(input.environmentVariables !== undefined &&
            input.environmentVariables !== null && {
            environmentVariables: serializeAws_restJson1EnvironmentVariableMap(input.environmentVariables, context),
        }),
        ...(input.launchFile !== undefined && input.launchFile !== null && { launchFile: input.launchFile }),
        ...(input.packageName !== undefined && input.packageName !== null && { packageName: input.packageName }),
        ...(input.postLaunchFile !== undefined &&
            input.postLaunchFile !== null && { postLaunchFile: input.postLaunchFile }),
        ...(input.preLaunchFile !== undefined && input.preLaunchFile !== null && { preLaunchFile: input.preLaunchFile }),
    };
};
const serializeAws_restJson1EnvironmentVariableMap = (input, context) => {
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
const serializeAws_restJson1Filter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
    };
};
const serializeAws_restJson1Filters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Filter(entry, context);
    });
};
const serializeAws_restJson1FilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1LaunchConfig = (input, context) => {
    return {
        ...(input.environmentVariables !== undefined &&
            input.environmentVariables !== null && {
            environmentVariables: serializeAws_restJson1EnvironmentVariableMap(input.environmentVariables, context),
        }),
        ...(input.launchFile !== undefined && input.launchFile !== null && { launchFile: input.launchFile }),
        ...(input.packageName !== undefined && input.packageName !== null && { packageName: input.packageName }),
        ...(input.portForwardingConfig !== undefined &&
            input.portForwardingConfig !== null && {
            portForwardingConfig: serializeAws_restJson1PortForwardingConfig(input.portForwardingConfig, context),
        }),
        ...(input.streamUI !== undefined && input.streamUI !== null && { streamUI: input.streamUI }),
    };
};
const serializeAws_restJson1LoggingConfig = (input, context) => {
    return {
        ...(input.recordAllRosTopics !== undefined &&
            input.recordAllRosTopics !== null && { recordAllRosTopics: input.recordAllRosTopics }),
    };
};
const serializeAws_restJson1OutputLocation = (input, context) => {
    return {
        ...(input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket }),
        ...(input.s3Prefix !== undefined && input.s3Prefix !== null && { s3Prefix: input.s3Prefix }),
    };
};
const serializeAws_restJson1PortForwardingConfig = (input, context) => {
    return {
        ...(input.portMappings !== undefined &&
            input.portMappings !== null && {
            portMappings: serializeAws_restJson1PortMappingList(input.portMappings, context),
        }),
    };
};
const serializeAws_restJson1PortMapping = (input, context) => {
    return {
        ...(input.applicationPort !== undefined &&
            input.applicationPort !== null && { applicationPort: input.applicationPort }),
        ...(input.enableOnPublicIp !== undefined &&
            input.enableOnPublicIp !== null && { enableOnPublicIp: input.enableOnPublicIp }),
        ...(input.jobPort !== undefined && input.jobPort !== null && { jobPort: input.jobPort }),
    };
};
const serializeAws_restJson1PortMappingList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1PortMapping(entry, context);
    });
};
const serializeAws_restJson1RenderingEngine = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_restJson1RobotApplicationConfig = (input, context) => {
    return {
        ...(input.application !== undefined && input.application !== null && { application: input.application }),
        ...(input.applicationVersion !== undefined &&
            input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
        ...(input.launchConfig !== undefined &&
            input.launchConfig !== null && { launchConfig: serializeAws_restJson1LaunchConfig(input.launchConfig, context) }),
        ...(input.tools !== undefined &&
            input.tools !== null && { tools: serializeAws_restJson1Tools(input.tools, context) }),
        ...(input.uploadConfigurations !== undefined &&
            input.uploadConfigurations !== null && {
            uploadConfigurations: serializeAws_restJson1UploadConfigurations(input.uploadConfigurations, context),
        }),
        ...(input.useDefaultTools !== undefined &&
            input.useDefaultTools !== null && { useDefaultTools: input.useDefaultTools }),
        ...(input.useDefaultUploadConfigurations !== undefined &&
            input.useDefaultUploadConfigurations !== null && {
            useDefaultUploadConfigurations: input.useDefaultUploadConfigurations,
        }),
    };
};
const serializeAws_restJson1RobotApplicationConfigs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RobotApplicationConfig(entry, context);
    });
};
const serializeAws_restJson1RobotSoftwareSuite = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_restJson1S3Keys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1S3Object = (input, context) => {
    return {
        ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
        ...(input.etag !== undefined && input.etag !== null && { etag: input.etag }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
    };
};
const serializeAws_restJson1SecurityGroups = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SimulationApplicationConfig = (input, context) => {
    return {
        ...(input.application !== undefined && input.application !== null && { application: input.application }),
        ...(input.applicationVersion !== undefined &&
            input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
        ...(input.launchConfig !== undefined &&
            input.launchConfig !== null && { launchConfig: serializeAws_restJson1LaunchConfig(input.launchConfig, context) }),
        ...(input.tools !== undefined &&
            input.tools !== null && { tools: serializeAws_restJson1Tools(input.tools, context) }),
        ...(input.uploadConfigurations !== undefined &&
            input.uploadConfigurations !== null && {
            uploadConfigurations: serializeAws_restJson1UploadConfigurations(input.uploadConfigurations, context),
        }),
        ...(input.useDefaultTools !== undefined &&
            input.useDefaultTools !== null && { useDefaultTools: input.useDefaultTools }),
        ...(input.useDefaultUploadConfigurations !== undefined &&
            input.useDefaultUploadConfigurations !== null && {
            useDefaultUploadConfigurations: input.useDefaultUploadConfigurations,
        }),
        ...(input.worldConfigs !== undefined &&
            input.worldConfigs !== null && { worldConfigs: serializeAws_restJson1WorldConfigs(input.worldConfigs, context) }),
    };
};
const serializeAws_restJson1SimulationApplicationConfigs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SimulationApplicationConfig(entry, context);
    });
};
const serializeAws_restJson1SimulationJobRequest = (input, context) => {
    return {
        ...(input.compute !== undefined &&
            input.compute !== null && { compute: serializeAws_restJson1Compute(input.compute, context) }),
        ...(input.dataSources !== undefined &&
            input.dataSources !== null && {
            dataSources: serializeAws_restJson1DataSourceConfigs(input.dataSources, context),
        }),
        ...(input.failureBehavior !== undefined &&
            input.failureBehavior !== null && { failureBehavior: input.failureBehavior }),
        ...(input.iamRole !== undefined && input.iamRole !== null && { iamRole: input.iamRole }),
        ...(input.loggingConfig !== undefined &&
            input.loggingConfig !== null && {
            loggingConfig: serializeAws_restJson1LoggingConfig(input.loggingConfig, context),
        }),
        ...(input.maxJobDurationInSeconds !== undefined &&
            input.maxJobDurationInSeconds !== null && { maxJobDurationInSeconds: input.maxJobDurationInSeconds }),
        ...(input.outputLocation !== undefined &&
            input.outputLocation !== null && {
            outputLocation: serializeAws_restJson1OutputLocation(input.outputLocation, context),
        }),
        ...(input.robotApplications !== undefined &&
            input.robotApplications !== null && {
            robotApplications: serializeAws_restJson1RobotApplicationConfigs(input.robotApplications, context),
        }),
        ...(input.simulationApplications !== undefined &&
            input.simulationApplications !== null && {
            simulationApplications: serializeAws_restJson1SimulationApplicationConfigs(input.simulationApplications, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.useDefaultApplications !== undefined &&
            input.useDefaultApplications !== null && { useDefaultApplications: input.useDefaultApplications }),
        ...(input.vpcConfig !== undefined &&
            input.vpcConfig !== null && { vpcConfig: serializeAws_restJson1VPCConfig(input.vpcConfig, context) }),
    };
};
const serializeAws_restJson1SimulationSoftwareSuite = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_restJson1SourceConfig = (input, context) => {
    return {
        ...(input.architecture !== undefined && input.architecture !== null && { architecture: input.architecture }),
        ...(input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket }),
        ...(input.s3Key !== undefined && input.s3Key !== null && { s3Key: input.s3Key }),
    };
};
const serializeAws_restJson1SourceConfigs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SourceConfig(entry, context);
    });
};
const serializeAws_restJson1Subnets = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagMap = (input, context) => {
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
const serializeAws_restJson1TemplateLocation = (input, context) => {
    return {
        ...(input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket }),
        ...(input.s3Key !== undefined && input.s3Key !== null && { s3Key: input.s3Key }),
    };
};
const serializeAws_restJson1Tool = (input, context) => {
    return {
        ...(input.command !== undefined && input.command !== null && { command: input.command }),
        ...(input.exitBehavior !== undefined && input.exitBehavior !== null && { exitBehavior: input.exitBehavior }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.streamOutputToCloudWatch !== undefined &&
            input.streamOutputToCloudWatch !== null && { streamOutputToCloudWatch: input.streamOutputToCloudWatch }),
        ...(input.streamUI !== undefined && input.streamUI !== null && { streamUI: input.streamUI }),
    };
};
const serializeAws_restJson1Tools = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tool(entry, context);
    });
};
const serializeAws_restJson1UploadConfiguration = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.path !== undefined && input.path !== null && { path: input.path }),
        ...(input.uploadBehavior !== undefined &&
            input.uploadBehavior !== null && { uploadBehavior: input.uploadBehavior }),
    };
};
const serializeAws_restJson1UploadConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1UploadConfiguration(entry, context);
    });
};
const serializeAws_restJson1VPCConfig = (input, context) => {
    return {
        ...(input.assignPublicIp !== undefined &&
            input.assignPublicIp !== null && { assignPublicIp: input.assignPublicIp }),
        ...(input.securityGroups !== undefined &&
            input.securityGroups !== null && {
            securityGroups: serializeAws_restJson1SecurityGroups(input.securityGroups, context),
        }),
        ...(input.subnets !== undefined &&
            input.subnets !== null && { subnets: serializeAws_restJson1Subnets(input.subnets, context) }),
    };
};
const serializeAws_restJson1WorldConfig = (input, context) => {
    return {
        ...(input.world !== undefined && input.world !== null && { world: input.world }),
    };
};
const serializeAws_restJson1WorldConfigs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1WorldConfig(entry, context);
    });
};
const serializeAws_restJson1WorldCount = (input, context) => {
    return {
        ...(input.floorplanCount !== undefined &&
            input.floorplanCount !== null && { floorplanCount: input.floorplanCount }),
        ...(input.interiorCountPerFloorplan !== undefined &&
            input.interiorCountPerFloorplan !== null && { interiorCountPerFloorplan: input.interiorCountPerFloorplan }),
    };
};
const deserializeAws_restJson1Arns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1BatchPolicy = (output, context) => {
    return {
        maxConcurrency: output.maxConcurrency !== undefined && output.maxConcurrency !== null ? output.maxConcurrency : undefined,
        timeoutInSeconds: output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
    };
};
const deserializeAws_restJson1Compute = (output, context) => {
    return {
        simulationUnitLimit: output.simulationUnitLimit !== undefined && output.simulationUnitLimit !== null
            ? output.simulationUnitLimit
            : undefined,
    };
};
const deserializeAws_restJson1ComputeResponse = (output, context) => {
    return {
        simulationUnitLimit: output.simulationUnitLimit !== undefined && output.simulationUnitLimit !== null
            ? output.simulationUnitLimit
            : undefined,
    };
};
const deserializeAws_restJson1CreateSimulationJobRequests = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimulationJobRequest(entry, context);
    });
};
const deserializeAws_restJson1DataSource = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
        s3Keys: output.s3Keys !== undefined && output.s3Keys !== null
            ? deserializeAws_restJson1S3KeyOutputs(output.s3Keys, context)
            : undefined,
    };
};
const deserializeAws_restJson1DataSourceConfig = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
        s3Keys: output.s3Keys !== undefined && output.s3Keys !== null
            ? deserializeAws_restJson1S3Keys(output.s3Keys, context)
            : undefined,
    };
};
const deserializeAws_restJson1DataSourceConfigs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataSourceConfig(entry, context);
    });
};
const deserializeAws_restJson1DataSourceNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1DataSources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataSource(entry, context);
    });
};
const deserializeAws_restJson1DeploymentApplicationConfig = (output, context) => {
    return {
        application: output.application !== undefined && output.application !== null ? output.application : undefined,
        applicationVersion: output.applicationVersion !== undefined && output.applicationVersion !== null
            ? output.applicationVersion
            : undefined,
        launchConfig: output.launchConfig !== undefined && output.launchConfig !== null
            ? deserializeAws_restJson1DeploymentLaunchConfig(output.launchConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1DeploymentApplicationConfigs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DeploymentApplicationConfig(entry, context);
    });
};
const deserializeAws_restJson1DeploymentConfig = (output, context) => {
    return {
        concurrentDeploymentPercentage: output.concurrentDeploymentPercentage !== undefined && output.concurrentDeploymentPercentage !== null
            ? output.concurrentDeploymentPercentage
            : undefined,
        downloadConditionFile: output.downloadConditionFile !== undefined && output.downloadConditionFile !== null
            ? deserializeAws_restJson1S3Object(output.downloadConditionFile, context)
            : undefined,
        failureThresholdPercentage: output.failureThresholdPercentage !== undefined && output.failureThresholdPercentage !== null
            ? output.failureThresholdPercentage
            : undefined,
        robotDeploymentTimeoutInSeconds: output.robotDeploymentTimeoutInSeconds !== undefined && output.robotDeploymentTimeoutInSeconds !== null
            ? output.robotDeploymentTimeoutInSeconds
            : undefined,
    };
};
const deserializeAws_restJson1DeploymentJob = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        deploymentApplicationConfigs: output.deploymentApplicationConfigs !== undefined && output.deploymentApplicationConfigs !== null
            ? deserializeAws_restJson1DeploymentApplicationConfigs(output.deploymentApplicationConfigs, context)
            : undefined,
        deploymentConfig: output.deploymentConfig !== undefined && output.deploymentConfig !== null
            ? deserializeAws_restJson1DeploymentConfig(output.deploymentConfig, context)
            : undefined,
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        fleet: output.fleet !== undefined && output.fleet !== null ? output.fleet : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1DeploymentJobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DeploymentJob(entry, context);
    });
};
const deserializeAws_restJson1DeploymentLaunchConfig = (output, context) => {
    return {
        environmentVariables: output.environmentVariables !== undefined && output.environmentVariables !== null
            ? deserializeAws_restJson1EnvironmentVariableMap(output.environmentVariables, context)
            : undefined,
        launchFile: output.launchFile !== undefined && output.launchFile !== null ? output.launchFile : undefined,
        packageName: output.packageName !== undefined && output.packageName !== null ? output.packageName : undefined,
        postLaunchFile: output.postLaunchFile !== undefined && output.postLaunchFile !== null ? output.postLaunchFile : undefined,
        preLaunchFile: output.preLaunchFile !== undefined && output.preLaunchFile !== null ? output.preLaunchFile : undefined,
    };
};
const deserializeAws_restJson1EnvironmentVariableMap = (output, context) => {
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
const deserializeAws_restJson1FailedCreateSimulationJobRequest = (output, context) => {
    return {
        failedAt: output.failedAt !== undefined && output.failedAt !== null
            ? new Date(Math.round(output.failedAt * 1000))
            : undefined,
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        request: output.request !== undefined && output.request !== null
            ? deserializeAws_restJson1SimulationJobRequest(output.request, context)
            : undefined,
    };
};
const deserializeAws_restJson1FailedCreateSimulationJobRequests = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FailedCreateSimulationJobRequest(entry, context);
    });
};
const deserializeAws_restJson1FailureSummary = (output, context) => {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_restJson1WorldFailures(output.failures, context)
            : undefined,
        totalFailureCount: output.totalFailureCount !== undefined && output.totalFailureCount !== null
            ? output.totalFailureCount
            : undefined,
    };
};
const deserializeAws_restJson1FinishedWorldsSummary = (output, context) => {
    return {
        failureSummary: output.failureSummary !== undefined && output.failureSummary !== null
            ? deserializeAws_restJson1FailureSummary(output.failureSummary, context)
            : undefined,
        finishedCount: output.finishedCount !== undefined && output.finishedCount !== null ? output.finishedCount : undefined,
        succeededWorlds: output.succeededWorlds !== undefined && output.succeededWorlds !== null
            ? deserializeAws_restJson1Arns(output.succeededWorlds, context)
            : undefined,
    };
};
const deserializeAws_restJson1Fleet = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        lastDeploymentJob: output.lastDeploymentJob !== undefined && output.lastDeploymentJob !== null
            ? output.lastDeploymentJob
            : undefined,
        lastDeploymentStatus: output.lastDeploymentStatus !== undefined && output.lastDeploymentStatus !== null
            ? output.lastDeploymentStatus
            : undefined,
        lastDeploymentTime: output.lastDeploymentTime !== undefined && output.lastDeploymentTime !== null
            ? new Date(Math.round(output.lastDeploymentTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1Fleets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Fleet(entry, context);
    });
};
const deserializeAws_restJson1LaunchConfig = (output, context) => {
    return {
        environmentVariables: output.environmentVariables !== undefined && output.environmentVariables !== null
            ? deserializeAws_restJson1EnvironmentVariableMap(output.environmentVariables, context)
            : undefined,
        launchFile: output.launchFile !== undefined && output.launchFile !== null ? output.launchFile : undefined,
        packageName: output.packageName !== undefined && output.packageName !== null ? output.packageName : undefined,
        portForwardingConfig: output.portForwardingConfig !== undefined && output.portForwardingConfig !== null
            ? deserializeAws_restJson1PortForwardingConfig(output.portForwardingConfig, context)
            : undefined,
        streamUI: output.streamUI !== undefined && output.streamUI !== null ? output.streamUI : undefined,
    };
};
const deserializeAws_restJson1LoggingConfig = (output, context) => {
    return {
        recordAllRosTopics: output.recordAllRosTopics !== undefined && output.recordAllRosTopics !== null
            ? output.recordAllRosTopics
            : undefined,
    };
};
const deserializeAws_restJson1NetworkInterface = (output, context) => {
    return {
        networkInterfaceId: output.networkInterfaceId !== undefined && output.networkInterfaceId !== null
            ? output.networkInterfaceId
            : undefined,
        privateIpAddress: output.privateIpAddress !== undefined && output.privateIpAddress !== null ? output.privateIpAddress : undefined,
        publicIpAddress: output.publicIpAddress !== undefined && output.publicIpAddress !== null ? output.publicIpAddress : undefined,
    };
};
const deserializeAws_restJson1OutputLocation = (output, context) => {
    return {
        s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
        s3Prefix: output.s3Prefix !== undefined && output.s3Prefix !== null ? output.s3Prefix : undefined,
    };
};
const deserializeAws_restJson1PortForwardingConfig = (output, context) => {
    return {
        portMappings: output.portMappings !== undefined && output.portMappings !== null
            ? deserializeAws_restJson1PortMappingList(output.portMappings, context)
            : undefined,
    };
};
const deserializeAws_restJson1PortMapping = (output, context) => {
    return {
        applicationPort: output.applicationPort !== undefined && output.applicationPort !== null ? output.applicationPort : undefined,
        enableOnPublicIp: output.enableOnPublicIp !== undefined && output.enableOnPublicIp !== null ? output.enableOnPublicIp : undefined,
        jobPort: output.jobPort !== undefined && output.jobPort !== null ? output.jobPort : undefined,
    };
};
const deserializeAws_restJson1PortMappingList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PortMapping(entry, context);
    });
};
const deserializeAws_restJson1ProgressDetail = (output, context) => {
    return {
        currentProgress: output.currentProgress !== undefined && output.currentProgress !== null ? output.currentProgress : undefined,
        estimatedTimeRemainingSeconds: output.estimatedTimeRemainingSeconds !== undefined && output.estimatedTimeRemainingSeconds !== null
            ? output.estimatedTimeRemainingSeconds
            : undefined,
        percentDone: output.percentDone !== undefined && output.percentDone !== null ? output.percentDone : undefined,
        targetResource: output.targetResource !== undefined && output.targetResource !== null ? output.targetResource : undefined,
    };
};
const deserializeAws_restJson1RenderingEngine = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1Robot = (output, context) => {
    return {
        architecture: output.architecture !== undefined && output.architecture !== null ? output.architecture : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        fleetArn: output.fleetArn !== undefined && output.fleetArn !== null ? output.fleetArn : undefined,
        greenGrassGroupId: output.greenGrassGroupId !== undefined && output.greenGrassGroupId !== null
            ? output.greenGrassGroupId
            : undefined,
        lastDeploymentJob: output.lastDeploymentJob !== undefined && output.lastDeploymentJob !== null
            ? output.lastDeploymentJob
            : undefined,
        lastDeploymentTime: output.lastDeploymentTime !== undefined && output.lastDeploymentTime !== null
            ? new Date(Math.round(output.lastDeploymentTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1RobotApplicationConfig = (output, context) => {
    return {
        application: output.application !== undefined && output.application !== null ? output.application : undefined,
        applicationVersion: output.applicationVersion !== undefined && output.applicationVersion !== null
            ? output.applicationVersion
            : undefined,
        launchConfig: output.launchConfig !== undefined && output.launchConfig !== null
            ? deserializeAws_restJson1LaunchConfig(output.launchConfig, context)
            : undefined,
        tools: output.tools !== undefined && output.tools !== null
            ? deserializeAws_restJson1Tools(output.tools, context)
            : undefined,
        uploadConfigurations: output.uploadConfigurations !== undefined && output.uploadConfigurations !== null
            ? deserializeAws_restJson1UploadConfigurations(output.uploadConfigurations, context)
            : undefined,
        useDefaultTools: output.useDefaultTools !== undefined && output.useDefaultTools !== null ? output.useDefaultTools : undefined,
        useDefaultUploadConfigurations: output.useDefaultUploadConfigurations !== undefined && output.useDefaultUploadConfigurations !== null
            ? output.useDefaultUploadConfigurations
            : undefined,
    };
};
const deserializeAws_restJson1RobotApplicationConfigs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RobotApplicationConfig(entry, context);
    });
};
const deserializeAws_restJson1RobotApplicationNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1RobotApplicationSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RobotApplicationSummary(entry, context);
    });
};
const deserializeAws_restJson1RobotApplicationSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        robotSoftwareSuite: output.robotSoftwareSuite !== undefined && output.robotSoftwareSuite !== null
            ? deserializeAws_restJson1RobotSoftwareSuite(output.robotSoftwareSuite, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1RobotDeployment = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        deploymentFinishTime: output.deploymentFinishTime !== undefined && output.deploymentFinishTime !== null
            ? new Date(Math.round(output.deploymentFinishTime * 1000))
            : undefined,
        deploymentStartTime: output.deploymentStartTime !== undefined && output.deploymentStartTime !== null
            ? new Date(Math.round(output.deploymentStartTime * 1000))
            : undefined,
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        progressDetail: output.progressDetail !== undefined && output.progressDetail !== null
            ? deserializeAws_restJson1ProgressDetail(output.progressDetail, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1RobotDeploymentSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RobotDeployment(entry, context);
    });
};
const deserializeAws_restJson1Robots = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Robot(entry, context);
    });
};
const deserializeAws_restJson1RobotSoftwareSuite = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1S3KeyOutput = (output, context) => {
    return {
        etag: output.etag !== undefined && output.etag !== null ? output.etag : undefined,
        s3Key: output.s3Key !== undefined && output.s3Key !== null ? output.s3Key : undefined,
    };
};
const deserializeAws_restJson1S3KeyOutputs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1S3KeyOutput(entry, context);
    });
};
const deserializeAws_restJson1S3Keys = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1S3Object = (output, context) => {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        etag: output.etag !== undefined && output.etag !== null ? output.etag : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
    };
};
const deserializeAws_restJson1SecurityGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SimulationApplicationConfig = (output, context) => {
    return {
        application: output.application !== undefined && output.application !== null ? output.application : undefined,
        applicationVersion: output.applicationVersion !== undefined && output.applicationVersion !== null
            ? output.applicationVersion
            : undefined,
        launchConfig: output.launchConfig !== undefined && output.launchConfig !== null
            ? deserializeAws_restJson1LaunchConfig(output.launchConfig, context)
            : undefined,
        tools: output.tools !== undefined && output.tools !== null
            ? deserializeAws_restJson1Tools(output.tools, context)
            : undefined,
        uploadConfigurations: output.uploadConfigurations !== undefined && output.uploadConfigurations !== null
            ? deserializeAws_restJson1UploadConfigurations(output.uploadConfigurations, context)
            : undefined,
        useDefaultTools: output.useDefaultTools !== undefined && output.useDefaultTools !== null ? output.useDefaultTools : undefined,
        useDefaultUploadConfigurations: output.useDefaultUploadConfigurations !== undefined && output.useDefaultUploadConfigurations !== null
            ? output.useDefaultUploadConfigurations
            : undefined,
        worldConfigs: output.worldConfigs !== undefined && output.worldConfigs !== null
            ? deserializeAws_restJson1WorldConfigs(output.worldConfigs, context)
            : undefined,
    };
};
const deserializeAws_restJson1SimulationApplicationConfigs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimulationApplicationConfig(entry, context);
    });
};
const deserializeAws_restJson1SimulationApplicationNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SimulationApplicationSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimulationApplicationSummary(entry, context);
    });
};
const deserializeAws_restJson1SimulationApplicationSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        robotSoftwareSuite: output.robotSoftwareSuite !== undefined && output.robotSoftwareSuite !== null
            ? deserializeAws_restJson1RobotSoftwareSuite(output.robotSoftwareSuite, context)
            : undefined,
        simulationSoftwareSuite: output.simulationSoftwareSuite !== undefined && output.simulationSoftwareSuite !== null
            ? deserializeAws_restJson1SimulationSoftwareSuite(output.simulationSoftwareSuite, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1SimulationJob = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        clientRequestToken: output.clientRequestToken !== undefined && output.clientRequestToken !== null
            ? output.clientRequestToken
            : undefined,
        compute: output.compute !== undefined && output.compute !== null
            ? deserializeAws_restJson1ComputeResponse(output.compute, context)
            : undefined,
        dataSources: output.dataSources !== undefined && output.dataSources !== null
            ? deserializeAws_restJson1DataSources(output.dataSources, context)
            : undefined,
        failureBehavior: output.failureBehavior !== undefined && output.failureBehavior !== null ? output.failureBehavior : undefined,
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        iamRole: output.iamRole !== undefined && output.iamRole !== null ? output.iamRole : undefined,
        lastStartedAt: output.lastStartedAt !== undefined && output.lastStartedAt !== null
            ? new Date(Math.round(output.lastStartedAt * 1000))
            : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        loggingConfig: output.loggingConfig !== undefined && output.loggingConfig !== null
            ? deserializeAws_restJson1LoggingConfig(output.loggingConfig, context)
            : undefined,
        maxJobDurationInSeconds: output.maxJobDurationInSeconds !== undefined && output.maxJobDurationInSeconds !== null
            ? output.maxJobDurationInSeconds
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        networkInterface: output.networkInterface !== undefined && output.networkInterface !== null
            ? deserializeAws_restJson1NetworkInterface(output.networkInterface, context)
            : undefined,
        outputLocation: output.outputLocation !== undefined && output.outputLocation !== null
            ? deserializeAws_restJson1OutputLocation(output.outputLocation, context)
            : undefined,
        robotApplications: output.robotApplications !== undefined && output.robotApplications !== null
            ? deserializeAws_restJson1RobotApplicationConfigs(output.robotApplications, context)
            : undefined,
        simulationApplications: output.simulationApplications !== undefined && output.simulationApplications !== null
            ? deserializeAws_restJson1SimulationApplicationConfigs(output.simulationApplications, context)
            : undefined,
        simulationTimeMillis: output.simulationTimeMillis !== undefined && output.simulationTimeMillis !== null
            ? output.simulationTimeMillis
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        vpcConfig: output.vpcConfig !== undefined && output.vpcConfig !== null
            ? deserializeAws_restJson1VPCConfigResponse(output.vpcConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1SimulationJobBatchSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimulationJobBatchSummary(entry, context);
    });
};
const deserializeAws_restJson1SimulationJobBatchSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        createdRequestCount: output.createdRequestCount !== undefined && output.createdRequestCount !== null
            ? output.createdRequestCount
            : undefined,
        failedRequestCount: output.failedRequestCount !== undefined && output.failedRequestCount !== null
            ? output.failedRequestCount
            : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        pendingRequestCount: output.pendingRequestCount !== undefined && output.pendingRequestCount !== null
            ? output.pendingRequestCount
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1SimulationJobRequest = (output, context) => {
    return {
        compute: output.compute !== undefined && output.compute !== null
            ? deserializeAws_restJson1Compute(output.compute, context)
            : undefined,
        dataSources: output.dataSources !== undefined && output.dataSources !== null
            ? deserializeAws_restJson1DataSourceConfigs(output.dataSources, context)
            : undefined,
        failureBehavior: output.failureBehavior !== undefined && output.failureBehavior !== null ? output.failureBehavior : undefined,
        iamRole: output.iamRole !== undefined && output.iamRole !== null ? output.iamRole : undefined,
        loggingConfig: output.loggingConfig !== undefined && output.loggingConfig !== null
            ? deserializeAws_restJson1LoggingConfig(output.loggingConfig, context)
            : undefined,
        maxJobDurationInSeconds: output.maxJobDurationInSeconds !== undefined && output.maxJobDurationInSeconds !== null
            ? output.maxJobDurationInSeconds
            : undefined,
        outputLocation: output.outputLocation !== undefined && output.outputLocation !== null
            ? deserializeAws_restJson1OutputLocation(output.outputLocation, context)
            : undefined,
        robotApplications: output.robotApplications !== undefined && output.robotApplications !== null
            ? deserializeAws_restJson1RobotApplicationConfigs(output.robotApplications, context)
            : undefined,
        simulationApplications: output.simulationApplications !== undefined && output.simulationApplications !== null
            ? deserializeAws_restJson1SimulationApplicationConfigs(output.simulationApplications, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        useDefaultApplications: output.useDefaultApplications !== undefined && output.useDefaultApplications !== null
            ? output.useDefaultApplications
            : undefined,
        vpcConfig: output.vpcConfig !== undefined && output.vpcConfig !== null
            ? deserializeAws_restJson1VPCConfig(output.vpcConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1SimulationJobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimulationJob(entry, context);
    });
};
const deserializeAws_restJson1SimulationJobSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimulationJobSummary(entry, context);
    });
};
const deserializeAws_restJson1SimulationJobSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        dataSourceNames: output.dataSourceNames !== undefined && output.dataSourceNames !== null
            ? deserializeAws_restJson1DataSourceNames(output.dataSourceNames, context)
            : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        robotApplicationNames: output.robotApplicationNames !== undefined && output.robotApplicationNames !== null
            ? deserializeAws_restJson1RobotApplicationNames(output.robotApplicationNames, context)
            : undefined,
        simulationApplicationNames: output.simulationApplicationNames !== undefined && output.simulationApplicationNames !== null
            ? deserializeAws_restJson1SimulationApplicationNames(output.simulationApplicationNames, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1SimulationSoftwareSuite = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1Source = (output, context) => {
    return {
        architecture: output.architecture !== undefined && output.architecture !== null ? output.architecture : undefined,
        etag: output.etag !== undefined && output.etag !== null ? output.etag : undefined,
        s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
        s3Key: output.s3Key !== undefined && output.s3Key !== null ? output.s3Key : undefined,
    };
};
const deserializeAws_restJson1Sources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Source(entry, context);
    });
};
const deserializeAws_restJson1Subnets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1TagMap = (output, context) => {
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
const deserializeAws_restJson1TemplateSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TemplateSummary(entry, context);
    });
};
const deserializeAws_restJson1TemplateSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1Tool = (output, context) => {
    return {
        command: output.command !== undefined && output.command !== null ? output.command : undefined,
        exitBehavior: output.exitBehavior !== undefined && output.exitBehavior !== null ? output.exitBehavior : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        streamOutputToCloudWatch: output.streamOutputToCloudWatch !== undefined && output.streamOutputToCloudWatch !== null
            ? output.streamOutputToCloudWatch
            : undefined,
        streamUI: output.streamUI !== undefined && output.streamUI !== null ? output.streamUI : undefined,
    };
};
const deserializeAws_restJson1Tools = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tool(entry, context);
    });
};
const deserializeAws_restJson1UploadConfiguration = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
        uploadBehavior: output.uploadBehavior !== undefined && output.uploadBehavior !== null ? output.uploadBehavior : undefined,
    };
};
const deserializeAws_restJson1UploadConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UploadConfiguration(entry, context);
    });
};
const deserializeAws_restJson1VPCConfig = (output, context) => {
    return {
        assignPublicIp: output.assignPublicIp !== undefined && output.assignPublicIp !== null ? output.assignPublicIp : undefined,
        securityGroups: output.securityGroups !== undefined && output.securityGroups !== null
            ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
            : undefined,
        subnets: output.subnets !== undefined && output.subnets !== null
            ? deserializeAws_restJson1Subnets(output.subnets, context)
            : undefined,
    };
};
const deserializeAws_restJson1VPCConfigResponse = (output, context) => {
    return {
        assignPublicIp: output.assignPublicIp !== undefined && output.assignPublicIp !== null ? output.assignPublicIp : undefined,
        securityGroups: output.securityGroups !== undefined && output.securityGroups !== null
            ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
            : undefined,
        subnets: output.subnets !== undefined && output.subnets !== null
            ? deserializeAws_restJson1Subnets(output.subnets, context)
            : undefined,
        vpcId: output.vpcId !== undefined && output.vpcId !== null ? output.vpcId : undefined,
    };
};
const deserializeAws_restJson1WorldConfig = (output, context) => {
    return {
        world: output.world !== undefined && output.world !== null ? output.world : undefined,
    };
};
const deserializeAws_restJson1WorldConfigs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WorldConfig(entry, context);
    });
};
const deserializeAws_restJson1WorldCount = (output, context) => {
    return {
        floorplanCount: output.floorplanCount !== undefined && output.floorplanCount !== null ? output.floorplanCount : undefined,
        interiorCountPerFloorplan: output.interiorCountPerFloorplan !== undefined && output.interiorCountPerFloorplan !== null
            ? output.interiorCountPerFloorplan
            : undefined,
    };
};
const deserializeAws_restJson1WorldExportJobSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WorldExportJobSummary(entry, context);
    });
};
const deserializeAws_restJson1WorldExportJobSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        worlds: output.worlds !== undefined && output.worlds !== null
            ? deserializeAws_restJson1Arns(output.worlds, context)
            : undefined,
    };
};
const deserializeAws_restJson1WorldFailure = (output, context) => {
    return {
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        failureCount: output.failureCount !== undefined && output.failureCount !== null ? output.failureCount : undefined,
        sampleFailureReason: output.sampleFailureReason !== undefined && output.sampleFailureReason !== null
            ? output.sampleFailureReason
            : undefined,
    };
};
const deserializeAws_restJson1WorldFailures = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WorldFailure(entry, context);
    });
};
const deserializeAws_restJson1WorldGenerationJobSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WorldGenerationJobSummary(entry, context);
    });
};
const deserializeAws_restJson1WorldGenerationJobSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        failedWorldCount: output.failedWorldCount !== undefined && output.failedWorldCount !== null ? output.failedWorldCount : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        succeededWorldCount: output.succeededWorldCount !== undefined && output.succeededWorldCount !== null
            ? output.succeededWorldCount
            : undefined,
        template: output.template !== undefined && output.template !== null ? output.template : undefined,
        worldCount: output.worldCount !== undefined && output.worldCount !== null
            ? deserializeAws_restJson1WorldCount(output.worldCount, context)
            : undefined,
    };
};
const deserializeAws_restJson1WorldSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WorldSummary(entry, context);
    });
};
const deserializeAws_restJson1WorldSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        generationJob: output.generationJob !== undefined && output.generationJob !== null ? output.generationJob : undefined,
        template: output.template !== undefined && output.template !== null ? output.template : undefined,
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