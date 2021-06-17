"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1DeleteRecipeVersionCommand = exports.deserializeAws_restJson1DeleteProjectCommand = exports.deserializeAws_restJson1DeleteJobCommand = exports.deserializeAws_restJson1DeleteDatasetCommand = exports.deserializeAws_restJson1CreateScheduleCommand = exports.deserializeAws_restJson1CreateRecipeJobCommand = exports.deserializeAws_restJson1CreateRecipeCommand = exports.deserializeAws_restJson1CreateProjectCommand = exports.deserializeAws_restJson1CreateProfileJobCommand = exports.deserializeAws_restJson1CreateDatasetCommand = exports.deserializeAws_restJson1BatchDeleteRecipeVersionCommand = exports.serializeAws_restJson1UpdateScheduleCommand = exports.serializeAws_restJson1UpdateRecipeJobCommand = exports.serializeAws_restJson1UpdateRecipeCommand = exports.serializeAws_restJson1UpdateProjectCommand = exports.serializeAws_restJson1UpdateProfileJobCommand = exports.serializeAws_restJson1UpdateDatasetCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StopJobRunCommand = exports.serializeAws_restJson1StartProjectSessionCommand = exports.serializeAws_restJson1StartJobRunCommand = exports.serializeAws_restJson1SendProjectSessionActionCommand = exports.serializeAws_restJson1PublishRecipeCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListSchedulesCommand = exports.serializeAws_restJson1ListRecipeVersionsCommand = exports.serializeAws_restJson1ListRecipesCommand = exports.serializeAws_restJson1ListProjectsCommand = exports.serializeAws_restJson1ListJobsCommand = exports.serializeAws_restJson1ListJobRunsCommand = exports.serializeAws_restJson1ListDatasetsCommand = exports.serializeAws_restJson1DescribeScheduleCommand = exports.serializeAws_restJson1DescribeRecipeCommand = exports.serializeAws_restJson1DescribeProjectCommand = exports.serializeAws_restJson1DescribeJobRunCommand = exports.serializeAws_restJson1DescribeJobCommand = exports.serializeAws_restJson1DescribeDatasetCommand = exports.serializeAws_restJson1DeleteScheduleCommand = exports.serializeAws_restJson1DeleteRecipeVersionCommand = exports.serializeAws_restJson1DeleteProjectCommand = exports.serializeAws_restJson1DeleteJobCommand = exports.serializeAws_restJson1DeleteDatasetCommand = exports.serializeAws_restJson1CreateScheduleCommand = exports.serializeAws_restJson1CreateRecipeJobCommand = exports.serializeAws_restJson1CreateRecipeCommand = exports.serializeAws_restJson1CreateProjectCommand = exports.serializeAws_restJson1CreateProfileJobCommand = exports.serializeAws_restJson1CreateDatasetCommand = exports.serializeAws_restJson1BatchDeleteRecipeVersionCommand = void 0;
exports.deserializeAws_restJson1UpdateScheduleCommand = exports.deserializeAws_restJson1UpdateRecipeJobCommand = exports.deserializeAws_restJson1UpdateRecipeCommand = exports.deserializeAws_restJson1UpdateProjectCommand = exports.deserializeAws_restJson1UpdateProfileJobCommand = exports.deserializeAws_restJson1UpdateDatasetCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StopJobRunCommand = exports.deserializeAws_restJson1StartProjectSessionCommand = exports.deserializeAws_restJson1StartJobRunCommand = exports.deserializeAws_restJson1SendProjectSessionActionCommand = exports.deserializeAws_restJson1PublishRecipeCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListSchedulesCommand = exports.deserializeAws_restJson1ListRecipeVersionsCommand = exports.deserializeAws_restJson1ListRecipesCommand = exports.deserializeAws_restJson1ListProjectsCommand = exports.deserializeAws_restJson1ListJobsCommand = exports.deserializeAws_restJson1ListJobRunsCommand = exports.deserializeAws_restJson1ListDatasetsCommand = exports.deserializeAws_restJson1DescribeScheduleCommand = exports.deserializeAws_restJson1DescribeRecipeCommand = exports.deserializeAws_restJson1DescribeProjectCommand = exports.deserializeAws_restJson1DescribeJobRunCommand = exports.deserializeAws_restJson1DescribeJobCommand = exports.deserializeAws_restJson1DescribeDatasetCommand = exports.deserializeAws_restJson1DeleteScheduleCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1BatchDeleteRecipeVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/recipes/{Name}/batchDeleteRecipeVersion";
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
    body = JSON.stringify({
        ...(input.RecipeVersions !== undefined &&
            input.RecipeVersions !== null && {
            RecipeVersions: serializeAws_restJson1RecipeVersionList(input.RecipeVersions, context),
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
exports.serializeAws_restJson1BatchDeleteRecipeVersionCommand = serializeAws_restJson1BatchDeleteRecipeVersionCommand;
const serializeAws_restJson1CreateDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/datasets";
    let body;
    body = JSON.stringify({
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.FormatOptions !== undefined &&
            input.FormatOptions !== null && {
            FormatOptions: serializeAws_restJson1FormatOptions(input.FormatOptions, context),
        }),
        ...(input.Input !== undefined &&
            input.Input !== null && { Input: serializeAws_restJson1Input(input.Input, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.PathOptions !== undefined &&
            input.PathOptions !== null && { PathOptions: serializeAws_restJson1PathOptions(input.PathOptions, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateDatasetCommand = serializeAws_restJson1CreateDatasetCommand;
const serializeAws_restJson1CreateProfileJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/profileJobs";
    let body;
    body = JSON.stringify({
        ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
        ...(input.EncryptionKeyArn !== undefined &&
            input.EncryptionKeyArn !== null && { EncryptionKeyArn: input.EncryptionKeyArn }),
        ...(input.EncryptionMode !== undefined &&
            input.EncryptionMode !== null && { EncryptionMode: input.EncryptionMode }),
        ...(input.JobSample !== undefined &&
            input.JobSample !== null && { JobSample: serializeAws_restJson1JobSample(input.JobSample, context) }),
        ...(input.LogSubscription !== undefined &&
            input.LogSubscription !== null && { LogSubscription: input.LogSubscription }),
        ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
        ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OutputLocation !== undefined &&
            input.OutputLocation !== null && {
            OutputLocation: serializeAws_restJson1S3Location(input.OutputLocation, context),
        }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
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
exports.serializeAws_restJson1CreateProfileJobCommand = serializeAws_restJson1CreateProfileJobCommand;
const serializeAws_restJson1CreateProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/projects";
    let body;
    body = JSON.stringify({
        ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RecipeName !== undefined && input.RecipeName !== null && { RecipeName: input.RecipeName }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.Sample !== undefined &&
            input.Sample !== null && { Sample: serializeAws_restJson1Sample(input.Sample, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateProjectCommand = serializeAws_restJson1CreateProjectCommand;
const serializeAws_restJson1CreateRecipeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/recipes";
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Steps !== undefined &&
            input.Steps !== null && { Steps: serializeAws_restJson1RecipeStepList(input.Steps, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateRecipeCommand = serializeAws_restJson1CreateRecipeCommand;
const serializeAws_restJson1CreateRecipeJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/recipeJobs";
    let body;
    body = JSON.stringify({
        ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
        ...(input.EncryptionKeyArn !== undefined &&
            input.EncryptionKeyArn !== null && { EncryptionKeyArn: input.EncryptionKeyArn }),
        ...(input.EncryptionMode !== undefined &&
            input.EncryptionMode !== null && { EncryptionMode: input.EncryptionMode }),
        ...(input.LogSubscription !== undefined &&
            input.LogSubscription !== null && { LogSubscription: input.LogSubscription }),
        ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
        ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Outputs !== undefined &&
            input.Outputs !== null && { Outputs: serializeAws_restJson1OutputList(input.Outputs, context) }),
        ...(input.ProjectName !== undefined && input.ProjectName !== null && { ProjectName: input.ProjectName }),
        ...(input.RecipeReference !== undefined &&
            input.RecipeReference !== null && {
            RecipeReference: serializeAws_restJson1RecipeReference(input.RecipeReference, context),
        }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
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
exports.serializeAws_restJson1CreateRecipeJobCommand = serializeAws_restJson1CreateRecipeJobCommand;
const serializeAws_restJson1CreateScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/schedules";
    let body;
    body = JSON.stringify({
        ...(input.CronExpression !== undefined &&
            input.CronExpression !== null && { CronExpression: input.CronExpression }),
        ...(input.JobNames !== undefined &&
            input.JobNames !== null && { JobNames: serializeAws_restJson1JobNameList(input.JobNames, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateScheduleCommand = serializeAws_restJson1CreateScheduleCommand;
const serializeAws_restJson1DeleteDatasetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/datasets/{Name}";
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
exports.serializeAws_restJson1DeleteDatasetCommand = serializeAws_restJson1DeleteDatasetCommand;
const serializeAws_restJson1DeleteJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/jobs/{Name}";
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
exports.serializeAws_restJson1DeleteJobCommand = serializeAws_restJson1DeleteJobCommand;
const serializeAws_restJson1DeleteProjectCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/projects/{Name}";
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
exports.serializeAws_restJson1DeleteProjectCommand = serializeAws_restJson1DeleteProjectCommand;
const serializeAws_restJson1DeleteRecipeVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/recipes/{Name}/recipeVersion/{RecipeVersion}";
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
    if (input.RecipeVersion !== undefined) {
        const labelValue = input.RecipeVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RecipeVersion.");
        }
        resolvedPath = resolvedPath.replace("{RecipeVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RecipeVersion.");
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
exports.serializeAws_restJson1DeleteRecipeVersionCommand = serializeAws_restJson1DeleteRecipeVersionCommand;
const serializeAws_restJson1DeleteScheduleCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/schedules/{Name}";
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
exports.serializeAws_restJson1DeleteScheduleCommand = serializeAws_restJson1DeleteScheduleCommand;
const serializeAws_restJson1DescribeDatasetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/datasets/{Name}";
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
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeDatasetCommand = serializeAws_restJson1DescribeDatasetCommand;
const serializeAws_restJson1DescribeJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/jobs/{Name}";
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
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeJobCommand = serializeAws_restJson1DescribeJobCommand;
const serializeAws_restJson1DescribeJobRunCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/jobs/{Name}/jobRun/{RunId}";
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
    if (input.RunId !== undefined) {
        const labelValue = input.RunId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RunId.");
        }
        resolvedPath = resolvedPath.replace("{RunId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RunId.");
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
exports.serializeAws_restJson1DescribeJobRunCommand = serializeAws_restJson1DescribeJobRunCommand;
const serializeAws_restJson1DescribeProjectCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/projects/{Name}";
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
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeProjectCommand = serializeAws_restJson1DescribeProjectCommand;
const serializeAws_restJson1DescribeRecipeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/recipes/{Name}";
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
    const query = {
        ...(input.RecipeVersion !== undefined && { recipeVersion: input.RecipeVersion }),
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
exports.serializeAws_restJson1DescribeRecipeCommand = serializeAws_restJson1DescribeRecipeCommand;
const serializeAws_restJson1DescribeScheduleCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/schedules/{Name}";
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
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeScheduleCommand = serializeAws_restJson1DescribeScheduleCommand;
const serializeAws_restJson1ListDatasetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/datasets";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListDatasetsCommand = serializeAws_restJson1ListDatasetsCommand;
const serializeAws_restJson1ListJobRunsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/jobs/{Name}/jobRuns";
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
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListJobRunsCommand = serializeAws_restJson1ListJobRunsCommand;
const serializeAws_restJson1ListJobsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/jobs";
    const query = {
        ...(input.DatasetName !== undefined && { datasetName: input.DatasetName }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.ProjectName !== undefined && { projectName: input.ProjectName }),
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
exports.serializeAws_restJson1ListJobsCommand = serializeAws_restJson1ListJobsCommand;
const serializeAws_restJson1ListProjectsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/projects";
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListProjectsCommand = serializeAws_restJson1ListProjectsCommand;
const serializeAws_restJson1ListRecipesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/recipes";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.RecipeVersion !== undefined && { recipeVersion: input.RecipeVersion }),
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
exports.serializeAws_restJson1ListRecipesCommand = serializeAws_restJson1ListRecipesCommand;
const serializeAws_restJson1ListRecipeVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/recipeVersions";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.Name !== undefined && { name: input.Name }),
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
exports.serializeAws_restJson1ListRecipeVersionsCommand = serializeAws_restJson1ListRecipeVersionsCommand;
const serializeAws_restJson1ListSchedulesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/schedules";
    const query = {
        ...(input.JobName !== undefined && { jobName: input.JobName }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListSchedulesCommand = serializeAws_restJson1ListSchedulesCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
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
const serializeAws_restJson1PublishRecipeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/recipes/{Name}/publishRecipe";
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
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
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
exports.serializeAws_restJson1PublishRecipeCommand = serializeAws_restJson1PublishRecipeCommand;
const serializeAws_restJson1SendProjectSessionActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/projects/{Name}/sendProjectSessionAction";
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
    body = JSON.stringify({
        ...(input.ClientSessionId !== undefined &&
            input.ClientSessionId !== null && { ClientSessionId: input.ClientSessionId }),
        ...(input.Preview !== undefined && input.Preview !== null && { Preview: input.Preview }),
        ...(input.RecipeStep !== undefined &&
            input.RecipeStep !== null && { RecipeStep: serializeAws_restJson1RecipeStep(input.RecipeStep, context) }),
        ...(input.StepIndex !== undefined && input.StepIndex !== null && { StepIndex: input.StepIndex }),
        ...(input.ViewFrame !== undefined &&
            input.ViewFrame !== null && { ViewFrame: serializeAws_restJson1ViewFrame(input.ViewFrame, context) }),
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
exports.serializeAws_restJson1SendProjectSessionActionCommand = serializeAws_restJson1SendProjectSessionActionCommand;
const serializeAws_restJson1StartJobRunCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/jobs/{Name}/startJobRun";
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
exports.serializeAws_restJson1StartJobRunCommand = serializeAws_restJson1StartJobRunCommand;
const serializeAws_restJson1StartProjectSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/projects/{Name}/startProjectSession";
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
    body = JSON.stringify({
        ...(input.AssumeControl !== undefined && input.AssumeControl !== null && { AssumeControl: input.AssumeControl }),
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
exports.serializeAws_restJson1StartProjectSessionCommand = serializeAws_restJson1StartProjectSessionCommand;
const serializeAws_restJson1StopJobRunCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/jobs/{Name}/jobRun/{RunId}/stopJobRun";
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
    if (input.RunId !== undefined) {
        const labelValue = input.RunId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RunId.");
        }
        resolvedPath = resolvedPath.replace("{RunId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RunId.");
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
exports.serializeAws_restJson1StopJobRunCommand = serializeAws_restJson1StopJobRunCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    const query = {
        ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
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
const serializeAws_restJson1UpdateDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/datasets/{Name}";
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
    body = JSON.stringify({
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.FormatOptions !== undefined &&
            input.FormatOptions !== null && {
            FormatOptions: serializeAws_restJson1FormatOptions(input.FormatOptions, context),
        }),
        ...(input.Input !== undefined &&
            input.Input !== null && { Input: serializeAws_restJson1Input(input.Input, context) }),
        ...(input.PathOptions !== undefined &&
            input.PathOptions !== null && { PathOptions: serializeAws_restJson1PathOptions(input.PathOptions, context) }),
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
exports.serializeAws_restJson1UpdateDatasetCommand = serializeAws_restJson1UpdateDatasetCommand;
const serializeAws_restJson1UpdateProfileJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/profileJobs/{Name}";
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
    body = JSON.stringify({
        ...(input.EncryptionKeyArn !== undefined &&
            input.EncryptionKeyArn !== null && { EncryptionKeyArn: input.EncryptionKeyArn }),
        ...(input.EncryptionMode !== undefined &&
            input.EncryptionMode !== null && { EncryptionMode: input.EncryptionMode }),
        ...(input.JobSample !== undefined &&
            input.JobSample !== null && { JobSample: serializeAws_restJson1JobSample(input.JobSample, context) }),
        ...(input.LogSubscription !== undefined &&
            input.LogSubscription !== null && { LogSubscription: input.LogSubscription }),
        ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
        ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
        ...(input.OutputLocation !== undefined &&
            input.OutputLocation !== null && {
            OutputLocation: serializeAws_restJson1S3Location(input.OutputLocation, context),
        }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
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
exports.serializeAws_restJson1UpdateProfileJobCommand = serializeAws_restJson1UpdateProfileJobCommand;
const serializeAws_restJson1UpdateProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/projects/{Name}";
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
    body = JSON.stringify({
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.Sample !== undefined &&
            input.Sample !== null && { Sample: serializeAws_restJson1Sample(input.Sample, context) }),
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
exports.serializeAws_restJson1UpdateProjectCommand = serializeAws_restJson1UpdateProjectCommand;
const serializeAws_restJson1UpdateRecipeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/recipes/{Name}";
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
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Steps !== undefined &&
            input.Steps !== null && { Steps: serializeAws_restJson1RecipeStepList(input.Steps, context) }),
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
exports.serializeAws_restJson1UpdateRecipeCommand = serializeAws_restJson1UpdateRecipeCommand;
const serializeAws_restJson1UpdateRecipeJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/recipeJobs/{Name}";
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
    body = JSON.stringify({
        ...(input.EncryptionKeyArn !== undefined &&
            input.EncryptionKeyArn !== null && { EncryptionKeyArn: input.EncryptionKeyArn }),
        ...(input.EncryptionMode !== undefined &&
            input.EncryptionMode !== null && { EncryptionMode: input.EncryptionMode }),
        ...(input.LogSubscription !== undefined &&
            input.LogSubscription !== null && { LogSubscription: input.LogSubscription }),
        ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
        ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
        ...(input.Outputs !== undefined &&
            input.Outputs !== null && { Outputs: serializeAws_restJson1OutputList(input.Outputs, context) }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
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
exports.serializeAws_restJson1UpdateRecipeJobCommand = serializeAws_restJson1UpdateRecipeJobCommand;
const serializeAws_restJson1UpdateScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/schedules/{Name}";
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
    body = JSON.stringify({
        ...(input.CronExpression !== undefined &&
            input.CronExpression !== null && { CronExpression: input.CronExpression }),
        ...(input.JobNames !== undefined &&
            input.JobNames !== null && { JobNames: serializeAws_restJson1JobNameList(input.JobNames, context) }),
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
exports.serializeAws_restJson1UpdateScheduleCommand = serializeAws_restJson1UpdateScheduleCommand;
const deserializeAws_restJson1BatchDeleteRecipeVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchDeleteRecipeVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Errors: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Errors !== undefined && data.Errors !== null) {
        contents.Errors = deserializeAws_restJson1RecipeErrorList(data.Errors, context);
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchDeleteRecipeVersionCommand = deserializeAws_restJson1BatchDeleteRecipeVersionCommand;
const deserializeAws_restJson1BatchDeleteRecipeVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1CreateDatasetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDatasetCommand = deserializeAws_restJson1CreateDatasetCommand;
const deserializeAws_restJson1CreateDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.databrew#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.databrew#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1CreateProfileJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateProfileJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateProfileJobCommand = deserializeAws_restJson1CreateProfileJobCommand;
const deserializeAws_restJson1CreateProfileJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.databrew#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.databrew#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1CreateProjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateProjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateProjectCommand = deserializeAws_restJson1CreateProjectCommand;
const deserializeAws_restJson1CreateProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.databrew#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.databrew#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1CreateRecipeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRecipeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRecipeCommand = deserializeAws_restJson1CreateRecipeCommand;
const deserializeAws_restJson1CreateRecipeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.databrew#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1CreateRecipeJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRecipeJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRecipeJobCommand = deserializeAws_restJson1CreateRecipeJobCommand;
const deserializeAws_restJson1CreateRecipeJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.databrew#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.databrew#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1CreateScheduleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateScheduleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateScheduleCommand = deserializeAws_restJson1CreateScheduleCommand;
const deserializeAws_restJson1CreateScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.databrew#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1DeleteDatasetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDatasetCommand = deserializeAws_restJson1DeleteDatasetCommand;
const deserializeAws_restJson1DeleteDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1DeleteJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteJobCommand = deserializeAws_restJson1DeleteJobCommand;
const deserializeAws_restJson1DeleteJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1DeleteProjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteProjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteProjectCommand = deserializeAws_restJson1DeleteProjectCommand;
const deserializeAws_restJson1DeleteProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1DeleteRecipeVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRecipeVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
        RecipeVersion: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.RecipeVersion !== undefined && data.RecipeVersion !== null) {
        contents.RecipeVersion = data.RecipeVersion;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRecipeVersionCommand = deserializeAws_restJson1DeleteRecipeVersionCommand;
const deserializeAws_restJson1DeleteRecipeVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1DeleteScheduleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteScheduleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteScheduleCommand = deserializeAws_restJson1DeleteScheduleCommand;
const deserializeAws_restJson1DeleteScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1DescribeDatasetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateDate: undefined,
        CreatedBy: undefined,
        Format: undefined,
        FormatOptions: undefined,
        Input: undefined,
        LastModifiedBy: undefined,
        LastModifiedDate: undefined,
        Name: undefined,
        PathOptions: undefined,
        ResourceArn: undefined,
        Source: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreateDate !== undefined && data.CreateDate !== null) {
        contents.CreateDate = new Date(Math.round(data.CreateDate * 1000));
    }
    if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
        contents.CreatedBy = data.CreatedBy;
    }
    if (data.Format !== undefined && data.Format !== null) {
        contents.Format = data.Format;
    }
    if (data.FormatOptions !== undefined && data.FormatOptions !== null) {
        contents.FormatOptions = deserializeAws_restJson1FormatOptions(data.FormatOptions, context);
    }
    if (data.Input !== undefined && data.Input !== null) {
        contents.Input = deserializeAws_restJson1Input(data.Input, context);
    }
    if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
        contents.LastModifiedBy = data.LastModifiedBy;
    }
    if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(data.LastModifiedDate * 1000));
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.PathOptions !== undefined && data.PathOptions !== null) {
        contents.PathOptions = deserializeAws_restJson1PathOptions(data.PathOptions, context);
    }
    if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
        contents.ResourceArn = data.ResourceArn;
    }
    if (data.Source !== undefined && data.Source !== null) {
        contents.Source = data.Source;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDatasetCommand = deserializeAws_restJson1DescribeDatasetCommand;
const deserializeAws_restJson1DescribeDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1DescribeJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateDate: undefined,
        CreatedBy: undefined,
        DatasetName: undefined,
        EncryptionKeyArn: undefined,
        EncryptionMode: undefined,
        JobSample: undefined,
        LastModifiedBy: undefined,
        LastModifiedDate: undefined,
        LogSubscription: undefined,
        MaxCapacity: undefined,
        MaxRetries: undefined,
        Name: undefined,
        Outputs: undefined,
        ProjectName: undefined,
        RecipeReference: undefined,
        ResourceArn: undefined,
        RoleArn: undefined,
        Tags: undefined,
        Timeout: undefined,
        Type: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreateDate !== undefined && data.CreateDate !== null) {
        contents.CreateDate = new Date(Math.round(data.CreateDate * 1000));
    }
    if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
        contents.CreatedBy = data.CreatedBy;
    }
    if (data.DatasetName !== undefined && data.DatasetName !== null) {
        contents.DatasetName = data.DatasetName;
    }
    if (data.EncryptionKeyArn !== undefined && data.EncryptionKeyArn !== null) {
        contents.EncryptionKeyArn = data.EncryptionKeyArn;
    }
    if (data.EncryptionMode !== undefined && data.EncryptionMode !== null) {
        contents.EncryptionMode = data.EncryptionMode;
    }
    if (data.JobSample !== undefined && data.JobSample !== null) {
        contents.JobSample = deserializeAws_restJson1JobSample(data.JobSample, context);
    }
    if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
        contents.LastModifiedBy = data.LastModifiedBy;
    }
    if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(data.LastModifiedDate * 1000));
    }
    if (data.LogSubscription !== undefined && data.LogSubscription !== null) {
        contents.LogSubscription = data.LogSubscription;
    }
    if (data.MaxCapacity !== undefined && data.MaxCapacity !== null) {
        contents.MaxCapacity = data.MaxCapacity;
    }
    if (data.MaxRetries !== undefined && data.MaxRetries !== null) {
        contents.MaxRetries = data.MaxRetries;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.Outputs !== undefined && data.Outputs !== null) {
        contents.Outputs = deserializeAws_restJson1OutputList(data.Outputs, context);
    }
    if (data.ProjectName !== undefined && data.ProjectName !== null) {
        contents.ProjectName = data.ProjectName;
    }
    if (data.RecipeReference !== undefined && data.RecipeReference !== null) {
        contents.RecipeReference = deserializeAws_restJson1RecipeReference(data.RecipeReference, context);
    }
    if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
        contents.ResourceArn = data.ResourceArn;
    }
    if (data.RoleArn !== undefined && data.RoleArn !== null) {
        contents.RoleArn = data.RoleArn;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.Timeout !== undefined && data.Timeout !== null) {
        contents.Timeout = data.Timeout;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeJobCommand = deserializeAws_restJson1DescribeJobCommand;
const deserializeAws_restJson1DescribeJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1DescribeJobRunCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeJobRunCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Attempt: undefined,
        CompletedOn: undefined,
        DatasetName: undefined,
        ErrorMessage: undefined,
        ExecutionTime: undefined,
        JobName: undefined,
        JobSample: undefined,
        LogGroupName: undefined,
        LogSubscription: undefined,
        Outputs: undefined,
        RecipeReference: undefined,
        RunId: undefined,
        StartedBy: undefined,
        StartedOn: undefined,
        State: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Attempt !== undefined && data.Attempt !== null) {
        contents.Attempt = data.Attempt;
    }
    if (data.CompletedOn !== undefined && data.CompletedOn !== null) {
        contents.CompletedOn = new Date(Math.round(data.CompletedOn * 1000));
    }
    if (data.DatasetName !== undefined && data.DatasetName !== null) {
        contents.DatasetName = data.DatasetName;
    }
    if (data.ErrorMessage !== undefined && data.ErrorMessage !== null) {
        contents.ErrorMessage = data.ErrorMessage;
    }
    if (data.ExecutionTime !== undefined && data.ExecutionTime !== null) {
        contents.ExecutionTime = data.ExecutionTime;
    }
    if (data.JobName !== undefined && data.JobName !== null) {
        contents.JobName = data.JobName;
    }
    if (data.JobSample !== undefined && data.JobSample !== null) {
        contents.JobSample = deserializeAws_restJson1JobSample(data.JobSample, context);
    }
    if (data.LogGroupName !== undefined && data.LogGroupName !== null) {
        contents.LogGroupName = data.LogGroupName;
    }
    if (data.LogSubscription !== undefined && data.LogSubscription !== null) {
        contents.LogSubscription = data.LogSubscription;
    }
    if (data.Outputs !== undefined && data.Outputs !== null) {
        contents.Outputs = deserializeAws_restJson1OutputList(data.Outputs, context);
    }
    if (data.RecipeReference !== undefined && data.RecipeReference !== null) {
        contents.RecipeReference = deserializeAws_restJson1RecipeReference(data.RecipeReference, context);
    }
    if (data.RunId !== undefined && data.RunId !== null) {
        contents.RunId = data.RunId;
    }
    if (data.StartedBy !== undefined && data.StartedBy !== null) {
        contents.StartedBy = data.StartedBy;
    }
    if (data.StartedOn !== undefined && data.StartedOn !== null) {
        contents.StartedOn = new Date(Math.round(data.StartedOn * 1000));
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeJobRunCommand = deserializeAws_restJson1DescribeJobRunCommand;
const deserializeAws_restJson1DescribeJobRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1DescribeProjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeProjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateDate: undefined,
        CreatedBy: undefined,
        DatasetName: undefined,
        LastModifiedBy: undefined,
        LastModifiedDate: undefined,
        Name: undefined,
        OpenDate: undefined,
        OpenedBy: undefined,
        RecipeName: undefined,
        ResourceArn: undefined,
        RoleArn: undefined,
        Sample: undefined,
        SessionStatus: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreateDate !== undefined && data.CreateDate !== null) {
        contents.CreateDate = new Date(Math.round(data.CreateDate * 1000));
    }
    if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
        contents.CreatedBy = data.CreatedBy;
    }
    if (data.DatasetName !== undefined && data.DatasetName !== null) {
        contents.DatasetName = data.DatasetName;
    }
    if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
        contents.LastModifiedBy = data.LastModifiedBy;
    }
    if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(data.LastModifiedDate * 1000));
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.OpenDate !== undefined && data.OpenDate !== null) {
        contents.OpenDate = new Date(Math.round(data.OpenDate * 1000));
    }
    if (data.OpenedBy !== undefined && data.OpenedBy !== null) {
        contents.OpenedBy = data.OpenedBy;
    }
    if (data.RecipeName !== undefined && data.RecipeName !== null) {
        contents.RecipeName = data.RecipeName;
    }
    if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
        contents.ResourceArn = data.ResourceArn;
    }
    if (data.RoleArn !== undefined && data.RoleArn !== null) {
        contents.RoleArn = data.RoleArn;
    }
    if (data.Sample !== undefined && data.Sample !== null) {
        contents.Sample = deserializeAws_restJson1Sample(data.Sample, context);
    }
    if (data.SessionStatus !== undefined && data.SessionStatus !== null) {
        contents.SessionStatus = data.SessionStatus;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeProjectCommand = deserializeAws_restJson1DescribeProjectCommand;
const deserializeAws_restJson1DescribeProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1DescribeRecipeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeRecipeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateDate: undefined,
        CreatedBy: undefined,
        Description: undefined,
        LastModifiedBy: undefined,
        LastModifiedDate: undefined,
        Name: undefined,
        ProjectName: undefined,
        PublishedBy: undefined,
        PublishedDate: undefined,
        RecipeVersion: undefined,
        ResourceArn: undefined,
        Steps: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreateDate !== undefined && data.CreateDate !== null) {
        contents.CreateDate = new Date(Math.round(data.CreateDate * 1000));
    }
    if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
        contents.CreatedBy = data.CreatedBy;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
        contents.LastModifiedBy = data.LastModifiedBy;
    }
    if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(data.LastModifiedDate * 1000));
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.ProjectName !== undefined && data.ProjectName !== null) {
        contents.ProjectName = data.ProjectName;
    }
    if (data.PublishedBy !== undefined && data.PublishedBy !== null) {
        contents.PublishedBy = data.PublishedBy;
    }
    if (data.PublishedDate !== undefined && data.PublishedDate !== null) {
        contents.PublishedDate = new Date(Math.round(data.PublishedDate * 1000));
    }
    if (data.RecipeVersion !== undefined && data.RecipeVersion !== null) {
        contents.RecipeVersion = data.RecipeVersion;
    }
    if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
        contents.ResourceArn = data.ResourceArn;
    }
    if (data.Steps !== undefined && data.Steps !== null) {
        contents.Steps = deserializeAws_restJson1RecipeStepList(data.Steps, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRecipeCommand = deserializeAws_restJson1DescribeRecipeCommand;
const deserializeAws_restJson1DescribeRecipeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1DescribeScheduleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeScheduleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateDate: undefined,
        CreatedBy: undefined,
        CronExpression: undefined,
        JobNames: undefined,
        LastModifiedBy: undefined,
        LastModifiedDate: undefined,
        Name: undefined,
        ResourceArn: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreateDate !== undefined && data.CreateDate !== null) {
        contents.CreateDate = new Date(Math.round(data.CreateDate * 1000));
    }
    if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
        contents.CreatedBy = data.CreatedBy;
    }
    if (data.CronExpression !== undefined && data.CronExpression !== null) {
        contents.CronExpression = data.CronExpression;
    }
    if (data.JobNames !== undefined && data.JobNames !== null) {
        contents.JobNames = deserializeAws_restJson1JobNameList(data.JobNames, context);
    }
    if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
        contents.LastModifiedBy = data.LastModifiedBy;
    }
    if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(data.LastModifiedDate * 1000));
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
        contents.ResourceArn = data.ResourceArn;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeScheduleCommand = deserializeAws_restJson1DescribeScheduleCommand;
const deserializeAws_restJson1DescribeScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1ListDatasetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDatasetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Datasets: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Datasets !== undefined && data.Datasets !== null) {
        contents.Datasets = deserializeAws_restJson1DatasetList(data.Datasets, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDatasetsCommand = deserializeAws_restJson1ListDatasetsCommand;
const deserializeAws_restJson1ListDatasetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1ListJobRunsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListJobRunsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JobRuns: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.JobRuns !== undefined && data.JobRuns !== null) {
        contents.JobRuns = deserializeAws_restJson1JobRunList(data.JobRuns, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListJobRunsCommand = deserializeAws_restJson1ListJobRunsCommand;
const deserializeAws_restJson1ListJobRunsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1ListJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Jobs: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Jobs !== undefined && data.Jobs !== null) {
        contents.Jobs = deserializeAws_restJson1JobList(data.Jobs, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListJobsCommand = deserializeAws_restJson1ListJobsCommand;
const deserializeAws_restJson1ListJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1ListProjectsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProjectsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Projects: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Projects !== undefined && data.Projects !== null) {
        contents.Projects = deserializeAws_restJson1ProjectList(data.Projects, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProjectsCommand = deserializeAws_restJson1ListProjectsCommand;
const deserializeAws_restJson1ListProjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1ListRecipesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRecipesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Recipes: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Recipes !== undefined && data.Recipes !== null) {
        contents.Recipes = deserializeAws_restJson1RecipeList(data.Recipes, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRecipesCommand = deserializeAws_restJson1ListRecipesCommand;
const deserializeAws_restJson1ListRecipesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1ListRecipeVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRecipeVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Recipes: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Recipes !== undefined && data.Recipes !== null) {
        contents.Recipes = deserializeAws_restJson1RecipeList(data.Recipes, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRecipeVersionsCommand = deserializeAws_restJson1ListRecipeVersionsCommand;
const deserializeAws_restJson1ListRecipeVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1ListSchedulesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSchedulesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Schedules: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Schedules !== undefined && data.Schedules !== null) {
        contents.Schedules = deserializeAws_restJson1ScheduleList(data.Schedules, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSchedulesCommand = deserializeAws_restJson1ListSchedulesCommand;
const deserializeAws_restJson1ListSchedulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
        case "com.amazonaws.databrew#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1PublishRecipeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PublishRecipeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PublishRecipeCommand = deserializeAws_restJson1PublishRecipeCommand;
const deserializeAws_restJson1PublishRecipeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.databrew#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1SendProjectSessionActionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SendProjectSessionActionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ActionId: undefined,
        Name: undefined,
        Result: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ActionId !== undefined && data.ActionId !== null) {
        contents.ActionId = data.ActionId;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.Result !== undefined && data.Result !== null) {
        contents.Result = data.Result;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SendProjectSessionActionCommand = deserializeAws_restJson1SendProjectSessionActionCommand;
const deserializeAws_restJson1SendProjectSessionActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1StartJobRunCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartJobRunCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RunId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RunId !== undefined && data.RunId !== null) {
        contents.RunId = data.RunId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartJobRunCommand = deserializeAws_restJson1StartJobRunCommand;
const deserializeAws_restJson1StartJobRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.databrew#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1StartProjectSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartProjectSessionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ClientSessionId: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ClientSessionId !== undefined && data.ClientSessionId !== null) {
        contents.ClientSessionId = data.ClientSessionId;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartProjectSessionCommand = deserializeAws_restJson1StartProjectSessionCommand;
const deserializeAws_restJson1StartProjectSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.databrew#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.databrew#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1StopJobRunCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopJobRunCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RunId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RunId !== undefined && data.RunId !== null) {
        contents.RunId = data.RunId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopJobRunCommand = deserializeAws_restJson1StopJobRunCommand;
const deserializeAws_restJson1StopJobRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
        case "InternalServerException":
        case "com.amazonaws.databrew#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
        case "InternalServerException":
        case "com.amazonaws.databrew#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1UpdateDatasetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDatasetCommand = deserializeAws_restJson1UpdateDatasetCommand;
const deserializeAws_restJson1UpdateDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.databrew#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1UpdateProfileJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateProfileJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateProfileJobCommand = deserializeAws_restJson1UpdateProfileJobCommand;
const deserializeAws_restJson1UpdateProfileJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.databrew#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1UpdateProjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateProjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LastModifiedDate: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(data.LastModifiedDate * 1000));
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateProjectCommand = deserializeAws_restJson1UpdateProjectCommand;
const deserializeAws_restJson1UpdateProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1UpdateRecipeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRecipeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRecipeCommand = deserializeAws_restJson1UpdateRecipeCommand;
const deserializeAws_restJson1UpdateRecipeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1UpdateRecipeJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRecipeJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRecipeJobCommand = deserializeAws_restJson1UpdateRecipeJobCommand;
const deserializeAws_restJson1UpdateRecipeJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.databrew#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
const deserializeAws_restJson1UpdateScheduleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateScheduleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateScheduleCommand = deserializeAws_restJson1UpdateScheduleCommand;
const deserializeAws_restJson1UpdateScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.databrew#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.databrew#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.databrew#ValidationException":
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
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const serializeAws_restJson1ColumnNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ConditionExpression = (input, context) => {
    return {
        ...(input.Condition !== undefined && input.Condition !== null && { Condition: input.Condition }),
        ...(input.TargetColumn !== undefined && input.TargetColumn !== null && { TargetColumn: input.TargetColumn }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1ConditionExpressionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ConditionExpression(entry, context);
    });
};
const serializeAws_restJson1CsvOptions = (input, context) => {
    return {
        ...(input.Delimiter !== undefined && input.Delimiter !== null && { Delimiter: input.Delimiter }),
        ...(input.HeaderRow !== undefined && input.HeaderRow !== null && { HeaderRow: input.HeaderRow }),
    };
};
const serializeAws_restJson1CsvOutputOptions = (input, context) => {
    return {
        ...(input.Delimiter !== undefined && input.Delimiter !== null && { Delimiter: input.Delimiter }),
    };
};
const serializeAws_restJson1DatabaseInputDefinition = (input, context) => {
    return {
        ...(input.DatabaseTableName !== undefined &&
            input.DatabaseTableName !== null && { DatabaseTableName: input.DatabaseTableName }),
        ...(input.GlueConnectionName !== undefined &&
            input.GlueConnectionName !== null && { GlueConnectionName: input.GlueConnectionName }),
        ...(input.TempDirectory !== undefined &&
            input.TempDirectory !== null && {
            TempDirectory: serializeAws_restJson1S3Location(input.TempDirectory, context),
        }),
    };
};
const serializeAws_restJson1DataCatalogInputDefinition = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.TempDirectory !== undefined &&
            input.TempDirectory !== null && {
            TempDirectory: serializeAws_restJson1S3Location(input.TempDirectory, context),
        }),
    };
};
const serializeAws_restJson1DatasetParameter = (input, context) => {
    return {
        ...(input.CreateColumn !== undefined && input.CreateColumn !== null && { CreateColumn: input.CreateColumn }),
        ...(input.DatetimeOptions !== undefined &&
            input.DatetimeOptions !== null && {
            DatetimeOptions: serializeAws_restJson1DatetimeOptions(input.DatetimeOptions, context),
        }),
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_restJson1FilterExpression(input.Filter, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1DatetimeOptions = (input, context) => {
    return {
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.LocaleCode !== undefined && input.LocaleCode !== null && { LocaleCode: input.LocaleCode }),
        ...(input.TimezoneOffset !== undefined &&
            input.TimezoneOffset !== null && { TimezoneOffset: input.TimezoneOffset }),
    };
};
const serializeAws_restJson1ExcelOptions = (input, context) => {
    return {
        ...(input.HeaderRow !== undefined && input.HeaderRow !== null && { HeaderRow: input.HeaderRow }),
        ...(input.SheetIndexes !== undefined &&
            input.SheetIndexes !== null && {
            SheetIndexes: serializeAws_restJson1SheetIndexList(input.SheetIndexes, context),
        }),
        ...(input.SheetNames !== undefined &&
            input.SheetNames !== null && { SheetNames: serializeAws_restJson1SheetNameList(input.SheetNames, context) }),
    };
};
const serializeAws_restJson1FilesLimit = (input, context) => {
    return {
        ...(input.MaxFiles !== undefined && input.MaxFiles !== null && { MaxFiles: input.MaxFiles }),
        ...(input.Order !== undefined && input.Order !== null && { Order: input.Order }),
        ...(input.OrderedBy !== undefined && input.OrderedBy !== null && { OrderedBy: input.OrderedBy }),
    };
};
const serializeAws_restJson1FilterExpression = (input, context) => {
    return {
        ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
        ...(input.ValuesMap !== undefined &&
            input.ValuesMap !== null && { ValuesMap: serializeAws_restJson1ValuesMap(input.ValuesMap, context) }),
    };
};
const serializeAws_restJson1FormatOptions = (input, context) => {
    return {
        ...(input.Csv !== undefined && input.Csv !== null && { Csv: serializeAws_restJson1CsvOptions(input.Csv, context) }),
        ...(input.Excel !== undefined &&
            input.Excel !== null && { Excel: serializeAws_restJson1ExcelOptions(input.Excel, context) }),
        ...(input.Json !== undefined &&
            input.Json !== null && { Json: serializeAws_restJson1JsonOptions(input.Json, context) }),
    };
};
const serializeAws_restJson1HiddenColumnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Input = (input, context) => {
    return {
        ...(input.DataCatalogInputDefinition !== undefined &&
            input.DataCatalogInputDefinition !== null && {
            DataCatalogInputDefinition: serializeAws_restJson1DataCatalogInputDefinition(input.DataCatalogInputDefinition, context),
        }),
        ...(input.DatabaseInputDefinition !== undefined &&
            input.DatabaseInputDefinition !== null && {
            DatabaseInputDefinition: serializeAws_restJson1DatabaseInputDefinition(input.DatabaseInputDefinition, context),
        }),
        ...(input.S3InputDefinition !== undefined &&
            input.S3InputDefinition !== null && {
            S3InputDefinition: serializeAws_restJson1S3Location(input.S3InputDefinition, context),
        }),
    };
};
const serializeAws_restJson1JobNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1JobSample = (input, context) => {
    return {
        ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
        ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
    };
};
const serializeAws_restJson1JsonOptions = (input, context) => {
    return {
        ...(input.MultiLine !== undefined && input.MultiLine !== null && { MultiLine: input.MultiLine }),
    };
};
const serializeAws_restJson1Output = (input, context) => {
    return {
        ...(input.CompressionFormat !== undefined &&
            input.CompressionFormat !== null && { CompressionFormat: input.CompressionFormat }),
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.FormatOptions !== undefined &&
            input.FormatOptions !== null && {
            FormatOptions: serializeAws_restJson1OutputFormatOptions(input.FormatOptions, context),
        }),
        ...(input.Location !== undefined &&
            input.Location !== null && { Location: serializeAws_restJson1S3Location(input.Location, context) }),
        ...(input.Overwrite !== undefined && input.Overwrite !== null && { Overwrite: input.Overwrite }),
        ...(input.PartitionColumns !== undefined &&
            input.PartitionColumns !== null && {
            PartitionColumns: serializeAws_restJson1ColumnNameList(input.PartitionColumns, context),
        }),
    };
};
const serializeAws_restJson1OutputFormatOptions = (input, context) => {
    return {
        ...(input.Csv !== undefined &&
            input.Csv !== null && { Csv: serializeAws_restJson1CsvOutputOptions(input.Csv, context) }),
    };
};
const serializeAws_restJson1OutputList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Output(entry, context);
    });
};
const serializeAws_restJson1ParameterMap = (input, context) => {
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
const serializeAws_restJson1PathOptions = (input, context) => {
    return {
        ...(input.FilesLimit !== undefined &&
            input.FilesLimit !== null && { FilesLimit: serializeAws_restJson1FilesLimit(input.FilesLimit, context) }),
        ...(input.LastModifiedDateCondition !== undefined &&
            input.LastModifiedDateCondition !== null && {
            LastModifiedDateCondition: serializeAws_restJson1FilterExpression(input.LastModifiedDateCondition, context),
        }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_restJson1PathParametersMap(input.Parameters, context) }),
    };
};
const serializeAws_restJson1PathParametersMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1DatasetParameter(value, context),
        };
    }, {});
};
const serializeAws_restJson1RecipeAction = (input, context) => {
    return {
        ...(input.Operation !== undefined && input.Operation !== null && { Operation: input.Operation }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_restJson1ParameterMap(input.Parameters, context) }),
    };
};
const serializeAws_restJson1RecipeReference = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RecipeVersion !== undefined && input.RecipeVersion !== null && { RecipeVersion: input.RecipeVersion }),
    };
};
const serializeAws_restJson1RecipeStep = (input, context) => {
    return {
        ...(input.Action !== undefined &&
            input.Action !== null && { Action: serializeAws_restJson1RecipeAction(input.Action, context) }),
        ...(input.ConditionExpressions !== undefined &&
            input.ConditionExpressions !== null && {
            ConditionExpressions: serializeAws_restJson1ConditionExpressionList(input.ConditionExpressions, context),
        }),
    };
};
const serializeAws_restJson1RecipeStepList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RecipeStep(entry, context);
    });
};
const serializeAws_restJson1RecipeVersionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1S3Location = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    };
};
const serializeAws_restJson1Sample = (input, context) => {
    return {
        ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1SheetIndexList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SheetNameList = (input, context) => {
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
const serializeAws_restJson1ValuesMap = (input, context) => {
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
const serializeAws_restJson1ViewFrame = (input, context) => {
    return {
        ...(input.ColumnRange !== undefined && input.ColumnRange !== null && { ColumnRange: input.ColumnRange }),
        ...(input.HiddenColumns !== undefined &&
            input.HiddenColumns !== null && {
            HiddenColumns: serializeAws_restJson1HiddenColumnList(input.HiddenColumns, context),
        }),
        ...(input.StartColumnIndex !== undefined &&
            input.StartColumnIndex !== null && { StartColumnIndex: input.StartColumnIndex }),
    };
};
const deserializeAws_restJson1ColumnNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ConditionExpression = (output, context) => {
    return {
        Condition: output.Condition !== undefined && output.Condition !== null ? output.Condition : undefined,
        TargetColumn: output.TargetColumn !== undefined && output.TargetColumn !== null ? output.TargetColumn : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1ConditionExpressionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ConditionExpression(entry, context);
    });
};
const deserializeAws_restJson1CsvOptions = (output, context) => {
    return {
        Delimiter: output.Delimiter !== undefined && output.Delimiter !== null ? output.Delimiter : undefined,
        HeaderRow: output.HeaderRow !== undefined && output.HeaderRow !== null ? output.HeaderRow : undefined,
    };
};
const deserializeAws_restJson1CsvOutputOptions = (output, context) => {
    return {
        Delimiter: output.Delimiter !== undefined && output.Delimiter !== null ? output.Delimiter : undefined,
    };
};
const deserializeAws_restJson1DatabaseInputDefinition = (output, context) => {
    return {
        DatabaseTableName: output.DatabaseTableName !== undefined && output.DatabaseTableName !== null
            ? output.DatabaseTableName
            : undefined,
        GlueConnectionName: output.GlueConnectionName !== undefined && output.GlueConnectionName !== null
            ? output.GlueConnectionName
            : undefined,
        TempDirectory: output.TempDirectory !== undefined && output.TempDirectory !== null
            ? deserializeAws_restJson1S3Location(output.TempDirectory, context)
            : undefined,
    };
};
const deserializeAws_restJson1DataCatalogInputDefinition = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        TempDirectory: output.TempDirectory !== undefined && output.TempDirectory !== null
            ? deserializeAws_restJson1S3Location(output.TempDirectory, context)
            : undefined,
    };
};
const deserializeAws_restJson1Dataset = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null
            ? new Date(Math.round(output.CreateDate * 1000))
            : undefined,
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        FormatOptions: output.FormatOptions !== undefined && output.FormatOptions !== null
            ? deserializeAws_restJson1FormatOptions(output.FormatOptions, context)
            : undefined,
        Input: output.Input !== undefined && output.Input !== null
            ? deserializeAws_restJson1Input(output.Input, context)
            : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PathOptions: output.PathOptions !== undefined && output.PathOptions !== null
            ? deserializeAws_restJson1PathOptions(output.PathOptions, context)
            : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        Source: output.Source !== undefined && output.Source !== null ? output.Source : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1DatasetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Dataset(entry, context);
    });
};
const deserializeAws_restJson1DatasetParameter = (output, context) => {
    return {
        CreateColumn: output.CreateColumn !== undefined && output.CreateColumn !== null ? output.CreateColumn : undefined,
        DatetimeOptions: output.DatetimeOptions !== undefined && output.DatetimeOptions !== null
            ? deserializeAws_restJson1DatetimeOptions(output.DatetimeOptions, context)
            : undefined,
        Filter: output.Filter !== undefined && output.Filter !== null
            ? deserializeAws_restJson1FilterExpression(output.Filter, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1DatetimeOptions = (output, context) => {
    return {
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        LocaleCode: output.LocaleCode !== undefined && output.LocaleCode !== null ? output.LocaleCode : undefined,
        TimezoneOffset: output.TimezoneOffset !== undefined && output.TimezoneOffset !== null ? output.TimezoneOffset : undefined,
    };
};
const deserializeAws_restJson1ExcelOptions = (output, context) => {
    return {
        HeaderRow: output.HeaderRow !== undefined && output.HeaderRow !== null ? output.HeaderRow : undefined,
        SheetIndexes: output.SheetIndexes !== undefined && output.SheetIndexes !== null
            ? deserializeAws_restJson1SheetIndexList(output.SheetIndexes, context)
            : undefined,
        SheetNames: output.SheetNames !== undefined && output.SheetNames !== null
            ? deserializeAws_restJson1SheetNameList(output.SheetNames, context)
            : undefined,
    };
};
const deserializeAws_restJson1FilesLimit = (output, context) => {
    return {
        MaxFiles: output.MaxFiles !== undefined && output.MaxFiles !== null ? output.MaxFiles : undefined,
        Order: output.Order !== undefined && output.Order !== null ? output.Order : undefined,
        OrderedBy: output.OrderedBy !== undefined && output.OrderedBy !== null ? output.OrderedBy : undefined,
    };
};
const deserializeAws_restJson1FilterExpression = (output, context) => {
    return {
        Expression: output.Expression !== undefined && output.Expression !== null ? output.Expression : undefined,
        ValuesMap: output.ValuesMap !== undefined && output.ValuesMap !== null
            ? deserializeAws_restJson1ValuesMap(output.ValuesMap, context)
            : undefined,
    };
};
const deserializeAws_restJson1FormatOptions = (output, context) => {
    return {
        Csv: output.Csv !== undefined && output.Csv !== null
            ? deserializeAws_restJson1CsvOptions(output.Csv, context)
            : undefined,
        Excel: output.Excel !== undefined && output.Excel !== null
            ? deserializeAws_restJson1ExcelOptions(output.Excel, context)
            : undefined,
        Json: output.Json !== undefined && output.Json !== null
            ? deserializeAws_restJson1JsonOptions(output.Json, context)
            : undefined,
    };
};
const deserializeAws_restJson1Input = (output, context) => {
    return {
        DataCatalogInputDefinition: output.DataCatalogInputDefinition !== undefined && output.DataCatalogInputDefinition !== null
            ? deserializeAws_restJson1DataCatalogInputDefinition(output.DataCatalogInputDefinition, context)
            : undefined,
        DatabaseInputDefinition: output.DatabaseInputDefinition !== undefined && output.DatabaseInputDefinition !== null
            ? deserializeAws_restJson1DatabaseInputDefinition(output.DatabaseInputDefinition, context)
            : undefined,
        S3InputDefinition: output.S3InputDefinition !== undefined && output.S3InputDefinition !== null
            ? deserializeAws_restJson1S3Location(output.S3InputDefinition, context)
            : undefined,
    };
};
const deserializeAws_restJson1Job = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null
            ? new Date(Math.round(output.CreateDate * 1000))
            : undefined,
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
        DatasetName: output.DatasetName !== undefined && output.DatasetName !== null ? output.DatasetName : undefined,
        EncryptionKeyArn: output.EncryptionKeyArn !== undefined && output.EncryptionKeyArn !== null ? output.EncryptionKeyArn : undefined,
        EncryptionMode: output.EncryptionMode !== undefined && output.EncryptionMode !== null ? output.EncryptionMode : undefined,
        JobSample: output.JobSample !== undefined && output.JobSample !== null
            ? deserializeAws_restJson1JobSample(output.JobSample, context)
            : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        LogSubscription: output.LogSubscription !== undefined && output.LogSubscription !== null ? output.LogSubscription : undefined,
        MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
        MaxRetries: output.MaxRetries !== undefined && output.MaxRetries !== null ? output.MaxRetries : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Outputs: output.Outputs !== undefined && output.Outputs !== null
            ? deserializeAws_restJson1OutputList(output.Outputs, context)
            : undefined,
        ProjectName: output.ProjectName !== undefined && output.ProjectName !== null ? output.ProjectName : undefined,
        RecipeReference: output.RecipeReference !== undefined && output.RecipeReference !== null
            ? deserializeAws_restJson1RecipeReference(output.RecipeReference, context)
            : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
        Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1JobList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Job(entry, context);
    });
};
const deserializeAws_restJson1JobNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1JobRun = (output, context) => {
    return {
        Attempt: output.Attempt !== undefined && output.Attempt !== null ? output.Attempt : undefined,
        CompletedOn: output.CompletedOn !== undefined && output.CompletedOn !== null
            ? new Date(Math.round(output.CompletedOn * 1000))
            : undefined,
        DatasetName: output.DatasetName !== undefined && output.DatasetName !== null ? output.DatasetName : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        ExecutionTime: output.ExecutionTime !== undefined && output.ExecutionTime !== null ? output.ExecutionTime : undefined,
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        JobSample: output.JobSample !== undefined && output.JobSample !== null
            ? deserializeAws_restJson1JobSample(output.JobSample, context)
            : undefined,
        LogGroupName: output.LogGroupName !== undefined && output.LogGroupName !== null ? output.LogGroupName : undefined,
        LogSubscription: output.LogSubscription !== undefined && output.LogSubscription !== null ? output.LogSubscription : undefined,
        Outputs: output.Outputs !== undefined && output.Outputs !== null
            ? deserializeAws_restJson1OutputList(output.Outputs, context)
            : undefined,
        RecipeReference: output.RecipeReference !== undefined && output.RecipeReference !== null
            ? deserializeAws_restJson1RecipeReference(output.RecipeReference, context)
            : undefined,
        RunId: output.RunId !== undefined && output.RunId !== null ? output.RunId : undefined,
        StartedBy: output.StartedBy !== undefined && output.StartedBy !== null ? output.StartedBy : undefined,
        StartedOn: output.StartedOn !== undefined && output.StartedOn !== null
            ? new Date(Math.round(output.StartedOn * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_restJson1JobRunList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobRun(entry, context);
    });
};
const deserializeAws_restJson1JobSample = (output, context) => {
    return {
        Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
    };
};
const deserializeAws_restJson1JsonOptions = (output, context) => {
    return {
        MultiLine: output.MultiLine !== undefined && output.MultiLine !== null ? output.MultiLine : undefined,
    };
};
const deserializeAws_restJson1Output = (output, context) => {
    return {
        CompressionFormat: output.CompressionFormat !== undefined && output.CompressionFormat !== null
            ? output.CompressionFormat
            : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        FormatOptions: output.FormatOptions !== undefined && output.FormatOptions !== null
            ? deserializeAws_restJson1OutputFormatOptions(output.FormatOptions, context)
            : undefined,
        Location: output.Location !== undefined && output.Location !== null
            ? deserializeAws_restJson1S3Location(output.Location, context)
            : undefined,
        Overwrite: output.Overwrite !== undefined && output.Overwrite !== null ? output.Overwrite : undefined,
        PartitionColumns: output.PartitionColumns !== undefined && output.PartitionColumns !== null
            ? deserializeAws_restJson1ColumnNameList(output.PartitionColumns, context)
            : undefined,
    };
};
const deserializeAws_restJson1OutputFormatOptions = (output, context) => {
    return {
        Csv: output.Csv !== undefined && output.Csv !== null
            ? deserializeAws_restJson1CsvOutputOptions(output.Csv, context)
            : undefined,
    };
};
const deserializeAws_restJson1OutputList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Output(entry, context);
    });
};
const deserializeAws_restJson1ParameterMap = (output, context) => {
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
const deserializeAws_restJson1PathOptions = (output, context) => {
    return {
        FilesLimit: output.FilesLimit !== undefined && output.FilesLimit !== null
            ? deserializeAws_restJson1FilesLimit(output.FilesLimit, context)
            : undefined,
        LastModifiedDateCondition: output.LastModifiedDateCondition !== undefined && output.LastModifiedDateCondition !== null
            ? deserializeAws_restJson1FilterExpression(output.LastModifiedDateCondition, context)
            : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_restJson1PathParametersMap(output.Parameters, context)
            : undefined,
    };
};
const deserializeAws_restJson1PathParametersMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1DatasetParameter(value, context),
        };
    }, {});
};
const deserializeAws_restJson1Project = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null
            ? new Date(Math.round(output.CreateDate * 1000))
            : undefined,
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
        DatasetName: output.DatasetName !== undefined && output.DatasetName !== null ? output.DatasetName : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OpenDate: output.OpenDate !== undefined && output.OpenDate !== null
            ? new Date(Math.round(output.OpenDate * 1000))
            : undefined,
        OpenedBy: output.OpenedBy !== undefined && output.OpenedBy !== null ? output.OpenedBy : undefined,
        RecipeName: output.RecipeName !== undefined && output.RecipeName !== null ? output.RecipeName : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        Sample: output.Sample !== undefined && output.Sample !== null
            ? deserializeAws_restJson1Sample(output.Sample, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ProjectList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Project(entry, context);
    });
};
const deserializeAws_restJson1Recipe = (output, context) => {
    return {
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null
            ? new Date(Math.round(output.CreateDate * 1000))
            : undefined,
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ProjectName: output.ProjectName !== undefined && output.ProjectName !== null ? output.ProjectName : undefined,
        PublishedBy: output.PublishedBy !== undefined && output.PublishedBy !== null ? output.PublishedBy : undefined,
        PublishedDate: output.PublishedDate !== undefined && output.PublishedDate !== null
            ? new Date(Math.round(output.PublishedDate * 1000))
            : undefined,
        RecipeVersion: output.RecipeVersion !== undefined && output.RecipeVersion !== null ? output.RecipeVersion : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        Steps: output.Steps !== undefined && output.Steps !== null
            ? deserializeAws_restJson1RecipeStepList(output.Steps, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1RecipeAction = (output, context) => {
    return {
        Operation: output.Operation !== undefined && output.Operation !== null ? output.Operation : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_restJson1ParameterMap(output.Parameters, context)
            : undefined,
    };
};
const deserializeAws_restJson1RecipeErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecipeVersionErrorDetail(entry, context);
    });
};
const deserializeAws_restJson1RecipeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Recipe(entry, context);
    });
};
const deserializeAws_restJson1RecipeReference = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RecipeVersion: output.RecipeVersion !== undefined && output.RecipeVersion !== null ? output.RecipeVersion : undefined,
    };
};
const deserializeAws_restJson1RecipeStep = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null
            ? deserializeAws_restJson1RecipeAction(output.Action, context)
            : undefined,
        ConditionExpressions: output.ConditionExpressions !== undefined && output.ConditionExpressions !== null
            ? deserializeAws_restJson1ConditionExpressionList(output.ConditionExpressions, context)
            : undefined,
    };
};
const deserializeAws_restJson1RecipeStepList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecipeStep(entry, context);
    });
};
const deserializeAws_restJson1RecipeVersionErrorDetail = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        RecipeVersion: output.RecipeVersion !== undefined && output.RecipeVersion !== null ? output.RecipeVersion : undefined,
    };
};
const deserializeAws_restJson1S3Location = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
const deserializeAws_restJson1Sample = (output, context) => {
    return {
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1Schedule = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null
            ? new Date(Math.round(output.CreateDate * 1000))
            : undefined,
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
        CronExpression: output.CronExpression !== undefined && output.CronExpression !== null ? output.CronExpression : undefined,
        JobNames: output.JobNames !== undefined && output.JobNames !== null
            ? deserializeAws_restJson1JobNameList(output.JobNames, context)
            : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ScheduleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Schedule(entry, context);
    });
};
const deserializeAws_restJson1SheetIndexList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SheetNameList = (output, context) => {
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
const deserializeAws_restJson1ValuesMap = (output, context) => {
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