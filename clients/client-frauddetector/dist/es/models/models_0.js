import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AsyncJobStatus;
(function (AsyncJobStatus) {
    AsyncJobStatus["CANCELED"] = "CANCELED";
    AsyncJobStatus["CANCEL_IN_PROGRESS"] = "CANCEL_IN_PROGRESS";
    AsyncJobStatus["COMPLETE"] = "COMPLETE";
    AsyncJobStatus["FAILED"] = "FAILED";
    AsyncJobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AsyncJobStatus["IN_PROGRESS_INITIALIZING"] = "IN_PROGRESS_INITIALIZING";
})(AsyncJobStatus || (AsyncJobStatus = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var VariableEntry;
(function (VariableEntry) {
    /**
     * @internal
     */
    VariableEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VariableEntry || (VariableEntry = {}));
export var BatchCreateVariableRequest;
(function (BatchCreateVariableRequest) {
    /**
     * @internal
     */
    BatchCreateVariableRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchCreateVariableRequest || (BatchCreateVariableRequest = {}));
export var BatchCreateVariableError;
(function (BatchCreateVariableError) {
    /**
     * @internal
     */
    BatchCreateVariableError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchCreateVariableError || (BatchCreateVariableError = {}));
export var BatchCreateVariableResult;
(function (BatchCreateVariableResult) {
    /**
     * @internal
     */
    BatchCreateVariableResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchCreateVariableResult || (BatchCreateVariableResult = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
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
export var BatchGetVariableRequest;
(function (BatchGetVariableRequest) {
    /**
     * @internal
     */
    BatchGetVariableRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetVariableRequest || (BatchGetVariableRequest = {}));
export var BatchGetVariableError;
(function (BatchGetVariableError) {
    /**
     * @internal
     */
    BatchGetVariableError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetVariableError || (BatchGetVariableError = {}));
export var DataSource;
(function (DataSource) {
    DataSource["EVENT"] = "EVENT";
    DataSource["EXTERNAL_MODEL_SCORE"] = "EXTERNAL_MODEL_SCORE";
    DataSource["MODEL_SCORE"] = "MODEL_SCORE";
})(DataSource || (DataSource = {}));
export var DataType;
(function (DataType) {
    DataType["BOOLEAN"] = "BOOLEAN";
    DataType["FLOAT"] = "FLOAT";
    DataType["INTEGER"] = "INTEGER";
    DataType["STRING"] = "STRING";
})(DataType || (DataType = {}));
export var Variable;
(function (Variable) {
    /**
     * @internal
     */
    Variable.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Variable || (Variable = {}));
export var BatchGetVariableResult;
(function (BatchGetVariableResult) {
    /**
     * @internal
     */
    BatchGetVariableResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetVariableResult || (BatchGetVariableResult = {}));
export var CancelBatchPredictionJobRequest;
(function (CancelBatchPredictionJobRequest) {
    /**
     * @internal
     */
    CancelBatchPredictionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelBatchPredictionJobRequest || (CancelBatchPredictionJobRequest = {}));
export var CancelBatchPredictionJobResult;
(function (CancelBatchPredictionJobResult) {
    /**
     * @internal
     */
    CancelBatchPredictionJobResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelBatchPredictionJobResult || (CancelBatchPredictionJobResult = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var CreateBatchPredictionJobRequest;
(function (CreateBatchPredictionJobRequest) {
    /**
     * @internal
     */
    CreateBatchPredictionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBatchPredictionJobRequest || (CreateBatchPredictionJobRequest = {}));
export var CreateBatchPredictionJobResult;
(function (CreateBatchPredictionJobResult) {
    /**
     * @internal
     */
    CreateBatchPredictionJobResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBatchPredictionJobResult || (CreateBatchPredictionJobResult = {}));
export var ModelTypeEnum;
(function (ModelTypeEnum) {
    ModelTypeEnum["ONLINE_FRAUD_INSIGHTS"] = "ONLINE_FRAUD_INSIGHTS";
})(ModelTypeEnum || (ModelTypeEnum = {}));
export var ModelVersion;
(function (ModelVersion) {
    /**
     * @internal
     */
    ModelVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelVersion || (ModelVersion = {}));
export var RuleExecutionMode;
(function (RuleExecutionMode) {
    RuleExecutionMode["ALL_MATCHED"] = "ALL_MATCHED";
    RuleExecutionMode["FIRST_MATCHED"] = "FIRST_MATCHED";
})(RuleExecutionMode || (RuleExecutionMode = {}));
export var Rule;
(function (Rule) {
    /**
     * @internal
     */
    Rule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Rule || (Rule = {}));
export var CreateDetectorVersionRequest;
(function (CreateDetectorVersionRequest) {
    /**
     * @internal
     */
    CreateDetectorVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDetectorVersionRequest || (CreateDetectorVersionRequest = {}));
export var DetectorVersionStatus;
(function (DetectorVersionStatus) {
    DetectorVersionStatus["ACTIVE"] = "ACTIVE";
    DetectorVersionStatus["DRAFT"] = "DRAFT";
    DetectorVersionStatus["INACTIVE"] = "INACTIVE";
})(DetectorVersionStatus || (DetectorVersionStatus = {}));
export var CreateDetectorVersionResult;
(function (CreateDetectorVersionResult) {
    /**
     * @internal
     */
    CreateDetectorVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDetectorVersionResult || (CreateDetectorVersionResult = {}));
export var CreateModelRequest;
(function (CreateModelRequest) {
    /**
     * @internal
     */
    CreateModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelRequest || (CreateModelRequest = {}));
export var CreateModelResult;
(function (CreateModelResult) {
    /**
     * @internal
     */
    CreateModelResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelResult || (CreateModelResult = {}));
export var ExternalEventsDetail;
(function (ExternalEventsDetail) {
    /**
     * @internal
     */
    ExternalEventsDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExternalEventsDetail || (ExternalEventsDetail = {}));
export var LabelSchema;
(function (LabelSchema) {
    /**
     * @internal
     */
    LabelSchema.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelSchema || (LabelSchema = {}));
export var TrainingDataSchema;
(function (TrainingDataSchema) {
    /**
     * @internal
     */
    TrainingDataSchema.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrainingDataSchema || (TrainingDataSchema = {}));
export var TrainingDataSourceEnum;
(function (TrainingDataSourceEnum) {
    TrainingDataSourceEnum["EXTERNAL_EVENTS"] = "EXTERNAL_EVENTS";
})(TrainingDataSourceEnum || (TrainingDataSourceEnum = {}));
export var CreateModelVersionRequest;
(function (CreateModelVersionRequest) {
    /**
     * @internal
     */
    CreateModelVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelVersionRequest || (CreateModelVersionRequest = {}));
export var CreateModelVersionResult;
(function (CreateModelVersionResult) {
    /**
     * @internal
     */
    CreateModelVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelVersionResult || (CreateModelVersionResult = {}));
export var Language;
(function (Language) {
    Language["DETECTORPL"] = "DETECTORPL";
})(Language || (Language = {}));
export var CreateRuleRequest;
(function (CreateRuleRequest) {
    /**
     * @internal
     */
    CreateRuleRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.expression && { expression: SENSITIVE_STRING }))); };
})(CreateRuleRequest || (CreateRuleRequest = {}));
export var CreateRuleResult;
(function (CreateRuleResult) {
    /**
     * @internal
     */
    CreateRuleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRuleResult || (CreateRuleResult = {}));
export var CreateVariableRequest;
(function (CreateVariableRequest) {
    /**
     * @internal
     */
    CreateVariableRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVariableRequest || (CreateVariableRequest = {}));
export var CreateVariableResult;
(function (CreateVariableResult) {
    /**
     * @internal
     */
    CreateVariableResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVariableResult || (CreateVariableResult = {}));
export var DeleteBatchPredictionJobRequest;
(function (DeleteBatchPredictionJobRequest) {
    /**
     * @internal
     */
    DeleteBatchPredictionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBatchPredictionJobRequest || (DeleteBatchPredictionJobRequest = {}));
export var DeleteBatchPredictionJobResult;
(function (DeleteBatchPredictionJobResult) {
    /**
     * @internal
     */
    DeleteBatchPredictionJobResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBatchPredictionJobResult || (DeleteBatchPredictionJobResult = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var DeleteDetectorRequest;
(function (DeleteDetectorRequest) {
    /**
     * @internal
     */
    DeleteDetectorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDetectorRequest || (DeleteDetectorRequest = {}));
export var DeleteDetectorResult;
(function (DeleteDetectorResult) {
    /**
     * @internal
     */
    DeleteDetectorResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDetectorResult || (DeleteDetectorResult = {}));
export var DeleteDetectorVersionRequest;
(function (DeleteDetectorVersionRequest) {
    /**
     * @internal
     */
    DeleteDetectorVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDetectorVersionRequest || (DeleteDetectorVersionRequest = {}));
export var DeleteDetectorVersionResult;
(function (DeleteDetectorVersionResult) {
    /**
     * @internal
     */
    DeleteDetectorVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDetectorVersionResult || (DeleteDetectorVersionResult = {}));
export var DeleteEntityTypeRequest;
(function (DeleteEntityTypeRequest) {
    /**
     * @internal
     */
    DeleteEntityTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEntityTypeRequest || (DeleteEntityTypeRequest = {}));
export var DeleteEntityTypeResult;
(function (DeleteEntityTypeResult) {
    /**
     * @internal
     */
    DeleteEntityTypeResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEntityTypeResult || (DeleteEntityTypeResult = {}));
export var DeleteEventRequest;
(function (DeleteEventRequest) {
    /**
     * @internal
     */
    DeleteEventRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEventRequest || (DeleteEventRequest = {}));
export var DeleteEventResult;
(function (DeleteEventResult) {
    /**
     * @internal
     */
    DeleteEventResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEventResult || (DeleteEventResult = {}));
export var DeleteEventTypeRequest;
(function (DeleteEventTypeRequest) {
    /**
     * @internal
     */
    DeleteEventTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEventTypeRequest || (DeleteEventTypeRequest = {}));
export var DeleteEventTypeResult;
(function (DeleteEventTypeResult) {
    /**
     * @internal
     */
    DeleteEventTypeResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEventTypeResult || (DeleteEventTypeResult = {}));
export var DeleteExternalModelRequest;
(function (DeleteExternalModelRequest) {
    /**
     * @internal
     */
    DeleteExternalModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteExternalModelRequest || (DeleteExternalModelRequest = {}));
export var DeleteExternalModelResult;
(function (DeleteExternalModelResult) {
    /**
     * @internal
     */
    DeleteExternalModelResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteExternalModelResult || (DeleteExternalModelResult = {}));
export var DeleteLabelRequest;
(function (DeleteLabelRequest) {
    /**
     * @internal
     */
    DeleteLabelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLabelRequest || (DeleteLabelRequest = {}));
export var DeleteLabelResult;
(function (DeleteLabelResult) {
    /**
     * @internal
     */
    DeleteLabelResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLabelResult || (DeleteLabelResult = {}));
export var DeleteModelRequest;
(function (DeleteModelRequest) {
    /**
     * @internal
     */
    DeleteModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelRequest || (DeleteModelRequest = {}));
export var DeleteModelResult;
(function (DeleteModelResult) {
    /**
     * @internal
     */
    DeleteModelResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelResult || (DeleteModelResult = {}));
export var DeleteModelVersionRequest;
(function (DeleteModelVersionRequest) {
    /**
     * @internal
     */
    DeleteModelVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelVersionRequest || (DeleteModelVersionRequest = {}));
export var DeleteModelVersionResult;
(function (DeleteModelVersionResult) {
    /**
     * @internal
     */
    DeleteModelVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelVersionResult || (DeleteModelVersionResult = {}));
export var DeleteOutcomeRequest;
(function (DeleteOutcomeRequest) {
    /**
     * @internal
     */
    DeleteOutcomeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteOutcomeRequest || (DeleteOutcomeRequest = {}));
export var DeleteOutcomeResult;
(function (DeleteOutcomeResult) {
    /**
     * @internal
     */
    DeleteOutcomeResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteOutcomeResult || (DeleteOutcomeResult = {}));
export var DeleteRuleRequest;
(function (DeleteRuleRequest) {
    /**
     * @internal
     */
    DeleteRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRuleRequest || (DeleteRuleRequest = {}));
export var DeleteRuleResult;
(function (DeleteRuleResult) {
    /**
     * @internal
     */
    DeleteRuleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRuleResult || (DeleteRuleResult = {}));
export var DeleteVariableRequest;
(function (DeleteVariableRequest) {
    /**
     * @internal
     */
    DeleteVariableRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVariableRequest || (DeleteVariableRequest = {}));
export var DeleteVariableResult;
(function (DeleteVariableResult) {
    /**
     * @internal
     */
    DeleteVariableResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVariableResult || (DeleteVariableResult = {}));
export var DescribeDetectorRequest;
(function (DescribeDetectorRequest) {
    /**
     * @internal
     */
    DescribeDetectorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDetectorRequest || (DescribeDetectorRequest = {}));
export var DetectorVersionSummary;
(function (DetectorVersionSummary) {
    /**
     * @internal
     */
    DetectorVersionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectorVersionSummary || (DetectorVersionSummary = {}));
export var DescribeDetectorResult;
(function (DescribeDetectorResult) {
    /**
     * @internal
     */
    DescribeDetectorResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDetectorResult || (DescribeDetectorResult = {}));
export var DescribeModelVersionsRequest;
(function (DescribeModelVersionsRequest) {
    /**
     * @internal
     */
    DescribeModelVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelVersionsRequest || (DescribeModelVersionsRequest = {}));
export var FieldValidationMessage;
(function (FieldValidationMessage) {
    /**
     * @internal
     */
    FieldValidationMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FieldValidationMessage || (FieldValidationMessage = {}));
export var FileValidationMessage;
(function (FileValidationMessage) {
    /**
     * @internal
     */
    FileValidationMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileValidationMessage || (FileValidationMessage = {}));
export var DataValidationMetrics;
(function (DataValidationMetrics) {
    /**
     * @internal
     */
    DataValidationMetrics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataValidationMetrics || (DataValidationMetrics = {}));
export var MetricDataPoint;
(function (MetricDataPoint) {
    /**
     * @internal
     */
    MetricDataPoint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricDataPoint || (MetricDataPoint = {}));
export var TrainingMetrics;
(function (TrainingMetrics) {
    /**
     * @internal
     */
    TrainingMetrics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrainingMetrics || (TrainingMetrics = {}));
export var TrainingResult;
(function (TrainingResult) {
    /**
     * @internal
     */
    TrainingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrainingResult || (TrainingResult = {}));
export var ModelVersionDetail;
(function (ModelVersionDetail) {
    /**
     * @internal
     */
    ModelVersionDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelVersionDetail || (ModelVersionDetail = {}));
export var DescribeModelVersionsResult;
(function (DescribeModelVersionsResult) {
    /**
     * @internal
     */
    DescribeModelVersionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelVersionsResult || (DescribeModelVersionsResult = {}));
export var GetBatchPredictionJobsRequest;
(function (GetBatchPredictionJobsRequest) {
    /**
     * @internal
     */
    GetBatchPredictionJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBatchPredictionJobsRequest || (GetBatchPredictionJobsRequest = {}));
export var BatchPrediction;
(function (BatchPrediction) {
    /**
     * @internal
     */
    BatchPrediction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchPrediction || (BatchPrediction = {}));
export var GetBatchPredictionJobsResult;
(function (GetBatchPredictionJobsResult) {
    /**
     * @internal
     */
    GetBatchPredictionJobsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBatchPredictionJobsResult || (GetBatchPredictionJobsResult = {}));
export var GetDetectorsRequest;
(function (GetDetectorsRequest) {
    /**
     * @internal
     */
    GetDetectorsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDetectorsRequest || (GetDetectorsRequest = {}));
export var Detector;
(function (Detector) {
    /**
     * @internal
     */
    Detector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Detector || (Detector = {}));
export var GetDetectorsResult;
(function (GetDetectorsResult) {
    /**
     * @internal
     */
    GetDetectorsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDetectorsResult || (GetDetectorsResult = {}));
export var GetDetectorVersionRequest;
(function (GetDetectorVersionRequest) {
    /**
     * @internal
     */
    GetDetectorVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDetectorVersionRequest || (GetDetectorVersionRequest = {}));
export var GetDetectorVersionResult;
(function (GetDetectorVersionResult) {
    /**
     * @internal
     */
    GetDetectorVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDetectorVersionResult || (GetDetectorVersionResult = {}));
export var GetEntityTypesRequest;
(function (GetEntityTypesRequest) {
    /**
     * @internal
     */
    GetEntityTypesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEntityTypesRequest || (GetEntityTypesRequest = {}));
export var EntityType;
(function (EntityType) {
    /**
     * @internal
     */
    EntityType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntityType || (EntityType = {}));
export var GetEntityTypesResult;
(function (GetEntityTypesResult) {
    /**
     * @internal
     */
    GetEntityTypesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEntityTypesResult || (GetEntityTypesResult = {}));
export var Entity;
(function (Entity) {
    /**
     * @internal
     */
    Entity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Entity || (Entity = {}));
export var ModelEndpointDataBlob;
(function (ModelEndpointDataBlob) {
    /**
     * @internal
     */
    ModelEndpointDataBlob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelEndpointDataBlob || (ModelEndpointDataBlob = {}));
export var GetEventPredictionRequest;
(function (GetEventPredictionRequest) {
    /**
     * @internal
     */
    GetEventPredictionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.eventVariables && { eventVariables: SENSITIVE_STRING })), (obj.externalModelEndpointDataBlobs && { externalModelEndpointDataBlobs: SENSITIVE_STRING }))); };
})(GetEventPredictionRequest || (GetEventPredictionRequest = {}));
export var ModelScores;
(function (ModelScores) {
    /**
     * @internal
     */
    ModelScores.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelScores || (ModelScores = {}));
export var RuleResult;
(function (RuleResult) {
    /**
     * @internal
     */
    RuleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleResult || (RuleResult = {}));
export var GetEventPredictionResult;
(function (GetEventPredictionResult) {
    /**
     * @internal
     */
    GetEventPredictionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEventPredictionResult || (GetEventPredictionResult = {}));
export var GetEventTypesRequest;
(function (GetEventTypesRequest) {
    /**
     * @internal
     */
    GetEventTypesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEventTypesRequest || (GetEventTypesRequest = {}));
export var EventType;
(function (EventType) {
    /**
     * @internal
     */
    EventType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventType || (EventType = {}));
export var GetEventTypesResult;
(function (GetEventTypesResult) {
    /**
     * @internal
     */
    GetEventTypesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEventTypesResult || (GetEventTypesResult = {}));
export var GetExternalModelsRequest;
(function (GetExternalModelsRequest) {
    /**
     * @internal
     */
    GetExternalModelsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExternalModelsRequest || (GetExternalModelsRequest = {}));
export var ModelInputDataFormat;
(function (ModelInputDataFormat) {
    ModelInputDataFormat["CSV"] = "TEXT_CSV";
    ModelInputDataFormat["JSON"] = "APPLICATION_JSON";
})(ModelInputDataFormat || (ModelInputDataFormat = {}));
export var ModelInputConfiguration;
(function (ModelInputConfiguration) {
    /**
     * @internal
     */
    ModelInputConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelInputConfiguration || (ModelInputConfiguration = {}));
export var ModelEndpointStatus;
(function (ModelEndpointStatus) {
    ModelEndpointStatus["ASSOCIATED"] = "ASSOCIATED";
    ModelEndpointStatus["DISSOCIATED"] = "DISSOCIATED";
})(ModelEndpointStatus || (ModelEndpointStatus = {}));
export var ModelSource;
(function (ModelSource) {
    ModelSource["SAGEMAKER"] = "SAGEMAKER";
})(ModelSource || (ModelSource = {}));
export var ModelOutputDataFormat;
(function (ModelOutputDataFormat) {
    ModelOutputDataFormat["CSV"] = "TEXT_CSV";
    ModelOutputDataFormat["JSONLINES"] = "APPLICATION_JSONLINES";
})(ModelOutputDataFormat || (ModelOutputDataFormat = {}));
export var ModelOutputConfiguration;
(function (ModelOutputConfiguration) {
    /**
     * @internal
     */
    ModelOutputConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelOutputConfiguration || (ModelOutputConfiguration = {}));
export var ExternalModel;
(function (ExternalModel) {
    /**
     * @internal
     */
    ExternalModel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExternalModel || (ExternalModel = {}));
export var GetExternalModelsResult;
(function (GetExternalModelsResult) {
    /**
     * @internal
     */
    GetExternalModelsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExternalModelsResult || (GetExternalModelsResult = {}));
export var KMSKey;
(function (KMSKey) {
    /**
     * @internal
     */
    KMSKey.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSKey || (KMSKey = {}));
export var GetKMSEncryptionKeyResult;
(function (GetKMSEncryptionKeyResult) {
    /**
     * @internal
     */
    GetKMSEncryptionKeyResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetKMSEncryptionKeyResult || (GetKMSEncryptionKeyResult = {}));
export var GetLabelsRequest;
(function (GetLabelsRequest) {
    /**
     * @internal
     */
    GetLabelsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLabelsRequest || (GetLabelsRequest = {}));
export var Label;
(function (Label) {
    /**
     * @internal
     */
    Label.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Label || (Label = {}));
export var GetLabelsResult;
(function (GetLabelsResult) {
    /**
     * @internal
     */
    GetLabelsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLabelsResult || (GetLabelsResult = {}));
export var GetModelsRequest;
(function (GetModelsRequest) {
    /**
     * @internal
     */
    GetModelsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetModelsRequest || (GetModelsRequest = {}));
export var Model;
(function (Model) {
    /**
     * @internal
     */
    Model.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Model || (Model = {}));
export var GetModelsResult;
(function (GetModelsResult) {
    /**
     * @internal
     */
    GetModelsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetModelsResult || (GetModelsResult = {}));
export var GetModelVersionRequest;
(function (GetModelVersionRequest) {
    /**
     * @internal
     */
    GetModelVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetModelVersionRequest || (GetModelVersionRequest = {}));
export var GetModelVersionResult;
(function (GetModelVersionResult) {
    /**
     * @internal
     */
    GetModelVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetModelVersionResult || (GetModelVersionResult = {}));
export var GetOutcomesRequest;
(function (GetOutcomesRequest) {
    /**
     * @internal
     */
    GetOutcomesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOutcomesRequest || (GetOutcomesRequest = {}));
export var Outcome;
(function (Outcome) {
    /**
     * @internal
     */
    Outcome.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Outcome || (Outcome = {}));
export var GetOutcomesResult;
(function (GetOutcomesResult) {
    /**
     * @internal
     */
    GetOutcomesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOutcomesResult || (GetOutcomesResult = {}));
export var GetRulesRequest;
(function (GetRulesRequest) {
    /**
     * @internal
     */
    GetRulesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRulesRequest || (GetRulesRequest = {}));
export var RuleDetail;
(function (RuleDetail) {
    /**
     * @internal
     */
    RuleDetail.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.expression && { expression: SENSITIVE_STRING }))); };
})(RuleDetail || (RuleDetail = {}));
export var GetRulesResult;
(function (GetRulesResult) {
    /**
     * @internal
     */
    GetRulesResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ruleDetails && { ruleDetails: obj.ruleDetails.map(function (item) { return RuleDetail.filterSensitiveLog(item); }) }))); };
})(GetRulesResult || (GetRulesResult = {}));
export var GetVariablesRequest;
(function (GetVariablesRequest) {
    /**
     * @internal
     */
    GetVariablesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetVariablesRequest || (GetVariablesRequest = {}));
export var GetVariablesResult;
(function (GetVariablesResult) {
    /**
     * @internal
     */
    GetVariablesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetVariablesResult || (GetVariablesResult = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    /**
     * @internal
     */
    ListTagsForResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResult || (ListTagsForResourceResult = {}));
export var PutDetectorRequest;
(function (PutDetectorRequest) {
    /**
     * @internal
     */
    PutDetectorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutDetectorRequest || (PutDetectorRequest = {}));
export var PutDetectorResult;
(function (PutDetectorResult) {
    /**
     * @internal
     */
    PutDetectorResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutDetectorResult || (PutDetectorResult = {}));
export var PutEntityTypeRequest;
(function (PutEntityTypeRequest) {
    /**
     * @internal
     */
    PutEntityTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEntityTypeRequest || (PutEntityTypeRequest = {}));
export var PutEntityTypeResult;
(function (PutEntityTypeResult) {
    /**
     * @internal
     */
    PutEntityTypeResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEntityTypeResult || (PutEntityTypeResult = {}));
export var PutEventTypeRequest;
(function (PutEventTypeRequest) {
    /**
     * @internal
     */
    PutEventTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEventTypeRequest || (PutEventTypeRequest = {}));
export var PutEventTypeResult;
(function (PutEventTypeResult) {
    /**
     * @internal
     */
    PutEventTypeResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEventTypeResult || (PutEventTypeResult = {}));
export var PutExternalModelRequest;
(function (PutExternalModelRequest) {
    /**
     * @internal
     */
    PutExternalModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutExternalModelRequest || (PutExternalModelRequest = {}));
export var PutExternalModelResult;
(function (PutExternalModelResult) {
    /**
     * @internal
     */
    PutExternalModelResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutExternalModelResult || (PutExternalModelResult = {}));
export var PutKMSEncryptionKeyRequest;
(function (PutKMSEncryptionKeyRequest) {
    /**
     * @internal
     */
    PutKMSEncryptionKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutKMSEncryptionKeyRequest || (PutKMSEncryptionKeyRequest = {}));
export var PutKMSEncryptionKeyResult;
(function (PutKMSEncryptionKeyResult) {
    /**
     * @internal
     */
    PutKMSEncryptionKeyResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutKMSEncryptionKeyResult || (PutKMSEncryptionKeyResult = {}));
export var PutLabelRequest;
(function (PutLabelRequest) {
    /**
     * @internal
     */
    PutLabelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutLabelRequest || (PutLabelRequest = {}));
export var PutLabelResult;
(function (PutLabelResult) {
    /**
     * @internal
     */
    PutLabelResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutLabelResult || (PutLabelResult = {}));
export var PutOutcomeRequest;
(function (PutOutcomeRequest) {
    /**
     * @internal
     */
    PutOutcomeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutOutcomeRequest || (PutOutcomeRequest = {}));
export var PutOutcomeResult;
(function (PutOutcomeResult) {
    /**
     * @internal
     */
    PutOutcomeResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutOutcomeResult || (PutOutcomeResult = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResult;
(function (TagResourceResult) {
    /**
     * @internal
     */
    TagResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResult || (TagResourceResult = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResult;
(function (UntagResourceResult) {
    /**
     * @internal
     */
    UntagResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResult || (UntagResourceResult = {}));
export var UpdateDetectorVersionRequest;
(function (UpdateDetectorVersionRequest) {
    /**
     * @internal
     */
    UpdateDetectorVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDetectorVersionRequest || (UpdateDetectorVersionRequest = {}));
export var UpdateDetectorVersionResult;
(function (UpdateDetectorVersionResult) {
    /**
     * @internal
     */
    UpdateDetectorVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDetectorVersionResult || (UpdateDetectorVersionResult = {}));
export var UpdateDetectorVersionMetadataRequest;
(function (UpdateDetectorVersionMetadataRequest) {
    /**
     * @internal
     */
    UpdateDetectorVersionMetadataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDetectorVersionMetadataRequest || (UpdateDetectorVersionMetadataRequest = {}));
export var UpdateDetectorVersionMetadataResult;
(function (UpdateDetectorVersionMetadataResult) {
    /**
     * @internal
     */
    UpdateDetectorVersionMetadataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDetectorVersionMetadataResult || (UpdateDetectorVersionMetadataResult = {}));
export var UpdateDetectorVersionStatusRequest;
(function (UpdateDetectorVersionStatusRequest) {
    /**
     * @internal
     */
    UpdateDetectorVersionStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDetectorVersionStatusRequest || (UpdateDetectorVersionStatusRequest = {}));
export var UpdateDetectorVersionStatusResult;
(function (UpdateDetectorVersionStatusResult) {
    /**
     * @internal
     */
    UpdateDetectorVersionStatusResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDetectorVersionStatusResult || (UpdateDetectorVersionStatusResult = {}));
export var UpdateModelRequest;
(function (UpdateModelRequest) {
    /**
     * @internal
     */
    UpdateModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateModelRequest || (UpdateModelRequest = {}));
export var UpdateModelResult;
(function (UpdateModelResult) {
    /**
     * @internal
     */
    UpdateModelResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateModelResult || (UpdateModelResult = {}));
export var UpdateModelVersionRequest;
(function (UpdateModelVersionRequest) {
    /**
     * @internal
     */
    UpdateModelVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateModelVersionRequest || (UpdateModelVersionRequest = {}));
export var UpdateModelVersionResult;
(function (UpdateModelVersionResult) {
    /**
     * @internal
     */
    UpdateModelVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateModelVersionResult || (UpdateModelVersionResult = {}));
export var ModelVersionStatus;
(function (ModelVersionStatus) {
    ModelVersionStatus["ACTIVE"] = "ACTIVE";
    ModelVersionStatus["INACTIVE"] = "INACTIVE";
    ModelVersionStatus["TRAINING_CANCELLED"] = "TRAINING_CANCELLED";
})(ModelVersionStatus || (ModelVersionStatus = {}));
export var UpdateModelVersionStatusRequest;
(function (UpdateModelVersionStatusRequest) {
    /**
     * @internal
     */
    UpdateModelVersionStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateModelVersionStatusRequest || (UpdateModelVersionStatusRequest = {}));
export var UpdateModelVersionStatusResult;
(function (UpdateModelVersionStatusResult) {
    /**
     * @internal
     */
    UpdateModelVersionStatusResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateModelVersionStatusResult || (UpdateModelVersionStatusResult = {}));
export var UpdateRuleMetadataRequest;
(function (UpdateRuleMetadataRequest) {
    /**
     * @internal
     */
    UpdateRuleMetadataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRuleMetadataRequest || (UpdateRuleMetadataRequest = {}));
export var UpdateRuleMetadataResult;
(function (UpdateRuleMetadataResult) {
    /**
     * @internal
     */
    UpdateRuleMetadataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRuleMetadataResult || (UpdateRuleMetadataResult = {}));
export var UpdateRuleVersionRequest;
(function (UpdateRuleVersionRequest) {
    /**
     * @internal
     */
    UpdateRuleVersionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.expression && { expression: SENSITIVE_STRING }))); };
})(UpdateRuleVersionRequest || (UpdateRuleVersionRequest = {}));
export var UpdateRuleVersionResult;
(function (UpdateRuleVersionResult) {
    /**
     * @internal
     */
    UpdateRuleVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRuleVersionResult || (UpdateRuleVersionResult = {}));
export var UpdateVariableRequest;
(function (UpdateVariableRequest) {
    /**
     * @internal
     */
    UpdateVariableRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVariableRequest || (UpdateVariableRequest = {}));
export var UpdateVariableResult;
(function (UpdateVariableResult) {
    /**
     * @internal
     */
    UpdateVariableResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVariableResult || (UpdateVariableResult = {}));
//# sourceMappingURL=models_0.js.map