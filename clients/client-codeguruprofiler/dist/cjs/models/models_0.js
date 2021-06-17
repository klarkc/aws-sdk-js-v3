"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfileRequest = exports.GetPolicyResponse = exports.GetPolicyRequest = exports.GetNotificationConfigurationResponse = exports.GetNotificationConfigurationRequest = exports.DescribeProfilingGroupResponse = exports.DescribeProfilingGroupRequest = exports.DeleteProfilingGroupResponse = exports.DeleteProfilingGroupRequest = exports.CreateProfilingGroupResponse = exports.ProfilingGroupDescription = exports.ProfilingStatus = exports.CreateProfilingGroupRequest = exports.ComputePlatform = exports.ConfigureAgentResponse = exports.ConfigureAgentRequest = exports.MetadataField = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.GetFindingsReportAccountSummaryResponse = exports.FindingsReportSummary = exports.GetFindingsReportAccountSummaryRequest = exports.BatchGetFrameMetricDataResponse = exports.FrameMetricDatum = exports.TimestampStructure = exports.BatchGetFrameMetricDataRequest = exports.FrameMetric = exports.Anomaly = exports.Metric = exports.MetricType = exports.AnomalyInstance = exports.UserFeedback = exports.FeedbackType = exports.AggregatedProfileTime = exports.AggregationPeriod = exports.AgentOrchestrationConfig = exports.AgentConfiguration = exports.AgentParameterField = exports.ValidationException = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.AddNotificationChannelsResponse = exports.NotificationConfiguration = exports.AddNotificationChannelsRequest = exports.Channel = exports.EventPublisher = exports.ActionGroup = void 0;
exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.UpdateProfilingGroupResponse = exports.UpdateProfilingGroupRequest = exports.SubmitFeedbackResponse = exports.SubmitFeedbackRequest = exports.RemovePermissionResponse = exports.RemovePermissionRequest = exports.RemoveNotificationChannelResponse = exports.RemoveNotificationChannelRequest = exports.PutPermissionResponse = exports.PutPermissionRequest = exports.PostAgentProfileResponse = exports.PostAgentProfileRequest = exports.ListProfilingGroupsResponse = exports.ListProfilingGroupsRequest = exports.ListProfileTimesResponse = exports.ProfileTime = exports.ListProfileTimesRequest = exports.OrderBy = exports.ListFindingsReportsResponse = exports.ListFindingsReportsRequest = exports.GetRecommendationsResponse = exports.Recommendation = exports.Match = exports.Pattern = exports.GetRecommendationsRequest = exports.GetProfileResponse = void 0;
var ActionGroup;
(function (ActionGroup) {
    /**
     * Permission group type for Agent APIs - ConfigureAgent, PostAgentProfile
     */
    ActionGroup["AGENT_PERMISSIONS"] = "agentPermissions";
})(ActionGroup = exports.ActionGroup || (exports.ActionGroup = {}));
var EventPublisher;
(function (EventPublisher) {
    /**
     * Notifications for Anomaly Detection
     */
    EventPublisher["ANOMALY_DETECTION"] = "AnomalyDetection";
})(EventPublisher = exports.EventPublisher || (exports.EventPublisher = {}));
var Channel;
(function (Channel) {
    /**
     * @internal
     */
    Channel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Channel = exports.Channel || (exports.Channel = {}));
var AddNotificationChannelsRequest;
(function (AddNotificationChannelsRequest) {
    /**
     * @internal
     */
    AddNotificationChannelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddNotificationChannelsRequest = exports.AddNotificationChannelsRequest || (exports.AddNotificationChannelsRequest = {}));
var NotificationConfiguration;
(function (NotificationConfiguration) {
    /**
     * @internal
     */
    NotificationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationConfiguration = exports.NotificationConfiguration || (exports.NotificationConfiguration = {}));
var AddNotificationChannelsResponse;
(function (AddNotificationChannelsResponse) {
    /**
     * @internal
     */
    AddNotificationChannelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddNotificationChannelsResponse = exports.AddNotificationChannelsResponse || (exports.AddNotificationChannelsResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var AgentParameterField;
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
})(AgentParameterField = exports.AgentParameterField || (exports.AgentParameterField = {}));
var AgentConfiguration;
(function (AgentConfiguration) {
    /**
     * @internal
     */
    AgentConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AgentConfiguration = exports.AgentConfiguration || (exports.AgentConfiguration = {}));
var AgentOrchestrationConfig;
(function (AgentOrchestrationConfig) {
    /**
     * @internal
     */
    AgentOrchestrationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AgentOrchestrationConfig = exports.AgentOrchestrationConfig || (exports.AgentOrchestrationConfig = {}));
var AggregationPeriod;
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
})(AggregationPeriod = exports.AggregationPeriod || (exports.AggregationPeriod = {}));
var AggregatedProfileTime;
(function (AggregatedProfileTime) {
    /**
     * @internal
     */
    AggregatedProfileTime.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregatedProfileTime = exports.AggregatedProfileTime || (exports.AggregatedProfileTime = {}));
var FeedbackType;
(function (FeedbackType) {
    /**
     * Profiler recommendation flagged as not useful.
     */
    FeedbackType["Negative"] = "Negative";
    /**
     * Profiler recommendation flagged as useful.
     */
    FeedbackType["Positive"] = "Positive";
})(FeedbackType = exports.FeedbackType || (exports.FeedbackType = {}));
var UserFeedback;
(function (UserFeedback) {
    /**
     * @internal
     */
    UserFeedback.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserFeedback = exports.UserFeedback || (exports.UserFeedback = {}));
var AnomalyInstance;
(function (AnomalyInstance) {
    /**
     * @internal
     */
    AnomalyInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnomalyInstance = exports.AnomalyInstance || (exports.AnomalyInstance = {}));
var MetricType;
(function (MetricType) {
    /**
     * Metric value aggregated for all instances of a frame name in a profile relative to the root frame.
     */
    MetricType["AggregatedRelativeTotalTime"] = "AggregatedRelativeTotalTime";
})(MetricType = exports.MetricType || (exports.MetricType = {}));
var Metric;
(function (Metric) {
    /**
     * @internal
     */
    Metric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Metric = exports.Metric || (exports.Metric = {}));
var Anomaly;
(function (Anomaly) {
    /**
     * @internal
     */
    Anomaly.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Anomaly = exports.Anomaly || (exports.Anomaly = {}));
var FrameMetric;
(function (FrameMetric) {
    /**
     * @internal
     */
    FrameMetric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FrameMetric = exports.FrameMetric || (exports.FrameMetric = {}));
var BatchGetFrameMetricDataRequest;
(function (BatchGetFrameMetricDataRequest) {
    /**
     * @internal
     */
    BatchGetFrameMetricDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetFrameMetricDataRequest = exports.BatchGetFrameMetricDataRequest || (exports.BatchGetFrameMetricDataRequest = {}));
var TimestampStructure;
(function (TimestampStructure) {
    /**
     * @internal
     */
    TimestampStructure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimestampStructure = exports.TimestampStructure || (exports.TimestampStructure = {}));
var FrameMetricDatum;
(function (FrameMetricDatum) {
    /**
     * @internal
     */
    FrameMetricDatum.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FrameMetricDatum = exports.FrameMetricDatum || (exports.FrameMetricDatum = {}));
var BatchGetFrameMetricDataResponse;
(function (BatchGetFrameMetricDataResponse) {
    /**
     * @internal
     */
    BatchGetFrameMetricDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetFrameMetricDataResponse = exports.BatchGetFrameMetricDataResponse || (exports.BatchGetFrameMetricDataResponse = {}));
var GetFindingsReportAccountSummaryRequest;
(function (GetFindingsReportAccountSummaryRequest) {
    /**
     * @internal
     */
    GetFindingsReportAccountSummaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsReportAccountSummaryRequest = exports.GetFindingsReportAccountSummaryRequest || (exports.GetFindingsReportAccountSummaryRequest = {}));
var FindingsReportSummary;
(function (FindingsReportSummary) {
    /**
     * @internal
     */
    FindingsReportSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindingsReportSummary = exports.FindingsReportSummary || (exports.FindingsReportSummary = {}));
var GetFindingsReportAccountSummaryResponse;
(function (GetFindingsReportAccountSummaryResponse) {
    /**
     * @internal
     */
    GetFindingsReportAccountSummaryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsReportAccountSummaryResponse = exports.GetFindingsReportAccountSummaryResponse || (exports.GetFindingsReportAccountSummaryResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var MetadataField;
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
})(MetadataField = exports.MetadataField || (exports.MetadataField = {}));
var ConfigureAgentRequest;
(function (ConfigureAgentRequest) {
    /**
     * @internal
     */
    ConfigureAgentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigureAgentRequest = exports.ConfigureAgentRequest || (exports.ConfigureAgentRequest = {}));
var ConfigureAgentResponse;
(function (ConfigureAgentResponse) {
    /**
     * @internal
     */
    ConfigureAgentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigureAgentResponse = exports.ConfigureAgentResponse || (exports.ConfigureAgentResponse = {}));
var ComputePlatform;
(function (ComputePlatform) {
    /**
     * Compute platform meant to used for AWS Lambda.
     */
    ComputePlatform["AWSLAMBDA"] = "AWSLambda";
    /**
     * Compute platform meant to used for all usecases (like EC2, Fargate, physical servers etc.) but AWS Lambda.
     */
    ComputePlatform["DEFAULT"] = "Default";
})(ComputePlatform = exports.ComputePlatform || (exports.ComputePlatform = {}));
var CreateProfilingGroupRequest;
(function (CreateProfilingGroupRequest) {
    /**
     * @internal
     */
    CreateProfilingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProfilingGroupRequest = exports.CreateProfilingGroupRequest || (exports.CreateProfilingGroupRequest = {}));
var ProfilingStatus;
(function (ProfilingStatus) {
    /**
     * @internal
     */
    ProfilingStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProfilingStatus = exports.ProfilingStatus || (exports.ProfilingStatus = {}));
var ProfilingGroupDescription;
(function (ProfilingGroupDescription) {
    /**
     * @internal
     */
    ProfilingGroupDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProfilingGroupDescription = exports.ProfilingGroupDescription || (exports.ProfilingGroupDescription = {}));
var CreateProfilingGroupResponse;
(function (CreateProfilingGroupResponse) {
    /**
     * @internal
     */
    CreateProfilingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProfilingGroupResponse = exports.CreateProfilingGroupResponse || (exports.CreateProfilingGroupResponse = {}));
var DeleteProfilingGroupRequest;
(function (DeleteProfilingGroupRequest) {
    /**
     * @internal
     */
    DeleteProfilingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProfilingGroupRequest = exports.DeleteProfilingGroupRequest || (exports.DeleteProfilingGroupRequest = {}));
var DeleteProfilingGroupResponse;
(function (DeleteProfilingGroupResponse) {
    /**
     * @internal
     */
    DeleteProfilingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProfilingGroupResponse = exports.DeleteProfilingGroupResponse || (exports.DeleteProfilingGroupResponse = {}));
var DescribeProfilingGroupRequest;
(function (DescribeProfilingGroupRequest) {
    /**
     * @internal
     */
    DescribeProfilingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProfilingGroupRequest = exports.DescribeProfilingGroupRequest || (exports.DescribeProfilingGroupRequest = {}));
var DescribeProfilingGroupResponse;
(function (DescribeProfilingGroupResponse) {
    /**
     * @internal
     */
    DescribeProfilingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProfilingGroupResponse = exports.DescribeProfilingGroupResponse || (exports.DescribeProfilingGroupResponse = {}));
var GetNotificationConfigurationRequest;
(function (GetNotificationConfigurationRequest) {
    /**
     * @internal
     */
    GetNotificationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNotificationConfigurationRequest = exports.GetNotificationConfigurationRequest || (exports.GetNotificationConfigurationRequest = {}));
var GetNotificationConfigurationResponse;
(function (GetNotificationConfigurationResponse) {
    /**
     * @internal
     */
    GetNotificationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNotificationConfigurationResponse = exports.GetNotificationConfigurationResponse || (exports.GetNotificationConfigurationResponse = {}));
var GetPolicyRequest;
(function (GetPolicyRequest) {
    /**
     * @internal
     */
    GetPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyRequest = exports.GetPolicyRequest || (exports.GetPolicyRequest = {}));
var GetPolicyResponse;
(function (GetPolicyResponse) {
    /**
     * @internal
     */
    GetPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyResponse = exports.GetPolicyResponse || (exports.GetPolicyResponse = {}));
var GetProfileRequest;
(function (GetProfileRequest) {
    /**
     * @internal
     */
    GetProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProfileRequest = exports.GetProfileRequest || (exports.GetProfileRequest = {}));
var GetProfileResponse;
(function (GetProfileResponse) {
    /**
     * @internal
     */
    GetProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProfileResponse = exports.GetProfileResponse || (exports.GetProfileResponse = {}));
var GetRecommendationsRequest;
(function (GetRecommendationsRequest) {
    /**
     * @internal
     */
    GetRecommendationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRecommendationsRequest = exports.GetRecommendationsRequest || (exports.GetRecommendationsRequest = {}));
var Pattern;
(function (Pattern) {
    /**
     * @internal
     */
    Pattern.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Pattern = exports.Pattern || (exports.Pattern = {}));
var Match;
(function (Match) {
    /**
     * @internal
     */
    Match.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Match = exports.Match || (exports.Match = {}));
var Recommendation;
(function (Recommendation) {
    /**
     * @internal
     */
    Recommendation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Recommendation = exports.Recommendation || (exports.Recommendation = {}));
var GetRecommendationsResponse;
(function (GetRecommendationsResponse) {
    /**
     * @internal
     */
    GetRecommendationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRecommendationsResponse = exports.GetRecommendationsResponse || (exports.GetRecommendationsResponse = {}));
var ListFindingsReportsRequest;
(function (ListFindingsReportsRequest) {
    /**
     * @internal
     */
    ListFindingsReportsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFindingsReportsRequest = exports.ListFindingsReportsRequest || (exports.ListFindingsReportsRequest = {}));
var ListFindingsReportsResponse;
(function (ListFindingsReportsResponse) {
    /**
     * @internal
     */
    ListFindingsReportsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFindingsReportsResponse = exports.ListFindingsReportsResponse || (exports.ListFindingsReportsResponse = {}));
var OrderBy;
(function (OrderBy) {
    /**
     * Order by timestamp in ascending order.
     */
    OrderBy["TIMESTAMP_ASCENDING"] = "TimestampAscending";
    /**
     * Order by timestamp in descending order.
     */
    OrderBy["TIMESTAMP_DESCENDING"] = "TimestampDescending";
})(OrderBy = exports.OrderBy || (exports.OrderBy = {}));
var ListProfileTimesRequest;
(function (ListProfileTimesRequest) {
    /**
     * @internal
     */
    ListProfileTimesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfileTimesRequest = exports.ListProfileTimesRequest || (exports.ListProfileTimesRequest = {}));
var ProfileTime;
(function (ProfileTime) {
    /**
     * @internal
     */
    ProfileTime.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProfileTime = exports.ProfileTime || (exports.ProfileTime = {}));
var ListProfileTimesResponse;
(function (ListProfileTimesResponse) {
    /**
     * @internal
     */
    ListProfileTimesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfileTimesResponse = exports.ListProfileTimesResponse || (exports.ListProfileTimesResponse = {}));
var ListProfilingGroupsRequest;
(function (ListProfilingGroupsRequest) {
    /**
     * @internal
     */
    ListProfilingGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfilingGroupsRequest = exports.ListProfilingGroupsRequest || (exports.ListProfilingGroupsRequest = {}));
var ListProfilingGroupsResponse;
(function (ListProfilingGroupsResponse) {
    /**
     * @internal
     */
    ListProfilingGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfilingGroupsResponse = exports.ListProfilingGroupsResponse || (exports.ListProfilingGroupsResponse = {}));
var PostAgentProfileRequest;
(function (PostAgentProfileRequest) {
    /**
     * @internal
     */
    PostAgentProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PostAgentProfileRequest = exports.PostAgentProfileRequest || (exports.PostAgentProfileRequest = {}));
var PostAgentProfileResponse;
(function (PostAgentProfileResponse) {
    /**
     * @internal
     */
    PostAgentProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PostAgentProfileResponse = exports.PostAgentProfileResponse || (exports.PostAgentProfileResponse = {}));
var PutPermissionRequest;
(function (PutPermissionRequest) {
    /**
     * @internal
     */
    PutPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPermissionRequest = exports.PutPermissionRequest || (exports.PutPermissionRequest = {}));
var PutPermissionResponse;
(function (PutPermissionResponse) {
    /**
     * @internal
     */
    PutPermissionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPermissionResponse = exports.PutPermissionResponse || (exports.PutPermissionResponse = {}));
var RemoveNotificationChannelRequest;
(function (RemoveNotificationChannelRequest) {
    /**
     * @internal
     */
    RemoveNotificationChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveNotificationChannelRequest = exports.RemoveNotificationChannelRequest || (exports.RemoveNotificationChannelRequest = {}));
var RemoveNotificationChannelResponse;
(function (RemoveNotificationChannelResponse) {
    /**
     * @internal
     */
    RemoveNotificationChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveNotificationChannelResponse = exports.RemoveNotificationChannelResponse || (exports.RemoveNotificationChannelResponse = {}));
var RemovePermissionRequest;
(function (RemovePermissionRequest) {
    /**
     * @internal
     */
    RemovePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemovePermissionRequest = exports.RemovePermissionRequest || (exports.RemovePermissionRequest = {}));
var RemovePermissionResponse;
(function (RemovePermissionResponse) {
    /**
     * @internal
     */
    RemovePermissionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemovePermissionResponse = exports.RemovePermissionResponse || (exports.RemovePermissionResponse = {}));
var SubmitFeedbackRequest;
(function (SubmitFeedbackRequest) {
    /**
     * @internal
     */
    SubmitFeedbackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubmitFeedbackRequest = exports.SubmitFeedbackRequest || (exports.SubmitFeedbackRequest = {}));
var SubmitFeedbackResponse;
(function (SubmitFeedbackResponse) {
    /**
     * @internal
     */
    SubmitFeedbackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubmitFeedbackResponse = exports.SubmitFeedbackResponse || (exports.SubmitFeedbackResponse = {}));
var UpdateProfilingGroupRequest;
(function (UpdateProfilingGroupRequest) {
    /**
     * @internal
     */
    UpdateProfilingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProfilingGroupRequest = exports.UpdateProfilingGroupRequest || (exports.UpdateProfilingGroupRequest = {}));
var UpdateProfilingGroupResponse;
(function (UpdateProfilingGroupResponse) {
    /**
     * @internal
     */
    UpdateProfilingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProfilingGroupResponse = exports.UpdateProfilingGroupResponse || (exports.UpdateProfilingGroupResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
//# sourceMappingURL=models_0.js.map