"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRecipeJobRequest = exports.RecipeReference = exports.Output = exports.OutputFormatOptions = exports.CsvOutputOptions = exports.OutputFormat = exports.CompressionFormat = exports.CreateRecipeResponse = exports.CreateRecipeRequest = exports.RecipeStep = exports.ConditionExpression = exports.RecipeAction = exports.InternalServerException = exports.CreateProjectResponse = exports.CreateProjectRequest = exports.Sample = exports.SampleType = exports.CreateProfileJobResponse = exports.CreateProfileJobRequest = exports.LogSubscription = exports.JobSample = exports.SampleMode = exports.EncryptionMode = exports.ServiceQuotaExceededException = exports.CreateDatasetResponse = exports.CreateDatasetRequest = exports.PathOptions = exports.DatasetParameter = exports.ParameterType = exports.DatetimeOptions = exports.FilterExpression = exports.FilesLimit = exports.OrderedBy = exports.Order = exports.Input = exports.DataCatalogInputDefinition = exports.DatabaseInputDefinition = exports.S3Location = exports.FormatOptions = exports.JsonOptions = exports.ExcelOptions = exports.CsvOptions = exports.InputFormat = exports.ValidationException = exports.ResourceNotFoundException = exports.ConflictException = exports.BatchDeleteRecipeVersionResponse = exports.RecipeVersionErrorDetail = exports.BatchDeleteRecipeVersionRequest = exports.AccessDeniedException = void 0;
exports.ListTagsForResourceRequest = exports.ListSchedulesResponse = exports.Schedule = exports.ListSchedulesRequest = exports.ListRecipeVersionsResponse = exports.ListRecipeVersionsRequest = exports.ListRecipesResponse = exports.Recipe = exports.ListRecipesRequest = exports.ListProjectsResponse = exports.Project = exports.ListProjectsRequest = exports.ListJobsResponse = exports.Job = exports.ListJobsRequest = exports.ListJobRunsResponse = exports.JobRun = exports.ListJobRunsRequest = exports.ListDatasetsResponse = exports.Dataset = exports.ListDatasetsRequest = exports.DescribeScheduleResponse = exports.DescribeScheduleRequest = exports.DescribeRecipeResponse = exports.DescribeRecipeRequest = exports.DescribeProjectResponse = exports.SessionStatus = exports.DescribeProjectRequest = exports.DescribeJobRunResponse = exports.JobRunState = exports.DescribeJobRunRequest = exports.DescribeJobResponse = exports.JobType = exports.DescribeJobRequest = exports.DescribeDatasetResponse = exports.Source = exports.DescribeDatasetRequest = exports.DeleteScheduleResponse = exports.DeleteScheduleRequest = exports.DeleteRecipeVersionResponse = exports.DeleteRecipeVersionRequest = exports.DeleteProjectResponse = exports.DeleteProjectRequest = exports.DeleteJobResponse = exports.DeleteJobRequest = exports.DeleteDatasetResponse = exports.DeleteDatasetRequest = exports.CreateScheduleResponse = exports.CreateScheduleRequest = exports.CreateRecipeJobResponse = void 0;
exports.UpdateScheduleResponse = exports.UpdateScheduleRequest = exports.UpdateRecipeJobResponse = exports.UpdateRecipeJobRequest = exports.UpdateRecipeResponse = exports.UpdateRecipeRequest = exports.UpdateProjectResponse = exports.UpdateProjectRequest = exports.UpdateProfileJobResponse = exports.UpdateProfileJobRequest = exports.UpdateDatasetResponse = exports.UpdateDatasetRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StopJobRunResponse = exports.StopJobRunRequest = exports.StartProjectSessionResponse = exports.StartProjectSessionRequest = exports.StartJobRunResponse = exports.StartJobRunRequest = exports.SendProjectSessionActionResponse = exports.SendProjectSessionActionRequest = exports.ViewFrame = exports.PublishRecipeResponse = exports.PublishRecipeRequest = exports.ListTagsForResourceResponse = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var BatchDeleteRecipeVersionRequest;
(function (BatchDeleteRecipeVersionRequest) {
    /**
     * @internal
     */
    BatchDeleteRecipeVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteRecipeVersionRequest = exports.BatchDeleteRecipeVersionRequest || (exports.BatchDeleteRecipeVersionRequest = {}));
var RecipeVersionErrorDetail;
(function (RecipeVersionErrorDetail) {
    /**
     * @internal
     */
    RecipeVersionErrorDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecipeVersionErrorDetail = exports.RecipeVersionErrorDetail || (exports.RecipeVersionErrorDetail = {}));
var BatchDeleteRecipeVersionResponse;
(function (BatchDeleteRecipeVersionResponse) {
    /**
     * @internal
     */
    BatchDeleteRecipeVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteRecipeVersionResponse = exports.BatchDeleteRecipeVersionResponse || (exports.BatchDeleteRecipeVersionResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var InputFormat;
(function (InputFormat) {
    InputFormat["CSV"] = "CSV";
    InputFormat["EXCEL"] = "EXCEL";
    InputFormat["JSON"] = "JSON";
    InputFormat["PARQUET"] = "PARQUET";
})(InputFormat = exports.InputFormat || (exports.InputFormat = {}));
var CsvOptions;
(function (CsvOptions) {
    /**
     * @internal
     */
    CsvOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CsvOptions = exports.CsvOptions || (exports.CsvOptions = {}));
var ExcelOptions;
(function (ExcelOptions) {
    /**
     * @internal
     */
    ExcelOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExcelOptions = exports.ExcelOptions || (exports.ExcelOptions = {}));
var JsonOptions;
(function (JsonOptions) {
    /**
     * @internal
     */
    JsonOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JsonOptions = exports.JsonOptions || (exports.JsonOptions = {}));
var FormatOptions;
(function (FormatOptions) {
    /**
     * @internal
     */
    FormatOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FormatOptions = exports.FormatOptions || (exports.FormatOptions = {}));
var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var DatabaseInputDefinition;
(function (DatabaseInputDefinition) {
    /**
     * @internal
     */
    DatabaseInputDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatabaseInputDefinition = exports.DatabaseInputDefinition || (exports.DatabaseInputDefinition = {}));
var DataCatalogInputDefinition;
(function (DataCatalogInputDefinition) {
    /**
     * @internal
     */
    DataCatalogInputDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataCatalogInputDefinition = exports.DataCatalogInputDefinition || (exports.DataCatalogInputDefinition = {}));
var Input;
(function (Input) {
    /**
     * @internal
     */
    Input.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Input = exports.Input || (exports.Input = {}));
var Order;
(function (Order) {
    Order["ASCENDING"] = "ASCENDING";
    Order["DESCENDING"] = "DESCENDING";
})(Order = exports.Order || (exports.Order = {}));
var OrderedBy;
(function (OrderedBy) {
    OrderedBy["LAST_MODIFIED_DATE"] = "LAST_MODIFIED_DATE";
})(OrderedBy = exports.OrderedBy || (exports.OrderedBy = {}));
var FilesLimit;
(function (FilesLimit) {
    /**
     * @internal
     */
    FilesLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FilesLimit = exports.FilesLimit || (exports.FilesLimit = {}));
var FilterExpression;
(function (FilterExpression) {
    /**
     * @internal
     */
    FilterExpression.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FilterExpression = exports.FilterExpression || (exports.FilterExpression = {}));
var DatetimeOptions;
(function (DatetimeOptions) {
    /**
     * @internal
     */
    DatetimeOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatetimeOptions = exports.DatetimeOptions || (exports.DatetimeOptions = {}));
var ParameterType;
(function (ParameterType) {
    ParameterType["Datetime"] = "Datetime";
    ParameterType["Number"] = "Number";
    ParameterType["String"] = "String";
})(ParameterType = exports.ParameterType || (exports.ParameterType = {}));
var DatasetParameter;
(function (DatasetParameter) {
    /**
     * @internal
     */
    DatasetParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetParameter = exports.DatasetParameter || (exports.DatasetParameter = {}));
var PathOptions;
(function (PathOptions) {
    /**
     * @internal
     */
    PathOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PathOptions = exports.PathOptions || (exports.PathOptions = {}));
var CreateDatasetRequest;
(function (CreateDatasetRequest) {
    /**
     * @internal
     */
    CreateDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetRequest = exports.CreateDatasetRequest || (exports.CreateDatasetRequest = {}));
var CreateDatasetResponse;
(function (CreateDatasetResponse) {
    /**
     * @internal
     */
    CreateDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetResponse = exports.CreateDatasetResponse || (exports.CreateDatasetResponse = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var EncryptionMode;
(function (EncryptionMode) {
    EncryptionMode["SSEKMS"] = "SSE-KMS";
    EncryptionMode["SSES3"] = "SSE-S3";
})(EncryptionMode = exports.EncryptionMode || (exports.EncryptionMode = {}));
var SampleMode;
(function (SampleMode) {
    SampleMode["CUSTOM_ROWS"] = "CUSTOM_ROWS";
    SampleMode["FULL_DATASET"] = "FULL_DATASET";
})(SampleMode = exports.SampleMode || (exports.SampleMode = {}));
var JobSample;
(function (JobSample) {
    /**
     * @internal
     */
    JobSample.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobSample = exports.JobSample || (exports.JobSample = {}));
var LogSubscription;
(function (LogSubscription) {
    LogSubscription["DISABLE"] = "DISABLE";
    LogSubscription["ENABLE"] = "ENABLE";
})(LogSubscription = exports.LogSubscription || (exports.LogSubscription = {}));
var CreateProfileJobRequest;
(function (CreateProfileJobRequest) {
    /**
     * @internal
     */
    CreateProfileJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProfileJobRequest = exports.CreateProfileJobRequest || (exports.CreateProfileJobRequest = {}));
var CreateProfileJobResponse;
(function (CreateProfileJobResponse) {
    /**
     * @internal
     */
    CreateProfileJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProfileJobResponse = exports.CreateProfileJobResponse || (exports.CreateProfileJobResponse = {}));
var SampleType;
(function (SampleType) {
    SampleType["FIRST_N"] = "FIRST_N";
    SampleType["LAST_N"] = "LAST_N";
    SampleType["RANDOM"] = "RANDOM";
})(SampleType = exports.SampleType || (exports.SampleType = {}));
var Sample;
(function (Sample) {
    /**
     * @internal
     */
    Sample.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Sample = exports.Sample || (exports.Sample = {}));
var CreateProjectRequest;
(function (CreateProjectRequest) {
    /**
     * @internal
     */
    CreateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectRequest = exports.CreateProjectRequest || (exports.CreateProjectRequest = {}));
var CreateProjectResponse;
(function (CreateProjectResponse) {
    /**
     * @internal
     */
    CreateProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectResponse = exports.CreateProjectResponse || (exports.CreateProjectResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var RecipeAction;
(function (RecipeAction) {
    /**
     * @internal
     */
    RecipeAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecipeAction = exports.RecipeAction || (exports.RecipeAction = {}));
var ConditionExpression;
(function (ConditionExpression) {
    /**
     * @internal
     */
    ConditionExpression.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConditionExpression = exports.ConditionExpression || (exports.ConditionExpression = {}));
var RecipeStep;
(function (RecipeStep) {
    /**
     * @internal
     */
    RecipeStep.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecipeStep = exports.RecipeStep || (exports.RecipeStep = {}));
var CreateRecipeRequest;
(function (CreateRecipeRequest) {
    /**
     * @internal
     */
    CreateRecipeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRecipeRequest = exports.CreateRecipeRequest || (exports.CreateRecipeRequest = {}));
var CreateRecipeResponse;
(function (CreateRecipeResponse) {
    /**
     * @internal
     */
    CreateRecipeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRecipeResponse = exports.CreateRecipeResponse || (exports.CreateRecipeResponse = {}));
var CompressionFormat;
(function (CompressionFormat) {
    CompressionFormat["BROTLI"] = "BROTLI";
    CompressionFormat["BZIP2"] = "BZIP2";
    CompressionFormat["DEFLATE"] = "DEFLATE";
    CompressionFormat["GZIP"] = "GZIP";
    CompressionFormat["LZ4"] = "LZ4";
    CompressionFormat["LZO"] = "LZO";
    CompressionFormat["SNAPPY"] = "SNAPPY";
    CompressionFormat["ZLIB"] = "ZLIB";
    CompressionFormat["ZSTD"] = "ZSTD";
})(CompressionFormat = exports.CompressionFormat || (exports.CompressionFormat = {}));
var OutputFormat;
(function (OutputFormat) {
    OutputFormat["AVRO"] = "AVRO";
    OutputFormat["CSV"] = "CSV";
    OutputFormat["GLUEPARQUET"] = "GLUEPARQUET";
    OutputFormat["JSON"] = "JSON";
    OutputFormat["ORC"] = "ORC";
    OutputFormat["PARQUET"] = "PARQUET";
    OutputFormat["XML"] = "XML";
})(OutputFormat = exports.OutputFormat || (exports.OutputFormat = {}));
var CsvOutputOptions;
(function (CsvOutputOptions) {
    /**
     * @internal
     */
    CsvOutputOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CsvOutputOptions = exports.CsvOutputOptions || (exports.CsvOutputOptions = {}));
var OutputFormatOptions;
(function (OutputFormatOptions) {
    /**
     * @internal
     */
    OutputFormatOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputFormatOptions = exports.OutputFormatOptions || (exports.OutputFormatOptions = {}));
var Output;
(function (Output) {
    /**
     * @internal
     */
    Output.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Output = exports.Output || (exports.Output = {}));
var RecipeReference;
(function (RecipeReference) {
    /**
     * @internal
     */
    RecipeReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecipeReference = exports.RecipeReference || (exports.RecipeReference = {}));
var CreateRecipeJobRequest;
(function (CreateRecipeJobRequest) {
    /**
     * @internal
     */
    CreateRecipeJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRecipeJobRequest = exports.CreateRecipeJobRequest || (exports.CreateRecipeJobRequest = {}));
var CreateRecipeJobResponse;
(function (CreateRecipeJobResponse) {
    /**
     * @internal
     */
    CreateRecipeJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRecipeJobResponse = exports.CreateRecipeJobResponse || (exports.CreateRecipeJobResponse = {}));
var CreateScheduleRequest;
(function (CreateScheduleRequest) {
    /**
     * @internal
     */
    CreateScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateScheduleRequest = exports.CreateScheduleRequest || (exports.CreateScheduleRequest = {}));
var CreateScheduleResponse;
(function (CreateScheduleResponse) {
    /**
     * @internal
     */
    CreateScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateScheduleResponse = exports.CreateScheduleResponse || (exports.CreateScheduleResponse = {}));
var DeleteDatasetRequest;
(function (DeleteDatasetRequest) {
    /**
     * @internal
     */
    DeleteDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatasetRequest = exports.DeleteDatasetRequest || (exports.DeleteDatasetRequest = {}));
var DeleteDatasetResponse;
(function (DeleteDatasetResponse) {
    /**
     * @internal
     */
    DeleteDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatasetResponse = exports.DeleteDatasetResponse || (exports.DeleteDatasetResponse = {}));
var DeleteJobRequest;
(function (DeleteJobRequest) {
    /**
     * @internal
     */
    DeleteJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJobRequest = exports.DeleteJobRequest || (exports.DeleteJobRequest = {}));
var DeleteJobResponse;
(function (DeleteJobResponse) {
    /**
     * @internal
     */
    DeleteJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJobResponse = exports.DeleteJobResponse || (exports.DeleteJobResponse = {}));
var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    /**
     * @internal
     */
    DeleteProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectRequest = exports.DeleteProjectRequest || (exports.DeleteProjectRequest = {}));
var DeleteProjectResponse;
(function (DeleteProjectResponse) {
    /**
     * @internal
     */
    DeleteProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectResponse = exports.DeleteProjectResponse || (exports.DeleteProjectResponse = {}));
var DeleteRecipeVersionRequest;
(function (DeleteRecipeVersionRequest) {
    /**
     * @internal
     */
    DeleteRecipeVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRecipeVersionRequest = exports.DeleteRecipeVersionRequest || (exports.DeleteRecipeVersionRequest = {}));
var DeleteRecipeVersionResponse;
(function (DeleteRecipeVersionResponse) {
    /**
     * @internal
     */
    DeleteRecipeVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRecipeVersionResponse = exports.DeleteRecipeVersionResponse || (exports.DeleteRecipeVersionResponse = {}));
var DeleteScheduleRequest;
(function (DeleteScheduleRequest) {
    /**
     * @internal
     */
    DeleteScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteScheduleRequest = exports.DeleteScheduleRequest || (exports.DeleteScheduleRequest = {}));
var DeleteScheduleResponse;
(function (DeleteScheduleResponse) {
    /**
     * @internal
     */
    DeleteScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteScheduleResponse = exports.DeleteScheduleResponse || (exports.DeleteScheduleResponse = {}));
var DescribeDatasetRequest;
(function (DescribeDatasetRequest) {
    /**
     * @internal
     */
    DescribeDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetRequest = exports.DescribeDatasetRequest || (exports.DescribeDatasetRequest = {}));
var Source;
(function (Source) {
    Source["DATABASE"] = "DATABASE";
    Source["DATACATALOG"] = "DATA-CATALOG";
    Source["S3"] = "S3";
})(Source = exports.Source || (exports.Source = {}));
var DescribeDatasetResponse;
(function (DescribeDatasetResponse) {
    /**
     * @internal
     */
    DescribeDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetResponse = exports.DescribeDatasetResponse || (exports.DescribeDatasetResponse = {}));
var DescribeJobRequest;
(function (DescribeJobRequest) {
    /**
     * @internal
     */
    DescribeJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobRequest = exports.DescribeJobRequest || (exports.DescribeJobRequest = {}));
var JobType;
(function (JobType) {
    JobType["PROFILE"] = "PROFILE";
    JobType["RECIPE"] = "RECIPE";
})(JobType = exports.JobType || (exports.JobType = {}));
var DescribeJobResponse;
(function (DescribeJobResponse) {
    /**
     * @internal
     */
    DescribeJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobResponse = exports.DescribeJobResponse || (exports.DescribeJobResponse = {}));
var DescribeJobRunRequest;
(function (DescribeJobRunRequest) {
    /**
     * @internal
     */
    DescribeJobRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobRunRequest = exports.DescribeJobRunRequest || (exports.DescribeJobRunRequest = {}));
var JobRunState;
(function (JobRunState) {
    JobRunState["FAILED"] = "FAILED";
    JobRunState["RUNNING"] = "RUNNING";
    JobRunState["STARTING"] = "STARTING";
    JobRunState["STOPPED"] = "STOPPED";
    JobRunState["STOPPING"] = "STOPPING";
    JobRunState["SUCCEEDED"] = "SUCCEEDED";
    JobRunState["TIMEOUT"] = "TIMEOUT";
})(JobRunState = exports.JobRunState || (exports.JobRunState = {}));
var DescribeJobRunResponse;
(function (DescribeJobRunResponse) {
    /**
     * @internal
     */
    DescribeJobRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobRunResponse = exports.DescribeJobRunResponse || (exports.DescribeJobRunResponse = {}));
var DescribeProjectRequest;
(function (DescribeProjectRequest) {
    /**
     * @internal
     */
    DescribeProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectRequest = exports.DescribeProjectRequest || (exports.DescribeProjectRequest = {}));
var SessionStatus;
(function (SessionStatus) {
    SessionStatus["ASSIGNED"] = "ASSIGNED";
    SessionStatus["FAILED"] = "FAILED";
    SessionStatus["INITIALIZING"] = "INITIALIZING";
    SessionStatus["PROVISIONING"] = "PROVISIONING";
    SessionStatus["READY"] = "READY";
    SessionStatus["RECYCLING"] = "RECYCLING";
    SessionStatus["ROTATING"] = "ROTATING";
    SessionStatus["TERMINATED"] = "TERMINATED";
    SessionStatus["TERMINATING"] = "TERMINATING";
    SessionStatus["UPDATING"] = "UPDATING";
})(SessionStatus = exports.SessionStatus || (exports.SessionStatus = {}));
var DescribeProjectResponse;
(function (DescribeProjectResponse) {
    /**
     * @internal
     */
    DescribeProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectResponse = exports.DescribeProjectResponse || (exports.DescribeProjectResponse = {}));
var DescribeRecipeRequest;
(function (DescribeRecipeRequest) {
    /**
     * @internal
     */
    DescribeRecipeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRecipeRequest = exports.DescribeRecipeRequest || (exports.DescribeRecipeRequest = {}));
var DescribeRecipeResponse;
(function (DescribeRecipeResponse) {
    /**
     * @internal
     */
    DescribeRecipeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRecipeResponse = exports.DescribeRecipeResponse || (exports.DescribeRecipeResponse = {}));
var DescribeScheduleRequest;
(function (DescribeScheduleRequest) {
    /**
     * @internal
     */
    DescribeScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScheduleRequest = exports.DescribeScheduleRequest || (exports.DescribeScheduleRequest = {}));
var DescribeScheduleResponse;
(function (DescribeScheduleResponse) {
    /**
     * @internal
     */
    DescribeScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScheduleResponse = exports.DescribeScheduleResponse || (exports.DescribeScheduleResponse = {}));
var ListDatasetsRequest;
(function (ListDatasetsRequest) {
    /**
     * @internal
     */
    ListDatasetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetsRequest = exports.ListDatasetsRequest || (exports.ListDatasetsRequest = {}));
var Dataset;
(function (Dataset) {
    /**
     * @internal
     */
    Dataset.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Dataset = exports.Dataset || (exports.Dataset = {}));
var ListDatasetsResponse;
(function (ListDatasetsResponse) {
    /**
     * @internal
     */
    ListDatasetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetsResponse = exports.ListDatasetsResponse || (exports.ListDatasetsResponse = {}));
var ListJobRunsRequest;
(function (ListJobRunsRequest) {
    /**
     * @internal
     */
    ListJobRunsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobRunsRequest = exports.ListJobRunsRequest || (exports.ListJobRunsRequest = {}));
var JobRun;
(function (JobRun) {
    /**
     * @internal
     */
    JobRun.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobRun = exports.JobRun || (exports.JobRun = {}));
var ListJobRunsResponse;
(function (ListJobRunsResponse) {
    /**
     * @internal
     */
    ListJobRunsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobRunsResponse = exports.ListJobRunsResponse || (exports.ListJobRunsResponse = {}));
var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {}));
var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Job = exports.Job || (exports.Job = {}));
var ListJobsResponse;
(function (ListJobsResponse) {
    /**
     * @internal
     */
    ListJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsResponse = exports.ListJobsResponse || (exports.ListJobsResponse = {}));
var ListProjectsRequest;
(function (ListProjectsRequest) {
    /**
     * @internal
     */
    ListProjectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsRequest = exports.ListProjectsRequest || (exports.ListProjectsRequest = {}));
var Project;
(function (Project) {
    /**
     * @internal
     */
    Project.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Project = exports.Project || (exports.Project = {}));
var ListProjectsResponse;
(function (ListProjectsResponse) {
    /**
     * @internal
     */
    ListProjectsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsResponse = exports.ListProjectsResponse || (exports.ListProjectsResponse = {}));
var ListRecipesRequest;
(function (ListRecipesRequest) {
    /**
     * @internal
     */
    ListRecipesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecipesRequest = exports.ListRecipesRequest || (exports.ListRecipesRequest = {}));
var Recipe;
(function (Recipe) {
    /**
     * @internal
     */
    Recipe.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Recipe = exports.Recipe || (exports.Recipe = {}));
var ListRecipesResponse;
(function (ListRecipesResponse) {
    /**
     * @internal
     */
    ListRecipesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecipesResponse = exports.ListRecipesResponse || (exports.ListRecipesResponse = {}));
var ListRecipeVersionsRequest;
(function (ListRecipeVersionsRequest) {
    /**
     * @internal
     */
    ListRecipeVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecipeVersionsRequest = exports.ListRecipeVersionsRequest || (exports.ListRecipeVersionsRequest = {}));
var ListRecipeVersionsResponse;
(function (ListRecipeVersionsResponse) {
    /**
     * @internal
     */
    ListRecipeVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecipeVersionsResponse = exports.ListRecipeVersionsResponse || (exports.ListRecipeVersionsResponse = {}));
var ListSchedulesRequest;
(function (ListSchedulesRequest) {
    /**
     * @internal
     */
    ListSchedulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchedulesRequest = exports.ListSchedulesRequest || (exports.ListSchedulesRequest = {}));
var Schedule;
(function (Schedule) {
    /**
     * @internal
     */
    Schedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Schedule = exports.Schedule || (exports.Schedule = {}));
var ListSchedulesResponse;
(function (ListSchedulesResponse) {
    /**
     * @internal
     */
    ListSchedulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchedulesResponse = exports.ListSchedulesResponse || (exports.ListSchedulesResponse = {}));
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
var PublishRecipeRequest;
(function (PublishRecipeRequest) {
    /**
     * @internal
     */
    PublishRecipeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublishRecipeRequest = exports.PublishRecipeRequest || (exports.PublishRecipeRequest = {}));
var PublishRecipeResponse;
(function (PublishRecipeResponse) {
    /**
     * @internal
     */
    PublishRecipeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublishRecipeResponse = exports.PublishRecipeResponse || (exports.PublishRecipeResponse = {}));
var ViewFrame;
(function (ViewFrame) {
    /**
     * @internal
     */
    ViewFrame.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ViewFrame = exports.ViewFrame || (exports.ViewFrame = {}));
var SendProjectSessionActionRequest;
(function (SendProjectSessionActionRequest) {
    /**
     * @internal
     */
    SendProjectSessionActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendProjectSessionActionRequest = exports.SendProjectSessionActionRequest || (exports.SendProjectSessionActionRequest = {}));
var SendProjectSessionActionResponse;
(function (SendProjectSessionActionResponse) {
    /**
     * @internal
     */
    SendProjectSessionActionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendProjectSessionActionResponse = exports.SendProjectSessionActionResponse || (exports.SendProjectSessionActionResponse = {}));
var StartJobRunRequest;
(function (StartJobRunRequest) {
    /**
     * @internal
     */
    StartJobRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartJobRunRequest = exports.StartJobRunRequest || (exports.StartJobRunRequest = {}));
var StartJobRunResponse;
(function (StartJobRunResponse) {
    /**
     * @internal
     */
    StartJobRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartJobRunResponse = exports.StartJobRunResponse || (exports.StartJobRunResponse = {}));
var StartProjectSessionRequest;
(function (StartProjectSessionRequest) {
    /**
     * @internal
     */
    StartProjectSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartProjectSessionRequest = exports.StartProjectSessionRequest || (exports.StartProjectSessionRequest = {}));
var StartProjectSessionResponse;
(function (StartProjectSessionResponse) {
    /**
     * @internal
     */
    StartProjectSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartProjectSessionResponse = exports.StartProjectSessionResponse || (exports.StartProjectSessionResponse = {}));
var StopJobRunRequest;
(function (StopJobRunRequest) {
    /**
     * @internal
     */
    StopJobRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopJobRunRequest = exports.StopJobRunRequest || (exports.StopJobRunRequest = {}));
var StopJobRunResponse;
(function (StopJobRunResponse) {
    /**
     * @internal
     */
    StopJobRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopJobRunResponse = exports.StopJobRunResponse || (exports.StopJobRunResponse = {}));
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
var UpdateDatasetRequest;
(function (UpdateDatasetRequest) {
    /**
     * @internal
     */
    UpdateDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDatasetRequest = exports.UpdateDatasetRequest || (exports.UpdateDatasetRequest = {}));
var UpdateDatasetResponse;
(function (UpdateDatasetResponse) {
    /**
     * @internal
     */
    UpdateDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDatasetResponse = exports.UpdateDatasetResponse || (exports.UpdateDatasetResponse = {}));
var UpdateProfileJobRequest;
(function (UpdateProfileJobRequest) {
    /**
     * @internal
     */
    UpdateProfileJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProfileJobRequest = exports.UpdateProfileJobRequest || (exports.UpdateProfileJobRequest = {}));
var UpdateProfileJobResponse;
(function (UpdateProfileJobResponse) {
    /**
     * @internal
     */
    UpdateProfileJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProfileJobResponse = exports.UpdateProfileJobResponse || (exports.UpdateProfileJobResponse = {}));
var UpdateProjectRequest;
(function (UpdateProjectRequest) {
    /**
     * @internal
     */
    UpdateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectRequest = exports.UpdateProjectRequest || (exports.UpdateProjectRequest = {}));
var UpdateProjectResponse;
(function (UpdateProjectResponse) {
    /**
     * @internal
     */
    UpdateProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectResponse = exports.UpdateProjectResponse || (exports.UpdateProjectResponse = {}));
var UpdateRecipeRequest;
(function (UpdateRecipeRequest) {
    /**
     * @internal
     */
    UpdateRecipeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRecipeRequest = exports.UpdateRecipeRequest || (exports.UpdateRecipeRequest = {}));
var UpdateRecipeResponse;
(function (UpdateRecipeResponse) {
    /**
     * @internal
     */
    UpdateRecipeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRecipeResponse = exports.UpdateRecipeResponse || (exports.UpdateRecipeResponse = {}));
var UpdateRecipeJobRequest;
(function (UpdateRecipeJobRequest) {
    /**
     * @internal
     */
    UpdateRecipeJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRecipeJobRequest = exports.UpdateRecipeJobRequest || (exports.UpdateRecipeJobRequest = {}));
var UpdateRecipeJobResponse;
(function (UpdateRecipeJobResponse) {
    /**
     * @internal
     */
    UpdateRecipeJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRecipeJobResponse = exports.UpdateRecipeJobResponse || (exports.UpdateRecipeJobResponse = {}));
var UpdateScheduleRequest;
(function (UpdateScheduleRequest) {
    /**
     * @internal
     */
    UpdateScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateScheduleRequest = exports.UpdateScheduleRequest || (exports.UpdateScheduleRequest = {}));
var UpdateScheduleResponse;
(function (UpdateScheduleResponse) {
    /**
     * @internal
     */
    UpdateScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateScheduleResponse = exports.UpdateScheduleResponse || (exports.UpdateScheduleResponse = {}));
//# sourceMappingURL=models_0.js.map