"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEntityTypeResult = exports.DeleteEntityTypeRequest = exports.DeleteDetectorVersionResult = exports.DeleteDetectorVersionRequest = exports.DeleteDetectorResult = exports.DeleteDetectorRequest = exports.ConflictException = exports.DeleteBatchPredictionJobResult = exports.DeleteBatchPredictionJobRequest = exports.CreateVariableResult = exports.CreateVariableRequest = exports.CreateRuleResult = exports.CreateRuleRequest = exports.Language = exports.CreateModelVersionResult = exports.CreateModelVersionRequest = exports.TrainingDataSourceEnum = exports.TrainingDataSchema = exports.LabelSchema = exports.ExternalEventsDetail = exports.CreateModelResult = exports.CreateModelRequest = exports.CreateDetectorVersionResult = exports.DetectorVersionStatus = exports.CreateDetectorVersionRequest = exports.Rule = exports.RuleExecutionMode = exports.ModelVersion = exports.ModelTypeEnum = exports.CreateBatchPredictionJobResult = exports.CreateBatchPredictionJobRequest = exports.ResourceNotFoundException = exports.CancelBatchPredictionJobResult = exports.CancelBatchPredictionJobRequest = exports.BatchGetVariableResult = exports.Variable = exports.DataType = exports.DataSource = exports.BatchGetVariableError = exports.BatchGetVariableRequest = exports.ValidationException = exports.ThrottlingException = exports.InternalServerException = exports.BatchCreateVariableResult = exports.BatchCreateVariableError = exports.BatchCreateVariableRequest = exports.VariableEntry = exports.Tag = exports.AsyncJobStatus = exports.AccessDeniedException = void 0;
exports.GetEventTypesResult = exports.EventType = exports.GetEventTypesRequest = exports.GetEventPredictionResult = exports.RuleResult = exports.ModelScores = exports.GetEventPredictionRequest = exports.ModelEndpointDataBlob = exports.Entity = exports.GetEntityTypesResult = exports.EntityType = exports.GetEntityTypesRequest = exports.GetDetectorVersionResult = exports.GetDetectorVersionRequest = exports.GetDetectorsResult = exports.Detector = exports.GetDetectorsRequest = exports.GetBatchPredictionJobsResult = exports.BatchPrediction = exports.GetBatchPredictionJobsRequest = exports.DescribeModelVersionsResult = exports.ModelVersionDetail = exports.TrainingResult = exports.TrainingMetrics = exports.MetricDataPoint = exports.DataValidationMetrics = exports.FileValidationMessage = exports.FieldValidationMessage = exports.DescribeModelVersionsRequest = exports.DescribeDetectorResult = exports.DetectorVersionSummary = exports.DescribeDetectorRequest = exports.DeleteVariableResult = exports.DeleteVariableRequest = exports.DeleteRuleResult = exports.DeleteRuleRequest = exports.DeleteOutcomeResult = exports.DeleteOutcomeRequest = exports.DeleteModelVersionResult = exports.DeleteModelVersionRequest = exports.DeleteModelResult = exports.DeleteModelRequest = exports.DeleteLabelResult = exports.DeleteLabelRequest = exports.DeleteExternalModelResult = exports.DeleteExternalModelRequest = exports.DeleteEventTypeResult = exports.DeleteEventTypeRequest = exports.DeleteEventResult = exports.DeleteEventRequest = void 0;
exports.UpdateDetectorVersionMetadataRequest = exports.UpdateDetectorVersionResult = exports.UpdateDetectorVersionRequest = exports.UntagResourceResult = exports.UntagResourceRequest = exports.TagResourceResult = exports.TagResourceRequest = exports.PutOutcomeResult = exports.PutOutcomeRequest = exports.PutLabelResult = exports.PutLabelRequest = exports.PutKMSEncryptionKeyResult = exports.PutKMSEncryptionKeyRequest = exports.PutExternalModelResult = exports.PutExternalModelRequest = exports.PutEventTypeResult = exports.PutEventTypeRequest = exports.PutEntityTypeResult = exports.PutEntityTypeRequest = exports.PutDetectorResult = exports.PutDetectorRequest = exports.ListTagsForResourceResult = exports.ListTagsForResourceRequest = exports.GetVariablesResult = exports.GetVariablesRequest = exports.GetRulesResult = exports.RuleDetail = exports.GetRulesRequest = exports.GetOutcomesResult = exports.Outcome = exports.GetOutcomesRequest = exports.GetModelVersionResult = exports.GetModelVersionRequest = exports.GetModelsResult = exports.Model = exports.GetModelsRequest = exports.GetLabelsResult = exports.Label = exports.GetLabelsRequest = exports.GetKMSEncryptionKeyResult = exports.KMSKey = exports.GetExternalModelsResult = exports.ExternalModel = exports.ModelOutputConfiguration = exports.ModelOutputDataFormat = exports.ModelSource = exports.ModelEndpointStatus = exports.ModelInputConfiguration = exports.ModelInputDataFormat = exports.GetExternalModelsRequest = void 0;
exports.UpdateVariableResult = exports.UpdateVariableRequest = exports.UpdateRuleVersionResult = exports.UpdateRuleVersionRequest = exports.UpdateRuleMetadataResult = exports.UpdateRuleMetadataRequest = exports.UpdateModelVersionStatusResult = exports.UpdateModelVersionStatusRequest = exports.ModelVersionStatus = exports.UpdateModelVersionResult = exports.UpdateModelVersionRequest = exports.UpdateModelResult = exports.UpdateModelRequest = exports.UpdateDetectorVersionStatusResult = exports.UpdateDetectorVersionStatusRequest = exports.UpdateDetectorVersionMetadataResult = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AsyncJobStatus;
(function (AsyncJobStatus) {
    AsyncJobStatus["CANCELED"] = "CANCELED";
    AsyncJobStatus["CANCEL_IN_PROGRESS"] = "CANCEL_IN_PROGRESS";
    AsyncJobStatus["COMPLETE"] = "COMPLETE";
    AsyncJobStatus["FAILED"] = "FAILED";
    AsyncJobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AsyncJobStatus["IN_PROGRESS_INITIALIZING"] = "IN_PROGRESS_INITIALIZING";
})(AsyncJobStatus = exports.AsyncJobStatus || (exports.AsyncJobStatus = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var VariableEntry;
(function (VariableEntry) {
    /**
     * @internal
     */
    VariableEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VariableEntry = exports.VariableEntry || (exports.VariableEntry = {}));
var BatchCreateVariableRequest;
(function (BatchCreateVariableRequest) {
    /**
     * @internal
     */
    BatchCreateVariableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchCreateVariableRequest = exports.BatchCreateVariableRequest || (exports.BatchCreateVariableRequest = {}));
var BatchCreateVariableError;
(function (BatchCreateVariableError) {
    /**
     * @internal
     */
    BatchCreateVariableError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchCreateVariableError = exports.BatchCreateVariableError || (exports.BatchCreateVariableError = {}));
var BatchCreateVariableResult;
(function (BatchCreateVariableResult) {
    /**
     * @internal
     */
    BatchCreateVariableResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchCreateVariableResult = exports.BatchCreateVariableResult || (exports.BatchCreateVariableResult = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
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
var BatchGetVariableRequest;
(function (BatchGetVariableRequest) {
    /**
     * @internal
     */
    BatchGetVariableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetVariableRequest = exports.BatchGetVariableRequest || (exports.BatchGetVariableRequest = {}));
var BatchGetVariableError;
(function (BatchGetVariableError) {
    /**
     * @internal
     */
    BatchGetVariableError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetVariableError = exports.BatchGetVariableError || (exports.BatchGetVariableError = {}));
var DataSource;
(function (DataSource) {
    DataSource["EVENT"] = "EVENT";
    DataSource["EXTERNAL_MODEL_SCORE"] = "EXTERNAL_MODEL_SCORE";
    DataSource["MODEL_SCORE"] = "MODEL_SCORE";
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var DataType;
(function (DataType) {
    DataType["BOOLEAN"] = "BOOLEAN";
    DataType["FLOAT"] = "FLOAT";
    DataType["INTEGER"] = "INTEGER";
    DataType["STRING"] = "STRING";
})(DataType = exports.DataType || (exports.DataType = {}));
var Variable;
(function (Variable) {
    /**
     * @internal
     */
    Variable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Variable = exports.Variable || (exports.Variable = {}));
var BatchGetVariableResult;
(function (BatchGetVariableResult) {
    /**
     * @internal
     */
    BatchGetVariableResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetVariableResult = exports.BatchGetVariableResult || (exports.BatchGetVariableResult = {}));
var CancelBatchPredictionJobRequest;
(function (CancelBatchPredictionJobRequest) {
    /**
     * @internal
     */
    CancelBatchPredictionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelBatchPredictionJobRequest = exports.CancelBatchPredictionJobRequest || (exports.CancelBatchPredictionJobRequest = {}));
var CancelBatchPredictionJobResult;
(function (CancelBatchPredictionJobResult) {
    /**
     * @internal
     */
    CancelBatchPredictionJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelBatchPredictionJobResult = exports.CancelBatchPredictionJobResult || (exports.CancelBatchPredictionJobResult = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var CreateBatchPredictionJobRequest;
(function (CreateBatchPredictionJobRequest) {
    /**
     * @internal
     */
    CreateBatchPredictionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBatchPredictionJobRequest = exports.CreateBatchPredictionJobRequest || (exports.CreateBatchPredictionJobRequest = {}));
var CreateBatchPredictionJobResult;
(function (CreateBatchPredictionJobResult) {
    /**
     * @internal
     */
    CreateBatchPredictionJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBatchPredictionJobResult = exports.CreateBatchPredictionJobResult || (exports.CreateBatchPredictionJobResult = {}));
var ModelTypeEnum;
(function (ModelTypeEnum) {
    ModelTypeEnum["ONLINE_FRAUD_INSIGHTS"] = "ONLINE_FRAUD_INSIGHTS";
})(ModelTypeEnum = exports.ModelTypeEnum || (exports.ModelTypeEnum = {}));
var ModelVersion;
(function (ModelVersion) {
    /**
     * @internal
     */
    ModelVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelVersion = exports.ModelVersion || (exports.ModelVersion = {}));
var RuleExecutionMode;
(function (RuleExecutionMode) {
    RuleExecutionMode["ALL_MATCHED"] = "ALL_MATCHED";
    RuleExecutionMode["FIRST_MATCHED"] = "FIRST_MATCHED";
})(RuleExecutionMode = exports.RuleExecutionMode || (exports.RuleExecutionMode = {}));
var Rule;
(function (Rule) {
    /**
     * @internal
     */
    Rule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Rule = exports.Rule || (exports.Rule = {}));
var CreateDetectorVersionRequest;
(function (CreateDetectorVersionRequest) {
    /**
     * @internal
     */
    CreateDetectorVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDetectorVersionRequest = exports.CreateDetectorVersionRequest || (exports.CreateDetectorVersionRequest = {}));
var DetectorVersionStatus;
(function (DetectorVersionStatus) {
    DetectorVersionStatus["ACTIVE"] = "ACTIVE";
    DetectorVersionStatus["DRAFT"] = "DRAFT";
    DetectorVersionStatus["INACTIVE"] = "INACTIVE";
})(DetectorVersionStatus = exports.DetectorVersionStatus || (exports.DetectorVersionStatus = {}));
var CreateDetectorVersionResult;
(function (CreateDetectorVersionResult) {
    /**
     * @internal
     */
    CreateDetectorVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDetectorVersionResult = exports.CreateDetectorVersionResult || (exports.CreateDetectorVersionResult = {}));
var CreateModelRequest;
(function (CreateModelRequest) {
    /**
     * @internal
     */
    CreateModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelRequest = exports.CreateModelRequest || (exports.CreateModelRequest = {}));
var CreateModelResult;
(function (CreateModelResult) {
    /**
     * @internal
     */
    CreateModelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelResult = exports.CreateModelResult || (exports.CreateModelResult = {}));
var ExternalEventsDetail;
(function (ExternalEventsDetail) {
    /**
     * @internal
     */
    ExternalEventsDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExternalEventsDetail = exports.ExternalEventsDetail || (exports.ExternalEventsDetail = {}));
var LabelSchema;
(function (LabelSchema) {
    /**
     * @internal
     */
    LabelSchema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelSchema = exports.LabelSchema || (exports.LabelSchema = {}));
var TrainingDataSchema;
(function (TrainingDataSchema) {
    /**
     * @internal
     */
    TrainingDataSchema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrainingDataSchema = exports.TrainingDataSchema || (exports.TrainingDataSchema = {}));
var TrainingDataSourceEnum;
(function (TrainingDataSourceEnum) {
    TrainingDataSourceEnum["EXTERNAL_EVENTS"] = "EXTERNAL_EVENTS";
})(TrainingDataSourceEnum = exports.TrainingDataSourceEnum || (exports.TrainingDataSourceEnum = {}));
var CreateModelVersionRequest;
(function (CreateModelVersionRequest) {
    /**
     * @internal
     */
    CreateModelVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelVersionRequest = exports.CreateModelVersionRequest || (exports.CreateModelVersionRequest = {}));
var CreateModelVersionResult;
(function (CreateModelVersionResult) {
    /**
     * @internal
     */
    CreateModelVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelVersionResult = exports.CreateModelVersionResult || (exports.CreateModelVersionResult = {}));
var Language;
(function (Language) {
    Language["DETECTORPL"] = "DETECTORPL";
})(Language = exports.Language || (exports.Language = {}));
var CreateRuleRequest;
(function (CreateRuleRequest) {
    /**
     * @internal
     */
    CreateRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.expression && { expression: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateRuleRequest = exports.CreateRuleRequest || (exports.CreateRuleRequest = {}));
var CreateRuleResult;
(function (CreateRuleResult) {
    /**
     * @internal
     */
    CreateRuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRuleResult = exports.CreateRuleResult || (exports.CreateRuleResult = {}));
var CreateVariableRequest;
(function (CreateVariableRequest) {
    /**
     * @internal
     */
    CreateVariableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVariableRequest = exports.CreateVariableRequest || (exports.CreateVariableRequest = {}));
var CreateVariableResult;
(function (CreateVariableResult) {
    /**
     * @internal
     */
    CreateVariableResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVariableResult = exports.CreateVariableResult || (exports.CreateVariableResult = {}));
var DeleteBatchPredictionJobRequest;
(function (DeleteBatchPredictionJobRequest) {
    /**
     * @internal
     */
    DeleteBatchPredictionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBatchPredictionJobRequest = exports.DeleteBatchPredictionJobRequest || (exports.DeleteBatchPredictionJobRequest = {}));
var DeleteBatchPredictionJobResult;
(function (DeleteBatchPredictionJobResult) {
    /**
     * @internal
     */
    DeleteBatchPredictionJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBatchPredictionJobResult = exports.DeleteBatchPredictionJobResult || (exports.DeleteBatchPredictionJobResult = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var DeleteDetectorRequest;
(function (DeleteDetectorRequest) {
    /**
     * @internal
     */
    DeleteDetectorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDetectorRequest = exports.DeleteDetectorRequest || (exports.DeleteDetectorRequest = {}));
var DeleteDetectorResult;
(function (DeleteDetectorResult) {
    /**
     * @internal
     */
    DeleteDetectorResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDetectorResult = exports.DeleteDetectorResult || (exports.DeleteDetectorResult = {}));
var DeleteDetectorVersionRequest;
(function (DeleteDetectorVersionRequest) {
    /**
     * @internal
     */
    DeleteDetectorVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDetectorVersionRequest = exports.DeleteDetectorVersionRequest || (exports.DeleteDetectorVersionRequest = {}));
var DeleteDetectorVersionResult;
(function (DeleteDetectorVersionResult) {
    /**
     * @internal
     */
    DeleteDetectorVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDetectorVersionResult = exports.DeleteDetectorVersionResult || (exports.DeleteDetectorVersionResult = {}));
var DeleteEntityTypeRequest;
(function (DeleteEntityTypeRequest) {
    /**
     * @internal
     */
    DeleteEntityTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEntityTypeRequest = exports.DeleteEntityTypeRequest || (exports.DeleteEntityTypeRequest = {}));
var DeleteEntityTypeResult;
(function (DeleteEntityTypeResult) {
    /**
     * @internal
     */
    DeleteEntityTypeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEntityTypeResult = exports.DeleteEntityTypeResult || (exports.DeleteEntityTypeResult = {}));
var DeleteEventRequest;
(function (DeleteEventRequest) {
    /**
     * @internal
     */
    DeleteEventRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventRequest = exports.DeleteEventRequest || (exports.DeleteEventRequest = {}));
var DeleteEventResult;
(function (DeleteEventResult) {
    /**
     * @internal
     */
    DeleteEventResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventResult = exports.DeleteEventResult || (exports.DeleteEventResult = {}));
var DeleteEventTypeRequest;
(function (DeleteEventTypeRequest) {
    /**
     * @internal
     */
    DeleteEventTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventTypeRequest = exports.DeleteEventTypeRequest || (exports.DeleteEventTypeRequest = {}));
var DeleteEventTypeResult;
(function (DeleteEventTypeResult) {
    /**
     * @internal
     */
    DeleteEventTypeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventTypeResult = exports.DeleteEventTypeResult || (exports.DeleteEventTypeResult = {}));
var DeleteExternalModelRequest;
(function (DeleteExternalModelRequest) {
    /**
     * @internal
     */
    DeleteExternalModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteExternalModelRequest = exports.DeleteExternalModelRequest || (exports.DeleteExternalModelRequest = {}));
var DeleteExternalModelResult;
(function (DeleteExternalModelResult) {
    /**
     * @internal
     */
    DeleteExternalModelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteExternalModelResult = exports.DeleteExternalModelResult || (exports.DeleteExternalModelResult = {}));
var DeleteLabelRequest;
(function (DeleteLabelRequest) {
    /**
     * @internal
     */
    DeleteLabelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLabelRequest = exports.DeleteLabelRequest || (exports.DeleteLabelRequest = {}));
var DeleteLabelResult;
(function (DeleteLabelResult) {
    /**
     * @internal
     */
    DeleteLabelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLabelResult = exports.DeleteLabelResult || (exports.DeleteLabelResult = {}));
var DeleteModelRequest;
(function (DeleteModelRequest) {
    /**
     * @internal
     */
    DeleteModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelRequest = exports.DeleteModelRequest || (exports.DeleteModelRequest = {}));
var DeleteModelResult;
(function (DeleteModelResult) {
    /**
     * @internal
     */
    DeleteModelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelResult = exports.DeleteModelResult || (exports.DeleteModelResult = {}));
var DeleteModelVersionRequest;
(function (DeleteModelVersionRequest) {
    /**
     * @internal
     */
    DeleteModelVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelVersionRequest = exports.DeleteModelVersionRequest || (exports.DeleteModelVersionRequest = {}));
var DeleteModelVersionResult;
(function (DeleteModelVersionResult) {
    /**
     * @internal
     */
    DeleteModelVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelVersionResult = exports.DeleteModelVersionResult || (exports.DeleteModelVersionResult = {}));
var DeleteOutcomeRequest;
(function (DeleteOutcomeRequest) {
    /**
     * @internal
     */
    DeleteOutcomeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOutcomeRequest = exports.DeleteOutcomeRequest || (exports.DeleteOutcomeRequest = {}));
var DeleteOutcomeResult;
(function (DeleteOutcomeResult) {
    /**
     * @internal
     */
    DeleteOutcomeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOutcomeResult = exports.DeleteOutcomeResult || (exports.DeleteOutcomeResult = {}));
var DeleteRuleRequest;
(function (DeleteRuleRequest) {
    /**
     * @internal
     */
    DeleteRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRuleRequest = exports.DeleteRuleRequest || (exports.DeleteRuleRequest = {}));
var DeleteRuleResult;
(function (DeleteRuleResult) {
    /**
     * @internal
     */
    DeleteRuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRuleResult = exports.DeleteRuleResult || (exports.DeleteRuleResult = {}));
var DeleteVariableRequest;
(function (DeleteVariableRequest) {
    /**
     * @internal
     */
    DeleteVariableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVariableRequest = exports.DeleteVariableRequest || (exports.DeleteVariableRequest = {}));
var DeleteVariableResult;
(function (DeleteVariableResult) {
    /**
     * @internal
     */
    DeleteVariableResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVariableResult = exports.DeleteVariableResult || (exports.DeleteVariableResult = {}));
var DescribeDetectorRequest;
(function (DescribeDetectorRequest) {
    /**
     * @internal
     */
    DescribeDetectorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDetectorRequest = exports.DescribeDetectorRequest || (exports.DescribeDetectorRequest = {}));
var DetectorVersionSummary;
(function (DetectorVersionSummary) {
    /**
     * @internal
     */
    DetectorVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectorVersionSummary = exports.DetectorVersionSummary || (exports.DetectorVersionSummary = {}));
var DescribeDetectorResult;
(function (DescribeDetectorResult) {
    /**
     * @internal
     */
    DescribeDetectorResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDetectorResult = exports.DescribeDetectorResult || (exports.DescribeDetectorResult = {}));
var DescribeModelVersionsRequest;
(function (DescribeModelVersionsRequest) {
    /**
     * @internal
     */
    DescribeModelVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelVersionsRequest = exports.DescribeModelVersionsRequest || (exports.DescribeModelVersionsRequest = {}));
var FieldValidationMessage;
(function (FieldValidationMessage) {
    /**
     * @internal
     */
    FieldValidationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FieldValidationMessage = exports.FieldValidationMessage || (exports.FieldValidationMessage = {}));
var FileValidationMessage;
(function (FileValidationMessage) {
    /**
     * @internal
     */
    FileValidationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileValidationMessage = exports.FileValidationMessage || (exports.FileValidationMessage = {}));
var DataValidationMetrics;
(function (DataValidationMetrics) {
    /**
     * @internal
     */
    DataValidationMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataValidationMetrics = exports.DataValidationMetrics || (exports.DataValidationMetrics = {}));
var MetricDataPoint;
(function (MetricDataPoint) {
    /**
     * @internal
     */
    MetricDataPoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricDataPoint = exports.MetricDataPoint || (exports.MetricDataPoint = {}));
var TrainingMetrics;
(function (TrainingMetrics) {
    /**
     * @internal
     */
    TrainingMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrainingMetrics = exports.TrainingMetrics || (exports.TrainingMetrics = {}));
var TrainingResult;
(function (TrainingResult) {
    /**
     * @internal
     */
    TrainingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrainingResult = exports.TrainingResult || (exports.TrainingResult = {}));
var ModelVersionDetail;
(function (ModelVersionDetail) {
    /**
     * @internal
     */
    ModelVersionDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelVersionDetail = exports.ModelVersionDetail || (exports.ModelVersionDetail = {}));
var DescribeModelVersionsResult;
(function (DescribeModelVersionsResult) {
    /**
     * @internal
     */
    DescribeModelVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelVersionsResult = exports.DescribeModelVersionsResult || (exports.DescribeModelVersionsResult = {}));
var GetBatchPredictionJobsRequest;
(function (GetBatchPredictionJobsRequest) {
    /**
     * @internal
     */
    GetBatchPredictionJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBatchPredictionJobsRequest = exports.GetBatchPredictionJobsRequest || (exports.GetBatchPredictionJobsRequest = {}));
var BatchPrediction;
(function (BatchPrediction) {
    /**
     * @internal
     */
    BatchPrediction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPrediction = exports.BatchPrediction || (exports.BatchPrediction = {}));
var GetBatchPredictionJobsResult;
(function (GetBatchPredictionJobsResult) {
    /**
     * @internal
     */
    GetBatchPredictionJobsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBatchPredictionJobsResult = exports.GetBatchPredictionJobsResult || (exports.GetBatchPredictionJobsResult = {}));
var GetDetectorsRequest;
(function (GetDetectorsRequest) {
    /**
     * @internal
     */
    GetDetectorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDetectorsRequest = exports.GetDetectorsRequest || (exports.GetDetectorsRequest = {}));
var Detector;
(function (Detector) {
    /**
     * @internal
     */
    Detector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Detector = exports.Detector || (exports.Detector = {}));
var GetDetectorsResult;
(function (GetDetectorsResult) {
    /**
     * @internal
     */
    GetDetectorsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDetectorsResult = exports.GetDetectorsResult || (exports.GetDetectorsResult = {}));
var GetDetectorVersionRequest;
(function (GetDetectorVersionRequest) {
    /**
     * @internal
     */
    GetDetectorVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDetectorVersionRequest = exports.GetDetectorVersionRequest || (exports.GetDetectorVersionRequest = {}));
var GetDetectorVersionResult;
(function (GetDetectorVersionResult) {
    /**
     * @internal
     */
    GetDetectorVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDetectorVersionResult = exports.GetDetectorVersionResult || (exports.GetDetectorVersionResult = {}));
var GetEntityTypesRequest;
(function (GetEntityTypesRequest) {
    /**
     * @internal
     */
    GetEntityTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEntityTypesRequest = exports.GetEntityTypesRequest || (exports.GetEntityTypesRequest = {}));
var EntityType;
(function (EntityType) {
    /**
     * @internal
     */
    EntityType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityType = exports.EntityType || (exports.EntityType = {}));
var GetEntityTypesResult;
(function (GetEntityTypesResult) {
    /**
     * @internal
     */
    GetEntityTypesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEntityTypesResult = exports.GetEntityTypesResult || (exports.GetEntityTypesResult = {}));
var Entity;
(function (Entity) {
    /**
     * @internal
     */
    Entity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Entity = exports.Entity || (exports.Entity = {}));
var ModelEndpointDataBlob;
(function (ModelEndpointDataBlob) {
    /**
     * @internal
     */
    ModelEndpointDataBlob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelEndpointDataBlob = exports.ModelEndpointDataBlob || (exports.ModelEndpointDataBlob = {}));
var GetEventPredictionRequest;
(function (GetEventPredictionRequest) {
    /**
     * @internal
     */
    GetEventPredictionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.eventVariables && { eventVariables: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.externalModelEndpointDataBlobs && { externalModelEndpointDataBlobs: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetEventPredictionRequest = exports.GetEventPredictionRequest || (exports.GetEventPredictionRequest = {}));
var ModelScores;
(function (ModelScores) {
    /**
     * @internal
     */
    ModelScores.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelScores = exports.ModelScores || (exports.ModelScores = {}));
var RuleResult;
(function (RuleResult) {
    /**
     * @internal
     */
    RuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleResult = exports.RuleResult || (exports.RuleResult = {}));
var GetEventPredictionResult;
(function (GetEventPredictionResult) {
    /**
     * @internal
     */
    GetEventPredictionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEventPredictionResult = exports.GetEventPredictionResult || (exports.GetEventPredictionResult = {}));
var GetEventTypesRequest;
(function (GetEventTypesRequest) {
    /**
     * @internal
     */
    GetEventTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEventTypesRequest = exports.GetEventTypesRequest || (exports.GetEventTypesRequest = {}));
var EventType;
(function (EventType) {
    /**
     * @internal
     */
    EventType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventType = exports.EventType || (exports.EventType = {}));
var GetEventTypesResult;
(function (GetEventTypesResult) {
    /**
     * @internal
     */
    GetEventTypesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEventTypesResult = exports.GetEventTypesResult || (exports.GetEventTypesResult = {}));
var GetExternalModelsRequest;
(function (GetExternalModelsRequest) {
    /**
     * @internal
     */
    GetExternalModelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExternalModelsRequest = exports.GetExternalModelsRequest || (exports.GetExternalModelsRequest = {}));
var ModelInputDataFormat;
(function (ModelInputDataFormat) {
    ModelInputDataFormat["CSV"] = "TEXT_CSV";
    ModelInputDataFormat["JSON"] = "APPLICATION_JSON";
})(ModelInputDataFormat = exports.ModelInputDataFormat || (exports.ModelInputDataFormat = {}));
var ModelInputConfiguration;
(function (ModelInputConfiguration) {
    /**
     * @internal
     */
    ModelInputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelInputConfiguration = exports.ModelInputConfiguration || (exports.ModelInputConfiguration = {}));
var ModelEndpointStatus;
(function (ModelEndpointStatus) {
    ModelEndpointStatus["ASSOCIATED"] = "ASSOCIATED";
    ModelEndpointStatus["DISSOCIATED"] = "DISSOCIATED";
})(ModelEndpointStatus = exports.ModelEndpointStatus || (exports.ModelEndpointStatus = {}));
var ModelSource;
(function (ModelSource) {
    ModelSource["SAGEMAKER"] = "SAGEMAKER";
})(ModelSource = exports.ModelSource || (exports.ModelSource = {}));
var ModelOutputDataFormat;
(function (ModelOutputDataFormat) {
    ModelOutputDataFormat["CSV"] = "TEXT_CSV";
    ModelOutputDataFormat["JSONLINES"] = "APPLICATION_JSONLINES";
})(ModelOutputDataFormat = exports.ModelOutputDataFormat || (exports.ModelOutputDataFormat = {}));
var ModelOutputConfiguration;
(function (ModelOutputConfiguration) {
    /**
     * @internal
     */
    ModelOutputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelOutputConfiguration = exports.ModelOutputConfiguration || (exports.ModelOutputConfiguration = {}));
var ExternalModel;
(function (ExternalModel) {
    /**
     * @internal
     */
    ExternalModel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExternalModel = exports.ExternalModel || (exports.ExternalModel = {}));
var GetExternalModelsResult;
(function (GetExternalModelsResult) {
    /**
     * @internal
     */
    GetExternalModelsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExternalModelsResult = exports.GetExternalModelsResult || (exports.GetExternalModelsResult = {}));
var KMSKey;
(function (KMSKey) {
    /**
     * @internal
     */
    KMSKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSKey = exports.KMSKey || (exports.KMSKey = {}));
var GetKMSEncryptionKeyResult;
(function (GetKMSEncryptionKeyResult) {
    /**
     * @internal
     */
    GetKMSEncryptionKeyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetKMSEncryptionKeyResult = exports.GetKMSEncryptionKeyResult || (exports.GetKMSEncryptionKeyResult = {}));
var GetLabelsRequest;
(function (GetLabelsRequest) {
    /**
     * @internal
     */
    GetLabelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLabelsRequest = exports.GetLabelsRequest || (exports.GetLabelsRequest = {}));
var Label;
(function (Label) {
    /**
     * @internal
     */
    Label.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Label = exports.Label || (exports.Label = {}));
var GetLabelsResult;
(function (GetLabelsResult) {
    /**
     * @internal
     */
    GetLabelsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLabelsResult = exports.GetLabelsResult || (exports.GetLabelsResult = {}));
var GetModelsRequest;
(function (GetModelsRequest) {
    /**
     * @internal
     */
    GetModelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetModelsRequest = exports.GetModelsRequest || (exports.GetModelsRequest = {}));
var Model;
(function (Model) {
    /**
     * @internal
     */
    Model.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Model = exports.Model || (exports.Model = {}));
var GetModelsResult;
(function (GetModelsResult) {
    /**
     * @internal
     */
    GetModelsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetModelsResult = exports.GetModelsResult || (exports.GetModelsResult = {}));
var GetModelVersionRequest;
(function (GetModelVersionRequest) {
    /**
     * @internal
     */
    GetModelVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetModelVersionRequest = exports.GetModelVersionRequest || (exports.GetModelVersionRequest = {}));
var GetModelVersionResult;
(function (GetModelVersionResult) {
    /**
     * @internal
     */
    GetModelVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetModelVersionResult = exports.GetModelVersionResult || (exports.GetModelVersionResult = {}));
var GetOutcomesRequest;
(function (GetOutcomesRequest) {
    /**
     * @internal
     */
    GetOutcomesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOutcomesRequest = exports.GetOutcomesRequest || (exports.GetOutcomesRequest = {}));
var Outcome;
(function (Outcome) {
    /**
     * @internal
     */
    Outcome.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Outcome = exports.Outcome || (exports.Outcome = {}));
var GetOutcomesResult;
(function (GetOutcomesResult) {
    /**
     * @internal
     */
    GetOutcomesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOutcomesResult = exports.GetOutcomesResult || (exports.GetOutcomesResult = {}));
var GetRulesRequest;
(function (GetRulesRequest) {
    /**
     * @internal
     */
    GetRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRulesRequest = exports.GetRulesRequest || (exports.GetRulesRequest = {}));
var RuleDetail;
(function (RuleDetail) {
    /**
     * @internal
     */
    RuleDetail.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.expression && { expression: smithy_client_1.SENSITIVE_STRING }),
    });
})(RuleDetail = exports.RuleDetail || (exports.RuleDetail = {}));
var GetRulesResult;
(function (GetRulesResult) {
    /**
     * @internal
     */
    GetRulesResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ruleDetails && { ruleDetails: obj.ruleDetails.map((item) => RuleDetail.filterSensitiveLog(item)) }),
    });
})(GetRulesResult = exports.GetRulesResult || (exports.GetRulesResult = {}));
var GetVariablesRequest;
(function (GetVariablesRequest) {
    /**
     * @internal
     */
    GetVariablesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVariablesRequest = exports.GetVariablesRequest || (exports.GetVariablesRequest = {}));
var GetVariablesResult;
(function (GetVariablesResult) {
    /**
     * @internal
     */
    GetVariablesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVariablesResult = exports.GetVariablesResult || (exports.GetVariablesResult = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    /**
     * @internal
     */
    ListTagsForResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResult = exports.ListTagsForResourceResult || (exports.ListTagsForResourceResult = {}));
var PutDetectorRequest;
(function (PutDetectorRequest) {
    /**
     * @internal
     */
    PutDetectorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDetectorRequest = exports.PutDetectorRequest || (exports.PutDetectorRequest = {}));
var PutDetectorResult;
(function (PutDetectorResult) {
    /**
     * @internal
     */
    PutDetectorResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDetectorResult = exports.PutDetectorResult || (exports.PutDetectorResult = {}));
var PutEntityTypeRequest;
(function (PutEntityTypeRequest) {
    /**
     * @internal
     */
    PutEntityTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEntityTypeRequest = exports.PutEntityTypeRequest || (exports.PutEntityTypeRequest = {}));
var PutEntityTypeResult;
(function (PutEntityTypeResult) {
    /**
     * @internal
     */
    PutEntityTypeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEntityTypeResult = exports.PutEntityTypeResult || (exports.PutEntityTypeResult = {}));
var PutEventTypeRequest;
(function (PutEventTypeRequest) {
    /**
     * @internal
     */
    PutEventTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEventTypeRequest = exports.PutEventTypeRequest || (exports.PutEventTypeRequest = {}));
var PutEventTypeResult;
(function (PutEventTypeResult) {
    /**
     * @internal
     */
    PutEventTypeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEventTypeResult = exports.PutEventTypeResult || (exports.PutEventTypeResult = {}));
var PutExternalModelRequest;
(function (PutExternalModelRequest) {
    /**
     * @internal
     */
    PutExternalModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutExternalModelRequest = exports.PutExternalModelRequest || (exports.PutExternalModelRequest = {}));
var PutExternalModelResult;
(function (PutExternalModelResult) {
    /**
     * @internal
     */
    PutExternalModelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutExternalModelResult = exports.PutExternalModelResult || (exports.PutExternalModelResult = {}));
var PutKMSEncryptionKeyRequest;
(function (PutKMSEncryptionKeyRequest) {
    /**
     * @internal
     */
    PutKMSEncryptionKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutKMSEncryptionKeyRequest = exports.PutKMSEncryptionKeyRequest || (exports.PutKMSEncryptionKeyRequest = {}));
var PutKMSEncryptionKeyResult;
(function (PutKMSEncryptionKeyResult) {
    /**
     * @internal
     */
    PutKMSEncryptionKeyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutKMSEncryptionKeyResult = exports.PutKMSEncryptionKeyResult || (exports.PutKMSEncryptionKeyResult = {}));
var PutLabelRequest;
(function (PutLabelRequest) {
    /**
     * @internal
     */
    PutLabelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLabelRequest = exports.PutLabelRequest || (exports.PutLabelRequest = {}));
var PutLabelResult;
(function (PutLabelResult) {
    /**
     * @internal
     */
    PutLabelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLabelResult = exports.PutLabelResult || (exports.PutLabelResult = {}));
var PutOutcomeRequest;
(function (PutOutcomeRequest) {
    /**
     * @internal
     */
    PutOutcomeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutOutcomeRequest = exports.PutOutcomeRequest || (exports.PutOutcomeRequest = {}));
var PutOutcomeResult;
(function (PutOutcomeResult) {
    /**
     * @internal
     */
    PutOutcomeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutOutcomeResult = exports.PutOutcomeResult || (exports.PutOutcomeResult = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResult;
(function (TagResourceResult) {
    /**
     * @internal
     */
    TagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResult = exports.TagResourceResult || (exports.TagResourceResult = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResult;
(function (UntagResourceResult) {
    /**
     * @internal
     */
    UntagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResult = exports.UntagResourceResult || (exports.UntagResourceResult = {}));
var UpdateDetectorVersionRequest;
(function (UpdateDetectorVersionRequest) {
    /**
     * @internal
     */
    UpdateDetectorVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDetectorVersionRequest = exports.UpdateDetectorVersionRequest || (exports.UpdateDetectorVersionRequest = {}));
var UpdateDetectorVersionResult;
(function (UpdateDetectorVersionResult) {
    /**
     * @internal
     */
    UpdateDetectorVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDetectorVersionResult = exports.UpdateDetectorVersionResult || (exports.UpdateDetectorVersionResult = {}));
var UpdateDetectorVersionMetadataRequest;
(function (UpdateDetectorVersionMetadataRequest) {
    /**
     * @internal
     */
    UpdateDetectorVersionMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDetectorVersionMetadataRequest = exports.UpdateDetectorVersionMetadataRequest || (exports.UpdateDetectorVersionMetadataRequest = {}));
var UpdateDetectorVersionMetadataResult;
(function (UpdateDetectorVersionMetadataResult) {
    /**
     * @internal
     */
    UpdateDetectorVersionMetadataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDetectorVersionMetadataResult = exports.UpdateDetectorVersionMetadataResult || (exports.UpdateDetectorVersionMetadataResult = {}));
var UpdateDetectorVersionStatusRequest;
(function (UpdateDetectorVersionStatusRequest) {
    /**
     * @internal
     */
    UpdateDetectorVersionStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDetectorVersionStatusRequest = exports.UpdateDetectorVersionStatusRequest || (exports.UpdateDetectorVersionStatusRequest = {}));
var UpdateDetectorVersionStatusResult;
(function (UpdateDetectorVersionStatusResult) {
    /**
     * @internal
     */
    UpdateDetectorVersionStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDetectorVersionStatusResult = exports.UpdateDetectorVersionStatusResult || (exports.UpdateDetectorVersionStatusResult = {}));
var UpdateModelRequest;
(function (UpdateModelRequest) {
    /**
     * @internal
     */
    UpdateModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateModelRequest = exports.UpdateModelRequest || (exports.UpdateModelRequest = {}));
var UpdateModelResult;
(function (UpdateModelResult) {
    /**
     * @internal
     */
    UpdateModelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateModelResult = exports.UpdateModelResult || (exports.UpdateModelResult = {}));
var UpdateModelVersionRequest;
(function (UpdateModelVersionRequest) {
    /**
     * @internal
     */
    UpdateModelVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateModelVersionRequest = exports.UpdateModelVersionRequest || (exports.UpdateModelVersionRequest = {}));
var UpdateModelVersionResult;
(function (UpdateModelVersionResult) {
    /**
     * @internal
     */
    UpdateModelVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateModelVersionResult = exports.UpdateModelVersionResult || (exports.UpdateModelVersionResult = {}));
var ModelVersionStatus;
(function (ModelVersionStatus) {
    ModelVersionStatus["ACTIVE"] = "ACTIVE";
    ModelVersionStatus["INACTIVE"] = "INACTIVE";
    ModelVersionStatus["TRAINING_CANCELLED"] = "TRAINING_CANCELLED";
})(ModelVersionStatus = exports.ModelVersionStatus || (exports.ModelVersionStatus = {}));
var UpdateModelVersionStatusRequest;
(function (UpdateModelVersionStatusRequest) {
    /**
     * @internal
     */
    UpdateModelVersionStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateModelVersionStatusRequest = exports.UpdateModelVersionStatusRequest || (exports.UpdateModelVersionStatusRequest = {}));
var UpdateModelVersionStatusResult;
(function (UpdateModelVersionStatusResult) {
    /**
     * @internal
     */
    UpdateModelVersionStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateModelVersionStatusResult = exports.UpdateModelVersionStatusResult || (exports.UpdateModelVersionStatusResult = {}));
var UpdateRuleMetadataRequest;
(function (UpdateRuleMetadataRequest) {
    /**
     * @internal
     */
    UpdateRuleMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuleMetadataRequest = exports.UpdateRuleMetadataRequest || (exports.UpdateRuleMetadataRequest = {}));
var UpdateRuleMetadataResult;
(function (UpdateRuleMetadataResult) {
    /**
     * @internal
     */
    UpdateRuleMetadataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuleMetadataResult = exports.UpdateRuleMetadataResult || (exports.UpdateRuleMetadataResult = {}));
var UpdateRuleVersionRequest;
(function (UpdateRuleVersionRequest) {
    /**
     * @internal
     */
    UpdateRuleVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.expression && { expression: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateRuleVersionRequest = exports.UpdateRuleVersionRequest || (exports.UpdateRuleVersionRequest = {}));
var UpdateRuleVersionResult;
(function (UpdateRuleVersionResult) {
    /**
     * @internal
     */
    UpdateRuleVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuleVersionResult = exports.UpdateRuleVersionResult || (exports.UpdateRuleVersionResult = {}));
var UpdateVariableRequest;
(function (UpdateVariableRequest) {
    /**
     * @internal
     */
    UpdateVariableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVariableRequest = exports.UpdateVariableRequest || (exports.UpdateVariableRequest = {}));
var UpdateVariableResult;
(function (UpdateVariableResult) {
    /**
     * @internal
     */
    UpdateVariableResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVariableResult = exports.UpdateVariableResult || (exports.UpdateVariableResult = {}));
//# sourceMappingURL=models_0.js.map