"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeConfiguration = exports.GetEBSVolumeRecommendationsRequest = exports.GetAutoScalingGroupRecommendationsResponse = exports.GetRecommendationError = exports.GetAutoScalingGroupRecommendationsRequest = exports.ExportLambdaFunctionRecommendationsResponse = exports.ExportLambdaFunctionRecommendationsRequest = exports.LambdaFunctionRecommendationFilter = exports.LambdaFunctionRecommendationFilterName = exports.ExportableLambdaFunctionField = exports.ExportEC2InstanceRecommendationsResponse = exports.ExportEC2InstanceRecommendationsRequest = exports.ExportableInstanceField = exports.ExportEBSVolumeRecommendationsResponse = exports.ExportEBSVolumeRecommendationsRequest = exports.EBSFilter = exports.EBSFilterName = exports.ExportableVolumeField = exports.LimitExceededException = exports.ExportAutoScalingGroupRecommendationsResponse = exports.ExportAutoScalingGroupRecommendationsRequest = exports.S3DestinationConfig = exports.Filter = exports.FilterName = exports.FileFormat = exports.ExportableAutoScalingGroupField = exports.ThrottlingException = exports.ServiceUnavailableException = exports.ResourceNotFoundException = exports.OptInRequiredException = exports.MissingAuthenticationToken = exports.InvalidParameterValueException = exports.InternalServerException = exports.DescribeRecommendationExportJobsResponse = exports.RecommendationExportJob = exports.JobStatus = exports.ResourceType = exports.ExportDestination = exports.S3Destination = exports.DescribeRecommendationExportJobsRequest = exports.JobFilter = exports.JobFilterName = exports.AutoScalingGroupRecommendation = exports.AutoScalingGroupRecommendationOption = exports.UtilizationMetric = exports.MetricStatistic = exports.MetricName = exports.Finding = exports.AutoScalingGroupConfiguration = exports.AccessDeniedException = void 0;
exports.UpdateEnrollmentStatusResponse = exports.UpdateEnrollmentStatusRequest = exports.GetRecommendationSummariesResponse = exports.RecommendationSummary = exports.Summary = exports.ReasonCodeSummary = exports.FindingReasonCode = exports.GetRecommendationSummariesRequest = exports.GetLambdaFunctionRecommendationsResponse = exports.LambdaFunctionRecommendation = exports.LambdaFunctionUtilizationMetric = exports.LambdaFunctionMetricStatistic = exports.LambdaFunctionMetricName = exports.LambdaFunctionMemoryRecommendationOption = exports.LambdaFunctionMemoryProjectedMetric = exports.LambdaFunctionMemoryMetricStatistic = exports.LambdaFunctionMemoryMetricName = exports.LambdaFunctionRecommendationFindingReasonCode = exports.LambdaFunctionRecommendationFinding = exports.GetLambdaFunctionRecommendationsRequest = exports.GetEnrollmentStatusResponse = exports.Status = exports.GetEnrollmentStatusRequest = exports.GetEC2RecommendationProjectedMetricsResponse = exports.RecommendedOptionProjectedMetric = exports.ProjectedMetric = exports.GetEC2RecommendationProjectedMetricsRequest = exports.GetEC2InstanceRecommendationsResponse = exports.InstanceRecommendation = exports.RecommendationSource = exports.RecommendationSourceType = exports.InstanceRecommendationOption = exports.PlatformDifference = exports.InstanceRecommendationFindingReasonCode = exports.GetEC2InstanceRecommendationsRequest = exports.GetEBSVolumeRecommendationsResponse = exports.VolumeRecommendation = exports.VolumeRecommendationOption = exports.EBSUtilizationMetric = exports.EBSMetricName = exports.EBSFinding = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AutoScalingGroupConfiguration;
(function (AutoScalingGroupConfiguration) {
    /**
     * @internal
     */
    AutoScalingGroupConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingGroupConfiguration = exports.AutoScalingGroupConfiguration || (exports.AutoScalingGroupConfiguration = {}));
var Finding;
(function (Finding) {
    Finding["NOT_OPTIMIZED"] = "NotOptimized";
    Finding["OPTIMIZED"] = "Optimized";
    Finding["OVER_PROVISIONED"] = "Overprovisioned";
    Finding["UNDER_PROVISIONED"] = "Underprovisioned";
})(Finding = exports.Finding || (exports.Finding = {}));
var MetricName;
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
})(MetricName = exports.MetricName || (exports.MetricName = {}));
var MetricStatistic;
(function (MetricStatistic) {
    MetricStatistic["AVERAGE"] = "Average";
    MetricStatistic["MAXIMUM"] = "Maximum";
})(MetricStatistic = exports.MetricStatistic || (exports.MetricStatistic = {}));
var UtilizationMetric;
(function (UtilizationMetric) {
    /**
     * @internal
     */
    UtilizationMetric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UtilizationMetric = exports.UtilizationMetric || (exports.UtilizationMetric = {}));
var AutoScalingGroupRecommendationOption;
(function (AutoScalingGroupRecommendationOption) {
    /**
     * @internal
     */
    AutoScalingGroupRecommendationOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingGroupRecommendationOption = exports.AutoScalingGroupRecommendationOption || (exports.AutoScalingGroupRecommendationOption = {}));
var AutoScalingGroupRecommendation;
(function (AutoScalingGroupRecommendation) {
    /**
     * @internal
     */
    AutoScalingGroupRecommendation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingGroupRecommendation = exports.AutoScalingGroupRecommendation || (exports.AutoScalingGroupRecommendation = {}));
var JobFilterName;
(function (JobFilterName) {
    JobFilterName["JOB_STATUS"] = "JobStatus";
    JobFilterName["RESOURCE_TYPE"] = "ResourceType";
})(JobFilterName = exports.JobFilterName || (exports.JobFilterName = {}));
var JobFilter;
(function (JobFilter) {
    /**
     * @internal
     */
    JobFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobFilter = exports.JobFilter || (exports.JobFilter = {}));
var DescribeRecommendationExportJobsRequest;
(function (DescribeRecommendationExportJobsRequest) {
    /**
     * @internal
     */
    DescribeRecommendationExportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRecommendationExportJobsRequest = exports.DescribeRecommendationExportJobsRequest || (exports.DescribeRecommendationExportJobsRequest = {}));
var S3Destination;
(function (S3Destination) {
    /**
     * @internal
     */
    S3Destination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Destination = exports.S3Destination || (exports.S3Destination = {}));
var ExportDestination;
(function (ExportDestination) {
    /**
     * @internal
     */
    ExportDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportDestination = exports.ExportDestination || (exports.ExportDestination = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["AUTO_SCALING_GROUP"] = "AutoScalingGroup";
    ResourceType["EBS_VOLUME"] = "EbsVolume";
    ResourceType["EC2_INSTANCE"] = "Ec2Instance";
    ResourceType["LAMBDA_FUNCTION"] = "LambdaFunction";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETE"] = "Complete";
    JobStatus["FAILED"] = "Failed";
    JobStatus["IN_PROGRESS"] = "InProgress";
    JobStatus["QUEUED"] = "Queued";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var RecommendationExportJob;
(function (RecommendationExportJob) {
    /**
     * @internal
     */
    RecommendationExportJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendationExportJob = exports.RecommendationExportJob || (exports.RecommendationExportJob = {}));
var DescribeRecommendationExportJobsResponse;
(function (DescribeRecommendationExportJobsResponse) {
    /**
     * @internal
     */
    DescribeRecommendationExportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRecommendationExportJobsResponse = exports.DescribeRecommendationExportJobsResponse || (exports.DescribeRecommendationExportJobsResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var MissingAuthenticationToken;
(function (MissingAuthenticationToken) {
    /**
     * @internal
     */
    MissingAuthenticationToken.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MissingAuthenticationToken = exports.MissingAuthenticationToken || (exports.MissingAuthenticationToken = {}));
var OptInRequiredException;
(function (OptInRequiredException) {
    /**
     * @internal
     */
    OptInRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptInRequiredException = exports.OptInRequiredException || (exports.OptInRequiredException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ExportableAutoScalingGroupField;
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
})(ExportableAutoScalingGroupField = exports.ExportableAutoScalingGroupField || (exports.ExportableAutoScalingGroupField = {}));
var FileFormat;
(function (FileFormat) {
    FileFormat["CSV"] = "Csv";
})(FileFormat = exports.FileFormat || (exports.FileFormat = {}));
var FilterName;
(function (FilterName) {
    FilterName["FINDING"] = "Finding";
    FilterName["FINDING_REASON_CODES"] = "FindingReasonCodes";
    FilterName["RECOMMENDATION_SOURCE_TYPE"] = "RecommendationSourceType";
})(FilterName = exports.FilterName || (exports.FilterName = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var S3DestinationConfig;
(function (S3DestinationConfig) {
    /**
     * @internal
     */
    S3DestinationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3DestinationConfig = exports.S3DestinationConfig || (exports.S3DestinationConfig = {}));
var ExportAutoScalingGroupRecommendationsRequest;
(function (ExportAutoScalingGroupRecommendationsRequest) {
    /**
     * @internal
     */
    ExportAutoScalingGroupRecommendationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportAutoScalingGroupRecommendationsRequest = exports.ExportAutoScalingGroupRecommendationsRequest || (exports.ExportAutoScalingGroupRecommendationsRequest = {}));
var ExportAutoScalingGroupRecommendationsResponse;
(function (ExportAutoScalingGroupRecommendationsResponse) {
    /**
     * @internal
     */
    ExportAutoScalingGroupRecommendationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportAutoScalingGroupRecommendationsResponse = exports.ExportAutoScalingGroupRecommendationsResponse || (exports.ExportAutoScalingGroupRecommendationsResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ExportableVolumeField;
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
})(ExportableVolumeField = exports.ExportableVolumeField || (exports.ExportableVolumeField = {}));
var EBSFilterName;
(function (EBSFilterName) {
    EBSFilterName["FINDING"] = "Finding";
})(EBSFilterName = exports.EBSFilterName || (exports.EBSFilterName = {}));
var EBSFilter;
(function (EBSFilter) {
    /**
     * @internal
     */
    EBSFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EBSFilter = exports.EBSFilter || (exports.EBSFilter = {}));
var ExportEBSVolumeRecommendationsRequest;
(function (ExportEBSVolumeRecommendationsRequest) {
    /**
     * @internal
     */
    ExportEBSVolumeRecommendationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportEBSVolumeRecommendationsRequest = exports.ExportEBSVolumeRecommendationsRequest || (exports.ExportEBSVolumeRecommendationsRequest = {}));
var ExportEBSVolumeRecommendationsResponse;
(function (ExportEBSVolumeRecommendationsResponse) {
    /**
     * @internal
     */
    ExportEBSVolumeRecommendationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportEBSVolumeRecommendationsResponse = exports.ExportEBSVolumeRecommendationsResponse || (exports.ExportEBSVolumeRecommendationsResponse = {}));
var ExportableInstanceField;
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
})(ExportableInstanceField = exports.ExportableInstanceField || (exports.ExportableInstanceField = {}));
var ExportEC2InstanceRecommendationsRequest;
(function (ExportEC2InstanceRecommendationsRequest) {
    /**
     * @internal
     */
    ExportEC2InstanceRecommendationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportEC2InstanceRecommendationsRequest = exports.ExportEC2InstanceRecommendationsRequest || (exports.ExportEC2InstanceRecommendationsRequest = {}));
var ExportEC2InstanceRecommendationsResponse;
(function (ExportEC2InstanceRecommendationsResponse) {
    /**
     * @internal
     */
    ExportEC2InstanceRecommendationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportEC2InstanceRecommendationsResponse = exports.ExportEC2InstanceRecommendationsResponse || (exports.ExportEC2InstanceRecommendationsResponse = {}));
var ExportableLambdaFunctionField;
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
})(ExportableLambdaFunctionField = exports.ExportableLambdaFunctionField || (exports.ExportableLambdaFunctionField = {}));
var LambdaFunctionRecommendationFilterName;
(function (LambdaFunctionRecommendationFilterName) {
    LambdaFunctionRecommendationFilterName["FINDING"] = "Finding";
    LambdaFunctionRecommendationFilterName["FINDING_REASON_CODE"] = "FindingReasonCode";
})(LambdaFunctionRecommendationFilterName = exports.LambdaFunctionRecommendationFilterName || (exports.LambdaFunctionRecommendationFilterName = {}));
var LambdaFunctionRecommendationFilter;
(function (LambdaFunctionRecommendationFilter) {
    /**
     * @internal
     */
    LambdaFunctionRecommendationFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaFunctionRecommendationFilter = exports.LambdaFunctionRecommendationFilter || (exports.LambdaFunctionRecommendationFilter = {}));
var ExportLambdaFunctionRecommendationsRequest;
(function (ExportLambdaFunctionRecommendationsRequest) {
    /**
     * @internal
     */
    ExportLambdaFunctionRecommendationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportLambdaFunctionRecommendationsRequest = exports.ExportLambdaFunctionRecommendationsRequest || (exports.ExportLambdaFunctionRecommendationsRequest = {}));
var ExportLambdaFunctionRecommendationsResponse;
(function (ExportLambdaFunctionRecommendationsResponse) {
    /**
     * @internal
     */
    ExportLambdaFunctionRecommendationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportLambdaFunctionRecommendationsResponse = exports.ExportLambdaFunctionRecommendationsResponse || (exports.ExportLambdaFunctionRecommendationsResponse = {}));
var GetAutoScalingGroupRecommendationsRequest;
(function (GetAutoScalingGroupRecommendationsRequest) {
    /**
     * @internal
     */
    GetAutoScalingGroupRecommendationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAutoScalingGroupRecommendationsRequest = exports.GetAutoScalingGroupRecommendationsRequest || (exports.GetAutoScalingGroupRecommendationsRequest = {}));
var GetRecommendationError;
(function (GetRecommendationError) {
    /**
     * @internal
     */
    GetRecommendationError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRecommendationError = exports.GetRecommendationError || (exports.GetRecommendationError = {}));
var GetAutoScalingGroupRecommendationsResponse;
(function (GetAutoScalingGroupRecommendationsResponse) {
    /**
     * @internal
     */
    GetAutoScalingGroupRecommendationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAutoScalingGroupRecommendationsResponse = exports.GetAutoScalingGroupRecommendationsResponse || (exports.GetAutoScalingGroupRecommendationsResponse = {}));
var GetEBSVolumeRecommendationsRequest;
(function (GetEBSVolumeRecommendationsRequest) {
    /**
     * @internal
     */
    GetEBSVolumeRecommendationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEBSVolumeRecommendationsRequest = exports.GetEBSVolumeRecommendationsRequest || (exports.GetEBSVolumeRecommendationsRequest = {}));
var VolumeConfiguration;
(function (VolumeConfiguration) {
    /**
     * @internal
     */
    VolumeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeConfiguration = exports.VolumeConfiguration || (exports.VolumeConfiguration = {}));
var EBSFinding;
(function (EBSFinding) {
    EBSFinding["NOT_OPTIMIZED"] = "NotOptimized";
    EBSFinding["OPTIMIZED"] = "Optimized";
})(EBSFinding = exports.EBSFinding || (exports.EBSFinding = {}));
var EBSMetricName;
(function (EBSMetricName) {
    EBSMetricName["VOLUME_READ_BYTES_PER_SECOND"] = "VolumeReadBytesPerSecond";
    EBSMetricName["VOLUME_READ_OPS_PER_SECOND"] = "VolumeReadOpsPerSecond";
    EBSMetricName["VOLUME_WRITE_BYTES_PER_SECOND"] = "VolumeWriteBytesPerSecond";
    EBSMetricName["VOLUME_WRITE_OPS_PER_SECOND"] = "VolumeWriteOpsPerSecond";
})(EBSMetricName = exports.EBSMetricName || (exports.EBSMetricName = {}));
var EBSUtilizationMetric;
(function (EBSUtilizationMetric) {
    /**
     * @internal
     */
    EBSUtilizationMetric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EBSUtilizationMetric = exports.EBSUtilizationMetric || (exports.EBSUtilizationMetric = {}));
var VolumeRecommendationOption;
(function (VolumeRecommendationOption) {
    /**
     * @internal
     */
    VolumeRecommendationOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeRecommendationOption = exports.VolumeRecommendationOption || (exports.VolumeRecommendationOption = {}));
var VolumeRecommendation;
(function (VolumeRecommendation) {
    /**
     * @internal
     */
    VolumeRecommendation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeRecommendation = exports.VolumeRecommendation || (exports.VolumeRecommendation = {}));
var GetEBSVolumeRecommendationsResponse;
(function (GetEBSVolumeRecommendationsResponse) {
    /**
     * @internal
     */
    GetEBSVolumeRecommendationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEBSVolumeRecommendationsResponse = exports.GetEBSVolumeRecommendationsResponse || (exports.GetEBSVolumeRecommendationsResponse = {}));
var GetEC2InstanceRecommendationsRequest;
(function (GetEC2InstanceRecommendationsRequest) {
    /**
     * @internal
     */
    GetEC2InstanceRecommendationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEC2InstanceRecommendationsRequest = exports.GetEC2InstanceRecommendationsRequest || (exports.GetEC2InstanceRecommendationsRequest = {}));
var InstanceRecommendationFindingReasonCode;
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
})(InstanceRecommendationFindingReasonCode = exports.InstanceRecommendationFindingReasonCode || (exports.InstanceRecommendationFindingReasonCode = {}));
var PlatformDifference;
(function (PlatformDifference) {
    PlatformDifference["HYPERVISOR"] = "Hypervisor";
    PlatformDifference["INSTANCE_STORE_AVAILABILITY"] = "InstanceStoreAvailability";
    PlatformDifference["NETWORK_INTERFACE"] = "NetworkInterface";
    PlatformDifference["STORAGE_INTERFACE"] = "StorageInterface";
    PlatformDifference["VIRTUALIZATION_TYPE"] = "VirtualizationType";
})(PlatformDifference = exports.PlatformDifference || (exports.PlatformDifference = {}));
var InstanceRecommendationOption;
(function (InstanceRecommendationOption) {
    /**
     * @internal
     */
    InstanceRecommendationOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceRecommendationOption = exports.InstanceRecommendationOption || (exports.InstanceRecommendationOption = {}));
var RecommendationSourceType;
(function (RecommendationSourceType) {
    RecommendationSourceType["AUTO_SCALING_GROUP"] = "AutoScalingGroup";
    RecommendationSourceType["EBS_VOLUME"] = "EbsVolume";
    RecommendationSourceType["EC2_INSTANCE"] = "Ec2Instance";
    RecommendationSourceType["LAMBDA_FUNCTION"] = "LambdaFunction";
})(RecommendationSourceType = exports.RecommendationSourceType || (exports.RecommendationSourceType = {}));
var RecommendationSource;
(function (RecommendationSource) {
    /**
     * @internal
     */
    RecommendationSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendationSource = exports.RecommendationSource || (exports.RecommendationSource = {}));
var InstanceRecommendation;
(function (InstanceRecommendation) {
    /**
     * @internal
     */
    InstanceRecommendation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceRecommendation = exports.InstanceRecommendation || (exports.InstanceRecommendation = {}));
var GetEC2InstanceRecommendationsResponse;
(function (GetEC2InstanceRecommendationsResponse) {
    /**
     * @internal
     */
    GetEC2InstanceRecommendationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEC2InstanceRecommendationsResponse = exports.GetEC2InstanceRecommendationsResponse || (exports.GetEC2InstanceRecommendationsResponse = {}));
var GetEC2RecommendationProjectedMetricsRequest;
(function (GetEC2RecommendationProjectedMetricsRequest) {
    /**
     * @internal
     */
    GetEC2RecommendationProjectedMetricsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEC2RecommendationProjectedMetricsRequest = exports.GetEC2RecommendationProjectedMetricsRequest || (exports.GetEC2RecommendationProjectedMetricsRequest = {}));
var ProjectedMetric;
(function (ProjectedMetric) {
    /**
     * @internal
     */
    ProjectedMetric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectedMetric = exports.ProjectedMetric || (exports.ProjectedMetric = {}));
var RecommendedOptionProjectedMetric;
(function (RecommendedOptionProjectedMetric) {
    /**
     * @internal
     */
    RecommendedOptionProjectedMetric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendedOptionProjectedMetric = exports.RecommendedOptionProjectedMetric || (exports.RecommendedOptionProjectedMetric = {}));
var GetEC2RecommendationProjectedMetricsResponse;
(function (GetEC2RecommendationProjectedMetricsResponse) {
    /**
     * @internal
     */
    GetEC2RecommendationProjectedMetricsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEC2RecommendationProjectedMetricsResponse = exports.GetEC2RecommendationProjectedMetricsResponse || (exports.GetEC2RecommendationProjectedMetricsResponse = {}));
var GetEnrollmentStatusRequest;
(function (GetEnrollmentStatusRequest) {
    /**
     * @internal
     */
    GetEnrollmentStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEnrollmentStatusRequest = exports.GetEnrollmentStatusRequest || (exports.GetEnrollmentStatusRequest = {}));
var Status;
(function (Status) {
    Status["ACTIVE"] = "Active";
    Status["FAILED"] = "Failed";
    Status["INACTIVE"] = "Inactive";
    Status["PENDING"] = "Pending";
})(Status = exports.Status || (exports.Status = {}));
var GetEnrollmentStatusResponse;
(function (GetEnrollmentStatusResponse) {
    /**
     * @internal
     */
    GetEnrollmentStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEnrollmentStatusResponse = exports.GetEnrollmentStatusResponse || (exports.GetEnrollmentStatusResponse = {}));
var GetLambdaFunctionRecommendationsRequest;
(function (GetLambdaFunctionRecommendationsRequest) {
    /**
     * @internal
     */
    GetLambdaFunctionRecommendationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLambdaFunctionRecommendationsRequest = exports.GetLambdaFunctionRecommendationsRequest || (exports.GetLambdaFunctionRecommendationsRequest = {}));
var LambdaFunctionRecommendationFinding;
(function (LambdaFunctionRecommendationFinding) {
    LambdaFunctionRecommendationFinding["NOT_OPTIMIZED"] = "NotOptimized";
    LambdaFunctionRecommendationFinding["OPTIMIZED"] = "Optimized";
    LambdaFunctionRecommendationFinding["UNAVAILABLE"] = "Unavailable";
})(LambdaFunctionRecommendationFinding = exports.LambdaFunctionRecommendationFinding || (exports.LambdaFunctionRecommendationFinding = {}));
var LambdaFunctionRecommendationFindingReasonCode;
(function (LambdaFunctionRecommendationFindingReasonCode) {
    LambdaFunctionRecommendationFindingReasonCode["INCONCLUSIVE"] = "Inconclusive";
    LambdaFunctionRecommendationFindingReasonCode["INSUFFICIENT_DATA"] = "InsufficientData";
    LambdaFunctionRecommendationFindingReasonCode["MEMORY_OVER_PROVISIONED"] = "MemoryOverprovisioned";
    LambdaFunctionRecommendationFindingReasonCode["MEMORY_UNDER_PROVISIONED"] = "MemoryUnderprovisioned";
})(LambdaFunctionRecommendationFindingReasonCode = exports.LambdaFunctionRecommendationFindingReasonCode || (exports.LambdaFunctionRecommendationFindingReasonCode = {}));
var LambdaFunctionMemoryMetricName;
(function (LambdaFunctionMemoryMetricName) {
    LambdaFunctionMemoryMetricName["DURATION"] = "Duration";
})(LambdaFunctionMemoryMetricName = exports.LambdaFunctionMemoryMetricName || (exports.LambdaFunctionMemoryMetricName = {}));
var LambdaFunctionMemoryMetricStatistic;
(function (LambdaFunctionMemoryMetricStatistic) {
    LambdaFunctionMemoryMetricStatistic["EXPECTED"] = "Expected";
    LambdaFunctionMemoryMetricStatistic["LOWER_BOUND"] = "LowerBound";
    LambdaFunctionMemoryMetricStatistic["UPPER_BOUND"] = "UpperBound";
})(LambdaFunctionMemoryMetricStatistic = exports.LambdaFunctionMemoryMetricStatistic || (exports.LambdaFunctionMemoryMetricStatistic = {}));
var LambdaFunctionMemoryProjectedMetric;
(function (LambdaFunctionMemoryProjectedMetric) {
    /**
     * @internal
     */
    LambdaFunctionMemoryProjectedMetric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaFunctionMemoryProjectedMetric = exports.LambdaFunctionMemoryProjectedMetric || (exports.LambdaFunctionMemoryProjectedMetric = {}));
var LambdaFunctionMemoryRecommendationOption;
(function (LambdaFunctionMemoryRecommendationOption) {
    /**
     * @internal
     */
    LambdaFunctionMemoryRecommendationOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaFunctionMemoryRecommendationOption = exports.LambdaFunctionMemoryRecommendationOption || (exports.LambdaFunctionMemoryRecommendationOption = {}));
var LambdaFunctionMetricName;
(function (LambdaFunctionMetricName) {
    LambdaFunctionMetricName["DURATION"] = "Duration";
    LambdaFunctionMetricName["MEMORY"] = "Memory";
})(LambdaFunctionMetricName = exports.LambdaFunctionMetricName || (exports.LambdaFunctionMetricName = {}));
var LambdaFunctionMetricStatistic;
(function (LambdaFunctionMetricStatistic) {
    LambdaFunctionMetricStatistic["AVERAGE"] = "Average";
    LambdaFunctionMetricStatistic["MAXIMUM"] = "Maximum";
})(LambdaFunctionMetricStatistic = exports.LambdaFunctionMetricStatistic || (exports.LambdaFunctionMetricStatistic = {}));
var LambdaFunctionUtilizationMetric;
(function (LambdaFunctionUtilizationMetric) {
    /**
     * @internal
     */
    LambdaFunctionUtilizationMetric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaFunctionUtilizationMetric = exports.LambdaFunctionUtilizationMetric || (exports.LambdaFunctionUtilizationMetric = {}));
var LambdaFunctionRecommendation;
(function (LambdaFunctionRecommendation) {
    /**
     * @internal
     */
    LambdaFunctionRecommendation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaFunctionRecommendation = exports.LambdaFunctionRecommendation || (exports.LambdaFunctionRecommendation = {}));
var GetLambdaFunctionRecommendationsResponse;
(function (GetLambdaFunctionRecommendationsResponse) {
    /**
     * @internal
     */
    GetLambdaFunctionRecommendationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLambdaFunctionRecommendationsResponse = exports.GetLambdaFunctionRecommendationsResponse || (exports.GetLambdaFunctionRecommendationsResponse = {}));
var GetRecommendationSummariesRequest;
(function (GetRecommendationSummariesRequest) {
    /**
     * @internal
     */
    GetRecommendationSummariesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRecommendationSummariesRequest = exports.GetRecommendationSummariesRequest || (exports.GetRecommendationSummariesRequest = {}));
var FindingReasonCode;
(function (FindingReasonCode) {
    FindingReasonCode["MEMORY_OVER_PROVISIONED"] = "MemoryOverprovisioned";
    FindingReasonCode["MEMORY_UNDER_PROVISIONED"] = "MemoryUnderprovisioned";
})(FindingReasonCode = exports.FindingReasonCode || (exports.FindingReasonCode = {}));
var ReasonCodeSummary;
(function (ReasonCodeSummary) {
    /**
     * @internal
     */
    ReasonCodeSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReasonCodeSummary = exports.ReasonCodeSummary || (exports.ReasonCodeSummary = {}));
var Summary;
(function (Summary) {
    /**
     * @internal
     */
    Summary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Summary = exports.Summary || (exports.Summary = {}));
var RecommendationSummary;
(function (RecommendationSummary) {
    /**
     * @internal
     */
    RecommendationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendationSummary = exports.RecommendationSummary || (exports.RecommendationSummary = {}));
var GetRecommendationSummariesResponse;
(function (GetRecommendationSummariesResponse) {
    /**
     * @internal
     */
    GetRecommendationSummariesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRecommendationSummariesResponse = exports.GetRecommendationSummariesResponse || (exports.GetRecommendationSummariesResponse = {}));
var UpdateEnrollmentStatusRequest;
(function (UpdateEnrollmentStatusRequest) {
    /**
     * @internal
     */
    UpdateEnrollmentStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEnrollmentStatusRequest = exports.UpdateEnrollmentStatusRequest || (exports.UpdateEnrollmentStatusRequest = {}));
var UpdateEnrollmentStatusResponse;
(function (UpdateEnrollmentStatusResponse) {
    /**
     * @internal
     */
    UpdateEnrollmentStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEnrollmentStatusResponse = exports.UpdateEnrollmentStatusResponse || (exports.UpdateEnrollmentStatusResponse = {}));
//# sourceMappingURL=models_0.js.map