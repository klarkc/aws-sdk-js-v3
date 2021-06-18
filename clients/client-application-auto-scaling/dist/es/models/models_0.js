import { __assign } from "tslib";
export var AdjustmentType;
(function (AdjustmentType) {
  AdjustmentType["ChangeInCapacity"] = "ChangeInCapacity";
  AdjustmentType["ExactCapacity"] = "ExactCapacity";
  AdjustmentType["PercentChangeInCapacity"] = "PercentChangeInCapacity";
})(AdjustmentType || (AdjustmentType = {}));
export var Alarm;
(function (Alarm) {
  /**
   * @internal
   */
  Alarm.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Alarm || (Alarm = {}));
export var ConcurrentUpdateException;
(function (ConcurrentUpdateException) {
  /**
   * @internal
   */
  ConcurrentUpdateException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConcurrentUpdateException || (ConcurrentUpdateException = {}));
export var ScalableDimension;
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
})(ScalableDimension || (ScalableDimension = {}));
export var ServiceNamespace;
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
})(ServiceNamespace || (ServiceNamespace = {}));
export var DeleteScalingPolicyRequest;
(function (DeleteScalingPolicyRequest) {
  /**
   * @internal
   */
  DeleteScalingPolicyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteScalingPolicyRequest || (DeleteScalingPolicyRequest = {}));
export var DeleteScalingPolicyResponse;
(function (DeleteScalingPolicyResponse) {
  /**
   * @internal
   */
  DeleteScalingPolicyResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteScalingPolicyResponse || (DeleteScalingPolicyResponse = {}));
export var InternalServiceException;
(function (InternalServiceException) {
  /**
   * @internal
   */
  InternalServiceException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalServiceException || (InternalServiceException = {}));
export var ObjectNotFoundException;
(function (ObjectNotFoundException) {
  /**
   * @internal
   */
  ObjectNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ObjectNotFoundException || (ObjectNotFoundException = {}));
export var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidationException || (ValidationException = {}));
export var DeleteScheduledActionRequest;
(function (DeleteScheduledActionRequest) {
  /**
   * @internal
   */
  DeleteScheduledActionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteScheduledActionRequest || (DeleteScheduledActionRequest = {}));
export var DeleteScheduledActionResponse;
(function (DeleteScheduledActionResponse) {
  /**
   * @internal
   */
  DeleteScheduledActionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteScheduledActionResponse || (DeleteScheduledActionResponse = {}));
export var DeregisterScalableTargetRequest;
(function (DeregisterScalableTargetRequest) {
  /**
   * @internal
   */
  DeregisterScalableTargetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeregisterScalableTargetRequest || (DeregisterScalableTargetRequest = {}));
export var DeregisterScalableTargetResponse;
(function (DeregisterScalableTargetResponse) {
  /**
   * @internal
   */
  DeregisterScalableTargetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeregisterScalableTargetResponse || (DeregisterScalableTargetResponse = {}));
export var DescribeScalableTargetsRequest;
(function (DescribeScalableTargetsRequest) {
  /**
   * @internal
   */
  DescribeScalableTargetsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeScalableTargetsRequest || (DescribeScalableTargetsRequest = {}));
export var SuspendedState;
(function (SuspendedState) {
  /**
   * @internal
   */
  SuspendedState.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SuspendedState || (SuspendedState = {}));
export var ScalableTarget;
(function (ScalableTarget) {
  /**
   * @internal
   */
  ScalableTarget.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ScalableTarget || (ScalableTarget = {}));
export var DescribeScalableTargetsResponse;
(function (DescribeScalableTargetsResponse) {
  /**
   * @internal
   */
  DescribeScalableTargetsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeScalableTargetsResponse || (DescribeScalableTargetsResponse = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
  /**
   * @internal
   */
  InvalidNextTokenException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var DescribeScalingActivitiesRequest;
(function (DescribeScalingActivitiesRequest) {
  /**
   * @internal
   */
  DescribeScalingActivitiesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeScalingActivitiesRequest || (DescribeScalingActivitiesRequest = {}));
export var ScalingActivityStatusCode;
(function (ScalingActivityStatusCode) {
  ScalingActivityStatusCode["Failed"] = "Failed";
  ScalingActivityStatusCode["InProgress"] = "InProgress";
  ScalingActivityStatusCode["Overridden"] = "Overridden";
  ScalingActivityStatusCode["Pending"] = "Pending";
  ScalingActivityStatusCode["Successful"] = "Successful";
  ScalingActivityStatusCode["Unfulfilled"] = "Unfulfilled";
})(ScalingActivityStatusCode || (ScalingActivityStatusCode = {}));
export var ScalingActivity;
(function (ScalingActivity) {
  /**
   * @internal
   */
  ScalingActivity.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ScalingActivity || (ScalingActivity = {}));
export var DescribeScalingActivitiesResponse;
(function (DescribeScalingActivitiesResponse) {
  /**
   * @internal
   */
  DescribeScalingActivitiesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeScalingActivitiesResponse || (DescribeScalingActivitiesResponse = {}));
export var DescribeScalingPoliciesRequest;
(function (DescribeScalingPoliciesRequest) {
  /**
   * @internal
   */
  DescribeScalingPoliciesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeScalingPoliciesRequest || (DescribeScalingPoliciesRequest = {}));
export var PolicyType;
(function (PolicyType) {
  PolicyType["StepScaling"] = "StepScaling";
  PolicyType["TargetTrackingScaling"] = "TargetTrackingScaling";
})(PolicyType || (PolicyType = {}));
export var MetricAggregationType;
(function (MetricAggregationType) {
  MetricAggregationType["Average"] = "Average";
  MetricAggregationType["Maximum"] = "Maximum";
  MetricAggregationType["Minimum"] = "Minimum";
})(MetricAggregationType || (MetricAggregationType = {}));
export var StepAdjustment;
(function (StepAdjustment) {
  /**
   * @internal
   */
  StepAdjustment.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StepAdjustment || (StepAdjustment = {}));
export var StepScalingPolicyConfiguration;
(function (StepScalingPolicyConfiguration) {
  /**
   * @internal
   */
  StepScalingPolicyConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StepScalingPolicyConfiguration || (StepScalingPolicyConfiguration = {}));
export var MetricDimension;
(function (MetricDimension) {
  /**
   * @internal
   */
  MetricDimension.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MetricDimension || (MetricDimension = {}));
export var MetricStatistic;
(function (MetricStatistic) {
  MetricStatistic["Average"] = "Average";
  MetricStatistic["Maximum"] = "Maximum";
  MetricStatistic["Minimum"] = "Minimum";
  MetricStatistic["SampleCount"] = "SampleCount";
  MetricStatistic["Sum"] = "Sum";
})(MetricStatistic || (MetricStatistic = {}));
export var CustomizedMetricSpecification;
(function (CustomizedMetricSpecification) {
  /**
   * @internal
   */
  CustomizedMetricSpecification.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CustomizedMetricSpecification || (CustomizedMetricSpecification = {}));
export var MetricType;
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
})(MetricType || (MetricType = {}));
export var PredefinedMetricSpecification;
(function (PredefinedMetricSpecification) {
  /**
   * @internal
   */
  PredefinedMetricSpecification.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PredefinedMetricSpecification || (PredefinedMetricSpecification = {}));
export var TargetTrackingScalingPolicyConfiguration;
(function (TargetTrackingScalingPolicyConfiguration) {
  /**
   * @internal
   */
  TargetTrackingScalingPolicyConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TargetTrackingScalingPolicyConfiguration || (TargetTrackingScalingPolicyConfiguration = {}));
export var ScalingPolicy;
(function (ScalingPolicy) {
  /**
   * @internal
   */
  ScalingPolicy.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ScalingPolicy || (ScalingPolicy = {}));
export var DescribeScalingPoliciesResponse;
(function (DescribeScalingPoliciesResponse) {
  /**
   * @internal
   */
  DescribeScalingPoliciesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeScalingPoliciesResponse || (DescribeScalingPoliciesResponse = {}));
export var FailedResourceAccessException;
(function (FailedResourceAccessException) {
  /**
   * @internal
   */
  FailedResourceAccessException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FailedResourceAccessException || (FailedResourceAccessException = {}));
export var DescribeScheduledActionsRequest;
(function (DescribeScheduledActionsRequest) {
  /**
   * @internal
   */
  DescribeScheduledActionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeScheduledActionsRequest || (DescribeScheduledActionsRequest = {}));
export var ScalableTargetAction;
(function (ScalableTargetAction) {
  /**
   * @internal
   */
  ScalableTargetAction.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ScalableTargetAction || (ScalableTargetAction = {}));
export var ScheduledAction;
(function (ScheduledAction) {
  /**
   * @internal
   */
  ScheduledAction.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ScheduledAction || (ScheduledAction = {}));
export var DescribeScheduledActionsResponse;
(function (DescribeScheduledActionsResponse) {
  /**
   * @internal
   */
  DescribeScheduledActionsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeScheduledActionsResponse || (DescribeScheduledActionsResponse = {}));
export var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
export var PutScalingPolicyRequest;
(function (PutScalingPolicyRequest) {
  /**
   * @internal
   */
  PutScalingPolicyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutScalingPolicyRequest || (PutScalingPolicyRequest = {}));
export var PutScalingPolicyResponse;
(function (PutScalingPolicyResponse) {
  /**
   * @internal
   */
  PutScalingPolicyResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutScalingPolicyResponse || (PutScalingPolicyResponse = {}));
export var PutScheduledActionRequest;
(function (PutScheduledActionRequest) {
  /**
   * @internal
   */
  PutScheduledActionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutScheduledActionRequest || (PutScheduledActionRequest = {}));
export var PutScheduledActionResponse;
(function (PutScheduledActionResponse) {
  /**
   * @internal
   */
  PutScheduledActionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutScheduledActionResponse || (PutScheduledActionResponse = {}));
export var RegisterScalableTargetRequest;
(function (RegisterScalableTargetRequest) {
  /**
   * @internal
   */
  RegisterScalableTargetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RegisterScalableTargetRequest || (RegisterScalableTargetRequest = {}));
export var RegisterScalableTargetResponse;
(function (RegisterScalableTargetResponse) {
  /**
   * @internal
   */
  RegisterScalableTargetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RegisterScalableTargetResponse || (RegisterScalableTargetResponse = {}));
//# sourceMappingURL=models_0.js.map
