"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1GetAppValidationConfigurationCommand = exports.deserializeAws_json1_1GetAppReplicationConfigurationCommand = exports.deserializeAws_json1_1GetAppLaunchConfigurationCommand = exports.deserializeAws_json1_1GetAppCommand = exports.deserializeAws_json1_1GenerateTemplateCommand = exports.deserializeAws_json1_1GenerateChangeSetCommand = exports.deserializeAws_json1_1DisassociateConnectorCommand = exports.deserializeAws_json1_1DeleteServerCatalogCommand = exports.deserializeAws_json1_1DeleteReplicationJobCommand = exports.deserializeAws_json1_1DeleteAppValidationConfigurationCommand = exports.deserializeAws_json1_1DeleteAppReplicationConfigurationCommand = exports.deserializeAws_json1_1DeleteAppLaunchConfigurationCommand = exports.deserializeAws_json1_1DeleteAppCommand = exports.deserializeAws_json1_1CreateReplicationJobCommand = exports.deserializeAws_json1_1CreateAppCommand = exports.serializeAws_json1_1UpdateReplicationJobCommand = exports.serializeAws_json1_1UpdateAppCommand = exports.serializeAws_json1_1TerminateAppCommand = exports.serializeAws_json1_1StopAppReplicationCommand = exports.serializeAws_json1_1StartOnDemandReplicationRunCommand = exports.serializeAws_json1_1StartOnDemandAppReplicationCommand = exports.serializeAws_json1_1StartAppReplicationCommand = exports.serializeAws_json1_1PutAppValidationConfigurationCommand = exports.serializeAws_json1_1PutAppReplicationConfigurationCommand = exports.serializeAws_json1_1PutAppLaunchConfigurationCommand = exports.serializeAws_json1_1NotifyAppValidationOutputCommand = exports.serializeAws_json1_1ListAppsCommand = exports.serializeAws_json1_1LaunchAppCommand = exports.serializeAws_json1_1ImportServerCatalogCommand = exports.serializeAws_json1_1ImportAppCatalogCommand = exports.serializeAws_json1_1GetServersCommand = exports.serializeAws_json1_1GetReplicationRunsCommand = exports.serializeAws_json1_1GetReplicationJobsCommand = exports.serializeAws_json1_1GetConnectorsCommand = exports.serializeAws_json1_1GetAppValidationOutputCommand = exports.serializeAws_json1_1GetAppValidationConfigurationCommand = exports.serializeAws_json1_1GetAppReplicationConfigurationCommand = exports.serializeAws_json1_1GetAppLaunchConfigurationCommand = exports.serializeAws_json1_1GetAppCommand = exports.serializeAws_json1_1GenerateTemplateCommand = exports.serializeAws_json1_1GenerateChangeSetCommand = exports.serializeAws_json1_1DisassociateConnectorCommand = exports.serializeAws_json1_1DeleteServerCatalogCommand = exports.serializeAws_json1_1DeleteReplicationJobCommand = exports.serializeAws_json1_1DeleteAppValidationConfigurationCommand = exports.serializeAws_json1_1DeleteAppReplicationConfigurationCommand = exports.serializeAws_json1_1DeleteAppLaunchConfigurationCommand = exports.serializeAws_json1_1DeleteAppCommand = exports.serializeAws_json1_1CreateReplicationJobCommand = exports.serializeAws_json1_1CreateAppCommand = void 0;
exports.deserializeAws_json1_1UpdateReplicationJobCommand = exports.deserializeAws_json1_1UpdateAppCommand = exports.deserializeAws_json1_1TerminateAppCommand = exports.deserializeAws_json1_1StopAppReplicationCommand = exports.deserializeAws_json1_1StartOnDemandReplicationRunCommand = exports.deserializeAws_json1_1StartOnDemandAppReplicationCommand = exports.deserializeAws_json1_1StartAppReplicationCommand = exports.deserializeAws_json1_1PutAppValidationConfigurationCommand = exports.deserializeAws_json1_1PutAppReplicationConfigurationCommand = exports.deserializeAws_json1_1PutAppLaunchConfigurationCommand = exports.deserializeAws_json1_1NotifyAppValidationOutputCommand = exports.deserializeAws_json1_1ListAppsCommand = exports.deserializeAws_json1_1LaunchAppCommand = exports.deserializeAws_json1_1ImportServerCatalogCommand = exports.deserializeAws_json1_1ImportAppCatalogCommand = exports.deserializeAws_json1_1GetServersCommand = exports.deserializeAws_json1_1GetReplicationRunsCommand = exports.deserializeAws_json1_1GetReplicationJobsCommand = exports.deserializeAws_json1_1GetConnectorsCommand = exports.deserializeAws_json1_1GetAppValidationOutputCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateAppCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.CreateApp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAppCommand = serializeAws_json1_1CreateAppCommand;
const serializeAws_json1_1CreateReplicationJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.CreateReplicationJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateReplicationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateReplicationJobCommand = serializeAws_json1_1CreateReplicationJobCommand;
const serializeAws_json1_1DeleteAppCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteApp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAppCommand = serializeAws_json1_1DeleteAppCommand;
const serializeAws_json1_1DeleteAppLaunchConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAppLaunchConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAppLaunchConfigurationCommand = serializeAws_json1_1DeleteAppLaunchConfigurationCommand;
const serializeAws_json1_1DeleteAppReplicationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAppReplicationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAppReplicationConfigurationCommand = serializeAws_json1_1DeleteAppReplicationConfigurationCommand;
const serializeAws_json1_1DeleteAppValidationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAppValidationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAppValidationConfigurationCommand = serializeAws_json1_1DeleteAppValidationConfigurationCommand;
const serializeAws_json1_1DeleteReplicationJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteReplicationJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReplicationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteReplicationJobCommand = serializeAws_json1_1DeleteReplicationJobCommand;
const serializeAws_json1_1DeleteServerCatalogCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteServerCatalog",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServerCatalogRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteServerCatalogCommand = serializeAws_json1_1DeleteServerCatalogCommand;
const serializeAws_json1_1DisassociateConnectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.DisassociateConnector",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateConnectorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateConnectorCommand = serializeAws_json1_1DisassociateConnectorCommand;
const serializeAws_json1_1GenerateChangeSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.GenerateChangeSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateChangeSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GenerateChangeSetCommand = serializeAws_json1_1GenerateChangeSetCommand;
const serializeAws_json1_1GenerateTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.GenerateTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GenerateTemplateCommand = serializeAws_json1_1GenerateTemplateCommand;
const serializeAws_json1_1GetAppCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetApp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAppCommand = serializeAws_json1_1GetAppCommand;
const serializeAws_json1_1GetAppLaunchConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAppLaunchConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAppLaunchConfigurationCommand = serializeAws_json1_1GetAppLaunchConfigurationCommand;
const serializeAws_json1_1GetAppReplicationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAppReplicationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAppReplicationConfigurationCommand = serializeAws_json1_1GetAppReplicationConfigurationCommand;
const serializeAws_json1_1GetAppValidationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAppValidationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAppValidationConfigurationCommand = serializeAws_json1_1GetAppValidationConfigurationCommand;
const serializeAws_json1_1GetAppValidationOutputCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppValidationOutput",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAppValidationOutputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAppValidationOutputCommand = serializeAws_json1_1GetAppValidationOutputCommand;
const serializeAws_json1_1GetConnectorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetConnectors",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConnectorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetConnectorsCommand = serializeAws_json1_1GetConnectorsCommand;
const serializeAws_json1_1GetReplicationJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetReplicationJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetReplicationJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetReplicationJobsCommand = serializeAws_json1_1GetReplicationJobsCommand;
const serializeAws_json1_1GetReplicationRunsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetReplicationRuns",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetReplicationRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetReplicationRunsCommand = serializeAws_json1_1GetReplicationRunsCommand;
const serializeAws_json1_1GetServersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetServers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetServersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetServersCommand = serializeAws_json1_1GetServersCommand;
const serializeAws_json1_1ImportAppCatalogCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.ImportAppCatalog",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportAppCatalogRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportAppCatalogCommand = serializeAws_json1_1ImportAppCatalogCommand;
const serializeAws_json1_1ImportServerCatalogCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.ImportServerCatalog",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportServerCatalogRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportServerCatalogCommand = serializeAws_json1_1ImportServerCatalogCommand;
const serializeAws_json1_1LaunchAppCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.LaunchApp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1LaunchAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1LaunchAppCommand = serializeAws_json1_1LaunchAppCommand;
const serializeAws_json1_1ListAppsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.ListApps",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAppsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAppsCommand = serializeAws_json1_1ListAppsCommand;
const serializeAws_json1_1NotifyAppValidationOutputCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1NotifyAppValidationOutputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1NotifyAppValidationOutputCommand = serializeAws_json1_1NotifyAppValidationOutputCommand;
const serializeAws_json1_1PutAppLaunchConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAppLaunchConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutAppLaunchConfigurationCommand = serializeAws_json1_1PutAppLaunchConfigurationCommand;
const serializeAws_json1_1PutAppReplicationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAppReplicationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutAppReplicationConfigurationCommand = serializeAws_json1_1PutAppReplicationConfigurationCommand;
const serializeAws_json1_1PutAppValidationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAppValidationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutAppValidationConfigurationCommand = serializeAws_json1_1PutAppValidationConfigurationCommand;
const serializeAws_json1_1StartAppReplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.StartAppReplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartAppReplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartAppReplicationCommand = serializeAws_json1_1StartAppReplicationCommand;
const serializeAws_json1_1StartOnDemandAppReplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartOnDemandAppReplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartOnDemandAppReplicationCommand = serializeAws_json1_1StartOnDemandAppReplicationCommand;
const serializeAws_json1_1StartOnDemandReplicationRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartOnDemandReplicationRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartOnDemandReplicationRunCommand = serializeAws_json1_1StartOnDemandReplicationRunCommand;
const serializeAws_json1_1StopAppReplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.StopAppReplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopAppReplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopAppReplicationCommand = serializeAws_json1_1StopAppReplicationCommand;
const serializeAws_json1_1TerminateAppCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.TerminateApp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TerminateAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TerminateAppCommand = serializeAws_json1_1TerminateAppCommand;
const serializeAws_json1_1UpdateAppCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.UpdateApp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAppCommand = serializeAws_json1_1UpdateAppCommand;
const serializeAws_json1_1UpdateReplicationJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSServerMigrationService_V2016_10_24.UpdateReplicationJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateReplicationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateReplicationJobCommand = serializeAws_json1_1UpdateReplicationJobCommand;
const deserializeAws_json1_1CreateAppCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAppResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAppCommand = deserializeAws_json1_1CreateAppCommand;
const deserializeAws_json1_1CreateAppCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateReplicationJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateReplicationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateReplicationJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateReplicationJobCommand = deserializeAws_json1_1CreateReplicationJobCommand;
const deserializeAws_json1_1CreateReplicationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoConnectorsAvailableException":
        case "com.amazonaws.sms#NoConnectorsAvailableException":
            response = {
                ...(await deserializeAws_json1_1NoConnectorsAvailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationJobAlreadyExistsException":
        case "com.amazonaws.sms#ReplicationJobAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ReplicationJobAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerCannotBeReplicatedException":
        case "com.amazonaws.sms#ServerCannotBeReplicatedException":
            response = {
                ...(await deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemporarilyUnavailableException":
        case "com.amazonaws.sms#TemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1TemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAppCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAppResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAppCommand = deserializeAws_json1_1DeleteAppCommand;
const deserializeAws_json1_1DeleteAppCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAppLaunchConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAppLaunchConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAppLaunchConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAppLaunchConfigurationCommand = deserializeAws_json1_1DeleteAppLaunchConfigurationCommand;
const deserializeAws_json1_1DeleteAppLaunchConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAppReplicationConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAppReplicationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAppReplicationConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAppReplicationConfigurationCommand = deserializeAws_json1_1DeleteAppReplicationConfigurationCommand;
const deserializeAws_json1_1DeleteAppReplicationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAppValidationConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAppValidationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAppValidationConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAppValidationConfigurationCommand = deserializeAws_json1_1DeleteAppValidationConfigurationCommand;
const deserializeAws_json1_1DeleteAppValidationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteReplicationJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteReplicationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReplicationJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteReplicationJobCommand = deserializeAws_json1_1DeleteReplicationJobCommand;
const deserializeAws_json1_1DeleteReplicationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationJobNotFoundException":
        case "com.amazonaws.sms#ReplicationJobNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteServerCatalogCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteServerCatalogCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteServerCatalogResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteServerCatalogCommand = deserializeAws_json1_1DeleteServerCatalogCommand;
const deserializeAws_json1_1DeleteServerCatalogCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateConnectorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateConnectorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateConnectorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateConnectorCommand = deserializeAws_json1_1DisassociateConnectorCommand;
const deserializeAws_json1_1DisassociateConnectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GenerateChangeSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GenerateChangeSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateChangeSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GenerateChangeSetCommand = deserializeAws_json1_1GenerateChangeSetCommand;
const deserializeAws_json1_1GenerateChangeSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GenerateTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GenerateTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GenerateTemplateCommand = deserializeAws_json1_1GenerateTemplateCommand;
const deserializeAws_json1_1GenerateTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetAppCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAppResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAppCommand = deserializeAws_json1_1GetAppCommand;
const deserializeAws_json1_1GetAppCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetAppLaunchConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAppLaunchConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAppLaunchConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAppLaunchConfigurationCommand = deserializeAws_json1_1GetAppLaunchConfigurationCommand;
const deserializeAws_json1_1GetAppLaunchConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetAppReplicationConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAppReplicationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAppReplicationConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAppReplicationConfigurationCommand = deserializeAws_json1_1GetAppReplicationConfigurationCommand;
const deserializeAws_json1_1GetAppReplicationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetAppValidationConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAppValidationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAppValidationConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAppValidationConfigurationCommand = deserializeAws_json1_1GetAppValidationConfigurationCommand;
const deserializeAws_json1_1GetAppValidationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetAppValidationOutputCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAppValidationOutputCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAppValidationOutputResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAppValidationOutputCommand = deserializeAws_json1_1GetAppValidationOutputCommand;
const deserializeAws_json1_1GetAppValidationOutputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetConnectorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetConnectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConnectorsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetConnectorsCommand = deserializeAws_json1_1GetConnectorsCommand;
const deserializeAws_json1_1GetConnectorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetReplicationJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetReplicationJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetReplicationJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetReplicationJobsCommand = deserializeAws_json1_1GetReplicationJobsCommand;
const deserializeAws_json1_1GetReplicationJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetReplicationRunsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetReplicationRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetReplicationRunsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetReplicationRunsCommand = deserializeAws_json1_1GetReplicationRunsCommand;
const deserializeAws_json1_1GetReplicationRunsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetServersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetServersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetServersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetServersCommand = deserializeAws_json1_1GetServersCommand;
const deserializeAws_json1_1GetServersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ImportAppCatalogCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ImportAppCatalogCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportAppCatalogResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportAppCatalogCommand = deserializeAws_json1_1ImportAppCatalogCommand;
const deserializeAws_json1_1ImportAppCatalogCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ImportServerCatalogCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ImportServerCatalogCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportServerCatalogResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportServerCatalogCommand = deserializeAws_json1_1ImportServerCatalogCommand;
const deserializeAws_json1_1ImportServerCatalogCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoConnectorsAvailableException":
        case "com.amazonaws.sms#NoConnectorsAvailableException":
            response = {
                ...(await deserializeAws_json1_1NoConnectorsAvailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1LaunchAppCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1LaunchAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1LaunchAppResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1LaunchAppCommand = deserializeAws_json1_1LaunchAppCommand;
const deserializeAws_json1_1LaunchAppCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListAppsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAppsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAppsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAppsCommand = deserializeAws_json1_1ListAppsCommand;
const deserializeAws_json1_1ListAppsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1NotifyAppValidationOutputCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1NotifyAppValidationOutputCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1NotifyAppValidationOutputResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1NotifyAppValidationOutputCommand = deserializeAws_json1_1NotifyAppValidationOutputCommand;
const deserializeAws_json1_1NotifyAppValidationOutputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutAppLaunchConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutAppLaunchConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAppLaunchConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutAppLaunchConfigurationCommand = deserializeAws_json1_1PutAppLaunchConfigurationCommand;
const deserializeAws_json1_1PutAppLaunchConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutAppReplicationConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutAppReplicationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAppReplicationConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutAppReplicationConfigurationCommand = deserializeAws_json1_1PutAppReplicationConfigurationCommand;
const deserializeAws_json1_1PutAppReplicationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutAppValidationConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutAppValidationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAppValidationConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutAppValidationConfigurationCommand = deserializeAws_json1_1PutAppValidationConfigurationCommand;
const deserializeAws_json1_1PutAppValidationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartAppReplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartAppReplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartAppReplicationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartAppReplicationCommand = deserializeAws_json1_1StartAppReplicationCommand;
const deserializeAws_json1_1StartAppReplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartOnDemandAppReplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartOnDemandAppReplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartOnDemandAppReplicationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartOnDemandAppReplicationCommand = deserializeAws_json1_1StartOnDemandAppReplicationCommand;
const deserializeAws_json1_1StartOnDemandAppReplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartOnDemandReplicationRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartOnDemandReplicationRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartOnDemandReplicationRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartOnDemandReplicationRunCommand = deserializeAws_json1_1StartOnDemandReplicationRunCommand;
const deserializeAws_json1_1StartOnDemandReplicationRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DryRunOperationException":
        case "com.amazonaws.sms#DryRunOperationException":
            response = {
                ...(await deserializeAws_json1_1DryRunOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationRunLimitExceededException":
        case "com.amazonaws.sms#ReplicationRunLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ReplicationRunLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StopAppReplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopAppReplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopAppReplicationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopAppReplicationCommand = deserializeAws_json1_1StopAppReplicationCommand;
const deserializeAws_json1_1StopAppReplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TerminateAppCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TerminateAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TerminateAppResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TerminateAppCommand = deserializeAws_json1_1TerminateAppCommand;
const deserializeAws_json1_1TerminateAppCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateAppCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAppResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAppCommand = deserializeAws_json1_1UpdateAppCommand;
const deserializeAws_json1_1UpdateAppCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateReplicationJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateReplicationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateReplicationJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateReplicationJobCommand = deserializeAws_json1_1UpdateReplicationJobCommand;
const deserializeAws_json1_1UpdateReplicationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.sms#InternalError":
            response = {
                ...(await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sms#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.sms#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.sms#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationJobNotFoundException":
        case "com.amazonaws.sms#ReplicationJobNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerCannotBeReplicatedException":
        case "com.amazonaws.sms#ServerCannotBeReplicatedException":
            response = {
                ...(await deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemporarilyUnavailableException":
        case "com.amazonaws.sms#TemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1TemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.sms#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DryRunOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DryRunOperationException(body, context);
    const contents = {
        name: "DryRunOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalError(body, context);
    const contents = {
        name: "InternalError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MissingRequiredParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MissingRequiredParameterException(body, context);
    const contents = {
        name: "MissingRequiredParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoConnectorsAvailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoConnectorsAvailableException(body, context);
    const contents = {
        name: "NoConnectorsAvailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotPermittedException(body, context);
    const contents = {
        name: "OperationNotPermittedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReplicationJobAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReplicationJobAlreadyExistsException(body, context);
    const contents = {
        name: "ReplicationJobAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReplicationJobNotFoundException(body, context);
    const contents = {
        name: "ReplicationJobNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReplicationRunLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReplicationRunLimitExceededException(body, context);
    const contents = {
        name: "ReplicationRunLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServerCannotBeReplicatedException(body, context);
    const contents = {
        name: "ServerCannotBeReplicatedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TemporarilyUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TemporarilyUnavailableException(body, context);
    const contents = {
        name: "TemporarilyUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnauthorizedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnauthorizedOperationException(body, context);
    const contents = {
        name: "UnauthorizedOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AppIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AppValidationConfiguration = (input, context) => {
    return {
        ...(input.appValidationStrategy !== undefined &&
            input.appValidationStrategy !== null && { appValidationStrategy: input.appValidationStrategy }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.ssmValidationParameters !== undefined &&
            input.ssmValidationParameters !== null && {
            ssmValidationParameters: serializeAws_json1_1SSMValidationParameters(input.ssmValidationParameters, context),
        }),
        ...(input.validationId !== undefined && input.validationId !== null && { validationId: input.validationId }),
    };
};
const serializeAws_json1_1AppValidationConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AppValidationConfiguration(entry, context);
    });
};
const serializeAws_json1_1CreateAppRequest = (input, context) => {
    return {
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName }),
        ...(input.serverGroups !== undefined &&
            input.serverGroups !== null && { serverGroups: serializeAws_json1_1ServerGroups(input.serverGroups, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateReplicationJobRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.encrypted !== undefined && input.encrypted !== null && { encrypted: input.encrypted }),
        ...(input.frequency !== undefined && input.frequency !== null && { frequency: input.frequency }),
        ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
        ...(input.licenseType !== undefined && input.licenseType !== null && { licenseType: input.licenseType }),
        ...(input.numberOfRecentAmisToKeep !== undefined &&
            input.numberOfRecentAmisToKeep !== null && { numberOfRecentAmisToKeep: input.numberOfRecentAmisToKeep }),
        ...(input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName }),
        ...(input.runOnce !== undefined && input.runOnce !== null && { runOnce: input.runOnce }),
        ...(input.seedReplicationTime !== undefined &&
            input.seedReplicationTime !== null && {
            seedReplicationTime: Math.round(input.seedReplicationTime.getTime() / 1000),
        }),
        ...(input.serverId !== undefined && input.serverId !== null && { serverId: input.serverId }),
    };
};
const serializeAws_json1_1DeleteAppLaunchConfigurationRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    };
};
const serializeAws_json1_1DeleteAppReplicationConfigurationRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    };
};
const serializeAws_json1_1DeleteAppRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
        ...(input.forceStopAppReplication !== undefined &&
            input.forceStopAppReplication !== null && { forceStopAppReplication: input.forceStopAppReplication }),
        ...(input.forceTerminateApp !== undefined &&
            input.forceTerminateApp !== null && { forceTerminateApp: input.forceTerminateApp }),
    };
};
const serializeAws_json1_1DeleteAppValidationConfigurationRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    };
};
const serializeAws_json1_1DeleteReplicationJobRequest = (input, context) => {
    return {
        ...(input.replicationJobId !== undefined &&
            input.replicationJobId !== null && { replicationJobId: input.replicationJobId }),
    };
};
const serializeAws_json1_1DeleteServerCatalogRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DisassociateConnectorRequest = (input, context) => {
    return {
        ...(input.connectorId !== undefined && input.connectorId !== null && { connectorId: input.connectorId }),
    };
};
const serializeAws_json1_1GenerateChangeSetRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
        ...(input.changesetFormat !== undefined &&
            input.changesetFormat !== null && { changesetFormat: input.changesetFormat }),
    };
};
const serializeAws_json1_1GenerateTemplateRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
        ...(input.templateFormat !== undefined &&
            input.templateFormat !== null && { templateFormat: input.templateFormat }),
    };
};
const serializeAws_json1_1GetAppLaunchConfigurationRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    };
};
const serializeAws_json1_1GetAppReplicationConfigurationRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    };
};
const serializeAws_json1_1GetAppRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    };
};
const serializeAws_json1_1GetAppValidationConfigurationRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    };
};
const serializeAws_json1_1GetAppValidationOutputRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    };
};
const serializeAws_json1_1GetConnectorsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1GetReplicationJobsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.replicationJobId !== undefined &&
            input.replicationJobId !== null && { replicationJobId: input.replicationJobId }),
    };
};
const serializeAws_json1_1GetReplicationRunsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.replicationJobId !== undefined &&
            input.replicationJobId !== null && { replicationJobId: input.replicationJobId }),
    };
};
const serializeAws_json1_1GetServersRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.vmServerAddressList !== undefined &&
            input.vmServerAddressList !== null && {
            vmServerAddressList: serializeAws_json1_1VmServerAddressList(input.vmServerAddressList, context),
        }),
    };
};
const serializeAws_json1_1ImportAppCatalogRequest = (input, context) => {
    return {
        ...(input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName }),
    };
};
const serializeAws_json1_1ImportServerCatalogRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1LaunchAppRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    };
};
const serializeAws_json1_1ListAppsRequest = (input, context) => {
    return {
        ...(input.appIds !== undefined &&
            input.appIds !== null && { appIds: serializeAws_json1_1AppIds(input.appIds, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1NotificationContext = (input, context) => {
    return {
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
        ...(input.statusMessage !== undefined && input.statusMessage !== null && { statusMessage: input.statusMessage }),
        ...(input.validationId !== undefined && input.validationId !== null && { validationId: input.validationId }),
    };
};
const serializeAws_json1_1NotifyAppValidationOutputRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
        ...(input.notificationContext !== undefined &&
            input.notificationContext !== null && {
            notificationContext: serializeAws_json1_1NotificationContext(input.notificationContext, context),
        }),
    };
};
const serializeAws_json1_1PutAppLaunchConfigurationRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
        ...(input.autoLaunch !== undefined && input.autoLaunch !== null && { autoLaunch: input.autoLaunch }),
        ...(input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName }),
        ...(input.serverGroupLaunchConfigurations !== undefined &&
            input.serverGroupLaunchConfigurations !== null && {
            serverGroupLaunchConfigurations: serializeAws_json1_1ServerGroupLaunchConfigurations(input.serverGroupLaunchConfigurations, context),
        }),
    };
};
const serializeAws_json1_1PutAppReplicationConfigurationRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
        ...(input.serverGroupReplicationConfigurations !== undefined &&
            input.serverGroupReplicationConfigurations !== null && {
            serverGroupReplicationConfigurations: serializeAws_json1_1ServerGroupReplicationConfigurations(input.serverGroupReplicationConfigurations, context),
        }),
    };
};
const serializeAws_json1_1PutAppValidationConfigurationRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
        ...(input.appValidationConfigurations !== undefined &&
            input.appValidationConfigurations !== null && {
            appValidationConfigurations: serializeAws_json1_1AppValidationConfigurations(input.appValidationConfigurations, context),
        }),
        ...(input.serverGroupValidationConfigurations !== undefined &&
            input.serverGroupValidationConfigurations !== null && {
            serverGroupValidationConfigurations: serializeAws_json1_1ServerGroupValidationConfigurations(input.serverGroupValidationConfigurations, context),
        }),
    };
};
const serializeAws_json1_1S3Location = (input, context) => {
    return {
        ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
    };
};
const serializeAws_json1_1Server = (input, context) => {
    return {
        ...(input.replicationJobId !== undefined &&
            input.replicationJobId !== null && { replicationJobId: input.replicationJobId }),
        ...(input.replicationJobTerminated !== undefined &&
            input.replicationJobTerminated !== null && { replicationJobTerminated: input.replicationJobTerminated }),
        ...(input.serverId !== undefined && input.serverId !== null && { serverId: input.serverId }),
        ...(input.serverType !== undefined && input.serverType !== null && { serverType: input.serverType }),
        ...(input.vmServer !== undefined &&
            input.vmServer !== null && { vmServer: serializeAws_json1_1VmServer(input.vmServer, context) }),
    };
};
const serializeAws_json1_1ServerGroup = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.serverGroupId !== undefined && input.serverGroupId !== null && { serverGroupId: input.serverGroupId }),
        ...(input.serverList !== undefined &&
            input.serverList !== null && { serverList: serializeAws_json1_1ServerList(input.serverList, context) }),
    };
};
const serializeAws_json1_1ServerGroupLaunchConfiguration = (input, context) => {
    return {
        ...(input.launchOrder !== undefined && input.launchOrder !== null && { launchOrder: input.launchOrder }),
        ...(input.serverGroupId !== undefined && input.serverGroupId !== null && { serverGroupId: input.serverGroupId }),
        ...(input.serverLaunchConfigurations !== undefined &&
            input.serverLaunchConfigurations !== null && {
            serverLaunchConfigurations: serializeAws_json1_1ServerLaunchConfigurations(input.serverLaunchConfigurations, context),
        }),
    };
};
const serializeAws_json1_1ServerGroupLaunchConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerGroupLaunchConfiguration(entry, context);
    });
};
const serializeAws_json1_1ServerGroupReplicationConfiguration = (input, context) => {
    return {
        ...(input.serverGroupId !== undefined && input.serverGroupId !== null && { serverGroupId: input.serverGroupId }),
        ...(input.serverReplicationConfigurations !== undefined &&
            input.serverReplicationConfigurations !== null && {
            serverReplicationConfigurations: serializeAws_json1_1ServerReplicationConfigurations(input.serverReplicationConfigurations, context),
        }),
    };
};
const serializeAws_json1_1ServerGroupReplicationConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerGroupReplicationConfiguration(entry, context);
    });
};
const serializeAws_json1_1ServerGroups = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerGroup(entry, context);
    });
};
const serializeAws_json1_1ServerGroupValidationConfiguration = (input, context) => {
    return {
        ...(input.serverGroupId !== undefined && input.serverGroupId !== null && { serverGroupId: input.serverGroupId }),
        ...(input.serverValidationConfigurations !== undefined &&
            input.serverValidationConfigurations !== null && {
            serverValidationConfigurations: serializeAws_json1_1ServerValidationConfigurations(input.serverValidationConfigurations, context),
        }),
    };
};
const serializeAws_json1_1ServerGroupValidationConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerGroupValidationConfiguration(entry, context);
    });
};
const serializeAws_json1_1ServerLaunchConfiguration = (input, context) => {
    return {
        ...(input.associatePublicIpAddress !== undefined &&
            input.associatePublicIpAddress !== null && { associatePublicIpAddress: input.associatePublicIpAddress }),
        ...(input.configureScript !== undefined &&
            input.configureScript !== null && {
            configureScript: serializeAws_json1_1S3Location(input.configureScript, context),
        }),
        ...(input.configureScriptType !== undefined &&
            input.configureScriptType !== null && { configureScriptType: input.configureScriptType }),
        ...(input.ec2KeyName !== undefined && input.ec2KeyName !== null && { ec2KeyName: input.ec2KeyName }),
        ...(input.iamInstanceProfileName !== undefined &&
            input.iamInstanceProfileName !== null && { iamInstanceProfileName: input.iamInstanceProfileName }),
        ...(input.instanceType !== undefined && input.instanceType !== null && { instanceType: input.instanceType }),
        ...(input.logicalId !== undefined && input.logicalId !== null && { logicalId: input.logicalId }),
        ...(input.securityGroup !== undefined && input.securityGroup !== null && { securityGroup: input.securityGroup }),
        ...(input.server !== undefined &&
            input.server !== null && { server: serializeAws_json1_1Server(input.server, context) }),
        ...(input.subnet !== undefined && input.subnet !== null && { subnet: input.subnet }),
        ...(input.userData !== undefined &&
            input.userData !== null && { userData: serializeAws_json1_1UserData(input.userData, context) }),
        ...(input.vpc !== undefined && input.vpc !== null && { vpc: input.vpc }),
    };
};
const serializeAws_json1_1ServerLaunchConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerLaunchConfiguration(entry, context);
    });
};
const serializeAws_json1_1ServerList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Server(entry, context);
    });
};
const serializeAws_json1_1ServerReplicationConfiguration = (input, context) => {
    return {
        ...(input.server !== undefined &&
            input.server !== null && { server: serializeAws_json1_1Server(input.server, context) }),
        ...(input.serverReplicationParameters !== undefined &&
            input.serverReplicationParameters !== null && {
            serverReplicationParameters: serializeAws_json1_1ServerReplicationParameters(input.serverReplicationParameters, context),
        }),
    };
};
const serializeAws_json1_1ServerReplicationConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerReplicationConfiguration(entry, context);
    });
};
const serializeAws_json1_1ServerReplicationParameters = (input, context) => {
    return {
        ...(input.encrypted !== undefined && input.encrypted !== null && { encrypted: input.encrypted }),
        ...(input.frequency !== undefined && input.frequency !== null && { frequency: input.frequency }),
        ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
        ...(input.licenseType !== undefined && input.licenseType !== null && { licenseType: input.licenseType }),
        ...(input.numberOfRecentAmisToKeep !== undefined &&
            input.numberOfRecentAmisToKeep !== null && { numberOfRecentAmisToKeep: input.numberOfRecentAmisToKeep }),
        ...(input.runOnce !== undefined && input.runOnce !== null && { runOnce: input.runOnce }),
        ...(input.seedTime !== undefined &&
            input.seedTime !== null && { seedTime: Math.round(input.seedTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1ServerValidationConfiguration = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.server !== undefined &&
            input.server !== null && { server: serializeAws_json1_1Server(input.server, context) }),
        ...(input.serverValidationStrategy !== undefined &&
            input.serverValidationStrategy !== null && { serverValidationStrategy: input.serverValidationStrategy }),
        ...(input.userDataValidationParameters !== undefined &&
            input.userDataValidationParameters !== null && {
            userDataValidationParameters: serializeAws_json1_1UserDataValidationParameters(input.userDataValidationParameters, context),
        }),
        ...(input.validationId !== undefined && input.validationId !== null && { validationId: input.validationId }),
    };
};
const serializeAws_json1_1ServerValidationConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerValidationConfiguration(entry, context);
    });
};
const serializeAws_json1_1Source = (input, context) => {
    return {
        ...(input.s3Location !== undefined &&
            input.s3Location !== null && { s3Location: serializeAws_json1_1S3Location(input.s3Location, context) }),
    };
};
const serializeAws_json1_1SSMValidationParameters = (input, context) => {
    return {
        ...(input.command !== undefined && input.command !== null && { command: input.command }),
        ...(input.executionTimeoutSeconds !== undefined &&
            input.executionTimeoutSeconds !== null && { executionTimeoutSeconds: input.executionTimeoutSeconds }),
        ...(input.instanceId !== undefined && input.instanceId !== null && { instanceId: input.instanceId }),
        ...(input.outputS3BucketName !== undefined &&
            input.outputS3BucketName !== null && { outputS3BucketName: input.outputS3BucketName }),
        ...(input.scriptType !== undefined && input.scriptType !== null && { scriptType: input.scriptType }),
        ...(input.source !== undefined &&
            input.source !== null && { source: serializeAws_json1_1Source(input.source, context) }),
    };
};
const serializeAws_json1_1StartAppReplicationRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    };
};
const serializeAws_json1_1StartOnDemandAppReplicationRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
    };
};
const serializeAws_json1_1StartOnDemandReplicationRunRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.replicationJobId !== undefined &&
            input.replicationJobId !== null && { replicationJobId: input.replicationJobId }),
    };
};
const serializeAws_json1_1StopAppReplicationRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1Tags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TerminateAppRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    };
};
const serializeAws_json1_1UpdateAppRequest = (input, context) => {
    return {
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName }),
        ...(input.serverGroups !== undefined &&
            input.serverGroups !== null && { serverGroups: serializeAws_json1_1ServerGroups(input.serverGroups, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    };
};
const serializeAws_json1_1UpdateReplicationJobRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.encrypted !== undefined && input.encrypted !== null && { encrypted: input.encrypted }),
        ...(input.frequency !== undefined && input.frequency !== null && { frequency: input.frequency }),
        ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
        ...(input.licenseType !== undefined && input.licenseType !== null && { licenseType: input.licenseType }),
        ...(input.nextReplicationRunStartTime !== undefined &&
            input.nextReplicationRunStartTime !== null && {
            nextReplicationRunStartTime: Math.round(input.nextReplicationRunStartTime.getTime() / 1000),
        }),
        ...(input.numberOfRecentAmisToKeep !== undefined &&
            input.numberOfRecentAmisToKeep !== null && { numberOfRecentAmisToKeep: input.numberOfRecentAmisToKeep }),
        ...(input.replicationJobId !== undefined &&
            input.replicationJobId !== null && { replicationJobId: input.replicationJobId }),
        ...(input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName }),
    };
};
const serializeAws_json1_1UserData = (input, context) => {
    return {
        ...(input.s3Location !== undefined &&
            input.s3Location !== null && { s3Location: serializeAws_json1_1S3Location(input.s3Location, context) }),
    };
};
const serializeAws_json1_1UserDataValidationParameters = (input, context) => {
    return {
        ...(input.scriptType !== undefined && input.scriptType !== null && { scriptType: input.scriptType }),
        ...(input.source !== undefined &&
            input.source !== null && { source: serializeAws_json1_1Source(input.source, context) }),
    };
};
const serializeAws_json1_1VmServer = (input, context) => {
    return {
        ...(input.vmManagerName !== undefined && input.vmManagerName !== null && { vmManagerName: input.vmManagerName }),
        ...(input.vmManagerType !== undefined && input.vmManagerType !== null && { vmManagerType: input.vmManagerType }),
        ...(input.vmName !== undefined && input.vmName !== null && { vmName: input.vmName }),
        ...(input.vmPath !== undefined && input.vmPath !== null && { vmPath: input.vmPath }),
        ...(input.vmServerAddress !== undefined &&
            input.vmServerAddress !== null && {
            vmServerAddress: serializeAws_json1_1VmServerAddress(input.vmServerAddress, context),
        }),
    };
};
const serializeAws_json1_1VmServerAddress = (input, context) => {
    return {
        ...(input.vmId !== undefined && input.vmId !== null && { vmId: input.vmId }),
        ...(input.vmManagerId !== undefined && input.vmManagerId !== null && { vmManagerId: input.vmManagerId }),
    };
};
const serializeAws_json1_1VmServerAddressList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1VmServerAddress(entry, context);
    });
};
const deserializeAws_json1_1Apps = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AppSummary(entry, context);
    });
};
const deserializeAws_json1_1AppSummary = (output, context) => {
    return {
        appId: output.appId !== undefined && output.appId !== null ? output.appId : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        importedAppId: output.importedAppId !== undefined && output.importedAppId !== null ? output.importedAppId : undefined,
        lastModified: output.lastModified !== undefined && output.lastModified !== null
            ? new Date(Math.round(output.lastModified * 1000))
            : undefined,
        latestReplicationTime: output.latestReplicationTime !== undefined && output.latestReplicationTime !== null
            ? new Date(Math.round(output.latestReplicationTime * 1000))
            : undefined,
        launchConfigurationStatus: output.launchConfigurationStatus !== undefined && output.launchConfigurationStatus !== null
            ? output.launchConfigurationStatus
            : undefined,
        launchDetails: output.launchDetails !== undefined && output.launchDetails !== null
            ? deserializeAws_json1_1LaunchDetails(output.launchDetails, context)
            : undefined,
        launchStatus: output.launchStatus !== undefined && output.launchStatus !== null ? output.launchStatus : undefined,
        launchStatusMessage: output.launchStatusMessage !== undefined && output.launchStatusMessage !== null
            ? output.launchStatusMessage
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        replicationConfigurationStatus: output.replicationConfigurationStatus !== undefined && output.replicationConfigurationStatus !== null
            ? output.replicationConfigurationStatus
            : undefined,
        replicationStatus: output.replicationStatus !== undefined && output.replicationStatus !== null
            ? output.replicationStatus
            : undefined,
        replicationStatusMessage: output.replicationStatusMessage !== undefined && output.replicationStatusMessage !== null
            ? output.replicationStatusMessage
            : undefined,
        roleName: output.roleName !== undefined && output.roleName !== null ? output.roleName : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        totalServerGroups: output.totalServerGroups !== undefined && output.totalServerGroups !== null
            ? output.totalServerGroups
            : undefined,
        totalServers: output.totalServers !== undefined && output.totalServers !== null ? output.totalServers : undefined,
    };
};
const deserializeAws_json1_1AppValidationConfiguration = (output, context) => {
    return {
        appValidationStrategy: output.appValidationStrategy !== undefined && output.appValidationStrategy !== null
            ? output.appValidationStrategy
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        ssmValidationParameters: output.ssmValidationParameters !== undefined && output.ssmValidationParameters !== null
            ? deserializeAws_json1_1SSMValidationParameters(output.ssmValidationParameters, context)
            : undefined,
        validationId: output.validationId !== undefined && output.validationId !== null ? output.validationId : undefined,
    };
};
const deserializeAws_json1_1AppValidationConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AppValidationConfiguration(entry, context);
    });
};
const deserializeAws_json1_1AppValidationOutput = (output, context) => {
    return {
        ssmOutput: output.ssmOutput !== undefined && output.ssmOutput !== null
            ? deserializeAws_json1_1SSMOutput(output.ssmOutput, context)
            : undefined,
    };
};
const deserializeAws_json1_1Connector = (output, context) => {
    return {
        associatedOn: output.associatedOn !== undefined && output.associatedOn !== null
            ? new Date(Math.round(output.associatedOn * 1000))
            : undefined,
        capabilityList: output.capabilityList !== undefined && output.capabilityList !== null
            ? deserializeAws_json1_1ConnectorCapabilityList(output.capabilityList, context)
            : undefined,
        connectorId: output.connectorId !== undefined && output.connectorId !== null ? output.connectorId : undefined,
        ipAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
        macAddress: output.macAddress !== undefined && output.macAddress !== null ? output.macAddress : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
        vmManagerId: output.vmManagerId !== undefined && output.vmManagerId !== null ? output.vmManagerId : undefined,
        vmManagerName: output.vmManagerName !== undefined && output.vmManagerName !== null ? output.vmManagerName : undefined,
        vmManagerType: output.vmManagerType !== undefined && output.vmManagerType !== null ? output.vmManagerType : undefined,
    };
};
const deserializeAws_json1_1ConnectorCapabilityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ConnectorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Connector(entry, context);
    });
};
const deserializeAws_json1_1CreateAppResponse = (output, context) => {
    return {
        appSummary: output.appSummary !== undefined && output.appSummary !== null
            ? deserializeAws_json1_1AppSummary(output.appSummary, context)
            : undefined,
        serverGroups: output.serverGroups !== undefined && output.serverGroups !== null
            ? deserializeAws_json1_1ServerGroups(output.serverGroups, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
const deserializeAws_json1_1CreateReplicationJobResponse = (output, context) => {
    return {
        replicationJobId: output.replicationJobId !== undefined && output.replicationJobId !== null ? output.replicationJobId : undefined,
    };
};
const deserializeAws_json1_1DeleteAppLaunchConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteAppReplicationConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteAppResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteAppValidationConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteReplicationJobResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteServerCatalogResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociateConnectorResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DryRunOperationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1GenerateChangeSetResponse = (output, context) => {
    return {
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3Location(output.s3Location, context)
            : undefined,
    };
};
const deserializeAws_json1_1GenerateTemplateResponse = (output, context) => {
    return {
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3Location(output.s3Location, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetAppLaunchConfigurationResponse = (output, context) => {
    return {
        appId: output.appId !== undefined && output.appId !== null ? output.appId : undefined,
        autoLaunch: output.autoLaunch !== undefined && output.autoLaunch !== null ? output.autoLaunch : undefined,
        roleName: output.roleName !== undefined && output.roleName !== null ? output.roleName : undefined,
        serverGroupLaunchConfigurations: output.serverGroupLaunchConfigurations !== undefined && output.serverGroupLaunchConfigurations !== null
            ? deserializeAws_json1_1ServerGroupLaunchConfigurations(output.serverGroupLaunchConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetAppReplicationConfigurationResponse = (output, context) => {
    return {
        serverGroupReplicationConfigurations: output.serverGroupReplicationConfigurations !== undefined && output.serverGroupReplicationConfigurations !== null
            ? deserializeAws_json1_1ServerGroupReplicationConfigurations(output.serverGroupReplicationConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetAppResponse = (output, context) => {
    return {
        appSummary: output.appSummary !== undefined && output.appSummary !== null
            ? deserializeAws_json1_1AppSummary(output.appSummary, context)
            : undefined,
        serverGroups: output.serverGroups !== undefined && output.serverGroups !== null
            ? deserializeAws_json1_1ServerGroups(output.serverGroups, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
const deserializeAws_json1_1GetAppValidationConfigurationResponse = (output, context) => {
    return {
        appValidationConfigurations: output.appValidationConfigurations !== undefined && output.appValidationConfigurations !== null
            ? deserializeAws_json1_1AppValidationConfigurations(output.appValidationConfigurations, context)
            : undefined,
        serverGroupValidationConfigurations: output.serverGroupValidationConfigurations !== undefined && output.serverGroupValidationConfigurations !== null
            ? deserializeAws_json1_1ServerGroupValidationConfigurations(output.serverGroupValidationConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetAppValidationOutputResponse = (output, context) => {
    return {
        validationOutputList: output.validationOutputList !== undefined && output.validationOutputList !== null
            ? deserializeAws_json1_1ValidationOutputList(output.validationOutputList, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetConnectorsResponse = (output, context) => {
    return {
        connectorList: output.connectorList !== undefined && output.connectorList !== null
            ? deserializeAws_json1_1ConnectorList(output.connectorList, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1GetReplicationJobsResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        replicationJobList: output.replicationJobList !== undefined && output.replicationJobList !== null
            ? deserializeAws_json1_1ReplicationJobList(output.replicationJobList, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetReplicationRunsResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        replicationJob: output.replicationJob !== undefined && output.replicationJob !== null
            ? deserializeAws_json1_1ReplicationJob(output.replicationJob, context)
            : undefined,
        replicationRunList: output.replicationRunList !== undefined && output.replicationRunList !== null
            ? deserializeAws_json1_1ReplicationRunList(output.replicationRunList, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetServersResponse = (output, context) => {
    return {
        lastModifiedOn: output.lastModifiedOn !== undefined && output.lastModifiedOn !== null
            ? new Date(Math.round(output.lastModifiedOn * 1000))
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        serverCatalogStatus: output.serverCatalogStatus !== undefined && output.serverCatalogStatus !== null
            ? output.serverCatalogStatus
            : undefined,
        serverList: output.serverList !== undefined && output.serverList !== null
            ? deserializeAws_json1_1ServerList(output.serverList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ImportAppCatalogResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ImportServerCatalogResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1InternalError = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LaunchAppResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1LaunchDetails = (output, context) => {
    return {
        latestLaunchTime: output.latestLaunchTime !== undefined && output.latestLaunchTime !== null
            ? new Date(Math.round(output.latestLaunchTime * 1000))
            : undefined,
        stackId: output.stackId !== undefined && output.stackId !== null ? output.stackId : undefined,
        stackName: output.stackName !== undefined && output.stackName !== null ? output.stackName : undefined,
    };
};
const deserializeAws_json1_1ListAppsResponse = (output, context) => {
    return {
        apps: output.apps !== undefined && output.apps !== null ? deserializeAws_json1_1Apps(output.apps, context) : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1MissingRequiredParameterException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoConnectorsAvailableException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NotifyAppValidationOutputResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1OperationNotPermittedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PutAppLaunchConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutAppReplicationConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutAppValidationConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ReplicationJob = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        encrypted: output.encrypted !== undefined && output.encrypted !== null ? output.encrypted : undefined,
        frequency: output.frequency !== undefined && output.frequency !== null ? output.frequency : undefined,
        kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        latestAmiId: output.latestAmiId !== undefined && output.latestAmiId !== null ? output.latestAmiId : undefined,
        licenseType: output.licenseType !== undefined && output.licenseType !== null ? output.licenseType : undefined,
        nextReplicationRunStartTime: output.nextReplicationRunStartTime !== undefined && output.nextReplicationRunStartTime !== null
            ? new Date(Math.round(output.nextReplicationRunStartTime * 1000))
            : undefined,
        numberOfRecentAmisToKeep: output.numberOfRecentAmisToKeep !== undefined && output.numberOfRecentAmisToKeep !== null
            ? output.numberOfRecentAmisToKeep
            : undefined,
        replicationJobId: output.replicationJobId !== undefined && output.replicationJobId !== null ? output.replicationJobId : undefined,
        replicationRunList: output.replicationRunList !== undefined && output.replicationRunList !== null
            ? deserializeAws_json1_1ReplicationRunList(output.replicationRunList, context)
            : undefined,
        roleName: output.roleName !== undefined && output.roleName !== null ? output.roleName : undefined,
        runOnce: output.runOnce !== undefined && output.runOnce !== null ? output.runOnce : undefined,
        seedReplicationTime: output.seedReplicationTime !== undefined && output.seedReplicationTime !== null
            ? new Date(Math.round(output.seedReplicationTime * 1000))
            : undefined,
        serverId: output.serverId !== undefined && output.serverId !== null ? output.serverId : undefined,
        serverType: output.serverType !== undefined && output.serverType !== null ? output.serverType : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        vmServer: output.vmServer !== undefined && output.vmServer !== null
            ? deserializeAws_json1_1VmServer(output.vmServer, context)
            : undefined,
    };
};
const deserializeAws_json1_1ReplicationJobAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ReplicationJobList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationJob(entry, context);
    });
};
const deserializeAws_json1_1ReplicationJobNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ReplicationRun = (output, context) => {
    return {
        amiId: output.amiId !== undefined && output.amiId !== null ? output.amiId : undefined,
        completedTime: output.completedTime !== undefined && output.completedTime !== null
            ? new Date(Math.round(output.completedTime * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        encrypted: output.encrypted !== undefined && output.encrypted !== null ? output.encrypted : undefined,
        kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        replicationRunId: output.replicationRunId !== undefined && output.replicationRunId !== null ? output.replicationRunId : undefined,
        scheduledStartTime: output.scheduledStartTime !== undefined && output.scheduledStartTime !== null
            ? new Date(Math.round(output.scheduledStartTime * 1000))
            : undefined,
        stageDetails: output.stageDetails !== undefined && output.stageDetails !== null
            ? deserializeAws_json1_1ReplicationRunStageDetails(output.stageDetails, context)
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1ReplicationRunLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ReplicationRunList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationRun(entry, context);
    });
};
const deserializeAws_json1_1ReplicationRunStageDetails = (output, context) => {
    return {
        stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
        stageProgress: output.stageProgress !== undefined && output.stageProgress !== null ? output.stageProgress : undefined,
    };
};
const deserializeAws_json1_1S3Location = (output, context) => {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
    };
};
const deserializeAws_json1_1Server = (output, context) => {
    return {
        replicationJobId: output.replicationJobId !== undefined && output.replicationJobId !== null ? output.replicationJobId : undefined,
        replicationJobTerminated: output.replicationJobTerminated !== undefined && output.replicationJobTerminated !== null
            ? output.replicationJobTerminated
            : undefined,
        serverId: output.serverId !== undefined && output.serverId !== null ? output.serverId : undefined,
        serverType: output.serverType !== undefined && output.serverType !== null ? output.serverType : undefined,
        vmServer: output.vmServer !== undefined && output.vmServer !== null
            ? deserializeAws_json1_1VmServer(output.vmServer, context)
            : undefined,
    };
};
const deserializeAws_json1_1ServerCannotBeReplicatedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ServerGroup = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        serverGroupId: output.serverGroupId !== undefined && output.serverGroupId !== null ? output.serverGroupId : undefined,
        serverList: output.serverList !== undefined && output.serverList !== null
            ? deserializeAws_json1_1ServerList(output.serverList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ServerGroupLaunchConfiguration = (output, context) => {
    return {
        launchOrder: output.launchOrder !== undefined && output.launchOrder !== null ? output.launchOrder : undefined,
        serverGroupId: output.serverGroupId !== undefined && output.serverGroupId !== null ? output.serverGroupId : undefined,
        serverLaunchConfigurations: output.serverLaunchConfigurations !== undefined && output.serverLaunchConfigurations !== null
            ? deserializeAws_json1_1ServerLaunchConfigurations(output.serverLaunchConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1ServerGroupLaunchConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerGroupLaunchConfiguration(entry, context);
    });
};
const deserializeAws_json1_1ServerGroupReplicationConfiguration = (output, context) => {
    return {
        serverGroupId: output.serverGroupId !== undefined && output.serverGroupId !== null ? output.serverGroupId : undefined,
        serverReplicationConfigurations: output.serverReplicationConfigurations !== undefined && output.serverReplicationConfigurations !== null
            ? deserializeAws_json1_1ServerReplicationConfigurations(output.serverReplicationConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1ServerGroupReplicationConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerGroupReplicationConfiguration(entry, context);
    });
};
const deserializeAws_json1_1ServerGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerGroup(entry, context);
    });
};
const deserializeAws_json1_1ServerGroupValidationConfiguration = (output, context) => {
    return {
        serverGroupId: output.serverGroupId !== undefined && output.serverGroupId !== null ? output.serverGroupId : undefined,
        serverValidationConfigurations: output.serverValidationConfigurations !== undefined && output.serverValidationConfigurations !== null
            ? deserializeAws_json1_1ServerValidationConfigurations(output.serverValidationConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1ServerGroupValidationConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerGroupValidationConfiguration(entry, context);
    });
};
const deserializeAws_json1_1ServerLaunchConfiguration = (output, context) => {
    return {
        associatePublicIpAddress: output.associatePublicIpAddress !== undefined && output.associatePublicIpAddress !== null
            ? output.associatePublicIpAddress
            : undefined,
        configureScript: output.configureScript !== undefined && output.configureScript !== null
            ? deserializeAws_json1_1S3Location(output.configureScript, context)
            : undefined,
        configureScriptType: output.configureScriptType !== undefined && output.configureScriptType !== null
            ? output.configureScriptType
            : undefined,
        ec2KeyName: output.ec2KeyName !== undefined && output.ec2KeyName !== null ? output.ec2KeyName : undefined,
        iamInstanceProfileName: output.iamInstanceProfileName !== undefined && output.iamInstanceProfileName !== null
            ? output.iamInstanceProfileName
            : undefined,
        instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        logicalId: output.logicalId !== undefined && output.logicalId !== null ? output.logicalId : undefined,
        securityGroup: output.securityGroup !== undefined && output.securityGroup !== null ? output.securityGroup : undefined,
        server: output.server !== undefined && output.server !== null
            ? deserializeAws_json1_1Server(output.server, context)
            : undefined,
        subnet: output.subnet !== undefined && output.subnet !== null ? output.subnet : undefined,
        userData: output.userData !== undefined && output.userData !== null
            ? deserializeAws_json1_1UserData(output.userData, context)
            : undefined,
        vpc: output.vpc !== undefined && output.vpc !== null ? output.vpc : undefined,
    };
};
const deserializeAws_json1_1ServerLaunchConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerLaunchConfiguration(entry, context);
    });
};
const deserializeAws_json1_1ServerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Server(entry, context);
    });
};
const deserializeAws_json1_1ServerReplicationConfiguration = (output, context) => {
    return {
        server: output.server !== undefined && output.server !== null
            ? deserializeAws_json1_1Server(output.server, context)
            : undefined,
        serverReplicationParameters: output.serverReplicationParameters !== undefined && output.serverReplicationParameters !== null
            ? deserializeAws_json1_1ServerReplicationParameters(output.serverReplicationParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1ServerReplicationConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerReplicationConfiguration(entry, context);
    });
};
const deserializeAws_json1_1ServerReplicationParameters = (output, context) => {
    return {
        encrypted: output.encrypted !== undefined && output.encrypted !== null ? output.encrypted : undefined,
        frequency: output.frequency !== undefined && output.frequency !== null ? output.frequency : undefined,
        kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        licenseType: output.licenseType !== undefined && output.licenseType !== null ? output.licenseType : undefined,
        numberOfRecentAmisToKeep: output.numberOfRecentAmisToKeep !== undefined && output.numberOfRecentAmisToKeep !== null
            ? output.numberOfRecentAmisToKeep
            : undefined,
        runOnce: output.runOnce !== undefined && output.runOnce !== null ? output.runOnce : undefined,
        seedTime: output.seedTime !== undefined && output.seedTime !== null
            ? new Date(Math.round(output.seedTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1ServerValidationConfiguration = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        server: output.server !== undefined && output.server !== null
            ? deserializeAws_json1_1Server(output.server, context)
            : undefined,
        serverValidationStrategy: output.serverValidationStrategy !== undefined && output.serverValidationStrategy !== null
            ? output.serverValidationStrategy
            : undefined,
        userDataValidationParameters: output.userDataValidationParameters !== undefined && output.userDataValidationParameters !== null
            ? deserializeAws_json1_1UserDataValidationParameters(output.userDataValidationParameters, context)
            : undefined,
        validationId: output.validationId !== undefined && output.validationId !== null ? output.validationId : undefined,
    };
};
const deserializeAws_json1_1ServerValidationConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerValidationConfiguration(entry, context);
    });
};
const deserializeAws_json1_1ServerValidationOutput = (output, context) => {
    return {
        server: output.server !== undefined && output.server !== null
            ? deserializeAws_json1_1Server(output.server, context)
            : undefined,
    };
};
const deserializeAws_json1_1Source = (output, context) => {
    return {
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3Location(output.s3Location, context)
            : undefined,
    };
};
const deserializeAws_json1_1SSMOutput = (output, context) => {
    return {
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3Location(output.s3Location, context)
            : undefined,
    };
};
const deserializeAws_json1_1SSMValidationParameters = (output, context) => {
    return {
        command: output.command !== undefined && output.command !== null ? output.command : undefined,
        executionTimeoutSeconds: output.executionTimeoutSeconds !== undefined && output.executionTimeoutSeconds !== null
            ? output.executionTimeoutSeconds
            : undefined,
        instanceId: output.instanceId !== undefined && output.instanceId !== null ? output.instanceId : undefined,
        outputS3BucketName: output.outputS3BucketName !== undefined && output.outputS3BucketName !== null
            ? output.outputS3BucketName
            : undefined,
        scriptType: output.scriptType !== undefined && output.scriptType !== null ? output.scriptType : undefined,
        source: output.source !== undefined && output.source !== null
            ? deserializeAws_json1_1Source(output.source, context)
            : undefined,
    };
};
const deserializeAws_json1_1StartAppReplicationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1StartOnDemandAppReplicationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1StartOnDemandReplicationRunResponse = (output, context) => {
    return {
        replicationRunId: output.replicationRunId !== undefined && output.replicationRunId !== null ? output.replicationRunId : undefined,
    };
};
const deserializeAws_json1_1StopAppReplicationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TemporarilyUnavailableException = (output, context) => {
    return {};
};
const deserializeAws_json1_1TerminateAppResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UnauthorizedOperationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UpdateAppResponse = (output, context) => {
    return {
        appSummary: output.appSummary !== undefined && output.appSummary !== null
            ? deserializeAws_json1_1AppSummary(output.appSummary, context)
            : undefined,
        serverGroups: output.serverGroups !== undefined && output.serverGroups !== null
            ? deserializeAws_json1_1ServerGroups(output.serverGroups, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
const deserializeAws_json1_1UpdateReplicationJobResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UserData = (output, context) => {
    return {
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3Location(output.s3Location, context)
            : undefined,
    };
};
const deserializeAws_json1_1UserDataValidationParameters = (output, context) => {
    return {
        scriptType: output.scriptType !== undefined && output.scriptType !== null ? output.scriptType : undefined,
        source: output.source !== undefined && output.source !== null
            ? deserializeAws_json1_1Source(output.source, context)
            : undefined,
    };
};
const deserializeAws_json1_1ValidationOutput = (output, context) => {
    return {
        appValidationOutput: output.appValidationOutput !== undefined && output.appValidationOutput !== null
            ? deserializeAws_json1_1AppValidationOutput(output.appValidationOutput, context)
            : undefined,
        latestValidationTime: output.latestValidationTime !== undefined && output.latestValidationTime !== null
            ? new Date(Math.round(output.latestValidationTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        serverValidationOutput: output.serverValidationOutput !== undefined && output.serverValidationOutput !== null
            ? deserializeAws_json1_1ServerValidationOutput(output.serverValidationOutput, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        validationId: output.validationId !== undefined && output.validationId !== null ? output.validationId : undefined,
    };
};
const deserializeAws_json1_1ValidationOutputList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ValidationOutput(entry, context);
    });
};
const deserializeAws_json1_1VmServer = (output, context) => {
    return {
        vmManagerName: output.vmManagerName !== undefined && output.vmManagerName !== null ? output.vmManagerName : undefined,
        vmManagerType: output.vmManagerType !== undefined && output.vmManagerType !== null ? output.vmManagerType : undefined,
        vmName: output.vmName !== undefined && output.vmName !== null ? output.vmName : undefined,
        vmPath: output.vmPath !== undefined && output.vmPath !== null ? output.vmPath : undefined,
        vmServerAddress: output.vmServerAddress !== undefined && output.vmServerAddress !== null
            ? deserializeAws_json1_1VmServerAddress(output.vmServerAddress, context)
            : undefined,
    };
};
const deserializeAws_json1_1VmServerAddress = (output, context) => {
    return {
        vmId: output.vmId !== undefined && output.vmId !== null ? output.vmId : undefined,
        vmManagerId: output.vmManagerId !== undefined && output.vmManagerId !== null ? output.vmManagerId : undefined,
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