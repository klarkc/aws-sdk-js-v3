"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionConfiguration = exports.ColumnConfiguration = exports.DataSourceToIndexFieldMapping = exports.ConfluenceConfiguration = exports.DataSourceVpcConfiguration = exports.ConfluenceVersion = exports.ConfluenceSpaceConfiguration = exports.ConfluenceSpaceToIndexFieldMapping = exports.ConfluenceSpaceFieldName = exports.ConfluencePageConfiguration = exports.ConfluencePageToIndexFieldMapping = exports.ConfluencePageFieldName = exports.ConfluenceBlogConfiguration = exports.ConfluenceBlogToIndexFieldMapping = exports.ConfluenceBlogFieldName = exports.ConfluenceAttachmentConfiguration = exports.ConfluenceAttachmentToIndexFieldMapping = exports.ConfluenceAttachmentFieldName = exports.ClearQuerySuggestionsRequest = exports.ServiceQuotaExceededException = exports.BatchPutDocumentResponse = exports.BatchPutDocumentResponseFailedDocument = exports.BatchPutDocumentRequest = exports.Document = exports.S3Path = exports.ContentType = exports.Principal = exports.PrincipalType = exports.ReadAccessType = exports.ValidationException = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.BatchDeleteDocumentResponse = exports.BatchDeleteDocumentResponseFailedDocument = exports.ErrorCode = exports.BatchDeleteDocumentRequest = exports.DataSourceSyncJobMetricTarget = exports.DocumentAttribute = exports.DocumentAttributeValue = exports.AdditionalResultAttribute = exports.AdditionalResultAttributeValueType = exports.AdditionalResultAttributeValue = exports.TextWithHighlights = exports.Highlight = exports.HighlightType = exports.AclConfiguration = exports.AccessDeniedException = exports.AccessControlListConfiguration = void 0;
exports.DeleteFaqRequest = exports.DeleteDataSourceRequest = exports.CreateThesaurusResponse = exports.CreateThesaurusRequest = exports.CreateQuerySuggestionsBlockListResponse = exports.CreateQuerySuggestionsBlockListRequest = exports.CreateIndexResponse = exports.CreateIndexRequest = exports.UserTokenConfiguration = exports.JwtTokenTypeConfiguration = exports.KeyLocation = exports.JsonTokenTypeConfiguration = exports.UserContextPolicy = exports.ServerSideEncryptionConfiguration = exports.IndexEdition = exports.CreateFaqResponse = exports.CreateFaqRequest = exports.FaqFileFormat = exports.ResourceAlreadyExistException = exports.CreateDataSourceResponse = exports.CreateDataSourceRequest = exports.DataSourceType = exports.Tag = exports.DataSourceConfiguration = exports.SharePointConfiguration = exports.SharePointVersion = exports.ServiceNowConfiguration = exports.ServiceNowBuildVersionType = exports.ServiceNowServiceCatalogConfiguration = exports.ServiceNowKnowledgeArticleConfiguration = exports.ServiceNowAuthenticationType = exports.SalesforceConfiguration = exports.SalesforceStandardObjectConfiguration = exports.SalesforceStandardObjectName = exports.SalesforceStandardObjectAttachmentConfiguration = exports.SalesforceKnowledgeArticleConfiguration = exports.SalesforceStandardKnowledgeArticleTypeConfiguration = exports.SalesforceKnowledgeArticleState = exports.SalesforceCustomKnowledgeArticleTypeConfiguration = exports.SalesforceChatterFeedConfiguration = exports.SalesforceChatterFeedIncludeFilterType = exports.S3DataSourceConfiguration = exports.DocumentsMetadataConfiguration = exports.OneDriveConfiguration = exports.OneDriveUsers = exports.GoogleDriveConfiguration = exports.DatabaseConfiguration = exports.SqlConfiguration = exports.QueryIdentifiersEnclosingOption = exports.DatabaseEngineType = void 0;
exports.ListIndicesRequest = exports.ListFaqsResponse = exports.FaqSummary = exports.ListFaqsRequest = exports.ListDataSourceSyncJobsResponse = exports.DataSourceSyncJob = exports.DataSourceSyncJobMetrics = exports.ListDataSourceSyncJobsRequest = exports.DataSourceSyncJobStatus = exports.TimeRange = exports.ListDataSourcesResponse = exports.DataSourceSummary = exports.ListDataSourcesRequest = exports.GetQuerySuggestionsResponse = exports.Suggestion = exports.SuggestionValue = exports.SuggestionTextWithHighlights = exports.SuggestionHighlight = exports.GetQuerySuggestionsRequest = exports.DescribeThesaurusResponse = exports.ThesaurusStatus = exports.DescribeThesaurusRequest = exports.DescribeQuerySuggestionsConfigResponse = exports.QuerySuggestionsStatus = exports.Mode = exports.DescribeQuerySuggestionsConfigRequest = exports.DescribeQuerySuggestionsBlockListResponse = exports.QuerySuggestionsBlockListStatus = exports.DescribeQuerySuggestionsBlockListRequest = exports.DescribeIndexResponse = exports.IndexStatus = exports.IndexStatistics = exports.TextDocumentStatistics = exports.FaqStatistics = exports.DocumentMetadataConfiguration = exports.DocumentAttributeValueType = exports.Search = exports.Relevance = exports.Order = exports.CapacityUnitsConfiguration = exports.DescribeIndexRequest = exports.DescribeFaqResponse = exports.FaqStatus = exports.DescribeFaqRequest = exports.DescribeDataSourceResponse = exports.DataSourceStatus = exports.DescribeDataSourceRequest = exports.DeleteThesaurusRequest = exports.DeleteQuerySuggestionsBlockListRequest = exports.DeleteIndexRequest = void 0;
exports.QueryRequest = exports.AttributeFilter = exports.UpdateThesaurusRequest = exports.UpdateQuerySuggestionsConfigRequest = exports.UpdateQuerySuggestionsBlockListRequest = exports.UpdateIndexRequest = exports.UpdateDataSourceRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.SubmitFeedbackRequest = exports.RelevanceFeedback = exports.RelevanceType = exports.ClickFeedback = exports.StopDataSourceSyncJobRequest = exports.StartDataSourceSyncJobResponse = exports.StartDataSourceSyncJobRequest = exports.ResourceInUseException = exports.QueryResult = exports.QueryResultItem = exports.ScoreAttributes = exports.ScoreConfidence = exports.FacetResult = exports.DocumentAttributeValueCountPair = exports.UserContext = exports.SortingConfiguration = exports.SortOrder = exports.QueryResultType = exports.Facet = exports.DocumentRelevanceConfiguration = exports.ListThesauriResponse = exports.ThesaurusSummary = exports.ListThesauriRequest = exports.ResourceUnavailableException = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListQuerySuggestionsBlockListsResponse = exports.QuerySuggestionsBlockListSummary = exports.ListQuerySuggestionsBlockListsRequest = exports.ListIndicesResponse = exports.IndexConfigurationSummary = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessControlListConfiguration;
(function (AccessControlListConfiguration) {
    /**
     * @internal
     */
    AccessControlListConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessControlListConfiguration = exports.AccessControlListConfiguration || (exports.AccessControlListConfiguration = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AclConfiguration;
(function (AclConfiguration) {
    /**
     * @internal
     */
    AclConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AclConfiguration = exports.AclConfiguration || (exports.AclConfiguration = {}));
var HighlightType;
(function (HighlightType) {
    HighlightType["STANDARD"] = "STANDARD";
    HighlightType["THESAURUS_SYNONYM"] = "THESAURUS_SYNONYM";
})(HighlightType = exports.HighlightType || (exports.HighlightType = {}));
var Highlight;
(function (Highlight) {
    /**
     * @internal
     */
    Highlight.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Highlight = exports.Highlight || (exports.Highlight = {}));
var TextWithHighlights;
(function (TextWithHighlights) {
    /**
     * @internal
     */
    TextWithHighlights.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextWithHighlights = exports.TextWithHighlights || (exports.TextWithHighlights = {}));
var AdditionalResultAttributeValue;
(function (AdditionalResultAttributeValue) {
    /**
     * @internal
     */
    AdditionalResultAttributeValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdditionalResultAttributeValue = exports.AdditionalResultAttributeValue || (exports.AdditionalResultAttributeValue = {}));
var AdditionalResultAttributeValueType;
(function (AdditionalResultAttributeValueType) {
    AdditionalResultAttributeValueType["TEXT_WITH_HIGHLIGHTS_VALUE"] = "TEXT_WITH_HIGHLIGHTS_VALUE";
})(AdditionalResultAttributeValueType = exports.AdditionalResultAttributeValueType || (exports.AdditionalResultAttributeValueType = {}));
var AdditionalResultAttribute;
(function (AdditionalResultAttribute) {
    /**
     * @internal
     */
    AdditionalResultAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdditionalResultAttribute = exports.AdditionalResultAttribute || (exports.AdditionalResultAttribute = {}));
var DocumentAttributeValue;
(function (DocumentAttributeValue) {
    DocumentAttributeValue.visit = (value, visitor) => {
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
    DocumentAttributeValue.filterSensitiveLog = (obj) => {
        if (obj.StringValue !== undefined)
            return { StringValue: obj.StringValue };
        if (obj.StringListValue !== undefined)
            return { StringListValue: obj.StringListValue };
        if (obj.LongValue !== undefined)
            return { LongValue: obj.LongValue };
        if (obj.DateValue !== undefined)
            return { DateValue: obj.DateValue };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(DocumentAttributeValue = exports.DocumentAttributeValue || (exports.DocumentAttributeValue = {}));
var DocumentAttribute;
(function (DocumentAttribute) {
    /**
     * @internal
     */
    DocumentAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Value && { Value: DocumentAttributeValue.filterSensitiveLog(obj.Value) }),
    });
})(DocumentAttribute = exports.DocumentAttribute || (exports.DocumentAttribute = {}));
var DataSourceSyncJobMetricTarget;
(function (DataSourceSyncJobMetricTarget) {
    /**
     * @internal
     */
    DataSourceSyncJobMetricTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSourceSyncJobMetricTarget = exports.DataSourceSyncJobMetricTarget || (exports.DataSourceSyncJobMetricTarget = {}));
var BatchDeleteDocumentRequest;
(function (BatchDeleteDocumentRequest) {
    /**
     * @internal
     */
    BatchDeleteDocumentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteDocumentRequest = exports.BatchDeleteDocumentRequest || (exports.BatchDeleteDocumentRequest = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["INTERNAL_ERROR"] = "InternalError";
    ErrorCode["INVALID_REQUEST"] = "InvalidRequest";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var BatchDeleteDocumentResponseFailedDocument;
(function (BatchDeleteDocumentResponseFailedDocument) {
    /**
     * @internal
     */
    BatchDeleteDocumentResponseFailedDocument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteDocumentResponseFailedDocument = exports.BatchDeleteDocumentResponseFailedDocument || (exports.BatchDeleteDocumentResponseFailedDocument = {}));
var BatchDeleteDocumentResponse;
(function (BatchDeleteDocumentResponse) {
    /**
     * @internal
     */
    BatchDeleteDocumentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteDocumentResponse = exports.BatchDeleteDocumentResponse || (exports.BatchDeleteDocumentResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
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
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var ReadAccessType;
(function (ReadAccessType) {
    ReadAccessType["ALLOW"] = "ALLOW";
    ReadAccessType["DENY"] = "DENY";
})(ReadAccessType = exports.ReadAccessType || (exports.ReadAccessType = {}));
var PrincipalType;
(function (PrincipalType) {
    PrincipalType["GROUP"] = "GROUP";
    PrincipalType["USER"] = "USER";
})(PrincipalType = exports.PrincipalType || (exports.PrincipalType = {}));
var Principal;
(function (Principal) {
    /**
     * @internal
     */
    Principal.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Principal = exports.Principal || (exports.Principal = {}));
var ContentType;
(function (ContentType) {
    ContentType["HTML"] = "HTML";
    ContentType["MS_WORD"] = "MS_WORD";
    ContentType["PDF"] = "PDF";
    ContentType["PLAIN_TEXT"] = "PLAIN_TEXT";
    ContentType["PPT"] = "PPT";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var S3Path;
(function (S3Path) {
    /**
     * @internal
     */
    S3Path.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Path = exports.S3Path || (exports.S3Path = {}));
var Document;
(function (Document) {
    /**
     * @internal
     */
    Document.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => DocumentAttribute.filterSensitiveLog(item)) }),
    });
})(Document = exports.Document || (exports.Document = {}));
var BatchPutDocumentRequest;
(function (BatchPutDocumentRequest) {
    /**
     * @internal
     */
    BatchPutDocumentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutDocumentRequest = exports.BatchPutDocumentRequest || (exports.BatchPutDocumentRequest = {}));
var BatchPutDocumentResponseFailedDocument;
(function (BatchPutDocumentResponseFailedDocument) {
    /**
     * @internal
     */
    BatchPutDocumentResponseFailedDocument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutDocumentResponseFailedDocument = exports.BatchPutDocumentResponseFailedDocument || (exports.BatchPutDocumentResponseFailedDocument = {}));
var BatchPutDocumentResponse;
(function (BatchPutDocumentResponse) {
    /**
     * @internal
     */
    BatchPutDocumentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutDocumentResponse = exports.BatchPutDocumentResponse || (exports.BatchPutDocumentResponse = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ClearQuerySuggestionsRequest;
(function (ClearQuerySuggestionsRequest) {
    /**
     * @internal
     */
    ClearQuerySuggestionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClearQuerySuggestionsRequest = exports.ClearQuerySuggestionsRequest || (exports.ClearQuerySuggestionsRequest = {}));
var ConfluenceAttachmentFieldName;
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
})(ConfluenceAttachmentFieldName = exports.ConfluenceAttachmentFieldName || (exports.ConfluenceAttachmentFieldName = {}));
var ConfluenceAttachmentToIndexFieldMapping;
(function (ConfluenceAttachmentToIndexFieldMapping) {
    /**
     * @internal
     */
    ConfluenceAttachmentToIndexFieldMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfluenceAttachmentToIndexFieldMapping = exports.ConfluenceAttachmentToIndexFieldMapping || (exports.ConfluenceAttachmentToIndexFieldMapping = {}));
var ConfluenceAttachmentConfiguration;
(function (ConfluenceAttachmentConfiguration) {
    /**
     * @internal
     */
    ConfluenceAttachmentConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfluenceAttachmentConfiguration = exports.ConfluenceAttachmentConfiguration || (exports.ConfluenceAttachmentConfiguration = {}));
var ConfluenceBlogFieldName;
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
})(ConfluenceBlogFieldName = exports.ConfluenceBlogFieldName || (exports.ConfluenceBlogFieldName = {}));
var ConfluenceBlogToIndexFieldMapping;
(function (ConfluenceBlogToIndexFieldMapping) {
    /**
     * @internal
     */
    ConfluenceBlogToIndexFieldMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfluenceBlogToIndexFieldMapping = exports.ConfluenceBlogToIndexFieldMapping || (exports.ConfluenceBlogToIndexFieldMapping = {}));
var ConfluenceBlogConfiguration;
(function (ConfluenceBlogConfiguration) {
    /**
     * @internal
     */
    ConfluenceBlogConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfluenceBlogConfiguration = exports.ConfluenceBlogConfiguration || (exports.ConfluenceBlogConfiguration = {}));
var ConfluencePageFieldName;
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
})(ConfluencePageFieldName = exports.ConfluencePageFieldName || (exports.ConfluencePageFieldName = {}));
var ConfluencePageToIndexFieldMapping;
(function (ConfluencePageToIndexFieldMapping) {
    /**
     * @internal
     */
    ConfluencePageToIndexFieldMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfluencePageToIndexFieldMapping = exports.ConfluencePageToIndexFieldMapping || (exports.ConfluencePageToIndexFieldMapping = {}));
var ConfluencePageConfiguration;
(function (ConfluencePageConfiguration) {
    /**
     * @internal
     */
    ConfluencePageConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfluencePageConfiguration = exports.ConfluencePageConfiguration || (exports.ConfluencePageConfiguration = {}));
var ConfluenceSpaceFieldName;
(function (ConfluenceSpaceFieldName) {
    ConfluenceSpaceFieldName["DISPLAY_URL"] = "DISPLAY_URL";
    ConfluenceSpaceFieldName["ITEM_TYPE"] = "ITEM_TYPE";
    ConfluenceSpaceFieldName["SPACE_KEY"] = "SPACE_KEY";
    ConfluenceSpaceFieldName["URL"] = "URL";
})(ConfluenceSpaceFieldName = exports.ConfluenceSpaceFieldName || (exports.ConfluenceSpaceFieldName = {}));
var ConfluenceSpaceToIndexFieldMapping;
(function (ConfluenceSpaceToIndexFieldMapping) {
    /**
     * @internal
     */
    ConfluenceSpaceToIndexFieldMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfluenceSpaceToIndexFieldMapping = exports.ConfluenceSpaceToIndexFieldMapping || (exports.ConfluenceSpaceToIndexFieldMapping = {}));
var ConfluenceSpaceConfiguration;
(function (ConfluenceSpaceConfiguration) {
    /**
     * @internal
     */
    ConfluenceSpaceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfluenceSpaceConfiguration = exports.ConfluenceSpaceConfiguration || (exports.ConfluenceSpaceConfiguration = {}));
var ConfluenceVersion;
(function (ConfluenceVersion) {
    ConfluenceVersion["CLOUD"] = "CLOUD";
    ConfluenceVersion["SERVER"] = "SERVER";
})(ConfluenceVersion = exports.ConfluenceVersion || (exports.ConfluenceVersion = {}));
var DataSourceVpcConfiguration;
(function (DataSourceVpcConfiguration) {
    /**
     * @internal
     */
    DataSourceVpcConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSourceVpcConfiguration = exports.DataSourceVpcConfiguration || (exports.DataSourceVpcConfiguration = {}));
var ConfluenceConfiguration;
(function (ConfluenceConfiguration) {
    /**
     * @internal
     */
    ConfluenceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfluenceConfiguration = exports.ConfluenceConfiguration || (exports.ConfluenceConfiguration = {}));
var DataSourceToIndexFieldMapping;
(function (DataSourceToIndexFieldMapping) {
    /**
     * @internal
     */
    DataSourceToIndexFieldMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSourceToIndexFieldMapping = exports.DataSourceToIndexFieldMapping || (exports.DataSourceToIndexFieldMapping = {}));
var ColumnConfiguration;
(function (ColumnConfiguration) {
    /**
     * @internal
     */
    ColumnConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnConfiguration = exports.ColumnConfiguration || (exports.ColumnConfiguration = {}));
var ConnectionConfiguration;
(function (ConnectionConfiguration) {
    /**
     * @internal
     */
    ConnectionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionConfiguration = exports.ConnectionConfiguration || (exports.ConnectionConfiguration = {}));
var DatabaseEngineType;
(function (DatabaseEngineType) {
    DatabaseEngineType["RDS_AURORA_MYSQL"] = "RDS_AURORA_MYSQL";
    DatabaseEngineType["RDS_AURORA_POSTGRESQL"] = "RDS_AURORA_POSTGRESQL";
    DatabaseEngineType["RDS_MYSQL"] = "RDS_MYSQL";
    DatabaseEngineType["RDS_POSTGRESQL"] = "RDS_POSTGRESQL";
})(DatabaseEngineType = exports.DatabaseEngineType || (exports.DatabaseEngineType = {}));
var QueryIdentifiersEnclosingOption;
(function (QueryIdentifiersEnclosingOption) {
    QueryIdentifiersEnclosingOption["DOUBLE_QUOTES"] = "DOUBLE_QUOTES";
    QueryIdentifiersEnclosingOption["NONE"] = "NONE";
})(QueryIdentifiersEnclosingOption = exports.QueryIdentifiersEnclosingOption || (exports.QueryIdentifiersEnclosingOption = {}));
var SqlConfiguration;
(function (SqlConfiguration) {
    /**
     * @internal
     */
    SqlConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlConfiguration = exports.SqlConfiguration || (exports.SqlConfiguration = {}));
var DatabaseConfiguration;
(function (DatabaseConfiguration) {
    /**
     * @internal
     */
    DatabaseConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatabaseConfiguration = exports.DatabaseConfiguration || (exports.DatabaseConfiguration = {}));
var GoogleDriveConfiguration;
(function (GoogleDriveConfiguration) {
    /**
     * @internal
     */
    GoogleDriveConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GoogleDriveConfiguration = exports.GoogleDriveConfiguration || (exports.GoogleDriveConfiguration = {}));
var OneDriveUsers;
(function (OneDriveUsers) {
    /**
     * @internal
     */
    OneDriveUsers.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OneDriveUsers = exports.OneDriveUsers || (exports.OneDriveUsers = {}));
var OneDriveConfiguration;
(function (OneDriveConfiguration) {
    /**
     * @internal
     */
    OneDriveConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OneDriveConfiguration = exports.OneDriveConfiguration || (exports.OneDriveConfiguration = {}));
var DocumentsMetadataConfiguration;
(function (DocumentsMetadataConfiguration) {
    /**
     * @internal
     */
    DocumentsMetadataConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentsMetadataConfiguration = exports.DocumentsMetadataConfiguration || (exports.DocumentsMetadataConfiguration = {}));
var S3DataSourceConfiguration;
(function (S3DataSourceConfiguration) {
    /**
     * @internal
     */
    S3DataSourceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3DataSourceConfiguration = exports.S3DataSourceConfiguration || (exports.S3DataSourceConfiguration = {}));
var SalesforceChatterFeedIncludeFilterType;
(function (SalesforceChatterFeedIncludeFilterType) {
    SalesforceChatterFeedIncludeFilterType["ACTIVE_USER"] = "ACTIVE_USER";
    SalesforceChatterFeedIncludeFilterType["STANDARD_USER"] = "STANDARD_USER";
})(SalesforceChatterFeedIncludeFilterType = exports.SalesforceChatterFeedIncludeFilterType || (exports.SalesforceChatterFeedIncludeFilterType = {}));
var SalesforceChatterFeedConfiguration;
(function (SalesforceChatterFeedConfiguration) {
    /**
     * @internal
     */
    SalesforceChatterFeedConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SalesforceChatterFeedConfiguration = exports.SalesforceChatterFeedConfiguration || (exports.SalesforceChatterFeedConfiguration = {}));
var SalesforceCustomKnowledgeArticleTypeConfiguration;
(function (SalesforceCustomKnowledgeArticleTypeConfiguration) {
    /**
     * @internal
     */
    SalesforceCustomKnowledgeArticleTypeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SalesforceCustomKnowledgeArticleTypeConfiguration = exports.SalesforceCustomKnowledgeArticleTypeConfiguration || (exports.SalesforceCustomKnowledgeArticleTypeConfiguration = {}));
var SalesforceKnowledgeArticleState;
(function (SalesforceKnowledgeArticleState) {
    SalesforceKnowledgeArticleState["ARCHIVED"] = "ARCHIVED";
    SalesforceKnowledgeArticleState["DRAFT"] = "DRAFT";
    SalesforceKnowledgeArticleState["PUBLISHED"] = "PUBLISHED";
})(SalesforceKnowledgeArticleState = exports.SalesforceKnowledgeArticleState || (exports.SalesforceKnowledgeArticleState = {}));
var SalesforceStandardKnowledgeArticleTypeConfiguration;
(function (SalesforceStandardKnowledgeArticleTypeConfiguration) {
    /**
     * @internal
     */
    SalesforceStandardKnowledgeArticleTypeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SalesforceStandardKnowledgeArticleTypeConfiguration = exports.SalesforceStandardKnowledgeArticleTypeConfiguration || (exports.SalesforceStandardKnowledgeArticleTypeConfiguration = {}));
var SalesforceKnowledgeArticleConfiguration;
(function (SalesforceKnowledgeArticleConfiguration) {
    /**
     * @internal
     */
    SalesforceKnowledgeArticleConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SalesforceKnowledgeArticleConfiguration = exports.SalesforceKnowledgeArticleConfiguration || (exports.SalesforceKnowledgeArticleConfiguration = {}));
var SalesforceStandardObjectAttachmentConfiguration;
(function (SalesforceStandardObjectAttachmentConfiguration) {
    /**
     * @internal
     */
    SalesforceStandardObjectAttachmentConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SalesforceStandardObjectAttachmentConfiguration = exports.SalesforceStandardObjectAttachmentConfiguration || (exports.SalesforceStandardObjectAttachmentConfiguration = {}));
var SalesforceStandardObjectName;
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
})(SalesforceStandardObjectName = exports.SalesforceStandardObjectName || (exports.SalesforceStandardObjectName = {}));
var SalesforceStandardObjectConfiguration;
(function (SalesforceStandardObjectConfiguration) {
    /**
     * @internal
     */
    SalesforceStandardObjectConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SalesforceStandardObjectConfiguration = exports.SalesforceStandardObjectConfiguration || (exports.SalesforceStandardObjectConfiguration = {}));
var SalesforceConfiguration;
(function (SalesforceConfiguration) {
    /**
     * @internal
     */
    SalesforceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SalesforceConfiguration = exports.SalesforceConfiguration || (exports.SalesforceConfiguration = {}));
var ServiceNowAuthenticationType;
(function (ServiceNowAuthenticationType) {
    ServiceNowAuthenticationType["HTTP_BASIC"] = "HTTP_BASIC";
    ServiceNowAuthenticationType["OAUTH2"] = "OAUTH2";
})(ServiceNowAuthenticationType = exports.ServiceNowAuthenticationType || (exports.ServiceNowAuthenticationType = {}));
var ServiceNowKnowledgeArticleConfiguration;
(function (ServiceNowKnowledgeArticleConfiguration) {
    /**
     * @internal
     */
    ServiceNowKnowledgeArticleConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceNowKnowledgeArticleConfiguration = exports.ServiceNowKnowledgeArticleConfiguration || (exports.ServiceNowKnowledgeArticleConfiguration = {}));
var ServiceNowServiceCatalogConfiguration;
(function (ServiceNowServiceCatalogConfiguration) {
    /**
     * @internal
     */
    ServiceNowServiceCatalogConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceNowServiceCatalogConfiguration = exports.ServiceNowServiceCatalogConfiguration || (exports.ServiceNowServiceCatalogConfiguration = {}));
var ServiceNowBuildVersionType;
(function (ServiceNowBuildVersionType) {
    ServiceNowBuildVersionType["LONDON"] = "LONDON";
    ServiceNowBuildVersionType["OTHERS"] = "OTHERS";
})(ServiceNowBuildVersionType = exports.ServiceNowBuildVersionType || (exports.ServiceNowBuildVersionType = {}));
var ServiceNowConfiguration;
(function (ServiceNowConfiguration) {
    /**
     * @internal
     */
    ServiceNowConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceNowConfiguration = exports.ServiceNowConfiguration || (exports.ServiceNowConfiguration = {}));
var SharePointVersion;
(function (SharePointVersion) {
    SharePointVersion["SHAREPOINT_ONLINE"] = "SHAREPOINT_ONLINE";
})(SharePointVersion = exports.SharePointVersion || (exports.SharePointVersion = {}));
var SharePointConfiguration;
(function (SharePointConfiguration) {
    /**
     * @internal
     */
    SharePointConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SharePointConfiguration = exports.SharePointConfiguration || (exports.SharePointConfiguration = {}));
var DataSourceConfiguration;
(function (DataSourceConfiguration) {
    /**
     * @internal
     */
    DataSourceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSourceConfiguration = exports.DataSourceConfiguration || (exports.DataSourceConfiguration = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var DataSourceType;
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
})(DataSourceType = exports.DataSourceType || (exports.DataSourceType = {}));
var CreateDataSourceRequest;
(function (CreateDataSourceRequest) {
    /**
     * @internal
     */
    CreateDataSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataSourceRequest = exports.CreateDataSourceRequest || (exports.CreateDataSourceRequest = {}));
var CreateDataSourceResponse;
(function (CreateDataSourceResponse) {
    /**
     * @internal
     */
    CreateDataSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataSourceResponse = exports.CreateDataSourceResponse || (exports.CreateDataSourceResponse = {}));
var ResourceAlreadyExistException;
(function (ResourceAlreadyExistException) {
    /**
     * @internal
     */
    ResourceAlreadyExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistException = exports.ResourceAlreadyExistException || (exports.ResourceAlreadyExistException = {}));
var FaqFileFormat;
(function (FaqFileFormat) {
    FaqFileFormat["CSV"] = "CSV";
    FaqFileFormat["CSV_WITH_HEADER"] = "CSV_WITH_HEADER";
    FaqFileFormat["JSON"] = "JSON";
})(FaqFileFormat = exports.FaqFileFormat || (exports.FaqFileFormat = {}));
var CreateFaqRequest;
(function (CreateFaqRequest) {
    /**
     * @internal
     */
    CreateFaqRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFaqRequest = exports.CreateFaqRequest || (exports.CreateFaqRequest = {}));
var CreateFaqResponse;
(function (CreateFaqResponse) {
    /**
     * @internal
     */
    CreateFaqResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFaqResponse = exports.CreateFaqResponse || (exports.CreateFaqResponse = {}));
var IndexEdition;
(function (IndexEdition) {
    IndexEdition["DEVELOPER_EDITION"] = "DEVELOPER_EDITION";
    IndexEdition["ENTERPRISE_EDITION"] = "ENTERPRISE_EDITION";
})(IndexEdition = exports.IndexEdition || (exports.IndexEdition = {}));
var ServerSideEncryptionConfiguration;
(function (ServerSideEncryptionConfiguration) {
    /**
     * @internal
     */
    ServerSideEncryptionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.KmsKeyId && { KmsKeyId: smithy_client_1.SENSITIVE_STRING }),
    });
})(ServerSideEncryptionConfiguration = exports.ServerSideEncryptionConfiguration || (exports.ServerSideEncryptionConfiguration = {}));
var UserContextPolicy;
(function (UserContextPolicy) {
    UserContextPolicy["ATTRIBUTE_FILTER"] = "ATTRIBUTE_FILTER";
    UserContextPolicy["USER_TOKEN"] = "USER_TOKEN";
})(UserContextPolicy = exports.UserContextPolicy || (exports.UserContextPolicy = {}));
var JsonTokenTypeConfiguration;
(function (JsonTokenTypeConfiguration) {
    /**
     * @internal
     */
    JsonTokenTypeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JsonTokenTypeConfiguration = exports.JsonTokenTypeConfiguration || (exports.JsonTokenTypeConfiguration = {}));
var KeyLocation;
(function (KeyLocation) {
    KeyLocation["SECRET_MANAGER"] = "SECRET_MANAGER";
    KeyLocation["URL"] = "URL";
})(KeyLocation = exports.KeyLocation || (exports.KeyLocation = {}));
var JwtTokenTypeConfiguration;
(function (JwtTokenTypeConfiguration) {
    /**
     * @internal
     */
    JwtTokenTypeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JwtTokenTypeConfiguration = exports.JwtTokenTypeConfiguration || (exports.JwtTokenTypeConfiguration = {}));
var UserTokenConfiguration;
(function (UserTokenConfiguration) {
    /**
     * @internal
     */
    UserTokenConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserTokenConfiguration = exports.UserTokenConfiguration || (exports.UserTokenConfiguration = {}));
var CreateIndexRequest;
(function (CreateIndexRequest) {
    /**
     * @internal
     */
    CreateIndexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ServerSideEncryptionConfiguration && {
            ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(obj.ServerSideEncryptionConfiguration),
        }),
    });
})(CreateIndexRequest = exports.CreateIndexRequest || (exports.CreateIndexRequest = {}));
var CreateIndexResponse;
(function (CreateIndexResponse) {
    /**
     * @internal
     */
    CreateIndexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIndexResponse = exports.CreateIndexResponse || (exports.CreateIndexResponse = {}));
var CreateQuerySuggestionsBlockListRequest;
(function (CreateQuerySuggestionsBlockListRequest) {
    /**
     * @internal
     */
    CreateQuerySuggestionsBlockListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQuerySuggestionsBlockListRequest = exports.CreateQuerySuggestionsBlockListRequest || (exports.CreateQuerySuggestionsBlockListRequest = {}));
var CreateQuerySuggestionsBlockListResponse;
(function (CreateQuerySuggestionsBlockListResponse) {
    /**
     * @internal
     */
    CreateQuerySuggestionsBlockListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQuerySuggestionsBlockListResponse = exports.CreateQuerySuggestionsBlockListResponse || (exports.CreateQuerySuggestionsBlockListResponse = {}));
var CreateThesaurusRequest;
(function (CreateThesaurusRequest) {
    /**
     * @internal
     */
    CreateThesaurusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThesaurusRequest = exports.CreateThesaurusRequest || (exports.CreateThesaurusRequest = {}));
var CreateThesaurusResponse;
(function (CreateThesaurusResponse) {
    /**
     * @internal
     */
    CreateThesaurusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThesaurusResponse = exports.CreateThesaurusResponse || (exports.CreateThesaurusResponse = {}));
var DeleteDataSourceRequest;
(function (DeleteDataSourceRequest) {
    /**
     * @internal
     */
    DeleteDataSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDataSourceRequest = exports.DeleteDataSourceRequest || (exports.DeleteDataSourceRequest = {}));
var DeleteFaqRequest;
(function (DeleteFaqRequest) {
    /**
     * @internal
     */
    DeleteFaqRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFaqRequest = exports.DeleteFaqRequest || (exports.DeleteFaqRequest = {}));
var DeleteIndexRequest;
(function (DeleteIndexRequest) {
    /**
     * @internal
     */
    DeleteIndexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIndexRequest = exports.DeleteIndexRequest || (exports.DeleteIndexRequest = {}));
var DeleteQuerySuggestionsBlockListRequest;
(function (DeleteQuerySuggestionsBlockListRequest) {
    /**
     * @internal
     */
    DeleteQuerySuggestionsBlockListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQuerySuggestionsBlockListRequest = exports.DeleteQuerySuggestionsBlockListRequest || (exports.DeleteQuerySuggestionsBlockListRequest = {}));
var DeleteThesaurusRequest;
(function (DeleteThesaurusRequest) {
    /**
     * @internal
     */
    DeleteThesaurusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThesaurusRequest = exports.DeleteThesaurusRequest || (exports.DeleteThesaurusRequest = {}));
var DescribeDataSourceRequest;
(function (DescribeDataSourceRequest) {
    /**
     * @internal
     */
    DescribeDataSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataSourceRequest = exports.DescribeDataSourceRequest || (exports.DescribeDataSourceRequest = {}));
var DataSourceStatus;
(function (DataSourceStatus) {
    DataSourceStatus["ACTIVE"] = "ACTIVE";
    DataSourceStatus["CREATING"] = "CREATING";
    DataSourceStatus["DELETING"] = "DELETING";
    DataSourceStatus["FAILED"] = "FAILED";
    DataSourceStatus["UPDATING"] = "UPDATING";
})(DataSourceStatus = exports.DataSourceStatus || (exports.DataSourceStatus = {}));
var DescribeDataSourceResponse;
(function (DescribeDataSourceResponse) {
    /**
     * @internal
     */
    DescribeDataSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataSourceResponse = exports.DescribeDataSourceResponse || (exports.DescribeDataSourceResponse = {}));
var DescribeFaqRequest;
(function (DescribeFaqRequest) {
    /**
     * @internal
     */
    DescribeFaqRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFaqRequest = exports.DescribeFaqRequest || (exports.DescribeFaqRequest = {}));
var FaqStatus;
(function (FaqStatus) {
    FaqStatus["ACTIVE"] = "ACTIVE";
    FaqStatus["CREATING"] = "CREATING";
    FaqStatus["DELETING"] = "DELETING";
    FaqStatus["FAILED"] = "FAILED";
    FaqStatus["UPDATING"] = "UPDATING";
})(FaqStatus = exports.FaqStatus || (exports.FaqStatus = {}));
var DescribeFaqResponse;
(function (DescribeFaqResponse) {
    /**
     * @internal
     */
    DescribeFaqResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFaqResponse = exports.DescribeFaqResponse || (exports.DescribeFaqResponse = {}));
var DescribeIndexRequest;
(function (DescribeIndexRequest) {
    /**
     * @internal
     */
    DescribeIndexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIndexRequest = exports.DescribeIndexRequest || (exports.DescribeIndexRequest = {}));
var CapacityUnitsConfiguration;
(function (CapacityUnitsConfiguration) {
    /**
     * @internal
     */
    CapacityUnitsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacityUnitsConfiguration = exports.CapacityUnitsConfiguration || (exports.CapacityUnitsConfiguration = {}));
var Order;
(function (Order) {
    Order["ASCENDING"] = "ASCENDING";
    Order["DESCENDING"] = "DESCENDING";
})(Order = exports.Order || (exports.Order = {}));
var Relevance;
(function (Relevance) {
    /**
     * @internal
     */
    Relevance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Relevance = exports.Relevance || (exports.Relevance = {}));
var Search;
(function (Search) {
    /**
     * @internal
     */
    Search.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Search = exports.Search || (exports.Search = {}));
var DocumentAttributeValueType;
(function (DocumentAttributeValueType) {
    DocumentAttributeValueType["DATE_VALUE"] = "DATE_VALUE";
    DocumentAttributeValueType["LONG_VALUE"] = "LONG_VALUE";
    DocumentAttributeValueType["STRING_LIST_VALUE"] = "STRING_LIST_VALUE";
    DocumentAttributeValueType["STRING_VALUE"] = "STRING_VALUE";
})(DocumentAttributeValueType = exports.DocumentAttributeValueType || (exports.DocumentAttributeValueType = {}));
var DocumentMetadataConfiguration;
(function (DocumentMetadataConfiguration) {
    /**
     * @internal
     */
    DocumentMetadataConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentMetadataConfiguration = exports.DocumentMetadataConfiguration || (exports.DocumentMetadataConfiguration = {}));
var FaqStatistics;
(function (FaqStatistics) {
    /**
     * @internal
     */
    FaqStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FaqStatistics = exports.FaqStatistics || (exports.FaqStatistics = {}));
var TextDocumentStatistics;
(function (TextDocumentStatistics) {
    /**
     * @internal
     */
    TextDocumentStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextDocumentStatistics = exports.TextDocumentStatistics || (exports.TextDocumentStatistics = {}));
var IndexStatistics;
(function (IndexStatistics) {
    /**
     * @internal
     */
    IndexStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IndexStatistics = exports.IndexStatistics || (exports.IndexStatistics = {}));
var IndexStatus;
(function (IndexStatus) {
    IndexStatus["ACTIVE"] = "ACTIVE";
    IndexStatus["CREATING"] = "CREATING";
    IndexStatus["DELETING"] = "DELETING";
    IndexStatus["FAILED"] = "FAILED";
    IndexStatus["SYSTEM_UPDATING"] = "SYSTEM_UPDATING";
    IndexStatus["UPDATING"] = "UPDATING";
})(IndexStatus = exports.IndexStatus || (exports.IndexStatus = {}));
var DescribeIndexResponse;
(function (DescribeIndexResponse) {
    /**
     * @internal
     */
    DescribeIndexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ServerSideEncryptionConfiguration && {
            ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(obj.ServerSideEncryptionConfiguration),
        }),
    });
})(DescribeIndexResponse = exports.DescribeIndexResponse || (exports.DescribeIndexResponse = {}));
var DescribeQuerySuggestionsBlockListRequest;
(function (DescribeQuerySuggestionsBlockListRequest) {
    /**
     * @internal
     */
    DescribeQuerySuggestionsBlockListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeQuerySuggestionsBlockListRequest = exports.DescribeQuerySuggestionsBlockListRequest || (exports.DescribeQuerySuggestionsBlockListRequest = {}));
var QuerySuggestionsBlockListStatus;
(function (QuerySuggestionsBlockListStatus) {
    QuerySuggestionsBlockListStatus["ACTIVE"] = "ACTIVE";
    QuerySuggestionsBlockListStatus["ACTIVE_BUT_UPDATE_FAILED"] = "ACTIVE_BUT_UPDATE_FAILED";
    QuerySuggestionsBlockListStatus["CREATING"] = "CREATING";
    QuerySuggestionsBlockListStatus["DELETING"] = "DELETING";
    QuerySuggestionsBlockListStatus["FAILED"] = "FAILED";
    QuerySuggestionsBlockListStatus["UPDATING"] = "UPDATING";
})(QuerySuggestionsBlockListStatus = exports.QuerySuggestionsBlockListStatus || (exports.QuerySuggestionsBlockListStatus = {}));
var DescribeQuerySuggestionsBlockListResponse;
(function (DescribeQuerySuggestionsBlockListResponse) {
    /**
     * @internal
     */
    DescribeQuerySuggestionsBlockListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeQuerySuggestionsBlockListResponse = exports.DescribeQuerySuggestionsBlockListResponse || (exports.DescribeQuerySuggestionsBlockListResponse = {}));
var DescribeQuerySuggestionsConfigRequest;
(function (DescribeQuerySuggestionsConfigRequest) {
    /**
     * @internal
     */
    DescribeQuerySuggestionsConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeQuerySuggestionsConfigRequest = exports.DescribeQuerySuggestionsConfigRequest || (exports.DescribeQuerySuggestionsConfigRequest = {}));
var Mode;
(function (Mode) {
    Mode["ENABLED"] = "ENABLED";
    Mode["LEARN_ONLY"] = "LEARN_ONLY";
})(Mode = exports.Mode || (exports.Mode = {}));
var QuerySuggestionsStatus;
(function (QuerySuggestionsStatus) {
    QuerySuggestionsStatus["ACTIVE"] = "ACTIVE";
    QuerySuggestionsStatus["UPDATING"] = "UPDATING";
})(QuerySuggestionsStatus = exports.QuerySuggestionsStatus || (exports.QuerySuggestionsStatus = {}));
var DescribeQuerySuggestionsConfigResponse;
(function (DescribeQuerySuggestionsConfigResponse) {
    /**
     * @internal
     */
    DescribeQuerySuggestionsConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeQuerySuggestionsConfigResponse = exports.DescribeQuerySuggestionsConfigResponse || (exports.DescribeQuerySuggestionsConfigResponse = {}));
var DescribeThesaurusRequest;
(function (DescribeThesaurusRequest) {
    /**
     * @internal
     */
    DescribeThesaurusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThesaurusRequest = exports.DescribeThesaurusRequest || (exports.DescribeThesaurusRequest = {}));
var ThesaurusStatus;
(function (ThesaurusStatus) {
    ThesaurusStatus["ACTIVE"] = "ACTIVE";
    ThesaurusStatus["ACTIVE_BUT_UPDATE_FAILED"] = "ACTIVE_BUT_UPDATE_FAILED";
    ThesaurusStatus["CREATING"] = "CREATING";
    ThesaurusStatus["DELETING"] = "DELETING";
    ThesaurusStatus["FAILED"] = "FAILED";
    ThesaurusStatus["UPDATING"] = "UPDATING";
})(ThesaurusStatus = exports.ThesaurusStatus || (exports.ThesaurusStatus = {}));
var DescribeThesaurusResponse;
(function (DescribeThesaurusResponse) {
    /**
     * @internal
     */
    DescribeThesaurusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThesaurusResponse = exports.DescribeThesaurusResponse || (exports.DescribeThesaurusResponse = {}));
var GetQuerySuggestionsRequest;
(function (GetQuerySuggestionsRequest) {
    /**
     * @internal
     */
    GetQuerySuggestionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQuerySuggestionsRequest = exports.GetQuerySuggestionsRequest || (exports.GetQuerySuggestionsRequest = {}));
var SuggestionHighlight;
(function (SuggestionHighlight) {
    /**
     * @internal
     */
    SuggestionHighlight.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuggestionHighlight = exports.SuggestionHighlight || (exports.SuggestionHighlight = {}));
var SuggestionTextWithHighlights;
(function (SuggestionTextWithHighlights) {
    /**
     * @internal
     */
    SuggestionTextWithHighlights.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuggestionTextWithHighlights = exports.SuggestionTextWithHighlights || (exports.SuggestionTextWithHighlights = {}));
var SuggestionValue;
(function (SuggestionValue) {
    /**
     * @internal
     */
    SuggestionValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuggestionValue = exports.SuggestionValue || (exports.SuggestionValue = {}));
var Suggestion;
(function (Suggestion) {
    /**
     * @internal
     */
    Suggestion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Suggestion = exports.Suggestion || (exports.Suggestion = {}));
var GetQuerySuggestionsResponse;
(function (GetQuerySuggestionsResponse) {
    /**
     * @internal
     */
    GetQuerySuggestionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQuerySuggestionsResponse = exports.GetQuerySuggestionsResponse || (exports.GetQuerySuggestionsResponse = {}));
var ListDataSourcesRequest;
(function (ListDataSourcesRequest) {
    /**
     * @internal
     */
    ListDataSourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataSourcesRequest = exports.ListDataSourcesRequest || (exports.ListDataSourcesRequest = {}));
var DataSourceSummary;
(function (DataSourceSummary) {
    /**
     * @internal
     */
    DataSourceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSourceSummary = exports.DataSourceSummary || (exports.DataSourceSummary = {}));
var ListDataSourcesResponse;
(function (ListDataSourcesResponse) {
    /**
     * @internal
     */
    ListDataSourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataSourcesResponse = exports.ListDataSourcesResponse || (exports.ListDataSourcesResponse = {}));
var TimeRange;
(function (TimeRange) {
    /**
     * @internal
     */
    TimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeRange = exports.TimeRange || (exports.TimeRange = {}));
var DataSourceSyncJobStatus;
(function (DataSourceSyncJobStatus) {
    DataSourceSyncJobStatus["ABORTED"] = "ABORTED";
    DataSourceSyncJobStatus["FAILED"] = "FAILED";
    DataSourceSyncJobStatus["INCOMPLETE"] = "INCOMPLETE";
    DataSourceSyncJobStatus["STOPPING"] = "STOPPING";
    DataSourceSyncJobStatus["SUCCEEDED"] = "SUCCEEDED";
    DataSourceSyncJobStatus["SYNCING"] = "SYNCING";
    DataSourceSyncJobStatus["SYNCING_INDEXING"] = "SYNCING_INDEXING";
})(DataSourceSyncJobStatus = exports.DataSourceSyncJobStatus || (exports.DataSourceSyncJobStatus = {}));
var ListDataSourceSyncJobsRequest;
(function (ListDataSourceSyncJobsRequest) {
    /**
     * @internal
     */
    ListDataSourceSyncJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataSourceSyncJobsRequest = exports.ListDataSourceSyncJobsRequest || (exports.ListDataSourceSyncJobsRequest = {}));
var DataSourceSyncJobMetrics;
(function (DataSourceSyncJobMetrics) {
    /**
     * @internal
     */
    DataSourceSyncJobMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSourceSyncJobMetrics = exports.DataSourceSyncJobMetrics || (exports.DataSourceSyncJobMetrics = {}));
var DataSourceSyncJob;
(function (DataSourceSyncJob) {
    /**
     * @internal
     */
    DataSourceSyncJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSourceSyncJob = exports.DataSourceSyncJob || (exports.DataSourceSyncJob = {}));
var ListDataSourceSyncJobsResponse;
(function (ListDataSourceSyncJobsResponse) {
    /**
     * @internal
     */
    ListDataSourceSyncJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataSourceSyncJobsResponse = exports.ListDataSourceSyncJobsResponse || (exports.ListDataSourceSyncJobsResponse = {}));
var ListFaqsRequest;
(function (ListFaqsRequest) {
    /**
     * @internal
     */
    ListFaqsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFaqsRequest = exports.ListFaqsRequest || (exports.ListFaqsRequest = {}));
var FaqSummary;
(function (FaqSummary) {
    /**
     * @internal
     */
    FaqSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FaqSummary = exports.FaqSummary || (exports.FaqSummary = {}));
var ListFaqsResponse;
(function (ListFaqsResponse) {
    /**
     * @internal
     */
    ListFaqsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFaqsResponse = exports.ListFaqsResponse || (exports.ListFaqsResponse = {}));
var ListIndicesRequest;
(function (ListIndicesRequest) {
    /**
     * @internal
     */
    ListIndicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIndicesRequest = exports.ListIndicesRequest || (exports.ListIndicesRequest = {}));
var IndexConfigurationSummary;
(function (IndexConfigurationSummary) {
    /**
     * @internal
     */
    IndexConfigurationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IndexConfigurationSummary = exports.IndexConfigurationSummary || (exports.IndexConfigurationSummary = {}));
var ListIndicesResponse;
(function (ListIndicesResponse) {
    /**
     * @internal
     */
    ListIndicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIndicesResponse = exports.ListIndicesResponse || (exports.ListIndicesResponse = {}));
var ListQuerySuggestionsBlockListsRequest;
(function (ListQuerySuggestionsBlockListsRequest) {
    /**
     * @internal
     */
    ListQuerySuggestionsBlockListsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQuerySuggestionsBlockListsRequest = exports.ListQuerySuggestionsBlockListsRequest || (exports.ListQuerySuggestionsBlockListsRequest = {}));
var QuerySuggestionsBlockListSummary;
(function (QuerySuggestionsBlockListSummary) {
    /**
     * @internal
     */
    QuerySuggestionsBlockListSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QuerySuggestionsBlockListSummary = exports.QuerySuggestionsBlockListSummary || (exports.QuerySuggestionsBlockListSummary = {}));
var ListQuerySuggestionsBlockListsResponse;
(function (ListQuerySuggestionsBlockListsResponse) {
    /**
     * @internal
     */
    ListQuerySuggestionsBlockListsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQuerySuggestionsBlockListsResponse = exports.ListQuerySuggestionsBlockListsResponse || (exports.ListQuerySuggestionsBlockListsResponse = {}));
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
var ResourceUnavailableException;
(function (ResourceUnavailableException) {
    /**
     * @internal
     */
    ResourceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceUnavailableException = exports.ResourceUnavailableException || (exports.ResourceUnavailableException = {}));
var ListThesauriRequest;
(function (ListThesauriRequest) {
    /**
     * @internal
     */
    ListThesauriRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThesauriRequest = exports.ListThesauriRequest || (exports.ListThesauriRequest = {}));
var ThesaurusSummary;
(function (ThesaurusSummary) {
    /**
     * @internal
     */
    ThesaurusSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThesaurusSummary = exports.ThesaurusSummary || (exports.ThesaurusSummary = {}));
var ListThesauriResponse;
(function (ListThesauriResponse) {
    /**
     * @internal
     */
    ListThesauriResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThesauriResponse = exports.ListThesauriResponse || (exports.ListThesauriResponse = {}));
var DocumentRelevanceConfiguration;
(function (DocumentRelevanceConfiguration) {
    /**
     * @internal
     */
    DocumentRelevanceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentRelevanceConfiguration = exports.DocumentRelevanceConfiguration || (exports.DocumentRelevanceConfiguration = {}));
var Facet;
(function (Facet) {
    /**
     * @internal
     */
    Facet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Facet = exports.Facet || (exports.Facet = {}));
var QueryResultType;
(function (QueryResultType) {
    QueryResultType["ANSWER"] = "ANSWER";
    QueryResultType["DOCUMENT"] = "DOCUMENT";
    QueryResultType["QUESTION_ANSWER"] = "QUESTION_ANSWER";
})(QueryResultType = exports.QueryResultType || (exports.QueryResultType = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "ASC";
    SortOrder["DESC"] = "DESC";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var SortingConfiguration;
(function (SortingConfiguration) {
    /**
     * @internal
     */
    SortingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SortingConfiguration = exports.SortingConfiguration || (exports.SortingConfiguration = {}));
var UserContext;
(function (UserContext) {
    /**
     * @internal
     */
    UserContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserContext = exports.UserContext || (exports.UserContext = {}));
var DocumentAttributeValueCountPair;
(function (DocumentAttributeValueCountPair) {
    /**
     * @internal
     */
    DocumentAttributeValueCountPair.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DocumentAttributeValue && {
            DocumentAttributeValue: DocumentAttributeValue.filterSensitiveLog(obj.DocumentAttributeValue),
        }),
    });
})(DocumentAttributeValueCountPair = exports.DocumentAttributeValueCountPair || (exports.DocumentAttributeValueCountPair = {}));
var FacetResult;
(function (FacetResult) {
    /**
     * @internal
     */
    FacetResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DocumentAttributeValueCountPairs && {
            DocumentAttributeValueCountPairs: obj.DocumentAttributeValueCountPairs.map((item) => DocumentAttributeValueCountPair.filterSensitiveLog(item)),
        }),
    });
})(FacetResult = exports.FacetResult || (exports.FacetResult = {}));
var ScoreConfidence;
(function (ScoreConfidence) {
    ScoreConfidence["HIGH"] = "HIGH";
    ScoreConfidence["LOW"] = "LOW";
    ScoreConfidence["MEDIUM"] = "MEDIUM";
    ScoreConfidence["VERY_HIGH"] = "VERY_HIGH";
})(ScoreConfidence = exports.ScoreConfidence || (exports.ScoreConfidence = {}));
var ScoreAttributes;
(function (ScoreAttributes) {
    /**
     * @internal
     */
    ScoreAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScoreAttributes = exports.ScoreAttributes || (exports.ScoreAttributes = {}));
var QueryResultItem;
(function (QueryResultItem) {
    /**
     * @internal
     */
    QueryResultItem.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DocumentAttributes && {
            DocumentAttributes: obj.DocumentAttributes.map((item) => DocumentAttribute.filterSensitiveLog(item)),
        }),
    });
})(QueryResultItem = exports.QueryResultItem || (exports.QueryResultItem = {}));
var QueryResult;
(function (QueryResult) {
    /**
     * @internal
     */
    QueryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueryResult = exports.QueryResult || (exports.QueryResult = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var StartDataSourceSyncJobRequest;
(function (StartDataSourceSyncJobRequest) {
    /**
     * @internal
     */
    StartDataSourceSyncJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDataSourceSyncJobRequest = exports.StartDataSourceSyncJobRequest || (exports.StartDataSourceSyncJobRequest = {}));
var StartDataSourceSyncJobResponse;
(function (StartDataSourceSyncJobResponse) {
    /**
     * @internal
     */
    StartDataSourceSyncJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDataSourceSyncJobResponse = exports.StartDataSourceSyncJobResponse || (exports.StartDataSourceSyncJobResponse = {}));
var StopDataSourceSyncJobRequest;
(function (StopDataSourceSyncJobRequest) {
    /**
     * @internal
     */
    StopDataSourceSyncJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDataSourceSyncJobRequest = exports.StopDataSourceSyncJobRequest || (exports.StopDataSourceSyncJobRequest = {}));
var ClickFeedback;
(function (ClickFeedback) {
    /**
     * @internal
     */
    ClickFeedback.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClickFeedback = exports.ClickFeedback || (exports.ClickFeedback = {}));
var RelevanceType;
(function (RelevanceType) {
    RelevanceType["NOT_RELEVANT"] = "NOT_RELEVANT";
    RelevanceType["RELEVANT"] = "RELEVANT";
})(RelevanceType = exports.RelevanceType || (exports.RelevanceType = {}));
var RelevanceFeedback;
(function (RelevanceFeedback) {
    /**
     * @internal
     */
    RelevanceFeedback.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelevanceFeedback = exports.RelevanceFeedback || (exports.RelevanceFeedback = {}));
var SubmitFeedbackRequest;
(function (SubmitFeedbackRequest) {
    /**
     * @internal
     */
    SubmitFeedbackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubmitFeedbackRequest = exports.SubmitFeedbackRequest || (exports.SubmitFeedbackRequest = {}));
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
var UpdateDataSourceRequest;
(function (UpdateDataSourceRequest) {
    /**
     * @internal
     */
    UpdateDataSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataSourceRequest = exports.UpdateDataSourceRequest || (exports.UpdateDataSourceRequest = {}));
var UpdateIndexRequest;
(function (UpdateIndexRequest) {
    /**
     * @internal
     */
    UpdateIndexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIndexRequest = exports.UpdateIndexRequest || (exports.UpdateIndexRequest = {}));
var UpdateQuerySuggestionsBlockListRequest;
(function (UpdateQuerySuggestionsBlockListRequest) {
    /**
     * @internal
     */
    UpdateQuerySuggestionsBlockListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQuerySuggestionsBlockListRequest = exports.UpdateQuerySuggestionsBlockListRequest || (exports.UpdateQuerySuggestionsBlockListRequest = {}));
var UpdateQuerySuggestionsConfigRequest;
(function (UpdateQuerySuggestionsConfigRequest) {
    /**
     * @internal
     */
    UpdateQuerySuggestionsConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQuerySuggestionsConfigRequest = exports.UpdateQuerySuggestionsConfigRequest || (exports.UpdateQuerySuggestionsConfigRequest = {}));
var UpdateThesaurusRequest;
(function (UpdateThesaurusRequest) {
    /**
     * @internal
     */
    UpdateThesaurusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThesaurusRequest = exports.UpdateThesaurusRequest || (exports.UpdateThesaurusRequest = {}));
var AttributeFilter;
(function (AttributeFilter) {
    /**
     * @internal
     */
    AttributeFilter.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AndAllFilters && {
            AndAllFilters: obj.AndAllFilters.map((item) => AttributeFilter.filterSensitiveLog(item)),
        }),
        ...(obj.OrAllFilters && { OrAllFilters: obj.OrAllFilters.map((item) => AttributeFilter.filterSensitiveLog(item)) }),
        ...(obj.NotFilter && { NotFilter: AttributeFilter.filterSensitiveLog(obj.NotFilter) }),
        ...(obj.EqualsTo && { EqualsTo: DocumentAttribute.filterSensitiveLog(obj.EqualsTo) }),
        ...(obj.ContainsAll && { ContainsAll: DocumentAttribute.filterSensitiveLog(obj.ContainsAll) }),
        ...(obj.ContainsAny && { ContainsAny: DocumentAttribute.filterSensitiveLog(obj.ContainsAny) }),
        ...(obj.GreaterThan && { GreaterThan: DocumentAttribute.filterSensitiveLog(obj.GreaterThan) }),
        ...(obj.GreaterThanOrEquals && {
            GreaterThanOrEquals: DocumentAttribute.filterSensitiveLog(obj.GreaterThanOrEquals),
        }),
        ...(obj.LessThan && { LessThan: DocumentAttribute.filterSensitiveLog(obj.LessThan) }),
        ...(obj.LessThanOrEquals && { LessThanOrEquals: DocumentAttribute.filterSensitiveLog(obj.LessThanOrEquals) }),
    });
})(AttributeFilter = exports.AttributeFilter || (exports.AttributeFilter = {}));
var QueryRequest;
(function (QueryRequest) {
    /**
     * @internal
     */
    QueryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AttributeFilter && { AttributeFilter: AttributeFilter.filterSensitiveLog(obj.AttributeFilter) }),
    });
})(QueryRequest = exports.QueryRequest || (exports.QueryRequest = {}));
//# sourceMappingURL=models_0.js.map