"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_queryStopStackSetOperationCommand =
  exports.serializeAws_querySignalResourceCommand =
  exports.serializeAws_querySetTypeDefaultVersionCommand =
  exports.serializeAws_querySetStackPolicyCommand =
  exports.serializeAws_queryRegisterTypeCommand =
  exports.serializeAws_queryRecordHandlerProgressCommand =
  exports.serializeAws_queryListTypeVersionsCommand =
  exports.serializeAws_queryListTypesCommand =
  exports.serializeAws_queryListTypeRegistrationsCommand =
  exports.serializeAws_queryListStackSetsCommand =
  exports.serializeAws_queryListStackSetOperationsCommand =
  exports.serializeAws_queryListStackSetOperationResultsCommand =
  exports.serializeAws_queryListStacksCommand =
  exports.serializeAws_queryListStackResourcesCommand =
  exports.serializeAws_queryListStackInstancesCommand =
  exports.serializeAws_queryListImportsCommand =
  exports.serializeAws_queryListExportsCommand =
  exports.serializeAws_queryListChangeSetsCommand =
  exports.serializeAws_queryGetTemplateSummaryCommand =
  exports.serializeAws_queryGetTemplateCommand =
  exports.serializeAws_queryGetStackPolicyCommand =
  exports.serializeAws_queryExecuteChangeSetCommand =
  exports.serializeAws_queryEstimateTemplateCostCommand =
  exports.serializeAws_queryDetectStackSetDriftCommand =
  exports.serializeAws_queryDetectStackResourceDriftCommand =
  exports.serializeAws_queryDetectStackDriftCommand =
  exports.serializeAws_queryDescribeTypeRegistrationCommand =
  exports.serializeAws_queryDescribeTypeCommand =
  exports.serializeAws_queryDescribeStackSetOperationCommand =
  exports.serializeAws_queryDescribeStackSetCommand =
  exports.serializeAws_queryDescribeStacksCommand =
  exports.serializeAws_queryDescribeStackResourcesCommand =
  exports.serializeAws_queryDescribeStackResourceDriftsCommand =
  exports.serializeAws_queryDescribeStackResourceCommand =
  exports.serializeAws_queryDescribeStackInstanceCommand =
  exports.serializeAws_queryDescribeStackEventsCommand =
  exports.serializeAws_queryDescribeStackDriftDetectionStatusCommand =
  exports.serializeAws_queryDescribeChangeSetCommand =
  exports.serializeAws_queryDescribeAccountLimitsCommand =
  exports.serializeAws_queryDeregisterTypeCommand =
  exports.serializeAws_queryDeleteStackSetCommand =
  exports.serializeAws_queryDeleteStackInstancesCommand =
  exports.serializeAws_queryDeleteStackCommand =
  exports.serializeAws_queryDeleteChangeSetCommand =
  exports.serializeAws_queryCreateStackSetCommand =
  exports.serializeAws_queryCreateStackInstancesCommand =
  exports.serializeAws_queryCreateStackCommand =
  exports.serializeAws_queryCreateChangeSetCommand =
  exports.serializeAws_queryContinueUpdateRollbackCommand =
  exports.serializeAws_queryCancelUpdateStackCommand =
    void 0;
exports.deserializeAws_queryRecordHandlerProgressCommand =
  exports.deserializeAws_queryListTypeVersionsCommand =
  exports.deserializeAws_queryListTypesCommand =
  exports.deserializeAws_queryListTypeRegistrationsCommand =
  exports.deserializeAws_queryListStackSetsCommand =
  exports.deserializeAws_queryListStackSetOperationsCommand =
  exports.deserializeAws_queryListStackSetOperationResultsCommand =
  exports.deserializeAws_queryListStacksCommand =
  exports.deserializeAws_queryListStackResourcesCommand =
  exports.deserializeAws_queryListStackInstancesCommand =
  exports.deserializeAws_queryListImportsCommand =
  exports.deserializeAws_queryListExportsCommand =
  exports.deserializeAws_queryListChangeSetsCommand =
  exports.deserializeAws_queryGetTemplateSummaryCommand =
  exports.deserializeAws_queryGetTemplateCommand =
  exports.deserializeAws_queryGetStackPolicyCommand =
  exports.deserializeAws_queryExecuteChangeSetCommand =
  exports.deserializeAws_queryEstimateTemplateCostCommand =
  exports.deserializeAws_queryDetectStackSetDriftCommand =
  exports.deserializeAws_queryDetectStackResourceDriftCommand =
  exports.deserializeAws_queryDetectStackDriftCommand =
  exports.deserializeAws_queryDescribeTypeRegistrationCommand =
  exports.deserializeAws_queryDescribeTypeCommand =
  exports.deserializeAws_queryDescribeStackSetOperationCommand =
  exports.deserializeAws_queryDescribeStackSetCommand =
  exports.deserializeAws_queryDescribeStacksCommand =
  exports.deserializeAws_queryDescribeStackResourcesCommand =
  exports.deserializeAws_queryDescribeStackResourceDriftsCommand =
  exports.deserializeAws_queryDescribeStackResourceCommand =
  exports.deserializeAws_queryDescribeStackInstanceCommand =
  exports.deserializeAws_queryDescribeStackEventsCommand =
  exports.deserializeAws_queryDescribeStackDriftDetectionStatusCommand =
  exports.deserializeAws_queryDescribeChangeSetCommand =
  exports.deserializeAws_queryDescribeAccountLimitsCommand =
  exports.deserializeAws_queryDeregisterTypeCommand =
  exports.deserializeAws_queryDeleteStackSetCommand =
  exports.deserializeAws_queryDeleteStackInstancesCommand =
  exports.deserializeAws_queryDeleteStackCommand =
  exports.deserializeAws_queryDeleteChangeSetCommand =
  exports.deserializeAws_queryCreateStackSetCommand =
  exports.deserializeAws_queryCreateStackInstancesCommand =
  exports.deserializeAws_queryCreateStackCommand =
  exports.deserializeAws_queryCreateChangeSetCommand =
  exports.deserializeAws_queryContinueUpdateRollbackCommand =
  exports.deserializeAws_queryCancelUpdateStackCommand =
  exports.serializeAws_queryValidateTemplateCommand =
  exports.serializeAws_queryUpdateTerminationProtectionCommand =
  exports.serializeAws_queryUpdateStackSetCommand =
  exports.serializeAws_queryUpdateStackInstancesCommand =
  exports.serializeAws_queryUpdateStackCommand =
    void 0;
exports.deserializeAws_queryValidateTemplateCommand =
  exports.deserializeAws_queryUpdateTerminationProtectionCommand =
  exports.deserializeAws_queryUpdateStackSetCommand =
  exports.deserializeAws_queryUpdateStackInstancesCommand =
  exports.deserializeAws_queryUpdateStackCommand =
  exports.deserializeAws_queryStopStackSetOperationCommand =
  exports.deserializeAws_querySignalResourceCommand =
  exports.deserializeAws_querySetTypeDefaultVersionCommand =
  exports.deserializeAws_querySetStackPolicyCommand =
  exports.deserializeAws_queryRegisterTypeCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const uuid_1 = require("uuid");
const serializeAws_queryCancelUpdateStackCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCancelUpdateStackInput(input, context),
    Action: "CancelUpdateStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCancelUpdateStackCommand = serializeAws_queryCancelUpdateStackCommand;
const serializeAws_queryContinueUpdateRollbackCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryContinueUpdateRollbackInput(input, context),
    Action: "ContinueUpdateRollback",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryContinueUpdateRollbackCommand = serializeAws_queryContinueUpdateRollbackCommand;
const serializeAws_queryCreateChangeSetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateChangeSetInput(input, context),
    Action: "CreateChangeSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateChangeSetCommand = serializeAws_queryCreateChangeSetCommand;
const serializeAws_queryCreateStackCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateStackInput(input, context),
    Action: "CreateStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateStackCommand = serializeAws_queryCreateStackCommand;
const serializeAws_queryCreateStackInstancesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateStackInstancesInput(input, context),
    Action: "CreateStackInstances",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateStackInstancesCommand = serializeAws_queryCreateStackInstancesCommand;
const serializeAws_queryCreateStackSetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateStackSetInput(input, context),
    Action: "CreateStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateStackSetCommand = serializeAws_queryCreateStackSetCommand;
const serializeAws_queryDeleteChangeSetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteChangeSetInput(input, context),
    Action: "DeleteChangeSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteChangeSetCommand = serializeAws_queryDeleteChangeSetCommand;
const serializeAws_queryDeleteStackCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteStackInput(input, context),
    Action: "DeleteStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteStackCommand = serializeAws_queryDeleteStackCommand;
const serializeAws_queryDeleteStackInstancesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteStackInstancesInput(input, context),
    Action: "DeleteStackInstances",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteStackInstancesCommand = serializeAws_queryDeleteStackInstancesCommand;
const serializeAws_queryDeleteStackSetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteStackSetInput(input, context),
    Action: "DeleteStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteStackSetCommand = serializeAws_queryDeleteStackSetCommand;
const serializeAws_queryDeregisterTypeCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeregisterTypeInput(input, context),
    Action: "DeregisterType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeregisterTypeCommand = serializeAws_queryDeregisterTypeCommand;
const serializeAws_queryDescribeAccountLimitsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAccountLimitsInput(input, context),
    Action: "DescribeAccountLimits",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAccountLimitsCommand = serializeAws_queryDescribeAccountLimitsCommand;
const serializeAws_queryDescribeChangeSetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeChangeSetInput(input, context),
    Action: "DescribeChangeSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeChangeSetCommand = serializeAws_queryDescribeChangeSetCommand;
const serializeAws_queryDescribeStackDriftDetectionStatusCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackDriftDetectionStatusInput(input, context),
    Action: "DescribeStackDriftDetectionStatus",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeStackDriftDetectionStatusCommand =
  serializeAws_queryDescribeStackDriftDetectionStatusCommand;
const serializeAws_queryDescribeStackEventsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackEventsInput(input, context),
    Action: "DescribeStackEvents",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeStackEventsCommand = serializeAws_queryDescribeStackEventsCommand;
const serializeAws_queryDescribeStackInstanceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackInstanceInput(input, context),
    Action: "DescribeStackInstance",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeStackInstanceCommand = serializeAws_queryDescribeStackInstanceCommand;
const serializeAws_queryDescribeStackResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackResourceInput(input, context),
    Action: "DescribeStackResource",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeStackResourceCommand = serializeAws_queryDescribeStackResourceCommand;
const serializeAws_queryDescribeStackResourceDriftsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackResourceDriftsInput(input, context),
    Action: "DescribeStackResourceDrifts",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeStackResourceDriftsCommand = serializeAws_queryDescribeStackResourceDriftsCommand;
const serializeAws_queryDescribeStackResourcesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackResourcesInput(input, context),
    Action: "DescribeStackResources",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeStackResourcesCommand = serializeAws_queryDescribeStackResourcesCommand;
const serializeAws_queryDescribeStacksCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStacksInput(input, context),
    Action: "DescribeStacks",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeStacksCommand = serializeAws_queryDescribeStacksCommand;
const serializeAws_queryDescribeStackSetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackSetInput(input, context),
    Action: "DescribeStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeStackSetCommand = serializeAws_queryDescribeStackSetCommand;
const serializeAws_queryDescribeStackSetOperationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackSetOperationInput(input, context),
    Action: "DescribeStackSetOperation",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeStackSetOperationCommand = serializeAws_queryDescribeStackSetOperationCommand;
const serializeAws_queryDescribeTypeCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTypeInput(input, context),
    Action: "DescribeType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeTypeCommand = serializeAws_queryDescribeTypeCommand;
const serializeAws_queryDescribeTypeRegistrationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTypeRegistrationInput(input, context),
    Action: "DescribeTypeRegistration",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeTypeRegistrationCommand = serializeAws_queryDescribeTypeRegistrationCommand;
const serializeAws_queryDetectStackDriftCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetectStackDriftInput(input, context),
    Action: "DetectStackDrift",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDetectStackDriftCommand = serializeAws_queryDetectStackDriftCommand;
const serializeAws_queryDetectStackResourceDriftCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetectStackResourceDriftInput(input, context),
    Action: "DetectStackResourceDrift",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDetectStackResourceDriftCommand = serializeAws_queryDetectStackResourceDriftCommand;
const serializeAws_queryDetectStackSetDriftCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetectStackSetDriftInput(input, context),
    Action: "DetectStackSetDrift",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDetectStackSetDriftCommand = serializeAws_queryDetectStackSetDriftCommand;
const serializeAws_queryEstimateTemplateCostCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEstimateTemplateCostInput(input, context),
    Action: "EstimateTemplateCost",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryEstimateTemplateCostCommand = serializeAws_queryEstimateTemplateCostCommand;
const serializeAws_queryExecuteChangeSetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryExecuteChangeSetInput(input, context),
    Action: "ExecuteChangeSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryExecuteChangeSetCommand = serializeAws_queryExecuteChangeSetCommand;
const serializeAws_queryGetStackPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetStackPolicyInput(input, context),
    Action: "GetStackPolicy",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetStackPolicyCommand = serializeAws_queryGetStackPolicyCommand;
const serializeAws_queryGetTemplateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetTemplateInput(input, context),
    Action: "GetTemplate",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetTemplateCommand = serializeAws_queryGetTemplateCommand;
const serializeAws_queryGetTemplateSummaryCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetTemplateSummaryInput(input, context),
    Action: "GetTemplateSummary",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetTemplateSummaryCommand = serializeAws_queryGetTemplateSummaryCommand;
const serializeAws_queryListChangeSetsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListChangeSetsInput(input, context),
    Action: "ListChangeSets",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListChangeSetsCommand = serializeAws_queryListChangeSetsCommand;
const serializeAws_queryListExportsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListExportsInput(input, context),
    Action: "ListExports",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListExportsCommand = serializeAws_queryListExportsCommand;
const serializeAws_queryListImportsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListImportsInput(input, context),
    Action: "ListImports",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListImportsCommand = serializeAws_queryListImportsCommand;
const serializeAws_queryListStackInstancesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListStackInstancesInput(input, context),
    Action: "ListStackInstances",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListStackInstancesCommand = serializeAws_queryListStackInstancesCommand;
const serializeAws_queryListStackResourcesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListStackResourcesInput(input, context),
    Action: "ListStackResources",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListStackResourcesCommand = serializeAws_queryListStackResourcesCommand;
const serializeAws_queryListStacksCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListStacksInput(input, context),
    Action: "ListStacks",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListStacksCommand = serializeAws_queryListStacksCommand;
const serializeAws_queryListStackSetOperationResultsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListStackSetOperationResultsInput(input, context),
    Action: "ListStackSetOperationResults",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListStackSetOperationResultsCommand = serializeAws_queryListStackSetOperationResultsCommand;
const serializeAws_queryListStackSetOperationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListStackSetOperationsInput(input, context),
    Action: "ListStackSetOperations",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListStackSetOperationsCommand = serializeAws_queryListStackSetOperationsCommand;
const serializeAws_queryListStackSetsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListStackSetsInput(input, context),
    Action: "ListStackSets",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListStackSetsCommand = serializeAws_queryListStackSetsCommand;
const serializeAws_queryListTypeRegistrationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTypeRegistrationsInput(input, context),
    Action: "ListTypeRegistrations",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListTypeRegistrationsCommand = serializeAws_queryListTypeRegistrationsCommand;
const serializeAws_queryListTypesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTypesInput(input, context),
    Action: "ListTypes",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListTypesCommand = serializeAws_queryListTypesCommand;
const serializeAws_queryListTypeVersionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTypeVersionsInput(input, context),
    Action: "ListTypeVersions",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListTypeVersionsCommand = serializeAws_queryListTypeVersionsCommand;
const serializeAws_queryRecordHandlerProgressCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRecordHandlerProgressInput(input, context),
    Action: "RecordHandlerProgress",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRecordHandlerProgressCommand = serializeAws_queryRecordHandlerProgressCommand;
const serializeAws_queryRegisterTypeCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRegisterTypeInput(input, context),
    Action: "RegisterType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRegisterTypeCommand = serializeAws_queryRegisterTypeCommand;
const serializeAws_querySetStackPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetStackPolicyInput(input, context),
    Action: "SetStackPolicy",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetStackPolicyCommand = serializeAws_querySetStackPolicyCommand;
const serializeAws_querySetTypeDefaultVersionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetTypeDefaultVersionInput(input, context),
    Action: "SetTypeDefaultVersion",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetTypeDefaultVersionCommand = serializeAws_querySetTypeDefaultVersionCommand;
const serializeAws_querySignalResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_querySignalResourceInput(input, context),
    Action: "SignalResource",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySignalResourceCommand = serializeAws_querySignalResourceCommand;
const serializeAws_queryStopStackSetOperationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStopStackSetOperationInput(input, context),
    Action: "StopStackSetOperation",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStopStackSetOperationCommand = serializeAws_queryStopStackSetOperationCommand;
const serializeAws_queryUpdateStackCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateStackInput(input, context),
    Action: "UpdateStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateStackCommand = serializeAws_queryUpdateStackCommand;
const serializeAws_queryUpdateStackInstancesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateStackInstancesInput(input, context),
    Action: "UpdateStackInstances",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateStackInstancesCommand = serializeAws_queryUpdateStackInstancesCommand;
const serializeAws_queryUpdateStackSetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateStackSetInput(input, context),
    Action: "UpdateStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateStackSetCommand = serializeAws_queryUpdateStackSetCommand;
const serializeAws_queryUpdateTerminationProtectionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateTerminationProtectionInput(input, context),
    Action: "UpdateTerminationProtection",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateTerminationProtectionCommand = serializeAws_queryUpdateTerminationProtectionCommand;
const serializeAws_queryValidateTemplateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryValidateTemplateInput(input, context),
    Action: "ValidateTemplate",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryValidateTemplateCommand = serializeAws_queryValidateTemplateCommand;
const deserializeAws_queryCancelUpdateStackCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCancelUpdateStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryCancelUpdateStackCommand = deserializeAws_queryCancelUpdateStackCommand;
const deserializeAws_queryCancelUpdateStackCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryContinueUpdateRollbackCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryContinueUpdateRollbackCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryContinueUpdateRollbackOutput(data.ContinueUpdateRollbackResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryContinueUpdateRollbackCommand = deserializeAws_queryContinueUpdateRollbackCommand;
const deserializeAws_queryContinueUpdateRollbackCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateChangeSetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateChangeSetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryCreateChangeSetOutput(data.CreateChangeSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryCreateChangeSetCommand = deserializeAws_queryCreateChangeSetCommand;
const deserializeAws_queryCreateChangeSetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.cloudformation#AlreadyExistsException":
      response = {
        ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InsufficientCapabilitiesException":
    case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
      response = {
        ...(await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateStackCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateStackCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryCreateStackOutput(data.CreateStackResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryCreateStackCommand = deserializeAws_queryCreateStackCommand;
const deserializeAws_queryCreateStackCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.cloudformation#AlreadyExistsException":
      response = {
        ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InsufficientCapabilitiesException":
    case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
      response = {
        ...(await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateStackInstancesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateStackInstancesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryCreateStackInstancesOutput(data.CreateStackInstancesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryCreateStackInstancesCommand = deserializeAws_queryCreateStackInstancesCommand;
const deserializeAws_queryCreateStackInstancesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateStackSetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateStackSetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryCreateStackSetOutput(data.CreateStackSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryCreateStackSetCommand = deserializeAws_queryCreateStackSetCommand;
const deserializeAws_queryCreateStackSetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CreatedButModifiedException":
    case "com.amazonaws.cloudformation#CreatedButModifiedException":
      response = {
        ...(await deserializeAws_queryCreatedButModifiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameAlreadyExistsException":
    case "com.amazonaws.cloudformation#NameAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryNameAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteChangeSetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteChangeSetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDeleteChangeSetOutput(data.DeleteChangeSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteChangeSetCommand = deserializeAws_queryDeleteChangeSetCommand;
const deserializeAws_queryDeleteChangeSetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidChangeSetStatusException":
    case "com.amazonaws.cloudformation#InvalidChangeSetStatusException":
      response = {
        ...(await deserializeAws_queryInvalidChangeSetStatusExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteStackCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteStackCommand = deserializeAws_queryDeleteStackCommand;
const deserializeAws_queryDeleteStackCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteStackInstancesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteStackInstancesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDeleteStackInstancesOutput(data.DeleteStackInstancesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteStackInstancesCommand = deserializeAws_queryDeleteStackInstancesCommand;
const deserializeAws_queryDeleteStackInstancesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteStackSetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteStackSetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDeleteStackSetOutput(data.DeleteStackSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteStackSetCommand = deserializeAws_queryDeleteStackSetCommand;
const deserializeAws_queryDeleteStackSetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotEmptyException":
    case "com.amazonaws.cloudformation#StackSetNotEmptyException":
      response = {
        ...(await deserializeAws_queryStackSetNotEmptyExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeregisterTypeCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeregisterTypeCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDeregisterTypeOutput(data.DeregisterTypeResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeregisterTypeCommand = deserializeAws_queryDeregisterTypeCommand;
const deserializeAws_queryDeregisterTypeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeAccountLimitsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAccountLimitsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeAccountLimitsOutput(data.DescribeAccountLimitsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAccountLimitsCommand = deserializeAws_queryDescribeAccountLimitsCommand;
const deserializeAws_queryDescribeAccountLimitsCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeChangeSetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeChangeSetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeChangeSetOutput(data.DescribeChangeSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeChangeSetCommand = deserializeAws_queryDescribeChangeSetCommand;
const deserializeAws_queryDescribeChangeSetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFoundException":
    case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
      response = {
        ...(await deserializeAws_queryChangeSetNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeStackDriftDetectionStatusCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackDriftDetectionStatusCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeStackDriftDetectionStatusOutput(
    data.DescribeStackDriftDetectionStatusResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeStackDriftDetectionStatusCommand =
  deserializeAws_queryDescribeStackDriftDetectionStatusCommand;
const deserializeAws_queryDescribeStackDriftDetectionStatusCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeStackEventsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackEventsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeStackEventsOutput(data.DescribeStackEventsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeStackEventsCommand = deserializeAws_queryDescribeStackEventsCommand;
const deserializeAws_queryDescribeStackEventsCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeStackInstanceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackInstanceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeStackInstanceOutput(data.DescribeStackInstanceResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeStackInstanceCommand = deserializeAws_queryDescribeStackInstanceCommand;
const deserializeAws_queryDescribeStackInstanceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackInstanceNotFoundException":
    case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
      response = {
        ...(await deserializeAws_queryStackInstanceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeStackResourceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackResourceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeStackResourceOutput(data.DescribeStackResourceResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeStackResourceCommand = deserializeAws_queryDescribeStackResourceCommand;
const deserializeAws_queryDescribeStackResourceCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeStackResourceDriftsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackResourceDriftsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeStackResourceDriftsOutput(data.DescribeStackResourceDriftsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeStackResourceDriftsCommand = deserializeAws_queryDescribeStackResourceDriftsCommand;
const deserializeAws_queryDescribeStackResourceDriftsCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeStackResourcesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackResourcesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeStackResourcesOutput(data.DescribeStackResourcesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeStackResourcesCommand = deserializeAws_queryDescribeStackResourcesCommand;
const deserializeAws_queryDescribeStackResourcesCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeStacksCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStacksCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeStacksOutput(data.DescribeStacksResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeStacksCommand = deserializeAws_queryDescribeStacksCommand;
const deserializeAws_queryDescribeStacksCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeStackSetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackSetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeStackSetOutput(data.DescribeStackSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeStackSetCommand = deserializeAws_queryDescribeStackSetCommand;
const deserializeAws_queryDescribeStackSetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeStackSetOperationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackSetOperationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeStackSetOperationOutput(data.DescribeStackSetOperationResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeStackSetOperationCommand = deserializeAws_queryDescribeStackSetOperationCommand;
const deserializeAws_queryDescribeStackSetOperationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      response = {
        ...(await deserializeAws_queryOperationNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeTypeCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTypeCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeTypeOutput(data.DescribeTypeResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeTypeCommand = deserializeAws_queryDescribeTypeCommand;
const deserializeAws_queryDescribeTypeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeTypeRegistrationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTypeRegistrationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeTypeRegistrationOutput(data.DescribeTypeRegistrationResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeTypeRegistrationCommand = deserializeAws_queryDescribeTypeRegistrationCommand;
const deserializeAws_queryDescribeTypeRegistrationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDetectStackDriftCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetectStackDriftCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDetectStackDriftOutput(data.DetectStackDriftResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDetectStackDriftCommand = deserializeAws_queryDetectStackDriftCommand;
const deserializeAws_queryDetectStackDriftCommandError = async (output, context) => {
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
const deserializeAws_queryDetectStackResourceDriftCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetectStackResourceDriftCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDetectStackResourceDriftOutput(data.DetectStackResourceDriftResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDetectStackResourceDriftCommand = deserializeAws_queryDetectStackResourceDriftCommand;
const deserializeAws_queryDetectStackResourceDriftCommandError = async (output, context) => {
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
const deserializeAws_queryDetectStackSetDriftCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetectStackSetDriftCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDetectStackSetDriftOutput(data.DetectStackSetDriftResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDetectStackSetDriftCommand = deserializeAws_queryDetectStackSetDriftCommand;
const deserializeAws_queryDetectStackSetDriftCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryEstimateTemplateCostCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEstimateTemplateCostCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryEstimateTemplateCostOutput(data.EstimateTemplateCostResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryEstimateTemplateCostCommand = deserializeAws_queryEstimateTemplateCostCommand;
const deserializeAws_queryEstimateTemplateCostCommandError = async (output, context) => {
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
const deserializeAws_queryExecuteChangeSetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryExecuteChangeSetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryExecuteChangeSetOutput(data.ExecuteChangeSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryExecuteChangeSetCommand = deserializeAws_queryExecuteChangeSetCommand;
const deserializeAws_queryExecuteChangeSetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFoundException":
    case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
      response = {
        ...(await deserializeAws_queryChangeSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InsufficientCapabilitiesException":
    case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
      response = {
        ...(await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidChangeSetStatusException":
    case "com.amazonaws.cloudformation#InvalidChangeSetStatusException":
      response = {
        ...(await deserializeAws_queryInvalidChangeSetStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryGetStackPolicyCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetStackPolicyCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryGetStackPolicyOutput(data.GetStackPolicyResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryGetStackPolicyCommand = deserializeAws_queryGetStackPolicyCommand;
const deserializeAws_queryGetStackPolicyCommandError = async (output, context) => {
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
const deserializeAws_queryGetTemplateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetTemplateCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryGetTemplateOutput(data.GetTemplateResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryGetTemplateCommand = deserializeAws_queryGetTemplateCommand;
const deserializeAws_queryGetTemplateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFoundException":
    case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
      response = {
        ...(await deserializeAws_queryChangeSetNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryGetTemplateSummaryCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetTemplateSummaryCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryGetTemplateSummaryOutput(data.GetTemplateSummaryResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryGetTemplateSummaryCommand = deserializeAws_queryGetTemplateSummaryCommand;
const deserializeAws_queryGetTemplateSummaryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryListChangeSetsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListChangeSetsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryListChangeSetsOutput(data.ListChangeSetsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryListChangeSetsCommand = deserializeAws_queryListChangeSetsCommand;
const deserializeAws_queryListChangeSetsCommandError = async (output, context) => {
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
const deserializeAws_queryListExportsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListExportsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryListExportsOutput(data.ListExportsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryListExportsCommand = deserializeAws_queryListExportsCommand;
const deserializeAws_queryListExportsCommandError = async (output, context) => {
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
const deserializeAws_queryListImportsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListImportsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryListImportsOutput(data.ListImportsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryListImportsCommand = deserializeAws_queryListImportsCommand;
const deserializeAws_queryListImportsCommandError = async (output, context) => {
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
const deserializeAws_queryListStackInstancesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListStackInstancesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryListStackInstancesOutput(data.ListStackInstancesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryListStackInstancesCommand = deserializeAws_queryListStackInstancesCommand;
const deserializeAws_queryListStackInstancesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryListStackResourcesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListStackResourcesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryListStackResourcesOutput(data.ListStackResourcesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryListStackResourcesCommand = deserializeAws_queryListStackResourcesCommand;
const deserializeAws_queryListStackResourcesCommandError = async (output, context) => {
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
const deserializeAws_queryListStacksCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListStacksCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryListStacksOutput(data.ListStacksResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryListStacksCommand = deserializeAws_queryListStacksCommand;
const deserializeAws_queryListStacksCommandError = async (output, context) => {
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
const deserializeAws_queryListStackSetOperationResultsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListStackSetOperationResultsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryListStackSetOperationResultsOutput(data.ListStackSetOperationResultsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryListStackSetOperationResultsCommand =
  deserializeAws_queryListStackSetOperationResultsCommand;
const deserializeAws_queryListStackSetOperationResultsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      response = {
        ...(await deserializeAws_queryOperationNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryListStackSetOperationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListStackSetOperationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryListStackSetOperationsOutput(data.ListStackSetOperationsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryListStackSetOperationsCommand = deserializeAws_queryListStackSetOperationsCommand;
const deserializeAws_queryListStackSetOperationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryListStackSetsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListStackSetsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryListStackSetsOutput(data.ListStackSetsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryListStackSetsCommand = deserializeAws_queryListStackSetsCommand;
const deserializeAws_queryListStackSetsCommandError = async (output, context) => {
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
const deserializeAws_queryListTypeRegistrationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListTypeRegistrationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryListTypeRegistrationsOutput(data.ListTypeRegistrationsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryListTypeRegistrationsCommand = deserializeAws_queryListTypeRegistrationsCommand;
const deserializeAws_queryListTypeRegistrationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryListTypesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListTypesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryListTypesOutput(data.ListTypesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryListTypesCommand = deserializeAws_queryListTypesCommand;
const deserializeAws_queryListTypesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryListTypeVersionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListTypeVersionsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryListTypeVersionsOutput(data.ListTypeVersionsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryListTypeVersionsCommand = deserializeAws_queryListTypeVersionsCommand;
const deserializeAws_queryListTypeVersionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryRecordHandlerProgressCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRecordHandlerProgressCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryRecordHandlerProgressOutput(data.RecordHandlerProgressResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryRecordHandlerProgressCommand = deserializeAws_queryRecordHandlerProgressCommand;
const deserializeAws_queryRecordHandlerProgressCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateTransitionException":
    case "com.amazonaws.cloudformation#InvalidStateTransitionException":
      response = {
        ...(await deserializeAws_queryInvalidStateTransitionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationStatusCheckFailedException":
    case "com.amazonaws.cloudformation#OperationStatusCheckFailedException":
      response = {
        ...(await deserializeAws_queryOperationStatusCheckFailedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryRegisterTypeCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRegisterTypeCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryRegisterTypeOutput(data.RegisterTypeResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryRegisterTypeCommand = deserializeAws_queryRegisterTypeCommand;
const deserializeAws_queryRegisterTypeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
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
const deserializeAws_querySetStackPolicyCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetStackPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_querySetStackPolicyCommand = deserializeAws_querySetStackPolicyCommand;
const deserializeAws_querySetStackPolicyCommandError = async (output, context) => {
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
const deserializeAws_querySetTypeDefaultVersionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetTypeDefaultVersionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_querySetTypeDefaultVersionOutput(data.SetTypeDefaultVersionResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_querySetTypeDefaultVersionCommand = deserializeAws_querySetTypeDefaultVersionCommand;
const deserializeAws_querySetTypeDefaultVersionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_querySignalResourceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySignalResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_querySignalResourceCommand = deserializeAws_querySignalResourceCommand;
const deserializeAws_querySignalResourceCommandError = async (output, context) => {
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
const deserializeAws_queryStopStackSetOperationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStopStackSetOperationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryStopStackSetOperationOutput(data.StopStackSetOperationResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryStopStackSetOperationCommand = deserializeAws_queryStopStackSetOperationCommand;
const deserializeAws_queryStopStackSetOperationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      response = {
        ...(await deserializeAws_queryOperationNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryUpdateStackCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateStackCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryUpdateStackOutput(data.UpdateStackResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateStackCommand = deserializeAws_queryUpdateStackCommand;
const deserializeAws_queryUpdateStackCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientCapabilitiesException":
    case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
      response = {
        ...(await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryUpdateStackInstancesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateStackInstancesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryUpdateStackInstancesOutput(data.UpdateStackInstancesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateStackInstancesCommand = deserializeAws_queryUpdateStackInstancesCommand;
const deserializeAws_queryUpdateStackInstancesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackInstanceNotFoundException":
    case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
      response = {
        ...(await deserializeAws_queryStackInstanceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryUpdateStackSetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateStackSetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryUpdateStackSetOutput(data.UpdateStackSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateStackSetCommand = deserializeAws_queryUpdateStackSetCommand;
const deserializeAws_queryUpdateStackSetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackInstanceNotFoundException":
    case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
      response = {
        ...(await deserializeAws_queryStackInstanceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryUpdateTerminationProtectionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateTerminationProtectionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryUpdateTerminationProtectionOutput(data.UpdateTerminationProtectionResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateTerminationProtectionCommand = deserializeAws_queryUpdateTerminationProtectionCommand;
const deserializeAws_queryUpdateTerminationProtectionCommandError = async (output, context) => {
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
const deserializeAws_queryValidateTemplateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryValidateTemplateCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryValidateTemplateOutput(data.ValidateTemplateResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryValidateTemplateCommand = deserializeAws_queryValidateTemplateCommand;
const deserializeAws_queryValidateTemplateCommandError = async (output, context) => {
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
const deserializeAws_queryAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryAlreadyExistsException(body.Error, context);
  const contents = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryCFNRegistryExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryCFNRegistryException(body.Error, context);
  const contents = {
    name: "CFNRegistryException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryChangeSetNotFoundExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryChangeSetNotFoundException(body.Error, context);
  const contents = {
    name: "ChangeSetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryCreatedButModifiedExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryCreatedButModifiedException(body.Error, context);
  const contents = {
    name: "CreatedButModifiedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryInsufficientCapabilitiesExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryInsufficientCapabilitiesException(body.Error, context);
  const contents = {
    name: "InsufficientCapabilitiesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryInvalidChangeSetStatusExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryInvalidChangeSetStatusException(body.Error, context);
  const contents = {
    name: "InvalidChangeSetStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryInvalidOperationExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryInvalidOperationException(body.Error, context);
  const contents = {
    name: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryInvalidStateTransitionExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryInvalidStateTransitionException(body.Error, context);
  const contents = {
    name: "InvalidStateTransitionException",
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
const deserializeAws_queryNameAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryNameAlreadyExistsException(body.Error, context);
  const contents = {
    name: "NameAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryOperationIdAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryOperationIdAlreadyExistsException(body.Error, context);
  const contents = {
    name: "OperationIdAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryOperationInProgressExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryOperationInProgressException(body.Error, context);
  const contents = {
    name: "OperationInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryOperationNotFoundExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryOperationNotFoundException(body.Error, context);
  const contents = {
    name: "OperationNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryOperationStatusCheckFailedExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryOperationStatusCheckFailedException(body.Error, context);
  const contents = {
    name: "OperationStatusCheckFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryStackInstanceNotFoundExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryStackInstanceNotFoundException(body.Error, context);
  const contents = {
    name: "StackInstanceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryStackSetNotEmptyExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryStackSetNotEmptyException(body.Error, context);
  const contents = {
    name: "StackSetNotEmptyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryStackSetNotFoundExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryStackSetNotFoundException(body.Error, context);
  const contents = {
    name: "StackSetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryStaleRequestExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryStaleRequestException(body.Error, context);
  const contents = {
    name: "StaleRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryTokenAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryTokenAlreadyExistsException(body.Error, context);
  const contents = {
    name: "TokenAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryTypeNotFoundExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryTypeNotFoundException(body.Error, context);
  const contents = {
    name: "TypeNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const serializeAws_queryAccountList = (input, context) => {
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
const serializeAws_queryAutoDeployment = (input, context) => {
  const entries = {};
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.RetainStacksOnAccountRemoval !== undefined && input.RetainStacksOnAccountRemoval !== null) {
    entries["RetainStacksOnAccountRemoval"] = input.RetainStacksOnAccountRemoval;
  }
  return entries;
};
const serializeAws_queryCancelUpdateStackInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
const serializeAws_queryCapabilities = (input, context) => {
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
const serializeAws_queryContinueUpdateRollbackInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.ResourcesToSkip !== undefined && input.ResourcesToSkip !== null) {
    const memberEntries = serializeAws_queryResourcesToSkip(input.ResourcesToSkip, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourcesToSkip.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
const serializeAws_queryCreateChangeSetInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate !== undefined && input.UsePreviousTemplate !== null) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    const memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceTypes !== undefined && input.ResourceTypes !== null) {
    const memberEntries = serializeAws_queryResourceTypes(input.ResourceTypes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.RollbackConfiguration !== undefined && input.RollbackConfiguration !== null) {
    const memberEntries = serializeAws_queryRollbackConfiguration(input.RollbackConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NotificationARNs !== undefined && input.NotificationARNs !== null) {
    const memberEntries = serializeAws_queryNotificationARNs(input.NotificationARNs, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.ClientToken !== undefined && input.ClientToken !== null) {
    entries["ClientToken"] = input.ClientToken;
  }
  if (input.Description !== undefined && input.Description !== null) {
    entries["Description"] = input.Description;
  }
  if (input.ChangeSetType !== undefined && input.ChangeSetType !== null) {
    entries["ChangeSetType"] = input.ChangeSetType;
  }
  if (input.ResourcesToImport !== undefined && input.ResourcesToImport !== null) {
    const memberEntries = serializeAws_queryResourcesToImport(input.ResourcesToImport, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourcesToImport.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IncludeNestedStacks !== undefined && input.IncludeNestedStacks !== null) {
    entries["IncludeNestedStacks"] = input.IncludeNestedStacks;
  }
  return entries;
};
const serializeAws_queryCreateStackInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    const memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DisableRollback !== undefined && input.DisableRollback !== null) {
    entries["DisableRollback"] = input.DisableRollback;
  }
  if (input.RollbackConfiguration !== undefined && input.RollbackConfiguration !== null) {
    const memberEntries = serializeAws_queryRollbackConfiguration(input.RollbackConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TimeoutInMinutes !== undefined && input.TimeoutInMinutes !== null) {
    entries["TimeoutInMinutes"] = input.TimeoutInMinutes;
  }
  if (input.NotificationARNs !== undefined && input.NotificationARNs !== null) {
    const memberEntries = serializeAws_queryNotificationARNs(input.NotificationARNs, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceTypes !== undefined && input.ResourceTypes !== null) {
    const memberEntries = serializeAws_queryResourceTypes(input.ResourceTypes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.OnFailure !== undefined && input.OnFailure !== null) {
    entries["OnFailure"] = input.OnFailure;
  }
  if (input.StackPolicyBody !== undefined && input.StackPolicyBody !== null) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL !== undefined && input.StackPolicyURL !== null) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.EnableTerminationProtection !== undefined && input.EnableTerminationProtection !== null) {
    entries["EnableTerminationProtection"] = input.EnableTerminationProtection;
  }
  return entries;
};
const serializeAws_queryCreateStackInstancesInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Accounts !== undefined && input.Accounts !== null) {
    const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeploymentTargets !== undefined && input.DeploymentTargets !== null) {
    const memberEntries = serializeAws_queryDeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    const memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ParameterOverrides !== undefined && input.ParameterOverrides !== null) {
    const memberEntries = serializeAws_queryParameters(input.ParameterOverrides, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ParameterOverrides.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = uuid_1.v4();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryCreateStackSetInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Description !== undefined && input.Description !== null) {
    entries["Description"] = input.Description;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    const memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AdministrationRoleARN !== undefined && input.AdministrationRoleARN !== null) {
    entries["AdministrationRoleARN"] = input.AdministrationRoleARN;
  }
  if (input.ExecutionRoleName !== undefined && input.ExecutionRoleName !== null) {
    entries["ExecutionRoleName"] = input.ExecutionRoleName;
  }
  if (input.PermissionModel !== undefined && input.PermissionModel !== null) {
    entries["PermissionModel"] = input.PermissionModel;
  }
  if (input.AutoDeployment !== undefined && input.AutoDeployment !== null) {
    const memberEntries = serializeAws_queryAutoDeployment(input.AutoDeployment, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoDeployment.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = uuid_1.v4();
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
const serializeAws_queryDeleteChangeSetInput = (input, context) => {
  const entries = {};
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};
const serializeAws_queryDeleteStackInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.RetainResources !== undefined && input.RetainResources !== null) {
    const memberEntries = serializeAws_queryRetainResources(input.RetainResources, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RetainResources.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
const serializeAws_queryDeleteStackInstancesInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Accounts !== undefined && input.Accounts !== null) {
    const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeploymentTargets !== undefined && input.DeploymentTargets !== null) {
    const memberEntries = serializeAws_queryDeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    const memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RetainStacks !== undefined && input.RetainStacks !== null) {
    entries["RetainStacks"] = input.RetainStacks;
  }
  if (input.OperationId === undefined) {
    input.OperationId = uuid_1.v4();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryDeleteStackSetInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryDeploymentTargets = (input, context) => {
  const entries = {};
  if (input.Accounts !== undefined && input.Accounts !== null) {
    const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AccountsUrl !== undefined && input.AccountsUrl !== null) {
    entries["AccountsUrl"] = input.AccountsUrl;
  }
  if (input.OrganizationalUnitIds !== undefined && input.OrganizationalUnitIds !== null) {
    const memberEntries = serializeAws_queryOrganizationalUnitIdList(input.OrganizationalUnitIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OrganizationalUnitIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryDeregisterTypeInput = (input, context) => {
  const entries = {};
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId !== undefined && input.VersionId !== null) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};
const serializeAws_queryDescribeAccountLimitsInput = (input, context) => {
  const entries = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryDescribeChangeSetInput = (input, context) => {
  const entries = {};
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryDescribeStackDriftDetectionStatusInput = (input, context) => {
  const entries = {};
  if (input.StackDriftDetectionId !== undefined && input.StackDriftDetectionId !== null) {
    entries["StackDriftDetectionId"] = input.StackDriftDetectionId;
  }
  return entries;
};
const serializeAws_queryDescribeStackEventsInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryDescribeStackInstanceInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.StackInstanceAccount !== undefined && input.StackInstanceAccount !== null) {
    entries["StackInstanceAccount"] = input.StackInstanceAccount;
  }
  if (input.StackInstanceRegion !== undefined && input.StackInstanceRegion !== null) {
    entries["StackInstanceRegion"] = input.StackInstanceRegion;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryDescribeStackResourceDriftsInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackResourceDriftStatusFilters !== undefined && input.StackResourceDriftStatusFilters !== null) {
    const memberEntries = serializeAws_queryStackResourceDriftStatusFilters(
      input.StackResourceDriftStatusFilters,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StackResourceDriftStatusFilters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};
const serializeAws_queryDescribeStackResourceInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  return entries;
};
const serializeAws_queryDescribeStackResourcesInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.PhysicalResourceId !== undefined && input.PhysicalResourceId !== null) {
    entries["PhysicalResourceId"] = input.PhysicalResourceId;
  }
  return entries;
};
const serializeAws_queryDescribeStackSetInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryDescribeStackSetOperationInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryDescribeStacksInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryDescribeTypeInput = (input, context) => {
  const entries = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.VersionId !== undefined && input.VersionId !== null) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};
const serializeAws_queryDescribeTypeRegistrationInput = (input, context) => {
  const entries = {};
  if (input.RegistrationToken !== undefined && input.RegistrationToken !== null) {
    entries["RegistrationToken"] = input.RegistrationToken;
  }
  return entries;
};
const serializeAws_queryDetectStackDriftInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceIds !== undefined && input.LogicalResourceIds !== null) {
    const memberEntries = serializeAws_queryLogicalResourceIds(input.LogicalResourceIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LogicalResourceIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryDetectStackResourceDriftInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  return entries;
};
const serializeAws_queryDetectStackSetDriftInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = uuid_1.v4();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryEstimateTemplateCostInput = (input, context) => {
  const entries = {};
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    const memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryExecuteChangeSetInput = (input, context) => {
  const entries = {};
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
const serializeAws_queryGetStackPolicyInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};
const serializeAws_queryGetTemplateInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.TemplateStage !== undefined && input.TemplateStage !== null) {
    entries["TemplateStage"] = input.TemplateStage;
  }
  return entries;
};
const serializeAws_queryGetTemplateSummaryInput = (input, context) => {
  const entries = {};
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryListChangeSetsInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryListExportsInput = (input, context) => {
  const entries = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryListImportsInput = (input, context) => {
  const entries = {};
  if (input.ExportName !== undefined && input.ExportName !== null) {
    entries["ExportName"] = input.ExportName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryListStackInstancesInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.Filters !== undefined && input.Filters !== null) {
    const memberEntries = serializeAws_queryStackInstanceFilters(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StackInstanceAccount !== undefined && input.StackInstanceAccount !== null) {
    entries["StackInstanceAccount"] = input.StackInstanceAccount;
  }
  if (input.StackInstanceRegion !== undefined && input.StackInstanceRegion !== null) {
    entries["StackInstanceRegion"] = input.StackInstanceRegion;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryListStackResourcesInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryListStackSetOperationResultsInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryListStackSetOperationsInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryListStackSetsInput = (input, context) => {
  const entries = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.Status !== undefined && input.Status !== null) {
    entries["Status"] = input.Status;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryListStacksInput = (input, context) => {
  const entries = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackStatusFilter !== undefined && input.StackStatusFilter !== null) {
    const memberEntries = serializeAws_queryStackStatusFilter(input.StackStatusFilter, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StackStatusFilter.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryListTypeRegistrationsInput = (input, context) => {
  const entries = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.TypeArn !== undefined && input.TypeArn !== null) {
    entries["TypeArn"] = input.TypeArn;
  }
  if (input.RegistrationStatusFilter !== undefined && input.RegistrationStatusFilter !== null) {
    entries["RegistrationStatusFilter"] = input.RegistrationStatusFilter;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryListTypesInput = (input, context) => {
  const entries = {};
  if (input.Visibility !== undefined && input.Visibility !== null) {
    entries["Visibility"] = input.Visibility;
  }
  if (input.ProvisioningType !== undefined && input.ProvisioningType !== null) {
    entries["ProvisioningType"] = input.ProvisioningType;
  }
  if (input.DeprecatedStatus !== undefined && input.DeprecatedStatus !== null) {
    entries["DeprecatedStatus"] = input.DeprecatedStatus;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryListTypeVersionsInput = (input, context) => {
  const entries = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.DeprecatedStatus !== undefined && input.DeprecatedStatus !== null) {
    entries["DeprecatedStatus"] = input.DeprecatedStatus;
  }
  return entries;
};
const serializeAws_queryLoggingConfig = (input, context) => {
  const entries = {};
  if (input.LogRoleArn !== undefined && input.LogRoleArn !== null) {
    entries["LogRoleArn"] = input.LogRoleArn;
  }
  if (input.LogGroupName !== undefined && input.LogGroupName !== null) {
    entries["LogGroupName"] = input.LogGroupName;
  }
  return entries;
};
const serializeAws_queryLogicalResourceIds = (input, context) => {
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
const serializeAws_queryNotificationARNs = (input, context) => {
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
const serializeAws_queryOrganizationalUnitIdList = (input, context) => {
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
const serializeAws_queryParameter = (input, context) => {
  const entries = {};
  if (input.ParameterKey !== undefined && input.ParameterKey !== null) {
    entries["ParameterKey"] = input.ParameterKey;
  }
  if (input.ParameterValue !== undefined && input.ParameterValue !== null) {
    entries["ParameterValue"] = input.ParameterValue;
  }
  if (input.UsePreviousValue !== undefined && input.UsePreviousValue !== null) {
    entries["UsePreviousValue"] = input.UsePreviousValue;
  }
  if (input.ResolvedValue !== undefined && input.ResolvedValue !== null) {
    entries["ResolvedValue"] = input.ResolvedValue;
  }
  return entries;
};
const serializeAws_queryParameters = (input, context) => {
  const entries = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryParameter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};
const serializeAws_queryRecordHandlerProgressInput = (input, context) => {
  const entries = {};
  if (input.BearerToken !== undefined && input.BearerToken !== null) {
    entries["BearerToken"] = input.BearerToken;
  }
  if (input.OperationStatus !== undefined && input.OperationStatus !== null) {
    entries["OperationStatus"] = input.OperationStatus;
  }
  if (input.CurrentOperationStatus !== undefined && input.CurrentOperationStatus !== null) {
    entries["CurrentOperationStatus"] = input.CurrentOperationStatus;
  }
  if (input.StatusMessage !== undefined && input.StatusMessage !== null) {
    entries["StatusMessage"] = input.StatusMessage;
  }
  if (input.ErrorCode !== undefined && input.ErrorCode !== null) {
    entries["ErrorCode"] = input.ErrorCode;
  }
  if (input.ResourceModel !== undefined && input.ResourceModel !== null) {
    entries["ResourceModel"] = input.ResourceModel;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
const serializeAws_queryRegionList = (input, context) => {
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
const serializeAws_queryRegisterTypeInput = (input, context) => {
  const entries = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.SchemaHandlerPackage !== undefined && input.SchemaHandlerPackage !== null) {
    entries["SchemaHandlerPackage"] = input.SchemaHandlerPackage;
  }
  if (input.LoggingConfig !== undefined && input.LoggingConfig !== null) {
    const memberEntries = serializeAws_queryLoggingConfig(input.LoggingConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoggingConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExecutionRoleArn !== undefined && input.ExecutionRoleArn !== null) {
    entries["ExecutionRoleArn"] = input.ExecutionRoleArn;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
const serializeAws_queryResourceIdentifierProperties = (input, context) => {
  const entries = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key];
      counter++;
    });
  return entries;
};
const serializeAws_queryResourcesToImport = (input, context) => {
  const entries = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryResourceToImport(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};
const serializeAws_queryResourcesToSkip = (input, context) => {
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
const serializeAws_queryResourceToImport = (input, context) => {
  const entries = {};
  if (input.ResourceType !== undefined && input.ResourceType !== null) {
    entries["ResourceType"] = input.ResourceType;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.ResourceIdentifier !== undefined && input.ResourceIdentifier !== null) {
    const memberEntries = serializeAws_queryResourceIdentifierProperties(input.ResourceIdentifier, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceIdentifier.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryResourceTypes = (input, context) => {
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
const serializeAws_queryRetainResources = (input, context) => {
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
const serializeAws_queryRollbackConfiguration = (input, context) => {
  const entries = {};
  if (input.RollbackTriggers !== undefined && input.RollbackTriggers !== null) {
    const memberEntries = serializeAws_queryRollbackTriggers(input.RollbackTriggers, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackTriggers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MonitoringTimeInMinutes !== undefined && input.MonitoringTimeInMinutes !== null) {
    entries["MonitoringTimeInMinutes"] = input.MonitoringTimeInMinutes;
  }
  return entries;
};
const serializeAws_queryRollbackTrigger = (input, context) => {
  const entries = {};
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  return entries;
};
const serializeAws_queryRollbackTriggers = (input, context) => {
  const entries = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryRollbackTrigger(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};
const serializeAws_querySetStackPolicyInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackPolicyBody !== undefined && input.StackPolicyBody !== null) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL !== undefined && input.StackPolicyURL !== null) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  return entries;
};
const serializeAws_querySetTypeDefaultVersionInput = (input, context) => {
  const entries = {};
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId !== undefined && input.VersionId !== null) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};
const serializeAws_querySignalResourceInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.UniqueId !== undefined && input.UniqueId !== null) {
    entries["UniqueId"] = input.UniqueId;
  }
  if (input.Status !== undefined && input.Status !== null) {
    entries["Status"] = input.Status;
  }
  return entries;
};
const serializeAws_queryStackInstanceFilter = (input, context) => {
  const entries = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Values !== undefined && input.Values !== null) {
    entries["Values"] = input.Values;
  }
  return entries;
};
const serializeAws_queryStackInstanceFilters = (input, context) => {
  const entries = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryStackInstanceFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};
const serializeAws_queryStackResourceDriftStatusFilters = (input, context) => {
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
const serializeAws_queryStackSetOperationPreferences = (input, context) => {
  const entries = {};
  if (input.RegionConcurrencyType !== undefined && input.RegionConcurrencyType !== null) {
    entries["RegionConcurrencyType"] = input.RegionConcurrencyType;
  }
  if (input.RegionOrder !== undefined && input.RegionOrder !== null) {
    const memberEntries = serializeAws_queryRegionList(input.RegionOrder, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RegionOrder.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FailureToleranceCount !== undefined && input.FailureToleranceCount !== null) {
    entries["FailureToleranceCount"] = input.FailureToleranceCount;
  }
  if (input.FailureTolerancePercentage !== undefined && input.FailureTolerancePercentage !== null) {
    entries["FailureTolerancePercentage"] = input.FailureTolerancePercentage;
  }
  if (input.MaxConcurrentCount !== undefined && input.MaxConcurrentCount !== null) {
    entries["MaxConcurrentCount"] = input.MaxConcurrentCount;
  }
  if (input.MaxConcurrentPercentage !== undefined && input.MaxConcurrentPercentage !== null) {
    entries["MaxConcurrentPercentage"] = input.MaxConcurrentPercentage;
  }
  return entries;
};
const serializeAws_queryStackStatusFilter = (input, context) => {
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
const serializeAws_queryStopStackSetOperationInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
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
const serializeAws_queryTags = (input, context) => {
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
const serializeAws_queryUpdateStackInput = (input, context) => {
  const entries = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate !== undefined && input.UsePreviousTemplate !== null) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  if (input.StackPolicyDuringUpdateBody !== undefined && input.StackPolicyDuringUpdateBody !== null) {
    entries["StackPolicyDuringUpdateBody"] = input.StackPolicyDuringUpdateBody;
  }
  if (input.StackPolicyDuringUpdateURL !== undefined && input.StackPolicyDuringUpdateURL !== null) {
    entries["StackPolicyDuringUpdateURL"] = input.StackPolicyDuringUpdateURL;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    const memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceTypes !== undefined && input.ResourceTypes !== null) {
    const memberEntries = serializeAws_queryResourceTypes(input.ResourceTypes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.RollbackConfiguration !== undefined && input.RollbackConfiguration !== null) {
    const memberEntries = serializeAws_queryRollbackConfiguration(input.RollbackConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StackPolicyBody !== undefined && input.StackPolicyBody !== null) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL !== undefined && input.StackPolicyURL !== null) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  if (input.NotificationARNs !== undefined && input.NotificationARNs !== null) {
    const memberEntries = serializeAws_queryNotificationARNs(input.NotificationARNs, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};
const serializeAws_queryUpdateStackInstancesInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Accounts !== undefined && input.Accounts !== null) {
    const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeploymentTargets !== undefined && input.DeploymentTargets !== null) {
    const memberEntries = serializeAws_queryDeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    const memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ParameterOverrides !== undefined && input.ParameterOverrides !== null) {
    const memberEntries = serializeAws_queryParameters(input.ParameterOverrides, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ParameterOverrides.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = uuid_1.v4();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryUpdateStackSetInput = (input, context) => {
  const entries = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Description !== undefined && input.Description !== null) {
    entries["Description"] = input.Description;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate !== undefined && input.UsePreviousTemplate !== null) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    const memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AdministrationRoleARN !== undefined && input.AdministrationRoleARN !== null) {
    entries["AdministrationRoleARN"] = input.AdministrationRoleARN;
  }
  if (input.ExecutionRoleName !== undefined && input.ExecutionRoleName !== null) {
    entries["ExecutionRoleName"] = input.ExecutionRoleName;
  }
  if (input.DeploymentTargets !== undefined && input.DeploymentTargets !== null) {
    const memberEntries = serializeAws_queryDeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PermissionModel !== undefined && input.PermissionModel !== null) {
    entries["PermissionModel"] = input.PermissionModel;
  }
  if (input.AutoDeployment !== undefined && input.AutoDeployment !== null) {
    const memberEntries = serializeAws_queryAutoDeployment(input.AutoDeployment, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoDeployment.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = uuid_1.v4();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.Accounts !== undefined && input.Accounts !== null) {
    const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    const memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};
const serializeAws_queryUpdateTerminationProtectionInput = (input, context) => {
  const entries = {};
  if (input.EnableTerminationProtection !== undefined && input.EnableTerminationProtection !== null) {
    entries["EnableTerminationProtection"] = input.EnableTerminationProtection;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};
const serializeAws_queryValidateTemplateInput = (input, context) => {
  const entries = {};
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  return entries;
};
const deserializeAws_queryAccountGateResult = (output, context) => {
  let contents = {
    Status: undefined,
    StatusReason: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  return contents;
};
const deserializeAws_queryAccountLimit = (output, context) => {
  let contents = {
    Name: undefined,
    Value: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = parseInt(output["Value"]);
  }
  return contents;
};
const deserializeAws_queryAccountLimitList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryAccountLimit(entry, context);
    });
};
const deserializeAws_queryAccountList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryAllowedValues = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryAlreadyExistsException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryAutoDeployment = (output, context) => {
  let contents = {
    Enabled: undefined,
    RetainStacksOnAccountRemoval: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["RetainStacksOnAccountRemoval"] !== undefined) {
    contents.RetainStacksOnAccountRemoval = output["RetainStacksOnAccountRemoval"] == "true";
  }
  return contents;
};
const deserializeAws_queryCapabilities = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryCFNRegistryException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryChange = (output, context) => {
  let contents = {
    Type: undefined,
    ResourceChange: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["ResourceChange"] !== undefined) {
    contents.ResourceChange = deserializeAws_queryResourceChange(output["ResourceChange"], context);
  }
  return contents;
};
const deserializeAws_queryChanges = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryChange(entry, context);
    });
};
const deserializeAws_queryChangeSetNotFoundException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryChangeSetSummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryChangeSetSummary(entry, context);
    });
};
const deserializeAws_queryChangeSetSummary = (output, context) => {
  let contents = {
    StackId: undefined,
    StackName: undefined,
    ChangeSetId: undefined,
    ChangeSetName: undefined,
    ExecutionStatus: undefined,
    Status: undefined,
    StatusReason: undefined,
    CreationTime: undefined,
    Description: undefined,
    IncludeNestedStacks: undefined,
    ParentChangeSetId: undefined,
    RootChangeSetId: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = output["ChangeSetId"];
  }
  if (output["ChangeSetName"] !== undefined) {
    contents.ChangeSetName = output["ChangeSetName"];
  }
  if (output["ExecutionStatus"] !== undefined) {
    contents.ExecutionStatus = output["ExecutionStatus"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["IncludeNestedStacks"] !== undefined) {
    contents.IncludeNestedStacks = output["IncludeNestedStacks"] == "true";
  }
  if (output["ParentChangeSetId"] !== undefined) {
    contents.ParentChangeSetId = output["ParentChangeSetId"];
  }
  if (output["RootChangeSetId"] !== undefined) {
    contents.RootChangeSetId = output["RootChangeSetId"];
  }
  return contents;
};
const deserializeAws_queryContinueUpdateRollbackOutput = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryCreateChangeSetOutput = (output, context) => {
  let contents = {
    Id: undefined,
    StackId: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  return contents;
};
const deserializeAws_queryCreatedButModifiedException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryCreateStackInstancesOutput = (output, context) => {
  let contents = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  return contents;
};
const deserializeAws_queryCreateStackOutput = (output, context) => {
  let contents = {
    StackId: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  return contents;
};
const deserializeAws_queryCreateStackSetOutput = (output, context) => {
  let contents = {
    StackSetId: undefined,
  };
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = output["StackSetId"];
  }
  return contents;
};
const deserializeAws_queryDeleteChangeSetOutput = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryDeleteStackInstancesOutput = (output, context) => {
  let contents = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  return contents;
};
const deserializeAws_queryDeleteStackSetOutput = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryDeploymentTargets = (output, context) => {
  let contents = {
    Accounts: undefined,
    AccountsUrl: undefined,
    OrganizationalUnitIds: undefined,
  };
  if (output.Accounts === "") {
    contents.Accounts = [];
  }
  if (output["Accounts"] !== undefined && output["Accounts"]["member"] !== undefined) {
    contents.Accounts = deserializeAws_queryAccountList(
      smithy_client_1.getArrayIfSingleItem(output["Accounts"]["member"]),
      context
    );
  }
  if (output["AccountsUrl"] !== undefined) {
    contents.AccountsUrl = output["AccountsUrl"];
  }
  if (output.OrganizationalUnitIds === "") {
    contents.OrganizationalUnitIds = [];
  }
  if (output["OrganizationalUnitIds"] !== undefined && output["OrganizationalUnitIds"]["member"] !== undefined) {
    contents.OrganizationalUnitIds = deserializeAws_queryOrganizationalUnitIdList(
      smithy_client_1.getArrayIfSingleItem(output["OrganizationalUnitIds"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryDeregisterTypeOutput = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryDescribeAccountLimitsOutput = (output, context) => {
  let contents = {
    AccountLimits: undefined,
    NextToken: undefined,
  };
  if (output.AccountLimits === "") {
    contents.AccountLimits = [];
  }
  if (output["AccountLimits"] !== undefined && output["AccountLimits"]["member"] !== undefined) {
    contents.AccountLimits = deserializeAws_queryAccountLimitList(
      smithy_client_1.getArrayIfSingleItem(output["AccountLimits"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryDescribeChangeSetOutput = (output, context) => {
  let contents = {
    ChangeSetName: undefined,
    ChangeSetId: undefined,
    StackId: undefined,
    StackName: undefined,
    Description: undefined,
    Parameters: undefined,
    CreationTime: undefined,
    ExecutionStatus: undefined,
    Status: undefined,
    StatusReason: undefined,
    NotificationARNs: undefined,
    RollbackConfiguration: undefined,
    Capabilities: undefined,
    Tags: undefined,
    Changes: undefined,
    NextToken: undefined,
    IncludeNestedStacks: undefined,
    ParentChangeSetId: undefined,
    RootChangeSetId: undefined,
  };
  if (output["ChangeSetName"] !== undefined) {
    contents.ChangeSetName = output["ChangeSetName"];
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = output["ChangeSetId"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryParameters(
      smithy_client_1.getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["ExecutionStatus"] !== undefined) {
    contents.ExecutionStatus = output["ExecutionStatus"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  if (output.NotificationARNs === "") {
    contents.NotificationARNs = [];
  }
  if (output["NotificationARNs"] !== undefined && output["NotificationARNs"]["member"] !== undefined) {
    contents.NotificationARNs = deserializeAws_queryNotificationARNs(
      smithy_client_1.getArrayIfSingleItem(output["NotificationARNs"]["member"]),
      context
    );
  }
  if (output["RollbackConfiguration"] !== undefined) {
    contents.RollbackConfiguration = deserializeAws_queryRollbackConfiguration(
      output["RollbackConfiguration"],
      context
    );
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      smithy_client_1.getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTags(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output.Changes === "") {
    contents.Changes = [];
  }
  if (output["Changes"] !== undefined && output["Changes"]["member"] !== undefined) {
    contents.Changes = deserializeAws_queryChanges(
      smithy_client_1.getArrayIfSingleItem(output["Changes"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  if (output["IncludeNestedStacks"] !== undefined) {
    contents.IncludeNestedStacks = output["IncludeNestedStacks"] == "true";
  }
  if (output["ParentChangeSetId"] !== undefined) {
    contents.ParentChangeSetId = output["ParentChangeSetId"];
  }
  if (output["RootChangeSetId"] !== undefined) {
    contents.RootChangeSetId = output["RootChangeSetId"];
  }
  return contents;
};
const deserializeAws_queryDescribeStackDriftDetectionStatusOutput = (output, context) => {
  let contents = {
    StackId: undefined,
    StackDriftDetectionId: undefined,
    StackDriftStatus: undefined,
    DetectionStatus: undefined,
    DetectionStatusReason: undefined,
    DriftedStackResourceCount: undefined,
    Timestamp: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["StackDriftDetectionId"] !== undefined) {
    contents.StackDriftDetectionId = output["StackDriftDetectionId"];
  }
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus = output["StackDriftStatus"];
  }
  if (output["DetectionStatus"] !== undefined) {
    contents.DetectionStatus = output["DetectionStatus"];
  }
  if (output["DetectionStatusReason"] !== undefined) {
    contents.DetectionStatusReason = output["DetectionStatusReason"];
  }
  if (output["DriftedStackResourceCount"] !== undefined) {
    contents.DriftedStackResourceCount = parseInt(output["DriftedStackResourceCount"]);
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  return contents;
};
const deserializeAws_queryDescribeStackEventsOutput = (output, context) => {
  let contents = {
    StackEvents: undefined,
    NextToken: undefined,
  };
  if (output.StackEvents === "") {
    contents.StackEvents = [];
  }
  if (output["StackEvents"] !== undefined && output["StackEvents"]["member"] !== undefined) {
    contents.StackEvents = deserializeAws_queryStackEvents(
      smithy_client_1.getArrayIfSingleItem(output["StackEvents"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryDescribeStackInstanceOutput = (output, context) => {
  let contents = {
    StackInstance: undefined,
  };
  if (output["StackInstance"] !== undefined) {
    contents.StackInstance = deserializeAws_queryStackInstance(output["StackInstance"], context);
  }
  return contents;
};
const deserializeAws_queryDescribeStackResourceDriftsOutput = (output, context) => {
  let contents = {
    StackResourceDrifts: undefined,
    NextToken: undefined,
  };
  if (output.StackResourceDrifts === "") {
    contents.StackResourceDrifts = [];
  }
  if (output["StackResourceDrifts"] !== undefined && output["StackResourceDrifts"]["member"] !== undefined) {
    contents.StackResourceDrifts = deserializeAws_queryStackResourceDrifts(
      smithy_client_1.getArrayIfSingleItem(output["StackResourceDrifts"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryDescribeStackResourceOutput = (output, context) => {
  let contents = {
    StackResourceDetail: undefined,
  };
  if (output["StackResourceDetail"] !== undefined) {
    contents.StackResourceDetail = deserializeAws_queryStackResourceDetail(output["StackResourceDetail"], context);
  }
  return contents;
};
const deserializeAws_queryDescribeStackResourcesOutput = (output, context) => {
  let contents = {
    StackResources: undefined,
  };
  if (output.StackResources === "") {
    contents.StackResources = [];
  }
  if (output["StackResources"] !== undefined && output["StackResources"]["member"] !== undefined) {
    contents.StackResources = deserializeAws_queryStackResources(
      smithy_client_1.getArrayIfSingleItem(output["StackResources"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryDescribeStackSetOperationOutput = (output, context) => {
  let contents = {
    StackSetOperation: undefined,
  };
  if (output["StackSetOperation"] !== undefined) {
    contents.StackSetOperation = deserializeAws_queryStackSetOperation(output["StackSetOperation"], context);
  }
  return contents;
};
const deserializeAws_queryDescribeStackSetOutput = (output, context) => {
  let contents = {
    StackSet: undefined,
  };
  if (output["StackSet"] !== undefined) {
    contents.StackSet = deserializeAws_queryStackSet(output["StackSet"], context);
  }
  return contents;
};
const deserializeAws_queryDescribeStacksOutput = (output, context) => {
  let contents = {
    Stacks: undefined,
    NextToken: undefined,
  };
  if (output.Stacks === "") {
    contents.Stacks = [];
  }
  if (output["Stacks"] !== undefined && output["Stacks"]["member"] !== undefined) {
    contents.Stacks = deserializeAws_queryStacks(
      smithy_client_1.getArrayIfSingleItem(output["Stacks"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryDescribeTypeOutput = (output, context) => {
  let contents = {
    Arn: undefined,
    Type: undefined,
    TypeName: undefined,
    DefaultVersionId: undefined,
    IsDefaultVersion: undefined,
    Description: undefined,
    Schema: undefined,
    ProvisioningType: undefined,
    DeprecatedStatus: undefined,
    LoggingConfig: undefined,
    ExecutionRoleArn: undefined,
    Visibility: undefined,
    SourceUrl: undefined,
    DocumentationUrl: undefined,
    LastUpdated: undefined,
    TimeCreated: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName = output["TypeName"];
  }
  if (output["DefaultVersionId"] !== undefined) {
    contents.DefaultVersionId = output["DefaultVersionId"];
  }
  if (output["IsDefaultVersion"] !== undefined) {
    contents.IsDefaultVersion = output["IsDefaultVersion"] == "true";
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Schema"] !== undefined) {
    contents.Schema = output["Schema"];
  }
  if (output["ProvisioningType"] !== undefined) {
    contents.ProvisioningType = output["ProvisioningType"];
  }
  if (output["DeprecatedStatus"] !== undefined) {
    contents.DeprecatedStatus = output["DeprecatedStatus"];
  }
  if (output["LoggingConfig"] !== undefined) {
    contents.LoggingConfig = deserializeAws_queryLoggingConfig(output["LoggingConfig"], context);
  }
  if (output["ExecutionRoleArn"] !== undefined) {
    contents.ExecutionRoleArn = output["ExecutionRoleArn"];
  }
  if (output["Visibility"] !== undefined) {
    contents.Visibility = output["Visibility"];
  }
  if (output["SourceUrl"] !== undefined) {
    contents.SourceUrl = output["SourceUrl"];
  }
  if (output["DocumentationUrl"] !== undefined) {
    contents.DocumentationUrl = output["DocumentationUrl"];
  }
  if (output["LastUpdated"] !== undefined) {
    contents.LastUpdated = new Date(output["LastUpdated"]);
  }
  if (output["TimeCreated"] !== undefined) {
    contents.TimeCreated = new Date(output["TimeCreated"]);
  }
  return contents;
};
const deserializeAws_queryDescribeTypeRegistrationOutput = (output, context) => {
  let contents = {
    ProgressStatus: undefined,
    Description: undefined,
    TypeArn: undefined,
    TypeVersionArn: undefined,
  };
  if (output["ProgressStatus"] !== undefined) {
    contents.ProgressStatus = output["ProgressStatus"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["TypeArn"] !== undefined) {
    contents.TypeArn = output["TypeArn"];
  }
  if (output["TypeVersionArn"] !== undefined) {
    contents.TypeVersionArn = output["TypeVersionArn"];
  }
  return contents;
};
const deserializeAws_queryDetectStackDriftOutput = (output, context) => {
  let contents = {
    StackDriftDetectionId: undefined,
  };
  if (output["StackDriftDetectionId"] !== undefined) {
    contents.StackDriftDetectionId = output["StackDriftDetectionId"];
  }
  return contents;
};
const deserializeAws_queryDetectStackResourceDriftOutput = (output, context) => {
  let contents = {
    StackResourceDrift: undefined,
  };
  if (output["StackResourceDrift"] !== undefined) {
    contents.StackResourceDrift = deserializeAws_queryStackResourceDrift(output["StackResourceDrift"], context);
  }
  return contents;
};
const deserializeAws_queryDetectStackSetDriftOutput = (output, context) => {
  let contents = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  return contents;
};
const deserializeAws_queryEstimateTemplateCostOutput = (output, context) => {
  let contents = {
    Url: undefined,
  };
  if (output["Url"] !== undefined) {
    contents.Url = output["Url"];
  }
  return contents;
};
const deserializeAws_queryExecuteChangeSetOutput = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryExport = (output, context) => {
  let contents = {
    ExportingStackId: undefined,
    Name: undefined,
    Value: undefined,
  };
  if (output["ExportingStackId"] !== undefined) {
    contents.ExportingStackId = output["ExportingStackId"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};
const deserializeAws_queryExports = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryExport(entry, context);
    });
};
const deserializeAws_queryGetStackPolicyOutput = (output, context) => {
  let contents = {
    StackPolicyBody: undefined,
  };
  if (output["StackPolicyBody"] !== undefined) {
    contents.StackPolicyBody = output["StackPolicyBody"];
  }
  return contents;
};
const deserializeAws_queryGetTemplateOutput = (output, context) => {
  let contents = {
    TemplateBody: undefined,
    StagesAvailable: undefined,
  };
  if (output["TemplateBody"] !== undefined) {
    contents.TemplateBody = output["TemplateBody"];
  }
  if (output.StagesAvailable === "") {
    contents.StagesAvailable = [];
  }
  if (output["StagesAvailable"] !== undefined && output["StagesAvailable"]["member"] !== undefined) {
    contents.StagesAvailable = deserializeAws_queryStageList(
      smithy_client_1.getArrayIfSingleItem(output["StagesAvailable"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryGetTemplateSummaryOutput = (output, context) => {
  let contents = {
    Parameters: undefined,
    Description: undefined,
    Capabilities: undefined,
    CapabilitiesReason: undefined,
    ResourceTypes: undefined,
    Version: undefined,
    Metadata: undefined,
    DeclaredTransforms: undefined,
    ResourceIdentifierSummaries: undefined,
  };
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryParameterDeclarations(
      smithy_client_1.getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      smithy_client_1.getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output["CapabilitiesReason"] !== undefined) {
    contents.CapabilitiesReason = output["CapabilitiesReason"];
  }
  if (output.ResourceTypes === "") {
    contents.ResourceTypes = [];
  }
  if (output["ResourceTypes"] !== undefined && output["ResourceTypes"]["member"] !== undefined) {
    contents.ResourceTypes = deserializeAws_queryResourceTypes(
      smithy_client_1.getArrayIfSingleItem(output["ResourceTypes"]["member"]),
      context
    );
  }
  if (output["Version"] !== undefined) {
    contents.Version = output["Version"];
  }
  if (output["Metadata"] !== undefined) {
    contents.Metadata = output["Metadata"];
  }
  if (output.DeclaredTransforms === "") {
    contents.DeclaredTransforms = [];
  }
  if (output["DeclaredTransforms"] !== undefined && output["DeclaredTransforms"]["member"] !== undefined) {
    contents.DeclaredTransforms = deserializeAws_queryTransformsList(
      smithy_client_1.getArrayIfSingleItem(output["DeclaredTransforms"]["member"]),
      context
    );
  }
  if (output.ResourceIdentifierSummaries === "") {
    contents.ResourceIdentifierSummaries = [];
  }
  if (
    output["ResourceIdentifierSummaries"] !== undefined &&
    output["ResourceIdentifierSummaries"]["member"] !== undefined
  ) {
    contents.ResourceIdentifierSummaries = deserializeAws_queryResourceIdentifierSummaries(
      smithy_client_1.getArrayIfSingleItem(output["ResourceIdentifierSummaries"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryImports = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryInsufficientCapabilitiesException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryInvalidChangeSetStatusException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryInvalidOperationException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryInvalidStateTransitionException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
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
const deserializeAws_queryListChangeSetsOutput = (output, context) => {
  let contents = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryChangeSetSummaries(
      smithy_client_1.getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryListExportsOutput = (output, context) => {
  let contents = {
    Exports: undefined,
    NextToken: undefined,
  };
  if (output.Exports === "") {
    contents.Exports = [];
  }
  if (output["Exports"] !== undefined && output["Exports"]["member"] !== undefined) {
    contents.Exports = deserializeAws_queryExports(
      smithy_client_1.getArrayIfSingleItem(output["Exports"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryListImportsOutput = (output, context) => {
  let contents = {
    Imports: undefined,
    NextToken: undefined,
  };
  if (output.Imports === "") {
    contents.Imports = [];
  }
  if (output["Imports"] !== undefined && output["Imports"]["member"] !== undefined) {
    contents.Imports = deserializeAws_queryImports(
      smithy_client_1.getArrayIfSingleItem(output["Imports"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryListStackInstancesOutput = (output, context) => {
  let contents = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryStackInstanceSummaries(
      smithy_client_1.getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryListStackResourcesOutput = (output, context) => {
  let contents = {
    StackResourceSummaries: undefined,
    NextToken: undefined,
  };
  if (output.StackResourceSummaries === "") {
    contents.StackResourceSummaries = [];
  }
  if (output["StackResourceSummaries"] !== undefined && output["StackResourceSummaries"]["member"] !== undefined) {
    contents.StackResourceSummaries = deserializeAws_queryStackResourceSummaries(
      smithy_client_1.getArrayIfSingleItem(output["StackResourceSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryListStackSetOperationResultsOutput = (output, context) => {
  let contents = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryStackSetOperationResultSummaries(
      smithy_client_1.getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryListStackSetOperationsOutput = (output, context) => {
  let contents = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryStackSetOperationSummaries(
      smithy_client_1.getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryListStackSetsOutput = (output, context) => {
  let contents = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryStackSetSummaries(
      smithy_client_1.getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryListStacksOutput = (output, context) => {
  let contents = {
    StackSummaries: undefined,
    NextToken: undefined,
  };
  if (output.StackSummaries === "") {
    contents.StackSummaries = [];
  }
  if (output["StackSummaries"] !== undefined && output["StackSummaries"]["member"] !== undefined) {
    contents.StackSummaries = deserializeAws_queryStackSummaries(
      smithy_client_1.getArrayIfSingleItem(output["StackSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryListTypeRegistrationsOutput = (output, context) => {
  let contents = {
    RegistrationTokenList: undefined,
    NextToken: undefined,
  };
  if (output.RegistrationTokenList === "") {
    contents.RegistrationTokenList = [];
  }
  if (output["RegistrationTokenList"] !== undefined && output["RegistrationTokenList"]["member"] !== undefined) {
    contents.RegistrationTokenList = deserializeAws_queryRegistrationTokenList(
      smithy_client_1.getArrayIfSingleItem(output["RegistrationTokenList"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryListTypesOutput = (output, context) => {
  let contents = {
    TypeSummaries: undefined,
    NextToken: undefined,
  };
  if (output.TypeSummaries === "") {
    contents.TypeSummaries = [];
  }
  if (output["TypeSummaries"] !== undefined && output["TypeSummaries"]["member"] !== undefined) {
    contents.TypeSummaries = deserializeAws_queryTypeSummaries(
      smithy_client_1.getArrayIfSingleItem(output["TypeSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryListTypeVersionsOutput = (output, context) => {
  let contents = {
    TypeVersionSummaries: undefined,
    NextToken: undefined,
  };
  if (output.TypeVersionSummaries === "") {
    contents.TypeVersionSummaries = [];
  }
  if (output["TypeVersionSummaries"] !== undefined && output["TypeVersionSummaries"]["member"] !== undefined) {
    contents.TypeVersionSummaries = deserializeAws_queryTypeVersionSummaries(
      smithy_client_1.getArrayIfSingleItem(output["TypeVersionSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryLoggingConfig = (output, context) => {
  let contents = {
    LogRoleArn: undefined,
    LogGroupName: undefined,
  };
  if (output["LogRoleArn"] !== undefined) {
    contents.LogRoleArn = output["LogRoleArn"];
  }
  if (output["LogGroupName"] !== undefined) {
    contents.LogGroupName = output["LogGroupName"];
  }
  return contents;
};
const deserializeAws_queryLogicalResourceIds = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryModuleInfo = (output, context) => {
  let contents = {
    TypeHierarchy: undefined,
    LogicalIdHierarchy: undefined,
  };
  if (output["TypeHierarchy"] !== undefined) {
    contents.TypeHierarchy = output["TypeHierarchy"];
  }
  if (output["LogicalIdHierarchy"] !== undefined) {
    contents.LogicalIdHierarchy = output["LogicalIdHierarchy"];
  }
  return contents;
};
const deserializeAws_queryNameAlreadyExistsException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryNotificationARNs = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryOperationIdAlreadyExistsException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryOperationInProgressException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryOperationNotFoundException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryOperationStatusCheckFailedException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryOrganizationalUnitIdList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryOutput = (output, context) => {
  let contents = {
    OutputKey: undefined,
    OutputValue: undefined,
    Description: undefined,
    ExportName: undefined,
  };
  if (output["OutputKey"] !== undefined) {
    contents.OutputKey = output["OutputKey"];
  }
  if (output["OutputValue"] !== undefined) {
    contents.OutputValue = output["OutputValue"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["ExportName"] !== undefined) {
    contents.ExportName = output["ExportName"];
  }
  return contents;
};
const deserializeAws_queryOutputs = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryOutput(entry, context);
    });
};
const deserializeAws_queryParameter = (output, context) => {
  let contents = {
    ParameterKey: undefined,
    ParameterValue: undefined,
    UsePreviousValue: undefined,
    ResolvedValue: undefined,
  };
  if (output["ParameterKey"] !== undefined) {
    contents.ParameterKey = output["ParameterKey"];
  }
  if (output["ParameterValue"] !== undefined) {
    contents.ParameterValue = output["ParameterValue"];
  }
  if (output["UsePreviousValue"] !== undefined) {
    contents.UsePreviousValue = output["UsePreviousValue"] == "true";
  }
  if (output["ResolvedValue"] !== undefined) {
    contents.ResolvedValue = output["ResolvedValue"];
  }
  return contents;
};
const deserializeAws_queryParameterConstraints = (output, context) => {
  let contents = {
    AllowedValues: undefined,
  };
  if (output.AllowedValues === "") {
    contents.AllowedValues = [];
  }
  if (output["AllowedValues"] !== undefined && output["AllowedValues"]["member"] !== undefined) {
    contents.AllowedValues = deserializeAws_queryAllowedValues(
      smithy_client_1.getArrayIfSingleItem(output["AllowedValues"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryParameterDeclaration = (output, context) => {
  let contents = {
    ParameterKey: undefined,
    DefaultValue: undefined,
    ParameterType: undefined,
    NoEcho: undefined,
    Description: undefined,
    ParameterConstraints: undefined,
  };
  if (output["ParameterKey"] !== undefined) {
    contents.ParameterKey = output["ParameterKey"];
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = output["DefaultValue"];
  }
  if (output["ParameterType"] !== undefined) {
    contents.ParameterType = output["ParameterType"];
  }
  if (output["NoEcho"] !== undefined) {
    contents.NoEcho = output["NoEcho"] == "true";
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["ParameterConstraints"] !== undefined) {
    contents.ParameterConstraints = deserializeAws_queryParameterConstraints(output["ParameterConstraints"], context);
  }
  return contents;
};
const deserializeAws_queryParameterDeclarations = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryParameterDeclaration(entry, context);
    });
};
const deserializeAws_queryParameters = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryParameter(entry, context);
    });
};
const deserializeAws_queryPhysicalResourceIdContext = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryPhysicalResourceIdContextKeyValuePair(entry, context);
    });
};
const deserializeAws_queryPhysicalResourceIdContextKeyValuePair = (output, context) => {
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
const deserializeAws_queryPropertyDifference = (output, context) => {
  let contents = {
    PropertyPath: undefined,
    ExpectedValue: undefined,
    ActualValue: undefined,
    DifferenceType: undefined,
  };
  if (output["PropertyPath"] !== undefined) {
    contents.PropertyPath = output["PropertyPath"];
  }
  if (output["ExpectedValue"] !== undefined) {
    contents.ExpectedValue = output["ExpectedValue"];
  }
  if (output["ActualValue"] !== undefined) {
    contents.ActualValue = output["ActualValue"];
  }
  if (output["DifferenceType"] !== undefined) {
    contents.DifferenceType = output["DifferenceType"];
  }
  return contents;
};
const deserializeAws_queryPropertyDifferences = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryPropertyDifference(entry, context);
    });
};
const deserializeAws_queryRecordHandlerProgressOutput = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryRegionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryRegisterTypeOutput = (output, context) => {
  let contents = {
    RegistrationToken: undefined,
  };
  if (output["RegistrationToken"] !== undefined) {
    contents.RegistrationToken = output["RegistrationToken"];
  }
  return contents;
};
const deserializeAws_queryRegistrationTokenList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryResourceChange = (output, context) => {
  let contents = {
    Action: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    Replacement: undefined,
    Scope: undefined,
    Details: undefined,
    ChangeSetId: undefined,
    ModuleInfo: undefined,
  };
  if (output["Action"] !== undefined) {
    contents.Action = output["Action"];
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = output["PhysicalResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["Replacement"] !== undefined) {
    contents.Replacement = output["Replacement"];
  }
  if (output.Scope === "") {
    contents.Scope = [];
  }
  if (output["Scope"] !== undefined && output["Scope"]["member"] !== undefined) {
    contents.Scope = deserializeAws_queryScope(
      smithy_client_1.getArrayIfSingleItem(output["Scope"]["member"]),
      context
    );
  }
  if (output.Details === "") {
    contents.Details = [];
  }
  if (output["Details"] !== undefined && output["Details"]["member"] !== undefined) {
    contents.Details = deserializeAws_queryResourceChangeDetails(
      smithy_client_1.getArrayIfSingleItem(output["Details"]["member"]),
      context
    );
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = output["ChangeSetId"];
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};
const deserializeAws_queryResourceChangeDetail = (output, context) => {
  let contents = {
    Target: undefined,
    Evaluation: undefined,
    ChangeSource: undefined,
    CausingEntity: undefined,
  };
  if (output["Target"] !== undefined) {
    contents.Target = deserializeAws_queryResourceTargetDefinition(output["Target"], context);
  }
  if (output["Evaluation"] !== undefined) {
    contents.Evaluation = output["Evaluation"];
  }
  if (output["ChangeSource"] !== undefined) {
    contents.ChangeSource = output["ChangeSource"];
  }
  if (output["CausingEntity"] !== undefined) {
    contents.CausingEntity = output["CausingEntity"];
  }
  return contents;
};
const deserializeAws_queryResourceChangeDetails = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryResourceChangeDetail(entry, context);
    });
};
const deserializeAws_queryResourceIdentifiers = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryResourceIdentifierSummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryResourceIdentifierSummary(entry, context);
    });
};
const deserializeAws_queryResourceIdentifierSummary = (output, context) => {
  let contents = {
    ResourceType: undefined,
    LogicalResourceIds: undefined,
    ResourceIdentifiers: undefined,
  };
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output.LogicalResourceIds === "") {
    contents.LogicalResourceIds = [];
  }
  if (output["LogicalResourceIds"] !== undefined && output["LogicalResourceIds"]["member"] !== undefined) {
    contents.LogicalResourceIds = deserializeAws_queryLogicalResourceIds(
      smithy_client_1.getArrayIfSingleItem(output["LogicalResourceIds"]["member"]),
      context
    );
  }
  if (output.ResourceIdentifiers === "") {
    contents.ResourceIdentifiers = [];
  }
  if (output["ResourceIdentifiers"] !== undefined && output["ResourceIdentifiers"]["member"] !== undefined) {
    contents.ResourceIdentifiers = deserializeAws_queryResourceIdentifiers(
      smithy_client_1.getArrayIfSingleItem(output["ResourceIdentifiers"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryResourceTargetDefinition = (output, context) => {
  let contents = {
    Attribute: undefined,
    Name: undefined,
    RequiresRecreation: undefined,
  };
  if (output["Attribute"] !== undefined) {
    contents.Attribute = output["Attribute"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["RequiresRecreation"] !== undefined) {
    contents.RequiresRecreation = output["RequiresRecreation"];
  }
  return contents;
};
const deserializeAws_queryResourceTypes = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryRollbackConfiguration = (output, context) => {
  let contents = {
    RollbackTriggers: undefined,
    MonitoringTimeInMinutes: undefined,
  };
  if (output.RollbackTriggers === "") {
    contents.RollbackTriggers = [];
  }
  if (output["RollbackTriggers"] !== undefined && output["RollbackTriggers"]["member"] !== undefined) {
    contents.RollbackTriggers = deserializeAws_queryRollbackTriggers(
      smithy_client_1.getArrayIfSingleItem(output["RollbackTriggers"]["member"]),
      context
    );
  }
  if (output["MonitoringTimeInMinutes"] !== undefined) {
    contents.MonitoringTimeInMinutes = parseInt(output["MonitoringTimeInMinutes"]);
  }
  return contents;
};
const deserializeAws_queryRollbackTrigger = (output, context) => {
  let contents = {
    Arn: undefined,
    Type: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  return contents;
};
const deserializeAws_queryRollbackTriggers = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryRollbackTrigger(entry, context);
    });
};
const deserializeAws_queryScope = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_querySetTypeDefaultVersionOutput = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryStack = (output, context) => {
  let contents = {
    StackId: undefined,
    StackName: undefined,
    ChangeSetId: undefined,
    Description: undefined,
    Parameters: undefined,
    CreationTime: undefined,
    DeletionTime: undefined,
    LastUpdatedTime: undefined,
    RollbackConfiguration: undefined,
    StackStatus: undefined,
    StackStatusReason: undefined,
    DisableRollback: undefined,
    NotificationARNs: undefined,
    TimeoutInMinutes: undefined,
    Capabilities: undefined,
    Outputs: undefined,
    RoleARN: undefined,
    Tags: undefined,
    EnableTerminationProtection: undefined,
    ParentId: undefined,
    RootId: undefined,
    DriftInformation: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = output["ChangeSetId"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryParameters(
      smithy_client_1.getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["DeletionTime"] !== undefined) {
    contents.DeletionTime = new Date(output["DeletionTime"]);
  }
  if (output["LastUpdatedTime"] !== undefined) {
    contents.LastUpdatedTime = new Date(output["LastUpdatedTime"]);
  }
  if (output["RollbackConfiguration"] !== undefined) {
    contents.RollbackConfiguration = deserializeAws_queryRollbackConfiguration(
      output["RollbackConfiguration"],
      context
    );
  }
  if (output["StackStatus"] !== undefined) {
    contents.StackStatus = output["StackStatus"];
  }
  if (output["StackStatusReason"] !== undefined) {
    contents.StackStatusReason = output["StackStatusReason"];
  }
  if (output["DisableRollback"] !== undefined) {
    contents.DisableRollback = output["DisableRollback"] == "true";
  }
  if (output.NotificationARNs === "") {
    contents.NotificationARNs = [];
  }
  if (output["NotificationARNs"] !== undefined && output["NotificationARNs"]["member"] !== undefined) {
    contents.NotificationARNs = deserializeAws_queryNotificationARNs(
      smithy_client_1.getArrayIfSingleItem(output["NotificationARNs"]["member"]),
      context
    );
  }
  if (output["TimeoutInMinutes"] !== undefined) {
    contents.TimeoutInMinutes = parseInt(output["TimeoutInMinutes"]);
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      smithy_client_1.getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output.Outputs === "") {
    contents.Outputs = [];
  }
  if (output["Outputs"] !== undefined && output["Outputs"]["member"] !== undefined) {
    contents.Outputs = deserializeAws_queryOutputs(
      smithy_client_1.getArrayIfSingleItem(output["Outputs"]["member"]),
      context
    );
  }
  if (output["RoleARN"] !== undefined) {
    contents.RoleARN = output["RoleARN"];
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTags(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["EnableTerminationProtection"] !== undefined) {
    contents.EnableTerminationProtection = output["EnableTerminationProtection"] == "true";
  }
  if (output["ParentId"] !== undefined) {
    contents.ParentId = output["ParentId"];
  }
  if (output["RootId"] !== undefined) {
    contents.RootId = output["RootId"];
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackDriftInformation(output["DriftInformation"], context);
  }
  return contents;
};
const deserializeAws_queryStackDriftInformation = (output, context) => {
  let contents = {
    StackDriftStatus: undefined,
    LastCheckTimestamp: undefined,
  };
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus = output["StackDriftStatus"];
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  return contents;
};
const deserializeAws_queryStackDriftInformationSummary = (output, context) => {
  let contents = {
    StackDriftStatus: undefined,
    LastCheckTimestamp: undefined,
  };
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus = output["StackDriftStatus"];
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  return contents;
};
const deserializeAws_queryStackEvent = (output, context) => {
  let contents = {
    StackId: undefined,
    EventId: undefined,
    StackName: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    Timestamp: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    ResourceProperties: undefined,
    ClientRequestToken: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["EventId"] !== undefined) {
    contents.EventId = output["EventId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = output["PhysicalResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = output["ResourceStatus"];
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = output["ResourceStatusReason"];
  }
  if (output["ResourceProperties"] !== undefined) {
    contents.ResourceProperties = output["ResourceProperties"];
  }
  if (output["ClientRequestToken"] !== undefined) {
    contents.ClientRequestToken = output["ClientRequestToken"];
  }
  return contents;
};
const deserializeAws_queryStackEvents = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackEvent(entry, context);
    });
};
const deserializeAws_queryStackInstance = (output, context) => {
  let contents = {
    StackSetId: undefined,
    Region: undefined,
    Account: undefined,
    StackId: undefined,
    ParameterOverrides: undefined,
    Status: undefined,
    StackInstanceStatus: undefined,
    StatusReason: undefined,
    OrganizationalUnitId: undefined,
    DriftStatus: undefined,
    LastDriftCheckTimestamp: undefined,
  };
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = output["StackSetId"];
  }
  if (output["Region"] !== undefined) {
    contents.Region = output["Region"];
  }
  if (output["Account"] !== undefined) {
    contents.Account = output["Account"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output.ParameterOverrides === "") {
    contents.ParameterOverrides = [];
  }
  if (output["ParameterOverrides"] !== undefined && output["ParameterOverrides"]["member"] !== undefined) {
    contents.ParameterOverrides = deserializeAws_queryParameters(
      smithy_client_1.getArrayIfSingleItem(output["ParameterOverrides"]["member"]),
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StackInstanceStatus"] !== undefined) {
    contents.StackInstanceStatus = deserializeAws_queryStackInstanceComprehensiveStatus(
      output["StackInstanceStatus"],
      context
    );
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  if (output["OrganizationalUnitId"] !== undefined) {
    contents.OrganizationalUnitId = output["OrganizationalUnitId"];
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = output["DriftStatus"];
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
  }
  return contents;
};
const deserializeAws_queryStackInstanceComprehensiveStatus = (output, context) => {
  let contents = {
    DetailedStatus: undefined,
  };
  if (output["DetailedStatus"] !== undefined) {
    contents.DetailedStatus = output["DetailedStatus"];
  }
  return contents;
};
const deserializeAws_queryStackInstanceNotFoundException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryStackInstanceSummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackInstanceSummary(entry, context);
    });
};
const deserializeAws_queryStackInstanceSummary = (output, context) => {
  let contents = {
    StackSetId: undefined,
    Region: undefined,
    Account: undefined,
    StackId: undefined,
    Status: undefined,
    StatusReason: undefined,
    StackInstanceStatus: undefined,
    OrganizationalUnitId: undefined,
    DriftStatus: undefined,
    LastDriftCheckTimestamp: undefined,
  };
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = output["StackSetId"];
  }
  if (output["Region"] !== undefined) {
    contents.Region = output["Region"];
  }
  if (output["Account"] !== undefined) {
    contents.Account = output["Account"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  if (output["StackInstanceStatus"] !== undefined) {
    contents.StackInstanceStatus = deserializeAws_queryStackInstanceComprehensiveStatus(
      output["StackInstanceStatus"],
      context
    );
  }
  if (output["OrganizationalUnitId"] !== undefined) {
    contents.OrganizationalUnitId = output["OrganizationalUnitId"];
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = output["DriftStatus"];
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
  }
  return contents;
};
const deserializeAws_queryStackResource = (output, context) => {
  let contents = {
    StackName: undefined,
    StackId: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    Timestamp: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    Description: undefined,
    DriftInformation: undefined,
    ModuleInfo: undefined,
  };
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = output["PhysicalResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = output["ResourceStatus"];
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = output["ResourceStatusReason"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackResourceDriftInformation(output["DriftInformation"], context);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};
const deserializeAws_queryStackResourceDetail = (output, context) => {
  let contents = {
    StackName: undefined,
    StackId: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    LastUpdatedTimestamp: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    Description: undefined,
    Metadata: undefined,
    DriftInformation: undefined,
    ModuleInfo: undefined,
  };
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = output["PhysicalResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["LastUpdatedTimestamp"] !== undefined) {
    contents.LastUpdatedTimestamp = new Date(output["LastUpdatedTimestamp"]);
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = output["ResourceStatus"];
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = output["ResourceStatusReason"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Metadata"] !== undefined) {
    contents.Metadata = output["Metadata"];
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackResourceDriftInformation(output["DriftInformation"], context);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};
const deserializeAws_queryStackResourceDrift = (output, context) => {
  let contents = {
    StackId: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    PhysicalResourceIdContext: undefined,
    ResourceType: undefined,
    ExpectedProperties: undefined,
    ActualProperties: undefined,
    PropertyDifferences: undefined,
    StackResourceDriftStatus: undefined,
    Timestamp: undefined,
    ModuleInfo: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = output["PhysicalResourceId"];
  }
  if (output.PhysicalResourceIdContext === "") {
    contents.PhysicalResourceIdContext = [];
  }
  if (
    output["PhysicalResourceIdContext"] !== undefined &&
    output["PhysicalResourceIdContext"]["member"] !== undefined
  ) {
    contents.PhysicalResourceIdContext = deserializeAws_queryPhysicalResourceIdContext(
      smithy_client_1.getArrayIfSingleItem(output["PhysicalResourceIdContext"]["member"]),
      context
    );
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["ExpectedProperties"] !== undefined) {
    contents.ExpectedProperties = output["ExpectedProperties"];
  }
  if (output["ActualProperties"] !== undefined) {
    contents.ActualProperties = output["ActualProperties"];
  }
  if (output.PropertyDifferences === "") {
    contents.PropertyDifferences = [];
  }
  if (output["PropertyDifferences"] !== undefined && output["PropertyDifferences"]["member"] !== undefined) {
    contents.PropertyDifferences = deserializeAws_queryPropertyDifferences(
      smithy_client_1.getArrayIfSingleItem(output["PropertyDifferences"]["member"]),
      context
    );
  }
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = output["StackResourceDriftStatus"];
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};
const deserializeAws_queryStackResourceDriftInformation = (output, context) => {
  let contents = {
    StackResourceDriftStatus: undefined,
    LastCheckTimestamp: undefined,
  };
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = output["StackResourceDriftStatus"];
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  return contents;
};
const deserializeAws_queryStackResourceDriftInformationSummary = (output, context) => {
  let contents = {
    StackResourceDriftStatus: undefined,
    LastCheckTimestamp: undefined,
  };
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = output["StackResourceDriftStatus"];
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  return contents;
};
const deserializeAws_queryStackResourceDrifts = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackResourceDrift(entry, context);
    });
};
const deserializeAws_queryStackResources = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackResource(entry, context);
    });
};
const deserializeAws_queryStackResourceSummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackResourceSummary(entry, context);
    });
};
const deserializeAws_queryStackResourceSummary = (output, context) => {
  let contents = {
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    LastUpdatedTimestamp: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    DriftInformation: undefined,
    ModuleInfo: undefined,
  };
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = output["LogicalResourceId"];
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = output["PhysicalResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["LastUpdatedTimestamp"] !== undefined) {
    contents.LastUpdatedTimestamp = new Date(output["LastUpdatedTimestamp"]);
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = output["ResourceStatus"];
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = output["ResourceStatusReason"];
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackResourceDriftInformationSummary(
      output["DriftInformation"],
      context
    );
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};
const deserializeAws_queryStacks = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStack(entry, context);
    });
};
const deserializeAws_queryStackSet = (output, context) => {
  let contents = {
    StackSetName: undefined,
    StackSetId: undefined,
    Description: undefined,
    Status: undefined,
    TemplateBody: undefined,
    Parameters: undefined,
    Capabilities: undefined,
    Tags: undefined,
    StackSetARN: undefined,
    AdministrationRoleARN: undefined,
    ExecutionRoleName: undefined,
    StackSetDriftDetectionDetails: undefined,
    AutoDeployment: undefined,
    PermissionModel: undefined,
    OrganizationalUnitIds: undefined,
  };
  if (output["StackSetName"] !== undefined) {
    contents.StackSetName = output["StackSetName"];
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = output["StackSetId"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["TemplateBody"] !== undefined) {
    contents.TemplateBody = output["TemplateBody"];
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryParameters(
      smithy_client_1.getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      smithy_client_1.getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTags(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["StackSetARN"] !== undefined) {
    contents.StackSetARN = output["StackSetARN"];
  }
  if (output["AdministrationRoleARN"] !== undefined) {
    contents.AdministrationRoleARN = output["AdministrationRoleARN"];
  }
  if (output["ExecutionRoleName"] !== undefined) {
    contents.ExecutionRoleName = output["ExecutionRoleName"];
  }
  if (output["StackSetDriftDetectionDetails"] !== undefined) {
    contents.StackSetDriftDetectionDetails = deserializeAws_queryStackSetDriftDetectionDetails(
      output["StackSetDriftDetectionDetails"],
      context
    );
  }
  if (output["AutoDeployment"] !== undefined) {
    contents.AutoDeployment = deserializeAws_queryAutoDeployment(output["AutoDeployment"], context);
  }
  if (output["PermissionModel"] !== undefined) {
    contents.PermissionModel = output["PermissionModel"];
  }
  if (output.OrganizationalUnitIds === "") {
    contents.OrganizationalUnitIds = [];
  }
  if (output["OrganizationalUnitIds"] !== undefined && output["OrganizationalUnitIds"]["member"] !== undefined) {
    contents.OrganizationalUnitIds = deserializeAws_queryOrganizationalUnitIdList(
      smithy_client_1.getArrayIfSingleItem(output["OrganizationalUnitIds"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryStackSetDriftDetectionDetails = (output, context) => {
  let contents = {
    DriftStatus: undefined,
    DriftDetectionStatus: undefined,
    LastDriftCheckTimestamp: undefined,
    TotalStackInstancesCount: undefined,
    DriftedStackInstancesCount: undefined,
    InSyncStackInstancesCount: undefined,
    InProgressStackInstancesCount: undefined,
    FailedStackInstancesCount: undefined,
  };
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = output["DriftStatus"];
  }
  if (output["DriftDetectionStatus"] !== undefined) {
    contents.DriftDetectionStatus = output["DriftDetectionStatus"];
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
  }
  if (output["TotalStackInstancesCount"] !== undefined) {
    contents.TotalStackInstancesCount = parseInt(output["TotalStackInstancesCount"]);
  }
  if (output["DriftedStackInstancesCount"] !== undefined) {
    contents.DriftedStackInstancesCount = parseInt(output["DriftedStackInstancesCount"]);
  }
  if (output["InSyncStackInstancesCount"] !== undefined) {
    contents.InSyncStackInstancesCount = parseInt(output["InSyncStackInstancesCount"]);
  }
  if (output["InProgressStackInstancesCount"] !== undefined) {
    contents.InProgressStackInstancesCount = parseInt(output["InProgressStackInstancesCount"]);
  }
  if (output["FailedStackInstancesCount"] !== undefined) {
    contents.FailedStackInstancesCount = parseInt(output["FailedStackInstancesCount"]);
  }
  return contents;
};
const deserializeAws_queryStackSetNotEmptyException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryStackSetNotFoundException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryStackSetOperation = (output, context) => {
  let contents = {
    OperationId: undefined,
    StackSetId: undefined,
    Action: undefined,
    Status: undefined,
    OperationPreferences: undefined,
    RetainStacks: undefined,
    AdministrationRoleARN: undefined,
    ExecutionRoleName: undefined,
    CreationTimestamp: undefined,
    EndTimestamp: undefined,
    DeploymentTargets: undefined,
    StackSetDriftDetectionDetails: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = output["StackSetId"];
  }
  if (output["Action"] !== undefined) {
    contents.Action = output["Action"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["OperationPreferences"] !== undefined) {
    contents.OperationPreferences = deserializeAws_queryStackSetOperationPreferences(
      output["OperationPreferences"],
      context
    );
  }
  if (output["RetainStacks"] !== undefined) {
    contents.RetainStacks = output["RetainStacks"] == "true";
  }
  if (output["AdministrationRoleARN"] !== undefined) {
    contents.AdministrationRoleARN = output["AdministrationRoleARN"];
  }
  if (output["ExecutionRoleName"] !== undefined) {
    contents.ExecutionRoleName = output["ExecutionRoleName"];
  }
  if (output["CreationTimestamp"] !== undefined) {
    contents.CreationTimestamp = new Date(output["CreationTimestamp"]);
  }
  if (output["EndTimestamp"] !== undefined) {
    contents.EndTimestamp = new Date(output["EndTimestamp"]);
  }
  if (output["DeploymentTargets"] !== undefined) {
    contents.DeploymentTargets = deserializeAws_queryDeploymentTargets(output["DeploymentTargets"], context);
  }
  if (output["StackSetDriftDetectionDetails"] !== undefined) {
    contents.StackSetDriftDetectionDetails = deserializeAws_queryStackSetDriftDetectionDetails(
      output["StackSetDriftDetectionDetails"],
      context
    );
  }
  return contents;
};
const deserializeAws_queryStackSetOperationPreferences = (output, context) => {
  let contents = {
    RegionConcurrencyType: undefined,
    RegionOrder: undefined,
    FailureToleranceCount: undefined,
    FailureTolerancePercentage: undefined,
    MaxConcurrentCount: undefined,
    MaxConcurrentPercentage: undefined,
  };
  if (output["RegionConcurrencyType"] !== undefined) {
    contents.RegionConcurrencyType = output["RegionConcurrencyType"];
  }
  if (output.RegionOrder === "") {
    contents.RegionOrder = [];
  }
  if (output["RegionOrder"] !== undefined && output["RegionOrder"]["member"] !== undefined) {
    contents.RegionOrder = deserializeAws_queryRegionList(
      smithy_client_1.getArrayIfSingleItem(output["RegionOrder"]["member"]),
      context
    );
  }
  if (output["FailureToleranceCount"] !== undefined) {
    contents.FailureToleranceCount = parseInt(output["FailureToleranceCount"]);
  }
  if (output["FailureTolerancePercentage"] !== undefined) {
    contents.FailureTolerancePercentage = parseInt(output["FailureTolerancePercentage"]);
  }
  if (output["MaxConcurrentCount"] !== undefined) {
    contents.MaxConcurrentCount = parseInt(output["MaxConcurrentCount"]);
  }
  if (output["MaxConcurrentPercentage"] !== undefined) {
    contents.MaxConcurrentPercentage = parseInt(output["MaxConcurrentPercentage"]);
  }
  return contents;
};
const deserializeAws_queryStackSetOperationResultSummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackSetOperationResultSummary(entry, context);
    });
};
const deserializeAws_queryStackSetOperationResultSummary = (output, context) => {
  let contents = {
    Account: undefined,
    Region: undefined,
    Status: undefined,
    StatusReason: undefined,
    AccountGateResult: undefined,
    OrganizationalUnitId: undefined,
  };
  if (output["Account"] !== undefined) {
    contents.Account = output["Account"];
  }
  if (output["Region"] !== undefined) {
    contents.Region = output["Region"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  if (output["AccountGateResult"] !== undefined) {
    contents.AccountGateResult = deserializeAws_queryAccountGateResult(output["AccountGateResult"], context);
  }
  if (output["OrganizationalUnitId"] !== undefined) {
    contents.OrganizationalUnitId = output["OrganizationalUnitId"];
  }
  return contents;
};
const deserializeAws_queryStackSetOperationSummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackSetOperationSummary(entry, context);
    });
};
const deserializeAws_queryStackSetOperationSummary = (output, context) => {
  let contents = {
    OperationId: undefined,
    Action: undefined,
    Status: undefined,
    CreationTimestamp: undefined,
    EndTimestamp: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  if (output["Action"] !== undefined) {
    contents.Action = output["Action"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["CreationTimestamp"] !== undefined) {
    contents.CreationTimestamp = new Date(output["CreationTimestamp"]);
  }
  if (output["EndTimestamp"] !== undefined) {
    contents.EndTimestamp = new Date(output["EndTimestamp"]);
  }
  return contents;
};
const deserializeAws_queryStackSetSummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackSetSummary(entry, context);
    });
};
const deserializeAws_queryStackSetSummary = (output, context) => {
  let contents = {
    StackSetName: undefined,
    StackSetId: undefined,
    Description: undefined,
    Status: undefined,
    AutoDeployment: undefined,
    PermissionModel: undefined,
    DriftStatus: undefined,
    LastDriftCheckTimestamp: undefined,
  };
  if (output["StackSetName"] !== undefined) {
    contents.StackSetName = output["StackSetName"];
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = output["StackSetId"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["AutoDeployment"] !== undefined) {
    contents.AutoDeployment = deserializeAws_queryAutoDeployment(output["AutoDeployment"], context);
  }
  if (output["PermissionModel"] !== undefined) {
    contents.PermissionModel = output["PermissionModel"];
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = output["DriftStatus"];
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
  }
  return contents;
};
const deserializeAws_queryStackSummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStackSummary(entry, context);
    });
};
const deserializeAws_queryStackSummary = (output, context) => {
  let contents = {
    StackId: undefined,
    StackName: undefined,
    TemplateDescription: undefined,
    CreationTime: undefined,
    LastUpdatedTime: undefined,
    DeletionTime: undefined,
    StackStatus: undefined,
    StackStatusReason: undefined,
    ParentId: undefined,
    RootId: undefined,
    DriftInformation: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = output["StackName"];
  }
  if (output["TemplateDescription"] !== undefined) {
    contents.TemplateDescription = output["TemplateDescription"];
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["LastUpdatedTime"] !== undefined) {
    contents.LastUpdatedTime = new Date(output["LastUpdatedTime"]);
  }
  if (output["DeletionTime"] !== undefined) {
    contents.DeletionTime = new Date(output["DeletionTime"]);
  }
  if (output["StackStatus"] !== undefined) {
    contents.StackStatus = output["StackStatus"];
  }
  if (output["StackStatusReason"] !== undefined) {
    contents.StackStatusReason = output["StackStatusReason"];
  }
  if (output["ParentId"] !== undefined) {
    contents.ParentId = output["ParentId"];
  }
  if (output["RootId"] !== undefined) {
    contents.RootId = output["RootId"];
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackDriftInformationSummary(output["DriftInformation"], context);
  }
  return contents;
};
const deserializeAws_queryStageList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryStaleRequestException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryStopStackSetOperationOutput = (output, context) => {
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
const deserializeAws_queryTags = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryTag(entry, context);
    });
};
const deserializeAws_queryTemplateParameter = (output, context) => {
  let contents = {
    ParameterKey: undefined,
    DefaultValue: undefined,
    NoEcho: undefined,
    Description: undefined,
  };
  if (output["ParameterKey"] !== undefined) {
    contents.ParameterKey = output["ParameterKey"];
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = output["DefaultValue"];
  }
  if (output["NoEcho"] !== undefined) {
    contents.NoEcho = output["NoEcho"] == "true";
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  return contents;
};
const deserializeAws_queryTemplateParameters = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryTemplateParameter(entry, context);
    });
};
const deserializeAws_queryTokenAlreadyExistsException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryTransformsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryTypeNotFoundException = (output, context) => {
  let contents = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};
const deserializeAws_queryTypeSummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryTypeSummary(entry, context);
    });
};
const deserializeAws_queryTypeSummary = (output, context) => {
  let contents = {
    Type: undefined,
    TypeName: undefined,
    DefaultVersionId: undefined,
    TypeArn: undefined,
    LastUpdated: undefined,
    Description: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName = output["TypeName"];
  }
  if (output["DefaultVersionId"] !== undefined) {
    contents.DefaultVersionId = output["DefaultVersionId"];
  }
  if (output["TypeArn"] !== undefined) {
    contents.TypeArn = output["TypeArn"];
  }
  if (output["LastUpdated"] !== undefined) {
    contents.LastUpdated = new Date(output["LastUpdated"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  return contents;
};
const deserializeAws_queryTypeVersionSummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryTypeVersionSummary(entry, context);
    });
};
const deserializeAws_queryTypeVersionSummary = (output, context) => {
  let contents = {
    Type: undefined,
    TypeName: undefined,
    VersionId: undefined,
    IsDefaultVersion: undefined,
    Arn: undefined,
    TimeCreated: undefined,
    Description: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName = output["TypeName"];
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  if (output["IsDefaultVersion"] !== undefined) {
    contents.IsDefaultVersion = output["IsDefaultVersion"] == "true";
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["TimeCreated"] !== undefined) {
    contents.TimeCreated = new Date(output["TimeCreated"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  return contents;
};
const deserializeAws_queryUpdateStackInstancesOutput = (output, context) => {
  let contents = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  return contents;
};
const deserializeAws_queryUpdateStackOutput = (output, context) => {
  let contents = {
    StackId: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  return contents;
};
const deserializeAws_queryUpdateStackSetOutput = (output, context) => {
  let contents = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = output["OperationId"];
  }
  return contents;
};
const deserializeAws_queryUpdateTerminationProtectionOutput = (output, context) => {
  let contents = {
    StackId: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = output["StackId"];
  }
  return contents;
};
const deserializeAws_queryValidateTemplateOutput = (output, context) => {
  let contents = {
    Parameters: undefined,
    Description: undefined,
    Capabilities: undefined,
    CapabilitiesReason: undefined,
    DeclaredTransforms: undefined,
  };
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryTemplateParameters(
      smithy_client_1.getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      smithy_client_1.getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output["CapabilitiesReason"] !== undefined) {
    contents.CapabilitiesReason = output["CapabilitiesReason"];
  }
  if (output.DeclaredTransforms === "") {
    contents.DeclaredTransforms = [];
  }
  if (output["DeclaredTransforms"] !== undefined && output["DeclaredTransforms"]["member"] !== undefined) {
    contents.DeclaredTransforms = deserializeAws_queryTransformsList(
      smithy_client_1.getArrayIfSingleItem(output["DeclaredTransforms"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeMetadata = (output) => {
  var _a;
  return {
    httpStatusCode: output.statusCode,
    requestId:
      (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
  };
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
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
const parseBody = (streamBody, context) =>
  collectBodyString(streamBody, context).then((encoded) => {
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
const buildFormUrlencodedString = (formEntries) =>
  Object.entries(formEntries)
    .map(
      ([key, value]) =>
        smithy_client_1.extendedEncodeURIComponent(key) + "=" + smithy_client_1.extendedEncodeURIComponent(value)
    )
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
