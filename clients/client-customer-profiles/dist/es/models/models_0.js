import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AddProfileKeyRequest;
(function (AddProfileKeyRequest) {
    /**
     * @internal
     */
    AddProfileKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddProfileKeyRequest || (AddProfileKeyRequest = {}));
export var AddProfileKeyResponse;
(function (AddProfileKeyResponse) {
    /**
     * @internal
     */
    AddProfileKeyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddProfileKeyResponse || (AddProfileKeyResponse = {}));
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var Address;
(function (Address) {
    /**
     * @internal
     */
    Address.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Address || (Address = {}));
export var MarketoConnectorOperator;
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
})(MarketoConnectorOperator || (MarketoConnectorOperator = {}));
export var S3ConnectorOperator;
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
})(S3ConnectorOperator || (S3ConnectorOperator = {}));
export var SalesforceConnectorOperator;
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
})(SalesforceConnectorOperator || (SalesforceConnectorOperator = {}));
export var ServiceNowConnectorOperator;
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
})(ServiceNowConnectorOperator || (ServiceNowConnectorOperator = {}));
export var ZendeskConnectorOperator;
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
})(ZendeskConnectorOperator || (ZendeskConnectorOperator = {}));
export var ConnectorOperator;
(function (ConnectorOperator) {
    /**
     * @internal
     */
    ConnectorOperator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectorOperator || (ConnectorOperator = {}));
export var MatchingRequest;
(function (MatchingRequest) {
    /**
     * @internal
     */
    MatchingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchingRequest || (MatchingRequest = {}));
export var CreateDomainRequest;
(function (CreateDomainRequest) {
    /**
     * @internal
     */
    CreateDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDomainRequest || (CreateDomainRequest = {}));
export var MatchingResponse;
(function (MatchingResponse) {
    /**
     * @internal
     */
    MatchingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchingResponse || (MatchingResponse = {}));
export var CreateDomainResponse;
(function (CreateDomainResponse) {
    /**
     * @internal
     */
    CreateDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDomainResponse || (CreateDomainResponse = {}));
export var Gender;
(function (Gender) {
    Gender["FEMALE"] = "FEMALE";
    Gender["MALE"] = "MALE";
    Gender["UNSPECIFIED"] = "UNSPECIFIED";
})(Gender || (Gender = {}));
export var PartyType;
(function (PartyType) {
    PartyType["BUSINESS"] = "BUSINESS";
    PartyType["INDIVIDUAL"] = "INDIVIDUAL";
    PartyType["OTHER"] = "OTHER";
})(PartyType || (PartyType = {}));
export var CreateProfileRequest;
(function (CreateProfileRequest) {
    /**
     * @internal
     */
    CreateProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProfileRequest || (CreateProfileRequest = {}));
export var CreateProfileResponse;
(function (CreateProfileResponse) {
    /**
     * @internal
     */
    CreateProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProfileResponse || (CreateProfileResponse = {}));
export var DeleteDomainRequest;
(function (DeleteDomainRequest) {
    /**
     * @internal
     */
    DeleteDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainRequest || (DeleteDomainRequest = {}));
export var DeleteDomainResponse;
(function (DeleteDomainResponse) {
    /**
     * @internal
     */
    DeleteDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainResponse || (DeleteDomainResponse = {}));
export var DeleteIntegrationRequest;
(function (DeleteIntegrationRequest) {
    /**
     * @internal
     */
    DeleteIntegrationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteIntegrationRequest || (DeleteIntegrationRequest = {}));
export var DeleteIntegrationResponse;
(function (DeleteIntegrationResponse) {
    /**
     * @internal
     */
    DeleteIntegrationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteIntegrationResponse || (DeleteIntegrationResponse = {}));
export var DeleteProfileRequest;
(function (DeleteProfileRequest) {
    /**
     * @internal
     */
    DeleteProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProfileRequest || (DeleteProfileRequest = {}));
export var DeleteProfileResponse;
(function (DeleteProfileResponse) {
    /**
     * @internal
     */
    DeleteProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProfileResponse || (DeleteProfileResponse = {}));
export var DeleteProfileKeyRequest;
(function (DeleteProfileKeyRequest) {
    /**
     * @internal
     */
    DeleteProfileKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProfileKeyRequest || (DeleteProfileKeyRequest = {}));
export var DeleteProfileKeyResponse;
(function (DeleteProfileKeyResponse) {
    /**
     * @internal
     */
    DeleteProfileKeyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProfileKeyResponse || (DeleteProfileKeyResponse = {}));
export var DeleteProfileObjectRequest;
(function (DeleteProfileObjectRequest) {
    /**
     * @internal
     */
    DeleteProfileObjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProfileObjectRequest || (DeleteProfileObjectRequest = {}));
export var DeleteProfileObjectResponse;
(function (DeleteProfileObjectResponse) {
    /**
     * @internal
     */
    DeleteProfileObjectResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProfileObjectResponse || (DeleteProfileObjectResponse = {}));
export var DeleteProfileObjectTypeRequest;
(function (DeleteProfileObjectTypeRequest) {
    /**
     * @internal
     */
    DeleteProfileObjectTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProfileObjectTypeRequest || (DeleteProfileObjectTypeRequest = {}));
export var DeleteProfileObjectTypeResponse;
(function (DeleteProfileObjectTypeResponse) {
    /**
     * @internal
     */
    DeleteProfileObjectTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProfileObjectTypeResponse || (DeleteProfileObjectTypeResponse = {}));
export var GetDomainRequest;
(function (GetDomainRequest) {
    /**
     * @internal
     */
    GetDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainRequest || (GetDomainRequest = {}));
export var DomainStats;
(function (DomainStats) {
    /**
     * @internal
     */
    DomainStats.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainStats || (DomainStats = {}));
export var GetDomainResponse;
(function (GetDomainResponse) {
    /**
     * @internal
     */
    GetDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainResponse || (GetDomainResponse = {}));
export var GetIntegrationRequest;
(function (GetIntegrationRequest) {
    /**
     * @internal
     */
    GetIntegrationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIntegrationRequest || (GetIntegrationRequest = {}));
export var GetIntegrationResponse;
(function (GetIntegrationResponse) {
    /**
     * @internal
     */
    GetIntegrationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIntegrationResponse || (GetIntegrationResponse = {}));
export var GetMatchesRequest;
(function (GetMatchesRequest) {
    /**
     * @internal
     */
    GetMatchesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMatchesRequest || (GetMatchesRequest = {}));
export var MatchItem;
(function (MatchItem) {
    /**
     * @internal
     */
    MatchItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchItem || (MatchItem = {}));
export var GetMatchesResponse;
(function (GetMatchesResponse) {
    /**
     * @internal
     */
    GetMatchesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMatchesResponse || (GetMatchesResponse = {}));
export var GetProfileObjectTypeRequest;
(function (GetProfileObjectTypeRequest) {
    /**
     * @internal
     */
    GetProfileObjectTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProfileObjectTypeRequest || (GetProfileObjectTypeRequest = {}));
export var FieldContentType;
(function (FieldContentType) {
    FieldContentType["EMAIL_ADDRESS"] = "EMAIL_ADDRESS";
    FieldContentType["NAME"] = "NAME";
    FieldContentType["NUMBER"] = "NUMBER";
    FieldContentType["PHONE_NUMBER"] = "PHONE_NUMBER";
    FieldContentType["STRING"] = "STRING";
})(FieldContentType || (FieldContentType = {}));
export var ObjectTypeField;
(function (ObjectTypeField) {
    /**
     * @internal
     */
    ObjectTypeField.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectTypeField || (ObjectTypeField = {}));
export var StandardIdentifier;
(function (StandardIdentifier) {
    StandardIdentifier["LOOKUP_ONLY"] = "LOOKUP_ONLY";
    StandardIdentifier["NEW_ONLY"] = "NEW_ONLY";
    StandardIdentifier["PROFILE"] = "PROFILE";
    StandardIdentifier["SECONDARY"] = "SECONDARY";
    StandardIdentifier["UNIQUE"] = "UNIQUE";
})(StandardIdentifier || (StandardIdentifier = {}));
export var ObjectTypeKey;
(function (ObjectTypeKey) {
    /**
     * @internal
     */
    ObjectTypeKey.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectTypeKey || (ObjectTypeKey = {}));
export var GetProfileObjectTypeResponse;
(function (GetProfileObjectTypeResponse) {
    /**
     * @internal
     */
    GetProfileObjectTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProfileObjectTypeResponse || (GetProfileObjectTypeResponse = {}));
export var GetProfileObjectTypeTemplateRequest;
(function (GetProfileObjectTypeTemplateRequest) {
    /**
     * @internal
     */
    GetProfileObjectTypeTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProfileObjectTypeTemplateRequest || (GetProfileObjectTypeTemplateRequest = {}));
export var GetProfileObjectTypeTemplateResponse;
(function (GetProfileObjectTypeTemplateResponse) {
    /**
     * @internal
     */
    GetProfileObjectTypeTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProfileObjectTypeTemplateResponse || (GetProfileObjectTypeTemplateResponse = {}));
export var ListAccountIntegrationsRequest;
(function (ListAccountIntegrationsRequest) {
    /**
     * @internal
     */
    ListAccountIntegrationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountIntegrationsRequest || (ListAccountIntegrationsRequest = {}));
export var ListIntegrationItem;
(function (ListIntegrationItem) {
    /**
     * @internal
     */
    ListIntegrationItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIntegrationItem || (ListIntegrationItem = {}));
export var ListAccountIntegrationsResponse;
(function (ListAccountIntegrationsResponse) {
    /**
     * @internal
     */
    ListAccountIntegrationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountIntegrationsResponse || (ListAccountIntegrationsResponse = {}));
export var ListDomainsRequest;
(function (ListDomainsRequest) {
    /**
     * @internal
     */
    ListDomainsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDomainsRequest || (ListDomainsRequest = {}));
export var ListDomainItem;
(function (ListDomainItem) {
    /**
     * @internal
     */
    ListDomainItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDomainItem || (ListDomainItem = {}));
export var ListDomainsResponse;
(function (ListDomainsResponse) {
    /**
     * @internal
     */
    ListDomainsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDomainsResponse || (ListDomainsResponse = {}));
export var ListIntegrationsRequest;
(function (ListIntegrationsRequest) {
    /**
     * @internal
     */
    ListIntegrationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIntegrationsRequest || (ListIntegrationsRequest = {}));
export var ListIntegrationsResponse;
(function (ListIntegrationsResponse) {
    /**
     * @internal
     */
    ListIntegrationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIntegrationsResponse || (ListIntegrationsResponse = {}));
export var ListProfileObjectsRequest;
(function (ListProfileObjectsRequest) {
    /**
     * @internal
     */
    ListProfileObjectsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfileObjectsRequest || (ListProfileObjectsRequest = {}));
export var ListProfileObjectsItem;
(function (ListProfileObjectsItem) {
    /**
     * @internal
     */
    ListProfileObjectsItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfileObjectsItem || (ListProfileObjectsItem = {}));
export var ListProfileObjectsResponse;
(function (ListProfileObjectsResponse) {
    /**
     * @internal
     */
    ListProfileObjectsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfileObjectsResponse || (ListProfileObjectsResponse = {}));
export var ListProfileObjectTypesRequest;
(function (ListProfileObjectTypesRequest) {
    /**
     * @internal
     */
    ListProfileObjectTypesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfileObjectTypesRequest || (ListProfileObjectTypesRequest = {}));
export var ListProfileObjectTypeItem;
(function (ListProfileObjectTypeItem) {
    /**
     * @internal
     */
    ListProfileObjectTypeItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfileObjectTypeItem || (ListProfileObjectTypeItem = {}));
export var ListProfileObjectTypesResponse;
(function (ListProfileObjectTypesResponse) {
    /**
     * @internal
     */
    ListProfileObjectTypesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfileObjectTypesResponse || (ListProfileObjectTypesResponse = {}));
export var ListProfileObjectTypeTemplatesRequest;
(function (ListProfileObjectTypeTemplatesRequest) {
    /**
     * @internal
     */
    ListProfileObjectTypeTemplatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfileObjectTypeTemplatesRequest || (ListProfileObjectTypeTemplatesRequest = {}));
export var ListProfileObjectTypeTemplateItem;
(function (ListProfileObjectTypeTemplateItem) {
    /**
     * @internal
     */
    ListProfileObjectTypeTemplateItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfileObjectTypeTemplateItem || (ListProfileObjectTypeTemplateItem = {}));
export var ListProfileObjectTypeTemplatesResponse;
(function (ListProfileObjectTypeTemplatesResponse) {
    /**
     * @internal
     */
    ListProfileObjectTypeTemplatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProfileObjectTypeTemplatesResponse || (ListProfileObjectTypeTemplatesResponse = {}));
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
export var FieldSourceProfileIds;
(function (FieldSourceProfileIds) {
    /**
     * @internal
     */
    FieldSourceProfileIds.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FieldSourceProfileIds || (FieldSourceProfileIds = {}));
export var MergeProfilesRequest;
(function (MergeProfilesRequest) {
    /**
     * @internal
     */
    MergeProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MergeProfilesRequest || (MergeProfilesRequest = {}));
export var MergeProfilesResponse;
(function (MergeProfilesResponse) {
    /**
     * @internal
     */
    MergeProfilesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MergeProfilesResponse || (MergeProfilesResponse = {}));
export var SourceConnectorType;
(function (SourceConnectorType) {
    SourceConnectorType["MARKETO"] = "Marketo";
    SourceConnectorType["S3"] = "S3";
    SourceConnectorType["SALESFORCE"] = "Salesforce";
    SourceConnectorType["SERVICENOW"] = "Servicenow";
    SourceConnectorType["ZENDESK"] = "Zendesk";
})(SourceConnectorType || (SourceConnectorType = {}));
export var IncrementalPullConfig;
(function (IncrementalPullConfig) {
    /**
     * @internal
     */
    IncrementalPullConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IncrementalPullConfig || (IncrementalPullConfig = {}));
export var MarketoSourceProperties;
(function (MarketoSourceProperties) {
    /**
     * @internal
     */
    MarketoSourceProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MarketoSourceProperties || (MarketoSourceProperties = {}));
export var S3SourceProperties;
(function (S3SourceProperties) {
    /**
     * @internal
     */
    S3SourceProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3SourceProperties || (S3SourceProperties = {}));
export var SalesforceSourceProperties;
(function (SalesforceSourceProperties) {
    /**
     * @internal
     */
    SalesforceSourceProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SalesforceSourceProperties || (SalesforceSourceProperties = {}));
export var ServiceNowSourceProperties;
(function (ServiceNowSourceProperties) {
    /**
     * @internal
     */
    ServiceNowSourceProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceNowSourceProperties || (ServiceNowSourceProperties = {}));
export var ZendeskSourceProperties;
(function (ZendeskSourceProperties) {
    /**
     * @internal
     */
    ZendeskSourceProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ZendeskSourceProperties || (ZendeskSourceProperties = {}));
export var SourceConnectorProperties;
(function (SourceConnectorProperties) {
    /**
     * @internal
     */
    SourceConnectorProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceConnectorProperties || (SourceConnectorProperties = {}));
export var SourceFlowConfig;
(function (SourceFlowConfig) {
    /**
     * @internal
     */
    SourceFlowConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceFlowConfig || (SourceFlowConfig = {}));
export var OperatorPropertiesKeys;
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
})(OperatorPropertiesKeys || (OperatorPropertiesKeys = {}));
export var TaskType;
(function (TaskType) {
    TaskType["ARITHMETIC"] = "Arithmetic";
    TaskType["FILTER"] = "Filter";
    TaskType["MAP"] = "Map";
    TaskType["MASK"] = "Mask";
    TaskType["MERGE"] = "Merge";
    TaskType["TRUNCATE"] = "Truncate";
    TaskType["VALIDATE"] = "Validate";
})(TaskType || (TaskType = {}));
export var Task;
(function (Task) {
    /**
     * @internal
     */
    Task.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Task || (Task = {}));
export var DataPullMode;
(function (DataPullMode) {
    DataPullMode["COMPLETE"] = "Complete";
    DataPullMode["INCREMENTAL"] = "Incremental";
})(DataPullMode || (DataPullMode = {}));
export var ScheduledTriggerProperties;
(function (ScheduledTriggerProperties) {
    /**
     * @internal
     */
    ScheduledTriggerProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduledTriggerProperties || (ScheduledTriggerProperties = {}));
export var TriggerProperties;
(function (TriggerProperties) {
    /**
     * @internal
     */
    TriggerProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TriggerProperties || (TriggerProperties = {}));
export var TriggerType;
(function (TriggerType) {
    TriggerType["EVENT"] = "Event";
    TriggerType["ONDEMAND"] = "OnDemand";
    TriggerType["SCHEDULED"] = "Scheduled";
})(TriggerType || (TriggerType = {}));
export var TriggerConfig;
(function (TriggerConfig) {
    /**
     * @internal
     */
    TriggerConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TriggerConfig || (TriggerConfig = {}));
export var FlowDefinition;
(function (FlowDefinition) {
    /**
     * @internal
     */
    FlowDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FlowDefinition || (FlowDefinition = {}));
export var PutIntegrationRequest;
(function (PutIntegrationRequest) {
    /**
     * @internal
     */
    PutIntegrationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutIntegrationRequest || (PutIntegrationRequest = {}));
export var PutIntegrationResponse;
(function (PutIntegrationResponse) {
    /**
     * @internal
     */
    PutIntegrationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutIntegrationResponse || (PutIntegrationResponse = {}));
export var PutProfileObjectRequest;
(function (PutProfileObjectRequest) {
    /**
     * @internal
     */
    PutProfileObjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutProfileObjectRequest || (PutProfileObjectRequest = {}));
export var PutProfileObjectResponse;
(function (PutProfileObjectResponse) {
    /**
     * @internal
     */
    PutProfileObjectResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutProfileObjectResponse || (PutProfileObjectResponse = {}));
export var PutProfileObjectTypeRequest;
(function (PutProfileObjectTypeRequest) {
    /**
     * @internal
     */
    PutProfileObjectTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutProfileObjectTypeRequest || (PutProfileObjectTypeRequest = {}));
export var PutProfileObjectTypeResponse;
(function (PutProfileObjectTypeResponse) {
    /**
     * @internal
     */
    PutProfileObjectTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutProfileObjectTypeResponse || (PutProfileObjectTypeResponse = {}));
export var SearchProfilesRequest;
(function (SearchProfilesRequest) {
    /**
     * @internal
     */
    SearchProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchProfilesRequest || (SearchProfilesRequest = {}));
export var Profile;
(function (Profile) {
    /**
     * @internal
     */
    Profile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Profile || (Profile = {}));
export var SearchProfilesResponse;
(function (SearchProfilesResponse) {
    /**
     * @internal
     */
    SearchProfilesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchProfilesResponse || (SearchProfilesResponse = {}));
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
export var UpdateDomainRequest;
(function (UpdateDomainRequest) {
    /**
     * @internal
     */
    UpdateDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDomainRequest || (UpdateDomainRequest = {}));
export var UpdateDomainResponse;
(function (UpdateDomainResponse) {
    /**
     * @internal
     */
    UpdateDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDomainResponse || (UpdateDomainResponse = {}));
export var UpdateAddress;
(function (UpdateAddress) {
    /**
     * @internal
     */
    UpdateAddress.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAddress || (UpdateAddress = {}));
export var UpdateProfileRequest;
(function (UpdateProfileRequest) {
    /**
     * @internal
     */
    UpdateProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProfileRequest || (UpdateProfileRequest = {}));
export var UpdateProfileResponse;
(function (UpdateProfileResponse) {
    /**
     * @internal
     */
    UpdateProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProfileResponse || (UpdateProfileResponse = {}));
//# sourceMappingURL=models_0.js.map