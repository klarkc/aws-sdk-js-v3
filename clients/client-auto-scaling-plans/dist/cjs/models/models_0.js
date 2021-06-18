"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScalingPlanResponse =
  exports.UpdateScalingPlanRequest =
  exports.GetScalingPlanResourceForecastDataResponse =
  exports.Datapoint =
  exports.GetScalingPlanResourceForecastDataRequest =
  exports.ForecastDataType =
  exports.DescribeScalingPlansResponse =
  exports.ScalingPlan =
  exports.ScalingPlanStatusCode =
  exports.DescribeScalingPlansRequest =
  exports.InvalidNextTokenException =
  exports.DescribeScalingPlanResourcesResponse =
  exports.ScalingPlanResource =
  exports.ScalingStatusCode =
  exports.ScalingPolicy =
  exports.PolicyType =
  exports.DescribeScalingPlanResourcesRequest =
  exports.ObjectNotFoundException =
  exports.DeleteScalingPlanResponse =
  exports.DeleteScalingPlanRequest =
  exports.ValidationException =
  exports.LimitExceededException =
  exports.InternalServiceException =
  exports.CreateScalingPlanResponse =
  exports.CreateScalingPlanRequest =
  exports.ScalingInstruction =
  exports.TargetTrackingConfiguration =
  exports.PredefinedScalingMetricSpecification =
  exports.ScalingMetricType =
  exports.CustomizedScalingMetricSpecification =
  exports.ServiceNamespace =
  exports.ScalingPolicyUpdateBehavior =
  exports.ScalableDimension =
  exports.PredictiveScalingMode =
  exports.PredictiveScalingMaxCapacityBehavior =
  exports.PredefinedLoadMetricSpecification =
  exports.LoadMetricType =
  exports.CustomizedLoadMetricSpecification =
  exports.MetricStatistic =
  exports.MetricDimension =
  exports.ApplicationSource =
  exports.TagFilter =
  exports.ConcurrentUpdateException =
    void 0;
var ConcurrentUpdateException;
(function (ConcurrentUpdateException) {
  /**
   * @internal
   */
  ConcurrentUpdateException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConcurrentUpdateException = exports.ConcurrentUpdateException || (exports.ConcurrentUpdateException = {})));
var TagFilter;
(function (TagFilter) {
  /**
   * @internal
   */
  TagFilter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagFilter = exports.TagFilter || (exports.TagFilter = {})));
var ApplicationSource;
(function (ApplicationSource) {
  /**
   * @internal
   */
  ApplicationSource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApplicationSource = exports.ApplicationSource || (exports.ApplicationSource = {})));
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
var CustomizedLoadMetricSpecification;
(function (CustomizedLoadMetricSpecification) {
  /**
   * @internal
   */
  CustomizedLoadMetricSpecification.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CustomizedLoadMetricSpecification =
    exports.CustomizedLoadMetricSpecification || (exports.CustomizedLoadMetricSpecification = {}))
);
var LoadMetricType;
(function (LoadMetricType) {
  LoadMetricType["ALBTargetGroupRequestCount"] = "ALBTargetGroupRequestCount";
  LoadMetricType["ASGTotalCPUUtilization"] = "ASGTotalCPUUtilization";
  LoadMetricType["ASGTotalNetworkIn"] = "ASGTotalNetworkIn";
  LoadMetricType["ASGTotalNetworkOut"] = "ASGTotalNetworkOut";
})((LoadMetricType = exports.LoadMetricType || (exports.LoadMetricType = {})));
var PredefinedLoadMetricSpecification;
(function (PredefinedLoadMetricSpecification) {
  /**
   * @internal
   */
  PredefinedLoadMetricSpecification.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PredefinedLoadMetricSpecification =
    exports.PredefinedLoadMetricSpecification || (exports.PredefinedLoadMetricSpecification = {}))
);
var PredictiveScalingMaxCapacityBehavior;
(function (PredictiveScalingMaxCapacityBehavior) {
  PredictiveScalingMaxCapacityBehavior["SetForecastCapacityToMaxCapacity"] = "SetForecastCapacityToMaxCapacity";
  PredictiveScalingMaxCapacityBehavior["SetMaxCapacityAboveForecastCapacity"] = "SetMaxCapacityAboveForecastCapacity";
  PredictiveScalingMaxCapacityBehavior["SetMaxCapacityToForecastCapacity"] = "SetMaxCapacityToForecastCapacity";
})(
  (PredictiveScalingMaxCapacityBehavior =
    exports.PredictiveScalingMaxCapacityBehavior || (exports.PredictiveScalingMaxCapacityBehavior = {}))
);
var PredictiveScalingMode;
(function (PredictiveScalingMode) {
  PredictiveScalingMode["ForecastAndScale"] = "ForecastAndScale";
  PredictiveScalingMode["ForecastOnly"] = "ForecastOnly";
})((PredictiveScalingMode = exports.PredictiveScalingMode || (exports.PredictiveScalingMode = {})));
var ScalableDimension;
(function (ScalableDimension) {
  ScalableDimension["AutoScalingGroupDesiredCapacity"] = "autoscaling:autoScalingGroup:DesiredCapacity";
  ScalableDimension["DynamoDBIndexReadCapacityUnits"] = "dynamodb:index:ReadCapacityUnits";
  ScalableDimension["DynamoDBIndexWriteCapacityUnits"] = "dynamodb:index:WriteCapacityUnits";
  ScalableDimension["DynamoDBTableReadCapacityUnits"] = "dynamodb:table:ReadCapacityUnits";
  ScalableDimension["DynamoDBTableWriteCapacityUnits"] = "dynamodb:table:WriteCapacityUnits";
  ScalableDimension["EC2SpotFleetRequestTargetCapacity"] = "ec2:spot-fleet-request:TargetCapacity";
  ScalableDimension["ECSServiceDesiredCount"] = "ecs:service:DesiredCount";
  ScalableDimension["RDSClusterReadReplicaCount"] = "rds:cluster:ReadReplicaCount";
})((ScalableDimension = exports.ScalableDimension || (exports.ScalableDimension = {})));
var ScalingPolicyUpdateBehavior;
(function (ScalingPolicyUpdateBehavior) {
  ScalingPolicyUpdateBehavior["KeepExternalPolicies"] = "KeepExternalPolicies";
  ScalingPolicyUpdateBehavior["ReplaceExternalPolicies"] = "ReplaceExternalPolicies";
})((ScalingPolicyUpdateBehavior = exports.ScalingPolicyUpdateBehavior || (exports.ScalingPolicyUpdateBehavior = {})));
var ServiceNamespace;
(function (ServiceNamespace) {
  ServiceNamespace["AUTOSCALING"] = "autoscaling";
  ServiceNamespace["DYNAMODB"] = "dynamodb";
  ServiceNamespace["EC2"] = "ec2";
  ServiceNamespace["ECS"] = "ecs";
  ServiceNamespace["RDS"] = "rds";
})((ServiceNamespace = exports.ServiceNamespace || (exports.ServiceNamespace = {})));
var CustomizedScalingMetricSpecification;
(function (CustomizedScalingMetricSpecification) {
  /**
   * @internal
   */
  CustomizedScalingMetricSpecification.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CustomizedScalingMetricSpecification =
    exports.CustomizedScalingMetricSpecification || (exports.CustomizedScalingMetricSpecification = {}))
);
var ScalingMetricType;
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
})((ScalingMetricType = exports.ScalingMetricType || (exports.ScalingMetricType = {})));
var PredefinedScalingMetricSpecification;
(function (PredefinedScalingMetricSpecification) {
  /**
   * @internal
   */
  PredefinedScalingMetricSpecification.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PredefinedScalingMetricSpecification =
    exports.PredefinedScalingMetricSpecification || (exports.PredefinedScalingMetricSpecification = {}))
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
var ScalingInstruction;
(function (ScalingInstruction) {
  /**
   * @internal
   */
  ScalingInstruction.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScalingInstruction = exports.ScalingInstruction || (exports.ScalingInstruction = {})));
var CreateScalingPlanRequest;
(function (CreateScalingPlanRequest) {
  /**
   * @internal
   */
  CreateScalingPlanRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateScalingPlanRequest = exports.CreateScalingPlanRequest || (exports.CreateScalingPlanRequest = {})));
var CreateScalingPlanResponse;
(function (CreateScalingPlanResponse) {
  /**
   * @internal
   */
  CreateScalingPlanResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateScalingPlanResponse = exports.CreateScalingPlanResponse || (exports.CreateScalingPlanResponse = {})));
var InternalServiceException;
(function (InternalServiceException) {
  /**
   * @internal
   */
  InternalServiceException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {})));
var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {})));
var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationException = exports.ValidationException || (exports.ValidationException = {})));
var DeleteScalingPlanRequest;
(function (DeleteScalingPlanRequest) {
  /**
   * @internal
   */
  DeleteScalingPlanRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteScalingPlanRequest = exports.DeleteScalingPlanRequest || (exports.DeleteScalingPlanRequest = {})));
var DeleteScalingPlanResponse;
(function (DeleteScalingPlanResponse) {
  /**
   * @internal
   */
  DeleteScalingPlanResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteScalingPlanResponse = exports.DeleteScalingPlanResponse || (exports.DeleteScalingPlanResponse = {})));
var ObjectNotFoundException;
(function (ObjectNotFoundException) {
  /**
   * @internal
   */
  ObjectNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ObjectNotFoundException = exports.ObjectNotFoundException || (exports.ObjectNotFoundException = {})));
var DescribeScalingPlanResourcesRequest;
(function (DescribeScalingPlanResourcesRequest) {
  /**
   * @internal
   */
  DescribeScalingPlanResourcesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScalingPlanResourcesRequest =
    exports.DescribeScalingPlanResourcesRequest || (exports.DescribeScalingPlanResourcesRequest = {}))
);
var PolicyType;
(function (PolicyType) {
  PolicyType["TargetTrackingScaling"] = "TargetTrackingScaling";
})((PolicyType = exports.PolicyType || (exports.PolicyType = {})));
var ScalingPolicy;
(function (ScalingPolicy) {
  /**
   * @internal
   */
  ScalingPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScalingPolicy = exports.ScalingPolicy || (exports.ScalingPolicy = {})));
var ScalingStatusCode;
(function (ScalingStatusCode) {
  ScalingStatusCode["Active"] = "Active";
  ScalingStatusCode["Inactive"] = "Inactive";
  ScalingStatusCode["PartiallyActive"] = "PartiallyActive";
})((ScalingStatusCode = exports.ScalingStatusCode || (exports.ScalingStatusCode = {})));
var ScalingPlanResource;
(function (ScalingPlanResource) {
  /**
   * @internal
   */
  ScalingPlanResource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScalingPlanResource = exports.ScalingPlanResource || (exports.ScalingPlanResource = {})));
var DescribeScalingPlanResourcesResponse;
(function (DescribeScalingPlanResourcesResponse) {
  /**
   * @internal
   */
  DescribeScalingPlanResourcesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScalingPlanResourcesResponse =
    exports.DescribeScalingPlanResourcesResponse || (exports.DescribeScalingPlanResourcesResponse = {}))
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
var DescribeScalingPlansRequest;
(function (DescribeScalingPlansRequest) {
  /**
   * @internal
   */
  DescribeScalingPlansRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeScalingPlansRequest = exports.DescribeScalingPlansRequest || (exports.DescribeScalingPlansRequest = {})));
var ScalingPlanStatusCode;
(function (ScalingPlanStatusCode) {
  ScalingPlanStatusCode["Active"] = "Active";
  ScalingPlanStatusCode["ActiveWithProblems"] = "ActiveWithProblems";
  ScalingPlanStatusCode["CreationFailed"] = "CreationFailed";
  ScalingPlanStatusCode["CreationInProgress"] = "CreationInProgress";
  ScalingPlanStatusCode["DeletionFailed"] = "DeletionFailed";
  ScalingPlanStatusCode["DeletionInProgress"] = "DeletionInProgress";
  ScalingPlanStatusCode["UpdateFailed"] = "UpdateFailed";
  ScalingPlanStatusCode["UpdateInProgress"] = "UpdateInProgress";
})((ScalingPlanStatusCode = exports.ScalingPlanStatusCode || (exports.ScalingPlanStatusCode = {})));
var ScalingPlan;
(function (ScalingPlan) {
  /**
   * @internal
   */
  ScalingPlan.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScalingPlan = exports.ScalingPlan || (exports.ScalingPlan = {})));
var DescribeScalingPlansResponse;
(function (DescribeScalingPlansResponse) {
  /**
   * @internal
   */
  DescribeScalingPlansResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeScalingPlansResponse = exports.DescribeScalingPlansResponse || (exports.DescribeScalingPlansResponse = {}))
);
var ForecastDataType;
(function (ForecastDataType) {
  ForecastDataType["CapacityForecast"] = "CapacityForecast";
  ForecastDataType["LoadForecast"] = "LoadForecast";
  ForecastDataType["ScheduledActionMaxCapacity"] = "ScheduledActionMaxCapacity";
  ForecastDataType["ScheduledActionMinCapacity"] = "ScheduledActionMinCapacity";
})((ForecastDataType = exports.ForecastDataType || (exports.ForecastDataType = {})));
var GetScalingPlanResourceForecastDataRequest;
(function (GetScalingPlanResourceForecastDataRequest) {
  /**
   * @internal
   */
  GetScalingPlanResourceForecastDataRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetScalingPlanResourceForecastDataRequest =
    exports.GetScalingPlanResourceForecastDataRequest || (exports.GetScalingPlanResourceForecastDataRequest = {}))
);
var Datapoint;
(function (Datapoint) {
  /**
   * @internal
   */
  Datapoint.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Datapoint = exports.Datapoint || (exports.Datapoint = {})));
var GetScalingPlanResourceForecastDataResponse;
(function (GetScalingPlanResourceForecastDataResponse) {
  /**
   * @internal
   */
  GetScalingPlanResourceForecastDataResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetScalingPlanResourceForecastDataResponse =
    exports.GetScalingPlanResourceForecastDataResponse || (exports.GetScalingPlanResourceForecastDataResponse = {}))
);
var UpdateScalingPlanRequest;
(function (UpdateScalingPlanRequest) {
  /**
   * @internal
   */
  UpdateScalingPlanRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateScalingPlanRequest = exports.UpdateScalingPlanRequest || (exports.UpdateScalingPlanRequest = {})));
var UpdateScalingPlanResponse;
(function (UpdateScalingPlanResponse) {
  /**
   * @internal
   */
  UpdateScalingPlanResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateScalingPlanResponse = exports.UpdateScalingPlanResponse || (exports.UpdateScalingPlanResponse = {})));
//# sourceMappingURL=models_0.js.map
