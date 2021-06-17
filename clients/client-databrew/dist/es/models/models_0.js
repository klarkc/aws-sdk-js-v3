import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var BatchDeleteRecipeVersionRequest;
(function (BatchDeleteRecipeVersionRequest) {
    /**
     * @internal
     */
    BatchDeleteRecipeVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteRecipeVersionRequest || (BatchDeleteRecipeVersionRequest = {}));
export var RecipeVersionErrorDetail;
(function (RecipeVersionErrorDetail) {
    /**
     * @internal
     */
    RecipeVersionErrorDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecipeVersionErrorDetail || (RecipeVersionErrorDetail = {}));
export var BatchDeleteRecipeVersionResponse;
(function (BatchDeleteRecipeVersionResponse) {
    /**
     * @internal
     */
    BatchDeleteRecipeVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteRecipeVersionResponse || (BatchDeleteRecipeVersionResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var InputFormat;
(function (InputFormat) {
    InputFormat["CSV"] = "CSV";
    InputFormat["EXCEL"] = "EXCEL";
    InputFormat["JSON"] = "JSON";
    InputFormat["PARQUET"] = "PARQUET";
})(InputFormat || (InputFormat = {}));
export var CsvOptions;
(function (CsvOptions) {
    /**
     * @internal
     */
    CsvOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CsvOptions || (CsvOptions = {}));
export var ExcelOptions;
(function (ExcelOptions) {
    /**
     * @internal
     */
    ExcelOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExcelOptions || (ExcelOptions = {}));
export var JsonOptions;
(function (JsonOptions) {
    /**
     * @internal
     */
    JsonOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JsonOptions || (JsonOptions = {}));
export var FormatOptions;
(function (FormatOptions) {
    /**
     * @internal
     */
    FormatOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FormatOptions || (FormatOptions = {}));
export var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Location || (S3Location = {}));
export var DatabaseInputDefinition;
(function (DatabaseInputDefinition) {
    /**
     * @internal
     */
    DatabaseInputDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatabaseInputDefinition || (DatabaseInputDefinition = {}));
export var DataCatalogInputDefinition;
(function (DataCatalogInputDefinition) {
    /**
     * @internal
     */
    DataCatalogInputDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataCatalogInputDefinition || (DataCatalogInputDefinition = {}));
export var Input;
(function (Input) {
    /**
     * @internal
     */
    Input.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Input || (Input = {}));
export var Order;
(function (Order) {
    Order["ASCENDING"] = "ASCENDING";
    Order["DESCENDING"] = "DESCENDING";
})(Order || (Order = {}));
export var OrderedBy;
(function (OrderedBy) {
    OrderedBy["LAST_MODIFIED_DATE"] = "LAST_MODIFIED_DATE";
})(OrderedBy || (OrderedBy = {}));
export var FilesLimit;
(function (FilesLimit) {
    /**
     * @internal
     */
    FilesLimit.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FilesLimit || (FilesLimit = {}));
export var FilterExpression;
(function (FilterExpression) {
    /**
     * @internal
     */
    FilterExpression.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FilterExpression || (FilterExpression = {}));
export var DatetimeOptions;
(function (DatetimeOptions) {
    /**
     * @internal
     */
    DatetimeOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatetimeOptions || (DatetimeOptions = {}));
export var ParameterType;
(function (ParameterType) {
    ParameterType["Datetime"] = "Datetime";
    ParameterType["Number"] = "Number";
    ParameterType["String"] = "String";
})(ParameterType || (ParameterType = {}));
export var DatasetParameter;
(function (DatasetParameter) {
    /**
     * @internal
     */
    DatasetParameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatasetParameter || (DatasetParameter = {}));
export var PathOptions;
(function (PathOptions) {
    /**
     * @internal
     */
    PathOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PathOptions || (PathOptions = {}));
export var CreateDatasetRequest;
(function (CreateDatasetRequest) {
    /**
     * @internal
     */
    CreateDatasetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDatasetRequest || (CreateDatasetRequest = {}));
export var CreateDatasetResponse;
(function (CreateDatasetResponse) {
    /**
     * @internal
     */
    CreateDatasetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDatasetResponse || (CreateDatasetResponse = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var EncryptionMode;
(function (EncryptionMode) {
    EncryptionMode["SSEKMS"] = "SSE-KMS";
    EncryptionMode["SSES3"] = "SSE-S3";
})(EncryptionMode || (EncryptionMode = {}));
export var SampleMode;
(function (SampleMode) {
    SampleMode["CUSTOM_ROWS"] = "CUSTOM_ROWS";
    SampleMode["FULL_DATASET"] = "FULL_DATASET";
})(SampleMode || (SampleMode = {}));
export var JobSample;
(function (JobSample) {
    /**
     * @internal
     */
    JobSample.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobSample || (JobSample = {}));
export var LogSubscription;
(function (LogSubscription) {
    LogSubscription["DISABLE"] = "DISABLE";
    LogSubscription["ENABLE"] = "ENABLE";
})(LogSubscription || (LogSubscription = {}));
export var CreateProfileJobRequest;
(function (CreateProfileJobRequest) {
    /**
     * @internal
     */
    CreateProfileJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProfileJobRequest || (CreateProfileJobRequest = {}));
export var CreateProfileJobResponse;
(function (CreateProfileJobResponse) {
    /**
     * @internal
     */
    CreateProfileJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProfileJobResponse || (CreateProfileJobResponse = {}));
export var SampleType;
(function (SampleType) {
    SampleType["FIRST_N"] = "FIRST_N";
    SampleType["LAST_N"] = "LAST_N";
    SampleType["RANDOM"] = "RANDOM";
})(SampleType || (SampleType = {}));
export var Sample;
(function (Sample) {
    /**
     * @internal
     */
    Sample.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Sample || (Sample = {}));
export var CreateProjectRequest;
(function (CreateProjectRequest) {
    /**
     * @internal
     */
    CreateProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProjectRequest || (CreateProjectRequest = {}));
export var CreateProjectResponse;
(function (CreateProjectResponse) {
    /**
     * @internal
     */
    CreateProjectResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProjectResponse || (CreateProjectResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var RecipeAction;
(function (RecipeAction) {
    /**
     * @internal
     */
    RecipeAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecipeAction || (RecipeAction = {}));
export var ConditionExpression;
(function (ConditionExpression) {
    /**
     * @internal
     */
    ConditionExpression.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConditionExpression || (ConditionExpression = {}));
export var RecipeStep;
(function (RecipeStep) {
    /**
     * @internal
     */
    RecipeStep.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecipeStep || (RecipeStep = {}));
export var CreateRecipeRequest;
(function (CreateRecipeRequest) {
    /**
     * @internal
     */
    CreateRecipeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRecipeRequest || (CreateRecipeRequest = {}));
export var CreateRecipeResponse;
(function (CreateRecipeResponse) {
    /**
     * @internal
     */
    CreateRecipeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRecipeResponse || (CreateRecipeResponse = {}));
export var CompressionFormat;
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
})(CompressionFormat || (CompressionFormat = {}));
export var OutputFormat;
(function (OutputFormat) {
    OutputFormat["AVRO"] = "AVRO";
    OutputFormat["CSV"] = "CSV";
    OutputFormat["GLUEPARQUET"] = "GLUEPARQUET";
    OutputFormat["JSON"] = "JSON";
    OutputFormat["ORC"] = "ORC";
    OutputFormat["PARQUET"] = "PARQUET";
    OutputFormat["XML"] = "XML";
})(OutputFormat || (OutputFormat = {}));
export var CsvOutputOptions;
(function (CsvOutputOptions) {
    /**
     * @internal
     */
    CsvOutputOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CsvOutputOptions || (CsvOutputOptions = {}));
export var OutputFormatOptions;
(function (OutputFormatOptions) {
    /**
     * @internal
     */
    OutputFormatOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputFormatOptions || (OutputFormatOptions = {}));
export var Output;
(function (Output) {
    /**
     * @internal
     */
    Output.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Output || (Output = {}));
export var RecipeReference;
(function (RecipeReference) {
    /**
     * @internal
     */
    RecipeReference.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecipeReference || (RecipeReference = {}));
export var CreateRecipeJobRequest;
(function (CreateRecipeJobRequest) {
    /**
     * @internal
     */
    CreateRecipeJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRecipeJobRequest || (CreateRecipeJobRequest = {}));
export var CreateRecipeJobResponse;
(function (CreateRecipeJobResponse) {
    /**
     * @internal
     */
    CreateRecipeJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRecipeJobResponse || (CreateRecipeJobResponse = {}));
export var CreateScheduleRequest;
(function (CreateScheduleRequest) {
    /**
     * @internal
     */
    CreateScheduleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateScheduleRequest || (CreateScheduleRequest = {}));
export var CreateScheduleResponse;
(function (CreateScheduleResponse) {
    /**
     * @internal
     */
    CreateScheduleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateScheduleResponse || (CreateScheduleResponse = {}));
export var DeleteDatasetRequest;
(function (DeleteDatasetRequest) {
    /**
     * @internal
     */
    DeleteDatasetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDatasetRequest || (DeleteDatasetRequest = {}));
export var DeleteDatasetResponse;
(function (DeleteDatasetResponse) {
    /**
     * @internal
     */
    DeleteDatasetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDatasetResponse || (DeleteDatasetResponse = {}));
export var DeleteJobRequest;
(function (DeleteJobRequest) {
    /**
     * @internal
     */
    DeleteJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJobRequest || (DeleteJobRequest = {}));
export var DeleteJobResponse;
(function (DeleteJobResponse) {
    /**
     * @internal
     */
    DeleteJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJobResponse || (DeleteJobResponse = {}));
export var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    /**
     * @internal
     */
    DeleteProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProjectRequest || (DeleteProjectRequest = {}));
export var DeleteProjectResponse;
(function (DeleteProjectResponse) {
    /**
     * @internal
     */
    DeleteProjectResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProjectResponse || (DeleteProjectResponse = {}));
export var DeleteRecipeVersionRequest;
(function (DeleteRecipeVersionRequest) {
    /**
     * @internal
     */
    DeleteRecipeVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRecipeVersionRequest || (DeleteRecipeVersionRequest = {}));
export var DeleteRecipeVersionResponse;
(function (DeleteRecipeVersionResponse) {
    /**
     * @internal
     */
    DeleteRecipeVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRecipeVersionResponse || (DeleteRecipeVersionResponse = {}));
export var DeleteScheduleRequest;
(function (DeleteScheduleRequest) {
    /**
     * @internal
     */
    DeleteScheduleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteScheduleRequest || (DeleteScheduleRequest = {}));
export var DeleteScheduleResponse;
(function (DeleteScheduleResponse) {
    /**
     * @internal
     */
    DeleteScheduleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteScheduleResponse || (DeleteScheduleResponse = {}));
export var DescribeDatasetRequest;
(function (DescribeDatasetRequest) {
    /**
     * @internal
     */
    DescribeDatasetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDatasetRequest || (DescribeDatasetRequest = {}));
export var Source;
(function (Source) {
    Source["DATABASE"] = "DATABASE";
    Source["DATACATALOG"] = "DATA-CATALOG";
    Source["S3"] = "S3";
})(Source || (Source = {}));
export var DescribeDatasetResponse;
(function (DescribeDatasetResponse) {
    /**
     * @internal
     */
    DescribeDatasetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDatasetResponse || (DescribeDatasetResponse = {}));
export var DescribeJobRequest;
(function (DescribeJobRequest) {
    /**
     * @internal
     */
    DescribeJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobRequest || (DescribeJobRequest = {}));
export var JobType;
(function (JobType) {
    JobType["PROFILE"] = "PROFILE";
    JobType["RECIPE"] = "RECIPE";
})(JobType || (JobType = {}));
export var DescribeJobResponse;
(function (DescribeJobResponse) {
    /**
     * @internal
     */
    DescribeJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobResponse || (DescribeJobResponse = {}));
export var DescribeJobRunRequest;
(function (DescribeJobRunRequest) {
    /**
     * @internal
     */
    DescribeJobRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobRunRequest || (DescribeJobRunRequest = {}));
export var JobRunState;
(function (JobRunState) {
    JobRunState["FAILED"] = "FAILED";
    JobRunState["RUNNING"] = "RUNNING";
    JobRunState["STARTING"] = "STARTING";
    JobRunState["STOPPED"] = "STOPPED";
    JobRunState["STOPPING"] = "STOPPING";
    JobRunState["SUCCEEDED"] = "SUCCEEDED";
    JobRunState["TIMEOUT"] = "TIMEOUT";
})(JobRunState || (JobRunState = {}));
export var DescribeJobRunResponse;
(function (DescribeJobRunResponse) {
    /**
     * @internal
     */
    DescribeJobRunResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobRunResponse || (DescribeJobRunResponse = {}));
export var DescribeProjectRequest;
(function (DescribeProjectRequest) {
    /**
     * @internal
     */
    DescribeProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeProjectRequest || (DescribeProjectRequest = {}));
export var SessionStatus;
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
})(SessionStatus || (SessionStatus = {}));
export var DescribeProjectResponse;
(function (DescribeProjectResponse) {
    /**
     * @internal
     */
    DescribeProjectResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeProjectResponse || (DescribeProjectResponse = {}));
export var DescribeRecipeRequest;
(function (DescribeRecipeRequest) {
    /**
     * @internal
     */
    DescribeRecipeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRecipeRequest || (DescribeRecipeRequest = {}));
export var DescribeRecipeResponse;
(function (DescribeRecipeResponse) {
    /**
     * @internal
     */
    DescribeRecipeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRecipeResponse || (DescribeRecipeResponse = {}));
export var DescribeScheduleRequest;
(function (DescribeScheduleRequest) {
    /**
     * @internal
     */
    DescribeScheduleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeScheduleRequest || (DescribeScheduleRequest = {}));
export var DescribeScheduleResponse;
(function (DescribeScheduleResponse) {
    /**
     * @internal
     */
    DescribeScheduleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeScheduleResponse || (DescribeScheduleResponse = {}));
export var ListDatasetsRequest;
(function (ListDatasetsRequest) {
    /**
     * @internal
     */
    ListDatasetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDatasetsRequest || (ListDatasetsRequest = {}));
export var Dataset;
(function (Dataset) {
    /**
     * @internal
     */
    Dataset.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Dataset || (Dataset = {}));
export var ListDatasetsResponse;
(function (ListDatasetsResponse) {
    /**
     * @internal
     */
    ListDatasetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDatasetsResponse || (ListDatasetsResponse = {}));
export var ListJobRunsRequest;
(function (ListJobRunsRequest) {
    /**
     * @internal
     */
    ListJobRunsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobRunsRequest || (ListJobRunsRequest = {}));
export var JobRun;
(function (JobRun) {
    /**
     * @internal
     */
    JobRun.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobRun || (JobRun = {}));
export var ListJobRunsResponse;
(function (ListJobRunsResponse) {
    /**
     * @internal
     */
    ListJobRunsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobRunsResponse || (ListJobRunsResponse = {}));
export var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsRequest || (ListJobsRequest = {}));
export var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Job || (Job = {}));
export var ListJobsResponse;
(function (ListJobsResponse) {
    /**
     * @internal
     */
    ListJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsResponse || (ListJobsResponse = {}));
export var ListProjectsRequest;
(function (ListProjectsRequest) {
    /**
     * @internal
     */
    ListProjectsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProjectsRequest || (ListProjectsRequest = {}));
export var Project;
(function (Project) {
    /**
     * @internal
     */
    Project.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Project || (Project = {}));
export var ListProjectsResponse;
(function (ListProjectsResponse) {
    /**
     * @internal
     */
    ListProjectsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProjectsResponse || (ListProjectsResponse = {}));
export var ListRecipesRequest;
(function (ListRecipesRequest) {
    /**
     * @internal
     */
    ListRecipesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRecipesRequest || (ListRecipesRequest = {}));
export var Recipe;
(function (Recipe) {
    /**
     * @internal
     */
    Recipe.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Recipe || (Recipe = {}));
export var ListRecipesResponse;
(function (ListRecipesResponse) {
    /**
     * @internal
     */
    ListRecipesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRecipesResponse || (ListRecipesResponse = {}));
export var ListRecipeVersionsRequest;
(function (ListRecipeVersionsRequest) {
    /**
     * @internal
     */
    ListRecipeVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRecipeVersionsRequest || (ListRecipeVersionsRequest = {}));
export var ListRecipeVersionsResponse;
(function (ListRecipeVersionsResponse) {
    /**
     * @internal
     */
    ListRecipeVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRecipeVersionsResponse || (ListRecipeVersionsResponse = {}));
export var ListSchedulesRequest;
(function (ListSchedulesRequest) {
    /**
     * @internal
     */
    ListSchedulesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSchedulesRequest || (ListSchedulesRequest = {}));
export var Schedule;
(function (Schedule) {
    /**
     * @internal
     */
    Schedule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Schedule || (Schedule = {}));
export var ListSchedulesResponse;
(function (ListSchedulesResponse) {
    /**
     * @internal
     */
    ListSchedulesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSchedulesResponse || (ListSchedulesResponse = {}));
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
export var PublishRecipeRequest;
(function (PublishRecipeRequest) {
    /**
     * @internal
     */
    PublishRecipeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PublishRecipeRequest || (PublishRecipeRequest = {}));
export var PublishRecipeResponse;
(function (PublishRecipeResponse) {
    /**
     * @internal
     */
    PublishRecipeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PublishRecipeResponse || (PublishRecipeResponse = {}));
export var ViewFrame;
(function (ViewFrame) {
    /**
     * @internal
     */
    ViewFrame.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ViewFrame || (ViewFrame = {}));
export var SendProjectSessionActionRequest;
(function (SendProjectSessionActionRequest) {
    /**
     * @internal
     */
    SendProjectSessionActionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendProjectSessionActionRequest || (SendProjectSessionActionRequest = {}));
export var SendProjectSessionActionResponse;
(function (SendProjectSessionActionResponse) {
    /**
     * @internal
     */
    SendProjectSessionActionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendProjectSessionActionResponse || (SendProjectSessionActionResponse = {}));
export var StartJobRunRequest;
(function (StartJobRunRequest) {
    /**
     * @internal
     */
    StartJobRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartJobRunRequest || (StartJobRunRequest = {}));
export var StartJobRunResponse;
(function (StartJobRunResponse) {
    /**
     * @internal
     */
    StartJobRunResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartJobRunResponse || (StartJobRunResponse = {}));
export var StartProjectSessionRequest;
(function (StartProjectSessionRequest) {
    /**
     * @internal
     */
    StartProjectSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartProjectSessionRequest || (StartProjectSessionRequest = {}));
export var StartProjectSessionResponse;
(function (StartProjectSessionResponse) {
    /**
     * @internal
     */
    StartProjectSessionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartProjectSessionResponse || (StartProjectSessionResponse = {}));
export var StopJobRunRequest;
(function (StopJobRunRequest) {
    /**
     * @internal
     */
    StopJobRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopJobRunRequest || (StopJobRunRequest = {}));
export var StopJobRunResponse;
(function (StopJobRunResponse) {
    /**
     * @internal
     */
    StopJobRunResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopJobRunResponse || (StopJobRunResponse = {}));
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
export var UpdateDatasetRequest;
(function (UpdateDatasetRequest) {
    /**
     * @internal
     */
    UpdateDatasetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDatasetRequest || (UpdateDatasetRequest = {}));
export var UpdateDatasetResponse;
(function (UpdateDatasetResponse) {
    /**
     * @internal
     */
    UpdateDatasetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDatasetResponse || (UpdateDatasetResponse = {}));
export var UpdateProfileJobRequest;
(function (UpdateProfileJobRequest) {
    /**
     * @internal
     */
    UpdateProfileJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProfileJobRequest || (UpdateProfileJobRequest = {}));
export var UpdateProfileJobResponse;
(function (UpdateProfileJobResponse) {
    /**
     * @internal
     */
    UpdateProfileJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProfileJobResponse || (UpdateProfileJobResponse = {}));
export var UpdateProjectRequest;
(function (UpdateProjectRequest) {
    /**
     * @internal
     */
    UpdateProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProjectRequest || (UpdateProjectRequest = {}));
export var UpdateProjectResponse;
(function (UpdateProjectResponse) {
    /**
     * @internal
     */
    UpdateProjectResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProjectResponse || (UpdateProjectResponse = {}));
export var UpdateRecipeRequest;
(function (UpdateRecipeRequest) {
    /**
     * @internal
     */
    UpdateRecipeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRecipeRequest || (UpdateRecipeRequest = {}));
export var UpdateRecipeResponse;
(function (UpdateRecipeResponse) {
    /**
     * @internal
     */
    UpdateRecipeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRecipeResponse || (UpdateRecipeResponse = {}));
export var UpdateRecipeJobRequest;
(function (UpdateRecipeJobRequest) {
    /**
     * @internal
     */
    UpdateRecipeJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRecipeJobRequest || (UpdateRecipeJobRequest = {}));
export var UpdateRecipeJobResponse;
(function (UpdateRecipeJobResponse) {
    /**
     * @internal
     */
    UpdateRecipeJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRecipeJobResponse || (UpdateRecipeJobResponse = {}));
export var UpdateScheduleRequest;
(function (UpdateScheduleRequest) {
    /**
     * @internal
     */
    UpdateScheduleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateScheduleRequest || (UpdateScheduleRequest = {}));
export var UpdateScheduleResponse;
(function (UpdateScheduleResponse) {
    /**
     * @internal
     */
    UpdateScheduleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateScheduleResponse || (UpdateScheduleResponse = {}));
//# sourceMappingURL=models_0.js.map