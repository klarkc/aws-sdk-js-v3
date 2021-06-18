"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_queryPutScalingPolicyCommand =
  exports.serializeAws_queryPutNotificationConfigurationCommand =
  exports.serializeAws_queryPutLifecycleHookCommand =
  exports.serializeAws_queryGetPredictiveScalingForecastCommand =
  exports.serializeAws_queryExitStandbyCommand =
  exports.serializeAws_queryExecutePolicyCommand =
  exports.serializeAws_queryEnterStandbyCommand =
  exports.serializeAws_queryEnableMetricsCollectionCommand =
  exports.serializeAws_queryDisableMetricsCollectionCommand =
  exports.serializeAws_queryDetachLoadBalancerTargetGroupsCommand =
  exports.serializeAws_queryDetachLoadBalancersCommand =
  exports.serializeAws_queryDetachInstancesCommand =
  exports.serializeAws_queryDescribeWarmPoolCommand =
  exports.serializeAws_queryDescribeTerminationPolicyTypesCommand =
  exports.serializeAws_queryDescribeTagsCommand =
  exports.serializeAws_queryDescribeScheduledActionsCommand =
  exports.serializeAws_queryDescribeScalingProcessTypesCommand =
  exports.serializeAws_queryDescribeScalingActivitiesCommand =
  exports.serializeAws_queryDescribePoliciesCommand =
  exports.serializeAws_queryDescribeNotificationConfigurationsCommand =
  exports.serializeAws_queryDescribeMetricCollectionTypesCommand =
  exports.serializeAws_queryDescribeLoadBalancerTargetGroupsCommand =
  exports.serializeAws_queryDescribeLoadBalancersCommand =
  exports.serializeAws_queryDescribeLifecycleHookTypesCommand =
  exports.serializeAws_queryDescribeLifecycleHooksCommand =
  exports.serializeAws_queryDescribeLaunchConfigurationsCommand =
  exports.serializeAws_queryDescribeInstanceRefreshesCommand =
  exports.serializeAws_queryDescribeAutoScalingNotificationTypesCommand =
  exports.serializeAws_queryDescribeAutoScalingInstancesCommand =
  exports.serializeAws_queryDescribeAutoScalingGroupsCommand =
  exports.serializeAws_queryDescribeAdjustmentTypesCommand =
  exports.serializeAws_queryDescribeAccountLimitsCommand =
  exports.serializeAws_queryDeleteWarmPoolCommand =
  exports.serializeAws_queryDeleteTagsCommand =
  exports.serializeAws_queryDeleteScheduledActionCommand =
  exports.serializeAws_queryDeletePolicyCommand =
  exports.serializeAws_queryDeleteNotificationConfigurationCommand =
  exports.serializeAws_queryDeleteLifecycleHookCommand =
  exports.serializeAws_queryDeleteLaunchConfigurationCommand =
  exports.serializeAws_queryDeleteAutoScalingGroupCommand =
  exports.serializeAws_queryCreateOrUpdateTagsCommand =
  exports.serializeAws_queryCreateLaunchConfigurationCommand =
  exports.serializeAws_queryCreateAutoScalingGroupCommand =
  exports.serializeAws_queryCompleteLifecycleActionCommand =
  exports.serializeAws_queryCancelInstanceRefreshCommand =
  exports.serializeAws_queryBatchPutScheduledUpdateGroupActionCommand =
  exports.serializeAws_queryBatchDeleteScheduledActionCommand =
  exports.serializeAws_queryAttachLoadBalancerTargetGroupsCommand =
  exports.serializeAws_queryAttachLoadBalancersCommand =
  exports.serializeAws_queryAttachInstancesCommand =
    void 0;
exports.deserializeAws_queryDetachInstancesCommand =
  exports.deserializeAws_queryDescribeWarmPoolCommand =
  exports.deserializeAws_queryDescribeTerminationPolicyTypesCommand =
  exports.deserializeAws_queryDescribeTagsCommand =
  exports.deserializeAws_queryDescribeScheduledActionsCommand =
  exports.deserializeAws_queryDescribeScalingProcessTypesCommand =
  exports.deserializeAws_queryDescribeScalingActivitiesCommand =
  exports.deserializeAws_queryDescribePoliciesCommand =
  exports.deserializeAws_queryDescribeNotificationConfigurationsCommand =
  exports.deserializeAws_queryDescribeMetricCollectionTypesCommand =
  exports.deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand =
  exports.deserializeAws_queryDescribeLoadBalancersCommand =
  exports.deserializeAws_queryDescribeLifecycleHookTypesCommand =
  exports.deserializeAws_queryDescribeLifecycleHooksCommand =
  exports.deserializeAws_queryDescribeLaunchConfigurationsCommand =
  exports.deserializeAws_queryDescribeInstanceRefreshesCommand =
  exports.deserializeAws_queryDescribeAutoScalingNotificationTypesCommand =
  exports.deserializeAws_queryDescribeAutoScalingInstancesCommand =
  exports.deserializeAws_queryDescribeAutoScalingGroupsCommand =
  exports.deserializeAws_queryDescribeAdjustmentTypesCommand =
  exports.deserializeAws_queryDescribeAccountLimitsCommand =
  exports.deserializeAws_queryDeleteWarmPoolCommand =
  exports.deserializeAws_queryDeleteTagsCommand =
  exports.deserializeAws_queryDeleteScheduledActionCommand =
  exports.deserializeAws_queryDeletePolicyCommand =
  exports.deserializeAws_queryDeleteNotificationConfigurationCommand =
  exports.deserializeAws_queryDeleteLifecycleHookCommand =
  exports.deserializeAws_queryDeleteLaunchConfigurationCommand =
  exports.deserializeAws_queryDeleteAutoScalingGroupCommand =
  exports.deserializeAws_queryCreateOrUpdateTagsCommand =
  exports.deserializeAws_queryCreateLaunchConfigurationCommand =
  exports.deserializeAws_queryCreateAutoScalingGroupCommand =
  exports.deserializeAws_queryCompleteLifecycleActionCommand =
  exports.deserializeAws_queryCancelInstanceRefreshCommand =
  exports.deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand =
  exports.deserializeAws_queryBatchDeleteScheduledActionCommand =
  exports.deserializeAws_queryAttachLoadBalancerTargetGroupsCommand =
  exports.deserializeAws_queryAttachLoadBalancersCommand =
  exports.deserializeAws_queryAttachInstancesCommand =
  exports.serializeAws_queryUpdateAutoScalingGroupCommand =
  exports.serializeAws_queryTerminateInstanceInAutoScalingGroupCommand =
  exports.serializeAws_querySuspendProcessesCommand =
  exports.serializeAws_queryStartInstanceRefreshCommand =
  exports.serializeAws_querySetInstanceProtectionCommand =
  exports.serializeAws_querySetInstanceHealthCommand =
  exports.serializeAws_querySetDesiredCapacityCommand =
  exports.serializeAws_queryResumeProcessesCommand =
  exports.serializeAws_queryRecordLifecycleActionHeartbeatCommand =
  exports.serializeAws_queryPutWarmPoolCommand =
  exports.serializeAws_queryPutScheduledUpdateGroupActionCommand =
    void 0;
exports.deserializeAws_queryUpdateAutoScalingGroupCommand =
  exports.deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand =
  exports.deserializeAws_querySuspendProcessesCommand =
  exports.deserializeAws_queryStartInstanceRefreshCommand =
  exports.deserializeAws_querySetInstanceProtectionCommand =
  exports.deserializeAws_querySetInstanceHealthCommand =
  exports.deserializeAws_querySetDesiredCapacityCommand =
  exports.deserializeAws_queryResumeProcessesCommand =
  exports.deserializeAws_queryRecordLifecycleActionHeartbeatCommand =
  exports.deserializeAws_queryPutWarmPoolCommand =
  exports.deserializeAws_queryPutScheduledUpdateGroupActionCommand =
  exports.deserializeAws_queryPutScalingPolicyCommand =
  exports.deserializeAws_queryPutNotificationConfigurationCommand =
  exports.deserializeAws_queryPutLifecycleHookCommand =
  exports.deserializeAws_queryGetPredictiveScalingForecastCommand =
  exports.deserializeAws_queryExitStandbyCommand =
  exports.deserializeAws_queryExecutePolicyCommand =
  exports.deserializeAws_queryEnterStandbyCommand =
  exports.deserializeAws_queryEnableMetricsCollectionCommand =
  exports.deserializeAws_queryDisableMetricsCollectionCommand =
  exports.deserializeAws_queryDetachLoadBalancerTargetGroupsCommand =
  exports.deserializeAws_queryDetachLoadBalancersCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_queryAttachInstancesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachInstancesQuery(input, context),
    Action: "AttachInstances",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAttachInstancesCommand = serializeAws_queryAttachInstancesCommand;
const serializeAws_queryAttachLoadBalancersCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachLoadBalancersType(input, context),
    Action: "AttachLoadBalancers",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAttachLoadBalancersCommand = serializeAws_queryAttachLoadBalancersCommand;
const serializeAws_queryAttachLoadBalancerTargetGroupsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachLoadBalancerTargetGroupsType(input, context),
    Action: "AttachLoadBalancerTargetGroups",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAttachLoadBalancerTargetGroupsCommand =
  serializeAws_queryAttachLoadBalancerTargetGroupsCommand;
const serializeAws_queryBatchDeleteScheduledActionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBatchDeleteScheduledActionType(input, context),
    Action: "BatchDeleteScheduledAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryBatchDeleteScheduledActionCommand = serializeAws_queryBatchDeleteScheduledActionCommand;
const serializeAws_queryBatchPutScheduledUpdateGroupActionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBatchPutScheduledUpdateGroupActionType(input, context),
    Action: "BatchPutScheduledUpdateGroupAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryBatchPutScheduledUpdateGroupActionCommand =
  serializeAws_queryBatchPutScheduledUpdateGroupActionCommand;
const serializeAws_queryCancelInstanceRefreshCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCancelInstanceRefreshType(input, context),
    Action: "CancelInstanceRefresh",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCancelInstanceRefreshCommand = serializeAws_queryCancelInstanceRefreshCommand;
const serializeAws_queryCompleteLifecycleActionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCompleteLifecycleActionType(input, context),
    Action: "CompleteLifecycleAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCompleteLifecycleActionCommand = serializeAws_queryCompleteLifecycleActionCommand;
const serializeAws_queryCreateAutoScalingGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateAutoScalingGroupType(input, context),
    Action: "CreateAutoScalingGroup",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateAutoScalingGroupCommand = serializeAws_queryCreateAutoScalingGroupCommand;
const serializeAws_queryCreateLaunchConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateLaunchConfigurationType(input, context),
    Action: "CreateLaunchConfiguration",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateLaunchConfigurationCommand = serializeAws_queryCreateLaunchConfigurationCommand;
const serializeAws_queryCreateOrUpdateTagsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateOrUpdateTagsType(input, context),
    Action: "CreateOrUpdateTags",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateOrUpdateTagsCommand = serializeAws_queryCreateOrUpdateTagsCommand;
const serializeAws_queryDeleteAutoScalingGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAutoScalingGroupType(input, context),
    Action: "DeleteAutoScalingGroup",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteAutoScalingGroupCommand = serializeAws_queryDeleteAutoScalingGroupCommand;
const serializeAws_queryDeleteLaunchConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryLaunchConfigurationNameType(input, context),
    Action: "DeleteLaunchConfiguration",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteLaunchConfigurationCommand = serializeAws_queryDeleteLaunchConfigurationCommand;
const serializeAws_queryDeleteLifecycleHookCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteLifecycleHookType(input, context),
    Action: "DeleteLifecycleHook",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteLifecycleHookCommand = serializeAws_queryDeleteLifecycleHookCommand;
const serializeAws_queryDeleteNotificationConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteNotificationConfigurationType(input, context),
    Action: "DeleteNotificationConfiguration",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteNotificationConfigurationCommand =
  serializeAws_queryDeleteNotificationConfigurationCommand;
const serializeAws_queryDeletePolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeletePolicyType(input, context),
    Action: "DeletePolicy",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeletePolicyCommand = serializeAws_queryDeletePolicyCommand;
const serializeAws_queryDeleteScheduledActionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteScheduledActionType(input, context),
    Action: "DeleteScheduledAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteScheduledActionCommand = serializeAws_queryDeleteScheduledActionCommand;
const serializeAws_queryDeleteTagsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteTagsType(input, context),
    Action: "DeleteTags",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteTagsCommand = serializeAws_queryDeleteTagsCommand;
const serializeAws_queryDeleteWarmPoolCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteWarmPoolType(input, context),
    Action: "DeleteWarmPool",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteWarmPoolCommand = serializeAws_queryDeleteWarmPoolCommand;
const serializeAws_queryDescribeAccountLimitsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeAccountLimits",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAccountLimitsCommand = serializeAws_queryDescribeAccountLimitsCommand;
const serializeAws_queryDescribeAdjustmentTypesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeAdjustmentTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAdjustmentTypesCommand = serializeAws_queryDescribeAdjustmentTypesCommand;
const serializeAws_queryDescribeAutoScalingGroupsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAutoScalingGroupNamesType(input, context),
    Action: "DescribeAutoScalingGroups",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAutoScalingGroupsCommand = serializeAws_queryDescribeAutoScalingGroupsCommand;
const serializeAws_queryDescribeAutoScalingInstancesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAutoScalingInstancesType(input, context),
    Action: "DescribeAutoScalingInstances",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAutoScalingInstancesCommand = serializeAws_queryDescribeAutoScalingInstancesCommand;
const serializeAws_queryDescribeAutoScalingNotificationTypesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeAutoScalingNotificationTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAutoScalingNotificationTypesCommand =
  serializeAws_queryDescribeAutoScalingNotificationTypesCommand;
const serializeAws_queryDescribeInstanceRefreshesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeInstanceRefreshesType(input, context),
    Action: "DescribeInstanceRefreshes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeInstanceRefreshesCommand = serializeAws_queryDescribeInstanceRefreshesCommand;
const serializeAws_queryDescribeLaunchConfigurationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryLaunchConfigurationNamesType(input, context),
    Action: "DescribeLaunchConfigurations",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeLaunchConfigurationsCommand = serializeAws_queryDescribeLaunchConfigurationsCommand;
const serializeAws_queryDescribeLifecycleHooksCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLifecycleHooksType(input, context),
    Action: "DescribeLifecycleHooks",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeLifecycleHooksCommand = serializeAws_queryDescribeLifecycleHooksCommand;
const serializeAws_queryDescribeLifecycleHookTypesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeLifecycleHookTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeLifecycleHookTypesCommand = serializeAws_queryDescribeLifecycleHookTypesCommand;
const serializeAws_queryDescribeLoadBalancersCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLoadBalancersRequest(input, context),
    Action: "DescribeLoadBalancers",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeLoadBalancersCommand = serializeAws_queryDescribeLoadBalancersCommand;
const serializeAws_queryDescribeLoadBalancerTargetGroupsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLoadBalancerTargetGroupsRequest(input, context),
    Action: "DescribeLoadBalancerTargetGroups",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeLoadBalancerTargetGroupsCommand =
  serializeAws_queryDescribeLoadBalancerTargetGroupsCommand;
const serializeAws_queryDescribeMetricCollectionTypesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeMetricCollectionTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeMetricCollectionTypesCommand = serializeAws_queryDescribeMetricCollectionTypesCommand;
const serializeAws_queryDescribeNotificationConfigurationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeNotificationConfigurationsType(input, context),
    Action: "DescribeNotificationConfigurations",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeNotificationConfigurationsCommand =
  serializeAws_queryDescribeNotificationConfigurationsCommand;
const serializeAws_queryDescribePoliciesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribePoliciesType(input, context),
    Action: "DescribePolicies",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribePoliciesCommand = serializeAws_queryDescribePoliciesCommand;
const serializeAws_queryDescribeScalingActivitiesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeScalingActivitiesType(input, context),
    Action: "DescribeScalingActivities",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeScalingActivitiesCommand = serializeAws_queryDescribeScalingActivitiesCommand;
const serializeAws_queryDescribeScalingProcessTypesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeScalingProcessTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeScalingProcessTypesCommand = serializeAws_queryDescribeScalingProcessTypesCommand;
const serializeAws_queryDescribeScheduledActionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeScheduledActionsType(input, context),
    Action: "DescribeScheduledActions",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeScheduledActionsCommand = serializeAws_queryDescribeScheduledActionsCommand;
const serializeAws_queryDescribeTagsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTagsType(input, context),
    Action: "DescribeTags",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeTagsCommand = serializeAws_queryDescribeTagsCommand;
const serializeAws_queryDescribeTerminationPolicyTypesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeTerminationPolicyTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeTerminationPolicyTypesCommand =
  serializeAws_queryDescribeTerminationPolicyTypesCommand;
const serializeAws_queryDescribeWarmPoolCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeWarmPoolType(input, context),
    Action: "DescribeWarmPool",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeWarmPoolCommand = serializeAws_queryDescribeWarmPoolCommand;
const serializeAws_queryDetachInstancesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachInstancesQuery(input, context),
    Action: "DetachInstances",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDetachInstancesCommand = serializeAws_queryDetachInstancesCommand;
const serializeAws_queryDetachLoadBalancersCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachLoadBalancersType(input, context),
    Action: "DetachLoadBalancers",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDetachLoadBalancersCommand = serializeAws_queryDetachLoadBalancersCommand;
const serializeAws_queryDetachLoadBalancerTargetGroupsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachLoadBalancerTargetGroupsType(input, context),
    Action: "DetachLoadBalancerTargetGroups",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDetachLoadBalancerTargetGroupsCommand =
  serializeAws_queryDetachLoadBalancerTargetGroupsCommand;
const serializeAws_queryDisableMetricsCollectionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDisableMetricsCollectionQuery(input, context),
    Action: "DisableMetricsCollection",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDisableMetricsCollectionCommand = serializeAws_queryDisableMetricsCollectionCommand;
const serializeAws_queryEnableMetricsCollectionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnableMetricsCollectionQuery(input, context),
    Action: "EnableMetricsCollection",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryEnableMetricsCollectionCommand = serializeAws_queryEnableMetricsCollectionCommand;
const serializeAws_queryEnterStandbyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnterStandbyQuery(input, context),
    Action: "EnterStandby",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryEnterStandbyCommand = serializeAws_queryEnterStandbyCommand;
const serializeAws_queryExecutePolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryExecutePolicyType(input, context),
    Action: "ExecutePolicy",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryExecutePolicyCommand = serializeAws_queryExecutePolicyCommand;
const serializeAws_queryExitStandbyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryExitStandbyQuery(input, context),
    Action: "ExitStandby",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryExitStandbyCommand = serializeAws_queryExitStandbyCommand;
const serializeAws_queryGetPredictiveScalingForecastCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetPredictiveScalingForecastType(input, context),
    Action: "GetPredictiveScalingForecast",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetPredictiveScalingForecastCommand = serializeAws_queryGetPredictiveScalingForecastCommand;
const serializeAws_queryPutLifecycleHookCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutLifecycleHookType(input, context),
    Action: "PutLifecycleHook",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutLifecycleHookCommand = serializeAws_queryPutLifecycleHookCommand;
const serializeAws_queryPutNotificationConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutNotificationConfigurationType(input, context),
    Action: "PutNotificationConfiguration",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutNotificationConfigurationCommand = serializeAws_queryPutNotificationConfigurationCommand;
const serializeAws_queryPutScalingPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutScalingPolicyType(input, context),
    Action: "PutScalingPolicy",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutScalingPolicyCommand = serializeAws_queryPutScalingPolicyCommand;
const serializeAws_queryPutScheduledUpdateGroupActionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutScheduledUpdateGroupActionType(input, context),
    Action: "PutScheduledUpdateGroupAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutScheduledUpdateGroupActionCommand = serializeAws_queryPutScheduledUpdateGroupActionCommand;
const serializeAws_queryPutWarmPoolCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutWarmPoolType(input, context),
    Action: "PutWarmPool",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutWarmPoolCommand = serializeAws_queryPutWarmPoolCommand;
const serializeAws_queryRecordLifecycleActionHeartbeatCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRecordLifecycleActionHeartbeatType(input, context),
    Action: "RecordLifecycleActionHeartbeat",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRecordLifecycleActionHeartbeatCommand =
  serializeAws_queryRecordLifecycleActionHeartbeatCommand;
const serializeAws_queryResumeProcessesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryScalingProcessQuery(input, context),
    Action: "ResumeProcesses",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryResumeProcessesCommand = serializeAws_queryResumeProcessesCommand;
const serializeAws_querySetDesiredCapacityCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetDesiredCapacityType(input, context),
    Action: "SetDesiredCapacity",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetDesiredCapacityCommand = serializeAws_querySetDesiredCapacityCommand;
const serializeAws_querySetInstanceHealthCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetInstanceHealthQuery(input, context),
    Action: "SetInstanceHealth",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetInstanceHealthCommand = serializeAws_querySetInstanceHealthCommand;
const serializeAws_querySetInstanceProtectionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetInstanceProtectionQuery(input, context),
    Action: "SetInstanceProtection",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetInstanceProtectionCommand = serializeAws_querySetInstanceProtectionCommand;
const serializeAws_queryStartInstanceRefreshCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStartInstanceRefreshType(input, context),
    Action: "StartInstanceRefresh",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStartInstanceRefreshCommand = serializeAws_queryStartInstanceRefreshCommand;
const serializeAws_querySuspendProcessesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryScalingProcessQuery(input, context),
    Action: "SuspendProcesses",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySuspendProcessesCommand = serializeAws_querySuspendProcessesCommand;
const serializeAws_queryTerminateInstanceInAutoScalingGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTerminateInstanceInAutoScalingGroupType(input, context),
    Action: "TerminateInstanceInAutoScalingGroup",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTerminateInstanceInAutoScalingGroupCommand =
  serializeAws_queryTerminateInstanceInAutoScalingGroupCommand;
const serializeAws_queryUpdateAutoScalingGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateAutoScalingGroupType(input, context),
    Action: "UpdateAutoScalingGroup",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateAutoScalingGroupCommand = serializeAws_queryUpdateAutoScalingGroupCommand;
const deserializeAws_queryAttachInstancesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAttachInstancesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryAttachInstancesCommand = deserializeAws_queryAttachInstancesCommand;
const deserializeAws_queryAttachInstancesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)),
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
const deserializeAws_queryAttachLoadBalancersCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAttachLoadBalancersCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryAttachLoadBalancersResultType(data.AttachLoadBalancersResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryAttachLoadBalancersCommand = deserializeAws_queryAttachLoadBalancersCommand;
const deserializeAws_queryAttachLoadBalancersCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)),
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
const deserializeAws_queryAttachLoadBalancerTargetGroupsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAttachLoadBalancerTargetGroupsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryAttachLoadBalancerTargetGroupsResultType(
    data.AttachLoadBalancerTargetGroupsResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryAttachLoadBalancerTargetGroupsCommand =
  deserializeAws_queryAttachLoadBalancerTargetGroupsCommand;
const deserializeAws_queryAttachLoadBalancerTargetGroupsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)),
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
const deserializeAws_queryBatchDeleteScheduledActionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryBatchDeleteScheduledActionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryBatchDeleteScheduledActionAnswer(data.BatchDeleteScheduledActionResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryBatchDeleteScheduledActionCommand = deserializeAws_queryBatchDeleteScheduledActionCommand;
const deserializeAws_queryBatchDeleteScheduledActionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryBatchPutScheduledUpdateGroupActionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryBatchPutScheduledUpdateGroupActionAnswer(
    data.BatchPutScheduledUpdateGroupActionResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand =
  deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand;
const deserializeAws_queryBatchPutScheduledUpdateGroupActionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsFault":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCancelInstanceRefreshCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCancelInstanceRefreshCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryCancelInstanceRefreshAnswer(data.CancelInstanceRefreshResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryCancelInstanceRefreshCommand = deserializeAws_queryCancelInstanceRefreshCommand;
const deserializeAws_queryCancelInstanceRefreshCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActiveInstanceRefreshNotFoundFault":
    case "com.amazonaws.autoscaling#ActiveInstanceRefreshNotFoundFault":
      response = {
        ...(await deserializeAws_queryActiveInstanceRefreshNotFoundFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCompleteLifecycleActionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCompleteLifecycleActionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryCompleteLifecycleActionAnswer(data.CompleteLifecycleActionResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryCompleteLifecycleActionCommand = deserializeAws_queryCompleteLifecycleActionCommand;
const deserializeAws_queryCompleteLifecycleActionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateAutoScalingGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateAutoScalingGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryCreateAutoScalingGroupCommand = deserializeAws_queryCreateAutoScalingGroupCommand;
const deserializeAws_queryCreateAutoScalingGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsFault":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateLaunchConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateLaunchConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryCreateLaunchConfigurationCommand = deserializeAws_queryCreateLaunchConfigurationCommand;
const deserializeAws_queryCreateLaunchConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsFault":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateOrUpdateTagsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateOrUpdateTagsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryCreateOrUpdateTagsCommand = deserializeAws_queryCreateOrUpdateTagsCommand;
const deserializeAws_queryCreateOrUpdateTagsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsFault":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteAutoScalingGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteAutoScalingGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteAutoScalingGroupCommand = deserializeAws_queryDeleteAutoScalingGroupCommand;
const deserializeAws_queryDeleteAutoScalingGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ScalingActivityInProgressFault":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      response = {
        ...(await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteLaunchConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteLaunchConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteLaunchConfigurationCommand = deserializeAws_queryDeleteLaunchConfigurationCommand;
const deserializeAws_queryDeleteLaunchConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteLifecycleHookCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteLifecycleHookCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDeleteLifecycleHookAnswer(data.DeleteLifecycleHookResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteLifecycleHookCommand = deserializeAws_queryDeleteLifecycleHookCommand;
const deserializeAws_queryDeleteLifecycleHookCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteNotificationConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteNotificationConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteNotificationConfigurationCommand =
  deserializeAws_queryDeleteNotificationConfigurationCommand;
const deserializeAws_queryDeleteNotificationConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeletePolicyCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeletePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeletePolicyCommand = deserializeAws_queryDeletePolicyCommand;
const deserializeAws_queryDeletePolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteScheduledActionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteScheduledActionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteScheduledActionCommand = deserializeAws_queryDeleteScheduledActionCommand;
const deserializeAws_queryDeleteScheduledActionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteTagsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteTagsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteTagsCommand = deserializeAws_queryDeleteTagsCommand;
const deserializeAws_queryDeleteTagsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteWarmPoolCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteWarmPoolCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDeleteWarmPoolAnswer(data.DeleteWarmPoolResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteWarmPoolCommand = deserializeAws_queryDeleteWarmPoolCommand;
const deserializeAws_queryDeleteWarmPoolCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ScalingActivityInProgressFault":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      response = {
        ...(await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context)),
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
  contents = deserializeAws_queryDescribeAccountLimitsAnswer(data.DescribeAccountLimitsResult, context);
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
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeAdjustmentTypesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAdjustmentTypesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeAdjustmentTypesAnswer(data.DescribeAdjustmentTypesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAdjustmentTypesCommand = deserializeAws_queryDescribeAdjustmentTypesCommand;
const deserializeAws_queryDescribeAdjustmentTypesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeAutoScalingGroupsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAutoScalingGroupsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryAutoScalingGroupsType(data.DescribeAutoScalingGroupsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAutoScalingGroupsCommand = deserializeAws_queryDescribeAutoScalingGroupsCommand;
const deserializeAws_queryDescribeAutoScalingGroupsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeAutoScalingInstancesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAutoScalingInstancesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryAutoScalingInstancesType(data.DescribeAutoScalingInstancesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAutoScalingInstancesCommand =
  deserializeAws_queryDescribeAutoScalingInstancesCommand;
const deserializeAws_queryDescribeAutoScalingInstancesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeAutoScalingNotificationTypesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAutoScalingNotificationTypesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeAutoScalingNotificationTypesAnswer(
    data.DescribeAutoScalingNotificationTypesResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAutoScalingNotificationTypesCommand =
  deserializeAws_queryDescribeAutoScalingNotificationTypesCommand;
const deserializeAws_queryDescribeAutoScalingNotificationTypesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeInstanceRefreshesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeInstanceRefreshesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeInstanceRefreshesAnswer(data.DescribeInstanceRefreshesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeInstanceRefreshesCommand = deserializeAws_queryDescribeInstanceRefreshesCommand;
const deserializeAws_queryDescribeInstanceRefreshesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeLaunchConfigurationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLaunchConfigurationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryLaunchConfigurationsType(data.DescribeLaunchConfigurationsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeLaunchConfigurationsCommand =
  deserializeAws_queryDescribeLaunchConfigurationsCommand;
const deserializeAws_queryDescribeLaunchConfigurationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeLifecycleHooksCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLifecycleHooksCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeLifecycleHooksAnswer(data.DescribeLifecycleHooksResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeLifecycleHooksCommand = deserializeAws_queryDescribeLifecycleHooksCommand;
const deserializeAws_queryDescribeLifecycleHooksCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeLifecycleHookTypesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLifecycleHookTypesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeLifecycleHookTypesAnswer(data.DescribeLifecycleHookTypesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeLifecycleHookTypesCommand = deserializeAws_queryDescribeLifecycleHookTypesCommand;
const deserializeAws_queryDescribeLifecycleHookTypesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeLoadBalancersCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLoadBalancersCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeLoadBalancersResponse(data.DescribeLoadBalancersResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeLoadBalancersCommand = deserializeAws_queryDescribeLoadBalancersCommand;
const deserializeAws_queryDescribeLoadBalancersCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLoadBalancerTargetGroupsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeLoadBalancerTargetGroupsResponse(
    data.DescribeLoadBalancerTargetGroupsResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand =
  deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand;
const deserializeAws_queryDescribeLoadBalancerTargetGroupsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeMetricCollectionTypesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeMetricCollectionTypesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeMetricCollectionTypesAnswer(data.DescribeMetricCollectionTypesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeMetricCollectionTypesCommand =
  deserializeAws_queryDescribeMetricCollectionTypesCommand;
const deserializeAws_queryDescribeMetricCollectionTypesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeNotificationConfigurationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeNotificationConfigurationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeNotificationConfigurationsAnswer(
    data.DescribeNotificationConfigurationsResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeNotificationConfigurationsCommand =
  deserializeAws_queryDescribeNotificationConfigurationsCommand;
const deserializeAws_queryDescribeNotificationConfigurationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribePoliciesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribePoliciesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryPoliciesType(data.DescribePoliciesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribePoliciesCommand = deserializeAws_queryDescribePoliciesCommand;
const deserializeAws_queryDescribePoliciesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeScalingActivitiesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeScalingActivitiesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryActivitiesType(data.DescribeScalingActivitiesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeScalingActivitiesCommand = deserializeAws_queryDescribeScalingActivitiesCommand;
const deserializeAws_queryDescribeScalingActivitiesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeScalingProcessTypesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeScalingProcessTypesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryProcessesType(data.DescribeScalingProcessTypesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeScalingProcessTypesCommand = deserializeAws_queryDescribeScalingProcessTypesCommand;
const deserializeAws_queryDescribeScalingProcessTypesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeScheduledActionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeScheduledActionsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryScheduledActionsType(data.DescribeScheduledActionsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeScheduledActionsCommand = deserializeAws_queryDescribeScheduledActionsCommand;
const deserializeAws_queryDescribeScheduledActionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeTagsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTagsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryTagsType(data.DescribeTagsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeTagsCommand = deserializeAws_queryDescribeTagsCommand;
const deserializeAws_queryDescribeTagsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeTerminationPolicyTypesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTerminationPolicyTypesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeTerminationPolicyTypesAnswer(
    data.DescribeTerminationPolicyTypesResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeTerminationPolicyTypesCommand =
  deserializeAws_queryDescribeTerminationPolicyTypesCommand;
const deserializeAws_queryDescribeTerminationPolicyTypesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeWarmPoolCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeWarmPoolCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDescribeWarmPoolAnswer(data.DescribeWarmPoolResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeWarmPoolCommand = deserializeAws_queryDescribeWarmPoolCommand;
const deserializeAws_queryDescribeWarmPoolCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDetachInstancesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetachInstancesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDetachInstancesAnswer(data.DetachInstancesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDetachInstancesCommand = deserializeAws_queryDetachInstancesCommand;
const deserializeAws_queryDetachInstancesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDetachLoadBalancersCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetachLoadBalancersCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDetachLoadBalancersResultType(data.DetachLoadBalancersResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDetachLoadBalancersCommand = deserializeAws_queryDetachLoadBalancersCommand;
const deserializeAws_queryDetachLoadBalancersCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDetachLoadBalancerTargetGroupsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetachLoadBalancerTargetGroupsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryDetachLoadBalancerTargetGroupsResultType(
    data.DetachLoadBalancerTargetGroupsResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDetachLoadBalancerTargetGroupsCommand =
  deserializeAws_queryDetachLoadBalancerTargetGroupsCommand;
const deserializeAws_queryDetachLoadBalancerTargetGroupsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDisableMetricsCollectionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDisableMetricsCollectionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryDisableMetricsCollectionCommand = deserializeAws_queryDisableMetricsCollectionCommand;
const deserializeAws_queryDisableMetricsCollectionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryEnableMetricsCollectionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEnableMetricsCollectionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryEnableMetricsCollectionCommand = deserializeAws_queryEnableMetricsCollectionCommand;
const deserializeAws_queryEnableMetricsCollectionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryEnterStandbyCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEnterStandbyCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryEnterStandbyAnswer(data.EnterStandbyResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryEnterStandbyCommand = deserializeAws_queryEnterStandbyCommand;
const deserializeAws_queryEnterStandbyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryExecutePolicyCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryExecutePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryExecutePolicyCommand = deserializeAws_queryExecutePolicyCommand;
const deserializeAws_queryExecutePolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ScalingActivityInProgressFault":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      response = {
        ...(await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryExitStandbyCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryExitStandbyCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryExitStandbyAnswer(data.ExitStandbyResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryExitStandbyCommand = deserializeAws_queryExitStandbyCommand;
const deserializeAws_queryExitStandbyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryGetPredictiveScalingForecastCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetPredictiveScalingForecastCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryGetPredictiveScalingForecastAnswer(data.GetPredictiveScalingForecastResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryGetPredictiveScalingForecastCommand =
  deserializeAws_queryGetPredictiveScalingForecastCommand;
const deserializeAws_queryGetPredictiveScalingForecastCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryPutLifecycleHookCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutLifecycleHookCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryPutLifecycleHookAnswer(data.PutLifecycleHookResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryPutLifecycleHookCommand = deserializeAws_queryPutLifecycleHookCommand;
const deserializeAws_queryPutLifecycleHookCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryPutNotificationConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutNotificationConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryPutNotificationConfigurationCommand =
  deserializeAws_queryPutNotificationConfigurationCommand;
const deserializeAws_queryPutNotificationConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)),
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
const deserializeAws_queryPutScalingPolicyCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutScalingPolicyCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryPolicyARNType(data.PutScalingPolicyResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryPutScalingPolicyCommand = deserializeAws_queryPutScalingPolicyCommand;
const deserializeAws_queryPutScalingPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)),
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
const deserializeAws_queryPutScheduledUpdateGroupActionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutScheduledUpdateGroupActionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryPutScheduledUpdateGroupActionCommand =
  deserializeAws_queryPutScheduledUpdateGroupActionCommand;
const deserializeAws_queryPutScheduledUpdateGroupActionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsFault":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryPutWarmPoolCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutWarmPoolCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryPutWarmPoolAnswer(data.PutWarmPoolResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryPutWarmPoolCommand = deserializeAws_queryPutWarmPoolCommand;
const deserializeAws_queryPutWarmPoolCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRecordLifecycleActionHeartbeatCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRecordLifecycleActionHeartbeatCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryRecordLifecycleActionHeartbeatAnswer(
    data.RecordLifecycleActionHeartbeatResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryRecordLifecycleActionHeartbeatCommand =
  deserializeAws_queryRecordLifecycleActionHeartbeatCommand;
const deserializeAws_queryRecordLifecycleActionHeartbeatCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryResumeProcessesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryResumeProcessesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryResumeProcessesCommand = deserializeAws_queryResumeProcessesCommand;
const deserializeAws_queryResumeProcessesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)),
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
const deserializeAws_querySetDesiredCapacityCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetDesiredCapacityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_querySetDesiredCapacityCommand = deserializeAws_querySetDesiredCapacityCommand;
const deserializeAws_querySetDesiredCapacityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ScalingActivityInProgressFault":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      response = {
        ...(await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context)),
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
const deserializeAws_querySetInstanceHealthCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetInstanceHealthCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_querySetInstanceHealthCommand = deserializeAws_querySetInstanceHealthCommand;
const deserializeAws_querySetInstanceHealthCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_querySetInstanceProtectionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetInstanceProtectionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_querySetInstanceProtectionAnswer(data.SetInstanceProtectionResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_querySetInstanceProtectionCommand = deserializeAws_querySetInstanceProtectionCommand;
const deserializeAws_querySetInstanceProtectionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryStartInstanceRefreshCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStartInstanceRefreshCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryStartInstanceRefreshAnswer(data.StartInstanceRefreshResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryStartInstanceRefreshCommand = deserializeAws_queryStartInstanceRefreshCommand;
const deserializeAws_queryStartInstanceRefreshCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceRefreshInProgressFault":
    case "com.amazonaws.autoscaling#InstanceRefreshInProgressFault":
      response = {
        ...(await deserializeAws_queryInstanceRefreshInProgressFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
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
const deserializeAws_querySuspendProcessesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySuspendProcessesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_querySuspendProcessesCommand = deserializeAws_querySuspendProcessesCommand;
const deserializeAws_querySuspendProcessesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryTerminateInstanceInAutoScalingGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_queryActivityType(data.TerminateInstanceInAutoScalingGroupResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand =
  deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand;
const deserializeAws_queryTerminateInstanceInAutoScalingGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ScalingActivityInProgressFault":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      response = {
        ...(await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryUpdateAutoScalingGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateAutoScalingGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateAutoScalingGroupCommand = deserializeAws_queryUpdateAutoScalingGroupCommand;
const deserializeAws_queryUpdateAutoScalingGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ScalingActivityInProgressFault":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      response = {
        ...(await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)),
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
const deserializeAws_queryActiveInstanceRefreshNotFoundFaultResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryActiveInstanceRefreshNotFoundFault(body.Error, context);
  const contents = {
    name: "ActiveInstanceRefreshNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryAlreadyExistsFaultResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryAlreadyExistsFault(body.Error, context);
  const contents = {
    name: "AlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryInstanceRefreshInProgressFaultResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryInstanceRefreshInProgressFault(body.Error, context);
  const contents = {
    name: "InstanceRefreshInProgressFault",
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
const deserializeAws_queryResourceContentionFaultResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryResourceContentionFault(body.Error, context);
  const contents = {
    name: "ResourceContentionFault",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryResourceInUseFaultResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryResourceInUseFault(body.Error, context);
  const contents = {
    name: "ResourceInUseFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryScalingActivityInProgressFaultResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryScalingActivityInProgressFault(body.Error, context);
  const contents = {
    name: "ScalingActivityInProgressFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_queryServiceLinkedRoleFailureResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_queryServiceLinkedRoleFailure(body.Error, context);
  const contents = {
    name: "ServiceLinkedRoleFailure",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const serializeAws_queryActivityIds = (input, context) => {
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
const serializeAws_queryAttachInstancesQuery = (input, context) => {
  const entries = {};
  if (input.InstanceIds !== undefined && input.InstanceIds !== null) {
    const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};
const serializeAws_queryAttachLoadBalancersType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
    const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryAttachLoadBalancerTargetGroupsType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TargetGroupARNs !== undefined && input.TargetGroupARNs !== null) {
    const memberEntries = serializeAws_queryTargetGroupARNs(input.TargetGroupARNs, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupARNs.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryAutoScalingGroupNames = (input, context) => {
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
const serializeAws_queryAutoScalingGroupNamesType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupNames !== undefined && input.AutoScalingGroupNames !== null) {
    const memberEntries = serializeAws_queryAutoScalingGroupNames(input.AutoScalingGroupNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoScalingGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};
const serializeAws_queryAutoScalingNotificationTypes = (input, context) => {
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
const serializeAws_queryAvailabilityZones = (input, context) => {
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
const serializeAws_queryBatchDeleteScheduledActionType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionNames !== undefined && input.ScheduledActionNames !== null) {
    const memberEntries = serializeAws_queryScheduledActionNames(input.ScheduledActionNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScheduledActionNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryBatchPutScheduledUpdateGroupActionType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledUpdateGroupActions !== undefined && input.ScheduledUpdateGroupActions !== null) {
    const memberEntries = serializeAws_queryScheduledUpdateGroupActionRequests(
      input.ScheduledUpdateGroupActions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScheduledUpdateGroupActions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryBlockDeviceMapping = (input, context) => {
  const entries = {};
  if (input.VirtualName !== undefined && input.VirtualName !== null) {
    entries["VirtualName"] = input.VirtualName;
  }
  if (input.DeviceName !== undefined && input.DeviceName !== null) {
    entries["DeviceName"] = input.DeviceName;
  }
  if (input.Ebs !== undefined && input.Ebs !== null) {
    const memberEntries = serializeAws_queryEbs(input.Ebs, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Ebs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NoDevice !== undefined && input.NoDevice !== null) {
    entries["NoDevice"] = input.NoDevice;
  }
  return entries;
};
const serializeAws_queryBlockDeviceMappings = (input, context) => {
  const entries = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryBlockDeviceMapping(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};
const serializeAws_queryCancelInstanceRefreshType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};
const serializeAws_queryCheckpointPercentages = (input, context) => {
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
const serializeAws_queryClassicLinkVPCSecurityGroups = (input, context) => {
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
const serializeAws_queryCompleteLifecycleActionType = (input, context) => {
  const entries = {};
  if (input.LifecycleHookName !== undefined && input.LifecycleHookName !== null) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LifecycleActionToken !== undefined && input.LifecycleActionToken !== null) {
    entries["LifecycleActionToken"] = input.LifecycleActionToken;
  }
  if (input.LifecycleActionResult !== undefined && input.LifecycleActionResult !== null) {
    entries["LifecycleActionResult"] = input.LifecycleActionResult;
  }
  if (input.InstanceId !== undefined && input.InstanceId !== null) {
    entries["InstanceId"] = input.InstanceId;
  }
  return entries;
};
const serializeAws_queryCreateAutoScalingGroupType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LaunchConfigurationName !== undefined && input.LaunchConfigurationName !== null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.LaunchTemplate !== undefined && input.LaunchTemplate !== null) {
    const memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MixedInstancesPolicy !== undefined && input.MixedInstancesPolicy !== null) {
    const memberEntries = serializeAws_queryMixedInstancesPolicy(input.MixedInstancesPolicy, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MixedInstancesPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstanceId !== undefined && input.InstanceId !== null) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.MinSize !== undefined && input.MinSize !== null) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.MaxSize !== undefined && input.MaxSize !== null) {
    entries["MaxSize"] = input.MaxSize;
  }
  if (input.DesiredCapacity !== undefined && input.DesiredCapacity !== null) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.DefaultCooldown !== undefined && input.DefaultCooldown !== null) {
    entries["DefaultCooldown"] = input.DefaultCooldown;
  }
  if (input.AvailabilityZones !== undefined && input.AvailabilityZones !== null) {
    const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
    const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetGroupARNs !== undefined && input.TargetGroupARNs !== null) {
    const memberEntries = serializeAws_queryTargetGroupARNs(input.TargetGroupARNs, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HealthCheckType !== undefined && input.HealthCheckType !== null) {
    entries["HealthCheckType"] = input.HealthCheckType;
  }
  if (input.HealthCheckGracePeriod !== undefined && input.HealthCheckGracePeriod !== null) {
    entries["HealthCheckGracePeriod"] = input.HealthCheckGracePeriod;
  }
  if (input.PlacementGroup !== undefined && input.PlacementGroup !== null) {
    entries["PlacementGroup"] = input.PlacementGroup;
  }
  if (input.VPCZoneIdentifier !== undefined && input.VPCZoneIdentifier !== null) {
    entries["VPCZoneIdentifier"] = input.VPCZoneIdentifier;
  }
  if (input.TerminationPolicies !== undefined && input.TerminationPolicies !== null) {
    const memberEntries = serializeAws_queryTerminationPolicies(input.TerminationPolicies, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TerminationPolicies.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NewInstancesProtectedFromScaleIn !== undefined && input.NewInstancesProtectedFromScaleIn !== null) {
    entries["NewInstancesProtectedFromScaleIn"] = input.NewInstancesProtectedFromScaleIn;
  }
  if (input.CapacityRebalance !== undefined && input.CapacityRebalance !== null) {
    entries["CapacityRebalance"] = input.CapacityRebalance;
  }
  if (input.LifecycleHookSpecificationList !== undefined && input.LifecycleHookSpecificationList !== null) {
    const memberEntries = serializeAws_queryLifecycleHookSpecifications(input.LifecycleHookSpecificationList, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LifecycleHookSpecificationList.${key}`;
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
  if (input.ServiceLinkedRoleARN !== undefined && input.ServiceLinkedRoleARN !== null) {
    entries["ServiceLinkedRoleARN"] = input.ServiceLinkedRoleARN;
  }
  if (input.MaxInstanceLifetime !== undefined && input.MaxInstanceLifetime !== null) {
    entries["MaxInstanceLifetime"] = input.MaxInstanceLifetime;
  }
  return entries;
};
const serializeAws_queryCreateLaunchConfigurationType = (input, context) => {
  const entries = {};
  if (input.LaunchConfigurationName !== undefined && input.LaunchConfigurationName !== null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.ImageId !== undefined && input.ImageId !== null) {
    entries["ImageId"] = input.ImageId;
  }
  if (input.KeyName !== undefined && input.KeyName !== null) {
    entries["KeyName"] = input.KeyName;
  }
  if (input.SecurityGroups !== undefined && input.SecurityGroups !== null) {
    const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClassicLinkVPCId !== undefined && input.ClassicLinkVPCId !== null) {
    entries["ClassicLinkVPCId"] = input.ClassicLinkVPCId;
  }
  if (input.ClassicLinkVPCSecurityGroups !== undefined && input.ClassicLinkVPCSecurityGroups !== null) {
    const memberEntries = serializeAws_queryClassicLinkVPCSecurityGroups(input.ClassicLinkVPCSecurityGroups, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClassicLinkVPCSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UserData !== undefined && input.UserData !== null) {
    entries["UserData"] = input.UserData;
  }
  if (input.InstanceId !== undefined && input.InstanceId !== null) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.InstanceType !== undefined && input.InstanceType !== null) {
    entries["InstanceType"] = input.InstanceType;
  }
  if (input.KernelId !== undefined && input.KernelId !== null) {
    entries["KernelId"] = input.KernelId;
  }
  if (input.RamdiskId !== undefined && input.RamdiskId !== null) {
    entries["RamdiskId"] = input.RamdiskId;
  }
  if (input.BlockDeviceMappings !== undefined && input.BlockDeviceMappings !== null) {
    const memberEntries = serializeAws_queryBlockDeviceMappings(input.BlockDeviceMappings, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BlockDeviceMappings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstanceMonitoring !== undefined && input.InstanceMonitoring !== null) {
    const memberEntries = serializeAws_queryInstanceMonitoring(input.InstanceMonitoring, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceMonitoring.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SpotPrice !== undefined && input.SpotPrice !== null) {
    entries["SpotPrice"] = input.SpotPrice;
  }
  if (input.IamInstanceProfile !== undefined && input.IamInstanceProfile !== null) {
    entries["IamInstanceProfile"] = input.IamInstanceProfile;
  }
  if (input.EbsOptimized !== undefined && input.EbsOptimized !== null) {
    entries["EbsOptimized"] = input.EbsOptimized;
  }
  if (input.AssociatePublicIpAddress !== undefined && input.AssociatePublicIpAddress !== null) {
    entries["AssociatePublicIpAddress"] = input.AssociatePublicIpAddress;
  }
  if (input.PlacementTenancy !== undefined && input.PlacementTenancy !== null) {
    entries["PlacementTenancy"] = input.PlacementTenancy;
  }
  if (input.MetadataOptions !== undefined && input.MetadataOptions !== null) {
    const memberEntries = serializeAws_queryInstanceMetadataOptions(input.MetadataOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetadataOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryCreateOrUpdateTagsType = (input, context) => {
  const entries = {};
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryCustomizedMetricSpecification = (input, context) => {
  const entries = {};
  if (input.MetricName !== undefined && input.MetricName !== null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined && input.Namespace !== null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Dimensions !== undefined && input.Dimensions !== null) {
    const memberEntries = serializeAws_queryMetricDimensions(input.Dimensions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Statistic !== undefined && input.Statistic !== null) {
    entries["Statistic"] = input.Statistic;
  }
  if (input.Unit !== undefined && input.Unit !== null) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};
const serializeAws_queryDeleteAutoScalingGroupType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ForceDelete !== undefined && input.ForceDelete !== null) {
    entries["ForceDelete"] = input.ForceDelete;
  }
  return entries;
};
const serializeAws_queryDeleteLifecycleHookType = (input, context) => {
  const entries = {};
  if (input.LifecycleHookName !== undefined && input.LifecycleHookName !== null) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};
const serializeAws_queryDeleteNotificationConfigurationType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TopicARN !== undefined && input.TopicARN !== null) {
    entries["TopicARN"] = input.TopicARN;
  }
  return entries;
};
const serializeAws_queryDeletePolicyType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyName !== undefined && input.PolicyName !== null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};
const serializeAws_queryDeleteScheduledActionType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionName !== undefined && input.ScheduledActionName !== null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  return entries;
};
const serializeAws_queryDeleteTagsType = (input, context) => {
  const entries = {};
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryDeleteWarmPoolType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ForceDelete !== undefined && input.ForceDelete !== null) {
    entries["ForceDelete"] = input.ForceDelete;
  }
  return entries;
};
const serializeAws_queryDescribeAutoScalingInstancesType = (input, context) => {
  const entries = {};
  if (input.InstanceIds !== undefined && input.InstanceIds !== null) {
    const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryDescribeInstanceRefreshesType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.InstanceRefreshIds !== undefined && input.InstanceRefreshIds !== null) {
    const memberEntries = serializeAws_queryInstanceRefreshIds(input.InstanceRefreshIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceRefreshIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};
const serializeAws_queryDescribeLifecycleHooksType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LifecycleHookNames !== undefined && input.LifecycleHookNames !== null) {
    const memberEntries = serializeAws_queryLifecycleHookNames(input.LifecycleHookNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LifecycleHookNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryDescribeLoadBalancersRequest = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};
const serializeAws_queryDescribeLoadBalancerTargetGroupsRequest = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};
const serializeAws_queryDescribeNotificationConfigurationsType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupNames !== undefined && input.AutoScalingGroupNames !== null) {
    const memberEntries = serializeAws_queryAutoScalingGroupNames(input.AutoScalingGroupNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoScalingGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};
const serializeAws_queryDescribePoliciesType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyNames !== undefined && input.PolicyNames !== null) {
    const memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PolicyTypes !== undefined && input.PolicyTypes !== null) {
    const memberEntries = serializeAws_queryPolicyTypes(input.PolicyTypes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};
const serializeAws_queryDescribeScalingActivitiesType = (input, context) => {
  const entries = {};
  if (input.ActivityIds !== undefined && input.ActivityIds !== null) {
    const memberEntries = serializeAws_queryActivityIds(input.ActivityIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActivityIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.IncludeDeletedGroups !== undefined && input.IncludeDeletedGroups !== null) {
    entries["IncludeDeletedGroups"] = input.IncludeDeletedGroups;
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryDescribeScheduledActionsType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionNames !== undefined && input.ScheduledActionNames !== null) {
    const memberEntries = serializeAws_queryScheduledActionNames(input.ScheduledActionNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScheduledActionNames.${key}`;
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
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};
const serializeAws_queryDescribeTagsType = (input, context) => {
  const entries = {};
  if (input.Filters !== undefined && input.Filters !== null) {
    const memberEntries = serializeAws_queryFilters(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};
const serializeAws_queryDescribeWarmPoolType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};
const serializeAws_queryDetachInstancesQuery = (input, context) => {
  const entries = {};
  if (input.InstanceIds !== undefined && input.InstanceIds !== null) {
    const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ShouldDecrementDesiredCapacity !== undefined && input.ShouldDecrementDesiredCapacity !== null) {
    entries["ShouldDecrementDesiredCapacity"] = input.ShouldDecrementDesiredCapacity;
  }
  return entries;
};
const serializeAws_queryDetachLoadBalancersType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
    const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryDetachLoadBalancerTargetGroupsType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TargetGroupARNs !== undefined && input.TargetGroupARNs !== null) {
    const memberEntries = serializeAws_queryTargetGroupARNs(input.TargetGroupARNs, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupARNs.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryDisableMetricsCollectionQuery = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Metrics !== undefined && input.Metrics !== null) {
    const memberEntries = serializeAws_queryMetrics(input.Metrics, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryEbs = (input, context) => {
  const entries = {};
  if (input.SnapshotId !== undefined && input.SnapshotId !== null) {
    entries["SnapshotId"] = input.SnapshotId;
  }
  if (input.VolumeSize !== undefined && input.VolumeSize !== null) {
    entries["VolumeSize"] = input.VolumeSize;
  }
  if (input.VolumeType !== undefined && input.VolumeType !== null) {
    entries["VolumeType"] = input.VolumeType;
  }
  if (input.DeleteOnTermination !== undefined && input.DeleteOnTermination !== null) {
    entries["DeleteOnTermination"] = input.DeleteOnTermination;
  }
  if (input.Iops !== undefined && input.Iops !== null) {
    entries["Iops"] = input.Iops;
  }
  if (input.Encrypted !== undefined && input.Encrypted !== null) {
    entries["Encrypted"] = input.Encrypted;
  }
  if (input.Throughput !== undefined && input.Throughput !== null) {
    entries["Throughput"] = input.Throughput;
  }
  return entries;
};
const serializeAws_queryEnableMetricsCollectionQuery = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Metrics !== undefined && input.Metrics !== null) {
    const memberEntries = serializeAws_queryMetrics(input.Metrics, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Granularity !== undefined && input.Granularity !== null) {
    entries["Granularity"] = input.Granularity;
  }
  return entries;
};
const serializeAws_queryEnterStandbyQuery = (input, context) => {
  const entries = {};
  if (input.InstanceIds !== undefined && input.InstanceIds !== null) {
    const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ShouldDecrementDesiredCapacity !== undefined && input.ShouldDecrementDesiredCapacity !== null) {
    entries["ShouldDecrementDesiredCapacity"] = input.ShouldDecrementDesiredCapacity;
  }
  return entries;
};
const serializeAws_queryExecutePolicyType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyName !== undefined && input.PolicyName !== null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.HonorCooldown !== undefined && input.HonorCooldown !== null) {
    entries["HonorCooldown"] = input.HonorCooldown;
  }
  if (input.MetricValue !== undefined && input.MetricValue !== null) {
    entries["MetricValue"] = input.MetricValue;
  }
  if (input.BreachThreshold !== undefined && input.BreachThreshold !== null) {
    entries["BreachThreshold"] = input.BreachThreshold;
  }
  return entries;
};
const serializeAws_queryExitStandbyQuery = (input, context) => {
  const entries = {};
  if (input.InstanceIds !== undefined && input.InstanceIds !== null) {
    const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};
const serializeAws_queryFilter = (input, context) => {
  const entries = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Values !== undefined && input.Values !== null) {
    const memberEntries = serializeAws_queryValues(input.Values, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryFilters = (input, context) => {
  const entries = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};
const serializeAws_queryGetPredictiveScalingForecastType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyName !== undefined && input.PolicyName !== null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.StartTime !== undefined && input.StartTime !== null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime !== undefined && input.EndTime !== null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  return entries;
};
const serializeAws_queryInstanceIds = (input, context) => {
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
const serializeAws_queryInstanceMetadataOptions = (input, context) => {
  const entries = {};
  if (input.HttpTokens !== undefined && input.HttpTokens !== null) {
    entries["HttpTokens"] = input.HttpTokens;
  }
  if (input.HttpPutResponseHopLimit !== undefined && input.HttpPutResponseHopLimit !== null) {
    entries["HttpPutResponseHopLimit"] = input.HttpPutResponseHopLimit;
  }
  if (input.HttpEndpoint !== undefined && input.HttpEndpoint !== null) {
    entries["HttpEndpoint"] = input.HttpEndpoint;
  }
  return entries;
};
const serializeAws_queryInstanceMonitoring = (input, context) => {
  const entries = {};
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};
const serializeAws_queryInstanceRefreshIds = (input, context) => {
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
const serializeAws_queryInstancesDistribution = (input, context) => {
  const entries = {};
  if (input.OnDemandAllocationStrategy !== undefined && input.OnDemandAllocationStrategy !== null) {
    entries["OnDemandAllocationStrategy"] = input.OnDemandAllocationStrategy;
  }
  if (input.OnDemandBaseCapacity !== undefined && input.OnDemandBaseCapacity !== null) {
    entries["OnDemandBaseCapacity"] = input.OnDemandBaseCapacity;
  }
  if (input.OnDemandPercentageAboveBaseCapacity !== undefined && input.OnDemandPercentageAboveBaseCapacity !== null) {
    entries["OnDemandPercentageAboveBaseCapacity"] = input.OnDemandPercentageAboveBaseCapacity;
  }
  if (input.SpotAllocationStrategy !== undefined && input.SpotAllocationStrategy !== null) {
    entries["SpotAllocationStrategy"] = input.SpotAllocationStrategy;
  }
  if (input.SpotInstancePools !== undefined && input.SpotInstancePools !== null) {
    entries["SpotInstancePools"] = input.SpotInstancePools;
  }
  if (input.SpotMaxPrice !== undefined && input.SpotMaxPrice !== null) {
    entries["SpotMaxPrice"] = input.SpotMaxPrice;
  }
  return entries;
};
const serializeAws_queryLaunchConfigurationNames = (input, context) => {
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
const serializeAws_queryLaunchConfigurationNamesType = (input, context) => {
  const entries = {};
  if (input.LaunchConfigurationNames !== undefined && input.LaunchConfigurationNames !== null) {
    const memberEntries = serializeAws_queryLaunchConfigurationNames(input.LaunchConfigurationNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchConfigurationNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};
const serializeAws_queryLaunchConfigurationNameType = (input, context) => {
  const entries = {};
  if (input.LaunchConfigurationName !== undefined && input.LaunchConfigurationName !== null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  return entries;
};
const serializeAws_queryLaunchTemplate = (input, context) => {
  const entries = {};
  if (input.LaunchTemplateSpecification !== undefined && input.LaunchTemplateSpecification !== null) {
    const memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplateSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplateSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Overrides !== undefined && input.Overrides !== null) {
    const memberEntries = serializeAws_queryOverrides(input.Overrides, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Overrides.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryLaunchTemplateOverrides = (input, context) => {
  const entries = {};
  if (input.InstanceType !== undefined && input.InstanceType !== null) {
    entries["InstanceType"] = input.InstanceType;
  }
  if (input.WeightedCapacity !== undefined && input.WeightedCapacity !== null) {
    entries["WeightedCapacity"] = input.WeightedCapacity;
  }
  if (input.LaunchTemplateSpecification !== undefined && input.LaunchTemplateSpecification !== null) {
    const memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplateSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplateSpecification.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryLaunchTemplateSpecification = (input, context) => {
  const entries = {};
  if (input.LaunchTemplateId !== undefined && input.LaunchTemplateId !== null) {
    entries["LaunchTemplateId"] = input.LaunchTemplateId;
  }
  if (input.LaunchTemplateName !== undefined && input.LaunchTemplateName !== null) {
    entries["LaunchTemplateName"] = input.LaunchTemplateName;
  }
  if (input.Version !== undefined && input.Version !== null) {
    entries["Version"] = input.Version;
  }
  return entries;
};
const serializeAws_queryLifecycleHookNames = (input, context) => {
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
const serializeAws_queryLifecycleHookSpecification = (input, context) => {
  const entries = {};
  if (input.LifecycleHookName !== undefined && input.LifecycleHookName !== null) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.LifecycleTransition !== undefined && input.LifecycleTransition !== null) {
    entries["LifecycleTransition"] = input.LifecycleTransition;
  }
  if (input.NotificationMetadata !== undefined && input.NotificationMetadata !== null) {
    entries["NotificationMetadata"] = input.NotificationMetadata;
  }
  if (input.HeartbeatTimeout !== undefined && input.HeartbeatTimeout !== null) {
    entries["HeartbeatTimeout"] = input.HeartbeatTimeout;
  }
  if (input.DefaultResult !== undefined && input.DefaultResult !== null) {
    entries["DefaultResult"] = input.DefaultResult;
  }
  if (input.NotificationTargetARN !== undefined && input.NotificationTargetARN !== null) {
    entries["NotificationTargetARN"] = input.NotificationTargetARN;
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  return entries;
};
const serializeAws_queryLifecycleHookSpecifications = (input, context) => {
  const entries = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryLifecycleHookSpecification(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};
const serializeAws_queryLoadBalancerNames = (input, context) => {
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
const serializeAws_queryMetricDimension = (input, context) => {
  const entries = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};
const serializeAws_queryMetricDimensions = (input, context) => {
  const entries = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryMetricDimension(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};
const serializeAws_queryMetrics = (input, context) => {
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
const serializeAws_queryMixedInstancesPolicy = (input, context) => {
  const entries = {};
  if (input.LaunchTemplate !== undefined && input.LaunchTemplate !== null) {
    const memberEntries = serializeAws_queryLaunchTemplate(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstancesDistribution !== undefined && input.InstancesDistribution !== null) {
    const memberEntries = serializeAws_queryInstancesDistribution(input.InstancesDistribution, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstancesDistribution.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryOverrides = (input, context) => {
  const entries = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryLaunchTemplateOverrides(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};
const serializeAws_queryPolicyNames = (input, context) => {
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
const serializeAws_queryPolicyTypes = (input, context) => {
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
const serializeAws_queryPredefinedMetricSpecification = (input, context) => {
  const entries = {};
  if (input.PredefinedMetricType !== undefined && input.PredefinedMetricType !== null) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel !== undefined && input.ResourceLabel !== null) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};
const serializeAws_queryPredictiveScalingConfiguration = (input, context) => {
  const entries = {};
  if (input.MetricSpecifications !== undefined && input.MetricSpecifications !== null) {
    const memberEntries = serializeAws_queryPredictiveScalingMetricSpecifications(input.MetricSpecifications, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricSpecifications.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Mode !== undefined && input.Mode !== null) {
    entries["Mode"] = input.Mode;
  }
  if (input.SchedulingBufferTime !== undefined && input.SchedulingBufferTime !== null) {
    entries["SchedulingBufferTime"] = input.SchedulingBufferTime;
  }
  if (input.MaxCapacityBreachBehavior !== undefined && input.MaxCapacityBreachBehavior !== null) {
    entries["MaxCapacityBreachBehavior"] = input.MaxCapacityBreachBehavior;
  }
  if (input.MaxCapacityBuffer !== undefined && input.MaxCapacityBuffer !== null) {
    entries["MaxCapacityBuffer"] = input.MaxCapacityBuffer;
  }
  return entries;
};
const serializeAws_queryPredictiveScalingMetricSpecification = (input, context) => {
  const entries = {};
  if (input.TargetValue !== undefined && input.TargetValue !== null) {
    entries["TargetValue"] = input.TargetValue;
  }
  if (input.PredefinedMetricPairSpecification !== undefined && input.PredefinedMetricPairSpecification !== null) {
    const memberEntries = serializeAws_queryPredictiveScalingPredefinedMetricPair(
      input.PredefinedMetricPairSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedMetricPairSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PredefinedScalingMetricSpecification !== undefined && input.PredefinedScalingMetricSpecification !== null) {
    const memberEntries = serializeAws_queryPredictiveScalingPredefinedScalingMetric(
      input.PredefinedScalingMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedScalingMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PredefinedLoadMetricSpecification !== undefined && input.PredefinedLoadMetricSpecification !== null) {
    const memberEntries = serializeAws_queryPredictiveScalingPredefinedLoadMetric(
      input.PredefinedLoadMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedLoadMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryPredictiveScalingMetricSpecifications = (input, context) => {
  const entries = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryPredictiveScalingMetricSpecification(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};
const serializeAws_queryPredictiveScalingPredefinedLoadMetric = (input, context) => {
  const entries = {};
  if (input.PredefinedMetricType !== undefined && input.PredefinedMetricType !== null) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel !== undefined && input.ResourceLabel !== null) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};
const serializeAws_queryPredictiveScalingPredefinedMetricPair = (input, context) => {
  const entries = {};
  if (input.PredefinedMetricType !== undefined && input.PredefinedMetricType !== null) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel !== undefined && input.ResourceLabel !== null) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};
const serializeAws_queryPredictiveScalingPredefinedScalingMetric = (input, context) => {
  const entries = {};
  if (input.PredefinedMetricType !== undefined && input.PredefinedMetricType !== null) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel !== undefined && input.ResourceLabel !== null) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};
const serializeAws_queryProcessNames = (input, context) => {
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
const serializeAws_queryPutLifecycleHookType = (input, context) => {
  const entries = {};
  if (input.LifecycleHookName !== undefined && input.LifecycleHookName !== null) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LifecycleTransition !== undefined && input.LifecycleTransition !== null) {
    entries["LifecycleTransition"] = input.LifecycleTransition;
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.NotificationTargetARN !== undefined && input.NotificationTargetARN !== null) {
    entries["NotificationTargetARN"] = input.NotificationTargetARN;
  }
  if (input.NotificationMetadata !== undefined && input.NotificationMetadata !== null) {
    entries["NotificationMetadata"] = input.NotificationMetadata;
  }
  if (input.HeartbeatTimeout !== undefined && input.HeartbeatTimeout !== null) {
    entries["HeartbeatTimeout"] = input.HeartbeatTimeout;
  }
  if (input.DefaultResult !== undefined && input.DefaultResult !== null) {
    entries["DefaultResult"] = input.DefaultResult;
  }
  return entries;
};
const serializeAws_queryPutNotificationConfigurationType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TopicARN !== undefined && input.TopicARN !== null) {
    entries["TopicARN"] = input.TopicARN;
  }
  if (input.NotificationTypes !== undefined && input.NotificationTypes !== null) {
    const memberEntries = serializeAws_queryAutoScalingNotificationTypes(input.NotificationTypes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationTypes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryPutScalingPolicyType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyName !== undefined && input.PolicyName !== null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.PolicyType !== undefined && input.PolicyType !== null) {
    entries["PolicyType"] = input.PolicyType;
  }
  if (input.AdjustmentType !== undefined && input.AdjustmentType !== null) {
    entries["AdjustmentType"] = input.AdjustmentType;
  }
  if (input.MinAdjustmentStep !== undefined && input.MinAdjustmentStep !== null) {
    entries["MinAdjustmentStep"] = input.MinAdjustmentStep;
  }
  if (input.MinAdjustmentMagnitude !== undefined && input.MinAdjustmentMagnitude !== null) {
    entries["MinAdjustmentMagnitude"] = input.MinAdjustmentMagnitude;
  }
  if (input.ScalingAdjustment !== undefined && input.ScalingAdjustment !== null) {
    entries["ScalingAdjustment"] = input.ScalingAdjustment;
  }
  if (input.Cooldown !== undefined && input.Cooldown !== null) {
    entries["Cooldown"] = input.Cooldown;
  }
  if (input.MetricAggregationType !== undefined && input.MetricAggregationType !== null) {
    entries["MetricAggregationType"] = input.MetricAggregationType;
  }
  if (input.StepAdjustments !== undefined && input.StepAdjustments !== null) {
    const memberEntries = serializeAws_queryStepAdjustments(input.StepAdjustments, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StepAdjustments.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EstimatedInstanceWarmup !== undefined && input.EstimatedInstanceWarmup !== null) {
    entries["EstimatedInstanceWarmup"] = input.EstimatedInstanceWarmup;
  }
  if (input.TargetTrackingConfiguration !== undefined && input.TargetTrackingConfiguration !== null) {
    const memberEntries = serializeAws_queryTargetTrackingConfiguration(input.TargetTrackingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetTrackingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.PredictiveScalingConfiguration !== undefined && input.PredictiveScalingConfiguration !== null) {
    const memberEntries = serializeAws_queryPredictiveScalingConfiguration(
      input.PredictiveScalingConfiguration,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredictiveScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryPutScheduledUpdateGroupActionType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionName !== undefined && input.ScheduledActionName !== null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.Time !== undefined && input.Time !== null) {
    entries["Time"] = input.Time.toISOString().split(".")[0] + "Z";
  }
  if (input.StartTime !== undefined && input.StartTime !== null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime !== undefined && input.EndTime !== null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Recurrence !== undefined && input.Recurrence !== null) {
    entries["Recurrence"] = input.Recurrence;
  }
  if (input.MinSize !== undefined && input.MinSize !== null) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.MaxSize !== undefined && input.MaxSize !== null) {
    entries["MaxSize"] = input.MaxSize;
  }
  if (input.DesiredCapacity !== undefined && input.DesiredCapacity !== null) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.TimeZone !== undefined && input.TimeZone !== null) {
    entries["TimeZone"] = input.TimeZone;
  }
  return entries;
};
const serializeAws_queryPutWarmPoolType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.MaxGroupPreparedCapacity !== undefined && input.MaxGroupPreparedCapacity !== null) {
    entries["MaxGroupPreparedCapacity"] = input.MaxGroupPreparedCapacity;
  }
  if (input.MinSize !== undefined && input.MinSize !== null) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.PoolState !== undefined && input.PoolState !== null) {
    entries["PoolState"] = input.PoolState;
  }
  return entries;
};
const serializeAws_queryRecordLifecycleActionHeartbeatType = (input, context) => {
  const entries = {};
  if (input.LifecycleHookName !== undefined && input.LifecycleHookName !== null) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LifecycleActionToken !== undefined && input.LifecycleActionToken !== null) {
    entries["LifecycleActionToken"] = input.LifecycleActionToken;
  }
  if (input.InstanceId !== undefined && input.InstanceId !== null) {
    entries["InstanceId"] = input.InstanceId;
  }
  return entries;
};
const serializeAws_queryRefreshPreferences = (input, context) => {
  const entries = {};
  if (input.MinHealthyPercentage !== undefined && input.MinHealthyPercentage !== null) {
    entries["MinHealthyPercentage"] = input.MinHealthyPercentage;
  }
  if (input.InstanceWarmup !== undefined && input.InstanceWarmup !== null) {
    entries["InstanceWarmup"] = input.InstanceWarmup;
  }
  if (input.CheckpointPercentages !== undefined && input.CheckpointPercentages !== null) {
    const memberEntries = serializeAws_queryCheckpointPercentages(input.CheckpointPercentages, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CheckpointPercentages.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CheckpointDelay !== undefined && input.CheckpointDelay !== null) {
    entries["CheckpointDelay"] = input.CheckpointDelay;
  }
  return entries;
};
const serializeAws_queryScalingProcessQuery = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScalingProcesses !== undefined && input.ScalingProcesses !== null) {
    const memberEntries = serializeAws_queryProcessNames(input.ScalingProcesses, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingProcesses.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryScheduledActionNames = (input, context) => {
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
const serializeAws_queryScheduledUpdateGroupActionRequest = (input, context) => {
  const entries = {};
  if (input.ScheduledActionName !== undefined && input.ScheduledActionName !== null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.StartTime !== undefined && input.StartTime !== null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime !== undefined && input.EndTime !== null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Recurrence !== undefined && input.Recurrence !== null) {
    entries["Recurrence"] = input.Recurrence;
  }
  if (input.MinSize !== undefined && input.MinSize !== null) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.MaxSize !== undefined && input.MaxSize !== null) {
    entries["MaxSize"] = input.MaxSize;
  }
  if (input.DesiredCapacity !== undefined && input.DesiredCapacity !== null) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.TimeZone !== undefined && input.TimeZone !== null) {
    entries["TimeZone"] = input.TimeZone;
  }
  return entries;
};
const serializeAws_queryScheduledUpdateGroupActionRequests = (input, context) => {
  const entries = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryScheduledUpdateGroupActionRequest(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};
const serializeAws_querySecurityGroups = (input, context) => {
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
const serializeAws_querySetDesiredCapacityType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.DesiredCapacity !== undefined && input.DesiredCapacity !== null) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.HonorCooldown !== undefined && input.HonorCooldown !== null) {
    entries["HonorCooldown"] = input.HonorCooldown;
  }
  return entries;
};
const serializeAws_querySetInstanceHealthQuery = (input, context) => {
  const entries = {};
  if (input.InstanceId !== undefined && input.InstanceId !== null) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.HealthStatus !== undefined && input.HealthStatus !== null) {
    entries["HealthStatus"] = input.HealthStatus;
  }
  if (input.ShouldRespectGracePeriod !== undefined && input.ShouldRespectGracePeriod !== null) {
    entries["ShouldRespectGracePeriod"] = input.ShouldRespectGracePeriod;
  }
  return entries;
};
const serializeAws_querySetInstanceProtectionQuery = (input, context) => {
  const entries = {};
  if (input.InstanceIds !== undefined && input.InstanceIds !== null) {
    const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ProtectedFromScaleIn !== undefined && input.ProtectedFromScaleIn !== null) {
    entries["ProtectedFromScaleIn"] = input.ProtectedFromScaleIn;
  }
  return entries;
};
const serializeAws_queryStartInstanceRefreshType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Strategy !== undefined && input.Strategy !== null) {
    entries["Strategy"] = input.Strategy;
  }
  if (input.Preferences !== undefined && input.Preferences !== null) {
    const memberEntries = serializeAws_queryRefreshPreferences(input.Preferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Preferences.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};
const serializeAws_queryStepAdjustment = (input, context) => {
  const entries = {};
  if (input.MetricIntervalLowerBound !== undefined && input.MetricIntervalLowerBound !== null) {
    entries["MetricIntervalLowerBound"] = input.MetricIntervalLowerBound;
  }
  if (input.MetricIntervalUpperBound !== undefined && input.MetricIntervalUpperBound !== null) {
    entries["MetricIntervalUpperBound"] = input.MetricIntervalUpperBound;
  }
  if (input.ScalingAdjustment !== undefined && input.ScalingAdjustment !== null) {
    entries["ScalingAdjustment"] = input.ScalingAdjustment;
  }
  return entries;
};
const serializeAws_queryStepAdjustments = (input, context) => {
  const entries = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryStepAdjustment(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};
const serializeAws_queryTag = (input, context) => {
  const entries = {};
  if (input.ResourceId !== undefined && input.ResourceId !== null) {
    entries["ResourceId"] = input.ResourceId;
  }
  if (input.ResourceType !== undefined && input.ResourceType !== null) {
    entries["ResourceType"] = input.ResourceType;
  }
  if (input.Key !== undefined && input.Key !== null) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  if (input.PropagateAtLaunch !== undefined && input.PropagateAtLaunch !== null) {
    entries["PropagateAtLaunch"] = input.PropagateAtLaunch;
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
const serializeAws_queryTargetGroupARNs = (input, context) => {
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
const serializeAws_queryTargetTrackingConfiguration = (input, context) => {
  const entries = {};
  if (input.PredefinedMetricSpecification !== undefined && input.PredefinedMetricSpecification !== null) {
    const memberEntries = serializeAws_queryPredefinedMetricSpecification(input.PredefinedMetricSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CustomizedMetricSpecification !== undefined && input.CustomizedMetricSpecification !== null) {
    const memberEntries = serializeAws_queryCustomizedMetricSpecification(input.CustomizedMetricSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomizedMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetValue !== undefined && input.TargetValue !== null) {
    entries["TargetValue"] = input.TargetValue;
  }
  if (input.DisableScaleIn !== undefined && input.DisableScaleIn !== null) {
    entries["DisableScaleIn"] = input.DisableScaleIn;
  }
  return entries;
};
const serializeAws_queryTerminateInstanceInAutoScalingGroupType = (input, context) => {
  const entries = {};
  if (input.InstanceId !== undefined && input.InstanceId !== null) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.ShouldDecrementDesiredCapacity !== undefined && input.ShouldDecrementDesiredCapacity !== null) {
    entries["ShouldDecrementDesiredCapacity"] = input.ShouldDecrementDesiredCapacity;
  }
  return entries;
};
const serializeAws_queryTerminationPolicies = (input, context) => {
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
const serializeAws_queryUpdateAutoScalingGroupType = (input, context) => {
  const entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LaunchConfigurationName !== undefined && input.LaunchConfigurationName !== null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.LaunchTemplate !== undefined && input.LaunchTemplate !== null) {
    const memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MixedInstancesPolicy !== undefined && input.MixedInstancesPolicy !== null) {
    const memberEntries = serializeAws_queryMixedInstancesPolicy(input.MixedInstancesPolicy, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MixedInstancesPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MinSize !== undefined && input.MinSize !== null) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.MaxSize !== undefined && input.MaxSize !== null) {
    entries["MaxSize"] = input.MaxSize;
  }
  if (input.DesiredCapacity !== undefined && input.DesiredCapacity !== null) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.DefaultCooldown !== undefined && input.DefaultCooldown !== null) {
    entries["DefaultCooldown"] = input.DefaultCooldown;
  }
  if (input.AvailabilityZones !== undefined && input.AvailabilityZones !== null) {
    const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HealthCheckType !== undefined && input.HealthCheckType !== null) {
    entries["HealthCheckType"] = input.HealthCheckType;
  }
  if (input.HealthCheckGracePeriod !== undefined && input.HealthCheckGracePeriod !== null) {
    entries["HealthCheckGracePeriod"] = input.HealthCheckGracePeriod;
  }
  if (input.PlacementGroup !== undefined && input.PlacementGroup !== null) {
    entries["PlacementGroup"] = input.PlacementGroup;
  }
  if (input.VPCZoneIdentifier !== undefined && input.VPCZoneIdentifier !== null) {
    entries["VPCZoneIdentifier"] = input.VPCZoneIdentifier;
  }
  if (input.TerminationPolicies !== undefined && input.TerminationPolicies !== null) {
    const memberEntries = serializeAws_queryTerminationPolicies(input.TerminationPolicies, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TerminationPolicies.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NewInstancesProtectedFromScaleIn !== undefined && input.NewInstancesProtectedFromScaleIn !== null) {
    entries["NewInstancesProtectedFromScaleIn"] = input.NewInstancesProtectedFromScaleIn;
  }
  if (input.ServiceLinkedRoleARN !== undefined && input.ServiceLinkedRoleARN !== null) {
    entries["ServiceLinkedRoleARN"] = input.ServiceLinkedRoleARN;
  }
  if (input.MaxInstanceLifetime !== undefined && input.MaxInstanceLifetime !== null) {
    entries["MaxInstanceLifetime"] = input.MaxInstanceLifetime;
  }
  if (input.CapacityRebalance !== undefined && input.CapacityRebalance !== null) {
    entries["CapacityRebalance"] = input.CapacityRebalance;
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
const deserializeAws_queryActiveInstanceRefreshNotFoundFault = (output, context) => {
  let contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
const deserializeAws_queryActivities = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryActivity(entry, context);
    });
};
const deserializeAws_queryActivitiesType = (output, context) => {
  let contents = {
    Activities: undefined,
    NextToken: undefined,
  };
  if (output.Activities === "") {
    contents.Activities = [];
  }
  if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = deserializeAws_queryActivities(
      smithy_client_1.getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryActivity = (output, context) => {
  let contents = {
    ActivityId: undefined,
    AutoScalingGroupName: undefined,
    Description: undefined,
    Cause: undefined,
    StartTime: undefined,
    EndTime: undefined,
    StatusCode: undefined,
    StatusMessage: undefined,
    Progress: undefined,
    Details: undefined,
    AutoScalingGroupState: undefined,
    AutoScalingGroupARN: undefined,
  };
  if (output["ActivityId"] !== undefined) {
    contents.ActivityId = output["ActivityId"];
  }
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Cause"] !== undefined) {
    contents.Cause = output["Cause"];
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = new Date(output["StartTime"]);
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = new Date(output["EndTime"]);
  }
  if (output["StatusCode"] !== undefined) {
    contents.StatusCode = output["StatusCode"];
  }
  if (output["StatusMessage"] !== undefined) {
    contents.StatusMessage = output["StatusMessage"];
  }
  if (output["Progress"] !== undefined) {
    contents.Progress = parseInt(output["Progress"]);
  }
  if (output["Details"] !== undefined) {
    contents.Details = output["Details"];
  }
  if (output["AutoScalingGroupState"] !== undefined) {
    contents.AutoScalingGroupState = output["AutoScalingGroupState"];
  }
  if (output["AutoScalingGroupARN"] !== undefined) {
    contents.AutoScalingGroupARN = output["AutoScalingGroupARN"];
  }
  return contents;
};
const deserializeAws_queryActivityType = (output, context) => {
  let contents = {
    Activity: undefined,
  };
  if (output["Activity"] !== undefined) {
    contents.Activity = deserializeAws_queryActivity(output["Activity"], context);
  }
  return contents;
};
const deserializeAws_queryAdjustmentType = (output, context) => {
  let contents = {
    AdjustmentType: undefined,
  };
  if (output["AdjustmentType"] !== undefined) {
    contents.AdjustmentType = output["AdjustmentType"];
  }
  return contents;
};
const deserializeAws_queryAdjustmentTypes = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryAdjustmentType(entry, context);
    });
};
const deserializeAws_queryAlarm = (output, context) => {
  let contents = {
    AlarmName: undefined,
    AlarmARN: undefined,
  };
  if (output["AlarmName"] !== undefined) {
    contents.AlarmName = output["AlarmName"];
  }
  if (output["AlarmARN"] !== undefined) {
    contents.AlarmARN = output["AlarmARN"];
  }
  return contents;
};
const deserializeAws_queryAlarms = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryAlarm(entry, context);
    });
};
const deserializeAws_queryAlreadyExistsFault = (output, context) => {
  let contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
const deserializeAws_queryAttachLoadBalancersResultType = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryAttachLoadBalancerTargetGroupsResultType = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryAutoScalingGroup = (output, context) => {
  let contents = {
    AutoScalingGroupName: undefined,
    AutoScalingGroupARN: undefined,
    LaunchConfigurationName: undefined,
    LaunchTemplate: undefined,
    MixedInstancesPolicy: undefined,
    MinSize: undefined,
    MaxSize: undefined,
    DesiredCapacity: undefined,
    PredictedCapacity: undefined,
    DefaultCooldown: undefined,
    AvailabilityZones: undefined,
    LoadBalancerNames: undefined,
    TargetGroupARNs: undefined,
    HealthCheckType: undefined,
    HealthCheckGracePeriod: undefined,
    Instances: undefined,
    CreatedTime: undefined,
    SuspendedProcesses: undefined,
    PlacementGroup: undefined,
    VPCZoneIdentifier: undefined,
    EnabledMetrics: undefined,
    Status: undefined,
    Tags: undefined,
    TerminationPolicies: undefined,
    NewInstancesProtectedFromScaleIn: undefined,
    ServiceLinkedRoleARN: undefined,
    MaxInstanceLifetime: undefined,
    CapacityRebalance: undefined,
    WarmPoolConfiguration: undefined,
    WarmPoolSize: undefined,
  };
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["AutoScalingGroupARN"] !== undefined) {
    contents.AutoScalingGroupARN = output["AutoScalingGroupARN"];
  }
  if (output["LaunchConfigurationName"] !== undefined) {
    contents.LaunchConfigurationName = output["LaunchConfigurationName"];
  }
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(output["LaunchTemplate"], context);
  }
  if (output["MixedInstancesPolicy"] !== undefined) {
    contents.MixedInstancesPolicy = deserializeAws_queryMixedInstancesPolicy(output["MixedInstancesPolicy"], context);
  }
  if (output["MinSize"] !== undefined) {
    contents.MinSize = parseInt(output["MinSize"]);
  }
  if (output["MaxSize"] !== undefined) {
    contents.MaxSize = parseInt(output["MaxSize"]);
  }
  if (output["DesiredCapacity"] !== undefined) {
    contents.DesiredCapacity = parseInt(output["DesiredCapacity"]);
  }
  if (output["PredictedCapacity"] !== undefined) {
    contents.PredictedCapacity = parseInt(output["PredictedCapacity"]);
  }
  if (output["DefaultCooldown"] !== undefined) {
    contents.DefaultCooldown = parseInt(output["DefaultCooldown"]);
  }
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  }
  if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      smithy_client_1.getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  if (output.LoadBalancerNames === "") {
    contents.LoadBalancerNames = [];
  }
  if (output["LoadBalancerNames"] !== undefined && output["LoadBalancerNames"]["member"] !== undefined) {
    contents.LoadBalancerNames = deserializeAws_queryLoadBalancerNames(
      smithy_client_1.getArrayIfSingleItem(output["LoadBalancerNames"]["member"]),
      context
    );
  }
  if (output.TargetGroupARNs === "") {
    contents.TargetGroupARNs = [];
  }
  if (output["TargetGroupARNs"] !== undefined && output["TargetGroupARNs"]["member"] !== undefined) {
    contents.TargetGroupARNs = deserializeAws_queryTargetGroupARNs(
      smithy_client_1.getArrayIfSingleItem(output["TargetGroupARNs"]["member"]),
      context
    );
  }
  if (output["HealthCheckType"] !== undefined) {
    contents.HealthCheckType = output["HealthCheckType"];
  }
  if (output["HealthCheckGracePeriod"] !== undefined) {
    contents.HealthCheckGracePeriod = parseInt(output["HealthCheckGracePeriod"]);
  }
  if (output.Instances === "") {
    contents.Instances = [];
  }
  if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = deserializeAws_queryInstances(
      smithy_client_1.getArrayIfSingleItem(output["Instances"]["member"]),
      context
    );
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = new Date(output["CreatedTime"]);
  }
  if (output.SuspendedProcesses === "") {
    contents.SuspendedProcesses = [];
  }
  if (output["SuspendedProcesses"] !== undefined && output["SuspendedProcesses"]["member"] !== undefined) {
    contents.SuspendedProcesses = deserializeAws_querySuspendedProcesses(
      smithy_client_1.getArrayIfSingleItem(output["SuspendedProcesses"]["member"]),
      context
    );
  }
  if (output["PlacementGroup"] !== undefined) {
    contents.PlacementGroup = output["PlacementGroup"];
  }
  if (output["VPCZoneIdentifier"] !== undefined) {
    contents.VPCZoneIdentifier = output["VPCZoneIdentifier"];
  }
  if (output.EnabledMetrics === "") {
    contents.EnabledMetrics = [];
  }
  if (output["EnabledMetrics"] !== undefined && output["EnabledMetrics"]["member"] !== undefined) {
    contents.EnabledMetrics = deserializeAws_queryEnabledMetrics(
      smithy_client_1.getArrayIfSingleItem(output["EnabledMetrics"]["member"]),
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagDescriptionList(
      smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]),
      context
    );
  }
  if (output.TerminationPolicies === "") {
    contents.TerminationPolicies = [];
  }
  if (output["TerminationPolicies"] !== undefined && output["TerminationPolicies"]["member"] !== undefined) {
    contents.TerminationPolicies = deserializeAws_queryTerminationPolicies(
      smithy_client_1.getArrayIfSingleItem(output["TerminationPolicies"]["member"]),
      context
    );
  }
  if (output["NewInstancesProtectedFromScaleIn"] !== undefined) {
    contents.NewInstancesProtectedFromScaleIn = output["NewInstancesProtectedFromScaleIn"] == "true";
  }
  if (output["ServiceLinkedRoleARN"] !== undefined) {
    contents.ServiceLinkedRoleARN = output["ServiceLinkedRoleARN"];
  }
  if (output["MaxInstanceLifetime"] !== undefined) {
    contents.MaxInstanceLifetime = parseInt(output["MaxInstanceLifetime"]);
  }
  if (output["CapacityRebalance"] !== undefined) {
    contents.CapacityRebalance = output["CapacityRebalance"] == "true";
  }
  if (output["WarmPoolConfiguration"] !== undefined) {
    contents.WarmPoolConfiguration = deserializeAws_queryWarmPoolConfiguration(
      output["WarmPoolConfiguration"],
      context
    );
  }
  if (output["WarmPoolSize"] !== undefined) {
    contents.WarmPoolSize = parseInt(output["WarmPoolSize"]);
  }
  return contents;
};
const deserializeAws_queryAutoScalingGroups = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryAutoScalingGroup(entry, context);
    });
};
const deserializeAws_queryAutoScalingGroupsType = (output, context) => {
  let contents = {
    AutoScalingGroups: undefined,
    NextToken: undefined,
  };
  if (output.AutoScalingGroups === "") {
    contents.AutoScalingGroups = [];
  }
  if (output["AutoScalingGroups"] !== undefined && output["AutoScalingGroups"]["member"] !== undefined) {
    contents.AutoScalingGroups = deserializeAws_queryAutoScalingGroups(
      smithy_client_1.getArrayIfSingleItem(output["AutoScalingGroups"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryAutoScalingInstanceDetails = (output, context) => {
  let contents = {
    InstanceId: undefined,
    InstanceType: undefined,
    AutoScalingGroupName: undefined,
    AvailabilityZone: undefined,
    LifecycleState: undefined,
    HealthStatus: undefined,
    LaunchConfigurationName: undefined,
    LaunchTemplate: undefined,
    ProtectedFromScaleIn: undefined,
    WeightedCapacity: undefined,
  };
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId = output["InstanceId"];
  }
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = output["InstanceType"];
  }
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = output["AvailabilityZone"];
  }
  if (output["LifecycleState"] !== undefined) {
    contents.LifecycleState = output["LifecycleState"];
  }
  if (output["HealthStatus"] !== undefined) {
    contents.HealthStatus = output["HealthStatus"];
  }
  if (output["LaunchConfigurationName"] !== undefined) {
    contents.LaunchConfigurationName = output["LaunchConfigurationName"];
  }
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(output["LaunchTemplate"], context);
  }
  if (output["ProtectedFromScaleIn"] !== undefined) {
    contents.ProtectedFromScaleIn = output["ProtectedFromScaleIn"] == "true";
  }
  if (output["WeightedCapacity"] !== undefined) {
    contents.WeightedCapacity = output["WeightedCapacity"];
  }
  return contents;
};
const deserializeAws_queryAutoScalingInstances = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryAutoScalingInstanceDetails(entry, context);
    });
};
const deserializeAws_queryAutoScalingInstancesType = (output, context) => {
  let contents = {
    AutoScalingInstances: undefined,
    NextToken: undefined,
  };
  if (output.AutoScalingInstances === "") {
    contents.AutoScalingInstances = [];
  }
  if (output["AutoScalingInstances"] !== undefined && output["AutoScalingInstances"]["member"] !== undefined) {
    contents.AutoScalingInstances = deserializeAws_queryAutoScalingInstances(
      smithy_client_1.getArrayIfSingleItem(output["AutoScalingInstances"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryAutoScalingNotificationTypes = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryAvailabilityZones = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryBatchDeleteScheduledActionAnswer = (output, context) => {
  let contents = {
    FailedScheduledActions: undefined,
  };
  if (output.FailedScheduledActions === "") {
    contents.FailedScheduledActions = [];
  }
  if (output["FailedScheduledActions"] !== undefined && output["FailedScheduledActions"]["member"] !== undefined) {
    contents.FailedScheduledActions = deserializeAws_queryFailedScheduledUpdateGroupActionRequests(
      smithy_client_1.getArrayIfSingleItem(output["FailedScheduledActions"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryBatchPutScheduledUpdateGroupActionAnswer = (output, context) => {
  let contents = {
    FailedScheduledUpdateGroupActions: undefined,
  };
  if (output.FailedScheduledUpdateGroupActions === "") {
    contents.FailedScheduledUpdateGroupActions = [];
  }
  if (
    output["FailedScheduledUpdateGroupActions"] !== undefined &&
    output["FailedScheduledUpdateGroupActions"]["member"] !== undefined
  ) {
    contents.FailedScheduledUpdateGroupActions = deserializeAws_queryFailedScheduledUpdateGroupActionRequests(
      smithy_client_1.getArrayIfSingleItem(output["FailedScheduledUpdateGroupActions"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryBlockDeviceMapping = (output, context) => {
  let contents = {
    VirtualName: undefined,
    DeviceName: undefined,
    Ebs: undefined,
    NoDevice: undefined,
  };
  if (output["VirtualName"] !== undefined) {
    contents.VirtualName = output["VirtualName"];
  }
  if (output["DeviceName"] !== undefined) {
    contents.DeviceName = output["DeviceName"];
  }
  if (output["Ebs"] !== undefined) {
    contents.Ebs = deserializeAws_queryEbs(output["Ebs"], context);
  }
  if (output["NoDevice"] !== undefined) {
    contents.NoDevice = output["NoDevice"] == "true";
  }
  return contents;
};
const deserializeAws_queryBlockDeviceMappings = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryBlockDeviceMapping(entry, context);
    });
};
const deserializeAws_queryCancelInstanceRefreshAnswer = (output, context) => {
  let contents = {
    InstanceRefreshId: undefined,
  };
  if (output["InstanceRefreshId"] !== undefined) {
    contents.InstanceRefreshId = output["InstanceRefreshId"];
  }
  return contents;
};
const deserializeAws_queryCapacityForecast = (output, context) => {
  let contents = {
    Timestamps: undefined,
    Values: undefined,
  };
  if (output.Timestamps === "") {
    contents.Timestamps = [];
  }
  if (output["Timestamps"] !== undefined && output["Timestamps"]["member"] !== undefined) {
    contents.Timestamps = deserializeAws_queryPredictiveScalingForecastTimestamps(
      smithy_client_1.getArrayIfSingleItem(output["Timestamps"]["member"]),
      context
    );
  }
  if (output.Values === "") {
    contents.Values = [];
  }
  if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryPredictiveScalingForecastValues(
      smithy_client_1.getArrayIfSingleItem(output["Values"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryClassicLinkVPCSecurityGroups = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryCompleteLifecycleActionAnswer = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryCustomizedMetricSpecification = (output, context) => {
  let contents = {
    MetricName: undefined,
    Namespace: undefined,
    Dimensions: undefined,
    Statistic: undefined,
    Unit: undefined,
  };
  if (output["MetricName"] !== undefined) {
    contents.MetricName = output["MetricName"];
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = output["Namespace"];
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  }
  if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
    contents.Dimensions = deserializeAws_queryMetricDimensions(
      smithy_client_1.getArrayIfSingleItem(output["Dimensions"]["member"]),
      context
    );
  }
  if (output["Statistic"] !== undefined) {
    contents.Statistic = output["Statistic"];
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = output["Unit"];
  }
  return contents;
};
const deserializeAws_queryDeleteLifecycleHookAnswer = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryDeleteWarmPoolAnswer = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryDescribeAccountLimitsAnswer = (output, context) => {
  let contents = {
    MaxNumberOfAutoScalingGroups: undefined,
    MaxNumberOfLaunchConfigurations: undefined,
    NumberOfAutoScalingGroups: undefined,
    NumberOfLaunchConfigurations: undefined,
  };
  if (output["MaxNumberOfAutoScalingGroups"] !== undefined) {
    contents.MaxNumberOfAutoScalingGroups = parseInt(output["MaxNumberOfAutoScalingGroups"]);
  }
  if (output["MaxNumberOfLaunchConfigurations"] !== undefined) {
    contents.MaxNumberOfLaunchConfigurations = parseInt(output["MaxNumberOfLaunchConfigurations"]);
  }
  if (output["NumberOfAutoScalingGroups"] !== undefined) {
    contents.NumberOfAutoScalingGroups = parseInt(output["NumberOfAutoScalingGroups"]);
  }
  if (output["NumberOfLaunchConfigurations"] !== undefined) {
    contents.NumberOfLaunchConfigurations = parseInt(output["NumberOfLaunchConfigurations"]);
  }
  return contents;
};
const deserializeAws_queryDescribeAdjustmentTypesAnswer = (output, context) => {
  let contents = {
    AdjustmentTypes: undefined,
  };
  if (output.AdjustmentTypes === "") {
    contents.AdjustmentTypes = [];
  }
  if (output["AdjustmentTypes"] !== undefined && output["AdjustmentTypes"]["member"] !== undefined) {
    contents.AdjustmentTypes = deserializeAws_queryAdjustmentTypes(
      smithy_client_1.getArrayIfSingleItem(output["AdjustmentTypes"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryDescribeAutoScalingNotificationTypesAnswer = (output, context) => {
  let contents = {
    AutoScalingNotificationTypes: undefined,
  };
  if (output.AutoScalingNotificationTypes === "") {
    contents.AutoScalingNotificationTypes = [];
  }
  if (
    output["AutoScalingNotificationTypes"] !== undefined &&
    output["AutoScalingNotificationTypes"]["member"] !== undefined
  ) {
    contents.AutoScalingNotificationTypes = deserializeAws_queryAutoScalingNotificationTypes(
      smithy_client_1.getArrayIfSingleItem(output["AutoScalingNotificationTypes"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryDescribeInstanceRefreshesAnswer = (output, context) => {
  let contents = {
    InstanceRefreshes: undefined,
    NextToken: undefined,
  };
  if (output.InstanceRefreshes === "") {
    contents.InstanceRefreshes = [];
  }
  if (output["InstanceRefreshes"] !== undefined && output["InstanceRefreshes"]["member"] !== undefined) {
    contents.InstanceRefreshes = deserializeAws_queryInstanceRefreshes(
      smithy_client_1.getArrayIfSingleItem(output["InstanceRefreshes"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryDescribeLifecycleHooksAnswer = (output, context) => {
  let contents = {
    LifecycleHooks: undefined,
  };
  if (output.LifecycleHooks === "") {
    contents.LifecycleHooks = [];
  }
  if (output["LifecycleHooks"] !== undefined && output["LifecycleHooks"]["member"] !== undefined) {
    contents.LifecycleHooks = deserializeAws_queryLifecycleHooks(
      smithy_client_1.getArrayIfSingleItem(output["LifecycleHooks"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryDescribeLifecycleHookTypesAnswer = (output, context) => {
  let contents = {
    LifecycleHookTypes: undefined,
  };
  if (output.LifecycleHookTypes === "") {
    contents.LifecycleHookTypes = [];
  }
  if (output["LifecycleHookTypes"] !== undefined && output["LifecycleHookTypes"]["member"] !== undefined) {
    contents.LifecycleHookTypes = deserializeAws_queryAutoScalingNotificationTypes(
      smithy_client_1.getArrayIfSingleItem(output["LifecycleHookTypes"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryDescribeLoadBalancersResponse = (output, context) => {
  let contents = {
    LoadBalancers: undefined,
    NextToken: undefined,
  };
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  }
  if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
    contents.LoadBalancers = deserializeAws_queryLoadBalancerStates(
      smithy_client_1.getArrayIfSingleItem(output["LoadBalancers"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryDescribeLoadBalancerTargetGroupsResponse = (output, context) => {
  let contents = {
    LoadBalancerTargetGroups: undefined,
    NextToken: undefined,
  };
  if (output.LoadBalancerTargetGroups === "") {
    contents.LoadBalancerTargetGroups = [];
  }
  if (output["LoadBalancerTargetGroups"] !== undefined && output["LoadBalancerTargetGroups"]["member"] !== undefined) {
    contents.LoadBalancerTargetGroups = deserializeAws_queryLoadBalancerTargetGroupStates(
      smithy_client_1.getArrayIfSingleItem(output["LoadBalancerTargetGroups"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryDescribeMetricCollectionTypesAnswer = (output, context) => {
  let contents = {
    Metrics: undefined,
    Granularities: undefined,
  };
  if (output.Metrics === "") {
    contents.Metrics = [];
  }
  if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
    contents.Metrics = deserializeAws_queryMetricCollectionTypes(
      smithy_client_1.getArrayIfSingleItem(output["Metrics"]["member"]),
      context
    );
  }
  if (output.Granularities === "") {
    contents.Granularities = [];
  }
  if (output["Granularities"] !== undefined && output["Granularities"]["member"] !== undefined) {
    contents.Granularities = deserializeAws_queryMetricGranularityTypes(
      smithy_client_1.getArrayIfSingleItem(output["Granularities"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryDescribeNotificationConfigurationsAnswer = (output, context) => {
  let contents = {
    NotificationConfigurations: undefined,
    NextToken: undefined,
  };
  if (output.NotificationConfigurations === "") {
    contents.NotificationConfigurations = [];
  }
  if (
    output["NotificationConfigurations"] !== undefined &&
    output["NotificationConfigurations"]["member"] !== undefined
  ) {
    contents.NotificationConfigurations = deserializeAws_queryNotificationConfigurations(
      smithy_client_1.getArrayIfSingleItem(output["NotificationConfigurations"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryDescribeTerminationPolicyTypesAnswer = (output, context) => {
  let contents = {
    TerminationPolicyTypes: undefined,
  };
  if (output.TerminationPolicyTypes === "") {
    contents.TerminationPolicyTypes = [];
  }
  if (output["TerminationPolicyTypes"] !== undefined && output["TerminationPolicyTypes"]["member"] !== undefined) {
    contents.TerminationPolicyTypes = deserializeAws_queryTerminationPolicies(
      smithy_client_1.getArrayIfSingleItem(output["TerminationPolicyTypes"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryDescribeWarmPoolAnswer = (output, context) => {
  let contents = {
    WarmPoolConfiguration: undefined,
    Instances: undefined,
    NextToken: undefined,
  };
  if (output["WarmPoolConfiguration"] !== undefined) {
    contents.WarmPoolConfiguration = deserializeAws_queryWarmPoolConfiguration(
      output["WarmPoolConfiguration"],
      context
    );
  }
  if (output.Instances === "") {
    contents.Instances = [];
  }
  if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = deserializeAws_queryInstances(
      smithy_client_1.getArrayIfSingleItem(output["Instances"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryDetachInstancesAnswer = (output, context) => {
  let contents = {
    Activities: undefined,
  };
  if (output.Activities === "") {
    contents.Activities = [];
  }
  if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = deserializeAws_queryActivities(
      smithy_client_1.getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryDetachLoadBalancersResultType = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryDetachLoadBalancerTargetGroupsResultType = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryEbs = (output, context) => {
  let contents = {
    SnapshotId: undefined,
    VolumeSize: undefined,
    VolumeType: undefined,
    DeleteOnTermination: undefined,
    Iops: undefined,
    Encrypted: undefined,
    Throughput: undefined,
  };
  if (output["SnapshotId"] !== undefined) {
    contents.SnapshotId = output["SnapshotId"];
  }
  if (output["VolumeSize"] !== undefined) {
    contents.VolumeSize = parseInt(output["VolumeSize"]);
  }
  if (output["VolumeType"] !== undefined) {
    contents.VolumeType = output["VolumeType"];
  }
  if (output["DeleteOnTermination"] !== undefined) {
    contents.DeleteOnTermination = output["DeleteOnTermination"] == "true";
  }
  if (output["Iops"] !== undefined) {
    contents.Iops = parseInt(output["Iops"]);
  }
  if (output["Encrypted"] !== undefined) {
    contents.Encrypted = output["Encrypted"] == "true";
  }
  if (output["Throughput"] !== undefined) {
    contents.Throughput = parseInt(output["Throughput"]);
  }
  return contents;
};
const deserializeAws_queryEnabledMetric = (output, context) => {
  let contents = {
    Metric: undefined,
    Granularity: undefined,
  };
  if (output["Metric"] !== undefined) {
    contents.Metric = output["Metric"];
  }
  if (output["Granularity"] !== undefined) {
    contents.Granularity = output["Granularity"];
  }
  return contents;
};
const deserializeAws_queryEnabledMetrics = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryEnabledMetric(entry, context);
    });
};
const deserializeAws_queryEnterStandbyAnswer = (output, context) => {
  let contents = {
    Activities: undefined,
  };
  if (output.Activities === "") {
    contents.Activities = [];
  }
  if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = deserializeAws_queryActivities(
      smithy_client_1.getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryExitStandbyAnswer = (output, context) => {
  let contents = {
    Activities: undefined,
  };
  if (output.Activities === "") {
    contents.Activities = [];
  }
  if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = deserializeAws_queryActivities(
      smithy_client_1.getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryFailedScheduledUpdateGroupActionRequest = (output, context) => {
  let contents = {
    ScheduledActionName: undefined,
    ErrorCode: undefined,
    ErrorMessage: undefined,
  };
  if (output["ScheduledActionName"] !== undefined) {
    contents.ScheduledActionName = output["ScheduledActionName"];
  }
  if (output["ErrorCode"] !== undefined) {
    contents.ErrorCode = output["ErrorCode"];
  }
  if (output["ErrorMessage"] !== undefined) {
    contents.ErrorMessage = output["ErrorMessage"];
  }
  return contents;
};
const deserializeAws_queryFailedScheduledUpdateGroupActionRequests = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryFailedScheduledUpdateGroupActionRequest(entry, context);
    });
};
const deserializeAws_queryGetPredictiveScalingForecastAnswer = (output, context) => {
  let contents = {
    LoadForecast: undefined,
    CapacityForecast: undefined,
    UpdateTime: undefined,
  };
  if (output.LoadForecast === "") {
    contents.LoadForecast = [];
  }
  if (output["LoadForecast"] !== undefined && output["LoadForecast"]["member"] !== undefined) {
    contents.LoadForecast = deserializeAws_queryLoadForecasts(
      smithy_client_1.getArrayIfSingleItem(output["LoadForecast"]["member"]),
      context
    );
  }
  if (output["CapacityForecast"] !== undefined) {
    contents.CapacityForecast = deserializeAws_queryCapacityForecast(output["CapacityForecast"], context);
  }
  if (output["UpdateTime"] !== undefined) {
    contents.UpdateTime = new Date(output["UpdateTime"]);
  }
  return contents;
};
const deserializeAws_queryInstance = (output, context) => {
  let contents = {
    InstanceId: undefined,
    InstanceType: undefined,
    AvailabilityZone: undefined,
    LifecycleState: undefined,
    HealthStatus: undefined,
    LaunchConfigurationName: undefined,
    LaunchTemplate: undefined,
    ProtectedFromScaleIn: undefined,
    WeightedCapacity: undefined,
  };
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId = output["InstanceId"];
  }
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = output["InstanceType"];
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = output["AvailabilityZone"];
  }
  if (output["LifecycleState"] !== undefined) {
    contents.LifecycleState = output["LifecycleState"];
  }
  if (output["HealthStatus"] !== undefined) {
    contents.HealthStatus = output["HealthStatus"];
  }
  if (output["LaunchConfigurationName"] !== undefined) {
    contents.LaunchConfigurationName = output["LaunchConfigurationName"];
  }
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(output["LaunchTemplate"], context);
  }
  if (output["ProtectedFromScaleIn"] !== undefined) {
    contents.ProtectedFromScaleIn = output["ProtectedFromScaleIn"] == "true";
  }
  if (output["WeightedCapacity"] !== undefined) {
    contents.WeightedCapacity = output["WeightedCapacity"];
  }
  return contents;
};
const deserializeAws_queryInstanceMetadataOptions = (output, context) => {
  let contents = {
    HttpTokens: undefined,
    HttpPutResponseHopLimit: undefined,
    HttpEndpoint: undefined,
  };
  if (output["HttpTokens"] !== undefined) {
    contents.HttpTokens = output["HttpTokens"];
  }
  if (output["HttpPutResponseHopLimit"] !== undefined) {
    contents.HttpPutResponseHopLimit = parseInt(output["HttpPutResponseHopLimit"]);
  }
  if (output["HttpEndpoint"] !== undefined) {
    contents.HttpEndpoint = output["HttpEndpoint"];
  }
  return contents;
};
const deserializeAws_queryInstanceMonitoring = (output, context) => {
  let contents = {
    Enabled: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  return contents;
};
const deserializeAws_queryInstanceRefresh = (output, context) => {
  let contents = {
    InstanceRefreshId: undefined,
    AutoScalingGroupName: undefined,
    Status: undefined,
    StatusReason: undefined,
    StartTime: undefined,
    EndTime: undefined,
    PercentageComplete: undefined,
    InstancesToUpdate: undefined,
    ProgressDetails: undefined,
  };
  if (output["InstanceRefreshId"] !== undefined) {
    contents.InstanceRefreshId = output["InstanceRefreshId"];
  }
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = output["StatusReason"];
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = new Date(output["StartTime"]);
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = new Date(output["EndTime"]);
  }
  if (output["PercentageComplete"] !== undefined) {
    contents.PercentageComplete = parseInt(output["PercentageComplete"]);
  }
  if (output["InstancesToUpdate"] !== undefined) {
    contents.InstancesToUpdate = parseInt(output["InstancesToUpdate"]);
  }
  if (output["ProgressDetails"] !== undefined) {
    contents.ProgressDetails = deserializeAws_queryInstanceRefreshProgressDetails(output["ProgressDetails"], context);
  }
  return contents;
};
const deserializeAws_queryInstanceRefreshes = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryInstanceRefresh(entry, context);
    });
};
const deserializeAws_queryInstanceRefreshInProgressFault = (output, context) => {
  let contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
const deserializeAws_queryInstanceRefreshLivePoolProgress = (output, context) => {
  let contents = {
    PercentageComplete: undefined,
    InstancesToUpdate: undefined,
  };
  if (output["PercentageComplete"] !== undefined) {
    contents.PercentageComplete = parseInt(output["PercentageComplete"]);
  }
  if (output["InstancesToUpdate"] !== undefined) {
    contents.InstancesToUpdate = parseInt(output["InstancesToUpdate"]);
  }
  return contents;
};
const deserializeAws_queryInstanceRefreshProgressDetails = (output, context) => {
  let contents = {
    LivePoolProgress: undefined,
    WarmPoolProgress: undefined,
  };
  if (output["LivePoolProgress"] !== undefined) {
    contents.LivePoolProgress = deserializeAws_queryInstanceRefreshLivePoolProgress(
      output["LivePoolProgress"],
      context
    );
  }
  if (output["WarmPoolProgress"] !== undefined) {
    contents.WarmPoolProgress = deserializeAws_queryInstanceRefreshWarmPoolProgress(
      output["WarmPoolProgress"],
      context
    );
  }
  return contents;
};
const deserializeAws_queryInstanceRefreshWarmPoolProgress = (output, context) => {
  let contents = {
    PercentageComplete: undefined,
    InstancesToUpdate: undefined,
  };
  if (output["PercentageComplete"] !== undefined) {
    contents.PercentageComplete = parseInt(output["PercentageComplete"]);
  }
  if (output["InstancesToUpdate"] !== undefined) {
    contents.InstancesToUpdate = parseInt(output["InstancesToUpdate"]);
  }
  return contents;
};
const deserializeAws_queryInstances = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryInstance(entry, context);
    });
};
const deserializeAws_queryInstancesDistribution = (output, context) => {
  let contents = {
    OnDemandAllocationStrategy: undefined,
    OnDemandBaseCapacity: undefined,
    OnDemandPercentageAboveBaseCapacity: undefined,
    SpotAllocationStrategy: undefined,
    SpotInstancePools: undefined,
    SpotMaxPrice: undefined,
  };
  if (output["OnDemandAllocationStrategy"] !== undefined) {
    contents.OnDemandAllocationStrategy = output["OnDemandAllocationStrategy"];
  }
  if (output["OnDemandBaseCapacity"] !== undefined) {
    contents.OnDemandBaseCapacity = parseInt(output["OnDemandBaseCapacity"]);
  }
  if (output["OnDemandPercentageAboveBaseCapacity"] !== undefined) {
    contents.OnDemandPercentageAboveBaseCapacity = parseInt(output["OnDemandPercentageAboveBaseCapacity"]);
  }
  if (output["SpotAllocationStrategy"] !== undefined) {
    contents.SpotAllocationStrategy = output["SpotAllocationStrategy"];
  }
  if (output["SpotInstancePools"] !== undefined) {
    contents.SpotInstancePools = parseInt(output["SpotInstancePools"]);
  }
  if (output["SpotMaxPrice"] !== undefined) {
    contents.SpotMaxPrice = output["SpotMaxPrice"];
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
const deserializeAws_queryLaunchConfiguration = (output, context) => {
  let contents = {
    LaunchConfigurationName: undefined,
    LaunchConfigurationARN: undefined,
    ImageId: undefined,
    KeyName: undefined,
    SecurityGroups: undefined,
    ClassicLinkVPCId: undefined,
    ClassicLinkVPCSecurityGroups: undefined,
    UserData: undefined,
    InstanceType: undefined,
    KernelId: undefined,
    RamdiskId: undefined,
    BlockDeviceMappings: undefined,
    InstanceMonitoring: undefined,
    SpotPrice: undefined,
    IamInstanceProfile: undefined,
    CreatedTime: undefined,
    EbsOptimized: undefined,
    AssociatePublicIpAddress: undefined,
    PlacementTenancy: undefined,
    MetadataOptions: undefined,
  };
  if (output["LaunchConfigurationName"] !== undefined) {
    contents.LaunchConfigurationName = output["LaunchConfigurationName"];
  }
  if (output["LaunchConfigurationARN"] !== undefined) {
    contents.LaunchConfigurationARN = output["LaunchConfigurationARN"];
  }
  if (output["ImageId"] !== undefined) {
    contents.ImageId = output["ImageId"];
  }
  if (output["KeyName"] !== undefined) {
    contents.KeyName = output["KeyName"];
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  }
  if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
    contents.SecurityGroups = deserializeAws_querySecurityGroups(
      smithy_client_1.getArrayIfSingleItem(output["SecurityGroups"]["member"]),
      context
    );
  }
  if (output["ClassicLinkVPCId"] !== undefined) {
    contents.ClassicLinkVPCId = output["ClassicLinkVPCId"];
  }
  if (output.ClassicLinkVPCSecurityGroups === "") {
    contents.ClassicLinkVPCSecurityGroups = [];
  }
  if (
    output["ClassicLinkVPCSecurityGroups"] !== undefined &&
    output["ClassicLinkVPCSecurityGroups"]["member"] !== undefined
  ) {
    contents.ClassicLinkVPCSecurityGroups = deserializeAws_queryClassicLinkVPCSecurityGroups(
      smithy_client_1.getArrayIfSingleItem(output["ClassicLinkVPCSecurityGroups"]["member"]),
      context
    );
  }
  if (output["UserData"] !== undefined) {
    contents.UserData = output["UserData"];
  }
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = output["InstanceType"];
  }
  if (output["KernelId"] !== undefined) {
    contents.KernelId = output["KernelId"];
  }
  if (output["RamdiskId"] !== undefined) {
    contents.RamdiskId = output["RamdiskId"];
  }
  if (output.BlockDeviceMappings === "") {
    contents.BlockDeviceMappings = [];
  }
  if (output["BlockDeviceMappings"] !== undefined && output["BlockDeviceMappings"]["member"] !== undefined) {
    contents.BlockDeviceMappings = deserializeAws_queryBlockDeviceMappings(
      smithy_client_1.getArrayIfSingleItem(output["BlockDeviceMappings"]["member"]),
      context
    );
  }
  if (output["InstanceMonitoring"] !== undefined) {
    contents.InstanceMonitoring = deserializeAws_queryInstanceMonitoring(output["InstanceMonitoring"], context);
  }
  if (output["SpotPrice"] !== undefined) {
    contents.SpotPrice = output["SpotPrice"];
  }
  if (output["IamInstanceProfile"] !== undefined) {
    contents.IamInstanceProfile = output["IamInstanceProfile"];
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = new Date(output["CreatedTime"]);
  }
  if (output["EbsOptimized"] !== undefined) {
    contents.EbsOptimized = output["EbsOptimized"] == "true";
  }
  if (output["AssociatePublicIpAddress"] !== undefined) {
    contents.AssociatePublicIpAddress = output["AssociatePublicIpAddress"] == "true";
  }
  if (output["PlacementTenancy"] !== undefined) {
    contents.PlacementTenancy = output["PlacementTenancy"];
  }
  if (output["MetadataOptions"] !== undefined) {
    contents.MetadataOptions = deserializeAws_queryInstanceMetadataOptions(output["MetadataOptions"], context);
  }
  return contents;
};
const deserializeAws_queryLaunchConfigurations = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryLaunchConfiguration(entry, context);
    });
};
const deserializeAws_queryLaunchConfigurationsType = (output, context) => {
  let contents = {
    LaunchConfigurations: undefined,
    NextToken: undefined,
  };
  if (output.LaunchConfigurations === "") {
    contents.LaunchConfigurations = [];
  }
  if (output["LaunchConfigurations"] !== undefined && output["LaunchConfigurations"]["member"] !== undefined) {
    contents.LaunchConfigurations = deserializeAws_queryLaunchConfigurations(
      smithy_client_1.getArrayIfSingleItem(output["LaunchConfigurations"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryLaunchTemplate = (output, context) => {
  let contents = {
    LaunchTemplateSpecification: undefined,
    Overrides: undefined,
  };
  if (output["LaunchTemplateSpecification"] !== undefined) {
    contents.LaunchTemplateSpecification = deserializeAws_queryLaunchTemplateSpecification(
      output["LaunchTemplateSpecification"],
      context
    );
  }
  if (output.Overrides === "") {
    contents.Overrides = [];
  }
  if (output["Overrides"] !== undefined && output["Overrides"]["member"] !== undefined) {
    contents.Overrides = deserializeAws_queryOverrides(
      smithy_client_1.getArrayIfSingleItem(output["Overrides"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryLaunchTemplateOverrides = (output, context) => {
  let contents = {
    InstanceType: undefined,
    WeightedCapacity: undefined,
    LaunchTemplateSpecification: undefined,
  };
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = output["InstanceType"];
  }
  if (output["WeightedCapacity"] !== undefined) {
    contents.WeightedCapacity = output["WeightedCapacity"];
  }
  if (output["LaunchTemplateSpecification"] !== undefined) {
    contents.LaunchTemplateSpecification = deserializeAws_queryLaunchTemplateSpecification(
      output["LaunchTemplateSpecification"],
      context
    );
  }
  return contents;
};
const deserializeAws_queryLaunchTemplateSpecification = (output, context) => {
  let contents = {
    LaunchTemplateId: undefined,
    LaunchTemplateName: undefined,
    Version: undefined,
  };
  if (output["LaunchTemplateId"] !== undefined) {
    contents.LaunchTemplateId = output["LaunchTemplateId"];
  }
  if (output["LaunchTemplateName"] !== undefined) {
    contents.LaunchTemplateName = output["LaunchTemplateName"];
  }
  if (output["Version"] !== undefined) {
    contents.Version = output["Version"];
  }
  return contents;
};
const deserializeAws_queryLifecycleHook = (output, context) => {
  let contents = {
    LifecycleHookName: undefined,
    AutoScalingGroupName: undefined,
    LifecycleTransition: undefined,
    NotificationTargetARN: undefined,
    RoleARN: undefined,
    NotificationMetadata: undefined,
    HeartbeatTimeout: undefined,
    GlobalTimeout: undefined,
    DefaultResult: undefined,
  };
  if (output["LifecycleHookName"] !== undefined) {
    contents.LifecycleHookName = output["LifecycleHookName"];
  }
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["LifecycleTransition"] !== undefined) {
    contents.LifecycleTransition = output["LifecycleTransition"];
  }
  if (output["NotificationTargetARN"] !== undefined) {
    contents.NotificationTargetARN = output["NotificationTargetARN"];
  }
  if (output["RoleARN"] !== undefined) {
    contents.RoleARN = output["RoleARN"];
  }
  if (output["NotificationMetadata"] !== undefined) {
    contents.NotificationMetadata = output["NotificationMetadata"];
  }
  if (output["HeartbeatTimeout"] !== undefined) {
    contents.HeartbeatTimeout = parseInt(output["HeartbeatTimeout"]);
  }
  if (output["GlobalTimeout"] !== undefined) {
    contents.GlobalTimeout = parseInt(output["GlobalTimeout"]);
  }
  if (output["DefaultResult"] !== undefined) {
    contents.DefaultResult = output["DefaultResult"];
  }
  return contents;
};
const deserializeAws_queryLifecycleHooks = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryLifecycleHook(entry, context);
    });
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
const deserializeAws_queryLoadBalancerNames = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryLoadBalancerState = (output, context) => {
  let contents = {
    LoadBalancerName: undefined,
    State: undefined,
  };
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = output["LoadBalancerName"];
  }
  if (output["State"] !== undefined) {
    contents.State = output["State"];
  }
  return contents;
};
const deserializeAws_queryLoadBalancerStates = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryLoadBalancerState(entry, context);
    });
};
const deserializeAws_queryLoadBalancerTargetGroupState = (output, context) => {
  let contents = {
    LoadBalancerTargetGroupARN: undefined,
    State: undefined,
  };
  if (output["LoadBalancerTargetGroupARN"] !== undefined) {
    contents.LoadBalancerTargetGroupARN = output["LoadBalancerTargetGroupARN"];
  }
  if (output["State"] !== undefined) {
    contents.State = output["State"];
  }
  return contents;
};
const deserializeAws_queryLoadBalancerTargetGroupStates = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryLoadBalancerTargetGroupState(entry, context);
    });
};
const deserializeAws_queryLoadForecast = (output, context) => {
  let contents = {
    Timestamps: undefined,
    Values: undefined,
    MetricSpecification: undefined,
  };
  if (output.Timestamps === "") {
    contents.Timestamps = [];
  }
  if (output["Timestamps"] !== undefined && output["Timestamps"]["member"] !== undefined) {
    contents.Timestamps = deserializeAws_queryPredictiveScalingForecastTimestamps(
      smithy_client_1.getArrayIfSingleItem(output["Timestamps"]["member"]),
      context
    );
  }
  if (output.Values === "") {
    contents.Values = [];
  }
  if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryPredictiveScalingForecastValues(
      smithy_client_1.getArrayIfSingleItem(output["Values"]["member"]),
      context
    );
  }
  if (output["MetricSpecification"] !== undefined) {
    contents.MetricSpecification = deserializeAws_queryPredictiveScalingMetricSpecification(
      output["MetricSpecification"],
      context
    );
  }
  return contents;
};
const deserializeAws_queryLoadForecasts = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryLoadForecast(entry, context);
    });
};
const deserializeAws_queryMetricCollectionType = (output, context) => {
  let contents = {
    Metric: undefined,
  };
  if (output["Metric"] !== undefined) {
    contents.Metric = output["Metric"];
  }
  return contents;
};
const deserializeAws_queryMetricCollectionTypes = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryMetricCollectionType(entry, context);
    });
};
const deserializeAws_queryMetricDimension = (output, context) => {
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
const deserializeAws_queryMetricDimensions = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryMetricDimension(entry, context);
    });
};
const deserializeAws_queryMetricGranularityType = (output, context) => {
  let contents = {
    Granularity: undefined,
  };
  if (output["Granularity"] !== undefined) {
    contents.Granularity = output["Granularity"];
  }
  return contents;
};
const deserializeAws_queryMetricGranularityTypes = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryMetricGranularityType(entry, context);
    });
};
const deserializeAws_queryMixedInstancesPolicy = (output, context) => {
  let contents = {
    LaunchTemplate: undefined,
    InstancesDistribution: undefined,
  };
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplate(output["LaunchTemplate"], context);
  }
  if (output["InstancesDistribution"] !== undefined) {
    contents.InstancesDistribution = deserializeAws_queryInstancesDistribution(
      output["InstancesDistribution"],
      context
    );
  }
  return contents;
};
const deserializeAws_queryNotificationConfiguration = (output, context) => {
  let contents = {
    AutoScalingGroupName: undefined,
    TopicARN: undefined,
    NotificationType: undefined,
  };
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["TopicARN"] !== undefined) {
    contents.TopicARN = output["TopicARN"];
  }
  if (output["NotificationType"] !== undefined) {
    contents.NotificationType = output["NotificationType"];
  }
  return contents;
};
const deserializeAws_queryNotificationConfigurations = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryNotificationConfiguration(entry, context);
    });
};
const deserializeAws_queryOverrides = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryLaunchTemplateOverrides(entry, context);
    });
};
const deserializeAws_queryPoliciesType = (output, context) => {
  let contents = {
    ScalingPolicies: undefined,
    NextToken: undefined,
  };
  if (output.ScalingPolicies === "") {
    contents.ScalingPolicies = [];
  }
  if (output["ScalingPolicies"] !== undefined && output["ScalingPolicies"]["member"] !== undefined) {
    contents.ScalingPolicies = deserializeAws_queryScalingPolicies(
      smithy_client_1.getArrayIfSingleItem(output["ScalingPolicies"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryPolicyARNType = (output, context) => {
  let contents = {
    PolicyARN: undefined,
    Alarms: undefined,
  };
  if (output["PolicyARN"] !== undefined) {
    contents.PolicyARN = output["PolicyARN"];
  }
  if (output.Alarms === "") {
    contents.Alarms = [];
  }
  if (output["Alarms"] !== undefined && output["Alarms"]["member"] !== undefined) {
    contents.Alarms = deserializeAws_queryAlarms(
      smithy_client_1.getArrayIfSingleItem(output["Alarms"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryPredefinedMetricSpecification = (output, context) => {
  let contents = {
    PredefinedMetricType: undefined,
    ResourceLabel: undefined,
  };
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = output["PredefinedMetricType"];
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = output["ResourceLabel"];
  }
  return contents;
};
const deserializeAws_queryPredictiveScalingConfiguration = (output, context) => {
  let contents = {
    MetricSpecifications: undefined,
    Mode: undefined,
    SchedulingBufferTime: undefined,
    MaxCapacityBreachBehavior: undefined,
    MaxCapacityBuffer: undefined,
  };
  if (output.MetricSpecifications === "") {
    contents.MetricSpecifications = [];
  }
  if (output["MetricSpecifications"] !== undefined && output["MetricSpecifications"]["member"] !== undefined) {
    contents.MetricSpecifications = deserializeAws_queryPredictiveScalingMetricSpecifications(
      smithy_client_1.getArrayIfSingleItem(output["MetricSpecifications"]["member"]),
      context
    );
  }
  if (output["Mode"] !== undefined) {
    contents.Mode = output["Mode"];
  }
  if (output["SchedulingBufferTime"] !== undefined) {
    contents.SchedulingBufferTime = parseInt(output["SchedulingBufferTime"]);
  }
  if (output["MaxCapacityBreachBehavior"] !== undefined) {
    contents.MaxCapacityBreachBehavior = output["MaxCapacityBreachBehavior"];
  }
  if (output["MaxCapacityBuffer"] !== undefined) {
    contents.MaxCapacityBuffer = parseInt(output["MaxCapacityBuffer"]);
  }
  return contents;
};
const deserializeAws_queryPredictiveScalingForecastTimestamps = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return new Date(entry);
    });
};
const deserializeAws_queryPredictiveScalingForecastValues = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return parseFloat(entry);
    });
};
const deserializeAws_queryPredictiveScalingMetricSpecification = (output, context) => {
  let contents = {
    TargetValue: undefined,
    PredefinedMetricPairSpecification: undefined,
    PredefinedScalingMetricSpecification: undefined,
    PredefinedLoadMetricSpecification: undefined,
  };
  if (output["TargetValue"] !== undefined) {
    contents.TargetValue = parseFloat(output["TargetValue"]);
  }
  if (output["PredefinedMetricPairSpecification"] !== undefined) {
    contents.PredefinedMetricPairSpecification = deserializeAws_queryPredictiveScalingPredefinedMetricPair(
      output["PredefinedMetricPairSpecification"],
      context
    );
  }
  if (output["PredefinedScalingMetricSpecification"] !== undefined) {
    contents.PredefinedScalingMetricSpecification = deserializeAws_queryPredictiveScalingPredefinedScalingMetric(
      output["PredefinedScalingMetricSpecification"],
      context
    );
  }
  if (output["PredefinedLoadMetricSpecification"] !== undefined) {
    contents.PredefinedLoadMetricSpecification = deserializeAws_queryPredictiveScalingPredefinedLoadMetric(
      output["PredefinedLoadMetricSpecification"],
      context
    );
  }
  return contents;
};
const deserializeAws_queryPredictiveScalingMetricSpecifications = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryPredictiveScalingMetricSpecification(entry, context);
    });
};
const deserializeAws_queryPredictiveScalingPredefinedLoadMetric = (output, context) => {
  let contents = {
    PredefinedMetricType: undefined,
    ResourceLabel: undefined,
  };
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = output["PredefinedMetricType"];
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = output["ResourceLabel"];
  }
  return contents;
};
const deserializeAws_queryPredictiveScalingPredefinedMetricPair = (output, context) => {
  let contents = {
    PredefinedMetricType: undefined,
    ResourceLabel: undefined,
  };
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = output["PredefinedMetricType"];
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = output["ResourceLabel"];
  }
  return contents;
};
const deserializeAws_queryPredictiveScalingPredefinedScalingMetric = (output, context) => {
  let contents = {
    PredefinedMetricType: undefined,
    ResourceLabel: undefined,
  };
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = output["PredefinedMetricType"];
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = output["ResourceLabel"];
  }
  return contents;
};
const deserializeAws_queryProcesses = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryProcessType(entry, context);
    });
};
const deserializeAws_queryProcessesType = (output, context) => {
  let contents = {
    Processes: undefined,
  };
  if (output.Processes === "") {
    contents.Processes = [];
  }
  if (output["Processes"] !== undefined && output["Processes"]["member"] !== undefined) {
    contents.Processes = deserializeAws_queryProcesses(
      smithy_client_1.getArrayIfSingleItem(output["Processes"]["member"]),
      context
    );
  }
  return contents;
};
const deserializeAws_queryProcessType = (output, context) => {
  let contents = {
    ProcessName: undefined,
  };
  if (output["ProcessName"] !== undefined) {
    contents.ProcessName = output["ProcessName"];
  }
  return contents;
};
const deserializeAws_queryPutLifecycleHookAnswer = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryPutWarmPoolAnswer = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryRecordLifecycleActionHeartbeatAnswer = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryResourceContentionFault = (output, context) => {
  let contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
const deserializeAws_queryResourceInUseFault = (output, context) => {
  let contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
const deserializeAws_queryScalingActivityInProgressFault = (output, context) => {
  let contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
const deserializeAws_queryScalingPolicies = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryScalingPolicy(entry, context);
    });
};
const deserializeAws_queryScalingPolicy = (output, context) => {
  let contents = {
    AutoScalingGroupName: undefined,
    PolicyName: undefined,
    PolicyARN: undefined,
    PolicyType: undefined,
    AdjustmentType: undefined,
    MinAdjustmentStep: undefined,
    MinAdjustmentMagnitude: undefined,
    ScalingAdjustment: undefined,
    Cooldown: undefined,
    StepAdjustments: undefined,
    MetricAggregationType: undefined,
    EstimatedInstanceWarmup: undefined,
    Alarms: undefined,
    TargetTrackingConfiguration: undefined,
    Enabled: undefined,
    PredictiveScalingConfiguration: undefined,
  };
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = output["PolicyName"];
  }
  if (output["PolicyARN"] !== undefined) {
    contents.PolicyARN = output["PolicyARN"];
  }
  if (output["PolicyType"] !== undefined) {
    contents.PolicyType = output["PolicyType"];
  }
  if (output["AdjustmentType"] !== undefined) {
    contents.AdjustmentType = output["AdjustmentType"];
  }
  if (output["MinAdjustmentStep"] !== undefined) {
    contents.MinAdjustmentStep = parseInt(output["MinAdjustmentStep"]);
  }
  if (output["MinAdjustmentMagnitude"] !== undefined) {
    contents.MinAdjustmentMagnitude = parseInt(output["MinAdjustmentMagnitude"]);
  }
  if (output["ScalingAdjustment"] !== undefined) {
    contents.ScalingAdjustment = parseInt(output["ScalingAdjustment"]);
  }
  if (output["Cooldown"] !== undefined) {
    contents.Cooldown = parseInt(output["Cooldown"]);
  }
  if (output.StepAdjustments === "") {
    contents.StepAdjustments = [];
  }
  if (output["StepAdjustments"] !== undefined && output["StepAdjustments"]["member"] !== undefined) {
    contents.StepAdjustments = deserializeAws_queryStepAdjustments(
      smithy_client_1.getArrayIfSingleItem(output["StepAdjustments"]["member"]),
      context
    );
  }
  if (output["MetricAggregationType"] !== undefined) {
    contents.MetricAggregationType = output["MetricAggregationType"];
  }
  if (output["EstimatedInstanceWarmup"] !== undefined) {
    contents.EstimatedInstanceWarmup = parseInt(output["EstimatedInstanceWarmup"]);
  }
  if (output.Alarms === "") {
    contents.Alarms = [];
  }
  if (output["Alarms"] !== undefined && output["Alarms"]["member"] !== undefined) {
    contents.Alarms = deserializeAws_queryAlarms(
      smithy_client_1.getArrayIfSingleItem(output["Alarms"]["member"]),
      context
    );
  }
  if (output["TargetTrackingConfiguration"] !== undefined) {
    contents.TargetTrackingConfiguration = deserializeAws_queryTargetTrackingConfiguration(
      output["TargetTrackingConfiguration"],
      context
    );
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["PredictiveScalingConfiguration"] !== undefined) {
    contents.PredictiveScalingConfiguration = deserializeAws_queryPredictiveScalingConfiguration(
      output["PredictiveScalingConfiguration"],
      context
    );
  }
  return contents;
};
const deserializeAws_queryScheduledActionsType = (output, context) => {
  let contents = {
    ScheduledUpdateGroupActions: undefined,
    NextToken: undefined,
  };
  if (output.ScheduledUpdateGroupActions === "") {
    contents.ScheduledUpdateGroupActions = [];
  }
  if (
    output["ScheduledUpdateGroupActions"] !== undefined &&
    output["ScheduledUpdateGroupActions"]["member"] !== undefined
  ) {
    contents.ScheduledUpdateGroupActions = deserializeAws_queryScheduledUpdateGroupActions(
      smithy_client_1.getArrayIfSingleItem(output["ScheduledUpdateGroupActions"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryScheduledUpdateGroupAction = (output, context) => {
  let contents = {
    AutoScalingGroupName: undefined,
    ScheduledActionName: undefined,
    ScheduledActionARN: undefined,
    Time: undefined,
    StartTime: undefined,
    EndTime: undefined,
    Recurrence: undefined,
    MinSize: undefined,
    MaxSize: undefined,
    DesiredCapacity: undefined,
    TimeZone: undefined,
  };
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["ScheduledActionName"] !== undefined) {
    contents.ScheduledActionName = output["ScheduledActionName"];
  }
  if (output["ScheduledActionARN"] !== undefined) {
    contents.ScheduledActionARN = output["ScheduledActionARN"];
  }
  if (output["Time"] !== undefined) {
    contents.Time = new Date(output["Time"]);
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = new Date(output["StartTime"]);
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = new Date(output["EndTime"]);
  }
  if (output["Recurrence"] !== undefined) {
    contents.Recurrence = output["Recurrence"];
  }
  if (output["MinSize"] !== undefined) {
    contents.MinSize = parseInt(output["MinSize"]);
  }
  if (output["MaxSize"] !== undefined) {
    contents.MaxSize = parseInt(output["MaxSize"]);
  }
  if (output["DesiredCapacity"] !== undefined) {
    contents.DesiredCapacity = parseInt(output["DesiredCapacity"]);
  }
  if (output["TimeZone"] !== undefined) {
    contents.TimeZone = output["TimeZone"];
  }
  return contents;
};
const deserializeAws_queryScheduledUpdateGroupActions = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryScheduledUpdateGroupAction(entry, context);
    });
};
const deserializeAws_querySecurityGroups = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryServiceLinkedRoleFailure = (output, context) => {
  let contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
const deserializeAws_querySetInstanceProtectionAnswer = (output, context) => {
  let contents = {};
  return contents;
};
const deserializeAws_queryStartInstanceRefreshAnswer = (output, context) => {
  let contents = {
    InstanceRefreshId: undefined,
  };
  if (output["InstanceRefreshId"] !== undefined) {
    contents.InstanceRefreshId = output["InstanceRefreshId"];
  }
  return contents;
};
const deserializeAws_queryStepAdjustment = (output, context) => {
  let contents = {
    MetricIntervalLowerBound: undefined,
    MetricIntervalUpperBound: undefined,
    ScalingAdjustment: undefined,
  };
  if (output["MetricIntervalLowerBound"] !== undefined) {
    contents.MetricIntervalLowerBound = parseFloat(output["MetricIntervalLowerBound"]);
  }
  if (output["MetricIntervalUpperBound"] !== undefined) {
    contents.MetricIntervalUpperBound = parseFloat(output["MetricIntervalUpperBound"]);
  }
  if (output["ScalingAdjustment"] !== undefined) {
    contents.ScalingAdjustment = parseInt(output["ScalingAdjustment"]);
  }
  return contents;
};
const deserializeAws_queryStepAdjustments = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStepAdjustment(entry, context);
    });
};
const deserializeAws_querySuspendedProcess = (output, context) => {
  let contents = {
    ProcessName: undefined,
    SuspensionReason: undefined,
  };
  if (output["ProcessName"] !== undefined) {
    contents.ProcessName = output["ProcessName"];
  }
  if (output["SuspensionReason"] !== undefined) {
    contents.SuspensionReason = output["SuspensionReason"];
  }
  return contents;
};
const deserializeAws_querySuspendedProcesses = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_querySuspendedProcess(entry, context);
    });
};
const deserializeAws_queryTagDescription = (output, context) => {
  let contents = {
    ResourceId: undefined,
    ResourceType: undefined,
    Key: undefined,
    Value: undefined,
    PropagateAtLaunch: undefined,
  };
  if (output["ResourceId"] !== undefined) {
    contents.ResourceId = output["ResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  if (output["PropagateAtLaunch"] !== undefined) {
    contents.PropagateAtLaunch = output["PropagateAtLaunch"] == "true";
  }
  return contents;
};
const deserializeAws_queryTagDescriptionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryTagDescription(entry, context);
    });
};
const deserializeAws_queryTagsType = (output, context) => {
  let contents = {
    Tags: undefined,
    NextToken: undefined,
  };
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagDescriptionList(
      smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
const deserializeAws_queryTargetGroupARNs = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryTargetTrackingConfiguration = (output, context) => {
  let contents = {
    PredefinedMetricSpecification: undefined,
    CustomizedMetricSpecification: undefined,
    TargetValue: undefined,
    DisableScaleIn: undefined,
  };
  if (output["PredefinedMetricSpecification"] !== undefined) {
    contents.PredefinedMetricSpecification = deserializeAws_queryPredefinedMetricSpecification(
      output["PredefinedMetricSpecification"],
      context
    );
  }
  if (output["CustomizedMetricSpecification"] !== undefined) {
    contents.CustomizedMetricSpecification = deserializeAws_queryCustomizedMetricSpecification(
      output["CustomizedMetricSpecification"],
      context
    );
  }
  if (output["TargetValue"] !== undefined) {
    contents.TargetValue = parseFloat(output["TargetValue"]);
  }
  if (output["DisableScaleIn"] !== undefined) {
    contents.DisableScaleIn = output["DisableScaleIn"] == "true";
  }
  return contents;
};
const deserializeAws_queryTerminationPolicies = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_queryWarmPoolConfiguration = (output, context) => {
  let contents = {
    MaxGroupPreparedCapacity: undefined,
    MinSize: undefined,
    PoolState: undefined,
    Status: undefined,
  };
  if (output["MaxGroupPreparedCapacity"] !== undefined) {
    contents.MaxGroupPreparedCapacity = parseInt(output["MaxGroupPreparedCapacity"]);
  }
  if (output["MinSize"] !== undefined) {
    contents.MinSize = parseInt(output["MinSize"]);
  }
  if (output["PoolState"] !== undefined) {
    contents.PoolState = output["PoolState"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
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
