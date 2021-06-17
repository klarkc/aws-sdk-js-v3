"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1DescribeExclusionsCommand = exports.deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand = exports.deserializeAws_json1_1DescribeAssessmentTemplatesCommand = exports.deserializeAws_json1_1DescribeAssessmentTargetsCommand = exports.deserializeAws_json1_1DescribeAssessmentRunsCommand = exports.deserializeAws_json1_1DeleteAssessmentTemplateCommand = exports.deserializeAws_json1_1DeleteAssessmentTargetCommand = exports.deserializeAws_json1_1DeleteAssessmentRunCommand = exports.deserializeAws_json1_1CreateResourceGroupCommand = exports.deserializeAws_json1_1CreateExclusionsPreviewCommand = exports.deserializeAws_json1_1CreateAssessmentTemplateCommand = exports.deserializeAws_json1_1CreateAssessmentTargetCommand = exports.deserializeAws_json1_1AddAttributesToFindingsCommand = exports.serializeAws_json1_1UpdateAssessmentTargetCommand = exports.serializeAws_json1_1UnsubscribeFromEventCommand = exports.serializeAws_json1_1SubscribeToEventCommand = exports.serializeAws_json1_1StopAssessmentRunCommand = exports.serializeAws_json1_1StartAssessmentRunCommand = exports.serializeAws_json1_1SetTagsForResourceCommand = exports.serializeAws_json1_1RemoveAttributesFromFindingsCommand = exports.serializeAws_json1_1RegisterCrossAccountAccessRoleCommand = exports.serializeAws_json1_1PreviewAgentsCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListRulesPackagesCommand = exports.serializeAws_json1_1ListFindingsCommand = exports.serializeAws_json1_1ListExclusionsCommand = exports.serializeAws_json1_1ListEventSubscriptionsCommand = exports.serializeAws_json1_1ListAssessmentTemplatesCommand = exports.serializeAws_json1_1ListAssessmentTargetsCommand = exports.serializeAws_json1_1ListAssessmentRunsCommand = exports.serializeAws_json1_1ListAssessmentRunAgentsCommand = exports.serializeAws_json1_1GetTelemetryMetadataCommand = exports.serializeAws_json1_1GetExclusionsPreviewCommand = exports.serializeAws_json1_1GetAssessmentReportCommand = exports.serializeAws_json1_1DescribeRulesPackagesCommand = exports.serializeAws_json1_1DescribeResourceGroupsCommand = exports.serializeAws_json1_1DescribeFindingsCommand = exports.serializeAws_json1_1DescribeExclusionsCommand = exports.serializeAws_json1_1DescribeCrossAccountAccessRoleCommand = exports.serializeAws_json1_1DescribeAssessmentTemplatesCommand = exports.serializeAws_json1_1DescribeAssessmentTargetsCommand = exports.serializeAws_json1_1DescribeAssessmentRunsCommand = exports.serializeAws_json1_1DeleteAssessmentTemplateCommand = exports.serializeAws_json1_1DeleteAssessmentTargetCommand = exports.serializeAws_json1_1DeleteAssessmentRunCommand = exports.serializeAws_json1_1CreateResourceGroupCommand = exports.serializeAws_json1_1CreateExclusionsPreviewCommand = exports.serializeAws_json1_1CreateAssessmentTemplateCommand = exports.serializeAws_json1_1CreateAssessmentTargetCommand = exports.serializeAws_json1_1AddAttributesToFindingsCommand = void 0;
exports.deserializeAws_json1_1UpdateAssessmentTargetCommand = exports.deserializeAws_json1_1UnsubscribeFromEventCommand = exports.deserializeAws_json1_1SubscribeToEventCommand = exports.deserializeAws_json1_1StopAssessmentRunCommand = exports.deserializeAws_json1_1StartAssessmentRunCommand = exports.deserializeAws_json1_1SetTagsForResourceCommand = exports.deserializeAws_json1_1RemoveAttributesFromFindingsCommand = exports.deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand = exports.deserializeAws_json1_1PreviewAgentsCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListRulesPackagesCommand = exports.deserializeAws_json1_1ListFindingsCommand = exports.deserializeAws_json1_1ListExclusionsCommand = exports.deserializeAws_json1_1ListEventSubscriptionsCommand = exports.deserializeAws_json1_1ListAssessmentTemplatesCommand = exports.deserializeAws_json1_1ListAssessmentTargetsCommand = exports.deserializeAws_json1_1ListAssessmentRunsCommand = exports.deserializeAws_json1_1ListAssessmentRunAgentsCommand = exports.deserializeAws_json1_1GetTelemetryMetadataCommand = exports.deserializeAws_json1_1GetExclusionsPreviewCommand = exports.deserializeAws_json1_1GetAssessmentReportCommand = exports.deserializeAws_json1_1DescribeRulesPackagesCommand = exports.deserializeAws_json1_1DescribeResourceGroupsCommand = exports.deserializeAws_json1_1DescribeFindingsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddAttributesToFindingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.AddAttributesToFindings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddAttributesToFindingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddAttributesToFindingsCommand = serializeAws_json1_1AddAttributesToFindingsCommand;
const serializeAws_json1_1CreateAssessmentTargetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.CreateAssessmentTarget",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAssessmentTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAssessmentTargetCommand = serializeAws_json1_1CreateAssessmentTargetCommand;
const serializeAws_json1_1CreateAssessmentTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.CreateAssessmentTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAssessmentTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAssessmentTemplateCommand = serializeAws_json1_1CreateAssessmentTemplateCommand;
const serializeAws_json1_1CreateExclusionsPreviewCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.CreateExclusionsPreview",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateExclusionsPreviewRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateExclusionsPreviewCommand = serializeAws_json1_1CreateExclusionsPreviewCommand;
const serializeAws_json1_1CreateResourceGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.CreateResourceGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResourceGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateResourceGroupCommand = serializeAws_json1_1CreateResourceGroupCommand;
const serializeAws_json1_1DeleteAssessmentRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.DeleteAssessmentRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAssessmentRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAssessmentRunCommand = serializeAws_json1_1DeleteAssessmentRunCommand;
const serializeAws_json1_1DeleteAssessmentTargetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.DeleteAssessmentTarget",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAssessmentTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAssessmentTargetCommand = serializeAws_json1_1DeleteAssessmentTargetCommand;
const serializeAws_json1_1DeleteAssessmentTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.DeleteAssessmentTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAssessmentTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAssessmentTemplateCommand = serializeAws_json1_1DeleteAssessmentTemplateCommand;
const serializeAws_json1_1DescribeAssessmentRunsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.DescribeAssessmentRuns",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAssessmentRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAssessmentRunsCommand = serializeAws_json1_1DescribeAssessmentRunsCommand;
const serializeAws_json1_1DescribeAssessmentTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.DescribeAssessmentTargets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAssessmentTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAssessmentTargetsCommand = serializeAws_json1_1DescribeAssessmentTargetsCommand;
const serializeAws_json1_1DescribeAssessmentTemplatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.DescribeAssessmentTemplates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAssessmentTemplatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAssessmentTemplatesCommand = serializeAws_json1_1DescribeAssessmentTemplatesCommand;
const serializeAws_json1_1DescribeCrossAccountAccessRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.DescribeCrossAccountAccessRole",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCrossAccountAccessRoleCommand = serializeAws_json1_1DescribeCrossAccountAccessRoleCommand;
const serializeAws_json1_1DescribeExclusionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.DescribeExclusions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeExclusionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeExclusionsCommand = serializeAws_json1_1DescribeExclusionsCommand;
const serializeAws_json1_1DescribeFindingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.DescribeFindings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFindingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFindingsCommand = serializeAws_json1_1DescribeFindingsCommand;
const serializeAws_json1_1DescribeResourceGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.DescribeResourceGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeResourceGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeResourceGroupsCommand = serializeAws_json1_1DescribeResourceGroupsCommand;
const serializeAws_json1_1DescribeRulesPackagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.DescribeRulesPackages",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRulesPackagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRulesPackagesCommand = serializeAws_json1_1DescribeRulesPackagesCommand;
const serializeAws_json1_1GetAssessmentReportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.GetAssessmentReport",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAssessmentReportRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAssessmentReportCommand = serializeAws_json1_1GetAssessmentReportCommand;
const serializeAws_json1_1GetExclusionsPreviewCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.GetExclusionsPreview",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetExclusionsPreviewRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetExclusionsPreviewCommand = serializeAws_json1_1GetExclusionsPreviewCommand;
const serializeAws_json1_1GetTelemetryMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.GetTelemetryMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTelemetryMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTelemetryMetadataCommand = serializeAws_json1_1GetTelemetryMetadataCommand;
const serializeAws_json1_1ListAssessmentRunAgentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.ListAssessmentRunAgents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssessmentRunAgentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAssessmentRunAgentsCommand = serializeAws_json1_1ListAssessmentRunAgentsCommand;
const serializeAws_json1_1ListAssessmentRunsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.ListAssessmentRuns",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssessmentRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAssessmentRunsCommand = serializeAws_json1_1ListAssessmentRunsCommand;
const serializeAws_json1_1ListAssessmentTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.ListAssessmentTargets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssessmentTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAssessmentTargetsCommand = serializeAws_json1_1ListAssessmentTargetsCommand;
const serializeAws_json1_1ListAssessmentTemplatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.ListAssessmentTemplates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssessmentTemplatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAssessmentTemplatesCommand = serializeAws_json1_1ListAssessmentTemplatesCommand;
const serializeAws_json1_1ListEventSubscriptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.ListEventSubscriptions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEventSubscriptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListEventSubscriptionsCommand = serializeAws_json1_1ListEventSubscriptionsCommand;
const serializeAws_json1_1ListExclusionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.ListExclusions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListExclusionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListExclusionsCommand = serializeAws_json1_1ListExclusionsCommand;
const serializeAws_json1_1ListFindingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.ListFindings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFindingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFindingsCommand = serializeAws_json1_1ListFindingsCommand;
const serializeAws_json1_1ListRulesPackagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.ListRulesPackages",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRulesPackagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRulesPackagesCommand = serializeAws_json1_1ListRulesPackagesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1PreviewAgentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.PreviewAgents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PreviewAgentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PreviewAgentsCommand = serializeAws_json1_1PreviewAgentsCommand;
const serializeAws_json1_1RegisterCrossAccountAccessRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.RegisterCrossAccountAccessRole",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterCrossAccountAccessRoleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterCrossAccountAccessRoleCommand = serializeAws_json1_1RegisterCrossAccountAccessRoleCommand;
const serializeAws_json1_1RemoveAttributesFromFindingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.RemoveAttributesFromFindings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveAttributesFromFindingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveAttributesFromFindingsCommand = serializeAws_json1_1RemoveAttributesFromFindingsCommand;
const serializeAws_json1_1SetTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.SetTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetTagsForResourceCommand = serializeAws_json1_1SetTagsForResourceCommand;
const serializeAws_json1_1StartAssessmentRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.StartAssessmentRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartAssessmentRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartAssessmentRunCommand = serializeAws_json1_1StartAssessmentRunCommand;
const serializeAws_json1_1StopAssessmentRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.StopAssessmentRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopAssessmentRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopAssessmentRunCommand = serializeAws_json1_1StopAssessmentRunCommand;
const serializeAws_json1_1SubscribeToEventCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.SubscribeToEvent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SubscribeToEventRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SubscribeToEventCommand = serializeAws_json1_1SubscribeToEventCommand;
const serializeAws_json1_1UnsubscribeFromEventCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.UnsubscribeFromEvent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UnsubscribeFromEventRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UnsubscribeFromEventCommand = serializeAws_json1_1UnsubscribeFromEventCommand;
const serializeAws_json1_1UpdateAssessmentTargetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "InspectorService.UpdateAssessmentTarget",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAssessmentTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAssessmentTargetCommand = serializeAws_json1_1UpdateAssessmentTargetCommand;
const deserializeAws_json1_1AddAttributesToFindingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddAttributesToFindingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddAttributesToFindingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddAttributesToFindingsCommand = deserializeAws_json1_1AddAttributesToFindingsCommand;
const deserializeAws_json1_1AddAttributesToFindingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateAssessmentTargetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAssessmentTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAssessmentTargetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAssessmentTargetCommand = deserializeAws_json1_1CreateAssessmentTargetCommand;
const deserializeAws_json1_1CreateAssessmentTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCrossAccountRoleException":
        case "com.amazonaws.inspector#InvalidCrossAccountRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.inspector#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateAssessmentTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAssessmentTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAssessmentTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAssessmentTemplateCommand = deserializeAws_json1_1CreateAssessmentTemplateCommand;
const deserializeAws_json1_1CreateAssessmentTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.inspector#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateExclusionsPreviewCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateExclusionsPreviewCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateExclusionsPreviewResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateExclusionsPreviewCommand = deserializeAws_json1_1CreateExclusionsPreviewCommand;
const deserializeAws_json1_1CreateExclusionsPreviewCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreviewGenerationInProgressException":
        case "com.amazonaws.inspector#PreviewGenerationInProgressException":
            response = {
                ...(await deserializeAws_json1_1PreviewGenerationInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateResourceGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateResourceGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResourceGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateResourceGroupCommand = deserializeAws_json1_1CreateResourceGroupCommand;
const deserializeAws_json1_1CreateResourceGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.inspector#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAssessmentRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAssessmentRunCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAssessmentRunCommand = deserializeAws_json1_1DeleteAssessmentRunCommand;
const deserializeAws_json1_1DeleteAssessmentRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AssessmentRunInProgressException":
        case "com.amazonaws.inspector#AssessmentRunInProgressException":
            response = {
                ...(await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAssessmentTargetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAssessmentTargetCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAssessmentTargetCommand = deserializeAws_json1_1DeleteAssessmentTargetCommand;
const deserializeAws_json1_1DeleteAssessmentTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AssessmentRunInProgressException":
        case "com.amazonaws.inspector#AssessmentRunInProgressException":
            response = {
                ...(await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAssessmentTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAssessmentTemplateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAssessmentTemplateCommand = deserializeAws_json1_1DeleteAssessmentTemplateCommand;
const deserializeAws_json1_1DeleteAssessmentTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AssessmentRunInProgressException":
        case "com.amazonaws.inspector#AssessmentRunInProgressException":
            response = {
                ...(await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeAssessmentRunsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAssessmentRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAssessmentRunsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAssessmentRunsCommand = deserializeAws_json1_1DescribeAssessmentRunsCommand;
const deserializeAws_json1_1DescribeAssessmentRunsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
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
const deserializeAws_json1_1DescribeAssessmentTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAssessmentTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAssessmentTargetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAssessmentTargetsCommand = deserializeAws_json1_1DescribeAssessmentTargetsCommand;
const deserializeAws_json1_1DescribeAssessmentTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
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
const deserializeAws_json1_1DescribeAssessmentTemplatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAssessmentTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAssessmentTemplatesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAssessmentTemplatesCommand = deserializeAws_json1_1DescribeAssessmentTemplatesCommand;
const deserializeAws_json1_1DescribeAssessmentTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
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
const deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCrossAccountAccessRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCrossAccountAccessRoleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand = deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand;
const deserializeAws_json1_1DescribeCrossAccountAccessRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeExclusionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeExclusionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeExclusionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeExclusionsCommand = deserializeAws_json1_1DescribeExclusionsCommand;
const deserializeAws_json1_1DescribeExclusionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
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
const deserializeAws_json1_1DescribeFindingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFindingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFindingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFindingsCommand = deserializeAws_json1_1DescribeFindingsCommand;
const deserializeAws_json1_1DescribeFindingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
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
const deserializeAws_json1_1DescribeResourceGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeResourceGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeResourceGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeResourceGroupsCommand = deserializeAws_json1_1DescribeResourceGroupsCommand;
const deserializeAws_json1_1DescribeResourceGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
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
const deserializeAws_json1_1DescribeRulesPackagesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRulesPackagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRulesPackagesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRulesPackagesCommand = deserializeAws_json1_1DescribeRulesPackagesCommand;
const deserializeAws_json1_1DescribeRulesPackagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
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
const deserializeAws_json1_1GetAssessmentReportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAssessmentReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAssessmentReportResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAssessmentReportCommand = deserializeAws_json1_1GetAssessmentReportCommand;
const deserializeAws_json1_1GetAssessmentReportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AssessmentRunInProgressException":
        case "com.amazonaws.inspector#AssessmentRunInProgressException":
            response = {
                ...(await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.inspector#UnsupportedFeatureException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetExclusionsPreviewCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetExclusionsPreviewCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetExclusionsPreviewResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetExclusionsPreviewCommand = deserializeAws_json1_1GetExclusionsPreviewCommand;
const deserializeAws_json1_1GetExclusionsPreviewCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetTelemetryMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTelemetryMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTelemetryMetadataResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTelemetryMetadataCommand = deserializeAws_json1_1GetTelemetryMetadataCommand;
const deserializeAws_json1_1GetTelemetryMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListAssessmentRunAgentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAssessmentRunAgentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssessmentRunAgentsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAssessmentRunAgentsCommand = deserializeAws_json1_1ListAssessmentRunAgentsCommand;
const deserializeAws_json1_1ListAssessmentRunAgentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListAssessmentRunsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAssessmentRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssessmentRunsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAssessmentRunsCommand = deserializeAws_json1_1ListAssessmentRunsCommand;
const deserializeAws_json1_1ListAssessmentRunsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListAssessmentTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAssessmentTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssessmentTargetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAssessmentTargetsCommand = deserializeAws_json1_1ListAssessmentTargetsCommand;
const deserializeAws_json1_1ListAssessmentTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
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
const deserializeAws_json1_1ListAssessmentTemplatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAssessmentTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssessmentTemplatesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAssessmentTemplatesCommand = deserializeAws_json1_1ListAssessmentTemplatesCommand;
const deserializeAws_json1_1ListAssessmentTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListEventSubscriptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListEventSubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEventSubscriptionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListEventSubscriptionsCommand = deserializeAws_json1_1ListEventSubscriptionsCommand;
const deserializeAws_json1_1ListEventSubscriptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListExclusionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListExclusionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListExclusionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListExclusionsCommand = deserializeAws_json1_1ListExclusionsCommand;
const deserializeAws_json1_1ListExclusionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListFindingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFindingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFindingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFindingsCommand = deserializeAws_json1_1ListFindingsCommand;
const deserializeAws_json1_1ListFindingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListRulesPackagesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRulesPackagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRulesPackagesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRulesPackagesCommand = deserializeAws_json1_1ListRulesPackagesCommand;
const deserializeAws_json1_1ListRulesPackagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
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
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PreviewAgentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PreviewAgentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PreviewAgentsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PreviewAgentsCommand = deserializeAws_json1_1PreviewAgentsCommand;
const deserializeAws_json1_1PreviewAgentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCrossAccountRoleException":
        case "com.amazonaws.inspector#InvalidCrossAccountRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterCrossAccountAccessRoleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand = deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand;
const deserializeAws_json1_1RegisterCrossAccountAccessRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCrossAccountRoleException":
        case "com.amazonaws.inspector#InvalidCrossAccountRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RemoveAttributesFromFindingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveAttributesFromFindingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveAttributesFromFindingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveAttributesFromFindingsCommand = deserializeAws_json1_1RemoveAttributesFromFindingsCommand;
const deserializeAws_json1_1RemoveAttributesFromFindingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SetTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetTagsForResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetTagsForResourceCommand = deserializeAws_json1_1SetTagsForResourceCommand;
const deserializeAws_json1_1SetTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartAssessmentRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartAssessmentRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartAssessmentRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartAssessmentRunCommand = deserializeAws_json1_1StartAssessmentRunCommand;
const deserializeAws_json1_1StartAssessmentRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AgentsAlreadyRunningAssessmentException":
        case "com.amazonaws.inspector#AgentsAlreadyRunningAssessmentException":
            response = {
                ...(await deserializeAws_json1_1AgentsAlreadyRunningAssessmentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCrossAccountRoleException":
        case "com.amazonaws.inspector#InvalidCrossAccountRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.inspector#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StopAssessmentRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopAssessmentRunCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopAssessmentRunCommand = deserializeAws_json1_1StopAssessmentRunCommand;
const deserializeAws_json1_1StopAssessmentRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SubscribeToEventCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SubscribeToEventCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SubscribeToEventCommand = deserializeAws_json1_1SubscribeToEventCommand;
const deserializeAws_json1_1SubscribeToEventCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.inspector#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UnsubscribeFromEventCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UnsubscribeFromEventCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UnsubscribeFromEventCommand = deserializeAws_json1_1UnsubscribeFromEventCommand;
const deserializeAws_json1_1UnsubscribeFromEventCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateAssessmentTargetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAssessmentTargetCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAssessmentTargetCommand = deserializeAws_json1_1UpdateAssessmentTargetCommand;
const deserializeAws_json1_1UpdateAssessmentTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.inspector#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector#NoSuchEntityException":
            response = {
                ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
const deserializeAws_json1_1AgentsAlreadyRunningAssessmentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AgentsAlreadyRunningAssessmentException(body, context);
    const contents = {
        name: "AgentsAlreadyRunningAssessmentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AssessmentRunInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssessmentRunInProgressException(body, context);
    const contents = {
        name: "AssessmentRunInProgressException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalException(body, context);
    const contents = {
        name: "InternalException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCrossAccountRoleException(body, context);
    const contents = {
        name: "InvalidCrossAccountRoleException",
        $fault: "client",
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
const deserializeAws_json1_1NoSuchEntityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchEntityException(body, context);
    const contents = {
        name: "NoSuchEntityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PreviewGenerationInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PreviewGenerationInProgressException(body, context);
    const contents = {
        name: "PreviewGenerationInProgressException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceTemporarilyUnavailableException(body, context);
    const contents = {
        name: "ServiceTemporarilyUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedFeatureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedFeatureException(body, context);
    const contents = {
        name: "UnsupportedFeatureException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AddAttributesToFindingsRequest = (input, context) => {
    return {
        ...(input.attributes !== undefined &&
            input.attributes !== null && { attributes: serializeAws_json1_1UserAttributeList(input.attributes, context) }),
        ...(input.findingArns !== undefined &&
            input.findingArns !== null && {
            findingArns: serializeAws_json1_1AddRemoveAttributesFindingArnList(input.findingArns, context),
        }),
    };
};
const serializeAws_json1_1AddRemoveAttributesFindingArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AgentFilter = (input, context) => {
    return {
        ...(input.agentHealthCodes !== undefined &&
            input.agentHealthCodes !== null && {
            agentHealthCodes: serializeAws_json1_1AgentHealthCodeList(input.agentHealthCodes, context),
        }),
        ...(input.agentHealths !== undefined &&
            input.agentHealths !== null && {
            agentHealths: serializeAws_json1_1AgentHealthList(input.agentHealths, context),
        }),
    };
};
const serializeAws_json1_1AgentHealthCodeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AgentHealthList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AgentIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AssessmentRunFilter = (input, context) => {
    return {
        ...(input.completionTimeRange !== undefined &&
            input.completionTimeRange !== null && {
            completionTimeRange: serializeAws_json1_1TimestampRange(input.completionTimeRange, context),
        }),
        ...(input.durationRange !== undefined &&
            input.durationRange !== null && {
            durationRange: serializeAws_json1_1DurationRange(input.durationRange, context),
        }),
        ...(input.namePattern !== undefined && input.namePattern !== null && { namePattern: input.namePattern }),
        ...(input.rulesPackageArns !== undefined &&
            input.rulesPackageArns !== null && {
            rulesPackageArns: serializeAws_json1_1FilterRulesPackageArnList(input.rulesPackageArns, context),
        }),
        ...(input.startTimeRange !== undefined &&
            input.startTimeRange !== null && {
            startTimeRange: serializeAws_json1_1TimestampRange(input.startTimeRange, context),
        }),
        ...(input.stateChangeTimeRange !== undefined &&
            input.stateChangeTimeRange !== null && {
            stateChangeTimeRange: serializeAws_json1_1TimestampRange(input.stateChangeTimeRange, context),
        }),
        ...(input.states !== undefined &&
            input.states !== null && { states: serializeAws_json1_1AssessmentRunStateList(input.states, context) }),
    };
};
const serializeAws_json1_1AssessmentRunStateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AssessmentTargetFilter = (input, context) => {
    return {
        ...(input.assessmentTargetNamePattern !== undefined &&
            input.assessmentTargetNamePattern !== null && { assessmentTargetNamePattern: input.assessmentTargetNamePattern }),
    };
};
const serializeAws_json1_1AssessmentTemplateFilter = (input, context) => {
    return {
        ...(input.durationRange !== undefined &&
            input.durationRange !== null && {
            durationRange: serializeAws_json1_1DurationRange(input.durationRange, context),
        }),
        ...(input.namePattern !== undefined && input.namePattern !== null && { namePattern: input.namePattern }),
        ...(input.rulesPackageArns !== undefined &&
            input.rulesPackageArns !== null && {
            rulesPackageArns: serializeAws_json1_1FilterRulesPackageArnList(input.rulesPackageArns, context),
        }),
    };
};
const serializeAws_json1_1AssessmentTemplateRulesPackageArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Attribute = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1AttributeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Attribute(entry, context);
    });
};
const serializeAws_json1_1AutoScalingGroupList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1BatchDescribeArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1BatchDescribeExclusionsArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CreateAssessmentTargetRequest = (input, context) => {
    return {
        ...(input.assessmentTargetName !== undefined &&
            input.assessmentTargetName !== null && { assessmentTargetName: input.assessmentTargetName }),
        ...(input.resourceGroupArn !== undefined &&
            input.resourceGroupArn !== null && { resourceGroupArn: input.resourceGroupArn }),
    };
};
const serializeAws_json1_1CreateAssessmentTemplateRequest = (input, context) => {
    return {
        ...(input.assessmentTargetArn !== undefined &&
            input.assessmentTargetArn !== null && { assessmentTargetArn: input.assessmentTargetArn }),
        ...(input.assessmentTemplateName !== undefined &&
            input.assessmentTemplateName !== null && { assessmentTemplateName: input.assessmentTemplateName }),
        ...(input.durationInSeconds !== undefined &&
            input.durationInSeconds !== null && { durationInSeconds: input.durationInSeconds }),
        ...(input.rulesPackageArns !== undefined &&
            input.rulesPackageArns !== null && {
            rulesPackageArns: serializeAws_json1_1AssessmentTemplateRulesPackageArnList(input.rulesPackageArns, context),
        }),
        ...(input.userAttributesForFindings !== undefined &&
            input.userAttributesForFindings !== null && {
            userAttributesForFindings: serializeAws_json1_1UserAttributeList(input.userAttributesForFindings, context),
        }),
    };
};
const serializeAws_json1_1CreateExclusionsPreviewRequest = (input, context) => {
    return {
        ...(input.assessmentTemplateArn !== undefined &&
            input.assessmentTemplateArn !== null && { assessmentTemplateArn: input.assessmentTemplateArn }),
    };
};
const serializeAws_json1_1CreateResourceGroupRequest = (input, context) => {
    return {
        ...(input.resourceGroupTags !== undefined &&
            input.resourceGroupTags !== null && {
            resourceGroupTags: serializeAws_json1_1ResourceGroupTags(input.resourceGroupTags, context),
        }),
    };
};
const serializeAws_json1_1DeleteAssessmentRunRequest = (input, context) => {
    return {
        ...(input.assessmentRunArn !== undefined &&
            input.assessmentRunArn !== null && { assessmentRunArn: input.assessmentRunArn }),
    };
};
const serializeAws_json1_1DeleteAssessmentTargetRequest = (input, context) => {
    return {
        ...(input.assessmentTargetArn !== undefined &&
            input.assessmentTargetArn !== null && { assessmentTargetArn: input.assessmentTargetArn }),
    };
};
const serializeAws_json1_1DeleteAssessmentTemplateRequest = (input, context) => {
    return {
        ...(input.assessmentTemplateArn !== undefined &&
            input.assessmentTemplateArn !== null && { assessmentTemplateArn: input.assessmentTemplateArn }),
    };
};
const serializeAws_json1_1DescribeAssessmentRunsRequest = (input, context) => {
    return {
        ...(input.assessmentRunArns !== undefined &&
            input.assessmentRunArns !== null && {
            assessmentRunArns: serializeAws_json1_1BatchDescribeArnList(input.assessmentRunArns, context),
        }),
    };
};
const serializeAws_json1_1DescribeAssessmentTargetsRequest = (input, context) => {
    return {
        ...(input.assessmentTargetArns !== undefined &&
            input.assessmentTargetArns !== null && {
            assessmentTargetArns: serializeAws_json1_1BatchDescribeArnList(input.assessmentTargetArns, context),
        }),
    };
};
const serializeAws_json1_1DescribeAssessmentTemplatesRequest = (input, context) => {
    return {
        ...(input.assessmentTemplateArns !== undefined &&
            input.assessmentTemplateArns !== null && {
            assessmentTemplateArns: serializeAws_json1_1BatchDescribeArnList(input.assessmentTemplateArns, context),
        }),
    };
};
const serializeAws_json1_1DescribeExclusionsRequest = (input, context) => {
    return {
        ...(input.exclusionArns !== undefined &&
            input.exclusionArns !== null && {
            exclusionArns: serializeAws_json1_1BatchDescribeExclusionsArnList(input.exclusionArns, context),
        }),
        ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    };
};
const serializeAws_json1_1DescribeFindingsRequest = (input, context) => {
    return {
        ...(input.findingArns !== undefined &&
            input.findingArns !== null && {
            findingArns: serializeAws_json1_1BatchDescribeArnList(input.findingArns, context),
        }),
        ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    };
};
const serializeAws_json1_1DescribeResourceGroupsRequest = (input, context) => {
    return {
        ...(input.resourceGroupArns !== undefined &&
            input.resourceGroupArns !== null && {
            resourceGroupArns: serializeAws_json1_1BatchDescribeArnList(input.resourceGroupArns, context),
        }),
    };
};
const serializeAws_json1_1DescribeRulesPackagesRequest = (input, context) => {
    return {
        ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
        ...(input.rulesPackageArns !== undefined &&
            input.rulesPackageArns !== null && {
            rulesPackageArns: serializeAws_json1_1BatchDescribeArnList(input.rulesPackageArns, context),
        }),
    };
};
const serializeAws_json1_1DurationRange = (input, context) => {
    return {
        ...(input.maxSeconds !== undefined && input.maxSeconds !== null && { maxSeconds: input.maxSeconds }),
        ...(input.minSeconds !== undefined && input.minSeconds !== null && { minSeconds: input.minSeconds }),
    };
};
const serializeAws_json1_1FilterRulesPackageArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1FindingFilter = (input, context) => {
    return {
        ...(input.agentIds !== undefined &&
            input.agentIds !== null && { agentIds: serializeAws_json1_1AgentIdList(input.agentIds, context) }),
        ...(input.attributes !== undefined &&
            input.attributes !== null && { attributes: serializeAws_json1_1AttributeList(input.attributes, context) }),
        ...(input.autoScalingGroups !== undefined &&
            input.autoScalingGroups !== null && {
            autoScalingGroups: serializeAws_json1_1AutoScalingGroupList(input.autoScalingGroups, context),
        }),
        ...(input.creationTimeRange !== undefined &&
            input.creationTimeRange !== null && {
            creationTimeRange: serializeAws_json1_1TimestampRange(input.creationTimeRange, context),
        }),
        ...(input.ruleNames !== undefined &&
            input.ruleNames !== null && { ruleNames: serializeAws_json1_1RuleNameList(input.ruleNames, context) }),
        ...(input.rulesPackageArns !== undefined &&
            input.rulesPackageArns !== null && {
            rulesPackageArns: serializeAws_json1_1FilterRulesPackageArnList(input.rulesPackageArns, context),
        }),
        ...(input.severities !== undefined &&
            input.severities !== null && { severities: serializeAws_json1_1SeverityList(input.severities, context) }),
        ...(input.userAttributes !== undefined &&
            input.userAttributes !== null && {
            userAttributes: serializeAws_json1_1AttributeList(input.userAttributes, context),
        }),
    };
};
const serializeAws_json1_1GetAssessmentReportRequest = (input, context) => {
    return {
        ...(input.assessmentRunArn !== undefined &&
            input.assessmentRunArn !== null && { assessmentRunArn: input.assessmentRunArn }),
        ...(input.reportFileFormat !== undefined &&
            input.reportFileFormat !== null && { reportFileFormat: input.reportFileFormat }),
        ...(input.reportType !== undefined && input.reportType !== null && { reportType: input.reportType }),
    };
};
const serializeAws_json1_1GetExclusionsPreviewRequest = (input, context) => {
    return {
        ...(input.assessmentTemplateArn !== undefined &&
            input.assessmentTemplateArn !== null && { assessmentTemplateArn: input.assessmentTemplateArn }),
        ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.previewToken !== undefined && input.previewToken !== null && { previewToken: input.previewToken }),
    };
};
const serializeAws_json1_1GetTelemetryMetadataRequest = (input, context) => {
    return {
        ...(input.assessmentRunArn !== undefined &&
            input.assessmentRunArn !== null && { assessmentRunArn: input.assessmentRunArn }),
    };
};
const serializeAws_json1_1ListAssessmentRunAgentsRequest = (input, context) => {
    return {
        ...(input.assessmentRunArn !== undefined &&
            input.assessmentRunArn !== null && { assessmentRunArn: input.assessmentRunArn }),
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1AgentFilter(input.filter, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListAssessmentRunsRequest = (input, context) => {
    return {
        ...(input.assessmentTemplateArns !== undefined &&
            input.assessmentTemplateArns !== null && {
            assessmentTemplateArns: serializeAws_json1_1ListParentArnList(input.assessmentTemplateArns, context),
        }),
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1AssessmentRunFilter(input.filter, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListAssessmentTargetsRequest = (input, context) => {
    return {
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1AssessmentTargetFilter(input.filter, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListAssessmentTemplatesRequest = (input, context) => {
    return {
        ...(input.assessmentTargetArns !== undefined &&
            input.assessmentTargetArns !== null && {
            assessmentTargetArns: serializeAws_json1_1ListParentArnList(input.assessmentTargetArns, context),
        }),
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1AssessmentTemplateFilter(input.filter, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListEventSubscriptionsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_1ListExclusionsRequest = (input, context) => {
    return {
        ...(input.assessmentRunArn !== undefined &&
            input.assessmentRunArn !== null && { assessmentRunArn: input.assessmentRunArn }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListFindingsRequest = (input, context) => {
    return {
        ...(input.assessmentRunArns !== undefined &&
            input.assessmentRunArns !== null && {
            assessmentRunArns: serializeAws_json1_1ListParentArnList(input.assessmentRunArns, context),
        }),
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1FindingFilter(input.filter, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListParentArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListRulesPackagesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_1PreviewAgentsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.previewAgentsArn !== undefined &&
            input.previewAgentsArn !== null && { previewAgentsArn: input.previewAgentsArn }),
    };
};
const serializeAws_json1_1RegisterCrossAccountAccessRoleRequest = (input, context) => {
    return {
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    };
};
const serializeAws_json1_1RemoveAttributesFromFindingsRequest = (input, context) => {
    return {
        ...(input.attributeKeys !== undefined &&
            input.attributeKeys !== null && {
            attributeKeys: serializeAws_json1_1UserAttributeKeyList(input.attributeKeys, context),
        }),
        ...(input.findingArns !== undefined &&
            input.findingArns !== null && {
            findingArns: serializeAws_json1_1AddRemoveAttributesFindingArnList(input.findingArns, context),
        }),
    };
};
const serializeAws_json1_1ResourceGroupTag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1ResourceGroupTags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResourceGroupTag(entry, context);
    });
};
const serializeAws_json1_1RuleNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SetTagsForResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1SeverityList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StartAssessmentRunRequest = (input, context) => {
    return {
        ...(input.assessmentRunName !== undefined &&
            input.assessmentRunName !== null && { assessmentRunName: input.assessmentRunName }),
        ...(input.assessmentTemplateArn !== undefined &&
            input.assessmentTemplateArn !== null && { assessmentTemplateArn: input.assessmentTemplateArn }),
    };
};
const serializeAws_json1_1StopAssessmentRunRequest = (input, context) => {
    return {
        ...(input.assessmentRunArn !== undefined &&
            input.assessmentRunArn !== null && { assessmentRunArn: input.assessmentRunArn }),
        ...(input.stopAction !== undefined && input.stopAction !== null && { stopAction: input.stopAction }),
    };
};
const serializeAws_json1_1SubscribeToEventRequest = (input, context) => {
    return {
        ...(input.event !== undefined && input.event !== null && { event: input.event }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.topicArn !== undefined && input.topicArn !== null && { topicArn: input.topicArn }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
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
const serializeAws_json1_1TimestampRange = (input, context) => {
    return {
        ...(input.beginDate !== undefined &&
            input.beginDate !== null && { beginDate: Math.round(input.beginDate.getTime() / 1000) }),
        ...(input.endDate !== undefined &&
            input.endDate !== null && { endDate: Math.round(input.endDate.getTime() / 1000) }),
    };
};
const serializeAws_json1_1UnsubscribeFromEventRequest = (input, context) => {
    return {
        ...(input.event !== undefined && input.event !== null && { event: input.event }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.topicArn !== undefined && input.topicArn !== null && { topicArn: input.topicArn }),
    };
};
const serializeAws_json1_1UpdateAssessmentTargetRequest = (input, context) => {
    return {
        ...(input.assessmentTargetArn !== undefined &&
            input.assessmentTargetArn !== null && { assessmentTargetArn: input.assessmentTargetArn }),
        ...(input.assessmentTargetName !== undefined &&
            input.assessmentTargetName !== null && { assessmentTargetName: input.assessmentTargetName }),
        ...(input.resourceGroupArn !== undefined &&
            input.resourceGroupArn !== null && { resourceGroupArn: input.resourceGroupArn }),
    };
};
const serializeAws_json1_1UserAttributeKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1UserAttributeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Attribute(entry, context);
    });
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        canRetry: output.canRetry !== undefined && output.canRetry !== null ? output.canRetry : undefined,
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AddAttributesToFindingsResponse = (output, context) => {
    return {
        failedItems: output.failedItems !== undefined && output.failedItems !== null
            ? deserializeAws_json1_1FailedItems(output.failedItems, context)
            : undefined,
    };
};
const deserializeAws_json1_1AgentAlreadyRunningAssessment = (output, context) => {
    return {
        agentId: output.agentId !== undefined && output.agentId !== null ? output.agentId : undefined,
        assessmentRunArn: output.assessmentRunArn !== undefined && output.assessmentRunArn !== null ? output.assessmentRunArn : undefined,
    };
};
const deserializeAws_json1_1AgentAlreadyRunningAssessmentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AgentAlreadyRunningAssessment(entry, context);
    });
};
const deserializeAws_json1_1AgentPreview = (output, context) => {
    return {
        agentHealth: output.agentHealth !== undefined && output.agentHealth !== null ? output.agentHealth : undefined,
        agentId: output.agentId !== undefined && output.agentId !== null ? output.agentId : undefined,
        agentVersion: output.agentVersion !== undefined && output.agentVersion !== null ? output.agentVersion : undefined,
        autoScalingGroup: output.autoScalingGroup !== undefined && output.autoScalingGroup !== null ? output.autoScalingGroup : undefined,
        hostname: output.hostname !== undefined && output.hostname !== null ? output.hostname : undefined,
        ipv4Address: output.ipv4Address !== undefined && output.ipv4Address !== null ? output.ipv4Address : undefined,
        kernelVersion: output.kernelVersion !== undefined && output.kernelVersion !== null ? output.kernelVersion : undefined,
        operatingSystem: output.operatingSystem !== undefined && output.operatingSystem !== null ? output.operatingSystem : undefined,
    };
};
const deserializeAws_json1_1AgentPreviewList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AgentPreview(entry, context);
    });
};
const deserializeAws_json1_1AgentsAlreadyRunningAssessmentException = (output, context) => {
    return {
        agents: output.agents !== undefined && output.agents !== null
            ? deserializeAws_json1_1AgentAlreadyRunningAssessmentList(output.agents, context)
            : undefined,
        agentsTruncated: output.agentsTruncated !== undefined && output.agentsTruncated !== null ? output.agentsTruncated : undefined,
        canRetry: output.canRetry !== undefined && output.canRetry !== null ? output.canRetry : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AssessmentRulesPackageArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AssessmentRun = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        assessmentTemplateArn: output.assessmentTemplateArn !== undefined && output.assessmentTemplateArn !== null
            ? output.assessmentTemplateArn
            : undefined,
        completedAt: output.completedAt !== undefined && output.completedAt !== null
            ? new Date(Math.round(output.completedAt * 1000))
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        dataCollected: output.dataCollected !== undefined && output.dataCollected !== null ? output.dataCollected : undefined,
        durationInSeconds: output.durationInSeconds !== undefined && output.durationInSeconds !== null
            ? output.durationInSeconds
            : undefined,
        findingCounts: output.findingCounts !== undefined && output.findingCounts !== null
            ? deserializeAws_json1_1AssessmentRunFindingCounts(output.findingCounts, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        notifications: output.notifications !== undefined && output.notifications !== null
            ? deserializeAws_json1_1AssessmentRunNotificationList(output.notifications, context)
            : undefined,
        rulesPackageArns: output.rulesPackageArns !== undefined && output.rulesPackageArns !== null
            ? deserializeAws_json1_1AssessmentRulesPackageArnList(output.rulesPackageArns, context)
            : undefined,
        startedAt: output.startedAt !== undefined && output.startedAt !== null
            ? new Date(Math.round(output.startedAt * 1000))
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        stateChangedAt: output.stateChangedAt !== undefined && output.stateChangedAt !== null
            ? new Date(Math.round(output.stateChangedAt * 1000))
            : undefined,
        stateChanges: output.stateChanges !== undefined && output.stateChanges !== null
            ? deserializeAws_json1_1AssessmentRunStateChangeList(output.stateChanges, context)
            : undefined,
        userAttributesForFindings: output.userAttributesForFindings !== undefined && output.userAttributesForFindings !== null
            ? deserializeAws_json1_1UserAttributeList(output.userAttributesForFindings, context)
            : undefined,
    };
};
const deserializeAws_json1_1AssessmentRunAgent = (output, context) => {
    return {
        agentHealth: output.agentHealth !== undefined && output.agentHealth !== null ? output.agentHealth : undefined,
        agentHealthCode: output.agentHealthCode !== undefined && output.agentHealthCode !== null ? output.agentHealthCode : undefined,
        agentHealthDetails: output.agentHealthDetails !== undefined && output.agentHealthDetails !== null
            ? output.agentHealthDetails
            : undefined,
        agentId: output.agentId !== undefined && output.agentId !== null ? output.agentId : undefined,
        assessmentRunArn: output.assessmentRunArn !== undefined && output.assessmentRunArn !== null ? output.assessmentRunArn : undefined,
        autoScalingGroup: output.autoScalingGroup !== undefined && output.autoScalingGroup !== null ? output.autoScalingGroup : undefined,
        telemetryMetadata: output.telemetryMetadata !== undefined && output.telemetryMetadata !== null
            ? deserializeAws_json1_1TelemetryMetadataList(output.telemetryMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1AssessmentRunAgentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AssessmentRunAgent(entry, context);
    });
};
const deserializeAws_json1_1AssessmentRunFindingCounts = (output, context) => {
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
const deserializeAws_json1_1AssessmentRunInProgressArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AssessmentRunInProgressException = (output, context) => {
    return {
        assessmentRunArns: output.assessmentRunArns !== undefined && output.assessmentRunArns !== null
            ? deserializeAws_json1_1AssessmentRunInProgressArnList(output.assessmentRunArns, context)
            : undefined,
        assessmentRunArnsTruncated: output.assessmentRunArnsTruncated !== undefined && output.assessmentRunArnsTruncated !== null
            ? output.assessmentRunArnsTruncated
            : undefined,
        canRetry: output.canRetry !== undefined && output.canRetry !== null ? output.canRetry : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AssessmentRunList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AssessmentRun(entry, context);
    });
};
const deserializeAws_json1_1AssessmentRunNotification = (output, context) => {
    return {
        date: output.date !== undefined && output.date !== null ? new Date(Math.round(output.date * 1000)) : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        event: output.event !== undefined && output.event !== null ? output.event : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        snsPublishStatusCode: output.snsPublishStatusCode !== undefined && output.snsPublishStatusCode !== null
            ? output.snsPublishStatusCode
            : undefined,
        snsTopicArn: output.snsTopicArn !== undefined && output.snsTopicArn !== null ? output.snsTopicArn : undefined,
    };
};
const deserializeAws_json1_1AssessmentRunNotificationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AssessmentRunNotification(entry, context);
    });
};
const deserializeAws_json1_1AssessmentRunStateChange = (output, context) => {
    return {
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        stateChangedAt: output.stateChangedAt !== undefined && output.stateChangedAt !== null
            ? new Date(Math.round(output.stateChangedAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1AssessmentRunStateChangeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AssessmentRunStateChange(entry, context);
    });
};
const deserializeAws_json1_1AssessmentTarget = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceGroupArn: output.resourceGroupArn !== undefined && output.resourceGroupArn !== null ? output.resourceGroupArn : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null
            ? new Date(Math.round(output.updatedAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1AssessmentTargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AssessmentTarget(entry, context);
    });
};
const deserializeAws_json1_1AssessmentTemplate = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        assessmentRunCount: output.assessmentRunCount !== undefined && output.assessmentRunCount !== null
            ? output.assessmentRunCount
            : undefined,
        assessmentTargetArn: output.assessmentTargetArn !== undefined && output.assessmentTargetArn !== null
            ? output.assessmentTargetArn
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        durationInSeconds: output.durationInSeconds !== undefined && output.durationInSeconds !== null
            ? output.durationInSeconds
            : undefined,
        lastAssessmentRunArn: output.lastAssessmentRunArn !== undefined && output.lastAssessmentRunArn !== null
            ? output.lastAssessmentRunArn
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        rulesPackageArns: output.rulesPackageArns !== undefined && output.rulesPackageArns !== null
            ? deserializeAws_json1_1AssessmentTemplateRulesPackageArnList(output.rulesPackageArns, context)
            : undefined,
        userAttributesForFindings: output.userAttributesForFindings !== undefined && output.userAttributesForFindings !== null
            ? deserializeAws_json1_1UserAttributeList(output.userAttributesForFindings, context)
            : undefined,
    };
};
const deserializeAws_json1_1AssessmentTemplateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AssessmentTemplate(entry, context);
    });
};
const deserializeAws_json1_1AssessmentTemplateRulesPackageArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AssetAttributes = (output, context) => {
    return {
        agentId: output.agentId !== undefined && output.agentId !== null ? output.agentId : undefined,
        amiId: output.amiId !== undefined && output.amiId !== null ? output.amiId : undefined,
        autoScalingGroup: output.autoScalingGroup !== undefined && output.autoScalingGroup !== null ? output.autoScalingGroup : undefined,
        hostname: output.hostname !== undefined && output.hostname !== null ? output.hostname : undefined,
        ipv4Addresses: output.ipv4Addresses !== undefined && output.ipv4Addresses !== null
            ? deserializeAws_json1_1Ipv4AddressList(output.ipv4Addresses, context)
            : undefined,
        networkInterfaces: output.networkInterfaces !== undefined && output.networkInterfaces !== null
            ? deserializeAws_json1_1NetworkInterfaces(output.networkInterfaces, context)
            : undefined,
        schemaVersion: output.schemaVersion !== undefined && output.schemaVersion !== null ? output.schemaVersion : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
const deserializeAws_json1_1Attribute = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1AttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Attribute(entry, context);
    });
};
const deserializeAws_json1_1CreateAssessmentTargetResponse = (output, context) => {
    return {
        assessmentTargetArn: output.assessmentTargetArn !== undefined && output.assessmentTargetArn !== null
            ? output.assessmentTargetArn
            : undefined,
    };
};
const deserializeAws_json1_1CreateAssessmentTemplateResponse = (output, context) => {
    return {
        assessmentTemplateArn: output.assessmentTemplateArn !== undefined && output.assessmentTemplateArn !== null
            ? output.assessmentTemplateArn
            : undefined,
    };
};
const deserializeAws_json1_1CreateExclusionsPreviewResponse = (output, context) => {
    return {
        previewToken: output.previewToken !== undefined && output.previewToken !== null ? output.previewToken : undefined,
    };
};
const deserializeAws_json1_1CreateResourceGroupResponse = (output, context) => {
    return {
        resourceGroupArn: output.resourceGroupArn !== undefined && output.resourceGroupArn !== null ? output.resourceGroupArn : undefined,
    };
};
const deserializeAws_json1_1DescribeAssessmentRunsResponse = (output, context) => {
    return {
        assessmentRuns: output.assessmentRuns !== undefined && output.assessmentRuns !== null
            ? deserializeAws_json1_1AssessmentRunList(output.assessmentRuns, context)
            : undefined,
        failedItems: output.failedItems !== undefined && output.failedItems !== null
            ? deserializeAws_json1_1FailedItems(output.failedItems, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeAssessmentTargetsResponse = (output, context) => {
    return {
        assessmentTargets: output.assessmentTargets !== undefined && output.assessmentTargets !== null
            ? deserializeAws_json1_1AssessmentTargetList(output.assessmentTargets, context)
            : undefined,
        failedItems: output.failedItems !== undefined && output.failedItems !== null
            ? deserializeAws_json1_1FailedItems(output.failedItems, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeAssessmentTemplatesResponse = (output, context) => {
    return {
        assessmentTemplates: output.assessmentTemplates !== undefined && output.assessmentTemplates !== null
            ? deserializeAws_json1_1AssessmentTemplateList(output.assessmentTemplates, context)
            : undefined,
        failedItems: output.failedItems !== undefined && output.failedItems !== null
            ? deserializeAws_json1_1FailedItems(output.failedItems, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeCrossAccountAccessRoleResponse = (output, context) => {
    return {
        registeredAt: output.registeredAt !== undefined && output.registeredAt !== null
            ? new Date(Math.round(output.registeredAt * 1000))
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        valid: output.valid !== undefined && output.valid !== null ? output.valid : undefined,
    };
};
const deserializeAws_json1_1DescribeExclusionsResponse = (output, context) => {
    return {
        exclusions: output.exclusions !== undefined && output.exclusions !== null
            ? deserializeAws_json1_1ExclusionMap(output.exclusions, context)
            : undefined,
        failedItems: output.failedItems !== undefined && output.failedItems !== null
            ? deserializeAws_json1_1FailedItems(output.failedItems, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeFindingsResponse = (output, context) => {
    return {
        failedItems: output.failedItems !== undefined && output.failedItems !== null
            ? deserializeAws_json1_1FailedItems(output.failedItems, context)
            : undefined,
        findings: output.findings !== undefined && output.findings !== null
            ? deserializeAws_json1_1FindingList(output.findings, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeResourceGroupsResponse = (output, context) => {
    return {
        failedItems: output.failedItems !== undefined && output.failedItems !== null
            ? deserializeAws_json1_1FailedItems(output.failedItems, context)
            : undefined,
        resourceGroups: output.resourceGroups !== undefined && output.resourceGroups !== null
            ? deserializeAws_json1_1ResourceGroupList(output.resourceGroups, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRulesPackagesResponse = (output, context) => {
    return {
        failedItems: output.failedItems !== undefined && output.failedItems !== null
            ? deserializeAws_json1_1FailedItems(output.failedItems, context)
            : undefined,
        rulesPackages: output.rulesPackages !== undefined && output.rulesPackages !== null
            ? deserializeAws_json1_1RulesPackageList(output.rulesPackages, context)
            : undefined,
    };
};
const deserializeAws_json1_1EventSubscription = (output, context) => {
    return {
        event: output.event !== undefined && output.event !== null ? output.event : undefined,
        subscribedAt: output.subscribedAt !== undefined && output.subscribedAt !== null
            ? new Date(Math.round(output.subscribedAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1EventSubscriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventSubscription(entry, context);
    });
};
const deserializeAws_json1_1Exclusion = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_json1_1AttributeList(output.attributes, context)
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        recommendation: output.recommendation !== undefined && output.recommendation !== null ? output.recommendation : undefined,
        scopes: output.scopes !== undefined && output.scopes !== null
            ? deserializeAws_json1_1ScopeList(output.scopes, context)
            : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
    };
};
const deserializeAws_json1_1ExclusionMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1Exclusion(value, context),
        };
    }, {});
};
const deserializeAws_json1_1ExclusionPreview = (output, context) => {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_json1_1AttributeList(output.attributes, context)
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        recommendation: output.recommendation !== undefined && output.recommendation !== null ? output.recommendation : undefined,
        scopes: output.scopes !== undefined && output.scopes !== null
            ? deserializeAws_json1_1ScopeList(output.scopes, context)
            : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
    };
};
const deserializeAws_json1_1ExclusionPreviewList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ExclusionPreview(entry, context);
    });
};
const deserializeAws_json1_1FailedItemDetails = (output, context) => {
    return {
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        retryable: output.retryable !== undefined && output.retryable !== null ? output.retryable : undefined,
    };
};
const deserializeAws_json1_1FailedItems = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1FailedItemDetails(value, context),
        };
    }, {});
};
const deserializeAws_json1_1Finding = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        assetAttributes: output.assetAttributes !== undefined && output.assetAttributes !== null
            ? deserializeAws_json1_1AssetAttributes(output.assetAttributes, context)
            : undefined,
        assetType: output.assetType !== undefined && output.assetType !== null ? output.assetType : undefined,
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_json1_1AttributeList(output.attributes, context)
            : undefined,
        confidence: output.confidence !== undefined && output.confidence !== null ? output.confidence : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        indicatorOfCompromise: output.indicatorOfCompromise !== undefined && output.indicatorOfCompromise !== null
            ? output.indicatorOfCompromise
            : undefined,
        numericSeverity: output.numericSeverity !== undefined && output.numericSeverity !== null ? output.numericSeverity : undefined,
        recommendation: output.recommendation !== undefined && output.recommendation !== null ? output.recommendation : undefined,
        schemaVersion: output.schemaVersion !== undefined && output.schemaVersion !== null ? output.schemaVersion : undefined,
        service: output.service !== undefined && output.service !== null ? output.service : undefined,
        serviceAttributes: output.serviceAttributes !== undefined && output.serviceAttributes !== null
            ? deserializeAws_json1_1InspectorServiceAttributes(output.serviceAttributes, context)
            : undefined,
        severity: output.severity !== undefined && output.severity !== null ? output.severity : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null
            ? new Date(Math.round(output.updatedAt * 1000))
            : undefined,
        userAttributes: output.userAttributes !== undefined && output.userAttributes !== null
            ? deserializeAws_json1_1UserAttributeList(output.userAttributes, context)
            : undefined,
    };
};
const deserializeAws_json1_1FindingList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Finding(entry, context);
    });
};
const deserializeAws_json1_1GetAssessmentReportResponse = (output, context) => {
    return {
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_json1_1GetExclusionsPreviewResponse = (output, context) => {
    return {
        exclusionPreviews: output.exclusionPreviews !== undefined && output.exclusionPreviews !== null
            ? deserializeAws_json1_1ExclusionPreviewList(output.exclusionPreviews, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        previewStatus: output.previewStatus !== undefined && output.previewStatus !== null ? output.previewStatus : undefined,
    };
};
const deserializeAws_json1_1GetTelemetryMetadataResponse = (output, context) => {
    return {
        telemetryMetadata: output.telemetryMetadata !== undefined && output.telemetryMetadata !== null
            ? deserializeAws_json1_1TelemetryMetadataList(output.telemetryMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1InspectorServiceAttributes = (output, context) => {
    return {
        assessmentRunArn: output.assessmentRunArn !== undefined && output.assessmentRunArn !== null ? output.assessmentRunArn : undefined,
        rulesPackageArn: output.rulesPackageArn !== undefined && output.rulesPackageArn !== null ? output.rulesPackageArn : undefined,
        schemaVersion: output.schemaVersion !== undefined && output.schemaVersion !== null ? output.schemaVersion : undefined,
    };
};
const deserializeAws_json1_1InternalException = (output, context) => {
    return {
        canRetry: output.canRetry !== undefined && output.canRetry !== null ? output.canRetry : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidCrossAccountRoleException = (output, context) => {
    return {
        canRetry: output.canRetry !== undefined && output.canRetry !== null ? output.canRetry : undefined,
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        canRetry: output.canRetry !== undefined && output.canRetry !== null ? output.canRetry : undefined,
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Ipv4AddressList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Ipv6Addresses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        canRetry: output.canRetry !== undefined && output.canRetry !== null ? output.canRetry : undefined,
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListAssessmentRunAgentsResponse = (output, context) => {
    return {
        assessmentRunAgents: output.assessmentRunAgents !== undefined && output.assessmentRunAgents !== null
            ? deserializeAws_json1_1AssessmentRunAgentList(output.assessmentRunAgents, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListAssessmentRunsResponse = (output, context) => {
    return {
        assessmentRunArns: output.assessmentRunArns !== undefined && output.assessmentRunArns !== null
            ? deserializeAws_json1_1ListReturnedArnList(output.assessmentRunArns, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListAssessmentTargetsResponse = (output, context) => {
    return {
        assessmentTargetArns: output.assessmentTargetArns !== undefined && output.assessmentTargetArns !== null
            ? deserializeAws_json1_1ListReturnedArnList(output.assessmentTargetArns, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListAssessmentTemplatesResponse = (output, context) => {
    return {
        assessmentTemplateArns: output.assessmentTemplateArns !== undefined && output.assessmentTemplateArns !== null
            ? deserializeAws_json1_1ListReturnedArnList(output.assessmentTemplateArns, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListEventSubscriptionsResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        subscriptions: output.subscriptions !== undefined && output.subscriptions !== null
            ? deserializeAws_json1_1SubscriptionList(output.subscriptions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListExclusionsResponse = (output, context) => {
    return {
        exclusionArns: output.exclusionArns !== undefined && output.exclusionArns !== null
            ? deserializeAws_json1_1ListReturnedArnList(output.exclusionArns, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListFindingsResponse = (output, context) => {
    return {
        findingArns: output.findingArns !== undefined && output.findingArns !== null
            ? deserializeAws_json1_1ListReturnedArnList(output.findingArns, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListReturnedArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ListRulesPackagesResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        rulesPackageArns: output.rulesPackageArns !== undefined && output.rulesPackageArns !== null
            ? deserializeAws_json1_1ListReturnedArnList(output.rulesPackageArns, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1NetworkInterface = (output, context) => {
    return {
        ipv6Addresses: output.ipv6Addresses !== undefined && output.ipv6Addresses !== null
            ? deserializeAws_json1_1Ipv6Addresses(output.ipv6Addresses, context)
            : undefined,
        networkInterfaceId: output.networkInterfaceId !== undefined && output.networkInterfaceId !== null
            ? output.networkInterfaceId
            : undefined,
        privateDnsName: output.privateDnsName !== undefined && output.privateDnsName !== null ? output.privateDnsName : undefined,
        privateIpAddress: output.privateIpAddress !== undefined && output.privateIpAddress !== null ? output.privateIpAddress : undefined,
        privateIpAddresses: output.privateIpAddresses !== undefined && output.privateIpAddresses !== null
            ? deserializeAws_json1_1PrivateIpAddresses(output.privateIpAddresses, context)
            : undefined,
        publicDnsName: output.publicDnsName !== undefined && output.publicDnsName !== null ? output.publicDnsName : undefined,
        publicIp: output.publicIp !== undefined && output.publicIp !== null ? output.publicIp : undefined,
        securityGroups: output.securityGroups !== undefined && output.securityGroups !== null
            ? deserializeAws_json1_1SecurityGroups(output.securityGroups, context)
            : undefined,
        subnetId: output.subnetId !== undefined && output.subnetId !== null ? output.subnetId : undefined,
        vpcId: output.vpcId !== undefined && output.vpcId !== null ? output.vpcId : undefined,
    };
};
const deserializeAws_json1_1NetworkInterfaces = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NetworkInterface(entry, context);
    });
};
const deserializeAws_json1_1NoSuchEntityException = (output, context) => {
    return {
        canRetry: output.canRetry !== undefined && output.canRetry !== null ? output.canRetry : undefined,
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PreviewAgentsResponse = (output, context) => {
    return {
        agentPreviews: output.agentPreviews !== undefined && output.agentPreviews !== null
            ? deserializeAws_json1_1AgentPreviewList(output.agentPreviews, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1PreviewGenerationInProgressException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PrivateIp = (output, context) => {
    return {
        privateDnsName: output.privateDnsName !== undefined && output.privateDnsName !== null ? output.privateDnsName : undefined,
        privateIpAddress: output.privateIpAddress !== undefined && output.privateIpAddress !== null ? output.privateIpAddress : undefined,
    };
};
const deserializeAws_json1_1PrivateIpAddresses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PrivateIp(entry, context);
    });
};
const deserializeAws_json1_1RemoveAttributesFromFindingsResponse = (output, context) => {
    return {
        failedItems: output.failedItems !== undefined && output.failedItems !== null
            ? deserializeAws_json1_1FailedItems(output.failedItems, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceGroup = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1ResourceGroupTags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceGroup(entry, context);
    });
};
const deserializeAws_json1_1ResourceGroupTag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1ResourceGroupTags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceGroupTag(entry, context);
    });
};
const deserializeAws_json1_1RulesPackage = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        provider: output.provider !== undefined && output.provider !== null ? output.provider : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_json1_1RulesPackageList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RulesPackage(entry, context);
    });
};
const deserializeAws_json1_1Scope = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1ScopeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Scope(entry, context);
    });
};
const deserializeAws_json1_1SecurityGroup = (output, context) => {
    return {
        groupId: output.groupId !== undefined && output.groupId !== null ? output.groupId : undefined,
        groupName: output.groupName !== undefined && output.groupName !== null ? output.groupName : undefined,
    };
};
const deserializeAws_json1_1SecurityGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SecurityGroup(entry, context);
    });
};
const deserializeAws_json1_1ServiceTemporarilyUnavailableException = (output, context) => {
    return {
        canRetry: output.canRetry !== undefined && output.canRetry !== null ? output.canRetry : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1StartAssessmentRunResponse = (output, context) => {
    return {
        assessmentRunArn: output.assessmentRunArn !== undefined && output.assessmentRunArn !== null ? output.assessmentRunArn : undefined,
    };
};
const deserializeAws_json1_1Subscription = (output, context) => {
    return {
        eventSubscriptions: output.eventSubscriptions !== undefined && output.eventSubscriptions !== null
            ? deserializeAws_json1_1EventSubscriptionList(output.eventSubscriptions, context)
            : undefined,
        resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
        topicArn: output.topicArn !== undefined && output.topicArn !== null ? output.topicArn : undefined,
    };
};
const deserializeAws_json1_1SubscriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Subscription(entry, context);
    });
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
const deserializeAws_json1_1TelemetryMetadata = (output, context) => {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        dataSize: output.dataSize !== undefined && output.dataSize !== null ? output.dataSize : undefined,
        messageType: output.messageType !== undefined && output.messageType !== null ? output.messageType : undefined,
    };
};
const deserializeAws_json1_1TelemetryMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TelemetryMetadata(entry, context);
    });
};
const deserializeAws_json1_1UnsupportedFeatureException = (output, context) => {
    return {
        canRetry: output.canRetry !== undefined && output.canRetry !== null ? output.canRetry : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UserAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Attribute(entry, context);
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