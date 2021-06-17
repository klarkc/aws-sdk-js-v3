import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessControlListConfiguration;
(function (AccessControlListConfiguration) {
    /**
     * @internal
     */
    AccessControlListConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessControlListConfiguration || (AccessControlListConfiguration = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AclConfiguration;
(function (AclConfiguration) {
    /**
     * @internal
     */
    AclConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AclConfiguration || (AclConfiguration = {}));
export var HighlightType;
(function (HighlightType) {
    HighlightType["STANDARD"] = "STANDARD";
    HighlightType["THESAURUS_SYNONYM"] = "THESAURUS_SYNONYM";
})(HighlightType || (HighlightType = {}));
export var Highlight;
(function (Highlight) {
    /**
     * @internal
     */
    Highlight.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Highlight || (Highlight = {}));
export var TextWithHighlights;
(function (TextWithHighlights) {
    /**
     * @internal
     */
    TextWithHighlights.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TextWithHighlights || (TextWithHighlights = {}));
export var AdditionalResultAttributeValue;
(function (AdditionalResultAttributeValue) {
    /**
     * @internal
     */
    AdditionalResultAttributeValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdditionalResultAttributeValue || (AdditionalResultAttributeValue = {}));
export var AdditionalResultAttributeValueType;
(function (AdditionalResultAttributeValueType) {
    AdditionalResultAttributeValueType["TEXT_WITH_HIGHLIGHTS_VALUE"] = "TEXT_WITH_HIGHLIGHTS_VALUE";
})(AdditionalResultAttributeValueType || (AdditionalResultAttributeValueType = {}));
export var AdditionalResultAttribute;
(function (AdditionalResultAttribute) {
    /**
     * @internal
     */
    AdditionalResultAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdditionalResultAttribute || (AdditionalResultAttribute = {}));
export var DocumentAttributeValue;
(function (DocumentAttributeValue) {
    DocumentAttributeValue.visit = function (value, visitor) {
        if (value.StringValue !== undefined)
            return visitor.StringValue(value.StringValue);
        if (value.StringListValue !== undefined)
            return visitor.StringListValue(value.StringListValue);
        if (value.LongValue !== undefined)
            return visitor.LongValue(value.LongValue);
        if (value.DateValue !== undefined)
            return visitor.DateValue(value.DateValue);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    DocumentAttributeValue.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.StringValue !== undefined)
            return { StringValue: obj.StringValue };
        if (obj.StringListValue !== undefined)
            return { StringListValue: obj.StringListValue };
        if (obj.LongValue !== undefined)
            return { LongValue: obj.LongValue };
        if (obj.DateValue !== undefined)
            return { DateValue: obj.DateValue };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(DocumentAttributeValue || (DocumentAttributeValue = {}));
export var DocumentAttribute;
(function (DocumentAttribute) {
    /**
     * @internal
     */
    DocumentAttribute.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Value && { Value: DocumentAttributeValue.filterSensitiveLog(obj.Value) }))); };
})(DocumentAttribute || (DocumentAttribute = {}));
export var DataSourceSyncJobMetricTarget;
(function (DataSourceSyncJobMetricTarget) {
    /**
     * @internal
     */
    DataSourceSyncJobMetricTarget.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSourceSyncJobMetricTarget || (DataSourceSyncJobMetricTarget = {}));
export var BatchDeleteDocumentRequest;
(function (BatchDeleteDocumentRequest) {
    /**
     * @internal
     */
    BatchDeleteDocumentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteDocumentRequest || (BatchDeleteDocumentRequest = {}));
export var ErrorCode;
(function (ErrorCode) {
    ErrorCode["INTERNAL_ERROR"] = "InternalError";
    ErrorCode["INVALID_REQUEST"] = "InvalidRequest";
})(ErrorCode || (ErrorCode = {}));
export var BatchDeleteDocumentResponseFailedDocument;
(function (BatchDeleteDocumentResponseFailedDocument) {
    /**
     * @internal
     */
    BatchDeleteDocumentResponseFailedDocument.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteDocumentResponseFailedDocument || (BatchDeleteDocumentResponseFailedDocument = {}));
export var BatchDeleteDocumentResponse;
(function (BatchDeleteDocumentResponse) {
    /**
     * @internal
     */
    BatchDeleteDocumentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteDocumentResponse || (BatchDeleteDocumentResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
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
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var ReadAccessType;
(function (ReadAccessType) {
    ReadAccessType["ALLOW"] = "ALLOW";
    ReadAccessType["DENY"] = "DENY";
})(ReadAccessType || (ReadAccessType = {}));
export var PrincipalType;
(function (PrincipalType) {
    PrincipalType["GROUP"] = "GROUP";
    PrincipalType["USER"] = "USER";
})(PrincipalType || (PrincipalType = {}));
export var Principal;
(function (Principal) {
    /**
     * @internal
     */
    Principal.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Principal || (Principal = {}));
export var ContentType;
(function (ContentType) {
    ContentType["HTML"] = "HTML";
    ContentType["MS_WORD"] = "MS_WORD";
    ContentType["PDF"] = "PDF";
    ContentType["PLAIN_TEXT"] = "PLAIN_TEXT";
    ContentType["PPT"] = "PPT";
})(ContentType || (ContentType = {}));
export var S3Path;
(function (S3Path) {
    /**
     * @internal
     */
    S3Path.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Path || (S3Path = {}));
export var Document;
(function (Document) {
    /**
     * @internal
     */
    Document.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Attributes && { Attributes: obj.Attributes.map(function (item) { return DocumentAttribute.filterSensitiveLog(item); }) }))); };
})(Document || (Document = {}));
export var BatchPutDocumentRequest;
(function (BatchPutDocumentRequest) {
    /**
     * @internal
     */
    BatchPutDocumentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchPutDocumentRequest || (BatchPutDocumentRequest = {}));
export var BatchPutDocumentResponseFailedDocument;
(function (BatchPutDocumentResponseFailedDocument) {
    /**
     * @internal
     */
    BatchPutDocumentResponseFailedDocument.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchPutDocumentResponseFailedDocument || (BatchPutDocumentResponseFailedDocument = {}));
export var BatchPutDocumentResponse;
(function (BatchPutDocumentResponse) {
    /**
     * @internal
     */
    BatchPutDocumentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchPutDocumentResponse || (BatchPutDocumentResponse = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ClearQuerySuggestionsRequest;
(function (ClearQuerySuggestionsRequest) {
    /**
     * @internal
     */
    ClearQuerySuggestionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClearQuerySuggestionsRequest || (ClearQuerySuggestionsRequest = {}));
export var ConfluenceAttachmentFieldName;
(function (ConfluenceAttachmentFieldName) {
    ConfluenceAttachmentFieldName["AUTHOR"] = "AUTHOR";
    ConfluenceAttachmentFieldName["CONTENT_TYPE"] = "CONTENT_TYPE";
    ConfluenceAttachmentFieldName["CREATED_DATE"] = "CREATED_DATE";
    ConfluenceAttachmentFieldName["DISPLAY_URL"] = "DISPLAY_URL";
    ConfluenceAttachmentFieldName["FILE_SIZE"] = "FILE_SIZE";
    ConfluenceAttachmentFieldName["ITEM_TYPE"] = "ITEM_TYPE";
    ConfluenceAttachmentFieldName["PARENT_ID"] = "PARENT_ID";
    ConfluenceAttachmentFieldName["SPACE_KEY"] = "SPACE_KEY";
    ConfluenceAttachmentFieldName["SPACE_NAME"] = "SPACE_NAME";
    ConfluenceAttachmentFieldName["URL"] = "URL";
    ConfluenceAttachmentFieldName["VERSION"] = "VERSION";
})(ConfluenceAttachmentFieldName || (ConfluenceAttachmentFieldName = {}));
export var ConfluenceAttachmentToIndexFieldMapping;
(function (ConfluenceAttachmentToIndexFieldMapping) {
    /**
     * @internal
     */
    ConfluenceAttachmentToIndexFieldMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfluenceAttachmentToIndexFieldMapping || (ConfluenceAttachmentToIndexFieldMapping = {}));
export var ConfluenceAttachmentConfiguration;
(function (ConfluenceAttachmentConfiguration) {
    /**
     * @internal
     */
    ConfluenceAttachmentConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfluenceAttachmentConfiguration || (ConfluenceAttachmentConfiguration = {}));
export var ConfluenceBlogFieldName;
(function (ConfluenceBlogFieldName) {
    ConfluenceBlogFieldName["AUTHOR"] = "AUTHOR";
    ConfluenceBlogFieldName["DISPLAY_URL"] = "DISPLAY_URL";
    ConfluenceBlogFieldName["ITEM_TYPE"] = "ITEM_TYPE";
    ConfluenceBlogFieldName["LABELS"] = "LABELS";
    ConfluenceBlogFieldName["PUBLISH_DATE"] = "PUBLISH_DATE";
    ConfluenceBlogFieldName["SPACE_KEY"] = "SPACE_KEY";
    ConfluenceBlogFieldName["SPACE_NAME"] = "SPACE_NAME";
    ConfluenceBlogFieldName["URL"] = "URL";
    ConfluenceBlogFieldName["VERSION"] = "VERSION";
})(ConfluenceBlogFieldName || (ConfluenceBlogFieldName = {}));
export var ConfluenceBlogToIndexFieldMapping;
(function (ConfluenceBlogToIndexFieldMapping) {
    /**
     * @internal
     */
    ConfluenceBlogToIndexFieldMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfluenceBlogToIndexFieldMapping || (ConfluenceBlogToIndexFieldMapping = {}));
export var ConfluenceBlogConfiguration;
(function (ConfluenceBlogConfiguration) {
    /**
     * @internal
     */
    ConfluenceBlogConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfluenceBlogConfiguration || (ConfluenceBlogConfiguration = {}));
export var ConfluencePageFieldName;
(function (ConfluencePageFieldName) {
    ConfluencePageFieldName["AUTHOR"] = "AUTHOR";
    ConfluencePageFieldName["CONTENT_STATUS"] = "CONTENT_STATUS";
    ConfluencePageFieldName["CREATED_DATE"] = "CREATED_DATE";
    ConfluencePageFieldName["DISPLAY_URL"] = "DISPLAY_URL";
    ConfluencePageFieldName["ITEM_TYPE"] = "ITEM_TYPE";
    ConfluencePageFieldName["LABELS"] = "LABELS";
    ConfluencePageFieldName["MODIFIED_DATE"] = "MODIFIED_DATE";
    ConfluencePageFieldName["PARENT_ID"] = "PARENT_ID";
    ConfluencePageFieldName["SPACE_KEY"] = "SPACE_KEY";
    ConfluencePageFieldName["SPACE_NAME"] = "SPACE_NAME";
    ConfluencePageFieldName["URL"] = "URL";
    ConfluencePageFieldName["VERSION"] = "VERSION";
})(ConfluencePageFieldName || (ConfluencePageFieldName = {}));
export var ConfluencePageToIndexFieldMapping;
(function (ConfluencePageToIndexFieldMapping) {
    /**
     * @internal
     */
    ConfluencePageToIndexFieldMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfluencePageToIndexFieldMapping || (ConfluencePageToIndexFieldMapping = {}));
export var ConfluencePageConfiguration;
(function (ConfluencePageConfiguration) {
    /**
     * @internal
     */
    ConfluencePageConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfluencePageConfiguration || (ConfluencePageConfiguration = {}));
export var ConfluenceSpaceFieldName;
(function (ConfluenceSpaceFieldName) {
    ConfluenceSpaceFieldName["DISPLAY_URL"] = "DISPLAY_URL";
    ConfluenceSpaceFieldName["ITEM_TYPE"] = "ITEM_TYPE";
    ConfluenceSpaceFieldName["SPACE_KEY"] = "SPACE_KEY";
    ConfluenceSpaceFieldName["URL"] = "URL";
})(ConfluenceSpaceFieldName || (ConfluenceSpaceFieldName = {}));
export var ConfluenceSpaceToIndexFieldMapping;
(function (ConfluenceSpaceToIndexFieldMapping) {
    /**
     * @internal
     */
    ConfluenceSpaceToIndexFieldMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfluenceSpaceToIndexFieldMapping || (ConfluenceSpaceToIndexFieldMapping = {}));
export var ConfluenceSpaceConfiguration;
(function (ConfluenceSpaceConfiguration) {
    /**
     * @internal
     */
    ConfluenceSpaceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfluenceSpaceConfiguration || (ConfluenceSpaceConfiguration = {}));
export var ConfluenceVersion;
(function (ConfluenceVersion) {
    ConfluenceVersion["CLOUD"] = "CLOUD";
    ConfluenceVersion["SERVER"] = "SERVER";
})(ConfluenceVersion || (ConfluenceVersion = {}));
export var DataSourceVpcConfiguration;
(function (DataSourceVpcConfiguration) {
    /**
     * @internal
     */
    DataSourceVpcConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSourceVpcConfiguration || (DataSourceVpcConfiguration = {}));
export var ConfluenceConfiguration;
(function (ConfluenceConfiguration) {
    /**
     * @internal
     */
    ConfluenceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfluenceConfiguration || (ConfluenceConfiguration = {}));
export var DataSourceToIndexFieldMapping;
(function (DataSourceToIndexFieldMapping) {
    /**
     * @internal
     */
    DataSourceToIndexFieldMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSourceToIndexFieldMapping || (DataSourceToIndexFieldMapping = {}));
export var ColumnConfiguration;
(function (ColumnConfiguration) {
    /**
     * @internal
     */
    ColumnConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ColumnConfiguration || (ColumnConfiguration = {}));
export var ConnectionConfiguration;
(function (ConnectionConfiguration) {
    /**
     * @internal
     */
    ConnectionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectionConfiguration || (ConnectionConfiguration = {}));
export var DatabaseEngineType;
(function (DatabaseEngineType) {
    DatabaseEngineType["RDS_AURORA_MYSQL"] = "RDS_AURORA_MYSQL";
    DatabaseEngineType["RDS_AURORA_POSTGRESQL"] = "RDS_AURORA_POSTGRESQL";
    DatabaseEngineType["RDS_MYSQL"] = "RDS_MYSQL";
    DatabaseEngineType["RDS_POSTGRESQL"] = "RDS_POSTGRESQL";
})(DatabaseEngineType || (DatabaseEngineType = {}));
export var QueryIdentifiersEnclosingOption;
(function (QueryIdentifiersEnclosingOption) {
    QueryIdentifiersEnclosingOption["DOUBLE_QUOTES"] = "DOUBLE_QUOTES";
    QueryIdentifiersEnclosingOption["NONE"] = "NONE";
})(QueryIdentifiersEnclosingOption || (QueryIdentifiersEnclosingOption = {}));
export var SqlConfiguration;
(function (SqlConfiguration) {
    /**
     * @internal
     */
    SqlConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SqlConfiguration || (SqlConfiguration = {}));
export var DatabaseConfiguration;
(function (DatabaseConfiguration) {
    /**
     * @internal
     */
    DatabaseConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatabaseConfiguration || (DatabaseConfiguration = {}));
export var GoogleDriveConfiguration;
(function (GoogleDriveConfiguration) {
    /**
     * @internal
     */
    GoogleDriveConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GoogleDriveConfiguration || (GoogleDriveConfiguration = {}));
export var OneDriveUsers;
(function (OneDriveUsers) {
    /**
     * @internal
     */
    OneDriveUsers.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OneDriveUsers || (OneDriveUsers = {}));
export var OneDriveConfiguration;
(function (OneDriveConfiguration) {
    /**
     * @internal
     */
    OneDriveConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OneDriveConfiguration || (OneDriveConfiguration = {}));
export var DocumentsMetadataConfiguration;
(function (DocumentsMetadataConfiguration) {
    /**
     * @internal
     */
    DocumentsMetadataConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentsMetadataConfiguration || (DocumentsMetadataConfiguration = {}));
export var S3DataSourceConfiguration;
(function (S3DataSourceConfiguration) {
    /**
     * @internal
     */
    S3DataSourceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3DataSourceConfiguration || (S3DataSourceConfiguration = {}));
export var SalesforceChatterFeedIncludeFilterType;
(function (SalesforceChatterFeedIncludeFilterType) {
    SalesforceChatterFeedIncludeFilterType["ACTIVE_USER"] = "ACTIVE_USER";
    SalesforceChatterFeedIncludeFilterType["STANDARD_USER"] = "STANDARD_USER";
})(SalesforceChatterFeedIncludeFilterType || (SalesforceChatterFeedIncludeFilterType = {}));
export var SalesforceChatterFeedConfiguration;
(function (SalesforceChatterFeedConfiguration) {
    /**
     * @internal
     */
    SalesforceChatterFeedConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SalesforceChatterFeedConfiguration || (SalesforceChatterFeedConfiguration = {}));
export var SalesforceCustomKnowledgeArticleTypeConfiguration;
(function (SalesforceCustomKnowledgeArticleTypeConfiguration) {
    /**
     * @internal
     */
    SalesforceCustomKnowledgeArticleTypeConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SalesforceCustomKnowledgeArticleTypeConfiguration || (SalesforceCustomKnowledgeArticleTypeConfiguration = {}));
export var SalesforceKnowledgeArticleState;
(function (SalesforceKnowledgeArticleState) {
    SalesforceKnowledgeArticleState["ARCHIVED"] = "ARCHIVED";
    SalesforceKnowledgeArticleState["DRAFT"] = "DRAFT";
    SalesforceKnowledgeArticleState["PUBLISHED"] = "PUBLISHED";
})(SalesforceKnowledgeArticleState || (SalesforceKnowledgeArticleState = {}));
export var SalesforceStandardKnowledgeArticleTypeConfiguration;
(function (SalesforceStandardKnowledgeArticleTypeConfiguration) {
    /**
     * @internal
     */
    SalesforceStandardKnowledgeArticleTypeConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SalesforceStandardKnowledgeArticleTypeConfiguration || (SalesforceStandardKnowledgeArticleTypeConfiguration = {}));
export var SalesforceKnowledgeArticleConfiguration;
(function (SalesforceKnowledgeArticleConfiguration) {
    /**
     * @internal
     */
    SalesforceKnowledgeArticleConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SalesforceKnowledgeArticleConfiguration || (SalesforceKnowledgeArticleConfiguration = {}));
export var SalesforceStandardObjectAttachmentConfiguration;
(function (SalesforceStandardObjectAttachmentConfiguration) {
    /**
     * @internal
     */
    SalesforceStandardObjectAttachmentConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SalesforceStandardObjectAttachmentConfiguration || (SalesforceStandardObjectAttachmentConfiguration = {}));
export var SalesforceStandardObjectName;
(function (SalesforceStandardObjectName) {
    SalesforceStandardObjectName["ACCOUNT"] = "ACCOUNT";
    SalesforceStandardObjectName["CAMPAIGN"] = "CAMPAIGN";
    SalesforceStandardObjectName["CASE"] = "CASE";
    SalesforceStandardObjectName["CONTACT"] = "CONTACT";
    SalesforceStandardObjectName["CONTRACT"] = "CONTRACT";
    SalesforceStandardObjectName["DOCUMENT"] = "DOCUMENT";
    SalesforceStandardObjectName["GROUP"] = "GROUP";
    SalesforceStandardObjectName["IDEA"] = "IDEA";
    SalesforceStandardObjectName["LEAD"] = "LEAD";
    SalesforceStandardObjectName["OPPORTUNITY"] = "OPPORTUNITY";
    SalesforceStandardObjectName["PARTNER"] = "PARTNER";
    SalesforceStandardObjectName["PRICEBOOK"] = "PRICEBOOK";
    SalesforceStandardObjectName["PRODUCT"] = "PRODUCT";
    SalesforceStandardObjectName["PROFILE"] = "PROFILE";
    SalesforceStandardObjectName["SOLUTION"] = "SOLUTION";
    SalesforceStandardObjectName["TASK"] = "TASK";
    SalesforceStandardObjectName["USER"] = "USER";
})(SalesforceStandardObjectName || (SalesforceStandardObjectName = {}));
export var SalesforceStandardObjectConfiguration;
(function (SalesforceStandardObjectConfiguration) {
    /**
     * @internal
     */
    SalesforceStandardObjectConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SalesforceStandardObjectConfiguration || (SalesforceStandardObjectConfiguration = {}));
export var SalesforceConfiguration;
(function (SalesforceConfiguration) {
    /**
     * @internal
     */
    SalesforceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SalesforceConfiguration || (SalesforceConfiguration = {}));
export var ServiceNowAuthenticationType;
(function (ServiceNowAuthenticationType) {
    ServiceNowAuthenticationType["HTTP_BASIC"] = "HTTP_BASIC";
    ServiceNowAuthenticationType["OAUTH2"] = "OAUTH2";
})(ServiceNowAuthenticationType || (ServiceNowAuthenticationType = {}));
export var ServiceNowKnowledgeArticleConfiguration;
(function (ServiceNowKnowledgeArticleConfiguration) {
    /**
     * @internal
     */
    ServiceNowKnowledgeArticleConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceNowKnowledgeArticleConfiguration || (ServiceNowKnowledgeArticleConfiguration = {}));
export var ServiceNowServiceCatalogConfiguration;
(function (ServiceNowServiceCatalogConfiguration) {
    /**
     * @internal
     */
    ServiceNowServiceCatalogConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceNowServiceCatalogConfiguration || (ServiceNowServiceCatalogConfiguration = {}));
export var ServiceNowBuildVersionType;
(function (ServiceNowBuildVersionType) {
    ServiceNowBuildVersionType["LONDON"] = "LONDON";
    ServiceNowBuildVersionType["OTHERS"] = "OTHERS";
})(ServiceNowBuildVersionType || (ServiceNowBuildVersionType = {}));
export var ServiceNowConfiguration;
(function (ServiceNowConfiguration) {
    /**
     * @internal
     */
    ServiceNowConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceNowConfiguration || (ServiceNowConfiguration = {}));
export var SharePointVersion;
(function (SharePointVersion) {
    SharePointVersion["SHAREPOINT_ONLINE"] = "SHAREPOINT_ONLINE";
})(SharePointVersion || (SharePointVersion = {}));
export var SharePointConfiguration;
(function (SharePointConfiguration) {
    /**
     * @internal
     */
    SharePointConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SharePointConfiguration || (SharePointConfiguration = {}));
export var DataSourceConfiguration;
(function (DataSourceConfiguration) {
    /**
     * @internal
     */
    DataSourceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSourceConfiguration || (DataSourceConfiguration = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var DataSourceType;
(function (DataSourceType) {
    DataSourceType["CONFLUENCE"] = "CONFLUENCE";
    DataSourceType["CUSTOM"] = "CUSTOM";
    DataSourceType["DATABASE"] = "DATABASE";
    DataSourceType["GOOGLEDRIVE"] = "GOOGLEDRIVE";
    DataSourceType["ONEDRIVE"] = "ONEDRIVE";
    DataSourceType["S3"] = "S3";
    DataSourceType["SALESFORCE"] = "SALESFORCE";
    DataSourceType["SERVICENOW"] = "SERVICENOW";
    DataSourceType["SHAREPOINT"] = "SHAREPOINT";
})(DataSourceType || (DataSourceType = {}));
export var CreateDataSourceRequest;
(function (CreateDataSourceRequest) {
    /**
     * @internal
     */
    CreateDataSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataSourceRequest || (CreateDataSourceRequest = {}));
export var CreateDataSourceResponse;
(function (CreateDataSourceResponse) {
    /**
     * @internal
     */
    CreateDataSourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataSourceResponse || (CreateDataSourceResponse = {}));
export var ResourceAlreadyExistException;
(function (ResourceAlreadyExistException) {
    /**
     * @internal
     */
    ResourceAlreadyExistException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyExistException || (ResourceAlreadyExistException = {}));
export var FaqFileFormat;
(function (FaqFileFormat) {
    FaqFileFormat["CSV"] = "CSV";
    FaqFileFormat["CSV_WITH_HEADER"] = "CSV_WITH_HEADER";
    FaqFileFormat["JSON"] = "JSON";
})(FaqFileFormat || (FaqFileFormat = {}));
export var CreateFaqRequest;
(function (CreateFaqRequest) {
    /**
     * @internal
     */
    CreateFaqRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFaqRequest || (CreateFaqRequest = {}));
export var CreateFaqResponse;
(function (CreateFaqResponse) {
    /**
     * @internal
     */
    CreateFaqResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFaqResponse || (CreateFaqResponse = {}));
export var IndexEdition;
(function (IndexEdition) {
    IndexEdition["DEVELOPER_EDITION"] = "DEVELOPER_EDITION";
    IndexEdition["ENTERPRISE_EDITION"] = "ENTERPRISE_EDITION";
})(IndexEdition || (IndexEdition = {}));
export var ServerSideEncryptionConfiguration;
(function (ServerSideEncryptionConfiguration) {
    /**
     * @internal
     */
    ServerSideEncryptionConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.KmsKeyId && { KmsKeyId: SENSITIVE_STRING }))); };
})(ServerSideEncryptionConfiguration || (ServerSideEncryptionConfiguration = {}));
export var UserContextPolicy;
(function (UserContextPolicy) {
    UserContextPolicy["ATTRIBUTE_FILTER"] = "ATTRIBUTE_FILTER";
    UserContextPolicy["USER_TOKEN"] = "USER_TOKEN";
})(UserContextPolicy || (UserContextPolicy = {}));
export var JsonTokenTypeConfiguration;
(function (JsonTokenTypeConfiguration) {
    /**
     * @internal
     */
    JsonTokenTypeConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JsonTokenTypeConfiguration || (JsonTokenTypeConfiguration = {}));
export var KeyLocation;
(function (KeyLocation) {
    KeyLocation["SECRET_MANAGER"] = "SECRET_MANAGER";
    KeyLocation["URL"] = "URL";
})(KeyLocation || (KeyLocation = {}));
export var JwtTokenTypeConfiguration;
(function (JwtTokenTypeConfiguration) {
    /**
     * @internal
     */
    JwtTokenTypeConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JwtTokenTypeConfiguration || (JwtTokenTypeConfiguration = {}));
export var UserTokenConfiguration;
(function (UserTokenConfiguration) {
    /**
     * @internal
     */
    UserTokenConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserTokenConfiguration || (UserTokenConfiguration = {}));
export var CreateIndexRequest;
(function (CreateIndexRequest) {
    /**
     * @internal
     */
    CreateIndexRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ServerSideEncryptionConfiguration && {
        ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(obj.ServerSideEncryptionConfiguration),
    }))); };
})(CreateIndexRequest || (CreateIndexRequest = {}));
export var CreateIndexResponse;
(function (CreateIndexResponse) {
    /**
     * @internal
     */
    CreateIndexResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIndexResponse || (CreateIndexResponse = {}));
export var CreateQuerySuggestionsBlockListRequest;
(function (CreateQuerySuggestionsBlockListRequest) {
    /**
     * @internal
     */
    CreateQuerySuggestionsBlockListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateQuerySuggestionsBlockListRequest || (CreateQuerySuggestionsBlockListRequest = {}));
export var CreateQuerySuggestionsBlockListResponse;
(function (CreateQuerySuggestionsBlockListResponse) {
    /**
     * @internal
     */
    CreateQuerySuggestionsBlockListResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateQuerySuggestionsBlockListResponse || (CreateQuerySuggestionsBlockListResponse = {}));
export var CreateThesaurusRequest;
(function (CreateThesaurusRequest) {
    /**
     * @internal
     */
    CreateThesaurusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateThesaurusRequest || (CreateThesaurusRequest = {}));
export var CreateThesaurusResponse;
(function (CreateThesaurusResponse) {
    /**
     * @internal
     */
    CreateThesaurusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateThesaurusResponse || (CreateThesaurusResponse = {}));
export var DeleteDataSourceRequest;
(function (DeleteDataSourceRequest) {
    /**
     * @internal
     */
    DeleteDataSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDataSourceRequest || (DeleteDataSourceRequest = {}));
export var DeleteFaqRequest;
(function (DeleteFaqRequest) {
    /**
     * @internal
     */
    DeleteFaqRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFaqRequest || (DeleteFaqRequest = {}));
export var DeleteIndexRequest;
(function (DeleteIndexRequest) {
    /**
     * @internal
     */
    DeleteIndexRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteIndexRequest || (DeleteIndexRequest = {}));
export var DeleteQuerySuggestionsBlockListRequest;
(function (DeleteQuerySuggestionsBlockListRequest) {
    /**
     * @internal
     */
    DeleteQuerySuggestionsBlockListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteQuerySuggestionsBlockListRequest || (DeleteQuerySuggestionsBlockListRequest = {}));
export var DeleteThesaurusRequest;
(function (DeleteThesaurusRequest) {
    /**
     * @internal
     */
    DeleteThesaurusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteThesaurusRequest || (DeleteThesaurusRequest = {}));
export var DescribeDataSourceRequest;
(function (DescribeDataSourceRequest) {
    /**
     * @internal
     */
    DescribeDataSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDataSourceRequest || (DescribeDataSourceRequest = {}));
export var DataSourceStatus;
(function (DataSourceStatus) {
    DataSourceStatus["ACTIVE"] = "ACTIVE";
    DataSourceStatus["CREATING"] = "CREATING";
    DataSourceStatus["DELETING"] = "DELETING";
    DataSourceStatus["FAILED"] = "FAILED";
    DataSourceStatus["UPDATING"] = "UPDATING";
})(DataSourceStatus || (DataSourceStatus = {}));
export var DescribeDataSourceResponse;
(function (DescribeDataSourceResponse) {
    /**
     * @internal
     */
    DescribeDataSourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDataSourceResponse || (DescribeDataSourceResponse = {}));
export var DescribeFaqRequest;
(function (DescribeFaqRequest) {
    /**
     * @internal
     */
    DescribeFaqRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFaqRequest || (DescribeFaqRequest = {}));
export var FaqStatus;
(function (FaqStatus) {
    FaqStatus["ACTIVE"] = "ACTIVE";
    FaqStatus["CREATING"] = "CREATING";
    FaqStatus["DELETING"] = "DELETING";
    FaqStatus["FAILED"] = "FAILED";
    FaqStatus["UPDATING"] = "UPDATING";
})(FaqStatus || (FaqStatus = {}));
export var DescribeFaqResponse;
(function (DescribeFaqResponse) {
    /**
     * @internal
     */
    DescribeFaqResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFaqResponse || (DescribeFaqResponse = {}));
export var DescribeIndexRequest;
(function (DescribeIndexRequest) {
    /**
     * @internal
     */
    DescribeIndexRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeIndexRequest || (DescribeIndexRequest = {}));
export var CapacityUnitsConfiguration;
(function (CapacityUnitsConfiguration) {
    /**
     * @internal
     */
    CapacityUnitsConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CapacityUnitsConfiguration || (CapacityUnitsConfiguration = {}));
export var Order;
(function (Order) {
    Order["ASCENDING"] = "ASCENDING";
    Order["DESCENDING"] = "DESCENDING";
})(Order || (Order = {}));
export var Relevance;
(function (Relevance) {
    /**
     * @internal
     */
    Relevance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Relevance || (Relevance = {}));
export var Search;
(function (Search) {
    /**
     * @internal
     */
    Search.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Search || (Search = {}));
export var DocumentAttributeValueType;
(function (DocumentAttributeValueType) {
    DocumentAttributeValueType["DATE_VALUE"] = "DATE_VALUE";
    DocumentAttributeValueType["LONG_VALUE"] = "LONG_VALUE";
    DocumentAttributeValueType["STRING_LIST_VALUE"] = "STRING_LIST_VALUE";
    DocumentAttributeValueType["STRING_VALUE"] = "STRING_VALUE";
})(DocumentAttributeValueType || (DocumentAttributeValueType = {}));
export var DocumentMetadataConfiguration;
(function (DocumentMetadataConfiguration) {
    /**
     * @internal
     */
    DocumentMetadataConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentMetadataConfiguration || (DocumentMetadataConfiguration = {}));
export var FaqStatistics;
(function (FaqStatistics) {
    /**
     * @internal
     */
    FaqStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FaqStatistics || (FaqStatistics = {}));
export var TextDocumentStatistics;
(function (TextDocumentStatistics) {
    /**
     * @internal
     */
    TextDocumentStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TextDocumentStatistics || (TextDocumentStatistics = {}));
export var IndexStatistics;
(function (IndexStatistics) {
    /**
     * @internal
     */
    IndexStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IndexStatistics || (IndexStatistics = {}));
export var IndexStatus;
(function (IndexStatus) {
    IndexStatus["ACTIVE"] = "ACTIVE";
    IndexStatus["CREATING"] = "CREATING";
    IndexStatus["DELETING"] = "DELETING";
    IndexStatus["FAILED"] = "FAILED";
    IndexStatus["SYSTEM_UPDATING"] = "SYSTEM_UPDATING";
    IndexStatus["UPDATING"] = "UPDATING";
})(IndexStatus || (IndexStatus = {}));
export var DescribeIndexResponse;
(function (DescribeIndexResponse) {
    /**
     * @internal
     */
    DescribeIndexResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ServerSideEncryptionConfiguration && {
        ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(obj.ServerSideEncryptionConfiguration),
    }))); };
})(DescribeIndexResponse || (DescribeIndexResponse = {}));
export var DescribeQuerySuggestionsBlockListRequest;
(function (DescribeQuerySuggestionsBlockListRequest) {
    /**
     * @internal
     */
    DescribeQuerySuggestionsBlockListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeQuerySuggestionsBlockListRequest || (DescribeQuerySuggestionsBlockListRequest = {}));
export var QuerySuggestionsBlockListStatus;
(function (QuerySuggestionsBlockListStatus) {
    QuerySuggestionsBlockListStatus["ACTIVE"] = "ACTIVE";
    QuerySuggestionsBlockListStatus["ACTIVE_BUT_UPDATE_FAILED"] = "ACTIVE_BUT_UPDATE_FAILED";
    QuerySuggestionsBlockListStatus["CREATING"] = "CREATING";
    QuerySuggestionsBlockListStatus["DELETING"] = "DELETING";
    QuerySuggestionsBlockListStatus["FAILED"] = "FAILED";
    QuerySuggestionsBlockListStatus["UPDATING"] = "UPDATING";
})(QuerySuggestionsBlockListStatus || (QuerySuggestionsBlockListStatus = {}));
export var DescribeQuerySuggestionsBlockListResponse;
(function (DescribeQuerySuggestionsBlockListResponse) {
    /**
     * @internal
     */
    DescribeQuerySuggestionsBlockListResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeQuerySuggestionsBlockListResponse || (DescribeQuerySuggestionsBlockListResponse = {}));
export var DescribeQuerySuggestionsConfigRequest;
(function (DescribeQuerySuggestionsConfigRequest) {
    /**
     * @internal
     */
    DescribeQuerySuggestionsConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeQuerySuggestionsConfigRequest || (DescribeQuerySuggestionsConfigRequest = {}));
export var Mode;
(function (Mode) {
    Mode["ENABLED"] = "ENABLED";
    Mode["LEARN_ONLY"] = "LEARN_ONLY";
})(Mode || (Mode = {}));
export var QuerySuggestionsStatus;
(function (QuerySuggestionsStatus) {
    QuerySuggestionsStatus["ACTIVE"] = "ACTIVE";
    QuerySuggestionsStatus["UPDATING"] = "UPDATING";
})(QuerySuggestionsStatus || (QuerySuggestionsStatus = {}));
export var DescribeQuerySuggestionsConfigResponse;
(function (DescribeQuerySuggestionsConfigResponse) {
    /**
     * @internal
     */
    DescribeQuerySuggestionsConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeQuerySuggestionsConfigResponse || (DescribeQuerySuggestionsConfigResponse = {}));
export var DescribeThesaurusRequest;
(function (DescribeThesaurusRequest) {
    /**
     * @internal
     */
    DescribeThesaurusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeThesaurusRequest || (DescribeThesaurusRequest = {}));
export var ThesaurusStatus;
(function (ThesaurusStatus) {
    ThesaurusStatus["ACTIVE"] = "ACTIVE";
    ThesaurusStatus["ACTIVE_BUT_UPDATE_FAILED"] = "ACTIVE_BUT_UPDATE_FAILED";
    ThesaurusStatus["CREATING"] = "CREATING";
    ThesaurusStatus["DELETING"] = "DELETING";
    ThesaurusStatus["FAILED"] = "FAILED";
    ThesaurusStatus["UPDATING"] = "UPDATING";
})(ThesaurusStatus || (ThesaurusStatus = {}));
export var DescribeThesaurusResponse;
(function (DescribeThesaurusResponse) {
    /**
     * @internal
     */
    DescribeThesaurusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeThesaurusResponse || (DescribeThesaurusResponse = {}));
export var GetQuerySuggestionsRequest;
(function (GetQuerySuggestionsRequest) {
    /**
     * @internal
     */
    GetQuerySuggestionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetQuerySuggestionsRequest || (GetQuerySuggestionsRequest = {}));
export var SuggestionHighlight;
(function (SuggestionHighlight) {
    /**
     * @internal
     */
    SuggestionHighlight.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuggestionHighlight || (SuggestionHighlight = {}));
export var SuggestionTextWithHighlights;
(function (SuggestionTextWithHighlights) {
    /**
     * @internal
     */
    SuggestionTextWithHighlights.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuggestionTextWithHighlights || (SuggestionTextWithHighlights = {}));
export var SuggestionValue;
(function (SuggestionValue) {
    /**
     * @internal
     */
    SuggestionValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuggestionValue || (SuggestionValue = {}));
export var Suggestion;
(function (Suggestion) {
    /**
     * @internal
     */
    Suggestion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Suggestion || (Suggestion = {}));
export var GetQuerySuggestionsResponse;
(function (GetQuerySuggestionsResponse) {
    /**
     * @internal
     */
    GetQuerySuggestionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetQuerySuggestionsResponse || (GetQuerySuggestionsResponse = {}));
export var ListDataSourcesRequest;
(function (ListDataSourcesRequest) {
    /**
     * @internal
     */
    ListDataSourcesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDataSourcesRequest || (ListDataSourcesRequest = {}));
export var DataSourceSummary;
(function (DataSourceSummary) {
    /**
     * @internal
     */
    DataSourceSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSourceSummary || (DataSourceSummary = {}));
export var ListDataSourcesResponse;
(function (ListDataSourcesResponse) {
    /**
     * @internal
     */
    ListDataSourcesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDataSourcesResponse || (ListDataSourcesResponse = {}));
export var TimeRange;
(function (TimeRange) {
    /**
     * @internal
     */
    TimeRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimeRange || (TimeRange = {}));
export var DataSourceSyncJobStatus;
(function (DataSourceSyncJobStatus) {
    DataSourceSyncJobStatus["ABORTED"] = "ABORTED";
    DataSourceSyncJobStatus["FAILED"] = "FAILED";
    DataSourceSyncJobStatus["INCOMPLETE"] = "INCOMPLETE";
    DataSourceSyncJobStatus["STOPPING"] = "STOPPING";
    DataSourceSyncJobStatus["SUCCEEDED"] = "SUCCEEDED";
    DataSourceSyncJobStatus["SYNCING"] = "SYNCING";
    DataSourceSyncJobStatus["SYNCING_INDEXING"] = "SYNCING_INDEXING";
})(DataSourceSyncJobStatus || (DataSourceSyncJobStatus = {}));
export var ListDataSourceSyncJobsRequest;
(function (ListDataSourceSyncJobsRequest) {
    /**
     * @internal
     */
    ListDataSourceSyncJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDataSourceSyncJobsRequest || (ListDataSourceSyncJobsRequest = {}));
export var DataSourceSyncJobMetrics;
(function (DataSourceSyncJobMetrics) {
    /**
     * @internal
     */
    DataSourceSyncJobMetrics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSourceSyncJobMetrics || (DataSourceSyncJobMetrics = {}));
export var DataSourceSyncJob;
(function (DataSourceSyncJob) {
    /**
     * @internal
     */
    DataSourceSyncJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSourceSyncJob || (DataSourceSyncJob = {}));
export var ListDataSourceSyncJobsResponse;
(function (ListDataSourceSyncJobsResponse) {
    /**
     * @internal
     */
    ListDataSourceSyncJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDataSourceSyncJobsResponse || (ListDataSourceSyncJobsResponse = {}));
export var ListFaqsRequest;
(function (ListFaqsRequest) {
    /**
     * @internal
     */
    ListFaqsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFaqsRequest || (ListFaqsRequest = {}));
export var FaqSummary;
(function (FaqSummary) {
    /**
     * @internal
     */
    FaqSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FaqSummary || (FaqSummary = {}));
export var ListFaqsResponse;
(function (ListFaqsResponse) {
    /**
     * @internal
     */
    ListFaqsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFaqsResponse || (ListFaqsResponse = {}));
export var ListIndicesRequest;
(function (ListIndicesRequest) {
    /**
     * @internal
     */
    ListIndicesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIndicesRequest || (ListIndicesRequest = {}));
export var IndexConfigurationSummary;
(function (IndexConfigurationSummary) {
    /**
     * @internal
     */
    IndexConfigurationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IndexConfigurationSummary || (IndexConfigurationSummary = {}));
export var ListIndicesResponse;
(function (ListIndicesResponse) {
    /**
     * @internal
     */
    ListIndicesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIndicesResponse || (ListIndicesResponse = {}));
export var ListQuerySuggestionsBlockListsRequest;
(function (ListQuerySuggestionsBlockListsRequest) {
    /**
     * @internal
     */
    ListQuerySuggestionsBlockListsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListQuerySuggestionsBlockListsRequest || (ListQuerySuggestionsBlockListsRequest = {}));
export var QuerySuggestionsBlockListSummary;
(function (QuerySuggestionsBlockListSummary) {
    /**
     * @internal
     */
    QuerySuggestionsBlockListSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QuerySuggestionsBlockListSummary || (QuerySuggestionsBlockListSummary = {}));
export var ListQuerySuggestionsBlockListsResponse;
(function (ListQuerySuggestionsBlockListsResponse) {
    /**
     * @internal
     */
    ListQuerySuggestionsBlockListsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListQuerySuggestionsBlockListsResponse || (ListQuerySuggestionsBlockListsResponse = {}));
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
export var ResourceUnavailableException;
(function (ResourceUnavailableException) {
    /**
     * @internal
     */
    ResourceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceUnavailableException || (ResourceUnavailableException = {}));
export var ListThesauriRequest;
(function (ListThesauriRequest) {
    /**
     * @internal
     */
    ListThesauriRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListThesauriRequest || (ListThesauriRequest = {}));
export var ThesaurusSummary;
(function (ThesaurusSummary) {
    /**
     * @internal
     */
    ThesaurusSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThesaurusSummary || (ThesaurusSummary = {}));
export var ListThesauriResponse;
(function (ListThesauriResponse) {
    /**
     * @internal
     */
    ListThesauriResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListThesauriResponse || (ListThesauriResponse = {}));
export var DocumentRelevanceConfiguration;
(function (DocumentRelevanceConfiguration) {
    /**
     * @internal
     */
    DocumentRelevanceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentRelevanceConfiguration || (DocumentRelevanceConfiguration = {}));
export var Facet;
(function (Facet) {
    /**
     * @internal
     */
    Facet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Facet || (Facet = {}));
export var QueryResultType;
(function (QueryResultType) {
    QueryResultType["ANSWER"] = "ANSWER";
    QueryResultType["DOCUMENT"] = "DOCUMENT";
    QueryResultType["QUESTION_ANSWER"] = "QUESTION_ANSWER";
})(QueryResultType || (QueryResultType = {}));
export var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "ASC";
    SortOrder["DESC"] = "DESC";
})(SortOrder || (SortOrder = {}));
export var SortingConfiguration;
(function (SortingConfiguration) {
    /**
     * @internal
     */
    SortingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SortingConfiguration || (SortingConfiguration = {}));
export var UserContext;
(function (UserContext) {
    /**
     * @internal
     */
    UserContext.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserContext || (UserContext = {}));
export var DocumentAttributeValueCountPair;
(function (DocumentAttributeValueCountPair) {
    /**
     * @internal
     */
    DocumentAttributeValueCountPair.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DocumentAttributeValue && {
        DocumentAttributeValue: DocumentAttributeValue.filterSensitiveLog(obj.DocumentAttributeValue),
    }))); };
})(DocumentAttributeValueCountPair || (DocumentAttributeValueCountPair = {}));
export var FacetResult;
(function (FacetResult) {
    /**
     * @internal
     */
    FacetResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DocumentAttributeValueCountPairs && {
        DocumentAttributeValueCountPairs: obj.DocumentAttributeValueCountPairs.map(function (item) {
            return DocumentAttributeValueCountPair.filterSensitiveLog(item);
        }),
    }))); };
})(FacetResult || (FacetResult = {}));
export var ScoreConfidence;
(function (ScoreConfidence) {
    ScoreConfidence["HIGH"] = "HIGH";
    ScoreConfidence["LOW"] = "LOW";
    ScoreConfidence["MEDIUM"] = "MEDIUM";
    ScoreConfidence["VERY_HIGH"] = "VERY_HIGH";
})(ScoreConfidence || (ScoreConfidence = {}));
export var ScoreAttributes;
(function (ScoreAttributes) {
    /**
     * @internal
     */
    ScoreAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScoreAttributes || (ScoreAttributes = {}));
export var QueryResultItem;
(function (QueryResultItem) {
    /**
     * @internal
     */
    QueryResultItem.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DocumentAttributes && {
        DocumentAttributes: obj.DocumentAttributes.map(function (item) { return DocumentAttribute.filterSensitiveLog(item); }),
    }))); };
})(QueryResultItem || (QueryResultItem = {}));
export var QueryResult;
(function (QueryResult) {
    /**
     * @internal
     */
    QueryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueryResult || (QueryResult = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInUseException || (ResourceInUseException = {}));
export var StartDataSourceSyncJobRequest;
(function (StartDataSourceSyncJobRequest) {
    /**
     * @internal
     */
    StartDataSourceSyncJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartDataSourceSyncJobRequest || (StartDataSourceSyncJobRequest = {}));
export var StartDataSourceSyncJobResponse;
(function (StartDataSourceSyncJobResponse) {
    /**
     * @internal
     */
    StartDataSourceSyncJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartDataSourceSyncJobResponse || (StartDataSourceSyncJobResponse = {}));
export var StopDataSourceSyncJobRequest;
(function (StopDataSourceSyncJobRequest) {
    /**
     * @internal
     */
    StopDataSourceSyncJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopDataSourceSyncJobRequest || (StopDataSourceSyncJobRequest = {}));
export var ClickFeedback;
(function (ClickFeedback) {
    /**
     * @internal
     */
    ClickFeedback.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClickFeedback || (ClickFeedback = {}));
export var RelevanceType;
(function (RelevanceType) {
    RelevanceType["NOT_RELEVANT"] = "NOT_RELEVANT";
    RelevanceType["RELEVANT"] = "RELEVANT";
})(RelevanceType || (RelevanceType = {}));
export var RelevanceFeedback;
(function (RelevanceFeedback) {
    /**
     * @internal
     */
    RelevanceFeedback.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RelevanceFeedback || (RelevanceFeedback = {}));
export var SubmitFeedbackRequest;
(function (SubmitFeedbackRequest) {
    /**
     * @internal
     */
    SubmitFeedbackRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubmitFeedbackRequest || (SubmitFeedbackRequest = {}));
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
export var UpdateDataSourceRequest;
(function (UpdateDataSourceRequest) {
    /**
     * @internal
     */
    UpdateDataSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDataSourceRequest || (UpdateDataSourceRequest = {}));
export var UpdateIndexRequest;
(function (UpdateIndexRequest) {
    /**
     * @internal
     */
    UpdateIndexRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIndexRequest || (UpdateIndexRequest = {}));
export var UpdateQuerySuggestionsBlockListRequest;
(function (UpdateQuerySuggestionsBlockListRequest) {
    /**
     * @internal
     */
    UpdateQuerySuggestionsBlockListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateQuerySuggestionsBlockListRequest || (UpdateQuerySuggestionsBlockListRequest = {}));
export var UpdateQuerySuggestionsConfigRequest;
(function (UpdateQuerySuggestionsConfigRequest) {
    /**
     * @internal
     */
    UpdateQuerySuggestionsConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateQuerySuggestionsConfigRequest || (UpdateQuerySuggestionsConfigRequest = {}));
export var UpdateThesaurusRequest;
(function (UpdateThesaurusRequest) {
    /**
     * @internal
     */
    UpdateThesaurusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateThesaurusRequest || (UpdateThesaurusRequest = {}));
export var AttributeFilter;
(function (AttributeFilter) {
    /**
     * @internal
     */
    AttributeFilter.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, obj), (obj.AndAllFilters && {
        AndAllFilters: obj.AndAllFilters.map(function (item) { return AttributeFilter.filterSensitiveLog(item); }),
    })), (obj.OrAllFilters && { OrAllFilters: obj.OrAllFilters.map(function (item) { return AttributeFilter.filterSensitiveLog(item); }) })), (obj.NotFilter && { NotFilter: AttributeFilter.filterSensitiveLog(obj.NotFilter) })), (obj.EqualsTo && { EqualsTo: DocumentAttribute.filterSensitiveLog(obj.EqualsTo) })), (obj.ContainsAll && { ContainsAll: DocumentAttribute.filterSensitiveLog(obj.ContainsAll) })), (obj.ContainsAny && { ContainsAny: DocumentAttribute.filterSensitiveLog(obj.ContainsAny) })), (obj.GreaterThan && { GreaterThan: DocumentAttribute.filterSensitiveLog(obj.GreaterThan) })), (obj.GreaterThanOrEquals && {
        GreaterThanOrEquals: DocumentAttribute.filterSensitiveLog(obj.GreaterThanOrEquals),
    })), (obj.LessThan && { LessThan: DocumentAttribute.filterSensitiveLog(obj.LessThan) })), (obj.LessThanOrEquals && { LessThanOrEquals: DocumentAttribute.filterSensitiveLog(obj.LessThanOrEquals) }))); };
})(AttributeFilter || (AttributeFilter = {}));
export var QueryRequest;
(function (QueryRequest) {
    /**
     * @internal
     */
    QueryRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AttributeFilter && { AttributeFilter: AttributeFilter.filterSensitiveLog(obj.AttributeFilter) }))); };
})(QueryRequest || (QueryRequest = {}));
//# sourceMappingURL=models_0.js.map