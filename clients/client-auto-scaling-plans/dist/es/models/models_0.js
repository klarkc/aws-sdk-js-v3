import { __assign } from "tslib";
export var ConcurrentUpdateException;
(function (ConcurrentUpdateException) {
  /**
   * @internal
   */
  ConcurrentUpdateException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConcurrentUpdateException || (ConcurrentUpdateException = {}));
export var TagFilter;
(function (TagFilter) {
  /**
   * @internal
   */
  TagFilter.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagFilter || (TagFilter = {}));
export var ApplicationSource;
(function (ApplicationSource) {
  /**
   * @internal
   */
  ApplicationSource.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ApplicationSource || (ApplicationSource = {}));
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
export var CustomizedLoadMetricSpecification;
(function (CustomizedLoadMetricSpecification) {
  /**
   * @internal
   */
  CustomizedLoadMetricSpecification.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CustomizedLoadMetricSpecification || (CustomizedLoadMetricSpecification = {}));
export var LoadMetricType;
(function (LoadMetricType) {
  LoadMetricType["ALBTargetGroupRequestCount"] = "ALBTargetGroupRequestCount";
  LoadMetricType["ASGTotalCPUUtilization"] = "ASGTotalCPUUtilization";
  LoadMetricType["ASGTotalNetworkIn"] = "ASGTotalNetworkIn";
  LoadMetricType["ASGTotalNetworkOut"] = "ASGTotalNetworkOut";
})(LoadMetricType || (LoadMetricType = {}));
export var PredefinedLoadMetricSpecification;
(function (PredefinedLoadMetricSpecification) {
  /**
   * @internal
   */
  PredefinedLoadMetricSpecification.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PredefinedLoadMetricSpecification || (PredefinedLoadMetricSpecification = {}));
export var PredictiveScalingMaxCapacityBehavior;
(function (PredictiveScalingMaxCapacityBehavior) {
  PredictiveScalingMaxCapacityBehavior["SetForecastCapacityToMaxCapacity"] = "SetForecastCapacityToMaxCapacity";
  PredictiveScalingMaxCapacityBehavior["SetMaxCapacityAboveForecastCapacity"] = "SetMaxCapacityAboveForecastCapacity";
  PredictiveScalingMaxCapacityBehavior["SetMaxCapacityToForecastCapacity"] = "SetMaxCapacityToForecastCapacity";
})(PredictiveScalingMaxCapacityBehavior || (PredictiveScalingMaxCapacityBehavior = {}));
export var PredictiveScalingMode;
(function (PredictiveScalingMode) {
  PredictiveScalingMode["ForecastAndScale"] = "ForecastAndScale";
  PredictiveScalingMode["ForecastOnly"] = "ForecastOnly";
})(PredictiveScalingMode || (PredictiveScalingMode = {}));
export var ScalableDimension;
(function (ScalableDimension) {
  ScalableDimension["AutoScalingGroupDesiredCapacity"] = "autoscaling:autoScalingGroup:DesiredCapacity";
  ScalableDimension["DynamoDBIndexReadCapacityUnits"] = "dynamodb:index:ReadCapacityUnits";
  ScalableDimension["DynamoDBIndexWriteCapacityUnits"] = "dynamodb:index:WriteCapacityUnits";
  ScalableDimension["DynamoDBTableReadCapacityUnits"] = "dynamodb:table:ReadCapacityUnits";
  ScalableDimension["DynamoDBTableWriteCapacityUnits"] = "dynamodb:table:WriteCapacityUnits";
  ScalableDimension["EC2SpotFleetRequestTargetCapacity"] = "ec2:spot-fleet-request:TargetCapacity";
  ScalableDimension["ECSServiceDesiredCount"] = "ecs:service:DesiredCount";
  ScalableDimension["RDSClusterReadReplicaCount"] = "rds:cluster:ReadReplicaCount";
})(ScalableDimension || (ScalableDimension = {}));
export var ScalingPolicyUpdateBehavior;
(function (ScalingPolicyUpdateBehavior) {
  ScalingPolicyUpdateBehavior["KeepExternalPolicies"] = "KeepExternalPolicies";
  ScalingPolicyUpdateBehavior["ReplaceExternalPolicies"] = "ReplaceExternalPolicies";
})(ScalingPolicyUpdateBehavior || (ScalingPolicyUpdateBehavior = {}));
export var ServiceNamespace;
(function (ServiceNamespace) {
  ServiceNamespace["AUTOSCALING"] = "autoscaling";
  ServiceNamespace["DYNAMODB"] = "dynamodb";
  ServiceNamespace["EC2"] = "ec2";
  ServiceNamespace["ECS"] = "ecs";
  ServiceNamespace["RDS"] = "rds";
})(ServiceNamespace || (ServiceNamespace = {}));
export var CustomizedScalingMetricSpecification;
(function (CustomizedScalingMetricSpecification) {
  /**
   * @internal
   */
  CustomizedScalingMetricSpecification.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CustomizedScalingMetricSpecification || (CustomizedScalingMetricSpecification = {}));
export var ScalingMetricType;
(function (ScalingMetricType) {
  ScalingMetricType["ALBRequestCountPerTarget"] = "ALBRequestCountPerTarget";
  ScalingMetricType["ASGAverageCPUUtilization"] = "ASGAverageCPUUtilization";
  ScalingMetricType["ASGAverageNetworkIn"] = "ASGAverageNetworkIn";
  ScalingMetricType["ASGAverageNetworkOut"] = "ASGAverageNetworkOut";
  ScalingMetricType["DynamoDBReadCapacityUtilization"] = "DynamoDBReadCapacityUtilization";
  ScalingMetricType["DynamoDBWriteCapacityUtilization"] = "DynamoDBWriteCapacityUtilization";
  ScalingMetricType["EC2SpotFleetRequestAverageCPUUtilization"] = "EC2SpotFleetRequestAverageCPUUtilization";
  ScalingMetricType["EC2SpotFleetRequestAverageNetworkIn"] = "EC2SpotFleetRequestAverageNetworkIn";
  ScalingMetricType["EC2SpotFleetRequestAverageNetworkOut"] = "EC2SpotFleetRequestAverageNetworkOut";
  ScalingMetricType["ECSServiceAverageCPUUtilization"] = "ECSServiceAverageCPUUtilization";
  ScalingMetricType["ECSServiceAverageMemoryUtilization"] = "ECSServiceAverageMemoryUtilization";
  ScalingMetricType["RDSReaderAverageCPUUtilization"] = "RDSReaderAverageCPUUtilization";
  ScalingMetricType["RDSReaderAverageDatabaseConnections"] = "RDSReaderAverageDatabaseConnections";
})(ScalingMetricType || (ScalingMetricType = {}));
export var PredefinedScalingMetricSpecification;
(function (PredefinedScalingMetricSpecification) {
  /**
   * @internal
   */
  PredefinedScalingMetricSpecification.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PredefinedScalingMetricSpecification || (PredefinedScalingMetricSpecification = {}));
export var TargetTrackingConfiguration;
(function (TargetTrackingConfiguration) {
  /**
   * @internal
   */
  TargetTrackingConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TargetTrackingConfiguration || (TargetTrackingConfiguration = {}));
export var ScalingInstruction;
(function (ScalingInstruction) {
  /**
   * @internal
   */
  ScalingInstruction.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ScalingInstruction || (ScalingInstruction = {}));
export var CreateScalingPlanRequest;
(function (CreateScalingPlanRequest) {
  /**
   * @internal
   */
  CreateScalingPlanRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateScalingPlanRequest || (CreateScalingPlanRequest = {}));
export var CreateScalingPlanResponse;
(function (CreateScalingPlanResponse) {
  /**
   * @internal
   */
  CreateScalingPlanResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateScalingPlanResponse || (CreateScalingPlanResponse = {}));
export var InternalServiceException;
(function (InternalServiceException) {
  /**
   * @internal
   */
  InternalServiceException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalServiceException || (InternalServiceException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
export var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidationException || (ValidationException = {}));
export var DeleteScalingPlanRequest;
(function (DeleteScalingPlanRequest) {
  /**
   * @internal
   */
  DeleteScalingPlanRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteScalingPlanRequest || (DeleteScalingPlanRequest = {}));
export var DeleteScalingPlanResponse;
(function (DeleteScalingPlanResponse) {
  /**
   * @internal
   */
  DeleteScalingPlanResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteScalingPlanResponse || (DeleteScalingPlanResponse = {}));
export var ObjectNotFoundException;
(function (ObjectNotFoundException) {
  /**
   * @internal
   */
  ObjectNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ObjectNotFoundException || (ObjectNotFoundException = {}));
export var DescribeScalingPlanResourcesRequest;
(function (DescribeScalingPlanResourcesRequest) {
  /**
   * @internal
   */
  DescribeScalingPlanResourcesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeScalingPlanResourcesRequest || (DescribeScalingPlanResourcesRequest = {}));
export var PolicyType;
(function (PolicyType) {
  PolicyType["TargetTrackingScaling"] = "TargetTrackingScaling";
})(PolicyType || (PolicyType = {}));
export var ScalingPolicy;
(function (ScalingPolicy) {
  /**
   * @internal
   */
  ScalingPolicy.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ScalingPolicy || (ScalingPolicy = {}));
export var ScalingStatusCode;
(function (ScalingStatusCode) {
  ScalingStatusCode["Active"] = "Active";
  ScalingStatusCode["Inactive"] = "Inactive";
  ScalingStatusCode["PartiallyActive"] = "PartiallyActive";
})(ScalingStatusCode || (ScalingStatusCode = {}));
export var ScalingPlanResource;
(function (ScalingPlanResource) {
  /**
   * @internal
   */
  ScalingPlanResource.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ScalingPlanResource || (ScalingPlanResource = {}));
export var DescribeScalingPlanResourcesResponse;
(function (DescribeScalingPlanResourcesResponse) {
  /**
   * @internal
   */
  DescribeScalingPlanResourcesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeScalingPlanResourcesResponse || (DescribeScalingPlanResourcesResponse = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
  /**
   * @internal
   */
  InvalidNextTokenException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var DescribeScalingPlansRequest;
(function (DescribeScalingPlansRequest) {
  /**
   * @internal
   */
  DescribeScalingPlansRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeScalingPlansRequest || (DescribeScalingPlansRequest = {}));
export var ScalingPlanStatusCode;
(function (ScalingPlanStatusCode) {
  ScalingPlanStatusCode["Active"] = "Active";
  ScalingPlanStatusCode["ActiveWithProblems"] = "ActiveWithProblems";
  ScalingPlanStatusCode["CreationFailed"] = "CreationFailed";
  ScalingPlanStatusCode["CreationInProgress"] = "CreationInProgress";
  ScalingPlanStatusCode["DeletionFailed"] = "DeletionFailed";
  ScalingPlanStatusCode["DeletionInProgress"] = "DeletionInProgress";
  ScalingPlanStatusCode["UpdateFailed"] = "UpdateFailed";
  ScalingPlanStatusCode["UpdateInProgress"] = "UpdateInProgress";
})(ScalingPlanStatusCode || (ScalingPlanStatusCode = {}));
export var ScalingPlan;
(function (ScalingPlan) {
  /**
   * @internal
   */
  ScalingPlan.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ScalingPlan || (ScalingPlan = {}));
export var DescribeScalingPlansResponse;
(function (DescribeScalingPlansResponse) {
  /**
   * @internal
   */
  DescribeScalingPlansResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeScalingPlansResponse || (DescribeScalingPlansResponse = {}));
export var ForecastDataType;
(function (ForecastDataType) {
  ForecastDataType["CapacityForecast"] = "CapacityForecast";
  ForecastDataType["LoadForecast"] = "LoadForecast";
  ForecastDataType["ScheduledActionMaxCapacity"] = "ScheduledActionMaxCapacity";
  ForecastDataType["ScheduledActionMinCapacity"] = "ScheduledActionMinCapacity";
})(ForecastDataType || (ForecastDataType = {}));
export var GetScalingPlanResourceForecastDataRequest;
(function (GetScalingPlanResourceForecastDataRequest) {
  /**
   * @internal
   */
  GetScalingPlanResourceForecastDataRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetScalingPlanResourceForecastDataRequest || (GetScalingPlanResourceForecastDataRequest = {}));
export var Datapoint;
(function (Datapoint) {
  /**
   * @internal
   */
  Datapoint.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Datapoint || (Datapoint = {}));
export var GetScalingPlanResourceForecastDataResponse;
(function (GetScalingPlanResourceForecastDataResponse) {
  /**
   * @internal
   */
  GetScalingPlanResourceForecastDataResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetScalingPlanResourceForecastDataResponse || (GetScalingPlanResourceForecastDataResponse = {}));
export var UpdateScalingPlanRequest;
(function (UpdateScalingPlanRequest) {
  /**
   * @internal
   */
  UpdateScalingPlanRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateScalingPlanRequest || (UpdateScalingPlanRequest = {}));
export var UpdateScalingPlanResponse;
(function (UpdateScalingPlanResponse) {
  /**
   * @internal
   */
  UpdateScalingPlanResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateScalingPlanResponse || (UpdateScalingPlanResponse = {}));
//# sourceMappingURL=models_0.js.map
