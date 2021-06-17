"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = exports.ConflictException = exports.ConcurrentUpdatingException = exports.ColumnTag = exports.GeoSpatialDataRole = exports.ColumnSchema = exports.ColumnLevelPermissionRule = exports.ColumnGroupSchema = exports.ColumnGroupColumnSchema = exports.ColumnGroup = exports.GeoSpatialColumnGroup = exports.GeoSpatialCountryCode = exports.ColumnDescription = exports.CastColumnTypeOperation = exports.ColumnDataType = exports.ThrottlingException = exports.ResourceNotFoundException = exports.ResourceExistsException = exports.ExceptionResourceType = exports.InvalidParameterValueException = exports.InternalFailureException = exports.CancelIngestionResponse = exports.CancelIngestionRequest = exports.CalculatedColumn = exports.BorderStyle = exports.AwsIotAnalyticsParameters = exports.AuroraPostgreSqlParameters = exports.AuroraParameters = exports.AthenaParameters = exports.AssignmentStatus = exports.AnalysisSummary = exports.AnalysisSourceEntity = exports.AnalysisSourceTemplate = exports.DataSetReference = exports.AnalysisSearchFilter = exports.FilterOperator = exports.AnalysisFilterAttribute = exports.Analysis = exports.ResourceStatus = exports.Sheet = exports.AnalysisError = exports.AnalysisErrorType = exports.AmazonElasticsearchParameters = exports.AdHocFilteringOption = exports.DashboardBehavior = exports.ActiveIAMPolicyAssignment = exports.AccountSettings = exports.Edition = exports.AccountCustomization = exports.AccessDeniedException = void 0;
exports.MariaDbParameters = exports.JiraParameters = exports.LimitExceededException = exports.CreateDataSetResponse = exports.CreateDataSetRequest = exports.RowLevelPermissionDataSet = exports.RowLevelPermissionPolicy = exports.RowLevelPermissionFormatVersion = exports.PhysicalTable = exports.S3Source = exports.UploadSettings = exports.TextQualifier = exports.FileFormat = exports.RelationalTable = exports.CustomSql = exports.InputColumn = exports.InputColumnDataType = exports.LogicalTable = exports.LogicalTableSource = exports.JoinInstruction = exports.JoinType = exports.JoinKeyProperties = exports.TransformOperation = exports.TagColumnOperation = exports.RenameColumnOperation = exports.ProjectOperation = exports.FilterOperation = exports.DataSetImportMode = exports.FieldFolder = exports.CreateDashboardResponse = exports.CreateDashboardRequest = exports.DashboardSourceEntity = exports.DashboardSourceTemplate = exports.DashboardPublishOptions = exports.SheetControlsOption = exports.DashboardUIState = exports.ExportToCSVOption = exports.CreateColumnsOperation = exports.UnsupportedUserEditionException = exports.CreateAnalysisResponse = exports.CreateAnalysisRequest = exports.ResourcePermission = exports._Parameters = exports.StringParameter = exports.IntegerParameter = exports.DecimalParameter = exports.DateTimeParameter = exports.ResourceUnavailableException = exports.CreateAccountCustomizationResponse = exports.CreateAccountCustomizationRequest = void 0;
exports.MarginStyle = exports.GutterStyle = exports.TileStyle = exports.DataColorPalette = exports.CreateTemplateAliasResponse = exports.TemplateAlias = exports.CreateTemplateAliasRequest = exports.CreateTemplateResponse = exports.CreateTemplateRequest = exports.TemplateSourceEntity = exports.TemplateSourceTemplate = exports.TemplateSourceAnalysis = exports.CreateNamespaceResponse = exports.NamespaceStatus = exports.CreateNamespaceRequest = exports.IdentityStore = exports.CreateIngestionResponse = exports.IngestionStatus = exports.CreateIngestionRequest = exports.CreateIAMPolicyAssignmentResponse = exports.CreateIAMPolicyAssignmentRequest = exports.CreateGroupMembershipResponse = exports.GroupMember = exports.CreateGroupMembershipRequest = exports.PreconditionNotMetException = exports.CreateGroupResponse = exports.Group = exports.CreateGroupRequest = exports.CreateDataSourceResponse = exports.CreateDataSourceRequest = exports.VpcConnectionProperties = exports.DataSourceType = exports.SslProperties = exports.DataSourceCredentials = exports.CredentialPair = exports.DataSourceParameters = exports.TwitterParameters = exports.TeradataParameters = exports.SqlServerParameters = exports.SparkParameters = exports.SnowflakeParameters = exports.ServiceNowParameters = exports.S3Parameters = exports.ManifestFileLocation = exports.RedshiftParameters = exports.RdsParameters = exports.PrestoParameters = exports.PostgreSqlParameters = exports.OracleParameters = exports.MySqlParameters = void 0;
exports.DeleteThemeAliasRequest = exports.DeleteThemeResponse = exports.DeleteThemeRequest = exports.DeleteTemplateAliasResponse = exports.DeleteTemplateAliasRequest = exports.DeleteTemplateResponse = exports.DeleteTemplateRequest = exports.DeleteNamespaceResponse = exports.DeleteNamespaceRequest = exports.DeleteIAMPolicyAssignmentResponse = exports.DeleteIAMPolicyAssignmentRequest = exports.DeleteGroupMembershipResponse = exports.DeleteGroupMembershipRequest = exports.DeleteGroupResponse = exports.DeleteGroupRequest = exports.DeleteDataSourceResponse = exports.DeleteDataSourceRequest = exports.DeleteDataSetResponse = exports.DeleteDataSetRequest = exports.DeleteDashboardResponse = exports.DeleteDashboardRequest = exports.DeleteAnalysisResponse = exports.DeleteAnalysisRequest = exports.DeleteAccountCustomizationResponse = exports.DeleteAccountCustomizationRequest = exports.DataSource = exports.DataSourceErrorInfo = exports.DataSourceErrorInfoType = exports.DataSetSummary = exports.DataSetConfiguration = exports.DataSetSchema = exports.DataSet = exports.OutputColumn = exports.DashboardVersionSummary = exports.DashboardSummary = exports.DashboardSearchFilter = exports.DashboardFilterAttribute = exports.Dashboard = exports.DashboardVersion = exports.DashboardError = exports.DashboardErrorType = exports.CreateThemeAliasResponse = exports.ThemeAlias = exports.CreateThemeAliasRequest = exports.CreateThemeResponse = exports.CreateThemeRequest = exports.ThemeConfiguration = exports.UIColorPalette = exports.SheetStyle = exports.TileLayoutStyle = void 0;
exports.Template = exports.TemplateVersion = exports.TemplateError = exports.TemplateErrorType = exports.DescribeTemplateRequest = exports.DescribeNamespaceResponse = exports.NamespaceInfoV2 = exports.NamespaceError = exports.NamespaceErrorType = exports.DescribeNamespaceRequest = exports.DescribeIngestionResponse = exports.Ingestion = exports.RowInfo = exports.IngestionRequestType = exports.IngestionRequestSource = exports.QueueInfo = exports.ErrorInfo = exports.IngestionErrorType = exports.DescribeIngestionRequest = exports.InvalidNextTokenException = exports.DescribeIAMPolicyAssignmentResponse = exports.IAMPolicyAssignment = exports.DescribeIAMPolicyAssignmentRequest = exports.DescribeGroupResponse = exports.DescribeGroupRequest = exports.DescribeDataSourcePermissionsResponse = exports.DescribeDataSourcePermissionsRequest = exports.DescribeDataSourceResponse = exports.DescribeDataSourceRequest = exports.DescribeDataSetPermissionsResponse = exports.DescribeDataSetPermissionsRequest = exports.DescribeDataSetResponse = exports.DescribeDataSetRequest = exports.DescribeDashboardPermissionsResponse = exports.DescribeDashboardPermissionsRequest = exports.DescribeDashboardResponse = exports.DescribeDashboardRequest = exports.DescribeAnalysisPermissionsResponse = exports.DescribeAnalysisPermissionsRequest = exports.DescribeAnalysisResponse = exports.DescribeAnalysisRequest = exports.DescribeAccountSettingsResponse = exports.DescribeAccountSettingsRequest = exports.DescribeAccountCustomizationResponse = exports.DescribeAccountCustomizationRequest = exports.DeleteUserByPrincipalIdResponse = exports.DeleteUserByPrincipalIdRequest = exports.DeleteUserResponse = exports.DeleteUserRequest = exports.DeleteThemeAliasResponse = void 0;
exports.ListIAMPolicyAssignmentsForUserResponse = exports.ListIAMPolicyAssignmentsForUserRequest = exports.ListIAMPolicyAssignmentsResponse = exports.ListIAMPolicyAssignmentsRequest = exports.ListGroupsResponse = exports.ListGroupsRequest = exports.ListGroupMembershipsResponse = exports.ListGroupMembershipsRequest = exports.ListDataSourcesResponse = exports.ListDataSourcesRequest = exports.ListDataSetsResponse = exports.ListDataSetsRequest = exports.ListDashboardVersionsResponse = exports.ListDashboardVersionsRequest = exports.ListDashboardsResponse = exports.ListDashboardsRequest = exports.ListAnalysesResponse = exports.ListAnalysesRequest = exports.IAMPolicyAssignmentSummary = exports.GetSessionEmbedUrlResponse = exports.GetSessionEmbedUrlRequest = exports.UnsupportedPricingPlanException = exports.SessionLifetimeInMinutesInvalidException = exports.QuickSightUserNotFoundException = exports.IdentityTypeNotSupportedException = exports.GetDashboardEmbedUrlResponse = exports.GetDashboardEmbedUrlRequest = exports.EmbeddingIdentityType = exports.DomainNotWhitelistedException = exports.DescribeUserResponse = exports.User = exports.UserRole = exports.IdentityType = exports.DescribeUserRequest = exports.DescribeThemePermissionsResponse = exports.DescribeThemePermissionsRequest = exports.DescribeThemeAliasResponse = exports.DescribeThemeAliasRequest = exports.DescribeThemeResponse = exports.Theme = exports.ThemeVersion = exports.ThemeError = exports.ThemeErrorType = exports.ThemeType = exports.DescribeThemeRequest = exports.DescribeTemplatePermissionsResponse = exports.DescribeTemplatePermissionsRequest = exports.DescribeTemplateAliasResponse = exports.DescribeTemplateAliasRequest = exports.DescribeTemplateResponse = void 0;
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
var AccountCustomization;
(function (AccountCustomization) {
    /**
     * @internal
     */
    AccountCustomization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountCustomization = exports.AccountCustomization || (exports.AccountCustomization = {}));
var Edition;
(function (Edition) {
    Edition["ENTERPRISE"] = "ENTERPRISE";
    Edition["STANDARD"] = "STANDARD";
})(Edition = exports.Edition || (exports.Edition = {}));
var AccountSettings;
(function (AccountSettings) {
    /**
     * @internal
     */
    AccountSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountSettings = exports.AccountSettings || (exports.AccountSettings = {}));
var ActiveIAMPolicyAssignment;
(function (ActiveIAMPolicyAssignment) {
    /**
     * @internal
     */
    ActiveIAMPolicyAssignment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActiveIAMPolicyAssignment = exports.ActiveIAMPolicyAssignment || (exports.ActiveIAMPolicyAssignment = {}));
var DashboardBehavior;
(function (DashboardBehavior) {
    DashboardBehavior["DISABLED"] = "DISABLED";
    DashboardBehavior["ENABLED"] = "ENABLED";
})(DashboardBehavior = exports.DashboardBehavior || (exports.DashboardBehavior = {}));
var AdHocFilteringOption;
(function (AdHocFilteringOption) {
    /**
     * @internal
     */
    AdHocFilteringOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdHocFilteringOption = exports.AdHocFilteringOption || (exports.AdHocFilteringOption = {}));
var AmazonElasticsearchParameters;
(function (AmazonElasticsearchParameters) {
    /**
     * @internal
     */
    AmazonElasticsearchParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AmazonElasticsearchParameters = exports.AmazonElasticsearchParameters || (exports.AmazonElasticsearchParameters = {}));
var AnalysisErrorType;
(function (AnalysisErrorType) {
    AnalysisErrorType["ACCESS_DENIED"] = "ACCESS_DENIED";
    AnalysisErrorType["COLUMN_GEOGRAPHIC_ROLE_MISMATCH"] = "COLUMN_GEOGRAPHIC_ROLE_MISMATCH";
    AnalysisErrorType["COLUMN_REPLACEMENT_MISSING"] = "COLUMN_REPLACEMENT_MISSING";
    AnalysisErrorType["COLUMN_TYPE_MISMATCH"] = "COLUMN_TYPE_MISMATCH";
    AnalysisErrorType["DATA_SET_NOT_FOUND"] = "DATA_SET_NOT_FOUND";
    AnalysisErrorType["INTERNAL_FAILURE"] = "INTERNAL_FAILURE";
    AnalysisErrorType["PARAMETER_NOT_FOUND"] = "PARAMETER_NOT_FOUND";
    AnalysisErrorType["PARAMETER_TYPE_INVALID"] = "PARAMETER_TYPE_INVALID";
    AnalysisErrorType["PARAMETER_VALUE_INCOMPATIBLE"] = "PARAMETER_VALUE_INCOMPATIBLE";
    AnalysisErrorType["SOURCE_NOT_FOUND"] = "SOURCE_NOT_FOUND";
})(AnalysisErrorType = exports.AnalysisErrorType || (exports.AnalysisErrorType = {}));
var AnalysisError;
(function (AnalysisError) {
    /**
     * @internal
     */
    AnalysisError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisError = exports.AnalysisError || (exports.AnalysisError = {}));
var Sheet;
(function (Sheet) {
    /**
     * @internal
     */
    Sheet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Sheet = exports.Sheet || (exports.Sheet = {}));
var ResourceStatus;
(function (ResourceStatus) {
    ResourceStatus["CREATION_FAILED"] = "CREATION_FAILED";
    ResourceStatus["CREATION_IN_PROGRESS"] = "CREATION_IN_PROGRESS";
    ResourceStatus["CREATION_SUCCESSFUL"] = "CREATION_SUCCESSFUL";
    ResourceStatus["DELETED"] = "DELETED";
    ResourceStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    ResourceStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
    ResourceStatus["UPDATE_SUCCESSFUL"] = "UPDATE_SUCCESSFUL";
})(ResourceStatus = exports.ResourceStatus || (exports.ResourceStatus = {}));
var Analysis;
(function (Analysis) {
    /**
     * @internal
     */
    Analysis.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Analysis = exports.Analysis || (exports.Analysis = {}));
var AnalysisFilterAttribute;
(function (AnalysisFilterAttribute) {
    AnalysisFilterAttribute["QUICKSIGHT_USER"] = "QUICKSIGHT_USER";
})(AnalysisFilterAttribute = exports.AnalysisFilterAttribute || (exports.AnalysisFilterAttribute = {}));
var FilterOperator;
(function (FilterOperator) {
    FilterOperator["StringEquals"] = "StringEquals";
})(FilterOperator = exports.FilterOperator || (exports.FilterOperator = {}));
var AnalysisSearchFilter;
(function (AnalysisSearchFilter) {
    /**
     * @internal
     */
    AnalysisSearchFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisSearchFilter = exports.AnalysisSearchFilter || (exports.AnalysisSearchFilter = {}));
var DataSetReference;
(function (DataSetReference) {
    /**
     * @internal
     */
    DataSetReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSetReference = exports.DataSetReference || (exports.DataSetReference = {}));
var AnalysisSourceTemplate;
(function (AnalysisSourceTemplate) {
    /**
     * @internal
     */
    AnalysisSourceTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisSourceTemplate = exports.AnalysisSourceTemplate || (exports.AnalysisSourceTemplate = {}));
var AnalysisSourceEntity;
(function (AnalysisSourceEntity) {
    /**
     * @internal
     */
    AnalysisSourceEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisSourceEntity = exports.AnalysisSourceEntity || (exports.AnalysisSourceEntity = {}));
var AnalysisSummary;
(function (AnalysisSummary) {
    /**
     * @internal
     */
    AnalysisSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisSummary = exports.AnalysisSummary || (exports.AnalysisSummary = {}));
var AssignmentStatus;
(function (AssignmentStatus) {
    AssignmentStatus["DISABLED"] = "DISABLED";
    AssignmentStatus["DRAFT"] = "DRAFT";
    AssignmentStatus["ENABLED"] = "ENABLED";
})(AssignmentStatus = exports.AssignmentStatus || (exports.AssignmentStatus = {}));
var AthenaParameters;
(function (AthenaParameters) {
    /**
     * @internal
     */
    AthenaParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AthenaParameters = exports.AthenaParameters || (exports.AthenaParameters = {}));
var AuroraParameters;
(function (AuroraParameters) {
    /**
     * @internal
     */
    AuroraParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuroraParameters = exports.AuroraParameters || (exports.AuroraParameters = {}));
var AuroraPostgreSqlParameters;
(function (AuroraPostgreSqlParameters) {
    /**
     * @internal
     */
    AuroraPostgreSqlParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuroraPostgreSqlParameters = exports.AuroraPostgreSqlParameters || (exports.AuroraPostgreSqlParameters = {}));
var AwsIotAnalyticsParameters;
(function (AwsIotAnalyticsParameters) {
    /**
     * @internal
     */
    AwsIotAnalyticsParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIotAnalyticsParameters = exports.AwsIotAnalyticsParameters || (exports.AwsIotAnalyticsParameters = {}));
var BorderStyle;
(function (BorderStyle) {
    /**
     * @internal
     */
    BorderStyle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BorderStyle = exports.BorderStyle || (exports.BorderStyle = {}));
var CalculatedColumn;
(function (CalculatedColumn) {
    /**
     * @internal
     */
    CalculatedColumn.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CalculatedColumn = exports.CalculatedColumn || (exports.CalculatedColumn = {}));
var CancelIngestionRequest;
(function (CancelIngestionRequest) {
    /**
     * @internal
     */
    CancelIngestionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelIngestionRequest = exports.CancelIngestionRequest || (exports.CancelIngestionRequest = {}));
var CancelIngestionResponse;
(function (CancelIngestionResponse) {
    /**
     * @internal
     */
    CancelIngestionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelIngestionResponse = exports.CancelIngestionResponse || (exports.CancelIngestionResponse = {}));
var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var ExceptionResourceType;
(function (ExceptionResourceType) {
    ExceptionResourceType["ACCOUNT_SETTINGS"] = "ACCOUNT_SETTINGS";
    ExceptionResourceType["DATA_SET"] = "DATA_SET";
    ExceptionResourceType["DATA_SOURCE"] = "DATA_SOURCE";
    ExceptionResourceType["GROUP"] = "GROUP";
    ExceptionResourceType["IAMPOLICY_ASSIGNMENT"] = "IAMPOLICY_ASSIGNMENT";
    ExceptionResourceType["INGESTION"] = "INGESTION";
    ExceptionResourceType["NAMESPACE"] = "NAMESPACE";
    ExceptionResourceType["USER"] = "USER";
    ExceptionResourceType["VPC_CONNECTION"] = "VPC_CONNECTION";
})(ExceptionResourceType = exports.ExceptionResourceType || (exports.ExceptionResourceType = {}));
var ResourceExistsException;
(function (ResourceExistsException) {
    /**
     * @internal
     */
    ResourceExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceExistsException = exports.ResourceExistsException || (exports.ResourceExistsException = {}));
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
var ColumnDataType;
(function (ColumnDataType) {
    ColumnDataType["DATETIME"] = "DATETIME";
    ColumnDataType["DECIMAL"] = "DECIMAL";
    ColumnDataType["INTEGER"] = "INTEGER";
    ColumnDataType["STRING"] = "STRING";
})(ColumnDataType = exports.ColumnDataType || (exports.ColumnDataType = {}));
var CastColumnTypeOperation;
(function (CastColumnTypeOperation) {
    /**
     * @internal
     */
    CastColumnTypeOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CastColumnTypeOperation = exports.CastColumnTypeOperation || (exports.CastColumnTypeOperation = {}));
var ColumnDescription;
(function (ColumnDescription) {
    /**
     * @internal
     */
    ColumnDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnDescription = exports.ColumnDescription || (exports.ColumnDescription = {}));
var GeoSpatialCountryCode;
(function (GeoSpatialCountryCode) {
    GeoSpatialCountryCode["US"] = "US";
})(GeoSpatialCountryCode = exports.GeoSpatialCountryCode || (exports.GeoSpatialCountryCode = {}));
var GeoSpatialColumnGroup;
(function (GeoSpatialColumnGroup) {
    /**
     * @internal
     */
    GeoSpatialColumnGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GeoSpatialColumnGroup = exports.GeoSpatialColumnGroup || (exports.GeoSpatialColumnGroup = {}));
var ColumnGroup;
(function (ColumnGroup) {
    /**
     * @internal
     */
    ColumnGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnGroup = exports.ColumnGroup || (exports.ColumnGroup = {}));
var ColumnGroupColumnSchema;
(function (ColumnGroupColumnSchema) {
    /**
     * @internal
     */
    ColumnGroupColumnSchema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnGroupColumnSchema = exports.ColumnGroupColumnSchema || (exports.ColumnGroupColumnSchema = {}));
var ColumnGroupSchema;
(function (ColumnGroupSchema) {
    /**
     * @internal
     */
    ColumnGroupSchema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnGroupSchema = exports.ColumnGroupSchema || (exports.ColumnGroupSchema = {}));
var ColumnLevelPermissionRule;
(function (ColumnLevelPermissionRule) {
    /**
     * @internal
     */
    ColumnLevelPermissionRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnLevelPermissionRule = exports.ColumnLevelPermissionRule || (exports.ColumnLevelPermissionRule = {}));
var ColumnSchema;
(function (ColumnSchema) {
    /**
     * @internal
     */
    ColumnSchema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnSchema = exports.ColumnSchema || (exports.ColumnSchema = {}));
var GeoSpatialDataRole;
(function (GeoSpatialDataRole) {
    GeoSpatialDataRole["CITY"] = "CITY";
    GeoSpatialDataRole["COUNTRY"] = "COUNTRY";
    GeoSpatialDataRole["COUNTY"] = "COUNTY";
    GeoSpatialDataRole["LATITUDE"] = "LATITUDE";
    GeoSpatialDataRole["LONGITUDE"] = "LONGITUDE";
    GeoSpatialDataRole["POSTCODE"] = "POSTCODE";
    GeoSpatialDataRole["STATE"] = "STATE";
})(GeoSpatialDataRole = exports.GeoSpatialDataRole || (exports.GeoSpatialDataRole = {}));
var ColumnTag;
(function (ColumnTag) {
    /**
     * @internal
     */
    ColumnTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnTag = exports.ColumnTag || (exports.ColumnTag = {}));
var ConcurrentUpdatingException;
(function (ConcurrentUpdatingException) {
    /**
     * @internal
     */
    ConcurrentUpdatingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentUpdatingException = exports.ConcurrentUpdatingException || (exports.ConcurrentUpdatingException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateAccountCustomizationRequest;
(function (CreateAccountCustomizationRequest) {
    /**
     * @internal
     */
    CreateAccountCustomizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccountCustomizationRequest = exports.CreateAccountCustomizationRequest || (exports.CreateAccountCustomizationRequest = {}));
var CreateAccountCustomizationResponse;
(function (CreateAccountCustomizationResponse) {
    /**
     * @internal
     */
    CreateAccountCustomizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccountCustomizationResponse = exports.CreateAccountCustomizationResponse || (exports.CreateAccountCustomizationResponse = {}));
var ResourceUnavailableException;
(function (ResourceUnavailableException) {
    /**
     * @internal
     */
    ResourceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceUnavailableException = exports.ResourceUnavailableException || (exports.ResourceUnavailableException = {}));
var DateTimeParameter;
(function (DateTimeParameter) {
    /**
     * @internal
     */
    DateTimeParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DateTimeParameter = exports.DateTimeParameter || (exports.DateTimeParameter = {}));
var DecimalParameter;
(function (DecimalParameter) {
    /**
     * @internal
     */
    DecimalParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecimalParameter = exports.DecimalParameter || (exports.DecimalParameter = {}));
var IntegerParameter;
(function (IntegerParameter) {
    /**
     * @internal
     */
    IntegerParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntegerParameter = exports.IntegerParameter || (exports.IntegerParameter = {}));
var StringParameter;
(function (StringParameter) {
    /**
     * @internal
     */
    StringParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StringParameter = exports.StringParameter || (exports.StringParameter = {}));
var _Parameters;
(function (_Parameters) {
    /**
     * @internal
     */
    _Parameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(_Parameters = exports._Parameters || (exports._Parameters = {}));
var ResourcePermission;
(function (ResourcePermission) {
    /**
     * @internal
     */
    ResourcePermission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourcePermission = exports.ResourcePermission || (exports.ResourcePermission = {}));
var CreateAnalysisRequest;
(function (CreateAnalysisRequest) {
    /**
     * @internal
     */
    CreateAnalysisRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAnalysisRequest = exports.CreateAnalysisRequest || (exports.CreateAnalysisRequest = {}));
var CreateAnalysisResponse;
(function (CreateAnalysisResponse) {
    /**
     * @internal
     */
    CreateAnalysisResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAnalysisResponse = exports.CreateAnalysisResponse || (exports.CreateAnalysisResponse = {}));
var UnsupportedUserEditionException;
(function (UnsupportedUserEditionException) {
    /**
     * @internal
     */
    UnsupportedUserEditionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedUserEditionException = exports.UnsupportedUserEditionException || (exports.UnsupportedUserEditionException = {}));
var CreateColumnsOperation;
(function (CreateColumnsOperation) {
    /**
     * @internal
     */
    CreateColumnsOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateColumnsOperation = exports.CreateColumnsOperation || (exports.CreateColumnsOperation = {}));
var ExportToCSVOption;
(function (ExportToCSVOption) {
    /**
     * @internal
     */
    ExportToCSVOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportToCSVOption = exports.ExportToCSVOption || (exports.ExportToCSVOption = {}));
var DashboardUIState;
(function (DashboardUIState) {
    DashboardUIState["COLLAPSED"] = "COLLAPSED";
    DashboardUIState["EXPANDED"] = "EXPANDED";
})(DashboardUIState = exports.DashboardUIState || (exports.DashboardUIState = {}));
var SheetControlsOption;
(function (SheetControlsOption) {
    /**
     * @internal
     */
    SheetControlsOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SheetControlsOption = exports.SheetControlsOption || (exports.SheetControlsOption = {}));
var DashboardPublishOptions;
(function (DashboardPublishOptions) {
    /**
     * @internal
     */
    DashboardPublishOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardPublishOptions = exports.DashboardPublishOptions || (exports.DashboardPublishOptions = {}));
var DashboardSourceTemplate;
(function (DashboardSourceTemplate) {
    /**
     * @internal
     */
    DashboardSourceTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardSourceTemplate = exports.DashboardSourceTemplate || (exports.DashboardSourceTemplate = {}));
var DashboardSourceEntity;
(function (DashboardSourceEntity) {
    /**
     * @internal
     */
    DashboardSourceEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardSourceEntity = exports.DashboardSourceEntity || (exports.DashboardSourceEntity = {}));
var CreateDashboardRequest;
(function (CreateDashboardRequest) {
    /**
     * @internal
     */
    CreateDashboardRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDashboardRequest = exports.CreateDashboardRequest || (exports.CreateDashboardRequest = {}));
var CreateDashboardResponse;
(function (CreateDashboardResponse) {
    /**
     * @internal
     */
    CreateDashboardResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDashboardResponse = exports.CreateDashboardResponse || (exports.CreateDashboardResponse = {}));
var FieldFolder;
(function (FieldFolder) {
    /**
     * @internal
     */
    FieldFolder.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FieldFolder = exports.FieldFolder || (exports.FieldFolder = {}));
var DataSetImportMode;
(function (DataSetImportMode) {
    DataSetImportMode["DIRECT_QUERY"] = "DIRECT_QUERY";
    DataSetImportMode["SPICE"] = "SPICE";
})(DataSetImportMode = exports.DataSetImportMode || (exports.DataSetImportMode = {}));
var FilterOperation;
(function (FilterOperation) {
    /**
     * @internal
     */
    FilterOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FilterOperation = exports.FilterOperation || (exports.FilterOperation = {}));
var ProjectOperation;
(function (ProjectOperation) {
    /**
     * @internal
     */
    ProjectOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectOperation = exports.ProjectOperation || (exports.ProjectOperation = {}));
var RenameColumnOperation;
(function (RenameColumnOperation) {
    /**
     * @internal
     */
    RenameColumnOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RenameColumnOperation = exports.RenameColumnOperation || (exports.RenameColumnOperation = {}));
var TagColumnOperation;
(function (TagColumnOperation) {
    /**
     * @internal
     */
    TagColumnOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagColumnOperation = exports.TagColumnOperation || (exports.TagColumnOperation = {}));
var TransformOperation;
(function (TransformOperation) {
    TransformOperation.visit = (value, visitor) => {
        if (value.ProjectOperation !== undefined)
            return visitor.ProjectOperation(value.ProjectOperation);
        if (value.FilterOperation !== undefined)
            return visitor.FilterOperation(value.FilterOperation);
        if (value.CreateColumnsOperation !== undefined)
            return visitor.CreateColumnsOperation(value.CreateColumnsOperation);
        if (value.RenameColumnOperation !== undefined)
            return visitor.RenameColumnOperation(value.RenameColumnOperation);
        if (value.CastColumnTypeOperation !== undefined)
            return visitor.CastColumnTypeOperation(value.CastColumnTypeOperation);
        if (value.TagColumnOperation !== undefined)
            return visitor.TagColumnOperation(value.TagColumnOperation);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    TransformOperation.filterSensitiveLog = (obj) => {
        if (obj.ProjectOperation !== undefined)
            return { ProjectOperation: ProjectOperation.filterSensitiveLog(obj.ProjectOperation) };
        if (obj.FilterOperation !== undefined)
            return { FilterOperation: FilterOperation.filterSensitiveLog(obj.FilterOperation) };
        if (obj.CreateColumnsOperation !== undefined)
            return { CreateColumnsOperation: CreateColumnsOperation.filterSensitiveLog(obj.CreateColumnsOperation) };
        if (obj.RenameColumnOperation !== undefined)
            return { RenameColumnOperation: RenameColumnOperation.filterSensitiveLog(obj.RenameColumnOperation) };
        if (obj.CastColumnTypeOperation !== undefined)
            return { CastColumnTypeOperation: CastColumnTypeOperation.filterSensitiveLog(obj.CastColumnTypeOperation) };
        if (obj.TagColumnOperation !== undefined)
            return { TagColumnOperation: TagColumnOperation.filterSensitiveLog(obj.TagColumnOperation) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(TransformOperation = exports.TransformOperation || (exports.TransformOperation = {}));
var JoinKeyProperties;
(function (JoinKeyProperties) {
    /**
     * @internal
     */
    JoinKeyProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JoinKeyProperties = exports.JoinKeyProperties || (exports.JoinKeyProperties = {}));
var JoinType;
(function (JoinType) {
    JoinType["INNER"] = "INNER";
    JoinType["LEFT"] = "LEFT";
    JoinType["OUTER"] = "OUTER";
    JoinType["RIGHT"] = "RIGHT";
})(JoinType = exports.JoinType || (exports.JoinType = {}));
var JoinInstruction;
(function (JoinInstruction) {
    /**
     * @internal
     */
    JoinInstruction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JoinInstruction = exports.JoinInstruction || (exports.JoinInstruction = {}));
var LogicalTableSource;
(function (LogicalTableSource) {
    /**
     * @internal
     */
    LogicalTableSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogicalTableSource = exports.LogicalTableSource || (exports.LogicalTableSource = {}));
var LogicalTable;
(function (LogicalTable) {
    /**
     * @internal
     */
    LogicalTable.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DataTransforms && {
            DataTransforms: obj.DataTransforms.map((item) => TransformOperation.filterSensitiveLog(item)),
        }),
    });
})(LogicalTable = exports.LogicalTable || (exports.LogicalTable = {}));
var InputColumnDataType;
(function (InputColumnDataType) {
    InputColumnDataType["BIT"] = "BIT";
    InputColumnDataType["BOOLEAN"] = "BOOLEAN";
    InputColumnDataType["DATETIME"] = "DATETIME";
    InputColumnDataType["DECIMAL"] = "DECIMAL";
    InputColumnDataType["INTEGER"] = "INTEGER";
    InputColumnDataType["JSON"] = "JSON";
    InputColumnDataType["STRING"] = "STRING";
})(InputColumnDataType = exports.InputColumnDataType || (exports.InputColumnDataType = {}));
var InputColumn;
(function (InputColumn) {
    /**
     * @internal
     */
    InputColumn.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputColumn = exports.InputColumn || (exports.InputColumn = {}));
var CustomSql;
(function (CustomSql) {
    /**
     * @internal
     */
    CustomSql.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomSql = exports.CustomSql || (exports.CustomSql = {}));
var RelationalTable;
(function (RelationalTable) {
    /**
     * @internal
     */
    RelationalTable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelationalTable = exports.RelationalTable || (exports.RelationalTable = {}));
var FileFormat;
(function (FileFormat) {
    FileFormat["CLF"] = "CLF";
    FileFormat["CSV"] = "CSV";
    FileFormat["ELF"] = "ELF";
    FileFormat["JSON"] = "JSON";
    FileFormat["TSV"] = "TSV";
    FileFormat["XLSX"] = "XLSX";
})(FileFormat = exports.FileFormat || (exports.FileFormat = {}));
var TextQualifier;
(function (TextQualifier) {
    TextQualifier["DOUBLE_QUOTE"] = "DOUBLE_QUOTE";
    TextQualifier["SINGLE_QUOTE"] = "SINGLE_QUOTE";
})(TextQualifier = exports.TextQualifier || (exports.TextQualifier = {}));
var UploadSettings;
(function (UploadSettings) {
    /**
     * @internal
     */
    UploadSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadSettings = exports.UploadSettings || (exports.UploadSettings = {}));
var S3Source;
(function (S3Source) {
    /**
     * @internal
     */
    S3Source.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Source = exports.S3Source || (exports.S3Source = {}));
var PhysicalTable;
(function (PhysicalTable) {
    PhysicalTable.visit = (value, visitor) => {
        if (value.RelationalTable !== undefined)
            return visitor.RelationalTable(value.RelationalTable);
        if (value.CustomSql !== undefined)
            return visitor.CustomSql(value.CustomSql);
        if (value.S3Source !== undefined)
            return visitor.S3Source(value.S3Source);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    PhysicalTable.filterSensitiveLog = (obj) => {
        if (obj.RelationalTable !== undefined)
            return { RelationalTable: RelationalTable.filterSensitiveLog(obj.RelationalTable) };
        if (obj.CustomSql !== undefined)
            return { CustomSql: CustomSql.filterSensitiveLog(obj.CustomSql) };
        if (obj.S3Source !== undefined)
            return { S3Source: S3Source.filterSensitiveLog(obj.S3Source) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(PhysicalTable = exports.PhysicalTable || (exports.PhysicalTable = {}));
var RowLevelPermissionFormatVersion;
(function (RowLevelPermissionFormatVersion) {
    RowLevelPermissionFormatVersion["VERSION_1"] = "VERSION_1";
    RowLevelPermissionFormatVersion["VERSION_2"] = "VERSION_2";
})(RowLevelPermissionFormatVersion = exports.RowLevelPermissionFormatVersion || (exports.RowLevelPermissionFormatVersion = {}));
var RowLevelPermissionPolicy;
(function (RowLevelPermissionPolicy) {
    RowLevelPermissionPolicy["DENY_ACCESS"] = "DENY_ACCESS";
    RowLevelPermissionPolicy["GRANT_ACCESS"] = "GRANT_ACCESS";
})(RowLevelPermissionPolicy = exports.RowLevelPermissionPolicy || (exports.RowLevelPermissionPolicy = {}));
var RowLevelPermissionDataSet;
(function (RowLevelPermissionDataSet) {
    /**
     * @internal
     */
    RowLevelPermissionDataSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RowLevelPermissionDataSet = exports.RowLevelPermissionDataSet || (exports.RowLevelPermissionDataSet = {}));
var CreateDataSetRequest;
(function (CreateDataSetRequest) {
    /**
     * @internal
     */
    CreateDataSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.PhysicalTableMap && {
            PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: PhysicalTable.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.LogicalTableMap && {
            LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: LogicalTable.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(CreateDataSetRequest = exports.CreateDataSetRequest || (exports.CreateDataSetRequest = {}));
var CreateDataSetResponse;
(function (CreateDataSetResponse) {
    /**
     * @internal
     */
    CreateDataSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataSetResponse = exports.CreateDataSetResponse || (exports.CreateDataSetResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var JiraParameters;
(function (JiraParameters) {
    /**
     * @internal
     */
    JiraParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JiraParameters = exports.JiraParameters || (exports.JiraParameters = {}));
var MariaDbParameters;
(function (MariaDbParameters) {
    /**
     * @internal
     */
    MariaDbParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MariaDbParameters = exports.MariaDbParameters || (exports.MariaDbParameters = {}));
var MySqlParameters;
(function (MySqlParameters) {
    /**
     * @internal
     */
    MySqlParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MySqlParameters = exports.MySqlParameters || (exports.MySqlParameters = {}));
var OracleParameters;
(function (OracleParameters) {
    /**
     * @internal
     */
    OracleParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OracleParameters = exports.OracleParameters || (exports.OracleParameters = {}));
var PostgreSqlParameters;
(function (PostgreSqlParameters) {
    /**
     * @internal
     */
    PostgreSqlParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PostgreSqlParameters = exports.PostgreSqlParameters || (exports.PostgreSqlParameters = {}));
var PrestoParameters;
(function (PrestoParameters) {
    /**
     * @internal
     */
    PrestoParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrestoParameters = exports.PrestoParameters || (exports.PrestoParameters = {}));
var RdsParameters;
(function (RdsParameters) {
    /**
     * @internal
     */
    RdsParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RdsParameters = exports.RdsParameters || (exports.RdsParameters = {}));
var RedshiftParameters;
(function (RedshiftParameters) {
    /**
     * @internal
     */
    RedshiftParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RedshiftParameters = exports.RedshiftParameters || (exports.RedshiftParameters = {}));
var ManifestFileLocation;
(function (ManifestFileLocation) {
    /**
     * @internal
     */
    ManifestFileLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManifestFileLocation = exports.ManifestFileLocation || (exports.ManifestFileLocation = {}));
var S3Parameters;
(function (S3Parameters) {
    /**
     * @internal
     */
    S3Parameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Parameters = exports.S3Parameters || (exports.S3Parameters = {}));
var ServiceNowParameters;
(function (ServiceNowParameters) {
    /**
     * @internal
     */
    ServiceNowParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceNowParameters = exports.ServiceNowParameters || (exports.ServiceNowParameters = {}));
var SnowflakeParameters;
(function (SnowflakeParameters) {
    /**
     * @internal
     */
    SnowflakeParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnowflakeParameters = exports.SnowflakeParameters || (exports.SnowflakeParameters = {}));
var SparkParameters;
(function (SparkParameters) {
    /**
     * @internal
     */
    SparkParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SparkParameters = exports.SparkParameters || (exports.SparkParameters = {}));
var SqlServerParameters;
(function (SqlServerParameters) {
    /**
     * @internal
     */
    SqlServerParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlServerParameters = exports.SqlServerParameters || (exports.SqlServerParameters = {}));
var TeradataParameters;
(function (TeradataParameters) {
    /**
     * @internal
     */
    TeradataParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TeradataParameters = exports.TeradataParameters || (exports.TeradataParameters = {}));
var TwitterParameters;
(function (TwitterParameters) {
    /**
     * @internal
     */
    TwitterParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TwitterParameters = exports.TwitterParameters || (exports.TwitterParameters = {}));
var DataSourceParameters;
(function (DataSourceParameters) {
    DataSourceParameters.visit = (value, visitor) => {
        if (value.AmazonElasticsearchParameters !== undefined)
            return visitor.AmazonElasticsearchParameters(value.AmazonElasticsearchParameters);
        if (value.AthenaParameters !== undefined)
            return visitor.AthenaParameters(value.AthenaParameters);
        if (value.AuroraParameters !== undefined)
            return visitor.AuroraParameters(value.AuroraParameters);
        if (value.AuroraPostgreSqlParameters !== undefined)
            return visitor.AuroraPostgreSqlParameters(value.AuroraPostgreSqlParameters);
        if (value.AwsIotAnalyticsParameters !== undefined)
            return visitor.AwsIotAnalyticsParameters(value.AwsIotAnalyticsParameters);
        if (value.JiraParameters !== undefined)
            return visitor.JiraParameters(value.JiraParameters);
        if (value.MariaDbParameters !== undefined)
            return visitor.MariaDbParameters(value.MariaDbParameters);
        if (value.MySqlParameters !== undefined)
            return visitor.MySqlParameters(value.MySqlParameters);
        if (value.OracleParameters !== undefined)
            return visitor.OracleParameters(value.OracleParameters);
        if (value.PostgreSqlParameters !== undefined)
            return visitor.PostgreSqlParameters(value.PostgreSqlParameters);
        if (value.PrestoParameters !== undefined)
            return visitor.PrestoParameters(value.PrestoParameters);
        if (value.RdsParameters !== undefined)
            return visitor.RdsParameters(value.RdsParameters);
        if (value.RedshiftParameters !== undefined)
            return visitor.RedshiftParameters(value.RedshiftParameters);
        if (value.S3Parameters !== undefined)
            return visitor.S3Parameters(value.S3Parameters);
        if (value.ServiceNowParameters !== undefined)
            return visitor.ServiceNowParameters(value.ServiceNowParameters);
        if (value.SnowflakeParameters !== undefined)
            return visitor.SnowflakeParameters(value.SnowflakeParameters);
        if (value.SparkParameters !== undefined)
            return visitor.SparkParameters(value.SparkParameters);
        if (value.SqlServerParameters !== undefined)
            return visitor.SqlServerParameters(value.SqlServerParameters);
        if (value.TeradataParameters !== undefined)
            return visitor.TeradataParameters(value.TeradataParameters);
        if (value.TwitterParameters !== undefined)
            return visitor.TwitterParameters(value.TwitterParameters);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    DataSourceParameters.filterSensitiveLog = (obj) => {
        if (obj.AmazonElasticsearchParameters !== undefined)
            return {
                AmazonElasticsearchParameters: AmazonElasticsearchParameters.filterSensitiveLog(obj.AmazonElasticsearchParameters),
            };
        if (obj.AthenaParameters !== undefined)
            return { AthenaParameters: AthenaParameters.filterSensitiveLog(obj.AthenaParameters) };
        if (obj.AuroraParameters !== undefined)
            return { AuroraParameters: AuroraParameters.filterSensitiveLog(obj.AuroraParameters) };
        if (obj.AuroraPostgreSqlParameters !== undefined)
            return {
                AuroraPostgreSqlParameters: AuroraPostgreSqlParameters.filterSensitiveLog(obj.AuroraPostgreSqlParameters),
            };
        if (obj.AwsIotAnalyticsParameters !== undefined)
            return { AwsIotAnalyticsParameters: AwsIotAnalyticsParameters.filterSensitiveLog(obj.AwsIotAnalyticsParameters) };
        if (obj.JiraParameters !== undefined)
            return { JiraParameters: JiraParameters.filterSensitiveLog(obj.JiraParameters) };
        if (obj.MariaDbParameters !== undefined)
            return { MariaDbParameters: MariaDbParameters.filterSensitiveLog(obj.MariaDbParameters) };
        if (obj.MySqlParameters !== undefined)
            return { MySqlParameters: MySqlParameters.filterSensitiveLog(obj.MySqlParameters) };
        if (obj.OracleParameters !== undefined)
            return { OracleParameters: OracleParameters.filterSensitiveLog(obj.OracleParameters) };
        if (obj.PostgreSqlParameters !== undefined)
            return { PostgreSqlParameters: PostgreSqlParameters.filterSensitiveLog(obj.PostgreSqlParameters) };
        if (obj.PrestoParameters !== undefined)
            return { PrestoParameters: PrestoParameters.filterSensitiveLog(obj.PrestoParameters) };
        if (obj.RdsParameters !== undefined)
            return { RdsParameters: RdsParameters.filterSensitiveLog(obj.RdsParameters) };
        if (obj.RedshiftParameters !== undefined)
            return { RedshiftParameters: RedshiftParameters.filterSensitiveLog(obj.RedshiftParameters) };
        if (obj.S3Parameters !== undefined)
            return { S3Parameters: S3Parameters.filterSensitiveLog(obj.S3Parameters) };
        if (obj.ServiceNowParameters !== undefined)
            return { ServiceNowParameters: ServiceNowParameters.filterSensitiveLog(obj.ServiceNowParameters) };
        if (obj.SnowflakeParameters !== undefined)
            return { SnowflakeParameters: SnowflakeParameters.filterSensitiveLog(obj.SnowflakeParameters) };
        if (obj.SparkParameters !== undefined)
            return { SparkParameters: SparkParameters.filterSensitiveLog(obj.SparkParameters) };
        if (obj.SqlServerParameters !== undefined)
            return { SqlServerParameters: SqlServerParameters.filterSensitiveLog(obj.SqlServerParameters) };
        if (obj.TeradataParameters !== undefined)
            return { TeradataParameters: TeradataParameters.filterSensitiveLog(obj.TeradataParameters) };
        if (obj.TwitterParameters !== undefined)
            return { TwitterParameters: TwitterParameters.filterSensitiveLog(obj.TwitterParameters) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(DataSourceParameters = exports.DataSourceParameters || (exports.DataSourceParameters = {}));
var CredentialPair;
(function (CredentialPair) {
    /**
     * @internal
     */
    CredentialPair.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AlternateDataSourceParameters && {
            AlternateDataSourceParameters: obj.AlternateDataSourceParameters.map((item) => DataSourceParameters.filterSensitiveLog(item)),
        }),
    });
})(CredentialPair = exports.CredentialPair || (exports.CredentialPair = {}));
var DataSourceCredentials;
(function (DataSourceCredentials) {
    /**
     * @internal
     */
    DataSourceCredentials.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.CredentialPair && { CredentialPair: CredentialPair.filterSensitiveLog(obj.CredentialPair) }),
    });
})(DataSourceCredentials = exports.DataSourceCredentials || (exports.DataSourceCredentials = {}));
var SslProperties;
(function (SslProperties) {
    /**
     * @internal
     */
    SslProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SslProperties = exports.SslProperties || (exports.SslProperties = {}));
var DataSourceType;
(function (DataSourceType) {
    DataSourceType["ADOBE_ANALYTICS"] = "ADOBE_ANALYTICS";
    DataSourceType["AMAZON_ELASTICSEARCH"] = "AMAZON_ELASTICSEARCH";
    DataSourceType["ATHENA"] = "ATHENA";
    DataSourceType["AURORA"] = "AURORA";
    DataSourceType["AURORA_POSTGRESQL"] = "AURORA_POSTGRESQL";
    DataSourceType["AWS_IOT_ANALYTICS"] = "AWS_IOT_ANALYTICS";
    DataSourceType["GITHUB"] = "GITHUB";
    DataSourceType["JIRA"] = "JIRA";
    DataSourceType["MARIADB"] = "MARIADB";
    DataSourceType["MYSQL"] = "MYSQL";
    DataSourceType["ORACLE"] = "ORACLE";
    DataSourceType["POSTGRESQL"] = "POSTGRESQL";
    DataSourceType["PRESTO"] = "PRESTO";
    DataSourceType["REDSHIFT"] = "REDSHIFT";
    DataSourceType["S3"] = "S3";
    DataSourceType["SALESFORCE"] = "SALESFORCE";
    DataSourceType["SERVICENOW"] = "SERVICENOW";
    DataSourceType["SNOWFLAKE"] = "SNOWFLAKE";
    DataSourceType["SPARK"] = "SPARK";
    DataSourceType["SQLSERVER"] = "SQLSERVER";
    DataSourceType["TERADATA"] = "TERADATA";
    DataSourceType["TIMESTREAM"] = "TIMESTREAM";
    DataSourceType["TWITTER"] = "TWITTER";
})(DataSourceType = exports.DataSourceType || (exports.DataSourceType = {}));
var VpcConnectionProperties;
(function (VpcConnectionProperties) {
    /**
     * @internal
     */
    VpcConnectionProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConnectionProperties = exports.VpcConnectionProperties || (exports.VpcConnectionProperties = {}));
var CreateDataSourceRequest;
(function (CreateDataSourceRequest) {
    /**
     * @internal
     */
    CreateDataSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DataSourceParameters && {
            DataSourceParameters: DataSourceParameters.filterSensitiveLog(obj.DataSourceParameters),
        }),
        ...(obj.Credentials && { Credentials: smithy_client_1.SENSITIVE_STRING }),
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
var CreateGroupRequest;
(function (CreateGroupRequest) {
    /**
     * @internal
     */
    CreateGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupRequest = exports.CreateGroupRequest || (exports.CreateGroupRequest = {}));
var Group;
(function (Group) {
    /**
     * @internal
     */
    Group.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Group = exports.Group || (exports.Group = {}));
var CreateGroupResponse;
(function (CreateGroupResponse) {
    /**
     * @internal
     */
    CreateGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupResponse = exports.CreateGroupResponse || (exports.CreateGroupResponse = {}));
var PreconditionNotMetException;
(function (PreconditionNotMetException) {
    /**
     * @internal
     */
    PreconditionNotMetException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PreconditionNotMetException = exports.PreconditionNotMetException || (exports.PreconditionNotMetException = {}));
var CreateGroupMembershipRequest;
(function (CreateGroupMembershipRequest) {
    /**
     * @internal
     */
    CreateGroupMembershipRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupMembershipRequest = exports.CreateGroupMembershipRequest || (exports.CreateGroupMembershipRequest = {}));
var GroupMember;
(function (GroupMember) {
    /**
     * @internal
     */
    GroupMember.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupMember = exports.GroupMember || (exports.GroupMember = {}));
var CreateGroupMembershipResponse;
(function (CreateGroupMembershipResponse) {
    /**
     * @internal
     */
    CreateGroupMembershipResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupMembershipResponse = exports.CreateGroupMembershipResponse || (exports.CreateGroupMembershipResponse = {}));
var CreateIAMPolicyAssignmentRequest;
(function (CreateIAMPolicyAssignmentRequest) {
    /**
     * @internal
     */
    CreateIAMPolicyAssignmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIAMPolicyAssignmentRequest = exports.CreateIAMPolicyAssignmentRequest || (exports.CreateIAMPolicyAssignmentRequest = {}));
var CreateIAMPolicyAssignmentResponse;
(function (CreateIAMPolicyAssignmentResponse) {
    /**
     * @internal
     */
    CreateIAMPolicyAssignmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIAMPolicyAssignmentResponse = exports.CreateIAMPolicyAssignmentResponse || (exports.CreateIAMPolicyAssignmentResponse = {}));
var CreateIngestionRequest;
(function (CreateIngestionRequest) {
    /**
     * @internal
     */
    CreateIngestionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIngestionRequest = exports.CreateIngestionRequest || (exports.CreateIngestionRequest = {}));
var IngestionStatus;
(function (IngestionStatus) {
    IngestionStatus["CANCELLED"] = "CANCELLED";
    IngestionStatus["COMPLETED"] = "COMPLETED";
    IngestionStatus["FAILED"] = "FAILED";
    IngestionStatus["INITIALIZED"] = "INITIALIZED";
    IngestionStatus["QUEUED"] = "QUEUED";
    IngestionStatus["RUNNING"] = "RUNNING";
})(IngestionStatus = exports.IngestionStatus || (exports.IngestionStatus = {}));
var CreateIngestionResponse;
(function (CreateIngestionResponse) {
    /**
     * @internal
     */
    CreateIngestionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIngestionResponse = exports.CreateIngestionResponse || (exports.CreateIngestionResponse = {}));
var IdentityStore;
(function (IdentityStore) {
    IdentityStore["QUICKSIGHT"] = "QUICKSIGHT";
})(IdentityStore = exports.IdentityStore || (exports.IdentityStore = {}));
var CreateNamespaceRequest;
(function (CreateNamespaceRequest) {
    /**
     * @internal
     */
    CreateNamespaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNamespaceRequest = exports.CreateNamespaceRequest || (exports.CreateNamespaceRequest = {}));
var NamespaceStatus;
(function (NamespaceStatus) {
    NamespaceStatus["CREATED"] = "CREATED";
    NamespaceStatus["CREATING"] = "CREATING";
    NamespaceStatus["DELETING"] = "DELETING";
    NamespaceStatus["NON_RETRYABLE_FAILURE"] = "NON_RETRYABLE_FAILURE";
    NamespaceStatus["RETRYABLE_FAILURE"] = "RETRYABLE_FAILURE";
})(NamespaceStatus = exports.NamespaceStatus || (exports.NamespaceStatus = {}));
var CreateNamespaceResponse;
(function (CreateNamespaceResponse) {
    /**
     * @internal
     */
    CreateNamespaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNamespaceResponse = exports.CreateNamespaceResponse || (exports.CreateNamespaceResponse = {}));
var TemplateSourceAnalysis;
(function (TemplateSourceAnalysis) {
    /**
     * @internal
     */
    TemplateSourceAnalysis.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateSourceAnalysis = exports.TemplateSourceAnalysis || (exports.TemplateSourceAnalysis = {}));
var TemplateSourceTemplate;
(function (TemplateSourceTemplate) {
    /**
     * @internal
     */
    TemplateSourceTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateSourceTemplate = exports.TemplateSourceTemplate || (exports.TemplateSourceTemplate = {}));
var TemplateSourceEntity;
(function (TemplateSourceEntity) {
    /**
     * @internal
     */
    TemplateSourceEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateSourceEntity = exports.TemplateSourceEntity || (exports.TemplateSourceEntity = {}));
var CreateTemplateRequest;
(function (CreateTemplateRequest) {
    /**
     * @internal
     */
    CreateTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTemplateRequest = exports.CreateTemplateRequest || (exports.CreateTemplateRequest = {}));
var CreateTemplateResponse;
(function (CreateTemplateResponse) {
    /**
     * @internal
     */
    CreateTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTemplateResponse = exports.CreateTemplateResponse || (exports.CreateTemplateResponse = {}));
var CreateTemplateAliasRequest;
(function (CreateTemplateAliasRequest) {
    /**
     * @internal
     */
    CreateTemplateAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTemplateAliasRequest = exports.CreateTemplateAliasRequest || (exports.CreateTemplateAliasRequest = {}));
var TemplateAlias;
(function (TemplateAlias) {
    /**
     * @internal
     */
    TemplateAlias.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateAlias = exports.TemplateAlias || (exports.TemplateAlias = {}));
var CreateTemplateAliasResponse;
(function (CreateTemplateAliasResponse) {
    /**
     * @internal
     */
    CreateTemplateAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTemplateAliasResponse = exports.CreateTemplateAliasResponse || (exports.CreateTemplateAliasResponse = {}));
var DataColorPalette;
(function (DataColorPalette) {
    /**
     * @internal
     */
    DataColorPalette.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataColorPalette = exports.DataColorPalette || (exports.DataColorPalette = {}));
var TileStyle;
(function (TileStyle) {
    /**
     * @internal
     */
    TileStyle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TileStyle = exports.TileStyle || (exports.TileStyle = {}));
var GutterStyle;
(function (GutterStyle) {
    /**
     * @internal
     */
    GutterStyle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GutterStyle = exports.GutterStyle || (exports.GutterStyle = {}));
var MarginStyle;
(function (MarginStyle) {
    /**
     * @internal
     */
    MarginStyle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MarginStyle = exports.MarginStyle || (exports.MarginStyle = {}));
var TileLayoutStyle;
(function (TileLayoutStyle) {
    /**
     * @internal
     */
    TileLayoutStyle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TileLayoutStyle = exports.TileLayoutStyle || (exports.TileLayoutStyle = {}));
var SheetStyle;
(function (SheetStyle) {
    /**
     * @internal
     */
    SheetStyle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SheetStyle = exports.SheetStyle || (exports.SheetStyle = {}));
var UIColorPalette;
(function (UIColorPalette) {
    /**
     * @internal
     */
    UIColorPalette.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UIColorPalette = exports.UIColorPalette || (exports.UIColorPalette = {}));
var ThemeConfiguration;
(function (ThemeConfiguration) {
    /**
     * @internal
     */
    ThemeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThemeConfiguration = exports.ThemeConfiguration || (exports.ThemeConfiguration = {}));
var CreateThemeRequest;
(function (CreateThemeRequest) {
    /**
     * @internal
     */
    CreateThemeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThemeRequest = exports.CreateThemeRequest || (exports.CreateThemeRequest = {}));
var CreateThemeResponse;
(function (CreateThemeResponse) {
    /**
     * @internal
     */
    CreateThemeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThemeResponse = exports.CreateThemeResponse || (exports.CreateThemeResponse = {}));
var CreateThemeAliasRequest;
(function (CreateThemeAliasRequest) {
    /**
     * @internal
     */
    CreateThemeAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThemeAliasRequest = exports.CreateThemeAliasRequest || (exports.CreateThemeAliasRequest = {}));
var ThemeAlias;
(function (ThemeAlias) {
    /**
     * @internal
     */
    ThemeAlias.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThemeAlias = exports.ThemeAlias || (exports.ThemeAlias = {}));
var CreateThemeAliasResponse;
(function (CreateThemeAliasResponse) {
    /**
     * @internal
     */
    CreateThemeAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThemeAliasResponse = exports.CreateThemeAliasResponse || (exports.CreateThemeAliasResponse = {}));
var DashboardErrorType;
(function (DashboardErrorType) {
    DashboardErrorType["ACCESS_DENIED"] = "ACCESS_DENIED";
    DashboardErrorType["COLUMN_GEOGRAPHIC_ROLE_MISMATCH"] = "COLUMN_GEOGRAPHIC_ROLE_MISMATCH";
    DashboardErrorType["COLUMN_REPLACEMENT_MISSING"] = "COLUMN_REPLACEMENT_MISSING";
    DashboardErrorType["COLUMN_TYPE_MISMATCH"] = "COLUMN_TYPE_MISMATCH";
    DashboardErrorType["DATA_SET_NOT_FOUND"] = "DATA_SET_NOT_FOUND";
    DashboardErrorType["INTERNAL_FAILURE"] = "INTERNAL_FAILURE";
    DashboardErrorType["PARAMETER_NOT_FOUND"] = "PARAMETER_NOT_FOUND";
    DashboardErrorType["PARAMETER_TYPE_INVALID"] = "PARAMETER_TYPE_INVALID";
    DashboardErrorType["PARAMETER_VALUE_INCOMPATIBLE"] = "PARAMETER_VALUE_INCOMPATIBLE";
    DashboardErrorType["SOURCE_NOT_FOUND"] = "SOURCE_NOT_FOUND";
})(DashboardErrorType = exports.DashboardErrorType || (exports.DashboardErrorType = {}));
var DashboardError;
(function (DashboardError) {
    /**
     * @internal
     */
    DashboardError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardError = exports.DashboardError || (exports.DashboardError = {}));
var DashboardVersion;
(function (DashboardVersion) {
    /**
     * @internal
     */
    DashboardVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardVersion = exports.DashboardVersion || (exports.DashboardVersion = {}));
var Dashboard;
(function (Dashboard) {
    /**
     * @internal
     */
    Dashboard.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
var DashboardFilterAttribute;
(function (DashboardFilterAttribute) {
    DashboardFilterAttribute["QUICKSIGHT_USER"] = "QUICKSIGHT_USER";
})(DashboardFilterAttribute = exports.DashboardFilterAttribute || (exports.DashboardFilterAttribute = {}));
var DashboardSearchFilter;
(function (DashboardSearchFilter) {
    /**
     * @internal
     */
    DashboardSearchFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardSearchFilter = exports.DashboardSearchFilter || (exports.DashboardSearchFilter = {}));
var DashboardSummary;
(function (DashboardSummary) {
    /**
     * @internal
     */
    DashboardSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardSummary = exports.DashboardSummary || (exports.DashboardSummary = {}));
var DashboardVersionSummary;
(function (DashboardVersionSummary) {
    /**
     * @internal
     */
    DashboardVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardVersionSummary = exports.DashboardVersionSummary || (exports.DashboardVersionSummary = {}));
var OutputColumn;
(function (OutputColumn) {
    /**
     * @internal
     */
    OutputColumn.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputColumn = exports.OutputColumn || (exports.OutputColumn = {}));
var DataSet;
(function (DataSet) {
    /**
     * @internal
     */
    DataSet.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.PhysicalTableMap && {
            PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: PhysicalTable.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.LogicalTableMap && {
            LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: LogicalTable.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(DataSet = exports.DataSet || (exports.DataSet = {}));
var DataSetSchema;
(function (DataSetSchema) {
    /**
     * @internal
     */
    DataSetSchema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSetSchema = exports.DataSetSchema || (exports.DataSetSchema = {}));
var DataSetConfiguration;
(function (DataSetConfiguration) {
    /**
     * @internal
     */
    DataSetConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSetConfiguration = exports.DataSetConfiguration || (exports.DataSetConfiguration = {}));
var DataSetSummary;
(function (DataSetSummary) {
    /**
     * @internal
     */
    DataSetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSetSummary = exports.DataSetSummary || (exports.DataSetSummary = {}));
var DataSourceErrorInfoType;
(function (DataSourceErrorInfoType) {
    DataSourceErrorInfoType["ACCESS_DENIED"] = "ACCESS_DENIED";
    DataSourceErrorInfoType["CONFLICT"] = "CONFLICT";
    DataSourceErrorInfoType["COPY_SOURCE_NOT_FOUND"] = "COPY_SOURCE_NOT_FOUND";
    DataSourceErrorInfoType["ENGINE_VERSION_NOT_SUPPORTED"] = "ENGINE_VERSION_NOT_SUPPORTED";
    DataSourceErrorInfoType["GENERIC_SQL_FAILURE"] = "GENERIC_SQL_FAILURE";
    DataSourceErrorInfoType["TIMEOUT"] = "TIMEOUT";
    DataSourceErrorInfoType["UNKNOWN"] = "UNKNOWN";
    DataSourceErrorInfoType["UNKNOWN_HOST"] = "UNKNOWN_HOST";
})(DataSourceErrorInfoType = exports.DataSourceErrorInfoType || (exports.DataSourceErrorInfoType = {}));
var DataSourceErrorInfo;
(function (DataSourceErrorInfo) {
    /**
     * @internal
     */
    DataSourceErrorInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSourceErrorInfo = exports.DataSourceErrorInfo || (exports.DataSourceErrorInfo = {}));
var DataSource;
(function (DataSource) {
    /**
     * @internal
     */
    DataSource.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DataSourceParameters && {
            DataSourceParameters: DataSourceParameters.filterSensitiveLog(obj.DataSourceParameters),
        }),
        ...(obj.AlternateDataSourceParameters && {
            AlternateDataSourceParameters: obj.AlternateDataSourceParameters.map((item) => DataSourceParameters.filterSensitiveLog(item)),
        }),
    });
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var DeleteAccountCustomizationRequest;
(function (DeleteAccountCustomizationRequest) {
    /**
     * @internal
     */
    DeleteAccountCustomizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccountCustomizationRequest = exports.DeleteAccountCustomizationRequest || (exports.DeleteAccountCustomizationRequest = {}));
var DeleteAccountCustomizationResponse;
(function (DeleteAccountCustomizationResponse) {
    /**
     * @internal
     */
    DeleteAccountCustomizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccountCustomizationResponse = exports.DeleteAccountCustomizationResponse || (exports.DeleteAccountCustomizationResponse = {}));
var DeleteAnalysisRequest;
(function (DeleteAnalysisRequest) {
    /**
     * @internal
     */
    DeleteAnalysisRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAnalysisRequest = exports.DeleteAnalysisRequest || (exports.DeleteAnalysisRequest = {}));
var DeleteAnalysisResponse;
(function (DeleteAnalysisResponse) {
    /**
     * @internal
     */
    DeleteAnalysisResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAnalysisResponse = exports.DeleteAnalysisResponse || (exports.DeleteAnalysisResponse = {}));
var DeleteDashboardRequest;
(function (DeleteDashboardRequest) {
    /**
     * @internal
     */
    DeleteDashboardRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDashboardRequest = exports.DeleteDashboardRequest || (exports.DeleteDashboardRequest = {}));
var DeleteDashboardResponse;
(function (DeleteDashboardResponse) {
    /**
     * @internal
     */
    DeleteDashboardResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDashboardResponse = exports.DeleteDashboardResponse || (exports.DeleteDashboardResponse = {}));
var DeleteDataSetRequest;
(function (DeleteDataSetRequest) {
    /**
     * @internal
     */
    DeleteDataSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDataSetRequest = exports.DeleteDataSetRequest || (exports.DeleteDataSetRequest = {}));
var DeleteDataSetResponse;
(function (DeleteDataSetResponse) {
    /**
     * @internal
     */
    DeleteDataSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDataSetResponse = exports.DeleteDataSetResponse || (exports.DeleteDataSetResponse = {}));
var DeleteDataSourceRequest;
(function (DeleteDataSourceRequest) {
    /**
     * @internal
     */
    DeleteDataSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDataSourceRequest = exports.DeleteDataSourceRequest || (exports.DeleteDataSourceRequest = {}));
var DeleteDataSourceResponse;
(function (DeleteDataSourceResponse) {
    /**
     * @internal
     */
    DeleteDataSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDataSourceResponse = exports.DeleteDataSourceResponse || (exports.DeleteDataSourceResponse = {}));
var DeleteGroupRequest;
(function (DeleteGroupRequest) {
    /**
     * @internal
     */
    DeleteGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupRequest = exports.DeleteGroupRequest || (exports.DeleteGroupRequest = {}));
var DeleteGroupResponse;
(function (DeleteGroupResponse) {
    /**
     * @internal
     */
    DeleteGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupResponse = exports.DeleteGroupResponse || (exports.DeleteGroupResponse = {}));
var DeleteGroupMembershipRequest;
(function (DeleteGroupMembershipRequest) {
    /**
     * @internal
     */
    DeleteGroupMembershipRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupMembershipRequest = exports.DeleteGroupMembershipRequest || (exports.DeleteGroupMembershipRequest = {}));
var DeleteGroupMembershipResponse;
(function (DeleteGroupMembershipResponse) {
    /**
     * @internal
     */
    DeleteGroupMembershipResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupMembershipResponse = exports.DeleteGroupMembershipResponse || (exports.DeleteGroupMembershipResponse = {}));
var DeleteIAMPolicyAssignmentRequest;
(function (DeleteIAMPolicyAssignmentRequest) {
    /**
     * @internal
     */
    DeleteIAMPolicyAssignmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIAMPolicyAssignmentRequest = exports.DeleteIAMPolicyAssignmentRequest || (exports.DeleteIAMPolicyAssignmentRequest = {}));
var DeleteIAMPolicyAssignmentResponse;
(function (DeleteIAMPolicyAssignmentResponse) {
    /**
     * @internal
     */
    DeleteIAMPolicyAssignmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIAMPolicyAssignmentResponse = exports.DeleteIAMPolicyAssignmentResponse || (exports.DeleteIAMPolicyAssignmentResponse = {}));
var DeleteNamespaceRequest;
(function (DeleteNamespaceRequest) {
    /**
     * @internal
     */
    DeleteNamespaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNamespaceRequest = exports.DeleteNamespaceRequest || (exports.DeleteNamespaceRequest = {}));
var DeleteNamespaceResponse;
(function (DeleteNamespaceResponse) {
    /**
     * @internal
     */
    DeleteNamespaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNamespaceResponse = exports.DeleteNamespaceResponse || (exports.DeleteNamespaceResponse = {}));
var DeleteTemplateRequest;
(function (DeleteTemplateRequest) {
    /**
     * @internal
     */
    DeleteTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTemplateRequest = exports.DeleteTemplateRequest || (exports.DeleteTemplateRequest = {}));
var DeleteTemplateResponse;
(function (DeleteTemplateResponse) {
    /**
     * @internal
     */
    DeleteTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTemplateResponse = exports.DeleteTemplateResponse || (exports.DeleteTemplateResponse = {}));
var DeleteTemplateAliasRequest;
(function (DeleteTemplateAliasRequest) {
    /**
     * @internal
     */
    DeleteTemplateAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTemplateAliasRequest = exports.DeleteTemplateAliasRequest || (exports.DeleteTemplateAliasRequest = {}));
var DeleteTemplateAliasResponse;
(function (DeleteTemplateAliasResponse) {
    /**
     * @internal
     */
    DeleteTemplateAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTemplateAliasResponse = exports.DeleteTemplateAliasResponse || (exports.DeleteTemplateAliasResponse = {}));
var DeleteThemeRequest;
(function (DeleteThemeRequest) {
    /**
     * @internal
     */
    DeleteThemeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThemeRequest = exports.DeleteThemeRequest || (exports.DeleteThemeRequest = {}));
var DeleteThemeResponse;
(function (DeleteThemeResponse) {
    /**
     * @internal
     */
    DeleteThemeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThemeResponse = exports.DeleteThemeResponse || (exports.DeleteThemeResponse = {}));
var DeleteThemeAliasRequest;
(function (DeleteThemeAliasRequest) {
    /**
     * @internal
     */
    DeleteThemeAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThemeAliasRequest = exports.DeleteThemeAliasRequest || (exports.DeleteThemeAliasRequest = {}));
var DeleteThemeAliasResponse;
(function (DeleteThemeAliasResponse) {
    /**
     * @internal
     */
    DeleteThemeAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThemeAliasResponse = exports.DeleteThemeAliasResponse || (exports.DeleteThemeAliasResponse = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DeleteUserResponse;
(function (DeleteUserResponse) {
    /**
     * @internal
     */
    DeleteUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserResponse = exports.DeleteUserResponse || (exports.DeleteUserResponse = {}));
var DeleteUserByPrincipalIdRequest;
(function (DeleteUserByPrincipalIdRequest) {
    /**
     * @internal
     */
    DeleteUserByPrincipalIdRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserByPrincipalIdRequest = exports.DeleteUserByPrincipalIdRequest || (exports.DeleteUserByPrincipalIdRequest = {}));
var DeleteUserByPrincipalIdResponse;
(function (DeleteUserByPrincipalIdResponse) {
    /**
     * @internal
     */
    DeleteUserByPrincipalIdResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserByPrincipalIdResponse = exports.DeleteUserByPrincipalIdResponse || (exports.DeleteUserByPrincipalIdResponse = {}));
var DescribeAccountCustomizationRequest;
(function (DescribeAccountCustomizationRequest) {
    /**
     * @internal
     */
    DescribeAccountCustomizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountCustomizationRequest = exports.DescribeAccountCustomizationRequest || (exports.DescribeAccountCustomizationRequest = {}));
var DescribeAccountCustomizationResponse;
(function (DescribeAccountCustomizationResponse) {
    /**
     * @internal
     */
    DescribeAccountCustomizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountCustomizationResponse = exports.DescribeAccountCustomizationResponse || (exports.DescribeAccountCustomizationResponse = {}));
var DescribeAccountSettingsRequest;
(function (DescribeAccountSettingsRequest) {
    /**
     * @internal
     */
    DescribeAccountSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountSettingsRequest = exports.DescribeAccountSettingsRequest || (exports.DescribeAccountSettingsRequest = {}));
var DescribeAccountSettingsResponse;
(function (DescribeAccountSettingsResponse) {
    /**
     * @internal
     */
    DescribeAccountSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountSettingsResponse = exports.DescribeAccountSettingsResponse || (exports.DescribeAccountSettingsResponse = {}));
var DescribeAnalysisRequest;
(function (DescribeAnalysisRequest) {
    /**
     * @internal
     */
    DescribeAnalysisRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAnalysisRequest = exports.DescribeAnalysisRequest || (exports.DescribeAnalysisRequest = {}));
var DescribeAnalysisResponse;
(function (DescribeAnalysisResponse) {
    /**
     * @internal
     */
    DescribeAnalysisResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAnalysisResponse = exports.DescribeAnalysisResponse || (exports.DescribeAnalysisResponse = {}));
var DescribeAnalysisPermissionsRequest;
(function (DescribeAnalysisPermissionsRequest) {
    /**
     * @internal
     */
    DescribeAnalysisPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAnalysisPermissionsRequest = exports.DescribeAnalysisPermissionsRequest || (exports.DescribeAnalysisPermissionsRequest = {}));
var DescribeAnalysisPermissionsResponse;
(function (DescribeAnalysisPermissionsResponse) {
    /**
     * @internal
     */
    DescribeAnalysisPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAnalysisPermissionsResponse = exports.DescribeAnalysisPermissionsResponse || (exports.DescribeAnalysisPermissionsResponse = {}));
var DescribeDashboardRequest;
(function (DescribeDashboardRequest) {
    /**
     * @internal
     */
    DescribeDashboardRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDashboardRequest = exports.DescribeDashboardRequest || (exports.DescribeDashboardRequest = {}));
var DescribeDashboardResponse;
(function (DescribeDashboardResponse) {
    /**
     * @internal
     */
    DescribeDashboardResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDashboardResponse = exports.DescribeDashboardResponse || (exports.DescribeDashboardResponse = {}));
var DescribeDashboardPermissionsRequest;
(function (DescribeDashboardPermissionsRequest) {
    /**
     * @internal
     */
    DescribeDashboardPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDashboardPermissionsRequest = exports.DescribeDashboardPermissionsRequest || (exports.DescribeDashboardPermissionsRequest = {}));
var DescribeDashboardPermissionsResponse;
(function (DescribeDashboardPermissionsResponse) {
    /**
     * @internal
     */
    DescribeDashboardPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDashboardPermissionsResponse = exports.DescribeDashboardPermissionsResponse || (exports.DescribeDashboardPermissionsResponse = {}));
var DescribeDataSetRequest;
(function (DescribeDataSetRequest) {
    /**
     * @internal
     */
    DescribeDataSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataSetRequest = exports.DescribeDataSetRequest || (exports.DescribeDataSetRequest = {}));
var DescribeDataSetResponse;
(function (DescribeDataSetResponse) {
    /**
     * @internal
     */
    DescribeDataSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DataSet && { DataSet: DataSet.filterSensitiveLog(obj.DataSet) }),
    });
})(DescribeDataSetResponse = exports.DescribeDataSetResponse || (exports.DescribeDataSetResponse = {}));
var DescribeDataSetPermissionsRequest;
(function (DescribeDataSetPermissionsRequest) {
    /**
     * @internal
     */
    DescribeDataSetPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataSetPermissionsRequest = exports.DescribeDataSetPermissionsRequest || (exports.DescribeDataSetPermissionsRequest = {}));
var DescribeDataSetPermissionsResponse;
(function (DescribeDataSetPermissionsResponse) {
    /**
     * @internal
     */
    DescribeDataSetPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataSetPermissionsResponse = exports.DescribeDataSetPermissionsResponse || (exports.DescribeDataSetPermissionsResponse = {}));
var DescribeDataSourceRequest;
(function (DescribeDataSourceRequest) {
    /**
     * @internal
     */
    DescribeDataSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataSourceRequest = exports.DescribeDataSourceRequest || (exports.DescribeDataSourceRequest = {}));
var DescribeDataSourceResponse;
(function (DescribeDataSourceResponse) {
    /**
     * @internal
     */
    DescribeDataSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DataSource && { DataSource: DataSource.filterSensitiveLog(obj.DataSource) }),
    });
})(DescribeDataSourceResponse = exports.DescribeDataSourceResponse || (exports.DescribeDataSourceResponse = {}));
var DescribeDataSourcePermissionsRequest;
(function (DescribeDataSourcePermissionsRequest) {
    /**
     * @internal
     */
    DescribeDataSourcePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataSourcePermissionsRequest = exports.DescribeDataSourcePermissionsRequest || (exports.DescribeDataSourcePermissionsRequest = {}));
var DescribeDataSourcePermissionsResponse;
(function (DescribeDataSourcePermissionsResponse) {
    /**
     * @internal
     */
    DescribeDataSourcePermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataSourcePermissionsResponse = exports.DescribeDataSourcePermissionsResponse || (exports.DescribeDataSourcePermissionsResponse = {}));
var DescribeGroupRequest;
(function (DescribeGroupRequest) {
    /**
     * @internal
     */
    DescribeGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGroupRequest = exports.DescribeGroupRequest || (exports.DescribeGroupRequest = {}));
var DescribeGroupResponse;
(function (DescribeGroupResponse) {
    /**
     * @internal
     */
    DescribeGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGroupResponse = exports.DescribeGroupResponse || (exports.DescribeGroupResponse = {}));
var DescribeIAMPolicyAssignmentRequest;
(function (DescribeIAMPolicyAssignmentRequest) {
    /**
     * @internal
     */
    DescribeIAMPolicyAssignmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIAMPolicyAssignmentRequest = exports.DescribeIAMPolicyAssignmentRequest || (exports.DescribeIAMPolicyAssignmentRequest = {}));
var IAMPolicyAssignment;
(function (IAMPolicyAssignment) {
    /**
     * @internal
     */
    IAMPolicyAssignment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IAMPolicyAssignment = exports.IAMPolicyAssignment || (exports.IAMPolicyAssignment = {}));
var DescribeIAMPolicyAssignmentResponse;
(function (DescribeIAMPolicyAssignmentResponse) {
    /**
     * @internal
     */
    DescribeIAMPolicyAssignmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIAMPolicyAssignmentResponse = exports.DescribeIAMPolicyAssignmentResponse || (exports.DescribeIAMPolicyAssignmentResponse = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var DescribeIngestionRequest;
(function (DescribeIngestionRequest) {
    /**
     * @internal
     */
    DescribeIngestionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIngestionRequest = exports.DescribeIngestionRequest || (exports.DescribeIngestionRequest = {}));
var IngestionErrorType;
(function (IngestionErrorType) {
    IngestionErrorType["ACCOUNT_CAPACITY_LIMIT_EXCEEDED"] = "ACCOUNT_CAPACITY_LIMIT_EXCEEDED";
    IngestionErrorType["CONNECTION_FAILURE"] = "CONNECTION_FAILURE";
    IngestionErrorType["CUSTOMER_ERROR"] = "CUSTOMER_ERROR";
    IngestionErrorType["DATA_SET_DELETED"] = "DATA_SET_DELETED";
    IngestionErrorType["DATA_SET_NOT_SPICE"] = "DATA_SET_NOT_SPICE";
    IngestionErrorType["DATA_SET_SIZE_LIMIT_EXCEEDED"] = "DATA_SET_SIZE_LIMIT_EXCEEDED";
    IngestionErrorType["DATA_SOURCE_AUTH_FAILED"] = "DATA_SOURCE_AUTH_FAILED";
    IngestionErrorType["DATA_SOURCE_CONNECTION_FAILED"] = "DATA_SOURCE_CONNECTION_FAILED";
    IngestionErrorType["DATA_SOURCE_NOT_FOUND"] = "DATA_SOURCE_NOT_FOUND";
    IngestionErrorType["DATA_TOLERANCE_EXCEPTION"] = "DATA_TOLERANCE_EXCEPTION";
    IngestionErrorType["FAILURE_TO_ASSUME_ROLE"] = "FAILURE_TO_ASSUME_ROLE";
    IngestionErrorType["FAILURE_TO_PROCESS_JSON_FILE"] = "FAILURE_TO_PROCESS_JSON_FILE";
    IngestionErrorType["IAM_ROLE_NOT_AVAILABLE"] = "IAM_ROLE_NOT_AVAILABLE";
    IngestionErrorType["INGESTION_CANCELED"] = "INGESTION_CANCELED";
    IngestionErrorType["INGESTION_SUPERSEDED"] = "INGESTION_SUPERSEDED";
    IngestionErrorType["INTERNAL_SERVICE_ERROR"] = "INTERNAL_SERVICE_ERROR";
    IngestionErrorType["INVALID_DATAPREP_SYNTAX"] = "INVALID_DATAPREP_SYNTAX";
    IngestionErrorType["INVALID_DATA_SOURCE_CONFIG"] = "INVALID_DATA_SOURCE_CONFIG";
    IngestionErrorType["INVALID_DATE_FORMAT"] = "INVALID_DATE_FORMAT";
    IngestionErrorType["IOT_DATA_SET_FILE_EMPTY"] = "IOT_DATA_SET_FILE_EMPTY";
    IngestionErrorType["IOT_FILE_NOT_FOUND"] = "IOT_FILE_NOT_FOUND";
    IngestionErrorType["OAUTH_TOKEN_FAILURE"] = "OAUTH_TOKEN_FAILURE";
    IngestionErrorType["PASSWORD_AUTHENTICATION_FAILURE"] = "PASSWORD_AUTHENTICATION_FAILURE";
    IngestionErrorType["PERMISSION_DENIED"] = "PERMISSION_DENIED";
    IngestionErrorType["QUERY_TIMEOUT"] = "QUERY_TIMEOUT";
    IngestionErrorType["ROW_SIZE_LIMIT_EXCEEDED"] = "ROW_SIZE_LIMIT_EXCEEDED";
    IngestionErrorType["S3_FILE_INACCESSIBLE"] = "S3_FILE_INACCESSIBLE";
    IngestionErrorType["S3_MANIFEST_ERROR"] = "S3_MANIFEST_ERROR";
    IngestionErrorType["S3_UPLOADED_FILE_DELETED"] = "S3_UPLOADED_FILE_DELETED";
    IngestionErrorType["SOURCE_API_LIMIT_EXCEEDED_FAILURE"] = "SOURCE_API_LIMIT_EXCEEDED_FAILURE";
    IngestionErrorType["SOURCE_RESOURCE_LIMIT_EXCEEDED"] = "SOURCE_RESOURCE_LIMIT_EXCEEDED";
    IngestionErrorType["SPICE_TABLE_NOT_FOUND"] = "SPICE_TABLE_NOT_FOUND";
    IngestionErrorType["SQL_EXCEPTION"] = "SQL_EXCEPTION";
    IngestionErrorType["SQL_INVALID_PARAMETER_VALUE"] = "SQL_INVALID_PARAMETER_VALUE";
    IngestionErrorType["SQL_NUMERIC_OVERFLOW"] = "SQL_NUMERIC_OVERFLOW";
    IngestionErrorType["SQL_SCHEMA_MISMATCH_ERROR"] = "SQL_SCHEMA_MISMATCH_ERROR";
    IngestionErrorType["SQL_TABLE_NOT_FOUND"] = "SQL_TABLE_NOT_FOUND";
    IngestionErrorType["SSL_CERTIFICATE_VALIDATION_FAILURE"] = "SSL_CERTIFICATE_VALIDATION_FAILURE";
    IngestionErrorType["UNRESOLVABLE_HOST"] = "UNRESOLVABLE_HOST";
    IngestionErrorType["UNROUTABLE_HOST"] = "UNROUTABLE_HOST";
})(IngestionErrorType = exports.IngestionErrorType || (exports.IngestionErrorType = {}));
var ErrorInfo;
(function (ErrorInfo) {
    /**
     * @internal
     */
    ErrorInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorInfo = exports.ErrorInfo || (exports.ErrorInfo = {}));
var QueueInfo;
(function (QueueInfo) {
    /**
     * @internal
     */
    QueueInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueueInfo = exports.QueueInfo || (exports.QueueInfo = {}));
var IngestionRequestSource;
(function (IngestionRequestSource) {
    IngestionRequestSource["MANUAL"] = "MANUAL";
    IngestionRequestSource["SCHEDULED"] = "SCHEDULED";
})(IngestionRequestSource = exports.IngestionRequestSource || (exports.IngestionRequestSource = {}));
var IngestionRequestType;
(function (IngestionRequestType) {
    IngestionRequestType["EDIT"] = "EDIT";
    IngestionRequestType["FULL_REFRESH"] = "FULL_REFRESH";
    IngestionRequestType["INCREMENTAL_REFRESH"] = "INCREMENTAL_REFRESH";
    IngestionRequestType["INITIAL_INGESTION"] = "INITIAL_INGESTION";
})(IngestionRequestType = exports.IngestionRequestType || (exports.IngestionRequestType = {}));
var RowInfo;
(function (RowInfo) {
    /**
     * @internal
     */
    RowInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RowInfo = exports.RowInfo || (exports.RowInfo = {}));
var Ingestion;
(function (Ingestion) {
    /**
     * @internal
     */
    Ingestion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ingestion = exports.Ingestion || (exports.Ingestion = {}));
var DescribeIngestionResponse;
(function (DescribeIngestionResponse) {
    /**
     * @internal
     */
    DescribeIngestionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIngestionResponse = exports.DescribeIngestionResponse || (exports.DescribeIngestionResponse = {}));
var DescribeNamespaceRequest;
(function (DescribeNamespaceRequest) {
    /**
     * @internal
     */
    DescribeNamespaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNamespaceRequest = exports.DescribeNamespaceRequest || (exports.DescribeNamespaceRequest = {}));
var NamespaceErrorType;
(function (NamespaceErrorType) {
    NamespaceErrorType["INTERNAL_SERVICE_ERROR"] = "INTERNAL_SERVICE_ERROR";
    NamespaceErrorType["PERMISSION_DENIED"] = "PERMISSION_DENIED";
})(NamespaceErrorType = exports.NamespaceErrorType || (exports.NamespaceErrorType = {}));
var NamespaceError;
(function (NamespaceError) {
    /**
     * @internal
     */
    NamespaceError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NamespaceError = exports.NamespaceError || (exports.NamespaceError = {}));
var NamespaceInfoV2;
(function (NamespaceInfoV2) {
    /**
     * @internal
     */
    NamespaceInfoV2.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NamespaceInfoV2 = exports.NamespaceInfoV2 || (exports.NamespaceInfoV2 = {}));
var DescribeNamespaceResponse;
(function (DescribeNamespaceResponse) {
    /**
     * @internal
     */
    DescribeNamespaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNamespaceResponse = exports.DescribeNamespaceResponse || (exports.DescribeNamespaceResponse = {}));
var DescribeTemplateRequest;
(function (DescribeTemplateRequest) {
    /**
     * @internal
     */
    DescribeTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTemplateRequest = exports.DescribeTemplateRequest || (exports.DescribeTemplateRequest = {}));
var TemplateErrorType;
(function (TemplateErrorType) {
    TemplateErrorType["ACCESS_DENIED"] = "ACCESS_DENIED";
    TemplateErrorType["DATA_SET_NOT_FOUND"] = "DATA_SET_NOT_FOUND";
    TemplateErrorType["INTERNAL_FAILURE"] = "INTERNAL_FAILURE";
    TemplateErrorType["SOURCE_NOT_FOUND"] = "SOURCE_NOT_FOUND";
})(TemplateErrorType = exports.TemplateErrorType || (exports.TemplateErrorType = {}));
var TemplateError;
(function (TemplateError) {
    /**
     * @internal
     */
    TemplateError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateError = exports.TemplateError || (exports.TemplateError = {}));
var TemplateVersion;
(function (TemplateVersion) {
    /**
     * @internal
     */
    TemplateVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateVersion = exports.TemplateVersion || (exports.TemplateVersion = {}));
var Template;
(function (Template) {
    /**
     * @internal
     */
    Template.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Template = exports.Template || (exports.Template = {}));
var DescribeTemplateResponse;
(function (DescribeTemplateResponse) {
    /**
     * @internal
     */
    DescribeTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTemplateResponse = exports.DescribeTemplateResponse || (exports.DescribeTemplateResponse = {}));
var DescribeTemplateAliasRequest;
(function (DescribeTemplateAliasRequest) {
    /**
     * @internal
     */
    DescribeTemplateAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTemplateAliasRequest = exports.DescribeTemplateAliasRequest || (exports.DescribeTemplateAliasRequest = {}));
var DescribeTemplateAliasResponse;
(function (DescribeTemplateAliasResponse) {
    /**
     * @internal
     */
    DescribeTemplateAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTemplateAliasResponse = exports.DescribeTemplateAliasResponse || (exports.DescribeTemplateAliasResponse = {}));
var DescribeTemplatePermissionsRequest;
(function (DescribeTemplatePermissionsRequest) {
    /**
     * @internal
     */
    DescribeTemplatePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTemplatePermissionsRequest = exports.DescribeTemplatePermissionsRequest || (exports.DescribeTemplatePermissionsRequest = {}));
var DescribeTemplatePermissionsResponse;
(function (DescribeTemplatePermissionsResponse) {
    /**
     * @internal
     */
    DescribeTemplatePermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTemplatePermissionsResponse = exports.DescribeTemplatePermissionsResponse || (exports.DescribeTemplatePermissionsResponse = {}));
var DescribeThemeRequest;
(function (DescribeThemeRequest) {
    /**
     * @internal
     */
    DescribeThemeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThemeRequest = exports.DescribeThemeRequest || (exports.DescribeThemeRequest = {}));
var ThemeType;
(function (ThemeType) {
    ThemeType["ALL"] = "ALL";
    ThemeType["CUSTOM"] = "CUSTOM";
    ThemeType["QUICKSIGHT"] = "QUICKSIGHT";
})(ThemeType = exports.ThemeType || (exports.ThemeType = {}));
var ThemeErrorType;
(function (ThemeErrorType) {
    ThemeErrorType["INTERNAL_FAILURE"] = "INTERNAL_FAILURE";
})(ThemeErrorType = exports.ThemeErrorType || (exports.ThemeErrorType = {}));
var ThemeError;
(function (ThemeError) {
    /**
     * @internal
     */
    ThemeError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThemeError = exports.ThemeError || (exports.ThemeError = {}));
var ThemeVersion;
(function (ThemeVersion) {
    /**
     * @internal
     */
    ThemeVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThemeVersion = exports.ThemeVersion || (exports.ThemeVersion = {}));
var Theme;
(function (Theme) {
    /**
     * @internal
     */
    Theme.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Theme = exports.Theme || (exports.Theme = {}));
var DescribeThemeResponse;
(function (DescribeThemeResponse) {
    /**
     * @internal
     */
    DescribeThemeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThemeResponse = exports.DescribeThemeResponse || (exports.DescribeThemeResponse = {}));
var DescribeThemeAliasRequest;
(function (DescribeThemeAliasRequest) {
    /**
     * @internal
     */
    DescribeThemeAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThemeAliasRequest = exports.DescribeThemeAliasRequest || (exports.DescribeThemeAliasRequest = {}));
var DescribeThemeAliasResponse;
(function (DescribeThemeAliasResponse) {
    /**
     * @internal
     */
    DescribeThemeAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThemeAliasResponse = exports.DescribeThemeAliasResponse || (exports.DescribeThemeAliasResponse = {}));
var DescribeThemePermissionsRequest;
(function (DescribeThemePermissionsRequest) {
    /**
     * @internal
     */
    DescribeThemePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThemePermissionsRequest = exports.DescribeThemePermissionsRequest || (exports.DescribeThemePermissionsRequest = {}));
var DescribeThemePermissionsResponse;
(function (DescribeThemePermissionsResponse) {
    /**
     * @internal
     */
    DescribeThemePermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThemePermissionsResponse = exports.DescribeThemePermissionsResponse || (exports.DescribeThemePermissionsResponse = {}));
var DescribeUserRequest;
(function (DescribeUserRequest) {
    /**
     * @internal
     */
    DescribeUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserRequest = exports.DescribeUserRequest || (exports.DescribeUserRequest = {}));
var IdentityType;
(function (IdentityType) {
    IdentityType["IAM"] = "IAM";
    IdentityType["QUICKSIGHT"] = "QUICKSIGHT";
})(IdentityType = exports.IdentityType || (exports.IdentityType = {}));
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["AUTHOR"] = "AUTHOR";
    UserRole["READER"] = "READER";
    UserRole["RESTRICTED_AUTHOR"] = "RESTRICTED_AUTHOR";
    UserRole["RESTRICTED_READER"] = "RESTRICTED_READER";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var User;
(function (User) {
    /**
     * @internal
     */
    User.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(User = exports.User || (exports.User = {}));
var DescribeUserResponse;
(function (DescribeUserResponse) {
    /**
     * @internal
     */
    DescribeUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserResponse = exports.DescribeUserResponse || (exports.DescribeUserResponse = {}));
var DomainNotWhitelistedException;
(function (DomainNotWhitelistedException) {
    /**
     * @internal
     */
    DomainNotWhitelistedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainNotWhitelistedException = exports.DomainNotWhitelistedException || (exports.DomainNotWhitelistedException = {}));
var EmbeddingIdentityType;
(function (EmbeddingIdentityType) {
    EmbeddingIdentityType["ANONYMOUS"] = "ANONYMOUS";
    EmbeddingIdentityType["IAM"] = "IAM";
    EmbeddingIdentityType["QUICKSIGHT"] = "QUICKSIGHT";
})(EmbeddingIdentityType = exports.EmbeddingIdentityType || (exports.EmbeddingIdentityType = {}));
var GetDashboardEmbedUrlRequest;
(function (GetDashboardEmbedUrlRequest) {
    /**
     * @internal
     */
    GetDashboardEmbedUrlRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDashboardEmbedUrlRequest = exports.GetDashboardEmbedUrlRequest || (exports.GetDashboardEmbedUrlRequest = {}));
var GetDashboardEmbedUrlResponse;
(function (GetDashboardEmbedUrlResponse) {
    /**
     * @internal
     */
    GetDashboardEmbedUrlResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.EmbedUrl && { EmbedUrl: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetDashboardEmbedUrlResponse = exports.GetDashboardEmbedUrlResponse || (exports.GetDashboardEmbedUrlResponse = {}));
var IdentityTypeNotSupportedException;
(function (IdentityTypeNotSupportedException) {
    /**
     * @internal
     */
    IdentityTypeNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityTypeNotSupportedException = exports.IdentityTypeNotSupportedException || (exports.IdentityTypeNotSupportedException = {}));
var QuickSightUserNotFoundException;
(function (QuickSightUserNotFoundException) {
    /**
     * @internal
     */
    QuickSightUserNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QuickSightUserNotFoundException = exports.QuickSightUserNotFoundException || (exports.QuickSightUserNotFoundException = {}));
var SessionLifetimeInMinutesInvalidException;
(function (SessionLifetimeInMinutesInvalidException) {
    /**
     * @internal
     */
    SessionLifetimeInMinutesInvalidException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SessionLifetimeInMinutesInvalidException = exports.SessionLifetimeInMinutesInvalidException || (exports.SessionLifetimeInMinutesInvalidException = {}));
var UnsupportedPricingPlanException;
(function (UnsupportedPricingPlanException) {
    /**
     * @internal
     */
    UnsupportedPricingPlanException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedPricingPlanException = exports.UnsupportedPricingPlanException || (exports.UnsupportedPricingPlanException = {}));
var GetSessionEmbedUrlRequest;
(function (GetSessionEmbedUrlRequest) {
    /**
     * @internal
     */
    GetSessionEmbedUrlRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSessionEmbedUrlRequest = exports.GetSessionEmbedUrlRequest || (exports.GetSessionEmbedUrlRequest = {}));
var GetSessionEmbedUrlResponse;
(function (GetSessionEmbedUrlResponse) {
    /**
     * @internal
     */
    GetSessionEmbedUrlResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.EmbedUrl && { EmbedUrl: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetSessionEmbedUrlResponse = exports.GetSessionEmbedUrlResponse || (exports.GetSessionEmbedUrlResponse = {}));
var IAMPolicyAssignmentSummary;
(function (IAMPolicyAssignmentSummary) {
    /**
     * @internal
     */
    IAMPolicyAssignmentSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IAMPolicyAssignmentSummary = exports.IAMPolicyAssignmentSummary || (exports.IAMPolicyAssignmentSummary = {}));
var ListAnalysesRequest;
(function (ListAnalysesRequest) {
    /**
     * @internal
     */
    ListAnalysesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAnalysesRequest = exports.ListAnalysesRequest || (exports.ListAnalysesRequest = {}));
var ListAnalysesResponse;
(function (ListAnalysesResponse) {
    /**
     * @internal
     */
    ListAnalysesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAnalysesResponse = exports.ListAnalysesResponse || (exports.ListAnalysesResponse = {}));
var ListDashboardsRequest;
(function (ListDashboardsRequest) {
    /**
     * @internal
     */
    ListDashboardsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDashboardsRequest = exports.ListDashboardsRequest || (exports.ListDashboardsRequest = {}));
var ListDashboardsResponse;
(function (ListDashboardsResponse) {
    /**
     * @internal
     */
    ListDashboardsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDashboardsResponse = exports.ListDashboardsResponse || (exports.ListDashboardsResponse = {}));
var ListDashboardVersionsRequest;
(function (ListDashboardVersionsRequest) {
    /**
     * @internal
     */
    ListDashboardVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDashboardVersionsRequest = exports.ListDashboardVersionsRequest || (exports.ListDashboardVersionsRequest = {}));
var ListDashboardVersionsResponse;
(function (ListDashboardVersionsResponse) {
    /**
     * @internal
     */
    ListDashboardVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDashboardVersionsResponse = exports.ListDashboardVersionsResponse || (exports.ListDashboardVersionsResponse = {}));
var ListDataSetsRequest;
(function (ListDataSetsRequest) {
    /**
     * @internal
     */
    ListDataSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataSetsRequest = exports.ListDataSetsRequest || (exports.ListDataSetsRequest = {}));
var ListDataSetsResponse;
(function (ListDataSetsResponse) {
    /**
     * @internal
     */
    ListDataSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataSetsResponse = exports.ListDataSetsResponse || (exports.ListDataSetsResponse = {}));
var ListDataSourcesRequest;
(function (ListDataSourcesRequest) {
    /**
     * @internal
     */
    ListDataSourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataSourcesRequest = exports.ListDataSourcesRequest || (exports.ListDataSourcesRequest = {}));
var ListDataSourcesResponse;
(function (ListDataSourcesResponse) {
    /**
     * @internal
     */
    ListDataSourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DataSources && { DataSources: obj.DataSources.map((item) => DataSource.filterSensitiveLog(item)) }),
    });
})(ListDataSourcesResponse = exports.ListDataSourcesResponse || (exports.ListDataSourcesResponse = {}));
var ListGroupMembershipsRequest;
(function (ListGroupMembershipsRequest) {
    /**
     * @internal
     */
    ListGroupMembershipsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupMembershipsRequest = exports.ListGroupMembershipsRequest || (exports.ListGroupMembershipsRequest = {}));
var ListGroupMembershipsResponse;
(function (ListGroupMembershipsResponse) {
    /**
     * @internal
     */
    ListGroupMembershipsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupMembershipsResponse = exports.ListGroupMembershipsResponse || (exports.ListGroupMembershipsResponse = {}));
var ListGroupsRequest;
(function (ListGroupsRequest) {
    /**
     * @internal
     */
    ListGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsRequest = exports.ListGroupsRequest || (exports.ListGroupsRequest = {}));
var ListGroupsResponse;
(function (ListGroupsResponse) {
    /**
     * @internal
     */
    ListGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsResponse = exports.ListGroupsResponse || (exports.ListGroupsResponse = {}));
var ListIAMPolicyAssignmentsRequest;
(function (ListIAMPolicyAssignmentsRequest) {
    /**
     * @internal
     */
    ListIAMPolicyAssignmentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIAMPolicyAssignmentsRequest = exports.ListIAMPolicyAssignmentsRequest || (exports.ListIAMPolicyAssignmentsRequest = {}));
var ListIAMPolicyAssignmentsResponse;
(function (ListIAMPolicyAssignmentsResponse) {
    /**
     * @internal
     */
    ListIAMPolicyAssignmentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIAMPolicyAssignmentsResponse = exports.ListIAMPolicyAssignmentsResponse || (exports.ListIAMPolicyAssignmentsResponse = {}));
var ListIAMPolicyAssignmentsForUserRequest;
(function (ListIAMPolicyAssignmentsForUserRequest) {
    /**
     * @internal
     */
    ListIAMPolicyAssignmentsForUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIAMPolicyAssignmentsForUserRequest = exports.ListIAMPolicyAssignmentsForUserRequest || (exports.ListIAMPolicyAssignmentsForUserRequest = {}));
var ListIAMPolicyAssignmentsForUserResponse;
(function (ListIAMPolicyAssignmentsForUserResponse) {
    /**
     * @internal
     */
    ListIAMPolicyAssignmentsForUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIAMPolicyAssignmentsForUserResponse = exports.ListIAMPolicyAssignmentsForUserResponse || (exports.ListIAMPolicyAssignmentsForUserResponse = {}));
//# sourceMappingURL=models_0.js.map