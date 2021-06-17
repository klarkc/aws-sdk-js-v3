"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_queryEnableInsightRulesCommand = exports.deserializeAws_queryEnableAlarmActionsCommand = exports.deserializeAws_queryDisableInsightRulesCommand = exports.deserializeAws_queryDisableAlarmActionsCommand = exports.deserializeAws_queryDescribeInsightRulesCommand = exports.deserializeAws_queryDescribeAnomalyDetectorsCommand = exports.deserializeAws_queryDescribeAlarmsForMetricCommand = exports.deserializeAws_queryDescribeAlarmsCommand = exports.deserializeAws_queryDescribeAlarmHistoryCommand = exports.deserializeAws_queryDeleteMetricStreamCommand = exports.deserializeAws_queryDeleteInsightRulesCommand = exports.deserializeAws_queryDeleteDashboardsCommand = exports.deserializeAws_queryDeleteAnomalyDetectorCommand = exports.deserializeAws_queryDeleteAlarmsCommand = exports.serializeAws_queryUntagResourceCommand = exports.serializeAws_queryTagResourceCommand = exports.serializeAws_queryStopMetricStreamsCommand = exports.serializeAws_queryStartMetricStreamsCommand = exports.serializeAws_querySetAlarmStateCommand = exports.serializeAws_queryPutMetricStreamCommand = exports.serializeAws_queryPutMetricDataCommand = exports.serializeAws_queryPutMetricAlarmCommand = exports.serializeAws_queryPutInsightRuleCommand = exports.serializeAws_queryPutDashboardCommand = exports.serializeAws_queryPutCompositeAlarmCommand = exports.serializeAws_queryPutAnomalyDetectorCommand = exports.serializeAws_queryListTagsForResourceCommand = exports.serializeAws_queryListMetricStreamsCommand = exports.serializeAws_queryListMetricsCommand = exports.serializeAws_queryListDashboardsCommand = exports.serializeAws_queryGetMetricWidgetImageCommand = exports.serializeAws_queryGetMetricStreamCommand = exports.serializeAws_queryGetMetricStatisticsCommand = exports.serializeAws_queryGetMetricDataCommand = exports.serializeAws_queryGetInsightRuleReportCommand = exports.serializeAws_queryGetDashboardCommand = exports.serializeAws_queryEnableInsightRulesCommand = exports.serializeAws_queryEnableAlarmActionsCommand = exports.serializeAws_queryDisableInsightRulesCommand = exports.serializeAws_queryDisableAlarmActionsCommand = exports.serializeAws_queryDescribeInsightRulesCommand = exports.serializeAws_queryDescribeAnomalyDetectorsCommand = exports.serializeAws_queryDescribeAlarmsForMetricCommand = exports.serializeAws_queryDescribeAlarmsCommand = exports.serializeAws_queryDescribeAlarmHistoryCommand = exports.serializeAws_queryDeleteMetricStreamCommand = exports.serializeAws_queryDeleteInsightRulesCommand = exports.serializeAws_queryDeleteDashboardsCommand = exports.serializeAws_queryDeleteAnomalyDetectorCommand = exports.serializeAws_queryDeleteAlarmsCommand = void 0;
exports.deserializeAws_queryUntagResourceCommand = exports.deserializeAws_queryTagResourceCommand = exports.deserializeAws_queryStopMetricStreamsCommand = exports.deserializeAws_queryStartMetricStreamsCommand = exports.deserializeAws_querySetAlarmStateCommand = exports.deserializeAws_queryPutMetricStreamCommand = exports.deserializeAws_queryPutMetricDataCommand = exports.deserializeAws_queryPutMetricAlarmCommand = exports.deserializeAws_queryPutInsightRuleCommand = exports.deserializeAws_queryPutDashboardCommand = exports.deserializeAws_queryPutCompositeAlarmCommand = exports.deserializeAws_queryPutAnomalyDetectorCommand = exports.deserializeAws_queryListTagsForResourceCommand = exports.deserializeAws_queryListMetricStreamsCommand = exports.deserializeAws_queryListMetricsCommand = exports.deserializeAws_queryListDashboardsCommand = exports.deserializeAws_queryGetMetricWidgetImageCommand = exports.deserializeAws_queryGetMetricStreamCommand = exports.deserializeAws_queryGetMetricStatisticsCommand = exports.deserializeAws_queryGetMetricDataCommand = exports.deserializeAws_queryGetInsightRuleReportCommand = exports.deserializeAws_queryGetDashboardCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_queryDeleteAlarmsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteAlarmsInput(input, context),
        Action: "DeleteAlarms",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteAlarmsCommand = serializeAws_queryDeleteAlarmsCommand;
const serializeAws_queryDeleteAnomalyDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteAnomalyDetectorInput(input, context),
        Action: "DeleteAnomalyDetector",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteAnomalyDetectorCommand = serializeAws_queryDeleteAnomalyDetectorCommand;
const serializeAws_queryDeleteDashboardsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDashboardsInput(input, context),
        Action: "DeleteDashboards",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDashboardsCommand = serializeAws_queryDeleteDashboardsCommand;
const serializeAws_queryDeleteInsightRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteInsightRulesInput(input, context),
        Action: "DeleteInsightRules",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteInsightRulesCommand = serializeAws_queryDeleteInsightRulesCommand;
const serializeAws_queryDeleteMetricStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteMetricStreamInput(input, context),
        Action: "DeleteMetricStream",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteMetricStreamCommand = serializeAws_queryDeleteMetricStreamCommand;
const serializeAws_queryDescribeAlarmHistoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeAlarmHistoryInput(input, context),
        Action: "DescribeAlarmHistory",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAlarmHistoryCommand = serializeAws_queryDescribeAlarmHistoryCommand;
const serializeAws_queryDescribeAlarmsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeAlarmsInput(input, context),
        Action: "DescribeAlarms",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAlarmsCommand = serializeAws_queryDescribeAlarmsCommand;
const serializeAws_queryDescribeAlarmsForMetricCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeAlarmsForMetricInput(input, context),
        Action: "DescribeAlarmsForMetric",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAlarmsForMetricCommand = serializeAws_queryDescribeAlarmsForMetricCommand;
const serializeAws_queryDescribeAnomalyDetectorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeAnomalyDetectorsInput(input, context),
        Action: "DescribeAnomalyDetectors",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAnomalyDetectorsCommand = serializeAws_queryDescribeAnomalyDetectorsCommand;
const serializeAws_queryDescribeInsightRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeInsightRulesInput(input, context),
        Action: "DescribeInsightRules",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeInsightRulesCommand = serializeAws_queryDescribeInsightRulesCommand;
const serializeAws_queryDisableAlarmActionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDisableAlarmActionsInput(input, context),
        Action: "DisableAlarmActions",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDisableAlarmActionsCommand = serializeAws_queryDisableAlarmActionsCommand;
const serializeAws_queryDisableInsightRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDisableInsightRulesInput(input, context),
        Action: "DisableInsightRules",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDisableInsightRulesCommand = serializeAws_queryDisableInsightRulesCommand;
const serializeAws_queryEnableAlarmActionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryEnableAlarmActionsInput(input, context),
        Action: "EnableAlarmActions",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryEnableAlarmActionsCommand = serializeAws_queryEnableAlarmActionsCommand;
const serializeAws_queryEnableInsightRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryEnableInsightRulesInput(input, context),
        Action: "EnableInsightRules",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryEnableInsightRulesCommand = serializeAws_queryEnableInsightRulesCommand;
const serializeAws_queryGetDashboardCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetDashboardInput(input, context),
        Action: "GetDashboard",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetDashboardCommand = serializeAws_queryGetDashboardCommand;
const serializeAws_queryGetInsightRuleReportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetInsightRuleReportInput(input, context),
        Action: "GetInsightRuleReport",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetInsightRuleReportCommand = serializeAws_queryGetInsightRuleReportCommand;
const serializeAws_queryGetMetricDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetMetricDataInput(input, context),
        Action: "GetMetricData",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetMetricDataCommand = serializeAws_queryGetMetricDataCommand;
const serializeAws_queryGetMetricStatisticsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetMetricStatisticsInput(input, context),
        Action: "GetMetricStatistics",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetMetricStatisticsCommand = serializeAws_queryGetMetricStatisticsCommand;
const serializeAws_queryGetMetricStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetMetricStreamInput(input, context),
        Action: "GetMetricStream",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetMetricStreamCommand = serializeAws_queryGetMetricStreamCommand;
const serializeAws_queryGetMetricWidgetImageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetMetricWidgetImageInput(input, context),
        Action: "GetMetricWidgetImage",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetMetricWidgetImageCommand = serializeAws_queryGetMetricWidgetImageCommand;
const serializeAws_queryListDashboardsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListDashboardsInput(input, context),
        Action: "ListDashboards",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListDashboardsCommand = serializeAws_queryListDashboardsCommand;
const serializeAws_queryListMetricsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListMetricsInput(input, context),
        Action: "ListMetrics",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListMetricsCommand = serializeAws_queryListMetricsCommand;
const serializeAws_queryListMetricStreamsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListMetricStreamsInput(input, context),
        Action: "ListMetricStreams",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListMetricStreamsCommand = serializeAws_queryListMetricStreamsCommand;
const serializeAws_queryListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListTagsForResourceInput(input, context),
        Action: "ListTagsForResource",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListTagsForResourceCommand = serializeAws_queryListTagsForResourceCommand;
const serializeAws_queryPutAnomalyDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutAnomalyDetectorInput(input, context),
        Action: "PutAnomalyDetector",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutAnomalyDetectorCommand = serializeAws_queryPutAnomalyDetectorCommand;
const serializeAws_queryPutCompositeAlarmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutCompositeAlarmInput(input, context),
        Action: "PutCompositeAlarm",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutCompositeAlarmCommand = serializeAws_queryPutCompositeAlarmCommand;
const serializeAws_queryPutDashboardCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutDashboardInput(input, context),
        Action: "PutDashboard",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutDashboardCommand = serializeAws_queryPutDashboardCommand;
const serializeAws_queryPutInsightRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutInsightRuleInput(input, context),
        Action: "PutInsightRule",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutInsightRuleCommand = serializeAws_queryPutInsightRuleCommand;
const serializeAws_queryPutMetricAlarmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutMetricAlarmInput(input, context),
        Action: "PutMetricAlarm",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutMetricAlarmCommand = serializeAws_queryPutMetricAlarmCommand;
const serializeAws_queryPutMetricDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutMetricDataInput(input, context),
        Action: "PutMetricData",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutMetricDataCommand = serializeAws_queryPutMetricDataCommand;
const serializeAws_queryPutMetricStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutMetricStreamInput(input, context),
        Action: "PutMetricStream",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutMetricStreamCommand = serializeAws_queryPutMetricStreamCommand;
const serializeAws_querySetAlarmStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetAlarmStateInput(input, context),
        Action: "SetAlarmState",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetAlarmStateCommand = serializeAws_querySetAlarmStateCommand;
const serializeAws_queryStartMetricStreamsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryStartMetricStreamsInput(input, context),
        Action: "StartMetricStreams",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStartMetricStreamsCommand = serializeAws_queryStartMetricStreamsCommand;
const serializeAws_queryStopMetricStreamsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryStopMetricStreamsInput(input, context),
        Action: "StopMetricStreams",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStopMetricStreamsCommand = serializeAws_queryStopMetricStreamsCommand;
const serializeAws_queryTagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTagResourceInput(input, context),
        Action: "TagResource",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTagResourceCommand = serializeAws_queryTagResourceCommand;
const serializeAws_queryUntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUntagResourceInput(input, context),
        Action: "UntagResource",
        Version: "2010-08-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUntagResourceCommand = serializeAws_queryUntagResourceCommand;
const deserializeAws_queryDeleteAlarmsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteAlarmsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteAlarmsCommand = deserializeAws_queryDeleteAlarmsCommand;
const deserializeAws_queryDeleteAlarmsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.cloudwatch#ResourceNotFound":
            response = {
                ...(await deserializeAws_queryResourceNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteAnomalyDetectorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteAnomalyDetectorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteAnomalyDetectorOutput(data.DeleteAnomalyDetectorResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteAnomalyDetectorCommand = deserializeAws_queryDeleteAnomalyDetectorCommand;
const deserializeAws_queryDeleteAnomalyDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteDashboardsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDashboardsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDashboardsOutput(data.DeleteDashboardsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDashboardsCommand = deserializeAws_queryDeleteDashboardsCommand;
const deserializeAws_queryDeleteDashboardsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DashboardNotFoundError":
        case "com.amazonaws.cloudwatch#DashboardNotFoundError":
            response = {
                ...(await deserializeAws_queryDashboardNotFoundErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteInsightRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteInsightRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteInsightRulesOutput(data.DeleteInsightRulesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteInsightRulesCommand = deserializeAws_queryDeleteInsightRulesCommand;
const deserializeAws_queryDeleteInsightRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteMetricStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteMetricStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteMetricStreamOutput(data.DeleteMetricStreamResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteMetricStreamCommand = deserializeAws_queryDeleteMetricStreamCommand;
const deserializeAws_queryDeleteMetricStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeAlarmHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeAlarmHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAlarmHistoryOutput(data.DescribeAlarmHistoryResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAlarmHistoryCommand = deserializeAws_queryDescribeAlarmHistoryCommand;
const deserializeAws_queryDescribeAlarmHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazonaws.cloudwatch#InvalidNextToken":
            response = {
                ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeAlarmsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeAlarmsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAlarmsOutput(data.DescribeAlarmsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAlarmsCommand = deserializeAws_queryDescribeAlarmsCommand;
const deserializeAws_queryDescribeAlarmsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazonaws.cloudwatch#InvalidNextToken":
            response = {
                ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeAlarmsForMetricCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeAlarmsForMetricCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAlarmsForMetricOutput(data.DescribeAlarmsForMetricResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAlarmsForMetricCommand = deserializeAws_queryDescribeAlarmsForMetricCommand;
const deserializeAws_queryDescribeAlarmsForMetricCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeAnomalyDetectorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeAnomalyDetectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAnomalyDetectorsOutput(data.DescribeAnomalyDetectorsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAnomalyDetectorsCommand = deserializeAws_queryDescribeAnomalyDetectorsCommand;
const deserializeAws_queryDescribeAnomalyDetectorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.cloudwatch#InvalidNextToken":
            response = {
                ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeInsightRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeInsightRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeInsightRulesOutput(data.DescribeInsightRulesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeInsightRulesCommand = deserializeAws_queryDescribeInsightRulesCommand;
const deserializeAws_queryDescribeInsightRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazonaws.cloudwatch#InvalidNextToken":
            response = {
                ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDisableAlarmActionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDisableAlarmActionsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDisableAlarmActionsCommand = deserializeAws_queryDisableAlarmActionsCommand;
const deserializeAws_queryDisableAlarmActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDisableInsightRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDisableInsightRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDisableInsightRulesOutput(data.DisableInsightRulesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDisableInsightRulesCommand = deserializeAws_queryDisableInsightRulesCommand;
const deserializeAws_queryDisableInsightRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryEnableAlarmActionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryEnableAlarmActionsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryEnableAlarmActionsCommand = deserializeAws_queryEnableAlarmActionsCommand;
const deserializeAws_queryEnableAlarmActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryEnableInsightRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryEnableInsightRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnableInsightRulesOutput(data.EnableInsightRulesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryEnableInsightRulesCommand = deserializeAws_queryEnableInsightRulesCommand;
const deserializeAws_queryEnableInsightRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudwatch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetDashboardCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetDashboardCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetDashboardOutput(data.GetDashboardResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetDashboardCommand = deserializeAws_queryGetDashboardCommand;
const deserializeAws_queryGetDashboardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DashboardNotFoundError":
        case "com.amazonaws.cloudwatch#DashboardNotFoundError":
            response = {
                ...(await deserializeAws_queryDashboardNotFoundErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetInsightRuleReportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetInsightRuleReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetInsightRuleReportOutput(data.GetInsightRuleReportResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetInsightRuleReportCommand = deserializeAws_queryGetInsightRuleReportCommand;
const deserializeAws_queryGetInsightRuleReportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetMetricDataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetMetricDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetMetricDataOutput(data.GetMetricDataResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetMetricDataCommand = deserializeAws_queryGetMetricDataCommand;
const deserializeAws_queryGetMetricDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextToken":
        case "com.amazonaws.cloudwatch#InvalidNextToken":
            response = {
                ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetMetricStatisticsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetMetricStatisticsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetMetricStatisticsOutput(data.GetMetricStatisticsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetMetricStatisticsCommand = deserializeAws_queryGetMetricStatisticsCommand;
const deserializeAws_queryGetMetricStatisticsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetMetricStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetMetricStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetMetricStreamOutput(data.GetMetricStreamResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetMetricStreamCommand = deserializeAws_queryGetMetricStreamCommand;
const deserializeAws_queryGetMetricStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetMetricWidgetImageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetMetricWidgetImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetMetricWidgetImageOutput(data.GetMetricWidgetImageResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetMetricWidgetImageCommand = deserializeAws_queryGetMetricWidgetImageCommand;
const deserializeAws_queryGetMetricWidgetImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListDashboardsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListDashboardsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListDashboardsOutput(data.ListDashboardsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListDashboardsCommand = deserializeAws_queryListDashboardsCommand;
const deserializeAws_queryListDashboardsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListMetricsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListMetricsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListMetricsOutput(data.ListMetricsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListMetricsCommand = deserializeAws_queryListMetricsCommand;
const deserializeAws_queryListMetricsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListMetricStreamsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListMetricStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListMetricStreamsOutput(data.ListMetricStreamsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListMetricStreamsCommand = deserializeAws_queryListMetricStreamsCommand;
const deserializeAws_queryListMetricStreamsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextToken":
        case "com.amazonaws.cloudwatch#InvalidNextToken":
            response = {
                ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListTagsForResourceOutput(data.ListTagsForResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListTagsForResourceCommand = deserializeAws_queryListTagsForResourceCommand;
const deserializeAws_queryListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutAnomalyDetectorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutAnomalyDetectorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPutAnomalyDetectorOutput(data.PutAnomalyDetectorResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutAnomalyDetectorCommand = deserializeAws_queryPutAnomalyDetectorCommand;
const deserializeAws_queryPutAnomalyDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudwatch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutCompositeAlarmCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutCompositeAlarmCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutCompositeAlarmCommand = deserializeAws_queryPutCompositeAlarmCommand;
const deserializeAws_queryPutCompositeAlarmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.cloudwatch#LimitExceededFault":
            response = {
                ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutDashboardCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutDashboardCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPutDashboardOutput(data.PutDashboardResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutDashboardCommand = deserializeAws_queryPutDashboardCommand;
const deserializeAws_queryPutDashboardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DashboardInvalidInputError":
        case "com.amazonaws.cloudwatch#DashboardInvalidInputError":
            response = {
                ...(await deserializeAws_queryDashboardInvalidInputErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutInsightRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutInsightRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPutInsightRuleOutput(data.PutInsightRuleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutInsightRuleCommand = deserializeAws_queryPutInsightRuleCommand;
const deserializeAws_queryPutInsightRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudwatch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutMetricAlarmCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutMetricAlarmCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutMetricAlarmCommand = deserializeAws_queryPutMetricAlarmCommand;
const deserializeAws_queryPutMetricAlarmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.cloudwatch#LimitExceededFault":
            response = {
                ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutMetricDataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutMetricDataCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutMetricDataCommand = deserializeAws_queryPutMetricDataCommand;
const deserializeAws_queryPutMetricDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutMetricStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutMetricStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPutMetricStreamOutput(data.PutMetricStreamResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutMetricStreamCommand = deserializeAws_queryPutMetricStreamCommand;
const deserializeAws_queryPutMetricStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cloudwatch#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetAlarmStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetAlarmStateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetAlarmStateCommand = deserializeAws_querySetAlarmStateCommand;
const deserializeAws_querySetAlarmStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidFormatFault":
        case "com.amazonaws.cloudwatch#InvalidFormatFault":
            response = {
                ...(await deserializeAws_queryInvalidFormatFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFound":
        case "com.amazonaws.cloudwatch#ResourceNotFound":
            response = {
                ...(await deserializeAws_queryResourceNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryStartMetricStreamsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryStartMetricStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStartMetricStreamsOutput(data.StartMetricStreamsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryStartMetricStreamsCommand = deserializeAws_queryStartMetricStreamsCommand;
const deserializeAws_queryStartMetricStreamsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryStopMetricStreamsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryStopMetricStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStopMetricStreamsOutput(data.StopMetricStreamsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryStopMetricStreamsCommand = deserializeAws_queryStopMetricStreamsCommand;
const deserializeAws_queryStopMetricStreamsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryTagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTagResourceOutput(data.TagResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTagResourceCommand = deserializeAws_queryTagResourceCommand;
const deserializeAws_queryTagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cloudwatch#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUntagResourceOutput(data.UntagResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUntagResourceCommand = deserializeAws_queryUntagResourceCommand;
const deserializeAws_queryUntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cloudwatch#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceFault":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
            response = {
                ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryConcurrentModificationException(body.Error, context);
    const contents = {
        name: "ConcurrentModificationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDashboardInvalidInputErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDashboardInvalidInputError(body.Error, context);
    const contents = {
        name: "DashboardInvalidInputError",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDashboardNotFoundErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDashboardNotFoundError(body.Error, context);
    const contents = {
        name: "DashboardNotFoundError",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInternalServiceFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInternalServiceFault(body.Error, context);
    const contents = {
        name: "InternalServiceFault",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidFormatFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidFormatFault(body.Error, context);
    const contents = {
        name: "InvalidFormatFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidNextTokenResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidNextToken(body.Error, context);
    const contents = {
        name: "InvalidNextToken",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidParameterCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidParameterCombinationException(body.Error, context);
    const contents = {
        name: "InvalidParameterCombinationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidParameterValueException(body.Error, context);
    const contents = {
        name: "InvalidParameterValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededFault(body.Error, context);
    const contents = {
        name: "LimitExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryMissingRequiredParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMissingRequiredParameterException(body.Error, context);
    const contents = {
        name: "MissingRequiredParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryResourceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceNotFound(body.Error, context);
    const contents = {
        name: "ResourceNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceNotFoundException(body.Error, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_queryAlarmNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAlarmTypes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAnomalyDetectorConfiguration = (input, context) => {
    const entries = {};
    if (input.ExcludedTimeRanges !== undefined && input.ExcludedTimeRanges !== null) {
        const memberEntries = serializeAws_queryAnomalyDetectorExcludedTimeRanges(input.ExcludedTimeRanges, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ExcludedTimeRanges.${key}`;
            entries[loc] = value;
        });
    }
    if (input.MetricTimezone !== undefined && input.MetricTimezone !== null) {
        entries["MetricTimezone"] = input.MetricTimezone;
    }
    return entries;
};
const serializeAws_queryAnomalyDetectorExcludedTimeRanges = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryRange(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryCounts = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryDashboardNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryDeleteAlarmsInput = (input, context) => {
    const entries = {};
    if (input.AlarmNames !== undefined && input.AlarmNames !== null) {
        const memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AlarmNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDeleteAnomalyDetectorInput = (input, context) => {
    const entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Dimensions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Stat !== undefined && input.Stat !== null) {
        entries["Stat"] = input.Stat;
    }
    return entries;
};
const serializeAws_queryDeleteDashboardsInput = (input, context) => {
    const entries = {};
    if (input.DashboardNames !== undefined && input.DashboardNames !== null) {
        const memberEntries = serializeAws_queryDashboardNames(input.DashboardNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DashboardNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDeleteInsightRulesInput = (input, context) => {
    const entries = {};
    if (input.RuleNames !== undefined && input.RuleNames !== null) {
        const memberEntries = serializeAws_queryInsightRuleNames(input.RuleNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RuleNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDeleteMetricStreamInput = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    return entries;
};
const serializeAws_queryDescribeAlarmHistoryInput = (input, context) => {
    const entries = {};
    if (input.AlarmName !== undefined && input.AlarmName !== null) {
        entries["AlarmName"] = input.AlarmName;
    }
    if (input.AlarmTypes !== undefined && input.AlarmTypes !== null) {
        const memberEntries = serializeAws_queryAlarmTypes(input.AlarmTypes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AlarmTypes.${key}`;
            entries[loc] = value;
        });
    }
    if (input.HistoryItemType !== undefined && input.HistoryItemType !== null) {
        entries["HistoryItemType"] = input.HistoryItemType;
    }
    if (input.StartDate !== undefined && input.StartDate !== null) {
        entries["StartDate"] = input.StartDate.toISOString().split(".")[0] + "Z";
    }
    if (input.EndDate !== undefined && input.EndDate !== null) {
        entries["EndDate"] = input.EndDate.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.ScanBy !== undefined && input.ScanBy !== null) {
        entries["ScanBy"] = input.ScanBy;
    }
    return entries;
};
const serializeAws_queryDescribeAlarmsForMetricInput = (input, context) => {
    const entries = {};
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.Statistic !== undefined && input.Statistic !== null) {
        entries["Statistic"] = input.Statistic;
    }
    if (input.ExtendedStatistic !== undefined && input.ExtendedStatistic !== null) {
        entries["ExtendedStatistic"] = input.ExtendedStatistic;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Dimensions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    if (input.Unit !== undefined && input.Unit !== null) {
        entries["Unit"] = input.Unit;
    }
    return entries;
};
const serializeAws_queryDescribeAlarmsInput = (input, context) => {
    const entries = {};
    if (input.AlarmNames !== undefined && input.AlarmNames !== null) {
        const memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AlarmNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AlarmNamePrefix !== undefined && input.AlarmNamePrefix !== null) {
        entries["AlarmNamePrefix"] = input.AlarmNamePrefix;
    }
    if (input.AlarmTypes !== undefined && input.AlarmTypes !== null) {
        const memberEntries = serializeAws_queryAlarmTypes(input.AlarmTypes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AlarmTypes.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ChildrenOfAlarmName !== undefined && input.ChildrenOfAlarmName !== null) {
        entries["ChildrenOfAlarmName"] = input.ChildrenOfAlarmName;
    }
    if (input.ParentsOfAlarmName !== undefined && input.ParentsOfAlarmName !== null) {
        entries["ParentsOfAlarmName"] = input.ParentsOfAlarmName;
    }
    if (input.StateValue !== undefined && input.StateValue !== null) {
        entries["StateValue"] = input.StateValue;
    }
    if (input.ActionPrefix !== undefined && input.ActionPrefix !== null) {
        entries["ActionPrefix"] = input.ActionPrefix;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribeAnomalyDetectorsInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults !== undefined && input.MaxResults !== null) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Dimensions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeInsightRulesInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults !== undefined && input.MaxResults !== null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
const serializeAws_queryDimension = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryDimensionFilter = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryDimensionFilters = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryDimensionFilter(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryDimensions = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryDimension(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryDisableAlarmActionsInput = (input, context) => {
    const entries = {};
    if (input.AlarmNames !== undefined && input.AlarmNames !== null) {
        const memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AlarmNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDisableInsightRulesInput = (input, context) => {
    const entries = {};
    if (input.RuleNames !== undefined && input.RuleNames !== null) {
        const memberEntries = serializeAws_queryInsightRuleNames(input.RuleNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RuleNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryEnableAlarmActionsInput = (input, context) => {
    const entries = {};
    if (input.AlarmNames !== undefined && input.AlarmNames !== null) {
        const memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AlarmNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryEnableInsightRulesInput = (input, context) => {
    const entries = {};
    if (input.RuleNames !== undefined && input.RuleNames !== null) {
        const memberEntries = serializeAws_queryInsightRuleNames(input.RuleNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RuleNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryExtendedStatistics = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryGetDashboardInput = (input, context) => {
    const entries = {};
    if (input.DashboardName !== undefined && input.DashboardName !== null) {
        entries["DashboardName"] = input.DashboardName;
    }
    return entries;
};
const serializeAws_queryGetInsightRuleReportInput = (input, context) => {
    const entries = {};
    if (input.RuleName !== undefined && input.RuleName !== null) {
        entries["RuleName"] = input.RuleName;
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    if (input.MaxContributorCount !== undefined && input.MaxContributorCount !== null) {
        entries["MaxContributorCount"] = input.MaxContributorCount;
    }
    if (input.Metrics !== undefined && input.Metrics !== null) {
        const memberEntries = serializeAws_queryInsightRuleMetricList(input.Metrics, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Metrics.${key}`;
            entries[loc] = value;
        });
    }
    if (input.OrderBy !== undefined && input.OrderBy !== null) {
        entries["OrderBy"] = input.OrderBy;
    }
    return entries;
};
const serializeAws_queryGetMetricDataInput = (input, context) => {
    const entries = {};
    if (input.MetricDataQueries !== undefined && input.MetricDataQueries !== null) {
        const memberEntries = serializeAws_queryMetricDataQueries(input.MetricDataQueries, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MetricDataQueries.${key}`;
            entries[loc] = value;
        });
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.ScanBy !== undefined && input.ScanBy !== null) {
        entries["ScanBy"] = input.ScanBy;
    }
    if (input.MaxDatapoints !== undefined && input.MaxDatapoints !== null) {
        entries["MaxDatapoints"] = input.MaxDatapoints;
    }
    if (input.LabelOptions !== undefined && input.LabelOptions !== null) {
        const memberEntries = serializeAws_queryLabelOptions(input.LabelOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LabelOptions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetMetricStatisticsInput = (input, context) => {
    const entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Dimensions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    if (input.Statistics !== undefined && input.Statistics !== null) {
        const memberEntries = serializeAws_queryStatistics(input.Statistics, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Statistics.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ExtendedStatistics !== undefined && input.ExtendedStatistics !== null) {
        const memberEntries = serializeAws_queryExtendedStatistics(input.ExtendedStatistics, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ExtendedStatistics.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Unit !== undefined && input.Unit !== null) {
        entries["Unit"] = input.Unit;
    }
    return entries;
};
const serializeAws_queryGetMetricStreamInput = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    return entries;
};
const serializeAws_queryGetMetricWidgetImageInput = (input, context) => {
    const entries = {};
    if (input.MetricWidget !== undefined && input.MetricWidget !== null) {
        entries["MetricWidget"] = input.MetricWidget;
    }
    if (input.OutputFormat !== undefined && input.OutputFormat !== null) {
        entries["OutputFormat"] = input.OutputFormat;
    }
    return entries;
};
const serializeAws_queryInsightRuleMetricList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryInsightRuleNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryLabelOptions = (input, context) => {
    const entries = {};
    if (input.Timezone !== undefined && input.Timezone !== null) {
        entries["Timezone"] = input.Timezone;
    }
    return entries;
};
const serializeAws_queryListDashboardsInput = (input, context) => {
    const entries = {};
    if (input.DashboardNamePrefix !== undefined && input.DashboardNamePrefix !== null) {
        entries["DashboardNamePrefix"] = input.DashboardNamePrefix;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListMetricsInput = (input, context) => {
    const entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        const memberEntries = serializeAws_queryDimensionFilters(input.Dimensions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Dimensions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.RecentlyActive !== undefined && input.RecentlyActive !== null) {
        entries["RecentlyActive"] = input.RecentlyActive;
    }
    return entries;
};
const serializeAws_queryListMetricStreamsInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults !== undefined && input.MaxResults !== null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
const serializeAws_queryListTagsForResourceInput = (input, context) => {
    const entries = {};
    if (input.ResourceARN !== undefined && input.ResourceARN !== null) {
        entries["ResourceARN"] = input.ResourceARN;
    }
    return entries;
};
const serializeAws_queryMetric = (input, context) => {
    const entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Dimensions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryMetricData = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryMetricDatum(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryMetricDataQueries = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryMetricDataQuery(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryMetricDataQuery = (input, context) => {
    const entries = {};
    if (input.Id !== undefined && input.Id !== null) {
        entries["Id"] = input.Id;
    }
    if (input.MetricStat !== undefined && input.MetricStat !== null) {
        const memberEntries = serializeAws_queryMetricStat(input.MetricStat, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MetricStat.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Expression !== undefined && input.Expression !== null) {
        entries["Expression"] = input.Expression;
    }
    if (input.Label !== undefined && input.Label !== null) {
        entries["Label"] = input.Label;
    }
    if (input.ReturnData !== undefined && input.ReturnData !== null) {
        entries["ReturnData"] = input.ReturnData;
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    return entries;
};
const serializeAws_queryMetricDatum = (input, context) => {
    const entries = {};
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Dimensions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Timestamp !== undefined && input.Timestamp !== null) {
        entries["Timestamp"] = input.Timestamp.toISOString().split(".")[0] + "Z";
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    if (input.StatisticValues !== undefined && input.StatisticValues !== null) {
        const memberEntries = serializeAws_queryStatisticSet(input.StatisticValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `StatisticValues.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_queryValues(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Values.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Counts !== undefined && input.Counts !== null) {
        const memberEntries = serializeAws_queryCounts(input.Counts, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Counts.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Unit !== undefined && input.Unit !== null) {
        entries["Unit"] = input.Unit;
    }
    if (input.StorageResolution !== undefined && input.StorageResolution !== null) {
        entries["StorageResolution"] = input.StorageResolution;
    }
    return entries;
};
const serializeAws_queryMetricStat = (input, context) => {
    const entries = {};
    if (input.Metric !== undefined && input.Metric !== null) {
        const memberEntries = serializeAws_queryMetric(input.Metric, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Metric.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    if (input.Stat !== undefined && input.Stat !== null) {
        entries["Stat"] = input.Stat;
    }
    if (input.Unit !== undefined && input.Unit !== null) {
        entries["Unit"] = input.Unit;
    }
    return entries;
};
const serializeAws_queryMetricStreamFilter = (input, context) => {
    const entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    return entries;
};
const serializeAws_queryMetricStreamFilters = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryMetricStreamFilter(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryMetricStreamNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPutAnomalyDetectorInput = (input, context) => {
    const entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Dimensions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Stat !== undefined && input.Stat !== null) {
        entries["Stat"] = input.Stat;
    }
    if (input.Configuration !== undefined && input.Configuration !== null) {
        const memberEntries = serializeAws_queryAnomalyDetectorConfiguration(input.Configuration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Configuration.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryPutCompositeAlarmInput = (input, context) => {
    const entries = {};
    if (input.ActionsEnabled !== undefined && input.ActionsEnabled !== null) {
        entries["ActionsEnabled"] = input.ActionsEnabled;
    }
    if (input.AlarmActions !== undefined && input.AlarmActions !== null) {
        const memberEntries = serializeAws_queryResourceList(input.AlarmActions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AlarmActions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AlarmDescription !== undefined && input.AlarmDescription !== null) {
        entries["AlarmDescription"] = input.AlarmDescription;
    }
    if (input.AlarmName !== undefined && input.AlarmName !== null) {
        entries["AlarmName"] = input.AlarmName;
    }
    if (input.AlarmRule !== undefined && input.AlarmRule !== null) {
        entries["AlarmRule"] = input.AlarmRule;
    }
    if (input.InsufficientDataActions !== undefined && input.InsufficientDataActions !== null) {
        const memberEntries = serializeAws_queryResourceList(input.InsufficientDataActions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `InsufficientDataActions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.OKActions !== undefined && input.OKActions !== null) {
        const memberEntries = serializeAws_queryResourceList(input.OKActions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OKActions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryPutDashboardInput = (input, context) => {
    const entries = {};
    if (input.DashboardName !== undefined && input.DashboardName !== null) {
        entries["DashboardName"] = input.DashboardName;
    }
    if (input.DashboardBody !== undefined && input.DashboardBody !== null) {
        entries["DashboardBody"] = input.DashboardBody;
    }
    return entries;
};
const serializeAws_queryPutInsightRuleInput = (input, context) => {
    const entries = {};
    if (input.RuleName !== undefined && input.RuleName !== null) {
        entries["RuleName"] = input.RuleName;
    }
    if (input.RuleState !== undefined && input.RuleState !== null) {
        entries["RuleState"] = input.RuleState;
    }
    if (input.RuleDefinition !== undefined && input.RuleDefinition !== null) {
        entries["RuleDefinition"] = input.RuleDefinition;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryPutMetricAlarmInput = (input, context) => {
    const entries = {};
    if (input.AlarmName !== undefined && input.AlarmName !== null) {
        entries["AlarmName"] = input.AlarmName;
    }
    if (input.AlarmDescription !== undefined && input.AlarmDescription !== null) {
        entries["AlarmDescription"] = input.AlarmDescription;
    }
    if (input.ActionsEnabled !== undefined && input.ActionsEnabled !== null) {
        entries["ActionsEnabled"] = input.ActionsEnabled;
    }
    if (input.OKActions !== undefined && input.OKActions !== null) {
        const memberEntries = serializeAws_queryResourceList(input.OKActions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OKActions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AlarmActions !== undefined && input.AlarmActions !== null) {
        const memberEntries = serializeAws_queryResourceList(input.AlarmActions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AlarmActions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.InsufficientDataActions !== undefined && input.InsufficientDataActions !== null) {
        const memberEntries = serializeAws_queryResourceList(input.InsufficientDataActions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `InsufficientDataActions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.Statistic !== undefined && input.Statistic !== null) {
        entries["Statistic"] = input.Statistic;
    }
    if (input.ExtendedStatistic !== undefined && input.ExtendedStatistic !== null) {
        entries["ExtendedStatistic"] = input.ExtendedStatistic;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Dimensions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    if (input.Unit !== undefined && input.Unit !== null) {
        entries["Unit"] = input.Unit;
    }
    if (input.EvaluationPeriods !== undefined && input.EvaluationPeriods !== null) {
        entries["EvaluationPeriods"] = input.EvaluationPeriods;
    }
    if (input.DatapointsToAlarm !== undefined && input.DatapointsToAlarm !== null) {
        entries["DatapointsToAlarm"] = input.DatapointsToAlarm;
    }
    if (input.Threshold !== undefined && input.Threshold !== null) {
        entries["Threshold"] = input.Threshold;
    }
    if (input.ComparisonOperator !== undefined && input.ComparisonOperator !== null) {
        entries["ComparisonOperator"] = input.ComparisonOperator;
    }
    if (input.TreatMissingData !== undefined && input.TreatMissingData !== null) {
        entries["TreatMissingData"] = input.TreatMissingData;
    }
    if (input.EvaluateLowSampleCountPercentile !== undefined && input.EvaluateLowSampleCountPercentile !== null) {
        entries["EvaluateLowSampleCountPercentile"] = input.EvaluateLowSampleCountPercentile;
    }
    if (input.Metrics !== undefined && input.Metrics !== null) {
        const memberEntries = serializeAws_queryMetricDataQueries(input.Metrics, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Metrics.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ThresholdMetricId !== undefined && input.ThresholdMetricId !== null) {
        entries["ThresholdMetricId"] = input.ThresholdMetricId;
    }
    return entries;
};
const serializeAws_queryPutMetricDataInput = (input, context) => {
    const entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricData !== undefined && input.MetricData !== null) {
        const memberEntries = serializeAws_queryMetricData(input.MetricData, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MetricData.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryPutMetricStreamInput = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.IncludeFilters !== undefined && input.IncludeFilters !== null) {
        const memberEntries = serializeAws_queryMetricStreamFilters(input.IncludeFilters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `IncludeFilters.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ExcludeFilters !== undefined && input.ExcludeFilters !== null) {
        const memberEntries = serializeAws_queryMetricStreamFilters(input.ExcludeFilters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ExcludeFilters.${key}`;
            entries[loc] = value;
        });
    }
    if (input.FirehoseArn !== undefined && input.FirehoseArn !== null) {
        entries["FirehoseArn"] = input.FirehoseArn;
    }
    if (input.RoleArn !== undefined && input.RoleArn !== null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.OutputFormat !== undefined && input.OutputFormat !== null) {
        entries["OutputFormat"] = input.OutputFormat;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryRange = (input, context) => {
    const entries = {};
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
const serializeAws_queryResourceList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySetAlarmStateInput = (input, context) => {
    const entries = {};
    if (input.AlarmName !== undefined && input.AlarmName !== null) {
        entries["AlarmName"] = input.AlarmName;
    }
    if (input.StateValue !== undefined && input.StateValue !== null) {
        entries["StateValue"] = input.StateValue;
    }
    if (input.StateReason !== undefined && input.StateReason !== null) {
        entries["StateReason"] = input.StateReason;
    }
    if (input.StateReasonData !== undefined && input.StateReasonData !== null) {
        entries["StateReasonData"] = input.StateReasonData;
    }
    return entries;
};
const serializeAws_queryStartMetricStreamsInput = (input, context) => {
    const entries = {};
    if (input.Names !== undefined && input.Names !== null) {
        const memberEntries = serializeAws_queryMetricStreamNames(input.Names, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Names.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryStatistics = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryStatisticSet = (input, context) => {
    const entries = {};
    if (input.SampleCount !== undefined && input.SampleCount !== null) {
        entries["SampleCount"] = input.SampleCount;
    }
    if (input.Sum !== undefined && input.Sum !== null) {
        entries["Sum"] = input.Sum;
    }
    if (input.Minimum !== undefined && input.Minimum !== null) {
        entries["Minimum"] = input.Minimum;
    }
    if (input.Maximum !== undefined && input.Maximum !== null) {
        entries["Maximum"] = input.Maximum;
    }
    return entries;
};
const serializeAws_queryStopMetricStreamsInput = (input, context) => {
    const entries = {};
    if (input.Names !== undefined && input.Names !== null) {
        const memberEntries = serializeAws_queryMetricStreamNames(input.Names, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Names.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryTagKeyList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTagList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTagResourceInput = (input, context) => {
    const entries = {};
    if (input.ResourceARN !== undefined && input.ResourceARN !== null) {
        entries["ResourceARN"] = input.ResourceARN;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUntagResourceInput = (input, context) => {
    const entries = {};
    if (input.ResourceARN !== undefined && input.ResourceARN !== null) {
        entries["ResourceARN"] = input.ResourceARN;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryValues = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const deserializeAws_queryAlarmHistoryItem = (output, context) => {
    let contents = {
        AlarmName: undefined,
        AlarmType: undefined,
        Timestamp: undefined,
        HistoryItemType: undefined,
        HistorySummary: undefined,
        HistoryData: undefined,
    };
    if (output["AlarmName"] !== undefined) {
        contents.AlarmName = output["AlarmName"];
    }
    if (output["AlarmType"] !== undefined) {
        contents.AlarmType = output["AlarmType"];
    }
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    if (output["HistoryItemType"] !== undefined) {
        contents.HistoryItemType = output["HistoryItemType"];
    }
    if (output["HistorySummary"] !== undefined) {
        contents.HistorySummary = output["HistorySummary"];
    }
    if (output["HistoryData"] !== undefined) {
        contents.HistoryData = output["HistoryData"];
    }
    return contents;
};
const deserializeAws_queryAlarmHistoryItems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAlarmHistoryItem(entry, context);
    });
};
const deserializeAws_queryAnomalyDetector = (output, context) => {
    let contents = {
        Namespace: undefined,
        MetricName: undefined,
        Dimensions: undefined,
        Stat: undefined,
        Configuration: undefined,
        StateValue: undefined,
    };
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["MetricName"] !== undefined) {
        contents.MetricName = output["MetricName"];
    }
    if (output.Dimensions === "") {
        contents.Dimensions = [];
    }
    if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
        contents.Dimensions = deserializeAws_queryDimensions(smithy_client_1.getArrayIfSingleItem(output["Dimensions"]["member"]), context);
    }
    if (output["Stat"] !== undefined) {
        contents.Stat = output["Stat"];
    }
    if (output["Configuration"] !== undefined) {
        contents.Configuration = deserializeAws_queryAnomalyDetectorConfiguration(output["Configuration"], context);
    }
    if (output["StateValue"] !== undefined) {
        contents.StateValue = output["StateValue"];
    }
    return contents;
};
const deserializeAws_queryAnomalyDetectorConfiguration = (output, context) => {
    let contents = {
        ExcludedTimeRanges: undefined,
        MetricTimezone: undefined,
    };
    if (output.ExcludedTimeRanges === "") {
        contents.ExcludedTimeRanges = [];
    }
    if (output["ExcludedTimeRanges"] !== undefined && output["ExcludedTimeRanges"]["member"] !== undefined) {
        contents.ExcludedTimeRanges = deserializeAws_queryAnomalyDetectorExcludedTimeRanges(smithy_client_1.getArrayIfSingleItem(output["ExcludedTimeRanges"]["member"]), context);
    }
    if (output["MetricTimezone"] !== undefined) {
        contents.MetricTimezone = output["MetricTimezone"];
    }
    return contents;
};
const deserializeAws_queryAnomalyDetectorExcludedTimeRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRange(entry, context);
    });
};
const deserializeAws_queryAnomalyDetectors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAnomalyDetector(entry, context);
    });
};
const deserializeAws_queryBatchFailures = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPartialFailure(entry, context);
    });
};
const deserializeAws_queryCompositeAlarm = (output, context) => {
    let contents = {
        ActionsEnabled: undefined,
        AlarmActions: undefined,
        AlarmArn: undefined,
        AlarmConfigurationUpdatedTimestamp: undefined,
        AlarmDescription: undefined,
        AlarmName: undefined,
        AlarmRule: undefined,
        InsufficientDataActions: undefined,
        OKActions: undefined,
        StateReason: undefined,
        StateReasonData: undefined,
        StateUpdatedTimestamp: undefined,
        StateValue: undefined,
    };
    if (output["ActionsEnabled"] !== undefined) {
        contents.ActionsEnabled = output["ActionsEnabled"] == "true";
    }
    if (output.AlarmActions === "") {
        contents.AlarmActions = [];
    }
    if (output["AlarmActions"] !== undefined && output["AlarmActions"]["member"] !== undefined) {
        contents.AlarmActions = deserializeAws_queryResourceList(smithy_client_1.getArrayIfSingleItem(output["AlarmActions"]["member"]), context);
    }
    if (output["AlarmArn"] !== undefined) {
        contents.AlarmArn = output["AlarmArn"];
    }
    if (output["AlarmConfigurationUpdatedTimestamp"] !== undefined) {
        contents.AlarmConfigurationUpdatedTimestamp = new Date(output["AlarmConfigurationUpdatedTimestamp"]);
    }
    if (output["AlarmDescription"] !== undefined) {
        contents.AlarmDescription = output["AlarmDescription"];
    }
    if (output["AlarmName"] !== undefined) {
        contents.AlarmName = output["AlarmName"];
    }
    if (output["AlarmRule"] !== undefined) {
        contents.AlarmRule = output["AlarmRule"];
    }
    if (output.InsufficientDataActions === "") {
        contents.InsufficientDataActions = [];
    }
    if (output["InsufficientDataActions"] !== undefined && output["InsufficientDataActions"]["member"] !== undefined) {
        contents.InsufficientDataActions = deserializeAws_queryResourceList(smithy_client_1.getArrayIfSingleItem(output["InsufficientDataActions"]["member"]), context);
    }
    if (output.OKActions === "") {
        contents.OKActions = [];
    }
    if (output["OKActions"] !== undefined && output["OKActions"]["member"] !== undefined) {
        contents.OKActions = deserializeAws_queryResourceList(smithy_client_1.getArrayIfSingleItem(output["OKActions"]["member"]), context);
    }
    if (output["StateReason"] !== undefined) {
        contents.StateReason = output["StateReason"];
    }
    if (output["StateReasonData"] !== undefined) {
        contents.StateReasonData = output["StateReasonData"];
    }
    if (output["StateUpdatedTimestamp"] !== undefined) {
        contents.StateUpdatedTimestamp = new Date(output["StateUpdatedTimestamp"]);
    }
    if (output["StateValue"] !== undefined) {
        contents.StateValue = output["StateValue"];
    }
    return contents;
};
const deserializeAws_queryCompositeAlarms = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCompositeAlarm(entry, context);
    });
};
const deserializeAws_queryConcurrentModificationException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDashboardEntries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDashboardEntry(entry, context);
    });
};
const deserializeAws_queryDashboardEntry = (output, context) => {
    let contents = {
        DashboardName: undefined,
        DashboardArn: undefined,
        LastModified: undefined,
        Size: undefined,
    };
    if (output["DashboardName"] !== undefined) {
        contents.DashboardName = output["DashboardName"];
    }
    if (output["DashboardArn"] !== undefined) {
        contents.DashboardArn = output["DashboardArn"];
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = new Date(output["LastModified"]);
    }
    if (output["Size"] !== undefined) {
        contents.Size = parseInt(output["Size"]);
    }
    return contents;
};
const deserializeAws_queryDashboardInvalidInputError = (output, context) => {
    let contents = {
        message: undefined,
        dashboardValidationMessages: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    if (output.dashboardValidationMessages === "") {
        contents.dashboardValidationMessages = [];
    }
    if (output["dashboardValidationMessages"] !== undefined &&
        output["dashboardValidationMessages"]["member"] !== undefined) {
        contents.dashboardValidationMessages = deserializeAws_queryDashboardValidationMessages(smithy_client_1.getArrayIfSingleItem(output["dashboardValidationMessages"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDashboardNotFoundError = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDashboardValidationMessage = (output, context) => {
    let contents = {
        DataPath: undefined,
        Message: undefined,
    };
    if (output["DataPath"] !== undefined) {
        contents.DataPath = output["DataPath"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDashboardValidationMessages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDashboardValidationMessage(entry, context);
    });
};
const deserializeAws_queryDatapoint = (output, context) => {
    let contents = {
        Timestamp: undefined,
        SampleCount: undefined,
        Average: undefined,
        Sum: undefined,
        Minimum: undefined,
        Maximum: undefined,
        Unit: undefined,
        ExtendedStatistics: undefined,
    };
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    if (output["SampleCount"] !== undefined) {
        contents.SampleCount = parseFloat(output["SampleCount"]);
    }
    if (output["Average"] !== undefined) {
        contents.Average = parseFloat(output["Average"]);
    }
    if (output["Sum"] !== undefined) {
        contents.Sum = parseFloat(output["Sum"]);
    }
    if (output["Minimum"] !== undefined) {
        contents.Minimum = parseFloat(output["Minimum"]);
    }
    if (output["Maximum"] !== undefined) {
        contents.Maximum = parseFloat(output["Maximum"]);
    }
    if (output["Unit"] !== undefined) {
        contents.Unit = output["Unit"];
    }
    if (output.ExtendedStatistics === "") {
        contents.ExtendedStatistics = {};
    }
    if (output["ExtendedStatistics"] !== undefined && output["ExtendedStatistics"]["entry"] !== undefined) {
        contents.ExtendedStatistics = deserializeAws_queryDatapointValueMap(smithy_client_1.getArrayIfSingleItem(output["ExtendedStatistics"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryDatapoints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDatapoint(entry, context);
    });
};
const deserializeAws_queryDatapointValueMap = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: parseFloat(pair["value"]),
        };
    }, {});
};
const deserializeAws_queryDatapointValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return parseFloat(entry);
    });
};
const deserializeAws_queryDeleteAnomalyDetectorOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteDashboardsOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteInsightRulesOutput = (output, context) => {
    let contents = {
        Failures: undefined,
    };
    if (output.Failures === "") {
        contents.Failures = [];
    }
    if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
        contents.Failures = deserializeAws_queryBatchFailures(smithy_client_1.getArrayIfSingleItem(output["Failures"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDeleteMetricStreamOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDescribeAlarmHistoryOutput = (output, context) => {
    let contents = {
        AlarmHistoryItems: undefined,
        NextToken: undefined,
    };
    if (output.AlarmHistoryItems === "") {
        contents.AlarmHistoryItems = [];
    }
    if (output["AlarmHistoryItems"] !== undefined && output["AlarmHistoryItems"]["member"] !== undefined) {
        contents.AlarmHistoryItems = deserializeAws_queryAlarmHistoryItems(smithy_client_1.getArrayIfSingleItem(output["AlarmHistoryItems"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDescribeAlarmsForMetricOutput = (output, context) => {
    let contents = {
        MetricAlarms: undefined,
    };
    if (output.MetricAlarms === "") {
        contents.MetricAlarms = [];
    }
    if (output["MetricAlarms"] !== undefined && output["MetricAlarms"]["member"] !== undefined) {
        contents.MetricAlarms = deserializeAws_queryMetricAlarms(smithy_client_1.getArrayIfSingleItem(output["MetricAlarms"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeAlarmsOutput = (output, context) => {
    let contents = {
        CompositeAlarms: undefined,
        MetricAlarms: undefined,
        NextToken: undefined,
    };
    if (output.CompositeAlarms === "") {
        contents.CompositeAlarms = [];
    }
    if (output["CompositeAlarms"] !== undefined && output["CompositeAlarms"]["member"] !== undefined) {
        contents.CompositeAlarms = deserializeAws_queryCompositeAlarms(smithy_client_1.getArrayIfSingleItem(output["CompositeAlarms"]["member"]), context);
    }
    if (output.MetricAlarms === "") {
        contents.MetricAlarms = [];
    }
    if (output["MetricAlarms"] !== undefined && output["MetricAlarms"]["member"] !== undefined) {
        contents.MetricAlarms = deserializeAws_queryMetricAlarms(smithy_client_1.getArrayIfSingleItem(output["MetricAlarms"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDescribeAnomalyDetectorsOutput = (output, context) => {
    let contents = {
        AnomalyDetectors: undefined,
        NextToken: undefined,
    };
    if (output.AnomalyDetectors === "") {
        contents.AnomalyDetectors = [];
    }
    if (output["AnomalyDetectors"] !== undefined && output["AnomalyDetectors"]["member"] !== undefined) {
        contents.AnomalyDetectors = deserializeAws_queryAnomalyDetectors(smithy_client_1.getArrayIfSingleItem(output["AnomalyDetectors"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDescribeInsightRulesOutput = (output, context) => {
    let contents = {
        NextToken: undefined,
        InsightRules: undefined,
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.InsightRules === "") {
        contents.InsightRules = [];
    }
    if (output["InsightRules"] !== undefined && output["InsightRules"]["member"] !== undefined) {
        contents.InsightRules = deserializeAws_queryInsightRules(smithy_client_1.getArrayIfSingleItem(output["InsightRules"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDimension = (output, context) => {
    let contents = {
        Name: undefined,
        Value: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryDimensions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDimension(entry, context);
    });
};
const deserializeAws_queryDisableInsightRulesOutput = (output, context) => {
    let contents = {
        Failures: undefined,
    };
    if (output.Failures === "") {
        contents.Failures = [];
    }
    if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
        contents.Failures = deserializeAws_queryBatchFailures(smithy_client_1.getArrayIfSingleItem(output["Failures"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryEnableInsightRulesOutput = (output, context) => {
    let contents = {
        Failures: undefined,
    };
    if (output.Failures === "") {
        contents.Failures = [];
    }
    if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
        contents.Failures = deserializeAws_queryBatchFailures(smithy_client_1.getArrayIfSingleItem(output["Failures"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryGetDashboardOutput = (output, context) => {
    let contents = {
        DashboardArn: undefined,
        DashboardBody: undefined,
        DashboardName: undefined,
    };
    if (output["DashboardArn"] !== undefined) {
        contents.DashboardArn = output["DashboardArn"];
    }
    if (output["DashboardBody"] !== undefined) {
        contents.DashboardBody = output["DashboardBody"];
    }
    if (output["DashboardName"] !== undefined) {
        contents.DashboardName = output["DashboardName"];
    }
    return contents;
};
const deserializeAws_queryGetInsightRuleReportOutput = (output, context) => {
    let contents = {
        KeyLabels: undefined,
        AggregationStatistic: undefined,
        AggregateValue: undefined,
        ApproximateUniqueCount: undefined,
        Contributors: undefined,
        MetricDatapoints: undefined,
    };
    if (output.KeyLabels === "") {
        contents.KeyLabels = [];
    }
    if (output["KeyLabels"] !== undefined && output["KeyLabels"]["member"] !== undefined) {
        contents.KeyLabels = deserializeAws_queryInsightRuleContributorKeyLabels(smithy_client_1.getArrayIfSingleItem(output["KeyLabels"]["member"]), context);
    }
    if (output["AggregationStatistic"] !== undefined) {
        contents.AggregationStatistic = output["AggregationStatistic"];
    }
    if (output["AggregateValue"] !== undefined) {
        contents.AggregateValue = parseFloat(output["AggregateValue"]);
    }
    if (output["ApproximateUniqueCount"] !== undefined) {
        contents.ApproximateUniqueCount = parseInt(output["ApproximateUniqueCount"]);
    }
    if (output.Contributors === "") {
        contents.Contributors = [];
    }
    if (output["Contributors"] !== undefined && output["Contributors"]["member"] !== undefined) {
        contents.Contributors = deserializeAws_queryInsightRuleContributors(smithy_client_1.getArrayIfSingleItem(output["Contributors"]["member"]), context);
    }
    if (output.MetricDatapoints === "") {
        contents.MetricDatapoints = [];
    }
    if (output["MetricDatapoints"] !== undefined && output["MetricDatapoints"]["member"] !== undefined) {
        contents.MetricDatapoints = deserializeAws_queryInsightRuleMetricDatapoints(smithy_client_1.getArrayIfSingleItem(output["MetricDatapoints"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryGetMetricDataOutput = (output, context) => {
    let contents = {
        MetricDataResults: undefined,
        NextToken: undefined,
        Messages: undefined,
    };
    if (output.MetricDataResults === "") {
        contents.MetricDataResults = [];
    }
    if (output["MetricDataResults"] !== undefined && output["MetricDataResults"]["member"] !== undefined) {
        contents.MetricDataResults = deserializeAws_queryMetricDataResults(smithy_client_1.getArrayIfSingleItem(output["MetricDataResults"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Messages === "") {
        contents.Messages = [];
    }
    if (output["Messages"] !== undefined && output["Messages"]["member"] !== undefined) {
        contents.Messages = deserializeAws_queryMetricDataResultMessages(smithy_client_1.getArrayIfSingleItem(output["Messages"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryGetMetricStatisticsOutput = (output, context) => {
    let contents = {
        Label: undefined,
        Datapoints: undefined,
    };
    if (output["Label"] !== undefined) {
        contents.Label = output["Label"];
    }
    if (output.Datapoints === "") {
        contents.Datapoints = [];
    }
    if (output["Datapoints"] !== undefined && output["Datapoints"]["member"] !== undefined) {
        contents.Datapoints = deserializeAws_queryDatapoints(smithy_client_1.getArrayIfSingleItem(output["Datapoints"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryGetMetricStreamOutput = (output, context) => {
    let contents = {
        Arn: undefined,
        Name: undefined,
        IncludeFilters: undefined,
        ExcludeFilters: undefined,
        FirehoseArn: undefined,
        RoleArn: undefined,
        State: undefined,
        CreationDate: undefined,
        LastUpdateDate: undefined,
        OutputFormat: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output.IncludeFilters === "") {
        contents.IncludeFilters = [];
    }
    if (output["IncludeFilters"] !== undefined && output["IncludeFilters"]["member"] !== undefined) {
        contents.IncludeFilters = deserializeAws_queryMetricStreamFilters(smithy_client_1.getArrayIfSingleItem(output["IncludeFilters"]["member"]), context);
    }
    if (output.ExcludeFilters === "") {
        contents.ExcludeFilters = [];
    }
    if (output["ExcludeFilters"] !== undefined && output["ExcludeFilters"]["member"] !== undefined) {
        contents.ExcludeFilters = deserializeAws_queryMetricStreamFilters(smithy_client_1.getArrayIfSingleItem(output["ExcludeFilters"]["member"]), context);
    }
    if (output["FirehoseArn"] !== undefined) {
        contents.FirehoseArn = output["FirehoseArn"];
    }
    if (output["RoleArn"] !== undefined) {
        contents.RoleArn = output["RoleArn"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["CreationDate"] !== undefined) {
        contents.CreationDate = new Date(output["CreationDate"]);
    }
    if (output["LastUpdateDate"] !== undefined) {
        contents.LastUpdateDate = new Date(output["LastUpdateDate"]);
    }
    if (output["OutputFormat"] !== undefined) {
        contents.OutputFormat = output["OutputFormat"];
    }
    return contents;
};
const deserializeAws_queryGetMetricWidgetImageOutput = (output, context) => {
    let contents = {
        MetricWidgetImage: undefined,
    };
    if (output["MetricWidgetImage"] !== undefined) {
        contents.MetricWidgetImage = context.base64Decoder(output["MetricWidgetImage"]);
    }
    return contents;
};
const deserializeAws_queryInsightRule = (output, context) => {
    let contents = {
        Name: undefined,
        State: undefined,
        Schema: undefined,
        Definition: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["Schema"] !== undefined) {
        contents.Schema = output["Schema"];
    }
    if (output["Definition"] !== undefined) {
        contents.Definition = output["Definition"];
    }
    return contents;
};
const deserializeAws_queryInsightRuleContributor = (output, context) => {
    let contents = {
        Keys: undefined,
        ApproximateAggregateValue: undefined,
        Datapoints: undefined,
    };
    if (output.Keys === "") {
        contents.Keys = [];
    }
    if (output["Keys"] !== undefined && output["Keys"]["member"] !== undefined) {
        contents.Keys = deserializeAws_queryInsightRuleContributorKeys(smithy_client_1.getArrayIfSingleItem(output["Keys"]["member"]), context);
    }
    if (output["ApproximateAggregateValue"] !== undefined) {
        contents.ApproximateAggregateValue = parseFloat(output["ApproximateAggregateValue"]);
    }
    if (output.Datapoints === "") {
        contents.Datapoints = [];
    }
    if (output["Datapoints"] !== undefined && output["Datapoints"]["member"] !== undefined) {
        contents.Datapoints = deserializeAws_queryInsightRuleContributorDatapoints(smithy_client_1.getArrayIfSingleItem(output["Datapoints"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryInsightRuleContributorDatapoint = (output, context) => {
    let contents = {
        Timestamp: undefined,
        ApproximateValue: undefined,
    };
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    if (output["ApproximateValue"] !== undefined) {
        contents.ApproximateValue = parseFloat(output["ApproximateValue"]);
    }
    return contents;
};
const deserializeAws_queryInsightRuleContributorDatapoints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInsightRuleContributorDatapoint(entry, context);
    });
};
const deserializeAws_queryInsightRuleContributorKeyLabels = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryInsightRuleContributorKeys = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryInsightRuleContributors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInsightRuleContributor(entry, context);
    });
};
const deserializeAws_queryInsightRuleMetricDatapoint = (output, context) => {
    let contents = {
        Timestamp: undefined,
        UniqueContributors: undefined,
        MaxContributorValue: undefined,
        SampleCount: undefined,
        Average: undefined,
        Sum: undefined,
        Minimum: undefined,
        Maximum: undefined,
    };
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    if (output["UniqueContributors"] !== undefined) {
        contents.UniqueContributors = parseFloat(output["UniqueContributors"]);
    }
    if (output["MaxContributorValue"] !== undefined) {
        contents.MaxContributorValue = parseFloat(output["MaxContributorValue"]);
    }
    if (output["SampleCount"] !== undefined) {
        contents.SampleCount = parseFloat(output["SampleCount"]);
    }
    if (output["Average"] !== undefined) {
        contents.Average = parseFloat(output["Average"]);
    }
    if (output["Sum"] !== undefined) {
        contents.Sum = parseFloat(output["Sum"]);
    }
    if (output["Minimum"] !== undefined) {
        contents.Minimum = parseFloat(output["Minimum"]);
    }
    if (output["Maximum"] !== undefined) {
        contents.Maximum = parseFloat(output["Maximum"]);
    }
    return contents;
};
const deserializeAws_queryInsightRuleMetricDatapoints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInsightRuleMetricDatapoint(entry, context);
    });
};
const deserializeAws_queryInsightRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInsightRule(entry, context);
    });
};
const deserializeAws_queryInternalServiceFault = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidFormatFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidNextToken = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidParameterCombinationException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidParameterValueException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryLimitExceededException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryLimitExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryListDashboardsOutput = (output, context) => {
    let contents = {
        DashboardEntries: undefined,
        NextToken: undefined,
    };
    if (output.DashboardEntries === "") {
        contents.DashboardEntries = [];
    }
    if (output["DashboardEntries"] !== undefined && output["DashboardEntries"]["member"] !== undefined) {
        contents.DashboardEntries = deserializeAws_queryDashboardEntries(smithy_client_1.getArrayIfSingleItem(output["DashboardEntries"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListMetricsOutput = (output, context) => {
    let contents = {
        Metrics: undefined,
        NextToken: undefined,
    };
    if (output.Metrics === "") {
        contents.Metrics = [];
    }
    if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
        contents.Metrics = deserializeAws_queryMetrics(smithy_client_1.getArrayIfSingleItem(output["Metrics"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListMetricStreamsOutput = (output, context) => {
    let contents = {
        NextToken: undefined,
        Entries: undefined,
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Entries === "") {
        contents.Entries = [];
    }
    if (output["Entries"] !== undefined && output["Entries"]["member"] !== undefined) {
        contents.Entries = deserializeAws_queryMetricStreamEntries(smithy_client_1.getArrayIfSingleItem(output["Entries"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryListTagsForResourceOutput = (output, context) => {
    let contents = {
        Tags: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryMessageData = (output, context) => {
    let contents = {
        Code: undefined,
        Value: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryMetric = (output, context) => {
    let contents = {
        Namespace: undefined,
        MetricName: undefined,
        Dimensions: undefined,
    };
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["MetricName"] !== undefined) {
        contents.MetricName = output["MetricName"];
    }
    if (output.Dimensions === "") {
        contents.Dimensions = [];
    }
    if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
        contents.Dimensions = deserializeAws_queryDimensions(smithy_client_1.getArrayIfSingleItem(output["Dimensions"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryMetricAlarm = (output, context) => {
    let contents = {
        AlarmName: undefined,
        AlarmArn: undefined,
        AlarmDescription: undefined,
        AlarmConfigurationUpdatedTimestamp: undefined,
        ActionsEnabled: undefined,
        OKActions: undefined,
        AlarmActions: undefined,
        InsufficientDataActions: undefined,
        StateValue: undefined,
        StateReason: undefined,
        StateReasonData: undefined,
        StateUpdatedTimestamp: undefined,
        MetricName: undefined,
        Namespace: undefined,
        Statistic: undefined,
        ExtendedStatistic: undefined,
        Dimensions: undefined,
        Period: undefined,
        Unit: undefined,
        EvaluationPeriods: undefined,
        DatapointsToAlarm: undefined,
        Threshold: undefined,
        ComparisonOperator: undefined,
        TreatMissingData: undefined,
        EvaluateLowSampleCountPercentile: undefined,
        Metrics: undefined,
        ThresholdMetricId: undefined,
    };
    if (output["AlarmName"] !== undefined) {
        contents.AlarmName = output["AlarmName"];
    }
    if (output["AlarmArn"] !== undefined) {
        contents.AlarmArn = output["AlarmArn"];
    }
    if (output["AlarmDescription"] !== undefined) {
        contents.AlarmDescription = output["AlarmDescription"];
    }
    if (output["AlarmConfigurationUpdatedTimestamp"] !== undefined) {
        contents.AlarmConfigurationUpdatedTimestamp = new Date(output["AlarmConfigurationUpdatedTimestamp"]);
    }
    if (output["ActionsEnabled"] !== undefined) {
        contents.ActionsEnabled = output["ActionsEnabled"] == "true";
    }
    if (output.OKActions === "") {
        contents.OKActions = [];
    }
    if (output["OKActions"] !== undefined && output["OKActions"]["member"] !== undefined) {
        contents.OKActions = deserializeAws_queryResourceList(smithy_client_1.getArrayIfSingleItem(output["OKActions"]["member"]), context);
    }
    if (output.AlarmActions === "") {
        contents.AlarmActions = [];
    }
    if (output["AlarmActions"] !== undefined && output["AlarmActions"]["member"] !== undefined) {
        contents.AlarmActions = deserializeAws_queryResourceList(smithy_client_1.getArrayIfSingleItem(output["AlarmActions"]["member"]), context);
    }
    if (output.InsufficientDataActions === "") {
        contents.InsufficientDataActions = [];
    }
    if (output["InsufficientDataActions"] !== undefined && output["InsufficientDataActions"]["member"] !== undefined) {
        contents.InsufficientDataActions = deserializeAws_queryResourceList(smithy_client_1.getArrayIfSingleItem(output["InsufficientDataActions"]["member"]), context);
    }
    if (output["StateValue"] !== undefined) {
        contents.StateValue = output["StateValue"];
    }
    if (output["StateReason"] !== undefined) {
        contents.StateReason = output["StateReason"];
    }
    if (output["StateReasonData"] !== undefined) {
        contents.StateReasonData = output["StateReasonData"];
    }
    if (output["StateUpdatedTimestamp"] !== undefined) {
        contents.StateUpdatedTimestamp = new Date(output["StateUpdatedTimestamp"]);
    }
    if (output["MetricName"] !== undefined) {
        contents.MetricName = output["MetricName"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["Statistic"] !== undefined) {
        contents.Statistic = output["Statistic"];
    }
    if (output["ExtendedStatistic"] !== undefined) {
        contents.ExtendedStatistic = output["ExtendedStatistic"];
    }
    if (output.Dimensions === "") {
        contents.Dimensions = [];
    }
    if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
        contents.Dimensions = deserializeAws_queryDimensions(smithy_client_1.getArrayIfSingleItem(output["Dimensions"]["member"]), context);
    }
    if (output["Period"] !== undefined) {
        contents.Period = parseInt(output["Period"]);
    }
    if (output["Unit"] !== undefined) {
        contents.Unit = output["Unit"];
    }
    if (output["EvaluationPeriods"] !== undefined) {
        contents.EvaluationPeriods = parseInt(output["EvaluationPeriods"]);
    }
    if (output["DatapointsToAlarm"] !== undefined) {
        contents.DatapointsToAlarm = parseInt(output["DatapointsToAlarm"]);
    }
    if (output["Threshold"] !== undefined) {
        contents.Threshold = parseFloat(output["Threshold"]);
    }
    if (output["ComparisonOperator"] !== undefined) {
        contents.ComparisonOperator = output["ComparisonOperator"];
    }
    if (output["TreatMissingData"] !== undefined) {
        contents.TreatMissingData = output["TreatMissingData"];
    }
    if (output["EvaluateLowSampleCountPercentile"] !== undefined) {
        contents.EvaluateLowSampleCountPercentile = output["EvaluateLowSampleCountPercentile"];
    }
    if (output.Metrics === "") {
        contents.Metrics = [];
    }
    if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
        contents.Metrics = deserializeAws_queryMetricDataQueries(smithy_client_1.getArrayIfSingleItem(output["Metrics"]["member"]), context);
    }
    if (output["ThresholdMetricId"] !== undefined) {
        contents.ThresholdMetricId = output["ThresholdMetricId"];
    }
    return contents;
};
const deserializeAws_queryMetricAlarms = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMetricAlarm(entry, context);
    });
};
const deserializeAws_queryMetricDataQueries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMetricDataQuery(entry, context);
    });
};
const deserializeAws_queryMetricDataQuery = (output, context) => {
    let contents = {
        Id: undefined,
        MetricStat: undefined,
        Expression: undefined,
        Label: undefined,
        ReturnData: undefined,
        Period: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["MetricStat"] !== undefined) {
        contents.MetricStat = deserializeAws_queryMetricStat(output["MetricStat"], context);
    }
    if (output["Expression"] !== undefined) {
        contents.Expression = output["Expression"];
    }
    if (output["Label"] !== undefined) {
        contents.Label = output["Label"];
    }
    if (output["ReturnData"] !== undefined) {
        contents.ReturnData = output["ReturnData"] == "true";
    }
    if (output["Period"] !== undefined) {
        contents.Period = parseInt(output["Period"]);
    }
    return contents;
};
const deserializeAws_queryMetricDataResult = (output, context) => {
    let contents = {
        Id: undefined,
        Label: undefined,
        Timestamps: undefined,
        Values: undefined,
        StatusCode: undefined,
        Messages: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Label"] !== undefined) {
        contents.Label = output["Label"];
    }
    if (output.Timestamps === "") {
        contents.Timestamps = [];
    }
    if (output["Timestamps"] !== undefined && output["Timestamps"]["member"] !== undefined) {
        contents.Timestamps = deserializeAws_queryTimestamps(smithy_client_1.getArrayIfSingleItem(output["Timestamps"]["member"]), context);
    }
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryDatapointValues(smithy_client_1.getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    if (output["StatusCode"] !== undefined) {
        contents.StatusCode = output["StatusCode"];
    }
    if (output.Messages === "") {
        contents.Messages = [];
    }
    if (output["Messages"] !== undefined && output["Messages"]["member"] !== undefined) {
        contents.Messages = deserializeAws_queryMetricDataResultMessages(smithy_client_1.getArrayIfSingleItem(output["Messages"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryMetricDataResultMessages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMessageData(entry, context);
    });
};
const deserializeAws_queryMetricDataResults = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMetricDataResult(entry, context);
    });
};
const deserializeAws_queryMetrics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMetric(entry, context);
    });
};
const deserializeAws_queryMetricStat = (output, context) => {
    let contents = {
        Metric: undefined,
        Period: undefined,
        Stat: undefined,
        Unit: undefined,
    };
    if (output["Metric"] !== undefined) {
        contents.Metric = deserializeAws_queryMetric(output["Metric"], context);
    }
    if (output["Period"] !== undefined) {
        contents.Period = parseInt(output["Period"]);
    }
    if (output["Stat"] !== undefined) {
        contents.Stat = output["Stat"];
    }
    if (output["Unit"] !== undefined) {
        contents.Unit = output["Unit"];
    }
    return contents;
};
const deserializeAws_queryMetricStreamEntries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMetricStreamEntry(entry, context);
    });
};
const deserializeAws_queryMetricStreamEntry = (output, context) => {
    let contents = {
        Arn: undefined,
        CreationDate: undefined,
        LastUpdateDate: undefined,
        Name: undefined,
        FirehoseArn: undefined,
        State: undefined,
        OutputFormat: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreationDate"] !== undefined) {
        contents.CreationDate = new Date(output["CreationDate"]);
    }
    if (output["LastUpdateDate"] !== undefined) {
        contents.LastUpdateDate = new Date(output["LastUpdateDate"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["FirehoseArn"] !== undefined) {
        contents.FirehoseArn = output["FirehoseArn"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["OutputFormat"] !== undefined) {
        contents.OutputFormat = output["OutputFormat"];
    }
    return contents;
};
const deserializeAws_queryMetricStreamFilter = (output, context) => {
    let contents = {
        Namespace: undefined,
    };
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    return contents;
};
const deserializeAws_queryMetricStreamFilters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMetricStreamFilter(entry, context);
    });
};
const deserializeAws_queryMissingRequiredParameterException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPartialFailure = (output, context) => {
    let contents = {
        FailureResource: undefined,
        ExceptionType: undefined,
        FailureCode: undefined,
        FailureDescription: undefined,
    };
    if (output["FailureResource"] !== undefined) {
        contents.FailureResource = output["FailureResource"];
    }
    if (output["ExceptionType"] !== undefined) {
        contents.ExceptionType = output["ExceptionType"];
    }
    if (output["FailureCode"] !== undefined) {
        contents.FailureCode = output["FailureCode"];
    }
    if (output["FailureDescription"] !== undefined) {
        contents.FailureDescription = output["FailureDescription"];
    }
    return contents;
};
const deserializeAws_queryPutAnomalyDetectorOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryPutDashboardOutput = (output, context) => {
    let contents = {
        DashboardValidationMessages: undefined,
    };
    if (output.DashboardValidationMessages === "") {
        contents.DashboardValidationMessages = [];
    }
    if (output["DashboardValidationMessages"] !== undefined &&
        output["DashboardValidationMessages"]["member"] !== undefined) {
        contents.DashboardValidationMessages = deserializeAws_queryDashboardValidationMessages(smithy_client_1.getArrayIfSingleItem(output["DashboardValidationMessages"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryPutInsightRuleOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryPutMetricStreamOutput = (output, context) => {
    let contents = {
        Arn: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    return contents;
};
const deserializeAws_queryRange = (output, context) => {
    let contents = {
        StartTime: undefined,
        EndTime: undefined,
    };
    if (output["StartTime"] !== undefined) {
        contents.StartTime = new Date(output["StartTime"]);
    }
    if (output["EndTime"] !== undefined) {
        contents.EndTime = new Date(output["EndTime"]);
    }
    return contents;
};
const deserializeAws_queryResourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryResourceNotFound = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryResourceNotFoundException = (output, context) => {
    let contents = {
        ResourceType: undefined,
        ResourceId: undefined,
        Message: undefined,
    };
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    if (output["ResourceId"] !== undefined) {
        contents.ResourceId = output["ResourceId"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryStartMetricStreamsOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryStopMetricStreamsOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryTag = (output, context) => {
    let contents = {
        Key: undefined,
        Value: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryTagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTag(entry, context);
    });
};
const deserializeAws_queryTagResourceOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryTimestamps = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return new Date(entry);
    });
};
const deserializeAws_queryUntagResourceOutput = (output, context) => {
    let contents = {};
    return contents;
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
        const parsedObj = fast_xml_parser_1.parse(encoded, {
            attributeNamePrefix: "",
            ignoreAttributes: false,
            parseNodeValue: false,
            trimValues: false,
            tagValueProcessor: (val, tagName) => (val.trim() === "" ? "" : entities_1.decodeHTML(val)),
        });
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return smithy_client_1.getValueFromTextNode(parsedObjToReturn);
    }
    return {};
});
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => smithy_client_1.extendedEncodeURIComponent(key) + "=" + smithy_client_1.extendedEncodeURIComponent(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map