import { __assign } from "tslib";
export var EntityType;
(function (EntityType) {
    EntityType["ANATOMY"] = "ANATOMY";
    EntityType["MEDICAL_CONDITION"] = "MEDICAL_CONDITION";
    EntityType["MEDICATION"] = "MEDICATION";
    EntityType["PROTECTED_HEALTH_INFORMATION"] = "PROTECTED_HEALTH_INFORMATION";
    EntityType["TEST_TREATMENT_PROCEDURE"] = "TEST_TREATMENT_PROCEDURE";
    EntityType["TIME_EXPRESSION"] = "TIME_EXPRESSION";
})(EntityType || (EntityType = {}));
export var RelationshipType;
(function (RelationshipType) {
    RelationshipType["ACUITY"] = "ACUITY";
    RelationshipType["ADMINISTERED_VIA"] = "ADMINISTERED_VIA";
    RelationshipType["DIRECTION"] = "DIRECTION";
    RelationshipType["DOSAGE"] = "DOSAGE";
    RelationshipType["DURATION"] = "DURATION";
    RelationshipType["EVERY"] = "EVERY";
    RelationshipType["FOR"] = "FOR";
    RelationshipType["FORM"] = "FORM";
    RelationshipType["FREQUENCY"] = "FREQUENCY";
    RelationshipType["NEGATIVE"] = "NEGATIVE";
    RelationshipType["OVERLAP"] = "OVERLAP";
    RelationshipType["RATE"] = "RATE";
    RelationshipType["ROUTE_OR_MODE"] = "ROUTE_OR_MODE";
    RelationshipType["STRENGTH"] = "STRENGTH";
    RelationshipType["SYSTEM_ORGAN_SITE"] = "SYSTEM_ORGAN_SITE";
    RelationshipType["TEST_UNITS"] = "TEST_UNITS";
    RelationshipType["TEST_VALUE"] = "TEST_VALUE";
    RelationshipType["WITH_DOSAGE"] = "WITH_DOSAGE";
})(RelationshipType || (RelationshipType = {}));
export var AttributeName;
(function (AttributeName) {
    AttributeName["DIAGNOSIS"] = "DIAGNOSIS";
    AttributeName["NEGATION"] = "NEGATION";
    AttributeName["SIGN"] = "SIGN";
    AttributeName["SYMPTOM"] = "SYMPTOM";
})(AttributeName || (AttributeName = {}));
export var Trait;
(function (Trait) {
    /**
     * @internal
     */
    Trait.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Trait || (Trait = {}));
export var EntitySubType;
(function (EntitySubType) {
    EntitySubType["ACUITY"] = "ACUITY";
    EntitySubType["ADDRESS"] = "ADDRESS";
    EntitySubType["AGE"] = "AGE";
    EntitySubType["BRAND_NAME"] = "BRAND_NAME";
    EntitySubType["CONTACT_POINT"] = "CONTACT_POINT";
    EntitySubType["DATE"] = "DATE";
    EntitySubType["DIRECTION"] = "DIRECTION";
    EntitySubType["DOSAGE"] = "DOSAGE";
    EntitySubType["DURATION"] = "DURATION";
    EntitySubType["EMAIL"] = "EMAIL";
    EntitySubType["FORM"] = "FORM";
    EntitySubType["FREQUENCY"] = "FREQUENCY";
    EntitySubType["GENERIC_NAME"] = "GENERIC_NAME";
    EntitySubType["IDENTIFIER"] = "IDENTIFIER";
    EntitySubType["NAME"] = "NAME";
    EntitySubType["PROCEDURE_NAME"] = "PROCEDURE_NAME";
    EntitySubType["PROFESSION"] = "PROFESSION";
    EntitySubType["QUALITY"] = "QUALITY";
    EntitySubType["QUANTITY"] = "QUANTITY";
    EntitySubType["RATE"] = "RATE";
    EntitySubType["ROUTE_OR_MODE"] = "ROUTE_OR_MODE";
    EntitySubType["STRENGTH"] = "STRENGTH";
    EntitySubType["SYSTEM_ORGAN_SITE"] = "SYSTEM_ORGAN_SITE";
    EntitySubType["TEST_NAME"] = "TEST_NAME";
    EntitySubType["TEST_UNITS"] = "TEST_UNITS";
    EntitySubType["TEST_VALUE"] = "TEST_VALUE";
    EntitySubType["TIME_EXPRESSION"] = "TIME_EXPRESSION";
    EntitySubType["TIME_TO_DX_NAME"] = "TIME_TO_DX_NAME";
    EntitySubType["TIME_TO_MEDICATION_NAME"] = "TIME_TO_MEDICATION_NAME";
    EntitySubType["TIME_TO_PROCEDURE_NAME"] = "TIME_TO_PROCEDURE_NAME";
    EntitySubType["TIME_TO_TEST_NAME"] = "TIME_TO_TEST_NAME";
    EntitySubType["TIME_TO_TREATMENT_NAME"] = "TIME_TO_TREATMENT_NAME";
    EntitySubType["TREATMENT_NAME"] = "TREATMENT_NAME";
    EntitySubType["URL"] = "URL";
})(EntitySubType || (EntitySubType = {}));
export var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Attribute || (Attribute = {}));
export var DescribeEntitiesDetectionV2JobRequest;
(function (DescribeEntitiesDetectionV2JobRequest) {
    /**
     * @internal
     */
    DescribeEntitiesDetectionV2JobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEntitiesDetectionV2JobRequest || (DescribeEntitiesDetectionV2JobRequest = {}));
export var InputDataConfig;
(function (InputDataConfig) {
    /**
     * @internal
     */
    InputDataConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDataConfig || (InputDataConfig = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobStatus["PARTIAL_SUCCESS"] = "PARTIAL_SUCCESS";
    JobStatus["STOPPED"] = "STOPPED";
    JobStatus["STOP_REQUESTED"] = "STOP_REQUESTED";
    JobStatus["SUBMITTED"] = "SUBMITTED";
})(JobStatus || (JobStatus = {}));
export var LanguageCode;
(function (LanguageCode) {
    LanguageCode["EN"] = "en";
})(LanguageCode || (LanguageCode = {}));
export var OutputDataConfig;
(function (OutputDataConfig) {
    /**
     * @internal
     */
    OutputDataConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputDataConfig || (OutputDataConfig = {}));
export var ComprehendMedicalAsyncJobProperties;
(function (ComprehendMedicalAsyncJobProperties) {
    /**
     * @internal
     */
    ComprehendMedicalAsyncJobProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComprehendMedicalAsyncJobProperties || (ComprehendMedicalAsyncJobProperties = {}));
export var DescribeEntitiesDetectionV2JobResponse;
(function (DescribeEntitiesDetectionV2JobResponse) {
    /**
     * @internal
     */
    DescribeEntitiesDetectionV2JobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEntitiesDetectionV2JobResponse || (DescribeEntitiesDetectionV2JobResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var DescribeICD10CMInferenceJobRequest;
(function (DescribeICD10CMInferenceJobRequest) {
    /**
     * @internal
     */
    DescribeICD10CMInferenceJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeICD10CMInferenceJobRequest || (DescribeICD10CMInferenceJobRequest = {}));
export var DescribeICD10CMInferenceJobResponse;
(function (DescribeICD10CMInferenceJobResponse) {
    /**
     * @internal
     */
    DescribeICD10CMInferenceJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeICD10CMInferenceJobResponse || (DescribeICD10CMInferenceJobResponse = {}));
export var DescribePHIDetectionJobRequest;
(function (DescribePHIDetectionJobRequest) {
    /**
     * @internal
     */
    DescribePHIDetectionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePHIDetectionJobRequest || (DescribePHIDetectionJobRequest = {}));
export var DescribePHIDetectionJobResponse;
(function (DescribePHIDetectionJobResponse) {
    /**
     * @internal
     */
    DescribePHIDetectionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePHIDetectionJobResponse || (DescribePHIDetectionJobResponse = {}));
export var DescribeRxNormInferenceJobRequest;
(function (DescribeRxNormInferenceJobRequest) {
    /**
     * @internal
     */
    DescribeRxNormInferenceJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRxNormInferenceJobRequest || (DescribeRxNormInferenceJobRequest = {}));
export var DescribeRxNormInferenceJobResponse;
(function (DescribeRxNormInferenceJobResponse) {
    /**
     * @internal
     */
    DescribeRxNormInferenceJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRxNormInferenceJobResponse || (DescribeRxNormInferenceJobResponse = {}));
export var DetectEntitiesRequest;
(function (DetectEntitiesRequest) {
    /**
     * @internal
     */
    DetectEntitiesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectEntitiesRequest || (DetectEntitiesRequest = {}));
export var Entity;
(function (Entity) {
    /**
     * @internal
     */
    Entity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Entity || (Entity = {}));
export var UnmappedAttribute;
(function (UnmappedAttribute) {
    /**
     * @internal
     */
    UnmappedAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnmappedAttribute || (UnmappedAttribute = {}));
export var DetectEntitiesResponse;
(function (DetectEntitiesResponse) {
    /**
     * @internal
     */
    DetectEntitiesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectEntitiesResponse || (DetectEntitiesResponse = {}));
export var InvalidEncodingException;
(function (InvalidEncodingException) {
    /**
     * @internal
     */
    InvalidEncodingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidEncodingException || (InvalidEncodingException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var TextSizeLimitExceededException;
(function (TextSizeLimitExceededException) {
    /**
     * @internal
     */
    TextSizeLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TextSizeLimitExceededException || (TextSizeLimitExceededException = {}));
export var DetectEntitiesV2Request;
(function (DetectEntitiesV2Request) {
    /**
     * @internal
     */
    DetectEntitiesV2Request.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectEntitiesV2Request || (DetectEntitiesV2Request = {}));
export var DetectEntitiesV2Response;
(function (DetectEntitiesV2Response) {
    /**
     * @internal
     */
    DetectEntitiesV2Response.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectEntitiesV2Response || (DetectEntitiesV2Response = {}));
export var DetectPHIRequest;
(function (DetectPHIRequest) {
    /**
     * @internal
     */
    DetectPHIRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectPHIRequest || (DetectPHIRequest = {}));
export var DetectPHIResponse;
(function (DetectPHIResponse) {
    /**
     * @internal
     */
    DetectPHIResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectPHIResponse || (DetectPHIResponse = {}));
export var InferICD10CMRequest;
(function (InferICD10CMRequest) {
    /**
     * @internal
     */
    InferICD10CMRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferICD10CMRequest || (InferICD10CMRequest = {}));
export var ICD10CMEntityType;
(function (ICD10CMEntityType) {
    ICD10CMEntityType["DX_NAME"] = "DX_NAME";
    ICD10CMEntityType["TIME_EXPRESSION"] = "TIME_EXPRESSION";
})(ICD10CMEntityType || (ICD10CMEntityType = {}));
export var ICD10CMRelationshipType;
(function (ICD10CMRelationshipType) {
    ICD10CMRelationshipType["OVERLAP"] = "OVERLAP";
    ICD10CMRelationshipType["SYSTEM_ORGAN_SITE"] = "SYSTEM_ORGAN_SITE";
})(ICD10CMRelationshipType || (ICD10CMRelationshipType = {}));
export var ICD10CMTraitName;
(function (ICD10CMTraitName) {
    ICD10CMTraitName["DIAGNOSIS"] = "DIAGNOSIS";
    ICD10CMTraitName["NEGATION"] = "NEGATION";
    ICD10CMTraitName["SIGN"] = "SIGN";
    ICD10CMTraitName["SYMPTOM"] = "SYMPTOM";
})(ICD10CMTraitName || (ICD10CMTraitName = {}));
export var ICD10CMTrait;
(function (ICD10CMTrait) {
    /**
     * @internal
     */
    ICD10CMTrait.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ICD10CMTrait || (ICD10CMTrait = {}));
export var ICD10CMAttributeType;
(function (ICD10CMAttributeType) {
    ICD10CMAttributeType["ACUITY"] = "ACUITY";
    ICD10CMAttributeType["DIRECTION"] = "DIRECTION";
    ICD10CMAttributeType["QUALITY"] = "QUALITY";
    ICD10CMAttributeType["QUANTITY"] = "QUANTITY";
    ICD10CMAttributeType["SYSTEM_ORGAN_SITE"] = "SYSTEM_ORGAN_SITE";
    ICD10CMAttributeType["TIME_EXPRESSION"] = "TIME_EXPRESSION";
    ICD10CMAttributeType["TIME_TO_DX_NAME"] = "TIME_TO_DX_NAME";
})(ICD10CMAttributeType || (ICD10CMAttributeType = {}));
export var ICD10CMAttribute;
(function (ICD10CMAttribute) {
    /**
     * @internal
     */
    ICD10CMAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ICD10CMAttribute || (ICD10CMAttribute = {}));
export var ICD10CMEntityCategory;
(function (ICD10CMEntityCategory) {
    ICD10CMEntityCategory["MEDICAL_CONDITION"] = "MEDICAL_CONDITION";
})(ICD10CMEntityCategory || (ICD10CMEntityCategory = {}));
export var ICD10CMConcept;
(function (ICD10CMConcept) {
    /**
     * @internal
     */
    ICD10CMConcept.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ICD10CMConcept || (ICD10CMConcept = {}));
export var ICD10CMEntity;
(function (ICD10CMEntity) {
    /**
     * @internal
     */
    ICD10CMEntity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ICD10CMEntity || (ICD10CMEntity = {}));
export var InferICD10CMResponse;
(function (InferICD10CMResponse) {
    /**
     * @internal
     */
    InferICD10CMResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferICD10CMResponse || (InferICD10CMResponse = {}));
export var InferRxNormRequest;
(function (InferRxNormRequest) {
    /**
     * @internal
     */
    InferRxNormRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferRxNormRequest || (InferRxNormRequest = {}));
export var RxNormTraitName;
(function (RxNormTraitName) {
    RxNormTraitName["NEGATION"] = "NEGATION";
})(RxNormTraitName || (RxNormTraitName = {}));
export var RxNormTrait;
(function (RxNormTrait) {
    /**
     * @internal
     */
    RxNormTrait.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RxNormTrait || (RxNormTrait = {}));
export var RxNormAttributeType;
(function (RxNormAttributeType) {
    RxNormAttributeType["DOSAGE"] = "DOSAGE";
    RxNormAttributeType["DURATION"] = "DURATION";
    RxNormAttributeType["FORM"] = "FORM";
    RxNormAttributeType["FREQUENCY"] = "FREQUENCY";
    RxNormAttributeType["RATE"] = "RATE";
    RxNormAttributeType["ROUTE_OR_MODE"] = "ROUTE_OR_MODE";
    RxNormAttributeType["STRENGTH"] = "STRENGTH";
})(RxNormAttributeType || (RxNormAttributeType = {}));
export var RxNormAttribute;
(function (RxNormAttribute) {
    /**
     * @internal
     */
    RxNormAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RxNormAttribute || (RxNormAttribute = {}));
export var RxNormEntityCategory;
(function (RxNormEntityCategory) {
    RxNormEntityCategory["MEDICATION"] = "MEDICATION";
})(RxNormEntityCategory || (RxNormEntityCategory = {}));
export var RxNormConcept;
(function (RxNormConcept) {
    /**
     * @internal
     */
    RxNormConcept.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RxNormConcept || (RxNormConcept = {}));
export var RxNormEntityType;
(function (RxNormEntityType) {
    RxNormEntityType["BRAND_NAME"] = "BRAND_NAME";
    RxNormEntityType["GENERIC_NAME"] = "GENERIC_NAME";
})(RxNormEntityType || (RxNormEntityType = {}));
export var RxNormEntity;
(function (RxNormEntity) {
    /**
     * @internal
     */
    RxNormEntity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RxNormEntity || (RxNormEntity = {}));
export var InferRxNormResponse;
(function (InferRxNormResponse) {
    /**
     * @internal
     */
    InferRxNormResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferRxNormResponse || (InferRxNormResponse = {}));
export var ComprehendMedicalAsyncJobFilter;
(function (ComprehendMedicalAsyncJobFilter) {
    /**
     * @internal
     */
    ComprehendMedicalAsyncJobFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComprehendMedicalAsyncJobFilter || (ComprehendMedicalAsyncJobFilter = {}));
export var ListEntitiesDetectionV2JobsRequest;
(function (ListEntitiesDetectionV2JobsRequest) {
    /**
     * @internal
     */
    ListEntitiesDetectionV2JobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEntitiesDetectionV2JobsRequest || (ListEntitiesDetectionV2JobsRequest = {}));
export var ListEntitiesDetectionV2JobsResponse;
(function (ListEntitiesDetectionV2JobsResponse) {
    /**
     * @internal
     */
    ListEntitiesDetectionV2JobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEntitiesDetectionV2JobsResponse || (ListEntitiesDetectionV2JobsResponse = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var ListICD10CMInferenceJobsRequest;
(function (ListICD10CMInferenceJobsRequest) {
    /**
     * @internal
     */
    ListICD10CMInferenceJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListICD10CMInferenceJobsRequest || (ListICD10CMInferenceJobsRequest = {}));
export var ListICD10CMInferenceJobsResponse;
(function (ListICD10CMInferenceJobsResponse) {
    /**
     * @internal
     */
    ListICD10CMInferenceJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListICD10CMInferenceJobsResponse || (ListICD10CMInferenceJobsResponse = {}));
export var ListPHIDetectionJobsRequest;
(function (ListPHIDetectionJobsRequest) {
    /**
     * @internal
     */
    ListPHIDetectionJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPHIDetectionJobsRequest || (ListPHIDetectionJobsRequest = {}));
export var ListPHIDetectionJobsResponse;
(function (ListPHIDetectionJobsResponse) {
    /**
     * @internal
     */
    ListPHIDetectionJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPHIDetectionJobsResponse || (ListPHIDetectionJobsResponse = {}));
export var ListRxNormInferenceJobsRequest;
(function (ListRxNormInferenceJobsRequest) {
    /**
     * @internal
     */
    ListRxNormInferenceJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRxNormInferenceJobsRequest || (ListRxNormInferenceJobsRequest = {}));
export var ListRxNormInferenceJobsResponse;
(function (ListRxNormInferenceJobsResponse) {
    /**
     * @internal
     */
    ListRxNormInferenceJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRxNormInferenceJobsResponse || (ListRxNormInferenceJobsResponse = {}));
export var StartEntitiesDetectionV2JobRequest;
(function (StartEntitiesDetectionV2JobRequest) {
    /**
     * @internal
     */
    StartEntitiesDetectionV2JobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartEntitiesDetectionV2JobRequest || (StartEntitiesDetectionV2JobRequest = {}));
export var StartEntitiesDetectionV2JobResponse;
(function (StartEntitiesDetectionV2JobResponse) {
    /**
     * @internal
     */
    StartEntitiesDetectionV2JobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartEntitiesDetectionV2JobResponse || (StartEntitiesDetectionV2JobResponse = {}));
export var StartICD10CMInferenceJobRequest;
(function (StartICD10CMInferenceJobRequest) {
    /**
     * @internal
     */
    StartICD10CMInferenceJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartICD10CMInferenceJobRequest || (StartICD10CMInferenceJobRequest = {}));
export var StartICD10CMInferenceJobResponse;
(function (StartICD10CMInferenceJobResponse) {
    /**
     * @internal
     */
    StartICD10CMInferenceJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartICD10CMInferenceJobResponse || (StartICD10CMInferenceJobResponse = {}));
export var StartPHIDetectionJobRequest;
(function (StartPHIDetectionJobRequest) {
    /**
     * @internal
     */
    StartPHIDetectionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartPHIDetectionJobRequest || (StartPHIDetectionJobRequest = {}));
export var StartPHIDetectionJobResponse;
(function (StartPHIDetectionJobResponse) {
    /**
     * @internal
     */
    StartPHIDetectionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartPHIDetectionJobResponse || (StartPHIDetectionJobResponse = {}));
export var StartRxNormInferenceJobRequest;
(function (StartRxNormInferenceJobRequest) {
    /**
     * @internal
     */
    StartRxNormInferenceJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartRxNormInferenceJobRequest || (StartRxNormInferenceJobRequest = {}));
export var StartRxNormInferenceJobResponse;
(function (StartRxNormInferenceJobResponse) {
    /**
     * @internal
     */
    StartRxNormInferenceJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartRxNormInferenceJobResponse || (StartRxNormInferenceJobResponse = {}));
export var StopEntitiesDetectionV2JobRequest;
(function (StopEntitiesDetectionV2JobRequest) {
    /**
     * @internal
     */
    StopEntitiesDetectionV2JobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopEntitiesDetectionV2JobRequest || (StopEntitiesDetectionV2JobRequest = {}));
export var StopEntitiesDetectionV2JobResponse;
(function (StopEntitiesDetectionV2JobResponse) {
    /**
     * @internal
     */
    StopEntitiesDetectionV2JobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopEntitiesDetectionV2JobResponse || (StopEntitiesDetectionV2JobResponse = {}));
export var StopICD10CMInferenceJobRequest;
(function (StopICD10CMInferenceJobRequest) {
    /**
     * @internal
     */
    StopICD10CMInferenceJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopICD10CMInferenceJobRequest || (StopICD10CMInferenceJobRequest = {}));
export var StopICD10CMInferenceJobResponse;
(function (StopICD10CMInferenceJobResponse) {
    /**
     * @internal
     */
    StopICD10CMInferenceJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopICD10CMInferenceJobResponse || (StopICD10CMInferenceJobResponse = {}));
export var StopPHIDetectionJobRequest;
(function (StopPHIDetectionJobRequest) {
    /**
     * @internal
     */
    StopPHIDetectionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopPHIDetectionJobRequest || (StopPHIDetectionJobRequest = {}));
export var StopPHIDetectionJobResponse;
(function (StopPHIDetectionJobResponse) {
    /**
     * @internal
     */
    StopPHIDetectionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopPHIDetectionJobResponse || (StopPHIDetectionJobResponse = {}));
export var StopRxNormInferenceJobRequest;
(function (StopRxNormInferenceJobRequest) {
    /**
     * @internal
     */
    StopRxNormInferenceJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopRxNormInferenceJobRequest || (StopRxNormInferenceJobRequest = {}));
export var StopRxNormInferenceJobResponse;
(function (StopRxNormInferenceJobResponse) {
    /**
     * @internal
     */
    StopRxNormInferenceJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopRxNormInferenceJobResponse || (StopRxNormInferenceJobResponse = {}));
//# sourceMappingURL=models_0.js.map