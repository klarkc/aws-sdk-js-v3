import { __assign } from "tslib";
export var ActionGroup;
(function (ActionGroup) {
    /**
     * Permission group type for Agent APIs - ConfigureAgent, PostAgentProfile
     */
    ActionGroup["AGENT_PERMISSIONS"] = "agentPermissions";
})(ActionGroup || (ActionGroup = {}));
export var EventPublisher;
(function (EventPublisher) {
    /**
     * Notifications for Anomaly Detection
     */
    EventPublisher["ANOMALY_DETECTION"] = "AnomalyDetection";
})(EventPublisher || (EventPublisher = {}));
export var Channel;
(function (Channel) {
    /**
     * @internal
     */
    Channel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Channel || (Channel = {}));
export var AddNotificationChannelsRequest;
(function (AddNotificationChannelsRequest) {
    /**
     * @internal
     */
    AddNotificationChannelsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddNotificationChannelsRequest || (AddNotificationChannelsRequest = {}));
export var NotificationConfiguration;
(function (NotificationConfiguration) {
    /**
     * @internal
     */
    NotificationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotificationConfiguration || (NotificationConfiguration = {}));
export var AddNotificationChannelsResponse;
(function (AddNotificationChannelsResponse) {
    /**
     * @internal
     */
    AddNotificationChannelsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddNotificationChannelsResponse || (AddNotificationChannelsResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var AgentParameterField;
(function (AgentParameterField) {
    /**
     * Maximum stack depth to be captured by the CodeGuru Profiler.
     */
    AgentParameterField["MAX_STACK_DEPTH"] = "MaxStackDepth";
    /**
     * Percentage of memory to be used by CodeGuru profiler. Minimum of 30MB is required for the agent.
     */
    AgentParameterField["MEMORY_USAGE_LIMIT_PERCENT"] = "MemoryUsageLimitPercent";
    /**
     * Minimum time in milliseconds between sending reports.
     */
    AgentParameterField["MINIMUM_TIME_FOR_REPORTING_IN_MILLISECONDS"] = "MinimumTimeForReportingInMilliseconds";
    /**
     * Reporting interval in milliseconds used to report profiles.
     */
    AgentParameterField["REPORTING_INTERVAL_IN_MILLISECONDS"] = "ReportingIntervalInMilliseconds";
    /**
     * Sampling interval in milliseconds used to sample profiles.
     */
    AgentParameterField["SAMPLING_INTERVAL_IN_MILLISECONDS"] = "SamplingIntervalInMilliseconds";
})(AgentParameterField || (AgentParameterField = {}));
export var AgentConfiguration;
(function (AgentConfiguration) {
    /**
     * @internal
     */
    AgentConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AgentConfiguration || (AgentConfiguration = {}));
export var AgentOrchestrationConfig;
(function (AgentOrchestrationConfig) {
    /**
     * @internal
     */
    AgentOrchestrationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AgentOrchestrationConfig || (AgentOrchestrationConfig = {}));
export var AggregationPeriod;
(function (AggregationPeriod) {
    /**
     * Period of one day.
     */
    AggregationPeriod["P1D"] = "P1D";
    /**
     * Period of one hour.
     */
    AggregationPeriod["PT1H"] = "PT1H";
    /**
     * Period of five minutes.
     */
    AggregationPeriod["PT5M"] = "PT5M";
})(AggregationPeriod || (AggregationPeriod = {}));
export var AggregatedProfileTime;
(function (AggregatedProfileTime) {
    /**
     * @internal
     */
    AggregatedProfileTime.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AggregatedProfileTime || (AggregatedProfileTime = {}));
export var FeedbackType;
(function (FeedbackType) {
    /**
     * Profiler recommendation flagged as not useful.
     */
    FeedbackType["Negative"] = "Negative";
    /**
     * Profiler recommendation flagged as useful.
     */
    FeedbackType["Positive"] = "Positive";
})(FeedbackType || (FeedbackType = {}));
export var UserFeedback;
(function (UserFeedback) {
    /**
     * @internal
     */
    UserFeedback.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserFeedback || (UserFeedback = {}));
export var AnomalyInstance;
(function (AnomalyInstance) {
    /**
     * @internal
     */
    AnomalyInstance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalyInstance || (AnomalyInstance = {}));
export var MetricType;
(function (MetricType) {
    /**
     * Metric value aggregated for all instances of a frame name in a profile relative to the root frame.
     */
    MetricType["AggregatedRelativeTotalTime"] = "AggregatedRelativeTotalTime";
})(MetricType || (MetricType = {}));
export var Metric;
(function (Metric) {
    /**
     * @internal
     */
    Metric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Metric || (Metric = {}));
export var Anomaly;
(function (Anomaly) {
    /**
     * @internal
     */
    Anomaly.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Anomaly || (Anomaly = {}));
export var FrameMetric;
(function (FrameMetric) {
    /**
     * @internal
     */
    FrameMetric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FrameMetric || (FrameMetric = {}));
export var BatchGetFrameMetricDataRequest;
(function (BatchGetFrameMetricDataRequest) {
    /**
     * @internal
     */
    BatchGetFrameMetricDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetFrameMetricDataRequest || (BatchGetFrameMetricDataRequest = {}));
export var TimestampStructure;
(function (TimestampStructure) {
    /**
     * @internal
     */
    TimestampStructure.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimestampStructure || (TimestampStructure = {}));
export var FrameMetricDatum;
(function (FrameMetricDatum) {
    /**
     * @internal
     */
    FrameMetricDatum.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FrameMetricDatum || (FrameMetricDatum = {}));
export var BatchGetFrameMetricDataResponse;
(function (BatchGetFrameMetricDataResponse) {
    /**
     * @internal
     */
    BatchGetFrameMetricDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetFrameMetricDataResponse || (BatchGetFrameMetricDataResponse = {}));
export var GetFindingsReportAccountSummaryRequest;
(function (GetFindingsReportAccountSummaryRequest) {
    /**
     * @internal
     */
    GetFindingsReportAccountSummaryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFindingsReportAccountSummaryRequest || (GetFindingsReportAccountSummaryRequest = {}));
export var FindingsReportSummary;
(function (FindingsReportSummary) {
    /**
     * @internal
     */
    FindingsReportSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FindingsReportSummary || (FindingsReportSummary = {}));
export var GetFindingsReportAccountSummaryResponse;
(function (GetFindingsReportAccountSummaryResponse) {
    /**
     * @internal
     */
    GetFindingsReportAccountSummaryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFindingsReportAccountSummaryResponse || (GetFindingsReportAccountSummaryResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var MetadataField;
(function (MetadataField) {
    /**
     * Unique identifier for the agent instance.
     */
    MetadataField["AGENT_ID"] = "AgentId";
    /**
     * AWS requestId of the Lambda invocation.
     */
    MetadataField["AWS_REQUEST_ID"] = "AwsRequestId";
    /**
     * Compute platform on which agent is running.
     */
    MetadataField["COMPUTE_PLATFORM"] = "ComputePlatform";
    /**
     * Execution environment on which Lambda function is running.
     */
    MetadataField["EXECUTION_ENVIRONMENT"] = "ExecutionEnvironment";
    /**
     * Function ARN that's used to invoke the Lambda function.
     */
    MetadataField["LAMBDA_FUNCTION_ARN"] = "LambdaFunctionArn";
    /**
     * Memory allocated for the Lambda function.
     */
    MetadataField["LAMBDA_MEMORY_LIMIT_IN_MB"] = "LambdaMemoryLimitInMB";
    /**
     * Time in milliseconds for the previous Lambda invocation.
     */
    MetadataField["LAMBDA_PREVIOUS_EXECUTION_TIME_IN_MILLISECONDS"] = "LambdaPreviousExecutionTimeInMilliseconds";
    /**
     * Time in milliseconds left before the execution times out.
     */
    MetadataField["LAMBDA_REMAINING_TIME_IN_MILLISECONDS"] = "LambdaRemainingTimeInMilliseconds";
    /**
     * Time in milliseconds between two invocations of the Lambda function.
     */
    MetadataField["LAMBDA_TIME_GAP_BETWEEN_INVOKES_IN_MILLISECONDS"] = "LambdaTimeGapBetweenInvokesInMilliseconds";
})(MetadataField || (MetadataField = {}));
export var ConfigureAgentRequest;
(function (ConfigureAgentRequest) {
    /**
     * @internal
     */
    ConfigureAgentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfigureAgentRequest || (ConfigureAgentRequest = {}));
export var ConfigureAgentResponse;
(function (ConfigureAgentResponse) {
    /**
     * @internal
     */
    ConfigureAgentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfigureAgentResponse || (ConfigureAgentResponse = {}));
export var ComputePlatform;
(function (ComputePlatform) {
    /**
     * Compute platform meant to used for AWS Lambda.
     */
    ComputePlatform["AWSLAMBDA"] = "AWSLambda";
    /**
     * Compute platform meant to used for all usecases (like EC2, Fargate, physical servers etc.) but AWS Lambda.
     */
    ComputePlatform["DEFAULT"] = "Default";
})(ComputePlatform || (ComputePlatform = {}));
export var CreateProfilingGroupRequest;
(function (CreateProfilingGroupRequest) {
    /**
     * @internal
     */
    CreateProfilingGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProfilingGroupRequest || (CreateProfilingGroupRequest = {}));
export var ProfilingStatus;
(function (ProfilingStatus) {
    /**
     * @internal
     */
    ProfilingStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProfilingStatus || (ProfilingStatus = {}));
export var ProfilingGroupDescription;
(function (ProfilingGroupDescription) {
    /**
     * @internal
     */
    ProfilingGroupDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProfilingGroupDescription || (ProfilingGroupDescription = {}));
export var CreateProfilingGroupResponse;
(function (CreateProfilingGroupResponse) {
    /**
     * @internal
     */
    CreateProfilingGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProfilingGroupResponse || (CreateProfilingGroupResponse = {}));
export var DeleteProfilingGroupRequest;
(function (DeleteProfilingGroupRequest) {
    /**
     * @internal
     */
    DeleteProfilingGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProfilingGroupRequest || (DeleteProfilingGroupRequest = {}));
export var DeleteProfilingGroupResponse;
(function (DeleteProfilingGroupResponse) {
    /**
     * @internal
     */
    DeleteProfilingGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProfilingGroupResponse || (DeleteProfilingGroupResponse = {}));
export var DescribeProfilingGroupRequest;
(function (DescribeProfilingGroupRequest) {
    /**
     * @internal
     */
    DescribeProfilingGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeProfilingGroupRequest || (DescribeProfilingGroupRequest = {}));
export var DescribeProfilingGroupResponse;
(function (DescribeProfilingGroupResponse) {
    /**
     * @internal
     */
    DescribeProfilingGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeProfilingGroupResponse || (DescribeProfilingGroupResponse = {}));
export var GetNotificationConfigurationRequest;
(function (GetNotificationConfigurationRequest) {
    /**
     * @internal
     */
    GetNotificationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetNotificationConfigurationRequest || (GetNotificationConfigurationRequest = {}));
export var GetNotificationConfigurationResponse;
(function (GetNotificationConfigurationResponse) {
    /**
     * @internal
     */
    GetNotificationConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetNotificationConfigurationResponse || (GetNotificationConfigurationResponse = {}));
export var GetPolicyRequest;
(function (GetPolicyRequest) {
    /**
     * @internal
     */
    GetPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPolicyRequest || (GetPolicyRequest = {}));
export var GetPolicyResponse;
(function (GetPolicyResponse) {
    /**
     * @internal
     */
    GetPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPolicyResponse || (GetPolicyResponse = {}));
export var GetProfileRequest;
(function (GetProfileRequest) {
    /**
     * @internal
     */
    GetProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProfileRequest || (GetProfileRequest = {}));
export var GetProfileResponse;
(function (GetProfileResponse) {
    /**
     * @internal
     */
    GetProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProfileResponse || (GetProfileResponse = {}));
export var GetRecommendationsRequest;
(function (GetRecommendationsRequest) {
    /**
     * @internal
     */
    GetRecommendationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRecommendationsRequest || (GetRecommendationsRequest = {}));
export var Pattern;
(function (Pattern) {
    /**
     * @internal
     */
    Pattern.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Pattern || (Pattern = {}));
export var Match;
(function (Match) {
    /**
     * @internal
     */
    Match.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Match || (Match = {}));
export var Recommendation;
(function (Recommendation) {
    /**
     * @internal
     */
    Recommendation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Recommendation || (Recommendation = {}));
export var GetRecommendationsResponse;
(function (GetRecommendationsResponse) {
    /**
     * @internal
     */
    GetRecommendationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRecommendationsResponse || (GetRecommendationsResponse = {}));
export var ListFindingsReportsRequest;
(function (ListFindingsReportsRequest) {
    /**
     * @internal
     */
    ListFindingsReportsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFindingsReportsRequest || (ListFindingsReportsRequest = {}));
export var ListFindingsReportsResponse;
(function (ListFindingsReportsResponse) {
    /**
     * @internal
     */
    ListFindingsReportsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFindingsReportsResponse || (ListFindingsReportsResponse = {}));
export var OrderBy;
(function (OrderBy) {
    /**
     * Order by timestamp in ascending order.
     */
    OrderBy["TIMESTAMP_ASCENDING"] = "TimestampAscending";
    /**
     * Order by timestamp in descending order.
     */
    OrderBy["TIMESTAMP_DESCENDING"] = "TimestampDescending";
})(OrderBy || (OrderBy = {}));
export var ListProfileTimesRequest;
(function (ListProfileTimesRequest) {
    /**
     * @internal
     */
    ListProfileTimesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfileTimesRequest || (ListProfileTimesRequest = {}));
export var ProfileTime;
(function (ProfileTime) {
    /**
     * @internal
     */
    ProfileTime.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProfileTime || (ProfileTime = {}));
export var ListProfileTimesResponse;
(function (ListProfileTimesResponse) {
    /**
     * @internal
     */
    ListProfileTimesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfileTimesResponse || (ListProfileTimesResponse = {}));
export var ListProfilingGroupsRequest;
(function (ListProfilingGroupsRequest) {
    /**
     * @internal
     */
    ListProfilingGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfilingGroupsRequest || (ListProfilingGroupsRequest = {}));
export var ListProfilingGroupsResponse;
(function (ListProfilingGroupsResponse) {
    /**
     * @internal
     */
    ListProfilingGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfilingGroupsResponse || (ListProfilingGroupsResponse = {}));
export var PostAgentProfileRequest;
(function (PostAgentProfileRequest) {
    /**
     * @internal
     */
    PostAgentProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PostAgentProfileRequest || (PostAgentProfileRequest = {}));
export var PostAgentProfileResponse;
(function (PostAgentProfileResponse) {
    /**
     * @internal
     */
    PostAgentProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PostAgentProfileResponse || (PostAgentProfileResponse = {}));
export var PutPermissionRequest;
(function (PutPermissionRequest) {
    /**
     * @internal
     */
    PutPermissionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPermissionRequest || (PutPermissionRequest = {}));
export var PutPermissionResponse;
(function (PutPermissionResponse) {
    /**
     * @internal
     */
    PutPermissionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPermissionResponse || (PutPermissionResponse = {}));
export var RemoveNotificationChannelRequest;
(function (RemoveNotificationChannelRequest) {
    /**
     * @internal
     */
    RemoveNotificationChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveNotificationChannelRequest || (RemoveNotificationChannelRequest = {}));
export var RemoveNotificationChannelResponse;
(function (RemoveNotificationChannelResponse) {
    /**
     * @internal
     */
    RemoveNotificationChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveNotificationChannelResponse || (RemoveNotificationChannelResponse = {}));
export var RemovePermissionRequest;
(function (RemovePermissionRequest) {
    /**
     * @internal
     */
    RemovePermissionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemovePermissionRequest || (RemovePermissionRequest = {}));
export var RemovePermissionResponse;
(function (RemovePermissionResponse) {
    /**
     * @internal
     */
    RemovePermissionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemovePermissionResponse || (RemovePermissionResponse = {}));
export var SubmitFeedbackRequest;
(function (SubmitFeedbackRequest) {
    /**
     * @internal
     */
    SubmitFeedbackRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubmitFeedbackRequest || (SubmitFeedbackRequest = {}));
export var SubmitFeedbackResponse;
(function (SubmitFeedbackResponse) {
    /**
     * @internal
     */
    SubmitFeedbackResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubmitFeedbackResponse || (SubmitFeedbackResponse = {}));
export var UpdateProfilingGroupRequest;
(function (UpdateProfilingGroupRequest) {
    /**
     * @internal
     */
    UpdateProfilingGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProfilingGroupRequest || (UpdateProfilingGroupRequest = {}));
export var UpdateProfilingGroupResponse;
(function (UpdateProfilingGroupResponse) {
    /**
     * @internal
     */
    UpdateProfilingGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProfilingGroupResponse || (UpdateProfilingGroupResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
//# sourceMappingURL=models_0.js.map