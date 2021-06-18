import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import {
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
} from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_queryAttachInstancesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryAttachInstancesQuery(input, context)), {
          Action: "AttachInstances",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryAttachLoadBalancersCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryAttachLoadBalancersType(input, context)), {
          Action: "AttachLoadBalancers",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryAttachLoadBalancerTargetGroupsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryAttachLoadBalancerTargetGroupsType(input, context)), {
          Action: "AttachLoadBalancerTargetGroups",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryBatchDeleteScheduledActionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryBatchDeleteScheduledActionType(input, context)), {
          Action: "BatchDeleteScheduledAction",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryBatchPutScheduledUpdateGroupActionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryBatchPutScheduledUpdateGroupActionType(input, context)), {
          Action: "BatchPutScheduledUpdateGroupAction",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryCancelInstanceRefreshCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryCancelInstanceRefreshType(input, context)), {
          Action: "CancelInstanceRefresh",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryCompleteLifecycleActionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryCompleteLifecycleActionType(input, context)), {
          Action: "CompleteLifecycleAction",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryCreateAutoScalingGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryCreateAutoScalingGroupType(input, context)), {
          Action: "CreateAutoScalingGroup",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryCreateLaunchConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryCreateLaunchConfigurationType(input, context)), {
          Action: "CreateLaunchConfiguration",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryCreateOrUpdateTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryCreateOrUpdateTagsType(input, context)), {
          Action: "CreateOrUpdateTags",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeleteAutoScalingGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDeleteAutoScalingGroupType(input, context)), {
          Action: "DeleteAutoScalingGroup",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeleteLaunchConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryLaunchConfigurationNameType(input, context)), {
          Action: "DeleteLaunchConfiguration",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeleteLifecycleHookCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDeleteLifecycleHookType(input, context)), {
          Action: "DeleteLifecycleHook",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeleteNotificationConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDeleteNotificationConfigurationType(input, context)), {
          Action: "DeleteNotificationConfiguration",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeletePolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDeletePolicyType(input, context)), {
          Action: "DeletePolicy",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeleteScheduledActionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDeleteScheduledActionType(input, context)), {
          Action: "DeleteScheduledAction",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeleteTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDeleteTagsType(input, context)), {
          Action: "DeleteTags",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDeleteWarmPoolCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDeleteWarmPoolType(input, context)), {
          Action: "DeleteWarmPool",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeAccountLimitsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString({
        Action: "DescribeAccountLimits",
        Version: "2011-01-01",
      });
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeAdjustmentTypesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString({
        Action: "DescribeAdjustmentTypes",
        Version: "2011-01-01",
      });
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeAutoScalingGroupsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryAutoScalingGroupNamesType(input, context)), {
          Action: "DescribeAutoScalingGroups",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeAutoScalingInstancesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeAutoScalingInstancesType(input, context)), {
          Action: "DescribeAutoScalingInstances",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeAutoScalingNotificationTypesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString({
        Action: "DescribeAutoScalingNotificationTypes",
        Version: "2011-01-01",
      });
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeInstanceRefreshesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeInstanceRefreshesType(input, context)), {
          Action: "DescribeInstanceRefreshes",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeLaunchConfigurationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryLaunchConfigurationNamesType(input, context)), {
          Action: "DescribeLaunchConfigurations",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeLifecycleHooksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeLifecycleHooksType(input, context)), {
          Action: "DescribeLifecycleHooks",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeLifecycleHookTypesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString({
        Action: "DescribeLifecycleHookTypes",
        Version: "2011-01-01",
      });
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeLoadBalancersCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeLoadBalancersRequest(input, context)), {
          Action: "DescribeLoadBalancers",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeLoadBalancerTargetGroupsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeLoadBalancerTargetGroupsRequest(input, context)), {
          Action: "DescribeLoadBalancerTargetGroups",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeMetricCollectionTypesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString({
        Action: "DescribeMetricCollectionTypes",
        Version: "2011-01-01",
      });
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeNotificationConfigurationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeNotificationConfigurationsType(input, context)), {
          Action: "DescribeNotificationConfigurations",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribePoliciesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribePoliciesType(input, context)), {
          Action: "DescribePolicies",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeScalingActivitiesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeScalingActivitiesType(input, context)), {
          Action: "DescribeScalingActivities",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeScalingProcessTypesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString({
        Action: "DescribeScalingProcessTypes",
        Version: "2011-01-01",
      });
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeScheduledActionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeScheduledActionsType(input, context)), {
          Action: "DescribeScheduledActions",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeTagsType(input, context)), {
          Action: "DescribeTags",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeTerminationPolicyTypesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString({
        Action: "DescribeTerminationPolicyTypes",
        Version: "2011-01-01",
      });
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDescribeWarmPoolCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDescribeWarmPoolType(input, context)), {
          Action: "DescribeWarmPool",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDetachInstancesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDetachInstancesQuery(input, context)), {
          Action: "DetachInstances",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDetachLoadBalancersCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDetachLoadBalancersType(input, context)), {
          Action: "DetachLoadBalancers",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDetachLoadBalancerTargetGroupsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDetachLoadBalancerTargetGroupsType(input, context)), {
          Action: "DetachLoadBalancerTargetGroups",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryDisableMetricsCollectionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryDisableMetricsCollectionQuery(input, context)), {
          Action: "DisableMetricsCollection",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryEnableMetricsCollectionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryEnableMetricsCollectionQuery(input, context)), {
          Action: "EnableMetricsCollection",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryEnterStandbyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryEnterStandbyQuery(input, context)), {
          Action: "EnterStandby",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryExecutePolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryExecutePolicyType(input, context)), {
          Action: "ExecutePolicy",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryExitStandbyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryExitStandbyQuery(input, context)), {
          Action: "ExitStandby",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryGetPredictiveScalingForecastCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryGetPredictiveScalingForecastType(input, context)), {
          Action: "GetPredictiveScalingForecast",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryPutLifecycleHookCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryPutLifecycleHookType(input, context)), {
          Action: "PutLifecycleHook",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryPutNotificationConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryPutNotificationConfigurationType(input, context)), {
          Action: "PutNotificationConfiguration",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryPutScalingPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryPutScalingPolicyType(input, context)), {
          Action: "PutScalingPolicy",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryPutScheduledUpdateGroupActionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryPutScheduledUpdateGroupActionType(input, context)), {
          Action: "PutScheduledUpdateGroupAction",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryPutWarmPoolCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryPutWarmPoolType(input, context)), {
          Action: "PutWarmPool",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryRecordLifecycleActionHeartbeatCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryRecordLifecycleActionHeartbeatType(input, context)), {
          Action: "RecordLifecycleActionHeartbeat",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryResumeProcessesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryScalingProcessQuery(input, context)), {
          Action: "ResumeProcesses",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_querySetDesiredCapacityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_querySetDesiredCapacityType(input, context)), {
          Action: "SetDesiredCapacity",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_querySetInstanceHealthCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_querySetInstanceHealthQuery(input, context)), {
          Action: "SetInstanceHealth",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_querySetInstanceProtectionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_querySetInstanceProtectionQuery(input, context)), {
          Action: "SetInstanceProtection",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryStartInstanceRefreshCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryStartInstanceRefreshType(input, context)), {
          Action: "StartInstanceRefresh",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_querySuspendProcessesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryScalingProcessQuery(input, context)), {
          Action: "SuspendProcesses",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryTerminateInstanceInAutoScalingGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryTerminateInstanceInAutoScalingGroupType(input, context)), {
          Action: "TerminateInstanceInAutoScalingGroup",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_queryUpdateAutoScalingGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-www-form-urlencoded",
      };
      body = buildFormUrlencodedString(
        __assign(__assign({}, serializeAws_queryUpdateAutoScalingGroupType(input, context)), {
          Action: "UpdateAutoScalingGroup",
          Version: "2011-01-01",
        })
      );
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var deserializeAws_queryAttachInstancesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryAttachInstancesCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryAttachInstancesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ServiceLinkedRoleFailure":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryAttachLoadBalancersCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryAttachLoadBalancersCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryAttachLoadBalancersResultType(data.AttachLoadBalancersResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryAttachLoadBalancersCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ServiceLinkedRoleFailure":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryAttachLoadBalancerTargetGroupsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryAttachLoadBalancerTargetGroupsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryAttachLoadBalancerTargetGroupsResultType(
            data.AttachLoadBalancerTargetGroupsResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryAttachLoadBalancerTargetGroupsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ServiceLinkedRoleFailure":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryBatchDeleteScheduledActionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryBatchDeleteScheduledActionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryBatchDeleteScheduledActionAnswer(
            data.BatchDeleteScheduledActionResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryBatchDeleteScheduledActionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryBatchPutScheduledUpdateGroupActionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryBatchPutScheduledUpdateGroupActionAnswer(
            data.BatchPutScheduledUpdateGroupActionResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryBatchPutScheduledUpdateGroupActionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#AlreadyExistsFault":
              return [3 /*break*/, 2];
            case "LimitExceededFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 4];
            case "ResourceContentionFault":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryCancelInstanceRefreshCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryCancelInstanceRefreshCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryCancelInstanceRefreshAnswer(data.CancelInstanceRefreshResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryCancelInstanceRefreshCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ActiveInstanceRefreshNotFoundFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ActiveInstanceRefreshNotFoundFault":
              return [3 /*break*/, 2];
            case "LimitExceededFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 4];
            case "ResourceContentionFault":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryActiveInstanceRefreshNotFoundFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryCompleteLifecycleActionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryCompleteLifecycleActionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryCompleteLifecycleActionAnswer(data.CompleteLifecycleActionResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryCompleteLifecycleActionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryCreateAutoScalingGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryCreateAutoScalingGroupCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryCreateAutoScalingGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#AlreadyExistsFault":
              return [3 /*break*/, 2];
            case "LimitExceededFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 4];
            case "ResourceContentionFault":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 6];
            case "ServiceLinkedRoleFailure":
              return [3 /*break*/, 8];
            case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryCreateLaunchConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryCreateLaunchConfigurationCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryCreateLaunchConfigurationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#AlreadyExistsFault":
              return [3 /*break*/, 2];
            case "LimitExceededFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 4];
            case "ResourceContentionFault":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryCreateOrUpdateTagsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryCreateOrUpdateTagsCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryCreateOrUpdateTagsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#AlreadyExistsFault":
              return [3 /*break*/, 2];
            case "LimitExceededFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 4];
            case "ResourceContentionFault":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 6];
            case "ResourceInUseFault":
              return [3 /*break*/, 8];
            case "com.amazonaws.autoscaling#ResourceInUseFault":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDeleteAutoScalingGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeleteAutoScalingGroupCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeleteAutoScalingGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ResourceInUseFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceInUseFault":
              return [3 /*break*/, 4];
            case "ScalingActivityInProgressFault":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDeleteLaunchConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeleteLaunchConfigurationCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeleteLaunchConfigurationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ResourceInUseFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceInUseFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDeleteLifecycleHookCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeleteLifecycleHookCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDeleteLifecycleHookAnswer(data.DeleteLifecycleHookResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeleteLifecycleHookCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDeleteNotificationConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeleteNotificationConfigurationCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeleteNotificationConfigurationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDeletePolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeletePolicyCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeletePolicyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ServiceLinkedRoleFailure":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDeleteScheduledActionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeleteScheduledActionCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeleteScheduledActionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDeleteTagsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeleteTagsCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeleteTagsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ResourceInUseFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceInUseFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDeleteWarmPoolCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDeleteWarmPoolCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDeleteWarmPoolAnswer(data.DeleteWarmPoolResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDeleteWarmPoolCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "LimitExceededFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
            case "ResourceInUseFault":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ResourceInUseFault":
              return [3 /*break*/, 6];
            case "ScalingActivityInProgressFault":
              return [3 /*break*/, 8];
            case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeAccountLimitsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeAccountLimitsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeAccountLimitsAnswer(data.DescribeAccountLimitsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeAccountLimitsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeAdjustmentTypesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeAdjustmentTypesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeAdjustmentTypesAnswer(data.DescribeAdjustmentTypesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeAdjustmentTypesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeAutoScalingGroupsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeAutoScalingGroupsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryAutoScalingGroupsType(data.DescribeAutoScalingGroupsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeAutoScalingGroupsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidNextToken":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#InvalidNextToken":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeAutoScalingInstancesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeAutoScalingInstancesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryAutoScalingInstancesType(data.DescribeAutoScalingInstancesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeAutoScalingInstancesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidNextToken":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#InvalidNextToken":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeAutoScalingNotificationTypesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_queryDescribeAutoScalingNotificationTypesCommandError(output, context),
            ];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeAutoScalingNotificationTypesAnswer(
            data.DescribeAutoScalingNotificationTypesResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeAutoScalingNotificationTypesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeInstanceRefreshesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeInstanceRefreshesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeInstanceRefreshesAnswer(data.DescribeInstanceRefreshesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeInstanceRefreshesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidNextToken":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#InvalidNextToken":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeLaunchConfigurationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeLaunchConfigurationsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryLaunchConfigurationsType(data.DescribeLaunchConfigurationsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeLaunchConfigurationsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidNextToken":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#InvalidNextToken":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeLifecycleHooksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeLifecycleHooksCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeLifecycleHooksAnswer(data.DescribeLifecycleHooksResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeLifecycleHooksCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeLifecycleHookTypesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeLifecycleHookTypesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeLifecycleHookTypesAnswer(
            data.DescribeLifecycleHookTypesResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeLifecycleHookTypesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeLoadBalancersCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeLoadBalancersCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeLoadBalancersResponse(data.DescribeLoadBalancersResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeLoadBalancersCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeLoadBalancerTargetGroupsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeLoadBalancerTargetGroupsResponse(
            data.DescribeLoadBalancerTargetGroupsResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeLoadBalancerTargetGroupsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeMetricCollectionTypesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeMetricCollectionTypesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeMetricCollectionTypesAnswer(
            data.DescribeMetricCollectionTypesResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeMetricCollectionTypesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeNotificationConfigurationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeNotificationConfigurationsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeNotificationConfigurationsAnswer(
            data.DescribeNotificationConfigurationsResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeNotificationConfigurationsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidNextToken":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#InvalidNextToken":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribePoliciesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribePoliciesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryPoliciesType(data.DescribePoliciesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribePoliciesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidNextToken":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#InvalidNextToken":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
            case "ServiceLinkedRoleFailure":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeScalingActivitiesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeScalingActivitiesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryActivitiesType(data.DescribeScalingActivitiesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeScalingActivitiesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidNextToken":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#InvalidNextToken":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeScalingProcessTypesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeScalingProcessTypesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryProcessesType(data.DescribeScalingProcessTypesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeScalingProcessTypesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeScheduledActionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeScheduledActionsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryScheduledActionsType(data.DescribeScheduledActionsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeScheduledActionsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidNextToken":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#InvalidNextToken":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeTagsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeTagsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryTagsType(data.DescribeTagsResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeTagsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidNextToken":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#InvalidNextToken":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeTerminationPolicyTypesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeTerminationPolicyTypesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeTerminationPolicyTypesAnswer(
            data.DescribeTerminationPolicyTypesResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeTerminationPolicyTypesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDescribeWarmPoolCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDescribeWarmPoolCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDescribeWarmPoolAnswer(data.DescribeWarmPoolResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDescribeWarmPoolCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidNextToken":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#InvalidNextToken":
              return [3 /*break*/, 2];
            case "LimitExceededFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 4];
            case "ResourceContentionFault":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDetachInstancesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDetachInstancesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDetachInstancesAnswer(data.DetachInstancesResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDetachInstancesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDetachLoadBalancersCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDetachLoadBalancersCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDetachLoadBalancersResultType(data.DetachLoadBalancersResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDetachLoadBalancersCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDetachLoadBalancerTargetGroupsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDetachLoadBalancerTargetGroupsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryDetachLoadBalancerTargetGroupsResultType(
            data.DetachLoadBalancerTargetGroupsResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDetachLoadBalancerTargetGroupsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryDisableMetricsCollectionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryDisableMetricsCollectionCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryDisableMetricsCollectionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryEnableMetricsCollectionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryEnableMetricsCollectionCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryEnableMetricsCollectionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryEnterStandbyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryEnterStandbyCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryEnterStandbyAnswer(data.EnterStandbyResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryEnterStandbyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryExecutePolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryExecutePolicyCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryExecutePolicyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ScalingActivityInProgressFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryExitStandbyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryExitStandbyCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryExitStandbyAnswer(data.ExitStandbyResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryExitStandbyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryGetPredictiveScalingForecastCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryGetPredictiveScalingForecastCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryGetPredictiveScalingForecastAnswer(
            data.GetPredictiveScalingForecastResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryGetPredictiveScalingForecastCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryPutLifecycleHookCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryPutLifecycleHookCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryPutLifecycleHookAnswer(data.PutLifecycleHookResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryPutLifecycleHookCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "LimitExceededFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryPutNotificationConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryPutNotificationConfigurationCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryPutNotificationConfigurationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "LimitExceededFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
            case "ServiceLinkedRoleFailure":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryPutScalingPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryPutScalingPolicyCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryPolicyARNType(data.PutScalingPolicyResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryPutScalingPolicyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "LimitExceededFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
            case "ServiceLinkedRoleFailure":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryPutScheduledUpdateGroupActionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryPutScheduledUpdateGroupActionCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryPutScheduledUpdateGroupActionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#AlreadyExistsFault":
              return [3 /*break*/, 2];
            case "LimitExceededFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 4];
            case "ResourceContentionFault":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryPutWarmPoolCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryPutWarmPoolCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryPutWarmPoolAnswer(data.PutWarmPoolResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryPutWarmPoolCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "LimitExceededFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryRecordLifecycleActionHeartbeatCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryRecordLifecycleActionHeartbeatCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryRecordLifecycleActionHeartbeatAnswer(
            data.RecordLifecycleActionHeartbeatResult,
            context
          );
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryRecordLifecycleActionHeartbeatCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryResumeProcessesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryResumeProcessesCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryResumeProcessesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ResourceInUseFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceInUseFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_querySetDesiredCapacityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_querySetDesiredCapacityCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_querySetDesiredCapacityCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ScalingActivityInProgressFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_querySetInstanceHealthCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_querySetInstanceHealthCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_querySetInstanceHealthCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_querySetInstanceProtectionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_querySetInstanceProtectionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_querySetInstanceProtectionAnswer(data.SetInstanceProtectionResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_querySetInstanceProtectionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "LimitExceededFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 2];
            case "ResourceContentionFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryStartInstanceRefreshCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryStartInstanceRefreshCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryStartInstanceRefreshAnswer(data.StartInstanceRefreshResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryStartInstanceRefreshCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InstanceRefreshInProgressFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#InstanceRefreshInProgressFault":
              return [3 /*break*/, 2];
            case "LimitExceededFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#LimitExceededFault":
              return [3 /*break*/, 4];
            case "ResourceContentionFault":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryInstanceRefreshInProgressFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_querySuspendProcessesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_querySuspendProcessesCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_querySuspendProcessesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ResourceInUseFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ResourceInUseFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryTerminateInstanceInAutoScalingGroupCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_queryActivityType(data.TerminateInstanceInAutoScalingGroupResult, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryTerminateInstanceInAutoScalingGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ScalingActivityInProgressFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_queryUpdateAutoScalingGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_queryUpdateAutoScalingGroupCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_queryUpdateAutoScalingGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadQueryErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceContentionFault":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscaling#ResourceContentionFault":
              return [3 /*break*/, 2];
            case "ScalingActivityInProgressFault":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
              return [3 /*break*/, 4];
            case "ServiceLinkedRoleFailure":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_queryActiveInstanceRefreshNotFoundFaultResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryActiveInstanceRefreshNotFoundFault(body.Error, context);
      contents = __assign(
        { name: "ActiveInstanceRefreshNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryAlreadyExistsFaultResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryAlreadyExistsFault(body.Error, context);
      contents = __assign(
        { name: "AlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryInstanceRefreshInProgressFaultResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryInstanceRefreshInProgressFault(body.Error, context);
      contents = __assign(
        { name: "InstanceRefreshInProgressFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryInvalidNextTokenResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryInvalidNextToken(body.Error, context);
      contents = __assign(
        { name: "InvalidNextToken", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryLimitExceededFaultResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryLimitExceededFault(body.Error, context);
      contents = __assign(
        { name: "LimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryResourceContentionFaultResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryResourceContentionFault(body.Error, context);
      contents = __assign(
        { name: "ResourceContentionFault", $fault: "server", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryResourceInUseFaultResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryResourceInUseFault(body.Error, context);
      contents = __assign(
        { name: "ResourceInUseFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryScalingActivityInProgressFaultResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryScalingActivityInProgressFault(body.Error, context);
      contents = __assign(
        { name: "ScalingActivityInProgressFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_queryServiceLinkedRoleFailureResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_queryServiceLinkedRoleFailure(body.Error, context);
      contents = __assign(
        { name: "ServiceLinkedRoleFailure", $fault: "server", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_queryActivityIds = function (input, context) {
  var e_1, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
      var entry = input_1_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return entries;
};
var serializeAws_queryAttachInstancesQuery = function (input, context) {
  var entries = {};
  if (input.InstanceIds !== undefined && input.InstanceIds !== null) {
    var memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "InstanceIds." + key;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};
var serializeAws_queryAttachLoadBalancersType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
    var memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LoadBalancerNames." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryAttachLoadBalancerTargetGroupsType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TargetGroupARNs !== undefined && input.TargetGroupARNs !== null) {
    var memberEntries = serializeAws_queryTargetGroupARNs(input.TargetGroupARNs, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "TargetGroupARNs." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryAutoScalingGroupNames = function (input, context) {
  var e_2, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_2 = __values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
      var entry = input_2_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_2_1) {
    e_2 = { error: e_2_1 };
  } finally {
    try {
      if (input_2_1 && !input_2_1.done && (_a = input_2.return)) _a.call(input_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }
  return entries;
};
var serializeAws_queryAutoScalingGroupNamesType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupNames !== undefined && input.AutoScalingGroupNames !== null) {
    var memberEntries = serializeAws_queryAutoScalingGroupNames(input.AutoScalingGroupNames, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "AutoScalingGroupNames." + key;
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
var serializeAws_queryAutoScalingNotificationTypes = function (input, context) {
  var e_3, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
      var entry = input_3_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_3_1) {
    e_3 = { error: e_3_1 };
  } finally {
    try {
      if (input_3_1 && !input_3_1.done && (_a = input_3.return)) _a.call(input_3);
    } finally {
      if (e_3) throw e_3.error;
    }
  }
  return entries;
};
var serializeAws_queryAvailabilityZones = function (input, context) {
  var e_4, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_4 = __values(input), input_4_1 = input_4.next(); !input_4_1.done; input_4_1 = input_4.next()) {
      var entry = input_4_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_4_1) {
    e_4 = { error: e_4_1 };
  } finally {
    try {
      if (input_4_1 && !input_4_1.done && (_a = input_4.return)) _a.call(input_4);
    } finally {
      if (e_4) throw e_4.error;
    }
  }
  return entries;
};
var serializeAws_queryBatchDeleteScheduledActionType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionNames !== undefined && input.ScheduledActionNames !== null) {
    var memberEntries = serializeAws_queryScheduledActionNames(input.ScheduledActionNames, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ScheduledActionNames." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryBatchPutScheduledUpdateGroupActionType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledUpdateGroupActions !== undefined && input.ScheduledUpdateGroupActions !== null) {
    var memberEntries = serializeAws_queryScheduledUpdateGroupActionRequests(
      input.ScheduledUpdateGroupActions,
      context
    );
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ScheduledUpdateGroupActions." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryBlockDeviceMapping = function (input, context) {
  var entries = {};
  if (input.VirtualName !== undefined && input.VirtualName !== null) {
    entries["VirtualName"] = input.VirtualName;
  }
  if (input.DeviceName !== undefined && input.DeviceName !== null) {
    entries["DeviceName"] = input.DeviceName;
  }
  if (input.Ebs !== undefined && input.Ebs !== null) {
    var memberEntries = serializeAws_queryEbs(input.Ebs, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Ebs." + key;
      entries[loc] = value;
    });
  }
  if (input.NoDevice !== undefined && input.NoDevice !== null) {
    entries["NoDevice"] = input.NoDevice;
  }
  return entries;
};
var serializeAws_queryBlockDeviceMappings = function (input, context) {
  var e_5, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_5 = __values(input), input_5_1 = input_5.next(); !input_5_1.done; input_5_1 = input_5.next()) {
      var entry = input_5_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryBlockDeviceMapping(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_5_1) {
    e_5 = { error: e_5_1 };
  } finally {
    try {
      if (input_5_1 && !input_5_1.done && (_a = input_5.return)) _a.call(input_5);
    } finally {
      if (e_5) throw e_5.error;
    }
  }
  return entries;
};
var serializeAws_queryCancelInstanceRefreshType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};
var serializeAws_queryCheckpointPercentages = function (input, context) {
  var e_6, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_6 = __values(input), input_6_1 = input_6.next(); !input_6_1.done; input_6_1 = input_6.next()) {
      var entry = input_6_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_6_1) {
    e_6 = { error: e_6_1 };
  } finally {
    try {
      if (input_6_1 && !input_6_1.done && (_a = input_6.return)) _a.call(input_6);
    } finally {
      if (e_6) throw e_6.error;
    }
  }
  return entries;
};
var serializeAws_queryClassicLinkVPCSecurityGroups = function (input, context) {
  var e_7, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_7 = __values(input), input_7_1 = input_7.next(); !input_7_1.done; input_7_1 = input_7.next()) {
      var entry = input_7_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_7_1) {
    e_7 = { error: e_7_1 };
  } finally {
    try {
      if (input_7_1 && !input_7_1.done && (_a = input_7.return)) _a.call(input_7);
    } finally {
      if (e_7) throw e_7.error;
    }
  }
  return entries;
};
var serializeAws_queryCompleteLifecycleActionType = function (input, context) {
  var entries = {};
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
var serializeAws_queryCreateAutoScalingGroupType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LaunchConfigurationName !== undefined && input.LaunchConfigurationName !== null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.LaunchTemplate !== undefined && input.LaunchTemplate !== null) {
    var memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LaunchTemplate." + key;
      entries[loc] = value;
    });
  }
  if (input.MixedInstancesPolicy !== undefined && input.MixedInstancesPolicy !== null) {
    var memberEntries = serializeAws_queryMixedInstancesPolicy(input.MixedInstancesPolicy, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "MixedInstancesPolicy." + key;
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
    var memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "AvailabilityZones." + key;
      entries[loc] = value;
    });
  }
  if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
    var memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LoadBalancerNames." + key;
      entries[loc] = value;
    });
  }
  if (input.TargetGroupARNs !== undefined && input.TargetGroupARNs !== null) {
    var memberEntries = serializeAws_queryTargetGroupARNs(input.TargetGroupARNs, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "TargetGroupARNs." + key;
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
    var memberEntries = serializeAws_queryTerminationPolicies(input.TerminationPolicies, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "TerminationPolicies." + key;
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
    var memberEntries = serializeAws_queryLifecycleHookSpecifications(input.LifecycleHookSpecificationList, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LifecycleHookSpecificationList." + key;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    var memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Tags." + key;
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
var serializeAws_queryCreateLaunchConfigurationType = function (input, context) {
  var entries = {};
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
    var memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "SecurityGroups." + key;
      entries[loc] = value;
    });
  }
  if (input.ClassicLinkVPCId !== undefined && input.ClassicLinkVPCId !== null) {
    entries["ClassicLinkVPCId"] = input.ClassicLinkVPCId;
  }
  if (input.ClassicLinkVPCSecurityGroups !== undefined && input.ClassicLinkVPCSecurityGroups !== null) {
    var memberEntries = serializeAws_queryClassicLinkVPCSecurityGroups(input.ClassicLinkVPCSecurityGroups, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ClassicLinkVPCSecurityGroups." + key;
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
    var memberEntries = serializeAws_queryBlockDeviceMappings(input.BlockDeviceMappings, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "BlockDeviceMappings." + key;
      entries[loc] = value;
    });
  }
  if (input.InstanceMonitoring !== undefined && input.InstanceMonitoring !== null) {
    var memberEntries = serializeAws_queryInstanceMonitoring(input.InstanceMonitoring, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "InstanceMonitoring." + key;
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
    var memberEntries = serializeAws_queryInstanceMetadataOptions(input.MetadataOptions, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "MetadataOptions." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryCreateOrUpdateTagsType = function (input, context) {
  var entries = {};
  if (input.Tags !== undefined && input.Tags !== null) {
    var memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Tags." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryCustomizedMetricSpecification = function (input, context) {
  var entries = {};
  if (input.MetricName !== undefined && input.MetricName !== null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined && input.Namespace !== null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Dimensions !== undefined && input.Dimensions !== null) {
    var memberEntries = serializeAws_queryMetricDimensions(input.Dimensions, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Dimensions." + key;
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
var serializeAws_queryDeleteAutoScalingGroupType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ForceDelete !== undefined && input.ForceDelete !== null) {
    entries["ForceDelete"] = input.ForceDelete;
  }
  return entries;
};
var serializeAws_queryDeleteLifecycleHookType = function (input, context) {
  var entries = {};
  if (input.LifecycleHookName !== undefined && input.LifecycleHookName !== null) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};
var serializeAws_queryDeleteNotificationConfigurationType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TopicARN !== undefined && input.TopicARN !== null) {
    entries["TopicARN"] = input.TopicARN;
  }
  return entries;
};
var serializeAws_queryDeletePolicyType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyName !== undefined && input.PolicyName !== null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};
var serializeAws_queryDeleteScheduledActionType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionName !== undefined && input.ScheduledActionName !== null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  return entries;
};
var serializeAws_queryDeleteTagsType = function (input, context) {
  var entries = {};
  if (input.Tags !== undefined && input.Tags !== null) {
    var memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Tags." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryDeleteWarmPoolType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ForceDelete !== undefined && input.ForceDelete !== null) {
    entries["ForceDelete"] = input.ForceDelete;
  }
  return entries;
};
var serializeAws_queryDescribeAutoScalingInstancesType = function (input, context) {
  var entries = {};
  if (input.InstanceIds !== undefined && input.InstanceIds !== null) {
    var memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "InstanceIds." + key;
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
var serializeAws_queryDescribeInstanceRefreshesType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.InstanceRefreshIds !== undefined && input.InstanceRefreshIds !== null) {
    var memberEntries = serializeAws_queryInstanceRefreshIds(input.InstanceRefreshIds, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "InstanceRefreshIds." + key;
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
var serializeAws_queryDescribeLifecycleHooksType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LifecycleHookNames !== undefined && input.LifecycleHookNames !== null) {
    var memberEntries = serializeAws_queryLifecycleHookNames(input.LifecycleHookNames, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LifecycleHookNames." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryDescribeLoadBalancersRequest = function (input, context) {
  var entries = {};
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
var serializeAws_queryDescribeLoadBalancerTargetGroupsRequest = function (input, context) {
  var entries = {};
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
var serializeAws_queryDescribeNotificationConfigurationsType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupNames !== undefined && input.AutoScalingGroupNames !== null) {
    var memberEntries = serializeAws_queryAutoScalingGroupNames(input.AutoScalingGroupNames, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "AutoScalingGroupNames." + key;
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
var serializeAws_queryDescribePoliciesType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyNames !== undefined && input.PolicyNames !== null) {
    var memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "PolicyNames." + key;
      entries[loc] = value;
    });
  }
  if (input.PolicyTypes !== undefined && input.PolicyTypes !== null) {
    var memberEntries = serializeAws_queryPolicyTypes(input.PolicyTypes, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "PolicyTypes." + key;
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
var serializeAws_queryDescribeScalingActivitiesType = function (input, context) {
  var entries = {};
  if (input.ActivityIds !== undefined && input.ActivityIds !== null) {
    var memberEntries = serializeAws_queryActivityIds(input.ActivityIds, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ActivityIds." + key;
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
var serializeAws_queryDescribeScheduledActionsType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionNames !== undefined && input.ScheduledActionNames !== null) {
    var memberEntries = serializeAws_queryScheduledActionNames(input.ScheduledActionNames, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ScheduledActionNames." + key;
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
var serializeAws_queryDescribeTagsType = function (input, context) {
  var entries = {};
  if (input.Filters !== undefined && input.Filters !== null) {
    var memberEntries = serializeAws_queryFilters(input.Filters, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Filters." + key;
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
var serializeAws_queryDescribeWarmPoolType = function (input, context) {
  var entries = {};
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
var serializeAws_queryDetachInstancesQuery = function (input, context) {
  var entries = {};
  if (input.InstanceIds !== undefined && input.InstanceIds !== null) {
    var memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "InstanceIds." + key;
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
var serializeAws_queryDetachLoadBalancersType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
    var memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LoadBalancerNames." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryDetachLoadBalancerTargetGroupsType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TargetGroupARNs !== undefined && input.TargetGroupARNs !== null) {
    var memberEntries = serializeAws_queryTargetGroupARNs(input.TargetGroupARNs, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "TargetGroupARNs." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryDisableMetricsCollectionQuery = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Metrics !== undefined && input.Metrics !== null) {
    var memberEntries = serializeAws_queryMetrics(input.Metrics, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Metrics." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryEbs = function (input, context) {
  var entries = {};
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
var serializeAws_queryEnableMetricsCollectionQuery = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Metrics !== undefined && input.Metrics !== null) {
    var memberEntries = serializeAws_queryMetrics(input.Metrics, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Metrics." + key;
      entries[loc] = value;
    });
  }
  if (input.Granularity !== undefined && input.Granularity !== null) {
    entries["Granularity"] = input.Granularity;
  }
  return entries;
};
var serializeAws_queryEnterStandbyQuery = function (input, context) {
  var entries = {};
  if (input.InstanceIds !== undefined && input.InstanceIds !== null) {
    var memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "InstanceIds." + key;
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
var serializeAws_queryExecutePolicyType = function (input, context) {
  var entries = {};
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
var serializeAws_queryExitStandbyQuery = function (input, context) {
  var entries = {};
  if (input.InstanceIds !== undefined && input.InstanceIds !== null) {
    var memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "InstanceIds." + key;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};
var serializeAws_queryFilter = function (input, context) {
  var entries = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Values !== undefined && input.Values !== null) {
    var memberEntries = serializeAws_queryValues(input.Values, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Values." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryFilters = function (input, context) {
  var e_8, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_8 = __values(input), input_8_1 = input_8.next(); !input_8_1.done; input_8_1 = input_8.next()) {
      var entry = input_8_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryFilter(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_8_1) {
    e_8 = { error: e_8_1 };
  } finally {
    try {
      if (input_8_1 && !input_8_1.done && (_a = input_8.return)) _a.call(input_8);
    } finally {
      if (e_8) throw e_8.error;
    }
  }
  return entries;
};
var serializeAws_queryGetPredictiveScalingForecastType = function (input, context) {
  var entries = {};
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
var serializeAws_queryInstanceIds = function (input, context) {
  var e_9, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_9 = __values(input), input_9_1 = input_9.next(); !input_9_1.done; input_9_1 = input_9.next()) {
      var entry = input_9_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_9_1) {
    e_9 = { error: e_9_1 };
  } finally {
    try {
      if (input_9_1 && !input_9_1.done && (_a = input_9.return)) _a.call(input_9);
    } finally {
      if (e_9) throw e_9.error;
    }
  }
  return entries;
};
var serializeAws_queryInstanceMetadataOptions = function (input, context) {
  var entries = {};
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
var serializeAws_queryInstanceMonitoring = function (input, context) {
  var entries = {};
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};
var serializeAws_queryInstanceRefreshIds = function (input, context) {
  var e_10, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_10 = __values(input), input_10_1 = input_10.next(); !input_10_1.done; input_10_1 = input_10.next()) {
      var entry = input_10_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_10_1) {
    e_10 = { error: e_10_1 };
  } finally {
    try {
      if (input_10_1 && !input_10_1.done && (_a = input_10.return)) _a.call(input_10);
    } finally {
      if (e_10) throw e_10.error;
    }
  }
  return entries;
};
var serializeAws_queryInstancesDistribution = function (input, context) {
  var entries = {};
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
var serializeAws_queryLaunchConfigurationNames = function (input, context) {
  var e_11, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_11 = __values(input), input_11_1 = input_11.next(); !input_11_1.done; input_11_1 = input_11.next()) {
      var entry = input_11_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_11_1) {
    e_11 = { error: e_11_1 };
  } finally {
    try {
      if (input_11_1 && !input_11_1.done && (_a = input_11.return)) _a.call(input_11);
    } finally {
      if (e_11) throw e_11.error;
    }
  }
  return entries;
};
var serializeAws_queryLaunchConfigurationNamesType = function (input, context) {
  var entries = {};
  if (input.LaunchConfigurationNames !== undefined && input.LaunchConfigurationNames !== null) {
    var memberEntries = serializeAws_queryLaunchConfigurationNames(input.LaunchConfigurationNames, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LaunchConfigurationNames." + key;
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
var serializeAws_queryLaunchConfigurationNameType = function (input, context) {
  var entries = {};
  if (input.LaunchConfigurationName !== undefined && input.LaunchConfigurationName !== null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  return entries;
};
var serializeAws_queryLaunchTemplate = function (input, context) {
  var entries = {};
  if (input.LaunchTemplateSpecification !== undefined && input.LaunchTemplateSpecification !== null) {
    var memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplateSpecification, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LaunchTemplateSpecification." + key;
      entries[loc] = value;
    });
  }
  if (input.Overrides !== undefined && input.Overrides !== null) {
    var memberEntries = serializeAws_queryOverrides(input.Overrides, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Overrides." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryLaunchTemplateOverrides = function (input, context) {
  var entries = {};
  if (input.InstanceType !== undefined && input.InstanceType !== null) {
    entries["InstanceType"] = input.InstanceType;
  }
  if (input.WeightedCapacity !== undefined && input.WeightedCapacity !== null) {
    entries["WeightedCapacity"] = input.WeightedCapacity;
  }
  if (input.LaunchTemplateSpecification !== undefined && input.LaunchTemplateSpecification !== null) {
    var memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplateSpecification, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LaunchTemplateSpecification." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryLaunchTemplateSpecification = function (input, context) {
  var entries = {};
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
var serializeAws_queryLifecycleHookNames = function (input, context) {
  var e_12, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_12 = __values(input), input_12_1 = input_12.next(); !input_12_1.done; input_12_1 = input_12.next()) {
      var entry = input_12_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_12_1) {
    e_12 = { error: e_12_1 };
  } finally {
    try {
      if (input_12_1 && !input_12_1.done && (_a = input_12.return)) _a.call(input_12);
    } finally {
      if (e_12) throw e_12.error;
    }
  }
  return entries;
};
var serializeAws_queryLifecycleHookSpecification = function (input, context) {
  var entries = {};
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
var serializeAws_queryLifecycleHookSpecifications = function (input, context) {
  var e_13, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_13 = __values(input), input_13_1 = input_13.next(); !input_13_1.done; input_13_1 = input_13.next()) {
      var entry = input_13_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryLifecycleHookSpecification(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_13_1) {
    e_13 = { error: e_13_1 };
  } finally {
    try {
      if (input_13_1 && !input_13_1.done && (_a = input_13.return)) _a.call(input_13);
    } finally {
      if (e_13) throw e_13.error;
    }
  }
  return entries;
};
var serializeAws_queryLoadBalancerNames = function (input, context) {
  var e_14, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_14 = __values(input), input_14_1 = input_14.next(); !input_14_1.done; input_14_1 = input_14.next()) {
      var entry = input_14_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_14_1) {
    e_14 = { error: e_14_1 };
  } finally {
    try {
      if (input_14_1 && !input_14_1.done && (_a = input_14.return)) _a.call(input_14);
    } finally {
      if (e_14) throw e_14.error;
    }
  }
  return entries;
};
var serializeAws_queryMetricDimension = function (input, context) {
  var entries = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};
var serializeAws_queryMetricDimensions = function (input, context) {
  var e_15, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_15 = __values(input), input_15_1 = input_15.next(); !input_15_1.done; input_15_1 = input_15.next()) {
      var entry = input_15_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryMetricDimension(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_15_1) {
    e_15 = { error: e_15_1 };
  } finally {
    try {
      if (input_15_1 && !input_15_1.done && (_a = input_15.return)) _a.call(input_15);
    } finally {
      if (e_15) throw e_15.error;
    }
  }
  return entries;
};
var serializeAws_queryMetrics = function (input, context) {
  var e_16, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_16 = __values(input), input_16_1 = input_16.next(); !input_16_1.done; input_16_1 = input_16.next()) {
      var entry = input_16_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_16_1) {
    e_16 = { error: e_16_1 };
  } finally {
    try {
      if (input_16_1 && !input_16_1.done && (_a = input_16.return)) _a.call(input_16);
    } finally {
      if (e_16) throw e_16.error;
    }
  }
  return entries;
};
var serializeAws_queryMixedInstancesPolicy = function (input, context) {
  var entries = {};
  if (input.LaunchTemplate !== undefined && input.LaunchTemplate !== null) {
    var memberEntries = serializeAws_queryLaunchTemplate(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LaunchTemplate." + key;
      entries[loc] = value;
    });
  }
  if (input.InstancesDistribution !== undefined && input.InstancesDistribution !== null) {
    var memberEntries = serializeAws_queryInstancesDistribution(input.InstancesDistribution, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "InstancesDistribution." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryOverrides = function (input, context) {
  var e_17, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_17 = __values(input), input_17_1 = input_17.next(); !input_17_1.done; input_17_1 = input_17.next()) {
      var entry = input_17_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryLaunchTemplateOverrides(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_17_1) {
    e_17 = { error: e_17_1 };
  } finally {
    try {
      if (input_17_1 && !input_17_1.done && (_a = input_17.return)) _a.call(input_17);
    } finally {
      if (e_17) throw e_17.error;
    }
  }
  return entries;
};
var serializeAws_queryPolicyNames = function (input, context) {
  var e_18, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_18 = __values(input), input_18_1 = input_18.next(); !input_18_1.done; input_18_1 = input_18.next()) {
      var entry = input_18_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_18_1) {
    e_18 = { error: e_18_1 };
  } finally {
    try {
      if (input_18_1 && !input_18_1.done && (_a = input_18.return)) _a.call(input_18);
    } finally {
      if (e_18) throw e_18.error;
    }
  }
  return entries;
};
var serializeAws_queryPolicyTypes = function (input, context) {
  var e_19, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_19 = __values(input), input_19_1 = input_19.next(); !input_19_1.done; input_19_1 = input_19.next()) {
      var entry = input_19_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_19_1) {
    e_19 = { error: e_19_1 };
  } finally {
    try {
      if (input_19_1 && !input_19_1.done && (_a = input_19.return)) _a.call(input_19);
    } finally {
      if (e_19) throw e_19.error;
    }
  }
  return entries;
};
var serializeAws_queryPredefinedMetricSpecification = function (input, context) {
  var entries = {};
  if (input.PredefinedMetricType !== undefined && input.PredefinedMetricType !== null) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel !== undefined && input.ResourceLabel !== null) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};
var serializeAws_queryPredictiveScalingConfiguration = function (input, context) {
  var entries = {};
  if (input.MetricSpecifications !== undefined && input.MetricSpecifications !== null) {
    var memberEntries = serializeAws_queryPredictiveScalingMetricSpecifications(input.MetricSpecifications, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "MetricSpecifications." + key;
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
var serializeAws_queryPredictiveScalingMetricSpecification = function (input, context) {
  var entries = {};
  if (input.TargetValue !== undefined && input.TargetValue !== null) {
    entries["TargetValue"] = input.TargetValue;
  }
  if (input.PredefinedMetricPairSpecification !== undefined && input.PredefinedMetricPairSpecification !== null) {
    var memberEntries = serializeAws_queryPredictiveScalingPredefinedMetricPair(
      input.PredefinedMetricPairSpecification,
      context
    );
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "PredefinedMetricPairSpecification." + key;
      entries[loc] = value;
    });
  }
  if (input.PredefinedScalingMetricSpecification !== undefined && input.PredefinedScalingMetricSpecification !== null) {
    var memberEntries = serializeAws_queryPredictiveScalingPredefinedScalingMetric(
      input.PredefinedScalingMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "PredefinedScalingMetricSpecification." + key;
      entries[loc] = value;
    });
  }
  if (input.PredefinedLoadMetricSpecification !== undefined && input.PredefinedLoadMetricSpecification !== null) {
    var memberEntries = serializeAws_queryPredictiveScalingPredefinedLoadMetric(
      input.PredefinedLoadMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "PredefinedLoadMetricSpecification." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryPredictiveScalingMetricSpecifications = function (input, context) {
  var e_20, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_20 = __values(input), input_20_1 = input_20.next(); !input_20_1.done; input_20_1 = input_20.next()) {
      var entry = input_20_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryPredictiveScalingMetricSpecification(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_20_1) {
    e_20 = { error: e_20_1 };
  } finally {
    try {
      if (input_20_1 && !input_20_1.done && (_a = input_20.return)) _a.call(input_20);
    } finally {
      if (e_20) throw e_20.error;
    }
  }
  return entries;
};
var serializeAws_queryPredictiveScalingPredefinedLoadMetric = function (input, context) {
  var entries = {};
  if (input.PredefinedMetricType !== undefined && input.PredefinedMetricType !== null) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel !== undefined && input.ResourceLabel !== null) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};
var serializeAws_queryPredictiveScalingPredefinedMetricPair = function (input, context) {
  var entries = {};
  if (input.PredefinedMetricType !== undefined && input.PredefinedMetricType !== null) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel !== undefined && input.ResourceLabel !== null) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};
var serializeAws_queryPredictiveScalingPredefinedScalingMetric = function (input, context) {
  var entries = {};
  if (input.PredefinedMetricType !== undefined && input.PredefinedMetricType !== null) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel !== undefined && input.ResourceLabel !== null) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};
var serializeAws_queryProcessNames = function (input, context) {
  var e_21, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_21 = __values(input), input_21_1 = input_21.next(); !input_21_1.done; input_21_1 = input_21.next()) {
      var entry = input_21_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_21_1) {
    e_21 = { error: e_21_1 };
  } finally {
    try {
      if (input_21_1 && !input_21_1.done && (_a = input_21.return)) _a.call(input_21);
    } finally {
      if (e_21) throw e_21.error;
    }
  }
  return entries;
};
var serializeAws_queryPutLifecycleHookType = function (input, context) {
  var entries = {};
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
var serializeAws_queryPutNotificationConfigurationType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TopicARN !== undefined && input.TopicARN !== null) {
    entries["TopicARN"] = input.TopicARN;
  }
  if (input.NotificationTypes !== undefined && input.NotificationTypes !== null) {
    var memberEntries = serializeAws_queryAutoScalingNotificationTypes(input.NotificationTypes, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "NotificationTypes." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryPutScalingPolicyType = function (input, context) {
  var entries = {};
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
    var memberEntries = serializeAws_queryStepAdjustments(input.StepAdjustments, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "StepAdjustments." + key;
      entries[loc] = value;
    });
  }
  if (input.EstimatedInstanceWarmup !== undefined && input.EstimatedInstanceWarmup !== null) {
    entries["EstimatedInstanceWarmup"] = input.EstimatedInstanceWarmup;
  }
  if (input.TargetTrackingConfiguration !== undefined && input.TargetTrackingConfiguration !== null) {
    var memberEntries = serializeAws_queryTargetTrackingConfiguration(input.TargetTrackingConfiguration, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "TargetTrackingConfiguration." + key;
      entries[loc] = value;
    });
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.PredictiveScalingConfiguration !== undefined && input.PredictiveScalingConfiguration !== null) {
    var memberEntries = serializeAws_queryPredictiveScalingConfiguration(input.PredictiveScalingConfiguration, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "PredictiveScalingConfiguration." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryPutScheduledUpdateGroupActionType = function (input, context) {
  var entries = {};
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
var serializeAws_queryPutWarmPoolType = function (input, context) {
  var entries = {};
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
var serializeAws_queryRecordLifecycleActionHeartbeatType = function (input, context) {
  var entries = {};
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
var serializeAws_queryRefreshPreferences = function (input, context) {
  var entries = {};
  if (input.MinHealthyPercentage !== undefined && input.MinHealthyPercentage !== null) {
    entries["MinHealthyPercentage"] = input.MinHealthyPercentage;
  }
  if (input.InstanceWarmup !== undefined && input.InstanceWarmup !== null) {
    entries["InstanceWarmup"] = input.InstanceWarmup;
  }
  if (input.CheckpointPercentages !== undefined && input.CheckpointPercentages !== null) {
    var memberEntries = serializeAws_queryCheckpointPercentages(input.CheckpointPercentages, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "CheckpointPercentages." + key;
      entries[loc] = value;
    });
  }
  if (input.CheckpointDelay !== undefined && input.CheckpointDelay !== null) {
    entries["CheckpointDelay"] = input.CheckpointDelay;
  }
  return entries;
};
var serializeAws_queryScalingProcessQuery = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScalingProcesses !== undefined && input.ScalingProcesses !== null) {
    var memberEntries = serializeAws_queryProcessNames(input.ScalingProcesses, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "ScalingProcesses." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryScheduledActionNames = function (input, context) {
  var e_22, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_22 = __values(input), input_22_1 = input_22.next(); !input_22_1.done; input_22_1 = input_22.next()) {
      var entry = input_22_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_22_1) {
    e_22 = { error: e_22_1 };
  } finally {
    try {
      if (input_22_1 && !input_22_1.done && (_a = input_22.return)) _a.call(input_22);
    } finally {
      if (e_22) throw e_22.error;
    }
  }
  return entries;
};
var serializeAws_queryScheduledUpdateGroupActionRequest = function (input, context) {
  var entries = {};
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
var serializeAws_queryScheduledUpdateGroupActionRequests = function (input, context) {
  var e_23, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_23 = __values(input), input_23_1 = input_23.next(); !input_23_1.done; input_23_1 = input_23.next()) {
      var entry = input_23_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryScheduledUpdateGroupActionRequest(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_23_1) {
    e_23 = { error: e_23_1 };
  } finally {
    try {
      if (input_23_1 && !input_23_1.done && (_a = input_23.return)) _a.call(input_23);
    } finally {
      if (e_23) throw e_23.error;
    }
  }
  return entries;
};
var serializeAws_querySecurityGroups = function (input, context) {
  var e_24, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_24 = __values(input), input_24_1 = input_24.next(); !input_24_1.done; input_24_1 = input_24.next()) {
      var entry = input_24_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_24_1) {
    e_24 = { error: e_24_1 };
  } finally {
    try {
      if (input_24_1 && !input_24_1.done && (_a = input_24.return)) _a.call(input_24);
    } finally {
      if (e_24) throw e_24.error;
    }
  }
  return entries;
};
var serializeAws_querySetDesiredCapacityType = function (input, context) {
  var entries = {};
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
var serializeAws_querySetInstanceHealthQuery = function (input, context) {
  var entries = {};
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
var serializeAws_querySetInstanceProtectionQuery = function (input, context) {
  var entries = {};
  if (input.InstanceIds !== undefined && input.InstanceIds !== null) {
    var memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "InstanceIds." + key;
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
var serializeAws_queryStartInstanceRefreshType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Strategy !== undefined && input.Strategy !== null) {
    entries["Strategy"] = input.Strategy;
  }
  if (input.Preferences !== undefined && input.Preferences !== null) {
    var memberEntries = serializeAws_queryRefreshPreferences(input.Preferences, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "Preferences." + key;
      entries[loc] = value;
    });
  }
  return entries;
};
var serializeAws_queryStepAdjustment = function (input, context) {
  var entries = {};
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
var serializeAws_queryStepAdjustments = function (input, context) {
  var e_25, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_25 = __values(input), input_25_1 = input_25.next(); !input_25_1.done; input_25_1 = input_25.next()) {
      var entry = input_25_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryStepAdjustment(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_25_1) {
    e_25 = { error: e_25_1 };
  } finally {
    try {
      if (input_25_1 && !input_25_1.done && (_a = input_25.return)) _a.call(input_25);
    } finally {
      if (e_25) throw e_25.error;
    }
  }
  return entries;
};
var serializeAws_queryTag = function (input, context) {
  var entries = {};
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
var serializeAws_queryTags = function (input, context) {
  var e_26, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_26 = __values(input), input_26_1 = input_26.next(); !input_26_1.done; input_26_1 = input_26.next()) {
      var entry = input_26_1.value;
      if (entry === null) {
        continue;
      }
      var memberEntries = serializeAws_queryTag(entry, context);
      Object.entries(memberEntries).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        entries["member." + counter + "." + key] = value;
      });
      counter++;
    }
  } catch (e_26_1) {
    e_26 = { error: e_26_1 };
  } finally {
    try {
      if (input_26_1 && !input_26_1.done && (_a = input_26.return)) _a.call(input_26);
    } finally {
      if (e_26) throw e_26.error;
    }
  }
  return entries;
};
var serializeAws_queryTargetGroupARNs = function (input, context) {
  var e_27, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_27 = __values(input), input_27_1 = input_27.next(); !input_27_1.done; input_27_1 = input_27.next()) {
      var entry = input_27_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_27_1) {
    e_27 = { error: e_27_1 };
  } finally {
    try {
      if (input_27_1 && !input_27_1.done && (_a = input_27.return)) _a.call(input_27);
    } finally {
      if (e_27) throw e_27.error;
    }
  }
  return entries;
};
var serializeAws_queryTargetTrackingConfiguration = function (input, context) {
  var entries = {};
  if (input.PredefinedMetricSpecification !== undefined && input.PredefinedMetricSpecification !== null) {
    var memberEntries = serializeAws_queryPredefinedMetricSpecification(input.PredefinedMetricSpecification, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "PredefinedMetricSpecification." + key;
      entries[loc] = value;
    });
  }
  if (input.CustomizedMetricSpecification !== undefined && input.CustomizedMetricSpecification !== null) {
    var memberEntries = serializeAws_queryCustomizedMetricSpecification(input.CustomizedMetricSpecification, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "CustomizedMetricSpecification." + key;
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
var serializeAws_queryTerminateInstanceInAutoScalingGroupType = function (input, context) {
  var entries = {};
  if (input.InstanceId !== undefined && input.InstanceId !== null) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.ShouldDecrementDesiredCapacity !== undefined && input.ShouldDecrementDesiredCapacity !== null) {
    entries["ShouldDecrementDesiredCapacity"] = input.ShouldDecrementDesiredCapacity;
  }
  return entries;
};
var serializeAws_queryTerminationPolicies = function (input, context) {
  var e_28, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_28 = __values(input), input_28_1 = input_28.next(); !input_28_1.done; input_28_1 = input_28.next()) {
      var entry = input_28_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_28_1) {
    e_28 = { error: e_28_1 };
  } finally {
    try {
      if (input_28_1 && !input_28_1.done && (_a = input_28.return)) _a.call(input_28);
    } finally {
      if (e_28) throw e_28.error;
    }
  }
  return entries;
};
var serializeAws_queryUpdateAutoScalingGroupType = function (input, context) {
  var entries = {};
  if (input.AutoScalingGroupName !== undefined && input.AutoScalingGroupName !== null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LaunchConfigurationName !== undefined && input.LaunchConfigurationName !== null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.LaunchTemplate !== undefined && input.LaunchTemplate !== null) {
    var memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "LaunchTemplate." + key;
      entries[loc] = value;
    });
  }
  if (input.MixedInstancesPolicy !== undefined && input.MixedInstancesPolicy !== null) {
    var memberEntries = serializeAws_queryMixedInstancesPolicy(input.MixedInstancesPolicy, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "MixedInstancesPolicy." + key;
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
    var memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "AvailabilityZones." + key;
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
    var memberEntries = serializeAws_queryTerminationPolicies(input.TerminationPolicies, context);
    Object.entries(memberEntries).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var loc = "TerminationPolicies." + key;
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
var serializeAws_queryValues = function (input, context) {
  var e_29, _a;
  var entries = {};
  var counter = 1;
  try {
    for (var input_29 = __values(input), input_29_1 = input_29.next(); !input_29_1.done; input_29_1 = input_29.next()) {
      var entry = input_29_1.value;
      if (entry === null) {
        continue;
      }
      entries["member." + counter] = entry;
      counter++;
    }
  } catch (e_29_1) {
    e_29 = { error: e_29_1 };
  } finally {
    try {
      if (input_29_1 && !input_29_1.done && (_a = input_29.return)) _a.call(input_29);
    } finally {
      if (e_29) throw e_29.error;
    }
  }
  return entries;
};
var deserializeAws_queryActiveInstanceRefreshNotFoundFault = function (output, context) {
  var contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
var deserializeAws_queryActivities = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryActivity(entry, context);
    });
};
var deserializeAws_queryActivitiesType = function (output, context) {
  var contents = {
    Activities: undefined,
    NextToken: undefined,
  };
  if (output.Activities === "") {
    contents.Activities = [];
  }
  if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = deserializeAws_queryActivities(
      __getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryActivity = function (output, context) {
  var contents = {
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
var deserializeAws_queryActivityType = function (output, context) {
  var contents = {
    Activity: undefined,
  };
  if (output["Activity"] !== undefined) {
    contents.Activity = deserializeAws_queryActivity(output["Activity"], context);
  }
  return contents;
};
var deserializeAws_queryAdjustmentType = function (output, context) {
  var contents = {
    AdjustmentType: undefined,
  };
  if (output["AdjustmentType"] !== undefined) {
    contents.AdjustmentType = output["AdjustmentType"];
  }
  return contents;
};
var deserializeAws_queryAdjustmentTypes = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryAdjustmentType(entry, context);
    });
};
var deserializeAws_queryAlarm = function (output, context) {
  var contents = {
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
var deserializeAws_queryAlarms = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryAlarm(entry, context);
    });
};
var deserializeAws_queryAlreadyExistsFault = function (output, context) {
  var contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
var deserializeAws_queryAttachLoadBalancersResultType = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryAttachLoadBalancerTargetGroupsResultType = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryAutoScalingGroup = function (output, context) {
  var contents = {
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
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  if (output.LoadBalancerNames === "") {
    contents.LoadBalancerNames = [];
  }
  if (output["LoadBalancerNames"] !== undefined && output["LoadBalancerNames"]["member"] !== undefined) {
    contents.LoadBalancerNames = deserializeAws_queryLoadBalancerNames(
      __getArrayIfSingleItem(output["LoadBalancerNames"]["member"]),
      context
    );
  }
  if (output.TargetGroupARNs === "") {
    contents.TargetGroupARNs = [];
  }
  if (output["TargetGroupARNs"] !== undefined && output["TargetGroupARNs"]["member"] !== undefined) {
    contents.TargetGroupARNs = deserializeAws_queryTargetGroupARNs(
      __getArrayIfSingleItem(output["TargetGroupARNs"]["member"]),
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
    contents.Instances = deserializeAws_queryInstances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = new Date(output["CreatedTime"]);
  }
  if (output.SuspendedProcesses === "") {
    contents.SuspendedProcesses = [];
  }
  if (output["SuspendedProcesses"] !== undefined && output["SuspendedProcesses"]["member"] !== undefined) {
    contents.SuspendedProcesses = deserializeAws_querySuspendedProcesses(
      __getArrayIfSingleItem(output["SuspendedProcesses"]["member"]),
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
      __getArrayIfSingleItem(output["EnabledMetrics"]["member"]),
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
    contents.Tags = deserializeAws_queryTagDescriptionList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output.TerminationPolicies === "") {
    contents.TerminationPolicies = [];
  }
  if (output["TerminationPolicies"] !== undefined && output["TerminationPolicies"]["member"] !== undefined) {
    contents.TerminationPolicies = deserializeAws_queryTerminationPolicies(
      __getArrayIfSingleItem(output["TerminationPolicies"]["member"]),
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
var deserializeAws_queryAutoScalingGroups = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryAutoScalingGroup(entry, context);
    });
};
var deserializeAws_queryAutoScalingGroupsType = function (output, context) {
  var contents = {
    AutoScalingGroups: undefined,
    NextToken: undefined,
  };
  if (output.AutoScalingGroups === "") {
    contents.AutoScalingGroups = [];
  }
  if (output["AutoScalingGroups"] !== undefined && output["AutoScalingGroups"]["member"] !== undefined) {
    contents.AutoScalingGroups = deserializeAws_queryAutoScalingGroups(
      __getArrayIfSingleItem(output["AutoScalingGroups"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryAutoScalingInstanceDetails = function (output, context) {
  var contents = {
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
var deserializeAws_queryAutoScalingInstances = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryAutoScalingInstanceDetails(entry, context);
    });
};
var deserializeAws_queryAutoScalingInstancesType = function (output, context) {
  var contents = {
    AutoScalingInstances: undefined,
    NextToken: undefined,
  };
  if (output.AutoScalingInstances === "") {
    contents.AutoScalingInstances = [];
  }
  if (output["AutoScalingInstances"] !== undefined && output["AutoScalingInstances"]["member"] !== undefined) {
    contents.AutoScalingInstances = deserializeAws_queryAutoScalingInstances(
      __getArrayIfSingleItem(output["AutoScalingInstances"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryAutoScalingNotificationTypes = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_queryAvailabilityZones = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_queryBatchDeleteScheduledActionAnswer = function (output, context) {
  var contents = {
    FailedScheduledActions: undefined,
  };
  if (output.FailedScheduledActions === "") {
    contents.FailedScheduledActions = [];
  }
  if (output["FailedScheduledActions"] !== undefined && output["FailedScheduledActions"]["member"] !== undefined) {
    contents.FailedScheduledActions = deserializeAws_queryFailedScheduledUpdateGroupActionRequests(
      __getArrayIfSingleItem(output["FailedScheduledActions"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryBatchPutScheduledUpdateGroupActionAnswer = function (output, context) {
  var contents = {
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
      __getArrayIfSingleItem(output["FailedScheduledUpdateGroupActions"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryBlockDeviceMapping = function (output, context) {
  var contents = {
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
var deserializeAws_queryBlockDeviceMappings = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryBlockDeviceMapping(entry, context);
    });
};
var deserializeAws_queryCancelInstanceRefreshAnswer = function (output, context) {
  var contents = {
    InstanceRefreshId: undefined,
  };
  if (output["InstanceRefreshId"] !== undefined) {
    contents.InstanceRefreshId = output["InstanceRefreshId"];
  }
  return contents;
};
var deserializeAws_queryCapacityForecast = function (output, context) {
  var contents = {
    Timestamps: undefined,
    Values: undefined,
  };
  if (output.Timestamps === "") {
    contents.Timestamps = [];
  }
  if (output["Timestamps"] !== undefined && output["Timestamps"]["member"] !== undefined) {
    contents.Timestamps = deserializeAws_queryPredictiveScalingForecastTimestamps(
      __getArrayIfSingleItem(output["Timestamps"]["member"]),
      context
    );
  }
  if (output.Values === "") {
    contents.Values = [];
  }
  if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryPredictiveScalingForecastValues(
      __getArrayIfSingleItem(output["Values"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryClassicLinkVPCSecurityGroups = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_queryCompleteLifecycleActionAnswer = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryCustomizedMetricSpecification = function (output, context) {
  var contents = {
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
      __getArrayIfSingleItem(output["Dimensions"]["member"]),
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
var deserializeAws_queryDeleteLifecycleHookAnswer = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryDeleteWarmPoolAnswer = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryDescribeAccountLimitsAnswer = function (output, context) {
  var contents = {
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
var deserializeAws_queryDescribeAdjustmentTypesAnswer = function (output, context) {
  var contents = {
    AdjustmentTypes: undefined,
  };
  if (output.AdjustmentTypes === "") {
    contents.AdjustmentTypes = [];
  }
  if (output["AdjustmentTypes"] !== undefined && output["AdjustmentTypes"]["member"] !== undefined) {
    contents.AdjustmentTypes = deserializeAws_queryAdjustmentTypes(
      __getArrayIfSingleItem(output["AdjustmentTypes"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryDescribeAutoScalingNotificationTypesAnswer = function (output, context) {
  var contents = {
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
      __getArrayIfSingleItem(output["AutoScalingNotificationTypes"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryDescribeInstanceRefreshesAnswer = function (output, context) {
  var contents = {
    InstanceRefreshes: undefined,
    NextToken: undefined,
  };
  if (output.InstanceRefreshes === "") {
    contents.InstanceRefreshes = [];
  }
  if (output["InstanceRefreshes"] !== undefined && output["InstanceRefreshes"]["member"] !== undefined) {
    contents.InstanceRefreshes = deserializeAws_queryInstanceRefreshes(
      __getArrayIfSingleItem(output["InstanceRefreshes"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryDescribeLifecycleHooksAnswer = function (output, context) {
  var contents = {
    LifecycleHooks: undefined,
  };
  if (output.LifecycleHooks === "") {
    contents.LifecycleHooks = [];
  }
  if (output["LifecycleHooks"] !== undefined && output["LifecycleHooks"]["member"] !== undefined) {
    contents.LifecycleHooks = deserializeAws_queryLifecycleHooks(
      __getArrayIfSingleItem(output["LifecycleHooks"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryDescribeLifecycleHookTypesAnswer = function (output, context) {
  var contents = {
    LifecycleHookTypes: undefined,
  };
  if (output.LifecycleHookTypes === "") {
    contents.LifecycleHookTypes = [];
  }
  if (output["LifecycleHookTypes"] !== undefined && output["LifecycleHookTypes"]["member"] !== undefined) {
    contents.LifecycleHookTypes = deserializeAws_queryAutoScalingNotificationTypes(
      __getArrayIfSingleItem(output["LifecycleHookTypes"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryDescribeLoadBalancersResponse = function (output, context) {
  var contents = {
    LoadBalancers: undefined,
    NextToken: undefined,
  };
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  }
  if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
    contents.LoadBalancers = deserializeAws_queryLoadBalancerStates(
      __getArrayIfSingleItem(output["LoadBalancers"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryDescribeLoadBalancerTargetGroupsResponse = function (output, context) {
  var contents = {
    LoadBalancerTargetGroups: undefined,
    NextToken: undefined,
  };
  if (output.LoadBalancerTargetGroups === "") {
    contents.LoadBalancerTargetGroups = [];
  }
  if (output["LoadBalancerTargetGroups"] !== undefined && output["LoadBalancerTargetGroups"]["member"] !== undefined) {
    contents.LoadBalancerTargetGroups = deserializeAws_queryLoadBalancerTargetGroupStates(
      __getArrayIfSingleItem(output["LoadBalancerTargetGroups"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryDescribeMetricCollectionTypesAnswer = function (output, context) {
  var contents = {
    Metrics: undefined,
    Granularities: undefined,
  };
  if (output.Metrics === "") {
    contents.Metrics = [];
  }
  if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
    contents.Metrics = deserializeAws_queryMetricCollectionTypes(
      __getArrayIfSingleItem(output["Metrics"]["member"]),
      context
    );
  }
  if (output.Granularities === "") {
    contents.Granularities = [];
  }
  if (output["Granularities"] !== undefined && output["Granularities"]["member"] !== undefined) {
    contents.Granularities = deserializeAws_queryMetricGranularityTypes(
      __getArrayIfSingleItem(output["Granularities"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryDescribeNotificationConfigurationsAnswer = function (output, context) {
  var contents = {
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
      __getArrayIfSingleItem(output["NotificationConfigurations"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryDescribeTerminationPolicyTypesAnswer = function (output, context) {
  var contents = {
    TerminationPolicyTypes: undefined,
  };
  if (output.TerminationPolicyTypes === "") {
    contents.TerminationPolicyTypes = [];
  }
  if (output["TerminationPolicyTypes"] !== undefined && output["TerminationPolicyTypes"]["member"] !== undefined) {
    contents.TerminationPolicyTypes = deserializeAws_queryTerminationPolicies(
      __getArrayIfSingleItem(output["TerminationPolicyTypes"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryDescribeWarmPoolAnswer = function (output, context) {
  var contents = {
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
    contents.Instances = deserializeAws_queryInstances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryDetachInstancesAnswer = function (output, context) {
  var contents = {
    Activities: undefined,
  };
  if (output.Activities === "") {
    contents.Activities = [];
  }
  if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = deserializeAws_queryActivities(
      __getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryDetachLoadBalancersResultType = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryDetachLoadBalancerTargetGroupsResultType = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryEbs = function (output, context) {
  var contents = {
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
var deserializeAws_queryEnabledMetric = function (output, context) {
  var contents = {
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
var deserializeAws_queryEnabledMetrics = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryEnabledMetric(entry, context);
    });
};
var deserializeAws_queryEnterStandbyAnswer = function (output, context) {
  var contents = {
    Activities: undefined,
  };
  if (output.Activities === "") {
    contents.Activities = [];
  }
  if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = deserializeAws_queryActivities(
      __getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryExitStandbyAnswer = function (output, context) {
  var contents = {
    Activities: undefined,
  };
  if (output.Activities === "") {
    contents.Activities = [];
  }
  if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = deserializeAws_queryActivities(
      __getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  return contents;
};
var deserializeAws_queryFailedScheduledUpdateGroupActionRequest = function (output, context) {
  var contents = {
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
var deserializeAws_queryFailedScheduledUpdateGroupActionRequests = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryFailedScheduledUpdateGroupActionRequest(entry, context);
    });
};
var deserializeAws_queryGetPredictiveScalingForecastAnswer = function (output, context) {
  var contents = {
    LoadForecast: undefined,
    CapacityForecast: undefined,
    UpdateTime: undefined,
  };
  if (output.LoadForecast === "") {
    contents.LoadForecast = [];
  }
  if (output["LoadForecast"] !== undefined && output["LoadForecast"]["member"] !== undefined) {
    contents.LoadForecast = deserializeAws_queryLoadForecasts(
      __getArrayIfSingleItem(output["LoadForecast"]["member"]),
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
var deserializeAws_queryInstance = function (output, context) {
  var contents = {
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
var deserializeAws_queryInstanceMetadataOptions = function (output, context) {
  var contents = {
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
var deserializeAws_queryInstanceMonitoring = function (output, context) {
  var contents = {
    Enabled: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  return contents;
};
var deserializeAws_queryInstanceRefresh = function (output, context) {
  var contents = {
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
var deserializeAws_queryInstanceRefreshes = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryInstanceRefresh(entry, context);
    });
};
var deserializeAws_queryInstanceRefreshInProgressFault = function (output, context) {
  var contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
var deserializeAws_queryInstanceRefreshLivePoolProgress = function (output, context) {
  var contents = {
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
var deserializeAws_queryInstanceRefreshProgressDetails = function (output, context) {
  var contents = {
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
var deserializeAws_queryInstanceRefreshWarmPoolProgress = function (output, context) {
  var contents = {
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
var deserializeAws_queryInstances = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryInstance(entry, context);
    });
};
var deserializeAws_queryInstancesDistribution = function (output, context) {
  var contents = {
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
var deserializeAws_queryInvalidNextToken = function (output, context) {
  var contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
var deserializeAws_queryLaunchConfiguration = function (output, context) {
  var contents = {
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
      __getArrayIfSingleItem(output["SecurityGroups"]["member"]),
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
      __getArrayIfSingleItem(output["ClassicLinkVPCSecurityGroups"]["member"]),
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
      __getArrayIfSingleItem(output["BlockDeviceMappings"]["member"]),
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
var deserializeAws_queryLaunchConfigurations = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryLaunchConfiguration(entry, context);
    });
};
var deserializeAws_queryLaunchConfigurationsType = function (output, context) {
  var contents = {
    LaunchConfigurations: undefined,
    NextToken: undefined,
  };
  if (output.LaunchConfigurations === "") {
    contents.LaunchConfigurations = [];
  }
  if (output["LaunchConfigurations"] !== undefined && output["LaunchConfigurations"]["member"] !== undefined) {
    contents.LaunchConfigurations = deserializeAws_queryLaunchConfigurations(
      __getArrayIfSingleItem(output["LaunchConfigurations"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryLaunchTemplate = function (output, context) {
  var contents = {
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
    contents.Overrides = deserializeAws_queryOverrides(__getArrayIfSingleItem(output["Overrides"]["member"]), context);
  }
  return contents;
};
var deserializeAws_queryLaunchTemplateOverrides = function (output, context) {
  var contents = {
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
var deserializeAws_queryLaunchTemplateSpecification = function (output, context) {
  var contents = {
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
var deserializeAws_queryLifecycleHook = function (output, context) {
  var contents = {
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
var deserializeAws_queryLifecycleHooks = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryLifecycleHook(entry, context);
    });
};
var deserializeAws_queryLimitExceededFault = function (output, context) {
  var contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
var deserializeAws_queryLoadBalancerNames = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_queryLoadBalancerState = function (output, context) {
  var contents = {
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
var deserializeAws_queryLoadBalancerStates = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryLoadBalancerState(entry, context);
    });
};
var deserializeAws_queryLoadBalancerTargetGroupState = function (output, context) {
  var contents = {
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
var deserializeAws_queryLoadBalancerTargetGroupStates = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryLoadBalancerTargetGroupState(entry, context);
    });
};
var deserializeAws_queryLoadForecast = function (output, context) {
  var contents = {
    Timestamps: undefined,
    Values: undefined,
    MetricSpecification: undefined,
  };
  if (output.Timestamps === "") {
    contents.Timestamps = [];
  }
  if (output["Timestamps"] !== undefined && output["Timestamps"]["member"] !== undefined) {
    contents.Timestamps = deserializeAws_queryPredictiveScalingForecastTimestamps(
      __getArrayIfSingleItem(output["Timestamps"]["member"]),
      context
    );
  }
  if (output.Values === "") {
    contents.Values = [];
  }
  if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryPredictiveScalingForecastValues(
      __getArrayIfSingleItem(output["Values"]["member"]),
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
var deserializeAws_queryLoadForecasts = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryLoadForecast(entry, context);
    });
};
var deserializeAws_queryMetricCollectionType = function (output, context) {
  var contents = {
    Metric: undefined,
  };
  if (output["Metric"] !== undefined) {
    contents.Metric = output["Metric"];
  }
  return contents;
};
var deserializeAws_queryMetricCollectionTypes = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryMetricCollectionType(entry, context);
    });
};
var deserializeAws_queryMetricDimension = function (output, context) {
  var contents = {
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
var deserializeAws_queryMetricDimensions = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryMetricDimension(entry, context);
    });
};
var deserializeAws_queryMetricGranularityType = function (output, context) {
  var contents = {
    Granularity: undefined,
  };
  if (output["Granularity"] !== undefined) {
    contents.Granularity = output["Granularity"];
  }
  return contents;
};
var deserializeAws_queryMetricGranularityTypes = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryMetricGranularityType(entry, context);
    });
};
var deserializeAws_queryMixedInstancesPolicy = function (output, context) {
  var contents = {
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
var deserializeAws_queryNotificationConfiguration = function (output, context) {
  var contents = {
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
var deserializeAws_queryNotificationConfigurations = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryNotificationConfiguration(entry, context);
    });
};
var deserializeAws_queryOverrides = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryLaunchTemplateOverrides(entry, context);
    });
};
var deserializeAws_queryPoliciesType = function (output, context) {
  var contents = {
    ScalingPolicies: undefined,
    NextToken: undefined,
  };
  if (output.ScalingPolicies === "") {
    contents.ScalingPolicies = [];
  }
  if (output["ScalingPolicies"] !== undefined && output["ScalingPolicies"]["member"] !== undefined) {
    contents.ScalingPolicies = deserializeAws_queryScalingPolicies(
      __getArrayIfSingleItem(output["ScalingPolicies"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryPolicyARNType = function (output, context) {
  var contents = {
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
    contents.Alarms = deserializeAws_queryAlarms(__getArrayIfSingleItem(output["Alarms"]["member"]), context);
  }
  return contents;
};
var deserializeAws_queryPredefinedMetricSpecification = function (output, context) {
  var contents = {
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
var deserializeAws_queryPredictiveScalingConfiguration = function (output, context) {
  var contents = {
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
      __getArrayIfSingleItem(output["MetricSpecifications"]["member"]),
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
var deserializeAws_queryPredictiveScalingForecastTimestamps = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return new Date(entry);
    });
};
var deserializeAws_queryPredictiveScalingForecastValues = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return parseFloat(entry);
    });
};
var deserializeAws_queryPredictiveScalingMetricSpecification = function (output, context) {
  var contents = {
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
var deserializeAws_queryPredictiveScalingMetricSpecifications = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryPredictiveScalingMetricSpecification(entry, context);
    });
};
var deserializeAws_queryPredictiveScalingPredefinedLoadMetric = function (output, context) {
  var contents = {
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
var deserializeAws_queryPredictiveScalingPredefinedMetricPair = function (output, context) {
  var contents = {
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
var deserializeAws_queryPredictiveScalingPredefinedScalingMetric = function (output, context) {
  var contents = {
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
var deserializeAws_queryProcesses = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryProcessType(entry, context);
    });
};
var deserializeAws_queryProcessesType = function (output, context) {
  var contents = {
    Processes: undefined,
  };
  if (output.Processes === "") {
    contents.Processes = [];
  }
  if (output["Processes"] !== undefined && output["Processes"]["member"] !== undefined) {
    contents.Processes = deserializeAws_queryProcesses(__getArrayIfSingleItem(output["Processes"]["member"]), context);
  }
  return contents;
};
var deserializeAws_queryProcessType = function (output, context) {
  var contents = {
    ProcessName: undefined,
  };
  if (output["ProcessName"] !== undefined) {
    contents.ProcessName = output["ProcessName"];
  }
  return contents;
};
var deserializeAws_queryPutLifecycleHookAnswer = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryPutWarmPoolAnswer = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryRecordLifecycleActionHeartbeatAnswer = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryResourceContentionFault = function (output, context) {
  var contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
var deserializeAws_queryResourceInUseFault = function (output, context) {
  var contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
var deserializeAws_queryScalingActivityInProgressFault = function (output, context) {
  var contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
var deserializeAws_queryScalingPolicies = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryScalingPolicy(entry, context);
    });
};
var deserializeAws_queryScalingPolicy = function (output, context) {
  var contents = {
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
      __getArrayIfSingleItem(output["StepAdjustments"]["member"]),
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
    contents.Alarms = deserializeAws_queryAlarms(__getArrayIfSingleItem(output["Alarms"]["member"]), context);
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
var deserializeAws_queryScheduledActionsType = function (output, context) {
  var contents = {
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
      __getArrayIfSingleItem(output["ScheduledUpdateGroupActions"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryScheduledUpdateGroupAction = function (output, context) {
  var contents = {
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
var deserializeAws_queryScheduledUpdateGroupActions = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryScheduledUpdateGroupAction(entry, context);
    });
};
var deserializeAws_querySecurityGroups = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_queryServiceLinkedRoleFailure = function (output, context) {
  var contents = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};
var deserializeAws_querySetInstanceProtectionAnswer = function (output, context) {
  var contents = {};
  return contents;
};
var deserializeAws_queryStartInstanceRefreshAnswer = function (output, context) {
  var contents = {
    InstanceRefreshId: undefined,
  };
  if (output["InstanceRefreshId"] !== undefined) {
    contents.InstanceRefreshId = output["InstanceRefreshId"];
  }
  return contents;
};
var deserializeAws_queryStepAdjustment = function (output, context) {
  var contents = {
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
var deserializeAws_queryStepAdjustments = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryStepAdjustment(entry, context);
    });
};
var deserializeAws_querySuspendedProcess = function (output, context) {
  var contents = {
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
var deserializeAws_querySuspendedProcesses = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_querySuspendedProcess(entry, context);
    });
};
var deserializeAws_queryTagDescription = function (output, context) {
  var contents = {
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
var deserializeAws_queryTagDescriptionList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_queryTagDescription(entry, context);
    });
};
var deserializeAws_queryTagsType = function (output, context) {
  var contents = {
    Tags: undefined,
    NextToken: undefined,
  };
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagDescriptionList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};
var deserializeAws_queryTargetGroupARNs = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_queryTargetTrackingConfiguration = function (output, context) {
  var contents = {
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
var deserializeAws_queryTerminationPolicies = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_queryWarmPoolConfiguration = function (output, context) {
  var contents = {
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
var deserializeMetadata = function (output) {
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
var collectBody = function (streamBody, context) {
  if (streamBody === void 0) {
    streamBody = new Uint8Array();
  }
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
  return collectBody(streamBody, context).then(function (body) {
    return context.utf8Encoder(body);
  });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          contents = {
            protocol: protocol,
            hostname: hostname,
            port: port,
            method: "POST",
            path: path,
            headers: headers,
          };
          if (resolvedHostname !== undefined) {
            contents.hostname = resolvedHostname;
          }
          if (body !== undefined) {
            contents.body = body;
          }
          return [2 /*return*/, new __HttpRequest(contents)];
      }
    });
  });
};
var parseBody = function (streamBody, context) {
  return collectBodyString(streamBody, context).then(function (encoded) {
    if (encoded.length) {
      var parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        trimValues: false,
        tagValueProcessor: function (val, tagName) {
          return val.trim() === "" ? "" : decodeHTML(val);
        },
      });
      var textNodeName = "#text";
      var key = Object.keys(parsedObj)[0];
      var parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });
};
var buildFormUrlencodedString = function (formEntries) {
  return Object.entries(formEntries)
    .map(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      return __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value);
    })
    .join("&");
};
var loadQueryErrorCode = function (output, data) {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
//# sourceMappingURL=Aws_query.js.map
