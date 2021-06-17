"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeBatchPredictionsInput = exports.SortOrder = exports.BatchPredictionFilterVariable = exports.DeleteTagsOutput = exports.DeleteTagsInput = exports.DeleteRealtimeEndpointOutput = exports.DeleteRealtimeEndpointInput = exports.DeleteMLModelOutput = exports.DeleteMLModelInput = exports.DeleteEvaluationOutput = exports.DeleteEvaluationInput = exports.DeleteDataSourceOutput = exports.DeleteDataSourceInput = exports.DeleteBatchPredictionOutput = exports.DeleteBatchPredictionInput = exports.CreateRealtimeEndpointOutput = exports.RealtimeEndpointInfo = exports.RealtimeEndpointStatus = exports.CreateRealtimeEndpointInput = exports.CreateMLModelOutput = exports.CreateMLModelInput = exports.MLModelType = exports.CreateEvaluationOutput = exports.CreateEvaluationInput = exports.CreateDataSourceFromS3Output = exports.CreateDataSourceFromS3Input = exports.S3DataSpec = exports.CreateDataSourceFromRedshiftOutput = exports.CreateDataSourceFromRedshiftInput = exports.RedshiftDataSpec = exports.RedshiftDatabase = exports.RedshiftDatabaseCredentials = exports.CreateDataSourceFromRDSOutput = exports.CreateDataSourceFromRDSInput = exports.RDSDataSpec = exports.RDSDatabase = exports.RDSDatabaseCredentials = exports.IdempotentParameterMismatchException = exports.CreateBatchPredictionOutput = exports.CreateBatchPredictionInput = exports.Algorithm = exports.TagLimitExceededException = exports.ResourceNotFoundException = exports.InvalidTagException = exports.InvalidInputException = exports.InternalServerException = exports.AddTagsOutput = exports.AddTagsInput = exports.Tag = exports.TaggableResourceType = void 0;
exports.UpdateMLModelOutput = exports.UpdateMLModelInput = exports.UpdateEvaluationOutput = exports.UpdateEvaluationInput = exports.UpdateDataSourceOutput = exports.UpdateDataSourceInput = exports.UpdateBatchPredictionOutput = exports.UpdateBatchPredictionInput = exports.PredictOutput = exports.Prediction = exports.DetailsAttributes = exports.PredictorNotMountedException = exports.PredictInput = exports.LimitExceededException = exports.GetMLModelOutput = exports.GetMLModelInput = exports.GetEvaluationOutput = exports.GetEvaluationInput = exports.GetDataSourceOutput = exports.GetDataSourceInput = exports.GetBatchPredictionOutput = exports.GetBatchPredictionInput = exports.DescribeTagsOutput = exports.DescribeTagsInput = exports.DescribeMLModelsOutput = exports.MLModel = exports.DescribeMLModelsInput = exports.MLModelFilterVariable = exports.DescribeEvaluationsOutput = exports.Evaluation = exports.PerformanceMetrics = exports.DescribeEvaluationsInput = exports.EvaluationFilterVariable = exports.DescribeDataSourcesOutput = exports.DataSource = exports.RedshiftMetadata = exports.RDSMetadata = exports.DescribeDataSourcesInput = exports.DataSourceFilterVariable = exports.DescribeBatchPredictionsOutput = exports.BatchPrediction = exports.EntityStatus = void 0;
var TaggableResourceType;
(function (TaggableResourceType) {
    TaggableResourceType["BATCH_PREDICTION"] = "BatchPrediction";
    TaggableResourceType["DATASOURCE"] = "DataSource";
    TaggableResourceType["EVALUATION"] = "Evaluation";
    TaggableResourceType["ML_MODEL"] = "MLModel";
})(TaggableResourceType = exports.TaggableResourceType || (exports.TaggableResourceType = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AddTagsInput;
(function (AddTagsInput) {
    /**
     * @internal
     */
    AddTagsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsInput = exports.AddTagsInput || (exports.AddTagsInput = {}));
var AddTagsOutput;
(function (AddTagsOutput) {
    /**
     * @internal
     */
    AddTagsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsOutput = exports.AddTagsOutput || (exports.AddTagsOutput = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var InvalidTagException;
(function (InvalidTagException) {
    /**
     * @internal
     */
    InvalidTagException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTagException = exports.InvalidTagException || (exports.InvalidTagException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var TagLimitExceededException;
(function (TagLimitExceededException) {
    /**
     * @internal
     */
    TagLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagLimitExceededException = exports.TagLimitExceededException || (exports.TagLimitExceededException = {}));
var Algorithm;
(function (Algorithm) {
    Algorithm["SGD"] = "sgd";
})(Algorithm = exports.Algorithm || (exports.Algorithm = {}));
var CreateBatchPredictionInput;
(function (CreateBatchPredictionInput) {
    /**
     * @internal
     */
    CreateBatchPredictionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBatchPredictionInput = exports.CreateBatchPredictionInput || (exports.CreateBatchPredictionInput = {}));
var CreateBatchPredictionOutput;
(function (CreateBatchPredictionOutput) {
    /**
     * @internal
     */
    CreateBatchPredictionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBatchPredictionOutput = exports.CreateBatchPredictionOutput || (exports.CreateBatchPredictionOutput = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var RDSDatabaseCredentials;
(function (RDSDatabaseCredentials) {
    /**
     * @internal
     */
    RDSDatabaseCredentials.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RDSDatabaseCredentials = exports.RDSDatabaseCredentials || (exports.RDSDatabaseCredentials = {}));
var RDSDatabase;
(function (RDSDatabase) {
    /**
     * @internal
     */
    RDSDatabase.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RDSDatabase = exports.RDSDatabase || (exports.RDSDatabase = {}));
var RDSDataSpec;
(function (RDSDataSpec) {
    /**
     * @internal
     */
    RDSDataSpec.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RDSDataSpec = exports.RDSDataSpec || (exports.RDSDataSpec = {}));
var CreateDataSourceFromRDSInput;
(function (CreateDataSourceFromRDSInput) {
    /**
     * @internal
     */
    CreateDataSourceFromRDSInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataSourceFromRDSInput = exports.CreateDataSourceFromRDSInput || (exports.CreateDataSourceFromRDSInput = {}));
var CreateDataSourceFromRDSOutput;
(function (CreateDataSourceFromRDSOutput) {
    /**
     * @internal
     */
    CreateDataSourceFromRDSOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataSourceFromRDSOutput = exports.CreateDataSourceFromRDSOutput || (exports.CreateDataSourceFromRDSOutput = {}));
var RedshiftDatabaseCredentials;
(function (RedshiftDatabaseCredentials) {
    /**
     * @internal
     */
    RedshiftDatabaseCredentials.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RedshiftDatabaseCredentials = exports.RedshiftDatabaseCredentials || (exports.RedshiftDatabaseCredentials = {}));
var RedshiftDatabase;
(function (RedshiftDatabase) {
    /**
     * @internal
     */
    RedshiftDatabase.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RedshiftDatabase = exports.RedshiftDatabase || (exports.RedshiftDatabase = {}));
var RedshiftDataSpec;
(function (RedshiftDataSpec) {
    /**
     * @internal
     */
    RedshiftDataSpec.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RedshiftDataSpec = exports.RedshiftDataSpec || (exports.RedshiftDataSpec = {}));
var CreateDataSourceFromRedshiftInput;
(function (CreateDataSourceFromRedshiftInput) {
    /**
     * @internal
     */
    CreateDataSourceFromRedshiftInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataSourceFromRedshiftInput = exports.CreateDataSourceFromRedshiftInput || (exports.CreateDataSourceFromRedshiftInput = {}));
var CreateDataSourceFromRedshiftOutput;
(function (CreateDataSourceFromRedshiftOutput) {
    /**
     * @internal
     */
    CreateDataSourceFromRedshiftOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataSourceFromRedshiftOutput = exports.CreateDataSourceFromRedshiftOutput || (exports.CreateDataSourceFromRedshiftOutput = {}));
var S3DataSpec;
(function (S3DataSpec) {
    /**
     * @internal
     */
    S3DataSpec.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3DataSpec = exports.S3DataSpec || (exports.S3DataSpec = {}));
var CreateDataSourceFromS3Input;
(function (CreateDataSourceFromS3Input) {
    /**
     * @internal
     */
    CreateDataSourceFromS3Input.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataSourceFromS3Input = exports.CreateDataSourceFromS3Input || (exports.CreateDataSourceFromS3Input = {}));
var CreateDataSourceFromS3Output;
(function (CreateDataSourceFromS3Output) {
    /**
     * @internal
     */
    CreateDataSourceFromS3Output.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataSourceFromS3Output = exports.CreateDataSourceFromS3Output || (exports.CreateDataSourceFromS3Output = {}));
var CreateEvaluationInput;
(function (CreateEvaluationInput) {
    /**
     * @internal
     */
    CreateEvaluationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEvaluationInput = exports.CreateEvaluationInput || (exports.CreateEvaluationInput = {}));
var CreateEvaluationOutput;
(function (CreateEvaluationOutput) {
    /**
     * @internal
     */
    CreateEvaluationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEvaluationOutput = exports.CreateEvaluationOutput || (exports.CreateEvaluationOutput = {}));
var MLModelType;
(function (MLModelType) {
    MLModelType["BINARY"] = "BINARY";
    MLModelType["MULTICLASS"] = "MULTICLASS";
    MLModelType["REGRESSION"] = "REGRESSION";
})(MLModelType = exports.MLModelType || (exports.MLModelType = {}));
var CreateMLModelInput;
(function (CreateMLModelInput) {
    /**
     * @internal
     */
    CreateMLModelInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMLModelInput = exports.CreateMLModelInput || (exports.CreateMLModelInput = {}));
var CreateMLModelOutput;
(function (CreateMLModelOutput) {
    /**
     * @internal
     */
    CreateMLModelOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMLModelOutput = exports.CreateMLModelOutput || (exports.CreateMLModelOutput = {}));
var CreateRealtimeEndpointInput;
(function (CreateRealtimeEndpointInput) {
    /**
     * @internal
     */
    CreateRealtimeEndpointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRealtimeEndpointInput = exports.CreateRealtimeEndpointInput || (exports.CreateRealtimeEndpointInput = {}));
var RealtimeEndpointStatus;
(function (RealtimeEndpointStatus) {
    RealtimeEndpointStatus["FAILED"] = "FAILED";
    RealtimeEndpointStatus["NONE"] = "NONE";
    RealtimeEndpointStatus["READY"] = "READY";
    RealtimeEndpointStatus["UPDATING"] = "UPDATING";
})(RealtimeEndpointStatus = exports.RealtimeEndpointStatus || (exports.RealtimeEndpointStatus = {}));
var RealtimeEndpointInfo;
(function (RealtimeEndpointInfo) {
    /**
     * @internal
     */
    RealtimeEndpointInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RealtimeEndpointInfo = exports.RealtimeEndpointInfo || (exports.RealtimeEndpointInfo = {}));
var CreateRealtimeEndpointOutput;
(function (CreateRealtimeEndpointOutput) {
    /**
     * @internal
     */
    CreateRealtimeEndpointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRealtimeEndpointOutput = exports.CreateRealtimeEndpointOutput || (exports.CreateRealtimeEndpointOutput = {}));
var DeleteBatchPredictionInput;
(function (DeleteBatchPredictionInput) {
    /**
     * @internal
     */
    DeleteBatchPredictionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBatchPredictionInput = exports.DeleteBatchPredictionInput || (exports.DeleteBatchPredictionInput = {}));
var DeleteBatchPredictionOutput;
(function (DeleteBatchPredictionOutput) {
    /**
     * @internal
     */
    DeleteBatchPredictionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBatchPredictionOutput = exports.DeleteBatchPredictionOutput || (exports.DeleteBatchPredictionOutput = {}));
var DeleteDataSourceInput;
(function (DeleteDataSourceInput) {
    /**
     * @internal
     */
    DeleteDataSourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDataSourceInput = exports.DeleteDataSourceInput || (exports.DeleteDataSourceInput = {}));
var DeleteDataSourceOutput;
(function (DeleteDataSourceOutput) {
    /**
     * @internal
     */
    DeleteDataSourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDataSourceOutput = exports.DeleteDataSourceOutput || (exports.DeleteDataSourceOutput = {}));
var DeleteEvaluationInput;
(function (DeleteEvaluationInput) {
    /**
     * @internal
     */
    DeleteEvaluationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEvaluationInput = exports.DeleteEvaluationInput || (exports.DeleteEvaluationInput = {}));
var DeleteEvaluationOutput;
(function (DeleteEvaluationOutput) {
    /**
     * @internal
     */
    DeleteEvaluationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEvaluationOutput = exports.DeleteEvaluationOutput || (exports.DeleteEvaluationOutput = {}));
var DeleteMLModelInput;
(function (DeleteMLModelInput) {
    /**
     * @internal
     */
    DeleteMLModelInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMLModelInput = exports.DeleteMLModelInput || (exports.DeleteMLModelInput = {}));
var DeleteMLModelOutput;
(function (DeleteMLModelOutput) {
    /**
     * @internal
     */
    DeleteMLModelOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMLModelOutput = exports.DeleteMLModelOutput || (exports.DeleteMLModelOutput = {}));
var DeleteRealtimeEndpointInput;
(function (DeleteRealtimeEndpointInput) {
    /**
     * @internal
     */
    DeleteRealtimeEndpointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRealtimeEndpointInput = exports.DeleteRealtimeEndpointInput || (exports.DeleteRealtimeEndpointInput = {}));
var DeleteRealtimeEndpointOutput;
(function (DeleteRealtimeEndpointOutput) {
    /**
     * @internal
     */
    DeleteRealtimeEndpointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRealtimeEndpointOutput = exports.DeleteRealtimeEndpointOutput || (exports.DeleteRealtimeEndpointOutput = {}));
var DeleteTagsInput;
(function (DeleteTagsInput) {
    /**
     * @internal
     */
    DeleteTagsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsInput = exports.DeleteTagsInput || (exports.DeleteTagsInput = {}));
var DeleteTagsOutput;
(function (DeleteTagsOutput) {
    /**
     * @internal
     */
    DeleteTagsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsOutput = exports.DeleteTagsOutput || (exports.DeleteTagsOutput = {}));
var BatchPredictionFilterVariable;
(function (BatchPredictionFilterVariable) {
    BatchPredictionFilterVariable["CREATED_AT"] = "CreatedAt";
    BatchPredictionFilterVariable["DATASOURCE_ID"] = "DataSourceId";
    BatchPredictionFilterVariable["DATA_URI"] = "DataURI";
    BatchPredictionFilterVariable["IAM_USER"] = "IAMUser";
    BatchPredictionFilterVariable["LAST_UPDATED_AT"] = "LastUpdatedAt";
    BatchPredictionFilterVariable["ML_MODEL_ID"] = "MLModelId";
    BatchPredictionFilterVariable["NAME"] = "Name";
    BatchPredictionFilterVariable["STATUS"] = "Status";
})(BatchPredictionFilterVariable = exports.BatchPredictionFilterVariable || (exports.BatchPredictionFilterVariable = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "asc";
    SortOrder["DSC"] = "dsc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var DescribeBatchPredictionsInput;
(function (DescribeBatchPredictionsInput) {
    /**
     * @internal
     */
    DescribeBatchPredictionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBatchPredictionsInput = exports.DescribeBatchPredictionsInput || (exports.DescribeBatchPredictionsInput = {}));
var EntityStatus;
(function (EntityStatus) {
    EntityStatus["COMPLETED"] = "COMPLETED";
    EntityStatus["DELETED"] = "DELETED";
    EntityStatus["FAILED"] = "FAILED";
    EntityStatus["INPROGRESS"] = "INPROGRESS";
    EntityStatus["PENDING"] = "PENDING";
})(EntityStatus = exports.EntityStatus || (exports.EntityStatus = {}));
var BatchPrediction;
(function (BatchPrediction) {
    /**
     * @internal
     */
    BatchPrediction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPrediction = exports.BatchPrediction || (exports.BatchPrediction = {}));
var DescribeBatchPredictionsOutput;
(function (DescribeBatchPredictionsOutput) {
    /**
     * @internal
     */
    DescribeBatchPredictionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBatchPredictionsOutput = exports.DescribeBatchPredictionsOutput || (exports.DescribeBatchPredictionsOutput = {}));
var DataSourceFilterVariable;
(function (DataSourceFilterVariable) {
    DataSourceFilterVariable["CREATED_AT"] = "CreatedAt";
    DataSourceFilterVariable["DATA_URI"] = "DataLocationS3";
    DataSourceFilterVariable["IAM_USER"] = "IAMUser";
    DataSourceFilterVariable["LAST_UPDATED_AT"] = "LastUpdatedAt";
    DataSourceFilterVariable["NAME"] = "Name";
    DataSourceFilterVariable["STATUS"] = "Status";
})(DataSourceFilterVariable = exports.DataSourceFilterVariable || (exports.DataSourceFilterVariable = {}));
var DescribeDataSourcesInput;
(function (DescribeDataSourcesInput) {
    /**
     * @internal
     */
    DescribeDataSourcesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataSourcesInput = exports.DescribeDataSourcesInput || (exports.DescribeDataSourcesInput = {}));
var RDSMetadata;
(function (RDSMetadata) {
    /**
     * @internal
     */
    RDSMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RDSMetadata = exports.RDSMetadata || (exports.RDSMetadata = {}));
var RedshiftMetadata;
(function (RedshiftMetadata) {
    /**
     * @internal
     */
    RedshiftMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RedshiftMetadata = exports.RedshiftMetadata || (exports.RedshiftMetadata = {}));
var DataSource;
(function (DataSource) {
    /**
     * @internal
     */
    DataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var DescribeDataSourcesOutput;
(function (DescribeDataSourcesOutput) {
    /**
     * @internal
     */
    DescribeDataSourcesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataSourcesOutput = exports.DescribeDataSourcesOutput || (exports.DescribeDataSourcesOutput = {}));
var EvaluationFilterVariable;
(function (EvaluationFilterVariable) {
    EvaluationFilterVariable["CREATED_AT"] = "CreatedAt";
    EvaluationFilterVariable["DATASOURCE_ID"] = "DataSourceId";
    EvaluationFilterVariable["DATA_URI"] = "DataURI";
    EvaluationFilterVariable["IAM_USER"] = "IAMUser";
    EvaluationFilterVariable["LAST_UPDATED_AT"] = "LastUpdatedAt";
    EvaluationFilterVariable["ML_MODEL_ID"] = "MLModelId";
    EvaluationFilterVariable["NAME"] = "Name";
    EvaluationFilterVariable["STATUS"] = "Status";
})(EvaluationFilterVariable = exports.EvaluationFilterVariable || (exports.EvaluationFilterVariable = {}));
var DescribeEvaluationsInput;
(function (DescribeEvaluationsInput) {
    /**
     * @internal
     */
    DescribeEvaluationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEvaluationsInput = exports.DescribeEvaluationsInput || (exports.DescribeEvaluationsInput = {}));
var PerformanceMetrics;
(function (PerformanceMetrics) {
    /**
     * @internal
     */
    PerformanceMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PerformanceMetrics = exports.PerformanceMetrics || (exports.PerformanceMetrics = {}));
var Evaluation;
(function (Evaluation) {
    /**
     * @internal
     */
    Evaluation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Evaluation = exports.Evaluation || (exports.Evaluation = {}));
var DescribeEvaluationsOutput;
(function (DescribeEvaluationsOutput) {
    /**
     * @internal
     */
    DescribeEvaluationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEvaluationsOutput = exports.DescribeEvaluationsOutput || (exports.DescribeEvaluationsOutput = {}));
var MLModelFilterVariable;
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
})(MLModelFilterVariable = exports.MLModelFilterVariable || (exports.MLModelFilterVariable = {}));
var DescribeMLModelsInput;
(function (DescribeMLModelsInput) {
    /**
     * @internal
     */
    DescribeMLModelsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMLModelsInput = exports.DescribeMLModelsInput || (exports.DescribeMLModelsInput = {}));
var MLModel;
(function (MLModel) {
    /**
     * @internal
     */
    MLModel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MLModel = exports.MLModel || (exports.MLModel = {}));
var DescribeMLModelsOutput;
(function (DescribeMLModelsOutput) {
    /**
     * @internal
     */
    DescribeMLModelsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMLModelsOutput = exports.DescribeMLModelsOutput || (exports.DescribeMLModelsOutput = {}));
var DescribeTagsInput;
(function (DescribeTagsInput) {
    /**
     * @internal
     */
    DescribeTagsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagsInput = exports.DescribeTagsInput || (exports.DescribeTagsInput = {}));
var DescribeTagsOutput;
(function (DescribeTagsOutput) {
    /**
     * @internal
     */
    DescribeTagsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagsOutput = exports.DescribeTagsOutput || (exports.DescribeTagsOutput = {}));
var GetBatchPredictionInput;
(function (GetBatchPredictionInput) {
    /**
     * @internal
     */
    GetBatchPredictionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBatchPredictionInput = exports.GetBatchPredictionInput || (exports.GetBatchPredictionInput = {}));
var GetBatchPredictionOutput;
(function (GetBatchPredictionOutput) {
    /**
     * @internal
     */
    GetBatchPredictionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBatchPredictionOutput = exports.GetBatchPredictionOutput || (exports.GetBatchPredictionOutput = {}));
var GetDataSourceInput;
(function (GetDataSourceInput) {
    /**
     * @internal
     */
    GetDataSourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataSourceInput = exports.GetDataSourceInput || (exports.GetDataSourceInput = {}));
var GetDataSourceOutput;
(function (GetDataSourceOutput) {
    /**
     * @internal
     */
    GetDataSourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataSourceOutput = exports.GetDataSourceOutput || (exports.GetDataSourceOutput = {}));
var GetEvaluationInput;
(function (GetEvaluationInput) {
    /**
     * @internal
     */
    GetEvaluationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEvaluationInput = exports.GetEvaluationInput || (exports.GetEvaluationInput = {}));
var GetEvaluationOutput;
(function (GetEvaluationOutput) {
    /**
     * @internal
     */
    GetEvaluationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEvaluationOutput = exports.GetEvaluationOutput || (exports.GetEvaluationOutput = {}));
var GetMLModelInput;
(function (GetMLModelInput) {
    /**
     * @internal
     */
    GetMLModelInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMLModelInput = exports.GetMLModelInput || (exports.GetMLModelInput = {}));
var GetMLModelOutput;
(function (GetMLModelOutput) {
    /**
     * @internal
     */
    GetMLModelOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMLModelOutput = exports.GetMLModelOutput || (exports.GetMLModelOutput = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var PredictInput;
(function (PredictInput) {
    /**
     * @internal
     */
    PredictInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PredictInput = exports.PredictInput || (exports.PredictInput = {}));
var PredictorNotMountedException;
(function (PredictorNotMountedException) {
    /**
     * @internal
     */
    PredictorNotMountedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PredictorNotMountedException = exports.PredictorNotMountedException || (exports.PredictorNotMountedException = {}));
var DetailsAttributes;
(function (DetailsAttributes) {
    DetailsAttributes["ALGORITHM"] = "Algorithm";
    DetailsAttributes["PREDICTIVE_MODEL_TYPE"] = "PredictiveModelType";
})(DetailsAttributes = exports.DetailsAttributes || (exports.DetailsAttributes = {}));
var Prediction;
(function (Prediction) {
    /**
     * @internal
     */
    Prediction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Prediction = exports.Prediction || (exports.Prediction = {}));
var PredictOutput;
(function (PredictOutput) {
    /**
     * @internal
     */
    PredictOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PredictOutput = exports.PredictOutput || (exports.PredictOutput = {}));
var UpdateBatchPredictionInput;
(function (UpdateBatchPredictionInput) {
    /**
     * @internal
     */
    UpdateBatchPredictionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBatchPredictionInput = exports.UpdateBatchPredictionInput || (exports.UpdateBatchPredictionInput = {}));
var UpdateBatchPredictionOutput;
(function (UpdateBatchPredictionOutput) {
    /**
     * @internal
     */
    UpdateBatchPredictionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBatchPredictionOutput = exports.UpdateBatchPredictionOutput || (exports.UpdateBatchPredictionOutput = {}));
var UpdateDataSourceInput;
(function (UpdateDataSourceInput) {
    /**
     * @internal
     */
    UpdateDataSourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataSourceInput = exports.UpdateDataSourceInput || (exports.UpdateDataSourceInput = {}));
var UpdateDataSourceOutput;
(function (UpdateDataSourceOutput) {
    /**
     * @internal
     */
    UpdateDataSourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataSourceOutput = exports.UpdateDataSourceOutput || (exports.UpdateDataSourceOutput = {}));
var UpdateEvaluationInput;
(function (UpdateEvaluationInput) {
    /**
     * @internal
     */
    UpdateEvaluationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEvaluationInput = exports.UpdateEvaluationInput || (exports.UpdateEvaluationInput = {}));
var UpdateEvaluationOutput;
(function (UpdateEvaluationOutput) {
    /**
     * @internal
     */
    UpdateEvaluationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEvaluationOutput = exports.UpdateEvaluationOutput || (exports.UpdateEvaluationOutput = {}));
var UpdateMLModelInput;
(function (UpdateMLModelInput) {
    /**
     * @internal
     */
    UpdateMLModelInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMLModelInput = exports.UpdateMLModelInput || (exports.UpdateMLModelInput = {}));
var UpdateMLModelOutput;
(function (UpdateMLModelOutput) {
    /**
     * @internal
     */
    UpdateMLModelOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMLModelOutput = exports.UpdateMLModelOutput || (exports.UpdateMLModelOutput = {}));
//# sourceMappingURL=models_0.js.map