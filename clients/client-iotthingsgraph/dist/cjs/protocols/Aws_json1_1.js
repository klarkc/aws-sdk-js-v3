"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1GetFlowTemplateCommand = exports.deserializeAws_json1_1GetEntitiesCommand = exports.deserializeAws_json1_1DissociateEntityFromThingCommand = exports.deserializeAws_json1_1DescribeNamespaceCommand = exports.deserializeAws_json1_1DeprecateSystemTemplateCommand = exports.deserializeAws_json1_1DeprecateFlowTemplateCommand = exports.deserializeAws_json1_1DeploySystemInstanceCommand = exports.deserializeAws_json1_1DeleteSystemTemplateCommand = exports.deserializeAws_json1_1DeleteSystemInstanceCommand = exports.deserializeAws_json1_1DeleteNamespaceCommand = exports.deserializeAws_json1_1DeleteFlowTemplateCommand = exports.deserializeAws_json1_1CreateSystemTemplateCommand = exports.deserializeAws_json1_1CreateSystemInstanceCommand = exports.deserializeAws_json1_1CreateFlowTemplateCommand = exports.deserializeAws_json1_1AssociateEntityToThingCommand = exports.serializeAws_json1_1UploadEntityDefinitionsCommand = exports.serializeAws_json1_1UpdateSystemTemplateCommand = exports.serializeAws_json1_1UpdateFlowTemplateCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1UndeploySystemInstanceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1SearchThingsCommand = exports.serializeAws_json1_1SearchSystemTemplatesCommand = exports.serializeAws_json1_1SearchSystemInstancesCommand = exports.serializeAws_json1_1SearchFlowTemplatesCommand = exports.serializeAws_json1_1SearchFlowExecutionsCommand = exports.serializeAws_json1_1SearchEntitiesCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListFlowExecutionMessagesCommand = exports.serializeAws_json1_1GetUploadStatusCommand = exports.serializeAws_json1_1GetSystemTemplateRevisionsCommand = exports.serializeAws_json1_1GetSystemTemplateCommand = exports.serializeAws_json1_1GetSystemInstanceCommand = exports.serializeAws_json1_1GetNamespaceDeletionStatusCommand = exports.serializeAws_json1_1GetFlowTemplateRevisionsCommand = exports.serializeAws_json1_1GetFlowTemplateCommand = exports.serializeAws_json1_1GetEntitiesCommand = exports.serializeAws_json1_1DissociateEntityFromThingCommand = exports.serializeAws_json1_1DescribeNamespaceCommand = exports.serializeAws_json1_1DeprecateSystemTemplateCommand = exports.serializeAws_json1_1DeprecateFlowTemplateCommand = exports.serializeAws_json1_1DeploySystemInstanceCommand = exports.serializeAws_json1_1DeleteSystemTemplateCommand = exports.serializeAws_json1_1DeleteSystemInstanceCommand = exports.serializeAws_json1_1DeleteNamespaceCommand = exports.serializeAws_json1_1DeleteFlowTemplateCommand = exports.serializeAws_json1_1CreateSystemTemplateCommand = exports.serializeAws_json1_1CreateSystemInstanceCommand = exports.serializeAws_json1_1CreateFlowTemplateCommand = exports.serializeAws_json1_1AssociateEntityToThingCommand = void 0;
exports.deserializeAws_json1_1UploadEntityDefinitionsCommand = exports.deserializeAws_json1_1UpdateSystemTemplateCommand = exports.deserializeAws_json1_1UpdateFlowTemplateCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1UndeploySystemInstanceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1SearchThingsCommand = exports.deserializeAws_json1_1SearchSystemTemplatesCommand = exports.deserializeAws_json1_1SearchSystemInstancesCommand = exports.deserializeAws_json1_1SearchFlowTemplatesCommand = exports.deserializeAws_json1_1SearchFlowExecutionsCommand = exports.deserializeAws_json1_1SearchEntitiesCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListFlowExecutionMessagesCommand = exports.deserializeAws_json1_1GetUploadStatusCommand = exports.deserializeAws_json1_1GetSystemTemplateRevisionsCommand = exports.deserializeAws_json1_1GetSystemTemplateCommand = exports.deserializeAws_json1_1GetSystemInstanceCommand = exports.deserializeAws_json1_1GetNamespaceDeletionStatusCommand = exports.deserializeAws_json1_1GetFlowTemplateRevisionsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssociateEntityToThingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.AssociateEntityToThing",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateEntityToThingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateEntityToThingCommand = serializeAws_json1_1AssociateEntityToThingCommand;
const serializeAws_json1_1CreateFlowTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.CreateFlowTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFlowTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateFlowTemplateCommand = serializeAws_json1_1CreateFlowTemplateCommand;
const serializeAws_json1_1CreateSystemInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.CreateSystemInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSystemInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSystemInstanceCommand = serializeAws_json1_1CreateSystemInstanceCommand;
const serializeAws_json1_1CreateSystemTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.CreateSystemTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSystemTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSystemTemplateCommand = serializeAws_json1_1CreateSystemTemplateCommand;
const serializeAws_json1_1DeleteFlowTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.DeleteFlowTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFlowTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFlowTemplateCommand = serializeAws_json1_1DeleteFlowTemplateCommand;
const serializeAws_json1_1DeleteNamespaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.DeleteNamespace",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteNamespaceCommand = serializeAws_json1_1DeleteNamespaceCommand;
const serializeAws_json1_1DeleteSystemInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.DeleteSystemInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSystemInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSystemInstanceCommand = serializeAws_json1_1DeleteSystemInstanceCommand;
const serializeAws_json1_1DeleteSystemTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.DeleteSystemTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSystemTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSystemTemplateCommand = serializeAws_json1_1DeleteSystemTemplateCommand;
const serializeAws_json1_1DeploySystemInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.DeploySystemInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeploySystemInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeploySystemInstanceCommand = serializeAws_json1_1DeploySystemInstanceCommand;
const serializeAws_json1_1DeprecateFlowTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.DeprecateFlowTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeprecateFlowTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeprecateFlowTemplateCommand = serializeAws_json1_1DeprecateFlowTemplateCommand;
const serializeAws_json1_1DeprecateSystemTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.DeprecateSystemTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeprecateSystemTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeprecateSystemTemplateCommand = serializeAws_json1_1DeprecateSystemTemplateCommand;
const serializeAws_json1_1DescribeNamespaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.DescribeNamespace",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeNamespaceCommand = serializeAws_json1_1DescribeNamespaceCommand;
const serializeAws_json1_1DissociateEntityFromThingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.DissociateEntityFromThing",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DissociateEntityFromThingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DissociateEntityFromThingCommand = serializeAws_json1_1DissociateEntityFromThingCommand;
const serializeAws_json1_1GetEntitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.GetEntities",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetEntitiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetEntitiesCommand = serializeAws_json1_1GetEntitiesCommand;
const serializeAws_json1_1GetFlowTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.GetFlowTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFlowTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetFlowTemplateCommand = serializeAws_json1_1GetFlowTemplateCommand;
const serializeAws_json1_1GetFlowTemplateRevisionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.GetFlowTemplateRevisions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFlowTemplateRevisionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetFlowTemplateRevisionsCommand = serializeAws_json1_1GetFlowTemplateRevisionsCommand;
const serializeAws_json1_1GetNamespaceDeletionStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.GetNamespaceDeletionStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetNamespaceDeletionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetNamespaceDeletionStatusCommand = serializeAws_json1_1GetNamespaceDeletionStatusCommand;
const serializeAws_json1_1GetSystemInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.GetSystemInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSystemInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSystemInstanceCommand = serializeAws_json1_1GetSystemInstanceCommand;
const serializeAws_json1_1GetSystemTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.GetSystemTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSystemTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSystemTemplateCommand = serializeAws_json1_1GetSystemTemplateCommand;
const serializeAws_json1_1GetSystemTemplateRevisionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.GetSystemTemplateRevisions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSystemTemplateRevisionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSystemTemplateRevisionsCommand = serializeAws_json1_1GetSystemTemplateRevisionsCommand;
const serializeAws_json1_1GetUploadStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.GetUploadStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUploadStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetUploadStatusCommand = serializeAws_json1_1GetUploadStatusCommand;
const serializeAws_json1_1ListFlowExecutionMessagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.ListFlowExecutionMessages",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFlowExecutionMessagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFlowExecutionMessagesCommand = serializeAws_json1_1ListFlowExecutionMessagesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1SearchEntitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.SearchEntities",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchEntitiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchEntitiesCommand = serializeAws_json1_1SearchEntitiesCommand;
const serializeAws_json1_1SearchFlowExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.SearchFlowExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchFlowExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchFlowExecutionsCommand = serializeAws_json1_1SearchFlowExecutionsCommand;
const serializeAws_json1_1SearchFlowTemplatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.SearchFlowTemplates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchFlowTemplatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchFlowTemplatesCommand = serializeAws_json1_1SearchFlowTemplatesCommand;
const serializeAws_json1_1SearchSystemInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.SearchSystemInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchSystemInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchSystemInstancesCommand = serializeAws_json1_1SearchSystemInstancesCommand;
const serializeAws_json1_1SearchSystemTemplatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.SearchSystemTemplates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchSystemTemplatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchSystemTemplatesCommand = serializeAws_json1_1SearchSystemTemplatesCommand;
const serializeAws_json1_1SearchThingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.SearchThings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchThingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchThingsCommand = serializeAws_json1_1SearchThingsCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UndeploySystemInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.UndeploySystemInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UndeploySystemInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UndeploySystemInstanceCommand = serializeAws_json1_1UndeploySystemInstanceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateFlowTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.UpdateFlowTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFlowTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateFlowTemplateCommand = serializeAws_json1_1UpdateFlowTemplateCommand;
const serializeAws_json1_1UpdateSystemTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.UpdateSystemTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSystemTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSystemTemplateCommand = serializeAws_json1_1UpdateSystemTemplateCommand;
const serializeAws_json1_1UploadEntityDefinitionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "IotThingsGraphFrontEndService.UploadEntityDefinitions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UploadEntityDefinitionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UploadEntityDefinitionsCommand = serializeAws_json1_1UploadEntityDefinitionsCommand;
const deserializeAws_json1_1AssociateEntityToThingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateEntityToThingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateEntityToThingResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateEntityToThingCommand = deserializeAws_json1_1AssociateEntityToThingCommand;
const deserializeAws_json1_1AssociateEntityToThingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateFlowTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateFlowTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFlowTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateFlowTemplateCommand = deserializeAws_json1_1CreateFlowTemplateCommand;
const deserializeAws_json1_1CreateFlowTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotthingsgraph#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateSystemInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSystemInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSystemInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSystemInstanceCommand = deserializeAws_json1_1CreateSystemInstanceCommand;
const deserializeAws_json1_1CreateSystemInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotthingsgraph#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateSystemTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSystemTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSystemTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSystemTemplateCommand = deserializeAws_json1_1CreateSystemTemplateCommand;
const deserializeAws_json1_1CreateSystemTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteFlowTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteFlowTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFlowTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFlowTemplateCommand = deserializeAws_json1_1DeleteFlowTemplateCommand;
const deserializeAws_json1_1DeleteFlowTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotthingsgraph#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteNamespaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteNamespaceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteNamespaceCommand = deserializeAws_json1_1DeleteNamespaceCommand;
const deserializeAws_json1_1DeleteNamespaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteSystemInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSystemInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSystemInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSystemInstanceCommand = deserializeAws_json1_1DeleteSystemInstanceCommand;
const deserializeAws_json1_1DeleteSystemInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotthingsgraph#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteSystemTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSystemTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSystemTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSystemTemplateCommand = deserializeAws_json1_1DeleteSystemTemplateCommand;
const deserializeAws_json1_1DeleteSystemTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotthingsgraph#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeploySystemInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeploySystemInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeploySystemInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeploySystemInstanceCommand = deserializeAws_json1_1DeploySystemInstanceCommand;
const deserializeAws_json1_1DeploySystemInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotthingsgraph#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeprecateFlowTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeprecateFlowTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeprecateFlowTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeprecateFlowTemplateCommand = deserializeAws_json1_1DeprecateFlowTemplateCommand;
const deserializeAws_json1_1DeprecateFlowTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeprecateSystemTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeprecateSystemTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeprecateSystemTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeprecateSystemTemplateCommand = deserializeAws_json1_1DeprecateSystemTemplateCommand;
const deserializeAws_json1_1DeprecateSystemTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeNamespaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeNamespaceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeNamespaceCommand = deserializeAws_json1_1DescribeNamespaceCommand;
const deserializeAws_json1_1DescribeNamespaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DissociateEntityFromThingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DissociateEntityFromThingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DissociateEntityFromThingResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DissociateEntityFromThingCommand = deserializeAws_json1_1DissociateEntityFromThingCommand;
const deserializeAws_json1_1DissociateEntityFromThingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetEntitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetEntitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetEntitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetEntitiesCommand = deserializeAws_json1_1GetEntitiesCommand;
const deserializeAws_json1_1GetEntitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetFlowTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetFlowTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFlowTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetFlowTemplateCommand = deserializeAws_json1_1GetFlowTemplateCommand;
const deserializeAws_json1_1GetFlowTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetFlowTemplateRevisionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetFlowTemplateRevisionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFlowTemplateRevisionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetFlowTemplateRevisionsCommand = deserializeAws_json1_1GetFlowTemplateRevisionsCommand;
const deserializeAws_json1_1GetFlowTemplateRevisionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetNamespaceDeletionStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetNamespaceDeletionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetNamespaceDeletionStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetNamespaceDeletionStatusCommand = deserializeAws_json1_1GetNamespaceDeletionStatusCommand;
const deserializeAws_json1_1GetNamespaceDeletionStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetSystemInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSystemInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSystemInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSystemInstanceCommand = deserializeAws_json1_1GetSystemInstanceCommand;
const deserializeAws_json1_1GetSystemInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetSystemTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSystemTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSystemTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSystemTemplateCommand = deserializeAws_json1_1GetSystemTemplateCommand;
const deserializeAws_json1_1GetSystemTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetSystemTemplateRevisionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSystemTemplateRevisionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSystemTemplateRevisionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSystemTemplateRevisionsCommand = deserializeAws_json1_1GetSystemTemplateRevisionsCommand;
const deserializeAws_json1_1GetSystemTemplateRevisionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetUploadStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetUploadStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUploadStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetUploadStatusCommand = deserializeAws_json1_1GetUploadStatusCommand;
const deserializeAws_json1_1GetUploadStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListFlowExecutionMessagesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFlowExecutionMessagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFlowExecutionMessagesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFlowExecutionMessagesCommand = deserializeAws_json1_1ListFlowExecutionMessagesCommand;
const deserializeAws_json1_1ListFlowExecutionMessagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchEntitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchEntitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchEntitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchEntitiesCommand = deserializeAws_json1_1SearchEntitiesCommand;
const deserializeAws_json1_1SearchEntitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchFlowExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchFlowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchFlowExecutionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchFlowExecutionsCommand = deserializeAws_json1_1SearchFlowExecutionsCommand;
const deserializeAws_json1_1SearchFlowExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchFlowTemplatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchFlowTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchFlowTemplatesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchFlowTemplatesCommand = deserializeAws_json1_1SearchFlowTemplatesCommand;
const deserializeAws_json1_1SearchFlowTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchSystemInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchSystemInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchSystemInstancesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchSystemInstancesCommand = deserializeAws_json1_1SearchSystemInstancesCommand;
const deserializeAws_json1_1SearchSystemInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchSystemTemplatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchSystemTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchSystemTemplatesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchSystemTemplatesCommand = deserializeAws_json1_1SearchSystemTemplatesCommand;
const deserializeAws_json1_1SearchSystemTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchThingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchThingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchThingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchThingsCommand = deserializeAws_json1_1SearchThingsCommand;
const deserializeAws_json1_1SearchThingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UndeploySystemInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UndeploySystemInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UndeploySystemInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UndeploySystemInstanceCommand = deserializeAws_json1_1UndeploySystemInstanceCommand;
const deserializeAws_json1_1UndeploySystemInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotthingsgraph#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateFlowTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateFlowTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFlowTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateFlowTemplateCommand = deserializeAws_json1_1UpdateFlowTemplateCommand;
const deserializeAws_json1_1UpdateFlowTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateSystemTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateSystemTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSystemTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSystemTemplateCommand = deserializeAws_json1_1UpdateSystemTemplateCommand;
const deserializeAws_json1_1UpdateSystemTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UploadEntityDefinitionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UploadEntityDefinitionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UploadEntityDefinitionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UploadEntityDefinitionsCommand = deserializeAws_json1_1UploadEntityDefinitionsCommand;
const deserializeAws_json1_1UploadEntityDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotthingsgraph#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotthingsgraph#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotthingsgraph#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalFailureException(body, context);
    const contents = {
        name: "InternalFailureException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = {
        name: "ResourceAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AssociateEntityToThingRequest = (input, context) => {
    return {
        ...(input.entityId !== undefined && input.entityId !== null && { entityId: input.entityId }),
        ...(input.namespaceVersion !== undefined &&
            input.namespaceVersion !== null && { namespaceVersion: input.namespaceVersion }),
        ...(input.thingName !== undefined && input.thingName !== null && { thingName: input.thingName }),
    };
};
const serializeAws_json1_1CreateFlowTemplateRequest = (input, context) => {
    return {
        ...(input.compatibleNamespaceVersion !== undefined &&
            input.compatibleNamespaceVersion !== null && { compatibleNamespaceVersion: input.compatibleNamespaceVersion }),
        ...(input.definition !== undefined &&
            input.definition !== null && { definition: serializeAws_json1_1DefinitionDocument(input.definition, context) }),
    };
};
const serializeAws_json1_1CreateSystemInstanceRequest = (input, context) => {
    return {
        ...(input.definition !== undefined &&
            input.definition !== null && { definition: serializeAws_json1_1DefinitionDocument(input.definition, context) }),
        ...(input.flowActionsRoleArn !== undefined &&
            input.flowActionsRoleArn !== null && { flowActionsRoleArn: input.flowActionsRoleArn }),
        ...(input.greengrassGroupName !== undefined &&
            input.greengrassGroupName !== null && { greengrassGroupName: input.greengrassGroupName }),
        ...(input.metricsConfiguration !== undefined &&
            input.metricsConfiguration !== null && {
            metricsConfiguration: serializeAws_json1_1MetricsConfiguration(input.metricsConfiguration, context),
        }),
        ...(input.s3BucketName !== undefined && input.s3BucketName !== null && { s3BucketName: input.s3BucketName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.target !== undefined && input.target !== null && { target: input.target }),
    };
};
const serializeAws_json1_1CreateSystemTemplateRequest = (input, context) => {
    return {
        ...(input.compatibleNamespaceVersion !== undefined &&
            input.compatibleNamespaceVersion !== null && { compatibleNamespaceVersion: input.compatibleNamespaceVersion }),
        ...(input.definition !== undefined &&
            input.definition !== null && { definition: serializeAws_json1_1DefinitionDocument(input.definition, context) }),
    };
};
const serializeAws_json1_1DefinitionDocument = (input, context) => {
    return {
        ...(input.language !== undefined && input.language !== null && { language: input.language }),
        ...(input.text !== undefined && input.text !== null && { text: input.text }),
    };
};
const serializeAws_json1_1DeleteFlowTemplateRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1DeleteNamespaceRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DeleteSystemInstanceRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1DeleteSystemTemplateRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1DeploySystemInstanceRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1DeprecateFlowTemplateRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1DeprecateSystemTemplateRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1DescribeNamespaceRequest = (input, context) => {
    return {
        ...(input.namespaceName !== undefined && input.namespaceName !== null && { namespaceName: input.namespaceName }),
    };
};
const serializeAws_json1_1DissociateEntityFromThingRequest = (input, context) => {
    return {
        ...(input.entityType !== undefined && input.entityType !== null && { entityType: input.entityType }),
        ...(input.thingName !== undefined && input.thingName !== null && { thingName: input.thingName }),
    };
};
const serializeAws_json1_1EntityFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.value !== undefined &&
            input.value !== null && { value: serializeAws_json1_1EntityFilterValues(input.value, context) }),
    };
};
const serializeAws_json1_1EntityFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EntityFilter(entry, context);
    });
};
const serializeAws_json1_1EntityFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1EntityTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1FlowTemplateFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.value !== undefined &&
            input.value !== null && { value: serializeAws_json1_1FlowTemplateFilterValues(input.value, context) }),
    };
};
const serializeAws_json1_1FlowTemplateFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1FlowTemplateFilter(entry, context);
    });
};
const serializeAws_json1_1FlowTemplateFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetEntitiesRequest = (input, context) => {
    return {
        ...(input.ids !== undefined && input.ids !== null && { ids: serializeAws_json1_1Urns(input.ids, context) }),
        ...(input.namespaceVersion !== undefined &&
            input.namespaceVersion !== null && { namespaceVersion: input.namespaceVersion }),
    };
};
const serializeAws_json1_1GetFlowTemplateRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.revisionNumber !== undefined &&
            input.revisionNumber !== null && { revisionNumber: input.revisionNumber }),
    };
};
const serializeAws_json1_1GetFlowTemplateRevisionsRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1GetNamespaceDeletionStatusRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetSystemInstanceRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1GetSystemTemplateRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.revisionNumber !== undefined &&
            input.revisionNumber !== null && { revisionNumber: input.revisionNumber }),
    };
};
const serializeAws_json1_1GetSystemTemplateRevisionsRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1GetUploadStatusRequest = (input, context) => {
    return {
        ...(input.uploadId !== undefined && input.uploadId !== null && { uploadId: input.uploadId }),
    };
};
const serializeAws_json1_1ListFlowExecutionMessagesRequest = (input, context) => {
    return {
        ...(input.flowExecutionId !== undefined &&
            input.flowExecutionId !== null && { flowExecutionId: input.flowExecutionId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_1MetricsConfiguration = (input, context) => {
    return {
        ...(input.cloudMetricEnabled !== undefined &&
            input.cloudMetricEnabled !== null && { cloudMetricEnabled: input.cloudMetricEnabled }),
        ...(input.metricRuleRoleArn !== undefined &&
            input.metricRuleRoleArn !== null && { metricRuleRoleArn: input.metricRuleRoleArn }),
    };
};
const serializeAws_json1_1SearchEntitiesRequest = (input, context) => {
    return {
        ...(input.entityTypes !== undefined &&
            input.entityTypes !== null && { entityTypes: serializeAws_json1_1EntityTypes(input.entityTypes, context) }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_1EntityFilters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.namespaceVersion !== undefined &&
            input.namespaceVersion !== null && { namespaceVersion: input.namespaceVersion }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1SearchFlowExecutionsRequest = (input, context) => {
    return {
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
        ...(input.flowExecutionId !== undefined &&
            input.flowExecutionId !== null && { flowExecutionId: input.flowExecutionId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
        ...(input.systemInstanceId !== undefined &&
            input.systemInstanceId !== null && { systemInstanceId: input.systemInstanceId }),
    };
};
const serializeAws_json1_1SearchFlowTemplatesRequest = (input, context) => {
    return {
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_1FlowTemplateFilters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1SearchSystemInstancesRequest = (input, context) => {
    return {
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_1SystemInstanceFilters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1SearchSystemTemplatesRequest = (input, context) => {
    return {
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_1SystemTemplateFilters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1SearchThingsRequest = (input, context) => {
    return {
        ...(input.entityId !== undefined && input.entityId !== null && { entityId: input.entityId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.namespaceVersion !== undefined &&
            input.namespaceVersion !== null && { namespaceVersion: input.namespaceVersion }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1SystemInstanceFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.value !== undefined &&
            input.value !== null && { value: serializeAws_json1_1SystemInstanceFilterValues(input.value, context) }),
    };
};
const serializeAws_json1_1SystemInstanceFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SystemInstanceFilter(entry, context);
    });
};
const serializeAws_json1_1SystemInstanceFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SystemTemplateFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.value !== undefined &&
            input.value !== null && { value: serializeAws_json1_1SystemTemplateFilterValues(input.value, context) }),
    };
};
const serializeAws_json1_1SystemTemplateFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SystemTemplateFilter(entry, context);
    });
};
const serializeAws_json1_1SystemTemplateFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1UndeploySystemInstanceRequest = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateFlowTemplateRequest = (input, context) => {
    return {
        ...(input.compatibleNamespaceVersion !== undefined &&
            input.compatibleNamespaceVersion !== null && { compatibleNamespaceVersion: input.compatibleNamespaceVersion }),
        ...(input.definition !== undefined &&
            input.definition !== null && { definition: serializeAws_json1_1DefinitionDocument(input.definition, context) }),
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1UpdateSystemTemplateRequest = (input, context) => {
    return {
        ...(input.compatibleNamespaceVersion !== undefined &&
            input.compatibleNamespaceVersion !== null && { compatibleNamespaceVersion: input.compatibleNamespaceVersion }),
        ...(input.definition !== undefined &&
            input.definition !== null && { definition: serializeAws_json1_1DefinitionDocument(input.definition, context) }),
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1UploadEntityDefinitionsRequest = (input, context) => {
    return {
        ...(input.deprecateExistingEntities !== undefined &&
            input.deprecateExistingEntities !== null && { deprecateExistingEntities: input.deprecateExistingEntities }),
        ...(input.document !== undefined &&
            input.document !== null && { document: serializeAws_json1_1DefinitionDocument(input.document, context) }),
        ...(input.syncWithPublicNamespace !== undefined &&
            input.syncWithPublicNamespace !== null && { syncWithPublicNamespace: input.syncWithPublicNamespace }),
    };
};
const serializeAws_json1_1Urns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AssociateEntityToThingResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateFlowTemplateResponse = (output, context) => {
    return {
        summary: output.summary !== undefined && output.summary !== null
            ? deserializeAws_json1_1FlowTemplateSummary(output.summary, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateSystemInstanceResponse = (output, context) => {
    return {
        summary: output.summary !== undefined && output.summary !== null
            ? deserializeAws_json1_1SystemInstanceSummary(output.summary, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateSystemTemplateResponse = (output, context) => {
    return {
        summary: output.summary !== undefined && output.summary !== null
            ? deserializeAws_json1_1SystemTemplateSummary(output.summary, context)
            : undefined,
    };
};
const deserializeAws_json1_1DefinitionDocument = (output, context) => {
    return {
        language: output.language !== undefined && output.language !== null ? output.language : undefined,
        text: output.text !== undefined && output.text !== null ? output.text : undefined,
    };
};
const deserializeAws_json1_1DeleteFlowTemplateResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteNamespaceResponse = (output, context) => {
    return {
        namespaceArn: output.namespaceArn !== undefined && output.namespaceArn !== null ? output.namespaceArn : undefined,
        namespaceName: output.namespaceName !== undefined && output.namespaceName !== null ? output.namespaceName : undefined,
    };
};
const deserializeAws_json1_1DeleteSystemInstanceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteSystemTemplateResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DependencyRevision = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        revisionNumber: output.revisionNumber !== undefined && output.revisionNumber !== null ? output.revisionNumber : undefined,
    };
};
const deserializeAws_json1_1DependencyRevisions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DependencyRevision(entry, context);
    });
};
const deserializeAws_json1_1DeploySystemInstanceResponse = (output, context) => {
    return {
        greengrassDeploymentId: output.greengrassDeploymentId !== undefined && output.greengrassDeploymentId !== null
            ? output.greengrassDeploymentId
            : undefined,
        summary: output.summary !== undefined && output.summary !== null
            ? deserializeAws_json1_1SystemInstanceSummary(output.summary, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeprecateFlowTemplateResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeprecateSystemTemplateResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeNamespaceResponse = (output, context) => {
    return {
        namespaceArn: output.namespaceArn !== undefined && output.namespaceArn !== null ? output.namespaceArn : undefined,
        namespaceName: output.namespaceName !== undefined && output.namespaceName !== null ? output.namespaceName : undefined,
        namespaceVersion: output.namespaceVersion !== undefined && output.namespaceVersion !== null ? output.namespaceVersion : undefined,
        trackingNamespaceName: output.trackingNamespaceName !== undefined && output.trackingNamespaceName !== null
            ? output.trackingNamespaceName
            : undefined,
        trackingNamespaceVersion: output.trackingNamespaceVersion !== undefined && output.trackingNamespaceVersion !== null
            ? output.trackingNamespaceVersion
            : undefined,
    };
};
const deserializeAws_json1_1DissociateEntityFromThingResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1EntityDescription = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        definition: output.definition !== undefined && output.definition !== null
            ? deserializeAws_json1_1DefinitionDocument(output.definition, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1EntityDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EntityDescription(entry, context);
    });
};
const deserializeAws_json1_1FlowExecutionMessage = (output, context) => {
    return {
        eventType: output.eventType !== undefined && output.eventType !== null ? output.eventType : undefined,
        messageId: output.messageId !== undefined && output.messageId !== null ? output.messageId : undefined,
        payload: output.payload !== undefined && output.payload !== null ? output.payload : undefined,
        timestamp: output.timestamp !== undefined && output.timestamp !== null
            ? new Date(Math.round(output.timestamp * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1FlowExecutionMessages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FlowExecutionMessage(entry, context);
    });
};
const deserializeAws_json1_1FlowExecutionSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FlowExecutionSummary(entry, context);
    });
};
const deserializeAws_json1_1FlowExecutionSummary = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        flowExecutionId: output.flowExecutionId !== undefined && output.flowExecutionId !== null ? output.flowExecutionId : undefined,
        flowTemplateId: output.flowTemplateId !== undefined && output.flowTemplateId !== null ? output.flowTemplateId : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        systemInstanceId: output.systemInstanceId !== undefined && output.systemInstanceId !== null ? output.systemInstanceId : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null
            ? new Date(Math.round(output.updatedAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1FlowTemplateDescription = (output, context) => {
    return {
        definition: output.definition !== undefined && output.definition !== null
            ? deserializeAws_json1_1DefinitionDocument(output.definition, context)
            : undefined,
        summary: output.summary !== undefined && output.summary !== null
            ? deserializeAws_json1_1FlowTemplateSummary(output.summary, context)
            : undefined,
        validatedNamespaceVersion: output.validatedNamespaceVersion !== undefined && output.validatedNamespaceVersion !== null
            ? output.validatedNamespaceVersion
            : undefined,
    };
};
const deserializeAws_json1_1FlowTemplateSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FlowTemplateSummary(entry, context);
    });
};
const deserializeAws_json1_1FlowTemplateSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        revisionNumber: output.revisionNumber !== undefined && output.revisionNumber !== null ? output.revisionNumber : undefined,
    };
};
const deserializeAws_json1_1GetEntitiesResponse = (output, context) => {
    return {
        descriptions: output.descriptions !== undefined && output.descriptions !== null
            ? deserializeAws_json1_1EntityDescriptions(output.descriptions, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetFlowTemplateResponse = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null
            ? deserializeAws_json1_1FlowTemplateDescription(output.description, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetFlowTemplateRevisionsResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        summaries: output.summaries !== undefined && output.summaries !== null
            ? deserializeAws_json1_1FlowTemplateSummaries(output.summaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetNamespaceDeletionStatusResponse = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        namespaceArn: output.namespaceArn !== undefined && output.namespaceArn !== null ? output.namespaceArn : undefined,
        namespaceName: output.namespaceName !== undefined && output.namespaceName !== null ? output.namespaceName : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1GetSystemInstanceResponse = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null
            ? deserializeAws_json1_1SystemInstanceDescription(output.description, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetSystemTemplateResponse = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null
            ? deserializeAws_json1_1SystemTemplateDescription(output.description, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetSystemTemplateRevisionsResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        summaries: output.summaries !== undefined && output.summaries !== null
            ? deserializeAws_json1_1SystemTemplateSummaries(output.summaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetUploadStatusResponse = (output, context) => {
    return {
        createdDate: output.createdDate !== undefined && output.createdDate !== null
            ? new Date(Math.round(output.createdDate * 1000))
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null
            ? deserializeAws_json1_1StringList(output.failureReason, context)
            : undefined,
        namespaceArn: output.namespaceArn !== undefined && output.namespaceArn !== null ? output.namespaceArn : undefined,
        namespaceName: output.namespaceName !== undefined && output.namespaceName !== null ? output.namespaceName : undefined,
        namespaceVersion: output.namespaceVersion !== undefined && output.namespaceVersion !== null ? output.namespaceVersion : undefined,
        uploadId: output.uploadId !== undefined && output.uploadId !== null ? output.uploadId : undefined,
        uploadStatus: output.uploadStatus !== undefined && output.uploadStatus !== null ? output.uploadStatus : undefined,
    };
};
const deserializeAws_json1_1InternalFailureException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListFlowExecutionMessagesResponse = (output, context) => {
    return {
        messages: output.messages !== undefined && output.messages !== null
            ? deserializeAws_json1_1FlowExecutionMessages(output.messages, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1MetricsConfiguration = (output, context) => {
    return {
        cloudMetricEnabled: output.cloudMetricEnabled !== undefined && output.cloudMetricEnabled !== null
            ? output.cloudMetricEnabled
            : undefined,
        metricRuleRoleArn: output.metricRuleRoleArn !== undefined && output.metricRuleRoleArn !== null
            ? output.metricRuleRoleArn
            : undefined,
    };
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SearchEntitiesResponse = (output, context) => {
    return {
        descriptions: output.descriptions !== undefined && output.descriptions !== null
            ? deserializeAws_json1_1EntityDescriptions(output.descriptions, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1SearchFlowExecutionsResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        summaries: output.summaries !== undefined && output.summaries !== null
            ? deserializeAws_json1_1FlowExecutionSummaries(output.summaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1SearchFlowTemplatesResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        summaries: output.summaries !== undefined && output.summaries !== null
            ? deserializeAws_json1_1FlowTemplateSummaries(output.summaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1SearchSystemInstancesResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        summaries: output.summaries !== undefined && output.summaries !== null
            ? deserializeAws_json1_1SystemInstanceSummaries(output.summaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1SearchSystemTemplatesResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        summaries: output.summaries !== undefined && output.summaries !== null
            ? deserializeAws_json1_1SystemTemplateSummaries(output.summaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1SearchThingsResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        things: output.things !== undefined && output.things !== null
            ? deserializeAws_json1_1Things(output.things, context)
            : undefined,
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
const deserializeAws_json1_1SystemInstanceDescription = (output, context) => {
    return {
        definition: output.definition !== undefined && output.definition !== null
            ? deserializeAws_json1_1DefinitionDocument(output.definition, context)
            : undefined,
        flowActionsRoleArn: output.flowActionsRoleArn !== undefined && output.flowActionsRoleArn !== null
            ? output.flowActionsRoleArn
            : undefined,
        metricsConfiguration: output.metricsConfiguration !== undefined && output.metricsConfiguration !== null
            ? deserializeAws_json1_1MetricsConfiguration(output.metricsConfiguration, context)
            : undefined,
        s3BucketName: output.s3BucketName !== undefined && output.s3BucketName !== null ? output.s3BucketName : undefined,
        summary: output.summary !== undefined && output.summary !== null
            ? deserializeAws_json1_1SystemInstanceSummary(output.summary, context)
            : undefined,
        validatedDependencyRevisions: output.validatedDependencyRevisions !== undefined && output.validatedDependencyRevisions !== null
            ? deserializeAws_json1_1DependencyRevisions(output.validatedDependencyRevisions, context)
            : undefined,
        validatedNamespaceVersion: output.validatedNamespaceVersion !== undefined && output.validatedNamespaceVersion !== null
            ? output.validatedNamespaceVersion
            : undefined,
    };
};
const deserializeAws_json1_1SystemInstanceSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SystemInstanceSummary(entry, context);
    });
};
const deserializeAws_json1_1SystemInstanceSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        greengrassGroupId: output.greengrassGroupId !== undefined && output.greengrassGroupId !== null
            ? output.greengrassGroupId
            : undefined,
        greengrassGroupName: output.greengrassGroupName !== undefined && output.greengrassGroupName !== null
            ? output.greengrassGroupName
            : undefined,
        greengrassGroupVersionId: output.greengrassGroupVersionId !== undefined && output.greengrassGroupVersionId !== null
            ? output.greengrassGroupVersionId
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        target: output.target !== undefined && output.target !== null ? output.target : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null
            ? new Date(Math.round(output.updatedAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1SystemTemplateDescription = (output, context) => {
    return {
        definition: output.definition !== undefined && output.definition !== null
            ? deserializeAws_json1_1DefinitionDocument(output.definition, context)
            : undefined,
        summary: output.summary !== undefined && output.summary !== null
            ? deserializeAws_json1_1SystemTemplateSummary(output.summary, context)
            : undefined,
        validatedNamespaceVersion: output.validatedNamespaceVersion !== undefined && output.validatedNamespaceVersion !== null
            ? output.validatedNamespaceVersion
            : undefined,
    };
};
const deserializeAws_json1_1SystemTemplateSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SystemTemplateSummary(entry, context);
    });
};
const deserializeAws_json1_1SystemTemplateSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        revisionNumber: output.revisionNumber !== undefined && output.revisionNumber !== null ? output.revisionNumber : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Thing = (output, context) => {
    return {
        thingArn: output.thingArn !== undefined && output.thingArn !== null ? output.thingArn : undefined,
        thingName: output.thingName !== undefined && output.thingName !== null ? output.thingName : undefined,
    };
};
const deserializeAws_json1_1Things = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Thing(entry, context);
    });
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UndeploySystemInstanceResponse = (output, context) => {
    return {
        summary: output.summary !== undefined && output.summary !== null
            ? deserializeAws_json1_1SystemInstanceSummary(output.summary, context)
            : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateFlowTemplateResponse = (output, context) => {
    return {
        summary: output.summary !== undefined && output.summary !== null
            ? deserializeAws_json1_1FlowTemplateSummary(output.summary, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateSystemTemplateResponse = (output, context) => {
    return {
        summary: output.summary !== undefined && output.summary !== null
            ? deserializeAws_json1_1SystemTemplateSummary(output.summary, context)
            : undefined,
    };
};
const deserializeAws_json1_1UploadEntityDefinitionsResponse = (output, context) => {
    return {
        uploadId: output.uploadId !== undefined && output.uploadId !== null ? output.uploadId : undefined,
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