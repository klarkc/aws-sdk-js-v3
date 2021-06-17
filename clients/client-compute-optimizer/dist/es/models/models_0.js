import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AutoScalingGroupConfiguration;
(function (AutoScalingGroupConfiguration) {
    /**
     * @internal
     */
    AutoScalingGroupConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoScalingGroupConfiguration || (AutoScalingGroupConfiguration = {}));
export var Finding;
(function (Finding) {
    Finding["NOT_OPTIMIZED"] = "NotOptimized";
    Finding["OPTIMIZED"] = "Optimized";
    Finding["OVER_PROVISIONED"] = "Overprovisioned";
    Finding["UNDER_PROVISIONED"] = "Underprovisioned";
})(Finding || (Finding = {}));
export var MetricName;
(function (MetricName) {
    MetricName["CPU"] = "Cpu";
    MetricName["DISK_READ_BYTES_PER_SECOND"] = "DISK_READ_BYTES_PER_SECOND";
    MetricName["DISK_READ_OPS_PER_SECOND"] = "DISK_READ_OPS_PER_SECOND";
    MetricName["DISK_WRITE_BYTES_PER_SECOND"] = "DISK_WRITE_BYTES_PER_SECOND";
    MetricName["DISK_WRITE_OPS_PER_SECOND"] = "DISK_WRITE_OPS_PER_SECOND";
    MetricName["EBS_READ_BYTES_PER_SECOND"] = "EBS_READ_BYTES_PER_SECOND";
    MetricName["EBS_READ_OPS_PER_SECOND"] = "EBS_READ_OPS_PER_SECOND";
    MetricName["EBS_WRITE_BYTES_PER_SECOND"] = "EBS_WRITE_BYTES_PER_SECOND";
    MetricName["EBS_WRITE_OPS_PER_SECOND"] = "EBS_WRITE_OPS_PER_SECOND";
    MetricName["MEMORY"] = "Memory";
    MetricName["NETWORK_IN_BYTES_PER_SECOND"] = "NETWORK_IN_BYTES_PER_SECOND";
    MetricName["NETWORK_OUT_BYTES_PER_SECOND"] = "NETWORK_OUT_BYTES_PER_SECOND";
    MetricName["NETWORK_PACKETS_IN_PER_SECOND"] = "NETWORK_PACKETS_IN_PER_SECOND";
    MetricName["NETWORK_PACKETS_OUT_PER_SECOND"] = "NETWORK_PACKETS_OUT_PER_SECOND";
})(MetricName || (MetricName = {}));
export var MetricStatistic;
(function (MetricStatistic) {
    MetricStatistic["AVERAGE"] = "Average";
    MetricStatistic["MAXIMUM"] = "Maximum";
})(MetricStatistic || (MetricStatistic = {}));
export var UtilizationMetric;
(function (UtilizationMetric) {
    /**
     * @internal
     */
    UtilizationMetric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UtilizationMetric || (UtilizationMetric = {}));
export var AutoScalingGroupRecommendationOption;
(function (AutoScalingGroupRecommendationOption) {
    /**
     * @internal
     */
    AutoScalingGroupRecommendationOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoScalingGroupRecommendationOption || (AutoScalingGroupRecommendationOption = {}));
export var AutoScalingGroupRecommendation;
(function (AutoScalingGroupRecommendation) {
    /**
     * @internal
     */
    AutoScalingGroupRecommendation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoScalingGroupRecommendation || (AutoScalingGroupRecommendation = {}));
export var JobFilterName;
(function (JobFilterName) {
    JobFilterName["JOB_STATUS"] = "JobStatus";
    JobFilterName["RESOURCE_TYPE"] = "ResourceType";
})(JobFilterName || (JobFilterName = {}));
export var JobFilter;
(function (JobFilter) {
    /**
     * @internal
     */
    JobFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobFilter || (JobFilter = {}));
export var DescribeRecommendationExportJobsRequest;
(function (DescribeRecommendationExportJobsRequest) {
    /**
     * @internal
     */
    DescribeRecommendationExportJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRecommendationExportJobsRequest || (DescribeRecommendationExportJobsRequest = {}));
export var S3Destination;
(function (S3Destination) {
    /**
     * @internal
     */
    S3Destination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Destination || (S3Destination = {}));
export var ExportDestination;
(function (ExportDestination) {
    /**
     * @internal
     */
    ExportDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportDestination || (ExportDestination = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["AUTO_SCALING_GROUP"] = "AutoScalingGroup";
    ResourceType["EBS_VOLUME"] = "EbsVolume";
    ResourceType["EC2_INSTANCE"] = "Ec2Instance";
    ResourceType["LAMBDA_FUNCTION"] = "LambdaFunction";
})(ResourceType || (ResourceType = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETE"] = "Complete";
    JobStatus["FAILED"] = "Failed";
    JobStatus["IN_PROGRESS"] = "InProgress";
    JobStatus["QUEUED"] = "Queued";
})(JobStatus || (JobStatus = {}));
export var RecommendationExportJob;
(function (RecommendationExportJob) {
    /**
     * @internal
     */
    RecommendationExportJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecommendationExportJob || (RecommendationExportJob = {}));
export var DescribeRecommendationExportJobsResponse;
(function (DescribeRecommendationExportJobsResponse) {
    /**
     * @internal
     */
    DescribeRecommendationExportJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRecommendationExportJobsResponse || (DescribeRecommendationExportJobsResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterValueException || (InvalidParameterValueException = {}));
export var MissingAuthenticationToken;
(function (MissingAuthenticationToken) {
    /**
     * @internal
     */
    MissingAuthenticationToken.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MissingAuthenticationToken || (MissingAuthenticationToken = {}));
export var OptInRequiredException;
(function (OptInRequiredException) {
    /**
     * @internal
     */
    OptInRequiredException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OptInRequiredException || (OptInRequiredException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ExportableAutoScalingGroupField;
(function (ExportableAutoScalingGroupField) {
    ExportableAutoScalingGroupField["ACCOUNT_ID"] = "AccountId";
    ExportableAutoScalingGroupField["AUTO_SCALING_GROUP_ARN"] = "AutoScalingGroupArn";
    ExportableAutoScalingGroupField["AUTO_SCALING_GROUP_NAME"] = "AutoScalingGroupName";
    ExportableAutoScalingGroupField["CURRENT_CONFIGURATION_DESIRED_CAPACITY"] = "CurrentConfigurationDesiredCapacity";
    ExportableAutoScalingGroupField["CURRENT_CONFIGURATION_INSTANCE_TYPE"] = "CurrentConfigurationInstanceType";
    ExportableAutoScalingGroupField["CURRENT_CONFIGURATION_MAX_SIZE"] = "CurrentConfigurationMaxSize";
    ExportableAutoScalingGroupField["CURRENT_CONFIGURATION_MIN_SIZE"] = "CurrentConfigurationMinSize";
    ExportableAutoScalingGroupField["CURRENT_MEMORY"] = "CurrentMemory";
    ExportableAutoScalingGroupField["CURRENT_NETWORK"] = "CurrentNetwork";
    ExportableAutoScalingGroupField["CURRENT_ON_DEMAND_PRICE"] = "CurrentOnDemandPrice";
    ExportableAutoScalingGroupField["CURRENT_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE"] = "CurrentStandardOneYearNoUpfrontReservedPrice";
    ExportableAutoScalingGroupField["CURRENT_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE"] = "CurrentStandardThreeYearNoUpfrontReservedPrice";
    ExportableAutoScalingGroupField["CURRENT_STORAGE"] = "CurrentStorage";
    ExportableAutoScalingGroupField["CURRENT_VCPUS"] = "CurrentVCpus";
    ExportableAutoScalingGroupField["FINDING"] = "Finding";
    ExportableAutoScalingGroupField["LAST_REFRESH_TIMESTAMP"] = "LastRefreshTimestamp";
    ExportableAutoScalingGroupField["LOOKBACK_PERIOD_IN_DAYS"] = "LookbackPeriodInDays";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_CONFIGURATION_DESIRED_CAPACITY"] = "RecommendationOptionsConfigurationDesiredCapacity";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_CONFIGURATION_INSTANCE_TYPE"] = "RecommendationOptionsConfigurationInstanceType";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_CONFIGURATION_MAX_SIZE"] = "RecommendationOptionsConfigurationMaxSize";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_CONFIGURATION_MIN_SIZE"] = "RecommendationOptionsConfigurationMinSize";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_MEMORY"] = "RecommendationOptionsMemory";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_NETWORK"] = "RecommendationOptionsNetwork";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE"] = "RecommendationOptionsOnDemandPrice";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_PERFORMANCE_RISK"] = "RecommendationOptionsPerformanceRisk";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM"] = "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM"] = "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE"] = "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE"] = "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_STORAGE"] = "RecommendationOptionsStorage";
    ExportableAutoScalingGroupField["RECOMMENDATION_OPTIONS_VCPUS"] = "RecommendationOptionsVcpus";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_CPU_MAXIMUM"] = "UtilizationMetricsCpuMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_DISK_READ_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsDiskReadBytesPerSecondMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_DISK_READ_OPS_PER_SECOND_MAXIMUM"] = "UtilizationMetricsDiskReadOpsPerSecondMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_DISK_WRITE_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsDiskWriteBytesPerSecondMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_DISK_WRITE_OPS_PER_SECOND_MAXIMUM"] = "UtilizationMetricsDiskWriteOpsPerSecondMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_EBS_READ_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsEbsReadBytesPerSecondMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_EBS_READ_OPS_PER_SECOND_MAXIMUM"] = "UtilizationMetricsEbsReadOpsPerSecondMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_EBS_WRITE_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsEbsWriteBytesPerSecondMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_EBS_WRITE_OPS_PER_SECOND_MAXIMUM"] = "UtilizationMetricsEbsWriteOpsPerSecondMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_MEMORY_MAXIMUM"] = "UtilizationMetricsMemoryMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_NETWORK_IN_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsNetworkInBytesPerSecondMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_NETWORK_OUT_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsNetworkOutBytesPerSecondMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_NETWORK_PACKETS_IN_PER_SECOND_MAXIMUM"] = "UtilizationMetricsNetworkPacketsInPerSecondMaximum";
    ExportableAutoScalingGroupField["UTILIZATION_METRICS_NETWORK_PACKETS_OUT_PER_SECOND_MAXIMUM"] = "UtilizationMetricsNetworkPacketsOutPerSecondMaximum";
})(ExportableAutoScalingGroupField || (ExportableAutoScalingGroupField = {}));
export var FileFormat;
(function (FileFormat) {
    FileFormat["CSV"] = "Csv";
})(FileFormat || (FileFormat = {}));
export var FilterName;
(function (FilterName) {
    FilterName["FINDING"] = "Finding";
    FilterName["FINDING_REASON_CODES"] = "FindingReasonCodes";
    FilterName["RECOMMENDATION_SOURCE_TYPE"] = "RecommendationSourceType";
})(FilterName || (FilterName = {}));
export var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Filter || (Filter = {}));
export var S3DestinationConfig;
(function (S3DestinationConfig) {
    /**
     * @internal
     */
    S3DestinationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3DestinationConfig || (S3DestinationConfig = {}));
export var ExportAutoScalingGroupRecommendationsRequest;
(function (ExportAutoScalingGroupRecommendationsRequest) {
    /**
     * @internal
     */
    ExportAutoScalingGroupRecommendationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportAutoScalingGroupRecommendationsRequest || (ExportAutoScalingGroupRecommendationsRequest = {}));
export var ExportAutoScalingGroupRecommendationsResponse;
(function (ExportAutoScalingGroupRecommendationsResponse) {
    /**
     * @internal
     */
    ExportAutoScalingGroupRecommendationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportAutoScalingGroupRecommendationsResponse || (ExportAutoScalingGroupRecommendationsResponse = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var ExportableVolumeField;
(function (ExportableVolumeField) {
    ExportableVolumeField["ACCOUNT_ID"] = "AccountId";
    ExportableVolumeField["CURRENT_CONFIGURATION_VOLUME_BASELINE_IOPS"] = "CurrentConfigurationVolumeBaselineIOPS";
    ExportableVolumeField["CURRENT_CONFIGURATION_VOLUME_BASELINE_THROUGHPUT"] = "CurrentConfigurationVolumeBaselineThroughput";
    ExportableVolumeField["CURRENT_CONFIGURATION_VOLUME_BURST_IOPS"] = "CurrentConfigurationVolumeBurstIOPS";
    ExportableVolumeField["CURRENT_CONFIGURATION_VOLUME_BURST_THROUGHPUT"] = "CurrentConfigurationVolumeBurstThroughput";
    ExportableVolumeField["CURRENT_CONFIGURATION_VOLUME_SIZE"] = "CurrentConfigurationVolumeSize";
    ExportableVolumeField["CURRENT_CONFIGURATION_VOLUME_TYPE"] = "CurrentConfigurationVolumeType";
    ExportableVolumeField["CURRENT_MONTHLY_PRICE"] = "CurrentMonthlyPrice";
    ExportableVolumeField["FINDING"] = "Finding";
    ExportableVolumeField["LAST_REFRESH_TIMESTAMP"] = "LastRefreshTimestamp";
    ExportableVolumeField["LOOKBACK_PERIOD_IN_DAYS"] = "LookbackPeriodInDays";
    ExportableVolumeField["RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BASELINE_IOPS"] = "RecommendationOptionsConfigurationVolumeBaselineIOPS";
    ExportableVolumeField["RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BASELINE_THROUGHPUT"] = "RecommendationOptionsConfigurationVolumeBaselineThroughput";
    ExportableVolumeField["RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_IOPS"] = "RecommendationOptionsConfigurationVolumeBurstIOPS";
    ExportableVolumeField["RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_THROUGHPUT"] = "RecommendationOptionsConfigurationVolumeBurstThroughput";
    ExportableVolumeField["RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_SIZE"] = "RecommendationOptionsConfigurationVolumeSize";
    ExportableVolumeField["RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_TYPE"] = "RecommendationOptionsConfigurationVolumeType";
    ExportableVolumeField["RECOMMENDATION_OPTIONS_MONTHLY_PRICE"] = "RecommendationOptionsMonthlyPrice";
    ExportableVolumeField["RECOMMENDATION_OPTIONS_PERFORMANCE_RISK"] = "RecommendationOptionsPerformanceRisk";
    ExportableVolumeField["UTILIZATION_METRICS_VOLUME_READ_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsVolumeReadBytesPerSecondMaximum";
    ExportableVolumeField["UTILIZATION_METRICS_VOLUME_READ_OPS_PER_SECOND_MAXIMUM"] = "UtilizationMetricsVolumeReadOpsPerSecondMaximum";
    ExportableVolumeField["UTILIZATION_METRICS_VOLUME_WRITE_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsVolumeWriteBytesPerSecondMaximum";
    ExportableVolumeField["UTILIZATION_METRICS_VOLUME_WRITE_OPS_PER_SECOND_MAXIMUM"] = "UtilizationMetricsVolumeWriteOpsPerSecondMaximum";
    ExportableVolumeField["VOLUME_ARN"] = "VolumeArn";
})(ExportableVolumeField || (ExportableVolumeField = {}));
export var EBSFilterName;
(function (EBSFilterName) {
    EBSFilterName["FINDING"] = "Finding";
})(EBSFilterName || (EBSFilterName = {}));
export var EBSFilter;
(function (EBSFilter) {
    /**
     * @internal
     */
    EBSFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EBSFilter || (EBSFilter = {}));
export var ExportEBSVolumeRecommendationsRequest;
(function (ExportEBSVolumeRecommendationsRequest) {
    /**
     * @internal
     */
    ExportEBSVolumeRecommendationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportEBSVolumeRecommendationsRequest || (ExportEBSVolumeRecommendationsRequest = {}));
export var ExportEBSVolumeRecommendationsResponse;
(function (ExportEBSVolumeRecommendationsResponse) {
    /**
     * @internal
     */
    ExportEBSVolumeRecommendationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportEBSVolumeRecommendationsResponse || (ExportEBSVolumeRecommendationsResponse = {}));
export var ExportableInstanceField;
(function (ExportableInstanceField) {
    ExportableInstanceField["ACCOUNT_ID"] = "AccountId";
    ExportableInstanceField["CURRENT_INSTANCE_TYPE"] = "CurrentInstanceType";
    ExportableInstanceField["CURRENT_MEMORY"] = "CurrentMemory";
    ExportableInstanceField["CURRENT_NETWORK"] = "CurrentNetwork";
    ExportableInstanceField["CURRENT_ON_DEMAND_PRICE"] = "CurrentOnDemandPrice";
    ExportableInstanceField["CURRENT_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE"] = "CurrentStandardOneYearNoUpfrontReservedPrice";
    ExportableInstanceField["CURRENT_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE"] = "CurrentStandardThreeYearNoUpfrontReservedPrice";
    ExportableInstanceField["CURRENT_STORAGE"] = "CurrentStorage";
    ExportableInstanceField["CURRENT_VCPUS"] = "CurrentVCpus";
    ExportableInstanceField["FINDING"] = "Finding";
    ExportableInstanceField["Finding_Reason_Codes"] = "FindingReasonCodes";
    ExportableInstanceField["INSTANCE_ARN"] = "InstanceArn";
    ExportableInstanceField["INSTANCE_NAME"] = "InstanceName";
    ExportableInstanceField["LAST_REFRESH_TIMESTAMP"] = "LastRefreshTimestamp";
    ExportableInstanceField["LOOKBACK_PERIOD_IN_DAYS"] = "LookbackPeriodInDays";
    ExportableInstanceField["RECOMMENDATIONS_SOURCES_RECOMMENDATION_SOURCE_ARN"] = "RecommendationsSourcesRecommendationSourceArn";
    ExportableInstanceField["RECOMMENDATIONS_SOURCES_RECOMMENDATION_SOURCE_TYPE"] = "RecommendationsSourcesRecommendationSourceType";
    ExportableInstanceField["RECOMMENDATION_OPTIONS_INSTANCE_TYPE"] = "RecommendationOptionsInstanceType";
    ExportableInstanceField["RECOMMENDATION_OPTIONS_MEMORY"] = "RecommendationOptionsMemory";
    ExportableInstanceField["RECOMMENDATION_OPTIONS_NETWORK"] = "RecommendationOptionsNetwork";
    ExportableInstanceField["RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE"] = "RecommendationOptionsOnDemandPrice";
    ExportableInstanceField["RECOMMENDATION_OPTIONS_PERFORMANCE_RISK"] = "RecommendationOptionsPerformanceRisk";
    ExportableInstanceField["RECOMMENDATION_OPTIONS_PLATFORM_DIFFERENCES"] = "RecommendationOptionsPlatformDifferences";
    ExportableInstanceField["RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM"] = "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum";
    ExportableInstanceField["RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM"] = "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum";
    ExportableInstanceField["RECOMMENDATION_OPTIONS_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE"] = "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice";
    ExportableInstanceField["RECOMMENDATION_OPTIONS_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE"] = "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice";
    ExportableInstanceField["RECOMMENDATION_OPTIONS_STORAGE"] = "RecommendationOptionsStorage";
    ExportableInstanceField["RECOMMENDATION_OPTIONS_VCPUS"] = "RecommendationOptionsVcpus";
    ExportableInstanceField["UTILIZATION_METRICS_CPU_MAXIMUM"] = "UtilizationMetricsCpuMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_DISK_READ_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsDiskReadBytesPerSecondMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_DISK_READ_OPS_PER_SECOND_MAXIMUM"] = "UtilizationMetricsDiskReadOpsPerSecondMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_DISK_WRITE_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsDiskWriteBytesPerSecondMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_DISK_WRITE_OPS_PER_SECOND_MAXIMUM"] = "UtilizationMetricsDiskWriteOpsPerSecondMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_EBS_READ_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsEbsReadBytesPerSecondMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_EBS_READ_OPS_PER_SECOND_MAXIMUM"] = "UtilizationMetricsEbsReadOpsPerSecondMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_EBS_WRITE_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsEbsWriteBytesPerSecondMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_EBS_WRITE_OPS_PER_SECOND_MAXIMUM"] = "UtilizationMetricsEbsWriteOpsPerSecondMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_MEMORY_MAXIMUM"] = "UtilizationMetricsMemoryMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_NETWORK_IN_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsNetworkInBytesPerSecondMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_NETWORK_OUT_BYTES_PER_SECOND_MAXIMUM"] = "UtilizationMetricsNetworkOutBytesPerSecondMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_NETWORK_PACKETS_IN_PER_SECOND_MAXIMUM"] = "UtilizationMetricsNetworkPacketsInPerSecondMaximum";
    ExportableInstanceField["UTILIZATION_METRICS_NETWORK_PACKETS_OUT_PER_SECOND_MAXIMUM"] = "UtilizationMetricsNetworkPacketsOutPerSecondMaximum";
})(ExportableInstanceField || (ExportableInstanceField = {}));
export var ExportEC2InstanceRecommendationsRequest;
(function (ExportEC2InstanceRecommendationsRequest) {
    /**
     * @internal
     */
    ExportEC2InstanceRecommendationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportEC2InstanceRecommendationsRequest || (ExportEC2InstanceRecommendationsRequest = {}));
export var ExportEC2InstanceRecommendationsResponse;
(function (ExportEC2InstanceRecommendationsResponse) {
    /**
     * @internal
     */
    ExportEC2InstanceRecommendationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportEC2InstanceRecommendationsResponse || (ExportEC2InstanceRecommendationsResponse = {}));
export var ExportableLambdaFunctionField;
(function (ExportableLambdaFunctionField) {
    ExportableLambdaFunctionField["ACCOUNT_ID"] = "AccountId";
    ExportableLambdaFunctionField["CURRENT_CONFIGURATION_MEMORY_SIZE"] = "CurrentConfigurationMemorySize";
    ExportableLambdaFunctionField["CURRENT_CONFIGURATION_TIMEOUT"] = "CurrentConfigurationTimeout";
    ExportableLambdaFunctionField["CURRENT_COST_AVERAGE"] = "CurrentCostAverage";
    ExportableLambdaFunctionField["CURRENT_COST_TOTAL"] = "CurrentCostTotal";
    ExportableLambdaFunctionField["FINDING"] = "Finding";
    ExportableLambdaFunctionField["FINDING_REASON_CODES"] = "FindingReasonCodes";
    ExportableLambdaFunctionField["FUNCTION_ARN"] = "FunctionArn";
    ExportableLambdaFunctionField["FUNCTION_VERSION"] = "FunctionVersion";
    ExportableLambdaFunctionField["LAST_REFRESH_TIMESTAMP"] = "LastRefreshTimestamp";
    ExportableLambdaFunctionField["LOOKBACK_PERIOD_IN_DAYS"] = "LookbackPeriodInDays";
    ExportableLambdaFunctionField["NUMBER_OF_INVOCATIONS"] = "NumberOfInvocations";
    ExportableLambdaFunctionField["RECOMMENDATION_OPTIONS_CONFIGURATION_MEMORY_SIZE"] = "RecommendationOptionsConfigurationMemorySize";
    ExportableLambdaFunctionField["RECOMMENDATION_OPTIONS_COST_HIGH"] = "RecommendationOptionsCostHigh";
    ExportableLambdaFunctionField["RECOMMENDATION_OPTIONS_COST_LOW"] = "RecommendationOptionsCostLow";
    ExportableLambdaFunctionField["RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_EXPECTED"] = "RecommendationOptionsProjectedUtilizationMetricsDurationExpected";
    ExportableLambdaFunctionField["RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_LOWER_BOUND"] = "RecommendationOptionsProjectedUtilizationMetricsDurationLowerBound";
    ExportableLambdaFunctionField["RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_UPPER_BOUND"] = "RecommendationOptionsProjectedUtilizationMetricsDurationUpperBound";
    ExportableLambdaFunctionField["UTILIZATION_METRICS_DURATION_AVERAGE"] = "UtilizationMetricsDurationAverage";
    ExportableLambdaFunctionField["UTILIZATION_METRICS_DURATION_MAXIMUM"] = "UtilizationMetricsDurationMaximum";
    ExportableLambdaFunctionField["UTILIZATION_METRICS_MEMORY_AVERAGE"] = "UtilizationMetricsMemoryAverage";
    ExportableLambdaFunctionField["UTILIZATION_METRICS_MEMORY_MAXIMUM"] = "UtilizationMetricsMemoryMaximum";
})(ExportableLambdaFunctionField || (ExportableLambdaFunctionField = {}));
export var LambdaFunctionRecommendationFilterName;
(function (LambdaFunctionRecommendationFilterName) {
    LambdaFunctionRecommendationFilterName["FINDING"] = "Finding";
    LambdaFunctionRecommendationFilterName["FINDING_REASON_CODE"] = "FindingReasonCode";
})(LambdaFunctionRecommendationFilterName || (LambdaFunctionRecommendationFilterName = {}));
export var LambdaFunctionRecommendationFilter;
(function (LambdaFunctionRecommendationFilter) {
    /**
     * @internal
     */
    LambdaFunctionRecommendationFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaFunctionRecommendationFilter || (LambdaFunctionRecommendationFilter = {}));
export var ExportLambdaFunctionRecommendationsRequest;
(function (ExportLambdaFunctionRecommendationsRequest) {
    /**
     * @internal
     */
    ExportLambdaFunctionRecommendationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportLambdaFunctionRecommendationsRequest || (ExportLambdaFunctionRecommendationsRequest = {}));
export var ExportLambdaFunctionRecommendationsResponse;
(function (ExportLambdaFunctionRecommendationsResponse) {
    /**
     * @internal
     */
    ExportLambdaFunctionRecommendationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportLambdaFunctionRecommendationsResponse || (ExportLambdaFunctionRecommendationsResponse = {}));
export var GetAutoScalingGroupRecommendationsRequest;
(function (GetAutoScalingGroupRecommendationsRequest) {
    /**
     * @internal
     */
    GetAutoScalingGroupRecommendationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAutoScalingGroupRecommendationsRequest || (GetAutoScalingGroupRecommendationsRequest = {}));
export var GetRecommendationError;
(function (GetRecommendationError) {
    /**
     * @internal
     */
    GetRecommendationError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRecommendationError || (GetRecommendationError = {}));
export var GetAutoScalingGroupRecommendationsResponse;
(function (GetAutoScalingGroupRecommendationsResponse) {
    /**
     * @internal
     */
    GetAutoScalingGroupRecommendationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAutoScalingGroupRecommendationsResponse || (GetAutoScalingGroupRecommendationsResponse = {}));
export var GetEBSVolumeRecommendationsRequest;
(function (GetEBSVolumeRecommendationsRequest) {
    /**
     * @internal
     */
    GetEBSVolumeRecommendationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEBSVolumeRecommendationsRequest || (GetEBSVolumeRecommendationsRequest = {}));
export var VolumeConfiguration;
(function (VolumeConfiguration) {
    /**
     * @internal
     */
    VolumeConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VolumeConfiguration || (VolumeConfiguration = {}));
export var EBSFinding;
(function (EBSFinding) {
    EBSFinding["NOT_OPTIMIZED"] = "NotOptimized";
    EBSFinding["OPTIMIZED"] = "Optimized";
})(EBSFinding || (EBSFinding = {}));
export var EBSMetricName;
(function (EBSMetricName) {
    EBSMetricName["VOLUME_READ_BYTES_PER_SECOND"] = "VolumeReadBytesPerSecond";
    EBSMetricName["VOLUME_READ_OPS_PER_SECOND"] = "VolumeReadOpsPerSecond";
    EBSMetricName["VOLUME_WRITE_BYTES_PER_SECOND"] = "VolumeWriteBytesPerSecond";
    EBSMetricName["VOLUME_WRITE_OPS_PER_SECOND"] = "VolumeWriteOpsPerSecond";
})(EBSMetricName || (EBSMetricName = {}));
export var EBSUtilizationMetric;
(function (EBSUtilizationMetric) {
    /**
     * @internal
     */
    EBSUtilizationMetric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EBSUtilizationMetric || (EBSUtilizationMetric = {}));
export var VolumeRecommendationOption;
(function (VolumeRecommendationOption) {
    /**
     * @internal
     */
    VolumeRecommendationOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VolumeRecommendationOption || (VolumeRecommendationOption = {}));
export var VolumeRecommendation;
(function (VolumeRecommendation) {
    /**
     * @internal
     */
    VolumeRecommendation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VolumeRecommendation || (VolumeRecommendation = {}));
export var GetEBSVolumeRecommendationsResponse;
(function (GetEBSVolumeRecommendationsResponse) {
    /**
     * @internal
     */
    GetEBSVolumeRecommendationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEBSVolumeRecommendationsResponse || (GetEBSVolumeRecommendationsResponse = {}));
export var GetEC2InstanceRecommendationsRequest;
(function (GetEC2InstanceRecommendationsRequest) {
    /**
     * @internal
     */
    GetEC2InstanceRecommendationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEC2InstanceRecommendationsRequest || (GetEC2InstanceRecommendationsRequest = {}));
export var InstanceRecommendationFindingReasonCode;
(function (InstanceRecommendationFindingReasonCode) {
    InstanceRecommendationFindingReasonCode["CPU_OVER_PROVISIONED"] = "CPUOverprovisioned";
    InstanceRecommendationFindingReasonCode["CPU_UNDER_PROVISIONED"] = "CPUUnderprovisioned";
    InstanceRecommendationFindingReasonCode["DISK_IOPS_OVER_PROVISIONED"] = "DiskIOPSOverprovisioned";
    InstanceRecommendationFindingReasonCode["DISK_IOPS_UNDER_PROVISIONED"] = "DiskIOPSUnderprovisioned";
    InstanceRecommendationFindingReasonCode["DISK_THROUGHPUT_OVER_PROVISIONED"] = "DiskThroughputOverprovisioned";
    InstanceRecommendationFindingReasonCode["DISK_THROUGHPUT_UNDER_PROVISIONED"] = "DiskThroughputUnderprovisioned";
    InstanceRecommendationFindingReasonCode["EBS_IOPS_OVER_PROVISIONED"] = "EBSIOPSOverprovisioned";
    InstanceRecommendationFindingReasonCode["EBS_IOPS_UNDER_PROVISIONED"] = "EBSIOPSUnderprovisioned";
    InstanceRecommendationFindingReasonCode["EBS_THROUGHPUT_OVER_PROVISIONED"] = "EBSThroughputOverprovisioned";
    InstanceRecommendationFindingReasonCode["EBS_THROUGHPUT_UNDER_PROVISIONED"] = "EBSThroughputUnderprovisioned";
    InstanceRecommendationFindingReasonCode["MEMORY_OVER_PROVISIONED"] = "MemoryOverprovisioned";
    InstanceRecommendationFindingReasonCode["MEMORY_UNDER_PROVISIONED"] = "MemoryUnderprovisioned";
    InstanceRecommendationFindingReasonCode["NETWORK_BANDWIDTH_OVER_PROVISIONED"] = "NetworkBandwidthOverprovisioned";
    InstanceRecommendationFindingReasonCode["NETWORK_BANDWIDTH_UNDER_PROVISIONED"] = "NetworkBandwidthUnderprovisioned";
    InstanceRecommendationFindingReasonCode["NETWORK_PPS_OVER_PROVISIONED"] = "NetworkPPSOverprovisioned";
    InstanceRecommendationFindingReasonCode["NETWORK_PPS_UNDER_PROVISIONED"] = "NetworkPPSUnderprovisioned";
})(InstanceRecommendationFindingReasonCode || (InstanceRecommendationFindingReasonCode = {}));
export var PlatformDifference;
(function (PlatformDifference) {
    PlatformDifference["HYPERVISOR"] = "Hypervisor";
    PlatformDifference["INSTANCE_STORE_AVAILABILITY"] = "InstanceStoreAvailability";
    PlatformDifference["NETWORK_INTERFACE"] = "NetworkInterface";
    PlatformDifference["STORAGE_INTERFACE"] = "StorageInterface";
    PlatformDifference["VIRTUALIZATION_TYPE"] = "VirtualizationType";
})(PlatformDifference || (PlatformDifference = {}));
export var InstanceRecommendationOption;
(function (InstanceRecommendationOption) {
    /**
     * @internal
     */
    InstanceRecommendationOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceRecommendationOption || (InstanceRecommendationOption = {}));
export var RecommendationSourceType;
(function (RecommendationSourceType) {
    RecommendationSourceType["AUTO_SCALING_GROUP"] = "AutoScalingGroup";
    RecommendationSourceType["EBS_VOLUME"] = "EbsVolume";
    RecommendationSourceType["EC2_INSTANCE"] = "Ec2Instance";
    RecommendationSourceType["LAMBDA_FUNCTION"] = "LambdaFunction";
})(RecommendationSourceType || (RecommendationSourceType = {}));
export var RecommendationSource;
(function (RecommendationSource) {
    /**
     * @internal
     */
    RecommendationSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecommendationSource || (RecommendationSource = {}));
export var InstanceRecommendation;
(function (InstanceRecommendation) {
    /**
     * @internal
     */
    InstanceRecommendation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceRecommendation || (InstanceRecommendation = {}));
export var GetEC2InstanceRecommendationsResponse;
(function (GetEC2InstanceRecommendationsResponse) {
    /**
     * @internal
     */
    GetEC2InstanceRecommendationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEC2InstanceRecommendationsResponse || (GetEC2InstanceRecommendationsResponse = {}));
export var GetEC2RecommendationProjectedMetricsRequest;
(function (GetEC2RecommendationProjectedMetricsRequest) {
    /**
     * @internal
     */
    GetEC2RecommendationProjectedMetricsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEC2RecommendationProjectedMetricsRequest || (GetEC2RecommendationProjectedMetricsRequest = {}));
export var ProjectedMetric;
(function (ProjectedMetric) {
    /**
     * @internal
     */
    ProjectedMetric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectedMetric || (ProjectedMetric = {}));
export var RecommendedOptionProjectedMetric;
(function (RecommendedOptionProjectedMetric) {
    /**
     * @internal
     */
    RecommendedOptionProjectedMetric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecommendedOptionProjectedMetric || (RecommendedOptionProjectedMetric = {}));
export var GetEC2RecommendationProjectedMetricsResponse;
(function (GetEC2RecommendationProjectedMetricsResponse) {
    /**
     * @internal
     */
    GetEC2RecommendationProjectedMetricsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEC2RecommendationProjectedMetricsResponse || (GetEC2RecommendationProjectedMetricsResponse = {}));
export var GetEnrollmentStatusRequest;
(function (GetEnrollmentStatusRequest) {
    /**
     * @internal
     */
    GetEnrollmentStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEnrollmentStatusRequest || (GetEnrollmentStatusRequest = {}));
export var Status;
(function (Status) {
    Status["ACTIVE"] = "Active";
    Status["FAILED"] = "Failed";
    Status["INACTIVE"] = "Inactive";
    Status["PENDING"] = "Pending";
})(Status || (Status = {}));
export var GetEnrollmentStatusResponse;
(function (GetEnrollmentStatusResponse) {
    /**
     * @internal
     */
    GetEnrollmentStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEnrollmentStatusResponse || (GetEnrollmentStatusResponse = {}));
export var GetLambdaFunctionRecommendationsRequest;
(function (GetLambdaFunctionRecommendationsRequest) {
    /**
     * @internal
     */
    GetLambdaFunctionRecommendationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLambdaFunctionRecommendationsRequest || (GetLambdaFunctionRecommendationsRequest = {}));
export var LambdaFunctionRecommendationFinding;
(function (LambdaFunctionRecommendationFinding) {
    LambdaFunctionRecommendationFinding["NOT_OPTIMIZED"] = "NotOptimized";
    LambdaFunctionRecommendationFinding["OPTIMIZED"] = "Optimized";
    LambdaFunctionRecommendationFinding["UNAVAILABLE"] = "Unavailable";
})(LambdaFunctionRecommendationFinding || (LambdaFunctionRecommendationFinding = {}));
export var LambdaFunctionRecommendationFindingReasonCode;
(function (LambdaFunctionRecommendationFindingReasonCode) {
    LambdaFunctionRecommendationFindingReasonCode["INCONCLUSIVE"] = "Inconclusive";
    LambdaFunctionRecommendationFindingReasonCode["INSUFFICIENT_DATA"] = "InsufficientData";
    LambdaFunctionRecommendationFindingReasonCode["MEMORY_OVER_PROVISIONED"] = "MemoryOverprovisioned";
    LambdaFunctionRecommendationFindingReasonCode["MEMORY_UNDER_PROVISIONED"] = "MemoryUnderprovisioned";
})(LambdaFunctionRecommendationFindingReasonCode || (LambdaFunctionRecommendationFindingReasonCode = {}));
export var LambdaFunctionMemoryMetricName;
(function (LambdaFunctionMemoryMetricName) {
    LambdaFunctionMemoryMetricName["DURATION"] = "Duration";
})(LambdaFunctionMemoryMetricName || (LambdaFunctionMemoryMetricName = {}));
export var LambdaFunctionMemoryMetricStatistic;
(function (LambdaFunctionMemoryMetricStatistic) {
    LambdaFunctionMemoryMetricStatistic["EXPECTED"] = "Expected";
    LambdaFunctionMemoryMetricStatistic["LOWER_BOUND"] = "LowerBound";
    LambdaFunctionMemoryMetricStatistic["UPPER_BOUND"] = "UpperBound";
})(LambdaFunctionMemoryMetricStatistic || (LambdaFunctionMemoryMetricStatistic = {}));
export var LambdaFunctionMemoryProjectedMetric;
(function (LambdaFunctionMemoryProjectedMetric) {
    /**
     * @internal
     */
    LambdaFunctionMemoryProjectedMetric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaFunctionMemoryProjectedMetric || (LambdaFunctionMemoryProjectedMetric = {}));
export var LambdaFunctionMemoryRecommendationOption;
(function (LambdaFunctionMemoryRecommendationOption) {
    /**
     * @internal
     */
    LambdaFunctionMemoryRecommendationOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaFunctionMemoryRecommendationOption || (LambdaFunctionMemoryRecommendationOption = {}));
export var LambdaFunctionMetricName;
(function (LambdaFunctionMetricName) {
    LambdaFunctionMetricName["DURATION"] = "Duration";
    LambdaFunctionMetricName["MEMORY"] = "Memory";
})(LambdaFunctionMetricName || (LambdaFunctionMetricName = {}));
export var LambdaFunctionMetricStatistic;
(function (LambdaFunctionMetricStatistic) {
    LambdaFunctionMetricStatistic["AVERAGE"] = "Average";
    LambdaFunctionMetricStatistic["MAXIMUM"] = "Maximum";
})(LambdaFunctionMetricStatistic || (LambdaFunctionMetricStatistic = {}));
export var LambdaFunctionUtilizationMetric;
(function (LambdaFunctionUtilizationMetric) {
    /**
     * @internal
     */
    LambdaFunctionUtilizationMetric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaFunctionUtilizationMetric || (LambdaFunctionUtilizationMetric = {}));
export var LambdaFunctionRecommendation;
(function (LambdaFunctionRecommendation) {
    /**
     * @internal
     */
    LambdaFunctionRecommendation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaFunctionRecommendation || (LambdaFunctionRecommendation = {}));
export var GetLambdaFunctionRecommendationsResponse;
(function (GetLambdaFunctionRecommendationsResponse) {
    /**
     * @internal
     */
    GetLambdaFunctionRecommendationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLambdaFunctionRecommendationsResponse || (GetLambdaFunctionRecommendationsResponse = {}));
export var GetRecommendationSummariesRequest;
(function (GetRecommendationSummariesRequest) {
    /**
     * @internal
     */
    GetRecommendationSummariesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRecommendationSummariesRequest || (GetRecommendationSummariesRequest = {}));
export var FindingReasonCode;
(function (FindingReasonCode) {
    FindingReasonCode["MEMORY_OVER_PROVISIONED"] = "MemoryOverprovisioned";
    FindingReasonCode["MEMORY_UNDER_PROVISIONED"] = "MemoryUnderprovisioned";
})(FindingReasonCode || (FindingReasonCode = {}));
export var ReasonCodeSummary;
(function (ReasonCodeSummary) {
    /**
     * @internal
     */
    ReasonCodeSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReasonCodeSummary || (ReasonCodeSummary = {}));
export var Summary;
(function (Summary) {
    /**
     * @internal
     */
    Summary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Summary || (Summary = {}));
export var RecommendationSummary;
(function (RecommendationSummary) {
    /**
     * @internal
     */
    RecommendationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecommendationSummary || (RecommendationSummary = {}));
export var GetRecommendationSummariesResponse;
(function (GetRecommendationSummariesResponse) {
    /**
     * @internal
     */
    GetRecommendationSummariesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRecommendationSummariesResponse || (GetRecommendationSummariesResponse = {}));
export var UpdateEnrollmentStatusRequest;
(function (UpdateEnrollmentStatusRequest) {
    /**
     * @internal
     */
    UpdateEnrollmentStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateEnrollmentStatusRequest || (UpdateEnrollmentStatusRequest = {}));
export var UpdateEnrollmentStatusResponse;
(function (UpdateEnrollmentStatusResponse) {
    /**
     * @internal
     */
    UpdateEnrollmentStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateEnrollmentStatusResponse || (UpdateEnrollmentStatusResponse = {}));
//# sourceMappingURL=models_0.js.map