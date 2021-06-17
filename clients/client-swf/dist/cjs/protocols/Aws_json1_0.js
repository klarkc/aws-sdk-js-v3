"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_0ListActivityTypesCommand = exports.deserializeAws_json1_0GetWorkflowExecutionHistoryCommand = exports.deserializeAws_json1_0DescribeWorkflowTypeCommand = exports.deserializeAws_json1_0DescribeWorkflowExecutionCommand = exports.deserializeAws_json1_0DescribeDomainCommand = exports.deserializeAws_json1_0DescribeActivityTypeCommand = exports.deserializeAws_json1_0DeprecateWorkflowTypeCommand = exports.deserializeAws_json1_0DeprecateDomainCommand = exports.deserializeAws_json1_0DeprecateActivityTypeCommand = exports.deserializeAws_json1_0CountPendingDecisionTasksCommand = exports.deserializeAws_json1_0CountPendingActivityTasksCommand = exports.deserializeAws_json1_0CountOpenWorkflowExecutionsCommand = exports.deserializeAws_json1_0CountClosedWorkflowExecutionsCommand = exports.serializeAws_json1_0UntagResourceCommand = exports.serializeAws_json1_0UndeprecateWorkflowTypeCommand = exports.serializeAws_json1_0UndeprecateDomainCommand = exports.serializeAws_json1_0UndeprecateActivityTypeCommand = exports.serializeAws_json1_0TerminateWorkflowExecutionCommand = exports.serializeAws_json1_0TagResourceCommand = exports.serializeAws_json1_0StartWorkflowExecutionCommand = exports.serializeAws_json1_0SignalWorkflowExecutionCommand = exports.serializeAws_json1_0RespondDecisionTaskCompletedCommand = exports.serializeAws_json1_0RespondActivityTaskFailedCommand = exports.serializeAws_json1_0RespondActivityTaskCompletedCommand = exports.serializeAws_json1_0RespondActivityTaskCanceledCommand = exports.serializeAws_json1_0RequestCancelWorkflowExecutionCommand = exports.serializeAws_json1_0RegisterWorkflowTypeCommand = exports.serializeAws_json1_0RegisterDomainCommand = exports.serializeAws_json1_0RegisterActivityTypeCommand = exports.serializeAws_json1_0RecordActivityTaskHeartbeatCommand = exports.serializeAws_json1_0PollForDecisionTaskCommand = exports.serializeAws_json1_0PollForActivityTaskCommand = exports.serializeAws_json1_0ListWorkflowTypesCommand = exports.serializeAws_json1_0ListTagsForResourceCommand = exports.serializeAws_json1_0ListOpenWorkflowExecutionsCommand = exports.serializeAws_json1_0ListDomainsCommand = exports.serializeAws_json1_0ListClosedWorkflowExecutionsCommand = exports.serializeAws_json1_0ListActivityTypesCommand = exports.serializeAws_json1_0GetWorkflowExecutionHistoryCommand = exports.serializeAws_json1_0DescribeWorkflowTypeCommand = exports.serializeAws_json1_0DescribeWorkflowExecutionCommand = exports.serializeAws_json1_0DescribeDomainCommand = exports.serializeAws_json1_0DescribeActivityTypeCommand = exports.serializeAws_json1_0DeprecateWorkflowTypeCommand = exports.serializeAws_json1_0DeprecateDomainCommand = exports.serializeAws_json1_0DeprecateActivityTypeCommand = exports.serializeAws_json1_0CountPendingDecisionTasksCommand = exports.serializeAws_json1_0CountPendingActivityTasksCommand = exports.serializeAws_json1_0CountOpenWorkflowExecutionsCommand = exports.serializeAws_json1_0CountClosedWorkflowExecutionsCommand = void 0;
exports.deserializeAws_json1_0UntagResourceCommand = exports.deserializeAws_json1_0UndeprecateWorkflowTypeCommand = exports.deserializeAws_json1_0UndeprecateDomainCommand = exports.deserializeAws_json1_0UndeprecateActivityTypeCommand = exports.deserializeAws_json1_0TerminateWorkflowExecutionCommand = exports.deserializeAws_json1_0TagResourceCommand = exports.deserializeAws_json1_0StartWorkflowExecutionCommand = exports.deserializeAws_json1_0SignalWorkflowExecutionCommand = exports.deserializeAws_json1_0RespondDecisionTaskCompletedCommand = exports.deserializeAws_json1_0RespondActivityTaskFailedCommand = exports.deserializeAws_json1_0RespondActivityTaskCompletedCommand = exports.deserializeAws_json1_0RespondActivityTaskCanceledCommand = exports.deserializeAws_json1_0RequestCancelWorkflowExecutionCommand = exports.deserializeAws_json1_0RegisterWorkflowTypeCommand = exports.deserializeAws_json1_0RegisterDomainCommand = exports.deserializeAws_json1_0RegisterActivityTypeCommand = exports.deserializeAws_json1_0RecordActivityTaskHeartbeatCommand = exports.deserializeAws_json1_0PollForDecisionTaskCommand = exports.deserializeAws_json1_0PollForActivityTaskCommand = exports.deserializeAws_json1_0ListWorkflowTypesCommand = exports.deserializeAws_json1_0ListTagsForResourceCommand = exports.deserializeAws_json1_0ListOpenWorkflowExecutionsCommand = exports.deserializeAws_json1_0ListDomainsCommand = exports.deserializeAws_json1_0ListClosedWorkflowExecutionsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_0CountClosedWorkflowExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.CountClosedWorkflowExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CountClosedWorkflowExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CountClosedWorkflowExecutionsCommand = serializeAws_json1_0CountClosedWorkflowExecutionsCommand;
const serializeAws_json1_0CountOpenWorkflowExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.CountOpenWorkflowExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CountOpenWorkflowExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CountOpenWorkflowExecutionsCommand = serializeAws_json1_0CountOpenWorkflowExecutionsCommand;
const serializeAws_json1_0CountPendingActivityTasksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.CountPendingActivityTasks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CountPendingActivityTasksInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CountPendingActivityTasksCommand = serializeAws_json1_0CountPendingActivityTasksCommand;
const serializeAws_json1_0CountPendingDecisionTasksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.CountPendingDecisionTasks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CountPendingDecisionTasksInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CountPendingDecisionTasksCommand = serializeAws_json1_0CountPendingDecisionTasksCommand;
const serializeAws_json1_0DeprecateActivityTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.DeprecateActivityType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeprecateActivityTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeprecateActivityTypeCommand = serializeAws_json1_0DeprecateActivityTypeCommand;
const serializeAws_json1_0DeprecateDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.DeprecateDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeprecateDomainInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeprecateDomainCommand = serializeAws_json1_0DeprecateDomainCommand;
const serializeAws_json1_0DeprecateWorkflowTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.DeprecateWorkflowType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeprecateWorkflowTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeprecateWorkflowTypeCommand = serializeAws_json1_0DeprecateWorkflowTypeCommand;
const serializeAws_json1_0DescribeActivityTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.DescribeActivityType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeActivityTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeActivityTypeCommand = serializeAws_json1_0DescribeActivityTypeCommand;
const serializeAws_json1_0DescribeDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.DescribeDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeDomainInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeDomainCommand = serializeAws_json1_0DescribeDomainCommand;
const serializeAws_json1_0DescribeWorkflowExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.DescribeWorkflowExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeWorkflowExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeWorkflowExecutionCommand = serializeAws_json1_0DescribeWorkflowExecutionCommand;
const serializeAws_json1_0DescribeWorkflowTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.DescribeWorkflowType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeWorkflowTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeWorkflowTypeCommand = serializeAws_json1_0DescribeWorkflowTypeCommand;
const serializeAws_json1_0GetWorkflowExecutionHistoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.GetWorkflowExecutionHistory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetWorkflowExecutionHistoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetWorkflowExecutionHistoryCommand = serializeAws_json1_0GetWorkflowExecutionHistoryCommand;
const serializeAws_json1_0ListActivityTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.ListActivityTypes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListActivityTypesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListActivityTypesCommand = serializeAws_json1_0ListActivityTypesCommand;
const serializeAws_json1_0ListClosedWorkflowExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.ListClosedWorkflowExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListClosedWorkflowExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListClosedWorkflowExecutionsCommand = serializeAws_json1_0ListClosedWorkflowExecutionsCommand;
const serializeAws_json1_0ListDomainsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.ListDomains",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListDomainsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListDomainsCommand = serializeAws_json1_0ListDomainsCommand;
const serializeAws_json1_0ListOpenWorkflowExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.ListOpenWorkflowExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListOpenWorkflowExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListOpenWorkflowExecutionsCommand = serializeAws_json1_0ListOpenWorkflowExecutionsCommand;
const serializeAws_json1_0ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListTagsForResourceCommand = serializeAws_json1_0ListTagsForResourceCommand;
const serializeAws_json1_0ListWorkflowTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.ListWorkflowTypes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListWorkflowTypesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListWorkflowTypesCommand = serializeAws_json1_0ListWorkflowTypesCommand;
const serializeAws_json1_0PollForActivityTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.PollForActivityTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0PollForActivityTaskInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0PollForActivityTaskCommand = serializeAws_json1_0PollForActivityTaskCommand;
const serializeAws_json1_0PollForDecisionTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.PollForDecisionTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0PollForDecisionTaskInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0PollForDecisionTaskCommand = serializeAws_json1_0PollForDecisionTaskCommand;
const serializeAws_json1_0RecordActivityTaskHeartbeatCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.RecordActivityTaskHeartbeat",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RecordActivityTaskHeartbeatInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0RecordActivityTaskHeartbeatCommand = serializeAws_json1_0RecordActivityTaskHeartbeatCommand;
const serializeAws_json1_0RegisterActivityTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.RegisterActivityType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RegisterActivityTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0RegisterActivityTypeCommand = serializeAws_json1_0RegisterActivityTypeCommand;
const serializeAws_json1_0RegisterDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.RegisterDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RegisterDomainInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0RegisterDomainCommand = serializeAws_json1_0RegisterDomainCommand;
const serializeAws_json1_0RegisterWorkflowTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.RegisterWorkflowType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RegisterWorkflowTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0RegisterWorkflowTypeCommand = serializeAws_json1_0RegisterWorkflowTypeCommand;
const serializeAws_json1_0RequestCancelWorkflowExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.RequestCancelWorkflowExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RequestCancelWorkflowExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0RequestCancelWorkflowExecutionCommand = serializeAws_json1_0RequestCancelWorkflowExecutionCommand;
const serializeAws_json1_0RespondActivityTaskCanceledCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.RespondActivityTaskCanceled",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RespondActivityTaskCanceledInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0RespondActivityTaskCanceledCommand = serializeAws_json1_0RespondActivityTaskCanceledCommand;
const serializeAws_json1_0RespondActivityTaskCompletedCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.RespondActivityTaskCompleted",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RespondActivityTaskCompletedInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0RespondActivityTaskCompletedCommand = serializeAws_json1_0RespondActivityTaskCompletedCommand;
const serializeAws_json1_0RespondActivityTaskFailedCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.RespondActivityTaskFailed",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RespondActivityTaskFailedInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0RespondActivityTaskFailedCommand = serializeAws_json1_0RespondActivityTaskFailedCommand;
const serializeAws_json1_0RespondDecisionTaskCompletedCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.RespondDecisionTaskCompleted",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RespondDecisionTaskCompletedInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0RespondDecisionTaskCompletedCommand = serializeAws_json1_0RespondDecisionTaskCompletedCommand;
const serializeAws_json1_0SignalWorkflowExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.SignalWorkflowExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0SignalWorkflowExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0SignalWorkflowExecutionCommand = serializeAws_json1_0SignalWorkflowExecutionCommand;
const serializeAws_json1_0StartWorkflowExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.StartWorkflowExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0StartWorkflowExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0StartWorkflowExecutionCommand = serializeAws_json1_0StartWorkflowExecutionCommand;
const serializeAws_json1_0TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0TagResourceCommand = serializeAws_json1_0TagResourceCommand;
const serializeAws_json1_0TerminateWorkflowExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.TerminateWorkflowExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TerminateWorkflowExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0TerminateWorkflowExecutionCommand = serializeAws_json1_0TerminateWorkflowExecutionCommand;
const serializeAws_json1_0UndeprecateActivityTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.UndeprecateActivityType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UndeprecateActivityTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UndeprecateActivityTypeCommand = serializeAws_json1_0UndeprecateActivityTypeCommand;
const serializeAws_json1_0UndeprecateDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.UndeprecateDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UndeprecateDomainInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UndeprecateDomainCommand = serializeAws_json1_0UndeprecateDomainCommand;
const serializeAws_json1_0UndeprecateWorkflowTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.UndeprecateWorkflowType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UndeprecateWorkflowTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UndeprecateWorkflowTypeCommand = serializeAws_json1_0UndeprecateWorkflowTypeCommand;
const serializeAws_json1_0UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "SimpleWorkflowService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UntagResourceCommand = serializeAws_json1_0UntagResourceCommand;
const deserializeAws_json1_0CountClosedWorkflowExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CountClosedWorkflowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowExecutionCount(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CountClosedWorkflowExecutionsCommand = deserializeAws_json1_0CountClosedWorkflowExecutionsCommand;
const deserializeAws_json1_0CountClosedWorkflowExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0CountOpenWorkflowExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CountOpenWorkflowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowExecutionCount(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CountOpenWorkflowExecutionsCommand = deserializeAws_json1_0CountOpenWorkflowExecutionsCommand;
const deserializeAws_json1_0CountOpenWorkflowExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0CountPendingActivityTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CountPendingActivityTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0PendingTaskCount(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CountPendingActivityTasksCommand = deserializeAws_json1_0CountPendingActivityTasksCommand;
const deserializeAws_json1_0CountPendingActivityTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0CountPendingDecisionTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CountPendingDecisionTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0PendingTaskCount(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CountPendingDecisionTasksCommand = deserializeAws_json1_0CountPendingDecisionTasksCommand;
const deserializeAws_json1_0CountPendingDecisionTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DeprecateActivityTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeprecateActivityTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeprecateActivityTypeCommand = deserializeAws_json1_0DeprecateActivityTypeCommand;
const deserializeAws_json1_0DeprecateActivityTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TypeDeprecatedFault":
        case "com.amazonaws.swf#TypeDeprecatedFault":
            response = {
                ...(await deserializeAws_json1_0TypeDeprecatedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DeprecateDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeprecateDomainCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeprecateDomainCommand = deserializeAws_json1_0DeprecateDomainCommand;
const deserializeAws_json1_0DeprecateDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DomainDeprecatedFault":
        case "com.amazonaws.swf#DomainDeprecatedFault":
            response = {
                ...(await deserializeAws_json1_0DomainDeprecatedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DeprecateWorkflowTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeprecateWorkflowTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeprecateWorkflowTypeCommand = deserializeAws_json1_0DeprecateWorkflowTypeCommand;
const deserializeAws_json1_0DeprecateWorkflowTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TypeDeprecatedFault":
        case "com.amazonaws.swf#TypeDeprecatedFault":
            response = {
                ...(await deserializeAws_json1_0TypeDeprecatedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeActivityTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeActivityTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ActivityTypeDetail(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeActivityTypeCommand = deserializeAws_json1_0DescribeActivityTypeCommand;
const deserializeAws_json1_0DescribeActivityTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DomainDetail(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeDomainCommand = deserializeAws_json1_0DescribeDomainCommand;
const deserializeAws_json1_0DescribeDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeWorkflowExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeWorkflowExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowExecutionDetail(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeWorkflowExecutionCommand = deserializeAws_json1_0DescribeWorkflowExecutionCommand;
const deserializeAws_json1_0DescribeWorkflowExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeWorkflowTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeWorkflowTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowTypeDetail(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeWorkflowTypeCommand = deserializeAws_json1_0DescribeWorkflowTypeCommand;
const deserializeAws_json1_0DescribeWorkflowTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0GetWorkflowExecutionHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetWorkflowExecutionHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0History(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetWorkflowExecutionHistoryCommand = deserializeAws_json1_0GetWorkflowExecutionHistoryCommand;
const deserializeAws_json1_0GetWorkflowExecutionHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListActivityTypesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListActivityTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ActivityTypeInfos(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListActivityTypesCommand = deserializeAws_json1_0ListActivityTypesCommand;
const deserializeAws_json1_0ListActivityTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListClosedWorkflowExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListClosedWorkflowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowExecutionInfos(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListClosedWorkflowExecutionsCommand = deserializeAws_json1_0ListClosedWorkflowExecutionsCommand;
const deserializeAws_json1_0ListClosedWorkflowExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListDomainsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListDomainsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DomainInfos(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListDomainsCommand = deserializeAws_json1_0ListDomainsCommand;
const deserializeAws_json1_0ListDomainsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListOpenWorkflowExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListOpenWorkflowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowExecutionInfos(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListOpenWorkflowExecutionsCommand = deserializeAws_json1_0ListOpenWorkflowExecutionsCommand;
const deserializeAws_json1_0ListOpenWorkflowExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListTagsForResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListTagsForResourceCommand = deserializeAws_json1_0ListTagsForResourceCommand;
const deserializeAws_json1_0ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.swf#LimitExceededFault":
            response = {
                ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListWorkflowTypesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListWorkflowTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowTypeInfos(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListWorkflowTypesCommand = deserializeAws_json1_0ListWorkflowTypesCommand;
const deserializeAws_json1_0ListWorkflowTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0PollForActivityTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0PollForActivityTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ActivityTask(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0PollForActivityTaskCommand = deserializeAws_json1_0PollForActivityTaskCommand;
const deserializeAws_json1_0PollForActivityTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.swf#LimitExceededFault":
            response = {
                ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0PollForDecisionTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0PollForDecisionTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DecisionTask(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0PollForDecisionTaskCommand = deserializeAws_json1_0PollForDecisionTaskCommand;
const deserializeAws_json1_0PollForDecisionTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.swf#LimitExceededFault":
            response = {
                ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0RecordActivityTaskHeartbeatCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0RecordActivityTaskHeartbeatCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ActivityTaskStatus(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0RecordActivityTaskHeartbeatCommand = deserializeAws_json1_0RecordActivityTaskHeartbeatCommand;
const deserializeAws_json1_0RecordActivityTaskHeartbeatCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0RegisterActivityTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0RegisterActivityTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0RegisterActivityTypeCommand = deserializeAws_json1_0RegisterActivityTypeCommand;
const deserializeAws_json1_0RegisterActivityTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.swf#LimitExceededFault":
            response = {
                ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TypeAlreadyExistsFault":
        case "com.amazonaws.swf#TypeAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0RegisterDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0RegisterDomainCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0RegisterDomainCommand = deserializeAws_json1_0RegisterDomainCommand;
const deserializeAws_json1_0RegisterDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DomainAlreadyExistsFault":
        case "com.amazonaws.swf#DomainAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_0DomainAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededFault":
        case "com.amazonaws.swf#LimitExceededFault":
            response = {
                ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsFault":
        case "com.amazonaws.swf#TooManyTagsFault":
            response = {
                ...(await deserializeAws_json1_0TooManyTagsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0RegisterWorkflowTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0RegisterWorkflowTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0RegisterWorkflowTypeCommand = deserializeAws_json1_0RegisterWorkflowTypeCommand;
const deserializeAws_json1_0RegisterWorkflowTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.swf#LimitExceededFault":
            response = {
                ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TypeAlreadyExistsFault":
        case "com.amazonaws.swf#TypeAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0RequestCancelWorkflowExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0RequestCancelWorkflowExecutionCommand = deserializeAws_json1_0RequestCancelWorkflowExecutionCommand;
const deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0RespondActivityTaskCanceledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0RespondActivityTaskCanceledCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0RespondActivityTaskCanceledCommand = deserializeAws_json1_0RespondActivityTaskCanceledCommand;
const deserializeAws_json1_0RespondActivityTaskCanceledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0RespondActivityTaskCompletedCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0RespondActivityTaskCompletedCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0RespondActivityTaskCompletedCommand = deserializeAws_json1_0RespondActivityTaskCompletedCommand;
const deserializeAws_json1_0RespondActivityTaskCompletedCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0RespondActivityTaskFailedCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0RespondActivityTaskFailedCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0RespondActivityTaskFailedCommand = deserializeAws_json1_0RespondActivityTaskFailedCommand;
const deserializeAws_json1_0RespondActivityTaskFailedCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0RespondDecisionTaskCompletedCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0RespondDecisionTaskCompletedCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0RespondDecisionTaskCompletedCommand = deserializeAws_json1_0RespondDecisionTaskCompletedCommand;
const deserializeAws_json1_0RespondDecisionTaskCompletedCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0SignalWorkflowExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0SignalWorkflowExecutionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0SignalWorkflowExecutionCommand = deserializeAws_json1_0SignalWorkflowExecutionCommand;
const deserializeAws_json1_0SignalWorkflowExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0StartWorkflowExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0StartWorkflowExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0Run(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0StartWorkflowExecutionCommand = deserializeAws_json1_0StartWorkflowExecutionCommand;
const deserializeAws_json1_0StartWorkflowExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DefaultUndefinedFault":
        case "com.amazonaws.swf#DefaultUndefinedFault":
            response = {
                ...(await deserializeAws_json1_0DefaultUndefinedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededFault":
        case "com.amazonaws.swf#LimitExceededFault":
            response = {
                ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TypeDeprecatedFault":
        case "com.amazonaws.swf#TypeDeprecatedFault":
            response = {
                ...(await deserializeAws_json1_0TypeDeprecatedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WorkflowExecutionAlreadyStartedFault":
        case "com.amazonaws.swf#WorkflowExecutionAlreadyStartedFault":
            response = {
                ...(await deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0TagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0TagResourceCommand = deserializeAws_json1_0TagResourceCommand;
const deserializeAws_json1_0TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.swf#LimitExceededFault":
            response = {
                ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsFault":
        case "com.amazonaws.swf#TooManyTagsFault":
            response = {
                ...(await deserializeAws_json1_0TooManyTagsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0TerminateWorkflowExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0TerminateWorkflowExecutionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0TerminateWorkflowExecutionCommand = deserializeAws_json1_0TerminateWorkflowExecutionCommand;
const deserializeAws_json1_0TerminateWorkflowExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UndeprecateActivityTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UndeprecateActivityTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UndeprecateActivityTypeCommand = deserializeAws_json1_0UndeprecateActivityTypeCommand;
const deserializeAws_json1_0UndeprecateActivityTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TypeAlreadyExistsFault":
        case "com.amazonaws.swf#TypeAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UndeprecateDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UndeprecateDomainCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UndeprecateDomainCommand = deserializeAws_json1_0UndeprecateDomainCommand;
const deserializeAws_json1_0UndeprecateDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DomainAlreadyExistsFault":
        case "com.amazonaws.swf#DomainAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_0DomainAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UndeprecateWorkflowTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UndeprecateWorkflowTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UndeprecateWorkflowTypeCommand = deserializeAws_json1_0UndeprecateWorkflowTypeCommand;
const deserializeAws_json1_0UndeprecateWorkflowTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TypeAlreadyExistsFault":
        case "com.amazonaws.swf#TypeAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UntagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UntagResourceCommand = deserializeAws_json1_0UntagResourceCommand;
const deserializeAws_json1_0UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.swf#LimitExceededFault":
            response = {
                ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf#OperationNotPermittedFault":
            response = {
                ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf#UnknownResourceFault":
            response = {
                ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DefaultUndefinedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0DefaultUndefinedFault(body, context);
    const contents = {
        name: "DefaultUndefinedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0DomainAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0DomainAlreadyExistsFault(body, context);
    const contents = {
        name: "DomainAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0DomainDeprecatedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0DomainDeprecatedFault(body, context);
    const contents = {
        name: "DomainDeprecatedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0LimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0LimitExceededFault(body, context);
    const contents = {
        name: "LimitExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0OperationNotPermittedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0OperationNotPermittedFault(body, context);
    const contents = {
        name: "OperationNotPermittedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TooManyTagsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TooManyTagsFault(body, context);
    const contents = {
        name: "TooManyTagsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TypeAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TypeAlreadyExistsFault(body, context);
    const contents = {
        name: "TypeAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TypeDeprecatedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TypeDeprecatedFault(body, context);
    const contents = {
        name: "TypeDeprecatedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0UnknownResourceFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0UnknownResourceFault(body, context);
    const contents = {
        name: "UnknownResourceFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0WorkflowExecutionAlreadyStartedFault(body, context);
    const contents = {
        name: "WorkflowExecutionAlreadyStartedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_0ActivityType = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_0CancelTimerDecisionAttributes = (input, context) => {
    return {
        ...(input.timerId !== undefined && input.timerId !== null && { timerId: input.timerId }),
    };
};
const serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes = (input, context) => {
    return {
        ...(input.details !== undefined && input.details !== null && { details: input.details }),
    };
};
const serializeAws_json1_0CloseStatusFilter = (input, context) => {
    return {
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes = (input, context) => {
    return {
        ...(input.result !== undefined && input.result !== null && { result: input.result }),
    };
};
const serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes = (input, context) => {
    return {
        ...(input.childPolicy !== undefined && input.childPolicy !== null && { childPolicy: input.childPolicy }),
        ...(input.executionStartToCloseTimeout !== undefined &&
            input.executionStartToCloseTimeout !== null && {
            executionStartToCloseTimeout: input.executionStartToCloseTimeout,
        }),
        ...(input.input !== undefined && input.input !== null && { input: input.input }),
        ...(input.lambdaRole !== undefined && input.lambdaRole !== null && { lambdaRole: input.lambdaRole }),
        ...(input.tagList !== undefined &&
            input.tagList !== null && { tagList: serializeAws_json1_0TagList(input.tagList, context) }),
        ...(input.taskList !== undefined &&
            input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
        ...(input.taskPriority !== undefined && input.taskPriority !== null && { taskPriority: input.taskPriority }),
        ...(input.taskStartToCloseTimeout !== undefined &&
            input.taskStartToCloseTimeout !== null && { taskStartToCloseTimeout: input.taskStartToCloseTimeout }),
        ...(input.workflowTypeVersion !== undefined &&
            input.workflowTypeVersion !== null && { workflowTypeVersion: input.workflowTypeVersion }),
    };
};
const serializeAws_json1_0CountClosedWorkflowExecutionsInput = (input, context) => {
    return {
        ...(input.closeStatusFilter !== undefined &&
            input.closeStatusFilter !== null && {
            closeStatusFilter: serializeAws_json1_0CloseStatusFilter(input.closeStatusFilter, context),
        }),
        ...(input.closeTimeFilter !== undefined &&
            input.closeTimeFilter !== null && {
            closeTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.closeTimeFilter, context),
        }),
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.executionFilter !== undefined &&
            input.executionFilter !== null && {
            executionFilter: serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context),
        }),
        ...(input.startTimeFilter !== undefined &&
            input.startTimeFilter !== null && {
            startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context),
        }),
        ...(input.tagFilter !== undefined &&
            input.tagFilter !== null && { tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context) }),
        ...(input.typeFilter !== undefined &&
            input.typeFilter !== null && { typeFilter: serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context) }),
    };
};
const serializeAws_json1_0CountOpenWorkflowExecutionsInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.executionFilter !== undefined &&
            input.executionFilter !== null && {
            executionFilter: serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context),
        }),
        ...(input.startTimeFilter !== undefined &&
            input.startTimeFilter !== null && {
            startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context),
        }),
        ...(input.tagFilter !== undefined &&
            input.tagFilter !== null && { tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context) }),
        ...(input.typeFilter !== undefined &&
            input.typeFilter !== null && { typeFilter: serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context) }),
    };
};
const serializeAws_json1_0CountPendingActivityTasksInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.taskList !== undefined &&
            input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
    };
};
const serializeAws_json1_0CountPendingDecisionTasksInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.taskList !== undefined &&
            input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
    };
};
const serializeAws_json1_0Decision = (input, context) => {
    return {
        ...(input.cancelTimerDecisionAttributes !== undefined &&
            input.cancelTimerDecisionAttributes !== null && {
            cancelTimerDecisionAttributes: serializeAws_json1_0CancelTimerDecisionAttributes(input.cancelTimerDecisionAttributes, context),
        }),
        ...(input.cancelWorkflowExecutionDecisionAttributes !== undefined &&
            input.cancelWorkflowExecutionDecisionAttributes !== null && {
            cancelWorkflowExecutionDecisionAttributes: serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes(input.cancelWorkflowExecutionDecisionAttributes, context),
        }),
        ...(input.completeWorkflowExecutionDecisionAttributes !== undefined &&
            input.completeWorkflowExecutionDecisionAttributes !== null && {
            completeWorkflowExecutionDecisionAttributes: serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes(input.completeWorkflowExecutionDecisionAttributes, context),
        }),
        ...(input.continueAsNewWorkflowExecutionDecisionAttributes !== undefined &&
            input.continueAsNewWorkflowExecutionDecisionAttributes !== null && {
            continueAsNewWorkflowExecutionDecisionAttributes: serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes(input.continueAsNewWorkflowExecutionDecisionAttributes, context),
        }),
        ...(input.decisionType !== undefined && input.decisionType !== null && { decisionType: input.decisionType }),
        ...(input.failWorkflowExecutionDecisionAttributes !== undefined &&
            input.failWorkflowExecutionDecisionAttributes !== null && {
            failWorkflowExecutionDecisionAttributes: serializeAws_json1_0FailWorkflowExecutionDecisionAttributes(input.failWorkflowExecutionDecisionAttributes, context),
        }),
        ...(input.recordMarkerDecisionAttributes !== undefined &&
            input.recordMarkerDecisionAttributes !== null && {
            recordMarkerDecisionAttributes: serializeAws_json1_0RecordMarkerDecisionAttributes(input.recordMarkerDecisionAttributes, context),
        }),
        ...(input.requestCancelActivityTaskDecisionAttributes !== undefined &&
            input.requestCancelActivityTaskDecisionAttributes !== null && {
            requestCancelActivityTaskDecisionAttributes: serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes(input.requestCancelActivityTaskDecisionAttributes, context),
        }),
        ...(input.requestCancelExternalWorkflowExecutionDecisionAttributes !== undefined &&
            input.requestCancelExternalWorkflowExecutionDecisionAttributes !== null && {
            requestCancelExternalWorkflowExecutionDecisionAttributes: serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes(input.requestCancelExternalWorkflowExecutionDecisionAttributes, context),
        }),
        ...(input.scheduleActivityTaskDecisionAttributes !== undefined &&
            input.scheduleActivityTaskDecisionAttributes !== null && {
            scheduleActivityTaskDecisionAttributes: serializeAws_json1_0ScheduleActivityTaskDecisionAttributes(input.scheduleActivityTaskDecisionAttributes, context),
        }),
        ...(input.scheduleLambdaFunctionDecisionAttributes !== undefined &&
            input.scheduleLambdaFunctionDecisionAttributes !== null && {
            scheduleLambdaFunctionDecisionAttributes: serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes(input.scheduleLambdaFunctionDecisionAttributes, context),
        }),
        ...(input.signalExternalWorkflowExecutionDecisionAttributes !== undefined &&
            input.signalExternalWorkflowExecutionDecisionAttributes !== null && {
            signalExternalWorkflowExecutionDecisionAttributes: serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes(input.signalExternalWorkflowExecutionDecisionAttributes, context),
        }),
        ...(input.startChildWorkflowExecutionDecisionAttributes !== undefined &&
            input.startChildWorkflowExecutionDecisionAttributes !== null && {
            startChildWorkflowExecutionDecisionAttributes: serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes(input.startChildWorkflowExecutionDecisionAttributes, context),
        }),
        ...(input.startTimerDecisionAttributes !== undefined &&
            input.startTimerDecisionAttributes !== null && {
            startTimerDecisionAttributes: serializeAws_json1_0StartTimerDecisionAttributes(input.startTimerDecisionAttributes, context),
        }),
    };
};
const serializeAws_json1_0DecisionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Decision(entry, context);
    });
};
const serializeAws_json1_0DeprecateActivityTypeInput = (input, context) => {
    return {
        ...(input.activityType !== undefined &&
            input.activityType !== null && { activityType: serializeAws_json1_0ActivityType(input.activityType, context) }),
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    };
};
const serializeAws_json1_0DeprecateDomainInput = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_0DeprecateWorkflowTypeInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.workflowType !== undefined &&
            input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }),
    };
};
const serializeAws_json1_0DescribeActivityTypeInput = (input, context) => {
    return {
        ...(input.activityType !== undefined &&
            input.activityType !== null && { activityType: serializeAws_json1_0ActivityType(input.activityType, context) }),
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    };
};
const serializeAws_json1_0DescribeDomainInput = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_0DescribeWorkflowExecutionInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.execution !== undefined &&
            input.execution !== null && { execution: serializeAws_json1_0WorkflowExecution(input.execution, context) }),
    };
};
const serializeAws_json1_0DescribeWorkflowTypeInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.workflowType !== undefined &&
            input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }),
    };
};
const serializeAws_json1_0ExecutionTimeFilter = (input, context) => {
    return {
        ...(input.latestDate !== undefined &&
            input.latestDate !== null && { latestDate: Math.round(input.latestDate.getTime() / 1000) }),
        ...(input.oldestDate !== undefined &&
            input.oldestDate !== null && { oldestDate: Math.round(input.oldestDate.getTime() / 1000) }),
    };
};
const serializeAws_json1_0FailWorkflowExecutionDecisionAttributes = (input, context) => {
    return {
        ...(input.details !== undefined && input.details !== null && { details: input.details }),
        ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
    };
};
const serializeAws_json1_0GetWorkflowExecutionHistoryInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.execution !== undefined &&
            input.execution !== null && { execution: serializeAws_json1_0WorkflowExecution(input.execution, context) }),
        ...(input.maximumPageSize !== undefined &&
            input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
        ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
        ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
    };
};
const serializeAws_json1_0ListActivityTypesInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.maximumPageSize !== undefined &&
            input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
        ...(input.registrationStatus !== undefined &&
            input.registrationStatus !== null && { registrationStatus: input.registrationStatus }),
        ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
    };
};
const serializeAws_json1_0ListClosedWorkflowExecutionsInput = (input, context) => {
    return {
        ...(input.closeStatusFilter !== undefined &&
            input.closeStatusFilter !== null && {
            closeStatusFilter: serializeAws_json1_0CloseStatusFilter(input.closeStatusFilter, context),
        }),
        ...(input.closeTimeFilter !== undefined &&
            input.closeTimeFilter !== null && {
            closeTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.closeTimeFilter, context),
        }),
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.executionFilter !== undefined &&
            input.executionFilter !== null && {
            executionFilter: serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context),
        }),
        ...(input.maximumPageSize !== undefined &&
            input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
        ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
        ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
        ...(input.startTimeFilter !== undefined &&
            input.startTimeFilter !== null && {
            startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context),
        }),
        ...(input.tagFilter !== undefined &&
            input.tagFilter !== null && { tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context) }),
        ...(input.typeFilter !== undefined &&
            input.typeFilter !== null && { typeFilter: serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context) }),
    };
};
const serializeAws_json1_0ListDomainsInput = (input, context) => {
    return {
        ...(input.maximumPageSize !== undefined &&
            input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
        ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
        ...(input.registrationStatus !== undefined &&
            input.registrationStatus !== null && { registrationStatus: input.registrationStatus }),
        ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
    };
};
const serializeAws_json1_0ListOpenWorkflowExecutionsInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.executionFilter !== undefined &&
            input.executionFilter !== null && {
            executionFilter: serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context),
        }),
        ...(input.maximumPageSize !== undefined &&
            input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
        ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
        ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
        ...(input.startTimeFilter !== undefined &&
            input.startTimeFilter !== null && {
            startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context),
        }),
        ...(input.tagFilter !== undefined &&
            input.tagFilter !== null && { tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context) }),
        ...(input.typeFilter !== undefined &&
            input.typeFilter !== null && { typeFilter: serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context) }),
    };
};
const serializeAws_json1_0ListTagsForResourceInput = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_0ListWorkflowTypesInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.maximumPageSize !== undefined &&
            input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
        ...(input.registrationStatus !== undefined &&
            input.registrationStatus !== null && { registrationStatus: input.registrationStatus }),
        ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
    };
};
const serializeAws_json1_0PollForActivityTaskInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.identity !== undefined && input.identity !== null && { identity: input.identity }),
        ...(input.taskList !== undefined &&
            input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
    };
};
const serializeAws_json1_0PollForDecisionTaskInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.identity !== undefined && input.identity !== null && { identity: input.identity }),
        ...(input.maximumPageSize !== undefined &&
            input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
        ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
        ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
        ...(input.taskList !== undefined &&
            input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
    };
};
const serializeAws_json1_0RecordActivityTaskHeartbeatInput = (input, context) => {
    return {
        ...(input.details !== undefined && input.details !== null && { details: input.details }),
        ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
    };
};
const serializeAws_json1_0RecordMarkerDecisionAttributes = (input, context) => {
    return {
        ...(input.details !== undefined && input.details !== null && { details: input.details }),
        ...(input.markerName !== undefined && input.markerName !== null && { markerName: input.markerName }),
    };
};
const serializeAws_json1_0RegisterActivityTypeInput = (input, context) => {
    return {
        ...(input.defaultTaskHeartbeatTimeout !== undefined &&
            input.defaultTaskHeartbeatTimeout !== null && { defaultTaskHeartbeatTimeout: input.defaultTaskHeartbeatTimeout }),
        ...(input.defaultTaskList !== undefined &&
            input.defaultTaskList !== null && {
            defaultTaskList: serializeAws_json1_0TaskList(input.defaultTaskList, context),
        }),
        ...(input.defaultTaskPriority !== undefined &&
            input.defaultTaskPriority !== null && { defaultTaskPriority: input.defaultTaskPriority }),
        ...(input.defaultTaskScheduleToCloseTimeout !== undefined &&
            input.defaultTaskScheduleToCloseTimeout !== null && {
            defaultTaskScheduleToCloseTimeout: input.defaultTaskScheduleToCloseTimeout,
        }),
        ...(input.defaultTaskScheduleToStartTimeout !== undefined &&
            input.defaultTaskScheduleToStartTimeout !== null && {
            defaultTaskScheduleToStartTimeout: input.defaultTaskScheduleToStartTimeout,
        }),
        ...(input.defaultTaskStartToCloseTimeout !== undefined &&
            input.defaultTaskStartToCloseTimeout !== null && {
            defaultTaskStartToCloseTimeout: input.defaultTaskStartToCloseTimeout,
        }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_0RegisterDomainInput = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_json1_0ResourceTagList(input.tags, context) }),
        ...(input.workflowExecutionRetentionPeriodInDays !== undefined &&
            input.workflowExecutionRetentionPeriodInDays !== null && {
            workflowExecutionRetentionPeriodInDays: input.workflowExecutionRetentionPeriodInDays,
        }),
    };
};
const serializeAws_json1_0RegisterWorkflowTypeInput = (input, context) => {
    return {
        ...(input.defaultChildPolicy !== undefined &&
            input.defaultChildPolicy !== null && { defaultChildPolicy: input.defaultChildPolicy }),
        ...(input.defaultExecutionStartToCloseTimeout !== undefined &&
            input.defaultExecutionStartToCloseTimeout !== null && {
            defaultExecutionStartToCloseTimeout: input.defaultExecutionStartToCloseTimeout,
        }),
        ...(input.defaultLambdaRole !== undefined &&
            input.defaultLambdaRole !== null && { defaultLambdaRole: input.defaultLambdaRole }),
        ...(input.defaultTaskList !== undefined &&
            input.defaultTaskList !== null && {
            defaultTaskList: serializeAws_json1_0TaskList(input.defaultTaskList, context),
        }),
        ...(input.defaultTaskPriority !== undefined &&
            input.defaultTaskPriority !== null && { defaultTaskPriority: input.defaultTaskPriority }),
        ...(input.defaultTaskStartToCloseTimeout !== undefined &&
            input.defaultTaskStartToCloseTimeout !== null && {
            defaultTaskStartToCloseTimeout: input.defaultTaskStartToCloseTimeout,
        }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes = (input, context) => {
    return {
        ...(input.activityId !== undefined && input.activityId !== null && { activityId: input.activityId }),
    };
};
const serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes = (input, context) => {
    return {
        ...(input.control !== undefined && input.control !== null && { control: input.control }),
        ...(input.runId !== undefined && input.runId !== null && { runId: input.runId }),
        ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
    };
};
const serializeAws_json1_0RequestCancelWorkflowExecutionInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.runId !== undefined && input.runId !== null && { runId: input.runId }),
        ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
    };
};
const serializeAws_json1_0ResourceTag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_0ResourceTagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0ResourceTagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ResourceTag(entry, context);
    });
};
const serializeAws_json1_0RespondActivityTaskCanceledInput = (input, context) => {
    return {
        ...(input.details !== undefined && input.details !== null && { details: input.details }),
        ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
    };
};
const serializeAws_json1_0RespondActivityTaskCompletedInput = (input, context) => {
    return {
        ...(input.result !== undefined && input.result !== null && { result: input.result }),
        ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
    };
};
const serializeAws_json1_0RespondActivityTaskFailedInput = (input, context) => {
    return {
        ...(input.details !== undefined && input.details !== null && { details: input.details }),
        ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
        ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
    };
};
const serializeAws_json1_0RespondDecisionTaskCompletedInput = (input, context) => {
    return {
        ...(input.decisions !== undefined &&
            input.decisions !== null && { decisions: serializeAws_json1_0DecisionList(input.decisions, context) }),
        ...(input.executionContext !== undefined &&
            input.executionContext !== null && { executionContext: input.executionContext }),
        ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
    };
};
const serializeAws_json1_0ScheduleActivityTaskDecisionAttributes = (input, context) => {
    return {
        ...(input.activityId !== undefined && input.activityId !== null && { activityId: input.activityId }),
        ...(input.activityType !== undefined &&
            input.activityType !== null && { activityType: serializeAws_json1_0ActivityType(input.activityType, context) }),
        ...(input.control !== undefined && input.control !== null && { control: input.control }),
        ...(input.heartbeatTimeout !== undefined &&
            input.heartbeatTimeout !== null && { heartbeatTimeout: input.heartbeatTimeout }),
        ...(input.input !== undefined && input.input !== null && { input: input.input }),
        ...(input.scheduleToCloseTimeout !== undefined &&
            input.scheduleToCloseTimeout !== null && { scheduleToCloseTimeout: input.scheduleToCloseTimeout }),
        ...(input.scheduleToStartTimeout !== undefined &&
            input.scheduleToStartTimeout !== null && { scheduleToStartTimeout: input.scheduleToStartTimeout }),
        ...(input.startToCloseTimeout !== undefined &&
            input.startToCloseTimeout !== null && { startToCloseTimeout: input.startToCloseTimeout }),
        ...(input.taskList !== undefined &&
            input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
        ...(input.taskPriority !== undefined && input.taskPriority !== null && { taskPriority: input.taskPriority }),
    };
};
const serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes = (input, context) => {
    return {
        ...(input.control !== undefined && input.control !== null && { control: input.control }),
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.input !== undefined && input.input !== null && { input: input.input }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.startToCloseTimeout !== undefined &&
            input.startToCloseTimeout !== null && { startToCloseTimeout: input.startToCloseTimeout }),
    };
};
const serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes = (input, context) => {
    return {
        ...(input.control !== undefined && input.control !== null && { control: input.control }),
        ...(input.input !== undefined && input.input !== null && { input: input.input }),
        ...(input.runId !== undefined && input.runId !== null && { runId: input.runId }),
        ...(input.signalName !== undefined && input.signalName !== null && { signalName: input.signalName }),
        ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
    };
};
const serializeAws_json1_0SignalWorkflowExecutionInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.input !== undefined && input.input !== null && { input: input.input }),
        ...(input.runId !== undefined && input.runId !== null && { runId: input.runId }),
        ...(input.signalName !== undefined && input.signalName !== null && { signalName: input.signalName }),
        ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
    };
};
const serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes = (input, context) => {
    return {
        ...(input.childPolicy !== undefined && input.childPolicy !== null && { childPolicy: input.childPolicy }),
        ...(input.control !== undefined && input.control !== null && { control: input.control }),
        ...(input.executionStartToCloseTimeout !== undefined &&
            input.executionStartToCloseTimeout !== null && {
            executionStartToCloseTimeout: input.executionStartToCloseTimeout,
        }),
        ...(input.input !== undefined && input.input !== null && { input: input.input }),
        ...(input.lambdaRole !== undefined && input.lambdaRole !== null && { lambdaRole: input.lambdaRole }),
        ...(input.tagList !== undefined &&
            input.tagList !== null && { tagList: serializeAws_json1_0TagList(input.tagList, context) }),
        ...(input.taskList !== undefined &&
            input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
        ...(input.taskPriority !== undefined && input.taskPriority !== null && { taskPriority: input.taskPriority }),
        ...(input.taskStartToCloseTimeout !== undefined &&
            input.taskStartToCloseTimeout !== null && { taskStartToCloseTimeout: input.taskStartToCloseTimeout }),
        ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
        ...(input.workflowType !== undefined &&
            input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }),
    };
};
const serializeAws_json1_0StartTimerDecisionAttributes = (input, context) => {
    return {
        ...(input.control !== undefined && input.control !== null && { control: input.control }),
        ...(input.startToFireTimeout !== undefined &&
            input.startToFireTimeout !== null && { startToFireTimeout: input.startToFireTimeout }),
        ...(input.timerId !== undefined && input.timerId !== null && { timerId: input.timerId }),
    };
};
const serializeAws_json1_0StartWorkflowExecutionInput = (input, context) => {
    return {
        ...(input.childPolicy !== undefined && input.childPolicy !== null && { childPolicy: input.childPolicy }),
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.executionStartToCloseTimeout !== undefined &&
            input.executionStartToCloseTimeout !== null && {
            executionStartToCloseTimeout: input.executionStartToCloseTimeout,
        }),
        ...(input.input !== undefined && input.input !== null && { input: input.input }),
        ...(input.lambdaRole !== undefined && input.lambdaRole !== null && { lambdaRole: input.lambdaRole }),
        ...(input.tagList !== undefined &&
            input.tagList !== null && { tagList: serializeAws_json1_0TagList(input.tagList, context) }),
        ...(input.taskList !== undefined &&
            input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
        ...(input.taskPriority !== undefined && input.taskPriority !== null && { taskPriority: input.taskPriority }),
        ...(input.taskStartToCloseTimeout !== undefined &&
            input.taskStartToCloseTimeout !== null && { taskStartToCloseTimeout: input.taskStartToCloseTimeout }),
        ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
        ...(input.workflowType !== undefined &&
            input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }),
    };
};
const serializeAws_json1_0TagFilter = (input, context) => {
    return {
        ...(input.tag !== undefined && input.tag !== null && { tag: input.tag }),
    };
};
const serializeAws_json1_0TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0TagResourceInput = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_json1_0ResourceTagList(input.tags, context) }),
    };
};
const serializeAws_json1_0TaskList = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_0TerminateWorkflowExecutionInput = (input, context) => {
    return {
        ...(input.childPolicy !== undefined && input.childPolicy !== null && { childPolicy: input.childPolicy }),
        ...(input.details !== undefined && input.details !== null && { details: input.details }),
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
        ...(input.runId !== undefined && input.runId !== null && { runId: input.runId }),
        ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
    };
};
const serializeAws_json1_0UndeprecateActivityTypeInput = (input, context) => {
    return {
        ...(input.activityType !== undefined &&
            input.activityType !== null && { activityType: serializeAws_json1_0ActivityType(input.activityType, context) }),
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    };
};
const serializeAws_json1_0UndeprecateDomainInput = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_0UndeprecateWorkflowTypeInput = (input, context) => {
    return {
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.workflowType !== undefined &&
            input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }),
    };
};
const serializeAws_json1_0UntagResourceInput = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_json1_0ResourceTagKeyList(input.tagKeys, context) }),
    };
};
const serializeAws_json1_0WorkflowExecution = (input, context) => {
    return {
        ...(input.runId !== undefined && input.runId !== null && { runId: input.runId }),
        ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
    };
};
const serializeAws_json1_0WorkflowExecutionFilter = (input, context) => {
    return {
        ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
    };
};
const serializeAws_json1_0WorkflowType = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_0WorkflowTypeFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const deserializeAws_json1_0ActivityTask = (output, context) => {
    return {
        activityId: output.activityId !== undefined && output.activityId !== null ? output.activityId : undefined,
        activityType: output.activityType !== undefined && output.activityType !== null
            ? deserializeAws_json1_0ActivityType(output.activityType, context)
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        taskToken: output.taskToken !== undefined && output.taskToken !== null ? output.taskToken : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
    };
};
const deserializeAws_json1_0ActivityTaskCanceledEventAttributes = (output, context) => {
    return {
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        latestCancelRequestedEventId: output.latestCancelRequestedEventId !== undefined && output.latestCancelRequestedEventId !== null
            ? output.latestCancelRequestedEventId
            : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
    };
};
const deserializeAws_json1_0ActivityTaskCancelRequestedEventAttributes = (output, context) => {
    return {
        activityId: output.activityId !== undefined && output.activityId !== null ? output.activityId : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
const deserializeAws_json1_0ActivityTaskCompletedEventAttributes = (output, context) => {
    return {
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
    };
};
const deserializeAws_json1_0ActivityTaskFailedEventAttributes = (output, context) => {
    return {
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
    };
};
const deserializeAws_json1_0ActivityTaskScheduledEventAttributes = (output, context) => {
    return {
        activityId: output.activityId !== undefined && output.activityId !== null ? output.activityId : undefined,
        activityType: output.activityType !== undefined && output.activityType !== null
            ? deserializeAws_json1_0ActivityType(output.activityType, context)
            : undefined,
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        heartbeatTimeout: output.heartbeatTimeout !== undefined && output.heartbeatTimeout !== null ? output.heartbeatTimeout : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        scheduleToCloseTimeout: output.scheduleToCloseTimeout !== undefined && output.scheduleToCloseTimeout !== null
            ? output.scheduleToCloseTimeout
            : undefined,
        scheduleToStartTimeout: output.scheduleToStartTimeout !== undefined && output.scheduleToStartTimeout !== null
            ? output.scheduleToStartTimeout
            : undefined,
        startToCloseTimeout: output.startToCloseTimeout !== undefined && output.startToCloseTimeout !== null
            ? output.startToCloseTimeout
            : undefined,
        taskList: output.taskList !== undefined && output.taskList !== null
            ? deserializeAws_json1_0TaskList(output.taskList, context)
            : undefined,
        taskPriority: output.taskPriority !== undefined && output.taskPriority !== null ? output.taskPriority : undefined,
    };
};
const deserializeAws_json1_0ActivityTaskStartedEventAttributes = (output, context) => {
    return {
        identity: output.identity !== undefined && output.identity !== null ? output.identity : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
    };
};
const deserializeAws_json1_0ActivityTaskStatus = (output, context) => {
    return {
        cancelRequested: output.cancelRequested !== undefined && output.cancelRequested !== null ? output.cancelRequested : undefined,
    };
};
const deserializeAws_json1_0ActivityTaskTimedOutEventAttributes = (output, context) => {
    return {
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        timeoutType: output.timeoutType !== undefined && output.timeoutType !== null ? output.timeoutType : undefined,
    };
};
const deserializeAws_json1_0ActivityType = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_json1_0ActivityTypeConfiguration = (output, context) => {
    return {
        defaultTaskHeartbeatTimeout: output.defaultTaskHeartbeatTimeout !== undefined && output.defaultTaskHeartbeatTimeout !== null
            ? output.defaultTaskHeartbeatTimeout
            : undefined,
        defaultTaskList: output.defaultTaskList !== undefined && output.defaultTaskList !== null
            ? deserializeAws_json1_0TaskList(output.defaultTaskList, context)
            : undefined,
        defaultTaskPriority: output.defaultTaskPriority !== undefined && output.defaultTaskPriority !== null
            ? output.defaultTaskPriority
            : undefined,
        defaultTaskScheduleToCloseTimeout: output.defaultTaskScheduleToCloseTimeout !== undefined && output.defaultTaskScheduleToCloseTimeout !== null
            ? output.defaultTaskScheduleToCloseTimeout
            : undefined,
        defaultTaskScheduleToStartTimeout: output.defaultTaskScheduleToStartTimeout !== undefined && output.defaultTaskScheduleToStartTimeout !== null
            ? output.defaultTaskScheduleToStartTimeout
            : undefined,
        defaultTaskStartToCloseTimeout: output.defaultTaskStartToCloseTimeout !== undefined && output.defaultTaskStartToCloseTimeout !== null
            ? output.defaultTaskStartToCloseTimeout
            : undefined,
    };
};
const deserializeAws_json1_0ActivityTypeDetail = (output, context) => {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_0ActivityTypeConfiguration(output.configuration, context)
            : undefined,
        typeInfo: output.typeInfo !== undefined && output.typeInfo !== null
            ? deserializeAws_json1_0ActivityTypeInfo(output.typeInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_0ActivityTypeInfo = (output, context) => {
    return {
        activityType: output.activityType !== undefined && output.activityType !== null
            ? deserializeAws_json1_0ActivityType(output.activityType, context)
            : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        deprecationDate: output.deprecationDate !== undefined && output.deprecationDate !== null
            ? new Date(Math.round(output.deprecationDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_0ActivityTypeInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ActivityTypeInfo(entry, context);
    });
};
const deserializeAws_json1_0ActivityTypeInfos = (output, context) => {
    return {
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        typeInfos: output.typeInfos !== undefined && output.typeInfos !== null
            ? deserializeAws_json1_0ActivityTypeInfoList(output.typeInfos, context)
            : undefined,
    };
};
const deserializeAws_json1_0CancelTimerFailedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        timerId: output.timerId !== undefined && output.timerId !== null ? output.timerId : undefined,
    };
};
const deserializeAws_json1_0CancelWorkflowExecutionFailedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
const deserializeAws_json1_0ChildWorkflowExecutionCanceledEventAttributes = (output, context) => {
    return {
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0ChildWorkflowExecutionCompletedEventAttributes = (output, context) => {
    return {
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0ChildWorkflowExecutionFailedEventAttributes = (output, context) => {
    return {
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0ChildWorkflowExecutionStartedEventAttributes = (output, context) => {
    return {
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0ChildWorkflowExecutionTerminatedEventAttributes = (output, context) => {
    return {
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0ChildWorkflowExecutionTimedOutEventAttributes = (output, context) => {
    return {
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        timeoutType: output.timeoutType !== undefined && output.timeoutType !== null ? output.timeoutType : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0CompleteWorkflowExecutionFailedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
const deserializeAws_json1_0ContinueAsNewWorkflowExecutionFailedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
const deserializeAws_json1_0DecisionTask = (output, context) => {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_0HistoryEventList(output.events, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        previousStartedEventId: output.previousStartedEventId !== undefined && output.previousStartedEventId !== null
            ? output.previousStartedEventId
            : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        taskToken: output.taskToken !== undefined && output.taskToken !== null ? output.taskToken : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0DecisionTaskCompletedEventAttributes = (output, context) => {
    return {
        executionContext: output.executionContext !== undefined && output.executionContext !== null ? output.executionContext : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
    };
};
const deserializeAws_json1_0DecisionTaskScheduledEventAttributes = (output, context) => {
    return {
        startToCloseTimeout: output.startToCloseTimeout !== undefined && output.startToCloseTimeout !== null
            ? output.startToCloseTimeout
            : undefined,
        taskList: output.taskList !== undefined && output.taskList !== null
            ? deserializeAws_json1_0TaskList(output.taskList, context)
            : undefined,
        taskPriority: output.taskPriority !== undefined && output.taskPriority !== null ? output.taskPriority : undefined,
    };
};
const deserializeAws_json1_0DecisionTaskStartedEventAttributes = (output, context) => {
    return {
        identity: output.identity !== undefined && output.identity !== null ? output.identity : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
    };
};
const deserializeAws_json1_0DecisionTaskTimedOutEventAttributes = (output, context) => {
    return {
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        timeoutType: output.timeoutType !== undefined && output.timeoutType !== null ? output.timeoutType : undefined,
    };
};
const deserializeAws_json1_0DefaultUndefinedFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0DomainAlreadyExistsFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0DomainConfiguration = (output, context) => {
    return {
        workflowExecutionRetentionPeriodInDays: output.workflowExecutionRetentionPeriodInDays !== undefined &&
            output.workflowExecutionRetentionPeriodInDays !== null
            ? output.workflowExecutionRetentionPeriodInDays
            : undefined,
    };
};
const deserializeAws_json1_0DomainDeprecatedFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0DomainDetail = (output, context) => {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_0DomainConfiguration(output.configuration, context)
            : undefined,
        domainInfo: output.domainInfo !== undefined && output.domainInfo !== null
            ? deserializeAws_json1_0DomainInfo(output.domainInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_0DomainInfo = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_0DomainInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0DomainInfo(entry, context);
    });
};
const deserializeAws_json1_0DomainInfos = (output, context) => {
    return {
        domainInfos: output.domainInfos !== undefined && output.domainInfos !== null
            ? deserializeAws_json1_0DomainInfoList(output.domainInfos, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_0ExternalWorkflowExecutionCancelRequestedEventAttributes = (output, context) => {
    return {
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
    };
};
const deserializeAws_json1_0ExternalWorkflowExecutionSignaledEventAttributes = (output, context) => {
    return {
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
    };
};
const deserializeAws_json1_0FailWorkflowExecutionFailedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
const deserializeAws_json1_0History = (output, context) => {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_0HistoryEventList(output.events, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_0HistoryEvent = (output, context) => {
    return {
        activityTaskCancelRequestedEventAttributes: output.activityTaskCancelRequestedEventAttributes !== undefined &&
            output.activityTaskCancelRequestedEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskCancelRequestedEventAttributes(output.activityTaskCancelRequestedEventAttributes, context)
            : undefined,
        activityTaskCanceledEventAttributes: output.activityTaskCanceledEventAttributes !== undefined && output.activityTaskCanceledEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskCanceledEventAttributes(output.activityTaskCanceledEventAttributes, context)
            : undefined,
        activityTaskCompletedEventAttributes: output.activityTaskCompletedEventAttributes !== undefined && output.activityTaskCompletedEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskCompletedEventAttributes(output.activityTaskCompletedEventAttributes, context)
            : undefined,
        activityTaskFailedEventAttributes: output.activityTaskFailedEventAttributes !== undefined && output.activityTaskFailedEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskFailedEventAttributes(output.activityTaskFailedEventAttributes, context)
            : undefined,
        activityTaskScheduledEventAttributes: output.activityTaskScheduledEventAttributes !== undefined && output.activityTaskScheduledEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskScheduledEventAttributes(output.activityTaskScheduledEventAttributes, context)
            : undefined,
        activityTaskStartedEventAttributes: output.activityTaskStartedEventAttributes !== undefined && output.activityTaskStartedEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskStartedEventAttributes(output.activityTaskStartedEventAttributes, context)
            : undefined,
        activityTaskTimedOutEventAttributes: output.activityTaskTimedOutEventAttributes !== undefined && output.activityTaskTimedOutEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskTimedOutEventAttributes(output.activityTaskTimedOutEventAttributes, context)
            : undefined,
        cancelTimerFailedEventAttributes: output.cancelTimerFailedEventAttributes !== undefined && output.cancelTimerFailedEventAttributes !== null
            ? deserializeAws_json1_0CancelTimerFailedEventAttributes(output.cancelTimerFailedEventAttributes, context)
            : undefined,
        cancelWorkflowExecutionFailedEventAttributes: output.cancelWorkflowExecutionFailedEventAttributes !== undefined &&
            output.cancelWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0CancelWorkflowExecutionFailedEventAttributes(output.cancelWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        childWorkflowExecutionCanceledEventAttributes: output.childWorkflowExecutionCanceledEventAttributes !== undefined &&
            output.childWorkflowExecutionCanceledEventAttributes !== null
            ? deserializeAws_json1_0ChildWorkflowExecutionCanceledEventAttributes(output.childWorkflowExecutionCanceledEventAttributes, context)
            : undefined,
        childWorkflowExecutionCompletedEventAttributes: output.childWorkflowExecutionCompletedEventAttributes !== undefined &&
            output.childWorkflowExecutionCompletedEventAttributes !== null
            ? deserializeAws_json1_0ChildWorkflowExecutionCompletedEventAttributes(output.childWorkflowExecutionCompletedEventAttributes, context)
            : undefined,
        childWorkflowExecutionFailedEventAttributes: output.childWorkflowExecutionFailedEventAttributes !== undefined &&
            output.childWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0ChildWorkflowExecutionFailedEventAttributes(output.childWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        childWorkflowExecutionStartedEventAttributes: output.childWorkflowExecutionStartedEventAttributes !== undefined &&
            output.childWorkflowExecutionStartedEventAttributes !== null
            ? deserializeAws_json1_0ChildWorkflowExecutionStartedEventAttributes(output.childWorkflowExecutionStartedEventAttributes, context)
            : undefined,
        childWorkflowExecutionTerminatedEventAttributes: output.childWorkflowExecutionTerminatedEventAttributes !== undefined &&
            output.childWorkflowExecutionTerminatedEventAttributes !== null
            ? deserializeAws_json1_0ChildWorkflowExecutionTerminatedEventAttributes(output.childWorkflowExecutionTerminatedEventAttributes, context)
            : undefined,
        childWorkflowExecutionTimedOutEventAttributes: output.childWorkflowExecutionTimedOutEventAttributes !== undefined &&
            output.childWorkflowExecutionTimedOutEventAttributes !== null
            ? deserializeAws_json1_0ChildWorkflowExecutionTimedOutEventAttributes(output.childWorkflowExecutionTimedOutEventAttributes, context)
            : undefined,
        completeWorkflowExecutionFailedEventAttributes: output.completeWorkflowExecutionFailedEventAttributes !== undefined &&
            output.completeWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0CompleteWorkflowExecutionFailedEventAttributes(output.completeWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        continueAsNewWorkflowExecutionFailedEventAttributes: output.continueAsNewWorkflowExecutionFailedEventAttributes !== undefined &&
            output.continueAsNewWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0ContinueAsNewWorkflowExecutionFailedEventAttributes(output.continueAsNewWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        decisionTaskCompletedEventAttributes: output.decisionTaskCompletedEventAttributes !== undefined && output.decisionTaskCompletedEventAttributes !== null
            ? deserializeAws_json1_0DecisionTaskCompletedEventAttributes(output.decisionTaskCompletedEventAttributes, context)
            : undefined,
        decisionTaskScheduledEventAttributes: output.decisionTaskScheduledEventAttributes !== undefined && output.decisionTaskScheduledEventAttributes !== null
            ? deserializeAws_json1_0DecisionTaskScheduledEventAttributes(output.decisionTaskScheduledEventAttributes, context)
            : undefined,
        decisionTaskStartedEventAttributes: output.decisionTaskStartedEventAttributes !== undefined && output.decisionTaskStartedEventAttributes !== null
            ? deserializeAws_json1_0DecisionTaskStartedEventAttributes(output.decisionTaskStartedEventAttributes, context)
            : undefined,
        decisionTaskTimedOutEventAttributes: output.decisionTaskTimedOutEventAttributes !== undefined && output.decisionTaskTimedOutEventAttributes !== null
            ? deserializeAws_json1_0DecisionTaskTimedOutEventAttributes(output.decisionTaskTimedOutEventAttributes, context)
            : undefined,
        eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
        eventTimestamp: output.eventTimestamp !== undefined && output.eventTimestamp !== null
            ? new Date(Math.round(output.eventTimestamp * 1000))
            : undefined,
        eventType: output.eventType !== undefined && output.eventType !== null ? output.eventType : undefined,
        externalWorkflowExecutionCancelRequestedEventAttributes: output.externalWorkflowExecutionCancelRequestedEventAttributes !== undefined &&
            output.externalWorkflowExecutionCancelRequestedEventAttributes !== null
            ? deserializeAws_json1_0ExternalWorkflowExecutionCancelRequestedEventAttributes(output.externalWorkflowExecutionCancelRequestedEventAttributes, context)
            : undefined,
        externalWorkflowExecutionSignaledEventAttributes: output.externalWorkflowExecutionSignaledEventAttributes !== undefined &&
            output.externalWorkflowExecutionSignaledEventAttributes !== null
            ? deserializeAws_json1_0ExternalWorkflowExecutionSignaledEventAttributes(output.externalWorkflowExecutionSignaledEventAttributes, context)
            : undefined,
        failWorkflowExecutionFailedEventAttributes: output.failWorkflowExecutionFailedEventAttributes !== undefined &&
            output.failWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0FailWorkflowExecutionFailedEventAttributes(output.failWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        lambdaFunctionCompletedEventAttributes: output.lambdaFunctionCompletedEventAttributes !== undefined &&
            output.lambdaFunctionCompletedEventAttributes !== null
            ? deserializeAws_json1_0LambdaFunctionCompletedEventAttributes(output.lambdaFunctionCompletedEventAttributes, context)
            : undefined,
        lambdaFunctionFailedEventAttributes: output.lambdaFunctionFailedEventAttributes !== undefined && output.lambdaFunctionFailedEventAttributes !== null
            ? deserializeAws_json1_0LambdaFunctionFailedEventAttributes(output.lambdaFunctionFailedEventAttributes, context)
            : undefined,
        lambdaFunctionScheduledEventAttributes: output.lambdaFunctionScheduledEventAttributes !== undefined &&
            output.lambdaFunctionScheduledEventAttributes !== null
            ? deserializeAws_json1_0LambdaFunctionScheduledEventAttributes(output.lambdaFunctionScheduledEventAttributes, context)
            : undefined,
        lambdaFunctionStartedEventAttributes: output.lambdaFunctionStartedEventAttributes !== undefined && output.lambdaFunctionStartedEventAttributes !== null
            ? deserializeAws_json1_0LambdaFunctionStartedEventAttributes(output.lambdaFunctionStartedEventAttributes, context)
            : undefined,
        lambdaFunctionTimedOutEventAttributes: output.lambdaFunctionTimedOutEventAttributes !== undefined &&
            output.lambdaFunctionTimedOutEventAttributes !== null
            ? deserializeAws_json1_0LambdaFunctionTimedOutEventAttributes(output.lambdaFunctionTimedOutEventAttributes, context)
            : undefined,
        markerRecordedEventAttributes: output.markerRecordedEventAttributes !== undefined && output.markerRecordedEventAttributes !== null
            ? deserializeAws_json1_0MarkerRecordedEventAttributes(output.markerRecordedEventAttributes, context)
            : undefined,
        recordMarkerFailedEventAttributes: output.recordMarkerFailedEventAttributes !== undefined && output.recordMarkerFailedEventAttributes !== null
            ? deserializeAws_json1_0RecordMarkerFailedEventAttributes(output.recordMarkerFailedEventAttributes, context)
            : undefined,
        requestCancelActivityTaskFailedEventAttributes: output.requestCancelActivityTaskFailedEventAttributes !== undefined &&
            output.requestCancelActivityTaskFailedEventAttributes !== null
            ? deserializeAws_json1_0RequestCancelActivityTaskFailedEventAttributes(output.requestCancelActivityTaskFailedEventAttributes, context)
            : undefined,
        requestCancelExternalWorkflowExecutionFailedEventAttributes: output.requestCancelExternalWorkflowExecutionFailedEventAttributes !== undefined &&
            output.requestCancelExternalWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0RequestCancelExternalWorkflowExecutionFailedEventAttributes(output.requestCancelExternalWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        requestCancelExternalWorkflowExecutionInitiatedEventAttributes: output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes !== undefined &&
            output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes !== null
            ? deserializeAws_json1_0RequestCancelExternalWorkflowExecutionInitiatedEventAttributes(output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes, context)
            : undefined,
        scheduleActivityTaskFailedEventAttributes: output.scheduleActivityTaskFailedEventAttributes !== undefined &&
            output.scheduleActivityTaskFailedEventAttributes !== null
            ? deserializeAws_json1_0ScheduleActivityTaskFailedEventAttributes(output.scheduleActivityTaskFailedEventAttributes, context)
            : undefined,
        scheduleLambdaFunctionFailedEventAttributes: output.scheduleLambdaFunctionFailedEventAttributes !== undefined &&
            output.scheduleLambdaFunctionFailedEventAttributes !== null
            ? deserializeAws_json1_0ScheduleLambdaFunctionFailedEventAttributes(output.scheduleLambdaFunctionFailedEventAttributes, context)
            : undefined,
        signalExternalWorkflowExecutionFailedEventAttributes: output.signalExternalWorkflowExecutionFailedEventAttributes !== undefined &&
            output.signalExternalWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0SignalExternalWorkflowExecutionFailedEventAttributes(output.signalExternalWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        signalExternalWorkflowExecutionInitiatedEventAttributes: output.signalExternalWorkflowExecutionInitiatedEventAttributes !== undefined &&
            output.signalExternalWorkflowExecutionInitiatedEventAttributes !== null
            ? deserializeAws_json1_0SignalExternalWorkflowExecutionInitiatedEventAttributes(output.signalExternalWorkflowExecutionInitiatedEventAttributes, context)
            : undefined,
        startChildWorkflowExecutionFailedEventAttributes: output.startChildWorkflowExecutionFailedEventAttributes !== undefined &&
            output.startChildWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0StartChildWorkflowExecutionFailedEventAttributes(output.startChildWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        startChildWorkflowExecutionInitiatedEventAttributes: output.startChildWorkflowExecutionInitiatedEventAttributes !== undefined &&
            output.startChildWorkflowExecutionInitiatedEventAttributes !== null
            ? deserializeAws_json1_0StartChildWorkflowExecutionInitiatedEventAttributes(output.startChildWorkflowExecutionInitiatedEventAttributes, context)
            : undefined,
        startLambdaFunctionFailedEventAttributes: output.startLambdaFunctionFailedEventAttributes !== undefined &&
            output.startLambdaFunctionFailedEventAttributes !== null
            ? deserializeAws_json1_0StartLambdaFunctionFailedEventAttributes(output.startLambdaFunctionFailedEventAttributes, context)
            : undefined,
        startTimerFailedEventAttributes: output.startTimerFailedEventAttributes !== undefined && output.startTimerFailedEventAttributes !== null
            ? deserializeAws_json1_0StartTimerFailedEventAttributes(output.startTimerFailedEventAttributes, context)
            : undefined,
        timerCanceledEventAttributes: output.timerCanceledEventAttributes !== undefined && output.timerCanceledEventAttributes !== null
            ? deserializeAws_json1_0TimerCanceledEventAttributes(output.timerCanceledEventAttributes, context)
            : undefined,
        timerFiredEventAttributes: output.timerFiredEventAttributes !== undefined && output.timerFiredEventAttributes !== null
            ? deserializeAws_json1_0TimerFiredEventAttributes(output.timerFiredEventAttributes, context)
            : undefined,
        timerStartedEventAttributes: output.timerStartedEventAttributes !== undefined && output.timerStartedEventAttributes !== null
            ? deserializeAws_json1_0TimerStartedEventAttributes(output.timerStartedEventAttributes, context)
            : undefined,
        workflowExecutionCancelRequestedEventAttributes: output.workflowExecutionCancelRequestedEventAttributes !== undefined &&
            output.workflowExecutionCancelRequestedEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionCancelRequestedEventAttributes(output.workflowExecutionCancelRequestedEventAttributes, context)
            : undefined,
        workflowExecutionCanceledEventAttributes: output.workflowExecutionCanceledEventAttributes !== undefined &&
            output.workflowExecutionCanceledEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionCanceledEventAttributes(output.workflowExecutionCanceledEventAttributes, context)
            : undefined,
        workflowExecutionCompletedEventAttributes: output.workflowExecutionCompletedEventAttributes !== undefined &&
            output.workflowExecutionCompletedEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionCompletedEventAttributes(output.workflowExecutionCompletedEventAttributes, context)
            : undefined,
        workflowExecutionContinuedAsNewEventAttributes: output.workflowExecutionContinuedAsNewEventAttributes !== undefined &&
            output.workflowExecutionContinuedAsNewEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionContinuedAsNewEventAttributes(output.workflowExecutionContinuedAsNewEventAttributes, context)
            : undefined,
        workflowExecutionFailedEventAttributes: output.workflowExecutionFailedEventAttributes !== undefined &&
            output.workflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionFailedEventAttributes(output.workflowExecutionFailedEventAttributes, context)
            : undefined,
        workflowExecutionSignaledEventAttributes: output.workflowExecutionSignaledEventAttributes !== undefined &&
            output.workflowExecutionSignaledEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionSignaledEventAttributes(output.workflowExecutionSignaledEventAttributes, context)
            : undefined,
        workflowExecutionStartedEventAttributes: output.workflowExecutionStartedEventAttributes !== undefined &&
            output.workflowExecutionStartedEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionStartedEventAttributes(output.workflowExecutionStartedEventAttributes, context)
            : undefined,
        workflowExecutionTerminatedEventAttributes: output.workflowExecutionTerminatedEventAttributes !== undefined &&
            output.workflowExecutionTerminatedEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionTerminatedEventAttributes(output.workflowExecutionTerminatedEventAttributes, context)
            : undefined,
        workflowExecutionTimedOutEventAttributes: output.workflowExecutionTimedOutEventAttributes !== undefined &&
            output.workflowExecutionTimedOutEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionTimedOutEventAttributes(output.workflowExecutionTimedOutEventAttributes, context)
            : undefined,
    };
};
const deserializeAws_json1_0HistoryEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0HistoryEvent(entry, context);
    });
};
const deserializeAws_json1_0LambdaFunctionCompletedEventAttributes = (output, context) => {
    return {
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionFailedEventAttributes = (output, context) => {
    return {
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionScheduledEventAttributes = (output, context) => {
    return {
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        startToCloseTimeout: output.startToCloseTimeout !== undefined && output.startToCloseTimeout !== null
            ? output.startToCloseTimeout
            : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionStartedEventAttributes = (output, context) => {
    return {
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionTimedOutEventAttributes = (output, context) => {
    return {
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        timeoutType: output.timeoutType !== undefined && output.timeoutType !== null ? output.timeoutType : undefined,
    };
};
const deserializeAws_json1_0LimitExceededFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ListTagsForResourceOutput = (output, context) => {
    return {
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_0ResourceTagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_0MarkerRecordedEventAttributes = (output, context) => {
    return {
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        markerName: output.markerName !== undefined && output.markerName !== null ? output.markerName : undefined,
    };
};
const deserializeAws_json1_0OperationNotPermittedFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0PendingTaskCount = (output, context) => {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        truncated: output.truncated !== undefined && output.truncated !== null ? output.truncated : undefined,
    };
};
const deserializeAws_json1_0RecordMarkerFailedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        markerName: output.markerName !== undefined && output.markerName !== null ? output.markerName : undefined,
    };
};
const deserializeAws_json1_0RequestCancelActivityTaskFailedEventAttributes = (output, context) => {
    return {
        activityId: output.activityId !== undefined && output.activityId !== null ? output.activityId : undefined,
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
const deserializeAws_json1_0RequestCancelExternalWorkflowExecutionFailedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        runId: output.runId !== undefined && output.runId !== null ? output.runId : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
    };
};
const deserializeAws_json1_0RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = (output, context) => {
    return {
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        runId: output.runId !== undefined && output.runId !== null ? output.runId : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
    };
};
const deserializeAws_json1_0ResourceTag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_0ResourceTagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ResourceTag(entry, context);
    });
};
const deserializeAws_json1_0Run = (output, context) => {
    return {
        runId: output.runId !== undefined && output.runId !== null ? output.runId : undefined,
    };
};
const deserializeAws_json1_0ScheduleActivityTaskFailedEventAttributes = (output, context) => {
    return {
        activityId: output.activityId !== undefined && output.activityId !== null ? output.activityId : undefined,
        activityType: output.activityType !== undefined && output.activityType !== null
            ? deserializeAws_json1_0ActivityType(output.activityType, context)
            : undefined,
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
const deserializeAws_json1_0ScheduleLambdaFunctionFailedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_0SignalExternalWorkflowExecutionFailedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        runId: output.runId !== undefined && output.runId !== null ? output.runId : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
    };
};
const deserializeAws_json1_0SignalExternalWorkflowExecutionInitiatedEventAttributes = (output, context) => {
    return {
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        runId: output.runId !== undefined && output.runId !== null ? output.runId : undefined,
        signalName: output.signalName !== undefined && output.signalName !== null ? output.signalName : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
    };
};
const deserializeAws_json1_0StartChildWorkflowExecutionFailedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0StartChildWorkflowExecutionInitiatedEventAttributes = (output, context) => {
    return {
        childPolicy: output.childPolicy !== undefined && output.childPolicy !== null ? output.childPolicy : undefined,
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        executionStartToCloseTimeout: output.executionStartToCloseTimeout !== undefined && output.executionStartToCloseTimeout !== null
            ? output.executionStartToCloseTimeout
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        lambdaRole: output.lambdaRole !== undefined && output.lambdaRole !== null ? output.lambdaRole : undefined,
        tagList: output.tagList !== undefined && output.tagList !== null
            ? deserializeAws_json1_0TagList(output.tagList, context)
            : undefined,
        taskList: output.taskList !== undefined && output.taskList !== null
            ? deserializeAws_json1_0TaskList(output.taskList, context)
            : undefined,
        taskPriority: output.taskPriority !== undefined && output.taskPriority !== null ? output.taskPriority : undefined,
        taskStartToCloseTimeout: output.taskStartToCloseTimeout !== undefined && output.taskStartToCloseTimeout !== null
            ? output.taskStartToCloseTimeout
            : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0StartLambdaFunctionFailedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
    };
};
const deserializeAws_json1_0StartTimerFailedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        timerId: output.timerId !== undefined && output.timerId !== null ? output.timerId : undefined,
    };
};
const deserializeAws_json1_0TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0TaskList = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_0TimerCanceledEventAttributes = (output, context) => {
    return {
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        timerId: output.timerId !== undefined && output.timerId !== null ? output.timerId : undefined,
    };
};
const deserializeAws_json1_0TimerFiredEventAttributes = (output, context) => {
    return {
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        timerId: output.timerId !== undefined && output.timerId !== null ? output.timerId : undefined,
    };
};
const deserializeAws_json1_0TimerStartedEventAttributes = (output, context) => {
    return {
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        startToFireTimeout: output.startToFireTimeout !== undefined && output.startToFireTimeout !== null
            ? output.startToFireTimeout
            : undefined,
        timerId: output.timerId !== undefined && output.timerId !== null ? output.timerId : undefined,
    };
};
const deserializeAws_json1_0TooManyTagsFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0TypeAlreadyExistsFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0TypeDeprecatedFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0UnknownResourceFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecution = (output, context) => {
    return {
        runId: output.runId !== undefined && output.runId !== null ? output.runId : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionAlreadyStartedFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionCanceledEventAttributes = (output, context) => {
    return {
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionCancelRequestedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        externalInitiatedEventId: output.externalInitiatedEventId !== undefined && output.externalInitiatedEventId !== null
            ? output.externalInitiatedEventId
            : undefined,
        externalWorkflowExecution: output.externalWorkflowExecution !== undefined && output.externalWorkflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.externalWorkflowExecution, context)
            : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionCompletedEventAttributes = (output, context) => {
    return {
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionConfiguration = (output, context) => {
    return {
        childPolicy: output.childPolicy !== undefined && output.childPolicy !== null ? output.childPolicy : undefined,
        executionStartToCloseTimeout: output.executionStartToCloseTimeout !== undefined && output.executionStartToCloseTimeout !== null
            ? output.executionStartToCloseTimeout
            : undefined,
        lambdaRole: output.lambdaRole !== undefined && output.lambdaRole !== null ? output.lambdaRole : undefined,
        taskList: output.taskList !== undefined && output.taskList !== null
            ? deserializeAws_json1_0TaskList(output.taskList, context)
            : undefined,
        taskPriority: output.taskPriority !== undefined && output.taskPriority !== null ? output.taskPriority : undefined,
        taskStartToCloseTimeout: output.taskStartToCloseTimeout !== undefined && output.taskStartToCloseTimeout !== null
            ? output.taskStartToCloseTimeout
            : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionContinuedAsNewEventAttributes = (output, context) => {
    return {
        childPolicy: output.childPolicy !== undefined && output.childPolicy !== null ? output.childPolicy : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        executionStartToCloseTimeout: output.executionStartToCloseTimeout !== undefined && output.executionStartToCloseTimeout !== null
            ? output.executionStartToCloseTimeout
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        lambdaRole: output.lambdaRole !== undefined && output.lambdaRole !== null ? output.lambdaRole : undefined,
        newExecutionRunId: output.newExecutionRunId !== undefined && output.newExecutionRunId !== null
            ? output.newExecutionRunId
            : undefined,
        tagList: output.tagList !== undefined && output.tagList !== null
            ? deserializeAws_json1_0TagList(output.tagList, context)
            : undefined,
        taskList: output.taskList !== undefined && output.taskList !== null
            ? deserializeAws_json1_0TaskList(output.taskList, context)
            : undefined,
        taskPriority: output.taskPriority !== undefined && output.taskPriority !== null ? output.taskPriority : undefined,
        taskStartToCloseTimeout: output.taskStartToCloseTimeout !== undefined && output.taskStartToCloseTimeout !== null
            ? output.taskStartToCloseTimeout
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionCount = (output, context) => {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        truncated: output.truncated !== undefined && output.truncated !== null ? output.truncated : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionDetail = (output, context) => {
    return {
        executionConfiguration: output.executionConfiguration !== undefined && output.executionConfiguration !== null
            ? deserializeAws_json1_0WorkflowExecutionConfiguration(output.executionConfiguration, context)
            : undefined,
        executionInfo: output.executionInfo !== undefined && output.executionInfo !== null
            ? deserializeAws_json1_0WorkflowExecutionInfo(output.executionInfo, context)
            : undefined,
        latestActivityTaskTimestamp: output.latestActivityTaskTimestamp !== undefined && output.latestActivityTaskTimestamp !== null
            ? new Date(Math.round(output.latestActivityTaskTimestamp * 1000))
            : undefined,
        latestExecutionContext: output.latestExecutionContext !== undefined && output.latestExecutionContext !== null
            ? output.latestExecutionContext
            : undefined,
        openCounts: output.openCounts !== undefined && output.openCounts !== null
            ? deserializeAws_json1_0WorkflowExecutionOpenCounts(output.openCounts, context)
            : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionFailedEventAttributes = (output, context) => {
    return {
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionInfo = (output, context) => {
    return {
        cancelRequested: output.cancelRequested !== undefined && output.cancelRequested !== null ? output.cancelRequested : undefined,
        closeStatus: output.closeStatus !== undefined && output.closeStatus !== null ? output.closeStatus : undefined,
        closeTimestamp: output.closeTimestamp !== undefined && output.closeTimestamp !== null
            ? new Date(Math.round(output.closeTimestamp * 1000))
            : undefined,
        execution: output.execution !== undefined && output.execution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.execution, context)
            : undefined,
        executionStatus: output.executionStatus !== undefined && output.executionStatus !== null ? output.executionStatus : undefined,
        parent: output.parent !== undefined && output.parent !== null
            ? deserializeAws_json1_0WorkflowExecution(output.parent, context)
            : undefined,
        startTimestamp: output.startTimestamp !== undefined && output.startTimestamp !== null
            ? new Date(Math.round(output.startTimestamp * 1000))
            : undefined,
        tagList: output.tagList !== undefined && output.tagList !== null
            ? deserializeAws_json1_0TagList(output.tagList, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0WorkflowExecutionInfo(entry, context);
    });
};
const deserializeAws_json1_0WorkflowExecutionInfos = (output, context) => {
    return {
        executionInfos: output.executionInfos !== undefined && output.executionInfos !== null
            ? deserializeAws_json1_0WorkflowExecutionInfoList(output.executionInfos, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionOpenCounts = (output, context) => {
    return {
        openActivityTasks: output.openActivityTasks !== undefined && output.openActivityTasks !== null
            ? output.openActivityTasks
            : undefined,
        openChildWorkflowExecutions: output.openChildWorkflowExecutions !== undefined && output.openChildWorkflowExecutions !== null
            ? output.openChildWorkflowExecutions
            : undefined,
        openDecisionTasks: output.openDecisionTasks !== undefined && output.openDecisionTasks !== null
            ? output.openDecisionTasks
            : undefined,
        openLambdaFunctions: output.openLambdaFunctions !== undefined && output.openLambdaFunctions !== null
            ? output.openLambdaFunctions
            : undefined,
        openTimers: output.openTimers !== undefined && output.openTimers !== null ? output.openTimers : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionSignaledEventAttributes = (output, context) => {
    return {
        externalInitiatedEventId: output.externalInitiatedEventId !== undefined && output.externalInitiatedEventId !== null
            ? output.externalInitiatedEventId
            : undefined,
        externalWorkflowExecution: output.externalWorkflowExecution !== undefined && output.externalWorkflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.externalWorkflowExecution, context)
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        signalName: output.signalName !== undefined && output.signalName !== null ? output.signalName : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionStartedEventAttributes = (output, context) => {
    return {
        childPolicy: output.childPolicy !== undefined && output.childPolicy !== null ? output.childPolicy : undefined,
        continuedExecutionRunId: output.continuedExecutionRunId !== undefined && output.continuedExecutionRunId !== null
            ? output.continuedExecutionRunId
            : undefined,
        executionStartToCloseTimeout: output.executionStartToCloseTimeout !== undefined && output.executionStartToCloseTimeout !== null
            ? output.executionStartToCloseTimeout
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        lambdaRole: output.lambdaRole !== undefined && output.lambdaRole !== null ? output.lambdaRole : undefined,
        parentInitiatedEventId: output.parentInitiatedEventId !== undefined && output.parentInitiatedEventId !== null
            ? output.parentInitiatedEventId
            : undefined,
        parentWorkflowExecution: output.parentWorkflowExecution !== undefined && output.parentWorkflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.parentWorkflowExecution, context)
            : undefined,
        tagList: output.tagList !== undefined && output.tagList !== null
            ? deserializeAws_json1_0TagList(output.tagList, context)
            : undefined,
        taskList: output.taskList !== undefined && output.taskList !== null
            ? deserializeAws_json1_0TaskList(output.taskList, context)
            : undefined,
        taskPriority: output.taskPriority !== undefined && output.taskPriority !== null ? output.taskPriority : undefined,
        taskStartToCloseTimeout: output.taskStartToCloseTimeout !== undefined && output.taskStartToCloseTimeout !== null
            ? output.taskStartToCloseTimeout
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionTerminatedEventAttributes = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        childPolicy: output.childPolicy !== undefined && output.childPolicy !== null ? output.childPolicy : undefined,
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
const deserializeAws_json1_0WorkflowExecutionTimedOutEventAttributes = (output, context) => {
    return {
        childPolicy: output.childPolicy !== undefined && output.childPolicy !== null ? output.childPolicy : undefined,
        timeoutType: output.timeoutType !== undefined && output.timeoutType !== null ? output.timeoutType : undefined,
    };
};
const deserializeAws_json1_0WorkflowType = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_json1_0WorkflowTypeConfiguration = (output, context) => {
    return {
        defaultChildPolicy: output.defaultChildPolicy !== undefined && output.defaultChildPolicy !== null
            ? output.defaultChildPolicy
            : undefined,
        defaultExecutionStartToCloseTimeout: output.defaultExecutionStartToCloseTimeout !== undefined && output.defaultExecutionStartToCloseTimeout !== null
            ? output.defaultExecutionStartToCloseTimeout
            : undefined,
        defaultLambdaRole: output.defaultLambdaRole !== undefined && output.defaultLambdaRole !== null
            ? output.defaultLambdaRole
            : undefined,
        defaultTaskList: output.defaultTaskList !== undefined && output.defaultTaskList !== null
            ? deserializeAws_json1_0TaskList(output.defaultTaskList, context)
            : undefined,
        defaultTaskPriority: output.defaultTaskPriority !== undefined && output.defaultTaskPriority !== null
            ? output.defaultTaskPriority
            : undefined,
        defaultTaskStartToCloseTimeout: output.defaultTaskStartToCloseTimeout !== undefined && output.defaultTaskStartToCloseTimeout !== null
            ? output.defaultTaskStartToCloseTimeout
            : undefined,
    };
};
const deserializeAws_json1_0WorkflowTypeDetail = (output, context) => {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_0WorkflowTypeConfiguration(output.configuration, context)
            : undefined,
        typeInfo: output.typeInfo !== undefined && output.typeInfo !== null
            ? deserializeAws_json1_0WorkflowTypeInfo(output.typeInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_0WorkflowTypeInfo = (output, context) => {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        deprecationDate: output.deprecationDate !== undefined && output.deprecationDate !== null
            ? new Date(Math.round(output.deprecationDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
const deserializeAws_json1_0WorkflowTypeInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0WorkflowTypeInfo(entry, context);
    });
};
const deserializeAws_json1_0WorkflowTypeInfos = (output, context) => {
    return {
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        typeInfos: output.typeInfos !== undefined && output.typeInfos !== null
            ? deserializeAws_json1_0WorkflowTypeInfoList(output.typeInfos, context)
            : undefined,
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
//# sourceMappingURL=Aws_json1_0.js.map