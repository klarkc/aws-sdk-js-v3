"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1DeleteTableVersionCommand = exports.serializeAws_json1_1DeleteTableCommand = exports.serializeAws_json1_1DeleteSecurityConfigurationCommand = exports.serializeAws_json1_1DeleteSchemaVersionsCommand = exports.serializeAws_json1_1DeleteSchemaCommand = exports.serializeAws_json1_1DeleteResourcePolicyCommand = exports.serializeAws_json1_1DeleteRegistryCommand = exports.serializeAws_json1_1DeletePartitionIndexCommand = exports.serializeAws_json1_1DeletePartitionCommand = exports.serializeAws_json1_1DeleteMLTransformCommand = exports.serializeAws_json1_1DeleteJobCommand = exports.serializeAws_json1_1DeleteDevEndpointCommand = exports.serializeAws_json1_1DeleteDatabaseCommand = exports.serializeAws_json1_1DeleteCrawlerCommand = exports.serializeAws_json1_1DeleteConnectionCommand = exports.serializeAws_json1_1DeleteColumnStatisticsForTableCommand = exports.serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand = exports.serializeAws_json1_1DeleteClassifierCommand = exports.serializeAws_json1_1CreateWorkflowCommand = exports.serializeAws_json1_1CreateUserDefinedFunctionCommand = exports.serializeAws_json1_1CreateTriggerCommand = exports.serializeAws_json1_1CreateTableCommand = exports.serializeAws_json1_1CreateSecurityConfigurationCommand = exports.serializeAws_json1_1CreateScriptCommand = exports.serializeAws_json1_1CreateSchemaCommand = exports.serializeAws_json1_1CreateRegistryCommand = exports.serializeAws_json1_1CreatePartitionIndexCommand = exports.serializeAws_json1_1CreatePartitionCommand = exports.serializeAws_json1_1CreateMLTransformCommand = exports.serializeAws_json1_1CreateJobCommand = exports.serializeAws_json1_1CreateDevEndpointCommand = exports.serializeAws_json1_1CreateDatabaseCommand = exports.serializeAws_json1_1CreateCrawlerCommand = exports.serializeAws_json1_1CreateConnectionCommand = exports.serializeAws_json1_1CreateClassifierCommand = exports.serializeAws_json1_1CheckSchemaVersionValidityCommand = exports.serializeAws_json1_1CancelMLTaskRunCommand = exports.serializeAws_json1_1BatchUpdatePartitionCommand = exports.serializeAws_json1_1BatchStopJobRunCommand = exports.serializeAws_json1_1BatchGetWorkflowsCommand = exports.serializeAws_json1_1BatchGetTriggersCommand = exports.serializeAws_json1_1BatchGetPartitionCommand = exports.serializeAws_json1_1BatchGetJobsCommand = exports.serializeAws_json1_1BatchGetDevEndpointsCommand = exports.serializeAws_json1_1BatchGetCrawlersCommand = exports.serializeAws_json1_1BatchDeleteTableVersionCommand = exports.serializeAws_json1_1BatchDeleteTableCommand = exports.serializeAws_json1_1BatchDeletePartitionCommand = exports.serializeAws_json1_1BatchDeleteConnectionCommand = exports.serializeAws_json1_1BatchCreatePartitionCommand = void 0;
exports.serializeAws_json1_1GetUserDefinedFunctionCommand = exports.serializeAws_json1_1GetTriggersCommand = exports.serializeAws_json1_1GetTriggerCommand = exports.serializeAws_json1_1GetTagsCommand = exports.serializeAws_json1_1GetTableVersionsCommand = exports.serializeAws_json1_1GetTableVersionCommand = exports.serializeAws_json1_1GetTablesCommand = exports.serializeAws_json1_1GetTableCommand = exports.serializeAws_json1_1GetSecurityConfigurationsCommand = exports.serializeAws_json1_1GetSecurityConfigurationCommand = exports.serializeAws_json1_1GetSchemaVersionsDiffCommand = exports.serializeAws_json1_1GetSchemaVersionCommand = exports.serializeAws_json1_1GetSchemaByDefinitionCommand = exports.serializeAws_json1_1GetSchemaCommand = exports.serializeAws_json1_1GetResourcePolicyCommand = exports.serializeAws_json1_1GetResourcePoliciesCommand = exports.serializeAws_json1_1GetRegistryCommand = exports.serializeAws_json1_1GetPlanCommand = exports.serializeAws_json1_1GetPartitionsCommand = exports.serializeAws_json1_1GetPartitionIndexesCommand = exports.serializeAws_json1_1GetPartitionCommand = exports.serializeAws_json1_1GetMLTransformsCommand = exports.serializeAws_json1_1GetMLTransformCommand = exports.serializeAws_json1_1GetMLTaskRunsCommand = exports.serializeAws_json1_1GetMLTaskRunCommand = exports.serializeAws_json1_1GetMappingCommand = exports.serializeAws_json1_1GetJobsCommand = exports.serializeAws_json1_1GetJobRunsCommand = exports.serializeAws_json1_1GetJobRunCommand = exports.serializeAws_json1_1GetJobBookmarkCommand = exports.serializeAws_json1_1GetJobCommand = exports.serializeAws_json1_1GetDevEndpointsCommand = exports.serializeAws_json1_1GetDevEndpointCommand = exports.serializeAws_json1_1GetDataflowGraphCommand = exports.serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand = exports.serializeAws_json1_1GetDatabasesCommand = exports.serializeAws_json1_1GetDatabaseCommand = exports.serializeAws_json1_1GetCrawlersCommand = exports.serializeAws_json1_1GetCrawlerMetricsCommand = exports.serializeAws_json1_1GetCrawlerCommand = exports.serializeAws_json1_1GetConnectionsCommand = exports.serializeAws_json1_1GetConnectionCommand = exports.serializeAws_json1_1GetColumnStatisticsForTableCommand = exports.serializeAws_json1_1GetColumnStatisticsForPartitionCommand = exports.serializeAws_json1_1GetClassifiersCommand = exports.serializeAws_json1_1GetClassifierCommand = exports.serializeAws_json1_1GetCatalogImportStatusCommand = exports.serializeAws_json1_1DeleteWorkflowCommand = exports.serializeAws_json1_1DeleteUserDefinedFunctionCommand = exports.serializeAws_json1_1DeleteTriggerCommand = void 0;
exports.serializeAws_json1_1UpdateMLTransformCommand = exports.serializeAws_json1_1UpdateJobCommand = exports.serializeAws_json1_1UpdateDevEndpointCommand = exports.serializeAws_json1_1UpdateDatabaseCommand = exports.serializeAws_json1_1UpdateCrawlerScheduleCommand = exports.serializeAws_json1_1UpdateCrawlerCommand = exports.serializeAws_json1_1UpdateConnectionCommand = exports.serializeAws_json1_1UpdateColumnStatisticsForTableCommand = exports.serializeAws_json1_1UpdateColumnStatisticsForPartitionCommand = exports.serializeAws_json1_1UpdateClassifierCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopWorkflowRunCommand = exports.serializeAws_json1_1StopTriggerCommand = exports.serializeAws_json1_1StopCrawlerScheduleCommand = exports.serializeAws_json1_1StopCrawlerCommand = exports.serializeAws_json1_1StartWorkflowRunCommand = exports.serializeAws_json1_1StartTriggerCommand = exports.serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand = exports.serializeAws_json1_1StartMLEvaluationTaskRunCommand = exports.serializeAws_json1_1StartJobRunCommand = exports.serializeAws_json1_1StartImportLabelsTaskRunCommand = exports.serializeAws_json1_1StartExportLabelsTaskRunCommand = exports.serializeAws_json1_1StartCrawlerScheduleCommand = exports.serializeAws_json1_1StartCrawlerCommand = exports.serializeAws_json1_1SearchTablesCommand = exports.serializeAws_json1_1ResumeWorkflowRunCommand = exports.serializeAws_json1_1ResetJobBookmarkCommand = exports.serializeAws_json1_1RemoveSchemaVersionMetadataCommand = exports.serializeAws_json1_1RegisterSchemaVersionCommand = exports.serializeAws_json1_1QuerySchemaVersionMetadataCommand = exports.serializeAws_json1_1PutWorkflowRunPropertiesCommand = exports.serializeAws_json1_1PutSchemaVersionMetadataCommand = exports.serializeAws_json1_1PutResourcePolicyCommand = exports.serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand = exports.serializeAws_json1_1ListWorkflowsCommand = exports.serializeAws_json1_1ListTriggersCommand = exports.serializeAws_json1_1ListSchemaVersionsCommand = exports.serializeAws_json1_1ListSchemasCommand = exports.serializeAws_json1_1ListRegistriesCommand = exports.serializeAws_json1_1ListMLTransformsCommand = exports.serializeAws_json1_1ListJobsCommand = exports.serializeAws_json1_1ListDevEndpointsCommand = exports.serializeAws_json1_1ListCrawlersCommand = exports.serializeAws_json1_1ImportCatalogToGlueCommand = exports.serializeAws_json1_1GetWorkflowRunsCommand = exports.serializeAws_json1_1GetWorkflowRunPropertiesCommand = exports.serializeAws_json1_1GetWorkflowRunCommand = exports.serializeAws_json1_1GetWorkflowCommand = exports.serializeAws_json1_1GetUserDefinedFunctionsCommand = void 0;
exports.deserializeAws_json1_1DeletePartitionIndexCommand = exports.deserializeAws_json1_1DeletePartitionCommand = exports.deserializeAws_json1_1DeleteMLTransformCommand = exports.deserializeAws_json1_1DeleteJobCommand = exports.deserializeAws_json1_1DeleteDevEndpointCommand = exports.deserializeAws_json1_1DeleteDatabaseCommand = exports.deserializeAws_json1_1DeleteCrawlerCommand = exports.deserializeAws_json1_1DeleteConnectionCommand = exports.deserializeAws_json1_1DeleteColumnStatisticsForTableCommand = exports.deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand = exports.deserializeAws_json1_1DeleteClassifierCommand = exports.deserializeAws_json1_1CreateWorkflowCommand = exports.deserializeAws_json1_1CreateUserDefinedFunctionCommand = exports.deserializeAws_json1_1CreateTriggerCommand = exports.deserializeAws_json1_1CreateTableCommand = exports.deserializeAws_json1_1CreateSecurityConfigurationCommand = exports.deserializeAws_json1_1CreateScriptCommand = exports.deserializeAws_json1_1CreateSchemaCommand = exports.deserializeAws_json1_1CreateRegistryCommand = exports.deserializeAws_json1_1CreatePartitionIndexCommand = exports.deserializeAws_json1_1CreatePartitionCommand = exports.deserializeAws_json1_1CreateMLTransformCommand = exports.deserializeAws_json1_1CreateJobCommand = exports.deserializeAws_json1_1CreateDevEndpointCommand = exports.deserializeAws_json1_1CreateDatabaseCommand = exports.deserializeAws_json1_1CreateCrawlerCommand = exports.deserializeAws_json1_1CreateConnectionCommand = exports.deserializeAws_json1_1CreateClassifierCommand = exports.deserializeAws_json1_1CheckSchemaVersionValidityCommand = exports.deserializeAws_json1_1CancelMLTaskRunCommand = exports.deserializeAws_json1_1BatchUpdatePartitionCommand = exports.deserializeAws_json1_1BatchStopJobRunCommand = exports.deserializeAws_json1_1BatchGetWorkflowsCommand = exports.deserializeAws_json1_1BatchGetTriggersCommand = exports.deserializeAws_json1_1BatchGetPartitionCommand = exports.deserializeAws_json1_1BatchGetJobsCommand = exports.deserializeAws_json1_1BatchGetDevEndpointsCommand = exports.deserializeAws_json1_1BatchGetCrawlersCommand = exports.deserializeAws_json1_1BatchDeleteTableVersionCommand = exports.deserializeAws_json1_1BatchDeleteTableCommand = exports.deserializeAws_json1_1BatchDeletePartitionCommand = exports.deserializeAws_json1_1BatchDeleteConnectionCommand = exports.deserializeAws_json1_1BatchCreatePartitionCommand = exports.serializeAws_json1_1UpdateWorkflowCommand = exports.serializeAws_json1_1UpdateUserDefinedFunctionCommand = exports.serializeAws_json1_1UpdateTriggerCommand = exports.serializeAws_json1_1UpdateTableCommand = exports.serializeAws_json1_1UpdateSchemaCommand = exports.serializeAws_json1_1UpdateRegistryCommand = exports.serializeAws_json1_1UpdatePartitionCommand = void 0;
exports.deserializeAws_json1_1GetTableCommand = exports.deserializeAws_json1_1GetSecurityConfigurationsCommand = exports.deserializeAws_json1_1GetSecurityConfigurationCommand = exports.deserializeAws_json1_1GetSchemaVersionsDiffCommand = exports.deserializeAws_json1_1GetSchemaVersionCommand = exports.deserializeAws_json1_1GetSchemaByDefinitionCommand = exports.deserializeAws_json1_1GetSchemaCommand = exports.deserializeAws_json1_1GetResourcePolicyCommand = exports.deserializeAws_json1_1GetResourcePoliciesCommand = exports.deserializeAws_json1_1GetRegistryCommand = exports.deserializeAws_json1_1GetPlanCommand = exports.deserializeAws_json1_1GetPartitionsCommand = exports.deserializeAws_json1_1GetPartitionIndexesCommand = exports.deserializeAws_json1_1GetPartitionCommand = exports.deserializeAws_json1_1GetMLTransformsCommand = exports.deserializeAws_json1_1GetMLTransformCommand = exports.deserializeAws_json1_1GetMLTaskRunsCommand = exports.deserializeAws_json1_1GetMLTaskRunCommand = exports.deserializeAws_json1_1GetMappingCommand = exports.deserializeAws_json1_1GetJobsCommand = exports.deserializeAws_json1_1GetJobRunsCommand = exports.deserializeAws_json1_1GetJobRunCommand = exports.deserializeAws_json1_1GetJobBookmarkCommand = exports.deserializeAws_json1_1GetJobCommand = exports.deserializeAws_json1_1GetDevEndpointsCommand = exports.deserializeAws_json1_1GetDevEndpointCommand = exports.deserializeAws_json1_1GetDataflowGraphCommand = exports.deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand = exports.deserializeAws_json1_1GetDatabasesCommand = exports.deserializeAws_json1_1GetDatabaseCommand = exports.deserializeAws_json1_1GetCrawlersCommand = exports.deserializeAws_json1_1GetCrawlerMetricsCommand = exports.deserializeAws_json1_1GetCrawlerCommand = exports.deserializeAws_json1_1GetConnectionsCommand = exports.deserializeAws_json1_1GetConnectionCommand = exports.deserializeAws_json1_1GetColumnStatisticsForTableCommand = exports.deserializeAws_json1_1GetColumnStatisticsForPartitionCommand = exports.deserializeAws_json1_1GetClassifiersCommand = exports.deserializeAws_json1_1GetClassifierCommand = exports.deserializeAws_json1_1GetCatalogImportStatusCommand = exports.deserializeAws_json1_1DeleteWorkflowCommand = exports.deserializeAws_json1_1DeleteUserDefinedFunctionCommand = exports.deserializeAws_json1_1DeleteTriggerCommand = exports.deserializeAws_json1_1DeleteTableVersionCommand = exports.deserializeAws_json1_1DeleteTableCommand = exports.deserializeAws_json1_1DeleteSecurityConfigurationCommand = exports.deserializeAws_json1_1DeleteSchemaVersionsCommand = exports.deserializeAws_json1_1DeleteSchemaCommand = exports.deserializeAws_json1_1DeleteResourcePolicyCommand = exports.deserializeAws_json1_1DeleteRegistryCommand = void 0;
exports.deserializeAws_json1_1UpdateColumnStatisticsForTableCommand = exports.deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommand = exports.deserializeAws_json1_1UpdateClassifierCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopWorkflowRunCommand = exports.deserializeAws_json1_1StopTriggerCommand = exports.deserializeAws_json1_1StopCrawlerScheduleCommand = exports.deserializeAws_json1_1StopCrawlerCommand = exports.deserializeAws_json1_1StartWorkflowRunCommand = exports.deserializeAws_json1_1StartTriggerCommand = exports.deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand = exports.deserializeAws_json1_1StartMLEvaluationTaskRunCommand = exports.deserializeAws_json1_1StartJobRunCommand = exports.deserializeAws_json1_1StartImportLabelsTaskRunCommand = exports.deserializeAws_json1_1StartExportLabelsTaskRunCommand = exports.deserializeAws_json1_1StartCrawlerScheduleCommand = exports.deserializeAws_json1_1StartCrawlerCommand = exports.deserializeAws_json1_1SearchTablesCommand = exports.deserializeAws_json1_1ResumeWorkflowRunCommand = exports.deserializeAws_json1_1ResetJobBookmarkCommand = exports.deserializeAws_json1_1RemoveSchemaVersionMetadataCommand = exports.deserializeAws_json1_1RegisterSchemaVersionCommand = exports.deserializeAws_json1_1QuerySchemaVersionMetadataCommand = exports.deserializeAws_json1_1PutWorkflowRunPropertiesCommand = exports.deserializeAws_json1_1PutSchemaVersionMetadataCommand = exports.deserializeAws_json1_1PutResourcePolicyCommand = exports.deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand = exports.deserializeAws_json1_1ListWorkflowsCommand = exports.deserializeAws_json1_1ListTriggersCommand = exports.deserializeAws_json1_1ListSchemaVersionsCommand = exports.deserializeAws_json1_1ListSchemasCommand = exports.deserializeAws_json1_1ListRegistriesCommand = exports.deserializeAws_json1_1ListMLTransformsCommand = exports.deserializeAws_json1_1ListJobsCommand = exports.deserializeAws_json1_1ListDevEndpointsCommand = exports.deserializeAws_json1_1ListCrawlersCommand = exports.deserializeAws_json1_1ImportCatalogToGlueCommand = exports.deserializeAws_json1_1GetWorkflowRunsCommand = exports.deserializeAws_json1_1GetWorkflowRunPropertiesCommand = exports.deserializeAws_json1_1GetWorkflowRunCommand = exports.deserializeAws_json1_1GetWorkflowCommand = exports.deserializeAws_json1_1GetUserDefinedFunctionsCommand = exports.deserializeAws_json1_1GetUserDefinedFunctionCommand = exports.deserializeAws_json1_1GetTriggersCommand = exports.deserializeAws_json1_1GetTriggerCommand = exports.deserializeAws_json1_1GetTagsCommand = exports.deserializeAws_json1_1GetTableVersionsCommand = exports.deserializeAws_json1_1GetTableVersionCommand = exports.deserializeAws_json1_1GetTablesCommand = void 0;
exports.deserializeAws_json1_1UpdateWorkflowCommand = exports.deserializeAws_json1_1UpdateUserDefinedFunctionCommand = exports.deserializeAws_json1_1UpdateTriggerCommand = exports.deserializeAws_json1_1UpdateTableCommand = exports.deserializeAws_json1_1UpdateSchemaCommand = exports.deserializeAws_json1_1UpdateRegistryCommand = exports.deserializeAws_json1_1UpdatePartitionCommand = exports.deserializeAws_json1_1UpdateMLTransformCommand = exports.deserializeAws_json1_1UpdateJobCommand = exports.deserializeAws_json1_1UpdateDevEndpointCommand = exports.deserializeAws_json1_1UpdateDatabaseCommand = exports.deserializeAws_json1_1UpdateCrawlerScheduleCommand = exports.deserializeAws_json1_1UpdateCrawlerCommand = exports.deserializeAws_json1_1UpdateConnectionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1BatchCreatePartitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchCreatePartition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchCreatePartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchCreatePartitionCommand = serializeAws_json1_1BatchCreatePartitionCommand;
const serializeAws_json1_1BatchDeleteConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchDeleteConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchDeleteConnectionCommand = serializeAws_json1_1BatchDeleteConnectionCommand;
const serializeAws_json1_1BatchDeletePartitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchDeletePartition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeletePartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchDeletePartitionCommand = serializeAws_json1_1BatchDeletePartitionCommand;
const serializeAws_json1_1BatchDeleteTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchDeleteTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchDeleteTableCommand = serializeAws_json1_1BatchDeleteTableCommand;
const serializeAws_json1_1BatchDeleteTableVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchDeleteTableVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteTableVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchDeleteTableVersionCommand = serializeAws_json1_1BatchDeleteTableVersionCommand;
const serializeAws_json1_1BatchGetCrawlersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchGetCrawlers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetCrawlersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetCrawlersCommand = serializeAws_json1_1BatchGetCrawlersCommand;
const serializeAws_json1_1BatchGetDevEndpointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchGetDevEndpoints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetDevEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetDevEndpointsCommand = serializeAws_json1_1BatchGetDevEndpointsCommand;
const serializeAws_json1_1BatchGetJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchGetJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetJobsCommand = serializeAws_json1_1BatchGetJobsCommand;
const serializeAws_json1_1BatchGetPartitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchGetPartition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetPartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetPartitionCommand = serializeAws_json1_1BatchGetPartitionCommand;
const serializeAws_json1_1BatchGetTriggersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchGetTriggers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetTriggersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetTriggersCommand = serializeAws_json1_1BatchGetTriggersCommand;
const serializeAws_json1_1BatchGetWorkflowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchGetWorkflows",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetWorkflowsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetWorkflowsCommand = serializeAws_json1_1BatchGetWorkflowsCommand;
const serializeAws_json1_1BatchStopJobRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchStopJobRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchStopJobRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchStopJobRunCommand = serializeAws_json1_1BatchStopJobRunCommand;
const serializeAws_json1_1BatchUpdatePartitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.BatchUpdatePartition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchUpdatePartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchUpdatePartitionCommand = serializeAws_json1_1BatchUpdatePartitionCommand;
const serializeAws_json1_1CancelMLTaskRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CancelMLTaskRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelMLTaskRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelMLTaskRunCommand = serializeAws_json1_1CancelMLTaskRunCommand;
const serializeAws_json1_1CheckSchemaVersionValidityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CheckSchemaVersionValidity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CheckSchemaVersionValidityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CheckSchemaVersionValidityCommand = serializeAws_json1_1CheckSchemaVersionValidityCommand;
const serializeAws_json1_1CreateClassifierCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateClassifier",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateClassifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateClassifierCommand = serializeAws_json1_1CreateClassifierCommand;
const serializeAws_json1_1CreateConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateConnectionCommand = serializeAws_json1_1CreateConnectionCommand;
const serializeAws_json1_1CreateCrawlerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateCrawler",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCrawlerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCrawlerCommand = serializeAws_json1_1CreateCrawlerCommand;
const serializeAws_json1_1CreateDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDatabaseCommand = serializeAws_json1_1CreateDatabaseCommand;
const serializeAws_json1_1CreateDevEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateDevEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDevEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDevEndpointCommand = serializeAws_json1_1CreateDevEndpointCommand;
const serializeAws_json1_1CreateJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateJobCommand = serializeAws_json1_1CreateJobCommand;
const serializeAws_json1_1CreateMLTransformCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateMLTransform",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMLTransformRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateMLTransformCommand = serializeAws_json1_1CreateMLTransformCommand;
const serializeAws_json1_1CreatePartitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreatePartition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePartitionCommand = serializeAws_json1_1CreatePartitionCommand;
const serializeAws_json1_1CreatePartitionIndexCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreatePartitionIndex",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePartitionIndexRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePartitionIndexCommand = serializeAws_json1_1CreatePartitionIndexCommand;
const serializeAws_json1_1CreateRegistryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateRegistry",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRegistryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRegistryCommand = serializeAws_json1_1CreateRegistryCommand;
const serializeAws_json1_1CreateSchemaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateSchema",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSchemaInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSchemaCommand = serializeAws_json1_1CreateSchemaCommand;
const serializeAws_json1_1CreateScriptCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateScript",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateScriptRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateScriptCommand = serializeAws_json1_1CreateScriptCommand;
const serializeAws_json1_1CreateSecurityConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateSecurityConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSecurityConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSecurityConfigurationCommand = serializeAws_json1_1CreateSecurityConfigurationCommand;
const serializeAws_json1_1CreateTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTableCommand = serializeAws_json1_1CreateTableCommand;
const serializeAws_json1_1CreateTriggerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateTrigger",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTriggerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTriggerCommand = serializeAws_json1_1CreateTriggerCommand;
const serializeAws_json1_1CreateUserDefinedFunctionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateUserDefinedFunction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserDefinedFunctionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUserDefinedFunctionCommand = serializeAws_json1_1CreateUserDefinedFunctionCommand;
const serializeAws_json1_1CreateWorkflowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.CreateWorkflow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWorkflowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateWorkflowCommand = serializeAws_json1_1CreateWorkflowCommand;
const serializeAws_json1_1DeleteClassifierCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteClassifier",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteClassifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteClassifierCommand = serializeAws_json1_1DeleteClassifierCommand;
const serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteColumnStatisticsForPartition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteColumnStatisticsForPartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand = serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand;
const serializeAws_json1_1DeleteColumnStatisticsForTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteColumnStatisticsForTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteColumnStatisticsForTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteColumnStatisticsForTableCommand = serializeAws_json1_1DeleteColumnStatisticsForTableCommand;
const serializeAws_json1_1DeleteConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteConnectionCommand = serializeAws_json1_1DeleteConnectionCommand;
const serializeAws_json1_1DeleteCrawlerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteCrawler",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCrawlerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCrawlerCommand = serializeAws_json1_1DeleteCrawlerCommand;
const serializeAws_json1_1DeleteDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDatabaseCommand = serializeAws_json1_1DeleteDatabaseCommand;
const serializeAws_json1_1DeleteDevEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteDevEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDevEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDevEndpointCommand = serializeAws_json1_1DeleteDevEndpointCommand;
const serializeAws_json1_1DeleteJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteJobCommand = serializeAws_json1_1DeleteJobCommand;
const serializeAws_json1_1DeleteMLTransformCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteMLTransform",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMLTransformRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteMLTransformCommand = serializeAws_json1_1DeleteMLTransformCommand;
const serializeAws_json1_1DeletePartitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeletePartition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePartitionCommand = serializeAws_json1_1DeletePartitionCommand;
const serializeAws_json1_1DeletePartitionIndexCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeletePartitionIndex",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePartitionIndexRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePartitionIndexCommand = serializeAws_json1_1DeletePartitionIndexCommand;
const serializeAws_json1_1DeleteRegistryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteRegistry",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRegistryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRegistryCommand = serializeAws_json1_1DeleteRegistryCommand;
const serializeAws_json1_1DeleteResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteResourcePolicyCommand = serializeAws_json1_1DeleteResourcePolicyCommand;
const serializeAws_json1_1DeleteSchemaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteSchema",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSchemaInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSchemaCommand = serializeAws_json1_1DeleteSchemaCommand;
const serializeAws_json1_1DeleteSchemaVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteSchemaVersions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSchemaVersionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSchemaVersionsCommand = serializeAws_json1_1DeleteSchemaVersionsCommand;
const serializeAws_json1_1DeleteSecurityConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteSecurityConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSecurityConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSecurityConfigurationCommand = serializeAws_json1_1DeleteSecurityConfigurationCommand;
const serializeAws_json1_1DeleteTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTableCommand = serializeAws_json1_1DeleteTableCommand;
const serializeAws_json1_1DeleteTableVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteTableVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTableVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTableVersionCommand = serializeAws_json1_1DeleteTableVersionCommand;
const serializeAws_json1_1DeleteTriggerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteTrigger",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTriggerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTriggerCommand = serializeAws_json1_1DeleteTriggerCommand;
const serializeAws_json1_1DeleteUserDefinedFunctionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteUserDefinedFunction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserDefinedFunctionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUserDefinedFunctionCommand = serializeAws_json1_1DeleteUserDefinedFunctionCommand;
const serializeAws_json1_1DeleteWorkflowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.DeleteWorkflow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWorkflowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteWorkflowCommand = serializeAws_json1_1DeleteWorkflowCommand;
const serializeAws_json1_1GetCatalogImportStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetCatalogImportStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCatalogImportStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCatalogImportStatusCommand = serializeAws_json1_1GetCatalogImportStatusCommand;
const serializeAws_json1_1GetClassifierCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetClassifier",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetClassifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetClassifierCommand = serializeAws_json1_1GetClassifierCommand;
const serializeAws_json1_1GetClassifiersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetClassifiers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetClassifiersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetClassifiersCommand = serializeAws_json1_1GetClassifiersCommand;
const serializeAws_json1_1GetColumnStatisticsForPartitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetColumnStatisticsForPartition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetColumnStatisticsForPartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetColumnStatisticsForPartitionCommand = serializeAws_json1_1GetColumnStatisticsForPartitionCommand;
const serializeAws_json1_1GetColumnStatisticsForTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetColumnStatisticsForTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetColumnStatisticsForTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetColumnStatisticsForTableCommand = serializeAws_json1_1GetColumnStatisticsForTableCommand;
const serializeAws_json1_1GetConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetConnectionCommand = serializeAws_json1_1GetConnectionCommand;
const serializeAws_json1_1GetConnectionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetConnections",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConnectionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetConnectionsCommand = serializeAws_json1_1GetConnectionsCommand;
const serializeAws_json1_1GetCrawlerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetCrawler",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCrawlerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCrawlerCommand = serializeAws_json1_1GetCrawlerCommand;
const serializeAws_json1_1GetCrawlerMetricsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetCrawlerMetrics",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCrawlerMetricsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCrawlerMetricsCommand = serializeAws_json1_1GetCrawlerMetricsCommand;
const serializeAws_json1_1GetCrawlersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetCrawlers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCrawlersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCrawlersCommand = serializeAws_json1_1GetCrawlersCommand;
const serializeAws_json1_1GetDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDatabaseCommand = serializeAws_json1_1GetDatabaseCommand;
const serializeAws_json1_1GetDatabasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetDatabases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDatabasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDatabasesCommand = serializeAws_json1_1GetDatabasesCommand;
const serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetDataCatalogEncryptionSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDataCatalogEncryptionSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand = serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand;
const serializeAws_json1_1GetDataflowGraphCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetDataflowGraph",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDataflowGraphRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDataflowGraphCommand = serializeAws_json1_1GetDataflowGraphCommand;
const serializeAws_json1_1GetDevEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetDevEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDevEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDevEndpointCommand = serializeAws_json1_1GetDevEndpointCommand;
const serializeAws_json1_1GetDevEndpointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetDevEndpoints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDevEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDevEndpointsCommand = serializeAws_json1_1GetDevEndpointsCommand;
const serializeAws_json1_1GetJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetJobCommand = serializeAws_json1_1GetJobCommand;
const serializeAws_json1_1GetJobBookmarkCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetJobBookmark",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobBookmarkRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetJobBookmarkCommand = serializeAws_json1_1GetJobBookmarkCommand;
const serializeAws_json1_1GetJobRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetJobRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetJobRunCommand = serializeAws_json1_1GetJobRunCommand;
const serializeAws_json1_1GetJobRunsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetJobRuns",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetJobRunsCommand = serializeAws_json1_1GetJobRunsCommand;
const serializeAws_json1_1GetJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetJobsCommand = serializeAws_json1_1GetJobsCommand;
const serializeAws_json1_1GetMappingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetMapping",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMappingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMappingCommand = serializeAws_json1_1GetMappingCommand;
const serializeAws_json1_1GetMLTaskRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetMLTaskRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMLTaskRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMLTaskRunCommand = serializeAws_json1_1GetMLTaskRunCommand;
const serializeAws_json1_1GetMLTaskRunsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetMLTaskRuns",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMLTaskRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMLTaskRunsCommand = serializeAws_json1_1GetMLTaskRunsCommand;
const serializeAws_json1_1GetMLTransformCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetMLTransform",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMLTransformRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMLTransformCommand = serializeAws_json1_1GetMLTransformCommand;
const serializeAws_json1_1GetMLTransformsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetMLTransforms",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMLTransformsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMLTransformsCommand = serializeAws_json1_1GetMLTransformsCommand;
const serializeAws_json1_1GetPartitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetPartition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPartitionCommand = serializeAws_json1_1GetPartitionCommand;
const serializeAws_json1_1GetPartitionIndexesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetPartitionIndexes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPartitionIndexesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPartitionIndexesCommand = serializeAws_json1_1GetPartitionIndexesCommand;
const serializeAws_json1_1GetPartitionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetPartitions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPartitionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPartitionsCommand = serializeAws_json1_1GetPartitionsCommand;
const serializeAws_json1_1GetPlanCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetPlan",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPlanRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPlanCommand = serializeAws_json1_1GetPlanCommand;
const serializeAws_json1_1GetRegistryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetRegistry",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRegistryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRegistryCommand = serializeAws_json1_1GetRegistryCommand;
const serializeAws_json1_1GetResourcePoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetResourcePolicies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourcePoliciesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResourcePoliciesCommand = serializeAws_json1_1GetResourcePoliciesCommand;
const serializeAws_json1_1GetResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResourcePolicyCommand = serializeAws_json1_1GetResourcePolicyCommand;
const serializeAws_json1_1GetSchemaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetSchema",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSchemaInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSchemaCommand = serializeAws_json1_1GetSchemaCommand;
const serializeAws_json1_1GetSchemaByDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetSchemaByDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSchemaByDefinitionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSchemaByDefinitionCommand = serializeAws_json1_1GetSchemaByDefinitionCommand;
const serializeAws_json1_1GetSchemaVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetSchemaVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSchemaVersionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSchemaVersionCommand = serializeAws_json1_1GetSchemaVersionCommand;
const serializeAws_json1_1GetSchemaVersionsDiffCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetSchemaVersionsDiff",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSchemaVersionsDiffInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSchemaVersionsDiffCommand = serializeAws_json1_1GetSchemaVersionsDiffCommand;
const serializeAws_json1_1GetSecurityConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetSecurityConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSecurityConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSecurityConfigurationCommand = serializeAws_json1_1GetSecurityConfigurationCommand;
const serializeAws_json1_1GetSecurityConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetSecurityConfigurations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSecurityConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSecurityConfigurationsCommand = serializeAws_json1_1GetSecurityConfigurationsCommand;
const serializeAws_json1_1GetTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTableCommand = serializeAws_json1_1GetTableCommand;
const serializeAws_json1_1GetTablesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetTables",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTablesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTablesCommand = serializeAws_json1_1GetTablesCommand;
const serializeAws_json1_1GetTableVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetTableVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTableVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTableVersionCommand = serializeAws_json1_1GetTableVersionCommand;
const serializeAws_json1_1GetTableVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetTableVersions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTableVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTableVersionsCommand = serializeAws_json1_1GetTableVersionsCommand;
const serializeAws_json1_1GetTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTagsCommand = serializeAws_json1_1GetTagsCommand;
const serializeAws_json1_1GetTriggerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetTrigger",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTriggerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTriggerCommand = serializeAws_json1_1GetTriggerCommand;
const serializeAws_json1_1GetTriggersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetTriggers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTriggersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTriggersCommand = serializeAws_json1_1GetTriggersCommand;
const serializeAws_json1_1GetUserDefinedFunctionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetUserDefinedFunction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUserDefinedFunctionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetUserDefinedFunctionCommand = serializeAws_json1_1GetUserDefinedFunctionCommand;
const serializeAws_json1_1GetUserDefinedFunctionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetUserDefinedFunctions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUserDefinedFunctionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetUserDefinedFunctionsCommand = serializeAws_json1_1GetUserDefinedFunctionsCommand;
const serializeAws_json1_1GetWorkflowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetWorkflow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWorkflowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetWorkflowCommand = serializeAws_json1_1GetWorkflowCommand;
const serializeAws_json1_1GetWorkflowRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetWorkflowRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWorkflowRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetWorkflowRunCommand = serializeAws_json1_1GetWorkflowRunCommand;
const serializeAws_json1_1GetWorkflowRunPropertiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetWorkflowRunProperties",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWorkflowRunPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetWorkflowRunPropertiesCommand = serializeAws_json1_1GetWorkflowRunPropertiesCommand;
const serializeAws_json1_1GetWorkflowRunsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.GetWorkflowRuns",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWorkflowRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetWorkflowRunsCommand = serializeAws_json1_1GetWorkflowRunsCommand;
const serializeAws_json1_1ImportCatalogToGlueCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.ImportCatalogToGlue",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportCatalogToGlueRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportCatalogToGlueCommand = serializeAws_json1_1ImportCatalogToGlueCommand;
const serializeAws_json1_1ListCrawlersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.ListCrawlers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCrawlersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCrawlersCommand = serializeAws_json1_1ListCrawlersCommand;
const serializeAws_json1_1ListDevEndpointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.ListDevEndpoints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDevEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDevEndpointsCommand = serializeAws_json1_1ListDevEndpointsCommand;
const serializeAws_json1_1ListJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.ListJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListJobsCommand = serializeAws_json1_1ListJobsCommand;
const serializeAws_json1_1ListMLTransformsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.ListMLTransforms",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMLTransformsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListMLTransformsCommand = serializeAws_json1_1ListMLTransformsCommand;
const serializeAws_json1_1ListRegistriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.ListRegistries",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRegistriesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRegistriesCommand = serializeAws_json1_1ListRegistriesCommand;
const serializeAws_json1_1ListSchemasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.ListSchemas",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSchemasInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSchemasCommand = serializeAws_json1_1ListSchemasCommand;
const serializeAws_json1_1ListSchemaVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.ListSchemaVersions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSchemaVersionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSchemaVersionsCommand = serializeAws_json1_1ListSchemaVersionsCommand;
const serializeAws_json1_1ListTriggersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.ListTriggers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTriggersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTriggersCommand = serializeAws_json1_1ListTriggersCommand;
const serializeAws_json1_1ListWorkflowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.ListWorkflows",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWorkflowsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListWorkflowsCommand = serializeAws_json1_1ListWorkflowsCommand;
const serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.PutDataCatalogEncryptionSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDataCatalogEncryptionSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand = serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand;
const serializeAws_json1_1PutResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.PutResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutResourcePolicyCommand = serializeAws_json1_1PutResourcePolicyCommand;
const serializeAws_json1_1PutSchemaVersionMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.PutSchemaVersionMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutSchemaVersionMetadataInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutSchemaVersionMetadataCommand = serializeAws_json1_1PutSchemaVersionMetadataCommand;
const serializeAws_json1_1PutWorkflowRunPropertiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.PutWorkflowRunProperties",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutWorkflowRunPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutWorkflowRunPropertiesCommand = serializeAws_json1_1PutWorkflowRunPropertiesCommand;
const serializeAws_json1_1QuerySchemaVersionMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.QuerySchemaVersionMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1QuerySchemaVersionMetadataInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1QuerySchemaVersionMetadataCommand = serializeAws_json1_1QuerySchemaVersionMetadataCommand;
const serializeAws_json1_1RegisterSchemaVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.RegisterSchemaVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterSchemaVersionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterSchemaVersionCommand = serializeAws_json1_1RegisterSchemaVersionCommand;
const serializeAws_json1_1RemoveSchemaVersionMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.RemoveSchemaVersionMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveSchemaVersionMetadataInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveSchemaVersionMetadataCommand = serializeAws_json1_1RemoveSchemaVersionMetadataCommand;
const serializeAws_json1_1ResetJobBookmarkCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.ResetJobBookmark",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResetJobBookmarkRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResetJobBookmarkCommand = serializeAws_json1_1ResetJobBookmarkCommand;
const serializeAws_json1_1ResumeWorkflowRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.ResumeWorkflowRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResumeWorkflowRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResumeWorkflowRunCommand = serializeAws_json1_1ResumeWorkflowRunCommand;
const serializeAws_json1_1SearchTablesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.SearchTables",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchTablesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchTablesCommand = serializeAws_json1_1SearchTablesCommand;
const serializeAws_json1_1StartCrawlerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StartCrawler",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartCrawlerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartCrawlerCommand = serializeAws_json1_1StartCrawlerCommand;
const serializeAws_json1_1StartCrawlerScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StartCrawlerSchedule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartCrawlerScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartCrawlerScheduleCommand = serializeAws_json1_1StartCrawlerScheduleCommand;
const serializeAws_json1_1StartExportLabelsTaskRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StartExportLabelsTaskRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartExportLabelsTaskRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartExportLabelsTaskRunCommand = serializeAws_json1_1StartExportLabelsTaskRunCommand;
const serializeAws_json1_1StartImportLabelsTaskRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StartImportLabelsTaskRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartImportLabelsTaskRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartImportLabelsTaskRunCommand = serializeAws_json1_1StartImportLabelsTaskRunCommand;
const serializeAws_json1_1StartJobRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StartJobRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartJobRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartJobRunCommand = serializeAws_json1_1StartJobRunCommand;
const serializeAws_json1_1StartMLEvaluationTaskRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StartMLEvaluationTaskRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMLEvaluationTaskRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartMLEvaluationTaskRunCommand = serializeAws_json1_1StartMLEvaluationTaskRunCommand;
const serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StartMLLabelingSetGenerationTaskRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMLLabelingSetGenerationTaskRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand = serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand;
const serializeAws_json1_1StartTriggerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StartTrigger",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartTriggerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartTriggerCommand = serializeAws_json1_1StartTriggerCommand;
const serializeAws_json1_1StartWorkflowRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StartWorkflowRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartWorkflowRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartWorkflowRunCommand = serializeAws_json1_1StartWorkflowRunCommand;
const serializeAws_json1_1StopCrawlerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StopCrawler",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopCrawlerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopCrawlerCommand = serializeAws_json1_1StopCrawlerCommand;
const serializeAws_json1_1StopCrawlerScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StopCrawlerSchedule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopCrawlerScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopCrawlerScheduleCommand = serializeAws_json1_1StopCrawlerScheduleCommand;
const serializeAws_json1_1StopTriggerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StopTrigger",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopTriggerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopTriggerCommand = serializeAws_json1_1StopTriggerCommand;
const serializeAws_json1_1StopWorkflowRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.StopWorkflowRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopWorkflowRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopWorkflowRunCommand = serializeAws_json1_1StopWorkflowRunCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateClassifierCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateClassifier",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateClassifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateClassifierCommand = serializeAws_json1_1UpdateClassifierCommand;
const serializeAws_json1_1UpdateColumnStatisticsForPartitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateColumnStatisticsForPartition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateColumnStatisticsForPartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateColumnStatisticsForPartitionCommand = serializeAws_json1_1UpdateColumnStatisticsForPartitionCommand;
const serializeAws_json1_1UpdateColumnStatisticsForTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateColumnStatisticsForTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateColumnStatisticsForTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateColumnStatisticsForTableCommand = serializeAws_json1_1UpdateColumnStatisticsForTableCommand;
const serializeAws_json1_1UpdateConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateConnectionCommand = serializeAws_json1_1UpdateConnectionCommand;
const serializeAws_json1_1UpdateCrawlerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateCrawler",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCrawlerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateCrawlerCommand = serializeAws_json1_1UpdateCrawlerCommand;
const serializeAws_json1_1UpdateCrawlerScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateCrawlerSchedule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCrawlerScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateCrawlerScheduleCommand = serializeAws_json1_1UpdateCrawlerScheduleCommand;
const serializeAws_json1_1UpdateDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDatabaseCommand = serializeAws_json1_1UpdateDatabaseCommand;
const serializeAws_json1_1UpdateDevEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateDevEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDevEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDevEndpointCommand = serializeAws_json1_1UpdateDevEndpointCommand;
const serializeAws_json1_1UpdateJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateJobCommand = serializeAws_json1_1UpdateJobCommand;
const serializeAws_json1_1UpdateMLTransformCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateMLTransform",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMLTransformRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateMLTransformCommand = serializeAws_json1_1UpdateMLTransformCommand;
const serializeAws_json1_1UpdatePartitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdatePartition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePartitionCommand = serializeAws_json1_1UpdatePartitionCommand;
const serializeAws_json1_1UpdateRegistryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateRegistry",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRegistryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRegistryCommand = serializeAws_json1_1UpdateRegistryCommand;
const serializeAws_json1_1UpdateSchemaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateSchema",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSchemaInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSchemaCommand = serializeAws_json1_1UpdateSchemaCommand;
const serializeAws_json1_1UpdateTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateTableCommand = serializeAws_json1_1UpdateTableCommand;
const serializeAws_json1_1UpdateTriggerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateTrigger",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTriggerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateTriggerCommand = serializeAws_json1_1UpdateTriggerCommand;
const serializeAws_json1_1UpdateUserDefinedFunctionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateUserDefinedFunction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserDefinedFunctionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateUserDefinedFunctionCommand = serializeAws_json1_1UpdateUserDefinedFunctionCommand;
const serializeAws_json1_1UpdateWorkflowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSGlue.UpdateWorkflow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWorkflowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateWorkflowCommand = serializeAws_json1_1UpdateWorkflowCommand;
const deserializeAws_json1_1BatchCreatePartitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchCreatePartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchCreatePartitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchCreatePartitionCommand = deserializeAws_json1_1BatchCreatePartitionCommand;
const deserializeAws_json1_1BatchCreatePartitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchDeleteConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchDeleteConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchDeleteConnectionCommand = deserializeAws_json1_1BatchDeleteConnectionCommand;
const deserializeAws_json1_1BatchDeleteConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchDeletePartitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchDeletePartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeletePartitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchDeletePartitionCommand = deserializeAws_json1_1BatchDeletePartitionCommand;
const deserializeAws_json1_1BatchDeletePartitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchDeleteTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchDeleteTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteTableResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchDeleteTableCommand = deserializeAws_json1_1BatchDeleteTableCommand;
const deserializeAws_json1_1BatchDeleteTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchDeleteTableVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchDeleteTableVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteTableVersionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchDeleteTableVersionCommand = deserializeAws_json1_1BatchDeleteTableVersionCommand;
const deserializeAws_json1_1BatchDeleteTableVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetCrawlersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetCrawlersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetCrawlersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetCrawlersCommand = deserializeAws_json1_1BatchGetCrawlersCommand;
const deserializeAws_json1_1BatchGetCrawlersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetDevEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetDevEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetDevEndpointsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetDevEndpointsCommand = deserializeAws_json1_1BatchGetDevEndpointsCommand;
const deserializeAws_json1_1BatchGetDevEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetJobsCommand = deserializeAws_json1_1BatchGetJobsCommand;
const deserializeAws_json1_1BatchGetJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetPartitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetPartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetPartitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetPartitionCommand = deserializeAws_json1_1BatchGetPartitionCommand;
const deserializeAws_json1_1BatchGetPartitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetTriggersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetTriggersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetTriggersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetTriggersCommand = deserializeAws_json1_1BatchGetTriggersCommand;
const deserializeAws_json1_1BatchGetTriggersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetWorkflowsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetWorkflowsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetWorkflowsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetWorkflowsCommand = deserializeAws_json1_1BatchGetWorkflowsCommand;
const deserializeAws_json1_1BatchGetWorkflowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchStopJobRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchStopJobRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchStopJobRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchStopJobRunCommand = deserializeAws_json1_1BatchStopJobRunCommand;
const deserializeAws_json1_1BatchStopJobRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchUpdatePartitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchUpdatePartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchUpdatePartitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchUpdatePartitionCommand = deserializeAws_json1_1BatchUpdatePartitionCommand;
const deserializeAws_json1_1BatchUpdatePartitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CancelMLTaskRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelMLTaskRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelMLTaskRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelMLTaskRunCommand = deserializeAws_json1_1CancelMLTaskRunCommand;
const deserializeAws_json1_1CancelMLTaskRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CheckSchemaVersionValidityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CheckSchemaVersionValidityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CheckSchemaVersionValidityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CheckSchemaVersionValidityCommand = deserializeAws_json1_1CheckSchemaVersionValidityCommand;
const deserializeAws_json1_1CheckSchemaVersionValidityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateClassifierCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateClassifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateClassifierResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateClassifierCommand = deserializeAws_json1_1CreateClassifierCommand;
const deserializeAws_json1_1CreateClassifierCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateConnectionCommand = deserializeAws_json1_1CreateConnectionCommand;
const deserializeAws_json1_1CreateConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateCrawlerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCrawlerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCrawlerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCrawlerCommand = deserializeAws_json1_1CreateCrawlerCommand;
const deserializeAws_json1_1CreateCrawlerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDatabaseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDatabaseCommand = deserializeAws_json1_1CreateDatabaseCommand;
const deserializeAws_json1_1CreateDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDevEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDevEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDevEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDevEndpointCommand = deserializeAws_json1_1CreateDevEndpointCommand;
const deserializeAws_json1_1CreateDevEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.glue#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.glue#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateJobCommand = deserializeAws_json1_1CreateJobCommand;
const deserializeAws_json1_1CreateJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.glue#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateMLTransformCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateMLTransformCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMLTransformResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateMLTransformCommand = deserializeAws_json1_1CreateMLTransformCommand;
const deserializeAws_json1_1CreateMLTransformCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.glue#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreatePartitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePartitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePartitionCommand = deserializeAws_json1_1CreatePartitionCommand;
const deserializeAws_json1_1CreatePartitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreatePartitionIndexCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePartitionIndexCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePartitionIndexResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePartitionIndexCommand = deserializeAws_json1_1CreatePartitionIndexCommand;
const deserializeAws_json1_1CreatePartitionIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateRegistryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRegistryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRegistryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRegistryCommand = deserializeAws_json1_1CreateRegistryCommand;
const deserializeAws_json1_1CreateRegistryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateSchemaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSchemaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSchemaCommand = deserializeAws_json1_1CreateSchemaCommand;
const deserializeAws_json1_1CreateSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateScriptCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateScriptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateScriptResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateScriptCommand = deserializeAws_json1_1CreateScriptCommand;
const deserializeAws_json1_1CreateScriptCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateSecurityConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSecurityConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSecurityConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSecurityConfigurationCommand = deserializeAws_json1_1CreateSecurityConfigurationCommand;
const deserializeAws_json1_1CreateSecurityConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTableResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTableCommand = deserializeAws_json1_1CreateTableCommand;
const deserializeAws_json1_1CreateTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateTriggerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTriggerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTriggerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTriggerCommand = deserializeAws_json1_1CreateTriggerCommand;
const deserializeAws_json1_1CreateTriggerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.glue#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUserDefinedFunctionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateUserDefinedFunctionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserDefinedFunctionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUserDefinedFunctionCommand = deserializeAws_json1_1CreateUserDefinedFunctionCommand;
const deserializeAws_json1_1CreateUserDefinedFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateWorkflowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateWorkflowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWorkflowResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateWorkflowCommand = deserializeAws_json1_1CreateWorkflowCommand;
const deserializeAws_json1_1CreateWorkflowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteClassifierCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteClassifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteClassifierResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteClassifierCommand = deserializeAws_json1_1DeleteClassifierCommand;
const deserializeAws_json1_1DeleteClassifierCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteColumnStatisticsForPartitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand = deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand;
const deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteColumnStatisticsForTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteColumnStatisticsForTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteColumnStatisticsForTableResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteColumnStatisticsForTableCommand = deserializeAws_json1_1DeleteColumnStatisticsForTableCommand;
const deserializeAws_json1_1DeleteColumnStatisticsForTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteConnectionCommand = deserializeAws_json1_1DeleteConnectionCommand;
const deserializeAws_json1_1DeleteConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteCrawlerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCrawlerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCrawlerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCrawlerCommand = deserializeAws_json1_1DeleteCrawlerCommand;
const deserializeAws_json1_1DeleteCrawlerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CrawlerRunningException":
        case "com.amazonaws.glue#CrawlerRunningException":
            response = {
                ...(await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SchedulerTransitioningException":
        case "com.amazonaws.glue#SchedulerTransitioningException":
            response = {
                ...(await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDatabaseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDatabaseCommand = deserializeAws_json1_1DeleteDatabaseCommand;
const deserializeAws_json1_1DeleteDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDevEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDevEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDevEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDevEndpointCommand = deserializeAws_json1_1DeleteDevEndpointCommand;
const deserializeAws_json1_1DeleteDevEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteJobCommand = deserializeAws_json1_1DeleteJobCommand;
const deserializeAws_json1_1DeleteJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteMLTransformCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteMLTransformCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMLTransformResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteMLTransformCommand = deserializeAws_json1_1DeleteMLTransformCommand;
const deserializeAws_json1_1DeleteMLTransformCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeletePartitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePartitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePartitionCommand = deserializeAws_json1_1DeletePartitionCommand;
const deserializeAws_json1_1DeletePartitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeletePartitionIndexCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePartitionIndexCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePartitionIndexResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePartitionIndexCommand = deserializeAws_json1_1DeletePartitionIndexCommand;
const deserializeAws_json1_1DeletePartitionIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.glue#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteRegistryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRegistryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRegistryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRegistryCommand = deserializeAws_json1_1DeleteRegistryCommand;
const deserializeAws_json1_1DeleteRegistryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResourcePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteResourcePolicyCommand = deserializeAws_json1_1DeleteResourcePolicyCommand;
const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConditionCheckFailureException":
        case "com.amazonaws.glue#ConditionCheckFailureException":
            response = {
                ...(await deserializeAws_json1_1ConditionCheckFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteSchemaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSchemaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSchemaCommand = deserializeAws_json1_1DeleteSchemaCommand;
const deserializeAws_json1_1DeleteSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteSchemaVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSchemaVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSchemaVersionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSchemaVersionsCommand = deserializeAws_json1_1DeleteSchemaVersionsCommand;
const deserializeAws_json1_1DeleteSchemaVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteSecurityConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSecurityConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSecurityConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSecurityConfigurationCommand = deserializeAws_json1_1DeleteSecurityConfigurationCommand;
const deserializeAws_json1_1DeleteSecurityConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTableResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTableCommand = deserializeAws_json1_1DeleteTableCommand;
const deserializeAws_json1_1DeleteTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteTableVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTableVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTableVersionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTableVersionCommand = deserializeAws_json1_1DeleteTableVersionCommand;
const deserializeAws_json1_1DeleteTableVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteTriggerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTriggerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTriggerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTriggerCommand = deserializeAws_json1_1DeleteTriggerCommand;
const deserializeAws_json1_1DeleteTriggerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteUserDefinedFunctionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteUserDefinedFunctionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUserDefinedFunctionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUserDefinedFunctionCommand = deserializeAws_json1_1DeleteUserDefinedFunctionCommand;
const deserializeAws_json1_1DeleteUserDefinedFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteWorkflowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteWorkflowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWorkflowResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteWorkflowCommand = deserializeAws_json1_1DeleteWorkflowCommand;
const deserializeAws_json1_1DeleteWorkflowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCatalogImportStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCatalogImportStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCatalogImportStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCatalogImportStatusCommand = deserializeAws_json1_1GetCatalogImportStatusCommand;
const deserializeAws_json1_1GetCatalogImportStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetClassifierCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetClassifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetClassifierResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetClassifierCommand = deserializeAws_json1_1GetClassifierCommand;
const deserializeAws_json1_1GetClassifierCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetClassifiersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetClassifiersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetClassifiersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetClassifiersCommand = deserializeAws_json1_1GetClassifiersCommand;
const deserializeAws_json1_1GetClassifiersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetColumnStatisticsForPartitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetColumnStatisticsForPartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetColumnStatisticsForPartitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetColumnStatisticsForPartitionCommand = deserializeAws_json1_1GetColumnStatisticsForPartitionCommand;
const deserializeAws_json1_1GetColumnStatisticsForPartitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetColumnStatisticsForTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetColumnStatisticsForTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetColumnStatisticsForTableResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetColumnStatisticsForTableCommand = deserializeAws_json1_1GetColumnStatisticsForTableCommand;
const deserializeAws_json1_1GetColumnStatisticsForTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetConnectionCommand = deserializeAws_json1_1GetConnectionCommand;
const deserializeAws_json1_1GetConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetConnectionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConnectionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetConnectionsCommand = deserializeAws_json1_1GetConnectionsCommand;
const deserializeAws_json1_1GetConnectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCrawlerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCrawlerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCrawlerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCrawlerCommand = deserializeAws_json1_1GetCrawlerCommand;
const deserializeAws_json1_1GetCrawlerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCrawlerMetricsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCrawlerMetricsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCrawlerMetricsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCrawlerMetricsCommand = deserializeAws_json1_1GetCrawlerMetricsCommand;
const deserializeAws_json1_1GetCrawlerMetricsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCrawlersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCrawlersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCrawlersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCrawlersCommand = deserializeAws_json1_1GetCrawlersCommand;
const deserializeAws_json1_1GetCrawlersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDatabaseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDatabaseCommand = deserializeAws_json1_1GetDatabaseCommand;
const deserializeAws_json1_1GetDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDatabasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDatabasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDatabasesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDatabasesCommand = deserializeAws_json1_1GetDatabasesCommand;
const deserializeAws_json1_1GetDatabasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDataCatalogEncryptionSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand = deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand;
const deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDataflowGraphCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDataflowGraphCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDataflowGraphResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDataflowGraphCommand = deserializeAws_json1_1GetDataflowGraphCommand;
const deserializeAws_json1_1GetDataflowGraphCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDevEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDevEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDevEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDevEndpointCommand = deserializeAws_json1_1GetDevEndpointCommand;
const deserializeAws_json1_1GetDevEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDevEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDevEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDevEndpointsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDevEndpointsCommand = deserializeAws_json1_1GetDevEndpointsCommand;
const deserializeAws_json1_1GetDevEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetJobCommand = deserializeAws_json1_1GetJobCommand;
const deserializeAws_json1_1GetJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetJobBookmarkCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetJobBookmarkCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobBookmarkResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetJobBookmarkCommand = deserializeAws_json1_1GetJobBookmarkCommand;
const deserializeAws_json1_1GetJobBookmarkCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.glue#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetJobRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetJobRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetJobRunCommand = deserializeAws_json1_1GetJobRunCommand;
const deserializeAws_json1_1GetJobRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetJobRunsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetJobRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobRunsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetJobRunsCommand = deserializeAws_json1_1GetJobRunsCommand;
const deserializeAws_json1_1GetJobRunsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetJobsCommand = deserializeAws_json1_1GetJobsCommand;
const deserializeAws_json1_1GetJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMappingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMappingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMappingResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMappingCommand = deserializeAws_json1_1GetMappingCommand;
const deserializeAws_json1_1GetMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMLTaskRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMLTaskRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMLTaskRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMLTaskRunCommand = deserializeAws_json1_1GetMLTaskRunCommand;
const deserializeAws_json1_1GetMLTaskRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMLTaskRunsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMLTaskRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMLTaskRunsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMLTaskRunsCommand = deserializeAws_json1_1GetMLTaskRunsCommand;
const deserializeAws_json1_1GetMLTaskRunsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMLTransformCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMLTransformCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMLTransformResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMLTransformCommand = deserializeAws_json1_1GetMLTransformCommand;
const deserializeAws_json1_1GetMLTransformCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMLTransformsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMLTransformsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMLTransformsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMLTransformsCommand = deserializeAws_json1_1GetMLTransformsCommand;
const deserializeAws_json1_1GetMLTransformsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetPartitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPartitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPartitionCommand = deserializeAws_json1_1GetPartitionCommand;
const deserializeAws_json1_1GetPartitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetPartitionIndexesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPartitionIndexesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPartitionIndexesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPartitionIndexesCommand = deserializeAws_json1_1GetPartitionIndexesCommand;
const deserializeAws_json1_1GetPartitionIndexesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.glue#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetPartitionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPartitionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPartitionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPartitionsCommand = deserializeAws_json1_1GetPartitionsCommand;
const deserializeAws_json1_1GetPartitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetPlanCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPlanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPlanResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPlanCommand = deserializeAws_json1_1GetPlanCommand;
const deserializeAws_json1_1GetPlanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRegistryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRegistryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRegistryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRegistryCommand = deserializeAws_json1_1GetRegistryCommand;
const deserializeAws_json1_1GetRegistryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResourcePoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResourcePoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourcePoliciesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResourcePoliciesCommand = deserializeAws_json1_1GetResourcePoliciesCommand;
const deserializeAws_json1_1GetResourcePoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourcePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResourcePolicyCommand = deserializeAws_json1_1GetResourcePolicyCommand;
const deserializeAws_json1_1GetResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSchemaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSchemaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSchemaCommand = deserializeAws_json1_1GetSchemaCommand;
const deserializeAws_json1_1GetSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSchemaByDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSchemaByDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSchemaByDefinitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSchemaByDefinitionCommand = deserializeAws_json1_1GetSchemaByDefinitionCommand;
const deserializeAws_json1_1GetSchemaByDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSchemaVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSchemaVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSchemaVersionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSchemaVersionCommand = deserializeAws_json1_1GetSchemaVersionCommand;
const deserializeAws_json1_1GetSchemaVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSchemaVersionsDiffCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSchemaVersionsDiffCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSchemaVersionsDiffResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSchemaVersionsDiffCommand = deserializeAws_json1_1GetSchemaVersionsDiffCommand;
const deserializeAws_json1_1GetSchemaVersionsDiffCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSecurityConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSecurityConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSecurityConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSecurityConfigurationCommand = deserializeAws_json1_1GetSecurityConfigurationCommand;
const deserializeAws_json1_1GetSecurityConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSecurityConfigurationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSecurityConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSecurityConfigurationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSecurityConfigurationsCommand = deserializeAws_json1_1GetSecurityConfigurationsCommand;
const deserializeAws_json1_1GetSecurityConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTableResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTableCommand = deserializeAws_json1_1GetTableCommand;
const deserializeAws_json1_1GetTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTablesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTablesCommand = deserializeAws_json1_1GetTablesCommand;
const deserializeAws_json1_1GetTablesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTableVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTableVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTableVersionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTableVersionCommand = deserializeAws_json1_1GetTableVersionCommand;
const deserializeAws_json1_1GetTableVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTableVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTableVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTableVersionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTableVersionsCommand = deserializeAws_json1_1GetTableVersionsCommand;
const deserializeAws_json1_1GetTableVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTagsCommand = deserializeAws_json1_1GetTagsCommand;
const deserializeAws_json1_1GetTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTriggerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTriggerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTriggerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTriggerCommand = deserializeAws_json1_1GetTriggerCommand;
const deserializeAws_json1_1GetTriggerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTriggersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTriggersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTriggersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTriggersCommand = deserializeAws_json1_1GetTriggersCommand;
const deserializeAws_json1_1GetTriggersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetUserDefinedFunctionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetUserDefinedFunctionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUserDefinedFunctionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetUserDefinedFunctionCommand = deserializeAws_json1_1GetUserDefinedFunctionCommand;
const deserializeAws_json1_1GetUserDefinedFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetUserDefinedFunctionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetUserDefinedFunctionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUserDefinedFunctionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetUserDefinedFunctionsCommand = deserializeAws_json1_1GetUserDefinedFunctionsCommand;
const deserializeAws_json1_1GetUserDefinedFunctionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetWorkflowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetWorkflowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWorkflowResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetWorkflowCommand = deserializeAws_json1_1GetWorkflowCommand;
const deserializeAws_json1_1GetWorkflowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetWorkflowRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetWorkflowRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWorkflowRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetWorkflowRunCommand = deserializeAws_json1_1GetWorkflowRunCommand;
const deserializeAws_json1_1GetWorkflowRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetWorkflowRunPropertiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetWorkflowRunPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWorkflowRunPropertiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetWorkflowRunPropertiesCommand = deserializeAws_json1_1GetWorkflowRunPropertiesCommand;
const deserializeAws_json1_1GetWorkflowRunPropertiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetWorkflowRunsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetWorkflowRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWorkflowRunsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetWorkflowRunsCommand = deserializeAws_json1_1GetWorkflowRunsCommand;
const deserializeAws_json1_1GetWorkflowRunsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ImportCatalogToGlueCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ImportCatalogToGlueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportCatalogToGlueResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportCatalogToGlueCommand = deserializeAws_json1_1ImportCatalogToGlueCommand;
const deserializeAws_json1_1ImportCatalogToGlueCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListCrawlersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCrawlersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCrawlersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCrawlersCommand = deserializeAws_json1_1ListCrawlersCommand;
const deserializeAws_json1_1ListCrawlersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDevEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDevEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDevEndpointsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDevEndpointsCommand = deserializeAws_json1_1ListDevEndpointsCommand;
const deserializeAws_json1_1ListDevEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListJobsCommand = deserializeAws_json1_1ListJobsCommand;
const deserializeAws_json1_1ListJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListMLTransformsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListMLTransformsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMLTransformsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListMLTransformsCommand = deserializeAws_json1_1ListMLTransformsCommand;
const deserializeAws_json1_1ListMLTransformsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListRegistriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRegistriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRegistriesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRegistriesCommand = deserializeAws_json1_1ListRegistriesCommand;
const deserializeAws_json1_1ListRegistriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSchemasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSchemasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSchemasResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSchemasCommand = deserializeAws_json1_1ListSchemasCommand;
const deserializeAws_json1_1ListSchemasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSchemaVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSchemaVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSchemaVersionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSchemaVersionsCommand = deserializeAws_json1_1ListSchemaVersionsCommand;
const deserializeAws_json1_1ListSchemaVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTriggersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTriggersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTriggersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTriggersCommand = deserializeAws_json1_1ListTriggersCommand;
const deserializeAws_json1_1ListTriggersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListWorkflowsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListWorkflowsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListWorkflowsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListWorkflowsCommand = deserializeAws_json1_1ListWorkflowsCommand;
const deserializeAws_json1_1ListWorkflowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutDataCatalogEncryptionSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand = deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand;
const deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutResourcePolicyCommand = deserializeAws_json1_1PutResourcePolicyCommand;
const deserializeAws_json1_1PutResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConditionCheckFailureException":
        case "com.amazonaws.glue#ConditionCheckFailureException":
            response = {
                ...(await deserializeAws_json1_1ConditionCheckFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutSchemaVersionMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutSchemaVersionMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutSchemaVersionMetadataResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutSchemaVersionMetadataCommand = deserializeAws_json1_1PutSchemaVersionMetadataCommand;
const deserializeAws_json1_1PutSchemaVersionMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutWorkflowRunPropertiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutWorkflowRunPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutWorkflowRunPropertiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutWorkflowRunPropertiesCommand = deserializeAws_json1_1PutWorkflowRunPropertiesCommand;
const deserializeAws_json1_1PutWorkflowRunPropertiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1QuerySchemaVersionMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1QuerySchemaVersionMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1QuerySchemaVersionMetadataResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1QuerySchemaVersionMetadataCommand = deserializeAws_json1_1QuerySchemaVersionMetadataCommand;
const deserializeAws_json1_1QuerySchemaVersionMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterSchemaVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterSchemaVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterSchemaVersionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterSchemaVersionCommand = deserializeAws_json1_1RegisterSchemaVersionCommand;
const deserializeAws_json1_1RegisterSchemaVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RemoveSchemaVersionMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveSchemaVersionMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveSchemaVersionMetadataResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveSchemaVersionMetadataCommand = deserializeAws_json1_1RemoveSchemaVersionMetadataCommand;
const deserializeAws_json1_1RemoveSchemaVersionMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ResetJobBookmarkCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResetJobBookmarkCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResetJobBookmarkResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResetJobBookmarkCommand = deserializeAws_json1_1ResetJobBookmarkCommand;
const deserializeAws_json1_1ResetJobBookmarkCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ResumeWorkflowRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResumeWorkflowRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResumeWorkflowRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResumeWorkflowRunCommand = deserializeAws_json1_1ResumeWorkflowRunCommand;
const deserializeAws_json1_1ResumeWorkflowRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentRunsExceededException":
        case "com.amazonaws.glue#ConcurrentRunsExceededException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalWorkflowStateException":
        case "com.amazonaws.glue#IllegalWorkflowStateException":
            response = {
                ...(await deserializeAws_json1_1IllegalWorkflowStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SearchTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchTablesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchTablesCommand = deserializeAws_json1_1SearchTablesCommand;
const deserializeAws_json1_1SearchTablesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartCrawlerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartCrawlerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartCrawlerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartCrawlerCommand = deserializeAws_json1_1StartCrawlerCommand;
const deserializeAws_json1_1StartCrawlerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CrawlerRunningException":
        case "com.amazonaws.glue#CrawlerRunningException":
            response = {
                ...(await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartCrawlerScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartCrawlerScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartCrawlerScheduleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartCrawlerScheduleCommand = deserializeAws_json1_1StartCrawlerScheduleCommand;
const deserializeAws_json1_1StartCrawlerScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoScheduleException":
        case "com.amazonaws.glue#NoScheduleException":
            response = {
                ...(await deserializeAws_json1_1NoScheduleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SchedulerRunningException":
        case "com.amazonaws.glue#SchedulerRunningException":
            response = {
                ...(await deserializeAws_json1_1SchedulerRunningExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SchedulerTransitioningException":
        case "com.amazonaws.glue#SchedulerTransitioningException":
            response = {
                ...(await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartExportLabelsTaskRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartExportLabelsTaskRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartExportLabelsTaskRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartExportLabelsTaskRunCommand = deserializeAws_json1_1StartExportLabelsTaskRunCommand;
const deserializeAws_json1_1StartExportLabelsTaskRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartImportLabelsTaskRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartImportLabelsTaskRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartImportLabelsTaskRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartImportLabelsTaskRunCommand = deserializeAws_json1_1StartImportLabelsTaskRunCommand;
const deserializeAws_json1_1StartImportLabelsTaskRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartJobRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartJobRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartJobRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartJobRunCommand = deserializeAws_json1_1StartJobRunCommand;
const deserializeAws_json1_1StartJobRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentRunsExceededException":
        case "com.amazonaws.glue#ConcurrentRunsExceededException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartMLEvaluationTaskRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartMLEvaluationTaskRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartMLEvaluationTaskRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartMLEvaluationTaskRunCommand = deserializeAws_json1_1StartMLEvaluationTaskRunCommand;
const deserializeAws_json1_1StartMLEvaluationTaskRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentRunsExceededException":
        case "com.amazonaws.glue#ConcurrentRunsExceededException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MLTransformNotReadyException":
        case "com.amazonaws.glue#MLTransformNotReadyException":
            response = {
                ...(await deserializeAws_json1_1MLTransformNotReadyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand = deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand;
const deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentRunsExceededException":
        case "com.amazonaws.glue#ConcurrentRunsExceededException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartTriggerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartTriggerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartTriggerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartTriggerCommand = deserializeAws_json1_1StartTriggerCommand;
const deserializeAws_json1_1StartTriggerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentRunsExceededException":
        case "com.amazonaws.glue#ConcurrentRunsExceededException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartWorkflowRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartWorkflowRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartWorkflowRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartWorkflowRunCommand = deserializeAws_json1_1StartWorkflowRunCommand;
const deserializeAws_json1_1StartWorkflowRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentRunsExceededException":
        case "com.amazonaws.glue#ConcurrentRunsExceededException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopCrawlerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopCrawlerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopCrawlerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopCrawlerCommand = deserializeAws_json1_1StopCrawlerCommand;
const deserializeAws_json1_1StopCrawlerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CrawlerNotRunningException":
        case "com.amazonaws.glue#CrawlerNotRunningException":
            response = {
                ...(await deserializeAws_json1_1CrawlerNotRunningExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CrawlerStoppingException":
        case "com.amazonaws.glue#CrawlerStoppingException":
            response = {
                ...(await deserializeAws_json1_1CrawlerStoppingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopCrawlerScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopCrawlerScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopCrawlerScheduleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopCrawlerScheduleCommand = deserializeAws_json1_1StopCrawlerScheduleCommand;
const deserializeAws_json1_1StopCrawlerScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SchedulerNotRunningException":
        case "com.amazonaws.glue#SchedulerNotRunningException":
            response = {
                ...(await deserializeAws_json1_1SchedulerNotRunningExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SchedulerTransitioningException":
        case "com.amazonaws.glue#SchedulerTransitioningException":
            response = {
                ...(await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopTriggerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopTriggerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopTriggerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopTriggerCommand = deserializeAws_json1_1StopTriggerCommand;
const deserializeAws_json1_1StopTriggerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopWorkflowRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopWorkflowRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopWorkflowRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopWorkflowRunCommand = deserializeAws_json1_1StopWorkflowRunCommand;
const deserializeAws_json1_1StopWorkflowRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalWorkflowStateException":
        case "com.amazonaws.glue#IllegalWorkflowStateException":
            response = {
                ...(await deserializeAws_json1_1IllegalWorkflowStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateClassifierCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateClassifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateClassifierResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateClassifierCommand = deserializeAws_json1_1UpdateClassifierCommand;
const deserializeAws_json1_1UpdateClassifierCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "VersionMismatchException":
        case "com.amazonaws.glue#VersionMismatchException":
            response = {
                ...(await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateColumnStatisticsForPartitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommand = deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommand;
const deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateColumnStatisticsForTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateColumnStatisticsForTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateColumnStatisticsForTableResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateColumnStatisticsForTableCommand = deserializeAws_json1_1UpdateColumnStatisticsForTableCommand;
const deserializeAws_json1_1UpdateColumnStatisticsForTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateConnectionCommand = deserializeAws_json1_1UpdateConnectionCommand;
const deserializeAws_json1_1UpdateConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateCrawlerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateCrawlerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCrawlerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateCrawlerCommand = deserializeAws_json1_1UpdateCrawlerCommand;
const deserializeAws_json1_1UpdateCrawlerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CrawlerRunningException":
        case "com.amazonaws.glue#CrawlerRunningException":
            response = {
                ...(await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "VersionMismatchException":
        case "com.amazonaws.glue#VersionMismatchException":
            response = {
                ...(await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateCrawlerScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateCrawlerScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCrawlerScheduleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateCrawlerScheduleCommand = deserializeAws_json1_1UpdateCrawlerScheduleCommand;
const deserializeAws_json1_1UpdateCrawlerScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SchedulerTransitioningException":
        case "com.amazonaws.glue#SchedulerTransitioningException":
            response = {
                ...(await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "VersionMismatchException":
        case "com.amazonaws.glue#VersionMismatchException":
            response = {
                ...(await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDatabaseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDatabaseCommand = deserializeAws_json1_1UpdateDatabaseCommand;
const deserializeAws_json1_1UpdateDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDevEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDevEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDevEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDevEndpointCommand = deserializeAws_json1_1UpdateDevEndpointCommand;
const deserializeAws_json1_1UpdateDevEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.glue#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateJobCommand = deserializeAws_json1_1UpdateJobCommand;
const deserializeAws_json1_1UpdateJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateMLTransformCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateMLTransformCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMLTransformResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateMLTransformCommand = deserializeAws_json1_1UpdateMLTransformCommand;
const deserializeAws_json1_1UpdateMLTransformCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdatePartitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdatePartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePartitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePartitionCommand = deserializeAws_json1_1UpdatePartitionCommand;
const deserializeAws_json1_1UpdatePartitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateRegistryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRegistryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRegistryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRegistryCommand = deserializeAws_json1_1UpdateRegistryCommand;
const deserializeAws_json1_1UpdateRegistryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateSchemaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateSchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSchemaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSchemaCommand = deserializeAws_json1_1UpdateSchemaCommand;
const deserializeAws_json1_1UpdateSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTableResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateTableCommand = deserializeAws_json1_1UpdateTableCommand;
const deserializeAws_json1_1UpdateTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateTriggerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateTriggerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTriggerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateTriggerCommand = deserializeAws_json1_1UpdateTriggerCommand;
const deserializeAws_json1_1UpdateTriggerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateUserDefinedFunctionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateUserDefinedFunctionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserDefinedFunctionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateUserDefinedFunctionCommand = deserializeAws_json1_1UpdateUserDefinedFunctionCommand;
const deserializeAws_json1_1UpdateUserDefinedFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateWorkflowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateWorkflowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateWorkflowResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateWorkflowCommand = deserializeAws_json1_1UpdateWorkflowCommand;
const deserializeAws_json1_1UpdateWorkflowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
    const contents = {
        name: "AlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = {
        name: "ConcurrentModificationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentRunsExceededException(body, context);
    const contents = {
        name: "ConcurrentRunsExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConditionCheckFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConditionCheckFailureException(body, context);
    const contents = {
        name: "ConditionCheckFailureException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CrawlerNotRunningExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CrawlerNotRunningException(body, context);
    const contents = {
        name: "CrawlerNotRunningException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CrawlerRunningExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CrawlerRunningException(body, context);
    const contents = {
        name: "CrawlerRunningException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CrawlerStoppingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CrawlerStoppingException(body, context);
    const contents = {
        name: "CrawlerStoppingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityNotFoundException(body, context);
    const contents = {
        name: "EntityNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1GlueEncryptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1GlueEncryptionException(body, context);
    const contents = {
        name: "GlueEncryptionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
    const contents = {
        name: "IdempotentParameterMismatchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IllegalWorkflowStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IllegalWorkflowStateException(body, context);
    const contents = {
        name: "IllegalWorkflowStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceException(body, context);
    const contents = {
        name: "InternalServiceException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = {
        name: "InvalidInputException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MLTransformNotReadyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MLTransformNotReadyException(body, context);
    const contents = {
        name: "MLTransformNotReadyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoScheduleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoScheduleException(body, context);
    const contents = {
        name: "NoScheduleException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OperationTimeoutExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationTimeoutException(body, context);
    const contents = {
        name: "OperationTimeoutException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNumberLimitExceededException(body, context);
    const contents = {
        name: "ResourceNumberLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SchedulerNotRunningExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SchedulerNotRunningException(body, context);
    const contents = {
        name: "SchedulerNotRunningException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SchedulerRunningExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SchedulerRunningException(body, context);
    const contents = {
        name: "SchedulerRunningException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SchedulerTransitioningExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SchedulerTransitioningException(body, context);
    const contents = {
        name: "SchedulerTransitioningException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1VersionMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1VersionMismatchException(body, context);
    const contents = {
        name: "VersionMismatchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1Action = (input, context) => {
    return {
        ...(input.Arguments !== undefined &&
            input.Arguments !== null && { Arguments: serializeAws_json1_1GenericMap(input.Arguments, context) }),
        ...(input.CrawlerName !== undefined && input.CrawlerName !== null && { CrawlerName: input.CrawlerName }),
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.NotificationProperty !== undefined &&
            input.NotificationProperty !== null && {
            NotificationProperty: serializeAws_json1_1NotificationProperty(input.NotificationProperty, context),
        }),
        ...(input.SecurityConfiguration !== undefined &&
            input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
    };
};
const serializeAws_json1_1ActionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Action(entry, context);
    });
};
const serializeAws_json1_1AdditionalPlanOptionsMap = (input, context) => {
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
const serializeAws_json1_1BatchCreatePartitionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.PartitionInputList !== undefined &&
            input.PartitionInputList !== null && {
            PartitionInputList: serializeAws_json1_1PartitionInputList(input.PartitionInputList, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1BatchDeleteConnectionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ConnectionNameList !== undefined &&
            input.ConnectionNameList !== null && {
            ConnectionNameList: serializeAws_json1_1DeleteConnectionNameList(input.ConnectionNameList, context),
        }),
    };
};
const serializeAws_json1_1BatchDeletePartitionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.PartitionsToDelete !== undefined &&
            input.PartitionsToDelete !== null && {
            PartitionsToDelete: serializeAws_json1_1BatchDeletePartitionValueList(input.PartitionsToDelete, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1BatchDeletePartitionValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PartitionValueList(entry, context);
    });
};
const serializeAws_json1_1BatchDeleteTableNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1BatchDeleteTableRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.TablesToDelete !== undefined &&
            input.TablesToDelete !== null && {
            TablesToDelete: serializeAws_json1_1BatchDeleteTableNameList(input.TablesToDelete, context),
        }),
    };
};
const serializeAws_json1_1BatchDeleteTableVersionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1BatchDeleteTableVersionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.VersionIds !== undefined &&
            input.VersionIds !== null && {
            VersionIds: serializeAws_json1_1BatchDeleteTableVersionList(input.VersionIds, context),
        }),
    };
};
const serializeAws_json1_1BatchGetCrawlersRequest = (input, context) => {
    return {
        ...(input.CrawlerNames !== undefined &&
            input.CrawlerNames !== null && {
            CrawlerNames: serializeAws_json1_1CrawlerNameList(input.CrawlerNames, context),
        }),
    };
};
const serializeAws_json1_1BatchGetDevEndpointsRequest = (input, context) => {
    return {
        ...(input.DevEndpointNames !== undefined &&
            input.DevEndpointNames !== null && {
            DevEndpointNames: serializeAws_json1_1DevEndpointNames(input.DevEndpointNames, context),
        }),
    };
};
const serializeAws_json1_1BatchGetJobsRequest = (input, context) => {
    return {
        ...(input.JobNames !== undefined &&
            input.JobNames !== null && { JobNames: serializeAws_json1_1JobNameList(input.JobNames, context) }),
    };
};
const serializeAws_json1_1BatchGetPartitionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.PartitionsToGet !== undefined &&
            input.PartitionsToGet !== null && {
            PartitionsToGet: serializeAws_json1_1BatchGetPartitionValueList(input.PartitionsToGet, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1BatchGetPartitionValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PartitionValueList(entry, context);
    });
};
const serializeAws_json1_1BatchGetTriggersRequest = (input, context) => {
    return {
        ...(input.TriggerNames !== undefined &&
            input.TriggerNames !== null && {
            TriggerNames: serializeAws_json1_1TriggerNameList(input.TriggerNames, context),
        }),
    };
};
const serializeAws_json1_1BatchGetWorkflowsRequest = (input, context) => {
    return {
        ...(input.IncludeGraph !== undefined && input.IncludeGraph !== null && { IncludeGraph: input.IncludeGraph }),
        ...(input.Names !== undefined &&
            input.Names !== null && { Names: serializeAws_json1_1WorkflowNames(input.Names, context) }),
    };
};
const serializeAws_json1_1BatchStopJobRunJobRunIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1BatchStopJobRunRequest = (input, context) => {
    return {
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.JobRunIds !== undefined &&
            input.JobRunIds !== null && {
            JobRunIds: serializeAws_json1_1BatchStopJobRunJobRunIdList(input.JobRunIds, context),
        }),
    };
};
const serializeAws_json1_1BatchUpdatePartitionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Entries !== undefined &&
            input.Entries !== null && {
            Entries: serializeAws_json1_1BatchUpdatePartitionRequestEntryList(input.Entries, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1BatchUpdatePartitionRequestEntry = (input, context) => {
    return {
        ...(input.PartitionInput !== undefined &&
            input.PartitionInput !== null && {
            PartitionInput: serializeAws_json1_1PartitionInput(input.PartitionInput, context),
        }),
        ...(input.PartitionValueList !== undefined &&
            input.PartitionValueList !== null && {
            PartitionValueList: serializeAws_json1_1BoundedPartitionValueList(input.PartitionValueList, context),
        }),
    };
};
const serializeAws_json1_1BatchUpdatePartitionRequestEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1BatchUpdatePartitionRequestEntry(entry, context);
    });
};
const serializeAws_json1_1BinaryColumnStatisticsData = (input, context) => {
    return {
        ...(input.AverageLength !== undefined && input.AverageLength !== null && { AverageLength: input.AverageLength }),
        ...(input.MaximumLength !== undefined && input.MaximumLength !== null && { MaximumLength: input.MaximumLength }),
        ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
    };
};
const serializeAws_json1_1BooleanColumnStatisticsData = (input, context) => {
    return {
        ...(input.NumberOfFalses !== undefined &&
            input.NumberOfFalses !== null && { NumberOfFalses: input.NumberOfFalses }),
        ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
        ...(input.NumberOfTrues !== undefined && input.NumberOfTrues !== null && { NumberOfTrues: input.NumberOfTrues }),
    };
};
const serializeAws_json1_1BoundedPartitionValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CancelMLTaskRunRequest = (input, context) => {
    return {
        ...(input.TaskRunId !== undefined && input.TaskRunId !== null && { TaskRunId: input.TaskRunId }),
        ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
    };
};
const serializeAws_json1_1CatalogEntries = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CatalogEntry(entry, context);
    });
};
const serializeAws_json1_1CatalogEntry = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1CatalogTablesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CatalogTarget = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Tables !== undefined &&
            input.Tables !== null && { Tables: serializeAws_json1_1CatalogTablesList(input.Tables, context) }),
    };
};
const serializeAws_json1_1CatalogTargetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CatalogTarget(entry, context);
    });
};
const serializeAws_json1_1CheckSchemaVersionValidityInput = (input, context) => {
    return {
        ...(input.DataFormat !== undefined && input.DataFormat !== null && { DataFormat: input.DataFormat }),
        ...(input.SchemaDefinition !== undefined &&
            input.SchemaDefinition !== null && { SchemaDefinition: input.SchemaDefinition }),
    };
};
const serializeAws_json1_1ClassifierNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CloudWatchEncryption = (input, context) => {
    return {
        ...(input.CloudWatchEncryptionMode !== undefined &&
            input.CloudWatchEncryptionMode !== null && { CloudWatchEncryptionMode: input.CloudWatchEncryptionMode }),
        ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
    };
};
const serializeAws_json1_1CodeGenEdge = (input, context) => {
    return {
        ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
        ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
        ...(input.TargetParameter !== undefined &&
            input.TargetParameter !== null && { TargetParameter: input.TargetParameter }),
    };
};
const serializeAws_json1_1CodeGenNode = (input, context) => {
    return {
        ...(input.Args !== undefined &&
            input.Args !== null && { Args: serializeAws_json1_1CodeGenNodeArgs(input.Args, context) }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.LineNumber !== undefined && input.LineNumber !== null && { LineNumber: input.LineNumber }),
        ...(input.NodeType !== undefined && input.NodeType !== null && { NodeType: input.NodeType }),
    };
};
const serializeAws_json1_1CodeGenNodeArg = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Param !== undefined && input.Param !== null && { Param: input.Param }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1CodeGenNodeArgs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CodeGenNodeArg(entry, context);
    });
};
const serializeAws_json1_1Column = (input, context) => {
    return {
        ...(input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1ColumnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Column(entry, context);
    });
};
const serializeAws_json1_1ColumnStatistics = (input, context) => {
    return {
        ...(input.AnalyzedTime !== undefined &&
            input.AnalyzedTime !== null && { AnalyzedTime: Math.round(input.AnalyzedTime.getTime() / 1000) }),
        ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
        ...(input.ColumnType !== undefined && input.ColumnType !== null && { ColumnType: input.ColumnType }),
        ...(input.StatisticsData !== undefined &&
            input.StatisticsData !== null && {
            StatisticsData: serializeAws_json1_1ColumnStatisticsData(input.StatisticsData, context),
        }),
    };
};
const serializeAws_json1_1ColumnStatisticsData = (input, context) => {
    return {
        ...(input.BinaryColumnStatisticsData !== undefined &&
            input.BinaryColumnStatisticsData !== null && {
            BinaryColumnStatisticsData: serializeAws_json1_1BinaryColumnStatisticsData(input.BinaryColumnStatisticsData, context),
        }),
        ...(input.BooleanColumnStatisticsData !== undefined &&
            input.BooleanColumnStatisticsData !== null && {
            BooleanColumnStatisticsData: serializeAws_json1_1BooleanColumnStatisticsData(input.BooleanColumnStatisticsData, context),
        }),
        ...(input.DateColumnStatisticsData !== undefined &&
            input.DateColumnStatisticsData !== null && {
            DateColumnStatisticsData: serializeAws_json1_1DateColumnStatisticsData(input.DateColumnStatisticsData, context),
        }),
        ...(input.DecimalColumnStatisticsData !== undefined &&
            input.DecimalColumnStatisticsData !== null && {
            DecimalColumnStatisticsData: serializeAws_json1_1DecimalColumnStatisticsData(input.DecimalColumnStatisticsData, context),
        }),
        ...(input.DoubleColumnStatisticsData !== undefined &&
            input.DoubleColumnStatisticsData !== null && {
            DoubleColumnStatisticsData: serializeAws_json1_1DoubleColumnStatisticsData(input.DoubleColumnStatisticsData, context),
        }),
        ...(input.LongColumnStatisticsData !== undefined &&
            input.LongColumnStatisticsData !== null && {
            LongColumnStatisticsData: serializeAws_json1_1LongColumnStatisticsData(input.LongColumnStatisticsData, context),
        }),
        ...(input.StringColumnStatisticsData !== undefined &&
            input.StringColumnStatisticsData !== null && {
            StringColumnStatisticsData: serializeAws_json1_1StringColumnStatisticsData(input.StringColumnStatisticsData, context),
        }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1ColumnValueStringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Condition = (input, context) => {
    return {
        ...(input.CrawlState !== undefined && input.CrawlState !== null && { CrawlState: input.CrawlState }),
        ...(input.CrawlerName !== undefined && input.CrawlerName !== null && { CrawlerName: input.CrawlerName }),
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.LogicalOperator !== undefined &&
            input.LogicalOperator !== null && { LogicalOperator: input.LogicalOperator }),
        ...(input.State !== undefined && input.State !== null && { State: input.State }),
    };
};
const serializeAws_json1_1ConditionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Condition(entry, context);
    });
};
const serializeAws_json1_1ConnectionInput = (input, context) => {
    return {
        ...(input.ConnectionProperties !== undefined &&
            input.ConnectionProperties !== null && {
            ConnectionProperties: serializeAws_json1_1ConnectionProperties(input.ConnectionProperties, context),
        }),
        ...(input.ConnectionType !== undefined &&
            input.ConnectionType !== null && { ConnectionType: input.ConnectionType }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.MatchCriteria !== undefined &&
            input.MatchCriteria !== null && {
            MatchCriteria: serializeAws_json1_1MatchCriteria(input.MatchCriteria, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.PhysicalConnectionRequirements !== undefined &&
            input.PhysicalConnectionRequirements !== null && {
            PhysicalConnectionRequirements: serializeAws_json1_1PhysicalConnectionRequirements(input.PhysicalConnectionRequirements, context),
        }),
    };
};
const serializeAws_json1_1ConnectionPasswordEncryption = (input, context) => {
    return {
        ...(input.AwsKmsKeyId !== undefined && input.AwsKmsKeyId !== null && { AwsKmsKeyId: input.AwsKmsKeyId }),
        ...(input.ReturnConnectionPasswordEncrypted !== undefined &&
            input.ReturnConnectionPasswordEncrypted !== null && {
            ReturnConnectionPasswordEncrypted: input.ReturnConnectionPasswordEncrypted,
        }),
    };
};
const serializeAws_json1_1ConnectionProperties = (input, context) => {
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
const serializeAws_json1_1ConnectionsList = (input, context) => {
    return {
        ...(input.Connections !== undefined &&
            input.Connections !== null && {
            Connections: serializeAws_json1_1OrchestrationStringList(input.Connections, context),
        }),
    };
};
const serializeAws_json1_1CrawlerNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CrawlerTargets = (input, context) => {
    return {
        ...(input.CatalogTargets !== undefined &&
            input.CatalogTargets !== null && {
            CatalogTargets: serializeAws_json1_1CatalogTargetList(input.CatalogTargets, context),
        }),
        ...(input.DynamoDBTargets !== undefined &&
            input.DynamoDBTargets !== null && {
            DynamoDBTargets: serializeAws_json1_1DynamoDBTargetList(input.DynamoDBTargets, context),
        }),
        ...(input.JdbcTargets !== undefined &&
            input.JdbcTargets !== null && { JdbcTargets: serializeAws_json1_1JdbcTargetList(input.JdbcTargets, context) }),
        ...(input.MongoDBTargets !== undefined &&
            input.MongoDBTargets !== null && {
            MongoDBTargets: serializeAws_json1_1MongoDBTargetList(input.MongoDBTargets, context),
        }),
        ...(input.S3Targets !== undefined &&
            input.S3Targets !== null && { S3Targets: serializeAws_json1_1S3TargetList(input.S3Targets, context) }),
    };
};
const serializeAws_json1_1CreateClassifierRequest = (input, context) => {
    return {
        ...(input.CsvClassifier !== undefined &&
            input.CsvClassifier !== null && {
            CsvClassifier: serializeAws_json1_1CreateCsvClassifierRequest(input.CsvClassifier, context),
        }),
        ...(input.GrokClassifier !== undefined &&
            input.GrokClassifier !== null && {
            GrokClassifier: serializeAws_json1_1CreateGrokClassifierRequest(input.GrokClassifier, context),
        }),
        ...(input.JsonClassifier !== undefined &&
            input.JsonClassifier !== null && {
            JsonClassifier: serializeAws_json1_1CreateJsonClassifierRequest(input.JsonClassifier, context),
        }),
        ...(input.XMLClassifier !== undefined &&
            input.XMLClassifier !== null && {
            XMLClassifier: serializeAws_json1_1CreateXMLClassifierRequest(input.XMLClassifier, context),
        }),
    };
};
const serializeAws_json1_1CreateConnectionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ConnectionInput !== undefined &&
            input.ConnectionInput !== null && {
            ConnectionInput: serializeAws_json1_1ConnectionInput(input.ConnectionInput, context),
        }),
    };
};
const serializeAws_json1_1CreateCrawlerRequest = (input, context) => {
    return {
        ...(input.Classifiers !== undefined &&
            input.Classifiers !== null && {
            Classifiers: serializeAws_json1_1ClassifierNameList(input.Classifiers, context),
        }),
        ...(input.Configuration !== undefined && input.Configuration !== null && { Configuration: input.Configuration }),
        ...(input.CrawlerSecurityConfiguration !== undefined &&
            input.CrawlerSecurityConfiguration !== null && {
            CrawlerSecurityConfiguration: input.CrawlerSecurityConfiguration,
        }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.LineageConfiguration !== undefined &&
            input.LineageConfiguration !== null && {
            LineageConfiguration: serializeAws_json1_1LineageConfiguration(input.LineageConfiguration, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RecrawlPolicy !== undefined &&
            input.RecrawlPolicy !== null && {
            RecrawlPolicy: serializeAws_json1_1RecrawlPolicy(input.RecrawlPolicy, context),
        }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
        ...(input.SchemaChangePolicy !== undefined &&
            input.SchemaChangePolicy !== null && {
            SchemaChangePolicy: serializeAws_json1_1SchemaChangePolicy(input.SchemaChangePolicy, context),
        }),
        ...(input.TablePrefix !== undefined && input.TablePrefix !== null && { TablePrefix: input.TablePrefix }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1CrawlerTargets(input.Targets, context) }),
    };
};
const serializeAws_json1_1CreateCsvClassifierRequest = (input, context) => {
    return {
        ...(input.AllowSingleColumn !== undefined &&
            input.AllowSingleColumn !== null && { AllowSingleColumn: input.AllowSingleColumn }),
        ...(input.ContainsHeader !== undefined &&
            input.ContainsHeader !== null && { ContainsHeader: input.ContainsHeader }),
        ...(input.Delimiter !== undefined && input.Delimiter !== null && { Delimiter: input.Delimiter }),
        ...(input.DisableValueTrimming !== undefined &&
            input.DisableValueTrimming !== null && { DisableValueTrimming: input.DisableValueTrimming }),
        ...(input.Header !== undefined &&
            input.Header !== null && { Header: serializeAws_json1_1CsvHeader(input.Header, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.QuoteSymbol !== undefined && input.QuoteSymbol !== null && { QuoteSymbol: input.QuoteSymbol }),
    };
};
const serializeAws_json1_1CreateDatabaseRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseInput !== undefined &&
            input.DatabaseInput !== null && {
            DatabaseInput: serializeAws_json1_1DatabaseInput(input.DatabaseInput, context),
        }),
    };
};
const serializeAws_json1_1CreateDevEndpointRequest = (input, context) => {
    return {
        ...(input.Arguments !== undefined &&
            input.Arguments !== null && { Arguments: serializeAws_json1_1MapValue(input.Arguments, context) }),
        ...(input.EndpointName !== undefined && input.EndpointName !== null && { EndpointName: input.EndpointName }),
        ...(input.ExtraJarsS3Path !== undefined &&
            input.ExtraJarsS3Path !== null && { ExtraJarsS3Path: input.ExtraJarsS3Path }),
        ...(input.ExtraPythonLibsS3Path !== undefined &&
            input.ExtraPythonLibsS3Path !== null && { ExtraPythonLibsS3Path: input.ExtraPythonLibsS3Path }),
        ...(input.GlueVersion !== undefined && input.GlueVersion !== null && { GlueVersion: input.GlueVersion }),
        ...(input.NumberOfNodes !== undefined && input.NumberOfNodes !== null && { NumberOfNodes: input.NumberOfNodes }),
        ...(input.NumberOfWorkers !== undefined &&
            input.NumberOfWorkers !== null && { NumberOfWorkers: input.NumberOfWorkers }),
        ...(input.PublicKey !== undefined && input.PublicKey !== null && { PublicKey: input.PublicKey }),
        ...(input.PublicKeys !== undefined &&
            input.PublicKeys !== null && { PublicKeys: serializeAws_json1_1PublicKeysList(input.PublicKeys, context) }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.SecurityConfiguration !== undefined &&
            input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_json1_1StringList(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
        ...(input.WorkerType !== undefined && input.WorkerType !== null && { WorkerType: input.WorkerType }),
    };
};
const serializeAws_json1_1CreateGrokClassifierRequest = (input, context) => {
    return {
        ...(input.Classification !== undefined &&
            input.Classification !== null && { Classification: input.Classification }),
        ...(input.CustomPatterns !== undefined &&
            input.CustomPatterns !== null && { CustomPatterns: input.CustomPatterns }),
        ...(input.GrokPattern !== undefined && input.GrokPattern !== null && { GrokPattern: input.GrokPattern }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateJobRequest = (input, context) => {
    return {
        ...(input.AllocatedCapacity !== undefined &&
            input.AllocatedCapacity !== null && { AllocatedCapacity: input.AllocatedCapacity }),
        ...(input.Command !== undefined &&
            input.Command !== null && { Command: serializeAws_json1_1JobCommand(input.Command, context) }),
        ...(input.Connections !== undefined &&
            input.Connections !== null && { Connections: serializeAws_json1_1ConnectionsList(input.Connections, context) }),
        ...(input.DefaultArguments !== undefined &&
            input.DefaultArguments !== null && {
            DefaultArguments: serializeAws_json1_1GenericMap(input.DefaultArguments, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.ExecutionProperty !== undefined &&
            input.ExecutionProperty !== null && {
            ExecutionProperty: serializeAws_json1_1ExecutionProperty(input.ExecutionProperty, context),
        }),
        ...(input.GlueVersion !== undefined && input.GlueVersion !== null && { GlueVersion: input.GlueVersion }),
        ...(input.LogUri !== undefined && input.LogUri !== null && { LogUri: input.LogUri }),
        ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
        ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NonOverridableArguments !== undefined &&
            input.NonOverridableArguments !== null && {
            NonOverridableArguments: serializeAws_json1_1GenericMap(input.NonOverridableArguments, context),
        }),
        ...(input.NotificationProperty !== undefined &&
            input.NotificationProperty !== null && {
            NotificationProperty: serializeAws_json1_1NotificationProperty(input.NotificationProperty, context),
        }),
        ...(input.NumberOfWorkers !== undefined &&
            input.NumberOfWorkers !== null && { NumberOfWorkers: input.NumberOfWorkers }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.SecurityConfiguration !== undefined &&
            input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
        ...(input.WorkerType !== undefined && input.WorkerType !== null && { WorkerType: input.WorkerType }),
    };
};
const serializeAws_json1_1CreateJsonClassifierRequest = (input, context) => {
    return {
        ...(input.JsonPath !== undefined && input.JsonPath !== null && { JsonPath: input.JsonPath }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateMLTransformRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.GlueVersion !== undefined && input.GlueVersion !== null && { GlueVersion: input.GlueVersion }),
        ...(input.InputRecordTables !== undefined &&
            input.InputRecordTables !== null && {
            InputRecordTables: serializeAws_json1_1GlueTables(input.InputRecordTables, context),
        }),
        ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
        ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NumberOfWorkers !== undefined &&
            input.NumberOfWorkers !== null && { NumberOfWorkers: input.NumberOfWorkers }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1TransformParameters(input.Parameters, context) }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
        ...(input.TransformEncryption !== undefined &&
            input.TransformEncryption !== null && {
            TransformEncryption: serializeAws_json1_1TransformEncryption(input.TransformEncryption, context),
        }),
        ...(input.WorkerType !== undefined && input.WorkerType !== null && { WorkerType: input.WorkerType }),
    };
};
const serializeAws_json1_1CreatePartitionIndexRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.PartitionIndex !== undefined &&
            input.PartitionIndex !== null && {
            PartitionIndex: serializeAws_json1_1PartitionIndex(input.PartitionIndex, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1CreatePartitionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.PartitionInput !== undefined &&
            input.PartitionInput !== null && {
            PartitionInput: serializeAws_json1_1PartitionInput(input.PartitionInput, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1CreateRegistryInput = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.RegistryName !== undefined && input.RegistryName !== null && { RegistryName: input.RegistryName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateSchemaInput = (input, context) => {
    return {
        ...(input.Compatibility !== undefined && input.Compatibility !== null && { Compatibility: input.Compatibility }),
        ...(input.DataFormat !== undefined && input.DataFormat !== null && { DataFormat: input.DataFormat }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.RegistryId !== undefined &&
            input.RegistryId !== null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
        ...(input.SchemaDefinition !== undefined &&
            input.SchemaDefinition !== null && { SchemaDefinition: input.SchemaDefinition }),
        ...(input.SchemaName !== undefined && input.SchemaName !== null && { SchemaName: input.SchemaName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateScriptRequest = (input, context) => {
    return {
        ...(input.DagEdges !== undefined &&
            input.DagEdges !== null && { DagEdges: serializeAws_json1_1DagEdges(input.DagEdges, context) }),
        ...(input.DagNodes !== undefined &&
            input.DagNodes !== null && { DagNodes: serializeAws_json1_1DagNodes(input.DagNodes, context) }),
        ...(input.Language !== undefined && input.Language !== null && { Language: input.Language }),
    };
};
const serializeAws_json1_1CreateSecurityConfigurationRequest = (input, context) => {
    return {
        ...(input.EncryptionConfiguration !== undefined &&
            input.EncryptionConfiguration !== null && {
            EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateTableRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.PartitionIndexes !== undefined &&
            input.PartitionIndexes !== null && {
            PartitionIndexes: serializeAws_json1_1PartitionIndexList(input.PartitionIndexes, context),
        }),
        ...(input.TableInput !== undefined &&
            input.TableInput !== null && { TableInput: serializeAws_json1_1TableInput(input.TableInput, context) }),
    };
};
const serializeAws_json1_1CreateTriggerRequest = (input, context) => {
    return {
        ...(input.Actions !== undefined &&
            input.Actions !== null && { Actions: serializeAws_json1_1ActionList(input.Actions, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Predicate !== undefined &&
            input.Predicate !== null && { Predicate: serializeAws_json1_1Predicate(input.Predicate, context) }),
        ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
        ...(input.StartOnCreation !== undefined &&
            input.StartOnCreation !== null && { StartOnCreation: input.StartOnCreation }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.WorkflowName !== undefined && input.WorkflowName !== null && { WorkflowName: input.WorkflowName }),
    };
};
const serializeAws_json1_1CreateUserDefinedFunctionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.FunctionInput !== undefined &&
            input.FunctionInput !== null && {
            FunctionInput: serializeAws_json1_1UserDefinedFunctionInput(input.FunctionInput, context),
        }),
    };
};
const serializeAws_json1_1CreateWorkflowRequest = (input, context) => {
    return {
        ...(input.DefaultRunProperties !== undefined &&
            input.DefaultRunProperties !== null && {
            DefaultRunProperties: serializeAws_json1_1WorkflowRunProperties(input.DefaultRunProperties, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.MaxConcurrentRuns !== undefined &&
            input.MaxConcurrentRuns !== null && { MaxConcurrentRuns: input.MaxConcurrentRuns }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateXMLClassifierRequest = (input, context) => {
    return {
        ...(input.Classification !== undefined &&
            input.Classification !== null && { Classification: input.Classification }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RowTag !== undefined && input.RowTag !== null && { RowTag: input.RowTag }),
    };
};
const serializeAws_json1_1CsvHeader = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DagEdges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CodeGenEdge(entry, context);
    });
};
const serializeAws_json1_1DagNodes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CodeGenNode(entry, context);
    });
};
const serializeAws_json1_1DatabaseIdentifier = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    };
};
const serializeAws_json1_1DatabaseInput = (input, context) => {
    return {
        ...(input.CreateTableDefaultPermissions !== undefined &&
            input.CreateTableDefaultPermissions !== null && {
            CreateTableDefaultPermissions: serializeAws_json1_1PrincipalPermissionsList(input.CreateTableDefaultPermissions, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.LocationUri !== undefined && input.LocationUri !== null && { LocationUri: input.LocationUri }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
        ...(input.TargetDatabase !== undefined &&
            input.TargetDatabase !== null && {
            TargetDatabase: serializeAws_json1_1DatabaseIdentifier(input.TargetDatabase, context),
        }),
    };
};
const serializeAws_json1_1DataCatalogEncryptionSettings = (input, context) => {
    return {
        ...(input.ConnectionPasswordEncryption !== undefined &&
            input.ConnectionPasswordEncryption !== null && {
            ConnectionPasswordEncryption: serializeAws_json1_1ConnectionPasswordEncryption(input.ConnectionPasswordEncryption, context),
        }),
        ...(input.EncryptionAtRest !== undefined &&
            input.EncryptionAtRest !== null && {
            EncryptionAtRest: serializeAws_json1_1EncryptionAtRest(input.EncryptionAtRest, context),
        }),
    };
};
const serializeAws_json1_1DataLakePrincipal = (input, context) => {
    return {
        ...(input.DataLakePrincipalIdentifier !== undefined &&
            input.DataLakePrincipalIdentifier !== null && { DataLakePrincipalIdentifier: input.DataLakePrincipalIdentifier }),
    };
};
const serializeAws_json1_1DateColumnStatisticsData = (input, context) => {
    return {
        ...(input.MaximumValue !== undefined &&
            input.MaximumValue !== null && { MaximumValue: Math.round(input.MaximumValue.getTime() / 1000) }),
        ...(input.MinimumValue !== undefined &&
            input.MinimumValue !== null && { MinimumValue: Math.round(input.MinimumValue.getTime() / 1000) }),
        ...(input.NumberOfDistinctValues !== undefined &&
            input.NumberOfDistinctValues !== null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
        ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
    };
};
const serializeAws_json1_1DecimalColumnStatisticsData = (input, context) => {
    return {
        ...(input.MaximumValue !== undefined &&
            input.MaximumValue !== null && { MaximumValue: serializeAws_json1_1DecimalNumber(input.MaximumValue, context) }),
        ...(input.MinimumValue !== undefined &&
            input.MinimumValue !== null && { MinimumValue: serializeAws_json1_1DecimalNumber(input.MinimumValue, context) }),
        ...(input.NumberOfDistinctValues !== undefined &&
            input.NumberOfDistinctValues !== null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
        ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
    };
};
const serializeAws_json1_1DecimalNumber = (input, context) => {
    return {
        ...(input.Scale !== undefined && input.Scale !== null && { Scale: input.Scale }),
        ...(input.UnscaledValue !== undefined &&
            input.UnscaledValue !== null && { UnscaledValue: context.base64Encoder(input.UnscaledValue) }),
    };
};
const serializeAws_json1_1DeleteClassifierRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteColumnStatisticsForPartitionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.PartitionValues !== undefined &&
            input.PartitionValues !== null && {
            PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1DeleteColumnStatisticsForTableRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1DeleteConnectionNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeleteConnectionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ConnectionName !== undefined &&
            input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
    };
};
const serializeAws_json1_1DeleteCrawlerRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteDatabaseRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteDevEndpointRequest = (input, context) => {
    return {
        ...(input.EndpointName !== undefined && input.EndpointName !== null && { EndpointName: input.EndpointName }),
    };
};
const serializeAws_json1_1DeleteJobRequest = (input, context) => {
    return {
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    };
};
const serializeAws_json1_1DeleteMLTransformRequest = (input, context) => {
    return {
        ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
    };
};
const serializeAws_json1_1DeletePartitionIndexRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1DeletePartitionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.PartitionValues !== undefined &&
            input.PartitionValues !== null && {
            PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1DeleteRegistryInput = (input, context) => {
    return {
        ...(input.RegistryId !== undefined &&
            input.RegistryId !== null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
    };
};
const serializeAws_json1_1DeleteResourcePolicyRequest = (input, context) => {
    return {
        ...(input.PolicyHashCondition !== undefined &&
            input.PolicyHashCondition !== null && { PolicyHashCondition: input.PolicyHashCondition }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1DeleteSchemaInput = (input, context) => {
    return {
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    };
};
const serializeAws_json1_1DeleteSchemaVersionsInput = (input, context) => {
    return {
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
        ...(input.Versions !== undefined && input.Versions !== null && { Versions: input.Versions }),
    };
};
const serializeAws_json1_1DeleteSecurityConfigurationRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteTableRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteTableVersionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.VersionId !== undefined && input.VersionId !== null && { VersionId: input.VersionId }),
    };
};
const serializeAws_json1_1DeleteTriggerRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteUserDefinedFunctionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName }),
    };
};
const serializeAws_json1_1DeleteWorkflowRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DevEndpointCustomLibraries = (input, context) => {
    return {
        ...(input.ExtraJarsS3Path !== undefined &&
            input.ExtraJarsS3Path !== null && { ExtraJarsS3Path: input.ExtraJarsS3Path }),
        ...(input.ExtraPythonLibsS3Path !== undefined &&
            input.ExtraPythonLibsS3Path !== null && { ExtraPythonLibsS3Path: input.ExtraPythonLibsS3Path }),
    };
};
const serializeAws_json1_1DevEndpointNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DoubleColumnStatisticsData = (input, context) => {
    return {
        ...(input.MaximumValue !== undefined && input.MaximumValue !== null && { MaximumValue: input.MaximumValue }),
        ...(input.MinimumValue !== undefined && input.MinimumValue !== null && { MinimumValue: input.MinimumValue }),
        ...(input.NumberOfDistinctValues !== undefined &&
            input.NumberOfDistinctValues !== null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
        ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
    };
};
const serializeAws_json1_1DynamoDBTarget = (input, context) => {
    return {
        ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
        ...(input.scanAll !== undefined && input.scanAll !== null && { scanAll: input.scanAll }),
        ...(input.scanRate !== undefined && input.scanRate !== null && { scanRate: input.scanRate }),
    };
};
const serializeAws_json1_1DynamoDBTargetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DynamoDBTarget(entry, context);
    });
};
const serializeAws_json1_1EncryptionAtRest = (input, context) => {
    return {
        ...(input.CatalogEncryptionMode !== undefined &&
            input.CatalogEncryptionMode !== null && { CatalogEncryptionMode: input.CatalogEncryptionMode }),
        ...(input.SseAwsKmsKeyId !== undefined &&
            input.SseAwsKmsKeyId !== null && { SseAwsKmsKeyId: input.SseAwsKmsKeyId }),
    };
};
const serializeAws_json1_1EncryptionConfiguration = (input, context) => {
    return {
        ...(input.CloudWatchEncryption !== undefined &&
            input.CloudWatchEncryption !== null && {
            CloudWatchEncryption: serializeAws_json1_1CloudWatchEncryption(input.CloudWatchEncryption, context),
        }),
        ...(input.JobBookmarksEncryption !== undefined &&
            input.JobBookmarksEncryption !== null && {
            JobBookmarksEncryption: serializeAws_json1_1JobBookmarksEncryption(input.JobBookmarksEncryption, context),
        }),
        ...(input.S3Encryption !== undefined &&
            input.S3Encryption !== null && {
            S3Encryption: serializeAws_json1_1S3EncryptionList(input.S3Encryption, context),
        }),
    };
};
const serializeAws_json1_1ExecutionProperty = (input, context) => {
    return {
        ...(input.MaxConcurrentRuns !== undefined &&
            input.MaxConcurrentRuns !== null && { MaxConcurrentRuns: input.MaxConcurrentRuns }),
    };
};
const serializeAws_json1_1FindMatchesParameters = (input, context) => {
    return {
        ...(input.AccuracyCostTradeoff !== undefined &&
            input.AccuracyCostTradeoff !== null && { AccuracyCostTradeoff: input.AccuracyCostTradeoff }),
        ...(input.EnforceProvidedLabels !== undefined &&
            input.EnforceProvidedLabels !== null && { EnforceProvidedLabels: input.EnforceProvidedLabels }),
        ...(input.PrecisionRecallTradeoff !== undefined &&
            input.PrecisionRecallTradeoff !== null && { PrecisionRecallTradeoff: input.PrecisionRecallTradeoff }),
        ...(input.PrimaryKeyColumnName !== undefined &&
            input.PrimaryKeyColumnName !== null && { PrimaryKeyColumnName: input.PrimaryKeyColumnName }),
    };
};
const serializeAws_json1_1GenericMap = (input, context) => {
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
const serializeAws_json1_1GetCatalogImportStatusRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    };
};
const serializeAws_json1_1GetClassifierRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1GetClassifiersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetColumnNamesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetColumnStatisticsForPartitionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ColumnNames !== undefined &&
            input.ColumnNames !== null && {
            ColumnNames: serializeAws_json1_1GetColumnNamesList(input.ColumnNames, context),
        }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.PartitionValues !== undefined &&
            input.PartitionValues !== null && {
            PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1GetColumnStatisticsForTableRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ColumnNames !== undefined &&
            input.ColumnNames !== null && {
            ColumnNames: serializeAws_json1_1GetColumnNamesList(input.ColumnNames, context),
        }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1GetConnectionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.HidePassword !== undefined && input.HidePassword !== null && { HidePassword: input.HidePassword }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1GetConnectionsFilter = (input, context) => {
    return {
        ...(input.ConnectionType !== undefined &&
            input.ConnectionType !== null && { ConnectionType: input.ConnectionType }),
        ...(input.MatchCriteria !== undefined &&
            input.MatchCriteria !== null && {
            MatchCriteria: serializeAws_json1_1MatchCriteria(input.MatchCriteria, context),
        }),
    };
};
const serializeAws_json1_1GetConnectionsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1GetConnectionsFilter(input.Filter, context) }),
        ...(input.HidePassword !== undefined && input.HidePassword !== null && { HidePassword: input.HidePassword }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetCrawlerMetricsRequest = (input, context) => {
    return {
        ...(input.CrawlerNameList !== undefined &&
            input.CrawlerNameList !== null && {
            CrawlerNameList: serializeAws_json1_1CrawlerNameList(input.CrawlerNameList, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetCrawlerRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1GetCrawlersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetDatabaseRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1GetDatabasesRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceShareType !== undefined &&
            input.ResourceShareType !== null && { ResourceShareType: input.ResourceShareType }),
    };
};
const serializeAws_json1_1GetDataCatalogEncryptionSettingsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    };
};
const serializeAws_json1_1GetDataflowGraphRequest = (input, context) => {
    return {
        ...(input.PythonScript !== undefined && input.PythonScript !== null && { PythonScript: input.PythonScript }),
    };
};
const serializeAws_json1_1GetDevEndpointRequest = (input, context) => {
    return {
        ...(input.EndpointName !== undefined && input.EndpointName !== null && { EndpointName: input.EndpointName }),
    };
};
const serializeAws_json1_1GetDevEndpointsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetJobBookmarkRequest = (input, context) => {
    return {
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
    };
};
const serializeAws_json1_1GetJobRequest = (input, context) => {
    return {
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    };
};
const serializeAws_json1_1GetJobRunRequest = (input, context) => {
    return {
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.PredecessorsIncluded !== undefined &&
            input.PredecessorsIncluded !== null && { PredecessorsIncluded: input.PredecessorsIncluded }),
        ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
    };
};
const serializeAws_json1_1GetJobRunsRequest = (input, context) => {
    return {
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetJobsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetMappingRequest = (input, context) => {
    return {
        ...(input.Location !== undefined &&
            input.Location !== null && { Location: serializeAws_json1_1Location(input.Location, context) }),
        ...(input.Sinks !== undefined &&
            input.Sinks !== null && { Sinks: serializeAws_json1_1CatalogEntries(input.Sinks, context) }),
        ...(input.Source !== undefined &&
            input.Source !== null && { Source: serializeAws_json1_1CatalogEntry(input.Source, context) }),
    };
};
const serializeAws_json1_1GetMLTaskRunRequest = (input, context) => {
    return {
        ...(input.TaskRunId !== undefined && input.TaskRunId !== null && { TaskRunId: input.TaskRunId }),
        ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
    };
};
const serializeAws_json1_1GetMLTaskRunsRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1TaskRunFilterCriteria(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Sort !== undefined &&
            input.Sort !== null && { Sort: serializeAws_json1_1TaskRunSortCriteria(input.Sort, context) }),
        ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
    };
};
const serializeAws_json1_1GetMLTransformRequest = (input, context) => {
    return {
        ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
    };
};
const serializeAws_json1_1GetMLTransformsRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1TransformFilterCriteria(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Sort !== undefined &&
            input.Sort !== null && { Sort: serializeAws_json1_1TransformSortCriteria(input.Sort, context) }),
    };
};
const serializeAws_json1_1GetPartitionIndexesRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1GetPartitionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.PartitionValues !== undefined &&
            input.PartitionValues !== null && {
            PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1GetPartitionsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.ExcludeColumnSchema !== undefined &&
            input.ExcludeColumnSchema !== null && { ExcludeColumnSchema: input.ExcludeColumnSchema }),
        ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Segment !== undefined &&
            input.Segment !== null && { Segment: serializeAws_json1_1Segment(input.Segment, context) }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1GetPlanRequest = (input, context) => {
    return {
        ...(input.AdditionalPlanOptionsMap !== undefined &&
            input.AdditionalPlanOptionsMap !== null && {
            AdditionalPlanOptionsMap: serializeAws_json1_1AdditionalPlanOptionsMap(input.AdditionalPlanOptionsMap, context),
        }),
        ...(input.Language !== undefined && input.Language !== null && { Language: input.Language }),
        ...(input.Location !== undefined &&
            input.Location !== null && { Location: serializeAws_json1_1Location(input.Location, context) }),
        ...(input.Mapping !== undefined &&
            input.Mapping !== null && { Mapping: serializeAws_json1_1MappingList(input.Mapping, context) }),
        ...(input.Sinks !== undefined &&
            input.Sinks !== null && { Sinks: serializeAws_json1_1CatalogEntries(input.Sinks, context) }),
        ...(input.Source !== undefined &&
            input.Source !== null && { Source: serializeAws_json1_1CatalogEntry(input.Source, context) }),
    };
};
const serializeAws_json1_1GetRegistryInput = (input, context) => {
    return {
        ...(input.RegistryId !== undefined &&
            input.RegistryId !== null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
    };
};
const serializeAws_json1_1GetResourcePoliciesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetResourcePolicyRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1GetSchemaByDefinitionInput = (input, context) => {
    return {
        ...(input.SchemaDefinition !== undefined &&
            input.SchemaDefinition !== null && { SchemaDefinition: input.SchemaDefinition }),
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    };
};
const serializeAws_json1_1GetSchemaInput = (input, context) => {
    return {
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    };
};
const serializeAws_json1_1GetSchemaVersionInput = (input, context) => {
    return {
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
        ...(input.SchemaVersionId !== undefined &&
            input.SchemaVersionId !== null && { SchemaVersionId: input.SchemaVersionId }),
        ...(input.SchemaVersionNumber !== undefined &&
            input.SchemaVersionNumber !== null && {
            SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
        }),
    };
};
const serializeAws_json1_1GetSchemaVersionsDiffInput = (input, context) => {
    return {
        ...(input.FirstSchemaVersionNumber !== undefined &&
            input.FirstSchemaVersionNumber !== null && {
            FirstSchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.FirstSchemaVersionNumber, context),
        }),
        ...(input.SchemaDiffType !== undefined &&
            input.SchemaDiffType !== null && { SchemaDiffType: input.SchemaDiffType }),
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
        ...(input.SecondSchemaVersionNumber !== undefined &&
            input.SecondSchemaVersionNumber !== null && {
            SecondSchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SecondSchemaVersionNumber, context),
        }),
    };
};
const serializeAws_json1_1GetSecurityConfigurationRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1GetSecurityConfigurationsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetTableRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1GetTablesRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetTableVersionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.VersionId !== undefined && input.VersionId !== null && { VersionId: input.VersionId }),
    };
};
const serializeAws_json1_1GetTableVersionsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1GetTagsRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1GetTriggerRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1GetTriggersRequest = (input, context) => {
    return {
        ...(input.DependentJobName !== undefined &&
            input.DependentJobName !== null && { DependentJobName: input.DependentJobName }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetUserDefinedFunctionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName }),
    };
};
const serializeAws_json1_1GetUserDefinedFunctionsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Pattern !== undefined && input.Pattern !== null && { Pattern: input.Pattern }),
    };
};
const serializeAws_json1_1GetWorkflowRequest = (input, context) => {
    return {
        ...(input.IncludeGraph !== undefined && input.IncludeGraph !== null && { IncludeGraph: input.IncludeGraph }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1GetWorkflowRunPropertiesRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
    };
};
const serializeAws_json1_1GetWorkflowRunRequest = (input, context) => {
    return {
        ...(input.IncludeGraph !== undefined && input.IncludeGraph !== null && { IncludeGraph: input.IncludeGraph }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
    };
};
const serializeAws_json1_1GetWorkflowRunsRequest = (input, context) => {
    return {
        ...(input.IncludeGraph !== undefined && input.IncludeGraph !== null && { IncludeGraph: input.IncludeGraph }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GlueTable = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ConnectionName !== undefined &&
            input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1GlueTables = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1GlueTable(entry, context);
    });
};
const serializeAws_json1_1ImportCatalogToGlueRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    };
};
const serializeAws_json1_1JdbcTarget = (input, context) => {
    return {
        ...(input.ConnectionName !== undefined &&
            input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
        ...(input.Exclusions !== undefined &&
            input.Exclusions !== null && { Exclusions: serializeAws_json1_1PathList(input.Exclusions, context) }),
        ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    };
};
const serializeAws_json1_1JdbcTargetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1JdbcTarget(entry, context);
    });
};
const serializeAws_json1_1JobBookmarksEncryption = (input, context) => {
    return {
        ...(input.JobBookmarksEncryptionMode !== undefined &&
            input.JobBookmarksEncryptionMode !== null && { JobBookmarksEncryptionMode: input.JobBookmarksEncryptionMode }),
        ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
    };
};
const serializeAws_json1_1JobCommand = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.PythonVersion !== undefined && input.PythonVersion !== null && { PythonVersion: input.PythonVersion }),
        ...(input.ScriptLocation !== undefined &&
            input.ScriptLocation !== null && { ScriptLocation: input.ScriptLocation }),
    };
};
const serializeAws_json1_1JobNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1JobUpdate = (input, context) => {
    return {
        ...(input.AllocatedCapacity !== undefined &&
            input.AllocatedCapacity !== null && { AllocatedCapacity: input.AllocatedCapacity }),
        ...(input.Command !== undefined &&
            input.Command !== null && { Command: serializeAws_json1_1JobCommand(input.Command, context) }),
        ...(input.Connections !== undefined &&
            input.Connections !== null && { Connections: serializeAws_json1_1ConnectionsList(input.Connections, context) }),
        ...(input.DefaultArguments !== undefined &&
            input.DefaultArguments !== null && {
            DefaultArguments: serializeAws_json1_1GenericMap(input.DefaultArguments, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.ExecutionProperty !== undefined &&
            input.ExecutionProperty !== null && {
            ExecutionProperty: serializeAws_json1_1ExecutionProperty(input.ExecutionProperty, context),
        }),
        ...(input.GlueVersion !== undefined && input.GlueVersion !== null && { GlueVersion: input.GlueVersion }),
        ...(input.LogUri !== undefined && input.LogUri !== null && { LogUri: input.LogUri }),
        ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
        ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
        ...(input.NonOverridableArguments !== undefined &&
            input.NonOverridableArguments !== null && {
            NonOverridableArguments: serializeAws_json1_1GenericMap(input.NonOverridableArguments, context),
        }),
        ...(input.NotificationProperty !== undefined &&
            input.NotificationProperty !== null && {
            NotificationProperty: serializeAws_json1_1NotificationProperty(input.NotificationProperty, context),
        }),
        ...(input.NumberOfWorkers !== undefined &&
            input.NumberOfWorkers !== null && { NumberOfWorkers: input.NumberOfWorkers }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.SecurityConfiguration !== undefined &&
            input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
        ...(input.WorkerType !== undefined && input.WorkerType !== null && { WorkerType: input.WorkerType }),
    };
};
const serializeAws_json1_1KeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1LineageConfiguration = (input, context) => {
    return {
        ...(input.CrawlerLineageSettings !== undefined &&
            input.CrawlerLineageSettings !== null && { CrawlerLineageSettings: input.CrawlerLineageSettings }),
    };
};
const serializeAws_json1_1ListCrawlersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    };
};
const serializeAws_json1_1ListDevEndpointsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    };
};
const serializeAws_json1_1ListJobsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    };
};
const serializeAws_json1_1ListMLTransformsRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1TransformFilterCriteria(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Sort !== undefined &&
            input.Sort !== null && { Sort: serializeAws_json1_1TransformSortCriteria(input.Sort, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    };
};
const serializeAws_json1_1ListRegistriesInput = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListSchemasInput = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.RegistryId !== undefined &&
            input.RegistryId !== null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
    };
};
const serializeAws_json1_1ListSchemaVersionsInput = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    };
};
const serializeAws_json1_1ListTriggersRequest = (input, context) => {
    return {
        ...(input.DependentJobName !== undefined &&
            input.DependentJobName !== null && { DependentJobName: input.DependentJobName }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    };
};
const serializeAws_json1_1ListWorkflowsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1Location = (input, context) => {
    return {
        ...(input.DynamoDB !== undefined &&
            input.DynamoDB !== null && { DynamoDB: serializeAws_json1_1CodeGenNodeArgs(input.DynamoDB, context) }),
        ...(input.Jdbc !== undefined &&
            input.Jdbc !== null && { Jdbc: serializeAws_json1_1CodeGenNodeArgs(input.Jdbc, context) }),
        ...(input.S3 !== undefined && input.S3 !== null && { S3: serializeAws_json1_1CodeGenNodeArgs(input.S3, context) }),
    };
};
const serializeAws_json1_1LocationMap = (input, context) => {
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
const serializeAws_json1_1LongColumnStatisticsData = (input, context) => {
    return {
        ...(input.MaximumValue !== undefined && input.MaximumValue !== null && { MaximumValue: input.MaximumValue }),
        ...(input.MinimumValue !== undefined && input.MinimumValue !== null && { MinimumValue: input.MinimumValue }),
        ...(input.NumberOfDistinctValues !== undefined &&
            input.NumberOfDistinctValues !== null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
        ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
    };
};
const serializeAws_json1_1MappingEntry = (input, context) => {
    return {
        ...(input.SourcePath !== undefined && input.SourcePath !== null && { SourcePath: input.SourcePath }),
        ...(input.SourceTable !== undefined && input.SourceTable !== null && { SourceTable: input.SourceTable }),
        ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
        ...(input.TargetPath !== undefined && input.TargetPath !== null && { TargetPath: input.TargetPath }),
        ...(input.TargetTable !== undefined && input.TargetTable !== null && { TargetTable: input.TargetTable }),
        ...(input.TargetType !== undefined && input.TargetType !== null && { TargetType: input.TargetType }),
    };
};
const serializeAws_json1_1MappingList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MappingEntry(entry, context);
    });
};
const serializeAws_json1_1MapValue = (input, context) => {
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
const serializeAws_json1_1MatchCriteria = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1MetadataKeyValuePair = (input, context) => {
    return {
        ...(input.MetadataKey !== undefined && input.MetadataKey !== null && { MetadataKey: input.MetadataKey }),
        ...(input.MetadataValue !== undefined && input.MetadataValue !== null && { MetadataValue: input.MetadataValue }),
    };
};
const serializeAws_json1_1MetadataList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MetadataKeyValuePair(entry, context);
    });
};
const serializeAws_json1_1MLUserDataEncryption = (input, context) => {
    return {
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.MlUserDataEncryptionMode !== undefined &&
            input.MlUserDataEncryptionMode !== null && { MlUserDataEncryptionMode: input.MlUserDataEncryptionMode }),
    };
};
const serializeAws_json1_1MongoDBTarget = (input, context) => {
    return {
        ...(input.ConnectionName !== undefined &&
            input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
        ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
        ...(input.ScanAll !== undefined && input.ScanAll !== null && { ScanAll: input.ScanAll }),
    };
};
const serializeAws_json1_1MongoDBTargetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MongoDBTarget(entry, context);
    });
};
const serializeAws_json1_1NameStringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1NodeIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1NotificationProperty = (input, context) => {
    return {
        ...(input.NotifyDelayAfter !== undefined &&
            input.NotifyDelayAfter !== null && { NotifyDelayAfter: input.NotifyDelayAfter }),
    };
};
const serializeAws_json1_1OrchestrationStringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Order = (input, context) => {
    return {
        ...(input.Column !== undefined && input.Column !== null && { Column: input.Column }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1OrderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Order(entry, context);
    });
};
const serializeAws_json1_1ParametersMap = (input, context) => {
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
const serializeAws_json1_1PartitionIndex = (input, context) => {
    return {
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.Keys !== undefined && input.Keys !== null && { Keys: serializeAws_json1_1KeyList(input.Keys, context) }),
    };
};
const serializeAws_json1_1PartitionIndexList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PartitionIndex(entry, context);
    });
};
const serializeAws_json1_1PartitionInput = (input, context) => {
    return {
        ...(input.LastAccessTime !== undefined &&
            input.LastAccessTime !== null && { LastAccessTime: Math.round(input.LastAccessTime.getTime() / 1000) }),
        ...(input.LastAnalyzedTime !== undefined &&
            input.LastAnalyzedTime !== null && { LastAnalyzedTime: Math.round(input.LastAnalyzedTime.getTime() / 1000) }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
        ...(input.StorageDescriptor !== undefined &&
            input.StorageDescriptor !== null && {
            StorageDescriptor: serializeAws_json1_1StorageDescriptor(input.StorageDescriptor, context),
        }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1ValueStringList(input.Values, context) }),
    };
};
const serializeAws_json1_1PartitionInputList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PartitionInput(entry, context);
    });
};
const serializeAws_json1_1PartitionValueList = (input, context) => {
    return {
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1ValueStringList(input.Values, context) }),
    };
};
const serializeAws_json1_1PathList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PermissionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PhysicalConnectionRequirements = (input, context) => {
    return {
        ...(input.AvailabilityZone !== undefined &&
            input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
        ...(input.SecurityGroupIdList !== undefined &&
            input.SecurityGroupIdList !== null && {
            SecurityGroupIdList: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIdList, context),
        }),
        ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
    };
};
const serializeAws_json1_1Predicate = (input, context) => {
    return {
        ...(input.Conditions !== undefined &&
            input.Conditions !== null && { Conditions: serializeAws_json1_1ConditionList(input.Conditions, context) }),
        ...(input.Logical !== undefined && input.Logical !== null && { Logical: input.Logical }),
    };
};
const serializeAws_json1_1PrincipalPermissions = (input, context) => {
    return {
        ...(input.Permissions !== undefined &&
            input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) }),
        ...(input.Principal !== undefined &&
            input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
    };
};
const serializeAws_json1_1PrincipalPermissionsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PrincipalPermissions(entry, context);
    });
};
const serializeAws_json1_1PropertyPredicate = (input, context) => {
    return {
        ...(input.Comparator !== undefined && input.Comparator !== null && { Comparator: input.Comparator }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1PublicKeysList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PutDataCatalogEncryptionSettingsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DataCatalogEncryptionSettings !== undefined &&
            input.DataCatalogEncryptionSettings !== null && {
            DataCatalogEncryptionSettings: serializeAws_json1_1DataCatalogEncryptionSettings(input.DataCatalogEncryptionSettings, context),
        }),
    };
};
const serializeAws_json1_1PutResourcePolicyRequest = (input, context) => {
    return {
        ...(input.EnableHybrid !== undefined && input.EnableHybrid !== null && { EnableHybrid: input.EnableHybrid }),
        ...(input.PolicyExistsCondition !== undefined &&
            input.PolicyExistsCondition !== null && { PolicyExistsCondition: input.PolicyExistsCondition }),
        ...(input.PolicyHashCondition !== undefined &&
            input.PolicyHashCondition !== null && { PolicyHashCondition: input.PolicyHashCondition }),
        ...(input.PolicyInJson !== undefined && input.PolicyInJson !== null && { PolicyInJson: input.PolicyInJson }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1PutSchemaVersionMetadataInput = (input, context) => {
    return {
        ...(input.MetadataKeyValue !== undefined &&
            input.MetadataKeyValue !== null && {
            MetadataKeyValue: serializeAws_json1_1MetadataKeyValuePair(input.MetadataKeyValue, context),
        }),
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
        ...(input.SchemaVersionId !== undefined &&
            input.SchemaVersionId !== null && { SchemaVersionId: input.SchemaVersionId }),
        ...(input.SchemaVersionNumber !== undefined &&
            input.SchemaVersionNumber !== null && {
            SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
        }),
    };
};
const serializeAws_json1_1PutWorkflowRunPropertiesRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
        ...(input.RunProperties !== undefined &&
            input.RunProperties !== null && {
            RunProperties: serializeAws_json1_1WorkflowRunProperties(input.RunProperties, context),
        }),
    };
};
const serializeAws_json1_1QuerySchemaVersionMetadataInput = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.MetadataList !== undefined &&
            input.MetadataList !== null && { MetadataList: serializeAws_json1_1MetadataList(input.MetadataList, context) }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
        ...(input.SchemaVersionId !== undefined &&
            input.SchemaVersionId !== null && { SchemaVersionId: input.SchemaVersionId }),
        ...(input.SchemaVersionNumber !== undefined &&
            input.SchemaVersionNumber !== null && {
            SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
        }),
    };
};
const serializeAws_json1_1RecrawlPolicy = (input, context) => {
    return {
        ...(input.RecrawlBehavior !== undefined &&
            input.RecrawlBehavior !== null && { RecrawlBehavior: input.RecrawlBehavior }),
    };
};
const serializeAws_json1_1RegisterSchemaVersionInput = (input, context) => {
    return {
        ...(input.SchemaDefinition !== undefined &&
            input.SchemaDefinition !== null && { SchemaDefinition: input.SchemaDefinition }),
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    };
};
const serializeAws_json1_1RegistryId = (input, context) => {
    return {
        ...(input.RegistryArn !== undefined && input.RegistryArn !== null && { RegistryArn: input.RegistryArn }),
        ...(input.RegistryName !== undefined && input.RegistryName !== null && { RegistryName: input.RegistryName }),
    };
};
const serializeAws_json1_1RemoveSchemaVersionMetadataInput = (input, context) => {
    return {
        ...(input.MetadataKeyValue !== undefined &&
            input.MetadataKeyValue !== null && {
            MetadataKeyValue: serializeAws_json1_1MetadataKeyValuePair(input.MetadataKeyValue, context),
        }),
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
        ...(input.SchemaVersionId !== undefined &&
            input.SchemaVersionId !== null && { SchemaVersionId: input.SchemaVersionId }),
        ...(input.SchemaVersionNumber !== undefined &&
            input.SchemaVersionNumber !== null && {
            SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
        }),
    };
};
const serializeAws_json1_1ResetJobBookmarkRequest = (input, context) => {
    return {
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
    };
};
const serializeAws_json1_1ResourceUri = (input, context) => {
    return {
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
    };
};
const serializeAws_json1_1ResourceUriList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResourceUri(entry, context);
    });
};
const serializeAws_json1_1ResumeWorkflowRunRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NodeIds !== undefined &&
            input.NodeIds !== null && { NodeIds: serializeAws_json1_1NodeIdList(input.NodeIds, context) }),
        ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
    };
};
const serializeAws_json1_1S3Encryption = (input, context) => {
    return {
        ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
        ...(input.S3EncryptionMode !== undefined &&
            input.S3EncryptionMode !== null && { S3EncryptionMode: input.S3EncryptionMode }),
    };
};
const serializeAws_json1_1S3EncryptionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1S3Encryption(entry, context);
    });
};
const serializeAws_json1_1S3Target = (input, context) => {
    return {
        ...(input.ConnectionName !== undefined &&
            input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
        ...(input.Exclusions !== undefined &&
            input.Exclusions !== null && { Exclusions: serializeAws_json1_1PathList(input.Exclusions, context) }),
        ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    };
};
const serializeAws_json1_1S3TargetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1S3Target(entry, context);
    });
};
const serializeAws_json1_1SchemaChangePolicy = (input, context) => {
    return {
        ...(input.DeleteBehavior !== undefined &&
            input.DeleteBehavior !== null && { DeleteBehavior: input.DeleteBehavior }),
        ...(input.UpdateBehavior !== undefined &&
            input.UpdateBehavior !== null && { UpdateBehavior: input.UpdateBehavior }),
    };
};
const serializeAws_json1_1SchemaColumn = (input, context) => {
    return {
        ...(input.DataType !== undefined && input.DataType !== null && { DataType: input.DataType }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1SchemaId = (input, context) => {
    return {
        ...(input.RegistryName !== undefined && input.RegistryName !== null && { RegistryName: input.RegistryName }),
        ...(input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }),
        ...(input.SchemaName !== undefined && input.SchemaName !== null && { SchemaName: input.SchemaName }),
    };
};
const serializeAws_json1_1SchemaReference = (input, context) => {
    return {
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
        ...(input.SchemaVersionId !== undefined &&
            input.SchemaVersionId !== null && { SchemaVersionId: input.SchemaVersionId }),
        ...(input.SchemaVersionNumber !== undefined &&
            input.SchemaVersionNumber !== null && { SchemaVersionNumber: input.SchemaVersionNumber }),
    };
};
const serializeAws_json1_1SchemaVersionNumber = (input, context) => {
    return {
        ...(input.LatestVersion !== undefined && input.LatestVersion !== null && { LatestVersion: input.LatestVersion }),
        ...(input.VersionNumber !== undefined && input.VersionNumber !== null && { VersionNumber: input.VersionNumber }),
    };
};
const serializeAws_json1_1SearchPropertyPredicates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PropertyPredicate(entry, context);
    });
};
const serializeAws_json1_1SearchTablesRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1SearchPropertyPredicates(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceShareType !== undefined &&
            input.ResourceShareType !== null && { ResourceShareType: input.ResourceShareType }),
        ...(input.SearchText !== undefined && input.SearchText !== null && { SearchText: input.SearchText }),
        ...(input.SortCriteria !== undefined &&
            input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortCriteria(input.SortCriteria, context) }),
    };
};
const serializeAws_json1_1SecurityGroupIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Segment = (input, context) => {
    return {
        ...(input.SegmentNumber !== undefined && input.SegmentNumber !== null && { SegmentNumber: input.SegmentNumber }),
        ...(input.TotalSegments !== undefined && input.TotalSegments !== null && { TotalSegments: input.TotalSegments }),
    };
};
const serializeAws_json1_1SerDeInfo = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
        ...(input.SerializationLibrary !== undefined &&
            input.SerializationLibrary !== null && { SerializationLibrary: input.SerializationLibrary }),
    };
};
const serializeAws_json1_1SkewedInfo = (input, context) => {
    return {
        ...(input.SkewedColumnNames !== undefined &&
            input.SkewedColumnNames !== null && {
            SkewedColumnNames: serializeAws_json1_1NameStringList(input.SkewedColumnNames, context),
        }),
        ...(input.SkewedColumnValueLocationMaps !== undefined &&
            input.SkewedColumnValueLocationMaps !== null && {
            SkewedColumnValueLocationMaps: serializeAws_json1_1LocationMap(input.SkewedColumnValueLocationMaps, context),
        }),
        ...(input.SkewedColumnValues !== undefined &&
            input.SkewedColumnValues !== null && {
            SkewedColumnValues: serializeAws_json1_1ColumnValueStringList(input.SkewedColumnValues, context),
        }),
    };
};
const serializeAws_json1_1SortCriteria = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SortCriterion(entry, context);
    });
};
const serializeAws_json1_1SortCriterion = (input, context) => {
    return {
        ...(input.FieldName !== undefined && input.FieldName !== null && { FieldName: input.FieldName }),
        ...(input.Sort !== undefined && input.Sort !== null && { Sort: input.Sort }),
    };
};
const serializeAws_json1_1StartCrawlerRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1StartCrawlerScheduleRequest = (input, context) => {
    return {
        ...(input.CrawlerName !== undefined && input.CrawlerName !== null && { CrawlerName: input.CrawlerName }),
    };
};
const serializeAws_json1_1StartExportLabelsTaskRunRequest = (input, context) => {
    return {
        ...(input.OutputS3Path !== undefined && input.OutputS3Path !== null && { OutputS3Path: input.OutputS3Path }),
        ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
    };
};
const serializeAws_json1_1StartImportLabelsTaskRunRequest = (input, context) => {
    return {
        ...(input.InputS3Path !== undefined && input.InputS3Path !== null && { InputS3Path: input.InputS3Path }),
        ...(input.ReplaceAllLabels !== undefined &&
            input.ReplaceAllLabels !== null && { ReplaceAllLabels: input.ReplaceAllLabels }),
        ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
    };
};
const serializeAws_json1_1StartJobRunRequest = (input, context) => {
    return {
        ...(input.AllocatedCapacity !== undefined &&
            input.AllocatedCapacity !== null && { AllocatedCapacity: input.AllocatedCapacity }),
        ...(input.Arguments !== undefined &&
            input.Arguments !== null && { Arguments: serializeAws_json1_1GenericMap(input.Arguments, context) }),
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.JobRunId !== undefined && input.JobRunId !== null && { JobRunId: input.JobRunId }),
        ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
        ...(input.NotificationProperty !== undefined &&
            input.NotificationProperty !== null && {
            NotificationProperty: serializeAws_json1_1NotificationProperty(input.NotificationProperty, context),
        }),
        ...(input.NumberOfWorkers !== undefined &&
            input.NumberOfWorkers !== null && { NumberOfWorkers: input.NumberOfWorkers }),
        ...(input.SecurityConfiguration !== undefined &&
            input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
        ...(input.WorkerType !== undefined && input.WorkerType !== null && { WorkerType: input.WorkerType }),
    };
};
const serializeAws_json1_1StartMLEvaluationTaskRunRequest = (input, context) => {
    return {
        ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
    };
};
const serializeAws_json1_1StartMLLabelingSetGenerationTaskRunRequest = (input, context) => {
    return {
        ...(input.OutputS3Path !== undefined && input.OutputS3Path !== null && { OutputS3Path: input.OutputS3Path }),
        ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
    };
};
const serializeAws_json1_1StartTriggerRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1StartWorkflowRunRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1StopCrawlerRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1StopCrawlerScheduleRequest = (input, context) => {
    return {
        ...(input.CrawlerName !== undefined && input.CrawlerName !== null && { CrawlerName: input.CrawlerName }),
    };
};
const serializeAws_json1_1StopTriggerRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1StopWorkflowRunRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RunId !== undefined && input.RunId !== null && { RunId: input.RunId }),
    };
};
const serializeAws_json1_1StorageDescriptor = (input, context) => {
    return {
        ...(input.BucketColumns !== undefined &&
            input.BucketColumns !== null && {
            BucketColumns: serializeAws_json1_1NameStringList(input.BucketColumns, context),
        }),
        ...(input.Columns !== undefined &&
            input.Columns !== null && { Columns: serializeAws_json1_1ColumnList(input.Columns, context) }),
        ...(input.Compressed !== undefined && input.Compressed !== null && { Compressed: input.Compressed }),
        ...(input.InputFormat !== undefined && input.InputFormat !== null && { InputFormat: input.InputFormat }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
        ...(input.NumberOfBuckets !== undefined &&
            input.NumberOfBuckets !== null && { NumberOfBuckets: input.NumberOfBuckets }),
        ...(input.OutputFormat !== undefined && input.OutputFormat !== null && { OutputFormat: input.OutputFormat }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
        ...(input.SchemaReference !== undefined &&
            input.SchemaReference !== null && {
            SchemaReference: serializeAws_json1_1SchemaReference(input.SchemaReference, context),
        }),
        ...(input.SerdeInfo !== undefined &&
            input.SerdeInfo !== null && { SerdeInfo: serializeAws_json1_1SerDeInfo(input.SerdeInfo, context) }),
        ...(input.SkewedInfo !== undefined &&
            input.SkewedInfo !== null && { SkewedInfo: serializeAws_json1_1SkewedInfo(input.SkewedInfo, context) }),
        ...(input.SortColumns !== undefined &&
            input.SortColumns !== null && { SortColumns: serializeAws_json1_1OrderList(input.SortColumns, context) }),
        ...(input.StoredAsSubDirectories !== undefined &&
            input.StoredAsSubDirectories !== null && { StoredAsSubDirectories: input.StoredAsSubDirectories }),
    };
};
const serializeAws_json1_1StringColumnStatisticsData = (input, context) => {
    return {
        ...(input.AverageLength !== undefined && input.AverageLength !== null && { AverageLength: input.AverageLength }),
        ...(input.MaximumLength !== undefined && input.MaximumLength !== null && { MaximumLength: input.MaximumLength }),
        ...(input.NumberOfDistinctValues !== undefined &&
            input.NumberOfDistinctValues !== null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
        ...(input.NumberOfNulls !== undefined && input.NumberOfNulls !== null && { NumberOfNulls: input.NumberOfNulls }),
    };
};
const serializeAws_json1_1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TableIdentifier = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1TableInput = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.LastAccessTime !== undefined &&
            input.LastAccessTime !== null && { LastAccessTime: Math.round(input.LastAccessTime.getTime() / 1000) }),
        ...(input.LastAnalyzedTime !== undefined &&
            input.LastAnalyzedTime !== null && { LastAnalyzedTime: Math.round(input.LastAnalyzedTime.getTime() / 1000) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
        ...(input.PartitionKeys !== undefined &&
            input.PartitionKeys !== null && { PartitionKeys: serializeAws_json1_1ColumnList(input.PartitionKeys, context) }),
        ...(input.Retention !== undefined && input.Retention !== null && { Retention: input.Retention }),
        ...(input.StorageDescriptor !== undefined &&
            input.StorageDescriptor !== null && {
            StorageDescriptor: serializeAws_json1_1StorageDescriptor(input.StorageDescriptor, context),
        }),
        ...(input.TableType !== undefined && input.TableType !== null && { TableType: input.TableType }),
        ...(input.TargetTable !== undefined &&
            input.TargetTable !== null && { TargetTable: serializeAws_json1_1TableIdentifier(input.TargetTable, context) }),
        ...(input.ViewExpandedText !== undefined &&
            input.ViewExpandedText !== null && { ViewExpandedText: input.ViewExpandedText }),
        ...(input.ViewOriginalText !== undefined &&
            input.ViewOriginalText !== null && { ViewOriginalText: input.ViewOriginalText }),
    };
};
const serializeAws_json1_1TagKeysList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagsToAdd !== undefined &&
            input.TagsToAdd !== null && { TagsToAdd: serializeAws_json1_1TagsMap(input.TagsToAdd, context) }),
    };
};
const serializeAws_json1_1TagsMap = (input, context) => {
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
const serializeAws_json1_1TaskRunFilterCriteria = (input, context) => {
    return {
        ...(input.StartedAfter !== undefined &&
            input.StartedAfter !== null && { StartedAfter: Math.round(input.StartedAfter.getTime() / 1000) }),
        ...(input.StartedBefore !== undefined &&
            input.StartedBefore !== null && { StartedBefore: Math.round(input.StartedBefore.getTime() / 1000) }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
        ...(input.TaskRunType !== undefined && input.TaskRunType !== null && { TaskRunType: input.TaskRunType }),
    };
};
const serializeAws_json1_1TaskRunSortCriteria = (input, context) => {
    return {
        ...(input.Column !== undefined && input.Column !== null && { Column: input.Column }),
        ...(input.SortDirection !== undefined && input.SortDirection !== null && { SortDirection: input.SortDirection }),
    };
};
const serializeAws_json1_1TransformEncryption = (input, context) => {
    return {
        ...(input.MlUserDataEncryption !== undefined &&
            input.MlUserDataEncryption !== null && {
            MlUserDataEncryption: serializeAws_json1_1MLUserDataEncryption(input.MlUserDataEncryption, context),
        }),
        ...(input.TaskRunSecurityConfigurationName !== undefined &&
            input.TaskRunSecurityConfigurationName !== null && {
            TaskRunSecurityConfigurationName: input.TaskRunSecurityConfigurationName,
        }),
    };
};
const serializeAws_json1_1TransformFilterCriteria = (input, context) => {
    return {
        ...(input.CreatedAfter !== undefined &&
            input.CreatedAfter !== null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
        ...(input.CreatedBefore !== undefined &&
            input.CreatedBefore !== null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
        ...(input.GlueVersion !== undefined && input.GlueVersion !== null && { GlueVersion: input.GlueVersion }),
        ...(input.LastModifiedAfter !== undefined &&
            input.LastModifiedAfter !== null && { LastModifiedAfter: Math.round(input.LastModifiedAfter.getTime() / 1000) }),
        ...(input.LastModifiedBefore !== undefined &&
            input.LastModifiedBefore !== null && {
            LastModifiedBefore: Math.round(input.LastModifiedBefore.getTime() / 1000),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Schema !== undefined &&
            input.Schema !== null && { Schema: serializeAws_json1_1TransformSchema(input.Schema, context) }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
        ...(input.TransformType !== undefined && input.TransformType !== null && { TransformType: input.TransformType }),
    };
};
const serializeAws_json1_1TransformParameters = (input, context) => {
    return {
        ...(input.FindMatchesParameters !== undefined &&
            input.FindMatchesParameters !== null && {
            FindMatchesParameters: serializeAws_json1_1FindMatchesParameters(input.FindMatchesParameters, context),
        }),
        ...(input.TransformType !== undefined && input.TransformType !== null && { TransformType: input.TransformType }),
    };
};
const serializeAws_json1_1TransformSchema = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SchemaColumn(entry, context);
    });
};
const serializeAws_json1_1TransformSortCriteria = (input, context) => {
    return {
        ...(input.Column !== undefined && input.Column !== null && { Column: input.Column }),
        ...(input.SortDirection !== undefined && input.SortDirection !== null && { SortDirection: input.SortDirection }),
    };
};
const serializeAws_json1_1TriggerNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TriggerUpdate = (input, context) => {
    return {
        ...(input.Actions !== undefined &&
            input.Actions !== null && { Actions: serializeAws_json1_1ActionList(input.Actions, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Predicate !== undefined &&
            input.Predicate !== null && { Predicate: serializeAws_json1_1Predicate(input.Predicate, context) }),
        ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagsToRemove !== undefined &&
            input.TagsToRemove !== null && { TagsToRemove: serializeAws_json1_1TagKeysList(input.TagsToRemove, context) }),
    };
};
const serializeAws_json1_1UpdateClassifierRequest = (input, context) => {
    return {
        ...(input.CsvClassifier !== undefined &&
            input.CsvClassifier !== null && {
            CsvClassifier: serializeAws_json1_1UpdateCsvClassifierRequest(input.CsvClassifier, context),
        }),
        ...(input.GrokClassifier !== undefined &&
            input.GrokClassifier !== null && {
            GrokClassifier: serializeAws_json1_1UpdateGrokClassifierRequest(input.GrokClassifier, context),
        }),
        ...(input.JsonClassifier !== undefined &&
            input.JsonClassifier !== null && {
            JsonClassifier: serializeAws_json1_1UpdateJsonClassifierRequest(input.JsonClassifier, context),
        }),
        ...(input.XMLClassifier !== undefined &&
            input.XMLClassifier !== null && {
            XMLClassifier: serializeAws_json1_1UpdateXMLClassifierRequest(input.XMLClassifier, context),
        }),
    };
};
const serializeAws_json1_1UpdateColumnStatisticsForPartitionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ColumnStatisticsList !== undefined &&
            input.ColumnStatisticsList !== null && {
            ColumnStatisticsList: serializeAws_json1_1UpdateColumnStatisticsList(input.ColumnStatisticsList, context),
        }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.PartitionValues !== undefined &&
            input.PartitionValues !== null && {
            PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1UpdateColumnStatisticsForTableRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ColumnStatisticsList !== undefined &&
            input.ColumnStatisticsList !== null && {
            ColumnStatisticsList: serializeAws_json1_1UpdateColumnStatisticsList(input.ColumnStatisticsList, context),
        }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1UpdateColumnStatisticsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ColumnStatistics(entry, context);
    });
};
const serializeAws_json1_1UpdateConnectionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ConnectionInput !== undefined &&
            input.ConnectionInput !== null && {
            ConnectionInput: serializeAws_json1_1ConnectionInput(input.ConnectionInput, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateCrawlerRequest = (input, context) => {
    return {
        ...(input.Classifiers !== undefined &&
            input.Classifiers !== null && {
            Classifiers: serializeAws_json1_1ClassifierNameList(input.Classifiers, context),
        }),
        ...(input.Configuration !== undefined && input.Configuration !== null && { Configuration: input.Configuration }),
        ...(input.CrawlerSecurityConfiguration !== undefined &&
            input.CrawlerSecurityConfiguration !== null && {
            CrawlerSecurityConfiguration: input.CrawlerSecurityConfiguration,
        }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.LineageConfiguration !== undefined &&
            input.LineageConfiguration !== null && {
            LineageConfiguration: serializeAws_json1_1LineageConfiguration(input.LineageConfiguration, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RecrawlPolicy !== undefined &&
            input.RecrawlPolicy !== null && {
            RecrawlPolicy: serializeAws_json1_1RecrawlPolicy(input.RecrawlPolicy, context),
        }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
        ...(input.SchemaChangePolicy !== undefined &&
            input.SchemaChangePolicy !== null && {
            SchemaChangePolicy: serializeAws_json1_1SchemaChangePolicy(input.SchemaChangePolicy, context),
        }),
        ...(input.TablePrefix !== undefined && input.TablePrefix !== null && { TablePrefix: input.TablePrefix }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1CrawlerTargets(input.Targets, context) }),
    };
};
const serializeAws_json1_1UpdateCrawlerScheduleRequest = (input, context) => {
    return {
        ...(input.CrawlerName !== undefined && input.CrawlerName !== null && { CrawlerName: input.CrawlerName }),
        ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
    };
};
const serializeAws_json1_1UpdateCsvClassifierRequest = (input, context) => {
    return {
        ...(input.AllowSingleColumn !== undefined &&
            input.AllowSingleColumn !== null && { AllowSingleColumn: input.AllowSingleColumn }),
        ...(input.ContainsHeader !== undefined &&
            input.ContainsHeader !== null && { ContainsHeader: input.ContainsHeader }),
        ...(input.Delimiter !== undefined && input.Delimiter !== null && { Delimiter: input.Delimiter }),
        ...(input.DisableValueTrimming !== undefined &&
            input.DisableValueTrimming !== null && { DisableValueTrimming: input.DisableValueTrimming }),
        ...(input.Header !== undefined &&
            input.Header !== null && { Header: serializeAws_json1_1CsvHeader(input.Header, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.QuoteSymbol !== undefined && input.QuoteSymbol !== null && { QuoteSymbol: input.QuoteSymbol }),
    };
};
const serializeAws_json1_1UpdateDatabaseRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseInput !== undefined &&
            input.DatabaseInput !== null && {
            DatabaseInput: serializeAws_json1_1DatabaseInput(input.DatabaseInput, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateDevEndpointRequest = (input, context) => {
    return {
        ...(input.AddArguments !== undefined &&
            input.AddArguments !== null && { AddArguments: serializeAws_json1_1MapValue(input.AddArguments, context) }),
        ...(input.AddPublicKeys !== undefined &&
            input.AddPublicKeys !== null && {
            AddPublicKeys: serializeAws_json1_1PublicKeysList(input.AddPublicKeys, context),
        }),
        ...(input.CustomLibraries !== undefined &&
            input.CustomLibraries !== null && {
            CustomLibraries: serializeAws_json1_1DevEndpointCustomLibraries(input.CustomLibraries, context),
        }),
        ...(input.DeleteArguments !== undefined &&
            input.DeleteArguments !== null && {
            DeleteArguments: serializeAws_json1_1StringList(input.DeleteArguments, context),
        }),
        ...(input.DeletePublicKeys !== undefined &&
            input.DeletePublicKeys !== null && {
            DeletePublicKeys: serializeAws_json1_1PublicKeysList(input.DeletePublicKeys, context),
        }),
        ...(input.EndpointName !== undefined && input.EndpointName !== null && { EndpointName: input.EndpointName }),
        ...(input.PublicKey !== undefined && input.PublicKey !== null && { PublicKey: input.PublicKey }),
        ...(input.UpdateEtlLibraries !== undefined &&
            input.UpdateEtlLibraries !== null && { UpdateEtlLibraries: input.UpdateEtlLibraries }),
    };
};
const serializeAws_json1_1UpdateGrokClassifierRequest = (input, context) => {
    return {
        ...(input.Classification !== undefined &&
            input.Classification !== null && { Classification: input.Classification }),
        ...(input.CustomPatterns !== undefined &&
            input.CustomPatterns !== null && { CustomPatterns: input.CustomPatterns }),
        ...(input.GrokPattern !== undefined && input.GrokPattern !== null && { GrokPattern: input.GrokPattern }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateJobRequest = (input, context) => {
    return {
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.JobUpdate !== undefined &&
            input.JobUpdate !== null && { JobUpdate: serializeAws_json1_1JobUpdate(input.JobUpdate, context) }),
    };
};
const serializeAws_json1_1UpdateJsonClassifierRequest = (input, context) => {
    return {
        ...(input.JsonPath !== undefined && input.JsonPath !== null && { JsonPath: input.JsonPath }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateMLTransformRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.GlueVersion !== undefined && input.GlueVersion !== null && { GlueVersion: input.GlueVersion }),
        ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
        ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NumberOfWorkers !== undefined &&
            input.NumberOfWorkers !== null && { NumberOfWorkers: input.NumberOfWorkers }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1TransformParameters(input.Parameters, context) }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
        ...(input.TransformId !== undefined && input.TransformId !== null && { TransformId: input.TransformId }),
        ...(input.WorkerType !== undefined && input.WorkerType !== null && { WorkerType: input.WorkerType }),
    };
};
const serializeAws_json1_1UpdatePartitionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.PartitionInput !== undefined &&
            input.PartitionInput !== null && {
            PartitionInput: serializeAws_json1_1PartitionInput(input.PartitionInput, context),
        }),
        ...(input.PartitionValueList !== undefined &&
            input.PartitionValueList !== null && {
            PartitionValueList: serializeAws_json1_1BoundedPartitionValueList(input.PartitionValueList, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1UpdateRegistryInput = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.RegistryId !== undefined &&
            input.RegistryId !== null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
    };
};
const serializeAws_json1_1UpdateSchemaInput = (input, context) => {
    return {
        ...(input.Compatibility !== undefined && input.Compatibility !== null && { Compatibility: input.Compatibility }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.SchemaId !== undefined &&
            input.SchemaId !== null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
        ...(input.SchemaVersionNumber !== undefined &&
            input.SchemaVersionNumber !== null && {
            SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
        }),
    };
};
const serializeAws_json1_1UpdateTableRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.SkipArchive !== undefined && input.SkipArchive !== null && { SkipArchive: input.SkipArchive }),
        ...(input.TableInput !== undefined &&
            input.TableInput !== null && { TableInput: serializeAws_json1_1TableInput(input.TableInput, context) }),
    };
};
const serializeAws_json1_1UpdateTriggerRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.TriggerUpdate !== undefined &&
            input.TriggerUpdate !== null && {
            TriggerUpdate: serializeAws_json1_1TriggerUpdate(input.TriggerUpdate, context),
        }),
    };
};
const serializeAws_json1_1UpdateUserDefinedFunctionRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.FunctionInput !== undefined &&
            input.FunctionInput !== null && {
            FunctionInput: serializeAws_json1_1UserDefinedFunctionInput(input.FunctionInput, context),
        }),
        ...(input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName }),
    };
};
const serializeAws_json1_1UpdateWorkflowRequest = (input, context) => {
    return {
        ...(input.DefaultRunProperties !== undefined &&
            input.DefaultRunProperties !== null && {
            DefaultRunProperties: serializeAws_json1_1WorkflowRunProperties(input.DefaultRunProperties, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.MaxConcurrentRuns !== undefined &&
            input.MaxConcurrentRuns !== null && { MaxConcurrentRuns: input.MaxConcurrentRuns }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateXMLClassifierRequest = (input, context) => {
    return {
        ...(input.Classification !== undefined &&
            input.Classification !== null && { Classification: input.Classification }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RowTag !== undefined && input.RowTag !== null && { RowTag: input.RowTag }),
    };
};
const serializeAws_json1_1UserDefinedFunctionInput = (input, context) => {
    return {
        ...(input.ClassName !== undefined && input.ClassName !== null && { ClassName: input.ClassName }),
        ...(input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName }),
        ...(input.OwnerName !== undefined && input.OwnerName !== null && { OwnerName: input.OwnerName }),
        ...(input.OwnerType !== undefined && input.OwnerType !== null && { OwnerType: input.OwnerType }),
        ...(input.ResourceUris !== undefined &&
            input.ResourceUris !== null && {
            ResourceUris: serializeAws_json1_1ResourceUriList(input.ResourceUris, context),
        }),
    };
};
const serializeAws_json1_1ValueStringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1WorkflowNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1WorkflowRunProperties = (input, context) => {
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
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Action = (output, context) => {
    return {
        Arguments: output.Arguments !== undefined && output.Arguments !== null
            ? deserializeAws_json1_1GenericMap(output.Arguments, context)
            : undefined,
        CrawlerName: output.CrawlerName !== undefined && output.CrawlerName !== null ? output.CrawlerName : undefined,
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        NotificationProperty: output.NotificationProperty !== undefined && output.NotificationProperty !== null
            ? deserializeAws_json1_1NotificationProperty(output.NotificationProperty, context)
            : undefined,
        SecurityConfiguration: output.SecurityConfiguration !== undefined && output.SecurityConfiguration !== null
            ? output.SecurityConfiguration
            : undefined,
        Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
    };
};
const deserializeAws_json1_1ActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Action(entry, context);
    });
};
const deserializeAws_json1_1AlreadyExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1BackfillError = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Partitions: output.Partitions !== undefined && output.Partitions !== null
            ? deserializeAws_json1_1BackfillErroredPartitionsList(output.Partitions, context)
            : undefined,
    };
};
const deserializeAws_json1_1BackfillErroredPartitionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PartitionValueList(entry, context);
    });
};
const deserializeAws_json1_1BackfillErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BackfillError(entry, context);
    });
};
const deserializeAws_json1_1BatchCreatePartitionResponse = (output, context) => {
    return {
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_json1_1PartitionErrors(output.Errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchDeleteConnectionResponse = (output, context) => {
    return {
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_json1_1ErrorByName(output.Errors, context)
            : undefined,
        Succeeded: output.Succeeded !== undefined && output.Succeeded !== null
            ? deserializeAws_json1_1NameStringList(output.Succeeded, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchDeletePartitionResponse = (output, context) => {
    return {
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_json1_1PartitionErrors(output.Errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchDeleteTableResponse = (output, context) => {
    return {
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_json1_1TableErrors(output.Errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchDeleteTableVersionResponse = (output, context) => {
    return {
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_json1_1TableVersionErrors(output.Errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetCrawlersResponse = (output, context) => {
    return {
        Crawlers: output.Crawlers !== undefined && output.Crawlers !== null
            ? deserializeAws_json1_1CrawlerList(output.Crawlers, context)
            : undefined,
        CrawlersNotFound: output.CrawlersNotFound !== undefined && output.CrawlersNotFound !== null
            ? deserializeAws_json1_1CrawlerNameList(output.CrawlersNotFound, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetDevEndpointsResponse = (output, context) => {
    return {
        DevEndpoints: output.DevEndpoints !== undefined && output.DevEndpoints !== null
            ? deserializeAws_json1_1DevEndpointList(output.DevEndpoints, context)
            : undefined,
        DevEndpointsNotFound: output.DevEndpointsNotFound !== undefined && output.DevEndpointsNotFound !== null
            ? deserializeAws_json1_1DevEndpointNames(output.DevEndpointsNotFound, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetJobsResponse = (output, context) => {
    return {
        Jobs: output.Jobs !== undefined && output.Jobs !== null
            ? deserializeAws_json1_1JobList(output.Jobs, context)
            : undefined,
        JobsNotFound: output.JobsNotFound !== undefined && output.JobsNotFound !== null
            ? deserializeAws_json1_1JobNameList(output.JobsNotFound, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetPartitionResponse = (output, context) => {
    return {
        Partitions: output.Partitions !== undefined && output.Partitions !== null
            ? deserializeAws_json1_1PartitionList(output.Partitions, context)
            : undefined,
        UnprocessedKeys: output.UnprocessedKeys !== undefined && output.UnprocessedKeys !== null
            ? deserializeAws_json1_1BatchGetPartitionValueList(output.UnprocessedKeys, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetPartitionValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PartitionValueList(entry, context);
    });
};
const deserializeAws_json1_1BatchGetTriggersResponse = (output, context) => {
    return {
        Triggers: output.Triggers !== undefined && output.Triggers !== null
            ? deserializeAws_json1_1TriggerList(output.Triggers, context)
            : undefined,
        TriggersNotFound: output.TriggersNotFound !== undefined && output.TriggersNotFound !== null
            ? deserializeAws_json1_1TriggerNameList(output.TriggersNotFound, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetWorkflowsResponse = (output, context) => {
    return {
        MissingWorkflows: output.MissingWorkflows !== undefined && output.MissingWorkflows !== null
            ? deserializeAws_json1_1WorkflowNames(output.MissingWorkflows, context)
            : undefined,
        Workflows: output.Workflows !== undefined && output.Workflows !== null
            ? deserializeAws_json1_1Workflows(output.Workflows, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchStopJobRunError = (output, context) => {
    return {
        ErrorDetail: output.ErrorDetail !== undefined && output.ErrorDetail !== null
            ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context)
            : undefined,
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        JobRunId: output.JobRunId !== undefined && output.JobRunId !== null ? output.JobRunId : undefined,
    };
};
const deserializeAws_json1_1BatchStopJobRunErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchStopJobRunError(entry, context);
    });
};
const deserializeAws_json1_1BatchStopJobRunResponse = (output, context) => {
    return {
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_json1_1BatchStopJobRunErrorList(output.Errors, context)
            : undefined,
        SuccessfulSubmissions: output.SuccessfulSubmissions !== undefined && output.SuccessfulSubmissions !== null
            ? deserializeAws_json1_1BatchStopJobRunSuccessfulSubmissionList(output.SuccessfulSubmissions, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchStopJobRunSuccessfulSubmission = (output, context) => {
    return {
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        JobRunId: output.JobRunId !== undefined && output.JobRunId !== null ? output.JobRunId : undefined,
    };
};
const deserializeAws_json1_1BatchStopJobRunSuccessfulSubmissionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchStopJobRunSuccessfulSubmission(entry, context);
    });
};
const deserializeAws_json1_1BatchUpdatePartitionFailureEntry = (output, context) => {
    return {
        ErrorDetail: output.ErrorDetail !== undefined && output.ErrorDetail !== null
            ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context)
            : undefined,
        PartitionValueList: output.PartitionValueList !== undefined && output.PartitionValueList !== null
            ? deserializeAws_json1_1BoundedPartitionValueList(output.PartitionValueList, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchUpdatePartitionFailureList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchUpdatePartitionFailureEntry(entry, context);
    });
};
const deserializeAws_json1_1BatchUpdatePartitionResponse = (output, context) => {
    return {
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_json1_1BatchUpdatePartitionFailureList(output.Errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1BinaryColumnStatisticsData = (output, context) => {
    return {
        AverageLength: output.AverageLength !== undefined && output.AverageLength !== null ? output.AverageLength : undefined,
        MaximumLength: output.MaximumLength !== undefined && output.MaximumLength !== null ? output.MaximumLength : undefined,
        NumberOfNulls: output.NumberOfNulls !== undefined && output.NumberOfNulls !== null ? output.NumberOfNulls : undefined,
    };
};
const deserializeAws_json1_1BooleanColumnStatisticsData = (output, context) => {
    return {
        NumberOfFalses: output.NumberOfFalses !== undefined && output.NumberOfFalses !== null ? output.NumberOfFalses : undefined,
        NumberOfNulls: output.NumberOfNulls !== undefined && output.NumberOfNulls !== null ? output.NumberOfNulls : undefined,
        NumberOfTrues: output.NumberOfTrues !== undefined && output.NumberOfTrues !== null ? output.NumberOfTrues : undefined,
    };
};
const deserializeAws_json1_1BoundedPartitionValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CancelMLTaskRunResponse = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TaskRunId: output.TaskRunId !== undefined && output.TaskRunId !== null ? output.TaskRunId : undefined,
        TransformId: output.TransformId !== undefined && output.TransformId !== null ? output.TransformId : undefined,
    };
};
const deserializeAws_json1_1CatalogImportStatus = (output, context) => {
    return {
        ImportCompleted: output.ImportCompleted !== undefined && output.ImportCompleted !== null ? output.ImportCompleted : undefined,
        ImportTime: output.ImportTime !== undefined && output.ImportTime !== null
            ? new Date(Math.round(output.ImportTime * 1000))
            : undefined,
        ImportedBy: output.ImportedBy !== undefined && output.ImportedBy !== null ? output.ImportedBy : undefined,
    };
};
const deserializeAws_json1_1CatalogTablesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CatalogTarget = (output, context) => {
    return {
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        Tables: output.Tables !== undefined && output.Tables !== null
            ? deserializeAws_json1_1CatalogTablesList(output.Tables, context)
            : undefined,
    };
};
const deserializeAws_json1_1CatalogTargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CatalogTarget(entry, context);
    });
};
const deserializeAws_json1_1CheckSchemaVersionValidityResponse = (output, context) => {
    return {
        Error: output.Error !== undefined && output.Error !== null ? output.Error : undefined,
        Valid: output.Valid !== undefined && output.Valid !== null ? output.Valid : undefined,
    };
};
const deserializeAws_json1_1Classifier = (output, context) => {
    return {
        CsvClassifier: output.CsvClassifier !== undefined && output.CsvClassifier !== null
            ? deserializeAws_json1_1CsvClassifier(output.CsvClassifier, context)
            : undefined,
        GrokClassifier: output.GrokClassifier !== undefined && output.GrokClassifier !== null
            ? deserializeAws_json1_1GrokClassifier(output.GrokClassifier, context)
            : undefined,
        JsonClassifier: output.JsonClassifier !== undefined && output.JsonClassifier !== null
            ? deserializeAws_json1_1JsonClassifier(output.JsonClassifier, context)
            : undefined,
        XMLClassifier: output.XMLClassifier !== undefined && output.XMLClassifier !== null
            ? deserializeAws_json1_1XMLClassifier(output.XMLClassifier, context)
            : undefined,
    };
};
const deserializeAws_json1_1ClassifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Classifier(entry, context);
    });
};
const deserializeAws_json1_1ClassifierNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CloudWatchEncryption = (output, context) => {
    return {
        CloudWatchEncryptionMode: output.CloudWatchEncryptionMode !== undefined && output.CloudWatchEncryptionMode !== null
            ? output.CloudWatchEncryptionMode
            : undefined,
        KmsKeyArn: output.KmsKeyArn !== undefined && output.KmsKeyArn !== null ? output.KmsKeyArn : undefined,
    };
};
const deserializeAws_json1_1CodeGenEdge = (output, context) => {
    return {
        Source: output.Source !== undefined && output.Source !== null ? output.Source : undefined,
        Target: output.Target !== undefined && output.Target !== null ? output.Target : undefined,
        TargetParameter: output.TargetParameter !== undefined && output.TargetParameter !== null ? output.TargetParameter : undefined,
    };
};
const deserializeAws_json1_1CodeGenNode = (output, context) => {
    return {
        Args: output.Args !== undefined && output.Args !== null
            ? deserializeAws_json1_1CodeGenNodeArgs(output.Args, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LineNumber: output.LineNumber !== undefined && output.LineNumber !== null ? output.LineNumber : undefined,
        NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
    };
};
const deserializeAws_json1_1CodeGenNodeArg = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Param: output.Param !== undefined && output.Param !== null ? output.Param : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1CodeGenNodeArgs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CodeGenNodeArg(entry, context);
    });
};
const deserializeAws_json1_1Column = (output, context) => {
    return {
        Comment: output.Comment !== undefined && output.Comment !== null ? output.Comment : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ColumnError = (output, context) => {
    return {
        ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_json1_1ErrorDetail(output.Error, context)
            : undefined,
    };
};
const deserializeAws_json1_1ColumnErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ColumnError(entry, context);
    });
};
const deserializeAws_json1_1ColumnImportance = (output, context) => {
    return {
        ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
        Importance: output.Importance !== undefined && output.Importance !== null ? output.Importance : undefined,
    };
};
const deserializeAws_json1_1ColumnImportanceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ColumnImportance(entry, context);
    });
};
const deserializeAws_json1_1ColumnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Column(entry, context);
    });
};
const deserializeAws_json1_1ColumnStatistics = (output, context) => {
    return {
        AnalyzedTime: output.AnalyzedTime !== undefined && output.AnalyzedTime !== null
            ? new Date(Math.round(output.AnalyzedTime * 1000))
            : undefined,
        ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
        ColumnType: output.ColumnType !== undefined && output.ColumnType !== null ? output.ColumnType : undefined,
        StatisticsData: output.StatisticsData !== undefined && output.StatisticsData !== null
            ? deserializeAws_json1_1ColumnStatisticsData(output.StatisticsData, context)
            : undefined,
    };
};
const deserializeAws_json1_1ColumnStatisticsData = (output, context) => {
    return {
        BinaryColumnStatisticsData: output.BinaryColumnStatisticsData !== undefined && output.BinaryColumnStatisticsData !== null
            ? deserializeAws_json1_1BinaryColumnStatisticsData(output.BinaryColumnStatisticsData, context)
            : undefined,
        BooleanColumnStatisticsData: output.BooleanColumnStatisticsData !== undefined && output.BooleanColumnStatisticsData !== null
            ? deserializeAws_json1_1BooleanColumnStatisticsData(output.BooleanColumnStatisticsData, context)
            : undefined,
        DateColumnStatisticsData: output.DateColumnStatisticsData !== undefined && output.DateColumnStatisticsData !== null
            ? deserializeAws_json1_1DateColumnStatisticsData(output.DateColumnStatisticsData, context)
            : undefined,
        DecimalColumnStatisticsData: output.DecimalColumnStatisticsData !== undefined && output.DecimalColumnStatisticsData !== null
            ? deserializeAws_json1_1DecimalColumnStatisticsData(output.DecimalColumnStatisticsData, context)
            : undefined,
        DoubleColumnStatisticsData: output.DoubleColumnStatisticsData !== undefined && output.DoubleColumnStatisticsData !== null
            ? deserializeAws_json1_1DoubleColumnStatisticsData(output.DoubleColumnStatisticsData, context)
            : undefined,
        LongColumnStatisticsData: output.LongColumnStatisticsData !== undefined && output.LongColumnStatisticsData !== null
            ? deserializeAws_json1_1LongColumnStatisticsData(output.LongColumnStatisticsData, context)
            : undefined,
        StringColumnStatisticsData: output.StringColumnStatisticsData !== undefined && output.StringColumnStatisticsData !== null
            ? deserializeAws_json1_1StringColumnStatisticsData(output.StringColumnStatisticsData, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ColumnStatisticsError = (output, context) => {
    return {
        ColumnStatistics: output.ColumnStatistics !== undefined && output.ColumnStatistics !== null
            ? deserializeAws_json1_1ColumnStatistics(output.ColumnStatistics, context)
            : undefined,
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_json1_1ErrorDetail(output.Error, context)
            : undefined,
    };
};
const deserializeAws_json1_1ColumnStatisticsErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ColumnStatisticsError(entry, context);
    });
};
const deserializeAws_json1_1ColumnStatisticsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ColumnStatistics(entry, context);
    });
};
const deserializeAws_json1_1ColumnValueStringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ConcurrentRunsExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Condition = (output, context) => {
    return {
        CrawlState: output.CrawlState !== undefined && output.CrawlState !== null ? output.CrawlState : undefined,
        CrawlerName: output.CrawlerName !== undefined && output.CrawlerName !== null ? output.CrawlerName : undefined,
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        LogicalOperator: output.LogicalOperator !== undefined && output.LogicalOperator !== null ? output.LogicalOperator : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1ConditionCheckFailureException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ConditionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Condition(entry, context);
    });
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ConfusionMatrix = (output, context) => {
    return {
        NumFalseNegatives: output.NumFalseNegatives !== undefined && output.NumFalseNegatives !== null
            ? output.NumFalseNegatives
            : undefined,
        NumFalsePositives: output.NumFalsePositives !== undefined && output.NumFalsePositives !== null
            ? output.NumFalsePositives
            : undefined,
        NumTrueNegatives: output.NumTrueNegatives !== undefined && output.NumTrueNegatives !== null ? output.NumTrueNegatives : undefined,
        NumTruePositives: output.NumTruePositives !== undefined && output.NumTruePositives !== null ? output.NumTruePositives : undefined,
    };
};
const deserializeAws_json1_1Connection = (output, context) => {
    return {
        ConnectionProperties: output.ConnectionProperties !== undefined && output.ConnectionProperties !== null
            ? deserializeAws_json1_1ConnectionProperties(output.ConnectionProperties, context)
            : undefined,
        ConnectionType: output.ConnectionType !== undefined && output.ConnectionType !== null ? output.ConnectionType : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LastUpdatedBy: output.LastUpdatedBy !== undefined && output.LastUpdatedBy !== null ? output.LastUpdatedBy : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        MatchCriteria: output.MatchCriteria !== undefined && output.MatchCriteria !== null
            ? deserializeAws_json1_1MatchCriteria(output.MatchCriteria, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PhysicalConnectionRequirements: output.PhysicalConnectionRequirements !== undefined && output.PhysicalConnectionRequirements !== null
            ? deserializeAws_json1_1PhysicalConnectionRequirements(output.PhysicalConnectionRequirements, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConnectionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Connection(entry, context);
    });
};
const deserializeAws_json1_1ConnectionPasswordEncryption = (output, context) => {
    return {
        AwsKmsKeyId: output.AwsKmsKeyId !== undefined && output.AwsKmsKeyId !== null ? output.AwsKmsKeyId : undefined,
        ReturnConnectionPasswordEncrypted: output.ReturnConnectionPasswordEncrypted !== undefined && output.ReturnConnectionPasswordEncrypted !== null
            ? output.ReturnConnectionPasswordEncrypted
            : undefined,
    };
};
const deserializeAws_json1_1ConnectionProperties = (output, context) => {
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
const deserializeAws_json1_1ConnectionsList = (output, context) => {
    return {
        Connections: output.Connections !== undefined && output.Connections !== null
            ? deserializeAws_json1_1OrchestrationStringList(output.Connections, context)
            : undefined,
    };
};
const deserializeAws_json1_1Crawl = (output, context) => {
    return {
        CompletedOn: output.CompletedOn !== undefined && output.CompletedOn !== null
            ? new Date(Math.round(output.CompletedOn * 1000))
            : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        LogGroup: output.LogGroup !== undefined && output.LogGroup !== null ? output.LogGroup : undefined,
        LogStream: output.LogStream !== undefined && output.LogStream !== null ? output.LogStream : undefined,
        StartedOn: output.StartedOn !== undefined && output.StartedOn !== null
            ? new Date(Math.round(output.StartedOn * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1Crawler = (output, context) => {
    return {
        Classifiers: output.Classifiers !== undefined && output.Classifiers !== null
            ? deserializeAws_json1_1ClassifierNameList(output.Classifiers, context)
            : undefined,
        Configuration: output.Configuration !== undefined && output.Configuration !== null ? output.Configuration : undefined,
        CrawlElapsedTime: output.CrawlElapsedTime !== undefined && output.CrawlElapsedTime !== null ? output.CrawlElapsedTime : undefined,
        CrawlerSecurityConfiguration: output.CrawlerSecurityConfiguration !== undefined && output.CrawlerSecurityConfiguration !== null
            ? output.CrawlerSecurityConfiguration
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LastCrawl: output.LastCrawl !== undefined && output.LastCrawl !== null
            ? deserializeAws_json1_1LastCrawlInfo(output.LastCrawl, context)
            : undefined,
        LastUpdated: output.LastUpdated !== undefined && output.LastUpdated !== null
            ? new Date(Math.round(output.LastUpdated * 1000))
            : undefined,
        LineageConfiguration: output.LineageConfiguration !== undefined && output.LineageConfiguration !== null
            ? deserializeAws_json1_1LineageConfiguration(output.LineageConfiguration, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RecrawlPolicy: output.RecrawlPolicy !== undefined && output.RecrawlPolicy !== null
            ? deserializeAws_json1_1RecrawlPolicy(output.RecrawlPolicy, context)
            : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        Schedule: output.Schedule !== undefined && output.Schedule !== null
            ? deserializeAws_json1_1Schedule(output.Schedule, context)
            : undefined,
        SchemaChangePolicy: output.SchemaChangePolicy !== undefined && output.SchemaChangePolicy !== null
            ? deserializeAws_json1_1SchemaChangePolicy(output.SchemaChangePolicy, context)
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        TablePrefix: output.TablePrefix !== undefined && output.TablePrefix !== null ? output.TablePrefix : undefined,
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1CrawlerTargets(output.Targets, context)
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1CrawlerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Crawler(entry, context);
    });
};
const deserializeAws_json1_1CrawlerMetrics = (output, context) => {
    return {
        CrawlerName: output.CrawlerName !== undefined && output.CrawlerName !== null ? output.CrawlerName : undefined,
        LastRuntimeSeconds: output.LastRuntimeSeconds !== undefined && output.LastRuntimeSeconds !== null
            ? output.LastRuntimeSeconds
            : undefined,
        MedianRuntimeSeconds: output.MedianRuntimeSeconds !== undefined && output.MedianRuntimeSeconds !== null
            ? output.MedianRuntimeSeconds
            : undefined,
        StillEstimating: output.StillEstimating !== undefined && output.StillEstimating !== null ? output.StillEstimating : undefined,
        TablesCreated: output.TablesCreated !== undefined && output.TablesCreated !== null ? output.TablesCreated : undefined,
        TablesDeleted: output.TablesDeleted !== undefined && output.TablesDeleted !== null ? output.TablesDeleted : undefined,
        TablesUpdated: output.TablesUpdated !== undefined && output.TablesUpdated !== null ? output.TablesUpdated : undefined,
        TimeLeftSeconds: output.TimeLeftSeconds !== undefined && output.TimeLeftSeconds !== null ? output.TimeLeftSeconds : undefined,
    };
};
const deserializeAws_json1_1CrawlerMetricsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CrawlerMetrics(entry, context);
    });
};
const deserializeAws_json1_1CrawlerNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CrawlerNodeDetails = (output, context) => {
    return {
        Crawls: output.Crawls !== undefined && output.Crawls !== null
            ? deserializeAws_json1_1CrawlList(output.Crawls, context)
            : undefined,
    };
};
const deserializeAws_json1_1CrawlerNotRunningException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CrawlerRunningException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CrawlerStoppingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CrawlerTargets = (output, context) => {
    return {
        CatalogTargets: output.CatalogTargets !== undefined && output.CatalogTargets !== null
            ? deserializeAws_json1_1CatalogTargetList(output.CatalogTargets, context)
            : undefined,
        DynamoDBTargets: output.DynamoDBTargets !== undefined && output.DynamoDBTargets !== null
            ? deserializeAws_json1_1DynamoDBTargetList(output.DynamoDBTargets, context)
            : undefined,
        JdbcTargets: output.JdbcTargets !== undefined && output.JdbcTargets !== null
            ? deserializeAws_json1_1JdbcTargetList(output.JdbcTargets, context)
            : undefined,
        MongoDBTargets: output.MongoDBTargets !== undefined && output.MongoDBTargets !== null
            ? deserializeAws_json1_1MongoDBTargetList(output.MongoDBTargets, context)
            : undefined,
        S3Targets: output.S3Targets !== undefined && output.S3Targets !== null
            ? deserializeAws_json1_1S3TargetList(output.S3Targets, context)
            : undefined,
    };
};
const deserializeAws_json1_1CrawlList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Crawl(entry, context);
    });
};
const deserializeAws_json1_1CreateClassifierResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateConnectionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateCrawlerResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateDatabaseResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateDevEndpointResponse = (output, context) => {
    return {
        Arguments: output.Arguments !== undefined && output.Arguments !== null
            ? deserializeAws_json1_1MapValue(output.Arguments, context)
            : undefined,
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        CreatedTimestamp: output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
            ? new Date(Math.round(output.CreatedTimestamp * 1000))
            : undefined,
        EndpointName: output.EndpointName !== undefined && output.EndpointName !== null ? output.EndpointName : undefined,
        ExtraJarsS3Path: output.ExtraJarsS3Path !== undefined && output.ExtraJarsS3Path !== null ? output.ExtraJarsS3Path : undefined,
        ExtraPythonLibsS3Path: output.ExtraPythonLibsS3Path !== undefined && output.ExtraPythonLibsS3Path !== null
            ? output.ExtraPythonLibsS3Path
            : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        GlueVersion: output.GlueVersion !== undefined && output.GlueVersion !== null ? output.GlueVersion : undefined,
        NumberOfNodes: output.NumberOfNodes !== undefined && output.NumberOfNodes !== null ? output.NumberOfNodes : undefined,
        NumberOfWorkers: output.NumberOfWorkers !== undefined && output.NumberOfWorkers !== null ? output.NumberOfWorkers : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        SecurityConfiguration: output.SecurityConfiguration !== undefined && output.SecurityConfiguration !== null
            ? output.SecurityConfiguration
            : undefined,
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_json1_1StringList(output.SecurityGroupIds, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
        WorkerType: output.WorkerType !== undefined && output.WorkerType !== null ? output.WorkerType : undefined,
        YarnEndpointAddress: output.YarnEndpointAddress !== undefined && output.YarnEndpointAddress !== null
            ? output.YarnEndpointAddress
            : undefined,
        ZeppelinRemoteSparkInterpreterPort: output.ZeppelinRemoteSparkInterpreterPort !== undefined && output.ZeppelinRemoteSparkInterpreterPort !== null
            ? output.ZeppelinRemoteSparkInterpreterPort
            : undefined,
    };
};
const deserializeAws_json1_1CreateJobResponse = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1CreateMLTransformResponse = (output, context) => {
    return {
        TransformId: output.TransformId !== undefined && output.TransformId !== null ? output.TransformId : undefined,
    };
};
const deserializeAws_json1_1CreatePartitionIndexResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreatePartitionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateRegistryResponse = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        RegistryArn: output.RegistryArn !== undefined && output.RegistryArn !== null ? output.RegistryArn : undefined,
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagsMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateSchemaResponse = (output, context) => {
    return {
        Compatibility: output.Compatibility !== undefined && output.Compatibility !== null ? output.Compatibility : undefined,
        DataFormat: output.DataFormat !== undefined && output.DataFormat !== null ? output.DataFormat : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LatestSchemaVersion: output.LatestSchemaVersion !== undefined && output.LatestSchemaVersion !== null
            ? output.LatestSchemaVersion
            : undefined,
        NextSchemaVersion: output.NextSchemaVersion !== undefined && output.NextSchemaVersion !== null
            ? output.NextSchemaVersion
            : undefined,
        RegistryArn: output.RegistryArn !== undefined && output.RegistryArn !== null ? output.RegistryArn : undefined,
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaCheckpoint: output.SchemaCheckpoint !== undefined && output.SchemaCheckpoint !== null ? output.SchemaCheckpoint : undefined,
        SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
        SchemaStatus: output.SchemaStatus !== undefined && output.SchemaStatus !== null ? output.SchemaStatus : undefined,
        SchemaVersionId: output.SchemaVersionId !== undefined && output.SchemaVersionId !== null ? output.SchemaVersionId : undefined,
        SchemaVersionStatus: output.SchemaVersionStatus !== undefined && output.SchemaVersionStatus !== null
            ? output.SchemaVersionStatus
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagsMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateScriptResponse = (output, context) => {
    return {
        PythonScript: output.PythonScript !== undefined && output.PythonScript !== null ? output.PythonScript : undefined,
        ScalaCode: output.ScalaCode !== undefined && output.ScalaCode !== null ? output.ScalaCode : undefined,
    };
};
const deserializeAws_json1_1CreateSecurityConfigurationResponse = (output, context) => {
    return {
        CreatedTimestamp: output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
            ? new Date(Math.round(output.CreatedTimestamp * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1CreateTableResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateTriggerResponse = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1CreateUserDefinedFunctionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateWorkflowResponse = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1CsvClassifier = (output, context) => {
    return {
        AllowSingleColumn: output.AllowSingleColumn !== undefined && output.AllowSingleColumn !== null
            ? output.AllowSingleColumn
            : undefined,
        ContainsHeader: output.ContainsHeader !== undefined && output.ContainsHeader !== null ? output.ContainsHeader : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Delimiter: output.Delimiter !== undefined && output.Delimiter !== null ? output.Delimiter : undefined,
        DisableValueTrimming: output.DisableValueTrimming !== undefined && output.DisableValueTrimming !== null
            ? output.DisableValueTrimming
            : undefined,
        Header: output.Header !== undefined && output.Header !== null
            ? deserializeAws_json1_1CsvHeader(output.Header, context)
            : undefined,
        LastUpdated: output.LastUpdated !== undefined && output.LastUpdated !== null
            ? new Date(Math.round(output.LastUpdated * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        QuoteSymbol: output.QuoteSymbol !== undefined && output.QuoteSymbol !== null ? output.QuoteSymbol : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1CsvHeader = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DagEdges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CodeGenEdge(entry, context);
    });
};
const deserializeAws_json1_1DagNodes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CodeGenNode(entry, context);
    });
};
const deserializeAws_json1_1Database = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        CreateTableDefaultPermissions: output.CreateTableDefaultPermissions !== undefined && output.CreateTableDefaultPermissions !== null
            ? deserializeAws_json1_1PrincipalPermissionsList(output.CreateTableDefaultPermissions, context)
            : undefined,
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null
            ? new Date(Math.round(output.CreateTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LocationUri: output.LocationUri !== undefined && output.LocationUri !== null ? output.LocationUri : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
            : undefined,
        TargetDatabase: output.TargetDatabase !== undefined && output.TargetDatabase !== null
            ? deserializeAws_json1_1DatabaseIdentifier(output.TargetDatabase, context)
            : undefined,
    };
};
const deserializeAws_json1_1DatabaseIdentifier = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
    };
};
const deserializeAws_json1_1DatabaseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Database(entry, context);
    });
};
const deserializeAws_json1_1DataCatalogEncryptionSettings = (output, context) => {
    return {
        ConnectionPasswordEncryption: output.ConnectionPasswordEncryption !== undefined && output.ConnectionPasswordEncryption !== null
            ? deserializeAws_json1_1ConnectionPasswordEncryption(output.ConnectionPasswordEncryption, context)
            : undefined,
        EncryptionAtRest: output.EncryptionAtRest !== undefined && output.EncryptionAtRest !== null
            ? deserializeAws_json1_1EncryptionAtRest(output.EncryptionAtRest, context)
            : undefined,
    };
};
const deserializeAws_json1_1DataLakePrincipal = (output, context) => {
    return {
        DataLakePrincipalIdentifier: output.DataLakePrincipalIdentifier !== undefined && output.DataLakePrincipalIdentifier !== null
            ? output.DataLakePrincipalIdentifier
            : undefined,
    };
};
const deserializeAws_json1_1DateColumnStatisticsData = (output, context) => {
    return {
        MaximumValue: output.MaximumValue !== undefined && output.MaximumValue !== null
            ? new Date(Math.round(output.MaximumValue * 1000))
            : undefined,
        MinimumValue: output.MinimumValue !== undefined && output.MinimumValue !== null
            ? new Date(Math.round(output.MinimumValue * 1000))
            : undefined,
        NumberOfDistinctValues: output.NumberOfDistinctValues !== undefined && output.NumberOfDistinctValues !== null
            ? output.NumberOfDistinctValues
            : undefined,
        NumberOfNulls: output.NumberOfNulls !== undefined && output.NumberOfNulls !== null ? output.NumberOfNulls : undefined,
    };
};
const deserializeAws_json1_1DecimalColumnStatisticsData = (output, context) => {
    return {
        MaximumValue: output.MaximumValue !== undefined && output.MaximumValue !== null
            ? deserializeAws_json1_1DecimalNumber(output.MaximumValue, context)
            : undefined,
        MinimumValue: output.MinimumValue !== undefined && output.MinimumValue !== null
            ? deserializeAws_json1_1DecimalNumber(output.MinimumValue, context)
            : undefined,
        NumberOfDistinctValues: output.NumberOfDistinctValues !== undefined && output.NumberOfDistinctValues !== null
            ? output.NumberOfDistinctValues
            : undefined,
        NumberOfNulls: output.NumberOfNulls !== undefined && output.NumberOfNulls !== null ? output.NumberOfNulls : undefined,
    };
};
const deserializeAws_json1_1DecimalNumber = (output, context) => {
    return {
        Scale: output.Scale !== undefined && output.Scale !== null ? output.Scale : undefined,
        UnscaledValue: output.UnscaledValue !== undefined && output.UnscaledValue !== null
            ? context.base64Decoder(output.UnscaledValue)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteClassifierResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteColumnStatisticsForPartitionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteColumnStatisticsForTableResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteConnectionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteCrawlerResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteDatabaseResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteDevEndpointResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteJobResponse = (output, context) => {
    return {
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
    };
};
const deserializeAws_json1_1DeleteMLTransformResponse = (output, context) => {
    return {
        TransformId: output.TransformId !== undefined && output.TransformId !== null ? output.TransformId : undefined,
    };
};
const deserializeAws_json1_1DeletePartitionIndexResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeletePartitionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteRegistryResponse = (output, context) => {
    return {
        RegistryArn: output.RegistryArn !== undefined && output.RegistryArn !== null ? output.RegistryArn : undefined,
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DeleteResourcePolicyResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteSchemaResponse = (output, context) => {
    return {
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DeleteSchemaVersionsResponse = (output, context) => {
    return {
        SchemaVersionErrors: output.SchemaVersionErrors !== undefined && output.SchemaVersionErrors !== null
            ? deserializeAws_json1_1SchemaVersionErrorList(output.SchemaVersionErrors, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteSecurityConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteTableResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteTableVersionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteTriggerResponse = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1DeleteUserDefinedFunctionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteWorkflowResponse = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1DevEndpoint = (output, context) => {
    return {
        Arguments: output.Arguments !== undefined && output.Arguments !== null
            ? deserializeAws_json1_1MapValue(output.Arguments, context)
            : undefined,
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        CreatedTimestamp: output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
            ? new Date(Math.round(output.CreatedTimestamp * 1000))
            : undefined,
        EndpointName: output.EndpointName !== undefined && output.EndpointName !== null ? output.EndpointName : undefined,
        ExtraJarsS3Path: output.ExtraJarsS3Path !== undefined && output.ExtraJarsS3Path !== null ? output.ExtraJarsS3Path : undefined,
        ExtraPythonLibsS3Path: output.ExtraPythonLibsS3Path !== undefined && output.ExtraPythonLibsS3Path !== null
            ? output.ExtraPythonLibsS3Path
            : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        GlueVersion: output.GlueVersion !== undefined && output.GlueVersion !== null ? output.GlueVersion : undefined,
        LastModifiedTimestamp: output.LastModifiedTimestamp !== undefined && output.LastModifiedTimestamp !== null
            ? new Date(Math.round(output.LastModifiedTimestamp * 1000))
            : undefined,
        LastUpdateStatus: output.LastUpdateStatus !== undefined && output.LastUpdateStatus !== null ? output.LastUpdateStatus : undefined,
        NumberOfNodes: output.NumberOfNodes !== undefined && output.NumberOfNodes !== null ? output.NumberOfNodes : undefined,
        NumberOfWorkers: output.NumberOfWorkers !== undefined && output.NumberOfWorkers !== null ? output.NumberOfWorkers : undefined,
        PrivateAddress: output.PrivateAddress !== undefined && output.PrivateAddress !== null ? output.PrivateAddress : undefined,
        PublicAddress: output.PublicAddress !== undefined && output.PublicAddress !== null ? output.PublicAddress : undefined,
        PublicKey: output.PublicKey !== undefined && output.PublicKey !== null ? output.PublicKey : undefined,
        PublicKeys: output.PublicKeys !== undefined && output.PublicKeys !== null
            ? deserializeAws_json1_1PublicKeysList(output.PublicKeys, context)
            : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        SecurityConfiguration: output.SecurityConfiguration !== undefined && output.SecurityConfiguration !== null
            ? output.SecurityConfiguration
            : undefined,
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_json1_1StringList(output.SecurityGroupIds, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
        WorkerType: output.WorkerType !== undefined && output.WorkerType !== null ? output.WorkerType : undefined,
        YarnEndpointAddress: output.YarnEndpointAddress !== undefined && output.YarnEndpointAddress !== null
            ? output.YarnEndpointAddress
            : undefined,
        ZeppelinRemoteSparkInterpreterPort: output.ZeppelinRemoteSparkInterpreterPort !== undefined && output.ZeppelinRemoteSparkInterpreterPort !== null
            ? output.ZeppelinRemoteSparkInterpreterPort
            : undefined,
    };
};
const deserializeAws_json1_1DevEndpointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DevEndpoint(entry, context);
    });
};
const deserializeAws_json1_1DevEndpointNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DevEndpointNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DoubleColumnStatisticsData = (output, context) => {
    return {
        MaximumValue: output.MaximumValue !== undefined && output.MaximumValue !== null ? output.MaximumValue : undefined,
        MinimumValue: output.MinimumValue !== undefined && output.MinimumValue !== null ? output.MinimumValue : undefined,
        NumberOfDistinctValues: output.NumberOfDistinctValues !== undefined && output.NumberOfDistinctValues !== null
            ? output.NumberOfDistinctValues
            : undefined,
        NumberOfNulls: output.NumberOfNulls !== undefined && output.NumberOfNulls !== null ? output.NumberOfNulls : undefined,
    };
};
const deserializeAws_json1_1DynamoDBTarget = (output, context) => {
    return {
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        scanAll: output.scanAll !== undefined && output.scanAll !== null ? output.scanAll : undefined,
        scanRate: output.scanRate !== undefined && output.scanRate !== null ? output.scanRate : undefined,
    };
};
const deserializeAws_json1_1DynamoDBTargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DynamoDBTarget(entry, context);
    });
};
const deserializeAws_json1_1Edge = (output, context) => {
    return {
        DestinationId: output.DestinationId !== undefined && output.DestinationId !== null ? output.DestinationId : undefined,
        SourceId: output.SourceId !== undefined && output.SourceId !== null ? output.SourceId : undefined,
    };
};
const deserializeAws_json1_1EdgeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Edge(entry, context);
    });
};
const deserializeAws_json1_1EncryptionAtRest = (output, context) => {
    return {
        CatalogEncryptionMode: output.CatalogEncryptionMode !== undefined && output.CatalogEncryptionMode !== null
            ? output.CatalogEncryptionMode
            : undefined,
        SseAwsKmsKeyId: output.SseAwsKmsKeyId !== undefined && output.SseAwsKmsKeyId !== null ? output.SseAwsKmsKeyId : undefined,
    };
};
const deserializeAws_json1_1EncryptionConfiguration = (output, context) => {
    return {
        CloudWatchEncryption: output.CloudWatchEncryption !== undefined && output.CloudWatchEncryption !== null
            ? deserializeAws_json1_1CloudWatchEncryption(output.CloudWatchEncryption, context)
            : undefined,
        JobBookmarksEncryption: output.JobBookmarksEncryption !== undefined && output.JobBookmarksEncryption !== null
            ? deserializeAws_json1_1JobBookmarksEncryption(output.JobBookmarksEncryption, context)
            : undefined,
        S3Encryption: output.S3Encryption !== undefined && output.S3Encryption !== null
            ? deserializeAws_json1_1S3EncryptionList(output.S3Encryption, context)
            : undefined,
    };
};
const deserializeAws_json1_1EntityNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ErrorByName = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1ErrorDetail(value, context),
        };
    }, {});
};
const deserializeAws_json1_1ErrorDetail = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    };
};
const deserializeAws_json1_1ErrorDetails = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    };
};
const deserializeAws_json1_1EvaluationMetrics = (output, context) => {
    return {
        FindMatchesMetrics: output.FindMatchesMetrics !== undefined && output.FindMatchesMetrics !== null
            ? deserializeAws_json1_1FindMatchesMetrics(output.FindMatchesMetrics, context)
            : undefined,
        TransformType: output.TransformType !== undefined && output.TransformType !== null ? output.TransformType : undefined,
    };
};
const deserializeAws_json1_1ExecutionProperty = (output, context) => {
    return {
        MaxConcurrentRuns: output.MaxConcurrentRuns !== undefined && output.MaxConcurrentRuns !== null
            ? output.MaxConcurrentRuns
            : undefined,
    };
};
const deserializeAws_json1_1ExportLabelsTaskRunProperties = (output, context) => {
    return {
        OutputS3Path: output.OutputS3Path !== undefined && output.OutputS3Path !== null ? output.OutputS3Path : undefined,
    };
};
const deserializeAws_json1_1FindMatchesMetrics = (output, context) => {
    return {
        AreaUnderPRCurve: output.AreaUnderPRCurve !== undefined && output.AreaUnderPRCurve !== null ? output.AreaUnderPRCurve : undefined,
        ColumnImportances: output.ColumnImportances !== undefined && output.ColumnImportances !== null
            ? deserializeAws_json1_1ColumnImportanceList(output.ColumnImportances, context)
            : undefined,
        ConfusionMatrix: output.ConfusionMatrix !== undefined && output.ConfusionMatrix !== null
            ? deserializeAws_json1_1ConfusionMatrix(output.ConfusionMatrix, context)
            : undefined,
        F1: output.F1 !== undefined && output.F1 !== null ? output.F1 : undefined,
        Precision: output.Precision !== undefined && output.Precision !== null ? output.Precision : undefined,
        Recall: output.Recall !== undefined && output.Recall !== null ? output.Recall : undefined,
    };
};
const deserializeAws_json1_1FindMatchesParameters = (output, context) => {
    return {
        AccuracyCostTradeoff: output.AccuracyCostTradeoff !== undefined && output.AccuracyCostTradeoff !== null
            ? output.AccuracyCostTradeoff
            : undefined,
        EnforceProvidedLabels: output.EnforceProvidedLabels !== undefined && output.EnforceProvidedLabels !== null
            ? output.EnforceProvidedLabels
            : undefined,
        PrecisionRecallTradeoff: output.PrecisionRecallTradeoff !== undefined && output.PrecisionRecallTradeoff !== null
            ? output.PrecisionRecallTradeoff
            : undefined,
        PrimaryKeyColumnName: output.PrimaryKeyColumnName !== undefined && output.PrimaryKeyColumnName !== null
            ? output.PrimaryKeyColumnName
            : undefined,
    };
};
const deserializeAws_json1_1FindMatchesTaskRunProperties = (output, context) => {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        JobRunId: output.JobRunId !== undefined && output.JobRunId !== null ? output.JobRunId : undefined,
    };
};
const deserializeAws_json1_1GenericMap = (output, context) => {
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
const deserializeAws_json1_1GetCatalogImportStatusResponse = (output, context) => {
    return {
        ImportStatus: output.ImportStatus !== undefined && output.ImportStatus !== null
            ? deserializeAws_json1_1CatalogImportStatus(output.ImportStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetClassifierResponse = (output, context) => {
    return {
        Classifier: output.Classifier !== undefined && output.Classifier !== null
            ? deserializeAws_json1_1Classifier(output.Classifier, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetClassifiersResponse = (output, context) => {
    return {
        Classifiers: output.Classifiers !== undefined && output.Classifiers !== null
            ? deserializeAws_json1_1ClassifierList(output.Classifiers, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetColumnStatisticsForPartitionResponse = (output, context) => {
    return {
        ColumnStatisticsList: output.ColumnStatisticsList !== undefined && output.ColumnStatisticsList !== null
            ? deserializeAws_json1_1ColumnStatisticsList(output.ColumnStatisticsList, context)
            : undefined,
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_json1_1ColumnErrors(output.Errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetColumnStatisticsForTableResponse = (output, context) => {
    return {
        ColumnStatisticsList: output.ColumnStatisticsList !== undefined && output.ColumnStatisticsList !== null
            ? deserializeAws_json1_1ColumnStatisticsList(output.ColumnStatisticsList, context)
            : undefined,
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_json1_1ColumnErrors(output.Errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetConnectionResponse = (output, context) => {
    return {
        Connection: output.Connection !== undefined && output.Connection !== null
            ? deserializeAws_json1_1Connection(output.Connection, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetConnectionsResponse = (output, context) => {
    return {
        ConnectionList: output.ConnectionList !== undefined && output.ConnectionList !== null
            ? deserializeAws_json1_1ConnectionList(output.ConnectionList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetCrawlerMetricsResponse = (output, context) => {
    return {
        CrawlerMetricsList: output.CrawlerMetricsList !== undefined && output.CrawlerMetricsList !== null
            ? deserializeAws_json1_1CrawlerMetricsList(output.CrawlerMetricsList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetCrawlerResponse = (output, context) => {
    return {
        Crawler: output.Crawler !== undefined && output.Crawler !== null
            ? deserializeAws_json1_1Crawler(output.Crawler, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetCrawlersResponse = (output, context) => {
    return {
        Crawlers: output.Crawlers !== undefined && output.Crawlers !== null
            ? deserializeAws_json1_1CrawlerList(output.Crawlers, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetDatabaseResponse = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null
            ? deserializeAws_json1_1Database(output.Database, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDatabasesResponse = (output, context) => {
    return {
        DatabaseList: output.DatabaseList !== undefined && output.DatabaseList !== null
            ? deserializeAws_json1_1DatabaseList(output.DatabaseList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetDataCatalogEncryptionSettingsResponse = (output, context) => {
    return {
        DataCatalogEncryptionSettings: output.DataCatalogEncryptionSettings !== undefined && output.DataCatalogEncryptionSettings !== null
            ? deserializeAws_json1_1DataCatalogEncryptionSettings(output.DataCatalogEncryptionSettings, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDataflowGraphResponse = (output, context) => {
    return {
        DagEdges: output.DagEdges !== undefined && output.DagEdges !== null
            ? deserializeAws_json1_1DagEdges(output.DagEdges, context)
            : undefined,
        DagNodes: output.DagNodes !== undefined && output.DagNodes !== null
            ? deserializeAws_json1_1DagNodes(output.DagNodes, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDevEndpointResponse = (output, context) => {
    return {
        DevEndpoint: output.DevEndpoint !== undefined && output.DevEndpoint !== null
            ? deserializeAws_json1_1DevEndpoint(output.DevEndpoint, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDevEndpointsResponse = (output, context) => {
    return {
        DevEndpoints: output.DevEndpoints !== undefined && output.DevEndpoints !== null
            ? deserializeAws_json1_1DevEndpointList(output.DevEndpoints, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetJobBookmarkResponse = (output, context) => {
    return {
        JobBookmarkEntry: output.JobBookmarkEntry !== undefined && output.JobBookmarkEntry !== null
            ? deserializeAws_json1_1JobBookmarkEntry(output.JobBookmarkEntry, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetJobResponse = (output, context) => {
    return {
        Job: output.Job !== undefined && output.Job !== null ? deserializeAws_json1_1Job(output.Job, context) : undefined,
    };
};
const deserializeAws_json1_1GetJobRunResponse = (output, context) => {
    return {
        JobRun: output.JobRun !== undefined && output.JobRun !== null
            ? deserializeAws_json1_1JobRun(output.JobRun, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetJobRunsResponse = (output, context) => {
    return {
        JobRuns: output.JobRuns !== undefined && output.JobRuns !== null
            ? deserializeAws_json1_1JobRunList(output.JobRuns, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetJobsResponse = (output, context) => {
    return {
        Jobs: output.Jobs !== undefined && output.Jobs !== null
            ? deserializeAws_json1_1JobList(output.Jobs, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetMappingResponse = (output, context) => {
    return {
        Mapping: output.Mapping !== undefined && output.Mapping !== null
            ? deserializeAws_json1_1MappingList(output.Mapping, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetMLTaskRunResponse = (output, context) => {
    return {
        CompletedOn: output.CompletedOn !== undefined && output.CompletedOn !== null
            ? new Date(Math.round(output.CompletedOn * 1000))
            : undefined,
        ErrorString: output.ErrorString !== undefined && output.ErrorString !== null ? output.ErrorString : undefined,
        ExecutionTime: output.ExecutionTime !== undefined && output.ExecutionTime !== null ? output.ExecutionTime : undefined,
        LastModifiedOn: output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
            ? new Date(Math.round(output.LastModifiedOn * 1000))
            : undefined,
        LogGroupName: output.LogGroupName !== undefined && output.LogGroupName !== null ? output.LogGroupName : undefined,
        Properties: output.Properties !== undefined && output.Properties !== null
            ? deserializeAws_json1_1TaskRunProperties(output.Properties, context)
            : undefined,
        StartedOn: output.StartedOn !== undefined && output.StartedOn !== null
            ? new Date(Math.round(output.StartedOn * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TaskRunId: output.TaskRunId !== undefined && output.TaskRunId !== null ? output.TaskRunId : undefined,
        TransformId: output.TransformId !== undefined && output.TransformId !== null ? output.TransformId : undefined,
    };
};
const deserializeAws_json1_1GetMLTaskRunsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        TaskRuns: output.TaskRuns !== undefined && output.TaskRuns !== null
            ? deserializeAws_json1_1TaskRunList(output.TaskRuns, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetMLTransformResponse = (output, context) => {
    return {
        CreatedOn: output.CreatedOn !== undefined && output.CreatedOn !== null
            ? new Date(Math.round(output.CreatedOn * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EvaluationMetrics: output.EvaluationMetrics !== undefined && output.EvaluationMetrics !== null
            ? deserializeAws_json1_1EvaluationMetrics(output.EvaluationMetrics, context)
            : undefined,
        GlueVersion: output.GlueVersion !== undefined && output.GlueVersion !== null ? output.GlueVersion : undefined,
        InputRecordTables: output.InputRecordTables !== undefined && output.InputRecordTables !== null
            ? deserializeAws_json1_1GlueTables(output.InputRecordTables, context)
            : undefined,
        LabelCount: output.LabelCount !== undefined && output.LabelCount !== null ? output.LabelCount : undefined,
        LastModifiedOn: output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
            ? new Date(Math.round(output.LastModifiedOn * 1000))
            : undefined,
        MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
        MaxRetries: output.MaxRetries !== undefined && output.MaxRetries !== null ? output.MaxRetries : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NumberOfWorkers: output.NumberOfWorkers !== undefined && output.NumberOfWorkers !== null ? output.NumberOfWorkers : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1TransformParameters(output.Parameters, context)
            : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        Schema: output.Schema !== undefined && output.Schema !== null
            ? deserializeAws_json1_1TransformSchema(output.Schema, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
        TransformEncryption: output.TransformEncryption !== undefined && output.TransformEncryption !== null
            ? deserializeAws_json1_1TransformEncryption(output.TransformEncryption, context)
            : undefined,
        TransformId: output.TransformId !== undefined && output.TransformId !== null ? output.TransformId : undefined,
        WorkerType: output.WorkerType !== undefined && output.WorkerType !== null ? output.WorkerType : undefined,
    };
};
const deserializeAws_json1_1GetMLTransformsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Transforms: output.Transforms !== undefined && output.Transforms !== null
            ? deserializeAws_json1_1TransformList(output.Transforms, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetPartitionIndexesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PartitionIndexDescriptorList: output.PartitionIndexDescriptorList !== undefined && output.PartitionIndexDescriptorList !== null
            ? deserializeAws_json1_1PartitionIndexDescriptorList(output.PartitionIndexDescriptorList, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetPartitionResponse = (output, context) => {
    return {
        Partition: output.Partition !== undefined && output.Partition !== null
            ? deserializeAws_json1_1Partition(output.Partition, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetPartitionsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Partitions: output.Partitions !== undefined && output.Partitions !== null
            ? deserializeAws_json1_1PartitionList(output.Partitions, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetPlanResponse = (output, context) => {
    return {
        PythonScript: output.PythonScript !== undefined && output.PythonScript !== null ? output.PythonScript : undefined,
        ScalaCode: output.ScalaCode !== undefined && output.ScalaCode !== null ? output.ScalaCode : undefined,
    };
};
const deserializeAws_json1_1GetRegistryResponse = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        RegistryArn: output.RegistryArn !== undefined && output.RegistryArn !== null ? output.RegistryArn : undefined,
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedTime: output.UpdatedTime !== undefined && output.UpdatedTime !== null ? output.UpdatedTime : undefined,
    };
};
const deserializeAws_json1_1GetResourcePoliciesResponse = (output, context) => {
    return {
        GetResourcePoliciesResponseList: output.GetResourcePoliciesResponseList !== undefined && output.GetResourcePoliciesResponseList !== null
            ? deserializeAws_json1_1GetResourcePoliciesResponseList(output.GetResourcePoliciesResponseList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetResourcePoliciesResponseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GluePolicy(entry, context);
    });
};
const deserializeAws_json1_1GetResourcePolicyResponse = (output, context) => {
    return {
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null
            ? new Date(Math.round(output.CreateTime * 1000))
            : undefined,
        PolicyHash: output.PolicyHash !== undefined && output.PolicyHash !== null ? output.PolicyHash : undefined,
        PolicyInJson: output.PolicyInJson !== undefined && output.PolicyInJson !== null ? output.PolicyInJson : undefined,
        UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null
            ? new Date(Math.round(output.UpdateTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1GetSchemaByDefinitionResponse = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
        DataFormat: output.DataFormat !== undefined && output.DataFormat !== null ? output.DataFormat : undefined,
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaVersionId: output.SchemaVersionId !== undefined && output.SchemaVersionId !== null ? output.SchemaVersionId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1GetSchemaResponse = (output, context) => {
    return {
        Compatibility: output.Compatibility !== undefined && output.Compatibility !== null ? output.Compatibility : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
        DataFormat: output.DataFormat !== undefined && output.DataFormat !== null ? output.DataFormat : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LatestSchemaVersion: output.LatestSchemaVersion !== undefined && output.LatestSchemaVersion !== null
            ? output.LatestSchemaVersion
            : undefined,
        NextSchemaVersion: output.NextSchemaVersion !== undefined && output.NextSchemaVersion !== null
            ? output.NextSchemaVersion
            : undefined,
        RegistryArn: output.RegistryArn !== undefined && output.RegistryArn !== null ? output.RegistryArn : undefined,
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaCheckpoint: output.SchemaCheckpoint !== undefined && output.SchemaCheckpoint !== null ? output.SchemaCheckpoint : undefined,
        SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
        SchemaStatus: output.SchemaStatus !== undefined && output.SchemaStatus !== null ? output.SchemaStatus : undefined,
        UpdatedTime: output.UpdatedTime !== undefined && output.UpdatedTime !== null ? output.UpdatedTime : undefined,
    };
};
const deserializeAws_json1_1GetSchemaVersionResponse = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
        DataFormat: output.DataFormat !== undefined && output.DataFormat !== null ? output.DataFormat : undefined,
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaDefinition: output.SchemaDefinition !== undefined && output.SchemaDefinition !== null ? output.SchemaDefinition : undefined,
        SchemaVersionId: output.SchemaVersionId !== undefined && output.SchemaVersionId !== null ? output.SchemaVersionId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VersionNumber: output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
    };
};
const deserializeAws_json1_1GetSchemaVersionsDiffResponse = (output, context) => {
    return {
        Diff: output.Diff !== undefined && output.Diff !== null ? output.Diff : undefined,
    };
};
const deserializeAws_json1_1GetSecurityConfigurationResponse = (output, context) => {
    return {
        SecurityConfiguration: output.SecurityConfiguration !== undefined && output.SecurityConfiguration !== null
            ? deserializeAws_json1_1SecurityConfiguration(output.SecurityConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetSecurityConfigurationsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SecurityConfigurations: output.SecurityConfigurations !== undefined && output.SecurityConfigurations !== null
            ? deserializeAws_json1_1SecurityConfigurationList(output.SecurityConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTableResponse = (output, context) => {
    return {
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_1Table(output.Table, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTablesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        TableList: output.TableList !== undefined && output.TableList !== null
            ? deserializeAws_json1_1TableList(output.TableList, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTableVersionResponse = (output, context) => {
    return {
        TableVersion: output.TableVersion !== undefined && output.TableVersion !== null
            ? deserializeAws_json1_1TableVersion(output.TableVersion, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTableVersionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TableVersion(entry, context);
    });
};
const deserializeAws_json1_1GetTableVersionsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        TableVersions: output.TableVersions !== undefined && output.TableVersions !== null
            ? deserializeAws_json1_1GetTableVersionsList(output.TableVersions, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTagsResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagsMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTriggerResponse = (output, context) => {
    return {
        Trigger: output.Trigger !== undefined && output.Trigger !== null
            ? deserializeAws_json1_1Trigger(output.Trigger, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTriggersResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Triggers: output.Triggers !== undefined && output.Triggers !== null
            ? deserializeAws_json1_1TriggerList(output.Triggers, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetUserDefinedFunctionResponse = (output, context) => {
    return {
        UserDefinedFunction: output.UserDefinedFunction !== undefined && output.UserDefinedFunction !== null
            ? deserializeAws_json1_1UserDefinedFunction(output.UserDefinedFunction, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetUserDefinedFunctionsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        UserDefinedFunctions: output.UserDefinedFunctions !== undefined && output.UserDefinedFunctions !== null
            ? deserializeAws_json1_1UserDefinedFunctionList(output.UserDefinedFunctions, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetWorkflowResponse = (output, context) => {
    return {
        Workflow: output.Workflow !== undefined && output.Workflow !== null
            ? deserializeAws_json1_1Workflow(output.Workflow, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetWorkflowRunPropertiesResponse = (output, context) => {
    return {
        RunProperties: output.RunProperties !== undefined && output.RunProperties !== null
            ? deserializeAws_json1_1WorkflowRunProperties(output.RunProperties, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetWorkflowRunResponse = (output, context) => {
    return {
        Run: output.Run !== undefined && output.Run !== null
            ? deserializeAws_json1_1WorkflowRun(output.Run, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetWorkflowRunsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Runs: output.Runs !== undefined && output.Runs !== null
            ? deserializeAws_json1_1WorkflowRuns(output.Runs, context)
            : undefined,
    };
};
const deserializeAws_json1_1GlueEncryptionException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1GluePolicy = (output, context) => {
    return {
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null
            ? new Date(Math.round(output.CreateTime * 1000))
            : undefined,
        PolicyHash: output.PolicyHash !== undefined && output.PolicyHash !== null ? output.PolicyHash : undefined,
        PolicyInJson: output.PolicyInJson !== undefined && output.PolicyInJson !== null ? output.PolicyInJson : undefined,
        UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null
            ? new Date(Math.round(output.UpdateTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1GlueTable = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        ConnectionName: output.ConnectionName !== undefined && output.ConnectionName !== null ? output.ConnectionName : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_1GlueTables = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GlueTable(entry, context);
    });
};
const deserializeAws_json1_1GrokClassifier = (output, context) => {
    return {
        Classification: output.Classification !== undefined && output.Classification !== null ? output.Classification : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        CustomPatterns: output.CustomPatterns !== undefined && output.CustomPatterns !== null ? output.CustomPatterns : undefined,
        GrokPattern: output.GrokPattern !== undefined && output.GrokPattern !== null ? output.GrokPattern : undefined,
        LastUpdated: output.LastUpdated !== undefined && output.LastUpdated !== null
            ? new Date(Math.round(output.LastUpdated * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1IdempotentParameterMismatchException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1IllegalWorkflowStateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ImportCatalogToGlueResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ImportLabelsTaskRunProperties = (output, context) => {
    return {
        InputS3Path: output.InputS3Path !== undefined && output.InputS3Path !== null ? output.InputS3Path : undefined,
        Replace: output.Replace !== undefined && output.Replace !== null ? output.Replace : undefined,
    };
};
const deserializeAws_json1_1InternalServiceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1JdbcTarget = (output, context) => {
    return {
        ConnectionName: output.ConnectionName !== undefined && output.ConnectionName !== null ? output.ConnectionName : undefined,
        Exclusions: output.Exclusions !== undefined && output.Exclusions !== null
            ? deserializeAws_json1_1PathList(output.Exclusions, context)
            : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    };
};
const deserializeAws_json1_1JdbcTargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1JdbcTarget(entry, context);
    });
};
const deserializeAws_json1_1Job = (output, context) => {
    return {
        AllocatedCapacity: output.AllocatedCapacity !== undefined && output.AllocatedCapacity !== null
            ? output.AllocatedCapacity
            : undefined,
        Command: output.Command !== undefined && output.Command !== null
            ? deserializeAws_json1_1JobCommand(output.Command, context)
            : undefined,
        Connections: output.Connections !== undefined && output.Connections !== null
            ? deserializeAws_json1_1ConnectionsList(output.Connections, context)
            : undefined,
        CreatedOn: output.CreatedOn !== undefined && output.CreatedOn !== null
            ? new Date(Math.round(output.CreatedOn * 1000))
            : undefined,
        DefaultArguments: output.DefaultArguments !== undefined && output.DefaultArguments !== null
            ? deserializeAws_json1_1GenericMap(output.DefaultArguments, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ExecutionProperty: output.ExecutionProperty !== undefined && output.ExecutionProperty !== null
            ? deserializeAws_json1_1ExecutionProperty(output.ExecutionProperty, context)
            : undefined,
        GlueVersion: output.GlueVersion !== undefined && output.GlueVersion !== null ? output.GlueVersion : undefined,
        LastModifiedOn: output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
            ? new Date(Math.round(output.LastModifiedOn * 1000))
            : undefined,
        LogUri: output.LogUri !== undefined && output.LogUri !== null ? output.LogUri : undefined,
        MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
        MaxRetries: output.MaxRetries !== undefined && output.MaxRetries !== null ? output.MaxRetries : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NonOverridableArguments: output.NonOverridableArguments !== undefined && output.NonOverridableArguments !== null
            ? deserializeAws_json1_1GenericMap(output.NonOverridableArguments, context)
            : undefined,
        NotificationProperty: output.NotificationProperty !== undefined && output.NotificationProperty !== null
            ? deserializeAws_json1_1NotificationProperty(output.NotificationProperty, context)
            : undefined,
        NumberOfWorkers: output.NumberOfWorkers !== undefined && output.NumberOfWorkers !== null ? output.NumberOfWorkers : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        SecurityConfiguration: output.SecurityConfiguration !== undefined && output.SecurityConfiguration !== null
            ? output.SecurityConfiguration
            : undefined,
        Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
        WorkerType: output.WorkerType !== undefined && output.WorkerType !== null ? output.WorkerType : undefined,
    };
};
const deserializeAws_json1_1JobBookmarkEntry = (output, context) => {
    return {
        Attempt: output.Attempt !== undefined && output.Attempt !== null ? output.Attempt : undefined,
        JobBookmark: output.JobBookmark !== undefined && output.JobBookmark !== null ? output.JobBookmark : undefined,
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        PreviousRunId: output.PreviousRunId !== undefined && output.PreviousRunId !== null ? output.PreviousRunId : undefined,
        Run: output.Run !== undefined && output.Run !== null ? output.Run : undefined,
        RunId: output.RunId !== undefined && output.RunId !== null ? output.RunId : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1JobBookmarksEncryption = (output, context) => {
    return {
        JobBookmarksEncryptionMode: output.JobBookmarksEncryptionMode !== undefined && output.JobBookmarksEncryptionMode !== null
            ? output.JobBookmarksEncryptionMode
            : undefined,
        KmsKeyArn: output.KmsKeyArn !== undefined && output.KmsKeyArn !== null ? output.KmsKeyArn : undefined,
    };
};
const deserializeAws_json1_1JobCommand = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PythonVersion: output.PythonVersion !== undefined && output.PythonVersion !== null ? output.PythonVersion : undefined,
        ScriptLocation: output.ScriptLocation !== undefined && output.ScriptLocation !== null ? output.ScriptLocation : undefined,
    };
};
const deserializeAws_json1_1JobList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Job(entry, context);
    });
};
const deserializeAws_json1_1JobNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1JobNodeDetails = (output, context) => {
    return {
        JobRuns: output.JobRuns !== undefined && output.JobRuns !== null
            ? deserializeAws_json1_1JobRunList(output.JobRuns, context)
            : undefined,
    };
};
const deserializeAws_json1_1JobRun = (output, context) => {
    return {
        AllocatedCapacity: output.AllocatedCapacity !== undefined && output.AllocatedCapacity !== null
            ? output.AllocatedCapacity
            : undefined,
        Arguments: output.Arguments !== undefined && output.Arguments !== null
            ? deserializeAws_json1_1GenericMap(output.Arguments, context)
            : undefined,
        Attempt: output.Attempt !== undefined && output.Attempt !== null ? output.Attempt : undefined,
        CompletedOn: output.CompletedOn !== undefined && output.CompletedOn !== null
            ? new Date(Math.round(output.CompletedOn * 1000))
            : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        ExecutionTime: output.ExecutionTime !== undefined && output.ExecutionTime !== null ? output.ExecutionTime : undefined,
        GlueVersion: output.GlueVersion !== undefined && output.GlueVersion !== null ? output.GlueVersion : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        JobRunState: output.JobRunState !== undefined && output.JobRunState !== null ? output.JobRunState : undefined,
        LastModifiedOn: output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
            ? new Date(Math.round(output.LastModifiedOn * 1000))
            : undefined,
        LogGroupName: output.LogGroupName !== undefined && output.LogGroupName !== null ? output.LogGroupName : undefined,
        MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
        NotificationProperty: output.NotificationProperty !== undefined && output.NotificationProperty !== null
            ? deserializeAws_json1_1NotificationProperty(output.NotificationProperty, context)
            : undefined,
        NumberOfWorkers: output.NumberOfWorkers !== undefined && output.NumberOfWorkers !== null ? output.NumberOfWorkers : undefined,
        PredecessorRuns: output.PredecessorRuns !== undefined && output.PredecessorRuns !== null
            ? deserializeAws_json1_1PredecessorList(output.PredecessorRuns, context)
            : undefined,
        PreviousRunId: output.PreviousRunId !== undefined && output.PreviousRunId !== null ? output.PreviousRunId : undefined,
        SecurityConfiguration: output.SecurityConfiguration !== undefined && output.SecurityConfiguration !== null
            ? output.SecurityConfiguration
            : undefined,
        StartedOn: output.StartedOn !== undefined && output.StartedOn !== null
            ? new Date(Math.round(output.StartedOn * 1000))
            : undefined,
        Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
        TriggerName: output.TriggerName !== undefined && output.TriggerName !== null ? output.TriggerName : undefined,
        WorkerType: output.WorkerType !== undefined && output.WorkerType !== null ? output.WorkerType : undefined,
    };
};
const deserializeAws_json1_1JobRunList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1JobRun(entry, context);
    });
};
const deserializeAws_json1_1JsonClassifier = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        JsonPath: output.JsonPath !== undefined && output.JsonPath !== null ? output.JsonPath : undefined,
        LastUpdated: output.LastUpdated !== undefined && output.LastUpdated !== null
            ? new Date(Math.round(output.LastUpdated * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1KeySchemaElement = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1KeySchemaElementList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeySchemaElement(entry, context);
    });
};
const deserializeAws_json1_1LabelingSetGenerationTaskRunProperties = (output, context) => {
    return {
        OutputS3Path: output.OutputS3Path !== undefined && output.OutputS3Path !== null ? output.OutputS3Path : undefined,
    };
};
const deserializeAws_json1_1LastCrawlInfo = (output, context) => {
    return {
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        LogGroup: output.LogGroup !== undefined && output.LogGroup !== null ? output.LogGroup : undefined,
        LogStream: output.LogStream !== undefined && output.LogStream !== null ? output.LogStream : undefined,
        MessagePrefix: output.MessagePrefix !== undefined && output.MessagePrefix !== null ? output.MessagePrefix : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1LineageConfiguration = (output, context) => {
    return {
        CrawlerLineageSettings: output.CrawlerLineageSettings !== undefined && output.CrawlerLineageSettings !== null
            ? output.CrawlerLineageSettings
            : undefined,
    };
};
const deserializeAws_json1_1ListCrawlersResponse = (output, context) => {
    return {
        CrawlerNames: output.CrawlerNames !== undefined && output.CrawlerNames !== null
            ? deserializeAws_json1_1CrawlerNameList(output.CrawlerNames, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListDevEndpointsResponse = (output, context) => {
    return {
        DevEndpointNames: output.DevEndpointNames !== undefined && output.DevEndpointNames !== null
            ? deserializeAws_json1_1DevEndpointNameList(output.DevEndpointNames, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListJobsResponse = (output, context) => {
    return {
        JobNames: output.JobNames !== undefined && output.JobNames !== null
            ? deserializeAws_json1_1JobNameList(output.JobNames, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListMLTransformsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        TransformIds: output.TransformIds !== undefined && output.TransformIds !== null
            ? deserializeAws_json1_1TransformIdList(output.TransformIds, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRegistriesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Registries: output.Registries !== undefined && output.Registries !== null
            ? deserializeAws_json1_1RegistryListDefinition(output.Registries, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSchemasResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Schemas: output.Schemas !== undefined && output.Schemas !== null
            ? deserializeAws_json1_1SchemaListDefinition(output.Schemas, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSchemaVersionsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Schemas: output.Schemas !== undefined && output.Schemas !== null
            ? deserializeAws_json1_1SchemaVersionList(output.Schemas, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTriggersResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        TriggerNames: output.TriggerNames !== undefined && output.TriggerNames !== null
            ? deserializeAws_json1_1TriggerNameList(output.TriggerNames, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListWorkflowsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Workflows: output.Workflows !== undefined && output.Workflows !== null
            ? deserializeAws_json1_1WorkflowNames(output.Workflows, context)
            : undefined,
    };
};
const deserializeAws_json1_1LocationMap = (output, context) => {
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
const deserializeAws_json1_1LongColumnStatisticsData = (output, context) => {
    return {
        MaximumValue: output.MaximumValue !== undefined && output.MaximumValue !== null ? output.MaximumValue : undefined,
        MinimumValue: output.MinimumValue !== undefined && output.MinimumValue !== null ? output.MinimumValue : undefined,
        NumberOfDistinctValues: output.NumberOfDistinctValues !== undefined && output.NumberOfDistinctValues !== null
            ? output.NumberOfDistinctValues
            : undefined,
        NumberOfNulls: output.NumberOfNulls !== undefined && output.NumberOfNulls !== null ? output.NumberOfNulls : undefined,
    };
};
const deserializeAws_json1_1MappingEntry = (output, context) => {
    return {
        SourcePath: output.SourcePath !== undefined && output.SourcePath !== null ? output.SourcePath : undefined,
        SourceTable: output.SourceTable !== undefined && output.SourceTable !== null ? output.SourceTable : undefined,
        SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
        TargetPath: output.TargetPath !== undefined && output.TargetPath !== null ? output.TargetPath : undefined,
        TargetTable: output.TargetTable !== undefined && output.TargetTable !== null ? output.TargetTable : undefined,
        TargetType: output.TargetType !== undefined && output.TargetType !== null ? output.TargetType : undefined,
    };
};
const deserializeAws_json1_1MappingList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MappingEntry(entry, context);
    });
};
const deserializeAws_json1_1MapValue = (output, context) => {
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
const deserializeAws_json1_1MatchCriteria = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1MetadataInfo = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
        MetadataValue: output.MetadataValue !== undefined && output.MetadataValue !== null ? output.MetadataValue : undefined,
        OtherMetadataValueList: output.OtherMetadataValueList !== undefined && output.OtherMetadataValueList !== null
            ? deserializeAws_json1_1OtherMetadataValueList(output.OtherMetadataValueList, context)
            : undefined,
    };
};
const deserializeAws_json1_1MetadataInfoMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1MetadataInfo(value, context),
        };
    }, {});
};
const deserializeAws_json1_1MLTransform = (output, context) => {
    return {
        CreatedOn: output.CreatedOn !== undefined && output.CreatedOn !== null
            ? new Date(Math.round(output.CreatedOn * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EvaluationMetrics: output.EvaluationMetrics !== undefined && output.EvaluationMetrics !== null
            ? deserializeAws_json1_1EvaluationMetrics(output.EvaluationMetrics, context)
            : undefined,
        GlueVersion: output.GlueVersion !== undefined && output.GlueVersion !== null ? output.GlueVersion : undefined,
        InputRecordTables: output.InputRecordTables !== undefined && output.InputRecordTables !== null
            ? deserializeAws_json1_1GlueTables(output.InputRecordTables, context)
            : undefined,
        LabelCount: output.LabelCount !== undefined && output.LabelCount !== null ? output.LabelCount : undefined,
        LastModifiedOn: output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
            ? new Date(Math.round(output.LastModifiedOn * 1000))
            : undefined,
        MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
        MaxRetries: output.MaxRetries !== undefined && output.MaxRetries !== null ? output.MaxRetries : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NumberOfWorkers: output.NumberOfWorkers !== undefined && output.NumberOfWorkers !== null ? output.NumberOfWorkers : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1TransformParameters(output.Parameters, context)
            : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        Schema: output.Schema !== undefined && output.Schema !== null
            ? deserializeAws_json1_1TransformSchema(output.Schema, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
        TransformEncryption: output.TransformEncryption !== undefined && output.TransformEncryption !== null
            ? deserializeAws_json1_1TransformEncryption(output.TransformEncryption, context)
            : undefined,
        TransformId: output.TransformId !== undefined && output.TransformId !== null ? output.TransformId : undefined,
        WorkerType: output.WorkerType !== undefined && output.WorkerType !== null ? output.WorkerType : undefined,
    };
};
const deserializeAws_json1_1MLTransformNotReadyException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1MLUserDataEncryption = (output, context) => {
    return {
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        MlUserDataEncryptionMode: output.MlUserDataEncryptionMode !== undefined && output.MlUserDataEncryptionMode !== null
            ? output.MlUserDataEncryptionMode
            : undefined,
    };
};
const deserializeAws_json1_1MongoDBTarget = (output, context) => {
    return {
        ConnectionName: output.ConnectionName !== undefined && output.ConnectionName !== null ? output.ConnectionName : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        ScanAll: output.ScanAll !== undefined && output.ScanAll !== null ? output.ScanAll : undefined,
    };
};
const deserializeAws_json1_1MongoDBTargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MongoDBTarget(entry, context);
    });
};
const deserializeAws_json1_1NameStringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Node = (output, context) => {
    return {
        CrawlerDetails: output.CrawlerDetails !== undefined && output.CrawlerDetails !== null
            ? deserializeAws_json1_1CrawlerNodeDetails(output.CrawlerDetails, context)
            : undefined,
        JobDetails: output.JobDetails !== undefined && output.JobDetails !== null
            ? deserializeAws_json1_1JobNodeDetails(output.JobDetails, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        TriggerDetails: output.TriggerDetails !== undefined && output.TriggerDetails !== null
            ? deserializeAws_json1_1TriggerNodeDetails(output.TriggerDetails, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        UniqueId: output.UniqueId !== undefined && output.UniqueId !== null ? output.UniqueId : undefined,
    };
};
const deserializeAws_json1_1NodeIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1NodeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Node(entry, context);
    });
};
const deserializeAws_json1_1NoScheduleException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1NotificationProperty = (output, context) => {
    return {
        NotifyDelayAfter: output.NotifyDelayAfter !== undefined && output.NotifyDelayAfter !== null ? output.NotifyDelayAfter : undefined,
    };
};
const deserializeAws_json1_1OperationTimeoutException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OrchestrationStringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Order = (output, context) => {
    return {
        Column: output.Column !== undefined && output.Column !== null ? output.Column : undefined,
        SortOrder: output.SortOrder !== undefined && output.SortOrder !== null ? output.SortOrder : undefined,
    };
};
const deserializeAws_json1_1OrderList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Order(entry, context);
    });
};
const deserializeAws_json1_1OtherMetadataValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OtherMetadataValueListItem(entry, context);
    });
};
const deserializeAws_json1_1OtherMetadataValueListItem = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
        MetadataValue: output.MetadataValue !== undefined && output.MetadataValue !== null ? output.MetadataValue : undefined,
    };
};
const deserializeAws_json1_1ParametersMap = (output, context) => {
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
const deserializeAws_json1_1Partition = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        LastAccessTime: output.LastAccessTime !== undefined && output.LastAccessTime !== null
            ? new Date(Math.round(output.LastAccessTime * 1000))
            : undefined,
        LastAnalyzedTime: output.LastAnalyzedTime !== undefined && output.LastAnalyzedTime !== null
            ? new Date(Math.round(output.LastAnalyzedTime * 1000))
            : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
            : undefined,
        StorageDescriptor: output.StorageDescriptor !== undefined && output.StorageDescriptor !== null
            ? deserializeAws_json1_1StorageDescriptor(output.StorageDescriptor, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1ValueStringList(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1PartitionError = (output, context) => {
    return {
        ErrorDetail: output.ErrorDetail !== undefined && output.ErrorDetail !== null
            ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context)
            : undefined,
        PartitionValues: output.PartitionValues !== undefined && output.PartitionValues !== null
            ? deserializeAws_json1_1ValueStringList(output.PartitionValues, context)
            : undefined,
    };
};
const deserializeAws_json1_1PartitionErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PartitionError(entry, context);
    });
};
const deserializeAws_json1_1PartitionIndexDescriptor = (output, context) => {
    return {
        BackfillErrors: output.BackfillErrors !== undefined && output.BackfillErrors !== null
            ? deserializeAws_json1_1BackfillErrors(output.BackfillErrors, context)
            : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        IndexStatus: output.IndexStatus !== undefined && output.IndexStatus !== null ? output.IndexStatus : undefined,
        Keys: output.Keys !== undefined && output.Keys !== null
            ? deserializeAws_json1_1KeySchemaElementList(output.Keys, context)
            : undefined,
    };
};
const deserializeAws_json1_1PartitionIndexDescriptorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PartitionIndexDescriptor(entry, context);
    });
};
const deserializeAws_json1_1PartitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Partition(entry, context);
    });
};
const deserializeAws_json1_1PartitionValueList = (output, context) => {
    return {
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1ValueStringList(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1PathList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PermissionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PhysicalConnectionRequirements = (output, context) => {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        SecurityGroupIdList: output.SecurityGroupIdList !== undefined && output.SecurityGroupIdList !== null
            ? deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIdList, context)
            : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    };
};
const deserializeAws_json1_1Predecessor = (output, context) => {
    return {
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        RunId: output.RunId !== undefined && output.RunId !== null ? output.RunId : undefined,
    };
};
const deserializeAws_json1_1PredecessorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Predecessor(entry, context);
    });
};
const deserializeAws_json1_1Predicate = (output, context) => {
    return {
        Conditions: output.Conditions !== undefined && output.Conditions !== null
            ? deserializeAws_json1_1ConditionList(output.Conditions, context)
            : undefined,
        Logical: output.Logical !== undefined && output.Logical !== null ? output.Logical : undefined,
    };
};
const deserializeAws_json1_1PrincipalPermissions = (output, context) => {
    return {
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_json1_1PermissionList(output.Permissions, context)
            : undefined,
        Principal: output.Principal !== undefined && output.Principal !== null
            ? deserializeAws_json1_1DataLakePrincipal(output.Principal, context)
            : undefined,
    };
};
const deserializeAws_json1_1PrincipalPermissionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PrincipalPermissions(entry, context);
    });
};
const deserializeAws_json1_1PublicKeysList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PutDataCatalogEncryptionSettingsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutResourcePolicyResponse = (output, context) => {
    return {
        PolicyHash: output.PolicyHash !== undefined && output.PolicyHash !== null ? output.PolicyHash : undefined,
    };
};
const deserializeAws_json1_1PutSchemaVersionMetadataResponse = (output, context) => {
    return {
        LatestVersion: output.LatestVersion !== undefined && output.LatestVersion !== null ? output.LatestVersion : undefined,
        MetadataKey: output.MetadataKey !== undefined && output.MetadataKey !== null ? output.MetadataKey : undefined,
        MetadataValue: output.MetadataValue !== undefined && output.MetadataValue !== null ? output.MetadataValue : undefined,
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
        SchemaVersionId: output.SchemaVersionId !== undefined && output.SchemaVersionId !== null ? output.SchemaVersionId : undefined,
        VersionNumber: output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
    };
};
const deserializeAws_json1_1PutWorkflowRunPropertiesResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1QuerySchemaVersionMetadataResponse = (output, context) => {
    return {
        MetadataInfoMap: output.MetadataInfoMap !== undefined && output.MetadataInfoMap !== null
            ? deserializeAws_json1_1MetadataInfoMap(output.MetadataInfoMap, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SchemaVersionId: output.SchemaVersionId !== undefined && output.SchemaVersionId !== null ? output.SchemaVersionId : undefined,
    };
};
const deserializeAws_json1_1RecrawlPolicy = (output, context) => {
    return {
        RecrawlBehavior: output.RecrawlBehavior !== undefined && output.RecrawlBehavior !== null ? output.RecrawlBehavior : undefined,
    };
};
const deserializeAws_json1_1RegisterSchemaVersionResponse = (output, context) => {
    return {
        SchemaVersionId: output.SchemaVersionId !== undefined && output.SchemaVersionId !== null ? output.SchemaVersionId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VersionNumber: output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
    };
};
const deserializeAws_json1_1RegistryListDefinition = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RegistryListItem(entry, context);
    });
};
const deserializeAws_json1_1RegistryListItem = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        RegistryArn: output.RegistryArn !== undefined && output.RegistryArn !== null ? output.RegistryArn : undefined,
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedTime: output.UpdatedTime !== undefined && output.UpdatedTime !== null ? output.UpdatedTime : undefined,
    };
};
const deserializeAws_json1_1RemoveSchemaVersionMetadataResponse = (output, context) => {
    return {
        LatestVersion: output.LatestVersion !== undefined && output.LatestVersion !== null ? output.LatestVersion : undefined,
        MetadataKey: output.MetadataKey !== undefined && output.MetadataKey !== null ? output.MetadataKey : undefined,
        MetadataValue: output.MetadataValue !== undefined && output.MetadataValue !== null ? output.MetadataValue : undefined,
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
        SchemaVersionId: output.SchemaVersionId !== undefined && output.SchemaVersionId !== null ? output.SchemaVersionId : undefined,
        VersionNumber: output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
    };
};
const deserializeAws_json1_1ResetJobBookmarkResponse = (output, context) => {
    return {
        JobBookmarkEntry: output.JobBookmarkEntry !== undefined && output.JobBookmarkEntry !== null
            ? deserializeAws_json1_1JobBookmarkEntry(output.JobBookmarkEntry, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceNumberLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceUri = (output, context) => {
    return {
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        Uri: output.Uri !== undefined && output.Uri !== null ? output.Uri : undefined,
    };
};
const deserializeAws_json1_1ResourceUriList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceUri(entry, context);
    });
};
const deserializeAws_json1_1ResumeWorkflowRunResponse = (output, context) => {
    return {
        NodeIds: output.NodeIds !== undefined && output.NodeIds !== null
            ? deserializeAws_json1_1NodeIdList(output.NodeIds, context)
            : undefined,
        RunId: output.RunId !== undefined && output.RunId !== null ? output.RunId : undefined,
    };
};
const deserializeAws_json1_1S3Encryption = (output, context) => {
    return {
        KmsKeyArn: output.KmsKeyArn !== undefined && output.KmsKeyArn !== null ? output.KmsKeyArn : undefined,
        S3EncryptionMode: output.S3EncryptionMode !== undefined && output.S3EncryptionMode !== null ? output.S3EncryptionMode : undefined,
    };
};
const deserializeAws_json1_1S3EncryptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1S3Encryption(entry, context);
    });
};
const deserializeAws_json1_1S3Target = (output, context) => {
    return {
        ConnectionName: output.ConnectionName !== undefined && output.ConnectionName !== null ? output.ConnectionName : undefined,
        Exclusions: output.Exclusions !== undefined && output.Exclusions !== null
            ? deserializeAws_json1_1PathList(output.Exclusions, context)
            : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    };
};
const deserializeAws_json1_1S3TargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1S3Target(entry, context);
    });
};
const deserializeAws_json1_1Schedule = (output, context) => {
    return {
        ScheduleExpression: output.ScheduleExpression !== undefined && output.ScheduleExpression !== null
            ? output.ScheduleExpression
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1SchedulerNotRunningException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SchedulerRunningException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SchedulerTransitioningException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SchemaChangePolicy = (output, context) => {
    return {
        DeleteBehavior: output.DeleteBehavior !== undefined && output.DeleteBehavior !== null ? output.DeleteBehavior : undefined,
        UpdateBehavior: output.UpdateBehavior !== undefined && output.UpdateBehavior !== null ? output.UpdateBehavior : undefined,
    };
};
const deserializeAws_json1_1SchemaColumn = (output, context) => {
    return {
        DataType: output.DataType !== undefined && output.DataType !== null ? output.DataType : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1SchemaId = (output, context) => {
    return {
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
    };
};
const deserializeAws_json1_1SchemaListDefinition = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SchemaListItem(entry, context);
    });
};
const deserializeAws_json1_1SchemaListItem = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
        SchemaStatus: output.SchemaStatus !== undefined && output.SchemaStatus !== null ? output.SchemaStatus : undefined,
        UpdatedTime: output.UpdatedTime !== undefined && output.UpdatedTime !== null ? output.UpdatedTime : undefined,
    };
};
const deserializeAws_json1_1SchemaReference = (output, context) => {
    return {
        SchemaId: output.SchemaId !== undefined && output.SchemaId !== null
            ? deserializeAws_json1_1SchemaId(output.SchemaId, context)
            : undefined,
        SchemaVersionId: output.SchemaVersionId !== undefined && output.SchemaVersionId !== null ? output.SchemaVersionId : undefined,
        SchemaVersionNumber: output.SchemaVersionNumber !== undefined && output.SchemaVersionNumber !== null
            ? output.SchemaVersionNumber
            : undefined,
    };
};
const deserializeAws_json1_1SchemaVersionErrorItem = (output, context) => {
    return {
        ErrorDetails: output.ErrorDetails !== undefined && output.ErrorDetails !== null
            ? deserializeAws_json1_1ErrorDetails(output.ErrorDetails, context)
            : undefined,
        VersionNumber: output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
    };
};
const deserializeAws_json1_1SchemaVersionErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SchemaVersionErrorItem(entry, context);
    });
};
const deserializeAws_json1_1SchemaVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SchemaVersionListItem(entry, context);
    });
};
const deserializeAws_json1_1SchemaVersionListItem = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaVersionId: output.SchemaVersionId !== undefined && output.SchemaVersionId !== null ? output.SchemaVersionId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VersionNumber: output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
    };
};
const deserializeAws_json1_1SearchTablesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        TableList: output.TableList !== undefined && output.TableList !== null
            ? deserializeAws_json1_1TableList(output.TableList, context)
            : undefined,
    };
};
const deserializeAws_json1_1SecurityConfiguration = (output, context) => {
    return {
        CreatedTimeStamp: output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
            ? new Date(Math.round(output.CreatedTimeStamp * 1000))
            : undefined,
        EncryptionConfiguration: output.EncryptionConfiguration !== undefined && output.EncryptionConfiguration !== null
            ? deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1SecurityConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SecurityConfiguration(entry, context);
    });
};
const deserializeAws_json1_1SecurityGroupIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SerDeInfo = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
            : undefined,
        SerializationLibrary: output.SerializationLibrary !== undefined && output.SerializationLibrary !== null
            ? output.SerializationLibrary
            : undefined,
    };
};
const deserializeAws_json1_1SkewedInfo = (output, context) => {
    return {
        SkewedColumnNames: output.SkewedColumnNames !== undefined && output.SkewedColumnNames !== null
            ? deserializeAws_json1_1NameStringList(output.SkewedColumnNames, context)
            : undefined,
        SkewedColumnValueLocationMaps: output.SkewedColumnValueLocationMaps !== undefined && output.SkewedColumnValueLocationMaps !== null
            ? deserializeAws_json1_1LocationMap(output.SkewedColumnValueLocationMaps, context)
            : undefined,
        SkewedColumnValues: output.SkewedColumnValues !== undefined && output.SkewedColumnValues !== null
            ? deserializeAws_json1_1ColumnValueStringList(output.SkewedColumnValues, context)
            : undefined,
    };
};
const deserializeAws_json1_1StartCrawlerResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1StartCrawlerScheduleResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1StartExportLabelsTaskRunResponse = (output, context) => {
    return {
        TaskRunId: output.TaskRunId !== undefined && output.TaskRunId !== null ? output.TaskRunId : undefined,
    };
};
const deserializeAws_json1_1StartImportLabelsTaskRunResponse = (output, context) => {
    return {
        TaskRunId: output.TaskRunId !== undefined && output.TaskRunId !== null ? output.TaskRunId : undefined,
    };
};
const deserializeAws_json1_1StartJobRunResponse = (output, context) => {
    return {
        JobRunId: output.JobRunId !== undefined && output.JobRunId !== null ? output.JobRunId : undefined,
    };
};
const deserializeAws_json1_1StartMLEvaluationTaskRunResponse = (output, context) => {
    return {
        TaskRunId: output.TaskRunId !== undefined && output.TaskRunId !== null ? output.TaskRunId : undefined,
    };
};
const deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunResponse = (output, context) => {
    return {
        TaskRunId: output.TaskRunId !== undefined && output.TaskRunId !== null ? output.TaskRunId : undefined,
    };
};
const deserializeAws_json1_1StartTriggerResponse = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1StartWorkflowRunResponse = (output, context) => {
    return {
        RunId: output.RunId !== undefined && output.RunId !== null ? output.RunId : undefined,
    };
};
const deserializeAws_json1_1StopCrawlerResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1StopCrawlerScheduleResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1StopTriggerResponse = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1StopWorkflowRunResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1StorageDescriptor = (output, context) => {
    return {
        BucketColumns: output.BucketColumns !== undefined && output.BucketColumns !== null
            ? deserializeAws_json1_1NameStringList(output.BucketColumns, context)
            : undefined,
        Columns: output.Columns !== undefined && output.Columns !== null
            ? deserializeAws_json1_1ColumnList(output.Columns, context)
            : undefined,
        Compressed: output.Compressed !== undefined && output.Compressed !== null ? output.Compressed : undefined,
        InputFormat: output.InputFormat !== undefined && output.InputFormat !== null ? output.InputFormat : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        NumberOfBuckets: output.NumberOfBuckets !== undefined && output.NumberOfBuckets !== null ? output.NumberOfBuckets : undefined,
        OutputFormat: output.OutputFormat !== undefined && output.OutputFormat !== null ? output.OutputFormat : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
            : undefined,
        SchemaReference: output.SchemaReference !== undefined && output.SchemaReference !== null
            ? deserializeAws_json1_1SchemaReference(output.SchemaReference, context)
            : undefined,
        SerdeInfo: output.SerdeInfo !== undefined && output.SerdeInfo !== null
            ? deserializeAws_json1_1SerDeInfo(output.SerdeInfo, context)
            : undefined,
        SkewedInfo: output.SkewedInfo !== undefined && output.SkewedInfo !== null
            ? deserializeAws_json1_1SkewedInfo(output.SkewedInfo, context)
            : undefined,
        SortColumns: output.SortColumns !== undefined && output.SortColumns !== null
            ? deserializeAws_json1_1OrderList(output.SortColumns, context)
            : undefined,
        StoredAsSubDirectories: output.StoredAsSubDirectories !== undefined && output.StoredAsSubDirectories !== null
            ? output.StoredAsSubDirectories
            : undefined,
    };
};
const deserializeAws_json1_1StringColumnStatisticsData = (output, context) => {
    return {
        AverageLength: output.AverageLength !== undefined && output.AverageLength !== null ? output.AverageLength : undefined,
        MaximumLength: output.MaximumLength !== undefined && output.MaximumLength !== null ? output.MaximumLength : undefined,
        NumberOfDistinctValues: output.NumberOfDistinctValues !== undefined && output.NumberOfDistinctValues !== null
            ? output.NumberOfDistinctValues
            : undefined,
        NumberOfNulls: output.NumberOfNulls !== undefined && output.NumberOfNulls !== null ? output.NumberOfNulls : undefined,
    };
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Table = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null
            ? new Date(Math.round(output.CreateTime * 1000))
            : undefined,
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IsRegisteredWithLakeFormation: output.IsRegisteredWithLakeFormation !== undefined && output.IsRegisteredWithLakeFormation !== null
            ? output.IsRegisteredWithLakeFormation
            : undefined,
        LastAccessTime: output.LastAccessTime !== undefined && output.LastAccessTime !== null
            ? new Date(Math.round(output.LastAccessTime * 1000))
            : undefined,
        LastAnalyzedTime: output.LastAnalyzedTime !== undefined && output.LastAnalyzedTime !== null
            ? new Date(Math.round(output.LastAnalyzedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
            : undefined,
        PartitionKeys: output.PartitionKeys !== undefined && output.PartitionKeys !== null
            ? deserializeAws_json1_1ColumnList(output.PartitionKeys, context)
            : undefined,
        Retention: output.Retention !== undefined && output.Retention !== null ? output.Retention : undefined,
        StorageDescriptor: output.StorageDescriptor !== undefined && output.StorageDescriptor !== null
            ? deserializeAws_json1_1StorageDescriptor(output.StorageDescriptor, context)
            : undefined,
        TableType: output.TableType !== undefined && output.TableType !== null ? output.TableType : undefined,
        TargetTable: output.TargetTable !== undefined && output.TargetTable !== null
            ? deserializeAws_json1_1TableIdentifier(output.TargetTable, context)
            : undefined,
        UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null
            ? new Date(Math.round(output.UpdateTime * 1000))
            : undefined,
        ViewExpandedText: output.ViewExpandedText !== undefined && output.ViewExpandedText !== null ? output.ViewExpandedText : undefined,
        ViewOriginalText: output.ViewOriginalText !== undefined && output.ViewOriginalText !== null ? output.ViewOriginalText : undefined,
    };
};
const deserializeAws_json1_1TableError = (output, context) => {
    return {
        ErrorDetail: output.ErrorDetail !== undefined && output.ErrorDetail !== null
            ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_1TableErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TableError(entry, context);
    });
};
const deserializeAws_json1_1TableIdentifier = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1TableList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Table(entry, context);
    });
};
const deserializeAws_json1_1TableVersion = (output, context) => {
    return {
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_1Table(output.Table, context)
            : undefined,
        VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
    };
};
const deserializeAws_json1_1TableVersionError = (output, context) => {
    return {
        ErrorDetail: output.ErrorDetail !== undefined && output.ErrorDetail !== null
            ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
    };
};
const deserializeAws_json1_1TableVersionErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TableVersionError(entry, context);
    });
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1TagsMap = (output, context) => {
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
const deserializeAws_json1_1TaskRun = (output, context) => {
    return {
        CompletedOn: output.CompletedOn !== undefined && output.CompletedOn !== null
            ? new Date(Math.round(output.CompletedOn * 1000))
            : undefined,
        ErrorString: output.ErrorString !== undefined && output.ErrorString !== null ? output.ErrorString : undefined,
        ExecutionTime: output.ExecutionTime !== undefined && output.ExecutionTime !== null ? output.ExecutionTime : undefined,
        LastModifiedOn: output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
            ? new Date(Math.round(output.LastModifiedOn * 1000))
            : undefined,
        LogGroupName: output.LogGroupName !== undefined && output.LogGroupName !== null ? output.LogGroupName : undefined,
        Properties: output.Properties !== undefined && output.Properties !== null
            ? deserializeAws_json1_1TaskRunProperties(output.Properties, context)
            : undefined,
        StartedOn: output.StartedOn !== undefined && output.StartedOn !== null
            ? new Date(Math.round(output.StartedOn * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TaskRunId: output.TaskRunId !== undefined && output.TaskRunId !== null ? output.TaskRunId : undefined,
        TransformId: output.TransformId !== undefined && output.TransformId !== null ? output.TransformId : undefined,
    };
};
const deserializeAws_json1_1TaskRunList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TaskRun(entry, context);
    });
};
const deserializeAws_json1_1TaskRunProperties = (output, context) => {
    return {
        ExportLabelsTaskRunProperties: output.ExportLabelsTaskRunProperties !== undefined && output.ExportLabelsTaskRunProperties !== null
            ? deserializeAws_json1_1ExportLabelsTaskRunProperties(output.ExportLabelsTaskRunProperties, context)
            : undefined,
        FindMatchesTaskRunProperties: output.FindMatchesTaskRunProperties !== undefined && output.FindMatchesTaskRunProperties !== null
            ? deserializeAws_json1_1FindMatchesTaskRunProperties(output.FindMatchesTaskRunProperties, context)
            : undefined,
        ImportLabelsTaskRunProperties: output.ImportLabelsTaskRunProperties !== undefined && output.ImportLabelsTaskRunProperties !== null
            ? deserializeAws_json1_1ImportLabelsTaskRunProperties(output.ImportLabelsTaskRunProperties, context)
            : undefined,
        LabelingSetGenerationTaskRunProperties: output.LabelingSetGenerationTaskRunProperties !== undefined &&
            output.LabelingSetGenerationTaskRunProperties !== null
            ? deserializeAws_json1_1LabelingSetGenerationTaskRunProperties(output.LabelingSetGenerationTaskRunProperties, context)
            : undefined,
        TaskType: output.TaskType !== undefined && output.TaskType !== null ? output.TaskType : undefined,
    };
};
const deserializeAws_json1_1TransformEncryption = (output, context) => {
    return {
        MlUserDataEncryption: output.MlUserDataEncryption !== undefined && output.MlUserDataEncryption !== null
            ? deserializeAws_json1_1MLUserDataEncryption(output.MlUserDataEncryption, context)
            : undefined,
        TaskRunSecurityConfigurationName: output.TaskRunSecurityConfigurationName !== undefined && output.TaskRunSecurityConfigurationName !== null
            ? output.TaskRunSecurityConfigurationName
            : undefined,
    };
};
const deserializeAws_json1_1TransformIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1TransformList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MLTransform(entry, context);
    });
};
const deserializeAws_json1_1TransformParameters = (output, context) => {
    return {
        FindMatchesParameters: output.FindMatchesParameters !== undefined && output.FindMatchesParameters !== null
            ? deserializeAws_json1_1FindMatchesParameters(output.FindMatchesParameters, context)
            : undefined,
        TransformType: output.TransformType !== undefined && output.TransformType !== null ? output.TransformType : undefined,
    };
};
const deserializeAws_json1_1TransformSchema = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SchemaColumn(entry, context);
    });
};
const deserializeAws_json1_1Trigger = (output, context) => {
    return {
        Actions: output.Actions !== undefined && output.Actions !== null
            ? deserializeAws_json1_1ActionList(output.Actions, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Predicate: output.Predicate !== undefined && output.Predicate !== null
            ? deserializeAws_json1_1Predicate(output.Predicate, context)
            : undefined,
        Schedule: output.Schedule !== undefined && output.Schedule !== null ? output.Schedule : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        WorkflowName: output.WorkflowName !== undefined && output.WorkflowName !== null ? output.WorkflowName : undefined,
    };
};
const deserializeAws_json1_1TriggerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Trigger(entry, context);
    });
};
const deserializeAws_json1_1TriggerNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1TriggerNodeDetails = (output, context) => {
    return {
        Trigger: output.Trigger !== undefined && output.Trigger !== null
            ? deserializeAws_json1_1Trigger(output.Trigger, context)
            : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateClassifierResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateColumnStatisticsForPartitionResponse = (output, context) => {
    return {
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_json1_1ColumnStatisticsErrors(output.Errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateColumnStatisticsForTableResponse = (output, context) => {
    return {
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_json1_1ColumnStatisticsErrors(output.Errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateConnectionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateCrawlerResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateCrawlerScheduleResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateDatabaseResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateDevEndpointResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateJobResponse = (output, context) => {
    return {
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
    };
};
const deserializeAws_json1_1UpdateMLTransformResponse = (output, context) => {
    return {
        TransformId: output.TransformId !== undefined && output.TransformId !== null ? output.TransformId : undefined,
    };
};
const deserializeAws_json1_1UpdatePartitionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateRegistryResponse = (output, context) => {
    return {
        RegistryArn: output.RegistryArn !== undefined && output.RegistryArn !== null ? output.RegistryArn : undefined,
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
    };
};
const deserializeAws_json1_1UpdateSchemaResponse = (output, context) => {
    return {
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
    };
};
const deserializeAws_json1_1UpdateTableResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateTriggerResponse = (output, context) => {
    return {
        Trigger: output.Trigger !== undefined && output.Trigger !== null
            ? deserializeAws_json1_1Trigger(output.Trigger, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateUserDefinedFunctionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateWorkflowResponse = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1UserDefinedFunction = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        ClassName: output.ClassName !== undefined && output.ClassName !== null ? output.ClassName : undefined,
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null
            ? new Date(Math.round(output.CreateTime * 1000))
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        FunctionName: output.FunctionName !== undefined && output.FunctionName !== null ? output.FunctionName : undefined,
        OwnerName: output.OwnerName !== undefined && output.OwnerName !== null ? output.OwnerName : undefined,
        OwnerType: output.OwnerType !== undefined && output.OwnerType !== null ? output.OwnerType : undefined,
        ResourceUris: output.ResourceUris !== undefined && output.ResourceUris !== null
            ? deserializeAws_json1_1ResourceUriList(output.ResourceUris, context)
            : undefined,
    };
};
const deserializeAws_json1_1UserDefinedFunctionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserDefinedFunction(entry, context);
    });
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ValueStringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1VersionMismatchException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Workflow = (output, context) => {
    return {
        CreatedOn: output.CreatedOn !== undefined && output.CreatedOn !== null
            ? new Date(Math.round(output.CreatedOn * 1000))
            : undefined,
        DefaultRunProperties: output.DefaultRunProperties !== undefined && output.DefaultRunProperties !== null
            ? deserializeAws_json1_1WorkflowRunProperties(output.DefaultRunProperties, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Graph: output.Graph !== undefined && output.Graph !== null
            ? deserializeAws_json1_1WorkflowGraph(output.Graph, context)
            : undefined,
        LastModifiedOn: output.LastModifiedOn !== undefined && output.LastModifiedOn !== null
            ? new Date(Math.round(output.LastModifiedOn * 1000))
            : undefined,
        LastRun: output.LastRun !== undefined && output.LastRun !== null
            ? deserializeAws_json1_1WorkflowRun(output.LastRun, context)
            : undefined,
        MaxConcurrentRuns: output.MaxConcurrentRuns !== undefined && output.MaxConcurrentRuns !== null
            ? output.MaxConcurrentRuns
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1WorkflowGraph = (output, context) => {
    return {
        Edges: output.Edges !== undefined && output.Edges !== null
            ? deserializeAws_json1_1EdgeList(output.Edges, context)
            : undefined,
        Nodes: output.Nodes !== undefined && output.Nodes !== null
            ? deserializeAws_json1_1NodeList(output.Nodes, context)
            : undefined,
    };
};
const deserializeAws_json1_1WorkflowNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1WorkflowRun = (output, context) => {
    return {
        CompletedOn: output.CompletedOn !== undefined && output.CompletedOn !== null
            ? new Date(Math.round(output.CompletedOn * 1000))
            : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        Graph: output.Graph !== undefined && output.Graph !== null
            ? deserializeAws_json1_1WorkflowGraph(output.Graph, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PreviousRunId: output.PreviousRunId !== undefined && output.PreviousRunId !== null ? output.PreviousRunId : undefined,
        StartedOn: output.StartedOn !== undefined && output.StartedOn !== null
            ? new Date(Math.round(output.StartedOn * 1000))
            : undefined,
        Statistics: output.Statistics !== undefined && output.Statistics !== null
            ? deserializeAws_json1_1WorkflowRunStatistics(output.Statistics, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        WorkflowRunId: output.WorkflowRunId !== undefined && output.WorkflowRunId !== null ? output.WorkflowRunId : undefined,
        WorkflowRunProperties: output.WorkflowRunProperties !== undefined && output.WorkflowRunProperties !== null
            ? deserializeAws_json1_1WorkflowRunProperties(output.WorkflowRunProperties, context)
            : undefined,
    };
};
const deserializeAws_json1_1WorkflowRunProperties = (output, context) => {
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
const deserializeAws_json1_1WorkflowRuns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WorkflowRun(entry, context);
    });
};
const deserializeAws_json1_1WorkflowRunStatistics = (output, context) => {
    return {
        FailedActions: output.FailedActions !== undefined && output.FailedActions !== null ? output.FailedActions : undefined,
        RunningActions: output.RunningActions !== undefined && output.RunningActions !== null ? output.RunningActions : undefined,
        StoppedActions: output.StoppedActions !== undefined && output.StoppedActions !== null ? output.StoppedActions : undefined,
        SucceededActions: output.SucceededActions !== undefined && output.SucceededActions !== null ? output.SucceededActions : undefined,
        TimeoutActions: output.TimeoutActions !== undefined && output.TimeoutActions !== null ? output.TimeoutActions : undefined,
        TotalActions: output.TotalActions !== undefined && output.TotalActions !== null ? output.TotalActions : undefined,
    };
};
const deserializeAws_json1_1Workflows = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Workflow(entry, context);
    });
};
const deserializeAws_json1_1XMLClassifier = (output, context) => {
    return {
        Classification: output.Classification !== undefined && output.Classification !== null ? output.Classification : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastUpdated: output.LastUpdated !== undefined && output.LastUpdated !== null
            ? new Date(Math.round(output.LastUpdated * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RowTag: output.RowTag !== undefined && output.RowTag !== null ? output.RowTag : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
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
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
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
//# sourceMappingURL=Aws_json1_1.js.map