"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfileObjectTypeTemplateResponse = exports.GetProfileObjectTypeTemplateRequest = exports.GetProfileObjectTypeResponse = exports.ObjectTypeKey = exports.StandardIdentifier = exports.ObjectTypeField = exports.FieldContentType = exports.GetProfileObjectTypeRequest = exports.GetMatchesResponse = exports.MatchItem = exports.GetMatchesRequest = exports.GetIntegrationResponse = exports.GetIntegrationRequest = exports.GetDomainResponse = exports.DomainStats = exports.GetDomainRequest = exports.DeleteProfileObjectTypeResponse = exports.DeleteProfileObjectTypeRequest = exports.DeleteProfileObjectResponse = exports.DeleteProfileObjectRequest = exports.DeleteProfileKeyResponse = exports.DeleteProfileKeyRequest = exports.DeleteProfileResponse = exports.DeleteProfileRequest = exports.DeleteIntegrationResponse = exports.DeleteIntegrationRequest = exports.DeleteDomainResponse = exports.DeleteDomainRequest = exports.CreateProfileResponse = exports.CreateProfileRequest = exports.PartyType = exports.Gender = exports.CreateDomainResponse = exports.MatchingResponse = exports.CreateDomainRequest = exports.MatchingRequest = exports.ConnectorOperator = exports.ZendeskConnectorOperator = exports.ServiceNowConnectorOperator = exports.SalesforceConnectorOperator = exports.S3ConnectorOperator = exports.MarketoConnectorOperator = exports.Address = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InternalServerException = exports.BadRequestException = exports.AddProfileKeyResponse = exports.AddProfileKeyRequest = exports.AccessDeniedException = void 0;
exports.TagResourceRequest = exports.SearchProfilesResponse = exports.Profile = exports.SearchProfilesRequest = exports.PutProfileObjectTypeResponse = exports.PutProfileObjectTypeRequest = exports.PutProfileObjectResponse = exports.PutProfileObjectRequest = exports.PutIntegrationResponse = exports.PutIntegrationRequest = exports.FlowDefinition = exports.TriggerConfig = exports.TriggerType = exports.TriggerProperties = exports.ScheduledTriggerProperties = exports.DataPullMode = exports.Task = exports.TaskType = exports.OperatorPropertiesKeys = exports.SourceFlowConfig = exports.SourceConnectorProperties = exports.ZendeskSourceProperties = exports.ServiceNowSourceProperties = exports.SalesforceSourceProperties = exports.S3SourceProperties = exports.MarketoSourceProperties = exports.IncrementalPullConfig = exports.SourceConnectorType = exports.MergeProfilesResponse = exports.MergeProfilesRequest = exports.FieldSourceProfileIds = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListProfileObjectTypeTemplatesResponse = exports.ListProfileObjectTypeTemplateItem = exports.ListProfileObjectTypeTemplatesRequest = exports.ListProfileObjectTypesResponse = exports.ListProfileObjectTypeItem = exports.ListProfileObjectTypesRequest = exports.ListProfileObjectsResponse = exports.ListProfileObjectsItem = exports.ListProfileObjectsRequest = exports.ListIntegrationsResponse = exports.ListIntegrationsRequest = exports.ListDomainsResponse = exports.ListDomainItem = exports.ListDomainsRequest = exports.ListAccountIntegrationsResponse = exports.ListIntegrationItem = exports.ListAccountIntegrationsRequest = void 0;
exports.UpdateProfileResponse = exports.UpdateProfileRequest = exports.UpdateAddress = exports.UpdateDomainResponse = exports.UpdateDomainRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AddProfileKeyRequest;
(function (AddProfileKeyRequest) {
    /**
     * @internal
     */
    AddProfileKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddProfileKeyRequest = exports.AddProfileKeyRequest || (exports.AddProfileKeyRequest = {}));
var AddProfileKeyResponse;
(function (AddProfileKeyResponse) {
    /**
     * @internal
     */
    AddProfileKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddProfileKeyResponse = exports.AddProfileKeyResponse || (exports.AddProfileKeyResponse = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var Address;
(function (Address) {
    /**
     * @internal
     */
    Address.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Address = exports.Address || (exports.Address = {}));
var MarketoConnectorOperator;
(function (MarketoConnectorOperator) {
    MarketoConnectorOperator["ADDITION"] = "ADDITION";
    MarketoConnectorOperator["BETWEEN"] = "BETWEEN";
    MarketoConnectorOperator["DIVISION"] = "DIVISION";
    MarketoConnectorOperator["GREATER_THAN"] = "GREATER_THAN";
    MarketoConnectorOperator["LESS_THAN"] = "LESS_THAN";
    MarketoConnectorOperator["MASK_ALL"] = "MASK_ALL";
    MarketoConnectorOperator["MASK_FIRST_N"] = "MASK_FIRST_N";
    MarketoConnectorOperator["MASK_LAST_N"] = "MASK_LAST_N";
    MarketoConnectorOperator["MULTIPLICATION"] = "MULTIPLICATION";
    MarketoConnectorOperator["NO_OP"] = "NO_OP";
    MarketoConnectorOperator["PROJECTION"] = "PROJECTION";
    MarketoConnectorOperator["SUBTRACTION"] = "SUBTRACTION";
    MarketoConnectorOperator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
    MarketoConnectorOperator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
    MarketoConnectorOperator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
    MarketoConnectorOperator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})(MarketoConnectorOperator = exports.MarketoConnectorOperator || (exports.MarketoConnectorOperator = {}));
var S3ConnectorOperator;
(function (S3ConnectorOperator) {
    S3ConnectorOperator["ADDITION"] = "ADDITION";
    S3ConnectorOperator["BETWEEN"] = "BETWEEN";
    S3ConnectorOperator["DIVISION"] = "DIVISION";
    S3ConnectorOperator["EQUAL_TO"] = "EQUAL_TO";
    S3ConnectorOperator["GREATER_THAN"] = "GREATER_THAN";
    S3ConnectorOperator["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
    S3ConnectorOperator["LESS_THAN"] = "LESS_THAN";
    S3ConnectorOperator["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
    S3ConnectorOperator["MASK_ALL"] = "MASK_ALL";
    S3ConnectorOperator["MASK_FIRST_N"] = "MASK_FIRST_N";
    S3ConnectorOperator["MASK_LAST_N"] = "MASK_LAST_N";
    S3ConnectorOperator["MULTIPLICATION"] = "MULTIPLICATION";
    S3ConnectorOperator["NOT_EQUAL_TO"] = "NOT_EQUAL_TO";
    S3ConnectorOperator["NO_OP"] = "NO_OP";
    S3ConnectorOperator["PROJECTION"] = "PROJECTION";
    S3ConnectorOperator["SUBTRACTION"] = "SUBTRACTION";
    S3ConnectorOperator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
    S3ConnectorOperator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
    S3ConnectorOperator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
    S3ConnectorOperator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})(S3ConnectorOperator = exports.S3ConnectorOperator || (exports.S3ConnectorOperator = {}));
var SalesforceConnectorOperator;
(function (SalesforceConnectorOperator) {
    SalesforceConnectorOperator["ADDITION"] = "ADDITION";
    SalesforceConnectorOperator["BETWEEN"] = "BETWEEN";
    SalesforceConnectorOperator["CONTAINS"] = "CONTAINS";
    SalesforceConnectorOperator["DIVISION"] = "DIVISION";
    SalesforceConnectorOperator["EQUAL_TO"] = "EQUAL_TO";
    SalesforceConnectorOperator["GREATER_THAN"] = "GREATER_THAN";
    SalesforceConnectorOperator["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
    SalesforceConnectorOperator["LESS_THAN"] = "LESS_THAN";
    SalesforceConnectorOperator["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
    SalesforceConnectorOperator["MASK_ALL"] = "MASK_ALL";
    SalesforceConnectorOperator["MASK_FIRST_N"] = "MASK_FIRST_N";
    SalesforceConnectorOperator["MASK_LAST_N"] = "MASK_LAST_N";
    SalesforceConnectorOperator["MULTIPLICATION"] = "MULTIPLICATION";
    SalesforceConnectorOperator["NOT_EQUAL_TO"] = "NOT_EQUAL_TO";
    SalesforceConnectorOperator["NO_OP"] = "NO_OP";
    SalesforceConnectorOperator["PROJECTION"] = "PROJECTION";
    SalesforceConnectorOperator["SUBTRACTION"] = "SUBTRACTION";
    SalesforceConnectorOperator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
    SalesforceConnectorOperator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
    SalesforceConnectorOperator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
    SalesforceConnectorOperator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})(SalesforceConnectorOperator = exports.SalesforceConnectorOperator || (exports.SalesforceConnectorOperator = {}));
var ServiceNowConnectorOperator;
(function (ServiceNowConnectorOperator) {
    ServiceNowConnectorOperator["ADDITION"] = "ADDITION";
    ServiceNowConnectorOperator["BETWEEN"] = "BETWEEN";
    ServiceNowConnectorOperator["CONTAINS"] = "CONTAINS";
    ServiceNowConnectorOperator["DIVISION"] = "DIVISION";
    ServiceNowConnectorOperator["EQUAL_TO"] = "EQUAL_TO";
    ServiceNowConnectorOperator["GREATER_THAN"] = "GREATER_THAN";
    ServiceNowConnectorOperator["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
    ServiceNowConnectorOperator["LESS_THAN"] = "LESS_THAN";
    ServiceNowConnectorOperator["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
    ServiceNowConnectorOperator["MASK_ALL"] = "MASK_ALL";
    ServiceNowConnectorOperator["MASK_FIRST_N"] = "MASK_FIRST_N";
    ServiceNowConnectorOperator["MASK_LAST_N"] = "MASK_LAST_N";
    ServiceNowConnectorOperator["MULTIPLICATION"] = "MULTIPLICATION";
    ServiceNowConnectorOperator["NOT_EQUAL_TO"] = "NOT_EQUAL_TO";
    ServiceNowConnectorOperator["NO_OP"] = "NO_OP";
    ServiceNowConnectorOperator["PROJECTION"] = "PROJECTION";
    ServiceNowConnectorOperator["SUBTRACTION"] = "SUBTRACTION";
    ServiceNowConnectorOperator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
    ServiceNowConnectorOperator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
    ServiceNowConnectorOperator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
    ServiceNowConnectorOperator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})(ServiceNowConnectorOperator = exports.ServiceNowConnectorOperator || (exports.ServiceNowConnectorOperator = {}));
var ZendeskConnectorOperator;
(function (ZendeskConnectorOperator) {
    ZendeskConnectorOperator["ADDITION"] = "ADDITION";
    ZendeskConnectorOperator["DIVISION"] = "DIVISION";
    ZendeskConnectorOperator["GREATER_THAN"] = "GREATER_THAN";
    ZendeskConnectorOperator["MASK_ALL"] = "MASK_ALL";
    ZendeskConnectorOperator["MASK_FIRST_N"] = "MASK_FIRST_N";
    ZendeskConnectorOperator["MASK_LAST_N"] = "MASK_LAST_N";
    ZendeskConnectorOperator["MULTIPLICATION"] = "MULTIPLICATION";
    ZendeskConnectorOperator["NO_OP"] = "NO_OP";
    ZendeskConnectorOperator["PROJECTION"] = "PROJECTION";
    ZendeskConnectorOperator["SUBTRACTION"] = "SUBTRACTION";
    ZendeskConnectorOperator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
    ZendeskConnectorOperator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
    ZendeskConnectorOperator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
    ZendeskConnectorOperator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})(ZendeskConnectorOperator = exports.ZendeskConnectorOperator || (exports.ZendeskConnectorOperator = {}));
var ConnectorOperator;
(function (ConnectorOperator) {
    /**
     * @internal
     */
    ConnectorOperator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectorOperator = exports.ConnectorOperator || (exports.ConnectorOperator = {}));
var MatchingRequest;
(function (MatchingRequest) {
    /**
     * @internal
     */
    MatchingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchingRequest = exports.MatchingRequest || (exports.MatchingRequest = {}));
var CreateDomainRequest;
(function (CreateDomainRequest) {
    /**
     * @internal
     */
    CreateDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainRequest = exports.CreateDomainRequest || (exports.CreateDomainRequest = {}));
var MatchingResponse;
(function (MatchingResponse) {
    /**
     * @internal
     */
    MatchingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchingResponse = exports.MatchingResponse || (exports.MatchingResponse = {}));
var CreateDomainResponse;
(function (CreateDomainResponse) {
    /**
     * @internal
     */
    CreateDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainResponse = exports.CreateDomainResponse || (exports.CreateDomainResponse = {}));
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "FEMALE";
    Gender["MALE"] = "MALE";
    Gender["UNSPECIFIED"] = "UNSPECIFIED";
})(Gender = exports.Gender || (exports.Gender = {}));
var PartyType;
(function (PartyType) {
    PartyType["BUSINESS"] = "BUSINESS";
    PartyType["INDIVIDUAL"] = "INDIVIDUAL";
    PartyType["OTHER"] = "OTHER";
})(PartyType = exports.PartyType || (exports.PartyType = {}));
var CreateProfileRequest;
(function (CreateProfileRequest) {
    /**
     * @internal
     */
    CreateProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProfileRequest = exports.CreateProfileRequest || (exports.CreateProfileRequest = {}));
var CreateProfileResponse;
(function (CreateProfileResponse) {
    /**
     * @internal
     */
    CreateProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProfileResponse = exports.CreateProfileResponse || (exports.CreateProfileResponse = {}));
var DeleteDomainRequest;
(function (DeleteDomainRequest) {
    /**
     * @internal
     */
    DeleteDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainRequest = exports.DeleteDomainRequest || (exports.DeleteDomainRequest = {}));
var DeleteDomainResponse;
(function (DeleteDomainResponse) {
    /**
     * @internal
     */
    DeleteDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainResponse = exports.DeleteDomainResponse || (exports.DeleteDomainResponse = {}));
var DeleteIntegrationRequest;
(function (DeleteIntegrationRequest) {
    /**
     * @internal
     */
    DeleteIntegrationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIntegrationRequest = exports.DeleteIntegrationRequest || (exports.DeleteIntegrationRequest = {}));
var DeleteIntegrationResponse;
(function (DeleteIntegrationResponse) {
    /**
     * @internal
     */
    DeleteIntegrationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIntegrationResponse = exports.DeleteIntegrationResponse || (exports.DeleteIntegrationResponse = {}));
var DeleteProfileRequest;
(function (DeleteProfileRequest) {
    /**
     * @internal
     */
    DeleteProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProfileRequest = exports.DeleteProfileRequest || (exports.DeleteProfileRequest = {}));
var DeleteProfileResponse;
(function (DeleteProfileResponse) {
    /**
     * @internal
     */
    DeleteProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProfileResponse = exports.DeleteProfileResponse || (exports.DeleteProfileResponse = {}));
var DeleteProfileKeyRequest;
(function (DeleteProfileKeyRequest) {
    /**
     * @internal
     */
    DeleteProfileKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProfileKeyRequest = exports.DeleteProfileKeyRequest || (exports.DeleteProfileKeyRequest = {}));
var DeleteProfileKeyResponse;
(function (DeleteProfileKeyResponse) {
    /**
     * @internal
     */
    DeleteProfileKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProfileKeyResponse = exports.DeleteProfileKeyResponse || (exports.DeleteProfileKeyResponse = {}));
var DeleteProfileObjectRequest;
(function (DeleteProfileObjectRequest) {
    /**
     * @internal
     */
    DeleteProfileObjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProfileObjectRequest = exports.DeleteProfileObjectRequest || (exports.DeleteProfileObjectRequest = {}));
var DeleteProfileObjectResponse;
(function (DeleteProfileObjectResponse) {
    /**
     * @internal
     */
    DeleteProfileObjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProfileObjectResponse = exports.DeleteProfileObjectResponse || (exports.DeleteProfileObjectResponse = {}));
var DeleteProfileObjectTypeRequest;
(function (DeleteProfileObjectTypeRequest) {
    /**
     * @internal
     */
    DeleteProfileObjectTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProfileObjectTypeRequest = exports.DeleteProfileObjectTypeRequest || (exports.DeleteProfileObjectTypeRequest = {}));
var DeleteProfileObjectTypeResponse;
(function (DeleteProfileObjectTypeResponse) {
    /**
     * @internal
     */
    DeleteProfileObjectTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProfileObjectTypeResponse = exports.DeleteProfileObjectTypeResponse || (exports.DeleteProfileObjectTypeResponse = {}));
var GetDomainRequest;
(function (GetDomainRequest) {
    /**
     * @internal
     */
    GetDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainRequest = exports.GetDomainRequest || (exports.GetDomainRequest = {}));
var DomainStats;
(function (DomainStats) {
    /**
     * @internal
     */
    DomainStats.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainStats = exports.DomainStats || (exports.DomainStats = {}));
var GetDomainResponse;
(function (GetDomainResponse) {
    /**
     * @internal
     */
    GetDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainResponse = exports.GetDomainResponse || (exports.GetDomainResponse = {}));
var GetIntegrationRequest;
(function (GetIntegrationRequest) {
    /**
     * @internal
     */
    GetIntegrationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIntegrationRequest = exports.GetIntegrationRequest || (exports.GetIntegrationRequest = {}));
var GetIntegrationResponse;
(function (GetIntegrationResponse) {
    /**
     * @internal
     */
    GetIntegrationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIntegrationResponse = exports.GetIntegrationResponse || (exports.GetIntegrationResponse = {}));
var GetMatchesRequest;
(function (GetMatchesRequest) {
    /**
     * @internal
     */
    GetMatchesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMatchesRequest = exports.GetMatchesRequest || (exports.GetMatchesRequest = {}));
var MatchItem;
(function (MatchItem) {
    /**
     * @internal
     */
    MatchItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchItem = exports.MatchItem || (exports.MatchItem = {}));
var GetMatchesResponse;
(function (GetMatchesResponse) {
    /**
     * @internal
     */
    GetMatchesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMatchesResponse = exports.GetMatchesResponse || (exports.GetMatchesResponse = {}));
var GetProfileObjectTypeRequest;
(function (GetProfileObjectTypeRequest) {
    /**
     * @internal
     */
    GetProfileObjectTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProfileObjectTypeRequest = exports.GetProfileObjectTypeRequest || (exports.GetProfileObjectTypeRequest = {}));
var FieldContentType;
(function (FieldContentType) {
    FieldContentType["EMAIL_ADDRESS"] = "EMAIL_ADDRESS";
    FieldContentType["NAME"] = "NAME";
    FieldContentType["NUMBER"] = "NUMBER";
    FieldContentType["PHONE_NUMBER"] = "PHONE_NUMBER";
    FieldContentType["STRING"] = "STRING";
})(FieldContentType = exports.FieldContentType || (exports.FieldContentType = {}));
var ObjectTypeField;
(function (ObjectTypeField) {
    /**
     * @internal
     */
    ObjectTypeField.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectTypeField = exports.ObjectTypeField || (exports.ObjectTypeField = {}));
var StandardIdentifier;
(function (StandardIdentifier) {
    StandardIdentifier["LOOKUP_ONLY"] = "LOOKUP_ONLY";
    StandardIdentifier["NEW_ONLY"] = "NEW_ONLY";
    StandardIdentifier["PROFILE"] = "PROFILE";
    StandardIdentifier["SECONDARY"] = "SECONDARY";
    StandardIdentifier["UNIQUE"] = "UNIQUE";
})(StandardIdentifier = exports.StandardIdentifier || (exports.StandardIdentifier = {}));
var ObjectTypeKey;
(function (ObjectTypeKey) {
    /**
     * @internal
     */
    ObjectTypeKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectTypeKey = exports.ObjectTypeKey || (exports.ObjectTypeKey = {}));
var GetProfileObjectTypeResponse;
(function (GetProfileObjectTypeResponse) {
    /**
     * @internal
     */
    GetProfileObjectTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProfileObjectTypeResponse = exports.GetProfileObjectTypeResponse || (exports.GetProfileObjectTypeResponse = {}));
var GetProfileObjectTypeTemplateRequest;
(function (GetProfileObjectTypeTemplateRequest) {
    /**
     * @internal
     */
    GetProfileObjectTypeTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProfileObjectTypeTemplateRequest = exports.GetProfileObjectTypeTemplateRequest || (exports.GetProfileObjectTypeTemplateRequest = {}));
var GetProfileObjectTypeTemplateResponse;
(function (GetProfileObjectTypeTemplateResponse) {
    /**
     * @internal
     */
    GetProfileObjectTypeTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProfileObjectTypeTemplateResponse = exports.GetProfileObjectTypeTemplateResponse || (exports.GetProfileObjectTypeTemplateResponse = {}));
var ListAccountIntegrationsRequest;
(function (ListAccountIntegrationsRequest) {
    /**
     * @internal
     */
    ListAccountIntegrationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountIntegrationsRequest = exports.ListAccountIntegrationsRequest || (exports.ListAccountIntegrationsRequest = {}));
var ListIntegrationItem;
(function (ListIntegrationItem) {
    /**
     * @internal
     */
    ListIntegrationItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIntegrationItem = exports.ListIntegrationItem || (exports.ListIntegrationItem = {}));
var ListAccountIntegrationsResponse;
(function (ListAccountIntegrationsResponse) {
    /**
     * @internal
     */
    ListAccountIntegrationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountIntegrationsResponse = exports.ListAccountIntegrationsResponse || (exports.ListAccountIntegrationsResponse = {}));
var ListDomainsRequest;
(function (ListDomainsRequest) {
    /**
     * @internal
     */
    ListDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsRequest = exports.ListDomainsRequest || (exports.ListDomainsRequest = {}));
var ListDomainItem;
(function (ListDomainItem) {
    /**
     * @internal
     */
    ListDomainItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainItem = exports.ListDomainItem || (exports.ListDomainItem = {}));
var ListDomainsResponse;
(function (ListDomainsResponse) {
    /**
     * @internal
     */
    ListDomainsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsResponse = exports.ListDomainsResponse || (exports.ListDomainsResponse = {}));
var ListIntegrationsRequest;
(function (ListIntegrationsRequest) {
    /**
     * @internal
     */
    ListIntegrationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIntegrationsRequest = exports.ListIntegrationsRequest || (exports.ListIntegrationsRequest = {}));
var ListIntegrationsResponse;
(function (ListIntegrationsResponse) {
    /**
     * @internal
     */
    ListIntegrationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIntegrationsResponse = exports.ListIntegrationsResponse || (exports.ListIntegrationsResponse = {}));
var ListProfileObjectsRequest;
(function (ListProfileObjectsRequest) {
    /**
     * @internal
     */
    ListProfileObjectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfileObjectsRequest = exports.ListProfileObjectsRequest || (exports.ListProfileObjectsRequest = {}));
var ListProfileObjectsItem;
(function (ListProfileObjectsItem) {
    /**
     * @internal
     */
    ListProfileObjectsItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfileObjectsItem = exports.ListProfileObjectsItem || (exports.ListProfileObjectsItem = {}));
var ListProfileObjectsResponse;
(function (ListProfileObjectsResponse) {
    /**
     * @internal
     */
    ListProfileObjectsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfileObjectsResponse = exports.ListProfileObjectsResponse || (exports.ListProfileObjectsResponse = {}));
var ListProfileObjectTypesRequest;
(function (ListProfileObjectTypesRequest) {
    /**
     * @internal
     */
    ListProfileObjectTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfileObjectTypesRequest = exports.ListProfileObjectTypesRequest || (exports.ListProfileObjectTypesRequest = {}));
var ListProfileObjectTypeItem;
(function (ListProfileObjectTypeItem) {
    /**
     * @internal
     */
    ListProfileObjectTypeItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfileObjectTypeItem = exports.ListProfileObjectTypeItem || (exports.ListProfileObjectTypeItem = {}));
var ListProfileObjectTypesResponse;
(function (ListProfileObjectTypesResponse) {
    /**
     * @internal
     */
    ListProfileObjectTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfileObjectTypesResponse = exports.ListProfileObjectTypesResponse || (exports.ListProfileObjectTypesResponse = {}));
var ListProfileObjectTypeTemplatesRequest;
(function (ListProfileObjectTypeTemplatesRequest) {
    /**
     * @internal
     */
    ListProfileObjectTypeTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfileObjectTypeTemplatesRequest = exports.ListProfileObjectTypeTemplatesRequest || (exports.ListProfileObjectTypeTemplatesRequest = {}));
var ListProfileObjectTypeTemplateItem;
(function (ListProfileObjectTypeTemplateItem) {
    /**
     * @internal
     */
    ListProfileObjectTypeTemplateItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfileObjectTypeTemplateItem = exports.ListProfileObjectTypeTemplateItem || (exports.ListProfileObjectTypeTemplateItem = {}));
var ListProfileObjectTypeTemplatesResponse;
(function (ListProfileObjectTypeTemplatesResponse) {
    /**
     * @internal
     */
    ListProfileObjectTypeTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfileObjectTypeTemplatesResponse = exports.ListProfileObjectTypeTemplatesResponse || (exports.ListProfileObjectTypeTemplatesResponse = {}));
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
var FieldSourceProfileIds;
(function (FieldSourceProfileIds) {
    /**
     * @internal
     */
    FieldSourceProfileIds.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FieldSourceProfileIds = exports.FieldSourceProfileIds || (exports.FieldSourceProfileIds = {}));
var MergeProfilesRequest;
(function (MergeProfilesRequest) {
    /**
     * @internal
     */
    MergeProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeProfilesRequest = exports.MergeProfilesRequest || (exports.MergeProfilesRequest = {}));
var MergeProfilesResponse;
(function (MergeProfilesResponse) {
    /**
     * @internal
     */
    MergeProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeProfilesResponse = exports.MergeProfilesResponse || (exports.MergeProfilesResponse = {}));
var SourceConnectorType;
(function (SourceConnectorType) {
    SourceConnectorType["MARKETO"] = "Marketo";
    SourceConnectorType["S3"] = "S3";
    SourceConnectorType["SALESFORCE"] = "Salesforce";
    SourceConnectorType["SERVICENOW"] = "Servicenow";
    SourceConnectorType["ZENDESK"] = "Zendesk";
})(SourceConnectorType = exports.SourceConnectorType || (exports.SourceConnectorType = {}));
var IncrementalPullConfig;
(function (IncrementalPullConfig) {
    /**
     * @internal
     */
    IncrementalPullConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncrementalPullConfig = exports.IncrementalPullConfig || (exports.IncrementalPullConfig = {}));
var MarketoSourceProperties;
(function (MarketoSourceProperties) {
    /**
     * @internal
     */
    MarketoSourceProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MarketoSourceProperties = exports.MarketoSourceProperties || (exports.MarketoSourceProperties = {}));
var S3SourceProperties;
(function (S3SourceProperties) {
    /**
     * @internal
     */
    S3SourceProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3SourceProperties = exports.S3SourceProperties || (exports.S3SourceProperties = {}));
var SalesforceSourceProperties;
(function (SalesforceSourceProperties) {
    /**
     * @internal
     */
    SalesforceSourceProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SalesforceSourceProperties = exports.SalesforceSourceProperties || (exports.SalesforceSourceProperties = {}));
var ServiceNowSourceProperties;
(function (ServiceNowSourceProperties) {
    /**
     * @internal
     */
    ServiceNowSourceProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceNowSourceProperties = exports.ServiceNowSourceProperties || (exports.ServiceNowSourceProperties = {}));
var ZendeskSourceProperties;
(function (ZendeskSourceProperties) {
    /**
     * @internal
     */
    ZendeskSourceProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ZendeskSourceProperties = exports.ZendeskSourceProperties || (exports.ZendeskSourceProperties = {}));
var SourceConnectorProperties;
(function (SourceConnectorProperties) {
    /**
     * @internal
     */
    SourceConnectorProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceConnectorProperties = exports.SourceConnectorProperties || (exports.SourceConnectorProperties = {}));
var SourceFlowConfig;
(function (SourceFlowConfig) {
    /**
     * @internal
     */
    SourceFlowConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceFlowConfig = exports.SourceFlowConfig || (exports.SourceFlowConfig = {}));
var OperatorPropertiesKeys;
(function (OperatorPropertiesKeys) {
    OperatorPropertiesKeys["CONCAT_FORMAT"] = "CONCAT_FORMAT";
    OperatorPropertiesKeys["DATA_TYPE"] = "DATA_TYPE";
    OperatorPropertiesKeys["DESTINATION_DATA_TYPE"] = "DESTINATION_DATA_TYPE";
    OperatorPropertiesKeys["LOWER_BOUND"] = "LOWER_BOUND";
    OperatorPropertiesKeys["MASK_LENGTH"] = "MASK_LENGTH";
    OperatorPropertiesKeys["MASK_VALUE"] = "MASK_VALUE";
    OperatorPropertiesKeys["MATH_OPERATION_FIELDS_ORDER"] = "MATH_OPERATION_FIELDS_ORDER";
    OperatorPropertiesKeys["SOURCE_DATA_TYPE"] = "SOURCE_DATA_TYPE";
    OperatorPropertiesKeys["SUBFIELD_CATEGORY_MAP"] = "SUBFIELD_CATEGORY_MAP";
    OperatorPropertiesKeys["TRUNCATE_LENGTH"] = "TRUNCATE_LENGTH";
    OperatorPropertiesKeys["UPPER_BOUND"] = "UPPER_BOUND";
    OperatorPropertiesKeys["VALIDATION_ACTION"] = "VALIDATION_ACTION";
    OperatorPropertiesKeys["VALUE"] = "VALUE";
    OperatorPropertiesKeys["VALUES"] = "VALUES";
})(OperatorPropertiesKeys = exports.OperatorPropertiesKeys || (exports.OperatorPropertiesKeys = {}));
var TaskType;
(function (TaskType) {
    TaskType["ARITHMETIC"] = "Arithmetic";
    TaskType["FILTER"] = "Filter";
    TaskType["MAP"] = "Map";
    TaskType["MASK"] = "Mask";
    TaskType["MERGE"] = "Merge";
    TaskType["TRUNCATE"] = "Truncate";
    TaskType["VALIDATE"] = "Validate";
})(TaskType = exports.TaskType || (exports.TaskType = {}));
var Task;
(function (Task) {
    /**
     * @internal
     */
    Task.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Task = exports.Task || (exports.Task = {}));
var DataPullMode;
(function (DataPullMode) {
    DataPullMode["COMPLETE"] = "Complete";
    DataPullMode["INCREMENTAL"] = "Incremental";
})(DataPullMode = exports.DataPullMode || (exports.DataPullMode = {}));
var ScheduledTriggerProperties;
(function (ScheduledTriggerProperties) {
    /**
     * @internal
     */
    ScheduledTriggerProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledTriggerProperties = exports.ScheduledTriggerProperties || (exports.ScheduledTriggerProperties = {}));
var TriggerProperties;
(function (TriggerProperties) {
    /**
     * @internal
     */
    TriggerProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TriggerProperties = exports.TriggerProperties || (exports.TriggerProperties = {}));
var TriggerType;
(function (TriggerType) {
    TriggerType["EVENT"] = "Event";
    TriggerType["ONDEMAND"] = "OnDemand";
    TriggerType["SCHEDULED"] = "Scheduled";
})(TriggerType = exports.TriggerType || (exports.TriggerType = {}));
var TriggerConfig;
(function (TriggerConfig) {
    /**
     * @internal
     */
    TriggerConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TriggerConfig = exports.TriggerConfig || (exports.TriggerConfig = {}));
var FlowDefinition;
(function (FlowDefinition) {
    /**
     * @internal
     */
    FlowDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlowDefinition = exports.FlowDefinition || (exports.FlowDefinition = {}));
var PutIntegrationRequest;
(function (PutIntegrationRequest) {
    /**
     * @internal
     */
    PutIntegrationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutIntegrationRequest = exports.PutIntegrationRequest || (exports.PutIntegrationRequest = {}));
var PutIntegrationResponse;
(function (PutIntegrationResponse) {
    /**
     * @internal
     */
    PutIntegrationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutIntegrationResponse = exports.PutIntegrationResponse || (exports.PutIntegrationResponse = {}));
var PutProfileObjectRequest;
(function (PutProfileObjectRequest) {
    /**
     * @internal
     */
    PutProfileObjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutProfileObjectRequest = exports.PutProfileObjectRequest || (exports.PutProfileObjectRequest = {}));
var PutProfileObjectResponse;
(function (PutProfileObjectResponse) {
    /**
     * @internal
     */
    PutProfileObjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutProfileObjectResponse = exports.PutProfileObjectResponse || (exports.PutProfileObjectResponse = {}));
var PutProfileObjectTypeRequest;
(function (PutProfileObjectTypeRequest) {
    /**
     * @internal
     */
    PutProfileObjectTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutProfileObjectTypeRequest = exports.PutProfileObjectTypeRequest || (exports.PutProfileObjectTypeRequest = {}));
var PutProfileObjectTypeResponse;
(function (PutProfileObjectTypeResponse) {
    /**
     * @internal
     */
    PutProfileObjectTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutProfileObjectTypeResponse = exports.PutProfileObjectTypeResponse || (exports.PutProfileObjectTypeResponse = {}));
var SearchProfilesRequest;
(function (SearchProfilesRequest) {
    /**
     * @internal
     */
    SearchProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchProfilesRequest = exports.SearchProfilesRequest || (exports.SearchProfilesRequest = {}));
var Profile;
(function (Profile) {
    /**
     * @internal
     */
    Profile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Profile = exports.Profile || (exports.Profile = {}));
var SearchProfilesResponse;
(function (SearchProfilesResponse) {
    /**
     * @internal
     */
    SearchProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchProfilesResponse = exports.SearchProfilesResponse || (exports.SearchProfilesResponse = {}));
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
var UpdateAddress;
(function (UpdateAddress) {
    /**
     * @internal
     */
    UpdateAddress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAddress = exports.UpdateAddress || (exports.UpdateAddress = {}));
var UpdateProfileRequest;
(function (UpdateProfileRequest) {
    /**
     * @internal
     */
    UpdateProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProfileRequest = exports.UpdateProfileRequest || (exports.UpdateProfileRequest = {}));
var UpdateProfileResponse;
(function (UpdateProfileResponse) {
    /**
     * @internal
     */
    UpdateProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProfileResponse = exports.UpdateProfileResponse || (exports.UpdateProfileResponse = {}));
//# sourceMappingURL=models_0.js.map