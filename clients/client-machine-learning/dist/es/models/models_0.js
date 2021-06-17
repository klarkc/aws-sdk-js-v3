import { __assign } from "tslib";
export var TaggableResourceType;
(function (TaggableResourceType) {
    TaggableResourceType["BATCH_PREDICTION"] = "BatchPrediction";
    TaggableResourceType["DATASOURCE"] = "DataSource";
    TaggableResourceType["EVALUATION"] = "Evaluation";
    TaggableResourceType["ML_MODEL"] = "MLModel";
})(TaggableResourceType || (TaggableResourceType = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var AddTagsInput;
(function (AddTagsInput) {
    /**
     * @internal
     */
    AddTagsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsInput || (AddTagsInput = {}));
export var AddTagsOutput;
(function (AddTagsOutput) {
    /**
     * @internal
     */
    AddTagsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsOutput || (AddTagsOutput = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInputException || (InvalidInputException = {}));
export var InvalidTagException;
(function (InvalidTagException) {
    /**
     * @internal
     */
    InvalidTagException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidTagException || (InvalidTagException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var TagLimitExceededException;
(function (TagLimitExceededException) {
    /**
     * @internal
     */
    TagLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagLimitExceededException || (TagLimitExceededException = {}));
export var Algorithm;
(function (Algorithm) {
    Algorithm["SGD"] = "sgd";
})(Algorithm || (Algorithm = {}));
export var CreateBatchPredictionInput;
(function (CreateBatchPredictionInput) {
    /**
     * @internal
     */
    CreateBatchPredictionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBatchPredictionInput || (CreateBatchPredictionInput = {}));
export var CreateBatchPredictionOutput;
(function (CreateBatchPredictionOutput) {
    /**
     * @internal
     */
    CreateBatchPredictionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBatchPredictionOutput || (CreateBatchPredictionOutput = {}));
export var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdempotentParameterMismatchException || (IdempotentParameterMismatchException = {}));
export var RDSDatabaseCredentials;
(function (RDSDatabaseCredentials) {
    /**
     * @internal
     */
    RDSDatabaseCredentials.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RDSDatabaseCredentials || (RDSDatabaseCredentials = {}));
export var RDSDatabase;
(function (RDSDatabase) {
    /**
     * @internal
     */
    RDSDatabase.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RDSDatabase || (RDSDatabase = {}));
export var RDSDataSpec;
(function (RDSDataSpec) {
    /**
     * @internal
     */
    RDSDataSpec.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RDSDataSpec || (RDSDataSpec = {}));
export var CreateDataSourceFromRDSInput;
(function (CreateDataSourceFromRDSInput) {
    /**
     * @internal
     */
    CreateDataSourceFromRDSInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataSourceFromRDSInput || (CreateDataSourceFromRDSInput = {}));
export var CreateDataSourceFromRDSOutput;
(function (CreateDataSourceFromRDSOutput) {
    /**
     * @internal
     */
    CreateDataSourceFromRDSOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataSourceFromRDSOutput || (CreateDataSourceFromRDSOutput = {}));
export var RedshiftDatabaseCredentials;
(function (RedshiftDatabaseCredentials) {
    /**
     * @internal
     */
    RedshiftDatabaseCredentials.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RedshiftDatabaseCredentials || (RedshiftDatabaseCredentials = {}));
export var RedshiftDatabase;
(function (RedshiftDatabase) {
    /**
     * @internal
     */
    RedshiftDatabase.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RedshiftDatabase || (RedshiftDatabase = {}));
export var RedshiftDataSpec;
(function (RedshiftDataSpec) {
    /**
     * @internal
     */
    RedshiftDataSpec.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RedshiftDataSpec || (RedshiftDataSpec = {}));
export var CreateDataSourceFromRedshiftInput;
(function (CreateDataSourceFromRedshiftInput) {
    /**
     * @internal
     */
    CreateDataSourceFromRedshiftInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataSourceFromRedshiftInput || (CreateDataSourceFromRedshiftInput = {}));
export var CreateDataSourceFromRedshiftOutput;
(function (CreateDataSourceFromRedshiftOutput) {
    /**
     * @internal
     */
    CreateDataSourceFromRedshiftOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataSourceFromRedshiftOutput || (CreateDataSourceFromRedshiftOutput = {}));
export var S3DataSpec;
(function (S3DataSpec) {
    /**
     * @internal
     */
    S3DataSpec.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3DataSpec || (S3DataSpec = {}));
export var CreateDataSourceFromS3Input;
(function (CreateDataSourceFromS3Input) {
    /**
     * @internal
     */
    CreateDataSourceFromS3Input.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataSourceFromS3Input || (CreateDataSourceFromS3Input = {}));
export var CreateDataSourceFromS3Output;
(function (CreateDataSourceFromS3Output) {
    /**
     * @internal
     */
    CreateDataSourceFromS3Output.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataSourceFromS3Output || (CreateDataSourceFromS3Output = {}));
export var CreateEvaluationInput;
(function (CreateEvaluationInput) {
    /**
     * @internal
     */
    CreateEvaluationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEvaluationInput || (CreateEvaluationInput = {}));
export var CreateEvaluationOutput;
(function (CreateEvaluationOutput) {
    /**
     * @internal
     */
    CreateEvaluationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEvaluationOutput || (CreateEvaluationOutput = {}));
export var MLModelType;
(function (MLModelType) {
    MLModelType["BINARY"] = "BINARY";
    MLModelType["MULTICLASS"] = "MULTICLASS";
    MLModelType["REGRESSION"] = "REGRESSION";
})(MLModelType || (MLModelType = {}));
export var CreateMLModelInput;
(function (CreateMLModelInput) {
    /**
     * @internal
     */
    CreateMLModelInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMLModelInput || (CreateMLModelInput = {}));
export var CreateMLModelOutput;
(function (CreateMLModelOutput) {
    /**
     * @internal
     */
    CreateMLModelOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMLModelOutput || (CreateMLModelOutput = {}));
export var CreateRealtimeEndpointInput;
(function (CreateRealtimeEndpointInput) {
    /**
     * @internal
     */
    CreateRealtimeEndpointInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRealtimeEndpointInput || (CreateRealtimeEndpointInput = {}));
export var RealtimeEndpointStatus;
(function (RealtimeEndpointStatus) {
    RealtimeEndpointStatus["FAILED"] = "FAILED";
    RealtimeEndpointStatus["NONE"] = "NONE";
    RealtimeEndpointStatus["READY"] = "READY";
    RealtimeEndpointStatus["UPDATING"] = "UPDATING";
})(RealtimeEndpointStatus || (RealtimeEndpointStatus = {}));
export var RealtimeEndpointInfo;
(function (RealtimeEndpointInfo) {
    /**
     * @internal
     */
    RealtimeEndpointInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RealtimeEndpointInfo || (RealtimeEndpointInfo = {}));
export var CreateRealtimeEndpointOutput;
(function (CreateRealtimeEndpointOutput) {
    /**
     * @internal
     */
    CreateRealtimeEndpointOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRealtimeEndpointOutput || (CreateRealtimeEndpointOutput = {}));
export var DeleteBatchPredictionInput;
(function (DeleteBatchPredictionInput) {
    /**
     * @internal
     */
    DeleteBatchPredictionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBatchPredictionInput || (DeleteBatchPredictionInput = {}));
export var DeleteBatchPredictionOutput;
(function (DeleteBatchPredictionOutput) {
    /**
     * @internal
     */
    DeleteBatchPredictionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBatchPredictionOutput || (DeleteBatchPredictionOutput = {}));
export var DeleteDataSourceInput;
(function (DeleteDataSourceInput) {
    /**
     * @internal
     */
    DeleteDataSourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDataSourceInput || (DeleteDataSourceInput = {}));
export var DeleteDataSourceOutput;
(function (DeleteDataSourceOutput) {
    /**
     * @internal
     */
    DeleteDataSourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDataSourceOutput || (DeleteDataSourceOutput = {}));
export var DeleteEvaluationInput;
(function (DeleteEvaluationInput) {
    /**
     * @internal
     */
    DeleteEvaluationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEvaluationInput || (DeleteEvaluationInput = {}));
export var DeleteEvaluationOutput;
(function (DeleteEvaluationOutput) {
    /**
     * @internal
     */
    DeleteEvaluationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEvaluationOutput || (DeleteEvaluationOutput = {}));
export var DeleteMLModelInput;
(function (DeleteMLModelInput) {
    /**
     * @internal
     */
    DeleteMLModelInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMLModelInput || (DeleteMLModelInput = {}));
export var DeleteMLModelOutput;
(function (DeleteMLModelOutput) {
    /**
     * @internal
     */
    DeleteMLModelOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMLModelOutput || (DeleteMLModelOutput = {}));
export var DeleteRealtimeEndpointInput;
(function (DeleteRealtimeEndpointInput) {
    /**
     * @internal
     */
    DeleteRealtimeEndpointInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRealtimeEndpointInput || (DeleteRealtimeEndpointInput = {}));
export var DeleteRealtimeEndpointOutput;
(function (DeleteRealtimeEndpointOutput) {
    /**
     * @internal
     */
    DeleteRealtimeEndpointOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRealtimeEndpointOutput || (DeleteRealtimeEndpointOutput = {}));
export var DeleteTagsInput;
(function (DeleteTagsInput) {
    /**
     * @internal
     */
    DeleteTagsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTagsInput || (DeleteTagsInput = {}));
export var DeleteTagsOutput;
(function (DeleteTagsOutput) {
    /**
     * @internal
     */
    DeleteTagsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTagsOutput || (DeleteTagsOutput = {}));
export var BatchPredictionFilterVariable;
(function (BatchPredictionFilterVariable) {
    BatchPredictionFilterVariable["CREATED_AT"] = "CreatedAt";
    BatchPredictionFilterVariable["DATASOURCE_ID"] = "DataSourceId";
    BatchPredictionFilterVariable["DATA_URI"] = "DataURI";
    BatchPredictionFilterVariable["IAM_USER"] = "IAMUser";
    BatchPredictionFilterVariable["LAST_UPDATED_AT"] = "LastUpdatedAt";
    BatchPredictionFilterVariable["ML_MODEL_ID"] = "MLModelId";
    BatchPredictionFilterVariable["NAME"] = "Name";
    BatchPredictionFilterVariable["STATUS"] = "Status";
})(BatchPredictionFilterVariable || (BatchPredictionFilterVariable = {}));
export var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "asc";
    SortOrder["DSC"] = "dsc";
})(SortOrder || (SortOrder = {}));
export var DescribeBatchPredictionsInput;
(function (DescribeBatchPredictionsInput) {
    /**
     * @internal
     */
    DescribeBatchPredictionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBatchPredictionsInput || (DescribeBatchPredictionsInput = {}));
export var EntityStatus;
(function (EntityStatus) {
    EntityStatus["COMPLETED"] = "COMPLETED";
    EntityStatus["DELETED"] = "DELETED";
    EntityStatus["FAILED"] = "FAILED";
    EntityStatus["INPROGRESS"] = "INPROGRESS";
    EntityStatus["PENDING"] = "PENDING";
})(EntityStatus || (EntityStatus = {}));
export var BatchPrediction;
(function (BatchPrediction) {
    /**
     * @internal
     */
    BatchPrediction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchPrediction || (BatchPrediction = {}));
export var DescribeBatchPredictionsOutput;
(function (DescribeBatchPredictionsOutput) {
    /**
     * @internal
     */
    DescribeBatchPredictionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBatchPredictionsOutput || (DescribeBatchPredictionsOutput = {}));
export var DataSourceFilterVariable;
(function (DataSourceFilterVariable) {
    DataSourceFilterVariable["CREATED_AT"] = "CreatedAt";
    DataSourceFilterVariable["DATA_URI"] = "DataLocationS3";
    DataSourceFilterVariable["IAM_USER"] = "IAMUser";
    DataSourceFilterVariable["LAST_UPDATED_AT"] = "LastUpdatedAt";
    DataSourceFilterVariable["NAME"] = "Name";
    DataSourceFilterVariable["STATUS"] = "Status";
})(DataSourceFilterVariable || (DataSourceFilterVariable = {}));
export var DescribeDataSourcesInput;
(function (DescribeDataSourcesInput) {
    /**
     * @internal
     */
    DescribeDataSourcesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDataSourcesInput || (DescribeDataSourcesInput = {}));
export var RDSMetadata;
(function (RDSMetadata) {
    /**
     * @internal
     */
    RDSMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RDSMetadata || (RDSMetadata = {}));
export var RedshiftMetadata;
(function (RedshiftMetadata) {
    /**
     * @internal
     */
    RedshiftMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RedshiftMetadata || (RedshiftMetadata = {}));
export var DataSource;
(function (DataSource) {
    /**
     * @internal
     */
    DataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSource || (DataSource = {}));
export var DescribeDataSourcesOutput;
(function (DescribeDataSourcesOutput) {
    /**
     * @internal
     */
    DescribeDataSourcesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDataSourcesOutput || (DescribeDataSourcesOutput = {}));
export var EvaluationFilterVariable;
(function (EvaluationFilterVariable) {
    EvaluationFilterVariable["CREATED_AT"] = "CreatedAt";
    EvaluationFilterVariable["DATASOURCE_ID"] = "DataSourceId";
    EvaluationFilterVariable["DATA_URI"] = "DataURI";
    EvaluationFilterVariable["IAM_USER"] = "IAMUser";
    EvaluationFilterVariable["LAST_UPDATED_AT"] = "LastUpdatedAt";
    EvaluationFilterVariable["ML_MODEL_ID"] = "MLModelId";
    EvaluationFilterVariable["NAME"] = "Name";
    EvaluationFilterVariable["STATUS"] = "Status";
})(EvaluationFilterVariable || (EvaluationFilterVariable = {}));
export var DescribeEvaluationsInput;
(function (DescribeEvaluationsInput) {
    /**
     * @internal
     */
    DescribeEvaluationsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEvaluationsInput || (DescribeEvaluationsInput = {}));
export var PerformanceMetrics;
(function (PerformanceMetrics) {
    /**
     * @internal
     */
    PerformanceMetrics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PerformanceMetrics || (PerformanceMetrics = {}));
export var Evaluation;
(function (Evaluation) {
    /**
     * @internal
     */
    Evaluation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Evaluation || (Evaluation = {}));
export var DescribeEvaluationsOutput;
(function (DescribeEvaluationsOutput) {
    /**
     * @internal
     */
    DescribeEvaluationsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEvaluationsOutput || (DescribeEvaluationsOutput = {}));
export var MLModelFilterVariable;
(function (MLModelFilterVariable) {
    MLModelFilterVariable["ALGORITHM"] = "Algorithm";
    MLModelFilterVariable["CREATED_AT"] = "CreatedAt";
    MLModelFilterVariable["IAM_USER"] = "IAMUser";
    MLModelFilterVariable["LAST_UPDATED_AT"] = "LastUpdatedAt";
    MLModelFilterVariable["ML_MODEL_TYPE"] = "MLModelType";
    MLModelFilterVariable["NAME"] = "Name";
    MLModelFilterVariable["REAL_TIME_ENDPOINT_STATUS"] = "RealtimeEndpointStatus";
    MLModelFilterVariable["STATUS"] = "Status";
    MLModelFilterVariable["TRAINING_DATASOURCE_ID"] = "TrainingDataSourceId";
    MLModelFilterVariable["TRAINING_DATA_URI"] = "TrainingDataURI";
})(MLModelFilterVariable || (MLModelFilterVariable = {}));
export var DescribeMLModelsInput;
(function (DescribeMLModelsInput) {
    /**
     * @internal
     */
    DescribeMLModelsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMLModelsInput || (DescribeMLModelsInput = {}));
export var MLModel;
(function (MLModel) {
    /**
     * @internal
     */
    MLModel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MLModel || (MLModel = {}));
export var DescribeMLModelsOutput;
(function (DescribeMLModelsOutput) {
    /**
     * @internal
     */
    DescribeMLModelsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMLModelsOutput || (DescribeMLModelsOutput = {}));
export var DescribeTagsInput;
(function (DescribeTagsInput) {
    /**
     * @internal
     */
    DescribeTagsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTagsInput || (DescribeTagsInput = {}));
export var DescribeTagsOutput;
(function (DescribeTagsOutput) {
    /**
     * @internal
     */
    DescribeTagsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTagsOutput || (DescribeTagsOutput = {}));
export var GetBatchPredictionInput;
(function (GetBatchPredictionInput) {
    /**
     * @internal
     */
    GetBatchPredictionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBatchPredictionInput || (GetBatchPredictionInput = {}));
export var GetBatchPredictionOutput;
(function (GetBatchPredictionOutput) {
    /**
     * @internal
     */
    GetBatchPredictionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBatchPredictionOutput || (GetBatchPredictionOutput = {}));
export var GetDataSourceInput;
(function (GetDataSourceInput) {
    /**
     * @internal
     */
    GetDataSourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDataSourceInput || (GetDataSourceInput = {}));
export var GetDataSourceOutput;
(function (GetDataSourceOutput) {
    /**
     * @internal
     */
    GetDataSourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDataSourceOutput || (GetDataSourceOutput = {}));
export var GetEvaluationInput;
(function (GetEvaluationInput) {
    /**
     * @internal
     */
    GetEvaluationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEvaluationInput || (GetEvaluationInput = {}));
export var GetEvaluationOutput;
(function (GetEvaluationOutput) {
    /**
     * @internal
     */
    GetEvaluationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEvaluationOutput || (GetEvaluationOutput = {}));
export var GetMLModelInput;
(function (GetMLModelInput) {
    /**
     * @internal
     */
    GetMLModelInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMLModelInput || (GetMLModelInput = {}));
export var GetMLModelOutput;
(function (GetMLModelOutput) {
    /**
     * @internal
     */
    GetMLModelOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMLModelOutput || (GetMLModelOutput = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var PredictInput;
(function (PredictInput) {
    /**
     * @internal
     */
    PredictInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PredictInput || (PredictInput = {}));
export var PredictorNotMountedException;
(function (PredictorNotMountedException) {
    /**
     * @internal
     */
    PredictorNotMountedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PredictorNotMountedException || (PredictorNotMountedException = {}));
export var DetailsAttributes;
(function (DetailsAttributes) {
    DetailsAttributes["ALGORITHM"] = "Algorithm";
    DetailsAttributes["PREDICTIVE_MODEL_TYPE"] = "PredictiveModelType";
})(DetailsAttributes || (DetailsAttributes = {}));
export var Prediction;
(function (Prediction) {
    /**
     * @internal
     */
    Prediction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Prediction || (Prediction = {}));
export var PredictOutput;
(function (PredictOutput) {
    /**
     * @internal
     */
    PredictOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PredictOutput || (PredictOutput = {}));
export var UpdateBatchPredictionInput;
(function (UpdateBatchPredictionInput) {
    /**
     * @internal
     */
    UpdateBatchPredictionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBatchPredictionInput || (UpdateBatchPredictionInput = {}));
export var UpdateBatchPredictionOutput;
(function (UpdateBatchPredictionOutput) {
    /**
     * @internal
     */
    UpdateBatchPredictionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBatchPredictionOutput || (UpdateBatchPredictionOutput = {}));
export var UpdateDataSourceInput;
(function (UpdateDataSourceInput) {
    /**
     * @internal
     */
    UpdateDataSourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDataSourceInput || (UpdateDataSourceInput = {}));
export var UpdateDataSourceOutput;
(function (UpdateDataSourceOutput) {
    /**
     * @internal
     */
    UpdateDataSourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDataSourceOutput || (UpdateDataSourceOutput = {}));
export var UpdateEvaluationInput;
(function (UpdateEvaluationInput) {
    /**
     * @internal
     */
    UpdateEvaluationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateEvaluationInput || (UpdateEvaluationInput = {}));
export var UpdateEvaluationOutput;
(function (UpdateEvaluationOutput) {
    /**
     * @internal
     */
    UpdateEvaluationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateEvaluationOutput || (UpdateEvaluationOutput = {}));
export var UpdateMLModelInput;
(function (UpdateMLModelInput) {
    /**
     * @internal
     */
    UpdateMLModelInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMLModelInput || (UpdateMLModelInput = {}));
export var UpdateMLModelOutput;
(function (UpdateMLModelOutput) {
    /**
     * @internal
     */
    UpdateMLModelOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMLModelOutput || (UpdateMLModelOutput = {}));
//# sourceMappingURL=models_0.js.map