"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperParameterTuningJobSortByOptions = exports.HumanTaskUiSummary = exports.GitConfigForUpdate = exports.GetSearchSuggestionsResponse = exports.PropertyNameSuggestion = exports.GetSearchSuggestionsRequest = exports.SuggestionQuery = exports.PropertyNameQuery = exports.ResourceType = exports.GetSagemakerServicecatalogPortfolioStatusOutput = exports.SagemakerServicecatalogStatus = exports.GetSagemakerServicecatalogPortfolioStatusInput = exports.GetModelPackageGroupPolicyOutput = exports.GetModelPackageGroupPolicyInput = exports.GetDeviceFleetReportResponse = exports.GetDeviceFleetReportRequest = exports.FlowDefinitionSummary = exports.Filter = exports.Operator = exports.FeatureGroupSummary = exports.FeatureGroupSortOrder = exports.FeatureGroupSortBy = exports.FeatureGroup = exports.ExperimentSummary = exports.Experiment = exports.EndpointSummary = exports.EndpointSortKey = exports.EndpointConfigSummary = exports.EndpointConfigSortKey = exports.Endpoint = exports.MonitoringSchedule = exports.EnableSagemakerServicecatalogPortfolioOutput = exports.EnableSagemakerServicecatalogPortfolioInput = exports.EdgePackagingJobSummary = exports.EdgeModelStat = exports.DomainDetails = exports.DisassociateTrialComponentResponse = exports.DisassociateTrialComponentRequest = exports.DisableSagemakerServicecatalogPortfolioOutput = exports.DisableSagemakerServicecatalogPortfolioInput = exports.DeviceSummary = exports.EdgeModelSummary = exports.DeviceStats = exports.DeviceFleetSummary = exports.Device = exports.DesiredWeightAndCapacity = exports.DescribeWorkteamResponse = exports.Workteam = exports.DescribeWorkteamRequest = exports.DescribeWorkforceResponse = void 0;
exports.ListEdgePackagingJobsSortBy = exports.ListDomainsResponse = exports.ListDomainsRequest = exports.ListDevicesResponse = exports.ListDevicesRequest = exports.ListDeviceFleetsResponse = exports.ListDeviceFleetsRequest = exports.ListDeviceFleetsSortBy = exports.ListDataQualityJobDefinitionsResponse = exports.MonitoringJobDefinitionSummary = exports.ListDataQualityJobDefinitionsRequest = exports.MonitoringJobDefinitionSortKey = exports.ListContextsResponse = exports.ListContextsRequest = exports.SortContextsBy = exports.ListCompilationJobsResponse = exports.ListCompilationJobsRequest = exports.ListCompilationJobsSortBy = exports.ListCodeRepositoriesOutput = exports.ListCodeRepositoriesInput = exports.ListCandidatesForAutoMLJobResponse = exports.ListCandidatesForAutoMLJobRequest = exports.ListAutoMLJobsResponse = exports.ListAutoMLJobsRequest = exports.ListAssociationsResponse = exports.ListAssociationsRequest = exports.SortAssociationsBy = exports.ListArtifactsResponse = exports.ListArtifactsRequest = exports.SortArtifactsBy = exports.ListAppsResponse = exports.ListAppsRequest = exports.ListAppImageConfigsResponse = exports.ListAppImageConfigsRequest = exports.ListAlgorithmsOutput = exports.ListAlgorithmsInput = exports.ListActionsResponse = exports.ListActionsRequest = exports.SortOrder = exports.SortActionsBy = exports.LabelingJobSummary = exports.LabelingJobForWorkteamSummary = exports.LabelCountersForWorkteam = exports.ImageVersionSortOrder = exports.ImageVersionSortBy = exports.ImageVersion = exports.ImageSortOrder = exports.ImageSortBy = exports.Image = exports.HyperParameterTuningJobSummary = void 0;
exports.ListMonitoringExecutionsResponse = exports.ListMonitoringExecutionsRequest = exports.MonitoringExecutionSortKey = exports.ListModelsOutput = exports.ModelSummary = exports.ListModelsInput = exports.ModelSortKey = exports.ListModelQualityJobDefinitionsResponse = exports.ListModelQualityJobDefinitionsRequest = exports.ListModelPackagesOutput = exports.ModelPackageSummary = exports.ListModelPackagesInput = exports.ModelPackageSortBy = exports.ModelPackageType = exports.ListModelPackageGroupsOutput = exports.ModelPackageGroupSummary = exports.ListModelPackageGroupsInput = exports.ModelPackageGroupSortBy = exports.ListModelExplainabilityJobDefinitionsResponse = exports.ListModelExplainabilityJobDefinitionsRequest = exports.ListModelBiasJobDefinitionsResponse = exports.ListModelBiasJobDefinitionsRequest = exports.ListLabelingJobsForWorkteamResponse = exports.ListLabelingJobsForWorkteamRequest = exports.ListLabelingJobsForWorkteamSortByOptions = exports.ListLabelingJobsResponse = exports.ListLabelingJobsRequest = exports.SortBy = exports.ListImageVersionsResponse = exports.ListImageVersionsRequest = exports.ListImagesResponse = exports.ListImagesRequest = exports.ListHyperParameterTuningJobsResponse = exports.ListHyperParameterTuningJobsRequest = exports.ListHumanTaskUisResponse = exports.ListHumanTaskUisRequest = exports.ListFlowDefinitionsResponse = exports.ListFlowDefinitionsRequest = exports.ListFeatureGroupsResponse = exports.ListFeatureGroupsRequest = exports.ListExperimentsResponse = exports.ListExperimentsRequest = exports.SortExperimentsBy = exports.ListEndpointsOutput = exports.ListEndpointsInput = exports.ListEndpointConfigsOutput = exports.ListEndpointConfigsInput = exports.OrderKey = exports.ListEdgePackagingJobsResponse = exports.ListEdgePackagingJobsRequest = void 0;
exports.ListTrainingJobsResponse = exports.TrainingJobSummary = exports.ListTrainingJobsRequest = exports.ListTagsOutput = exports.ListTagsInput = exports.ListSubscribedWorkteamsResponse = exports.ListSubscribedWorkteamsRequest = exports.ListProjectsOutput = exports.ProjectSummary = exports.ListProjectsInput = exports.ProjectSortOrder = exports.ProjectSortBy = exports.ListProcessingJobsResponse = exports.ProcessingJobSummary = exports.ListProcessingJobsRequest = exports.ListPipelinesResponse = exports.PipelineSummary = exports.ListPipelinesRequest = exports.SortPipelinesBy = exports.ListPipelineParametersForExecutionResponse = exports.Parameter = exports.ListPipelineParametersForExecutionRequest = exports.ListPipelineExecutionStepsResponse = exports.PipelineExecutionStep = exports.StepStatus = exports.PipelineExecutionStepMetadata = exports.TransformJobStepMetadata = exports.TrainingJobStepMetadata = exports.RegisterModelStepMetadata = exports.ProcessingJobStepMetadata = exports.ModelStepMetadata = exports.ListPipelineExecutionStepsRequest = exports.ListPipelineExecutionsResponse = exports.PipelineExecutionSummary = exports.ListPipelineExecutionsRequest = exports.SortPipelineExecutionsBy = exports.ListNotebookInstancesOutput = exports.NotebookInstanceSummary = exports.ListNotebookInstancesInput = exports.NotebookInstanceSortOrder = exports.NotebookInstanceSortKey = exports.ListNotebookInstanceLifecycleConfigsOutput = exports.NotebookInstanceLifecycleConfigSummary = exports.ListNotebookInstanceLifecycleConfigsInput = exports.NotebookInstanceLifecycleConfigSortOrder = exports.NotebookInstanceLifecycleConfigSortKey = exports.ListMonitoringSchedulesResponse = exports.MonitoringScheduleSummary = exports.ListMonitoringSchedulesRequest = exports.MonitoringScheduleSortKey = void 0;
exports.StartNotebookInstanceInput = exports.StartMonitoringScheduleRequest = exports.SearchResponse = exports.SearchRecord = exports.TrialComponent = exports.TrialComponentSourceDetail = exports.TransformJob = exports.Trial = exports.TrialComponentSimpleSummary = exports.TrainingJob = exports.SearchSortOrder = exports.RenderUiTemplateResponse = exports.RenderUiTemplateRequest = exports.RenderingError = exports.RenderableTask = exports.RegisterDevicesRequest = exports.PutModelPackageGroupPolicyOutput = exports.PutModelPackageGroupPolicyInput = exports.ProfilerConfigForUpdate = exports.ProcessingJob = exports.PipelineExecution = exports.Pipeline = exports.Parent = exports.NestedFilters = exports.ModelPackageGroup = exports.ModelPackage = exports.ListWorkteamsResponse = exports.ListWorkteamsRequest = exports.ListWorkteamsSortByOptions = exports.ListWorkforcesResponse = exports.ListWorkforcesRequest = exports.ListWorkforcesSortByOptions = exports.ListUserProfilesResponse = exports.UserProfileDetails = exports.ListUserProfilesRequest = exports.UserProfileSortKey = exports.ListTrialsResponse = exports.TrialSummary = exports.ListTrialsRequest = exports.SortTrialsBy = exports.ListTrialComponentsResponse = exports.TrialComponentSummary = exports.ListTrialComponentsRequest = exports.SortTrialComponentsBy = exports.ListTransformJobsResponse = exports.TransformJobSummary = exports.ListTransformJobsRequest = exports.ListTrainingJobsForHyperParameterTuningJobResponse = exports.ListTrainingJobsForHyperParameterTuningJobRequest = exports.TrainingJobSortByOptions = void 0;
exports.UpdatePipelineExecutionResponse = exports.UpdatePipelineExecutionRequest = exports.UpdatePipelineResponse = exports.UpdatePipelineRequest = exports.UpdateNotebookInstanceLifecycleConfigOutput = exports.UpdateNotebookInstanceLifecycleConfigInput = exports.UpdateNotebookInstanceOutput = exports.UpdateNotebookInstanceInput = exports.UpdateMonitoringScheduleResponse = exports.UpdateMonitoringScheduleRequest = exports.UpdateModelPackageOutput = exports.UpdateModelPackageInput = exports.UpdateImageResponse = exports.UpdateImageRequest = exports.UpdateExperimentResponse = exports.UpdateExperimentRequest = exports.UpdateEndpointWeightsAndCapacitiesOutput = exports.UpdateEndpointWeightsAndCapacitiesInput = exports.UpdateEndpointOutput = exports.UpdateEndpointInput = exports.VariantProperty = exports.VariantPropertyType = exports.UpdateDomainResponse = exports.UpdateDomainRequest = exports.UpdateDevicesRequest = exports.UpdateDeviceFleetRequest = exports.UpdateContextResponse = exports.UpdateContextRequest = exports.UpdateCodeRepositoryOutput = exports.UpdateCodeRepositoryInput = exports.UpdateArtifactResponse = exports.UpdateArtifactRequest = exports.UpdateAppImageConfigResponse = exports.UpdateAppImageConfigRequest = exports.UpdateActionResponse = exports.UpdateActionRequest = exports.StopTransformJobRequest = exports.StopTrainingJobRequest = exports.StopProcessingJobRequest = exports.StopPipelineExecutionResponse = exports.StopPipelineExecutionRequest = exports.StopNotebookInstanceInput = exports.StopMonitoringScheduleRequest = exports.StopLabelingJobRequest = exports.StopHyperParameterTuningJobRequest = exports.StopEdgePackagingJobRequest = exports.StopCompilationJobRequest = exports.StopAutoMLJobRequest = exports.StartPipelineExecutionResponse = exports.StartPipelineExecutionRequest = void 0;
const models_1_1 = require("./models_1");
var DescribeWorkforceResponse;
(function (DescribeWorkforceResponse) {
    /**
     * @internal
     */
    DescribeWorkforceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkforceResponse = exports.DescribeWorkforceResponse || (exports.DescribeWorkforceResponse = {}));
var DescribeWorkteamRequest;
(function (DescribeWorkteamRequest) {
    /**
     * @internal
     */
    DescribeWorkteamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkteamRequest = exports.DescribeWorkteamRequest || (exports.DescribeWorkteamRequest = {}));
var Workteam;
(function (Workteam) {
    /**
     * @internal
     */
    Workteam.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Workteam = exports.Workteam || (exports.Workteam = {}));
var DescribeWorkteamResponse;
(function (DescribeWorkteamResponse) {
    /**
     * @internal
     */
    DescribeWorkteamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkteamResponse = exports.DescribeWorkteamResponse || (exports.DescribeWorkteamResponse = {}));
var DesiredWeightAndCapacity;
(function (DesiredWeightAndCapacity) {
    /**
     * @internal
     */
    DesiredWeightAndCapacity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DesiredWeightAndCapacity = exports.DesiredWeightAndCapacity || (exports.DesiredWeightAndCapacity = {}));
var Device;
(function (Device) {
    /**
     * @internal
     */
    Device.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Device = exports.Device || (exports.Device = {}));
var DeviceFleetSummary;
(function (DeviceFleetSummary) {
    /**
     * @internal
     */
    DeviceFleetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceFleetSummary = exports.DeviceFleetSummary || (exports.DeviceFleetSummary = {}));
var DeviceStats;
(function (DeviceStats) {
    /**
     * @internal
     */
    DeviceStats.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceStats = exports.DeviceStats || (exports.DeviceStats = {}));
var EdgeModelSummary;
(function (EdgeModelSummary) {
    /**
     * @internal
     */
    EdgeModelSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EdgeModelSummary = exports.EdgeModelSummary || (exports.EdgeModelSummary = {}));
var DeviceSummary;
(function (DeviceSummary) {
    /**
     * @internal
     */
    DeviceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceSummary = exports.DeviceSummary || (exports.DeviceSummary = {}));
var DisableSagemakerServicecatalogPortfolioInput;
(function (DisableSagemakerServicecatalogPortfolioInput) {
    /**
     * @internal
     */
    DisableSagemakerServicecatalogPortfolioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableSagemakerServicecatalogPortfolioInput = exports.DisableSagemakerServicecatalogPortfolioInput || (exports.DisableSagemakerServicecatalogPortfolioInput = {}));
var DisableSagemakerServicecatalogPortfolioOutput;
(function (DisableSagemakerServicecatalogPortfolioOutput) {
    /**
     * @internal
     */
    DisableSagemakerServicecatalogPortfolioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableSagemakerServicecatalogPortfolioOutput = exports.DisableSagemakerServicecatalogPortfolioOutput || (exports.DisableSagemakerServicecatalogPortfolioOutput = {}));
var DisassociateTrialComponentRequest;
(function (DisassociateTrialComponentRequest) {
    /**
     * @internal
     */
    DisassociateTrialComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTrialComponentRequest = exports.DisassociateTrialComponentRequest || (exports.DisassociateTrialComponentRequest = {}));
var DisassociateTrialComponentResponse;
(function (DisassociateTrialComponentResponse) {
    /**
     * @internal
     */
    DisassociateTrialComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTrialComponentResponse = exports.DisassociateTrialComponentResponse || (exports.DisassociateTrialComponentResponse = {}));
var DomainDetails;
(function (DomainDetails) {
    /**
     * @internal
     */
    DomainDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainDetails = exports.DomainDetails || (exports.DomainDetails = {}));
var EdgeModelStat;
(function (EdgeModelStat) {
    /**
     * @internal
     */
    EdgeModelStat.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EdgeModelStat = exports.EdgeModelStat || (exports.EdgeModelStat = {}));
var EdgePackagingJobSummary;
(function (EdgePackagingJobSummary) {
    /**
     * @internal
     */
    EdgePackagingJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EdgePackagingJobSummary = exports.EdgePackagingJobSummary || (exports.EdgePackagingJobSummary = {}));
var EnableSagemakerServicecatalogPortfolioInput;
(function (EnableSagemakerServicecatalogPortfolioInput) {
    /**
     * @internal
     */
    EnableSagemakerServicecatalogPortfolioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableSagemakerServicecatalogPortfolioInput = exports.EnableSagemakerServicecatalogPortfolioInput || (exports.EnableSagemakerServicecatalogPortfolioInput = {}));
var EnableSagemakerServicecatalogPortfolioOutput;
(function (EnableSagemakerServicecatalogPortfolioOutput) {
    /**
     * @internal
     */
    EnableSagemakerServicecatalogPortfolioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableSagemakerServicecatalogPortfolioOutput = exports.EnableSagemakerServicecatalogPortfolioOutput || (exports.EnableSagemakerServicecatalogPortfolioOutput = {}));
var MonitoringSchedule;
(function (MonitoringSchedule) {
    /**
     * @internal
     */
    MonitoringSchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringSchedule = exports.MonitoringSchedule || (exports.MonitoringSchedule = {}));
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var EndpointConfigSortKey;
(function (EndpointConfigSortKey) {
    EndpointConfigSortKey["CreationTime"] = "CreationTime";
    EndpointConfigSortKey["Name"] = "Name";
})(EndpointConfigSortKey = exports.EndpointConfigSortKey || (exports.EndpointConfigSortKey = {}));
var EndpointConfigSummary;
(function (EndpointConfigSummary) {
    /**
     * @internal
     */
    EndpointConfigSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointConfigSummary = exports.EndpointConfigSummary || (exports.EndpointConfigSummary = {}));
var EndpointSortKey;
(function (EndpointSortKey) {
    EndpointSortKey["CreationTime"] = "CreationTime";
    EndpointSortKey["Name"] = "Name";
    EndpointSortKey["Status"] = "Status";
})(EndpointSortKey = exports.EndpointSortKey || (exports.EndpointSortKey = {}));
var EndpointSummary;
(function (EndpointSummary) {
    /**
     * @internal
     */
    EndpointSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointSummary = exports.EndpointSummary || (exports.EndpointSummary = {}));
var Experiment;
(function (Experiment) {
    /**
     * @internal
     */
    Experiment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Experiment = exports.Experiment || (exports.Experiment = {}));
var ExperimentSummary;
(function (ExperimentSummary) {
    /**
     * @internal
     */
    ExperimentSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentSummary = exports.ExperimentSummary || (exports.ExperimentSummary = {}));
var FeatureGroup;
(function (FeatureGroup) {
    /**
     * @internal
     */
    FeatureGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FeatureGroup = exports.FeatureGroup || (exports.FeatureGroup = {}));
var FeatureGroupSortBy;
(function (FeatureGroupSortBy) {
    FeatureGroupSortBy["CREATION_TIME"] = "CreationTime";
    FeatureGroupSortBy["FEATURE_GROUP_STATUS"] = "FeatureGroupStatus";
    FeatureGroupSortBy["NAME"] = "Name";
    FeatureGroupSortBy["OFFLINE_STORE_STATUS"] = "OfflineStoreStatus";
})(FeatureGroupSortBy = exports.FeatureGroupSortBy || (exports.FeatureGroupSortBy = {}));
var FeatureGroupSortOrder;
(function (FeatureGroupSortOrder) {
    FeatureGroupSortOrder["ASCENDING"] = "Ascending";
    FeatureGroupSortOrder["DESCENDING"] = "Descending";
})(FeatureGroupSortOrder = exports.FeatureGroupSortOrder || (exports.FeatureGroupSortOrder = {}));
var FeatureGroupSummary;
(function (FeatureGroupSummary) {
    /**
     * @internal
     */
    FeatureGroupSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FeatureGroupSummary = exports.FeatureGroupSummary || (exports.FeatureGroupSummary = {}));
var Operator;
(function (Operator) {
    Operator["CONTAINS"] = "Contains";
    Operator["EQUALS"] = "Equals";
    Operator["EXISTS"] = "Exists";
    Operator["GREATER_THAN"] = "GreaterThan";
    Operator["GREATER_THAN_OR_EQUAL_TO"] = "GreaterThanOrEqualTo";
    Operator["IN"] = "In";
    Operator["LESS_THAN"] = "LessThan";
    Operator["LESS_THAN_OR_EQUAL_TO"] = "LessThanOrEqualTo";
    Operator["NOT_EQUALS"] = "NotEquals";
    Operator["NOT_EXISTS"] = "NotExists";
})(Operator = exports.Operator || (exports.Operator = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var FlowDefinitionSummary;
(function (FlowDefinitionSummary) {
    /**
     * @internal
     */
    FlowDefinitionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlowDefinitionSummary = exports.FlowDefinitionSummary || (exports.FlowDefinitionSummary = {}));
var GetDeviceFleetReportRequest;
(function (GetDeviceFleetReportRequest) {
    /**
     * @internal
     */
    GetDeviceFleetReportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceFleetReportRequest = exports.GetDeviceFleetReportRequest || (exports.GetDeviceFleetReportRequest = {}));
var GetDeviceFleetReportResponse;
(function (GetDeviceFleetReportResponse) {
    /**
     * @internal
     */
    GetDeviceFleetReportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceFleetReportResponse = exports.GetDeviceFleetReportResponse || (exports.GetDeviceFleetReportResponse = {}));
var GetModelPackageGroupPolicyInput;
(function (GetModelPackageGroupPolicyInput) {
    /**
     * @internal
     */
    GetModelPackageGroupPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetModelPackageGroupPolicyInput = exports.GetModelPackageGroupPolicyInput || (exports.GetModelPackageGroupPolicyInput = {}));
var GetModelPackageGroupPolicyOutput;
(function (GetModelPackageGroupPolicyOutput) {
    /**
     * @internal
     */
    GetModelPackageGroupPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetModelPackageGroupPolicyOutput = exports.GetModelPackageGroupPolicyOutput || (exports.GetModelPackageGroupPolicyOutput = {}));
var GetSagemakerServicecatalogPortfolioStatusInput;
(function (GetSagemakerServicecatalogPortfolioStatusInput) {
    /**
     * @internal
     */
    GetSagemakerServicecatalogPortfolioStatusInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSagemakerServicecatalogPortfolioStatusInput = exports.GetSagemakerServicecatalogPortfolioStatusInput || (exports.GetSagemakerServicecatalogPortfolioStatusInput = {}));
var SagemakerServicecatalogStatus;
(function (SagemakerServicecatalogStatus) {
    SagemakerServicecatalogStatus["DISABLED"] = "Disabled";
    SagemakerServicecatalogStatus["ENABLED"] = "Enabled";
})(SagemakerServicecatalogStatus = exports.SagemakerServicecatalogStatus || (exports.SagemakerServicecatalogStatus = {}));
var GetSagemakerServicecatalogPortfolioStatusOutput;
(function (GetSagemakerServicecatalogPortfolioStatusOutput) {
    /**
     * @internal
     */
    GetSagemakerServicecatalogPortfolioStatusOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSagemakerServicecatalogPortfolioStatusOutput = exports.GetSagemakerServicecatalogPortfolioStatusOutput || (exports.GetSagemakerServicecatalogPortfolioStatusOutput = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["ENDPOINT"] = "Endpoint";
    ResourceType["EXPERIMENT"] = "Experiment";
    ResourceType["EXPERIMENT_TRIAL"] = "ExperimentTrial";
    ResourceType["EXPERIMENT_TRIAL_COMPONENT"] = "ExperimentTrialComponent";
    ResourceType["FEATURE_GROUP"] = "FeatureGroup";
    ResourceType["MODEL_PACKAGE"] = "ModelPackage";
    ResourceType["MODEL_PACKAGE_GROUP"] = "ModelPackageGroup";
    ResourceType["PIPELINE"] = "Pipeline";
    ResourceType["PIPELINE_EXECUTION"] = "PipelineExecution";
    ResourceType["TRAINING_JOB"] = "TrainingJob";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var PropertyNameQuery;
(function (PropertyNameQuery) {
    /**
     * @internal
     */
    PropertyNameQuery.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PropertyNameQuery = exports.PropertyNameQuery || (exports.PropertyNameQuery = {}));
var SuggestionQuery;
(function (SuggestionQuery) {
    /**
     * @internal
     */
    SuggestionQuery.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuggestionQuery = exports.SuggestionQuery || (exports.SuggestionQuery = {}));
var GetSearchSuggestionsRequest;
(function (GetSearchSuggestionsRequest) {
    /**
     * @internal
     */
    GetSearchSuggestionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSearchSuggestionsRequest = exports.GetSearchSuggestionsRequest || (exports.GetSearchSuggestionsRequest = {}));
var PropertyNameSuggestion;
(function (PropertyNameSuggestion) {
    /**
     * @internal
     */
    PropertyNameSuggestion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PropertyNameSuggestion = exports.PropertyNameSuggestion || (exports.PropertyNameSuggestion = {}));
var GetSearchSuggestionsResponse;
(function (GetSearchSuggestionsResponse) {
    /**
     * @internal
     */
    GetSearchSuggestionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSearchSuggestionsResponse = exports.GetSearchSuggestionsResponse || (exports.GetSearchSuggestionsResponse = {}));
var GitConfigForUpdate;
(function (GitConfigForUpdate) {
    /**
     * @internal
     */
    GitConfigForUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GitConfigForUpdate = exports.GitConfigForUpdate || (exports.GitConfigForUpdate = {}));
var HumanTaskUiSummary;
(function (HumanTaskUiSummary) {
    /**
     * @internal
     */
    HumanTaskUiSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanTaskUiSummary = exports.HumanTaskUiSummary || (exports.HumanTaskUiSummary = {}));
var HyperParameterTuningJobSortByOptions;
(function (HyperParameterTuningJobSortByOptions) {
    HyperParameterTuningJobSortByOptions["CreationTime"] = "CreationTime";
    HyperParameterTuningJobSortByOptions["Name"] = "Name";
    HyperParameterTuningJobSortByOptions["Status"] = "Status";
})(HyperParameterTuningJobSortByOptions = exports.HyperParameterTuningJobSortByOptions || (exports.HyperParameterTuningJobSortByOptions = {}));
var HyperParameterTuningJobSummary;
(function (HyperParameterTuningJobSummary) {
    /**
     * @internal
     */
    HyperParameterTuningJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HyperParameterTuningJobSummary = exports.HyperParameterTuningJobSummary || (exports.HyperParameterTuningJobSummary = {}));
var Image;
(function (Image) {
    /**
     * @internal
     */
    Image.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Image = exports.Image || (exports.Image = {}));
var ImageSortBy;
(function (ImageSortBy) {
    ImageSortBy["CREATION_TIME"] = "CREATION_TIME";
    ImageSortBy["IMAGE_NAME"] = "IMAGE_NAME";
    ImageSortBy["LAST_MODIFIED_TIME"] = "LAST_MODIFIED_TIME";
})(ImageSortBy = exports.ImageSortBy || (exports.ImageSortBy = {}));
var ImageSortOrder;
(function (ImageSortOrder) {
    ImageSortOrder["ASCENDING"] = "ASCENDING";
    ImageSortOrder["DESCENDING"] = "DESCENDING";
})(ImageSortOrder = exports.ImageSortOrder || (exports.ImageSortOrder = {}));
var ImageVersion;
(function (ImageVersion) {
    /**
     * @internal
     */
    ImageVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageVersion = exports.ImageVersion || (exports.ImageVersion = {}));
var ImageVersionSortBy;
(function (ImageVersionSortBy) {
    ImageVersionSortBy["CREATION_TIME"] = "CREATION_TIME";
    ImageVersionSortBy["LAST_MODIFIED_TIME"] = "LAST_MODIFIED_TIME";
    ImageVersionSortBy["VERSION"] = "VERSION";
})(ImageVersionSortBy = exports.ImageVersionSortBy || (exports.ImageVersionSortBy = {}));
var ImageVersionSortOrder;
(function (ImageVersionSortOrder) {
    ImageVersionSortOrder["ASCENDING"] = "ASCENDING";
    ImageVersionSortOrder["DESCENDING"] = "DESCENDING";
})(ImageVersionSortOrder = exports.ImageVersionSortOrder || (exports.ImageVersionSortOrder = {}));
var LabelCountersForWorkteam;
(function (LabelCountersForWorkteam) {
    /**
     * @internal
     */
    LabelCountersForWorkteam.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelCountersForWorkteam = exports.LabelCountersForWorkteam || (exports.LabelCountersForWorkteam = {}));
var LabelingJobForWorkteamSummary;
(function (LabelingJobForWorkteamSummary) {
    /**
     * @internal
     */
    LabelingJobForWorkteamSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingJobForWorkteamSummary = exports.LabelingJobForWorkteamSummary || (exports.LabelingJobForWorkteamSummary = {}));
var LabelingJobSummary;
(function (LabelingJobSummary) {
    /**
     * @internal
     */
    LabelingJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingJobSummary = exports.LabelingJobSummary || (exports.LabelingJobSummary = {}));
var SortActionsBy;
(function (SortActionsBy) {
    SortActionsBy["CREATION_TIME"] = "CreationTime";
    SortActionsBy["NAME"] = "Name";
})(SortActionsBy = exports.SortActionsBy || (exports.SortActionsBy = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "Ascending";
    SortOrder["DESCENDING"] = "Descending";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var ListActionsRequest;
(function (ListActionsRequest) {
    /**
     * @internal
     */
    ListActionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActionsRequest = exports.ListActionsRequest || (exports.ListActionsRequest = {}));
var ListActionsResponse;
(function (ListActionsResponse) {
    /**
     * @internal
     */
    ListActionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActionsResponse = exports.ListActionsResponse || (exports.ListActionsResponse = {}));
var ListAlgorithmsInput;
(function (ListAlgorithmsInput) {
    /**
     * @internal
     */
    ListAlgorithmsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAlgorithmsInput = exports.ListAlgorithmsInput || (exports.ListAlgorithmsInput = {}));
var ListAlgorithmsOutput;
(function (ListAlgorithmsOutput) {
    /**
     * @internal
     */
    ListAlgorithmsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAlgorithmsOutput = exports.ListAlgorithmsOutput || (exports.ListAlgorithmsOutput = {}));
var ListAppImageConfigsRequest;
(function (ListAppImageConfigsRequest) {
    /**
     * @internal
     */
    ListAppImageConfigsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAppImageConfigsRequest = exports.ListAppImageConfigsRequest || (exports.ListAppImageConfigsRequest = {}));
var ListAppImageConfigsResponse;
(function (ListAppImageConfigsResponse) {
    /**
     * @internal
     */
    ListAppImageConfigsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAppImageConfigsResponse = exports.ListAppImageConfigsResponse || (exports.ListAppImageConfigsResponse = {}));
var ListAppsRequest;
(function (ListAppsRequest) {
    /**
     * @internal
     */
    ListAppsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAppsRequest = exports.ListAppsRequest || (exports.ListAppsRequest = {}));
var ListAppsResponse;
(function (ListAppsResponse) {
    /**
     * @internal
     */
    ListAppsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAppsResponse = exports.ListAppsResponse || (exports.ListAppsResponse = {}));
var SortArtifactsBy;
(function (SortArtifactsBy) {
    SortArtifactsBy["CREATION_TIME"] = "CreationTime";
})(SortArtifactsBy = exports.SortArtifactsBy || (exports.SortArtifactsBy = {}));
var ListArtifactsRequest;
(function (ListArtifactsRequest) {
    /**
     * @internal
     */
    ListArtifactsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListArtifactsRequest = exports.ListArtifactsRequest || (exports.ListArtifactsRequest = {}));
var ListArtifactsResponse;
(function (ListArtifactsResponse) {
    /**
     * @internal
     */
    ListArtifactsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListArtifactsResponse = exports.ListArtifactsResponse || (exports.ListArtifactsResponse = {}));
var SortAssociationsBy;
(function (SortAssociationsBy) {
    SortAssociationsBy["CREATION_TIME"] = "CreationTime";
    SortAssociationsBy["DESTINATION_ARN"] = "DestinationArn";
    SortAssociationsBy["DESTINATION_TYPE"] = "DestinationType";
    SortAssociationsBy["SOURCE_ARN"] = "SourceArn";
    SortAssociationsBy["SOURCE_TYPE"] = "SourceType";
})(SortAssociationsBy = exports.SortAssociationsBy || (exports.SortAssociationsBy = {}));
var ListAssociationsRequest;
(function (ListAssociationsRequest) {
    /**
     * @internal
     */
    ListAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociationsRequest = exports.ListAssociationsRequest || (exports.ListAssociationsRequest = {}));
var ListAssociationsResponse;
(function (ListAssociationsResponse) {
    /**
     * @internal
     */
    ListAssociationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociationsResponse = exports.ListAssociationsResponse || (exports.ListAssociationsResponse = {}));
var ListAutoMLJobsRequest;
(function (ListAutoMLJobsRequest) {
    /**
     * @internal
     */
    ListAutoMLJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAutoMLJobsRequest = exports.ListAutoMLJobsRequest || (exports.ListAutoMLJobsRequest = {}));
var ListAutoMLJobsResponse;
(function (ListAutoMLJobsResponse) {
    /**
     * @internal
     */
    ListAutoMLJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAutoMLJobsResponse = exports.ListAutoMLJobsResponse || (exports.ListAutoMLJobsResponse = {}));
var ListCandidatesForAutoMLJobRequest;
(function (ListCandidatesForAutoMLJobRequest) {
    /**
     * @internal
     */
    ListCandidatesForAutoMLJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCandidatesForAutoMLJobRequest = exports.ListCandidatesForAutoMLJobRequest || (exports.ListCandidatesForAutoMLJobRequest = {}));
var ListCandidatesForAutoMLJobResponse;
(function (ListCandidatesForAutoMLJobResponse) {
    /**
     * @internal
     */
    ListCandidatesForAutoMLJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCandidatesForAutoMLJobResponse = exports.ListCandidatesForAutoMLJobResponse || (exports.ListCandidatesForAutoMLJobResponse = {}));
var ListCodeRepositoriesInput;
(function (ListCodeRepositoriesInput) {
    /**
     * @internal
     */
    ListCodeRepositoriesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCodeRepositoriesInput = exports.ListCodeRepositoriesInput || (exports.ListCodeRepositoriesInput = {}));
var ListCodeRepositoriesOutput;
(function (ListCodeRepositoriesOutput) {
    /**
     * @internal
     */
    ListCodeRepositoriesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCodeRepositoriesOutput = exports.ListCodeRepositoriesOutput || (exports.ListCodeRepositoriesOutput = {}));
var ListCompilationJobsSortBy;
(function (ListCompilationJobsSortBy) {
    ListCompilationJobsSortBy["CREATION_TIME"] = "CreationTime";
    ListCompilationJobsSortBy["NAME"] = "Name";
    ListCompilationJobsSortBy["STATUS"] = "Status";
})(ListCompilationJobsSortBy = exports.ListCompilationJobsSortBy || (exports.ListCompilationJobsSortBy = {}));
var ListCompilationJobsRequest;
(function (ListCompilationJobsRequest) {
    /**
     * @internal
     */
    ListCompilationJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCompilationJobsRequest = exports.ListCompilationJobsRequest || (exports.ListCompilationJobsRequest = {}));
var ListCompilationJobsResponse;
(function (ListCompilationJobsResponse) {
    /**
     * @internal
     */
    ListCompilationJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCompilationJobsResponse = exports.ListCompilationJobsResponse || (exports.ListCompilationJobsResponse = {}));
var SortContextsBy;
(function (SortContextsBy) {
    SortContextsBy["CREATION_TIME"] = "CreationTime";
    SortContextsBy["NAME"] = "Name";
})(SortContextsBy = exports.SortContextsBy || (exports.SortContextsBy = {}));
var ListContextsRequest;
(function (ListContextsRequest) {
    /**
     * @internal
     */
    ListContextsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContextsRequest = exports.ListContextsRequest || (exports.ListContextsRequest = {}));
var ListContextsResponse;
(function (ListContextsResponse) {
    /**
     * @internal
     */
    ListContextsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContextsResponse = exports.ListContextsResponse || (exports.ListContextsResponse = {}));
var MonitoringJobDefinitionSortKey;
(function (MonitoringJobDefinitionSortKey) {
    MonitoringJobDefinitionSortKey["CREATION_TIME"] = "CreationTime";
    MonitoringJobDefinitionSortKey["NAME"] = "Name";
})(MonitoringJobDefinitionSortKey = exports.MonitoringJobDefinitionSortKey || (exports.MonitoringJobDefinitionSortKey = {}));
var ListDataQualityJobDefinitionsRequest;
(function (ListDataQualityJobDefinitionsRequest) {
    /**
     * @internal
     */
    ListDataQualityJobDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataQualityJobDefinitionsRequest = exports.ListDataQualityJobDefinitionsRequest || (exports.ListDataQualityJobDefinitionsRequest = {}));
var MonitoringJobDefinitionSummary;
(function (MonitoringJobDefinitionSummary) {
    /**
     * @internal
     */
    MonitoringJobDefinitionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringJobDefinitionSummary = exports.MonitoringJobDefinitionSummary || (exports.MonitoringJobDefinitionSummary = {}));
var ListDataQualityJobDefinitionsResponse;
(function (ListDataQualityJobDefinitionsResponse) {
    /**
     * @internal
     */
    ListDataQualityJobDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataQualityJobDefinitionsResponse = exports.ListDataQualityJobDefinitionsResponse || (exports.ListDataQualityJobDefinitionsResponse = {}));
var ListDeviceFleetsSortBy;
(function (ListDeviceFleetsSortBy) {
    ListDeviceFleetsSortBy["CreationTime"] = "CREATION_TIME";
    ListDeviceFleetsSortBy["LastModifiedTime"] = "LAST_MODIFIED_TIME";
    ListDeviceFleetsSortBy["Name"] = "NAME";
})(ListDeviceFleetsSortBy = exports.ListDeviceFleetsSortBy || (exports.ListDeviceFleetsSortBy = {}));
var ListDeviceFleetsRequest;
(function (ListDeviceFleetsRequest) {
    /**
     * @internal
     */
    ListDeviceFleetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeviceFleetsRequest = exports.ListDeviceFleetsRequest || (exports.ListDeviceFleetsRequest = {}));
var ListDeviceFleetsResponse;
(function (ListDeviceFleetsResponse) {
    /**
     * @internal
     */
    ListDeviceFleetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeviceFleetsResponse = exports.ListDeviceFleetsResponse || (exports.ListDeviceFleetsResponse = {}));
var ListDevicesRequest;
(function (ListDevicesRequest) {
    /**
     * @internal
     */
    ListDevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevicesRequest = exports.ListDevicesRequest || (exports.ListDevicesRequest = {}));
var ListDevicesResponse;
(function (ListDevicesResponse) {
    /**
     * @internal
     */
    ListDevicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevicesResponse = exports.ListDevicesResponse || (exports.ListDevicesResponse = {}));
var ListDomainsRequest;
(function (ListDomainsRequest) {
    /**
     * @internal
     */
    ListDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsRequest = exports.ListDomainsRequest || (exports.ListDomainsRequest = {}));
var ListDomainsResponse;
(function (ListDomainsResponse) {
    /**
     * @internal
     */
    ListDomainsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsResponse = exports.ListDomainsResponse || (exports.ListDomainsResponse = {}));
var ListEdgePackagingJobsSortBy;
(function (ListEdgePackagingJobsSortBy) {
    ListEdgePackagingJobsSortBy["CreationTime"] = "CREATION_TIME";
    ListEdgePackagingJobsSortBy["EdgePackagingJobStatus"] = "STATUS";
    ListEdgePackagingJobsSortBy["LastModifiedTime"] = "LAST_MODIFIED_TIME";
    ListEdgePackagingJobsSortBy["ModelName"] = "MODEL_NAME";
    ListEdgePackagingJobsSortBy["Name"] = "NAME";
})(ListEdgePackagingJobsSortBy = exports.ListEdgePackagingJobsSortBy || (exports.ListEdgePackagingJobsSortBy = {}));
var ListEdgePackagingJobsRequest;
(function (ListEdgePackagingJobsRequest) {
    /**
     * @internal
     */
    ListEdgePackagingJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEdgePackagingJobsRequest = exports.ListEdgePackagingJobsRequest || (exports.ListEdgePackagingJobsRequest = {}));
var ListEdgePackagingJobsResponse;
(function (ListEdgePackagingJobsResponse) {
    /**
     * @internal
     */
    ListEdgePackagingJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEdgePackagingJobsResponse = exports.ListEdgePackagingJobsResponse || (exports.ListEdgePackagingJobsResponse = {}));
var OrderKey;
(function (OrderKey) {
    OrderKey["Ascending"] = "Ascending";
    OrderKey["Descending"] = "Descending";
})(OrderKey = exports.OrderKey || (exports.OrderKey = {}));
var ListEndpointConfigsInput;
(function (ListEndpointConfigsInput) {
    /**
     * @internal
     */
    ListEndpointConfigsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEndpointConfigsInput = exports.ListEndpointConfigsInput || (exports.ListEndpointConfigsInput = {}));
var ListEndpointConfigsOutput;
(function (ListEndpointConfigsOutput) {
    /**
     * @internal
     */
    ListEndpointConfigsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEndpointConfigsOutput = exports.ListEndpointConfigsOutput || (exports.ListEndpointConfigsOutput = {}));
var ListEndpointsInput;
(function (ListEndpointsInput) {
    /**
     * @internal
     */
    ListEndpointsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEndpointsInput = exports.ListEndpointsInput || (exports.ListEndpointsInput = {}));
var ListEndpointsOutput;
(function (ListEndpointsOutput) {
    /**
     * @internal
     */
    ListEndpointsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEndpointsOutput = exports.ListEndpointsOutput || (exports.ListEndpointsOutput = {}));
var SortExperimentsBy;
(function (SortExperimentsBy) {
    SortExperimentsBy["CREATION_TIME"] = "CreationTime";
    SortExperimentsBy["NAME"] = "Name";
})(SortExperimentsBy = exports.SortExperimentsBy || (exports.SortExperimentsBy = {}));
var ListExperimentsRequest;
(function (ListExperimentsRequest) {
    /**
     * @internal
     */
    ListExperimentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListExperimentsRequest = exports.ListExperimentsRequest || (exports.ListExperimentsRequest = {}));
var ListExperimentsResponse;
(function (ListExperimentsResponse) {
    /**
     * @internal
     */
    ListExperimentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListExperimentsResponse = exports.ListExperimentsResponse || (exports.ListExperimentsResponse = {}));
var ListFeatureGroupsRequest;
(function (ListFeatureGroupsRequest) {
    /**
     * @internal
     */
    ListFeatureGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFeatureGroupsRequest = exports.ListFeatureGroupsRequest || (exports.ListFeatureGroupsRequest = {}));
var ListFeatureGroupsResponse;
(function (ListFeatureGroupsResponse) {
    /**
     * @internal
     */
    ListFeatureGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFeatureGroupsResponse = exports.ListFeatureGroupsResponse || (exports.ListFeatureGroupsResponse = {}));
var ListFlowDefinitionsRequest;
(function (ListFlowDefinitionsRequest) {
    /**
     * @internal
     */
    ListFlowDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFlowDefinitionsRequest = exports.ListFlowDefinitionsRequest || (exports.ListFlowDefinitionsRequest = {}));
var ListFlowDefinitionsResponse;
(function (ListFlowDefinitionsResponse) {
    /**
     * @internal
     */
    ListFlowDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFlowDefinitionsResponse = exports.ListFlowDefinitionsResponse || (exports.ListFlowDefinitionsResponse = {}));
var ListHumanTaskUisRequest;
(function (ListHumanTaskUisRequest) {
    /**
     * @internal
     */
    ListHumanTaskUisRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHumanTaskUisRequest = exports.ListHumanTaskUisRequest || (exports.ListHumanTaskUisRequest = {}));
var ListHumanTaskUisResponse;
(function (ListHumanTaskUisResponse) {
    /**
     * @internal
     */
    ListHumanTaskUisResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHumanTaskUisResponse = exports.ListHumanTaskUisResponse || (exports.ListHumanTaskUisResponse = {}));
var ListHyperParameterTuningJobsRequest;
(function (ListHyperParameterTuningJobsRequest) {
    /**
     * @internal
     */
    ListHyperParameterTuningJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHyperParameterTuningJobsRequest = exports.ListHyperParameterTuningJobsRequest || (exports.ListHyperParameterTuningJobsRequest = {}));
var ListHyperParameterTuningJobsResponse;
(function (ListHyperParameterTuningJobsResponse) {
    /**
     * @internal
     */
    ListHyperParameterTuningJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHyperParameterTuningJobsResponse = exports.ListHyperParameterTuningJobsResponse || (exports.ListHyperParameterTuningJobsResponse = {}));
var ListImagesRequest;
(function (ListImagesRequest) {
    /**
     * @internal
     */
    ListImagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagesRequest = exports.ListImagesRequest || (exports.ListImagesRequest = {}));
var ListImagesResponse;
(function (ListImagesResponse) {
    /**
     * @internal
     */
    ListImagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagesResponse = exports.ListImagesResponse || (exports.ListImagesResponse = {}));
var ListImageVersionsRequest;
(function (ListImageVersionsRequest) {
    /**
     * @internal
     */
    ListImageVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImageVersionsRequest = exports.ListImageVersionsRequest || (exports.ListImageVersionsRequest = {}));
var ListImageVersionsResponse;
(function (ListImageVersionsResponse) {
    /**
     * @internal
     */
    ListImageVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImageVersionsResponse = exports.ListImageVersionsResponse || (exports.ListImageVersionsResponse = {}));
var SortBy;
(function (SortBy) {
    SortBy["CREATION_TIME"] = "CreationTime";
    SortBy["NAME"] = "Name";
    SortBy["STATUS"] = "Status";
})(SortBy = exports.SortBy || (exports.SortBy = {}));
var ListLabelingJobsRequest;
(function (ListLabelingJobsRequest) {
    /**
     * @internal
     */
    ListLabelingJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLabelingJobsRequest = exports.ListLabelingJobsRequest || (exports.ListLabelingJobsRequest = {}));
var ListLabelingJobsResponse;
(function (ListLabelingJobsResponse) {
    /**
     * @internal
     */
    ListLabelingJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLabelingJobsResponse = exports.ListLabelingJobsResponse || (exports.ListLabelingJobsResponse = {}));
var ListLabelingJobsForWorkteamSortByOptions;
(function (ListLabelingJobsForWorkteamSortByOptions) {
    ListLabelingJobsForWorkteamSortByOptions["CREATION_TIME"] = "CreationTime";
})(ListLabelingJobsForWorkteamSortByOptions = exports.ListLabelingJobsForWorkteamSortByOptions || (exports.ListLabelingJobsForWorkteamSortByOptions = {}));
var ListLabelingJobsForWorkteamRequest;
(function (ListLabelingJobsForWorkteamRequest) {
    /**
     * @internal
     */
    ListLabelingJobsForWorkteamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLabelingJobsForWorkteamRequest = exports.ListLabelingJobsForWorkteamRequest || (exports.ListLabelingJobsForWorkteamRequest = {}));
var ListLabelingJobsForWorkteamResponse;
(function (ListLabelingJobsForWorkteamResponse) {
    /**
     * @internal
     */
    ListLabelingJobsForWorkteamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLabelingJobsForWorkteamResponse = exports.ListLabelingJobsForWorkteamResponse || (exports.ListLabelingJobsForWorkteamResponse = {}));
var ListModelBiasJobDefinitionsRequest;
(function (ListModelBiasJobDefinitionsRequest) {
    /**
     * @internal
     */
    ListModelBiasJobDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelBiasJobDefinitionsRequest = exports.ListModelBiasJobDefinitionsRequest || (exports.ListModelBiasJobDefinitionsRequest = {}));
var ListModelBiasJobDefinitionsResponse;
(function (ListModelBiasJobDefinitionsResponse) {
    /**
     * @internal
     */
    ListModelBiasJobDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelBiasJobDefinitionsResponse = exports.ListModelBiasJobDefinitionsResponse || (exports.ListModelBiasJobDefinitionsResponse = {}));
var ListModelExplainabilityJobDefinitionsRequest;
(function (ListModelExplainabilityJobDefinitionsRequest) {
    /**
     * @internal
     */
    ListModelExplainabilityJobDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelExplainabilityJobDefinitionsRequest = exports.ListModelExplainabilityJobDefinitionsRequest || (exports.ListModelExplainabilityJobDefinitionsRequest = {}));
var ListModelExplainabilityJobDefinitionsResponse;
(function (ListModelExplainabilityJobDefinitionsResponse) {
    /**
     * @internal
     */
    ListModelExplainabilityJobDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelExplainabilityJobDefinitionsResponse = exports.ListModelExplainabilityJobDefinitionsResponse || (exports.ListModelExplainabilityJobDefinitionsResponse = {}));
var ModelPackageGroupSortBy;
(function (ModelPackageGroupSortBy) {
    ModelPackageGroupSortBy["CREATION_TIME"] = "CreationTime";
    ModelPackageGroupSortBy["NAME"] = "Name";
})(ModelPackageGroupSortBy = exports.ModelPackageGroupSortBy || (exports.ModelPackageGroupSortBy = {}));
var ListModelPackageGroupsInput;
(function (ListModelPackageGroupsInput) {
    /**
     * @internal
     */
    ListModelPackageGroupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelPackageGroupsInput = exports.ListModelPackageGroupsInput || (exports.ListModelPackageGroupsInput = {}));
var ModelPackageGroupSummary;
(function (ModelPackageGroupSummary) {
    /**
     * @internal
     */
    ModelPackageGroupSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelPackageGroupSummary = exports.ModelPackageGroupSummary || (exports.ModelPackageGroupSummary = {}));
var ListModelPackageGroupsOutput;
(function (ListModelPackageGroupsOutput) {
    /**
     * @internal
     */
    ListModelPackageGroupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelPackageGroupsOutput = exports.ListModelPackageGroupsOutput || (exports.ListModelPackageGroupsOutput = {}));
var ModelPackageType;
(function (ModelPackageType) {
    ModelPackageType["BOTH"] = "Both";
    ModelPackageType["UNVERSIONED"] = "Unversioned";
    ModelPackageType["VERSIONED"] = "Versioned";
})(ModelPackageType = exports.ModelPackageType || (exports.ModelPackageType = {}));
var ModelPackageSortBy;
(function (ModelPackageSortBy) {
    ModelPackageSortBy["CREATION_TIME"] = "CreationTime";
    ModelPackageSortBy["NAME"] = "Name";
})(ModelPackageSortBy = exports.ModelPackageSortBy || (exports.ModelPackageSortBy = {}));
var ListModelPackagesInput;
(function (ListModelPackagesInput) {
    /**
     * @internal
     */
    ListModelPackagesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelPackagesInput = exports.ListModelPackagesInput || (exports.ListModelPackagesInput = {}));
var ModelPackageSummary;
(function (ModelPackageSummary) {
    /**
     * @internal
     */
    ModelPackageSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelPackageSummary = exports.ModelPackageSummary || (exports.ModelPackageSummary = {}));
var ListModelPackagesOutput;
(function (ListModelPackagesOutput) {
    /**
     * @internal
     */
    ListModelPackagesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelPackagesOutput = exports.ListModelPackagesOutput || (exports.ListModelPackagesOutput = {}));
var ListModelQualityJobDefinitionsRequest;
(function (ListModelQualityJobDefinitionsRequest) {
    /**
     * @internal
     */
    ListModelQualityJobDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelQualityJobDefinitionsRequest = exports.ListModelQualityJobDefinitionsRequest || (exports.ListModelQualityJobDefinitionsRequest = {}));
var ListModelQualityJobDefinitionsResponse;
(function (ListModelQualityJobDefinitionsResponse) {
    /**
     * @internal
     */
    ListModelQualityJobDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelQualityJobDefinitionsResponse = exports.ListModelQualityJobDefinitionsResponse || (exports.ListModelQualityJobDefinitionsResponse = {}));
var ModelSortKey;
(function (ModelSortKey) {
    ModelSortKey["CreationTime"] = "CreationTime";
    ModelSortKey["Name"] = "Name";
})(ModelSortKey = exports.ModelSortKey || (exports.ModelSortKey = {}));
var ListModelsInput;
(function (ListModelsInput) {
    /**
     * @internal
     */
    ListModelsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelsInput = exports.ListModelsInput || (exports.ListModelsInput = {}));
var ModelSummary;
(function (ModelSummary) {
    /**
     * @internal
     */
    ModelSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelSummary = exports.ModelSummary || (exports.ModelSummary = {}));
var ListModelsOutput;
(function (ListModelsOutput) {
    /**
     * @internal
     */
    ListModelsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelsOutput = exports.ListModelsOutput || (exports.ListModelsOutput = {}));
var MonitoringExecutionSortKey;
(function (MonitoringExecutionSortKey) {
    MonitoringExecutionSortKey["CREATION_TIME"] = "CreationTime";
    MonitoringExecutionSortKey["SCHEDULED_TIME"] = "ScheduledTime";
    MonitoringExecutionSortKey["STATUS"] = "Status";
})(MonitoringExecutionSortKey = exports.MonitoringExecutionSortKey || (exports.MonitoringExecutionSortKey = {}));
var ListMonitoringExecutionsRequest;
(function (ListMonitoringExecutionsRequest) {
    /**
     * @internal
     */
    ListMonitoringExecutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMonitoringExecutionsRequest = exports.ListMonitoringExecutionsRequest || (exports.ListMonitoringExecutionsRequest = {}));
var ListMonitoringExecutionsResponse;
(function (ListMonitoringExecutionsResponse) {
    /**
     * @internal
     */
    ListMonitoringExecutionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMonitoringExecutionsResponse = exports.ListMonitoringExecutionsResponse || (exports.ListMonitoringExecutionsResponse = {}));
var MonitoringScheduleSortKey;
(function (MonitoringScheduleSortKey) {
    MonitoringScheduleSortKey["CREATION_TIME"] = "CreationTime";
    MonitoringScheduleSortKey["NAME"] = "Name";
    MonitoringScheduleSortKey["STATUS"] = "Status";
})(MonitoringScheduleSortKey = exports.MonitoringScheduleSortKey || (exports.MonitoringScheduleSortKey = {}));
var ListMonitoringSchedulesRequest;
(function (ListMonitoringSchedulesRequest) {
    /**
     * @internal
     */
    ListMonitoringSchedulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMonitoringSchedulesRequest = exports.ListMonitoringSchedulesRequest || (exports.ListMonitoringSchedulesRequest = {}));
var MonitoringScheduleSummary;
(function (MonitoringScheduleSummary) {
    /**
     * @internal
     */
    MonitoringScheduleSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringScheduleSummary = exports.MonitoringScheduleSummary || (exports.MonitoringScheduleSummary = {}));
var ListMonitoringSchedulesResponse;
(function (ListMonitoringSchedulesResponse) {
    /**
     * @internal
     */
    ListMonitoringSchedulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMonitoringSchedulesResponse = exports.ListMonitoringSchedulesResponse || (exports.ListMonitoringSchedulesResponse = {}));
var NotebookInstanceLifecycleConfigSortKey;
(function (NotebookInstanceLifecycleConfigSortKey) {
    NotebookInstanceLifecycleConfigSortKey["CREATION_TIME"] = "CreationTime";
    NotebookInstanceLifecycleConfigSortKey["LAST_MODIFIED_TIME"] = "LastModifiedTime";
    NotebookInstanceLifecycleConfigSortKey["NAME"] = "Name";
})(NotebookInstanceLifecycleConfigSortKey = exports.NotebookInstanceLifecycleConfigSortKey || (exports.NotebookInstanceLifecycleConfigSortKey = {}));
var NotebookInstanceLifecycleConfigSortOrder;
(function (NotebookInstanceLifecycleConfigSortOrder) {
    NotebookInstanceLifecycleConfigSortOrder["ASCENDING"] = "Ascending";
    NotebookInstanceLifecycleConfigSortOrder["DESCENDING"] = "Descending";
})(NotebookInstanceLifecycleConfigSortOrder = exports.NotebookInstanceLifecycleConfigSortOrder || (exports.NotebookInstanceLifecycleConfigSortOrder = {}));
var ListNotebookInstanceLifecycleConfigsInput;
(function (ListNotebookInstanceLifecycleConfigsInput) {
    /**
     * @internal
     */
    ListNotebookInstanceLifecycleConfigsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotebookInstanceLifecycleConfigsInput = exports.ListNotebookInstanceLifecycleConfigsInput || (exports.ListNotebookInstanceLifecycleConfigsInput = {}));
var NotebookInstanceLifecycleConfigSummary;
(function (NotebookInstanceLifecycleConfigSummary) {
    /**
     * @internal
     */
    NotebookInstanceLifecycleConfigSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotebookInstanceLifecycleConfigSummary = exports.NotebookInstanceLifecycleConfigSummary || (exports.NotebookInstanceLifecycleConfigSummary = {}));
var ListNotebookInstanceLifecycleConfigsOutput;
(function (ListNotebookInstanceLifecycleConfigsOutput) {
    /**
     * @internal
     */
    ListNotebookInstanceLifecycleConfigsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotebookInstanceLifecycleConfigsOutput = exports.ListNotebookInstanceLifecycleConfigsOutput || (exports.ListNotebookInstanceLifecycleConfigsOutput = {}));
var NotebookInstanceSortKey;
(function (NotebookInstanceSortKey) {
    NotebookInstanceSortKey["CREATION_TIME"] = "CreationTime";
    NotebookInstanceSortKey["NAME"] = "Name";
    NotebookInstanceSortKey["STATUS"] = "Status";
})(NotebookInstanceSortKey = exports.NotebookInstanceSortKey || (exports.NotebookInstanceSortKey = {}));
var NotebookInstanceSortOrder;
(function (NotebookInstanceSortOrder) {
    NotebookInstanceSortOrder["ASCENDING"] = "Ascending";
    NotebookInstanceSortOrder["DESCENDING"] = "Descending";
})(NotebookInstanceSortOrder = exports.NotebookInstanceSortOrder || (exports.NotebookInstanceSortOrder = {}));
var ListNotebookInstancesInput;
(function (ListNotebookInstancesInput) {
    /**
     * @internal
     */
    ListNotebookInstancesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotebookInstancesInput = exports.ListNotebookInstancesInput || (exports.ListNotebookInstancesInput = {}));
var NotebookInstanceSummary;
(function (NotebookInstanceSummary) {
    /**
     * @internal
     */
    NotebookInstanceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotebookInstanceSummary = exports.NotebookInstanceSummary || (exports.NotebookInstanceSummary = {}));
var ListNotebookInstancesOutput;
(function (ListNotebookInstancesOutput) {
    /**
     * @internal
     */
    ListNotebookInstancesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotebookInstancesOutput = exports.ListNotebookInstancesOutput || (exports.ListNotebookInstancesOutput = {}));
var SortPipelineExecutionsBy;
(function (SortPipelineExecutionsBy) {
    SortPipelineExecutionsBy["CREATION_TIME"] = "CreationTime";
    SortPipelineExecutionsBy["PIPELINE_EXECUTION_ARN"] = "PipelineExecutionArn";
})(SortPipelineExecutionsBy = exports.SortPipelineExecutionsBy || (exports.SortPipelineExecutionsBy = {}));
var ListPipelineExecutionsRequest;
(function (ListPipelineExecutionsRequest) {
    /**
     * @internal
     */
    ListPipelineExecutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelineExecutionsRequest = exports.ListPipelineExecutionsRequest || (exports.ListPipelineExecutionsRequest = {}));
var PipelineExecutionSummary;
(function (PipelineExecutionSummary) {
    /**
     * @internal
     */
    PipelineExecutionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineExecutionSummary = exports.PipelineExecutionSummary || (exports.PipelineExecutionSummary = {}));
var ListPipelineExecutionsResponse;
(function (ListPipelineExecutionsResponse) {
    /**
     * @internal
     */
    ListPipelineExecutionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelineExecutionsResponse = exports.ListPipelineExecutionsResponse || (exports.ListPipelineExecutionsResponse = {}));
var ListPipelineExecutionStepsRequest;
(function (ListPipelineExecutionStepsRequest) {
    /**
     * @internal
     */
    ListPipelineExecutionStepsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelineExecutionStepsRequest = exports.ListPipelineExecutionStepsRequest || (exports.ListPipelineExecutionStepsRequest = {}));
var ModelStepMetadata;
(function (ModelStepMetadata) {
    /**
     * @internal
     */
    ModelStepMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelStepMetadata = exports.ModelStepMetadata || (exports.ModelStepMetadata = {}));
var ProcessingJobStepMetadata;
(function (ProcessingJobStepMetadata) {
    /**
     * @internal
     */
    ProcessingJobStepMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessingJobStepMetadata = exports.ProcessingJobStepMetadata || (exports.ProcessingJobStepMetadata = {}));
var RegisterModelStepMetadata;
(function (RegisterModelStepMetadata) {
    /**
     * @internal
     */
    RegisterModelStepMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterModelStepMetadata = exports.RegisterModelStepMetadata || (exports.RegisterModelStepMetadata = {}));
var TrainingJobStepMetadata;
(function (TrainingJobStepMetadata) {
    /**
     * @internal
     */
    TrainingJobStepMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrainingJobStepMetadata = exports.TrainingJobStepMetadata || (exports.TrainingJobStepMetadata = {}));
var TransformJobStepMetadata;
(function (TransformJobStepMetadata) {
    /**
     * @internal
     */
    TransformJobStepMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformJobStepMetadata = exports.TransformJobStepMetadata || (exports.TransformJobStepMetadata = {}));
var PipelineExecutionStepMetadata;
(function (PipelineExecutionStepMetadata) {
    /**
     * @internal
     */
    PipelineExecutionStepMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineExecutionStepMetadata = exports.PipelineExecutionStepMetadata || (exports.PipelineExecutionStepMetadata = {}));
var StepStatus;
(function (StepStatus) {
    StepStatus["EXECUTING"] = "Executing";
    StepStatus["FAILED"] = "Failed";
    StepStatus["STARTING"] = "Starting";
    StepStatus["STOPPED"] = "Stopped";
    StepStatus["STOPPING"] = "Stopping";
    StepStatus["SUCCEEDED"] = "Succeeded";
})(StepStatus = exports.StepStatus || (exports.StepStatus = {}));
var PipelineExecutionStep;
(function (PipelineExecutionStep) {
    /**
     * @internal
     */
    PipelineExecutionStep.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineExecutionStep = exports.PipelineExecutionStep || (exports.PipelineExecutionStep = {}));
var ListPipelineExecutionStepsResponse;
(function (ListPipelineExecutionStepsResponse) {
    /**
     * @internal
     */
    ListPipelineExecutionStepsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelineExecutionStepsResponse = exports.ListPipelineExecutionStepsResponse || (exports.ListPipelineExecutionStepsResponse = {}));
var ListPipelineParametersForExecutionRequest;
(function (ListPipelineParametersForExecutionRequest) {
    /**
     * @internal
     */
    ListPipelineParametersForExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelineParametersForExecutionRequest = exports.ListPipelineParametersForExecutionRequest || (exports.ListPipelineParametersForExecutionRequest = {}));
var Parameter;
(function (Parameter) {
    /**
     * @internal
     */
    Parameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Parameter = exports.Parameter || (exports.Parameter = {}));
var ListPipelineParametersForExecutionResponse;
(function (ListPipelineParametersForExecutionResponse) {
    /**
     * @internal
     */
    ListPipelineParametersForExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelineParametersForExecutionResponse = exports.ListPipelineParametersForExecutionResponse || (exports.ListPipelineParametersForExecutionResponse = {}));
var SortPipelinesBy;
(function (SortPipelinesBy) {
    SortPipelinesBy["CREATION_TIME"] = "CreationTime";
    SortPipelinesBy["NAME"] = "Name";
})(SortPipelinesBy = exports.SortPipelinesBy || (exports.SortPipelinesBy = {}));
var ListPipelinesRequest;
(function (ListPipelinesRequest) {
    /**
     * @internal
     */
    ListPipelinesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelinesRequest = exports.ListPipelinesRequest || (exports.ListPipelinesRequest = {}));
var PipelineSummary;
(function (PipelineSummary) {
    /**
     * @internal
     */
    PipelineSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineSummary = exports.PipelineSummary || (exports.PipelineSummary = {}));
var ListPipelinesResponse;
(function (ListPipelinesResponse) {
    /**
     * @internal
     */
    ListPipelinesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelinesResponse = exports.ListPipelinesResponse || (exports.ListPipelinesResponse = {}));
var ListProcessingJobsRequest;
(function (ListProcessingJobsRequest) {
    /**
     * @internal
     */
    ListProcessingJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProcessingJobsRequest = exports.ListProcessingJobsRequest || (exports.ListProcessingJobsRequest = {}));
var ProcessingJobSummary;
(function (ProcessingJobSummary) {
    /**
     * @internal
     */
    ProcessingJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessingJobSummary = exports.ProcessingJobSummary || (exports.ProcessingJobSummary = {}));
var ListProcessingJobsResponse;
(function (ListProcessingJobsResponse) {
    /**
     * @internal
     */
    ListProcessingJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProcessingJobsResponse = exports.ListProcessingJobsResponse || (exports.ListProcessingJobsResponse = {}));
var ProjectSortBy;
(function (ProjectSortBy) {
    ProjectSortBy["CREATION_TIME"] = "CreationTime";
    ProjectSortBy["NAME"] = "Name";
})(ProjectSortBy = exports.ProjectSortBy || (exports.ProjectSortBy = {}));
var ProjectSortOrder;
(function (ProjectSortOrder) {
    ProjectSortOrder["ASCENDING"] = "Ascending";
    ProjectSortOrder["DESCENDING"] = "Descending";
})(ProjectSortOrder = exports.ProjectSortOrder || (exports.ProjectSortOrder = {}));
var ListProjectsInput;
(function (ListProjectsInput) {
    /**
     * @internal
     */
    ListProjectsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsInput = exports.ListProjectsInput || (exports.ListProjectsInput = {}));
var ProjectSummary;
(function (ProjectSummary) {
    /**
     * @internal
     */
    ProjectSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectSummary = exports.ProjectSummary || (exports.ProjectSummary = {}));
var ListProjectsOutput;
(function (ListProjectsOutput) {
    /**
     * @internal
     */
    ListProjectsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsOutput = exports.ListProjectsOutput || (exports.ListProjectsOutput = {}));
var ListSubscribedWorkteamsRequest;
(function (ListSubscribedWorkteamsRequest) {
    /**
     * @internal
     */
    ListSubscribedWorkteamsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSubscribedWorkteamsRequest = exports.ListSubscribedWorkteamsRequest || (exports.ListSubscribedWorkteamsRequest = {}));
var ListSubscribedWorkteamsResponse;
(function (ListSubscribedWorkteamsResponse) {
    /**
     * @internal
     */
    ListSubscribedWorkteamsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSubscribedWorkteamsResponse = exports.ListSubscribedWorkteamsResponse || (exports.ListSubscribedWorkteamsResponse = {}));
var ListTagsInput;
(function (ListTagsInput) {
    /**
     * @internal
     */
    ListTagsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsInput = exports.ListTagsInput || (exports.ListTagsInput = {}));
var ListTagsOutput;
(function (ListTagsOutput) {
    /**
     * @internal
     */
    ListTagsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsOutput = exports.ListTagsOutput || (exports.ListTagsOutput = {}));
var ListTrainingJobsRequest;
(function (ListTrainingJobsRequest) {
    /**
     * @internal
     */
    ListTrainingJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrainingJobsRequest = exports.ListTrainingJobsRequest || (exports.ListTrainingJobsRequest = {}));
var TrainingJobSummary;
(function (TrainingJobSummary) {
    /**
     * @internal
     */
    TrainingJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrainingJobSummary = exports.TrainingJobSummary || (exports.TrainingJobSummary = {}));
var ListTrainingJobsResponse;
(function (ListTrainingJobsResponse) {
    /**
     * @internal
     */
    ListTrainingJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrainingJobsResponse = exports.ListTrainingJobsResponse || (exports.ListTrainingJobsResponse = {}));
var TrainingJobSortByOptions;
(function (TrainingJobSortByOptions) {
    TrainingJobSortByOptions["CreationTime"] = "CreationTime";
    TrainingJobSortByOptions["FinalObjectiveMetricValue"] = "FinalObjectiveMetricValue";
    TrainingJobSortByOptions["Name"] = "Name";
    TrainingJobSortByOptions["Status"] = "Status";
})(TrainingJobSortByOptions = exports.TrainingJobSortByOptions || (exports.TrainingJobSortByOptions = {}));
var ListTrainingJobsForHyperParameterTuningJobRequest;
(function (ListTrainingJobsForHyperParameterTuningJobRequest) {
    /**
     * @internal
     */
    ListTrainingJobsForHyperParameterTuningJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrainingJobsForHyperParameterTuningJobRequest = exports.ListTrainingJobsForHyperParameterTuningJobRequest || (exports.ListTrainingJobsForHyperParameterTuningJobRequest = {}));
var ListTrainingJobsForHyperParameterTuningJobResponse;
(function (ListTrainingJobsForHyperParameterTuningJobResponse) {
    /**
     * @internal
     */
    ListTrainingJobsForHyperParameterTuningJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrainingJobsForHyperParameterTuningJobResponse = exports.ListTrainingJobsForHyperParameterTuningJobResponse || (exports.ListTrainingJobsForHyperParameterTuningJobResponse = {}));
var ListTransformJobsRequest;
(function (ListTransformJobsRequest) {
    /**
     * @internal
     */
    ListTransformJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTransformJobsRequest = exports.ListTransformJobsRequest || (exports.ListTransformJobsRequest = {}));
var TransformJobSummary;
(function (TransformJobSummary) {
    /**
     * @internal
     */
    TransformJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformJobSummary = exports.TransformJobSummary || (exports.TransformJobSummary = {}));
var ListTransformJobsResponse;
(function (ListTransformJobsResponse) {
    /**
     * @internal
     */
    ListTransformJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTransformJobsResponse = exports.ListTransformJobsResponse || (exports.ListTransformJobsResponse = {}));
var SortTrialComponentsBy;
(function (SortTrialComponentsBy) {
    SortTrialComponentsBy["CREATION_TIME"] = "CreationTime";
    SortTrialComponentsBy["NAME"] = "Name";
})(SortTrialComponentsBy = exports.SortTrialComponentsBy || (exports.SortTrialComponentsBy = {}));
var ListTrialComponentsRequest;
(function (ListTrialComponentsRequest) {
    /**
     * @internal
     */
    ListTrialComponentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrialComponentsRequest = exports.ListTrialComponentsRequest || (exports.ListTrialComponentsRequest = {}));
var TrialComponentSummary;
(function (TrialComponentSummary) {
    /**
     * @internal
     */
    TrialComponentSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrialComponentSummary = exports.TrialComponentSummary || (exports.TrialComponentSummary = {}));
var ListTrialComponentsResponse;
(function (ListTrialComponentsResponse) {
    /**
     * @internal
     */
    ListTrialComponentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrialComponentsResponse = exports.ListTrialComponentsResponse || (exports.ListTrialComponentsResponse = {}));
var SortTrialsBy;
(function (SortTrialsBy) {
    SortTrialsBy["CREATION_TIME"] = "CreationTime";
    SortTrialsBy["NAME"] = "Name";
})(SortTrialsBy = exports.SortTrialsBy || (exports.SortTrialsBy = {}));
var ListTrialsRequest;
(function (ListTrialsRequest) {
    /**
     * @internal
     */
    ListTrialsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrialsRequest = exports.ListTrialsRequest || (exports.ListTrialsRequest = {}));
var TrialSummary;
(function (TrialSummary) {
    /**
     * @internal
     */
    TrialSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrialSummary = exports.TrialSummary || (exports.TrialSummary = {}));
var ListTrialsResponse;
(function (ListTrialsResponse) {
    /**
     * @internal
     */
    ListTrialsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrialsResponse = exports.ListTrialsResponse || (exports.ListTrialsResponse = {}));
var UserProfileSortKey;
(function (UserProfileSortKey) {
    UserProfileSortKey["CreationTime"] = "CreationTime";
    UserProfileSortKey["LastModifiedTime"] = "LastModifiedTime";
})(UserProfileSortKey = exports.UserProfileSortKey || (exports.UserProfileSortKey = {}));
var ListUserProfilesRequest;
(function (ListUserProfilesRequest) {
    /**
     * @internal
     */
    ListUserProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserProfilesRequest = exports.ListUserProfilesRequest || (exports.ListUserProfilesRequest = {}));
var UserProfileDetails;
(function (UserProfileDetails) {
    /**
     * @internal
     */
    UserProfileDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserProfileDetails = exports.UserProfileDetails || (exports.UserProfileDetails = {}));
var ListUserProfilesResponse;
(function (ListUserProfilesResponse) {
    /**
     * @internal
     */
    ListUserProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserProfilesResponse = exports.ListUserProfilesResponse || (exports.ListUserProfilesResponse = {}));
var ListWorkforcesSortByOptions;
(function (ListWorkforcesSortByOptions) {
    ListWorkforcesSortByOptions["CreateDate"] = "CreateDate";
    ListWorkforcesSortByOptions["Name"] = "Name";
})(ListWorkforcesSortByOptions = exports.ListWorkforcesSortByOptions || (exports.ListWorkforcesSortByOptions = {}));
var ListWorkforcesRequest;
(function (ListWorkforcesRequest) {
    /**
     * @internal
     */
    ListWorkforcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkforcesRequest = exports.ListWorkforcesRequest || (exports.ListWorkforcesRequest = {}));
var ListWorkforcesResponse;
(function (ListWorkforcesResponse) {
    /**
     * @internal
     */
    ListWorkforcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkforcesResponse = exports.ListWorkforcesResponse || (exports.ListWorkforcesResponse = {}));
var ListWorkteamsSortByOptions;
(function (ListWorkteamsSortByOptions) {
    ListWorkteamsSortByOptions["CreateDate"] = "CreateDate";
    ListWorkteamsSortByOptions["Name"] = "Name";
})(ListWorkteamsSortByOptions = exports.ListWorkteamsSortByOptions || (exports.ListWorkteamsSortByOptions = {}));
var ListWorkteamsRequest;
(function (ListWorkteamsRequest) {
    /**
     * @internal
     */
    ListWorkteamsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkteamsRequest = exports.ListWorkteamsRequest || (exports.ListWorkteamsRequest = {}));
var ListWorkteamsResponse;
(function (ListWorkteamsResponse) {
    /**
     * @internal
     */
    ListWorkteamsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkteamsResponse = exports.ListWorkteamsResponse || (exports.ListWorkteamsResponse = {}));
var ModelPackage;
(function (ModelPackage) {
    /**
     * @internal
     */
    ModelPackage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelPackage = exports.ModelPackage || (exports.ModelPackage = {}));
var ModelPackageGroup;
(function (ModelPackageGroup) {
    /**
     * @internal
     */
    ModelPackageGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelPackageGroup = exports.ModelPackageGroup || (exports.ModelPackageGroup = {}));
var NestedFilters;
(function (NestedFilters) {
    /**
     * @internal
     */
    NestedFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NestedFilters = exports.NestedFilters || (exports.NestedFilters = {}));
var Parent;
(function (Parent) {
    /**
     * @internal
     */
    Parent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Parent = exports.Parent || (exports.Parent = {}));
var Pipeline;
(function (Pipeline) {
    /**
     * @internal
     */
    Pipeline.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Pipeline = exports.Pipeline || (exports.Pipeline = {}));
var PipelineExecution;
(function (PipelineExecution) {
    /**
     * @internal
     */
    PipelineExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineExecution = exports.PipelineExecution || (exports.PipelineExecution = {}));
var ProcessingJob;
(function (ProcessingJob) {
    /**
     * @internal
     */
    ProcessingJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessingJob = exports.ProcessingJob || (exports.ProcessingJob = {}));
var ProfilerConfigForUpdate;
(function (ProfilerConfigForUpdate) {
    /**
     * @internal
     */
    ProfilerConfigForUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProfilerConfigForUpdate = exports.ProfilerConfigForUpdate || (exports.ProfilerConfigForUpdate = {}));
var PutModelPackageGroupPolicyInput;
(function (PutModelPackageGroupPolicyInput) {
    /**
     * @internal
     */
    PutModelPackageGroupPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutModelPackageGroupPolicyInput = exports.PutModelPackageGroupPolicyInput || (exports.PutModelPackageGroupPolicyInput = {}));
var PutModelPackageGroupPolicyOutput;
(function (PutModelPackageGroupPolicyOutput) {
    /**
     * @internal
     */
    PutModelPackageGroupPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutModelPackageGroupPolicyOutput = exports.PutModelPackageGroupPolicyOutput || (exports.PutModelPackageGroupPolicyOutput = {}));
var RegisterDevicesRequest;
(function (RegisterDevicesRequest) {
    /**
     * @internal
     */
    RegisterDevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterDevicesRequest = exports.RegisterDevicesRequest || (exports.RegisterDevicesRequest = {}));
var RenderableTask;
(function (RenderableTask) {
    /**
     * @internal
     */
    RenderableTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RenderableTask = exports.RenderableTask || (exports.RenderableTask = {}));
var RenderingError;
(function (RenderingError) {
    /**
     * @internal
     */
    RenderingError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RenderingError = exports.RenderingError || (exports.RenderingError = {}));
var RenderUiTemplateRequest;
(function (RenderUiTemplateRequest) {
    /**
     * @internal
     */
    RenderUiTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RenderUiTemplateRequest = exports.RenderUiTemplateRequest || (exports.RenderUiTemplateRequest = {}));
var RenderUiTemplateResponse;
(function (RenderUiTemplateResponse) {
    /**
     * @internal
     */
    RenderUiTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RenderUiTemplateResponse = exports.RenderUiTemplateResponse || (exports.RenderUiTemplateResponse = {}));
var SearchSortOrder;
(function (SearchSortOrder) {
    SearchSortOrder["ASCENDING"] = "Ascending";
    SearchSortOrder["DESCENDING"] = "Descending";
})(SearchSortOrder = exports.SearchSortOrder || (exports.SearchSortOrder = {}));
var TrainingJob;
(function (TrainingJob) {
    /**
     * @internal
     */
    TrainingJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrainingJob = exports.TrainingJob || (exports.TrainingJob = {}));
var TrialComponentSimpleSummary;
(function (TrialComponentSimpleSummary) {
    /**
     * @internal
     */
    TrialComponentSimpleSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrialComponentSimpleSummary = exports.TrialComponentSimpleSummary || (exports.TrialComponentSimpleSummary = {}));
var Trial;
(function (Trial) {
    /**
     * @internal
     */
    Trial.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Trial = exports.Trial || (exports.Trial = {}));
var TransformJob;
(function (TransformJob) {
    /**
     * @internal
     */
    TransformJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformJob = exports.TransformJob || (exports.TransformJob = {}));
var TrialComponentSourceDetail;
(function (TrialComponentSourceDetail) {
    /**
     * @internal
     */
    TrialComponentSourceDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrialComponentSourceDetail = exports.TrialComponentSourceDetail || (exports.TrialComponentSourceDetail = {}));
var TrialComponent;
(function (TrialComponent) {
    /**
     * @internal
     */
    TrialComponent.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Parameters && {
            Parameters: Object.entries(obj.Parameters).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: models_1_1.TrialComponentParameterValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(TrialComponent = exports.TrialComponent || (exports.TrialComponent = {}));
var SearchRecord;
(function (SearchRecord) {
    /**
     * @internal
     */
    SearchRecord.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TrialComponent && { TrialComponent: TrialComponent.filterSensitiveLog(obj.TrialComponent) }),
    });
})(SearchRecord = exports.SearchRecord || (exports.SearchRecord = {}));
var SearchResponse;
(function (SearchResponse) {
    /**
     * @internal
     */
    SearchResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Results && { Results: obj.Results.map((item) => SearchRecord.filterSensitiveLog(item)) }),
    });
})(SearchResponse = exports.SearchResponse || (exports.SearchResponse = {}));
var StartMonitoringScheduleRequest;
(function (StartMonitoringScheduleRequest) {
    /**
     * @internal
     */
    StartMonitoringScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMonitoringScheduleRequest = exports.StartMonitoringScheduleRequest || (exports.StartMonitoringScheduleRequest = {}));
var StartNotebookInstanceInput;
(function (StartNotebookInstanceInput) {
    /**
     * @internal
     */
    StartNotebookInstanceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartNotebookInstanceInput = exports.StartNotebookInstanceInput || (exports.StartNotebookInstanceInput = {}));
var StartPipelineExecutionRequest;
(function (StartPipelineExecutionRequest) {
    /**
     * @internal
     */
    StartPipelineExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPipelineExecutionRequest = exports.StartPipelineExecutionRequest || (exports.StartPipelineExecutionRequest = {}));
var StartPipelineExecutionResponse;
(function (StartPipelineExecutionResponse) {
    /**
     * @internal
     */
    StartPipelineExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPipelineExecutionResponse = exports.StartPipelineExecutionResponse || (exports.StartPipelineExecutionResponse = {}));
var StopAutoMLJobRequest;
(function (StopAutoMLJobRequest) {
    /**
     * @internal
     */
    StopAutoMLJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopAutoMLJobRequest = exports.StopAutoMLJobRequest || (exports.StopAutoMLJobRequest = {}));
var StopCompilationJobRequest;
(function (StopCompilationJobRequest) {
    /**
     * @internal
     */
    StopCompilationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopCompilationJobRequest = exports.StopCompilationJobRequest || (exports.StopCompilationJobRequest = {}));
var StopEdgePackagingJobRequest;
(function (StopEdgePackagingJobRequest) {
    /**
     * @internal
     */
    StopEdgePackagingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopEdgePackagingJobRequest = exports.StopEdgePackagingJobRequest || (exports.StopEdgePackagingJobRequest = {}));
var StopHyperParameterTuningJobRequest;
(function (StopHyperParameterTuningJobRequest) {
    /**
     * @internal
     */
    StopHyperParameterTuningJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopHyperParameterTuningJobRequest = exports.StopHyperParameterTuningJobRequest || (exports.StopHyperParameterTuningJobRequest = {}));
var StopLabelingJobRequest;
(function (StopLabelingJobRequest) {
    /**
     * @internal
     */
    StopLabelingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopLabelingJobRequest = exports.StopLabelingJobRequest || (exports.StopLabelingJobRequest = {}));
var StopMonitoringScheduleRequest;
(function (StopMonitoringScheduleRequest) {
    /**
     * @internal
     */
    StopMonitoringScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopMonitoringScheduleRequest = exports.StopMonitoringScheduleRequest || (exports.StopMonitoringScheduleRequest = {}));
var StopNotebookInstanceInput;
(function (StopNotebookInstanceInput) {
    /**
     * @internal
     */
    StopNotebookInstanceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopNotebookInstanceInput = exports.StopNotebookInstanceInput || (exports.StopNotebookInstanceInput = {}));
var StopPipelineExecutionRequest;
(function (StopPipelineExecutionRequest) {
    /**
     * @internal
     */
    StopPipelineExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopPipelineExecutionRequest = exports.StopPipelineExecutionRequest || (exports.StopPipelineExecutionRequest = {}));
var StopPipelineExecutionResponse;
(function (StopPipelineExecutionResponse) {
    /**
     * @internal
     */
    StopPipelineExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopPipelineExecutionResponse = exports.StopPipelineExecutionResponse || (exports.StopPipelineExecutionResponse = {}));
var StopProcessingJobRequest;
(function (StopProcessingJobRequest) {
    /**
     * @internal
     */
    StopProcessingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopProcessingJobRequest = exports.StopProcessingJobRequest || (exports.StopProcessingJobRequest = {}));
var StopTrainingJobRequest;
(function (StopTrainingJobRequest) {
    /**
     * @internal
     */
    StopTrainingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTrainingJobRequest = exports.StopTrainingJobRequest || (exports.StopTrainingJobRequest = {}));
var StopTransformJobRequest;
(function (StopTransformJobRequest) {
    /**
     * @internal
     */
    StopTransformJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTransformJobRequest = exports.StopTransformJobRequest || (exports.StopTransformJobRequest = {}));
var UpdateActionRequest;
(function (UpdateActionRequest) {
    /**
     * @internal
     */
    UpdateActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateActionRequest = exports.UpdateActionRequest || (exports.UpdateActionRequest = {}));
var UpdateActionResponse;
(function (UpdateActionResponse) {
    /**
     * @internal
     */
    UpdateActionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateActionResponse = exports.UpdateActionResponse || (exports.UpdateActionResponse = {}));
var UpdateAppImageConfigRequest;
(function (UpdateAppImageConfigRequest) {
    /**
     * @internal
     */
    UpdateAppImageConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAppImageConfigRequest = exports.UpdateAppImageConfigRequest || (exports.UpdateAppImageConfigRequest = {}));
var UpdateAppImageConfigResponse;
(function (UpdateAppImageConfigResponse) {
    /**
     * @internal
     */
    UpdateAppImageConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAppImageConfigResponse = exports.UpdateAppImageConfigResponse || (exports.UpdateAppImageConfigResponse = {}));
var UpdateArtifactRequest;
(function (UpdateArtifactRequest) {
    /**
     * @internal
     */
    UpdateArtifactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateArtifactRequest = exports.UpdateArtifactRequest || (exports.UpdateArtifactRequest = {}));
var UpdateArtifactResponse;
(function (UpdateArtifactResponse) {
    /**
     * @internal
     */
    UpdateArtifactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateArtifactResponse = exports.UpdateArtifactResponse || (exports.UpdateArtifactResponse = {}));
var UpdateCodeRepositoryInput;
(function (UpdateCodeRepositoryInput) {
    /**
     * @internal
     */
    UpdateCodeRepositoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCodeRepositoryInput = exports.UpdateCodeRepositoryInput || (exports.UpdateCodeRepositoryInput = {}));
var UpdateCodeRepositoryOutput;
(function (UpdateCodeRepositoryOutput) {
    /**
     * @internal
     */
    UpdateCodeRepositoryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCodeRepositoryOutput = exports.UpdateCodeRepositoryOutput || (exports.UpdateCodeRepositoryOutput = {}));
var UpdateContextRequest;
(function (UpdateContextRequest) {
    /**
     * @internal
     */
    UpdateContextRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContextRequest = exports.UpdateContextRequest || (exports.UpdateContextRequest = {}));
var UpdateContextResponse;
(function (UpdateContextResponse) {
    /**
     * @internal
     */
    UpdateContextResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContextResponse = exports.UpdateContextResponse || (exports.UpdateContextResponse = {}));
var UpdateDeviceFleetRequest;
(function (UpdateDeviceFleetRequest) {
    /**
     * @internal
     */
    UpdateDeviceFleetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeviceFleetRequest = exports.UpdateDeviceFleetRequest || (exports.UpdateDeviceFleetRequest = {}));
var UpdateDevicesRequest;
(function (UpdateDevicesRequest) {
    /**
     * @internal
     */
    UpdateDevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDevicesRequest = exports.UpdateDevicesRequest || (exports.UpdateDevicesRequest = {}));
var UpdateDomainRequest;
(function (UpdateDomainRequest) {
    /**
     * @internal
     */
    UpdateDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainRequest = exports.UpdateDomainRequest || (exports.UpdateDomainRequest = {}));
var UpdateDomainResponse;
(function (UpdateDomainResponse) {
    /**
     * @internal
     */
    UpdateDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainResponse = exports.UpdateDomainResponse || (exports.UpdateDomainResponse = {}));
var VariantPropertyType;
(function (VariantPropertyType) {
    VariantPropertyType["DataCaptureConfig"] = "DataCaptureConfig";
    VariantPropertyType["DesiredInstanceCount"] = "DesiredInstanceCount";
    VariantPropertyType["DesiredWeight"] = "DesiredWeight";
})(VariantPropertyType = exports.VariantPropertyType || (exports.VariantPropertyType = {}));
var VariantProperty;
(function (VariantProperty) {
    /**
     * @internal
     */
    VariantProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VariantProperty = exports.VariantProperty || (exports.VariantProperty = {}));
var UpdateEndpointInput;
(function (UpdateEndpointInput) {
    /**
     * @internal
     */
    UpdateEndpointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEndpointInput = exports.UpdateEndpointInput || (exports.UpdateEndpointInput = {}));
var UpdateEndpointOutput;
(function (UpdateEndpointOutput) {
    /**
     * @internal
     */
    UpdateEndpointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEndpointOutput = exports.UpdateEndpointOutput || (exports.UpdateEndpointOutput = {}));
var UpdateEndpointWeightsAndCapacitiesInput;
(function (UpdateEndpointWeightsAndCapacitiesInput) {
    /**
     * @internal
     */
    UpdateEndpointWeightsAndCapacitiesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEndpointWeightsAndCapacitiesInput = exports.UpdateEndpointWeightsAndCapacitiesInput || (exports.UpdateEndpointWeightsAndCapacitiesInput = {}));
var UpdateEndpointWeightsAndCapacitiesOutput;
(function (UpdateEndpointWeightsAndCapacitiesOutput) {
    /**
     * @internal
     */
    UpdateEndpointWeightsAndCapacitiesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEndpointWeightsAndCapacitiesOutput = exports.UpdateEndpointWeightsAndCapacitiesOutput || (exports.UpdateEndpointWeightsAndCapacitiesOutput = {}));
var UpdateExperimentRequest;
(function (UpdateExperimentRequest) {
    /**
     * @internal
     */
    UpdateExperimentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateExperimentRequest = exports.UpdateExperimentRequest || (exports.UpdateExperimentRequest = {}));
var UpdateExperimentResponse;
(function (UpdateExperimentResponse) {
    /**
     * @internal
     */
    UpdateExperimentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateExperimentResponse = exports.UpdateExperimentResponse || (exports.UpdateExperimentResponse = {}));
var UpdateImageRequest;
(function (UpdateImageRequest) {
    /**
     * @internal
     */
    UpdateImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateImageRequest = exports.UpdateImageRequest || (exports.UpdateImageRequest = {}));
var UpdateImageResponse;
(function (UpdateImageResponse) {
    /**
     * @internal
     */
    UpdateImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateImageResponse = exports.UpdateImageResponse || (exports.UpdateImageResponse = {}));
var UpdateModelPackageInput;
(function (UpdateModelPackageInput) {
    /**
     * @internal
     */
    UpdateModelPackageInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateModelPackageInput = exports.UpdateModelPackageInput || (exports.UpdateModelPackageInput = {}));
var UpdateModelPackageOutput;
(function (UpdateModelPackageOutput) {
    /**
     * @internal
     */
    UpdateModelPackageOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateModelPackageOutput = exports.UpdateModelPackageOutput || (exports.UpdateModelPackageOutput = {}));
var UpdateMonitoringScheduleRequest;
(function (UpdateMonitoringScheduleRequest) {
    /**
     * @internal
     */
    UpdateMonitoringScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMonitoringScheduleRequest = exports.UpdateMonitoringScheduleRequest || (exports.UpdateMonitoringScheduleRequest = {}));
var UpdateMonitoringScheduleResponse;
(function (UpdateMonitoringScheduleResponse) {
    /**
     * @internal
     */
    UpdateMonitoringScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMonitoringScheduleResponse = exports.UpdateMonitoringScheduleResponse || (exports.UpdateMonitoringScheduleResponse = {}));
var UpdateNotebookInstanceInput;
(function (UpdateNotebookInstanceInput) {
    /**
     * @internal
     */
    UpdateNotebookInstanceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNotebookInstanceInput = exports.UpdateNotebookInstanceInput || (exports.UpdateNotebookInstanceInput = {}));
var UpdateNotebookInstanceOutput;
(function (UpdateNotebookInstanceOutput) {
    /**
     * @internal
     */
    UpdateNotebookInstanceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNotebookInstanceOutput = exports.UpdateNotebookInstanceOutput || (exports.UpdateNotebookInstanceOutput = {}));
var UpdateNotebookInstanceLifecycleConfigInput;
(function (UpdateNotebookInstanceLifecycleConfigInput) {
    /**
     * @internal
     */
    UpdateNotebookInstanceLifecycleConfigInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNotebookInstanceLifecycleConfigInput = exports.UpdateNotebookInstanceLifecycleConfigInput || (exports.UpdateNotebookInstanceLifecycleConfigInput = {}));
var UpdateNotebookInstanceLifecycleConfigOutput;
(function (UpdateNotebookInstanceLifecycleConfigOutput) {
    /**
     * @internal
     */
    UpdateNotebookInstanceLifecycleConfigOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNotebookInstanceLifecycleConfigOutput = exports.UpdateNotebookInstanceLifecycleConfigOutput || (exports.UpdateNotebookInstanceLifecycleConfigOutput = {}));
var UpdatePipelineRequest;
(function (UpdatePipelineRequest) {
    /**
     * @internal
     */
    UpdatePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineRequest = exports.UpdatePipelineRequest || (exports.UpdatePipelineRequest = {}));
var UpdatePipelineResponse;
(function (UpdatePipelineResponse) {
    /**
     * @internal
     */
    UpdatePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineResponse = exports.UpdatePipelineResponse || (exports.UpdatePipelineResponse = {}));
var UpdatePipelineExecutionRequest;
(function (UpdatePipelineExecutionRequest) {
    /**
     * @internal
     */
    UpdatePipelineExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineExecutionRequest = exports.UpdatePipelineExecutionRequest || (exports.UpdatePipelineExecutionRequest = {}));
var UpdatePipelineExecutionResponse;
(function (UpdatePipelineExecutionResponse) {
    /**
     * @internal
     */
    UpdatePipelineExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineExecutionResponse = exports.UpdatePipelineExecutionResponse || (exports.UpdatePipelineExecutionResponse = {}));
//# sourceMappingURL=models_2.js.map