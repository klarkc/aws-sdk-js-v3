"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RxNormAttribute = exports.RxNormAttributeType = exports.RxNormTrait = exports.RxNormTraitName = exports.InferRxNormRequest = exports.InferICD10CMResponse = exports.ICD10CMEntity = exports.ICD10CMConcept = exports.ICD10CMEntityCategory = exports.ICD10CMAttribute = exports.ICD10CMAttributeType = exports.ICD10CMTrait = exports.ICD10CMTraitName = exports.ICD10CMRelationshipType = exports.ICD10CMEntityType = exports.InferICD10CMRequest = exports.DetectPHIResponse = exports.DetectPHIRequest = exports.DetectEntitiesV2Response = exports.DetectEntitiesV2Request = exports.TextSizeLimitExceededException = exports.ServiceUnavailableException = exports.InvalidEncodingException = exports.DetectEntitiesResponse = exports.UnmappedAttribute = exports.Entity = exports.DetectEntitiesRequest = exports.DescribeRxNormInferenceJobResponse = exports.DescribeRxNormInferenceJobRequest = exports.DescribePHIDetectionJobResponse = exports.DescribePHIDetectionJobRequest = exports.DescribeICD10CMInferenceJobResponse = exports.DescribeICD10CMInferenceJobRequest = exports.TooManyRequestsException = exports.ResourceNotFoundException = exports.InvalidRequestException = exports.InternalServerException = exports.DescribeEntitiesDetectionV2JobResponse = exports.ComprehendMedicalAsyncJobProperties = exports.OutputDataConfig = exports.LanguageCode = exports.JobStatus = exports.InputDataConfig = exports.DescribeEntitiesDetectionV2JobRequest = exports.Attribute = exports.EntitySubType = exports.Trait = exports.AttributeName = exports.RelationshipType = exports.EntityType = void 0;
exports.StopRxNormInferenceJobResponse = exports.StopRxNormInferenceJobRequest = exports.StopPHIDetectionJobResponse = exports.StopPHIDetectionJobRequest = exports.StopICD10CMInferenceJobResponse = exports.StopICD10CMInferenceJobRequest = exports.StopEntitiesDetectionV2JobResponse = exports.StopEntitiesDetectionV2JobRequest = exports.StartRxNormInferenceJobResponse = exports.StartRxNormInferenceJobRequest = exports.StartPHIDetectionJobResponse = exports.StartPHIDetectionJobRequest = exports.StartICD10CMInferenceJobResponse = exports.StartICD10CMInferenceJobRequest = exports.StartEntitiesDetectionV2JobResponse = exports.StartEntitiesDetectionV2JobRequest = exports.ListRxNormInferenceJobsResponse = exports.ListRxNormInferenceJobsRequest = exports.ListPHIDetectionJobsResponse = exports.ListPHIDetectionJobsRequest = exports.ListICD10CMInferenceJobsResponse = exports.ListICD10CMInferenceJobsRequest = exports.ValidationException = exports.ListEntitiesDetectionV2JobsResponse = exports.ListEntitiesDetectionV2JobsRequest = exports.ComprehendMedicalAsyncJobFilter = exports.InferRxNormResponse = exports.RxNormEntity = exports.RxNormEntityType = exports.RxNormConcept = exports.RxNormEntityCategory = void 0;
var EntityType;
(function (EntityType) {
    EntityType["ANATOMY"] = "ANATOMY";
    EntityType["MEDICAL_CONDITION"] = "MEDICAL_CONDITION";
    EntityType["MEDICATION"] = "MEDICATION";
    EntityType["PROTECTED_HEALTH_INFORMATION"] = "PROTECTED_HEALTH_INFORMATION";
    EntityType["TEST_TREATMENT_PROCEDURE"] = "TEST_TREATMENT_PROCEDURE";
    EntityType["TIME_EXPRESSION"] = "TIME_EXPRESSION";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
var RelationshipType;
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
})(RelationshipType = exports.RelationshipType || (exports.RelationshipType = {}));
var AttributeName;
(function (AttributeName) {
    AttributeName["DIAGNOSIS"] = "DIAGNOSIS";
    AttributeName["NEGATION"] = "NEGATION";
    AttributeName["SIGN"] = "SIGN";
    AttributeName["SYMPTOM"] = "SYMPTOM";
})(AttributeName = exports.AttributeName || (exports.AttributeName = {}));
var Trait;
(function (Trait) {
    /**
     * @internal
     */
    Trait.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Trait = exports.Trait || (exports.Trait = {}));
var EntitySubType;
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
})(EntitySubType = exports.EntitySubType || (exports.EntitySubType = {}));
var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var DescribeEntitiesDetectionV2JobRequest;
(function (DescribeEntitiesDetectionV2JobRequest) {
    /**
     * @internal
     */
    DescribeEntitiesDetectionV2JobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEntitiesDetectionV2JobRequest = exports.DescribeEntitiesDetectionV2JobRequest || (exports.DescribeEntitiesDetectionV2JobRequest = {}));
var InputDataConfig;
(function (InputDataConfig) {
    /**
     * @internal
     */
    InputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDataConfig = exports.InputDataConfig || (exports.InputDataConfig = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobStatus["PARTIAL_SUCCESS"] = "PARTIAL_SUCCESS";
    JobStatus["STOPPED"] = "STOPPED";
    JobStatus["STOP_REQUESTED"] = "STOP_REQUESTED";
    JobStatus["SUBMITTED"] = "SUBMITTED";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["EN"] = "en";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));
var OutputDataConfig;
(function (OutputDataConfig) {
    /**
     * @internal
     */
    OutputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputDataConfig = exports.OutputDataConfig || (exports.OutputDataConfig = {}));
var ComprehendMedicalAsyncJobProperties;
(function (ComprehendMedicalAsyncJobProperties) {
    /**
     * @internal
     */
    ComprehendMedicalAsyncJobProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComprehendMedicalAsyncJobProperties = exports.ComprehendMedicalAsyncJobProperties || (exports.ComprehendMedicalAsyncJobProperties = {}));
var DescribeEntitiesDetectionV2JobResponse;
(function (DescribeEntitiesDetectionV2JobResponse) {
    /**
     * @internal
     */
    DescribeEntitiesDetectionV2JobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEntitiesDetectionV2JobResponse = exports.DescribeEntitiesDetectionV2JobResponse || (exports.DescribeEntitiesDetectionV2JobResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var DescribeICD10CMInferenceJobRequest;
(function (DescribeICD10CMInferenceJobRequest) {
    /**
     * @internal
     */
    DescribeICD10CMInferenceJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeICD10CMInferenceJobRequest = exports.DescribeICD10CMInferenceJobRequest || (exports.DescribeICD10CMInferenceJobRequest = {}));
var DescribeICD10CMInferenceJobResponse;
(function (DescribeICD10CMInferenceJobResponse) {
    /**
     * @internal
     */
    DescribeICD10CMInferenceJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeICD10CMInferenceJobResponse = exports.DescribeICD10CMInferenceJobResponse || (exports.DescribeICD10CMInferenceJobResponse = {}));
var DescribePHIDetectionJobRequest;
(function (DescribePHIDetectionJobRequest) {
    /**
     * @internal
     */
    DescribePHIDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePHIDetectionJobRequest = exports.DescribePHIDetectionJobRequest || (exports.DescribePHIDetectionJobRequest = {}));
var DescribePHIDetectionJobResponse;
(function (DescribePHIDetectionJobResponse) {
    /**
     * @internal
     */
    DescribePHIDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePHIDetectionJobResponse = exports.DescribePHIDetectionJobResponse || (exports.DescribePHIDetectionJobResponse = {}));
var DescribeRxNormInferenceJobRequest;
(function (DescribeRxNormInferenceJobRequest) {
    /**
     * @internal
     */
    DescribeRxNormInferenceJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRxNormInferenceJobRequest = exports.DescribeRxNormInferenceJobRequest || (exports.DescribeRxNormInferenceJobRequest = {}));
var DescribeRxNormInferenceJobResponse;
(function (DescribeRxNormInferenceJobResponse) {
    /**
     * @internal
     */
    DescribeRxNormInferenceJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRxNormInferenceJobResponse = exports.DescribeRxNormInferenceJobResponse || (exports.DescribeRxNormInferenceJobResponse = {}));
var DetectEntitiesRequest;
(function (DetectEntitiesRequest) {
    /**
     * @internal
     */
    DetectEntitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectEntitiesRequest = exports.DetectEntitiesRequest || (exports.DetectEntitiesRequest = {}));
var Entity;
(function (Entity) {
    /**
     * @internal
     */
    Entity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Entity = exports.Entity || (exports.Entity = {}));
var UnmappedAttribute;
(function (UnmappedAttribute) {
    /**
     * @internal
     */
    UnmappedAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnmappedAttribute = exports.UnmappedAttribute || (exports.UnmappedAttribute = {}));
var DetectEntitiesResponse;
(function (DetectEntitiesResponse) {
    /**
     * @internal
     */
    DetectEntitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectEntitiesResponse = exports.DetectEntitiesResponse || (exports.DetectEntitiesResponse = {}));
var InvalidEncodingException;
(function (InvalidEncodingException) {
    /**
     * @internal
     */
    InvalidEncodingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEncodingException = exports.InvalidEncodingException || (exports.InvalidEncodingException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var TextSizeLimitExceededException;
(function (TextSizeLimitExceededException) {
    /**
     * @internal
     */
    TextSizeLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextSizeLimitExceededException = exports.TextSizeLimitExceededException || (exports.TextSizeLimitExceededException = {}));
var DetectEntitiesV2Request;
(function (DetectEntitiesV2Request) {
    /**
     * @internal
     */
    DetectEntitiesV2Request.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectEntitiesV2Request = exports.DetectEntitiesV2Request || (exports.DetectEntitiesV2Request = {}));
var DetectEntitiesV2Response;
(function (DetectEntitiesV2Response) {
    /**
     * @internal
     */
    DetectEntitiesV2Response.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectEntitiesV2Response = exports.DetectEntitiesV2Response || (exports.DetectEntitiesV2Response = {}));
var DetectPHIRequest;
(function (DetectPHIRequest) {
    /**
     * @internal
     */
    DetectPHIRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectPHIRequest = exports.DetectPHIRequest || (exports.DetectPHIRequest = {}));
var DetectPHIResponse;
(function (DetectPHIResponse) {
    /**
     * @internal
     */
    DetectPHIResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectPHIResponse = exports.DetectPHIResponse || (exports.DetectPHIResponse = {}));
var InferICD10CMRequest;
(function (InferICD10CMRequest) {
    /**
     * @internal
     */
    InferICD10CMRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferICD10CMRequest = exports.InferICD10CMRequest || (exports.InferICD10CMRequest = {}));
var ICD10CMEntityType;
(function (ICD10CMEntityType) {
    ICD10CMEntityType["DX_NAME"] = "DX_NAME";
    ICD10CMEntityType["TIME_EXPRESSION"] = "TIME_EXPRESSION";
})(ICD10CMEntityType = exports.ICD10CMEntityType || (exports.ICD10CMEntityType = {}));
var ICD10CMRelationshipType;
(function (ICD10CMRelationshipType) {
    ICD10CMRelationshipType["OVERLAP"] = "OVERLAP";
    ICD10CMRelationshipType["SYSTEM_ORGAN_SITE"] = "SYSTEM_ORGAN_SITE";
})(ICD10CMRelationshipType = exports.ICD10CMRelationshipType || (exports.ICD10CMRelationshipType = {}));
var ICD10CMTraitName;
(function (ICD10CMTraitName) {
    ICD10CMTraitName["DIAGNOSIS"] = "DIAGNOSIS";
    ICD10CMTraitName["NEGATION"] = "NEGATION";
    ICD10CMTraitName["SIGN"] = "SIGN";
    ICD10CMTraitName["SYMPTOM"] = "SYMPTOM";
})(ICD10CMTraitName = exports.ICD10CMTraitName || (exports.ICD10CMTraitName = {}));
var ICD10CMTrait;
(function (ICD10CMTrait) {
    /**
     * @internal
     */
    ICD10CMTrait.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ICD10CMTrait = exports.ICD10CMTrait || (exports.ICD10CMTrait = {}));
var ICD10CMAttributeType;
(function (ICD10CMAttributeType) {
    ICD10CMAttributeType["ACUITY"] = "ACUITY";
    ICD10CMAttributeType["DIRECTION"] = "DIRECTION";
    ICD10CMAttributeType["QUALITY"] = "QUALITY";
    ICD10CMAttributeType["QUANTITY"] = "QUANTITY";
    ICD10CMAttributeType["SYSTEM_ORGAN_SITE"] = "SYSTEM_ORGAN_SITE";
    ICD10CMAttributeType["TIME_EXPRESSION"] = "TIME_EXPRESSION";
    ICD10CMAttributeType["TIME_TO_DX_NAME"] = "TIME_TO_DX_NAME";
})(ICD10CMAttributeType = exports.ICD10CMAttributeType || (exports.ICD10CMAttributeType = {}));
var ICD10CMAttribute;
(function (ICD10CMAttribute) {
    /**
     * @internal
     */
    ICD10CMAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ICD10CMAttribute = exports.ICD10CMAttribute || (exports.ICD10CMAttribute = {}));
var ICD10CMEntityCategory;
(function (ICD10CMEntityCategory) {
    ICD10CMEntityCategory["MEDICAL_CONDITION"] = "MEDICAL_CONDITION";
})(ICD10CMEntityCategory = exports.ICD10CMEntityCategory || (exports.ICD10CMEntityCategory = {}));
var ICD10CMConcept;
(function (ICD10CMConcept) {
    /**
     * @internal
     */
    ICD10CMConcept.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ICD10CMConcept = exports.ICD10CMConcept || (exports.ICD10CMConcept = {}));
var ICD10CMEntity;
(function (ICD10CMEntity) {
    /**
     * @internal
     */
    ICD10CMEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ICD10CMEntity = exports.ICD10CMEntity || (exports.ICD10CMEntity = {}));
var InferICD10CMResponse;
(function (InferICD10CMResponse) {
    /**
     * @internal
     */
    InferICD10CMResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferICD10CMResponse = exports.InferICD10CMResponse || (exports.InferICD10CMResponse = {}));
var InferRxNormRequest;
(function (InferRxNormRequest) {
    /**
     * @internal
     */
    InferRxNormRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferRxNormRequest = exports.InferRxNormRequest || (exports.InferRxNormRequest = {}));
var RxNormTraitName;
(function (RxNormTraitName) {
    RxNormTraitName["NEGATION"] = "NEGATION";
})(RxNormTraitName = exports.RxNormTraitName || (exports.RxNormTraitName = {}));
var RxNormTrait;
(function (RxNormTrait) {
    /**
     * @internal
     */
    RxNormTrait.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RxNormTrait = exports.RxNormTrait || (exports.RxNormTrait = {}));
var RxNormAttributeType;
(function (RxNormAttributeType) {
    RxNormAttributeType["DOSAGE"] = "DOSAGE";
    RxNormAttributeType["DURATION"] = "DURATION";
    RxNormAttributeType["FORM"] = "FORM";
    RxNormAttributeType["FREQUENCY"] = "FREQUENCY";
    RxNormAttributeType["RATE"] = "RATE";
    RxNormAttributeType["ROUTE_OR_MODE"] = "ROUTE_OR_MODE";
    RxNormAttributeType["STRENGTH"] = "STRENGTH";
})(RxNormAttributeType = exports.RxNormAttributeType || (exports.RxNormAttributeType = {}));
var RxNormAttribute;
(function (RxNormAttribute) {
    /**
     * @internal
     */
    RxNormAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RxNormAttribute = exports.RxNormAttribute || (exports.RxNormAttribute = {}));
var RxNormEntityCategory;
(function (RxNormEntityCategory) {
    RxNormEntityCategory["MEDICATION"] = "MEDICATION";
})(RxNormEntityCategory = exports.RxNormEntityCategory || (exports.RxNormEntityCategory = {}));
var RxNormConcept;
(function (RxNormConcept) {
    /**
     * @internal
     */
    RxNormConcept.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RxNormConcept = exports.RxNormConcept || (exports.RxNormConcept = {}));
var RxNormEntityType;
(function (RxNormEntityType) {
    RxNormEntityType["BRAND_NAME"] = "BRAND_NAME";
    RxNormEntityType["GENERIC_NAME"] = "GENERIC_NAME";
})(RxNormEntityType = exports.RxNormEntityType || (exports.RxNormEntityType = {}));
var RxNormEntity;
(function (RxNormEntity) {
    /**
     * @internal
     */
    RxNormEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RxNormEntity = exports.RxNormEntity || (exports.RxNormEntity = {}));
var InferRxNormResponse;
(function (InferRxNormResponse) {
    /**
     * @internal
     */
    InferRxNormResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferRxNormResponse = exports.InferRxNormResponse || (exports.InferRxNormResponse = {}));
var ComprehendMedicalAsyncJobFilter;
(function (ComprehendMedicalAsyncJobFilter) {
    /**
     * @internal
     */
    ComprehendMedicalAsyncJobFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComprehendMedicalAsyncJobFilter = exports.ComprehendMedicalAsyncJobFilter || (exports.ComprehendMedicalAsyncJobFilter = {}));
var ListEntitiesDetectionV2JobsRequest;
(function (ListEntitiesDetectionV2JobsRequest) {
    /**
     * @internal
     */
    ListEntitiesDetectionV2JobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEntitiesDetectionV2JobsRequest = exports.ListEntitiesDetectionV2JobsRequest || (exports.ListEntitiesDetectionV2JobsRequest = {}));
var ListEntitiesDetectionV2JobsResponse;
(function (ListEntitiesDetectionV2JobsResponse) {
    /**
     * @internal
     */
    ListEntitiesDetectionV2JobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEntitiesDetectionV2JobsResponse = exports.ListEntitiesDetectionV2JobsResponse || (exports.ListEntitiesDetectionV2JobsResponse = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var ListICD10CMInferenceJobsRequest;
(function (ListICD10CMInferenceJobsRequest) {
    /**
     * @internal
     */
    ListICD10CMInferenceJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListICD10CMInferenceJobsRequest = exports.ListICD10CMInferenceJobsRequest || (exports.ListICD10CMInferenceJobsRequest = {}));
var ListICD10CMInferenceJobsResponse;
(function (ListICD10CMInferenceJobsResponse) {
    /**
     * @internal
     */
    ListICD10CMInferenceJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListICD10CMInferenceJobsResponse = exports.ListICD10CMInferenceJobsResponse || (exports.ListICD10CMInferenceJobsResponse = {}));
var ListPHIDetectionJobsRequest;
(function (ListPHIDetectionJobsRequest) {
    /**
     * @internal
     */
    ListPHIDetectionJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPHIDetectionJobsRequest = exports.ListPHIDetectionJobsRequest || (exports.ListPHIDetectionJobsRequest = {}));
var ListPHIDetectionJobsResponse;
(function (ListPHIDetectionJobsResponse) {
    /**
     * @internal
     */
    ListPHIDetectionJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPHIDetectionJobsResponse = exports.ListPHIDetectionJobsResponse || (exports.ListPHIDetectionJobsResponse = {}));
var ListRxNormInferenceJobsRequest;
(function (ListRxNormInferenceJobsRequest) {
    /**
     * @internal
     */
    ListRxNormInferenceJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRxNormInferenceJobsRequest = exports.ListRxNormInferenceJobsRequest || (exports.ListRxNormInferenceJobsRequest = {}));
var ListRxNormInferenceJobsResponse;
(function (ListRxNormInferenceJobsResponse) {
    /**
     * @internal
     */
    ListRxNormInferenceJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRxNormInferenceJobsResponse = exports.ListRxNormInferenceJobsResponse || (exports.ListRxNormInferenceJobsResponse = {}));
var StartEntitiesDetectionV2JobRequest;
(function (StartEntitiesDetectionV2JobRequest) {
    /**
     * @internal
     */
    StartEntitiesDetectionV2JobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartEntitiesDetectionV2JobRequest = exports.StartEntitiesDetectionV2JobRequest || (exports.StartEntitiesDetectionV2JobRequest = {}));
var StartEntitiesDetectionV2JobResponse;
(function (StartEntitiesDetectionV2JobResponse) {
    /**
     * @internal
     */
    StartEntitiesDetectionV2JobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartEntitiesDetectionV2JobResponse = exports.StartEntitiesDetectionV2JobResponse || (exports.StartEntitiesDetectionV2JobResponse = {}));
var StartICD10CMInferenceJobRequest;
(function (StartICD10CMInferenceJobRequest) {
    /**
     * @internal
     */
    StartICD10CMInferenceJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartICD10CMInferenceJobRequest = exports.StartICD10CMInferenceJobRequest || (exports.StartICD10CMInferenceJobRequest = {}));
var StartICD10CMInferenceJobResponse;
(function (StartICD10CMInferenceJobResponse) {
    /**
     * @internal
     */
    StartICD10CMInferenceJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartICD10CMInferenceJobResponse = exports.StartICD10CMInferenceJobResponse || (exports.StartICD10CMInferenceJobResponse = {}));
var StartPHIDetectionJobRequest;
(function (StartPHIDetectionJobRequest) {
    /**
     * @internal
     */
    StartPHIDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPHIDetectionJobRequest = exports.StartPHIDetectionJobRequest || (exports.StartPHIDetectionJobRequest = {}));
var StartPHIDetectionJobResponse;
(function (StartPHIDetectionJobResponse) {
    /**
     * @internal
     */
    StartPHIDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPHIDetectionJobResponse = exports.StartPHIDetectionJobResponse || (exports.StartPHIDetectionJobResponse = {}));
var StartRxNormInferenceJobRequest;
(function (StartRxNormInferenceJobRequest) {
    /**
     * @internal
     */
    StartRxNormInferenceJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartRxNormInferenceJobRequest = exports.StartRxNormInferenceJobRequest || (exports.StartRxNormInferenceJobRequest = {}));
var StartRxNormInferenceJobResponse;
(function (StartRxNormInferenceJobResponse) {
    /**
     * @internal
     */
    StartRxNormInferenceJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartRxNormInferenceJobResponse = exports.StartRxNormInferenceJobResponse || (exports.StartRxNormInferenceJobResponse = {}));
var StopEntitiesDetectionV2JobRequest;
(function (StopEntitiesDetectionV2JobRequest) {
    /**
     * @internal
     */
    StopEntitiesDetectionV2JobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopEntitiesDetectionV2JobRequest = exports.StopEntitiesDetectionV2JobRequest || (exports.StopEntitiesDetectionV2JobRequest = {}));
var StopEntitiesDetectionV2JobResponse;
(function (StopEntitiesDetectionV2JobResponse) {
    /**
     * @internal
     */
    StopEntitiesDetectionV2JobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopEntitiesDetectionV2JobResponse = exports.StopEntitiesDetectionV2JobResponse || (exports.StopEntitiesDetectionV2JobResponse = {}));
var StopICD10CMInferenceJobRequest;
(function (StopICD10CMInferenceJobRequest) {
    /**
     * @internal
     */
    StopICD10CMInferenceJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopICD10CMInferenceJobRequest = exports.StopICD10CMInferenceJobRequest || (exports.StopICD10CMInferenceJobRequest = {}));
var StopICD10CMInferenceJobResponse;
(function (StopICD10CMInferenceJobResponse) {
    /**
     * @internal
     */
    StopICD10CMInferenceJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopICD10CMInferenceJobResponse = exports.StopICD10CMInferenceJobResponse || (exports.StopICD10CMInferenceJobResponse = {}));
var StopPHIDetectionJobRequest;
(function (StopPHIDetectionJobRequest) {
    /**
     * @internal
     */
    StopPHIDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopPHIDetectionJobRequest = exports.StopPHIDetectionJobRequest || (exports.StopPHIDetectionJobRequest = {}));
var StopPHIDetectionJobResponse;
(function (StopPHIDetectionJobResponse) {
    /**
     * @internal
     */
    StopPHIDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopPHIDetectionJobResponse = exports.StopPHIDetectionJobResponse || (exports.StopPHIDetectionJobResponse = {}));
var StopRxNormInferenceJobRequest;
(function (StopRxNormInferenceJobRequest) {
    /**
     * @internal
     */
    StopRxNormInferenceJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopRxNormInferenceJobRequest = exports.StopRxNormInferenceJobRequest || (exports.StopRxNormInferenceJobRequest = {}));
var StopRxNormInferenceJobResponse;
(function (StopRxNormInferenceJobResponse) {
    /**
     * @internal
     */
    StopRxNormInferenceJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopRxNormInferenceJobResponse = exports.StopRxNormInferenceJobResponse || (exports.StopRxNormInferenceJobResponse = {}));
//# sourceMappingURL=models_0.js.map