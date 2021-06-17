"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBTarget = exports.JdbcTarget = exports.DynamoDBTarget = exports.CatalogTarget = exports.CrawlerState = exports.SchemaChangePolicy = exports.UpdateBehavior = exports.DeleteBehavior = exports.Schedule = exports.ScheduleState = exports.RecrawlPolicy = exports.RecrawlBehavior = exports.LineageConfiguration = exports.CrawlerLineageSettings = exports.LastCrawlInfo = exports.LastCrawlStatus = exports.BatchGetCrawlersRequest = exports.BatchDeleteTableVersionResponse = exports.TableVersionError = exports.BatchDeleteTableVersionRequest = exports.BatchDeleteTableResponse = exports.TableError = exports.BatchDeleteTableRequest = exports.BatchDeletePartitionResponse = exports.BatchDeletePartitionRequest = exports.PartitionValueList = exports.BatchDeleteConnectionResponse = exports.BatchDeleteConnectionRequest = exports.ResourceNumberLimitExceededException = exports.OperationTimeoutException = exports.InvalidInputException = exports.InternalServiceException = exports.GlueEncryptionException = exports.EntityNotFoundException = exports.BatchCreatePartitionResponse = exports.PartitionError = exports.ErrorDetail = exports.BatchCreatePartitionRequest = exports.PartitionInput = exports.StorageDescriptor = exports.Order = exports.SkewedInfo = exports.SerDeInfo = exports.SchemaReference = exports.SchemaId = exports.Column = exports.AlreadyExistsException = exports.Action = exports.NotificationProperty = exports.AccessDeniedException = void 0;
exports.BatchUpdatePartitionFailureEntry = exports.BatchUpdatePartitionRequest = exports.BatchUpdatePartitionRequestEntry = exports.BatchStopJobRunResponse = exports.BatchStopJobRunSuccessfulSubmission = exports.BatchStopJobRunError = exports.BatchStopJobRunRequest = exports.BatchGetWorkflowsResponse = exports.Workflow = exports.WorkflowRun = exports.WorkflowRunStatus = exports.WorkflowRunStatistics = exports.WorkflowGraph = exports.Node = exports.NodeType = exports.TriggerNodeDetails = exports.JobNodeDetails = exports.JobRun = exports.Predecessor = exports.CrawlerNodeDetails = exports.Crawl = exports.Edge = exports.BatchGetWorkflowsRequest = exports.BatchGetTriggersResponse = exports.Trigger = exports.TriggerType = exports.TriggerState = exports.Predicate = exports.Logical = exports.Condition = exports.JobRunState = exports.LogicalOperator = exports.CrawlState = exports.BatchGetTriggersRequest = exports.BatchGetPartitionResponse = exports.Partition = exports.BatchGetPartitionRequest = exports.BatchGetJobsResponse = exports.Job = exports.ExecutionProperty = exports.ConnectionsList = exports.JobCommand = exports.BatchGetJobsRequest = exports.BatchGetDevEndpointsResponse = exports.DevEndpoint = exports.BatchGetDevEndpointsRequest = exports.BatchGetCrawlersResponse = exports.Crawler = exports.CrawlerTargets = exports.S3Target = void 0;
exports.CreatePartitionIndexResponse = exports.CreatePartitionIndexRequest = exports.PartitionIndex = exports.CreatePartitionResponse = exports.CreatePartitionRequest = exports.CreateMLTransformResponse = exports.CreateMLTransformRequest = exports.TransformEncryption = exports.MLUserDataEncryption = exports.MLUserDataEncryptionModeString = exports.TransformParameters = exports.TransformType = exports.FindMatchesParameters = exports.GlueTable = exports.CreateJobResponse = exports.CreateJobRequest = exports.ConcurrentModificationException = exports.ValidationException = exports.IdempotentParameterMismatchException = exports.CreateDevEndpointResponse = exports.CreateDevEndpointRequest = exports.CreateDatabaseResponse = exports.CreateDatabaseRequest = exports.DatabaseInput = exports.DatabaseIdentifier = exports.PrincipalPermissions = exports.DataLakePrincipal = exports.Permission = exports.CreateCrawlerResponse = exports.CreateCrawlerRequest = exports.CreateConnectionResponse = exports.CreateConnectionRequest = exports.ConnectionInput = exports.PhysicalConnectionRequirements = exports.ConnectionType = exports.ConnectionPropertyKey = exports.CreateClassifierResponse = exports.CreateClassifierRequest = exports.CreateXMLClassifierRequest = exports.CreateJsonClassifierRequest = exports.CreateGrokClassifierRequest = exports.CreateCsvClassifierRequest = exports.CsvHeaderOption = exports.CheckSchemaVersionValidityResponse = exports.CheckSchemaVersionValidityInput = exports.DataFormat = exports.CancelMLTaskRunResponse = exports.TaskStatusType = exports.CancelMLTaskRunRequest = exports.BatchUpdatePartitionResponse = void 0;
exports.DeleteDatabaseRequest = exports.SchedulerTransitioningException = exports.DeleteCrawlerResponse = exports.DeleteCrawlerRequest = exports.CrawlerRunningException = exports.DeleteConnectionResponse = exports.DeleteConnectionRequest = exports.DeleteColumnStatisticsForTableResponse = exports.DeleteColumnStatisticsForTableRequest = exports.DeleteColumnStatisticsForPartitionResponse = exports.DeleteColumnStatisticsForPartitionRequest = exports.DeleteClassifierResponse = exports.DeleteClassifierRequest = exports.CreateWorkflowResponse = exports.CreateWorkflowRequest = exports.CreateUserDefinedFunctionResponse = exports.CreateUserDefinedFunctionRequest = exports.UserDefinedFunctionInput = exports.ResourceUri = exports.ResourceType = exports.PrincipalType = exports.CreateTriggerResponse = exports.CreateTriggerRequest = exports.CreateTableResponse = exports.CreateTableRequest = exports.TableInput = exports.TableIdentifier = exports.CreateSecurityConfigurationResponse = exports.CreateSecurityConfigurationRequest = exports.EncryptionConfiguration = exports.S3Encryption = exports.S3EncryptionMode = exports.JobBookmarksEncryption = exports.JobBookmarksEncryptionMode = exports.CloudWatchEncryption = exports.CloudWatchEncryptionMode = exports.CreateScriptResponse = exports.CreateScriptRequest = exports.Language = exports.CodeGenNode = exports.CodeGenNodeArg = exports.CodeGenEdge = exports.CreateSchemaResponse = exports.SchemaVersionStatus = exports.SchemaStatus = exports.CreateSchemaInput = exports.RegistryId = exports.Compatibility = exports.CreateRegistryResponse = exports.CreateRegistryInput = void 0;
exports.BinaryColumnStatisticsData = exports.GetColumnStatisticsForPartitionRequest = exports.GetClassifiersResponse = exports.GetClassifiersRequest = exports.GetClassifierResponse = exports.Classifier = exports.XMLClassifier = exports.JsonClassifier = exports.GrokClassifier = exports.CsvClassifier = exports.GetClassifierRequest = exports.GetCatalogImportStatusResponse = exports.CatalogImportStatus = exports.GetCatalogImportStatusRequest = exports.DeleteWorkflowResponse = exports.DeleteWorkflowRequest = exports.DeleteUserDefinedFunctionResponse = exports.DeleteUserDefinedFunctionRequest = exports.DeleteTriggerResponse = exports.DeleteTriggerRequest = exports.DeleteTableVersionResponse = exports.DeleteTableVersionRequest = exports.DeleteTableResponse = exports.DeleteTableRequest = exports.DeleteSecurityConfigurationResponse = exports.DeleteSecurityConfigurationRequest = exports.DeleteSchemaVersionsResponse = exports.SchemaVersionErrorItem = exports.ErrorDetails = exports.DeleteSchemaVersionsInput = exports.DeleteSchemaResponse = exports.DeleteSchemaInput = exports.DeleteResourcePolicyResponse = exports.DeleteResourcePolicyRequest = exports.ConditionCheckFailureException = exports.DeleteRegistryResponse = exports.RegistryStatus = exports.DeleteRegistryInput = exports.DeletePartitionIndexResponse = exports.DeletePartitionIndexRequest = exports.ConflictException = exports.DeletePartitionResponse = exports.DeletePartitionRequest = exports.DeleteMLTransformResponse = exports.DeleteMLTransformRequest = exports.DeleteJobResponse = exports.DeleteJobRequest = exports.DeleteDevEndpointResponse = exports.DeleteDevEndpointRequest = exports.DeleteDatabaseResponse = void 0;
exports.JobBookmarkEntry = exports.GetJobBookmarkRequest = exports.GetJobResponse = exports.GetJobRequest = exports.GetDevEndpointsResponse = exports.GetDevEndpointsRequest = exports.GetDevEndpointResponse = exports.GetDevEndpointRequest = exports.GetDataflowGraphResponse = exports.GetDataflowGraphRequest = exports.GetDataCatalogEncryptionSettingsResponse = exports.DataCatalogEncryptionSettings = exports.EncryptionAtRest = exports.CatalogEncryptionMode = exports.ConnectionPasswordEncryption = exports.GetDataCatalogEncryptionSettingsRequest = exports.GetDatabasesResponse = exports.GetDatabasesRequest = exports.ResourceShareType = exports.GetDatabaseResponse = exports.Database = exports.GetDatabaseRequest = exports.GetCrawlersResponse = exports.GetCrawlersRequest = exports.GetCrawlerMetricsResponse = exports.CrawlerMetrics = exports.GetCrawlerMetricsRequest = exports.GetCrawlerResponse = exports.GetCrawlerRequest = exports.GetConnectionsResponse = exports.GetConnectionsRequest = exports.GetConnectionsFilter = exports.GetConnectionResponse = exports.Connection = exports.GetConnectionRequest = exports.GetColumnStatisticsForTableResponse = exports.GetColumnStatisticsForTableRequest = exports.GetColumnStatisticsForPartitionResponse = exports.ColumnError = exports.ColumnStatistics = exports.ColumnStatisticsData = exports.ColumnStatisticsType = exports.StringColumnStatisticsData = exports.LongColumnStatisticsData = exports.DoubleColumnStatisticsData = exports.DecimalColumnStatisticsData = exports.DecimalNumber = exports.DateColumnStatisticsData = exports.BooleanColumnStatisticsData = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var NotificationProperty;
(function (NotificationProperty) {
    /**
     * @internal
     */
    NotificationProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationProperty = exports.NotificationProperty || (exports.NotificationProperty = {}));
var Action;
(function (Action) {
    /**
     * @internal
     */
    Action.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Action = exports.Action || (exports.Action = {}));
var AlreadyExistsException;
(function (AlreadyExistsException) {
    /**
     * @internal
     */
    AlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {}));
var Column;
(function (Column) {
    /**
     * @internal
     */
    Column.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Column = exports.Column || (exports.Column = {}));
var SchemaId;
(function (SchemaId) {
    /**
     * @internal
     */
    SchemaId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaId = exports.SchemaId || (exports.SchemaId = {}));
var SchemaReference;
(function (SchemaReference) {
    /**
     * @internal
     */
    SchemaReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaReference = exports.SchemaReference || (exports.SchemaReference = {}));
var SerDeInfo;
(function (SerDeInfo) {
    /**
     * @internal
     */
    SerDeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SerDeInfo = exports.SerDeInfo || (exports.SerDeInfo = {}));
var SkewedInfo;
(function (SkewedInfo) {
    /**
     * @internal
     */
    SkewedInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SkewedInfo = exports.SkewedInfo || (exports.SkewedInfo = {}));
var Order;
(function (Order) {
    /**
     * @internal
     */
    Order.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Order = exports.Order || (exports.Order = {}));
var StorageDescriptor;
(function (StorageDescriptor) {
    /**
     * @internal
     */
    StorageDescriptor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageDescriptor = exports.StorageDescriptor || (exports.StorageDescriptor = {}));
var PartitionInput;
(function (PartitionInput) {
    /**
     * @internal
     */
    PartitionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartitionInput = exports.PartitionInput || (exports.PartitionInput = {}));
var BatchCreatePartitionRequest;
(function (BatchCreatePartitionRequest) {
    /**
     * @internal
     */
    BatchCreatePartitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchCreatePartitionRequest = exports.BatchCreatePartitionRequest || (exports.BatchCreatePartitionRequest = {}));
var ErrorDetail;
(function (ErrorDetail) {
    /**
     * @internal
     */
    ErrorDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorDetail = exports.ErrorDetail || (exports.ErrorDetail = {}));
var PartitionError;
(function (PartitionError) {
    /**
     * @internal
     */
    PartitionError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartitionError = exports.PartitionError || (exports.PartitionError = {}));
var BatchCreatePartitionResponse;
(function (BatchCreatePartitionResponse) {
    /**
     * @internal
     */
    BatchCreatePartitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchCreatePartitionResponse = exports.BatchCreatePartitionResponse || (exports.BatchCreatePartitionResponse = {}));
var EntityNotFoundException;
(function (EntityNotFoundException) {
    /**
     * @internal
     */
    EntityNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityNotFoundException = exports.EntityNotFoundException || (exports.EntityNotFoundException = {}));
var GlueEncryptionException;
(function (GlueEncryptionException) {
    /**
     * @internal
     */
    GlueEncryptionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlueEncryptionException = exports.GlueEncryptionException || (exports.GlueEncryptionException = {}));
var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var OperationTimeoutException;
(function (OperationTimeoutException) {
    /**
     * @internal
     */
    OperationTimeoutException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationTimeoutException = exports.OperationTimeoutException || (exports.OperationTimeoutException = {}));
var ResourceNumberLimitExceededException;
(function (ResourceNumberLimitExceededException) {
    /**
     * @internal
     */
    ResourceNumberLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNumberLimitExceededException = exports.ResourceNumberLimitExceededException || (exports.ResourceNumberLimitExceededException = {}));
var BatchDeleteConnectionRequest;
(function (BatchDeleteConnectionRequest) {
    /**
     * @internal
     */
    BatchDeleteConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteConnectionRequest = exports.BatchDeleteConnectionRequest || (exports.BatchDeleteConnectionRequest = {}));
var BatchDeleteConnectionResponse;
(function (BatchDeleteConnectionResponse) {
    /**
     * @internal
     */
    BatchDeleteConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteConnectionResponse = exports.BatchDeleteConnectionResponse || (exports.BatchDeleteConnectionResponse = {}));
var PartitionValueList;
(function (PartitionValueList) {
    /**
     * @internal
     */
    PartitionValueList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartitionValueList = exports.PartitionValueList || (exports.PartitionValueList = {}));
var BatchDeletePartitionRequest;
(function (BatchDeletePartitionRequest) {
    /**
     * @internal
     */
    BatchDeletePartitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeletePartitionRequest = exports.BatchDeletePartitionRequest || (exports.BatchDeletePartitionRequest = {}));
var BatchDeletePartitionResponse;
(function (BatchDeletePartitionResponse) {
    /**
     * @internal
     */
    BatchDeletePartitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeletePartitionResponse = exports.BatchDeletePartitionResponse || (exports.BatchDeletePartitionResponse = {}));
var BatchDeleteTableRequest;
(function (BatchDeleteTableRequest) {
    /**
     * @internal
     */
    BatchDeleteTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteTableRequest = exports.BatchDeleteTableRequest || (exports.BatchDeleteTableRequest = {}));
var TableError;
(function (TableError) {
    /**
     * @internal
     */
    TableError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableError = exports.TableError || (exports.TableError = {}));
var BatchDeleteTableResponse;
(function (BatchDeleteTableResponse) {
    /**
     * @internal
     */
    BatchDeleteTableResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteTableResponse = exports.BatchDeleteTableResponse || (exports.BatchDeleteTableResponse = {}));
var BatchDeleteTableVersionRequest;
(function (BatchDeleteTableVersionRequest) {
    /**
     * @internal
     */
    BatchDeleteTableVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteTableVersionRequest = exports.BatchDeleteTableVersionRequest || (exports.BatchDeleteTableVersionRequest = {}));
var TableVersionError;
(function (TableVersionError) {
    /**
     * @internal
     */
    TableVersionError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableVersionError = exports.TableVersionError || (exports.TableVersionError = {}));
var BatchDeleteTableVersionResponse;
(function (BatchDeleteTableVersionResponse) {
    /**
     * @internal
     */
    BatchDeleteTableVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteTableVersionResponse = exports.BatchDeleteTableVersionResponse || (exports.BatchDeleteTableVersionResponse = {}));
var BatchGetCrawlersRequest;
(function (BatchGetCrawlersRequest) {
    /**
     * @internal
     */
    BatchGetCrawlersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetCrawlersRequest = exports.BatchGetCrawlersRequest || (exports.BatchGetCrawlersRequest = {}));
var LastCrawlStatus;
(function (LastCrawlStatus) {
    LastCrawlStatus["CANCELLED"] = "CANCELLED";
    LastCrawlStatus["FAILED"] = "FAILED";
    LastCrawlStatus["SUCCEEDED"] = "SUCCEEDED";
})(LastCrawlStatus = exports.LastCrawlStatus || (exports.LastCrawlStatus = {}));
var LastCrawlInfo;
(function (LastCrawlInfo) {
    /**
     * @internal
     */
    LastCrawlInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LastCrawlInfo = exports.LastCrawlInfo || (exports.LastCrawlInfo = {}));
var CrawlerLineageSettings;
(function (CrawlerLineageSettings) {
    CrawlerLineageSettings["DISABLE"] = "DISABLE";
    CrawlerLineageSettings["ENABLE"] = "ENABLE";
})(CrawlerLineageSettings = exports.CrawlerLineageSettings || (exports.CrawlerLineageSettings = {}));
var LineageConfiguration;
(function (LineageConfiguration) {
    /**
     * @internal
     */
    LineageConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LineageConfiguration = exports.LineageConfiguration || (exports.LineageConfiguration = {}));
var RecrawlBehavior;
(function (RecrawlBehavior) {
    RecrawlBehavior["CRAWL_EVERYTHING"] = "CRAWL_EVERYTHING";
    RecrawlBehavior["CRAWL_NEW_FOLDERS_ONLY"] = "CRAWL_NEW_FOLDERS_ONLY";
})(RecrawlBehavior = exports.RecrawlBehavior || (exports.RecrawlBehavior = {}));
var RecrawlPolicy;
(function (RecrawlPolicy) {
    /**
     * @internal
     */
    RecrawlPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecrawlPolicy = exports.RecrawlPolicy || (exports.RecrawlPolicy = {}));
var ScheduleState;
(function (ScheduleState) {
    ScheduleState["NOT_SCHEDULED"] = "NOT_SCHEDULED";
    ScheduleState["SCHEDULED"] = "SCHEDULED";
    ScheduleState["TRANSITIONING"] = "TRANSITIONING";
})(ScheduleState = exports.ScheduleState || (exports.ScheduleState = {}));
var Schedule;
(function (Schedule) {
    /**
     * @internal
     */
    Schedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Schedule = exports.Schedule || (exports.Schedule = {}));
var DeleteBehavior;
(function (DeleteBehavior) {
    DeleteBehavior["DELETE_FROM_DATABASE"] = "DELETE_FROM_DATABASE";
    DeleteBehavior["DEPRECATE_IN_DATABASE"] = "DEPRECATE_IN_DATABASE";
    DeleteBehavior["LOG"] = "LOG";
})(DeleteBehavior = exports.DeleteBehavior || (exports.DeleteBehavior = {}));
var UpdateBehavior;
(function (UpdateBehavior) {
    UpdateBehavior["LOG"] = "LOG";
    UpdateBehavior["UPDATE_IN_DATABASE"] = "UPDATE_IN_DATABASE";
})(UpdateBehavior = exports.UpdateBehavior || (exports.UpdateBehavior = {}));
var SchemaChangePolicy;
(function (SchemaChangePolicy) {
    /**
     * @internal
     */
    SchemaChangePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaChangePolicy = exports.SchemaChangePolicy || (exports.SchemaChangePolicy = {}));
var CrawlerState;
(function (CrawlerState) {
    CrawlerState["READY"] = "READY";
    CrawlerState["RUNNING"] = "RUNNING";
    CrawlerState["STOPPING"] = "STOPPING";
})(CrawlerState = exports.CrawlerState || (exports.CrawlerState = {}));
var CatalogTarget;
(function (CatalogTarget) {
    /**
     * @internal
     */
    CatalogTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CatalogTarget = exports.CatalogTarget || (exports.CatalogTarget = {}));
var DynamoDBTarget;
(function (DynamoDBTarget) {
    /**
     * @internal
     */
    DynamoDBTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DynamoDBTarget = exports.DynamoDBTarget || (exports.DynamoDBTarget = {}));
var JdbcTarget;
(function (JdbcTarget) {
    /**
     * @internal
     */
    JdbcTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JdbcTarget = exports.JdbcTarget || (exports.JdbcTarget = {}));
var MongoDBTarget;
(function (MongoDBTarget) {
    /**
     * @internal
     */
    MongoDBTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MongoDBTarget = exports.MongoDBTarget || (exports.MongoDBTarget = {}));
var S3Target;
(function (S3Target) {
    /**
     * @internal
     */
    S3Target.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Target = exports.S3Target || (exports.S3Target = {}));
var CrawlerTargets;
(function (CrawlerTargets) {
    /**
     * @internal
     */
    CrawlerTargets.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CrawlerTargets = exports.CrawlerTargets || (exports.CrawlerTargets = {}));
var Crawler;
(function (Crawler) {
    /**
     * @internal
     */
    Crawler.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Crawler = exports.Crawler || (exports.Crawler = {}));
var BatchGetCrawlersResponse;
(function (BatchGetCrawlersResponse) {
    /**
     * @internal
     */
    BatchGetCrawlersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetCrawlersResponse = exports.BatchGetCrawlersResponse || (exports.BatchGetCrawlersResponse = {}));
var BatchGetDevEndpointsRequest;
(function (BatchGetDevEndpointsRequest) {
    /**
     * @internal
     */
    BatchGetDevEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetDevEndpointsRequest = exports.BatchGetDevEndpointsRequest || (exports.BatchGetDevEndpointsRequest = {}));
var DevEndpoint;
(function (DevEndpoint) {
    /**
     * @internal
     */
    DevEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DevEndpoint = exports.DevEndpoint || (exports.DevEndpoint = {}));
var BatchGetDevEndpointsResponse;
(function (BatchGetDevEndpointsResponse) {
    /**
     * @internal
     */
    BatchGetDevEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetDevEndpointsResponse = exports.BatchGetDevEndpointsResponse || (exports.BatchGetDevEndpointsResponse = {}));
var BatchGetJobsRequest;
(function (BatchGetJobsRequest) {
    /**
     * @internal
     */
    BatchGetJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetJobsRequest = exports.BatchGetJobsRequest || (exports.BatchGetJobsRequest = {}));
var JobCommand;
(function (JobCommand) {
    /**
     * @internal
     */
    JobCommand.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobCommand = exports.JobCommand || (exports.JobCommand = {}));
var ConnectionsList;
(function (ConnectionsList) {
    /**
     * @internal
     */
    ConnectionsList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionsList = exports.ConnectionsList || (exports.ConnectionsList = {}));
var ExecutionProperty;
(function (ExecutionProperty) {
    /**
     * @internal
     */
    ExecutionProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutionProperty = exports.ExecutionProperty || (exports.ExecutionProperty = {}));
var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Job = exports.Job || (exports.Job = {}));
var BatchGetJobsResponse;
(function (BatchGetJobsResponse) {
    /**
     * @internal
     */
    BatchGetJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetJobsResponse = exports.BatchGetJobsResponse || (exports.BatchGetJobsResponse = {}));
var BatchGetPartitionRequest;
(function (BatchGetPartitionRequest) {
    /**
     * @internal
     */
    BatchGetPartitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetPartitionRequest = exports.BatchGetPartitionRequest || (exports.BatchGetPartitionRequest = {}));
var Partition;
(function (Partition) {
    /**
     * @internal
     */
    Partition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Partition = exports.Partition || (exports.Partition = {}));
var BatchGetPartitionResponse;
(function (BatchGetPartitionResponse) {
    /**
     * @internal
     */
    BatchGetPartitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetPartitionResponse = exports.BatchGetPartitionResponse || (exports.BatchGetPartitionResponse = {}));
var BatchGetTriggersRequest;
(function (BatchGetTriggersRequest) {
    /**
     * @internal
     */
    BatchGetTriggersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetTriggersRequest = exports.BatchGetTriggersRequest || (exports.BatchGetTriggersRequest = {}));
var CrawlState;
(function (CrawlState) {
    CrawlState["CANCELLED"] = "CANCELLED";
    CrawlState["CANCELLING"] = "CANCELLING";
    CrawlState["FAILED"] = "FAILED";
    CrawlState["RUNNING"] = "RUNNING";
    CrawlState["SUCCEEDED"] = "SUCCEEDED";
})(CrawlState = exports.CrawlState || (exports.CrawlState = {}));
var LogicalOperator;
(function (LogicalOperator) {
    LogicalOperator["EQUALS"] = "EQUALS";
})(LogicalOperator = exports.LogicalOperator || (exports.LogicalOperator = {}));
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
var Condition;
(function (Condition) {
    /**
     * @internal
     */
    Condition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Condition = exports.Condition || (exports.Condition = {}));
var Logical;
(function (Logical) {
    Logical["AND"] = "AND";
    Logical["ANY"] = "ANY";
})(Logical = exports.Logical || (exports.Logical = {}));
var Predicate;
(function (Predicate) {
    /**
     * @internal
     */
    Predicate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Predicate = exports.Predicate || (exports.Predicate = {}));
var TriggerState;
(function (TriggerState) {
    TriggerState["ACTIVATED"] = "ACTIVATED";
    TriggerState["ACTIVATING"] = "ACTIVATING";
    TriggerState["CREATED"] = "CREATED";
    TriggerState["CREATING"] = "CREATING";
    TriggerState["DEACTIVATED"] = "DEACTIVATED";
    TriggerState["DEACTIVATING"] = "DEACTIVATING";
    TriggerState["DELETING"] = "DELETING";
    TriggerState["UPDATING"] = "UPDATING";
})(TriggerState = exports.TriggerState || (exports.TriggerState = {}));
var TriggerType;
(function (TriggerType) {
    TriggerType["CONDITIONAL"] = "CONDITIONAL";
    TriggerType["ON_DEMAND"] = "ON_DEMAND";
    TriggerType["SCHEDULED"] = "SCHEDULED";
})(TriggerType = exports.TriggerType || (exports.TriggerType = {}));
var Trigger;
(function (Trigger) {
    /**
     * @internal
     */
    Trigger.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Trigger = exports.Trigger || (exports.Trigger = {}));
var BatchGetTriggersResponse;
(function (BatchGetTriggersResponse) {
    /**
     * @internal
     */
    BatchGetTriggersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetTriggersResponse = exports.BatchGetTriggersResponse || (exports.BatchGetTriggersResponse = {}));
var BatchGetWorkflowsRequest;
(function (BatchGetWorkflowsRequest) {
    /**
     * @internal
     */
    BatchGetWorkflowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetWorkflowsRequest = exports.BatchGetWorkflowsRequest || (exports.BatchGetWorkflowsRequest = {}));
var Edge;
(function (Edge) {
    /**
     * @internal
     */
    Edge.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Edge = exports.Edge || (exports.Edge = {}));
var Crawl;
(function (Crawl) {
    /**
     * @internal
     */
    Crawl.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Crawl = exports.Crawl || (exports.Crawl = {}));
var CrawlerNodeDetails;
(function (CrawlerNodeDetails) {
    /**
     * @internal
     */
    CrawlerNodeDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CrawlerNodeDetails = exports.CrawlerNodeDetails || (exports.CrawlerNodeDetails = {}));
var Predecessor;
(function (Predecessor) {
    /**
     * @internal
     */
    Predecessor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Predecessor = exports.Predecessor || (exports.Predecessor = {}));
var JobRun;
(function (JobRun) {
    /**
     * @internal
     */
    JobRun.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobRun = exports.JobRun || (exports.JobRun = {}));
var JobNodeDetails;
(function (JobNodeDetails) {
    /**
     * @internal
     */
    JobNodeDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobNodeDetails = exports.JobNodeDetails || (exports.JobNodeDetails = {}));
var TriggerNodeDetails;
(function (TriggerNodeDetails) {
    /**
     * @internal
     */
    TriggerNodeDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TriggerNodeDetails = exports.TriggerNodeDetails || (exports.TriggerNodeDetails = {}));
var NodeType;
(function (NodeType) {
    NodeType["CRAWLER"] = "CRAWLER";
    NodeType["JOB"] = "JOB";
    NodeType["TRIGGER"] = "TRIGGER";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
var Node;
(function (Node) {
    /**
     * @internal
     */
    Node.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Node = exports.Node || (exports.Node = {}));
var WorkflowGraph;
(function (WorkflowGraph) {
    /**
     * @internal
     */
    WorkflowGraph.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowGraph = exports.WorkflowGraph || (exports.WorkflowGraph = {}));
var WorkflowRunStatistics;
(function (WorkflowRunStatistics) {
    /**
     * @internal
     */
    WorkflowRunStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowRunStatistics = exports.WorkflowRunStatistics || (exports.WorkflowRunStatistics = {}));
var WorkflowRunStatus;
(function (WorkflowRunStatus) {
    WorkflowRunStatus["COMPLETED"] = "COMPLETED";
    WorkflowRunStatus["ERROR"] = "ERROR";
    WorkflowRunStatus["RUNNING"] = "RUNNING";
    WorkflowRunStatus["STOPPED"] = "STOPPED";
    WorkflowRunStatus["STOPPING"] = "STOPPING";
})(WorkflowRunStatus = exports.WorkflowRunStatus || (exports.WorkflowRunStatus = {}));
var WorkflowRun;
(function (WorkflowRun) {
    /**
     * @internal
     */
    WorkflowRun.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowRun = exports.WorkflowRun || (exports.WorkflowRun = {}));
var Workflow;
(function (Workflow) {
    /**
     * @internal
     */
    Workflow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Workflow = exports.Workflow || (exports.Workflow = {}));
var BatchGetWorkflowsResponse;
(function (BatchGetWorkflowsResponse) {
    /**
     * @internal
     */
    BatchGetWorkflowsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetWorkflowsResponse = exports.BatchGetWorkflowsResponse || (exports.BatchGetWorkflowsResponse = {}));
var BatchStopJobRunRequest;
(function (BatchStopJobRunRequest) {
    /**
     * @internal
     */
    BatchStopJobRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchStopJobRunRequest = exports.BatchStopJobRunRequest || (exports.BatchStopJobRunRequest = {}));
var BatchStopJobRunError;
(function (BatchStopJobRunError) {
    /**
     * @internal
     */
    BatchStopJobRunError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchStopJobRunError = exports.BatchStopJobRunError || (exports.BatchStopJobRunError = {}));
var BatchStopJobRunSuccessfulSubmission;
(function (BatchStopJobRunSuccessfulSubmission) {
    /**
     * @internal
     */
    BatchStopJobRunSuccessfulSubmission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchStopJobRunSuccessfulSubmission = exports.BatchStopJobRunSuccessfulSubmission || (exports.BatchStopJobRunSuccessfulSubmission = {}));
var BatchStopJobRunResponse;
(function (BatchStopJobRunResponse) {
    /**
     * @internal
     */
    BatchStopJobRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchStopJobRunResponse = exports.BatchStopJobRunResponse || (exports.BatchStopJobRunResponse = {}));
var BatchUpdatePartitionRequestEntry;
(function (BatchUpdatePartitionRequestEntry) {
    /**
     * @internal
     */
    BatchUpdatePartitionRequestEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdatePartitionRequestEntry = exports.BatchUpdatePartitionRequestEntry || (exports.BatchUpdatePartitionRequestEntry = {}));
var BatchUpdatePartitionRequest;
(function (BatchUpdatePartitionRequest) {
    /**
     * @internal
     */
    BatchUpdatePartitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdatePartitionRequest = exports.BatchUpdatePartitionRequest || (exports.BatchUpdatePartitionRequest = {}));
var BatchUpdatePartitionFailureEntry;
(function (BatchUpdatePartitionFailureEntry) {
    /**
     * @internal
     */
    BatchUpdatePartitionFailureEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdatePartitionFailureEntry = exports.BatchUpdatePartitionFailureEntry || (exports.BatchUpdatePartitionFailureEntry = {}));
var BatchUpdatePartitionResponse;
(function (BatchUpdatePartitionResponse) {
    /**
     * @internal
     */
    BatchUpdatePartitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdatePartitionResponse = exports.BatchUpdatePartitionResponse || (exports.BatchUpdatePartitionResponse = {}));
var CancelMLTaskRunRequest;
(function (CancelMLTaskRunRequest) {
    /**
     * @internal
     */
    CancelMLTaskRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelMLTaskRunRequest = exports.CancelMLTaskRunRequest || (exports.CancelMLTaskRunRequest = {}));
var TaskStatusType;
(function (TaskStatusType) {
    TaskStatusType["FAILED"] = "FAILED";
    TaskStatusType["RUNNING"] = "RUNNING";
    TaskStatusType["STARTING"] = "STARTING";
    TaskStatusType["STOPPED"] = "STOPPED";
    TaskStatusType["STOPPING"] = "STOPPING";
    TaskStatusType["SUCCEEDED"] = "SUCCEEDED";
    TaskStatusType["TIMEOUT"] = "TIMEOUT";
})(TaskStatusType = exports.TaskStatusType || (exports.TaskStatusType = {}));
var CancelMLTaskRunResponse;
(function (CancelMLTaskRunResponse) {
    /**
     * @internal
     */
    CancelMLTaskRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelMLTaskRunResponse = exports.CancelMLTaskRunResponse || (exports.CancelMLTaskRunResponse = {}));
var DataFormat;
(function (DataFormat) {
    DataFormat["AVRO"] = "AVRO";
})(DataFormat = exports.DataFormat || (exports.DataFormat = {}));
var CheckSchemaVersionValidityInput;
(function (CheckSchemaVersionValidityInput) {
    /**
     * @internal
     */
    CheckSchemaVersionValidityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckSchemaVersionValidityInput = exports.CheckSchemaVersionValidityInput || (exports.CheckSchemaVersionValidityInput = {}));
var CheckSchemaVersionValidityResponse;
(function (CheckSchemaVersionValidityResponse) {
    /**
     * @internal
     */
    CheckSchemaVersionValidityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckSchemaVersionValidityResponse = exports.CheckSchemaVersionValidityResponse || (exports.CheckSchemaVersionValidityResponse = {}));
var CsvHeaderOption;
(function (CsvHeaderOption) {
    CsvHeaderOption["ABSENT"] = "ABSENT";
    CsvHeaderOption["PRESENT"] = "PRESENT";
    CsvHeaderOption["UNKNOWN"] = "UNKNOWN";
})(CsvHeaderOption = exports.CsvHeaderOption || (exports.CsvHeaderOption = {}));
var CreateCsvClassifierRequest;
(function (CreateCsvClassifierRequest) {
    /**
     * @internal
     */
    CreateCsvClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCsvClassifierRequest = exports.CreateCsvClassifierRequest || (exports.CreateCsvClassifierRequest = {}));
var CreateGrokClassifierRequest;
(function (CreateGrokClassifierRequest) {
    /**
     * @internal
     */
    CreateGrokClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGrokClassifierRequest = exports.CreateGrokClassifierRequest || (exports.CreateGrokClassifierRequest = {}));
var CreateJsonClassifierRequest;
(function (CreateJsonClassifierRequest) {
    /**
     * @internal
     */
    CreateJsonClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJsonClassifierRequest = exports.CreateJsonClassifierRequest || (exports.CreateJsonClassifierRequest = {}));
var CreateXMLClassifierRequest;
(function (CreateXMLClassifierRequest) {
    /**
     * @internal
     */
    CreateXMLClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateXMLClassifierRequest = exports.CreateXMLClassifierRequest || (exports.CreateXMLClassifierRequest = {}));
var CreateClassifierRequest;
(function (CreateClassifierRequest) {
    /**
     * @internal
     */
    CreateClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClassifierRequest = exports.CreateClassifierRequest || (exports.CreateClassifierRequest = {}));
var CreateClassifierResponse;
(function (CreateClassifierResponse) {
    /**
     * @internal
     */
    CreateClassifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClassifierResponse = exports.CreateClassifierResponse || (exports.CreateClassifierResponse = {}));
var ConnectionPropertyKey;
(function (ConnectionPropertyKey) {
    ConnectionPropertyKey["CONFIG_FILES"] = "CONFIG_FILES";
    ConnectionPropertyKey["CONNECTION_URL"] = "CONNECTION_URL";
    ConnectionPropertyKey["CONNECTOR_CLASS_NAME"] = "CONNECTOR_CLASS_NAME";
    ConnectionPropertyKey["CONNECTOR_TYPE"] = "CONNECTOR_TYPE";
    ConnectionPropertyKey["CONNECTOR_URL"] = "CONNECTOR_URL";
    ConnectionPropertyKey["CUSTOM_JDBC_CERT"] = "CUSTOM_JDBC_CERT";
    ConnectionPropertyKey["CUSTOM_JDBC_CERT_STRING"] = "CUSTOM_JDBC_CERT_STRING";
    ConnectionPropertyKey["ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD"] = "ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD";
    ConnectionPropertyKey["ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD"] = "ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD";
    ConnectionPropertyKey["ENCRYPTED_PASSWORD"] = "ENCRYPTED_PASSWORD";
    ConnectionPropertyKey["HOST"] = "HOST";
    ConnectionPropertyKey["INSTANCE_ID"] = "INSTANCE_ID";
    ConnectionPropertyKey["JDBC_CONNECTION_URL"] = "JDBC_CONNECTION_URL";
    ConnectionPropertyKey["JDBC_DRIVER_CLASS_NAME"] = "JDBC_DRIVER_CLASS_NAME";
    ConnectionPropertyKey["JDBC_DRIVER_JAR_URI"] = "JDBC_DRIVER_JAR_URI";
    ConnectionPropertyKey["JDBC_ENFORCE_SSL"] = "JDBC_ENFORCE_SSL";
    ConnectionPropertyKey["JDBC_ENGINE"] = "JDBC_ENGINE";
    ConnectionPropertyKey["JDBC_ENGINE_VERSION"] = "JDBC_ENGINE_VERSION";
    ConnectionPropertyKey["KAFKA_BOOTSTRAP_SERVERS"] = "KAFKA_BOOTSTRAP_SERVERS";
    ConnectionPropertyKey["KAFKA_CLIENT_KEYSTORE"] = "KAFKA_CLIENT_KEYSTORE";
    ConnectionPropertyKey["KAFKA_CLIENT_KEYSTORE_PASSWORD"] = "KAFKA_CLIENT_KEYSTORE_PASSWORD";
    ConnectionPropertyKey["KAFKA_CLIENT_KEY_PASSWORD"] = "KAFKA_CLIENT_KEY_PASSWORD";
    ConnectionPropertyKey["KAFKA_CUSTOM_CERT"] = "KAFKA_CUSTOM_CERT";
    ConnectionPropertyKey["KAFKA_SKIP_CUSTOM_CERT_VALIDATION"] = "KAFKA_SKIP_CUSTOM_CERT_VALIDATION";
    ConnectionPropertyKey["KAFKA_SSL_ENABLED"] = "KAFKA_SSL_ENABLED";
    ConnectionPropertyKey["PASSWORD"] = "PASSWORD";
    ConnectionPropertyKey["PORT"] = "PORT";
    ConnectionPropertyKey["SECRET_ID"] = "SECRET_ID";
    ConnectionPropertyKey["SKIP_CUSTOM_JDBC_CERT_VALIDATION"] = "SKIP_CUSTOM_JDBC_CERT_VALIDATION";
    ConnectionPropertyKey["USER_NAME"] = "USERNAME";
})(ConnectionPropertyKey = exports.ConnectionPropertyKey || (exports.ConnectionPropertyKey = {}));
var ConnectionType;
(function (ConnectionType) {
    ConnectionType["CUSTOM"] = "CUSTOM";
    ConnectionType["JDBC"] = "JDBC";
    ConnectionType["KAFKA"] = "KAFKA";
    ConnectionType["MARKETPLACE"] = "MARKETPLACE";
    ConnectionType["MONGODB"] = "MONGODB";
    ConnectionType["NETWORK"] = "NETWORK";
    ConnectionType["SFTP"] = "SFTP";
})(ConnectionType = exports.ConnectionType || (exports.ConnectionType = {}));
var PhysicalConnectionRequirements;
(function (PhysicalConnectionRequirements) {
    /**
     * @internal
     */
    PhysicalConnectionRequirements.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PhysicalConnectionRequirements = exports.PhysicalConnectionRequirements || (exports.PhysicalConnectionRequirements = {}));
var ConnectionInput;
(function (ConnectionInput) {
    /**
     * @internal
     */
    ConnectionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionInput = exports.ConnectionInput || (exports.ConnectionInput = {}));
var CreateConnectionRequest;
(function (CreateConnectionRequest) {
    /**
     * @internal
     */
    CreateConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionRequest = exports.CreateConnectionRequest || (exports.CreateConnectionRequest = {}));
var CreateConnectionResponse;
(function (CreateConnectionResponse) {
    /**
     * @internal
     */
    CreateConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionResponse = exports.CreateConnectionResponse || (exports.CreateConnectionResponse = {}));
var CreateCrawlerRequest;
(function (CreateCrawlerRequest) {
    /**
     * @internal
     */
    CreateCrawlerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCrawlerRequest = exports.CreateCrawlerRequest || (exports.CreateCrawlerRequest = {}));
var CreateCrawlerResponse;
(function (CreateCrawlerResponse) {
    /**
     * @internal
     */
    CreateCrawlerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCrawlerResponse = exports.CreateCrawlerResponse || (exports.CreateCrawlerResponse = {}));
var Permission;
(function (Permission) {
    Permission["ALL"] = "ALL";
    Permission["ALTER"] = "ALTER";
    Permission["CREATE_DATABASE"] = "CREATE_DATABASE";
    Permission["CREATE_TABLE"] = "CREATE_TABLE";
    Permission["DATA_LOCATION_ACCESS"] = "DATA_LOCATION_ACCESS";
    Permission["DELETE"] = "DELETE";
    Permission["DROP"] = "DROP";
    Permission["INSERT"] = "INSERT";
    Permission["SELECT"] = "SELECT";
})(Permission = exports.Permission || (exports.Permission = {}));
var DataLakePrincipal;
(function (DataLakePrincipal) {
    /**
     * @internal
     */
    DataLakePrincipal.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataLakePrincipal = exports.DataLakePrincipal || (exports.DataLakePrincipal = {}));
var PrincipalPermissions;
(function (PrincipalPermissions) {
    /**
     * @internal
     */
    PrincipalPermissions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrincipalPermissions = exports.PrincipalPermissions || (exports.PrincipalPermissions = {}));
var DatabaseIdentifier;
(function (DatabaseIdentifier) {
    /**
     * @internal
     */
    DatabaseIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatabaseIdentifier = exports.DatabaseIdentifier || (exports.DatabaseIdentifier = {}));
var DatabaseInput;
(function (DatabaseInput) {
    /**
     * @internal
     */
    DatabaseInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatabaseInput = exports.DatabaseInput || (exports.DatabaseInput = {}));
var CreateDatabaseRequest;
(function (CreateDatabaseRequest) {
    /**
     * @internal
     */
    CreateDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatabaseRequest = exports.CreateDatabaseRequest || (exports.CreateDatabaseRequest = {}));
var CreateDatabaseResponse;
(function (CreateDatabaseResponse) {
    /**
     * @internal
     */
    CreateDatabaseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatabaseResponse = exports.CreateDatabaseResponse || (exports.CreateDatabaseResponse = {}));
var CreateDevEndpointRequest;
(function (CreateDevEndpointRequest) {
    /**
     * @internal
     */
    CreateDevEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDevEndpointRequest = exports.CreateDevEndpointRequest || (exports.CreateDevEndpointRequest = {}));
var CreateDevEndpointResponse;
(function (CreateDevEndpointResponse) {
    /**
     * @internal
     */
    CreateDevEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDevEndpointResponse = exports.CreateDevEndpointResponse || (exports.CreateDevEndpointResponse = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var CreateJobRequest;
(function (CreateJobRequest) {
    /**
     * @internal
     */
    CreateJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobRequest = exports.CreateJobRequest || (exports.CreateJobRequest = {}));
var CreateJobResponse;
(function (CreateJobResponse) {
    /**
     * @internal
     */
    CreateJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobResponse = exports.CreateJobResponse || (exports.CreateJobResponse = {}));
var GlueTable;
(function (GlueTable) {
    /**
     * @internal
     */
    GlueTable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlueTable = exports.GlueTable || (exports.GlueTable = {}));
var FindMatchesParameters;
(function (FindMatchesParameters) {
    /**
     * @internal
     */
    FindMatchesParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindMatchesParameters = exports.FindMatchesParameters || (exports.FindMatchesParameters = {}));
var TransformType;
(function (TransformType) {
    TransformType["FIND_MATCHES"] = "FIND_MATCHES";
})(TransformType = exports.TransformType || (exports.TransformType = {}));
var TransformParameters;
(function (TransformParameters) {
    /**
     * @internal
     */
    TransformParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformParameters = exports.TransformParameters || (exports.TransformParameters = {}));
var MLUserDataEncryptionModeString;
(function (MLUserDataEncryptionModeString) {
    MLUserDataEncryptionModeString["DISABLED"] = "DISABLED";
    MLUserDataEncryptionModeString["SSEKMS"] = "SSE-KMS";
})(MLUserDataEncryptionModeString = exports.MLUserDataEncryptionModeString || (exports.MLUserDataEncryptionModeString = {}));
var MLUserDataEncryption;
(function (MLUserDataEncryption) {
    /**
     * @internal
     */
    MLUserDataEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MLUserDataEncryption = exports.MLUserDataEncryption || (exports.MLUserDataEncryption = {}));
var TransformEncryption;
(function (TransformEncryption) {
    /**
     * @internal
     */
    TransformEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformEncryption = exports.TransformEncryption || (exports.TransformEncryption = {}));
var CreateMLTransformRequest;
(function (CreateMLTransformRequest) {
    /**
     * @internal
     */
    CreateMLTransformRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMLTransformRequest = exports.CreateMLTransformRequest || (exports.CreateMLTransformRequest = {}));
var CreateMLTransformResponse;
(function (CreateMLTransformResponse) {
    /**
     * @internal
     */
    CreateMLTransformResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMLTransformResponse = exports.CreateMLTransformResponse || (exports.CreateMLTransformResponse = {}));
var CreatePartitionRequest;
(function (CreatePartitionRequest) {
    /**
     * @internal
     */
    CreatePartitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePartitionRequest = exports.CreatePartitionRequest || (exports.CreatePartitionRequest = {}));
var CreatePartitionResponse;
(function (CreatePartitionResponse) {
    /**
     * @internal
     */
    CreatePartitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePartitionResponse = exports.CreatePartitionResponse || (exports.CreatePartitionResponse = {}));
var PartitionIndex;
(function (PartitionIndex) {
    /**
     * @internal
     */
    PartitionIndex.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartitionIndex = exports.PartitionIndex || (exports.PartitionIndex = {}));
var CreatePartitionIndexRequest;
(function (CreatePartitionIndexRequest) {
    /**
     * @internal
     */
    CreatePartitionIndexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePartitionIndexRequest = exports.CreatePartitionIndexRequest || (exports.CreatePartitionIndexRequest = {}));
var CreatePartitionIndexResponse;
(function (CreatePartitionIndexResponse) {
    /**
     * @internal
     */
    CreatePartitionIndexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePartitionIndexResponse = exports.CreatePartitionIndexResponse || (exports.CreatePartitionIndexResponse = {}));
var CreateRegistryInput;
(function (CreateRegistryInput) {
    /**
     * @internal
     */
    CreateRegistryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRegistryInput = exports.CreateRegistryInput || (exports.CreateRegistryInput = {}));
var CreateRegistryResponse;
(function (CreateRegistryResponse) {
    /**
     * @internal
     */
    CreateRegistryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRegistryResponse = exports.CreateRegistryResponse || (exports.CreateRegistryResponse = {}));
var Compatibility;
(function (Compatibility) {
    Compatibility["BACKWARD"] = "BACKWARD";
    Compatibility["BACKWARD_ALL"] = "BACKWARD_ALL";
    Compatibility["DISABLED"] = "DISABLED";
    Compatibility["FORWARD"] = "FORWARD";
    Compatibility["FORWARD_ALL"] = "FORWARD_ALL";
    Compatibility["FULL"] = "FULL";
    Compatibility["FULL_ALL"] = "FULL_ALL";
    Compatibility["NONE"] = "NONE";
})(Compatibility = exports.Compatibility || (exports.Compatibility = {}));
var RegistryId;
(function (RegistryId) {
    /**
     * @internal
     */
    RegistryId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegistryId = exports.RegistryId || (exports.RegistryId = {}));
var CreateSchemaInput;
(function (CreateSchemaInput) {
    /**
     * @internal
     */
    CreateSchemaInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSchemaInput = exports.CreateSchemaInput || (exports.CreateSchemaInput = {}));
var SchemaStatus;
(function (SchemaStatus) {
    SchemaStatus["AVAILABLE"] = "AVAILABLE";
    SchemaStatus["DELETING"] = "DELETING";
    SchemaStatus["PENDING"] = "PENDING";
})(SchemaStatus = exports.SchemaStatus || (exports.SchemaStatus = {}));
var SchemaVersionStatus;
(function (SchemaVersionStatus) {
    SchemaVersionStatus["AVAILABLE"] = "AVAILABLE";
    SchemaVersionStatus["DELETING"] = "DELETING";
    SchemaVersionStatus["FAILURE"] = "FAILURE";
    SchemaVersionStatus["PENDING"] = "PENDING";
})(SchemaVersionStatus = exports.SchemaVersionStatus || (exports.SchemaVersionStatus = {}));
var CreateSchemaResponse;
(function (CreateSchemaResponse) {
    /**
     * @internal
     */
    CreateSchemaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSchemaResponse = exports.CreateSchemaResponse || (exports.CreateSchemaResponse = {}));
var CodeGenEdge;
(function (CodeGenEdge) {
    /**
     * @internal
     */
    CodeGenEdge.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeGenEdge = exports.CodeGenEdge || (exports.CodeGenEdge = {}));
var CodeGenNodeArg;
(function (CodeGenNodeArg) {
    /**
     * @internal
     */
    CodeGenNodeArg.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeGenNodeArg = exports.CodeGenNodeArg || (exports.CodeGenNodeArg = {}));
var CodeGenNode;
(function (CodeGenNode) {
    /**
     * @internal
     */
    CodeGenNode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeGenNode = exports.CodeGenNode || (exports.CodeGenNode = {}));
var Language;
(function (Language) {
    Language["PYTHON"] = "PYTHON";
    Language["SCALA"] = "SCALA";
})(Language = exports.Language || (exports.Language = {}));
var CreateScriptRequest;
(function (CreateScriptRequest) {
    /**
     * @internal
     */
    CreateScriptRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateScriptRequest = exports.CreateScriptRequest || (exports.CreateScriptRequest = {}));
var CreateScriptResponse;
(function (CreateScriptResponse) {
    /**
     * @internal
     */
    CreateScriptResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateScriptResponse = exports.CreateScriptResponse || (exports.CreateScriptResponse = {}));
var CloudWatchEncryptionMode;
(function (CloudWatchEncryptionMode) {
    CloudWatchEncryptionMode["DISABLED"] = "DISABLED";
    CloudWatchEncryptionMode["SSEKMS"] = "SSE-KMS";
})(CloudWatchEncryptionMode = exports.CloudWatchEncryptionMode || (exports.CloudWatchEncryptionMode = {}));
var CloudWatchEncryption;
(function (CloudWatchEncryption) {
    /**
     * @internal
     */
    CloudWatchEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchEncryption = exports.CloudWatchEncryption || (exports.CloudWatchEncryption = {}));
var JobBookmarksEncryptionMode;
(function (JobBookmarksEncryptionMode) {
    JobBookmarksEncryptionMode["CSEKMS"] = "CSE-KMS";
    JobBookmarksEncryptionMode["DISABLED"] = "DISABLED";
})(JobBookmarksEncryptionMode = exports.JobBookmarksEncryptionMode || (exports.JobBookmarksEncryptionMode = {}));
var JobBookmarksEncryption;
(function (JobBookmarksEncryption) {
    /**
     * @internal
     */
    JobBookmarksEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobBookmarksEncryption = exports.JobBookmarksEncryption || (exports.JobBookmarksEncryption = {}));
var S3EncryptionMode;
(function (S3EncryptionMode) {
    S3EncryptionMode["DISABLED"] = "DISABLED";
    S3EncryptionMode["SSEKMS"] = "SSE-KMS";
    S3EncryptionMode["SSES3"] = "SSE-S3";
})(S3EncryptionMode = exports.S3EncryptionMode || (exports.S3EncryptionMode = {}));
var S3Encryption;
(function (S3Encryption) {
    /**
     * @internal
     */
    S3Encryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Encryption = exports.S3Encryption || (exports.S3Encryption = {}));
var EncryptionConfiguration;
(function (EncryptionConfiguration) {
    /**
     * @internal
     */
    EncryptionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionConfiguration = exports.EncryptionConfiguration || (exports.EncryptionConfiguration = {}));
var CreateSecurityConfigurationRequest;
(function (CreateSecurityConfigurationRequest) {
    /**
     * @internal
     */
    CreateSecurityConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSecurityConfigurationRequest = exports.CreateSecurityConfigurationRequest || (exports.CreateSecurityConfigurationRequest = {}));
var CreateSecurityConfigurationResponse;
(function (CreateSecurityConfigurationResponse) {
    /**
     * @internal
     */
    CreateSecurityConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSecurityConfigurationResponse = exports.CreateSecurityConfigurationResponse || (exports.CreateSecurityConfigurationResponse = {}));
var TableIdentifier;
(function (TableIdentifier) {
    /**
     * @internal
     */
    TableIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableIdentifier = exports.TableIdentifier || (exports.TableIdentifier = {}));
var TableInput;
(function (TableInput) {
    /**
     * @internal
     */
    TableInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableInput = exports.TableInput || (exports.TableInput = {}));
var CreateTableRequest;
(function (CreateTableRequest) {
    /**
     * @internal
     */
    CreateTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTableRequest = exports.CreateTableRequest || (exports.CreateTableRequest = {}));
var CreateTableResponse;
(function (CreateTableResponse) {
    /**
     * @internal
     */
    CreateTableResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTableResponse = exports.CreateTableResponse || (exports.CreateTableResponse = {}));
var CreateTriggerRequest;
(function (CreateTriggerRequest) {
    /**
     * @internal
     */
    CreateTriggerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTriggerRequest = exports.CreateTriggerRequest || (exports.CreateTriggerRequest = {}));
var CreateTriggerResponse;
(function (CreateTriggerResponse) {
    /**
     * @internal
     */
    CreateTriggerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTriggerResponse = exports.CreateTriggerResponse || (exports.CreateTriggerResponse = {}));
var PrincipalType;
(function (PrincipalType) {
    PrincipalType["GROUP"] = "GROUP";
    PrincipalType["ROLE"] = "ROLE";
    PrincipalType["USER"] = "USER";
})(PrincipalType = exports.PrincipalType || (exports.PrincipalType = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["ARCHIVE"] = "ARCHIVE";
    ResourceType["FILE"] = "FILE";
    ResourceType["JAR"] = "JAR";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ResourceUri;
(function (ResourceUri) {
    /**
     * @internal
     */
    ResourceUri.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceUri = exports.ResourceUri || (exports.ResourceUri = {}));
var UserDefinedFunctionInput;
(function (UserDefinedFunctionInput) {
    /**
     * @internal
     */
    UserDefinedFunctionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserDefinedFunctionInput = exports.UserDefinedFunctionInput || (exports.UserDefinedFunctionInput = {}));
var CreateUserDefinedFunctionRequest;
(function (CreateUserDefinedFunctionRequest) {
    /**
     * @internal
     */
    CreateUserDefinedFunctionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserDefinedFunctionRequest = exports.CreateUserDefinedFunctionRequest || (exports.CreateUserDefinedFunctionRequest = {}));
var CreateUserDefinedFunctionResponse;
(function (CreateUserDefinedFunctionResponse) {
    /**
     * @internal
     */
    CreateUserDefinedFunctionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserDefinedFunctionResponse = exports.CreateUserDefinedFunctionResponse || (exports.CreateUserDefinedFunctionResponse = {}));
var CreateWorkflowRequest;
(function (CreateWorkflowRequest) {
    /**
     * @internal
     */
    CreateWorkflowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkflowRequest = exports.CreateWorkflowRequest || (exports.CreateWorkflowRequest = {}));
var CreateWorkflowResponse;
(function (CreateWorkflowResponse) {
    /**
     * @internal
     */
    CreateWorkflowResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkflowResponse = exports.CreateWorkflowResponse || (exports.CreateWorkflowResponse = {}));
var DeleteClassifierRequest;
(function (DeleteClassifierRequest) {
    /**
     * @internal
     */
    DeleteClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClassifierRequest = exports.DeleteClassifierRequest || (exports.DeleteClassifierRequest = {}));
var DeleteClassifierResponse;
(function (DeleteClassifierResponse) {
    /**
     * @internal
     */
    DeleteClassifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClassifierResponse = exports.DeleteClassifierResponse || (exports.DeleteClassifierResponse = {}));
var DeleteColumnStatisticsForPartitionRequest;
(function (DeleteColumnStatisticsForPartitionRequest) {
    /**
     * @internal
     */
    DeleteColumnStatisticsForPartitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteColumnStatisticsForPartitionRequest = exports.DeleteColumnStatisticsForPartitionRequest || (exports.DeleteColumnStatisticsForPartitionRequest = {}));
var DeleteColumnStatisticsForPartitionResponse;
(function (DeleteColumnStatisticsForPartitionResponse) {
    /**
     * @internal
     */
    DeleteColumnStatisticsForPartitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteColumnStatisticsForPartitionResponse = exports.DeleteColumnStatisticsForPartitionResponse || (exports.DeleteColumnStatisticsForPartitionResponse = {}));
var DeleteColumnStatisticsForTableRequest;
(function (DeleteColumnStatisticsForTableRequest) {
    /**
     * @internal
     */
    DeleteColumnStatisticsForTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteColumnStatisticsForTableRequest = exports.DeleteColumnStatisticsForTableRequest || (exports.DeleteColumnStatisticsForTableRequest = {}));
var DeleteColumnStatisticsForTableResponse;
(function (DeleteColumnStatisticsForTableResponse) {
    /**
     * @internal
     */
    DeleteColumnStatisticsForTableResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteColumnStatisticsForTableResponse = exports.DeleteColumnStatisticsForTableResponse || (exports.DeleteColumnStatisticsForTableResponse = {}));
var DeleteConnectionRequest;
(function (DeleteConnectionRequest) {
    /**
     * @internal
     */
    DeleteConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionRequest = exports.DeleteConnectionRequest || (exports.DeleteConnectionRequest = {}));
var DeleteConnectionResponse;
(function (DeleteConnectionResponse) {
    /**
     * @internal
     */
    DeleteConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionResponse = exports.DeleteConnectionResponse || (exports.DeleteConnectionResponse = {}));
var CrawlerRunningException;
(function (CrawlerRunningException) {
    /**
     * @internal
     */
    CrawlerRunningException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CrawlerRunningException = exports.CrawlerRunningException || (exports.CrawlerRunningException = {}));
var DeleteCrawlerRequest;
(function (DeleteCrawlerRequest) {
    /**
     * @internal
     */
    DeleteCrawlerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCrawlerRequest = exports.DeleteCrawlerRequest || (exports.DeleteCrawlerRequest = {}));
var DeleteCrawlerResponse;
(function (DeleteCrawlerResponse) {
    /**
     * @internal
     */
    DeleteCrawlerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCrawlerResponse = exports.DeleteCrawlerResponse || (exports.DeleteCrawlerResponse = {}));
var SchedulerTransitioningException;
(function (SchedulerTransitioningException) {
    /**
     * @internal
     */
    SchedulerTransitioningException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchedulerTransitioningException = exports.SchedulerTransitioningException || (exports.SchedulerTransitioningException = {}));
var DeleteDatabaseRequest;
(function (DeleteDatabaseRequest) {
    /**
     * @internal
     */
    DeleteDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatabaseRequest = exports.DeleteDatabaseRequest || (exports.DeleteDatabaseRequest = {}));
var DeleteDatabaseResponse;
(function (DeleteDatabaseResponse) {
    /**
     * @internal
     */
    DeleteDatabaseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatabaseResponse = exports.DeleteDatabaseResponse || (exports.DeleteDatabaseResponse = {}));
var DeleteDevEndpointRequest;
(function (DeleteDevEndpointRequest) {
    /**
     * @internal
     */
    DeleteDevEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDevEndpointRequest = exports.DeleteDevEndpointRequest || (exports.DeleteDevEndpointRequest = {}));
var DeleteDevEndpointResponse;
(function (DeleteDevEndpointResponse) {
    /**
     * @internal
     */
    DeleteDevEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDevEndpointResponse = exports.DeleteDevEndpointResponse || (exports.DeleteDevEndpointResponse = {}));
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
var DeleteMLTransformRequest;
(function (DeleteMLTransformRequest) {
    /**
     * @internal
     */
    DeleteMLTransformRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMLTransformRequest = exports.DeleteMLTransformRequest || (exports.DeleteMLTransformRequest = {}));
var DeleteMLTransformResponse;
(function (DeleteMLTransformResponse) {
    /**
     * @internal
     */
    DeleteMLTransformResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMLTransformResponse = exports.DeleteMLTransformResponse || (exports.DeleteMLTransformResponse = {}));
var DeletePartitionRequest;
(function (DeletePartitionRequest) {
    /**
     * @internal
     */
    DeletePartitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePartitionRequest = exports.DeletePartitionRequest || (exports.DeletePartitionRequest = {}));
var DeletePartitionResponse;
(function (DeletePartitionResponse) {
    /**
     * @internal
     */
    DeletePartitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePartitionResponse = exports.DeletePartitionResponse || (exports.DeletePartitionResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var DeletePartitionIndexRequest;
(function (DeletePartitionIndexRequest) {
    /**
     * @internal
     */
    DeletePartitionIndexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePartitionIndexRequest = exports.DeletePartitionIndexRequest || (exports.DeletePartitionIndexRequest = {}));
var DeletePartitionIndexResponse;
(function (DeletePartitionIndexResponse) {
    /**
     * @internal
     */
    DeletePartitionIndexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePartitionIndexResponse = exports.DeletePartitionIndexResponse || (exports.DeletePartitionIndexResponse = {}));
var DeleteRegistryInput;
(function (DeleteRegistryInput) {
    /**
     * @internal
     */
    DeleteRegistryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRegistryInput = exports.DeleteRegistryInput || (exports.DeleteRegistryInput = {}));
var RegistryStatus;
(function (RegistryStatus) {
    RegistryStatus["AVAILABLE"] = "AVAILABLE";
    RegistryStatus["DELETING"] = "DELETING";
})(RegistryStatus = exports.RegistryStatus || (exports.RegistryStatus = {}));
var DeleteRegistryResponse;
(function (DeleteRegistryResponse) {
    /**
     * @internal
     */
    DeleteRegistryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRegistryResponse = exports.DeleteRegistryResponse || (exports.DeleteRegistryResponse = {}));
var ConditionCheckFailureException;
(function (ConditionCheckFailureException) {
    /**
     * @internal
     */
    ConditionCheckFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConditionCheckFailureException = exports.ConditionCheckFailureException || (exports.ConditionCheckFailureException = {}));
var DeleteResourcePolicyRequest;
(function (DeleteResourcePolicyRequest) {
    /**
     * @internal
     */
    DeleteResourcePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourcePolicyRequest = exports.DeleteResourcePolicyRequest || (exports.DeleteResourcePolicyRequest = {}));
var DeleteResourcePolicyResponse;
(function (DeleteResourcePolicyResponse) {
    /**
     * @internal
     */
    DeleteResourcePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourcePolicyResponse = exports.DeleteResourcePolicyResponse || (exports.DeleteResourcePolicyResponse = {}));
var DeleteSchemaInput;
(function (DeleteSchemaInput) {
    /**
     * @internal
     */
    DeleteSchemaInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSchemaInput = exports.DeleteSchemaInput || (exports.DeleteSchemaInput = {}));
var DeleteSchemaResponse;
(function (DeleteSchemaResponse) {
    /**
     * @internal
     */
    DeleteSchemaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSchemaResponse = exports.DeleteSchemaResponse || (exports.DeleteSchemaResponse = {}));
var DeleteSchemaVersionsInput;
(function (DeleteSchemaVersionsInput) {
    /**
     * @internal
     */
    DeleteSchemaVersionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSchemaVersionsInput = exports.DeleteSchemaVersionsInput || (exports.DeleteSchemaVersionsInput = {}));
var ErrorDetails;
(function (ErrorDetails) {
    /**
     * @internal
     */
    ErrorDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorDetails = exports.ErrorDetails || (exports.ErrorDetails = {}));
var SchemaVersionErrorItem;
(function (SchemaVersionErrorItem) {
    /**
     * @internal
     */
    SchemaVersionErrorItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaVersionErrorItem = exports.SchemaVersionErrorItem || (exports.SchemaVersionErrorItem = {}));
var DeleteSchemaVersionsResponse;
(function (DeleteSchemaVersionsResponse) {
    /**
     * @internal
     */
    DeleteSchemaVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSchemaVersionsResponse = exports.DeleteSchemaVersionsResponse || (exports.DeleteSchemaVersionsResponse = {}));
var DeleteSecurityConfigurationRequest;
(function (DeleteSecurityConfigurationRequest) {
    /**
     * @internal
     */
    DeleteSecurityConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSecurityConfigurationRequest = exports.DeleteSecurityConfigurationRequest || (exports.DeleteSecurityConfigurationRequest = {}));
var DeleteSecurityConfigurationResponse;
(function (DeleteSecurityConfigurationResponse) {
    /**
     * @internal
     */
    DeleteSecurityConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSecurityConfigurationResponse = exports.DeleteSecurityConfigurationResponse || (exports.DeleteSecurityConfigurationResponse = {}));
var DeleteTableRequest;
(function (DeleteTableRequest) {
    /**
     * @internal
     */
    DeleteTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTableRequest = exports.DeleteTableRequest || (exports.DeleteTableRequest = {}));
var DeleteTableResponse;
(function (DeleteTableResponse) {
    /**
     * @internal
     */
    DeleteTableResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTableResponse = exports.DeleteTableResponse || (exports.DeleteTableResponse = {}));
var DeleteTableVersionRequest;
(function (DeleteTableVersionRequest) {
    /**
     * @internal
     */
    DeleteTableVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTableVersionRequest = exports.DeleteTableVersionRequest || (exports.DeleteTableVersionRequest = {}));
var DeleteTableVersionResponse;
(function (DeleteTableVersionResponse) {
    /**
     * @internal
     */
    DeleteTableVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTableVersionResponse = exports.DeleteTableVersionResponse || (exports.DeleteTableVersionResponse = {}));
var DeleteTriggerRequest;
(function (DeleteTriggerRequest) {
    /**
     * @internal
     */
    DeleteTriggerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTriggerRequest = exports.DeleteTriggerRequest || (exports.DeleteTriggerRequest = {}));
var DeleteTriggerResponse;
(function (DeleteTriggerResponse) {
    /**
     * @internal
     */
    DeleteTriggerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTriggerResponse = exports.DeleteTriggerResponse || (exports.DeleteTriggerResponse = {}));
var DeleteUserDefinedFunctionRequest;
(function (DeleteUserDefinedFunctionRequest) {
    /**
     * @internal
     */
    DeleteUserDefinedFunctionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserDefinedFunctionRequest = exports.DeleteUserDefinedFunctionRequest || (exports.DeleteUserDefinedFunctionRequest = {}));
var DeleteUserDefinedFunctionResponse;
(function (DeleteUserDefinedFunctionResponse) {
    /**
     * @internal
     */
    DeleteUserDefinedFunctionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserDefinedFunctionResponse = exports.DeleteUserDefinedFunctionResponse || (exports.DeleteUserDefinedFunctionResponse = {}));
var DeleteWorkflowRequest;
(function (DeleteWorkflowRequest) {
    /**
     * @internal
     */
    DeleteWorkflowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkflowRequest = exports.DeleteWorkflowRequest || (exports.DeleteWorkflowRequest = {}));
var DeleteWorkflowResponse;
(function (DeleteWorkflowResponse) {
    /**
     * @internal
     */
    DeleteWorkflowResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkflowResponse = exports.DeleteWorkflowResponse || (exports.DeleteWorkflowResponse = {}));
var GetCatalogImportStatusRequest;
(function (GetCatalogImportStatusRequest) {
    /**
     * @internal
     */
    GetCatalogImportStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCatalogImportStatusRequest = exports.GetCatalogImportStatusRequest || (exports.GetCatalogImportStatusRequest = {}));
var CatalogImportStatus;
(function (CatalogImportStatus) {
    /**
     * @internal
     */
    CatalogImportStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CatalogImportStatus = exports.CatalogImportStatus || (exports.CatalogImportStatus = {}));
var GetCatalogImportStatusResponse;
(function (GetCatalogImportStatusResponse) {
    /**
     * @internal
     */
    GetCatalogImportStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCatalogImportStatusResponse = exports.GetCatalogImportStatusResponse || (exports.GetCatalogImportStatusResponse = {}));
var GetClassifierRequest;
(function (GetClassifierRequest) {
    /**
     * @internal
     */
    GetClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetClassifierRequest = exports.GetClassifierRequest || (exports.GetClassifierRequest = {}));
var CsvClassifier;
(function (CsvClassifier) {
    /**
     * @internal
     */
    CsvClassifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CsvClassifier = exports.CsvClassifier || (exports.CsvClassifier = {}));
var GrokClassifier;
(function (GrokClassifier) {
    /**
     * @internal
     */
    GrokClassifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GrokClassifier = exports.GrokClassifier || (exports.GrokClassifier = {}));
var JsonClassifier;
(function (JsonClassifier) {
    /**
     * @internal
     */
    JsonClassifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JsonClassifier = exports.JsonClassifier || (exports.JsonClassifier = {}));
var XMLClassifier;
(function (XMLClassifier) {
    /**
     * @internal
     */
    XMLClassifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(XMLClassifier = exports.XMLClassifier || (exports.XMLClassifier = {}));
var Classifier;
(function (Classifier) {
    /**
     * @internal
     */
    Classifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Classifier = exports.Classifier || (exports.Classifier = {}));
var GetClassifierResponse;
(function (GetClassifierResponse) {
    /**
     * @internal
     */
    GetClassifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetClassifierResponse = exports.GetClassifierResponse || (exports.GetClassifierResponse = {}));
var GetClassifiersRequest;
(function (GetClassifiersRequest) {
    /**
     * @internal
     */
    GetClassifiersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetClassifiersRequest = exports.GetClassifiersRequest || (exports.GetClassifiersRequest = {}));
var GetClassifiersResponse;
(function (GetClassifiersResponse) {
    /**
     * @internal
     */
    GetClassifiersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetClassifiersResponse = exports.GetClassifiersResponse || (exports.GetClassifiersResponse = {}));
var GetColumnStatisticsForPartitionRequest;
(function (GetColumnStatisticsForPartitionRequest) {
    /**
     * @internal
     */
    GetColumnStatisticsForPartitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetColumnStatisticsForPartitionRequest = exports.GetColumnStatisticsForPartitionRequest || (exports.GetColumnStatisticsForPartitionRequest = {}));
var BinaryColumnStatisticsData;
(function (BinaryColumnStatisticsData) {
    /**
     * @internal
     */
    BinaryColumnStatisticsData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BinaryColumnStatisticsData = exports.BinaryColumnStatisticsData || (exports.BinaryColumnStatisticsData = {}));
var BooleanColumnStatisticsData;
(function (BooleanColumnStatisticsData) {
    /**
     * @internal
     */
    BooleanColumnStatisticsData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BooleanColumnStatisticsData = exports.BooleanColumnStatisticsData || (exports.BooleanColumnStatisticsData = {}));
var DateColumnStatisticsData;
(function (DateColumnStatisticsData) {
    /**
     * @internal
     */
    DateColumnStatisticsData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DateColumnStatisticsData = exports.DateColumnStatisticsData || (exports.DateColumnStatisticsData = {}));
var DecimalNumber;
(function (DecimalNumber) {
    /**
     * @internal
     */
    DecimalNumber.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecimalNumber = exports.DecimalNumber || (exports.DecimalNumber = {}));
var DecimalColumnStatisticsData;
(function (DecimalColumnStatisticsData) {
    /**
     * @internal
     */
    DecimalColumnStatisticsData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecimalColumnStatisticsData = exports.DecimalColumnStatisticsData || (exports.DecimalColumnStatisticsData = {}));
var DoubleColumnStatisticsData;
(function (DoubleColumnStatisticsData) {
    /**
     * @internal
     */
    DoubleColumnStatisticsData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DoubleColumnStatisticsData = exports.DoubleColumnStatisticsData || (exports.DoubleColumnStatisticsData = {}));
var LongColumnStatisticsData;
(function (LongColumnStatisticsData) {
    /**
     * @internal
     */
    LongColumnStatisticsData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LongColumnStatisticsData = exports.LongColumnStatisticsData || (exports.LongColumnStatisticsData = {}));
var StringColumnStatisticsData;
(function (StringColumnStatisticsData) {
    /**
     * @internal
     */
    StringColumnStatisticsData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StringColumnStatisticsData = exports.StringColumnStatisticsData || (exports.StringColumnStatisticsData = {}));
var ColumnStatisticsType;
(function (ColumnStatisticsType) {
    ColumnStatisticsType["BINARY"] = "BINARY";
    ColumnStatisticsType["BOOLEAN"] = "BOOLEAN";
    ColumnStatisticsType["DATE"] = "DATE";
    ColumnStatisticsType["DECIMAL"] = "DECIMAL";
    ColumnStatisticsType["DOUBLE"] = "DOUBLE";
    ColumnStatisticsType["LONG"] = "LONG";
    ColumnStatisticsType["STRING"] = "STRING";
})(ColumnStatisticsType = exports.ColumnStatisticsType || (exports.ColumnStatisticsType = {}));
var ColumnStatisticsData;
(function (ColumnStatisticsData) {
    /**
     * @internal
     */
    ColumnStatisticsData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnStatisticsData = exports.ColumnStatisticsData || (exports.ColumnStatisticsData = {}));
var ColumnStatistics;
(function (ColumnStatistics) {
    /**
     * @internal
     */
    ColumnStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnStatistics = exports.ColumnStatistics || (exports.ColumnStatistics = {}));
var ColumnError;
(function (ColumnError) {
    /**
     * @internal
     */
    ColumnError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnError = exports.ColumnError || (exports.ColumnError = {}));
var GetColumnStatisticsForPartitionResponse;
(function (GetColumnStatisticsForPartitionResponse) {
    /**
     * @internal
     */
    GetColumnStatisticsForPartitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetColumnStatisticsForPartitionResponse = exports.GetColumnStatisticsForPartitionResponse || (exports.GetColumnStatisticsForPartitionResponse = {}));
var GetColumnStatisticsForTableRequest;
(function (GetColumnStatisticsForTableRequest) {
    /**
     * @internal
     */
    GetColumnStatisticsForTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetColumnStatisticsForTableRequest = exports.GetColumnStatisticsForTableRequest || (exports.GetColumnStatisticsForTableRequest = {}));
var GetColumnStatisticsForTableResponse;
(function (GetColumnStatisticsForTableResponse) {
    /**
     * @internal
     */
    GetColumnStatisticsForTableResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetColumnStatisticsForTableResponse = exports.GetColumnStatisticsForTableResponse || (exports.GetColumnStatisticsForTableResponse = {}));
var GetConnectionRequest;
(function (GetConnectionRequest) {
    /**
     * @internal
     */
    GetConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectionRequest = exports.GetConnectionRequest || (exports.GetConnectionRequest = {}));
var Connection;
(function (Connection) {
    /**
     * @internal
     */
    Connection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Connection = exports.Connection || (exports.Connection = {}));
var GetConnectionResponse;
(function (GetConnectionResponse) {
    /**
     * @internal
     */
    GetConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectionResponse = exports.GetConnectionResponse || (exports.GetConnectionResponse = {}));
var GetConnectionsFilter;
(function (GetConnectionsFilter) {
    /**
     * @internal
     */
    GetConnectionsFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectionsFilter = exports.GetConnectionsFilter || (exports.GetConnectionsFilter = {}));
var GetConnectionsRequest;
(function (GetConnectionsRequest) {
    /**
     * @internal
     */
    GetConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectionsRequest = exports.GetConnectionsRequest || (exports.GetConnectionsRequest = {}));
var GetConnectionsResponse;
(function (GetConnectionsResponse) {
    /**
     * @internal
     */
    GetConnectionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectionsResponse = exports.GetConnectionsResponse || (exports.GetConnectionsResponse = {}));
var GetCrawlerRequest;
(function (GetCrawlerRequest) {
    /**
     * @internal
     */
    GetCrawlerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCrawlerRequest = exports.GetCrawlerRequest || (exports.GetCrawlerRequest = {}));
var GetCrawlerResponse;
(function (GetCrawlerResponse) {
    /**
     * @internal
     */
    GetCrawlerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCrawlerResponse = exports.GetCrawlerResponse || (exports.GetCrawlerResponse = {}));
var GetCrawlerMetricsRequest;
(function (GetCrawlerMetricsRequest) {
    /**
     * @internal
     */
    GetCrawlerMetricsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCrawlerMetricsRequest = exports.GetCrawlerMetricsRequest || (exports.GetCrawlerMetricsRequest = {}));
var CrawlerMetrics;
(function (CrawlerMetrics) {
    /**
     * @internal
     */
    CrawlerMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CrawlerMetrics = exports.CrawlerMetrics || (exports.CrawlerMetrics = {}));
var GetCrawlerMetricsResponse;
(function (GetCrawlerMetricsResponse) {
    /**
     * @internal
     */
    GetCrawlerMetricsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCrawlerMetricsResponse = exports.GetCrawlerMetricsResponse || (exports.GetCrawlerMetricsResponse = {}));
var GetCrawlersRequest;
(function (GetCrawlersRequest) {
    /**
     * @internal
     */
    GetCrawlersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCrawlersRequest = exports.GetCrawlersRequest || (exports.GetCrawlersRequest = {}));
var GetCrawlersResponse;
(function (GetCrawlersResponse) {
    /**
     * @internal
     */
    GetCrawlersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCrawlersResponse = exports.GetCrawlersResponse || (exports.GetCrawlersResponse = {}));
var GetDatabaseRequest;
(function (GetDatabaseRequest) {
    /**
     * @internal
     */
    GetDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDatabaseRequest = exports.GetDatabaseRequest || (exports.GetDatabaseRequest = {}));
var Database;
(function (Database) {
    /**
     * @internal
     */
    Database.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Database = exports.Database || (exports.Database = {}));
var GetDatabaseResponse;
(function (GetDatabaseResponse) {
    /**
     * @internal
     */
    GetDatabaseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDatabaseResponse = exports.GetDatabaseResponse || (exports.GetDatabaseResponse = {}));
var ResourceShareType;
(function (ResourceShareType) {
    ResourceShareType["ALL"] = "ALL";
    ResourceShareType["FOREIGN"] = "FOREIGN";
})(ResourceShareType = exports.ResourceShareType || (exports.ResourceShareType = {}));
var GetDatabasesRequest;
(function (GetDatabasesRequest) {
    /**
     * @internal
     */
    GetDatabasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDatabasesRequest = exports.GetDatabasesRequest || (exports.GetDatabasesRequest = {}));
var GetDatabasesResponse;
(function (GetDatabasesResponse) {
    /**
     * @internal
     */
    GetDatabasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDatabasesResponse = exports.GetDatabasesResponse || (exports.GetDatabasesResponse = {}));
var GetDataCatalogEncryptionSettingsRequest;
(function (GetDataCatalogEncryptionSettingsRequest) {
    /**
     * @internal
     */
    GetDataCatalogEncryptionSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataCatalogEncryptionSettingsRequest = exports.GetDataCatalogEncryptionSettingsRequest || (exports.GetDataCatalogEncryptionSettingsRequest = {}));
var ConnectionPasswordEncryption;
(function (ConnectionPasswordEncryption) {
    /**
     * @internal
     */
    ConnectionPasswordEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionPasswordEncryption = exports.ConnectionPasswordEncryption || (exports.ConnectionPasswordEncryption = {}));
var CatalogEncryptionMode;
(function (CatalogEncryptionMode) {
    CatalogEncryptionMode["DISABLED"] = "DISABLED";
    CatalogEncryptionMode["SSEKMS"] = "SSE-KMS";
})(CatalogEncryptionMode = exports.CatalogEncryptionMode || (exports.CatalogEncryptionMode = {}));
var EncryptionAtRest;
(function (EncryptionAtRest) {
    /**
     * @internal
     */
    EncryptionAtRest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionAtRest = exports.EncryptionAtRest || (exports.EncryptionAtRest = {}));
var DataCatalogEncryptionSettings;
(function (DataCatalogEncryptionSettings) {
    /**
     * @internal
     */
    DataCatalogEncryptionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataCatalogEncryptionSettings = exports.DataCatalogEncryptionSettings || (exports.DataCatalogEncryptionSettings = {}));
var GetDataCatalogEncryptionSettingsResponse;
(function (GetDataCatalogEncryptionSettingsResponse) {
    /**
     * @internal
     */
    GetDataCatalogEncryptionSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataCatalogEncryptionSettingsResponse = exports.GetDataCatalogEncryptionSettingsResponse || (exports.GetDataCatalogEncryptionSettingsResponse = {}));
var GetDataflowGraphRequest;
(function (GetDataflowGraphRequest) {
    /**
     * @internal
     */
    GetDataflowGraphRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataflowGraphRequest = exports.GetDataflowGraphRequest || (exports.GetDataflowGraphRequest = {}));
var GetDataflowGraphResponse;
(function (GetDataflowGraphResponse) {
    /**
     * @internal
     */
    GetDataflowGraphResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataflowGraphResponse = exports.GetDataflowGraphResponse || (exports.GetDataflowGraphResponse = {}));
var GetDevEndpointRequest;
(function (GetDevEndpointRequest) {
    /**
     * @internal
     */
    GetDevEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevEndpointRequest = exports.GetDevEndpointRequest || (exports.GetDevEndpointRequest = {}));
var GetDevEndpointResponse;
(function (GetDevEndpointResponse) {
    /**
     * @internal
     */
    GetDevEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevEndpointResponse = exports.GetDevEndpointResponse || (exports.GetDevEndpointResponse = {}));
var GetDevEndpointsRequest;
(function (GetDevEndpointsRequest) {
    /**
     * @internal
     */
    GetDevEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevEndpointsRequest = exports.GetDevEndpointsRequest || (exports.GetDevEndpointsRequest = {}));
var GetDevEndpointsResponse;
(function (GetDevEndpointsResponse) {
    /**
     * @internal
     */
    GetDevEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevEndpointsResponse = exports.GetDevEndpointsResponse || (exports.GetDevEndpointsResponse = {}));
var GetJobRequest;
(function (GetJobRequest) {
    /**
     * @internal
     */
    GetJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobRequest = exports.GetJobRequest || (exports.GetJobRequest = {}));
var GetJobResponse;
(function (GetJobResponse) {
    /**
     * @internal
     */
    GetJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobResponse = exports.GetJobResponse || (exports.GetJobResponse = {}));
var GetJobBookmarkRequest;
(function (GetJobBookmarkRequest) {
    /**
     * @internal
     */
    GetJobBookmarkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobBookmarkRequest = exports.GetJobBookmarkRequest || (exports.GetJobBookmarkRequest = {}));
var JobBookmarkEntry;
(function (JobBookmarkEntry) {
    /**
     * @internal
     */
    JobBookmarkEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobBookmarkEntry = exports.JobBookmarkEntry || (exports.JobBookmarkEntry = {}));
//# sourceMappingURL=models_0.js.map