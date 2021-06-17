"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1UpdateDetectorVersionMetadataCommand = exports.serializeAws_json1_1UpdateDetectorVersionCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1PutOutcomeCommand = exports.serializeAws_json1_1PutLabelCommand = exports.serializeAws_json1_1PutKMSEncryptionKeyCommand = exports.serializeAws_json1_1PutExternalModelCommand = exports.serializeAws_json1_1PutEventTypeCommand = exports.serializeAws_json1_1PutEntityTypeCommand = exports.serializeAws_json1_1PutDetectorCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1GetVariablesCommand = exports.serializeAws_json1_1GetRulesCommand = exports.serializeAws_json1_1GetOutcomesCommand = exports.serializeAws_json1_1GetModelVersionCommand = exports.serializeAws_json1_1GetModelsCommand = exports.serializeAws_json1_1GetLabelsCommand = exports.serializeAws_json1_1GetKMSEncryptionKeyCommand = exports.serializeAws_json1_1GetExternalModelsCommand = exports.serializeAws_json1_1GetEventTypesCommand = exports.serializeAws_json1_1GetEventPredictionCommand = exports.serializeAws_json1_1GetEntityTypesCommand = exports.serializeAws_json1_1GetDetectorVersionCommand = exports.serializeAws_json1_1GetDetectorsCommand = exports.serializeAws_json1_1GetBatchPredictionJobsCommand = exports.serializeAws_json1_1DescribeModelVersionsCommand = exports.serializeAws_json1_1DescribeDetectorCommand = exports.serializeAws_json1_1DeleteVariableCommand = exports.serializeAws_json1_1DeleteRuleCommand = exports.serializeAws_json1_1DeleteOutcomeCommand = exports.serializeAws_json1_1DeleteModelVersionCommand = exports.serializeAws_json1_1DeleteModelCommand = exports.serializeAws_json1_1DeleteLabelCommand = exports.serializeAws_json1_1DeleteExternalModelCommand = exports.serializeAws_json1_1DeleteEventTypeCommand = exports.serializeAws_json1_1DeleteEventCommand = exports.serializeAws_json1_1DeleteEntityTypeCommand = exports.serializeAws_json1_1DeleteDetectorVersionCommand = exports.serializeAws_json1_1DeleteDetectorCommand = exports.serializeAws_json1_1DeleteBatchPredictionJobCommand = exports.serializeAws_json1_1CreateVariableCommand = exports.serializeAws_json1_1CreateRuleCommand = exports.serializeAws_json1_1CreateModelVersionCommand = exports.serializeAws_json1_1CreateModelCommand = exports.serializeAws_json1_1CreateDetectorVersionCommand = exports.serializeAws_json1_1CreateBatchPredictionJobCommand = exports.serializeAws_json1_1CancelBatchPredictionJobCommand = exports.serializeAws_json1_1BatchGetVariableCommand = exports.serializeAws_json1_1BatchCreateVariableCommand = void 0;
exports.deserializeAws_json1_1PutExternalModelCommand = exports.deserializeAws_json1_1PutEventTypeCommand = exports.deserializeAws_json1_1PutEntityTypeCommand = exports.deserializeAws_json1_1PutDetectorCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1GetVariablesCommand = exports.deserializeAws_json1_1GetRulesCommand = exports.deserializeAws_json1_1GetOutcomesCommand = exports.deserializeAws_json1_1GetModelVersionCommand = exports.deserializeAws_json1_1GetModelsCommand = exports.deserializeAws_json1_1GetLabelsCommand = exports.deserializeAws_json1_1GetKMSEncryptionKeyCommand = exports.deserializeAws_json1_1GetExternalModelsCommand = exports.deserializeAws_json1_1GetEventTypesCommand = exports.deserializeAws_json1_1GetEventPredictionCommand = exports.deserializeAws_json1_1GetEntityTypesCommand = exports.deserializeAws_json1_1GetDetectorVersionCommand = exports.deserializeAws_json1_1GetDetectorsCommand = exports.deserializeAws_json1_1GetBatchPredictionJobsCommand = exports.deserializeAws_json1_1DescribeModelVersionsCommand = exports.deserializeAws_json1_1DescribeDetectorCommand = exports.deserializeAws_json1_1DeleteVariableCommand = exports.deserializeAws_json1_1DeleteRuleCommand = exports.deserializeAws_json1_1DeleteOutcomeCommand = exports.deserializeAws_json1_1DeleteModelVersionCommand = exports.deserializeAws_json1_1DeleteModelCommand = exports.deserializeAws_json1_1DeleteLabelCommand = exports.deserializeAws_json1_1DeleteExternalModelCommand = exports.deserializeAws_json1_1DeleteEventTypeCommand = exports.deserializeAws_json1_1DeleteEventCommand = exports.deserializeAws_json1_1DeleteEntityTypeCommand = exports.deserializeAws_json1_1DeleteDetectorVersionCommand = exports.deserializeAws_json1_1DeleteDetectorCommand = exports.deserializeAws_json1_1DeleteBatchPredictionJobCommand = exports.deserializeAws_json1_1CreateVariableCommand = exports.deserializeAws_json1_1CreateRuleCommand = exports.deserializeAws_json1_1CreateModelVersionCommand = exports.deserializeAws_json1_1CreateModelCommand = exports.deserializeAws_json1_1CreateDetectorVersionCommand = exports.deserializeAws_json1_1CreateBatchPredictionJobCommand = exports.deserializeAws_json1_1CancelBatchPredictionJobCommand = exports.deserializeAws_json1_1BatchGetVariableCommand = exports.deserializeAws_json1_1BatchCreateVariableCommand = exports.serializeAws_json1_1UpdateVariableCommand = exports.serializeAws_json1_1UpdateRuleVersionCommand = exports.serializeAws_json1_1UpdateRuleMetadataCommand = exports.serializeAws_json1_1UpdateModelVersionStatusCommand = exports.serializeAws_json1_1UpdateModelVersionCommand = exports.serializeAws_json1_1UpdateModelCommand = exports.serializeAws_json1_1UpdateDetectorVersionStatusCommand = void 0;
exports.deserializeAws_json1_1UpdateVariableCommand = exports.deserializeAws_json1_1UpdateRuleVersionCommand = exports.deserializeAws_json1_1UpdateRuleMetadataCommand = exports.deserializeAws_json1_1UpdateModelVersionStatusCommand = exports.deserializeAws_json1_1UpdateModelVersionCommand = exports.deserializeAws_json1_1UpdateModelCommand = exports.deserializeAws_json1_1UpdateDetectorVersionStatusCommand = exports.deserializeAws_json1_1UpdateDetectorVersionMetadataCommand = exports.deserializeAws_json1_1UpdateDetectorVersionCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1PutOutcomeCommand = exports.deserializeAws_json1_1PutLabelCommand = exports.deserializeAws_json1_1PutKMSEncryptionKeyCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1BatchCreateVariableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.BatchCreateVariable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchCreateVariableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchCreateVariableCommand = serializeAws_json1_1BatchCreateVariableCommand;
const serializeAws_json1_1BatchGetVariableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.BatchGetVariable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetVariableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetVariableCommand = serializeAws_json1_1BatchGetVariableCommand;
const serializeAws_json1_1CancelBatchPredictionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.CancelBatchPredictionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelBatchPredictionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelBatchPredictionJobCommand = serializeAws_json1_1CancelBatchPredictionJobCommand;
const serializeAws_json1_1CreateBatchPredictionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.CreateBatchPredictionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBatchPredictionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateBatchPredictionJobCommand = serializeAws_json1_1CreateBatchPredictionJobCommand;
const serializeAws_json1_1CreateDetectorVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.CreateDetectorVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDetectorVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDetectorVersionCommand = serializeAws_json1_1CreateDetectorVersionCommand;
const serializeAws_json1_1CreateModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.CreateModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateModelCommand = serializeAws_json1_1CreateModelCommand;
const serializeAws_json1_1CreateModelVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.CreateModelVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateModelVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateModelVersionCommand = serializeAws_json1_1CreateModelVersionCommand;
const serializeAws_json1_1CreateRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.CreateRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRuleCommand = serializeAws_json1_1CreateRuleCommand;
const serializeAws_json1_1CreateVariableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.CreateVariable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateVariableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateVariableCommand = serializeAws_json1_1CreateVariableCommand;
const serializeAws_json1_1DeleteBatchPredictionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteBatchPredictionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBatchPredictionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteBatchPredictionJobCommand = serializeAws_json1_1DeleteBatchPredictionJobCommand;
const serializeAws_json1_1DeleteDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteDetector",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDetectorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDetectorCommand = serializeAws_json1_1DeleteDetectorCommand;
const serializeAws_json1_1DeleteDetectorVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteDetectorVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDetectorVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDetectorVersionCommand = serializeAws_json1_1DeleteDetectorVersionCommand;
const serializeAws_json1_1DeleteEntityTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteEntityType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEntityTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteEntityTypeCommand = serializeAws_json1_1DeleteEntityTypeCommand;
const serializeAws_json1_1DeleteEventCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteEvent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEventRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteEventCommand = serializeAws_json1_1DeleteEventCommand;
const serializeAws_json1_1DeleteEventTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteEventType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEventTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteEventTypeCommand = serializeAws_json1_1DeleteEventTypeCommand;
const serializeAws_json1_1DeleteExternalModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteExternalModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteExternalModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteExternalModelCommand = serializeAws_json1_1DeleteExternalModelCommand;
const serializeAws_json1_1DeleteLabelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteLabel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLabelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLabelCommand = serializeAws_json1_1DeleteLabelCommand;
const serializeAws_json1_1DeleteModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteModelCommand = serializeAws_json1_1DeleteModelCommand;
const serializeAws_json1_1DeleteModelVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteModelVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteModelVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteModelVersionCommand = serializeAws_json1_1DeleteModelVersionCommand;
const serializeAws_json1_1DeleteOutcomeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteOutcome",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteOutcomeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteOutcomeCommand = serializeAws_json1_1DeleteOutcomeCommand;
const serializeAws_json1_1DeleteRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRuleCommand = serializeAws_json1_1DeleteRuleCommand;
const serializeAws_json1_1DeleteVariableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DeleteVariable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVariableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteVariableCommand = serializeAws_json1_1DeleteVariableCommand;
const serializeAws_json1_1DescribeDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DescribeDetector",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDetectorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDetectorCommand = serializeAws_json1_1DescribeDetectorCommand;
const serializeAws_json1_1DescribeModelVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.DescribeModelVersions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeModelVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeModelVersionsCommand = serializeAws_json1_1DescribeModelVersionsCommand;
const serializeAws_json1_1GetBatchPredictionJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetBatchPredictionJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBatchPredictionJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetBatchPredictionJobsCommand = serializeAws_json1_1GetBatchPredictionJobsCommand;
const serializeAws_json1_1GetDetectorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetDetectors",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDetectorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDetectorsCommand = serializeAws_json1_1GetDetectorsCommand;
const serializeAws_json1_1GetDetectorVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetDetectorVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDetectorVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDetectorVersionCommand = serializeAws_json1_1GetDetectorVersionCommand;
const serializeAws_json1_1GetEntityTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetEntityTypes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetEntityTypesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetEntityTypesCommand = serializeAws_json1_1GetEntityTypesCommand;
const serializeAws_json1_1GetEventPredictionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetEventPrediction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetEventPredictionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetEventPredictionCommand = serializeAws_json1_1GetEventPredictionCommand;
const serializeAws_json1_1GetEventTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetEventTypes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetEventTypesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetEventTypesCommand = serializeAws_json1_1GetEventTypesCommand;
const serializeAws_json1_1GetExternalModelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetExternalModels",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetExternalModelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetExternalModelsCommand = serializeAws_json1_1GetExternalModelsCommand;
const serializeAws_json1_1GetKMSEncryptionKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetKMSEncryptionKey",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetKMSEncryptionKeyCommand = serializeAws_json1_1GetKMSEncryptionKeyCommand;
const serializeAws_json1_1GetLabelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetLabels",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLabelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLabelsCommand = serializeAws_json1_1GetLabelsCommand;
const serializeAws_json1_1GetModelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetModels",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetModelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetModelsCommand = serializeAws_json1_1GetModelsCommand;
const serializeAws_json1_1GetModelVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetModelVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetModelVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetModelVersionCommand = serializeAws_json1_1GetModelVersionCommand;
const serializeAws_json1_1GetOutcomesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetOutcomes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOutcomesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOutcomesCommand = serializeAws_json1_1GetOutcomesCommand;
const serializeAws_json1_1GetRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRulesCommand = serializeAws_json1_1GetRulesCommand;
const serializeAws_json1_1GetVariablesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.GetVariables",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetVariablesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetVariablesCommand = serializeAws_json1_1GetVariablesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1PutDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.PutDetector",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDetectorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutDetectorCommand = serializeAws_json1_1PutDetectorCommand;
const serializeAws_json1_1PutEntityTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.PutEntityType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutEntityTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutEntityTypeCommand = serializeAws_json1_1PutEntityTypeCommand;
const serializeAws_json1_1PutEventTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.PutEventType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutEventTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutEventTypeCommand = serializeAws_json1_1PutEventTypeCommand;
const serializeAws_json1_1PutExternalModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.PutExternalModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutExternalModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutExternalModelCommand = serializeAws_json1_1PutExternalModelCommand;
const serializeAws_json1_1PutKMSEncryptionKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.PutKMSEncryptionKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutKMSEncryptionKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutKMSEncryptionKeyCommand = serializeAws_json1_1PutKMSEncryptionKeyCommand;
const serializeAws_json1_1PutLabelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.PutLabel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutLabelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutLabelCommand = serializeAws_json1_1PutLabelCommand;
const serializeAws_json1_1PutOutcomeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.PutOutcome",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutOutcomeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutOutcomeCommand = serializeAws_json1_1PutOutcomeCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateDetectorVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.UpdateDetectorVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDetectorVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDetectorVersionCommand = serializeAws_json1_1UpdateDetectorVersionCommand;
const serializeAws_json1_1UpdateDetectorVersionMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDetectorVersionMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDetectorVersionMetadataCommand = serializeAws_json1_1UpdateDetectorVersionMetadataCommand;
const serializeAws_json1_1UpdateDetectorVersionStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.UpdateDetectorVersionStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDetectorVersionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDetectorVersionStatusCommand = serializeAws_json1_1UpdateDetectorVersionStatusCommand;
const serializeAws_json1_1UpdateModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.UpdateModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateModelCommand = serializeAws_json1_1UpdateModelCommand;
const serializeAws_json1_1UpdateModelVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.UpdateModelVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateModelVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateModelVersionCommand = serializeAws_json1_1UpdateModelVersionCommand;
const serializeAws_json1_1UpdateModelVersionStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.UpdateModelVersionStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateModelVersionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateModelVersionStatusCommand = serializeAws_json1_1UpdateModelVersionStatusCommand;
const serializeAws_json1_1UpdateRuleMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.UpdateRuleMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRuleMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRuleMetadataCommand = serializeAws_json1_1UpdateRuleMetadataCommand;
const serializeAws_json1_1UpdateRuleVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.UpdateRuleVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRuleVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRuleVersionCommand = serializeAws_json1_1UpdateRuleVersionCommand;
const serializeAws_json1_1UpdateVariableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHawksNestServiceFacade.UpdateVariable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVariableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateVariableCommand = serializeAws_json1_1UpdateVariableCommand;
const deserializeAws_json1_1BatchCreateVariableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchCreateVariableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchCreateVariableResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchCreateVariableCommand = deserializeAws_json1_1BatchCreateVariableCommand;
const deserializeAws_json1_1BatchCreateVariableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1BatchGetVariableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetVariableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetVariableResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetVariableCommand = deserializeAws_json1_1BatchGetVariableCommand;
const deserializeAws_json1_1BatchGetVariableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1CancelBatchPredictionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelBatchPredictionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelBatchPredictionJobResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelBatchPredictionJobCommand = deserializeAws_json1_1CancelBatchPredictionJobCommand;
const deserializeAws_json1_1CancelBatchPredictionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1CreateBatchPredictionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateBatchPredictionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBatchPredictionJobResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateBatchPredictionJobCommand = deserializeAws_json1_1CreateBatchPredictionJobCommand;
const deserializeAws_json1_1CreateBatchPredictionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1CreateDetectorVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDetectorVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDetectorVersionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDetectorVersionCommand = deserializeAws_json1_1CreateDetectorVersionCommand;
const deserializeAws_json1_1CreateDetectorVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1CreateModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateModelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateModelCommand = deserializeAws_json1_1CreateModelCommand;
const deserializeAws_json1_1CreateModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1CreateModelVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateModelVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateModelVersionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateModelVersionCommand = deserializeAws_json1_1CreateModelVersionCommand;
const deserializeAws_json1_1CreateModelVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1CreateRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRuleResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRuleCommand = deserializeAws_json1_1CreateRuleCommand;
const deserializeAws_json1_1CreateRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1CreateVariableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateVariableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateVariableResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateVariableCommand = deserializeAws_json1_1CreateVariableCommand;
const deserializeAws_json1_1CreateVariableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteBatchPredictionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteBatchPredictionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBatchPredictionJobResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteBatchPredictionJobCommand = deserializeAws_json1_1DeleteBatchPredictionJobCommand;
const deserializeAws_json1_1DeleteBatchPredictionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteDetectorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDetectorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDetectorResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDetectorCommand = deserializeAws_json1_1DeleteDetectorCommand;
const deserializeAws_json1_1DeleteDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.frauddetector#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteDetectorVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDetectorVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDetectorVersionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDetectorVersionCommand = deserializeAws_json1_1DeleteDetectorVersionCommand;
const deserializeAws_json1_1DeleteDetectorVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.frauddetector#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteEntityTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteEntityTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEntityTypeResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteEntityTypeCommand = deserializeAws_json1_1DeleteEntityTypeCommand;
const deserializeAws_json1_1DeleteEntityTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.frauddetector#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteEventCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteEventCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEventResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteEventCommand = deserializeAws_json1_1DeleteEventCommand;
const deserializeAws_json1_1DeleteEventCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteEventTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteEventTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEventTypeResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteEventTypeCommand = deserializeAws_json1_1DeleteEventTypeCommand;
const deserializeAws_json1_1DeleteEventTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.frauddetector#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteExternalModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteExternalModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteExternalModelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteExternalModelCommand = deserializeAws_json1_1DeleteExternalModelCommand;
const deserializeAws_json1_1DeleteExternalModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.frauddetector#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteLabelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLabelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLabelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLabelCommand = deserializeAws_json1_1DeleteLabelCommand;
const deserializeAws_json1_1DeleteLabelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.frauddetector#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteModelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteModelCommand = deserializeAws_json1_1DeleteModelCommand;
const deserializeAws_json1_1DeleteModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.frauddetector#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteModelVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteModelVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteModelVersionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteModelVersionCommand = deserializeAws_json1_1DeleteModelVersionCommand;
const deserializeAws_json1_1DeleteModelVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.frauddetector#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteOutcomeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteOutcomeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteOutcomeResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteOutcomeCommand = deserializeAws_json1_1DeleteOutcomeCommand;
const deserializeAws_json1_1DeleteOutcomeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.frauddetector#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRuleResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRuleCommand = deserializeAws_json1_1DeleteRuleCommand;
const deserializeAws_json1_1DeleteRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.frauddetector#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DeleteVariableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteVariableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteVariableResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteVariableCommand = deserializeAws_json1_1DeleteVariableCommand;
const deserializeAws_json1_1DeleteVariableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.frauddetector#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DescribeDetectorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDetectorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDetectorResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDetectorCommand = deserializeAws_json1_1DescribeDetectorCommand;
const deserializeAws_json1_1DescribeDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1DescribeModelVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeModelVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeModelVersionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeModelVersionsCommand = deserializeAws_json1_1DescribeModelVersionsCommand;
const deserializeAws_json1_1DescribeModelVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetBatchPredictionJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetBatchPredictionJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBatchPredictionJobsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetBatchPredictionJobsCommand = deserializeAws_json1_1GetBatchPredictionJobsCommand;
const deserializeAws_json1_1GetBatchPredictionJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetDetectorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDetectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDetectorsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDetectorsCommand = deserializeAws_json1_1GetDetectorsCommand;
const deserializeAws_json1_1GetDetectorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetDetectorVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDetectorVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDetectorVersionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDetectorVersionCommand = deserializeAws_json1_1GetDetectorVersionCommand;
const deserializeAws_json1_1GetDetectorVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetEntityTypesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetEntityTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetEntityTypesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetEntityTypesCommand = deserializeAws_json1_1GetEntityTypesCommand;
const deserializeAws_json1_1GetEntityTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetEventPredictionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetEventPredictionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetEventPredictionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetEventPredictionCommand = deserializeAws_json1_1GetEventPredictionCommand;
const deserializeAws_json1_1GetEventPredictionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.frauddetector#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetEventTypesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetEventTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetEventTypesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetEventTypesCommand = deserializeAws_json1_1GetEventTypesCommand;
const deserializeAws_json1_1GetEventTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetExternalModelsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetExternalModelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetExternalModelsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetExternalModelsCommand = deserializeAws_json1_1GetExternalModelsCommand;
const deserializeAws_json1_1GetExternalModelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetKMSEncryptionKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetKMSEncryptionKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetKMSEncryptionKeyResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetKMSEncryptionKeyCommand = deserializeAws_json1_1GetKMSEncryptionKeyCommand;
const deserializeAws_json1_1GetKMSEncryptionKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetLabelsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLabelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLabelsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetLabelsCommand = deserializeAws_json1_1GetLabelsCommand;
const deserializeAws_json1_1GetLabelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetModelsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetModelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetModelsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetModelsCommand = deserializeAws_json1_1GetModelsCommand;
const deserializeAws_json1_1GetModelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetModelVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetModelVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetModelVersionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetModelVersionCommand = deserializeAws_json1_1GetModelVersionCommand;
const deserializeAws_json1_1GetModelVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetOutcomesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOutcomesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOutcomesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOutcomesCommand = deserializeAws_json1_1GetOutcomesCommand;
const deserializeAws_json1_1GetOutcomesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRulesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRulesCommand = deserializeAws_json1_1GetRulesCommand;
const deserializeAws_json1_1GetRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1GetVariablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetVariablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetVariablesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetVariablesCommand = deserializeAws_json1_1GetVariablesCommand;
const deserializeAws_json1_1GetVariablesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResult(data, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1PutDetectorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutDetectorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutDetectorResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutDetectorCommand = deserializeAws_json1_1PutDetectorCommand;
const deserializeAws_json1_1PutDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1PutEntityTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutEntityTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutEntityTypeResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutEntityTypeCommand = deserializeAws_json1_1PutEntityTypeCommand;
const deserializeAws_json1_1PutEntityTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1PutEventTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutEventTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutEventTypeResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutEventTypeCommand = deserializeAws_json1_1PutEventTypeCommand;
const deserializeAws_json1_1PutEventTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1PutExternalModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutExternalModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutExternalModelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutExternalModelCommand = deserializeAws_json1_1PutExternalModelCommand;
const deserializeAws_json1_1PutExternalModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1PutKMSEncryptionKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutKMSEncryptionKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutKMSEncryptionKeyResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutKMSEncryptionKeyCommand = deserializeAws_json1_1PutKMSEncryptionKeyCommand;
const deserializeAws_json1_1PutKMSEncryptionKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1PutLabelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutLabelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutLabelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutLabelCommand = deserializeAws_json1_1PutLabelCommand;
const deserializeAws_json1_1PutLabelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1PutOutcomeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutOutcomeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutOutcomeResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutOutcomeCommand = deserializeAws_json1_1PutOutcomeCommand;
const deserializeAws_json1_1PutOutcomeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResult(data, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResult(data, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1UpdateDetectorVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDetectorVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDetectorVersionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDetectorVersionCommand = deserializeAws_json1_1UpdateDetectorVersionCommand;
const deserializeAws_json1_1UpdateDetectorVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1UpdateDetectorVersionMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDetectorVersionMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDetectorVersionMetadataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDetectorVersionMetadataCommand = deserializeAws_json1_1UpdateDetectorVersionMetadataCommand;
const deserializeAws_json1_1UpdateDetectorVersionMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1UpdateDetectorVersionStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDetectorVersionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDetectorVersionStatusResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDetectorVersionStatusCommand = deserializeAws_json1_1UpdateDetectorVersionStatusCommand;
const deserializeAws_json1_1UpdateDetectorVersionStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1UpdateModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateModelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateModelCommand = deserializeAws_json1_1UpdateModelCommand;
const deserializeAws_json1_1UpdateModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1UpdateModelVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateModelVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateModelVersionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateModelVersionCommand = deserializeAws_json1_1UpdateModelVersionCommand;
const deserializeAws_json1_1UpdateModelVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1UpdateModelVersionStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateModelVersionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateModelVersionStatusResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateModelVersionStatusCommand = deserializeAws_json1_1UpdateModelVersionStatusCommand;
const deserializeAws_json1_1UpdateModelVersionStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1UpdateRuleMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRuleMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRuleMetadataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRuleMetadataCommand = deserializeAws_json1_1UpdateRuleMetadataCommand;
const deserializeAws_json1_1UpdateRuleMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1UpdateRuleVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRuleVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRuleVersionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRuleVersionCommand = deserializeAws_json1_1UpdateRuleVersionCommand;
const deserializeAws_json1_1UpdateRuleVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1UpdateVariableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateVariableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateVariableResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateVariableCommand = deserializeAws_json1_1UpdateVariableCommand;
const deserializeAws_json1_1UpdateVariableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.frauddetector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.frauddetector#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.frauddetector#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.frauddetector#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.frauddetector#ValidationException":
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
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = {
        name: "InternalServerException",
        $fault: "server",
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
const serializeAws_json1_1BatchCreateVariableRequest = (input, context) => {
    return {
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
        ...(input.variableEntries !== undefined &&
            input.variableEntries !== null && {
            variableEntries: serializeAws_json1_1VariableEntryList(input.variableEntries, context),
        }),
    };
};
const serializeAws_json1_1BatchGetVariableRequest = (input, context) => {
    return {
        ...(input.names !== undefined &&
            input.names !== null && { names: serializeAws_json1_1NameList(input.names, context) }),
    };
};
const serializeAws_json1_1CancelBatchPredictionJobRequest = (input, context) => {
    return {
        ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    };
};
const serializeAws_json1_1CreateBatchPredictionJobRequest = (input, context) => {
    return {
        ...(input.detectorName !== undefined && input.detectorName !== null && { detectorName: input.detectorName }),
        ...(input.detectorVersion !== undefined &&
            input.detectorVersion !== null && { detectorVersion: input.detectorVersion }),
        ...(input.eventTypeName !== undefined && input.eventTypeName !== null && { eventTypeName: input.eventTypeName }),
        ...(input.iamRoleArn !== undefined && input.iamRoleArn !== null && { iamRoleArn: input.iamRoleArn }),
        ...(input.inputPath !== undefined && input.inputPath !== null && { inputPath: input.inputPath }),
        ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
        ...(input.outputPath !== undefined && input.outputPath !== null && { outputPath: input.outputPath }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateDetectorVersionRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.externalModelEndpoints !== undefined &&
            input.externalModelEndpoints !== null && {
            externalModelEndpoints: serializeAws_json1_1ListOfStrings(input.externalModelEndpoints, context),
        }),
        ...(input.modelVersions !== undefined &&
            input.modelVersions !== null && {
            modelVersions: serializeAws_json1_1ListOfModelVersions(input.modelVersions, context),
        }),
        ...(input.ruleExecutionMode !== undefined &&
            input.ruleExecutionMode !== null && { ruleExecutionMode: input.ruleExecutionMode }),
        ...(input.rules !== undefined &&
            input.rules !== null && { rules: serializeAws_json1_1RuleList(input.rules, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateModelRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.eventTypeName !== undefined && input.eventTypeName !== null && { eventTypeName: input.eventTypeName }),
        ...(input.modelId !== undefined && input.modelId !== null && { modelId: input.modelId }),
        ...(input.modelType !== undefined && input.modelType !== null && { modelType: input.modelType }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateModelVersionRequest = (input, context) => {
    return {
        ...(input.externalEventsDetail !== undefined &&
            input.externalEventsDetail !== null && {
            externalEventsDetail: serializeAws_json1_1ExternalEventsDetail(input.externalEventsDetail, context),
        }),
        ...(input.modelId !== undefined && input.modelId !== null && { modelId: input.modelId }),
        ...(input.modelType !== undefined && input.modelType !== null && { modelType: input.modelType }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
        ...(input.trainingDataSchema !== undefined &&
            input.trainingDataSchema !== null && {
            trainingDataSchema: serializeAws_json1_1TrainingDataSchema(input.trainingDataSchema, context),
        }),
        ...(input.trainingDataSource !== undefined &&
            input.trainingDataSource !== null && { trainingDataSource: input.trainingDataSource }),
    };
};
const serializeAws_json1_1CreateRuleRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
        ...(input.language !== undefined && input.language !== null && { language: input.language }),
        ...(input.outcomes !== undefined &&
            input.outcomes !== null && { outcomes: serializeAws_json1_1NonEmptyListOfStrings(input.outcomes, context) }),
        ...(input.ruleId !== undefined && input.ruleId !== null && { ruleId: input.ruleId }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateVariableRequest = (input, context) => {
    return {
        ...(input.dataSource !== undefined && input.dataSource !== null && { dataSource: input.dataSource }),
        ...(input.dataType !== undefined && input.dataType !== null && { dataType: input.dataType }),
        ...(input.defaultValue !== undefined && input.defaultValue !== null && { defaultValue: input.defaultValue }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
        ...(input.variableType !== undefined && input.variableType !== null && { variableType: input.variableType }),
    };
};
const serializeAws_json1_1CsvIndexToVariableMap = (input, context) => {
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
const serializeAws_json1_1DeleteBatchPredictionJobRequest = (input, context) => {
    return {
        ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    };
};
const serializeAws_json1_1DeleteDetectorRequest = (input, context) => {
    return {
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
    };
};
const serializeAws_json1_1DeleteDetectorVersionRequest = (input, context) => {
    return {
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.detectorVersionId !== undefined &&
            input.detectorVersionId !== null && { detectorVersionId: input.detectorVersionId }),
    };
};
const serializeAws_json1_1DeleteEntityTypeRequest = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1DeleteEventRequest = (input, context) => {
    return {
        ...(input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }),
        ...(input.eventTypeName !== undefined && input.eventTypeName !== null && { eventTypeName: input.eventTypeName }),
    };
};
const serializeAws_json1_1DeleteEventTypeRequest = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1DeleteExternalModelRequest = (input, context) => {
    return {
        ...(input.modelEndpoint !== undefined && input.modelEndpoint !== null && { modelEndpoint: input.modelEndpoint }),
    };
};
const serializeAws_json1_1DeleteLabelRequest = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1DeleteModelRequest = (input, context) => {
    return {
        ...(input.modelId !== undefined && input.modelId !== null && { modelId: input.modelId }),
        ...(input.modelType !== undefined && input.modelType !== null && { modelType: input.modelType }),
    };
};
const serializeAws_json1_1DeleteModelVersionRequest = (input, context) => {
    return {
        ...(input.modelId !== undefined && input.modelId !== null && { modelId: input.modelId }),
        ...(input.modelType !== undefined && input.modelType !== null && { modelType: input.modelType }),
        ...(input.modelVersionNumber !== undefined &&
            input.modelVersionNumber !== null && { modelVersionNumber: input.modelVersionNumber }),
    };
};
const serializeAws_json1_1DeleteOutcomeRequest = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1DeleteRuleRequest = (input, context) => {
    return {
        ...(input.rule !== undefined && input.rule !== null && { rule: serializeAws_json1_1Rule(input.rule, context) }),
    };
};
const serializeAws_json1_1DeleteVariableRequest = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1DescribeDetectorRequest = (input, context) => {
    return {
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeModelVersionsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.modelId !== undefined && input.modelId !== null && { modelId: input.modelId }),
        ...(input.modelType !== undefined && input.modelType !== null && { modelType: input.modelType }),
        ...(input.modelVersionNumber !== undefined &&
            input.modelVersionNumber !== null && { modelVersionNumber: input.modelVersionNumber }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1Entity = (input, context) => {
    return {
        ...(input.entityId !== undefined && input.entityId !== null && { entityId: input.entityId }),
        ...(input.entityType !== undefined && input.entityType !== null && { entityType: input.entityType }),
    };
};
const serializeAws_json1_1EventVariableMap = (input, context) => {
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
const serializeAws_json1_1ExternalEventsDetail = (input, context) => {
    return {
        ...(input.dataAccessRoleArn !== undefined &&
            input.dataAccessRoleArn !== null && { dataAccessRoleArn: input.dataAccessRoleArn }),
        ...(input.dataLocation !== undefined && input.dataLocation !== null && { dataLocation: input.dataLocation }),
    };
};
const serializeAws_json1_1ExternalModelEndpointDataBlobMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1ModelEndpointDataBlob(value, context),
        };
    }, {});
};
const serializeAws_json1_1GetBatchPredictionJobsRequest = (input, context) => {
    return {
        ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1GetDetectorsRequest = (input, context) => {
    return {
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1GetDetectorVersionRequest = (input, context) => {
    return {
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.detectorVersionId !== undefined &&
            input.detectorVersionId !== null && { detectorVersionId: input.detectorVersionId }),
    };
};
const serializeAws_json1_1GetEntityTypesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1GetEventPredictionRequest = (input, context) => {
    return {
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.detectorVersionId !== undefined &&
            input.detectorVersionId !== null && { detectorVersionId: input.detectorVersionId }),
        ...(input.entities !== undefined &&
            input.entities !== null && { entities: serializeAws_json1_1listOfEntities(input.entities, context) }),
        ...(input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }),
        ...(input.eventTimestamp !== undefined &&
            input.eventTimestamp !== null && { eventTimestamp: input.eventTimestamp }),
        ...(input.eventTypeName !== undefined && input.eventTypeName !== null && { eventTypeName: input.eventTypeName }),
        ...(input.eventVariables !== undefined &&
            input.eventVariables !== null && {
            eventVariables: serializeAws_json1_1EventVariableMap(input.eventVariables, context),
        }),
        ...(input.externalModelEndpointDataBlobs !== undefined &&
            input.externalModelEndpointDataBlobs !== null && {
            externalModelEndpointDataBlobs: serializeAws_json1_1ExternalModelEndpointDataBlobMap(input.externalModelEndpointDataBlobs, context),
        }),
    };
};
const serializeAws_json1_1GetEventTypesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1GetExternalModelsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.modelEndpoint !== undefined && input.modelEndpoint !== null && { modelEndpoint: input.modelEndpoint }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1GetLabelsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1GetModelsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.modelId !== undefined && input.modelId !== null && { modelId: input.modelId }),
        ...(input.modelType !== undefined && input.modelType !== null && { modelType: input.modelType }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1GetModelVersionRequest = (input, context) => {
    return {
        ...(input.modelId !== undefined && input.modelId !== null && { modelId: input.modelId }),
        ...(input.modelType !== undefined && input.modelType !== null && { modelType: input.modelType }),
        ...(input.modelVersionNumber !== undefined &&
            input.modelVersionNumber !== null && { modelVersionNumber: input.modelVersionNumber }),
    };
};
const serializeAws_json1_1GetOutcomesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1GetRulesRequest = (input, context) => {
    return {
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.ruleId !== undefined && input.ruleId !== null && { ruleId: input.ruleId }),
        ...(input.ruleVersion !== undefined && input.ruleVersion !== null && { ruleVersion: input.ruleVersion }),
    };
};
const serializeAws_json1_1GetVariablesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1JsonKeyToVariableMap = (input, context) => {
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
const serializeAws_json1_1labelMapper = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1ListOfStrings(value, context),
        };
    }, {});
};
const serializeAws_json1_1LabelSchema = (input, context) => {
    return {
        ...(input.labelMapper !== undefined &&
            input.labelMapper !== null && { labelMapper: serializeAws_json1_1labelMapper(input.labelMapper, context) }),
    };
};
const serializeAws_json1_1listOfEntities = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Entity(entry, context);
    });
};
const serializeAws_json1_1ListOfModelVersions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ModelVersion(entry, context);
    });
};
const serializeAws_json1_1ListOfStrings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceARN !== undefined && input.resourceARN !== null && { resourceARN: input.resourceARN }),
    };
};
const serializeAws_json1_1ModelEndpointDataBlob = (input, context) => {
    return {
        ...(input.byteBuffer !== undefined &&
            input.byteBuffer !== null && { byteBuffer: context.base64Encoder(input.byteBuffer) }),
        ...(input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType }),
    };
};
const serializeAws_json1_1ModelInputConfiguration = (input, context) => {
    return {
        ...(input.csvInputTemplate !== undefined &&
            input.csvInputTemplate !== null && { csvInputTemplate: input.csvInputTemplate }),
        ...(input.eventTypeName !== undefined && input.eventTypeName !== null && { eventTypeName: input.eventTypeName }),
        ...(input.format !== undefined && input.format !== null && { format: input.format }),
        ...(input.jsonInputTemplate !== undefined &&
            input.jsonInputTemplate !== null && { jsonInputTemplate: input.jsonInputTemplate }),
        ...(input.useEventVariables !== undefined &&
            input.useEventVariables !== null && { useEventVariables: input.useEventVariables }),
    };
};
const serializeAws_json1_1ModelOutputConfiguration = (input, context) => {
    return {
        ...(input.csvIndexToVariableMap !== undefined &&
            input.csvIndexToVariableMap !== null && {
            csvIndexToVariableMap: serializeAws_json1_1CsvIndexToVariableMap(input.csvIndexToVariableMap, context),
        }),
        ...(input.format !== undefined && input.format !== null && { format: input.format }),
        ...(input.jsonKeyToVariableMap !== undefined &&
            input.jsonKeyToVariableMap !== null && {
            jsonKeyToVariableMap: serializeAws_json1_1JsonKeyToVariableMap(input.jsonKeyToVariableMap, context),
        }),
    };
};
const serializeAws_json1_1ModelVersion = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.modelId !== undefined && input.modelId !== null && { modelId: input.modelId }),
        ...(input.modelType !== undefined && input.modelType !== null && { modelType: input.modelType }),
        ...(input.modelVersionNumber !== undefined &&
            input.modelVersionNumber !== null && { modelVersionNumber: input.modelVersionNumber }),
    };
};
const serializeAws_json1_1NameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1NonEmptyListOfStrings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PutDetectorRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.eventTypeName !== undefined && input.eventTypeName !== null && { eventTypeName: input.eventTypeName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1PutEntityTypeRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1PutEventTypeRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.entityTypes !== undefined &&
            input.entityTypes !== null && {
            entityTypes: serializeAws_json1_1NonEmptyListOfStrings(input.entityTypes, context),
        }),
        ...(input.eventVariables !== undefined &&
            input.eventVariables !== null && {
            eventVariables: serializeAws_json1_1NonEmptyListOfStrings(input.eventVariables, context),
        }),
        ...(input.labels !== undefined &&
            input.labels !== null && { labels: serializeAws_json1_1ListOfStrings(input.labels, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1PutExternalModelRequest = (input, context) => {
    return {
        ...(input.inputConfiguration !== undefined &&
            input.inputConfiguration !== null && {
            inputConfiguration: serializeAws_json1_1ModelInputConfiguration(input.inputConfiguration, context),
        }),
        ...(input.invokeModelEndpointRoleArn !== undefined &&
            input.invokeModelEndpointRoleArn !== null && { invokeModelEndpointRoleArn: input.invokeModelEndpointRoleArn }),
        ...(input.modelEndpoint !== undefined && input.modelEndpoint !== null && { modelEndpoint: input.modelEndpoint }),
        ...(input.modelEndpointStatus !== undefined &&
            input.modelEndpointStatus !== null && { modelEndpointStatus: input.modelEndpointStatus }),
        ...(input.modelSource !== undefined && input.modelSource !== null && { modelSource: input.modelSource }),
        ...(input.outputConfiguration !== undefined &&
            input.outputConfiguration !== null && {
            outputConfiguration: serializeAws_json1_1ModelOutputConfiguration(input.outputConfiguration, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1PutKMSEncryptionKeyRequest = (input, context) => {
    return {
        ...(input.kmsEncryptionKeyArn !== undefined &&
            input.kmsEncryptionKeyArn !== null && { kmsEncryptionKeyArn: input.kmsEncryptionKeyArn }),
    };
};
const serializeAws_json1_1PutLabelRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1PutOutcomeRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1Rule = (input, context) => {
    return {
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.ruleId !== undefined && input.ruleId !== null && { ruleId: input.ruleId }),
        ...(input.ruleVersion !== undefined && input.ruleVersion !== null && { ruleVersion: input.ruleVersion }),
    };
};
const serializeAws_json1_1RuleList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Rule(entry, context);
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1tagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1tagList = (input, context) => {
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
        ...(input.resourceARN !== undefined && input.resourceARN !== null && { resourceARN: input.resourceARN }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1TrainingDataSchema = (input, context) => {
    return {
        ...(input.labelSchema !== undefined &&
            input.labelSchema !== null && { labelSchema: serializeAws_json1_1LabelSchema(input.labelSchema, context) }),
        ...(input.modelVariables !== undefined &&
            input.modelVariables !== null && {
            modelVariables: serializeAws_json1_1ListOfStrings(input.modelVariables, context),
        }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.resourceARN !== undefined && input.resourceARN !== null && { resourceARN: input.resourceARN }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_json1_1tagKeyList(input.tagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateDetectorVersionMetadataRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.detectorVersionId !== undefined &&
            input.detectorVersionId !== null && { detectorVersionId: input.detectorVersionId }),
    };
};
const serializeAws_json1_1UpdateDetectorVersionRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.detectorVersionId !== undefined &&
            input.detectorVersionId !== null && { detectorVersionId: input.detectorVersionId }),
        ...(input.externalModelEndpoints !== undefined &&
            input.externalModelEndpoints !== null && {
            externalModelEndpoints: serializeAws_json1_1ListOfStrings(input.externalModelEndpoints, context),
        }),
        ...(input.modelVersions !== undefined &&
            input.modelVersions !== null && {
            modelVersions: serializeAws_json1_1ListOfModelVersions(input.modelVersions, context),
        }),
        ...(input.ruleExecutionMode !== undefined &&
            input.ruleExecutionMode !== null && { ruleExecutionMode: input.ruleExecutionMode }),
        ...(input.rules !== undefined &&
            input.rules !== null && { rules: serializeAws_json1_1RuleList(input.rules, context) }),
    };
};
const serializeAws_json1_1UpdateDetectorVersionStatusRequest = (input, context) => {
    return {
        ...(input.detectorId !== undefined && input.detectorId !== null && { detectorId: input.detectorId }),
        ...(input.detectorVersionId !== undefined &&
            input.detectorVersionId !== null && { detectorVersionId: input.detectorVersionId }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1UpdateModelRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.modelId !== undefined && input.modelId !== null && { modelId: input.modelId }),
        ...(input.modelType !== undefined && input.modelType !== null && { modelType: input.modelType }),
    };
};
const serializeAws_json1_1UpdateModelVersionRequest = (input, context) => {
    return {
        ...(input.externalEventsDetail !== undefined &&
            input.externalEventsDetail !== null && {
            externalEventsDetail: serializeAws_json1_1ExternalEventsDetail(input.externalEventsDetail, context),
        }),
        ...(input.majorVersionNumber !== undefined &&
            input.majorVersionNumber !== null && { majorVersionNumber: input.majorVersionNumber }),
        ...(input.modelId !== undefined && input.modelId !== null && { modelId: input.modelId }),
        ...(input.modelType !== undefined && input.modelType !== null && { modelType: input.modelType }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1UpdateModelVersionStatusRequest = (input, context) => {
    return {
        ...(input.modelId !== undefined && input.modelId !== null && { modelId: input.modelId }),
        ...(input.modelType !== undefined && input.modelType !== null && { modelType: input.modelType }),
        ...(input.modelVersionNumber !== undefined &&
            input.modelVersionNumber !== null && { modelVersionNumber: input.modelVersionNumber }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1UpdateRuleMetadataRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.rule !== undefined && input.rule !== null && { rule: serializeAws_json1_1Rule(input.rule, context) }),
    };
};
const serializeAws_json1_1UpdateRuleVersionRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
        ...(input.language !== undefined && input.language !== null && { language: input.language }),
        ...(input.outcomes !== undefined &&
            input.outcomes !== null && { outcomes: serializeAws_json1_1NonEmptyListOfStrings(input.outcomes, context) }),
        ...(input.rule !== undefined && input.rule !== null && { rule: serializeAws_json1_1Rule(input.rule, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1UpdateVariableRequest = (input, context) => {
    return {
        ...(input.defaultValue !== undefined && input.defaultValue !== null && { defaultValue: input.defaultValue }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.variableType !== undefined && input.variableType !== null && { variableType: input.variableType }),
    };
};
const serializeAws_json1_1VariableEntry = (input, context) => {
    return {
        ...(input.dataSource !== undefined && input.dataSource !== null && { dataSource: input.dataSource }),
        ...(input.dataType !== undefined && input.dataType !== null && { dataType: input.dataType }),
        ...(input.defaultValue !== undefined && input.defaultValue !== null && { defaultValue: input.defaultValue }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.variableType !== undefined && input.variableType !== null && { variableType: input.variableType }),
    };
};
const serializeAws_json1_1VariableEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1VariableEntry(entry, context);
    });
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1BatchCreateVariableError = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1BatchCreateVariableErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchCreateVariableError(entry, context);
    });
};
const deserializeAws_json1_1BatchCreateVariableResult = (output, context) => {
    return {
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_1BatchCreateVariableErrorList(output.errors, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetVariableError = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1BatchGetVariableErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchGetVariableError(entry, context);
    });
};
const deserializeAws_json1_1BatchGetVariableResult = (output, context) => {
    return {
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_1BatchGetVariableErrorList(output.errors, context)
            : undefined,
        variables: output.variables !== undefined && output.variables !== null
            ? deserializeAws_json1_1VariableList(output.variables, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchPrediction = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        completionTime: output.completionTime !== undefined && output.completionTime !== null ? output.completionTime : undefined,
        detectorName: output.detectorName !== undefined && output.detectorName !== null ? output.detectorName : undefined,
        detectorVersion: output.detectorVersion !== undefined && output.detectorVersion !== null ? output.detectorVersion : undefined,
        eventTypeName: output.eventTypeName !== undefined && output.eventTypeName !== null ? output.eventTypeName : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        iamRoleArn: output.iamRoleArn !== undefined && output.iamRoleArn !== null ? output.iamRoleArn : undefined,
        inputPath: output.inputPath !== undefined && output.inputPath !== null ? output.inputPath : undefined,
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        lastHeartbeatTime: output.lastHeartbeatTime !== undefined && output.lastHeartbeatTime !== null
            ? output.lastHeartbeatTime
            : undefined,
        outputPath: output.outputPath !== undefined && output.outputPath !== null ? output.outputPath : undefined,
        processedRecordsCount: output.processedRecordsCount !== undefined && output.processedRecordsCount !== null
            ? output.processedRecordsCount
            : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null ? output.startTime : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        totalRecordsCount: output.totalRecordsCount !== undefined && output.totalRecordsCount !== null
            ? output.totalRecordsCount
            : undefined,
    };
};
const deserializeAws_json1_1BatchPredictionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchPrediction(entry, context);
    });
};
const deserializeAws_json1_1CancelBatchPredictionJobResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CreateBatchPredictionJobResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateDetectorVersionResult = (output, context) => {
    return {
        detectorId: output.detectorId !== undefined && output.detectorId !== null ? output.detectorId : undefined,
        detectorVersionId: output.detectorVersionId !== undefined && output.detectorVersionId !== null
            ? output.detectorVersionId
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1CreateModelResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateModelVersionResult = (output, context) => {
    return {
        modelId: output.modelId !== undefined && output.modelId !== null ? output.modelId : undefined,
        modelType: output.modelType !== undefined && output.modelType !== null ? output.modelType : undefined,
        modelVersionNumber: output.modelVersionNumber !== undefined && output.modelVersionNumber !== null
            ? output.modelVersionNumber
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1CreateRuleResult = (output, context) => {
    return {
        rule: output.rule !== undefined && output.rule !== null ? deserializeAws_json1_1Rule(output.rule, context) : undefined,
    };
};
const deserializeAws_json1_1CreateVariableResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1CsvIndexToVariableMap = (output, context) => {
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
const deserializeAws_json1_1DataValidationMetrics = (output, context) => {
    return {
        fieldLevelMessages: output.fieldLevelMessages !== undefined && output.fieldLevelMessages !== null
            ? deserializeAws_json1_1fieldValidationMessageList(output.fieldLevelMessages, context)
            : undefined,
        fileLevelMessages: output.fileLevelMessages !== undefined && output.fileLevelMessages !== null
            ? deserializeAws_json1_1fileValidationMessageList(output.fileLevelMessages, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteBatchPredictionJobResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteDetectorResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteDetectorVersionResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteEntityTypeResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteEventResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteEventTypeResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteExternalModelResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteLabelResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteModelResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteModelVersionResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteOutcomeResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteRuleResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteVariableResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeDetectorResult = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        detectorId: output.detectorId !== undefined && output.detectorId !== null ? output.detectorId : undefined,
        detectorVersionSummaries: output.detectorVersionSummaries !== undefined && output.detectorVersionSummaries !== null
            ? deserializeAws_json1_1DetectorVersionSummaryList(output.detectorVersionSummaries, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeModelVersionsResult = (output, context) => {
    return {
        modelVersionDetails: output.modelVersionDetails !== undefined && output.modelVersionDetails !== null
            ? deserializeAws_json1_1modelVersionDetailList(output.modelVersionDetails, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1Detector = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null ? output.createdTime : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        detectorId: output.detectorId !== undefined && output.detectorId !== null ? output.detectorId : undefined,
        eventTypeName: output.eventTypeName !== undefined && output.eventTypeName !== null ? output.eventTypeName : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null ? output.lastUpdatedTime : undefined,
    };
};
const deserializeAws_json1_1DetectorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Detector(entry, context);
    });
};
const deserializeAws_json1_1DetectorVersionSummary = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        detectorVersionId: output.detectorVersionId !== undefined && output.detectorVersionId !== null
            ? output.detectorVersionId
            : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null ? output.lastUpdatedTime : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1DetectorVersionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DetectorVersionSummary(entry, context);
    });
};
const deserializeAws_json1_1EntityType = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null ? output.createdTime : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null ? output.lastUpdatedTime : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1entityTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EntityType(entry, context);
    });
};
const deserializeAws_json1_1EventType = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null ? output.createdTime : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        entityTypes: output.entityTypes !== undefined && output.entityTypes !== null
            ? deserializeAws_json1_1NonEmptyListOfStrings(output.entityTypes, context)
            : undefined,
        eventVariables: output.eventVariables !== undefined && output.eventVariables !== null
            ? deserializeAws_json1_1ListOfStrings(output.eventVariables, context)
            : undefined,
        labels: output.labels !== undefined && output.labels !== null
            ? deserializeAws_json1_1ListOfStrings(output.labels, context)
            : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null ? output.lastUpdatedTime : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1eventTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventType(entry, context);
    });
};
const deserializeAws_json1_1ExternalEventsDetail = (output, context) => {
    return {
        dataAccessRoleArn: output.dataAccessRoleArn !== undefined && output.dataAccessRoleArn !== null
            ? output.dataAccessRoleArn
            : undefined,
        dataLocation: output.dataLocation !== undefined && output.dataLocation !== null ? output.dataLocation : undefined,
    };
};
const deserializeAws_json1_1ExternalModel = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null ? output.createdTime : undefined,
        inputConfiguration: output.inputConfiguration !== undefined && output.inputConfiguration !== null
            ? deserializeAws_json1_1ModelInputConfiguration(output.inputConfiguration, context)
            : undefined,
        invokeModelEndpointRoleArn: output.invokeModelEndpointRoleArn !== undefined && output.invokeModelEndpointRoleArn !== null
            ? output.invokeModelEndpointRoleArn
            : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null ? output.lastUpdatedTime : undefined,
        modelEndpoint: output.modelEndpoint !== undefined && output.modelEndpoint !== null ? output.modelEndpoint : undefined,
        modelEndpointStatus: output.modelEndpointStatus !== undefined && output.modelEndpointStatus !== null
            ? output.modelEndpointStatus
            : undefined,
        modelSource: output.modelSource !== undefined && output.modelSource !== null ? output.modelSource : undefined,
        outputConfiguration: output.outputConfiguration !== undefined && output.outputConfiguration !== null
            ? deserializeAws_json1_1ModelOutputConfiguration(output.outputConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1ExternalModelList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ExternalModel(entry, context);
    });
};
const deserializeAws_json1_1FieldValidationMessage = (output, context) => {
    return {
        content: output.content !== undefined && output.content !== null ? output.content : undefined,
        fieldName: output.fieldName !== undefined && output.fieldName !== null ? output.fieldName : undefined,
        identifier: output.identifier !== undefined && output.identifier !== null ? output.identifier : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1fieldValidationMessageList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FieldValidationMessage(entry, context);
    });
};
const deserializeAws_json1_1FileValidationMessage = (output, context) => {
    return {
        content: output.content !== undefined && output.content !== null ? output.content : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1fileValidationMessageList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FileValidationMessage(entry, context);
    });
};
const deserializeAws_json1_1GetBatchPredictionJobsResult = (output, context) => {
    return {
        batchPredictions: output.batchPredictions !== undefined && output.batchPredictions !== null
            ? deserializeAws_json1_1BatchPredictionList(output.batchPredictions, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1GetDetectorsResult = (output, context) => {
    return {
        detectors: output.detectors !== undefined && output.detectors !== null
            ? deserializeAws_json1_1DetectorList(output.detectors, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1GetDetectorVersionResult = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null ? output.createdTime : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        detectorId: output.detectorId !== undefined && output.detectorId !== null ? output.detectorId : undefined,
        detectorVersionId: output.detectorVersionId !== undefined && output.detectorVersionId !== null
            ? output.detectorVersionId
            : undefined,
        externalModelEndpoints: output.externalModelEndpoints !== undefined && output.externalModelEndpoints !== null
            ? deserializeAws_json1_1ListOfStrings(output.externalModelEndpoints, context)
            : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null ? output.lastUpdatedTime : undefined,
        modelVersions: output.modelVersions !== undefined && output.modelVersions !== null
            ? deserializeAws_json1_1ListOfModelVersions(output.modelVersions, context)
            : undefined,
        ruleExecutionMode: output.ruleExecutionMode !== undefined && output.ruleExecutionMode !== null
            ? output.ruleExecutionMode
            : undefined,
        rules: output.rules !== undefined && output.rules !== null
            ? deserializeAws_json1_1RuleList(output.rules, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1GetEntityTypesResult = (output, context) => {
    return {
        entityTypes: output.entityTypes !== undefined && output.entityTypes !== null
            ? deserializeAws_json1_1entityTypeList(output.entityTypes, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1GetEventPredictionResult = (output, context) => {
    return {
        modelScores: output.modelScores !== undefined && output.modelScores !== null
            ? deserializeAws_json1_1ListOfModelScores(output.modelScores, context)
            : undefined,
        ruleResults: output.ruleResults !== undefined && output.ruleResults !== null
            ? deserializeAws_json1_1ListOfRuleResults(output.ruleResults, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetEventTypesResult = (output, context) => {
    return {
        eventTypes: output.eventTypes !== undefined && output.eventTypes !== null
            ? deserializeAws_json1_1eventTypeList(output.eventTypes, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1GetExternalModelsResult = (output, context) => {
    return {
        externalModels: output.externalModels !== undefined && output.externalModels !== null
            ? deserializeAws_json1_1ExternalModelList(output.externalModels, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1GetKMSEncryptionKeyResult = (output, context) => {
    return {
        kmsKey: output.kmsKey !== undefined && output.kmsKey !== null
            ? deserializeAws_json1_1KMSKey(output.kmsKey, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetLabelsResult = (output, context) => {
    return {
        labels: output.labels !== undefined && output.labels !== null
            ? deserializeAws_json1_1labelList(output.labels, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1GetModelsResult = (output, context) => {
    return {
        models: output.models !== undefined && output.models !== null
            ? deserializeAws_json1_1modelList(output.models, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1GetModelVersionResult = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        externalEventsDetail: output.externalEventsDetail !== undefined && output.externalEventsDetail !== null
            ? deserializeAws_json1_1ExternalEventsDetail(output.externalEventsDetail, context)
            : undefined,
        modelId: output.modelId !== undefined && output.modelId !== null ? output.modelId : undefined,
        modelType: output.modelType !== undefined && output.modelType !== null ? output.modelType : undefined,
        modelVersionNumber: output.modelVersionNumber !== undefined && output.modelVersionNumber !== null
            ? output.modelVersionNumber
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        trainingDataSchema: output.trainingDataSchema !== undefined && output.trainingDataSchema !== null
            ? deserializeAws_json1_1TrainingDataSchema(output.trainingDataSchema, context)
            : undefined,
        trainingDataSource: output.trainingDataSource !== undefined && output.trainingDataSource !== null
            ? output.trainingDataSource
            : undefined,
    };
};
const deserializeAws_json1_1GetOutcomesResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        outcomes: output.outcomes !== undefined && output.outcomes !== null
            ? deserializeAws_json1_1OutcomeList(output.outcomes, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRulesResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        ruleDetails: output.ruleDetails !== undefined && output.ruleDetails !== null
            ? deserializeAws_json1_1RuleDetailList(output.ruleDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetVariablesResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        variables: output.variables !== undefined && output.variables !== null
            ? deserializeAws_json1_1VariableList(output.variables, context)
            : undefined,
    };
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1JsonKeyToVariableMap = (output, context) => {
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
const deserializeAws_json1_1KMSKey = (output, context) => {
    return {
        kmsEncryptionKeyArn: output.kmsEncryptionKeyArn !== undefined && output.kmsEncryptionKeyArn !== null
            ? output.kmsEncryptionKeyArn
            : undefined,
    };
};
const deserializeAws_json1_1Label = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null ? output.createdTime : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null ? output.lastUpdatedTime : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1labelList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Label(entry, context);
    });
};
const deserializeAws_json1_1labelMapper = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1ListOfStrings(value, context),
        };
    }, {});
};
const deserializeAws_json1_1LabelSchema = (output, context) => {
    return {
        labelMapper: output.labelMapper !== undefined && output.labelMapper !== null
            ? deserializeAws_json1_1labelMapper(output.labelMapper, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListOfModelScores = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ModelScores(entry, context);
    });
};
const deserializeAws_json1_1ListOfModelVersions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ModelVersion(entry, context);
    });
};
const deserializeAws_json1_1ListOfRuleResults = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RuleResult(entry, context);
    });
};
const deserializeAws_json1_1ListOfStrings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ListTagsForResourceResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1tagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1MetricDataPoint = (output, context) => {
    return {
        fpr: output.fpr !== undefined && output.fpr !== null ? output.fpr : undefined,
        precision: output.precision !== undefined && output.precision !== null ? output.precision : undefined,
        threshold: output.threshold !== undefined && output.threshold !== null ? output.threshold : undefined,
        tpr: output.tpr !== undefined && output.tpr !== null ? output.tpr : undefined,
    };
};
const deserializeAws_json1_1metricDataPointsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MetricDataPoint(entry, context);
    });
};
const deserializeAws_json1_1Model = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null ? output.createdTime : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        eventTypeName: output.eventTypeName !== undefined && output.eventTypeName !== null ? output.eventTypeName : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null ? output.lastUpdatedTime : undefined,
        modelId: output.modelId !== undefined && output.modelId !== null ? output.modelId : undefined,
        modelType: output.modelType !== undefined && output.modelType !== null ? output.modelType : undefined,
    };
};
const deserializeAws_json1_1ModelInputConfiguration = (output, context) => {
    return {
        csvInputTemplate: output.csvInputTemplate !== undefined && output.csvInputTemplate !== null ? output.csvInputTemplate : undefined,
        eventTypeName: output.eventTypeName !== undefined && output.eventTypeName !== null ? output.eventTypeName : undefined,
        format: output.format !== undefined && output.format !== null ? output.format : undefined,
        jsonInputTemplate: output.jsonInputTemplate !== undefined && output.jsonInputTemplate !== null
            ? output.jsonInputTemplate
            : undefined,
        useEventVariables: output.useEventVariables !== undefined && output.useEventVariables !== null
            ? output.useEventVariables
            : undefined,
    };
};
const deserializeAws_json1_1modelList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Model(entry, context);
    });
};
const deserializeAws_json1_1ModelOutputConfiguration = (output, context) => {
    return {
        csvIndexToVariableMap: output.csvIndexToVariableMap !== undefined && output.csvIndexToVariableMap !== null
            ? deserializeAws_json1_1CsvIndexToVariableMap(output.csvIndexToVariableMap, context)
            : undefined,
        format: output.format !== undefined && output.format !== null ? output.format : undefined,
        jsonKeyToVariableMap: output.jsonKeyToVariableMap !== undefined && output.jsonKeyToVariableMap !== null
            ? deserializeAws_json1_1JsonKeyToVariableMap(output.jsonKeyToVariableMap, context)
            : undefined,
    };
};
const deserializeAws_json1_1ModelPredictionMap = (output, context) => {
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
const deserializeAws_json1_1ModelScores = (output, context) => {
    return {
        modelVersion: output.modelVersion !== undefined && output.modelVersion !== null
            ? deserializeAws_json1_1ModelVersion(output.modelVersion, context)
            : undefined,
        scores: output.scores !== undefined && output.scores !== null
            ? deserializeAws_json1_1ModelPredictionMap(output.scores, context)
            : undefined,
    };
};
const deserializeAws_json1_1ModelVersion = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        modelId: output.modelId !== undefined && output.modelId !== null ? output.modelId : undefined,
        modelType: output.modelType !== undefined && output.modelType !== null ? output.modelType : undefined,
        modelVersionNumber: output.modelVersionNumber !== undefined && output.modelVersionNumber !== null
            ? output.modelVersionNumber
            : undefined,
    };
};
const deserializeAws_json1_1ModelVersionDetail = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null ? output.createdTime : undefined,
        externalEventsDetail: output.externalEventsDetail !== undefined && output.externalEventsDetail !== null
            ? deserializeAws_json1_1ExternalEventsDetail(output.externalEventsDetail, context)
            : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null ? output.lastUpdatedTime : undefined,
        modelId: output.modelId !== undefined && output.modelId !== null ? output.modelId : undefined,
        modelType: output.modelType !== undefined && output.modelType !== null ? output.modelType : undefined,
        modelVersionNumber: output.modelVersionNumber !== undefined && output.modelVersionNumber !== null
            ? output.modelVersionNumber
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        trainingDataSchema: output.trainingDataSchema !== undefined && output.trainingDataSchema !== null
            ? deserializeAws_json1_1TrainingDataSchema(output.trainingDataSchema, context)
            : undefined,
        trainingDataSource: output.trainingDataSource !== undefined && output.trainingDataSource !== null
            ? output.trainingDataSource
            : undefined,
        trainingResult: output.trainingResult !== undefined && output.trainingResult !== null
            ? deserializeAws_json1_1TrainingResult(output.trainingResult, context)
            : undefined,
    };
};
const deserializeAws_json1_1modelVersionDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ModelVersionDetail(entry, context);
    });
};
const deserializeAws_json1_1NonEmptyListOfStrings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Outcome = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null ? output.createdTime : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null ? output.lastUpdatedTime : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1OutcomeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Outcome(entry, context);
    });
};
const deserializeAws_json1_1PutDetectorResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutEntityTypeResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutEventTypeResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutExternalModelResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutKMSEncryptionKeyResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutLabelResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutOutcomeResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Rule = (output, context) => {
    return {
        detectorId: output.detectorId !== undefined && output.detectorId !== null ? output.detectorId : undefined,
        ruleId: output.ruleId !== undefined && output.ruleId !== null ? output.ruleId : undefined,
        ruleVersion: output.ruleVersion !== undefined && output.ruleVersion !== null ? output.ruleVersion : undefined,
    };
};
const deserializeAws_json1_1RuleDetail = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null ? output.createdTime : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        detectorId: output.detectorId !== undefined && output.detectorId !== null ? output.detectorId : undefined,
        expression: output.expression !== undefined && output.expression !== null ? output.expression : undefined,
        language: output.language !== undefined && output.language !== null ? output.language : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null ? output.lastUpdatedTime : undefined,
        outcomes: output.outcomes !== undefined && output.outcomes !== null
            ? deserializeAws_json1_1NonEmptyListOfStrings(output.outcomes, context)
            : undefined,
        ruleId: output.ruleId !== undefined && output.ruleId !== null ? output.ruleId : undefined,
        ruleVersion: output.ruleVersion !== undefined && output.ruleVersion !== null ? output.ruleVersion : undefined,
    };
};
const deserializeAws_json1_1RuleDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RuleDetail(entry, context);
    });
};
const deserializeAws_json1_1RuleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Rule(entry, context);
    });
};
const deserializeAws_json1_1RuleResult = (output, context) => {
    return {
        outcomes: output.outcomes !== undefined && output.outcomes !== null
            ? deserializeAws_json1_1ListOfStrings(output.outcomes, context)
            : undefined,
        ruleId: output.ruleId !== undefined && output.ruleId !== null ? output.ruleId : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1tagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TagResourceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TrainingDataSchema = (output, context) => {
    return {
        labelSchema: output.labelSchema !== undefined && output.labelSchema !== null
            ? deserializeAws_json1_1LabelSchema(output.labelSchema, context)
            : undefined,
        modelVariables: output.modelVariables !== undefined && output.modelVariables !== null
            ? deserializeAws_json1_1ListOfStrings(output.modelVariables, context)
            : undefined,
    };
};
const deserializeAws_json1_1TrainingMetrics = (output, context) => {
    return {
        auc: output.auc !== undefined && output.auc !== null ? output.auc : undefined,
        metricDataPoints: output.metricDataPoints !== undefined && output.metricDataPoints !== null
            ? deserializeAws_json1_1metricDataPointsList(output.metricDataPoints, context)
            : undefined,
    };
};
const deserializeAws_json1_1TrainingResult = (output, context) => {
    return {
        dataValidationMetrics: output.dataValidationMetrics !== undefined && output.dataValidationMetrics !== null
            ? deserializeAws_json1_1DataValidationMetrics(output.dataValidationMetrics, context)
            : undefined,
        trainingMetrics: output.trainingMetrics !== undefined && output.trainingMetrics !== null
            ? deserializeAws_json1_1TrainingMetrics(output.trainingMetrics, context)
            : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateDetectorVersionMetadataResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateDetectorVersionResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateDetectorVersionStatusResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateModelResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateModelVersionResult = (output, context) => {
    return {
        modelId: output.modelId !== undefined && output.modelId !== null ? output.modelId : undefined,
        modelType: output.modelType !== undefined && output.modelType !== null ? output.modelType : undefined,
        modelVersionNumber: output.modelVersionNumber !== undefined && output.modelVersionNumber !== null
            ? output.modelVersionNumber
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1UpdateModelVersionStatusResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateRuleMetadataResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateRuleVersionResult = (output, context) => {
    return {
        rule: output.rule !== undefined && output.rule !== null ? deserializeAws_json1_1Rule(output.rule, context) : undefined,
    };
};
const deserializeAws_json1_1UpdateVariableResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Variable = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null ? output.createdTime : undefined,
        dataSource: output.dataSource !== undefined && output.dataSource !== null ? output.dataSource : undefined,
        dataType: output.dataType !== undefined && output.dataType !== null ? output.dataType : undefined,
        defaultValue: output.defaultValue !== undefined && output.defaultValue !== null ? output.defaultValue : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null ? output.lastUpdatedTime : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        variableType: output.variableType !== undefined && output.variableType !== null ? output.variableType : undefined,
    };
};
const deserializeAws_json1_1VariableList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Variable(entry, context);
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