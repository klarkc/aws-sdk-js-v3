"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1GetActionTypeCommand = exports.deserializeAws_json1_1EnableStageTransitionCommand = exports.deserializeAws_json1_1DisableStageTransitionCommand = exports.deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = exports.deserializeAws_json1_1DeleteWebhookCommand = exports.deserializeAws_json1_1DeletePipelineCommand = exports.deserializeAws_json1_1DeleteCustomActionTypeCommand = exports.deserializeAws_json1_1CreatePipelineCommand = exports.deserializeAws_json1_1CreateCustomActionTypeCommand = exports.deserializeAws_json1_1AcknowledgeThirdPartyJobCommand = exports.deserializeAws_json1_1AcknowledgeJobCommand = exports.serializeAws_json1_1UpdatePipelineCommand = exports.serializeAws_json1_1UpdateActionTypeCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopPipelineExecutionCommand = exports.serializeAws_json1_1StartPipelineExecutionCommand = exports.serializeAws_json1_1RetryStageExecutionCommand = exports.serializeAws_json1_1RegisterWebhookWithThirdPartyCommand = exports.serializeAws_json1_1PutWebhookCommand = exports.serializeAws_json1_1PutThirdPartyJobSuccessResultCommand = exports.serializeAws_json1_1PutThirdPartyJobFailureResultCommand = exports.serializeAws_json1_1PutJobSuccessResultCommand = exports.serializeAws_json1_1PutJobFailureResultCommand = exports.serializeAws_json1_1PutApprovalResultCommand = exports.serializeAws_json1_1PutActionRevisionCommand = exports.serializeAws_json1_1PollForThirdPartyJobsCommand = exports.serializeAws_json1_1PollForJobsCommand = exports.serializeAws_json1_1ListWebhooksCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListPipelinesCommand = exports.serializeAws_json1_1ListPipelineExecutionsCommand = exports.serializeAws_json1_1ListActionTypesCommand = exports.serializeAws_json1_1ListActionExecutionsCommand = exports.serializeAws_json1_1GetThirdPartyJobDetailsCommand = exports.serializeAws_json1_1GetPipelineStateCommand = exports.serializeAws_json1_1GetPipelineExecutionCommand = exports.serializeAws_json1_1GetPipelineCommand = exports.serializeAws_json1_1GetJobDetailsCommand = exports.serializeAws_json1_1GetActionTypeCommand = exports.serializeAws_json1_1EnableStageTransitionCommand = exports.serializeAws_json1_1DisableStageTransitionCommand = exports.serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = exports.serializeAws_json1_1DeleteWebhookCommand = exports.serializeAws_json1_1DeletePipelineCommand = exports.serializeAws_json1_1DeleteCustomActionTypeCommand = exports.serializeAws_json1_1CreatePipelineCommand = exports.serializeAws_json1_1CreateCustomActionTypeCommand = exports.serializeAws_json1_1AcknowledgeThirdPartyJobCommand = exports.serializeAws_json1_1AcknowledgeJobCommand = void 0;
exports.deserializeAws_json1_1UpdatePipelineCommand = exports.deserializeAws_json1_1UpdateActionTypeCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopPipelineExecutionCommand = exports.deserializeAws_json1_1StartPipelineExecutionCommand = exports.deserializeAws_json1_1RetryStageExecutionCommand = exports.deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand = exports.deserializeAws_json1_1PutWebhookCommand = exports.deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand = exports.deserializeAws_json1_1PutThirdPartyJobFailureResultCommand = exports.deserializeAws_json1_1PutJobSuccessResultCommand = exports.deserializeAws_json1_1PutJobFailureResultCommand = exports.deserializeAws_json1_1PutApprovalResultCommand = exports.deserializeAws_json1_1PutActionRevisionCommand = exports.deserializeAws_json1_1PollForThirdPartyJobsCommand = exports.deserializeAws_json1_1PollForJobsCommand = exports.deserializeAws_json1_1ListWebhooksCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListPipelinesCommand = exports.deserializeAws_json1_1ListPipelineExecutionsCommand = exports.deserializeAws_json1_1ListActionTypesCommand = exports.deserializeAws_json1_1ListActionExecutionsCommand = exports.deserializeAws_json1_1GetThirdPartyJobDetailsCommand = exports.deserializeAws_json1_1GetPipelineStateCommand = exports.deserializeAws_json1_1GetPipelineExecutionCommand = exports.deserializeAws_json1_1GetPipelineCommand = exports.deserializeAws_json1_1GetJobDetailsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1AcknowledgeJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.AcknowledgeJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AcknowledgeJobInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AcknowledgeJobCommand = serializeAws_json1_1AcknowledgeJobCommand;
const serializeAws_json1_1AcknowledgeThirdPartyJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.AcknowledgeThirdPartyJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AcknowledgeThirdPartyJobInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AcknowledgeThirdPartyJobCommand = serializeAws_json1_1AcknowledgeThirdPartyJobCommand;
const serializeAws_json1_1CreateCustomActionTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.CreateCustomActionType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCustomActionTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCustomActionTypeCommand = serializeAws_json1_1CreateCustomActionTypeCommand;
const serializeAws_json1_1CreatePipelineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.CreatePipeline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePipelineCommand = serializeAws_json1_1CreatePipelineCommand;
const serializeAws_json1_1DeleteCustomActionTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.DeleteCustomActionType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCustomActionTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCustomActionTypeCommand = serializeAws_json1_1DeleteCustomActionTypeCommand;
const serializeAws_json1_1DeletePipelineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.DeletePipeline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePipelineCommand = serializeAws_json1_1DeletePipelineCommand;
const serializeAws_json1_1DeleteWebhookCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.DeleteWebhook",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWebhookInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteWebhookCommand = serializeAws_json1_1DeleteWebhookCommand;
const serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.DeregisterWebhookWithThirdParty",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterWebhookWithThirdPartyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand;
const serializeAws_json1_1DisableStageTransitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.DisableStageTransition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableStageTransitionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableStageTransitionCommand = serializeAws_json1_1DisableStageTransitionCommand;
const serializeAws_json1_1EnableStageTransitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.EnableStageTransition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableStageTransitionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableStageTransitionCommand = serializeAws_json1_1EnableStageTransitionCommand;
const serializeAws_json1_1GetActionTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.GetActionType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetActionTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetActionTypeCommand = serializeAws_json1_1GetActionTypeCommand;
const serializeAws_json1_1GetJobDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.GetJobDetails",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobDetailsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetJobDetailsCommand = serializeAws_json1_1GetJobDetailsCommand;
const serializeAws_json1_1GetPipelineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.GetPipeline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPipelineCommand = serializeAws_json1_1GetPipelineCommand;
const serializeAws_json1_1GetPipelineExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.GetPipelineExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPipelineExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPipelineExecutionCommand = serializeAws_json1_1GetPipelineExecutionCommand;
const serializeAws_json1_1GetPipelineStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.GetPipelineState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPipelineStateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPipelineStateCommand = serializeAws_json1_1GetPipelineStateCommand;
const serializeAws_json1_1GetThirdPartyJobDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.GetThirdPartyJobDetails",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetThirdPartyJobDetailsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetThirdPartyJobDetailsCommand = serializeAws_json1_1GetThirdPartyJobDetailsCommand;
const serializeAws_json1_1ListActionExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.ListActionExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListActionExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListActionExecutionsCommand = serializeAws_json1_1ListActionExecutionsCommand;
const serializeAws_json1_1ListActionTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.ListActionTypes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListActionTypesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListActionTypesCommand = serializeAws_json1_1ListActionTypesCommand;
const serializeAws_json1_1ListPipelineExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.ListPipelineExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPipelineExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPipelineExecutionsCommand = serializeAws_json1_1ListPipelineExecutionsCommand;
const serializeAws_json1_1ListPipelinesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.ListPipelines",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPipelinesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPipelinesCommand = serializeAws_json1_1ListPipelinesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListWebhooksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.ListWebhooks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWebhooksInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListWebhooksCommand = serializeAws_json1_1ListWebhooksCommand;
const serializeAws_json1_1PollForJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.PollForJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PollForJobsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PollForJobsCommand = serializeAws_json1_1PollForJobsCommand;
const serializeAws_json1_1PollForThirdPartyJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.PollForThirdPartyJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PollForThirdPartyJobsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PollForThirdPartyJobsCommand = serializeAws_json1_1PollForThirdPartyJobsCommand;
const serializeAws_json1_1PutActionRevisionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.PutActionRevision",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutActionRevisionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutActionRevisionCommand = serializeAws_json1_1PutActionRevisionCommand;
const serializeAws_json1_1PutApprovalResultCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.PutApprovalResult",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutApprovalResultInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutApprovalResultCommand = serializeAws_json1_1PutApprovalResultCommand;
const serializeAws_json1_1PutJobFailureResultCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.PutJobFailureResult",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutJobFailureResultInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutJobFailureResultCommand = serializeAws_json1_1PutJobFailureResultCommand;
const serializeAws_json1_1PutJobSuccessResultCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.PutJobSuccessResult",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutJobSuccessResultInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutJobSuccessResultCommand = serializeAws_json1_1PutJobSuccessResultCommand;
const serializeAws_json1_1PutThirdPartyJobFailureResultCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.PutThirdPartyJobFailureResult",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutThirdPartyJobFailureResultInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutThirdPartyJobFailureResultCommand = serializeAws_json1_1PutThirdPartyJobFailureResultCommand;
const serializeAws_json1_1PutThirdPartyJobSuccessResultCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.PutThirdPartyJobSuccessResult",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutThirdPartyJobSuccessResultInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutThirdPartyJobSuccessResultCommand = serializeAws_json1_1PutThirdPartyJobSuccessResultCommand;
const serializeAws_json1_1PutWebhookCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.PutWebhook",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutWebhookInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutWebhookCommand = serializeAws_json1_1PutWebhookCommand;
const serializeAws_json1_1RegisterWebhookWithThirdPartyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.RegisterWebhookWithThirdParty",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterWebhookWithThirdPartyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterWebhookWithThirdPartyCommand = serializeAws_json1_1RegisterWebhookWithThirdPartyCommand;
const serializeAws_json1_1RetryStageExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.RetryStageExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RetryStageExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RetryStageExecutionCommand = serializeAws_json1_1RetryStageExecutionCommand;
const serializeAws_json1_1StartPipelineExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.StartPipelineExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartPipelineExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartPipelineExecutionCommand = serializeAws_json1_1StartPipelineExecutionCommand;
const serializeAws_json1_1StopPipelineExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.StopPipelineExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopPipelineExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopPipelineExecutionCommand = serializeAws_json1_1StopPipelineExecutionCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateActionTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.UpdateActionType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateActionTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateActionTypeCommand = serializeAws_json1_1UpdateActionTypeCommand;
const serializeAws_json1_1UpdatePipelineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodePipeline_20150709.UpdatePipeline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePipelineCommand = serializeAws_json1_1UpdatePipelineCommand;
const deserializeAws_json1_1AcknowledgeJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AcknowledgeJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcknowledgeJobOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AcknowledgeJobCommand = deserializeAws_json1_1AcknowledgeJobCommand;
const deserializeAws_json1_1AcknowledgeJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNonceException":
        case "com.amazonaws.codepipeline#InvalidNonceException":
            response = {
                ...(await deserializeAws_json1_1InvalidNonceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline#JobNotFoundException":
            response = {
                ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1AcknowledgeThirdPartyJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AcknowledgeThirdPartyJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcknowledgeThirdPartyJobOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AcknowledgeThirdPartyJobCommand = deserializeAws_json1_1AcknowledgeThirdPartyJobCommand;
const deserializeAws_json1_1AcknowledgeThirdPartyJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidClientTokenException":
        case "com.amazonaws.codepipeline#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNonceException":
        case "com.amazonaws.codepipeline#InvalidNonceException":
            response = {
                ...(await deserializeAws_json1_1InvalidNonceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline#JobNotFoundException":
            response = {
                ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1CreateCustomActionTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCustomActionTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCustomActionTypeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCustomActionTypeCommand = deserializeAws_json1_1CreateCustomActionTypeCommand;
const deserializeAws_json1_1CreateCustomActionTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagsException":
        case "com.amazonaws.codepipeline#InvalidTagsException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.codepipeline#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codepipeline#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1CreatePipelineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePipelineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePipelineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePipelineCommand = deserializeAws_json1_1CreatePipelineCommand;
const deserializeAws_json1_1CreatePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidActionDeclarationException":
        case "com.amazonaws.codepipeline#InvalidActionDeclarationException":
            response = {
                ...(await deserializeAws_json1_1InvalidActionDeclarationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBlockerDeclarationException":
        case "com.amazonaws.codepipeline#InvalidBlockerDeclarationException":
            response = {
                ...(await deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStageDeclarationException":
        case "com.amazonaws.codepipeline#InvalidStageDeclarationException":
            response = {
                ...(await deserializeAws_json1_1InvalidStageDeclarationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStructureException":
        case "com.amazonaws.codepipeline#InvalidStructureException":
            response = {
                ...(await deserializeAws_json1_1InvalidStructureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagsException":
        case "com.amazonaws.codepipeline#InvalidTagsException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.codepipeline#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNameInUseException":
        case "com.amazonaws.codepipeline#PipelineNameInUseException":
            response = {
                ...(await deserializeAws_json1_1PipelineNameInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codepipeline#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1DeleteCustomActionTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCustomActionTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCustomActionTypeCommand = deserializeAws_json1_1DeleteCustomActionTypeCommand;
const deserializeAws_json1_1DeleteCustomActionTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1DeletePipelineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePipelineCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePipelineCommand = deserializeAws_json1_1DeletePipelineCommand;
const deserializeAws_json1_1DeletePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1DeleteWebhookCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteWebhookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWebhookOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteWebhookCommand = deserializeAws_json1_1DeleteWebhookCommand;
const deserializeAws_json1_1DeleteWebhookCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterWebhookWithThirdPartyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand;
const deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WebhookNotFoundException":
        case "com.amazonaws.codepipeline#WebhookNotFoundException":
            response = {
                ...(await deserializeAws_json1_1WebhookNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisableStageTransitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableStageTransitionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableStageTransitionCommand = deserializeAws_json1_1DisableStageTransitionCommand;
const deserializeAws_json1_1DisableStageTransitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StageNotFoundException":
        case "com.amazonaws.codepipeline#StageNotFoundException":
            response = {
                ...(await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1EnableStageTransitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableStageTransitionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableStageTransitionCommand = deserializeAws_json1_1EnableStageTransitionCommand;
const deserializeAws_json1_1EnableStageTransitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StageNotFoundException":
        case "com.amazonaws.codepipeline#StageNotFoundException":
            response = {
                ...(await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1GetActionTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetActionTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetActionTypeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetActionTypeCommand = deserializeAws_json1_1GetActionTypeCommand;
const deserializeAws_json1_1GetActionTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActionTypeNotFoundException":
        case "com.amazonaws.codepipeline#ActionTypeNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1GetJobDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetJobDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobDetailsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetJobDetailsCommand = deserializeAws_json1_1GetJobDetailsCommand;
const deserializeAws_json1_1GetJobDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline#JobNotFoundException":
            response = {
                ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1GetPipelineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPipelineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPipelineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPipelineCommand = deserializeAws_json1_1GetPipelineCommand;
const deserializeAws_json1_1GetPipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineVersionNotFoundException":
        case "com.amazonaws.codepipeline#PipelineVersionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineVersionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1GetPipelineExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPipelineExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPipelineExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPipelineExecutionCommand = deserializeAws_json1_1GetPipelineExecutionCommand;
const deserializeAws_json1_1GetPipelineExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "PipelineExecutionNotFoundException":
        case "com.amazonaws.codepipeline#PipelineExecutionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1GetPipelineStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPipelineStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPipelineStateOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPipelineStateCommand = deserializeAws_json1_1GetPipelineStateCommand;
const deserializeAws_json1_1GetPipelineStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1GetThirdPartyJobDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetThirdPartyJobDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetThirdPartyJobDetailsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetThirdPartyJobDetailsCommand = deserializeAws_json1_1GetThirdPartyJobDetailsCommand;
const deserializeAws_json1_1GetThirdPartyJobDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidClientTokenException":
        case "com.amazonaws.codepipeline#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidJobException":
        case "com.amazonaws.codepipeline#InvalidJobException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline#JobNotFoundException":
            response = {
                ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1ListActionExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListActionExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListActionExecutionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListActionExecutionsCommand = deserializeAws_json1_1ListActionExecutionsCommand;
const deserializeAws_json1_1ListActionExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codepipeline#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineExecutionNotFoundException":
        case "com.amazonaws.codepipeline#PipelineExecutionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1ListActionTypesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListActionTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListActionTypesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListActionTypesCommand = deserializeAws_json1_1ListActionTypesCommand;
const deserializeAws_json1_1ListActionTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codepipeline#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1ListPipelineExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPipelineExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPipelineExecutionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPipelineExecutionsCommand = deserializeAws_json1_1ListPipelineExecutionsCommand;
const deserializeAws_json1_1ListPipelineExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codepipeline#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1ListPipelinesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPipelinesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPipelinesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPipelinesCommand = deserializeAws_json1_1ListPipelinesCommand;
const deserializeAws_json1_1ListPipelinesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codepipeline#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
    contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
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
        case "InvalidArnException":
        case "com.amazonaws.codepipeline#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.codepipeline#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codepipeline#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1ListWebhooksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListWebhooksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListWebhooksOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListWebhooksCommand = deserializeAws_json1_1ListWebhooksCommand;
const deserializeAws_json1_1ListWebhooksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codepipeline#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1PollForJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PollForJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PollForJobsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PollForJobsCommand = deserializeAws_json1_1PollForJobsCommand;
const deserializeAws_json1_1PollForJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActionTypeNotFoundException":
        case "com.amazonaws.codepipeline#ActionTypeNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1PollForThirdPartyJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PollForThirdPartyJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PollForThirdPartyJobsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PollForThirdPartyJobsCommand = deserializeAws_json1_1PollForThirdPartyJobsCommand;
const deserializeAws_json1_1PollForThirdPartyJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActionTypeNotFoundException":
        case "com.amazonaws.codepipeline#ActionTypeNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1PutActionRevisionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutActionRevisionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutActionRevisionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutActionRevisionCommand = deserializeAws_json1_1PutActionRevisionCommand;
const deserializeAws_json1_1PutActionRevisionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActionNotFoundException":
        case "com.amazonaws.codepipeline#ActionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ActionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StageNotFoundException":
        case "com.amazonaws.codepipeline#StageNotFoundException":
            response = {
                ...(await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1PutApprovalResultCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutApprovalResultCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutApprovalResultOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutApprovalResultCommand = deserializeAws_json1_1PutApprovalResultCommand;
const deserializeAws_json1_1PutApprovalResultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActionNotFoundException":
        case "com.amazonaws.codepipeline#ActionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ActionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApprovalAlreadyCompletedException":
        case "com.amazonaws.codepipeline#ApprovalAlreadyCompletedException":
            response = {
                ...(await deserializeAws_json1_1ApprovalAlreadyCompletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApprovalTokenException":
        case "com.amazonaws.codepipeline#InvalidApprovalTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidApprovalTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StageNotFoundException":
        case "com.amazonaws.codepipeline#StageNotFoundException":
            response = {
                ...(await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1PutJobFailureResultCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutJobFailureResultCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutJobFailureResultCommand = deserializeAws_json1_1PutJobFailureResultCommand;
const deserializeAws_json1_1PutJobFailureResultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.codepipeline#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline#JobNotFoundException":
            response = {
                ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1PutJobSuccessResultCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutJobSuccessResultCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutJobSuccessResultCommand = deserializeAws_json1_1PutJobSuccessResultCommand;
const deserializeAws_json1_1PutJobSuccessResultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.codepipeline#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline#JobNotFoundException":
            response = {
                ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OutputVariablesSizeExceededException":
        case "com.amazonaws.codepipeline#OutputVariablesSizeExceededException":
            response = {
                ...(await deserializeAws_json1_1OutputVariablesSizeExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1PutThirdPartyJobFailureResultCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutThirdPartyJobFailureResultCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutThirdPartyJobFailureResultCommand = deserializeAws_json1_1PutThirdPartyJobFailureResultCommand;
const deserializeAws_json1_1PutThirdPartyJobFailureResultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidClientTokenException":
        case "com.amazonaws.codepipeline#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidJobStateException":
        case "com.amazonaws.codepipeline#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline#JobNotFoundException":
            response = {
                ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutThirdPartyJobSuccessResultCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand = deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand;
const deserializeAws_json1_1PutThirdPartyJobSuccessResultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidClientTokenException":
        case "com.amazonaws.codepipeline#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidJobStateException":
        case "com.amazonaws.codepipeline#InvalidJobStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline#JobNotFoundException":
            response = {
                ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1PutWebhookCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutWebhookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutWebhookOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutWebhookCommand = deserializeAws_json1_1PutWebhookCommand;
const deserializeAws_json1_1PutWebhookCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagsException":
        case "com.amazonaws.codepipeline#InvalidTagsException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidWebhookAuthenticationParametersException":
        case "com.amazonaws.codepipeline#InvalidWebhookAuthenticationParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidWebhookAuthenticationParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidWebhookFilterPatternException":
        case "com.amazonaws.codepipeline#InvalidWebhookFilterPatternException":
            response = {
                ...(await deserializeAws_json1_1InvalidWebhookFilterPatternExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.codepipeline#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codepipeline#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterWebhookWithThirdPartyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterWebhookWithThirdPartyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand = deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand;
const deserializeAws_json1_1RegisterWebhookWithThirdPartyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WebhookNotFoundException":
        case "com.amazonaws.codepipeline#WebhookNotFoundException":
            response = {
                ...(await deserializeAws_json1_1WebhookNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RetryStageExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RetryStageExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RetryStageExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RetryStageExecutionCommand = deserializeAws_json1_1RetryStageExecutionCommand;
const deserializeAws_json1_1RetryStageExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.codepipeline#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotLatestPipelineExecutionException":
        case "com.amazonaws.codepipeline#NotLatestPipelineExecutionException":
            response = {
                ...(await deserializeAws_json1_1NotLatestPipelineExecutionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StageNotFoundException":
        case "com.amazonaws.codepipeline#StageNotFoundException":
            response = {
                ...(await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StageNotRetryableException":
        case "com.amazonaws.codepipeline#StageNotRetryableException":
            response = {
                ...(await deserializeAws_json1_1StageNotRetryableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1StartPipelineExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartPipelineExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartPipelineExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartPipelineExecutionCommand = deserializeAws_json1_1StartPipelineExecutionCommand;
const deserializeAws_json1_1StartPipelineExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.codepipeline#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1StopPipelineExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopPipelineExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopPipelineExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopPipelineExecutionCommand = deserializeAws_json1_1StopPipelineExecutionCommand;
const deserializeAws_json1_1StopPipelineExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.codepipeline#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicatedStopRequestException":
        case "com.amazonaws.codepipeline#DuplicatedStopRequestException":
            response = {
                ...(await deserializeAws_json1_1DuplicatedStopRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineExecutionNotStoppableException":
        case "com.amazonaws.codepipeline#PipelineExecutionNotStoppableException":
            response = {
                ...(await deserializeAws_json1_1PipelineExecutionNotStoppableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
    contents = deserializeAws_json1_1TagResourceOutput(data, context);
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
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.codepipeline#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagsException":
        case "com.amazonaws.codepipeline#InvalidTagsException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codepipeline#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codepipeline#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
    contents = deserializeAws_json1_1UntagResourceOutput(data, context);
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
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.codepipeline#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagsException":
        case "com.amazonaws.codepipeline#InvalidTagsException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codepipeline#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1UpdateActionTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateActionTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateActionTypeCommand = deserializeAws_json1_1UpdateActionTypeCommand;
const deserializeAws_json1_1UpdateActionTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActionTypeNotFoundException":
        case "com.amazonaws.codepipeline#ActionTypeNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestFailedException":
        case "com.amazonaws.codepipeline#RequestFailedException":
            response = {
                ...(await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1UpdatePipelineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdatePipelineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePipelineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePipelineCommand = deserializeAws_json1_1UpdatePipelineCommand;
const deserializeAws_json1_1UpdatePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidActionDeclarationException":
        case "com.amazonaws.codepipeline#InvalidActionDeclarationException":
            response = {
                ...(await deserializeAws_json1_1InvalidActionDeclarationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBlockerDeclarationException":
        case "com.amazonaws.codepipeline#InvalidBlockerDeclarationException":
            response = {
                ...(await deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStageDeclarationException":
        case "com.amazonaws.codepipeline#InvalidStageDeclarationException":
            response = {
                ...(await deserializeAws_json1_1InvalidStageDeclarationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStructureException":
        case "com.amazonaws.codepipeline#InvalidStructureException":
            response = {
                ...(await deserializeAws_json1_1InvalidStructureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.codepipeline#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline#ValidationException":
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
const deserializeAws_json1_1ActionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ActionNotFoundException(body, context);
    const contents = {
        name: "ActionNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ActionTypeNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ActionTypeNotFoundException(body, context);
    const contents = {
        name: "ActionTypeNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApprovalAlreadyCompletedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalAlreadyCompletedException(body, context);
    const contents = {
        name: "ApprovalAlreadyCompletedException",
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
const deserializeAws_json1_1DuplicatedStopRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicatedStopRequestException(body, context);
    const contents = {
        name: "DuplicatedStopRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidActionDeclarationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidActionDeclarationException(body, context);
    const contents = {
        name: "InvalidActionDeclarationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidApprovalTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalTokenException(body, context);
    const contents = {
        name: "InvalidApprovalTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArnException(body, context);
    const contents = {
        name: "InvalidArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidBlockerDeclarationException(body, context);
    const contents = {
        name: "InvalidBlockerDeclarationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidClientTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidClientTokenException(body, context);
    const contents = {
        name: "InvalidClientTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidJobExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidJobException(body, context);
    const contents = {
        name: "InvalidJobException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidJobStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidJobStateException(body, context);
    const contents = {
        name: "InvalidJobStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidNonceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNonceException(body, context);
    const contents = {
        name: "InvalidNonceException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidStageDeclarationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidStageDeclarationException(body, context);
    const contents = {
        name: "InvalidStageDeclarationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidStructureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidStructureException(body, context);
    const contents = {
        name: "InvalidStructureException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagsException(body, context);
    const contents = {
        name: "InvalidTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidWebhookAuthenticationParametersExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidWebhookAuthenticationParametersException(body, context);
    const contents = {
        name: "InvalidWebhookAuthenticationParametersException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidWebhookFilterPatternExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidWebhookFilterPatternException(body, context);
    const contents = {
        name: "InvalidWebhookFilterPatternException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1JobNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1JobNotFoundException(body, context);
    const contents = {
        name: "JobNotFoundException",
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
const deserializeAws_json1_1NotLatestPipelineExecutionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotLatestPipelineExecutionException(body, context);
    const contents = {
        name: "NotLatestPipelineExecutionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OutputVariablesSizeExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OutputVariablesSizeExceededException(body, context);
    const contents = {
        name: "OutputVariablesSizeExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineExecutionNotFoundException(body, context);
    const contents = {
        name: "PipelineExecutionNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PipelineExecutionNotStoppableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineExecutionNotStoppableException(body, context);
    const contents = {
        name: "PipelineExecutionNotStoppableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PipelineNameInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineNameInUseException(body, context);
    const contents = {
        name: "PipelineNameInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PipelineNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineNotFoundException(body, context);
    const contents = {
        name: "PipelineNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PipelineVersionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineVersionNotFoundException(body, context);
    const contents = {
        name: "PipelineVersionNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RequestFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RequestFailedException(body, context);
    const contents = {
        name: "RequestFailedException",
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
const deserializeAws_json1_1StageNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1StageNotFoundException(body, context);
    const contents = {
        name: "StageNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1StageNotRetryableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1StageNotRetryableException(body, context);
    const contents = {
        name: "StageNotRetryableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = {
        name: "TooManyTagsException",
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
const deserializeAws_json1_1WebhookNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WebhookNotFoundException(body, context);
    const contents = {
        name: "WebhookNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AcknowledgeJobInput = (input, context) => {
    return {
        ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
        ...(input.nonce !== undefined && input.nonce !== null && { nonce: input.nonce }),
    };
};
const serializeAws_json1_1AcknowledgeThirdPartyJobInput = (input, context) => {
    return {
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
        ...(input.nonce !== undefined && input.nonce !== null && { nonce: input.nonce }),
    };
};
const serializeAws_json1_1ActionConfigurationMap = (input, context) => {
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
const serializeAws_json1_1ActionConfigurationProperty = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.queryable !== undefined && input.queryable !== null && { queryable: input.queryable }),
        ...(input.required !== undefined && input.required !== null && { required: input.required }),
        ...(input.secret !== undefined && input.secret !== null && { secret: input.secret }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ActionConfigurationPropertyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ActionConfigurationProperty(entry, context);
    });
};
const serializeAws_json1_1ActionDeclaration = (input, context) => {
    return {
        ...(input.actionTypeId !== undefined &&
            input.actionTypeId !== null && { actionTypeId: serializeAws_json1_1ActionTypeId(input.actionTypeId, context) }),
        ...(input.configuration !== undefined &&
            input.configuration !== null && {
            configuration: serializeAws_json1_1ActionConfigurationMap(input.configuration, context),
        }),
        ...(input.inputArtifacts !== undefined &&
            input.inputArtifacts !== null && {
            inputArtifacts: serializeAws_json1_1InputArtifactList(input.inputArtifacts, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.namespace !== undefined && input.namespace !== null && { namespace: input.namespace }),
        ...(input.outputArtifacts !== undefined &&
            input.outputArtifacts !== null && {
            outputArtifacts: serializeAws_json1_1OutputArtifactList(input.outputArtifacts, context),
        }),
        ...(input.region !== undefined && input.region !== null && { region: input.region }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.runOrder !== undefined && input.runOrder !== null && { runOrder: input.runOrder }),
    };
};
const serializeAws_json1_1ActionExecutionFilter = (input, context) => {
    return {
        ...(input.pipelineExecutionId !== undefined &&
            input.pipelineExecutionId !== null && { pipelineExecutionId: input.pipelineExecutionId }),
    };
};
const serializeAws_json1_1ActionRevision = (input, context) => {
    return {
        ...(input.created !== undefined &&
            input.created !== null && { created: Math.round(input.created.getTime() / 1000) }),
        ...(input.revisionChangeId !== undefined &&
            input.revisionChangeId !== null && { revisionChangeId: input.revisionChangeId }),
        ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
    };
};
const serializeAws_json1_1ActionTypeArtifactDetails = (input, context) => {
    return {
        ...(input.maximumCount !== undefined && input.maximumCount !== null && { maximumCount: input.maximumCount }),
        ...(input.minimumCount !== undefined && input.minimumCount !== null && { minimumCount: input.minimumCount }),
    };
};
const serializeAws_json1_1ActionTypeDeclaration = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.executor !== undefined &&
            input.executor !== null && { executor: serializeAws_json1_1ActionTypeExecutor(input.executor, context) }),
        ...(input.id !== undefined &&
            input.id !== null && { id: serializeAws_json1_1ActionTypeIdentifier(input.id, context) }),
        ...(input.inputArtifactDetails !== undefined &&
            input.inputArtifactDetails !== null && {
            inputArtifactDetails: serializeAws_json1_1ActionTypeArtifactDetails(input.inputArtifactDetails, context),
        }),
        ...(input.outputArtifactDetails !== undefined &&
            input.outputArtifactDetails !== null && {
            outputArtifactDetails: serializeAws_json1_1ActionTypeArtifactDetails(input.outputArtifactDetails, context),
        }),
        ...(input.permissions !== undefined &&
            input.permissions !== null && {
            permissions: serializeAws_json1_1ActionTypePermissions(input.permissions, context),
        }),
        ...(input.properties !== undefined &&
            input.properties !== null && { properties: serializeAws_json1_1ActionTypeProperties(input.properties, context) }),
        ...(input.urls !== undefined &&
            input.urls !== null && { urls: serializeAws_json1_1ActionTypeUrls(input.urls, context) }),
    };
};
const serializeAws_json1_1ActionTypeExecutor = (input, context) => {
    return {
        ...(input.configuration !== undefined &&
            input.configuration !== null && {
            configuration: serializeAws_json1_1ExecutorConfiguration(input.configuration, context),
        }),
        ...(input.jobTimeout !== undefined && input.jobTimeout !== null && { jobTimeout: input.jobTimeout }),
        ...(input.policyStatementsTemplate !== undefined &&
            input.policyStatementsTemplate !== null && { policyStatementsTemplate: input.policyStatementsTemplate }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ActionTypeId = (input, context) => {
    return {
        ...(input.category !== undefined && input.category !== null && { category: input.category }),
        ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
        ...(input.provider !== undefined && input.provider !== null && { provider: input.provider }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_1ActionTypeIdentifier = (input, context) => {
    return {
        ...(input.category !== undefined && input.category !== null && { category: input.category }),
        ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
        ...(input.provider !== undefined && input.provider !== null && { provider: input.provider }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_1ActionTypePermissions = (input, context) => {
    return {
        ...(input.allowedAccounts !== undefined &&
            input.allowedAccounts !== null && {
            allowedAccounts: serializeAws_json1_1AllowedAccounts(input.allowedAccounts, context),
        }),
    };
};
const serializeAws_json1_1ActionTypeProperties = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ActionTypeProperty(entry, context);
    });
};
const serializeAws_json1_1ActionTypeProperty = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.noEcho !== undefined && input.noEcho !== null && { noEcho: input.noEcho }),
        ...(input.optional !== undefined && input.optional !== null && { optional: input.optional }),
        ...(input.queryable !== undefined && input.queryable !== null && { queryable: input.queryable }),
    };
};
const serializeAws_json1_1ActionTypeSettings = (input, context) => {
    return {
        ...(input.entityUrlTemplate !== undefined &&
            input.entityUrlTemplate !== null && { entityUrlTemplate: input.entityUrlTemplate }),
        ...(input.executionUrlTemplate !== undefined &&
            input.executionUrlTemplate !== null && { executionUrlTemplate: input.executionUrlTemplate }),
        ...(input.revisionUrlTemplate !== undefined &&
            input.revisionUrlTemplate !== null && { revisionUrlTemplate: input.revisionUrlTemplate }),
        ...(input.thirdPartyConfigurationUrl !== undefined &&
            input.thirdPartyConfigurationUrl !== null && { thirdPartyConfigurationUrl: input.thirdPartyConfigurationUrl }),
    };
};
const serializeAws_json1_1ActionTypeUrls = (input, context) => {
    return {
        ...(input.configurationUrl !== undefined &&
            input.configurationUrl !== null && { configurationUrl: input.configurationUrl }),
        ...(input.entityUrlTemplate !== undefined &&
            input.entityUrlTemplate !== null && { entityUrlTemplate: input.entityUrlTemplate }),
        ...(input.executionUrlTemplate !== undefined &&
            input.executionUrlTemplate !== null && { executionUrlTemplate: input.executionUrlTemplate }),
        ...(input.revisionUrlTemplate !== undefined &&
            input.revisionUrlTemplate !== null && { revisionUrlTemplate: input.revisionUrlTemplate }),
    };
};
const serializeAws_json1_1AllowedAccounts = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ApprovalResult = (input, context) => {
    return {
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
        ...(input.summary !== undefined && input.summary !== null && { summary: input.summary }),
    };
};
const serializeAws_json1_1ArtifactDetails = (input, context) => {
    return {
        ...(input.maximumCount !== undefined && input.maximumCount !== null && { maximumCount: input.maximumCount }),
        ...(input.minimumCount !== undefined && input.minimumCount !== null && { minimumCount: input.minimumCount }),
    };
};
const serializeAws_json1_1ArtifactStore = (input, context) => {
    return {
        ...(input.encryptionKey !== undefined &&
            input.encryptionKey !== null && {
            encryptionKey: serializeAws_json1_1EncryptionKey(input.encryptionKey, context),
        }),
        ...(input.location !== undefined && input.location !== null && { location: input.location }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ArtifactStoreMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1ArtifactStore(value, context),
        };
    }, {});
};
const serializeAws_json1_1BlockerDeclaration = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1CreateCustomActionTypeInput = (input, context) => {
    return {
        ...(input.category !== undefined && input.category !== null && { category: input.category }),
        ...(input.configurationProperties !== undefined &&
            input.configurationProperties !== null && {
            configurationProperties: serializeAws_json1_1ActionConfigurationPropertyList(input.configurationProperties, context),
        }),
        ...(input.inputArtifactDetails !== undefined &&
            input.inputArtifactDetails !== null && {
            inputArtifactDetails: serializeAws_json1_1ArtifactDetails(input.inputArtifactDetails, context),
        }),
        ...(input.outputArtifactDetails !== undefined &&
            input.outputArtifactDetails !== null && {
            outputArtifactDetails: serializeAws_json1_1ArtifactDetails(input.outputArtifactDetails, context),
        }),
        ...(input.provider !== undefined && input.provider !== null && { provider: input.provider }),
        ...(input.settings !== undefined &&
            input.settings !== null && { settings: serializeAws_json1_1ActionTypeSettings(input.settings, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_1CreatePipelineInput = (input, context) => {
    return {
        ...(input.pipeline !== undefined &&
            input.pipeline !== null && { pipeline: serializeAws_json1_1PipelineDeclaration(input.pipeline, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CurrentRevision = (input, context) => {
    return {
        ...(input.changeIdentifier !== undefined &&
            input.changeIdentifier !== null && { changeIdentifier: input.changeIdentifier }),
        ...(input.created !== undefined &&
            input.created !== null && { created: Math.round(input.created.getTime() / 1000) }),
        ...(input.revision !== undefined && input.revision !== null && { revision: input.revision }),
        ...(input.revisionSummary !== undefined &&
            input.revisionSummary !== null && { revisionSummary: input.revisionSummary }),
    };
};
const serializeAws_json1_1DeleteCustomActionTypeInput = (input, context) => {
    return {
        ...(input.category !== undefined && input.category !== null && { category: input.category }),
        ...(input.provider !== undefined && input.provider !== null && { provider: input.provider }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_1DeletePipelineInput = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1DeleteWebhookInput = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1DeregisterWebhookWithThirdPartyInput = (input, context) => {
    return {
        ...(input.webhookName !== undefined && input.webhookName !== null && { webhookName: input.webhookName }),
    };
};
const serializeAws_json1_1DisableStageTransitionInput = (input, context) => {
    return {
        ...(input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }),
        ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
        ...(input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }),
        ...(input.transitionType !== undefined &&
            input.transitionType !== null && { transitionType: input.transitionType }),
    };
};
const serializeAws_json1_1EnableStageTransitionInput = (input, context) => {
    return {
        ...(input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }),
        ...(input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }),
        ...(input.transitionType !== undefined &&
            input.transitionType !== null && { transitionType: input.transitionType }),
    };
};
const serializeAws_json1_1EncryptionKey = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ExecutionDetails = (input, context) => {
    return {
        ...(input.externalExecutionId !== undefined &&
            input.externalExecutionId !== null && { externalExecutionId: input.externalExecutionId }),
        ...(input.percentComplete !== undefined &&
            input.percentComplete !== null && { percentComplete: input.percentComplete }),
        ...(input.summary !== undefined && input.summary !== null && { summary: input.summary }),
    };
};
const serializeAws_json1_1ExecutorConfiguration = (input, context) => {
    return {
        ...(input.jobWorkerExecutorConfiguration !== undefined &&
            input.jobWorkerExecutorConfiguration !== null && {
            jobWorkerExecutorConfiguration: serializeAws_json1_1JobWorkerExecutorConfiguration(input.jobWorkerExecutorConfiguration, context),
        }),
        ...(input.lambdaExecutorConfiguration !== undefined &&
            input.lambdaExecutorConfiguration !== null && {
            lambdaExecutorConfiguration: serializeAws_json1_1LambdaExecutorConfiguration(input.lambdaExecutorConfiguration, context),
        }),
    };
};
const serializeAws_json1_1FailureDetails = (input, context) => {
    return {
        ...(input.externalExecutionId !== undefined &&
            input.externalExecutionId !== null && { externalExecutionId: input.externalExecutionId }),
        ...(input.message !== undefined && input.message !== null && { message: input.message }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1GetActionTypeInput = (input, context) => {
    return {
        ...(input.category !== undefined && input.category !== null && { category: input.category }),
        ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
        ...(input.provider !== undefined && input.provider !== null && { provider: input.provider }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_1GetJobDetailsInput = (input, context) => {
    return {
        ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    };
};
const serializeAws_json1_1GetPipelineExecutionInput = (input, context) => {
    return {
        ...(input.pipelineExecutionId !== undefined &&
            input.pipelineExecutionId !== null && { pipelineExecutionId: input.pipelineExecutionId }),
        ...(input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }),
    };
};
const serializeAws_json1_1GetPipelineInput = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_1GetPipelineStateInput = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1GetThirdPartyJobDetailsInput = (input, context) => {
    return {
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    };
};
const serializeAws_json1_1InputArtifact = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1InputArtifactList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InputArtifact(entry, context);
    });
};
const serializeAws_json1_1JobWorkerExecutorConfiguration = (input, context) => {
    return {
        ...(input.pollingAccounts !== undefined &&
            input.pollingAccounts !== null && {
            pollingAccounts: serializeAws_json1_1PollingAccountList(input.pollingAccounts, context),
        }),
        ...(input.pollingServicePrincipals !== undefined &&
            input.pollingServicePrincipals !== null && {
            pollingServicePrincipals: serializeAws_json1_1PollingServicePrincipalList(input.pollingServicePrincipals, context),
        }),
    };
};
const serializeAws_json1_1LambdaExecutorConfiguration = (input, context) => {
    return {
        ...(input.lambdaFunctionArn !== undefined &&
            input.lambdaFunctionArn !== null && { lambdaFunctionArn: input.lambdaFunctionArn }),
    };
};
const serializeAws_json1_1ListActionExecutionsInput = (input, context) => {
    return {
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1ActionExecutionFilter(input.filter, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }),
    };
};
const serializeAws_json1_1ListActionTypesInput = (input, context) => {
    return {
        ...(input.actionOwnerFilter !== undefined &&
            input.actionOwnerFilter !== null && { actionOwnerFilter: input.actionOwnerFilter }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.regionFilter !== undefined && input.regionFilter !== null && { regionFilter: input.regionFilter }),
    };
};
const serializeAws_json1_1ListPipelineExecutionsInput = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }),
    };
};
const serializeAws_json1_1ListPipelinesInput = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_1ListWebhooksInput = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1OutputArtifact = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1OutputArtifactList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OutputArtifact(entry, context);
    });
};
const serializeAws_json1_1OutputVariablesMap = (input, context) => {
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
const serializeAws_json1_1PipelineDeclaration = (input, context) => {
    return {
        ...(input.artifactStore !== undefined &&
            input.artifactStore !== null && {
            artifactStore: serializeAws_json1_1ArtifactStore(input.artifactStore, context),
        }),
        ...(input.artifactStores !== undefined &&
            input.artifactStores !== null && {
            artifactStores: serializeAws_json1_1ArtifactStoreMap(input.artifactStores, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.stages !== undefined &&
            input.stages !== null && { stages: serializeAws_json1_1PipelineStageDeclarationList(input.stages, context) }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_1PipelineStageDeclarationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1StageDeclaration(entry, context);
    });
};
const serializeAws_json1_1PollForJobsInput = (input, context) => {
    return {
        ...(input.actionTypeId !== undefined &&
            input.actionTypeId !== null && { actionTypeId: serializeAws_json1_1ActionTypeId(input.actionTypeId, context) }),
        ...(input.maxBatchSize !== undefined && input.maxBatchSize !== null && { maxBatchSize: input.maxBatchSize }),
        ...(input.queryParam !== undefined &&
            input.queryParam !== null && { queryParam: serializeAws_json1_1QueryParamMap(input.queryParam, context) }),
    };
};
const serializeAws_json1_1PollForThirdPartyJobsInput = (input, context) => {
    return {
        ...(input.actionTypeId !== undefined &&
            input.actionTypeId !== null && { actionTypeId: serializeAws_json1_1ActionTypeId(input.actionTypeId, context) }),
        ...(input.maxBatchSize !== undefined && input.maxBatchSize !== null && { maxBatchSize: input.maxBatchSize }),
    };
};
const serializeAws_json1_1PollingAccountList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PollingServicePrincipalList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PutActionRevisionInput = (input, context) => {
    return {
        ...(input.actionName !== undefined && input.actionName !== null && { actionName: input.actionName }),
        ...(input.actionRevision !== undefined &&
            input.actionRevision !== null && {
            actionRevision: serializeAws_json1_1ActionRevision(input.actionRevision, context),
        }),
        ...(input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }),
        ...(input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }),
    };
};
const serializeAws_json1_1PutApprovalResultInput = (input, context) => {
    return {
        ...(input.actionName !== undefined && input.actionName !== null && { actionName: input.actionName }),
        ...(input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }),
        ...(input.result !== undefined &&
            input.result !== null && { result: serializeAws_json1_1ApprovalResult(input.result, context) }),
        ...(input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }),
        ...(input.token !== undefined && input.token !== null && { token: input.token }),
    };
};
const serializeAws_json1_1PutJobFailureResultInput = (input, context) => {
    return {
        ...(input.failureDetails !== undefined &&
            input.failureDetails !== null && {
            failureDetails: serializeAws_json1_1FailureDetails(input.failureDetails, context),
        }),
        ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    };
};
const serializeAws_json1_1PutJobSuccessResultInput = (input, context) => {
    return {
        ...(input.continuationToken !== undefined &&
            input.continuationToken !== null && { continuationToken: input.continuationToken }),
        ...(input.currentRevision !== undefined &&
            input.currentRevision !== null && {
            currentRevision: serializeAws_json1_1CurrentRevision(input.currentRevision, context),
        }),
        ...(input.executionDetails !== undefined &&
            input.executionDetails !== null && {
            executionDetails: serializeAws_json1_1ExecutionDetails(input.executionDetails, context),
        }),
        ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
        ...(input.outputVariables !== undefined &&
            input.outputVariables !== null && {
            outputVariables: serializeAws_json1_1OutputVariablesMap(input.outputVariables, context),
        }),
    };
};
const serializeAws_json1_1PutThirdPartyJobFailureResultInput = (input, context) => {
    return {
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.failureDetails !== undefined &&
            input.failureDetails !== null && {
            failureDetails: serializeAws_json1_1FailureDetails(input.failureDetails, context),
        }),
        ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    };
};
const serializeAws_json1_1PutThirdPartyJobSuccessResultInput = (input, context) => {
    return {
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.continuationToken !== undefined &&
            input.continuationToken !== null && { continuationToken: input.continuationToken }),
        ...(input.currentRevision !== undefined &&
            input.currentRevision !== null && {
            currentRevision: serializeAws_json1_1CurrentRevision(input.currentRevision, context),
        }),
        ...(input.executionDetails !== undefined &&
            input.executionDetails !== null && {
            executionDetails: serializeAws_json1_1ExecutionDetails(input.executionDetails, context),
        }),
        ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    };
};
const serializeAws_json1_1PutWebhookInput = (input, context) => {
    return {
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.webhook !== undefined &&
            input.webhook !== null && { webhook: serializeAws_json1_1WebhookDefinition(input.webhook, context) }),
    };
};
const serializeAws_json1_1QueryParamMap = (input, context) => {
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
const serializeAws_json1_1RegisterWebhookWithThirdPartyInput = (input, context) => {
    return {
        ...(input.webhookName !== undefined && input.webhookName !== null && { webhookName: input.webhookName }),
    };
};
const serializeAws_json1_1RetryStageExecutionInput = (input, context) => {
    return {
        ...(input.pipelineExecutionId !== undefined &&
            input.pipelineExecutionId !== null && { pipelineExecutionId: input.pipelineExecutionId }),
        ...(input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }),
        ...(input.retryMode !== undefined && input.retryMode !== null && { retryMode: input.retryMode }),
        ...(input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }),
    };
};
const serializeAws_json1_1StageActionDeclarationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ActionDeclaration(entry, context);
    });
};
const serializeAws_json1_1StageBlockerDeclarationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1BlockerDeclaration(entry, context);
    });
};
const serializeAws_json1_1StageDeclaration = (input, context) => {
    return {
        ...(input.actions !== undefined &&
            input.actions !== null && { actions: serializeAws_json1_1StageActionDeclarationList(input.actions, context) }),
        ...(input.blockers !== undefined &&
            input.blockers !== null && {
            blockers: serializeAws_json1_1StageBlockerDeclarationList(input.blockers, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1StartPipelineExecutionInput = (input, context) => {
    var _a;
    return {
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1StopPipelineExecutionInput = (input, context) => {
    return {
        ...(input.abandon !== undefined && input.abandon !== null && { abandon: input.abandon }),
        ...(input.pipelineExecutionId !== undefined &&
            input.pipelineExecutionId !== null && { pipelineExecutionId: input.pipelineExecutionId }),
        ...(input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }),
        ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
    };
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
const serializeAws_json1_1TagResourceInput = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateActionTypeInput = (input, context) => {
    return {
        ...(input.actionType !== undefined &&
            input.actionType !== null && {
            actionType: serializeAws_json1_1ActionTypeDeclaration(input.actionType, context),
        }),
    };
};
const serializeAws_json1_1UpdatePipelineInput = (input, context) => {
    return {
        ...(input.pipeline !== undefined &&
            input.pipeline !== null && { pipeline: serializeAws_json1_1PipelineDeclaration(input.pipeline, context) }),
    };
};
const serializeAws_json1_1WebhookAuthConfiguration = (input, context) => {
    return {
        ...(input.AllowedIPRange !== undefined &&
            input.AllowedIPRange !== null && { AllowedIPRange: input.AllowedIPRange }),
        ...(input.SecretToken !== undefined && input.SecretToken !== null && { SecretToken: input.SecretToken }),
    };
};
const serializeAws_json1_1WebhookDefinition = (input, context) => {
    return {
        ...(input.authentication !== undefined &&
            input.authentication !== null && { authentication: input.authentication }),
        ...(input.authenticationConfiguration !== undefined &&
            input.authenticationConfiguration !== null && {
            authenticationConfiguration: serializeAws_json1_1WebhookAuthConfiguration(input.authenticationConfiguration, context),
        }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_1WebhookFilters(input.filters, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.targetAction !== undefined && input.targetAction !== null && { targetAction: input.targetAction }),
        ...(input.targetPipeline !== undefined &&
            input.targetPipeline !== null && { targetPipeline: input.targetPipeline }),
    };
};
const serializeAws_json1_1WebhookFilterRule = (input, context) => {
    return {
        ...(input.jsonPath !== undefined && input.jsonPath !== null && { jsonPath: input.jsonPath }),
        ...(input.matchEquals !== undefined && input.matchEquals !== null && { matchEquals: input.matchEquals }),
    };
};
const serializeAws_json1_1WebhookFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1WebhookFilterRule(entry, context);
    });
};
const deserializeAws_json1_1AcknowledgeJobOutput = (output, context) => {
    return {
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1AcknowledgeThirdPartyJobOutput = (output, context) => {
    return {
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1ActionConfiguration = (output, context) => {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_1ActionConfigurationMap(output.configuration, context)
            : undefined,
    };
};
const deserializeAws_json1_1ActionConfigurationMap = (output, context) => {
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
const deserializeAws_json1_1ActionConfigurationProperty = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        queryable: output.queryable !== undefined && output.queryable !== null ? output.queryable : undefined,
        required: output.required !== undefined && output.required !== null ? output.required : undefined,
        secret: output.secret !== undefined && output.secret !== null ? output.secret : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1ActionConfigurationPropertyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActionConfigurationProperty(entry, context);
    });
};
const deserializeAws_json1_1ActionContext = (output, context) => {
    return {
        actionExecutionId: output.actionExecutionId !== undefined && output.actionExecutionId !== null
            ? output.actionExecutionId
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1ActionDeclaration = (output, context) => {
    return {
        actionTypeId: output.actionTypeId !== undefined && output.actionTypeId !== null
            ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context)
            : undefined,
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_1ActionConfigurationMap(output.configuration, context)
            : undefined,
        inputArtifacts: output.inputArtifacts !== undefined && output.inputArtifacts !== null
            ? deserializeAws_json1_1InputArtifactList(output.inputArtifacts, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
        outputArtifacts: output.outputArtifacts !== undefined && output.outputArtifacts !== null
            ? deserializeAws_json1_1OutputArtifactList(output.outputArtifacts, context)
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        runOrder: output.runOrder !== undefined && output.runOrder !== null ? output.runOrder : undefined,
    };
};
const deserializeAws_json1_1ActionExecution = (output, context) => {
    return {
        actionExecutionId: output.actionExecutionId !== undefined && output.actionExecutionId !== null
            ? output.actionExecutionId
            : undefined,
        errorDetails: output.errorDetails !== undefined && output.errorDetails !== null
            ? deserializeAws_json1_1ErrorDetails(output.errorDetails, context)
            : undefined,
        externalExecutionId: output.externalExecutionId !== undefined && output.externalExecutionId !== null
            ? output.externalExecutionId
            : undefined,
        externalExecutionUrl: output.externalExecutionUrl !== undefined && output.externalExecutionUrl !== null
            ? output.externalExecutionUrl
            : undefined,
        lastStatusChange: output.lastStatusChange !== undefined && output.lastStatusChange !== null
            ? new Date(Math.round(output.lastStatusChange * 1000))
            : undefined,
        lastUpdatedBy: output.lastUpdatedBy !== undefined && output.lastUpdatedBy !== null ? output.lastUpdatedBy : undefined,
        percentComplete: output.percentComplete !== undefined && output.percentComplete !== null ? output.percentComplete : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        summary: output.summary !== undefined && output.summary !== null ? output.summary : undefined,
        token: output.token !== undefined && output.token !== null ? output.token : undefined,
    };
};
const deserializeAws_json1_1ActionExecutionDetail = (output, context) => {
    return {
        actionExecutionId: output.actionExecutionId !== undefined && output.actionExecutionId !== null
            ? output.actionExecutionId
            : undefined,
        actionName: output.actionName !== undefined && output.actionName !== null ? output.actionName : undefined,
        input: output.input !== undefined && output.input !== null
            ? deserializeAws_json1_1ActionExecutionInput(output.input, context)
            : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        output: output.output !== undefined && output.output !== null
            ? deserializeAws_json1_1ActionExecutionOutput(output.output, context)
            : undefined,
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
        pipelineVersion: output.pipelineVersion !== undefined && output.pipelineVersion !== null ? output.pipelineVersion : undefined,
        stageName: output.stageName !== undefined && output.stageName !== null ? output.stageName : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1ActionExecutionDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActionExecutionDetail(entry, context);
    });
};
const deserializeAws_json1_1ActionExecutionInput = (output, context) => {
    return {
        actionTypeId: output.actionTypeId !== undefined && output.actionTypeId !== null
            ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context)
            : undefined,
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_1ActionConfigurationMap(output.configuration, context)
            : undefined,
        inputArtifacts: output.inputArtifacts !== undefined && output.inputArtifacts !== null
            ? deserializeAws_json1_1ArtifactDetailList(output.inputArtifacts, context)
            : undefined,
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        resolvedConfiguration: output.resolvedConfiguration !== undefined && output.resolvedConfiguration !== null
            ? deserializeAws_json1_1ResolvedActionConfigurationMap(output.resolvedConfiguration, context)
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
const deserializeAws_json1_1ActionExecutionOutput = (output, context) => {
    return {
        executionResult: output.executionResult !== undefined && output.executionResult !== null
            ? deserializeAws_json1_1ActionExecutionResult(output.executionResult, context)
            : undefined,
        outputArtifacts: output.outputArtifacts !== undefined && output.outputArtifacts !== null
            ? deserializeAws_json1_1ArtifactDetailList(output.outputArtifacts, context)
            : undefined,
        outputVariables: output.outputVariables !== undefined && output.outputVariables !== null
            ? deserializeAws_json1_1OutputVariablesMap(output.outputVariables, context)
            : undefined,
    };
};
const deserializeAws_json1_1ActionExecutionResult = (output, context) => {
    return {
        externalExecutionId: output.externalExecutionId !== undefined && output.externalExecutionId !== null
            ? output.externalExecutionId
            : undefined,
        externalExecutionSummary: output.externalExecutionSummary !== undefined && output.externalExecutionSummary !== null
            ? output.externalExecutionSummary
            : undefined,
        externalExecutionUrl: output.externalExecutionUrl !== undefined && output.externalExecutionUrl !== null
            ? output.externalExecutionUrl
            : undefined,
    };
};
const deserializeAws_json1_1ActionNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ActionRevision = (output, context) => {
    return {
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        revisionChangeId: output.revisionChangeId !== undefined && output.revisionChangeId !== null ? output.revisionChangeId : undefined,
        revisionId: output.revisionId !== undefined && output.revisionId !== null ? output.revisionId : undefined,
    };
};
const deserializeAws_json1_1ActionState = (output, context) => {
    return {
        actionName: output.actionName !== undefined && output.actionName !== null ? output.actionName : undefined,
        currentRevision: output.currentRevision !== undefined && output.currentRevision !== null
            ? deserializeAws_json1_1ActionRevision(output.currentRevision, context)
            : undefined,
        entityUrl: output.entityUrl !== undefined && output.entityUrl !== null ? output.entityUrl : undefined,
        latestExecution: output.latestExecution !== undefined && output.latestExecution !== null
            ? deserializeAws_json1_1ActionExecution(output.latestExecution, context)
            : undefined,
        revisionUrl: output.revisionUrl !== undefined && output.revisionUrl !== null ? output.revisionUrl : undefined,
    };
};
const deserializeAws_json1_1ActionStateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActionState(entry, context);
    });
};
const deserializeAws_json1_1ActionType = (output, context) => {
    return {
        actionConfigurationProperties: output.actionConfigurationProperties !== undefined && output.actionConfigurationProperties !== null
            ? deserializeAws_json1_1ActionConfigurationPropertyList(output.actionConfigurationProperties, context)
            : undefined,
        id: output.id !== undefined && output.id !== null
            ? deserializeAws_json1_1ActionTypeId(output.id, context)
            : undefined,
        inputArtifactDetails: output.inputArtifactDetails !== undefined && output.inputArtifactDetails !== null
            ? deserializeAws_json1_1ArtifactDetails(output.inputArtifactDetails, context)
            : undefined,
        outputArtifactDetails: output.outputArtifactDetails !== undefined && output.outputArtifactDetails !== null
            ? deserializeAws_json1_1ArtifactDetails(output.outputArtifactDetails, context)
            : undefined,
        settings: output.settings !== undefined && output.settings !== null
            ? deserializeAws_json1_1ActionTypeSettings(output.settings, context)
            : undefined,
    };
};
const deserializeAws_json1_1ActionTypeArtifactDetails = (output, context) => {
    return {
        maximumCount: output.maximumCount !== undefined && output.maximumCount !== null ? output.maximumCount : undefined,
        minimumCount: output.minimumCount !== undefined && output.minimumCount !== null ? output.minimumCount : undefined,
    };
};
const deserializeAws_json1_1ActionTypeDeclaration = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        executor: output.executor !== undefined && output.executor !== null
            ? deserializeAws_json1_1ActionTypeExecutor(output.executor, context)
            : undefined,
        id: output.id !== undefined && output.id !== null
            ? deserializeAws_json1_1ActionTypeIdentifier(output.id, context)
            : undefined,
        inputArtifactDetails: output.inputArtifactDetails !== undefined && output.inputArtifactDetails !== null
            ? deserializeAws_json1_1ActionTypeArtifactDetails(output.inputArtifactDetails, context)
            : undefined,
        outputArtifactDetails: output.outputArtifactDetails !== undefined && output.outputArtifactDetails !== null
            ? deserializeAws_json1_1ActionTypeArtifactDetails(output.outputArtifactDetails, context)
            : undefined,
        permissions: output.permissions !== undefined && output.permissions !== null
            ? deserializeAws_json1_1ActionTypePermissions(output.permissions, context)
            : undefined,
        properties: output.properties !== undefined && output.properties !== null
            ? deserializeAws_json1_1ActionTypeProperties(output.properties, context)
            : undefined,
        urls: output.urls !== undefined && output.urls !== null
            ? deserializeAws_json1_1ActionTypeUrls(output.urls, context)
            : undefined,
    };
};
const deserializeAws_json1_1ActionTypeExecutor = (output, context) => {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_1ExecutorConfiguration(output.configuration, context)
            : undefined,
        jobTimeout: output.jobTimeout !== undefined && output.jobTimeout !== null ? output.jobTimeout : undefined,
        policyStatementsTemplate: output.policyStatementsTemplate !== undefined && output.policyStatementsTemplate !== null
            ? output.policyStatementsTemplate
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1ActionTypeId = (output, context) => {
    return {
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        provider: output.provider !== undefined && output.provider !== null ? output.provider : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_json1_1ActionTypeIdentifier = (output, context) => {
    return {
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        provider: output.provider !== undefined && output.provider !== null ? output.provider : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_json1_1ActionTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActionType(entry, context);
    });
};
const deserializeAws_json1_1ActionTypeNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ActionTypePermissions = (output, context) => {
    return {
        allowedAccounts: output.allowedAccounts !== undefined && output.allowedAccounts !== null
            ? deserializeAws_json1_1AllowedAccounts(output.allowedAccounts, context)
            : undefined,
    };
};
const deserializeAws_json1_1ActionTypeProperties = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActionTypeProperty(entry, context);
    });
};
const deserializeAws_json1_1ActionTypeProperty = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        noEcho: output.noEcho !== undefined && output.noEcho !== null ? output.noEcho : undefined,
        optional: output.optional !== undefined && output.optional !== null ? output.optional : undefined,
        queryable: output.queryable !== undefined && output.queryable !== null ? output.queryable : undefined,
    };
};
const deserializeAws_json1_1ActionTypeSettings = (output, context) => {
    return {
        entityUrlTemplate: output.entityUrlTemplate !== undefined && output.entityUrlTemplate !== null
            ? output.entityUrlTemplate
            : undefined,
        executionUrlTemplate: output.executionUrlTemplate !== undefined && output.executionUrlTemplate !== null
            ? output.executionUrlTemplate
            : undefined,
        revisionUrlTemplate: output.revisionUrlTemplate !== undefined && output.revisionUrlTemplate !== null
            ? output.revisionUrlTemplate
            : undefined,
        thirdPartyConfigurationUrl: output.thirdPartyConfigurationUrl !== undefined && output.thirdPartyConfigurationUrl !== null
            ? output.thirdPartyConfigurationUrl
            : undefined,
    };
};
const deserializeAws_json1_1ActionTypeUrls = (output, context) => {
    return {
        configurationUrl: output.configurationUrl !== undefined && output.configurationUrl !== null ? output.configurationUrl : undefined,
        entityUrlTemplate: output.entityUrlTemplate !== undefined && output.entityUrlTemplate !== null
            ? output.entityUrlTemplate
            : undefined,
        executionUrlTemplate: output.executionUrlTemplate !== undefined && output.executionUrlTemplate !== null
            ? output.executionUrlTemplate
            : undefined,
        revisionUrlTemplate: output.revisionUrlTemplate !== undefined && output.revisionUrlTemplate !== null
            ? output.revisionUrlTemplate
            : undefined,
    };
};
const deserializeAws_json1_1AllowedAccounts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ApprovalAlreadyCompletedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Artifact = (output, context) => {
    return {
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ArtifactLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    };
};
const deserializeAws_json1_1ArtifactDetail = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        s3location: output.s3location !== undefined && output.s3location !== null
            ? deserializeAws_json1_1S3Location(output.s3location, context)
            : undefined,
    };
};
const deserializeAws_json1_1ArtifactDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ArtifactDetail(entry, context);
    });
};
const deserializeAws_json1_1ArtifactDetails = (output, context) => {
    return {
        maximumCount: output.maximumCount !== undefined && output.maximumCount !== null ? output.maximumCount : undefined,
        minimumCount: output.minimumCount !== undefined && output.minimumCount !== null ? output.minimumCount : undefined,
    };
};
const deserializeAws_json1_1ArtifactList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Artifact(entry, context);
    });
};
const deserializeAws_json1_1ArtifactLocation = (output, context) => {
    return {
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3ArtifactLocation(output.s3Location, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1ArtifactRevision = (output, context) => {
    return {
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        revisionChangeIdentifier: output.revisionChangeIdentifier !== undefined && output.revisionChangeIdentifier !== null
            ? output.revisionChangeIdentifier
            : undefined,
        revisionId: output.revisionId !== undefined && output.revisionId !== null ? output.revisionId : undefined,
        revisionSummary: output.revisionSummary !== undefined && output.revisionSummary !== null ? output.revisionSummary : undefined,
        revisionUrl: output.revisionUrl !== undefined && output.revisionUrl !== null ? output.revisionUrl : undefined,
    };
};
const deserializeAws_json1_1ArtifactRevisionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ArtifactRevision(entry, context);
    });
};
const deserializeAws_json1_1ArtifactStore = (output, context) => {
    return {
        encryptionKey: output.encryptionKey !== undefined && output.encryptionKey !== null
            ? deserializeAws_json1_1EncryptionKey(output.encryptionKey, context)
            : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1ArtifactStoreMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1ArtifactStore(value, context),
        };
    }, {});
};
const deserializeAws_json1_1AWSSessionCredentials = (output, context) => {
    return {
        accessKeyId: output.accessKeyId !== undefined && output.accessKeyId !== null ? output.accessKeyId : undefined,
        secretAccessKey: output.secretAccessKey !== undefined && output.secretAccessKey !== null ? output.secretAccessKey : undefined,
        sessionToken: output.sessionToken !== undefined && output.sessionToken !== null ? output.sessionToken : undefined,
    };
};
const deserializeAws_json1_1BlockerDeclaration = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CreateCustomActionTypeOutput = (output, context) => {
    return {
        actionType: output.actionType !== undefined && output.actionType !== null
            ? deserializeAws_json1_1ActionType(output.actionType, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreatePipelineOutput = (output, context) => {
    return {
        pipeline: output.pipeline !== undefined && output.pipeline !== null
            ? deserializeAws_json1_1PipelineDeclaration(output.pipeline, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteWebhookOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeregisterWebhookWithThirdPartyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DuplicatedStopRequestException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1EncryptionKey = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1ErrorDetails = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ExecutionTrigger = (output, context) => {
    return {
        triggerDetail: output.triggerDetail !== undefined && output.triggerDetail !== null ? output.triggerDetail : undefined,
        triggerType: output.triggerType !== undefined && output.triggerType !== null ? output.triggerType : undefined,
    };
};
const deserializeAws_json1_1ExecutorConfiguration = (output, context) => {
    return {
        jobWorkerExecutorConfiguration: output.jobWorkerExecutorConfiguration !== undefined && output.jobWorkerExecutorConfiguration !== null
            ? deserializeAws_json1_1JobWorkerExecutorConfiguration(output.jobWorkerExecutorConfiguration, context)
            : undefined,
        lambdaExecutorConfiguration: output.lambdaExecutorConfiguration !== undefined && output.lambdaExecutorConfiguration !== null
            ? deserializeAws_json1_1LambdaExecutorConfiguration(output.lambdaExecutorConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetActionTypeOutput = (output, context) => {
    return {
        actionType: output.actionType !== undefined && output.actionType !== null
            ? deserializeAws_json1_1ActionTypeDeclaration(output.actionType, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetJobDetailsOutput = (output, context) => {
    return {
        jobDetails: output.jobDetails !== undefined && output.jobDetails !== null
            ? deserializeAws_json1_1JobDetails(output.jobDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetPipelineExecutionOutput = (output, context) => {
    return {
        pipelineExecution: output.pipelineExecution !== undefined && output.pipelineExecution !== null
            ? deserializeAws_json1_1PipelineExecution(output.pipelineExecution, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetPipelineOutput = (output, context) => {
    return {
        metadata: output.metadata !== undefined && output.metadata !== null
            ? deserializeAws_json1_1PipelineMetadata(output.metadata, context)
            : undefined,
        pipeline: output.pipeline !== undefined && output.pipeline !== null
            ? deserializeAws_json1_1PipelineDeclaration(output.pipeline, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetPipelineStateOutput = (output, context) => {
    return {
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        pipelineName: output.pipelineName !== undefined && output.pipelineName !== null ? output.pipelineName : undefined,
        pipelineVersion: output.pipelineVersion !== undefined && output.pipelineVersion !== null ? output.pipelineVersion : undefined,
        stageStates: output.stageStates !== undefined && output.stageStates !== null
            ? deserializeAws_json1_1StageStateList(output.stageStates, context)
            : undefined,
        updated: output.updated !== undefined && output.updated !== null ? new Date(Math.round(output.updated * 1000)) : undefined,
    };
};
const deserializeAws_json1_1GetThirdPartyJobDetailsOutput = (output, context) => {
    return {
        jobDetails: output.jobDetails !== undefined && output.jobDetails !== null
            ? deserializeAws_json1_1ThirdPartyJobDetails(output.jobDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1InputArtifact = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1InputArtifactList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InputArtifact(entry, context);
    });
};
const deserializeAws_json1_1InvalidActionDeclarationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidApprovalTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidArnException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidBlockerDeclarationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidClientTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidJobException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidJobStateException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidNonceException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidStageDeclarationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidStructureException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTagsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidWebhookAuthenticationParametersException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidWebhookFilterPatternException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Job = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        data: output.data !== undefined && output.data !== null
            ? deserializeAws_json1_1JobData(output.data, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        nonce: output.nonce !== undefined && output.nonce !== null ? output.nonce : undefined,
    };
};
const deserializeAws_json1_1JobData = (output, context) => {
    return {
        actionConfiguration: output.actionConfiguration !== undefined && output.actionConfiguration !== null
            ? deserializeAws_json1_1ActionConfiguration(output.actionConfiguration, context)
            : undefined,
        actionTypeId: output.actionTypeId !== undefined && output.actionTypeId !== null
            ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context)
            : undefined,
        artifactCredentials: output.artifactCredentials !== undefined && output.artifactCredentials !== null
            ? deserializeAws_json1_1AWSSessionCredentials(output.artifactCredentials, context)
            : undefined,
        continuationToken: output.continuationToken !== undefined && output.continuationToken !== null
            ? output.continuationToken
            : undefined,
        encryptionKey: output.encryptionKey !== undefined && output.encryptionKey !== null
            ? deserializeAws_json1_1EncryptionKey(output.encryptionKey, context)
            : undefined,
        inputArtifacts: output.inputArtifacts !== undefined && output.inputArtifacts !== null
            ? deserializeAws_json1_1ArtifactList(output.inputArtifacts, context)
            : undefined,
        outputArtifacts: output.outputArtifacts !== undefined && output.outputArtifacts !== null
            ? deserializeAws_json1_1ArtifactList(output.outputArtifacts, context)
            : undefined,
        pipelineContext: output.pipelineContext !== undefined && output.pipelineContext !== null
            ? deserializeAws_json1_1PipelineContext(output.pipelineContext, context)
            : undefined,
    };
};
const deserializeAws_json1_1JobDetails = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        data: output.data !== undefined && output.data !== null
            ? deserializeAws_json1_1JobData(output.data, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
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
const deserializeAws_json1_1JobNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1JobWorkerExecutorConfiguration = (output, context) => {
    return {
        pollingAccounts: output.pollingAccounts !== undefined && output.pollingAccounts !== null
            ? deserializeAws_json1_1PollingAccountList(output.pollingAccounts, context)
            : undefined,
        pollingServicePrincipals: output.pollingServicePrincipals !== undefined && output.pollingServicePrincipals !== null
            ? deserializeAws_json1_1PollingServicePrincipalList(output.pollingServicePrincipals, context)
            : undefined,
    };
};
const deserializeAws_json1_1LambdaExecutorConfiguration = (output, context) => {
    return {
        lambdaFunctionArn: output.lambdaFunctionArn !== undefined && output.lambdaFunctionArn !== null
            ? output.lambdaFunctionArn
            : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListActionExecutionsOutput = (output, context) => {
    return {
        actionExecutionDetails: output.actionExecutionDetails !== undefined && output.actionExecutionDetails !== null
            ? deserializeAws_json1_1ActionExecutionDetailList(output.actionExecutionDetails, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListActionTypesOutput = (output, context) => {
    return {
        actionTypes: output.actionTypes !== undefined && output.actionTypes !== null
            ? deserializeAws_json1_1ActionTypeList(output.actionTypes, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListPipelineExecutionsOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        pipelineExecutionSummaries: output.pipelineExecutionSummaries !== undefined && output.pipelineExecutionSummaries !== null
            ? deserializeAws_json1_1PipelineExecutionSummaryList(output.pipelineExecutionSummaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListPipelinesOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        pipelines: output.pipelines !== undefined && output.pipelines !== null
            ? deserializeAws_json1_1PipelineList(output.pipelines, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListWebhookItem = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        definition: output.definition !== undefined && output.definition !== null
            ? deserializeAws_json1_1WebhookDefinition(output.definition, context)
            : undefined,
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        lastTriggered: output.lastTriggered !== undefined && output.lastTriggered !== null
            ? new Date(Math.round(output.lastTriggered * 1000))
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_json1_1ListWebhooksOutput = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        webhooks: output.webhooks !== undefined && output.webhooks !== null
            ? deserializeAws_json1_1WebhookList(output.webhooks, context)
            : undefined,
    };
};
const deserializeAws_json1_1NotLatestPipelineExecutionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1OutputArtifact = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1OutputArtifactList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OutputArtifact(entry, context);
    });
};
const deserializeAws_json1_1OutputVariablesMap = (output, context) => {
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
const deserializeAws_json1_1OutputVariablesSizeExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PipelineContext = (output, context) => {
    return {
        action: output.action !== undefined && output.action !== null
            ? deserializeAws_json1_1ActionContext(output.action, context)
            : undefined,
        pipelineArn: output.pipelineArn !== undefined && output.pipelineArn !== null ? output.pipelineArn : undefined,
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
        pipelineName: output.pipelineName !== undefined && output.pipelineName !== null ? output.pipelineName : undefined,
        stage: output.stage !== undefined && output.stage !== null
            ? deserializeAws_json1_1StageContext(output.stage, context)
            : undefined,
    };
};
const deserializeAws_json1_1PipelineDeclaration = (output, context) => {
    return {
        artifactStore: output.artifactStore !== undefined && output.artifactStore !== null
            ? deserializeAws_json1_1ArtifactStore(output.artifactStore, context)
            : undefined,
        artifactStores: output.artifactStores !== undefined && output.artifactStores !== null
            ? deserializeAws_json1_1ArtifactStoreMap(output.artifactStores, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        stages: output.stages !== undefined && output.stages !== null
            ? deserializeAws_json1_1PipelineStageDeclarationList(output.stages, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_json1_1PipelineExecution = (output, context) => {
    return {
        artifactRevisions: output.artifactRevisions !== undefined && output.artifactRevisions !== null
            ? deserializeAws_json1_1ArtifactRevisionList(output.artifactRevisions, context)
            : undefined,
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
        pipelineName: output.pipelineName !== undefined && output.pipelineName !== null ? output.pipelineName : undefined,
        pipelineVersion: output.pipelineVersion !== undefined && output.pipelineVersion !== null ? output.pipelineVersion : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusSummary: output.statusSummary !== undefined && output.statusSummary !== null ? output.statusSummary : undefined,
    };
};
const deserializeAws_json1_1PipelineExecutionNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PipelineExecutionNotStoppableException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PipelineExecutionSummary = (output, context) => {
    return {
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
        sourceRevisions: output.sourceRevisions !== undefined && output.sourceRevisions !== null
            ? deserializeAws_json1_1SourceRevisionList(output.sourceRevisions, context)
            : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopTrigger: output.stopTrigger !== undefined && output.stopTrigger !== null
            ? deserializeAws_json1_1StopExecutionTrigger(output.stopTrigger, context)
            : undefined,
        trigger: output.trigger !== undefined && output.trigger !== null
            ? deserializeAws_json1_1ExecutionTrigger(output.trigger, context)
            : undefined,
    };
};
const deserializeAws_json1_1PipelineExecutionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PipelineExecutionSummary(entry, context);
    });
};
const deserializeAws_json1_1PipelineList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PipelineSummary(entry, context);
    });
};
const deserializeAws_json1_1PipelineMetadata = (output, context) => {
    return {
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        pipelineArn: output.pipelineArn !== undefined && output.pipelineArn !== null ? output.pipelineArn : undefined,
        updated: output.updated !== undefined && output.updated !== null ? new Date(Math.round(output.updated * 1000)) : undefined,
    };
};
const deserializeAws_json1_1PipelineNameInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PipelineNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PipelineStageDeclarationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StageDeclaration(entry, context);
    });
};
const deserializeAws_json1_1PipelineSummary = (output, context) => {
    return {
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        updated: output.updated !== undefined && output.updated !== null ? new Date(Math.round(output.updated * 1000)) : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_json1_1PipelineVersionNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PollForJobsOutput = (output, context) => {
    return {
        jobs: output.jobs !== undefined && output.jobs !== null
            ? deserializeAws_json1_1JobList(output.jobs, context)
            : undefined,
    };
};
const deserializeAws_json1_1PollForThirdPartyJobsOutput = (output, context) => {
    return {
        jobs: output.jobs !== undefined && output.jobs !== null
            ? deserializeAws_json1_1ThirdPartyJobList(output.jobs, context)
            : undefined,
    };
};
const deserializeAws_json1_1PollingAccountList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PollingServicePrincipalList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PutActionRevisionOutput = (output, context) => {
    return {
        newRevision: output.newRevision !== undefined && output.newRevision !== null ? output.newRevision : undefined,
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
    };
};
const deserializeAws_json1_1PutApprovalResultOutput = (output, context) => {
    return {
        approvedAt: output.approvedAt !== undefined && output.approvedAt !== null
            ? new Date(Math.round(output.approvedAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1PutWebhookOutput = (output, context) => {
    return {
        webhook: output.webhook !== undefined && output.webhook !== null
            ? deserializeAws_json1_1ListWebhookItem(output.webhook, context)
            : undefined,
    };
};
const deserializeAws_json1_1RegisterWebhookWithThirdPartyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1RequestFailedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResolvedActionConfigurationMap = (output, context) => {
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
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RetryStageExecutionOutput = (output, context) => {
    return {
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
    };
};
const deserializeAws_json1_1S3ArtifactLocation = (output, context) => {
    return {
        bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        objectKey: output.objectKey !== undefined && output.objectKey !== null ? output.objectKey : undefined,
    };
};
const deserializeAws_json1_1S3Location = (output, context) => {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
    };
};
const deserializeAws_json1_1SourceRevision = (output, context) => {
    return {
        actionName: output.actionName !== undefined && output.actionName !== null ? output.actionName : undefined,
        revisionId: output.revisionId !== undefined && output.revisionId !== null ? output.revisionId : undefined,
        revisionSummary: output.revisionSummary !== undefined && output.revisionSummary !== null ? output.revisionSummary : undefined,
        revisionUrl: output.revisionUrl !== undefined && output.revisionUrl !== null ? output.revisionUrl : undefined,
    };
};
const deserializeAws_json1_1SourceRevisionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SourceRevision(entry, context);
    });
};
const deserializeAws_json1_1StageActionDeclarationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActionDeclaration(entry, context);
    });
};
const deserializeAws_json1_1StageBlockerDeclarationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BlockerDeclaration(entry, context);
    });
};
const deserializeAws_json1_1StageContext = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1StageDeclaration = (output, context) => {
    return {
        actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_json1_1StageActionDeclarationList(output.actions, context)
            : undefined,
        blockers: output.blockers !== undefined && output.blockers !== null
            ? deserializeAws_json1_1StageBlockerDeclarationList(output.blockers, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1StageExecution = (output, context) => {
    return {
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1StageNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1StageNotRetryableException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1StageState = (output, context) => {
    return {
        actionStates: output.actionStates !== undefined && output.actionStates !== null
            ? deserializeAws_json1_1ActionStateList(output.actionStates, context)
            : undefined,
        inboundExecution: output.inboundExecution !== undefined && output.inboundExecution !== null
            ? deserializeAws_json1_1StageExecution(output.inboundExecution, context)
            : undefined,
        inboundTransitionState: output.inboundTransitionState !== undefined && output.inboundTransitionState !== null
            ? deserializeAws_json1_1TransitionState(output.inboundTransitionState, context)
            : undefined,
        latestExecution: output.latestExecution !== undefined && output.latestExecution !== null
            ? deserializeAws_json1_1StageExecution(output.latestExecution, context)
            : undefined,
        stageName: output.stageName !== undefined && output.stageName !== null ? output.stageName : undefined,
    };
};
const deserializeAws_json1_1StageStateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StageState(entry, context);
    });
};
const deserializeAws_json1_1StartPipelineExecutionOutput = (output, context) => {
    return {
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
    };
};
const deserializeAws_json1_1StopExecutionTrigger = (output, context) => {
    return {
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
const deserializeAws_json1_1StopPipelineExecutionOutput = (output, context) => {
    return {
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
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
const deserializeAws_json1_1TagResourceOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1ThirdPartyJob = (output, context) => {
    return {
        clientId: output.clientId !== undefined && output.clientId !== null ? output.clientId : undefined,
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    };
};
const deserializeAws_json1_1ThirdPartyJobData = (output, context) => {
    return {
        actionConfiguration: output.actionConfiguration !== undefined && output.actionConfiguration !== null
            ? deserializeAws_json1_1ActionConfiguration(output.actionConfiguration, context)
            : undefined,
        actionTypeId: output.actionTypeId !== undefined && output.actionTypeId !== null
            ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context)
            : undefined,
        artifactCredentials: output.artifactCredentials !== undefined && output.artifactCredentials !== null
            ? deserializeAws_json1_1AWSSessionCredentials(output.artifactCredentials, context)
            : undefined,
        continuationToken: output.continuationToken !== undefined && output.continuationToken !== null
            ? output.continuationToken
            : undefined,
        encryptionKey: output.encryptionKey !== undefined && output.encryptionKey !== null
            ? deserializeAws_json1_1EncryptionKey(output.encryptionKey, context)
            : undefined,
        inputArtifacts: output.inputArtifacts !== undefined && output.inputArtifacts !== null
            ? deserializeAws_json1_1ArtifactList(output.inputArtifacts, context)
            : undefined,
        outputArtifacts: output.outputArtifacts !== undefined && output.outputArtifacts !== null
            ? deserializeAws_json1_1ArtifactList(output.outputArtifacts, context)
            : undefined,
        pipelineContext: output.pipelineContext !== undefined && output.pipelineContext !== null
            ? deserializeAws_json1_1PipelineContext(output.pipelineContext, context)
            : undefined,
    };
};
const deserializeAws_json1_1ThirdPartyJobDetails = (output, context) => {
    return {
        data: output.data !== undefined && output.data !== null
            ? deserializeAws_json1_1ThirdPartyJobData(output.data, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        nonce: output.nonce !== undefined && output.nonce !== null ? output.nonce : undefined,
    };
};
const deserializeAws_json1_1ThirdPartyJobList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ThirdPartyJob(entry, context);
    });
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TransitionState = (output, context) => {
    return {
        disabledReason: output.disabledReason !== undefined && output.disabledReason !== null ? output.disabledReason : undefined,
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        lastChangedAt: output.lastChangedAt !== undefined && output.lastChangedAt !== null
            ? new Date(Math.round(output.lastChangedAt * 1000))
            : undefined,
        lastChangedBy: output.lastChangedBy !== undefined && output.lastChangedBy !== null ? output.lastChangedBy : undefined,
    };
};
const deserializeAws_json1_1UntagResourceOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdatePipelineOutput = (output, context) => {
    return {
        pipeline: output.pipeline !== undefined && output.pipeline !== null
            ? deserializeAws_json1_1PipelineDeclaration(output.pipeline, context)
            : undefined,
    };
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WebhookAuthConfiguration = (output, context) => {
    return {
        AllowedIPRange: output.AllowedIPRange !== undefined && output.AllowedIPRange !== null ? output.AllowedIPRange : undefined,
        SecretToken: output.SecretToken !== undefined && output.SecretToken !== null ? output.SecretToken : undefined,
    };
};
const deserializeAws_json1_1WebhookDefinition = (output, context) => {
    return {
        authentication: output.authentication !== undefined && output.authentication !== null ? output.authentication : undefined,
        authenticationConfiguration: output.authenticationConfiguration !== undefined && output.authenticationConfiguration !== null
            ? deserializeAws_json1_1WebhookAuthConfiguration(output.authenticationConfiguration, context)
            : undefined,
        filters: output.filters !== undefined && output.filters !== null
            ? deserializeAws_json1_1WebhookFilters(output.filters, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        targetAction: output.targetAction !== undefined && output.targetAction !== null ? output.targetAction : undefined,
        targetPipeline: output.targetPipeline !== undefined && output.targetPipeline !== null ? output.targetPipeline : undefined,
    };
};
const deserializeAws_json1_1WebhookFilterRule = (output, context) => {
    return {
        jsonPath: output.jsonPath !== undefined && output.jsonPath !== null ? output.jsonPath : undefined,
        matchEquals: output.matchEquals !== undefined && output.matchEquals !== null ? output.matchEquals : undefined,
    };
};
const deserializeAws_json1_1WebhookFilters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WebhookFilterRule(entry, context);
    });
};
const deserializeAws_json1_1WebhookList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ListWebhookItem(entry, context);
    });
};
const deserializeAws_json1_1WebhookNotFoundException = (output, context) => {
    return {};
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