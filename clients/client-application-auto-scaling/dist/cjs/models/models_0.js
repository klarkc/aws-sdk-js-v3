"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterScalableTargetResponse =
  exports.RegisterScalableTargetRequest =
  exports.PutScheduledActionResponse =
  exports.PutScheduledActionRequest =
  exports.PutScalingPolicyResponse =
  exports.PutScalingPolicyRequest =
  exports.LimitExceededException =
  exports.DescribeScheduledActionsResponse =
  exports.ScheduledAction =
  exports.ScalableTargetAction =
  exports.DescribeScheduledActionsRequest =
  exports.FailedResourceAccessException =
  exports.DescribeScalingPoliciesResponse =
  exports.ScalingPolicy =
  exports.TargetTrackingScalingPolicyConfiguration =
  exports.PredefinedMetricSpecification =
  exports.MetricType =
  exports.CustomizedMetricSpecification =
  exports.MetricStatistic =
  exports.MetricDimension =
  exports.StepScalingPolicyConfiguration =
  exports.StepAdjustment =
  exports.MetricAggregationType =
  exports.PolicyType =
  exports.DescribeScalingPoliciesRequest =
  exports.DescribeScalingActivitiesResponse =
  exports.ScalingActivity =
  exports.ScalingActivityStatusCode =
  exports.DescribeScalingActivitiesRequest =
  exports.InvalidNextTokenException =
  exports.DescribeScalableTargetsResponse =
  exports.ScalableTarget =
  exports.SuspendedState =
  exports.DescribeScalableTargetsRequest =
  exports.DeregisterScalableTargetResponse =
  exports.DeregisterScalableTargetRequest =
  exports.DeleteScheduledActionResponse =
  exports.DeleteScheduledActionRequest =
  exports.ValidationException =
  exports.ObjectNotFoundException =
  exports.InternalServiceException =
  exports.DeleteScalingPolicyResponse =
  exports.DeleteScalingPolicyRequest =
  exports.ServiceNamespace =
  exports.ScalableDimension =
  exports.ConcurrentUpdateException =
  exports.Alarm =
  exports.AdjustmentType =
    void 0;
var AdjustmentType;
(function (AdjustmentType) {
  AdjustmentType["ChangeInCapacity"] = "ChangeInCapacity";
  AdjustmentType["ExactCapacity"] = "ExactCapacity";
  AdjustmentType["PercentChangeInCapacity"] = "PercentChangeInCapacity";
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
var ConcurrentUpdateException;
(function (ConcurrentUpdateException) {
  /**
   * @internal
   */
  ConcurrentUpdateException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConcurrentUpdateException = exports.ConcurrentUpdateException || (exports.ConcurrentUpdateException = {})));
var ScalableDimension;
(function (ScalableDimension) {
  ScalableDimension["AppstreamFleetDesiredCapacity"] = "appstream:fleet:DesiredCapacity";
  ScalableDimension["CassandraTableReadCapacityUnits"] = "cassandra:table:ReadCapacityUnits";
  ScalableDimension["CassandraTableWriteCapacityUnits"] = "cassandra:table:WriteCapacityUnits";
  ScalableDimension["ComprehendDocClassifierEndpointInferenceUnits"] =
    "comprehend:document-classifier-endpoint:DesiredInferenceUnits";
  ScalableDimension["ComprehendEntityRecognizerEndpointInferenceUnits"] =
    "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits";
  ScalableDimension["CustomResourceScalableDimension"] = "custom-resource:ResourceType:Property";
  ScalableDimension["DynamoDBIndexReadCapacityUnits"] = "dynamodb:index:ReadCapacityUnits";
  ScalableDimension["DynamoDBIndexWriteCapacityUnits"] = "dynamodb:index:WriteCapacityUnits";
  ScalableDimension["DynamoDBTableReadCapacityUnits"] = "dynamodb:table:ReadCapacityUnits";
  ScalableDimension["DynamoDBTableWriteCapacityUnits"] = "dynamodb:table:WriteCapacityUnits";
  ScalableDimension["EC2SpotFleetRequestTargetCapacity"] = "ec2:spot-fleet-request:TargetCapacity";
  ScalableDimension["ECSServiceDesiredCount"] = "ecs:service:DesiredCount";
  ScalableDimension["EMRInstanceGroupInstanceCount"] = "elasticmapreduce:instancegroup:InstanceCount";
  ScalableDimension["KafkaBrokerStorageVolumeSize"] = "kafka:broker-storage:VolumeSize";
  ScalableDimension["LambdaFunctionProvisionedConcurrency"] = "lambda:function:ProvisionedConcurrency";
  ScalableDimension["RDSClusterReadReplicaCount"] = "rds:cluster:ReadReplicaCount";
  ScalableDimension["SageMakerVariantDesiredInstanceCount"] = "sagemaker:variant:DesiredInstanceCount";
})((ScalableDimension = exports.ScalableDimension || (exports.ScalableDimension = {})));
var ServiceNamespace;
(function (ServiceNamespace) {
  ServiceNamespace["APPSTREAM"] = "appstream";
  ServiceNamespace["CASSANDRA"] = "cassandra";
  ServiceNamespace["COMPREHEND"] = "comprehend";
  ServiceNamespace["CUSTOM_RESOURCE"] = "custom-resource";
  ServiceNamespace["DYNAMODB"] = "dynamodb";
  ServiceNamespace["EC2"] = "ec2";
  ServiceNamespace["ECS"] = "ecs";
  ServiceNamespace["EMR"] = "elasticmapreduce";
  ServiceNamespace["KAFKA"] = "kafka";
  ServiceNamespace["LAMBDA"] = "lambda";
  ServiceNamespace["RDS"] = "rds";
  ServiceNamespace["SAGEMAKER"] = "sagemaker";
})((ServiceNamespace = exports.ServiceNamespace || (exports.ServiceNamespace = {})));
var DeleteScalingPolicyRequest;
(function (DeleteScalingPolicyRequest) {
  /**
   * @internal
   */
  DeleteScalingPolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteScalingPolicyRequest = exports.DeleteScalingPolicyRequest || (exports.DeleteScalingPolicyRequest = {})));
var DeleteScalingPolicyResponse;
(function (DeleteScalingPolicyResponse) {
  /**
   * @internal
   */
  DeleteScalingPolicyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteScalingPolicyResponse = exports.DeleteScalingPolicyResponse || (exports.DeleteScalingPolicyResponse = {})));
var InternalServiceException;
(function (InternalServiceException) {
  /**
   * @internal
   */
  InternalServiceException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {})));
var ObjectNotFoundException;
(function (ObjectNotFoundException) {
  /**
   * @internal
   */
  ObjectNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ObjectNotFoundException = exports.ObjectNotFoundException || (exports.ObjectNotFoundException = {})));
var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationException = exports.ValidationException || (exports.ValidationException = {})));
var DeleteScheduledActionRequest;
(function (DeleteScheduledActionRequest) {
  /**
   * @internal
   */
  DeleteScheduledActionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteScheduledActionRequest = exports.DeleteScheduledActionRequest || (exports.DeleteScheduledActionRequest = {}))
);
var DeleteScheduledActionResponse;
(function (DeleteScheduledActionResponse) {
  /**
   * @internal
   */
  DeleteScheduledActionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteScheduledActionResponse =
    exports.DeleteScheduledActionResponse || (exports.DeleteScheduledActionResponse = {}))
);
var DeregisterScalableTargetRequest;
(function (DeregisterScalableTargetRequest) {
  /**
   * @internal
   */
  DeregisterScalableTargetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeregisterScalableTargetRequest =
    exports.DeregisterScalableTargetRequest || (exports.DeregisterScalableTargetRequest = {}))
);
var DeregisterScalableTargetResponse;
(function (DeregisterScalableTargetResponse) {
  /**
   * @internal
   */
  DeregisterScalableTargetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeregisterScalableTargetResponse =
    exports.DeregisterScalableTargetResponse || (exports.DeregisterScalableTargetResponse = {}))
);
var DescribeScalableTargetsRequest;
(function (DescribeScalableTargetsRequest) {
  /**
   * @internal
   */
  DescribeScalableTargetsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScalableTargetsRequest =
    exports.DescribeScalableTargetsRequest || (exports.DescribeScalableTargetsRequest = {}))
);
var SuspendedState;
(function (SuspendedState) {
  /**
   * @internal
   */
  SuspendedState.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SuspendedState = exports.SuspendedState || (exports.SuspendedState = {})));
var ScalableTarget;
(function (ScalableTarget) {
  /**
   * @internal
   */
  ScalableTarget.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScalableTarget = exports.ScalableTarget || (exports.ScalableTarget = {})));
var DescribeScalableTargetsResponse;
(function (DescribeScalableTargetsResponse) {
  /**
   * @internal
   */
  DescribeScalableTargetsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScalableTargetsResponse =
    exports.DescribeScalableTargetsResponse || (exports.DescribeScalableTargetsResponse = {}))
);
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
  /**
   * @internal
   */
  InvalidNextTokenException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {})));
var DescribeScalingActivitiesRequest;
(function (DescribeScalingActivitiesRequest) {
  /**
   * @internal
   */
  DescribeScalingActivitiesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScalingActivitiesRequest =
    exports.DescribeScalingActivitiesRequest || (exports.DescribeScalingActivitiesRequest = {}))
);
var ScalingActivityStatusCode;
(function (ScalingActivityStatusCode) {
  ScalingActivityStatusCode["Failed"] = "Failed";
  ScalingActivityStatusCode["InProgress"] = "InProgress";
  ScalingActivityStatusCode["Overridden"] = "Overridden";
  ScalingActivityStatusCode["Pending"] = "Pending";
  ScalingActivityStatusCode["Successful"] = "Successful";
  ScalingActivityStatusCode["Unfulfilled"] = "Unfulfilled";
})((ScalingActivityStatusCode = exports.ScalingActivityStatusCode || (exports.ScalingActivityStatusCode = {})));
var ScalingActivity;
(function (ScalingActivity) {
  /**
   * @internal
   */
  ScalingActivity.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScalingActivity = exports.ScalingActivity || (exports.ScalingActivity = {})));
var DescribeScalingActivitiesResponse;
(function (DescribeScalingActivitiesResponse) {
  /**
   * @internal
   */
  DescribeScalingActivitiesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScalingActivitiesResponse =
    exports.DescribeScalingActivitiesResponse || (exports.DescribeScalingActivitiesResponse = {}))
);
var DescribeScalingPoliciesRequest;
(function (DescribeScalingPoliciesRequest) {
  /**
   * @internal
   */
  DescribeScalingPoliciesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScalingPoliciesRequest =
    exports.DescribeScalingPoliciesRequest || (exports.DescribeScalingPoliciesRequest = {}))
);
var PolicyType;
(function (PolicyType) {
  PolicyType["StepScaling"] = "StepScaling";
  PolicyType["TargetTrackingScaling"] = "TargetTrackingScaling";
})((PolicyType = exports.PolicyType || (exports.PolicyType = {})));
var MetricAggregationType;
(function (MetricAggregationType) {
  MetricAggregationType["Average"] = "Average";
  MetricAggregationType["Maximum"] = "Maximum";
  MetricAggregationType["Minimum"] = "Minimum";
})((MetricAggregationType = exports.MetricAggregationType || (exports.MetricAggregationType = {})));
var StepAdjustment;
(function (StepAdjustment) {
  /**
   * @internal
   */
  StepAdjustment.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StepAdjustment = exports.StepAdjustment || (exports.StepAdjustment = {})));
var StepScalingPolicyConfiguration;
(function (StepScalingPolicyConfiguration) {
  /**
   * @internal
   */
  StepScalingPolicyConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StepScalingPolicyConfiguration =
    exports.StepScalingPolicyConfiguration || (exports.StepScalingPolicyConfiguration = {}))
);
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
  MetricType["AppStreamAverageCapacityUtilization"] = "AppStreamAverageCapacityUtilization";
  MetricType["CassandraReadCapacityUtilization"] = "CassandraReadCapacityUtilization";
  MetricType["CassandraWriteCapacityUtilization"] = "CassandraWriteCapacityUtilization";
  MetricType["ComprehendInferenceUtilization"] = "ComprehendInferenceUtilization";
  MetricType["DynamoDBReadCapacityUtilization"] = "DynamoDBReadCapacityUtilization";
  MetricType["DynamoDBWriteCapacityUtilization"] = "DynamoDBWriteCapacityUtilization";
  MetricType["EC2SpotFleetRequestAverageCPUUtilization"] = "EC2SpotFleetRequestAverageCPUUtilization";
  MetricType["EC2SpotFleetRequestAverageNetworkIn"] = "EC2SpotFleetRequestAverageNetworkIn";
  MetricType["EC2SpotFleetRequestAverageNetworkOut"] = "EC2SpotFleetRequestAverageNetworkOut";
  MetricType["ECSServiceAverageCPUUtilization"] = "ECSServiceAverageCPUUtilization";
  MetricType["ECSServiceAverageMemoryUtilization"] = "ECSServiceAverageMemoryUtilization";
  MetricType["KafkaBrokerStorageUtilization"] = "KafkaBrokerStorageUtilization";
  MetricType["LambdaProvisionedConcurrencyUtilization"] = "LambdaProvisionedConcurrencyUtilization";
  MetricType["RDSReaderAverageCPUUtilization"] = "RDSReaderAverageCPUUtilization";
  MetricType["RDSReaderAverageDatabaseConnections"] = "RDSReaderAverageDatabaseConnections";
  MetricType["SageMakerVariantInvocationsPerInstance"] = "SageMakerVariantInvocationsPerInstance";
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
var TargetTrackingScalingPolicyConfiguration;
(function (TargetTrackingScalingPolicyConfiguration) {
  /**
   * @internal
   */
  TargetTrackingScalingPolicyConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TargetTrackingScalingPolicyConfiguration =
    exports.TargetTrackingScalingPolicyConfiguration || (exports.TargetTrackingScalingPolicyConfiguration = {}))
);
var ScalingPolicy;
(function (ScalingPolicy) {
  /**
   * @internal
   */
  ScalingPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScalingPolicy = exports.ScalingPolicy || (exports.ScalingPolicy = {})));
var DescribeScalingPoliciesResponse;
(function (DescribeScalingPoliciesResponse) {
  /**
   * @internal
   */
  DescribeScalingPoliciesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScalingPoliciesResponse =
    exports.DescribeScalingPoliciesResponse || (exports.DescribeScalingPoliciesResponse = {}))
);
var FailedResourceAccessException;
(function (FailedResourceAccessException) {
  /**
   * @internal
   */
  FailedResourceAccessException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (FailedResourceAccessException =
    exports.FailedResourceAccessException || (exports.FailedResourceAccessException = {}))
);
var DescribeScheduledActionsRequest;
(function (DescribeScheduledActionsRequest) {
  /**
   * @internal
   */
  DescribeScheduledActionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScheduledActionsRequest =
    exports.DescribeScheduledActionsRequest || (exports.DescribeScheduledActionsRequest = {}))
);
var ScalableTargetAction;
(function (ScalableTargetAction) {
  /**
   * @internal
   */
  ScalableTargetAction.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScalableTargetAction = exports.ScalableTargetAction || (exports.ScalableTargetAction = {})));
var ScheduledAction;
(function (ScheduledAction) {
  /**
   * @internal
   */
  ScheduledAction.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScheduledAction = exports.ScheduledAction || (exports.ScheduledAction = {})));
var DescribeScheduledActionsResponse;
(function (DescribeScheduledActionsResponse) {
  /**
   * @internal
   */
  DescribeScheduledActionsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScheduledActionsResponse =
    exports.DescribeScheduledActionsResponse || (exports.DescribeScheduledActionsResponse = {}))
);
var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {})));
var PutScalingPolicyRequest;
(function (PutScalingPolicyRequest) {
  /**
   * @internal
   */
  PutScalingPolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutScalingPolicyRequest = exports.PutScalingPolicyRequest || (exports.PutScalingPolicyRequest = {})));
var PutScalingPolicyResponse;
(function (PutScalingPolicyResponse) {
  /**
   * @internal
   */
  PutScalingPolicyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutScalingPolicyResponse = exports.PutScalingPolicyResponse || (exports.PutScalingPolicyResponse = {})));
var PutScheduledActionRequest;
(function (PutScheduledActionRequest) {
  /**
   * @internal
   */
  PutScheduledActionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutScheduledActionRequest = exports.PutScheduledActionRequest || (exports.PutScheduledActionRequest = {})));
var PutScheduledActionResponse;
(function (PutScheduledActionResponse) {
  /**
   * @internal
   */
  PutScheduledActionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutScheduledActionResponse = exports.PutScheduledActionResponse || (exports.PutScheduledActionResponse = {})));
var RegisterScalableTargetRequest;
(function (RegisterScalableTargetRequest) {
  /**
   * @internal
   */
  RegisterScalableTargetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RegisterScalableTargetRequest =
    exports.RegisterScalableTargetRequest || (exports.RegisterScalableTargetRequest = {}))
);
var RegisterScalableTargetResponse;
(function (RegisterScalableTargetResponse) {
  /**
   * @internal
   */
  RegisterScalableTargetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RegisterScalableTargetResponse =
    exports.RegisterScalableTargetResponse || (exports.RegisterScalableTargetResponse = {}))
);
//# sourceMappingURL=models_0.js.map
