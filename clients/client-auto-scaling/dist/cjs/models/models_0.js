"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePolicyType =
  exports.DeleteNotificationConfigurationType =
  exports.DeleteLifecycleHookType =
  exports.DeleteLifecycleHookAnswer =
  exports.LaunchConfigurationNameType =
  exports.ScalingActivityInProgressFault =
  exports.DeleteAutoScalingGroupType =
  exports.ResourceInUseFault =
  exports.CreateOrUpdateTagsType =
  exports.CreateLaunchConfigurationType =
  exports.InstanceMetadataOptions =
  exports.InstanceMetadataHttpTokensState =
  exports.InstanceMetadataEndpointState =
  exports.InstanceMonitoring =
  exports.BlockDeviceMapping =
  exports.Ebs =
  exports.CreateAutoScalingGroupType =
  exports.Tag =
  exports.MixedInstancesPolicy =
  exports.LaunchTemplate =
  exports.LaunchTemplateOverrides =
  exports.InstancesDistribution =
  exports.LifecycleHookSpecification =
  exports.LaunchTemplateSpecification =
  exports.CompleteLifecycleActionType =
  exports.CompleteLifecycleActionAnswer =
  exports.CancelInstanceRefreshType =
  exports.CancelInstanceRefreshAnswer =
  exports.LimitExceededFault =
  exports.BatchPutScheduledUpdateGroupActionType =
  exports.ScheduledUpdateGroupActionRequest =
  exports.BatchPutScheduledUpdateGroupActionAnswer =
  exports.BatchDeleteScheduledActionType =
  exports.BatchDeleteScheduledActionAnswer =
  exports.FailedScheduledUpdateGroupActionRequest =
  exports.AttachLoadBalancerTargetGroupsType =
  exports.AttachLoadBalancerTargetGroupsResultType =
  exports.AttachLoadBalancersType =
  exports.AttachLoadBalancersResultType =
  exports.ServiceLinkedRoleFailure =
  exports.ResourceContentionFault =
  exports.AttachInstancesQuery =
  exports.AlreadyExistsFault =
  exports.Alarm =
  exports.AdjustmentType =
  exports.ActivityType =
  exports.ActivitiesType =
  exports.Activity =
  exports.ScalingActivityStatusCode =
  exports.ActiveInstanceRefreshNotFoundFault =
    void 0;
exports.PredictiveScalingMaxCapacityBreachBehavior =
  exports.DescribePoliciesType =
  exports.DescribeNotificationConfigurationsType =
  exports.DescribeNotificationConfigurationsAnswer =
  exports.NotificationConfiguration =
  exports.DescribeMetricCollectionTypesAnswer =
  exports.MetricCollectionType =
  exports.MetricGranularityType =
  exports.DescribeLoadBalancerTargetGroupsResponse =
  exports.LoadBalancerTargetGroupState =
  exports.DescribeLoadBalancerTargetGroupsRequest =
  exports.DescribeLoadBalancersResponse =
  exports.LoadBalancerState =
  exports.DescribeLoadBalancersRequest =
  exports.DescribeLifecycleHookTypesAnswer =
  exports.DescribeLifecycleHooksType =
  exports.DescribeLifecycleHooksAnswer =
  exports.LifecycleHook =
  exports.LaunchConfigurationsType =
  exports.LaunchConfiguration =
  exports.LaunchConfigurationNamesType =
  exports.DescribeInstanceRefreshesType =
  exports.DescribeInstanceRefreshesAnswer =
  exports.InstanceRefresh =
  exports.InstanceRefreshStatus =
  exports.InstanceRefreshProgressDetails =
  exports.InstanceRefreshWarmPoolProgress =
  exports.InstanceRefreshLivePoolProgress =
  exports.DescribeAutoScalingNotificationTypesAnswer =
  exports.DescribeAutoScalingInstancesType =
  exports.AutoScalingInstancesType =
  exports.AutoScalingInstanceDetails =
  exports.InvalidNextToken =
  exports.AutoScalingGroupsType =
  exports.AutoScalingGroup =
  exports.WarmPoolConfiguration =
  exports.WarmPoolStatus =
  exports.WarmPoolState =
  exports.TagDescription =
  exports.SuspendedProcess =
  exports.Instance =
  exports.LifecycleState =
  exports.EnabledMetric =
  exports.AutoScalingGroupNamesType =
  exports.DescribeAdjustmentTypesAnswer =
  exports.DescribeAccountLimitsAnswer =
  exports.DeleteWarmPoolType =
  exports.DeleteWarmPoolAnswer =
  exports.DeleteTagsType =
  exports.DeleteScheduledActionType =
    void 0;
exports.PutNotificationConfigurationType =
  exports.PutLifecycleHookType =
  exports.PutLifecycleHookAnswer =
  exports.GetPredictiveScalingForecastType =
  exports.GetPredictiveScalingForecastAnswer =
  exports.LoadForecast =
  exports.CapacityForecast =
  exports.ExitStandbyQuery =
  exports.ExitStandbyAnswer =
  exports.ExecutePolicyType =
  exports.EnterStandbyQuery =
  exports.EnterStandbyAnswer =
  exports.EnableMetricsCollectionQuery =
  exports.DisableMetricsCollectionQuery =
  exports.DetachLoadBalancerTargetGroupsType =
  exports.DetachLoadBalancerTargetGroupsResultType =
  exports.DetachLoadBalancersType =
  exports.DetachLoadBalancersResultType =
  exports.DetachInstancesQuery =
  exports.DetachInstancesAnswer =
  exports.DescribeWarmPoolType =
  exports.DescribeWarmPoolAnswer =
  exports.DescribeTerminationPolicyTypesAnswer =
  exports.TagsType =
  exports.DescribeTagsType =
  exports.Filter =
  exports.ScheduledActionsType =
  exports.ScheduledUpdateGroupAction =
  exports.DescribeScheduledActionsType =
  exports.ProcessesType =
  exports.ProcessType =
  exports.DescribeScalingActivitiesType =
  exports.PoliciesType =
  exports.ScalingPolicy =
  exports.TargetTrackingConfiguration =
  exports.PredefinedMetricSpecification =
  exports.MetricType =
  exports.CustomizedMetricSpecification =
  exports.MetricStatistic =
  exports.MetricDimension =
  exports.StepAdjustment =
  exports.PredictiveScalingConfiguration =
  exports.PredictiveScalingMode =
  exports.PredictiveScalingMetricSpecification =
  exports.PredictiveScalingPredefinedScalingMetric =
  exports.PredefinedScalingMetricType =
  exports.PredictiveScalingPredefinedMetricPair =
  exports.PredefinedMetricPairType =
  exports.PredictiveScalingPredefinedLoadMetric =
  exports.PredefinedLoadMetricType =
    void 0;
exports.UpdateAutoScalingGroupType =
  exports.TerminateInstanceInAutoScalingGroupType =
  exports.StartInstanceRefreshType =
  exports.RefreshStrategy =
  exports.RefreshPreferences =
  exports.StartInstanceRefreshAnswer =
  exports.InstanceRefreshInProgressFault =
  exports.SetInstanceProtectionQuery =
  exports.SetInstanceProtectionAnswer =
  exports.SetInstanceHealthQuery =
  exports.SetDesiredCapacityType =
  exports.ScalingProcessQuery =
  exports.RecordLifecycleActionHeartbeatType =
  exports.RecordLifecycleActionHeartbeatAnswer =
  exports.PutWarmPoolType =
  exports.PutWarmPoolAnswer =
  exports.PutScheduledUpdateGroupActionType =
  exports.PutScalingPolicyType =
  exports.PolicyARNType =
    void 0;
var ActiveInstanceRefreshNotFoundFault;
(function (ActiveInstanceRefreshNotFoundFault) {
  /**
   * @internal
   */
  ActiveInstanceRefreshNotFoundFault.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ActiveInstanceRefreshNotFoundFault =
    exports.ActiveInstanceRefreshNotFoundFault || (exports.ActiveInstanceRefreshNotFoundFault = {}))
);
var ScalingActivityStatusCode;
(function (ScalingActivityStatusCode) {
  ScalingActivityStatusCode["Cancelled"] = "Cancelled";
  ScalingActivityStatusCode["Failed"] = "Failed";
  ScalingActivityStatusCode["InProgress"] = "InProgress";
  ScalingActivityStatusCode["MidLifecycleAction"] = "MidLifecycleAction";
  ScalingActivityStatusCode["PendingSpotBidPlacement"] = "PendingSpotBidPlacement";
  ScalingActivityStatusCode["PreInService"] = "PreInService";
  ScalingActivityStatusCode["Successful"] = "Successful";
  ScalingActivityStatusCode["WaitingForELBConnectionDraining"] = "WaitingForELBConnectionDraining";
  ScalingActivityStatusCode["WaitingForInstanceId"] = "WaitingForInstanceId";
  ScalingActivityStatusCode["WaitingForInstanceWarmup"] = "WaitingForInstanceWarmup";
  ScalingActivityStatusCode["WaitingForSpotInstanceId"] = "WaitingForSpotInstanceId";
  ScalingActivityStatusCode["WaitingForSpotInstanceRequestId"] = "WaitingForSpotInstanceRequestId";
})((ScalingActivityStatusCode = exports.ScalingActivityStatusCode || (exports.ScalingActivityStatusCode = {})));
var Activity;
(function (Activity) {
  /**
   * @internal
   */
  Activity.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Activity = exports.Activity || (exports.Activity = {})));
var ActivitiesType;
(function (ActivitiesType) {
  /**
   * @internal
   */
  ActivitiesType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ActivitiesType = exports.ActivitiesType || (exports.ActivitiesType = {})));
var ActivityType;
(function (ActivityType) {
  /**
   * @internal
   */
  ActivityType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ActivityType = exports.ActivityType || (exports.ActivityType = {})));
var AdjustmentType;
(function (AdjustmentType) {
  /**
   * @internal
   */
  AdjustmentType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AdjustmentType = exports.AdjustmentType || (exports.AdjustmentType = {})));
var Alarm;
(function (Alarm) {
  /**
   * @internal
   */
  Alarm.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Alarm = exports.Alarm || (exports.Alarm = {})));
var AlreadyExistsFault;
(function (AlreadyExistsFault) {
  /**
   * @internal
   */
  AlreadyExistsFault.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AlreadyExistsFault = exports.AlreadyExistsFault || (exports.AlreadyExistsFault = {})));
var AttachInstancesQuery;
(function (AttachInstancesQuery) {
  /**
   * @internal
   */
  AttachInstancesQuery.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AttachInstancesQuery = exports.AttachInstancesQuery || (exports.AttachInstancesQuery = {})));
var ResourceContentionFault;
(function (ResourceContentionFault) {
  /**
   * @internal
   */
  ResourceContentionFault.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceContentionFault = exports.ResourceContentionFault || (exports.ResourceContentionFault = {})));
var ServiceLinkedRoleFailure;
(function (ServiceLinkedRoleFailure) {
  /**
   * @internal
   */
  ServiceLinkedRoleFailure.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ServiceLinkedRoleFailure = exports.ServiceLinkedRoleFailure || (exports.ServiceLinkedRoleFailure = {})));
var AttachLoadBalancersResultType;
(function (AttachLoadBalancersResultType) {
  /**
   * @internal
   */
  AttachLoadBalancersResultType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AttachLoadBalancersResultType =
    exports.AttachLoadBalancersResultType || (exports.AttachLoadBalancersResultType = {}))
);
var AttachLoadBalancersType;
(function (AttachLoadBalancersType) {
  /**
   * @internal
   */
  AttachLoadBalancersType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AttachLoadBalancersType = exports.AttachLoadBalancersType || (exports.AttachLoadBalancersType = {})));
var AttachLoadBalancerTargetGroupsResultType;
(function (AttachLoadBalancerTargetGroupsResultType) {
  /**
   * @internal
   */
  AttachLoadBalancerTargetGroupsResultType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AttachLoadBalancerTargetGroupsResultType =
    exports.AttachLoadBalancerTargetGroupsResultType || (exports.AttachLoadBalancerTargetGroupsResultType = {}))
);
var AttachLoadBalancerTargetGroupsType;
(function (AttachLoadBalancerTargetGroupsType) {
  /**
   * @internal
   */
  AttachLoadBalancerTargetGroupsType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AttachLoadBalancerTargetGroupsType =
    exports.AttachLoadBalancerTargetGroupsType || (exports.AttachLoadBalancerTargetGroupsType = {}))
);
var FailedScheduledUpdateGroupActionRequest;
(function (FailedScheduledUpdateGroupActionRequest) {
  /**
   * @internal
   */
  FailedScheduledUpdateGroupActionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (FailedScheduledUpdateGroupActionRequest =
    exports.FailedScheduledUpdateGroupActionRequest || (exports.FailedScheduledUpdateGroupActionRequest = {}))
);
var BatchDeleteScheduledActionAnswer;
(function (BatchDeleteScheduledActionAnswer) {
  /**
   * @internal
   */
  BatchDeleteScheduledActionAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDeleteScheduledActionAnswer =
    exports.BatchDeleteScheduledActionAnswer || (exports.BatchDeleteScheduledActionAnswer = {}))
);
var BatchDeleteScheduledActionType;
(function (BatchDeleteScheduledActionType) {
  /**
   * @internal
   */
  BatchDeleteScheduledActionType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDeleteScheduledActionType =
    exports.BatchDeleteScheduledActionType || (exports.BatchDeleteScheduledActionType = {}))
);
var BatchPutScheduledUpdateGroupActionAnswer;
(function (BatchPutScheduledUpdateGroupActionAnswer) {
  /**
   * @internal
   */
  BatchPutScheduledUpdateGroupActionAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchPutScheduledUpdateGroupActionAnswer =
    exports.BatchPutScheduledUpdateGroupActionAnswer || (exports.BatchPutScheduledUpdateGroupActionAnswer = {}))
);
var ScheduledUpdateGroupActionRequest;
(function (ScheduledUpdateGroupActionRequest) {
  /**
   * @internal
   */
  ScheduledUpdateGroupActionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ScheduledUpdateGroupActionRequest =
    exports.ScheduledUpdateGroupActionRequest || (exports.ScheduledUpdateGroupActionRequest = {}))
);
var BatchPutScheduledUpdateGroupActionType;
(function (BatchPutScheduledUpdateGroupActionType) {
  /**
   * @internal
   */
  BatchPutScheduledUpdateGroupActionType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchPutScheduledUpdateGroupActionType =
    exports.BatchPutScheduledUpdateGroupActionType || (exports.BatchPutScheduledUpdateGroupActionType = {}))
);
var LimitExceededFault;
(function (LimitExceededFault) {
  /**
   * @internal
   */
  LimitExceededFault.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededFault = exports.LimitExceededFault || (exports.LimitExceededFault = {})));
var CancelInstanceRefreshAnswer;
(function (CancelInstanceRefreshAnswer) {
  /**
   * @internal
   */
  CancelInstanceRefreshAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CancelInstanceRefreshAnswer = exports.CancelInstanceRefreshAnswer || (exports.CancelInstanceRefreshAnswer = {})));
var CancelInstanceRefreshType;
(function (CancelInstanceRefreshType) {
  /**
   * @internal
   */
  CancelInstanceRefreshType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CancelInstanceRefreshType = exports.CancelInstanceRefreshType || (exports.CancelInstanceRefreshType = {})));
var CompleteLifecycleActionAnswer;
(function (CompleteLifecycleActionAnswer) {
  /**
   * @internal
   */
  CompleteLifecycleActionAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CompleteLifecycleActionAnswer =
    exports.CompleteLifecycleActionAnswer || (exports.CompleteLifecycleActionAnswer = {}))
);
var CompleteLifecycleActionType;
(function (CompleteLifecycleActionType) {
  /**
   * @internal
   */
  CompleteLifecycleActionType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CompleteLifecycleActionType = exports.CompleteLifecycleActionType || (exports.CompleteLifecycleActionType = {})));
var LaunchTemplateSpecification;
(function (LaunchTemplateSpecification) {
  /**
   * @internal
   */
  LaunchTemplateSpecification.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LaunchTemplateSpecification = exports.LaunchTemplateSpecification || (exports.LaunchTemplateSpecification = {})));
var LifecycleHookSpecification;
(function (LifecycleHookSpecification) {
  /**
   * @internal
   */
  LifecycleHookSpecification.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LifecycleHookSpecification = exports.LifecycleHookSpecification || (exports.LifecycleHookSpecification = {})));
var InstancesDistribution;
(function (InstancesDistribution) {
  /**
   * @internal
   */
  InstancesDistribution.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InstancesDistribution = exports.InstancesDistribution || (exports.InstancesDistribution = {})));
var LaunchTemplateOverrides;
(function (LaunchTemplateOverrides) {
  /**
   * @internal
   */
  LaunchTemplateOverrides.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LaunchTemplateOverrides = exports.LaunchTemplateOverrides || (exports.LaunchTemplateOverrides = {})));
var LaunchTemplate;
(function (LaunchTemplate) {
  /**
   * @internal
   */
  LaunchTemplate.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LaunchTemplate = exports.LaunchTemplate || (exports.LaunchTemplate = {})));
var MixedInstancesPolicy;
(function (MixedInstancesPolicy) {
  /**
   * @internal
   */
  MixedInstancesPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MixedInstancesPolicy = exports.MixedInstancesPolicy || (exports.MixedInstancesPolicy = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var CreateAutoScalingGroupType;
(function (CreateAutoScalingGroupType) {
  /**
   * @internal
   */
  CreateAutoScalingGroupType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAutoScalingGroupType = exports.CreateAutoScalingGroupType || (exports.CreateAutoScalingGroupType = {})));
var Ebs;
(function (Ebs) {
  /**
   * @internal
   */
  Ebs.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Ebs = exports.Ebs || (exports.Ebs = {})));
var BlockDeviceMapping;
(function (BlockDeviceMapping) {
  /**
   * @internal
   */
  BlockDeviceMapping.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BlockDeviceMapping = exports.BlockDeviceMapping || (exports.BlockDeviceMapping = {})));
var InstanceMonitoring;
(function (InstanceMonitoring) {
  /**
   * @internal
   */
  InstanceMonitoring.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InstanceMonitoring = exports.InstanceMonitoring || (exports.InstanceMonitoring = {})));
var InstanceMetadataEndpointState;
(function (InstanceMetadataEndpointState) {
  InstanceMetadataEndpointState["Disabled"] = "disabled";
  InstanceMetadataEndpointState["Enabled"] = "enabled";
})(
  (InstanceMetadataEndpointState =
    exports.InstanceMetadataEndpointState || (exports.InstanceMetadataEndpointState = {}))
);
var InstanceMetadataHttpTokensState;
(function (InstanceMetadataHttpTokensState) {
  InstanceMetadataHttpTokensState["Optional"] = "optional";
  InstanceMetadataHttpTokensState["Required"] = "required";
})(
  (InstanceMetadataHttpTokensState =
    exports.InstanceMetadataHttpTokensState || (exports.InstanceMetadataHttpTokensState = {}))
);
var InstanceMetadataOptions;
(function (InstanceMetadataOptions) {
  /**
   * @internal
   */
  InstanceMetadataOptions.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InstanceMetadataOptions = exports.InstanceMetadataOptions || (exports.InstanceMetadataOptions = {})));
var CreateLaunchConfigurationType;
(function (CreateLaunchConfigurationType) {
  /**
   * @internal
   */
  CreateLaunchConfigurationType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateLaunchConfigurationType =
    exports.CreateLaunchConfigurationType || (exports.CreateLaunchConfigurationType = {}))
);
var CreateOrUpdateTagsType;
(function (CreateOrUpdateTagsType) {
  /**
   * @internal
   */
  CreateOrUpdateTagsType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateOrUpdateTagsType = exports.CreateOrUpdateTagsType || (exports.CreateOrUpdateTagsType = {})));
var ResourceInUseFault;
(function (ResourceInUseFault) {
  /**
   * @internal
   */
  ResourceInUseFault.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceInUseFault = exports.ResourceInUseFault || (exports.ResourceInUseFault = {})));
var DeleteAutoScalingGroupType;
(function (DeleteAutoScalingGroupType) {
  /**
   * @internal
   */
  DeleteAutoScalingGroupType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAutoScalingGroupType = exports.DeleteAutoScalingGroupType || (exports.DeleteAutoScalingGroupType = {})));
var ScalingActivityInProgressFault;
(function (ScalingActivityInProgressFault) {
  /**
   * @internal
   */
  ScalingActivityInProgressFault.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ScalingActivityInProgressFault =
    exports.ScalingActivityInProgressFault || (exports.ScalingActivityInProgressFault = {}))
);
var LaunchConfigurationNameType;
(function (LaunchConfigurationNameType) {
  /**
   * @internal
   */
  LaunchConfigurationNameType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LaunchConfigurationNameType = exports.LaunchConfigurationNameType || (exports.LaunchConfigurationNameType = {})));
var DeleteLifecycleHookAnswer;
(function (DeleteLifecycleHookAnswer) {
  /**
   * @internal
   */
  DeleteLifecycleHookAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteLifecycleHookAnswer = exports.DeleteLifecycleHookAnswer || (exports.DeleteLifecycleHookAnswer = {})));
var DeleteLifecycleHookType;
(function (DeleteLifecycleHookType) {
  /**
   * @internal
   */
  DeleteLifecycleHookType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteLifecycleHookType = exports.DeleteLifecycleHookType || (exports.DeleteLifecycleHookType = {})));
var DeleteNotificationConfigurationType;
(function (DeleteNotificationConfigurationType) {
  /**
   * @internal
   */
  DeleteNotificationConfigurationType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteNotificationConfigurationType =
    exports.DeleteNotificationConfigurationType || (exports.DeleteNotificationConfigurationType = {}))
);
var DeletePolicyType;
(function (DeletePolicyType) {
  /**
   * @internal
   */
  DeletePolicyType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeletePolicyType = exports.DeletePolicyType || (exports.DeletePolicyType = {})));
var DeleteScheduledActionType;
(function (DeleteScheduledActionType) {
  /**
   * @internal
   */
  DeleteScheduledActionType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteScheduledActionType = exports.DeleteScheduledActionType || (exports.DeleteScheduledActionType = {})));
var DeleteTagsType;
(function (DeleteTagsType) {
  /**
   * @internal
   */
  DeleteTagsType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteTagsType = exports.DeleteTagsType || (exports.DeleteTagsType = {})));
var DeleteWarmPoolAnswer;
(function (DeleteWarmPoolAnswer) {
  /**
   * @internal
   */
  DeleteWarmPoolAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteWarmPoolAnswer = exports.DeleteWarmPoolAnswer || (exports.DeleteWarmPoolAnswer = {})));
var DeleteWarmPoolType;
(function (DeleteWarmPoolType) {
  /**
   * @internal
   */
  DeleteWarmPoolType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteWarmPoolType = exports.DeleteWarmPoolType || (exports.DeleteWarmPoolType = {})));
var DescribeAccountLimitsAnswer;
(function (DescribeAccountLimitsAnswer) {
  /**
   * @internal
   */
  DescribeAccountLimitsAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeAccountLimitsAnswer = exports.DescribeAccountLimitsAnswer || (exports.DescribeAccountLimitsAnswer = {})));
var DescribeAdjustmentTypesAnswer;
(function (DescribeAdjustmentTypesAnswer) {
  /**
   * @internal
   */
  DescribeAdjustmentTypesAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeAdjustmentTypesAnswer =
    exports.DescribeAdjustmentTypesAnswer || (exports.DescribeAdjustmentTypesAnswer = {}))
);
var AutoScalingGroupNamesType;
(function (AutoScalingGroupNamesType) {
  /**
   * @internal
   */
  AutoScalingGroupNamesType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AutoScalingGroupNamesType = exports.AutoScalingGroupNamesType || (exports.AutoScalingGroupNamesType = {})));
var EnabledMetric;
(function (EnabledMetric) {
  /**
   * @internal
   */
  EnabledMetric.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EnabledMetric = exports.EnabledMetric || (exports.EnabledMetric = {})));
var LifecycleState;
(function (LifecycleState) {
  LifecycleState["DETACHED"] = "Detached";
  LifecycleState["DETACHING"] = "Detaching";
  LifecycleState["ENTERING_STANDBY"] = "EnteringStandby";
  LifecycleState["IN_SERVICE"] = "InService";
  LifecycleState["PENDING"] = "Pending";
  LifecycleState["PENDING_PROCEED"] = "Pending:Proceed";
  LifecycleState["PENDING_WAIT"] = "Pending:Wait";
  LifecycleState["QUARANTINED"] = "Quarantined";
  LifecycleState["STANDBY"] = "Standby";
  LifecycleState["TERMINATED"] = "Terminated";
  LifecycleState["TERMINATING"] = "Terminating";
  LifecycleState["TERMINATING_PROCEED"] = "Terminating:Proceed";
  LifecycleState["TERMINATING_WAIT"] = "Terminating:Wait";
  LifecycleState["WARMED_PENDING"] = "Warmed:Pending";
  LifecycleState["WARMED_PENDING_PROCEED"] = "Warmed:Pending:Proceed";
  LifecycleState["WARMED_PENDING_WAIT"] = "Warmed:Pending:Wait";
  LifecycleState["WARMED_RUNNING"] = "Warmed:Running";
  LifecycleState["WARMED_STOPPED"] = "Warmed:Stopped";
  LifecycleState["WARMED_TERMINATED"] = "Warmed:Terminated";
  LifecycleState["WARMED_TERMINATING"] = "Warmed:Terminating";
  LifecycleState["WARMED_TERMINATING_PROCEED"] = "Warmed:Terminating:Proceed";
  LifecycleState["WARMED_TERMINATING_WAIT"] = "Warmed:Terminating:Wait";
})((LifecycleState = exports.LifecycleState || (exports.LifecycleState = {})));
var Instance;
(function (Instance) {
  /**
   * @internal
   */
  Instance.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Instance = exports.Instance || (exports.Instance = {})));
var SuspendedProcess;
(function (SuspendedProcess) {
  /**
   * @internal
   */
  SuspendedProcess.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SuspendedProcess = exports.SuspendedProcess || (exports.SuspendedProcess = {})));
var TagDescription;
(function (TagDescription) {
  /**
   * @internal
   */
  TagDescription.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagDescription = exports.TagDescription || (exports.TagDescription = {})));
var WarmPoolState;
(function (WarmPoolState) {
  WarmPoolState["Running"] = "Running";
  WarmPoolState["Stopped"] = "Stopped";
})((WarmPoolState = exports.WarmPoolState || (exports.WarmPoolState = {})));
var WarmPoolStatus;
(function (WarmPoolStatus) {
  WarmPoolStatus["PendingDelete"] = "PendingDelete";
})((WarmPoolStatus = exports.WarmPoolStatus || (exports.WarmPoolStatus = {})));
var WarmPoolConfiguration;
(function (WarmPoolConfiguration) {
  /**
   * @internal
   */
  WarmPoolConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((WarmPoolConfiguration = exports.WarmPoolConfiguration || (exports.WarmPoolConfiguration = {})));
var AutoScalingGroup;
(function (AutoScalingGroup) {
  /**
   * @internal
   */
  AutoScalingGroup.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AutoScalingGroup = exports.AutoScalingGroup || (exports.AutoScalingGroup = {})));
var AutoScalingGroupsType;
(function (AutoScalingGroupsType) {
  /**
   * @internal
   */
  AutoScalingGroupsType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AutoScalingGroupsType = exports.AutoScalingGroupsType || (exports.AutoScalingGroupsType = {})));
var InvalidNextToken;
(function (InvalidNextToken) {
  /**
   * @internal
   */
  InvalidNextToken.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidNextToken = exports.InvalidNextToken || (exports.InvalidNextToken = {})));
var AutoScalingInstanceDetails;
(function (AutoScalingInstanceDetails) {
  /**
   * @internal
   */
  AutoScalingInstanceDetails.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AutoScalingInstanceDetails = exports.AutoScalingInstanceDetails || (exports.AutoScalingInstanceDetails = {})));
var AutoScalingInstancesType;
(function (AutoScalingInstancesType) {
  /**
   * @internal
   */
  AutoScalingInstancesType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AutoScalingInstancesType = exports.AutoScalingInstancesType || (exports.AutoScalingInstancesType = {})));
var DescribeAutoScalingInstancesType;
(function (DescribeAutoScalingInstancesType) {
  /**
   * @internal
   */
  DescribeAutoScalingInstancesType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeAutoScalingInstancesType =
    exports.DescribeAutoScalingInstancesType || (exports.DescribeAutoScalingInstancesType = {}))
);
var DescribeAutoScalingNotificationTypesAnswer;
(function (DescribeAutoScalingNotificationTypesAnswer) {
  /**
   * @internal
   */
  DescribeAutoScalingNotificationTypesAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeAutoScalingNotificationTypesAnswer =
    exports.DescribeAutoScalingNotificationTypesAnswer || (exports.DescribeAutoScalingNotificationTypesAnswer = {}))
);
var InstanceRefreshLivePoolProgress;
(function (InstanceRefreshLivePoolProgress) {
  /**
   * @internal
   */
  InstanceRefreshLivePoolProgress.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InstanceRefreshLivePoolProgress =
    exports.InstanceRefreshLivePoolProgress || (exports.InstanceRefreshLivePoolProgress = {}))
);
var InstanceRefreshWarmPoolProgress;
(function (InstanceRefreshWarmPoolProgress) {
  /**
   * @internal
   */
  InstanceRefreshWarmPoolProgress.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InstanceRefreshWarmPoolProgress =
    exports.InstanceRefreshWarmPoolProgress || (exports.InstanceRefreshWarmPoolProgress = {}))
);
var InstanceRefreshProgressDetails;
(function (InstanceRefreshProgressDetails) {
  /**
   * @internal
   */
  InstanceRefreshProgressDetails.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InstanceRefreshProgressDetails =
    exports.InstanceRefreshProgressDetails || (exports.InstanceRefreshProgressDetails = {}))
);
var InstanceRefreshStatus;
(function (InstanceRefreshStatus) {
  InstanceRefreshStatus["Cancelled"] = "Cancelled";
  InstanceRefreshStatus["Cancelling"] = "Cancelling";
  InstanceRefreshStatus["Failed"] = "Failed";
  InstanceRefreshStatus["InProgress"] = "InProgress";
  InstanceRefreshStatus["Pending"] = "Pending";
  InstanceRefreshStatus["Successful"] = "Successful";
})((InstanceRefreshStatus = exports.InstanceRefreshStatus || (exports.InstanceRefreshStatus = {})));
var InstanceRefresh;
(function (InstanceRefresh) {
  /**
   * @internal
   */
  InstanceRefresh.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InstanceRefresh = exports.InstanceRefresh || (exports.InstanceRefresh = {})));
var DescribeInstanceRefreshesAnswer;
(function (DescribeInstanceRefreshesAnswer) {
  /**
   * @internal
   */
  DescribeInstanceRefreshesAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeInstanceRefreshesAnswer =
    exports.DescribeInstanceRefreshesAnswer || (exports.DescribeInstanceRefreshesAnswer = {}))
);
var DescribeInstanceRefreshesType;
(function (DescribeInstanceRefreshesType) {
  /**
   * @internal
   */
  DescribeInstanceRefreshesType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeInstanceRefreshesType =
    exports.DescribeInstanceRefreshesType || (exports.DescribeInstanceRefreshesType = {}))
);
var LaunchConfigurationNamesType;
(function (LaunchConfigurationNamesType) {
  /**
   * @internal
   */
  LaunchConfigurationNamesType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (LaunchConfigurationNamesType = exports.LaunchConfigurationNamesType || (exports.LaunchConfigurationNamesType = {}))
);
var LaunchConfiguration;
(function (LaunchConfiguration) {
  /**
   * @internal
   */
  LaunchConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LaunchConfiguration = exports.LaunchConfiguration || (exports.LaunchConfiguration = {})));
var LaunchConfigurationsType;
(function (LaunchConfigurationsType) {
  /**
   * @internal
   */
  LaunchConfigurationsType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LaunchConfigurationsType = exports.LaunchConfigurationsType || (exports.LaunchConfigurationsType = {})));
var LifecycleHook;
(function (LifecycleHook) {
  /**
   * @internal
   */
  LifecycleHook.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LifecycleHook = exports.LifecycleHook || (exports.LifecycleHook = {})));
var DescribeLifecycleHooksAnswer;
(function (DescribeLifecycleHooksAnswer) {
  /**
   * @internal
   */
  DescribeLifecycleHooksAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeLifecycleHooksAnswer = exports.DescribeLifecycleHooksAnswer || (exports.DescribeLifecycleHooksAnswer = {}))
);
var DescribeLifecycleHooksType;
(function (DescribeLifecycleHooksType) {
  /**
   * @internal
   */
  DescribeLifecycleHooksType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeLifecycleHooksType = exports.DescribeLifecycleHooksType || (exports.DescribeLifecycleHooksType = {})));
var DescribeLifecycleHookTypesAnswer;
(function (DescribeLifecycleHookTypesAnswer) {
  /**
   * @internal
   */
  DescribeLifecycleHookTypesAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeLifecycleHookTypesAnswer =
    exports.DescribeLifecycleHookTypesAnswer || (exports.DescribeLifecycleHookTypesAnswer = {}))
);
var DescribeLoadBalancersRequest;
(function (DescribeLoadBalancersRequest) {
  /**
   * @internal
   */
  DescribeLoadBalancersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeLoadBalancersRequest = exports.DescribeLoadBalancersRequest || (exports.DescribeLoadBalancersRequest = {}))
);
var LoadBalancerState;
(function (LoadBalancerState) {
  /**
   * @internal
   */
  LoadBalancerState.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LoadBalancerState = exports.LoadBalancerState || (exports.LoadBalancerState = {})));
var DescribeLoadBalancersResponse;
(function (DescribeLoadBalancersResponse) {
  /**
   * @internal
   */
  DescribeLoadBalancersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeLoadBalancersResponse =
    exports.DescribeLoadBalancersResponse || (exports.DescribeLoadBalancersResponse = {}))
);
var DescribeLoadBalancerTargetGroupsRequest;
(function (DescribeLoadBalancerTargetGroupsRequest) {
  /**
   * @internal
   */
  DescribeLoadBalancerTargetGroupsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeLoadBalancerTargetGroupsRequest =
    exports.DescribeLoadBalancerTargetGroupsRequest || (exports.DescribeLoadBalancerTargetGroupsRequest = {}))
);
var LoadBalancerTargetGroupState;
(function (LoadBalancerTargetGroupState) {
  /**
   * @internal
   */
  LoadBalancerTargetGroupState.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (LoadBalancerTargetGroupState = exports.LoadBalancerTargetGroupState || (exports.LoadBalancerTargetGroupState = {}))
);
var DescribeLoadBalancerTargetGroupsResponse;
(function (DescribeLoadBalancerTargetGroupsResponse) {
  /**
   * @internal
   */
  DescribeLoadBalancerTargetGroupsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeLoadBalancerTargetGroupsResponse =
    exports.DescribeLoadBalancerTargetGroupsResponse || (exports.DescribeLoadBalancerTargetGroupsResponse = {}))
);
var MetricGranularityType;
(function (MetricGranularityType) {
  /**
   * @internal
   */
  MetricGranularityType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MetricGranularityType = exports.MetricGranularityType || (exports.MetricGranularityType = {})));
var MetricCollectionType;
(function (MetricCollectionType) {
  /**
   * @internal
   */
  MetricCollectionType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MetricCollectionType = exports.MetricCollectionType || (exports.MetricCollectionType = {})));
var DescribeMetricCollectionTypesAnswer;
(function (DescribeMetricCollectionTypesAnswer) {
  /**
   * @internal
   */
  DescribeMetricCollectionTypesAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeMetricCollectionTypesAnswer =
    exports.DescribeMetricCollectionTypesAnswer || (exports.DescribeMetricCollectionTypesAnswer = {}))
);
var NotificationConfiguration;
(function (NotificationConfiguration) {
  /**
   * @internal
   */
  NotificationConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NotificationConfiguration = exports.NotificationConfiguration || (exports.NotificationConfiguration = {})));
var DescribeNotificationConfigurationsAnswer;
(function (DescribeNotificationConfigurationsAnswer) {
  /**
   * @internal
   */
  DescribeNotificationConfigurationsAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeNotificationConfigurationsAnswer =
    exports.DescribeNotificationConfigurationsAnswer || (exports.DescribeNotificationConfigurationsAnswer = {}))
);
var DescribeNotificationConfigurationsType;
(function (DescribeNotificationConfigurationsType) {
  /**
   * @internal
   */
  DescribeNotificationConfigurationsType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeNotificationConfigurationsType =
    exports.DescribeNotificationConfigurationsType || (exports.DescribeNotificationConfigurationsType = {}))
);
var DescribePoliciesType;
(function (DescribePoliciesType) {
  /**
   * @internal
   */
  DescribePoliciesType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribePoliciesType = exports.DescribePoliciesType || (exports.DescribePoliciesType = {})));
var PredictiveScalingMaxCapacityBreachBehavior;
(function (PredictiveScalingMaxCapacityBreachBehavior) {
  PredictiveScalingMaxCapacityBreachBehavior["HonorMaxCapacity"] = "HonorMaxCapacity";
  PredictiveScalingMaxCapacityBreachBehavior["IncreaseMaxCapacity"] = "IncreaseMaxCapacity";
})(
  (PredictiveScalingMaxCapacityBreachBehavior =
    exports.PredictiveScalingMaxCapacityBreachBehavior || (exports.PredictiveScalingMaxCapacityBreachBehavior = {}))
);
var PredefinedLoadMetricType;
(function (PredefinedLoadMetricType) {
  PredefinedLoadMetricType["ALBTargetGroupRequestCount"] = "ALBTargetGroupRequestCount";
  PredefinedLoadMetricType["ASGTotalCPUUtilization"] = "ASGTotalCPUUtilization";
  PredefinedLoadMetricType["ASGTotalNetworkIn"] = "ASGTotalNetworkIn";
  PredefinedLoadMetricType["ASGTotalNetworkOut"] = "ASGTotalNetworkOut";
})((PredefinedLoadMetricType = exports.PredefinedLoadMetricType || (exports.PredefinedLoadMetricType = {})));
var PredictiveScalingPredefinedLoadMetric;
(function (PredictiveScalingPredefinedLoadMetric) {
  /**
   * @internal
   */
  PredictiveScalingPredefinedLoadMetric.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PredictiveScalingPredefinedLoadMetric =
    exports.PredictiveScalingPredefinedLoadMetric || (exports.PredictiveScalingPredefinedLoadMetric = {}))
);
var PredefinedMetricPairType;
(function (PredefinedMetricPairType) {
  PredefinedMetricPairType["ALBRequestCount"] = "ALBRequestCount";
  PredefinedMetricPairType["ASGCPUUtilization"] = "ASGCPUUtilization";
  PredefinedMetricPairType["ASGNetworkIn"] = "ASGNetworkIn";
  PredefinedMetricPairType["ASGNetworkOut"] = "ASGNetworkOut";
})((PredefinedMetricPairType = exports.PredefinedMetricPairType || (exports.PredefinedMetricPairType = {})));
var PredictiveScalingPredefinedMetricPair;
(function (PredictiveScalingPredefinedMetricPair) {
  /**
   * @internal
   */
  PredictiveScalingPredefinedMetricPair.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PredictiveScalingPredefinedMetricPair =
    exports.PredictiveScalingPredefinedMetricPair || (exports.PredictiveScalingPredefinedMetricPair = {}))
);
var PredefinedScalingMetricType;
(function (PredefinedScalingMetricType) {
  PredefinedScalingMetricType["ALBRequestCountPerTarget"] = "ALBRequestCountPerTarget";
  PredefinedScalingMetricType["ASGAverageCPUUtilization"] = "ASGAverageCPUUtilization";
  PredefinedScalingMetricType["ASGAverageNetworkIn"] = "ASGAverageNetworkIn";
  PredefinedScalingMetricType["ASGAverageNetworkOut"] = "ASGAverageNetworkOut";
})((PredefinedScalingMetricType = exports.PredefinedScalingMetricType || (exports.PredefinedScalingMetricType = {})));
var PredictiveScalingPredefinedScalingMetric;
(function (PredictiveScalingPredefinedScalingMetric) {
  /**
   * @internal
   */
  PredictiveScalingPredefinedScalingMetric.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PredictiveScalingPredefinedScalingMetric =
    exports.PredictiveScalingPredefinedScalingMetric || (exports.PredictiveScalingPredefinedScalingMetric = {}))
);
var PredictiveScalingMetricSpecification;
(function (PredictiveScalingMetricSpecification) {
  /**
   * @internal
   */
  PredictiveScalingMetricSpecification.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PredictiveScalingMetricSpecification =
    exports.PredictiveScalingMetricSpecification || (exports.PredictiveScalingMetricSpecification = {}))
);
var PredictiveScalingMode;
(function (PredictiveScalingMode) {
  PredictiveScalingMode["ForecastAndScale"] = "ForecastAndScale";
  PredictiveScalingMode["ForecastOnly"] = "ForecastOnly";
})((PredictiveScalingMode = exports.PredictiveScalingMode || (exports.PredictiveScalingMode = {})));
var PredictiveScalingConfiguration;
(function (PredictiveScalingConfiguration) {
  /**
   * @internal
   */
  PredictiveScalingConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PredictiveScalingConfiguration =
    exports.PredictiveScalingConfiguration || (exports.PredictiveScalingConfiguration = {}))
);
var StepAdjustment;
(function (StepAdjustment) {
  /**
   * @internal
   */
  StepAdjustment.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StepAdjustment = exports.StepAdjustment || (exports.StepAdjustment = {})));
var MetricDimension;
(function (MetricDimension) {
  /**
   * @internal
   */
  MetricDimension.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MetricDimension = exports.MetricDimension || (exports.MetricDimension = {})));
var MetricStatistic;
(function (MetricStatistic) {
  MetricStatistic["Average"] = "Average";
  MetricStatistic["Maximum"] = "Maximum";
  MetricStatistic["Minimum"] = "Minimum";
  MetricStatistic["SampleCount"] = "SampleCount";
  MetricStatistic["Sum"] = "Sum";
})((MetricStatistic = exports.MetricStatistic || (exports.MetricStatistic = {})));
var CustomizedMetricSpecification;
(function (CustomizedMetricSpecification) {
  /**
   * @internal
   */
  CustomizedMetricSpecification.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CustomizedMetricSpecification =
    exports.CustomizedMetricSpecification || (exports.CustomizedMetricSpecification = {}))
);
var MetricType;
(function (MetricType) {
  MetricType["ALBRequestCountPerTarget"] = "ALBRequestCountPerTarget";
  MetricType["ASGAverageCPUUtilization"] = "ASGAverageCPUUtilization";
  MetricType["ASGAverageNetworkIn"] = "ASGAverageNetworkIn";
  MetricType["ASGAverageNetworkOut"] = "ASGAverageNetworkOut";
})((MetricType = exports.MetricType || (exports.MetricType = {})));
var PredefinedMetricSpecification;
(function (PredefinedMetricSpecification) {
  /**
   * @internal
   */
  PredefinedMetricSpecification.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PredefinedMetricSpecification =
    exports.PredefinedMetricSpecification || (exports.PredefinedMetricSpecification = {}))
);
var TargetTrackingConfiguration;
(function (TargetTrackingConfiguration) {
  /**
   * @internal
   */
  TargetTrackingConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TargetTrackingConfiguration = exports.TargetTrackingConfiguration || (exports.TargetTrackingConfiguration = {})));
var ScalingPolicy;
(function (ScalingPolicy) {
  /**
   * @internal
   */
  ScalingPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScalingPolicy = exports.ScalingPolicy || (exports.ScalingPolicy = {})));
var PoliciesType;
(function (PoliciesType) {
  /**
   * @internal
   */
  PoliciesType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PoliciesType = exports.PoliciesType || (exports.PoliciesType = {})));
var DescribeScalingActivitiesType;
(function (DescribeScalingActivitiesType) {
  /**
   * @internal
   */
  DescribeScalingActivitiesType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScalingActivitiesType =
    exports.DescribeScalingActivitiesType || (exports.DescribeScalingActivitiesType = {}))
);
var ProcessType;
(function (ProcessType) {
  /**
   * @internal
   */
  ProcessType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ProcessType = exports.ProcessType || (exports.ProcessType = {})));
var ProcessesType;
(function (ProcessesType) {
  /**
   * @internal
   */
  ProcessesType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ProcessesType = exports.ProcessesType || (exports.ProcessesType = {})));
var DescribeScheduledActionsType;
(function (DescribeScheduledActionsType) {
  /**
   * @internal
   */
  DescribeScheduledActionsType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScheduledActionsType = exports.DescribeScheduledActionsType || (exports.DescribeScheduledActionsType = {}))
);
var ScheduledUpdateGroupAction;
(function (ScheduledUpdateGroupAction) {
  /**
   * @internal
   */
  ScheduledUpdateGroupAction.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScheduledUpdateGroupAction = exports.ScheduledUpdateGroupAction || (exports.ScheduledUpdateGroupAction = {})));
var ScheduledActionsType;
(function (ScheduledActionsType) {
  /**
   * @internal
   */
  ScheduledActionsType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScheduledActionsType = exports.ScheduledActionsType || (exports.ScheduledActionsType = {})));
var Filter;
(function (Filter) {
  /**
   * @internal
   */
  Filter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Filter = exports.Filter || (exports.Filter = {})));
var DescribeTagsType;
(function (DescribeTagsType) {
  /**
   * @internal
   */
  DescribeTagsType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeTagsType = exports.DescribeTagsType || (exports.DescribeTagsType = {})));
var TagsType;
(function (TagsType) {
  /**
   * @internal
   */
  TagsType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagsType = exports.TagsType || (exports.TagsType = {})));
var DescribeTerminationPolicyTypesAnswer;
(function (DescribeTerminationPolicyTypesAnswer) {
  /**
   * @internal
   */
  DescribeTerminationPolicyTypesAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeTerminationPolicyTypesAnswer =
    exports.DescribeTerminationPolicyTypesAnswer || (exports.DescribeTerminationPolicyTypesAnswer = {}))
);
var DescribeWarmPoolAnswer;
(function (DescribeWarmPoolAnswer) {
  /**
   * @internal
   */
  DescribeWarmPoolAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeWarmPoolAnswer = exports.DescribeWarmPoolAnswer || (exports.DescribeWarmPoolAnswer = {})));
var DescribeWarmPoolType;
(function (DescribeWarmPoolType) {
  /**
   * @internal
   */
  DescribeWarmPoolType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeWarmPoolType = exports.DescribeWarmPoolType || (exports.DescribeWarmPoolType = {})));
var DetachInstancesAnswer;
(function (DetachInstancesAnswer) {
  /**
   * @internal
   */
  DetachInstancesAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetachInstancesAnswer = exports.DetachInstancesAnswer || (exports.DetachInstancesAnswer = {})));
var DetachInstancesQuery;
(function (DetachInstancesQuery) {
  /**
   * @internal
   */
  DetachInstancesQuery.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetachInstancesQuery = exports.DetachInstancesQuery || (exports.DetachInstancesQuery = {})));
var DetachLoadBalancersResultType;
(function (DetachLoadBalancersResultType) {
  /**
   * @internal
   */
  DetachLoadBalancersResultType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DetachLoadBalancersResultType =
    exports.DetachLoadBalancersResultType || (exports.DetachLoadBalancersResultType = {}))
);
var DetachLoadBalancersType;
(function (DetachLoadBalancersType) {
  /**
   * @internal
   */
  DetachLoadBalancersType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetachLoadBalancersType = exports.DetachLoadBalancersType || (exports.DetachLoadBalancersType = {})));
var DetachLoadBalancerTargetGroupsResultType;
(function (DetachLoadBalancerTargetGroupsResultType) {
  /**
   * @internal
   */
  DetachLoadBalancerTargetGroupsResultType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DetachLoadBalancerTargetGroupsResultType =
    exports.DetachLoadBalancerTargetGroupsResultType || (exports.DetachLoadBalancerTargetGroupsResultType = {}))
);
var DetachLoadBalancerTargetGroupsType;
(function (DetachLoadBalancerTargetGroupsType) {
  /**
   * @internal
   */
  DetachLoadBalancerTargetGroupsType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DetachLoadBalancerTargetGroupsType =
    exports.DetachLoadBalancerTargetGroupsType || (exports.DetachLoadBalancerTargetGroupsType = {}))
);
var DisableMetricsCollectionQuery;
(function (DisableMetricsCollectionQuery) {
  /**
   * @internal
   */
  DisableMetricsCollectionQuery.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisableMetricsCollectionQuery =
    exports.DisableMetricsCollectionQuery || (exports.DisableMetricsCollectionQuery = {}))
);
var EnableMetricsCollectionQuery;
(function (EnableMetricsCollectionQuery) {
  /**
   * @internal
   */
  EnableMetricsCollectionQuery.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (EnableMetricsCollectionQuery = exports.EnableMetricsCollectionQuery || (exports.EnableMetricsCollectionQuery = {}))
);
var EnterStandbyAnswer;
(function (EnterStandbyAnswer) {
  /**
   * @internal
   */
  EnterStandbyAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EnterStandbyAnswer = exports.EnterStandbyAnswer || (exports.EnterStandbyAnswer = {})));
var EnterStandbyQuery;
(function (EnterStandbyQuery) {
  /**
   * @internal
   */
  EnterStandbyQuery.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EnterStandbyQuery = exports.EnterStandbyQuery || (exports.EnterStandbyQuery = {})));
var ExecutePolicyType;
(function (ExecutePolicyType) {
  /**
   * @internal
   */
  ExecutePolicyType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExecutePolicyType = exports.ExecutePolicyType || (exports.ExecutePolicyType = {})));
var ExitStandbyAnswer;
(function (ExitStandbyAnswer) {
  /**
   * @internal
   */
  ExitStandbyAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExitStandbyAnswer = exports.ExitStandbyAnswer || (exports.ExitStandbyAnswer = {})));
var ExitStandbyQuery;
(function (ExitStandbyQuery) {
  /**
   * @internal
   */
  ExitStandbyQuery.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExitStandbyQuery = exports.ExitStandbyQuery || (exports.ExitStandbyQuery = {})));
var CapacityForecast;
(function (CapacityForecast) {
  /**
   * @internal
   */
  CapacityForecast.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CapacityForecast = exports.CapacityForecast || (exports.CapacityForecast = {})));
var LoadForecast;
(function (LoadForecast) {
  /**
   * @internal
   */
  LoadForecast.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LoadForecast = exports.LoadForecast || (exports.LoadForecast = {})));
var GetPredictiveScalingForecastAnswer;
(function (GetPredictiveScalingForecastAnswer) {
  /**
   * @internal
   */
  GetPredictiveScalingForecastAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetPredictiveScalingForecastAnswer =
    exports.GetPredictiveScalingForecastAnswer || (exports.GetPredictiveScalingForecastAnswer = {}))
);
var GetPredictiveScalingForecastType;
(function (GetPredictiveScalingForecastType) {
  /**
   * @internal
   */
  GetPredictiveScalingForecastType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetPredictiveScalingForecastType =
    exports.GetPredictiveScalingForecastType || (exports.GetPredictiveScalingForecastType = {}))
);
var PutLifecycleHookAnswer;
(function (PutLifecycleHookAnswer) {
  /**
   * @internal
   */
  PutLifecycleHookAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutLifecycleHookAnswer = exports.PutLifecycleHookAnswer || (exports.PutLifecycleHookAnswer = {})));
var PutLifecycleHookType;
(function (PutLifecycleHookType) {
  /**
   * @internal
   */
  PutLifecycleHookType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutLifecycleHookType = exports.PutLifecycleHookType || (exports.PutLifecycleHookType = {})));
var PutNotificationConfigurationType;
(function (PutNotificationConfigurationType) {
  /**
   * @internal
   */
  PutNotificationConfigurationType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutNotificationConfigurationType =
    exports.PutNotificationConfigurationType || (exports.PutNotificationConfigurationType = {}))
);
var PolicyARNType;
(function (PolicyARNType) {
  /**
   * @internal
   */
  PolicyARNType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PolicyARNType = exports.PolicyARNType || (exports.PolicyARNType = {})));
var PutScalingPolicyType;
(function (PutScalingPolicyType) {
  /**
   * @internal
   */
  PutScalingPolicyType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutScalingPolicyType = exports.PutScalingPolicyType || (exports.PutScalingPolicyType = {})));
var PutScheduledUpdateGroupActionType;
(function (PutScheduledUpdateGroupActionType) {
  /**
   * @internal
   */
  PutScheduledUpdateGroupActionType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutScheduledUpdateGroupActionType =
    exports.PutScheduledUpdateGroupActionType || (exports.PutScheduledUpdateGroupActionType = {}))
);
var PutWarmPoolAnswer;
(function (PutWarmPoolAnswer) {
  /**
   * @internal
   */
  PutWarmPoolAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutWarmPoolAnswer = exports.PutWarmPoolAnswer || (exports.PutWarmPoolAnswer = {})));
var PutWarmPoolType;
(function (PutWarmPoolType) {
  /**
   * @internal
   */
  PutWarmPoolType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutWarmPoolType = exports.PutWarmPoolType || (exports.PutWarmPoolType = {})));
var RecordLifecycleActionHeartbeatAnswer;
(function (RecordLifecycleActionHeartbeatAnswer) {
  /**
   * @internal
   */
  RecordLifecycleActionHeartbeatAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RecordLifecycleActionHeartbeatAnswer =
    exports.RecordLifecycleActionHeartbeatAnswer || (exports.RecordLifecycleActionHeartbeatAnswer = {}))
);
var RecordLifecycleActionHeartbeatType;
(function (RecordLifecycleActionHeartbeatType) {
  /**
   * @internal
   */
  RecordLifecycleActionHeartbeatType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RecordLifecycleActionHeartbeatType =
    exports.RecordLifecycleActionHeartbeatType || (exports.RecordLifecycleActionHeartbeatType = {}))
);
var ScalingProcessQuery;
(function (ScalingProcessQuery) {
  /**
   * @internal
   */
  ScalingProcessQuery.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScalingProcessQuery = exports.ScalingProcessQuery || (exports.ScalingProcessQuery = {})));
var SetDesiredCapacityType;
(function (SetDesiredCapacityType) {
  /**
   * @internal
   */
  SetDesiredCapacityType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SetDesiredCapacityType = exports.SetDesiredCapacityType || (exports.SetDesiredCapacityType = {})));
var SetInstanceHealthQuery;
(function (SetInstanceHealthQuery) {
  /**
   * @internal
   */
  SetInstanceHealthQuery.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SetInstanceHealthQuery = exports.SetInstanceHealthQuery || (exports.SetInstanceHealthQuery = {})));
var SetInstanceProtectionAnswer;
(function (SetInstanceProtectionAnswer) {
  /**
   * @internal
   */
  SetInstanceProtectionAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SetInstanceProtectionAnswer = exports.SetInstanceProtectionAnswer || (exports.SetInstanceProtectionAnswer = {})));
var SetInstanceProtectionQuery;
(function (SetInstanceProtectionQuery) {
  /**
   * @internal
   */
  SetInstanceProtectionQuery.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SetInstanceProtectionQuery = exports.SetInstanceProtectionQuery || (exports.SetInstanceProtectionQuery = {})));
var InstanceRefreshInProgressFault;
(function (InstanceRefreshInProgressFault) {
  /**
   * @internal
   */
  InstanceRefreshInProgressFault.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InstanceRefreshInProgressFault =
    exports.InstanceRefreshInProgressFault || (exports.InstanceRefreshInProgressFault = {}))
);
var StartInstanceRefreshAnswer;
(function (StartInstanceRefreshAnswer) {
  /**
   * @internal
   */
  StartInstanceRefreshAnswer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartInstanceRefreshAnswer = exports.StartInstanceRefreshAnswer || (exports.StartInstanceRefreshAnswer = {})));
var RefreshPreferences;
(function (RefreshPreferences) {
  /**
   * @internal
   */
  RefreshPreferences.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RefreshPreferences = exports.RefreshPreferences || (exports.RefreshPreferences = {})));
var RefreshStrategy;
(function (RefreshStrategy) {
  RefreshStrategy["Rolling"] = "Rolling";
})((RefreshStrategy = exports.RefreshStrategy || (exports.RefreshStrategy = {})));
var StartInstanceRefreshType;
(function (StartInstanceRefreshType) {
  /**
   * @internal
   */
  StartInstanceRefreshType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartInstanceRefreshType = exports.StartInstanceRefreshType || (exports.StartInstanceRefreshType = {})));
var TerminateInstanceInAutoScalingGroupType;
(function (TerminateInstanceInAutoScalingGroupType) {
  /**
   * @internal
   */
  TerminateInstanceInAutoScalingGroupType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TerminateInstanceInAutoScalingGroupType =
    exports.TerminateInstanceInAutoScalingGroupType || (exports.TerminateInstanceInAutoScalingGroupType = {}))
);
var UpdateAutoScalingGroupType;
(function (UpdateAutoScalingGroupType) {
  /**
   * @internal
   */
  UpdateAutoScalingGroupType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateAutoScalingGroupType = exports.UpdateAutoScalingGroupType || (exports.UpdateAutoScalingGroupType = {})));
//# sourceMappingURL=models_0.js.map
