"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.CreateEndpointMessage = exports.SybaseSettings = exports.DmsSslModeValue = exports.S3Settings = exports.ParquetVersionValue = exports.EncodingTypeValue = exports.DatePartitionSequenceValue = exports.DatePartitionDelimiterValue = exports.DataFormatValue = exports.CompressionTypeValue = exports.RedshiftSettings = exports.EncryptionModeValue = exports.PostgreSQLSettings = exports.OracleSettings = exports.CharLengthSemantics = exports.NeptuneSettings = exports.MySQLSettings = exports.TargetDbType = exports.MongoDbSettings = exports.AuthTypeValue = exports.AuthMechanismValue = exports.MicrosoftSQLServerSettings = exports.SafeguardPolicy = exports.KinesisSettings = exports.KafkaSettings = exports.KafkaSecurityProtocol = exports.MessageFormatValue = exports.IBMDb2Settings = exports.ReplicationEndpointTypeValue = exports.ElasticsearchSettings = exports.DynamoDbSettings = exports.DocDbSettings = exports.NestingLevelValue = exports.DmsTransferSettings = exports.InvalidResourceStateFault = exports.CancelReplicationTaskAssessmentRunResponse = exports.ReplicationTaskAssessmentRun = exports.ReplicationTaskAssessmentRunProgress = exports.CancelReplicationTaskAssessmentRunMessage = exports.ApplyPendingMaintenanceActionResponse = exports.ResourcePendingMaintenanceActions = exports.PendingMaintenanceAction = exports.ApplyPendingMaintenanceActionMessage = exports.ResourceNotFoundFault = exports.AddTagsToResourceResponse = exports.AddTagsToResourceMessage = exports.Tag = exports.AccountQuota = exports.AccessDeniedFault = void 0;
exports.DeleteReplicationTaskResponse = exports.DeleteReplicationTaskMessage = exports.DeleteReplicationSubnetGroupResponse = exports.DeleteReplicationSubnetGroupMessage = exports.DeleteReplicationInstanceResponse = exports.DeleteReplicationInstanceMessage = exports.DeleteEventSubscriptionResponse = exports.DeleteEventSubscriptionMessage = exports.DeleteEndpointResponse = exports.DeleteEndpointMessage = exports.DeleteConnectionResponse = exports.Connection = exports.DeleteConnectionMessage = exports.DeleteCertificateResponse = exports.Certificate = exports.DeleteCertificateMessage = exports.CreateReplicationTaskResponse = exports.ReplicationTask = exports.ReplicationTaskStats = exports.CreateReplicationTaskMessage = exports.MigrationTypeValue = exports.CreateReplicationSubnetGroupResponse = exports.CreateReplicationSubnetGroupMessage = exports.StorageQuotaExceededFault = exports.ReplicationSubnetGroupDoesNotCoverEnoughAZs = exports.InvalidSubnet = exports.InsufficientResourceCapacityFault = exports.CreateReplicationInstanceResponse = exports.ReplicationInstance = exports.VpcSecurityGroupMembership = exports.ReplicationSubnetGroup = exports.Subnet = exports.AvailabilityZone = exports.ReplicationPendingModifiedValues = exports.CreateReplicationInstanceMessage = exports.SNSNoAuthorizationFault = exports.SNSInvalidTopicFault = exports.KMSThrottlingFault = exports.KMSNotFoundFault = exports.KMSInvalidStateFault = exports.KMSDisabledFault = exports.KMSAccessDeniedFault = exports.CreateEventSubscriptionResponse = exports.EventSubscription = exports.CreateEventSubscriptionMessage = exports.S3AccessDeniedFault = exports.ResourceQuotaExceededFault = exports.ResourceAlreadyExistsFault = exports.KMSKeyNotAccessibleFault = exports.CreateEndpointResponse = void 0;
exports.DescribeReplicationTaskAssessmentRunsResponse = exports.DescribeReplicationTaskAssessmentRunsMessage = exports.DescribeReplicationTaskAssessmentResultsResponse = exports.ReplicationTaskAssessmentResult = exports.DescribeReplicationTaskAssessmentResultsMessage = exports.DescribeReplicationSubnetGroupsResponse = exports.DescribeReplicationSubnetGroupsMessage = exports.DescribeReplicationInstanceTaskLogsResponse = exports.ReplicationInstanceTaskLog = exports.DescribeReplicationInstanceTaskLogsMessage = exports.DescribeReplicationInstancesResponse = exports.DescribeReplicationInstancesMessage = exports.DescribeRefreshSchemasStatusResponse = exports.RefreshSchemasStatus = exports.RefreshSchemasStatusTypeValue = exports.DescribeRefreshSchemasStatusMessage = exports.DescribePendingMaintenanceActionsResponse = exports.DescribePendingMaintenanceActionsMessage = exports.DescribeOrderableReplicationInstancesResponse = exports.OrderableReplicationInstance = exports.ReleaseStatusValues = exports.DescribeOrderableReplicationInstancesMessage = exports.DescribeEventSubscriptionsResponse = exports.DescribeEventSubscriptionsMessage = exports.DescribeEventsResponse = exports.Event = exports.DescribeEventsMessage = exports.DescribeEventCategoriesResponse = exports.EventCategoryGroup = exports.DescribeEventCategoriesMessage = exports.DescribeEndpointTypesResponse = exports.SupportedEndpointType = exports.DescribeEndpointTypesMessage = exports.DescribeEndpointSettingsResponse = exports.EndpointSetting = exports.EndpointSettingTypeValue = exports.DescribeEndpointSettingsMessage = exports.DescribeEndpointsResponse = exports.DescribeEndpointsMessage = exports.DescribeConnectionsResponse = exports.DescribeConnectionsMessage = exports.DescribeCertificatesResponse = exports.DescribeCertificatesMessage = exports.Filter = exports.DescribeApplicableIndividualAssessmentsResponse = exports.DescribeApplicableIndividualAssessmentsMessage = exports.DescribeAccountAttributesResponse = exports.DescribeAccountAttributesMessage = exports.DeleteReplicationTaskAssessmentRunResponse = exports.DeleteReplicationTaskAssessmentRunMessage = void 0;
exports.StopReplicationTaskResponse = exports.StopReplicationTaskMessage = exports.StartReplicationTaskAssessmentRunResponse = exports.StartReplicationTaskAssessmentRunMessage = exports.S3ResourceNotFoundFault = exports.KMSFault = exports.StartReplicationTaskAssessmentResponse = exports.StartReplicationTaskAssessmentMessage = exports.StartReplicationTaskResponse = exports.StartReplicationTaskMessage = exports.StartReplicationTaskTypeValue = exports.RemoveTagsFromResourceResponse = exports.RemoveTagsFromResourceMessage = exports.ReloadTablesResponse = exports.ReloadTablesMessage = exports.TableToReload = exports.ReloadOptionValue = exports.RefreshSchemasResponse = exports.RefreshSchemasMessage = exports.RebootReplicationInstanceResponse = exports.RebootReplicationInstanceMessage = exports.MoveReplicationTaskResponse = exports.MoveReplicationTaskMessage = exports.ModifyReplicationTaskResponse = exports.ModifyReplicationTaskMessage = exports.SubnetAlreadyInUse = exports.ModifyReplicationSubnetGroupResponse = exports.ModifyReplicationSubnetGroupMessage = exports.UpgradeDependencyFailureFault = exports.ModifyReplicationInstanceResponse = exports.ModifyReplicationInstanceMessage = exports.ModifyEventSubscriptionResponse = exports.ModifyEventSubscriptionMessage = exports.ModifyEndpointResponse = exports.ModifyEndpointMessage = exports.ListTagsForResourceResponse = exports.ListTagsForResourceMessage = exports.InvalidCertificateFault = exports.ImportCertificateResponse = exports.ImportCertificateMessage = exports.DescribeTableStatisticsResponse = exports.TableStatistics = exports.DescribeTableStatisticsMessage = exports.DescribeSchemasResponse = exports.DescribeSchemasMessage = exports.DescribeReplicationTasksResponse = exports.DescribeReplicationTasksMessage = exports.DescribeReplicationTaskIndividualAssessmentsResponse = exports.ReplicationTaskIndividualAssessment = exports.DescribeReplicationTaskIndividualAssessmentsMessage = void 0;
exports.TestConnectionResponse = exports.TestConnectionMessage = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedFault;
(function (AccessDeniedFault) {
    /**
     * @internal
     */
    AccessDeniedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedFault = exports.AccessDeniedFault || (exports.AccessDeniedFault = {}));
var AccountQuota;
(function (AccountQuota) {
    /**
     * @internal
     */
    AccountQuota.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountQuota = exports.AccountQuota || (exports.AccountQuota = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AddTagsToResourceMessage;
(function (AddTagsToResourceMessage) {
    /**
     * @internal
     */
    AddTagsToResourceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToResourceMessage = exports.AddTagsToResourceMessage || (exports.AddTagsToResourceMessage = {}));
var AddTagsToResourceResponse;
(function (AddTagsToResourceResponse) {
    /**
     * @internal
     */
    AddTagsToResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToResourceResponse = exports.AddTagsToResourceResponse || (exports.AddTagsToResourceResponse = {}));
var ResourceNotFoundFault;
(function (ResourceNotFoundFault) {
    /**
     * @internal
     */
    ResourceNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundFault = exports.ResourceNotFoundFault || (exports.ResourceNotFoundFault = {}));
var ApplyPendingMaintenanceActionMessage;
(function (ApplyPendingMaintenanceActionMessage) {
    /**
     * @internal
     */
    ApplyPendingMaintenanceActionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplyPendingMaintenanceActionMessage = exports.ApplyPendingMaintenanceActionMessage || (exports.ApplyPendingMaintenanceActionMessage = {}));
var PendingMaintenanceAction;
(function (PendingMaintenanceAction) {
    /**
     * @internal
     */
    PendingMaintenanceAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingMaintenanceAction = exports.PendingMaintenanceAction || (exports.PendingMaintenanceAction = {}));
var ResourcePendingMaintenanceActions;
(function (ResourcePendingMaintenanceActions) {
    /**
     * @internal
     */
    ResourcePendingMaintenanceActions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourcePendingMaintenanceActions = exports.ResourcePendingMaintenanceActions || (exports.ResourcePendingMaintenanceActions = {}));
var ApplyPendingMaintenanceActionResponse;
(function (ApplyPendingMaintenanceActionResponse) {
    /**
     * @internal
     */
    ApplyPendingMaintenanceActionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplyPendingMaintenanceActionResponse = exports.ApplyPendingMaintenanceActionResponse || (exports.ApplyPendingMaintenanceActionResponse = {}));
var CancelReplicationTaskAssessmentRunMessage;
(function (CancelReplicationTaskAssessmentRunMessage) {
    /**
     * @internal
     */
    CancelReplicationTaskAssessmentRunMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelReplicationTaskAssessmentRunMessage = exports.CancelReplicationTaskAssessmentRunMessage || (exports.CancelReplicationTaskAssessmentRunMessage = {}));
var ReplicationTaskAssessmentRunProgress;
(function (ReplicationTaskAssessmentRunProgress) {
    /**
     * @internal
     */
    ReplicationTaskAssessmentRunProgress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationTaskAssessmentRunProgress = exports.ReplicationTaskAssessmentRunProgress || (exports.ReplicationTaskAssessmentRunProgress = {}));
var ReplicationTaskAssessmentRun;
(function (ReplicationTaskAssessmentRun) {
    /**
     * @internal
     */
    ReplicationTaskAssessmentRun.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationTaskAssessmentRun = exports.ReplicationTaskAssessmentRun || (exports.ReplicationTaskAssessmentRun = {}));
var CancelReplicationTaskAssessmentRunResponse;
(function (CancelReplicationTaskAssessmentRunResponse) {
    /**
     * @internal
     */
    CancelReplicationTaskAssessmentRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelReplicationTaskAssessmentRunResponse = exports.CancelReplicationTaskAssessmentRunResponse || (exports.CancelReplicationTaskAssessmentRunResponse = {}));
var InvalidResourceStateFault;
(function (InvalidResourceStateFault) {
    /**
     * @internal
     */
    InvalidResourceStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResourceStateFault = exports.InvalidResourceStateFault || (exports.InvalidResourceStateFault = {}));
var DmsTransferSettings;
(function (DmsTransferSettings) {
    /**
     * @internal
     */
    DmsTransferSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DmsTransferSettings = exports.DmsTransferSettings || (exports.DmsTransferSettings = {}));
var NestingLevelValue;
(function (NestingLevelValue) {
    NestingLevelValue["NONE"] = "none";
    NestingLevelValue["ONE"] = "one";
})(NestingLevelValue = exports.NestingLevelValue || (exports.NestingLevelValue = {}));
var DocDbSettings;
(function (DocDbSettings) {
    /**
     * @internal
     */
    DocDbSettings.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(DocDbSettings = exports.DocDbSettings || (exports.DocDbSettings = {}));
var DynamoDbSettings;
(function (DynamoDbSettings) {
    /**
     * @internal
     */
    DynamoDbSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DynamoDbSettings = exports.DynamoDbSettings || (exports.DynamoDbSettings = {}));
var ElasticsearchSettings;
(function (ElasticsearchSettings) {
    /**
     * @internal
     */
    ElasticsearchSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticsearchSettings = exports.ElasticsearchSettings || (exports.ElasticsearchSettings = {}));
var ReplicationEndpointTypeValue;
(function (ReplicationEndpointTypeValue) {
    ReplicationEndpointTypeValue["SOURCE"] = "source";
    ReplicationEndpointTypeValue["TARGET"] = "target";
})(ReplicationEndpointTypeValue = exports.ReplicationEndpointTypeValue || (exports.ReplicationEndpointTypeValue = {}));
var IBMDb2Settings;
(function (IBMDb2Settings) {
    /**
     * @internal
     */
    IBMDb2Settings.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(IBMDb2Settings = exports.IBMDb2Settings || (exports.IBMDb2Settings = {}));
var MessageFormatValue;
(function (MessageFormatValue) {
    MessageFormatValue["JSON"] = "json";
    MessageFormatValue["JSON_UNFORMATTED"] = "json-unformatted";
})(MessageFormatValue = exports.MessageFormatValue || (exports.MessageFormatValue = {}));
var KafkaSecurityProtocol;
(function (KafkaSecurityProtocol) {
    KafkaSecurityProtocol["PLAINTEXT"] = "plaintext";
    KafkaSecurityProtocol["SASL_SSL"] = "sasl-ssl";
    KafkaSecurityProtocol["SSL_AUTHENTICATION"] = "ssl-authentication";
    KafkaSecurityProtocol["SSL_ENCRYPTION"] = "ssl-encryption";
})(KafkaSecurityProtocol = exports.KafkaSecurityProtocol || (exports.KafkaSecurityProtocol = {}));
var KafkaSettings;
(function (KafkaSettings) {
    /**
     * @internal
     */
    KafkaSettings.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SslClientKeyPassword && { SslClientKeyPassword: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SaslPassword && { SaslPassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(KafkaSettings = exports.KafkaSettings || (exports.KafkaSettings = {}));
var KinesisSettings;
(function (KinesisSettings) {
    /**
     * @internal
     */
    KinesisSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisSettings = exports.KinesisSettings || (exports.KinesisSettings = {}));
var SafeguardPolicy;
(function (SafeguardPolicy) {
    SafeguardPolicy["EXCLUSIVE_AUTOMATIC_TRUNCATION"] = "exclusive-automatic-truncation";
    SafeguardPolicy["RELY_ON_SQL_SERVER_REPLICATION_AGENT"] = "rely-on-sql-server-replication-agent";
    SafeguardPolicy["SHARED_AUTOMATIC_TRUNCATION"] = "shared-automatic-truncation";
})(SafeguardPolicy = exports.SafeguardPolicy || (exports.SafeguardPolicy = {}));
var MicrosoftSQLServerSettings;
(function (MicrosoftSQLServerSettings) {
    /**
     * @internal
     */
    MicrosoftSQLServerSettings.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(MicrosoftSQLServerSettings = exports.MicrosoftSQLServerSettings || (exports.MicrosoftSQLServerSettings = {}));
var AuthMechanismValue;
(function (AuthMechanismValue) {
    AuthMechanismValue["DEFAULT"] = "default";
    AuthMechanismValue["MONGODB_CR"] = "mongodb_cr";
    AuthMechanismValue["SCRAM_SHA_1"] = "scram_sha_1";
})(AuthMechanismValue = exports.AuthMechanismValue || (exports.AuthMechanismValue = {}));
var AuthTypeValue;
(function (AuthTypeValue) {
    AuthTypeValue["NO"] = "no";
    AuthTypeValue["PASSWORD"] = "password";
})(AuthTypeValue = exports.AuthTypeValue || (exports.AuthTypeValue = {}));
var MongoDbSettings;
(function (MongoDbSettings) {
    /**
     * @internal
     */
    MongoDbSettings.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(MongoDbSettings = exports.MongoDbSettings || (exports.MongoDbSettings = {}));
var TargetDbType;
(function (TargetDbType) {
    TargetDbType["MULTIPLE_DATABASES"] = "multiple-databases";
    TargetDbType["SPECIFIC_DATABASE"] = "specific-database";
})(TargetDbType = exports.TargetDbType || (exports.TargetDbType = {}));
var MySQLSettings;
(function (MySQLSettings) {
    /**
     * @internal
     */
    MySQLSettings.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(MySQLSettings = exports.MySQLSettings || (exports.MySQLSettings = {}));
var NeptuneSettings;
(function (NeptuneSettings) {
    /**
     * @internal
     */
    NeptuneSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NeptuneSettings = exports.NeptuneSettings || (exports.NeptuneSettings = {}));
var CharLengthSemantics;
(function (CharLengthSemantics) {
    CharLengthSemantics["BYTE"] = "byte";
    CharLengthSemantics["CHAR"] = "char";
    CharLengthSemantics["DEFAULT"] = "default";
})(CharLengthSemantics = exports.CharLengthSemantics || (exports.CharLengthSemantics = {}));
var OracleSettings;
(function (OracleSettings) {
    /**
     * @internal
     */
    OracleSettings.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AsmPassword && { AsmPassword: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SecurityDbEncryption && { SecurityDbEncryption: smithy_client_1.SENSITIVE_STRING }),
    });
})(OracleSettings = exports.OracleSettings || (exports.OracleSettings = {}));
var PostgreSQLSettings;
(function (PostgreSQLSettings) {
    /**
     * @internal
     */
    PostgreSQLSettings.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(PostgreSQLSettings = exports.PostgreSQLSettings || (exports.PostgreSQLSettings = {}));
var EncryptionModeValue;
(function (EncryptionModeValue) {
    EncryptionModeValue["SSE_KMS"] = "sse-kms";
    EncryptionModeValue["SSE_S3"] = "sse-s3";
})(EncryptionModeValue = exports.EncryptionModeValue || (exports.EncryptionModeValue = {}));
var RedshiftSettings;
(function (RedshiftSettings) {
    /**
     * @internal
     */
    RedshiftSettings.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(RedshiftSettings = exports.RedshiftSettings || (exports.RedshiftSettings = {}));
var CompressionTypeValue;
(function (CompressionTypeValue) {
    CompressionTypeValue["GZIP"] = "gzip";
    CompressionTypeValue["NONE"] = "none";
})(CompressionTypeValue = exports.CompressionTypeValue || (exports.CompressionTypeValue = {}));
var DataFormatValue;
(function (DataFormatValue) {
    DataFormatValue["CSV"] = "csv";
    DataFormatValue["PARQUET"] = "parquet";
})(DataFormatValue = exports.DataFormatValue || (exports.DataFormatValue = {}));
var DatePartitionDelimiterValue;
(function (DatePartitionDelimiterValue) {
    DatePartitionDelimiterValue["DASH"] = "DASH";
    DatePartitionDelimiterValue["NONE"] = "NONE";
    DatePartitionDelimiterValue["SLASH"] = "SLASH";
    DatePartitionDelimiterValue["UNDERSCORE"] = "UNDERSCORE";
})(DatePartitionDelimiterValue = exports.DatePartitionDelimiterValue || (exports.DatePartitionDelimiterValue = {}));
var DatePartitionSequenceValue;
(function (DatePartitionSequenceValue) {
    DatePartitionSequenceValue["DDMMYYYY"] = "DDMMYYYY";
    DatePartitionSequenceValue["MMYYYYDD"] = "MMYYYYDD";
    DatePartitionSequenceValue["YYYYMM"] = "YYYYMM";
    DatePartitionSequenceValue["YYYYMMDD"] = "YYYYMMDD";
    DatePartitionSequenceValue["YYYYMMDDHH"] = "YYYYMMDDHH";
})(DatePartitionSequenceValue = exports.DatePartitionSequenceValue || (exports.DatePartitionSequenceValue = {}));
var EncodingTypeValue;
(function (EncodingTypeValue) {
    EncodingTypeValue["PLAIN"] = "plain";
    EncodingTypeValue["PLAIN_DICTIONARY"] = "plain-dictionary";
    EncodingTypeValue["RLE_DICTIONARY"] = "rle-dictionary";
})(EncodingTypeValue = exports.EncodingTypeValue || (exports.EncodingTypeValue = {}));
var ParquetVersionValue;
(function (ParquetVersionValue) {
    ParquetVersionValue["PARQUET_1_0"] = "parquet-1-0";
    ParquetVersionValue["PARQUET_2_0"] = "parquet-2-0";
})(ParquetVersionValue = exports.ParquetVersionValue || (exports.ParquetVersionValue = {}));
var S3Settings;
(function (S3Settings) {
    /**
     * @internal
     */
    S3Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Settings = exports.S3Settings || (exports.S3Settings = {}));
var DmsSslModeValue;
(function (DmsSslModeValue) {
    DmsSslModeValue["NONE"] = "none";
    DmsSslModeValue["REQUIRE"] = "require";
    DmsSslModeValue["VERIFY_CA"] = "verify-ca";
    DmsSslModeValue["VERIFY_FULL"] = "verify-full";
})(DmsSslModeValue = exports.DmsSslModeValue || (exports.DmsSslModeValue = {}));
var SybaseSettings;
(function (SybaseSettings) {
    /**
     * @internal
     */
    SybaseSettings.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(SybaseSettings = exports.SybaseSettings || (exports.SybaseSettings = {}));
var CreateEndpointMessage;
(function (CreateEndpointMessage) {
    /**
     * @internal
     */
    CreateEndpointMessage.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.MongoDbSettings && { MongoDbSettings: MongoDbSettings.filterSensitiveLog(obj.MongoDbSettings) }),
        ...(obj.KafkaSettings && { KafkaSettings: KafkaSettings.filterSensitiveLog(obj.KafkaSettings) }),
        ...(obj.RedshiftSettings && { RedshiftSettings: RedshiftSettings.filterSensitiveLog(obj.RedshiftSettings) }),
        ...(obj.PostgreSQLSettings && {
            PostgreSQLSettings: PostgreSQLSettings.filterSensitiveLog(obj.PostgreSQLSettings),
        }),
        ...(obj.MySQLSettings && { MySQLSettings: MySQLSettings.filterSensitiveLog(obj.MySQLSettings) }),
        ...(obj.OracleSettings && { OracleSettings: OracleSettings.filterSensitiveLog(obj.OracleSettings) }),
        ...(obj.SybaseSettings && { SybaseSettings: SybaseSettings.filterSensitiveLog(obj.SybaseSettings) }),
        ...(obj.MicrosoftSQLServerSettings && {
            MicrosoftSQLServerSettings: MicrosoftSQLServerSettings.filterSensitiveLog(obj.MicrosoftSQLServerSettings),
        }),
        ...(obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2Settings.filterSensitiveLog(obj.IBMDb2Settings) }),
        ...(obj.DocDbSettings && { DocDbSettings: DocDbSettings.filterSensitiveLog(obj.DocDbSettings) }),
    });
})(CreateEndpointMessage = exports.CreateEndpointMessage || (exports.CreateEndpointMessage = {}));
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.MongoDbSettings && { MongoDbSettings: MongoDbSettings.filterSensitiveLog(obj.MongoDbSettings) }),
        ...(obj.KafkaSettings && { KafkaSettings: KafkaSettings.filterSensitiveLog(obj.KafkaSettings) }),
        ...(obj.RedshiftSettings && { RedshiftSettings: RedshiftSettings.filterSensitiveLog(obj.RedshiftSettings) }),
        ...(obj.PostgreSQLSettings && {
            PostgreSQLSettings: PostgreSQLSettings.filterSensitiveLog(obj.PostgreSQLSettings),
        }),
        ...(obj.MySQLSettings && { MySQLSettings: MySQLSettings.filterSensitiveLog(obj.MySQLSettings) }),
        ...(obj.OracleSettings && { OracleSettings: OracleSettings.filterSensitiveLog(obj.OracleSettings) }),
        ...(obj.SybaseSettings && { SybaseSettings: SybaseSettings.filterSensitiveLog(obj.SybaseSettings) }),
        ...(obj.MicrosoftSQLServerSettings && {
            MicrosoftSQLServerSettings: MicrosoftSQLServerSettings.filterSensitiveLog(obj.MicrosoftSQLServerSettings),
        }),
        ...(obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2Settings.filterSensitiveLog(obj.IBMDb2Settings) }),
        ...(obj.DocDbSettings && { DocDbSettings: DocDbSettings.filterSensitiveLog(obj.DocDbSettings) }),
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var CreateEndpointResponse;
(function (CreateEndpointResponse) {
    /**
     * @internal
     */
    CreateEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Endpoint && { Endpoint: Endpoint.filterSensitiveLog(obj.Endpoint) }),
    });
})(CreateEndpointResponse = exports.CreateEndpointResponse || (exports.CreateEndpointResponse = {}));
var KMSKeyNotAccessibleFault;
(function (KMSKeyNotAccessibleFault) {
    /**
     * @internal
     */
    KMSKeyNotAccessibleFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSKeyNotAccessibleFault = exports.KMSKeyNotAccessibleFault || (exports.KMSKeyNotAccessibleFault = {}));
var ResourceAlreadyExistsFault;
(function (ResourceAlreadyExistsFault) {
    /**
     * @internal
     */
    ResourceAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsFault = exports.ResourceAlreadyExistsFault || (exports.ResourceAlreadyExistsFault = {}));
var ResourceQuotaExceededFault;
(function (ResourceQuotaExceededFault) {
    /**
     * @internal
     */
    ResourceQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceQuotaExceededFault = exports.ResourceQuotaExceededFault || (exports.ResourceQuotaExceededFault = {}));
var S3AccessDeniedFault;
(function (S3AccessDeniedFault) {
    /**
     * @internal
     */
    S3AccessDeniedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3AccessDeniedFault = exports.S3AccessDeniedFault || (exports.S3AccessDeniedFault = {}));
var CreateEventSubscriptionMessage;
(function (CreateEventSubscriptionMessage) {
    /**
     * @internal
     */
    CreateEventSubscriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEventSubscriptionMessage = exports.CreateEventSubscriptionMessage || (exports.CreateEventSubscriptionMessage = {}));
var EventSubscription;
(function (EventSubscription) {
    /**
     * @internal
     */
    EventSubscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventSubscription = exports.EventSubscription || (exports.EventSubscription = {}));
var CreateEventSubscriptionResponse;
(function (CreateEventSubscriptionResponse) {
    /**
     * @internal
     */
    CreateEventSubscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEventSubscriptionResponse = exports.CreateEventSubscriptionResponse || (exports.CreateEventSubscriptionResponse = {}));
var KMSAccessDeniedFault;
(function (KMSAccessDeniedFault) {
    /**
     * @internal
     */
    KMSAccessDeniedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSAccessDeniedFault = exports.KMSAccessDeniedFault || (exports.KMSAccessDeniedFault = {}));
var KMSDisabledFault;
(function (KMSDisabledFault) {
    /**
     * @internal
     */
    KMSDisabledFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSDisabledFault = exports.KMSDisabledFault || (exports.KMSDisabledFault = {}));
var KMSInvalidStateFault;
(function (KMSInvalidStateFault) {
    /**
     * @internal
     */
    KMSInvalidStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSInvalidStateFault = exports.KMSInvalidStateFault || (exports.KMSInvalidStateFault = {}));
var KMSNotFoundFault;
(function (KMSNotFoundFault) {
    /**
     * @internal
     */
    KMSNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSNotFoundFault = exports.KMSNotFoundFault || (exports.KMSNotFoundFault = {}));
var KMSThrottlingFault;
(function (KMSThrottlingFault) {
    /**
     * @internal
     */
    KMSThrottlingFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSThrottlingFault = exports.KMSThrottlingFault || (exports.KMSThrottlingFault = {}));
var SNSInvalidTopicFault;
(function (SNSInvalidTopicFault) {
    /**
     * @internal
     */
    SNSInvalidTopicFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SNSInvalidTopicFault = exports.SNSInvalidTopicFault || (exports.SNSInvalidTopicFault = {}));
var SNSNoAuthorizationFault;
(function (SNSNoAuthorizationFault) {
    /**
     * @internal
     */
    SNSNoAuthorizationFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SNSNoAuthorizationFault = exports.SNSNoAuthorizationFault || (exports.SNSNoAuthorizationFault = {}));
var CreateReplicationInstanceMessage;
(function (CreateReplicationInstanceMessage) {
    /**
     * @internal
     */
    CreateReplicationInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationInstanceMessage = exports.CreateReplicationInstanceMessage || (exports.CreateReplicationInstanceMessage = {}));
var ReplicationPendingModifiedValues;
(function (ReplicationPendingModifiedValues) {
    /**
     * @internal
     */
    ReplicationPendingModifiedValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationPendingModifiedValues = exports.ReplicationPendingModifiedValues || (exports.ReplicationPendingModifiedValues = {}));
var AvailabilityZone;
(function (AvailabilityZone) {
    /**
     * @internal
     */
    AvailabilityZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityZone = exports.AvailabilityZone || (exports.AvailabilityZone = {}));
var Subnet;
(function (Subnet) {
    /**
     * @internal
     */
    Subnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Subnet = exports.Subnet || (exports.Subnet = {}));
var ReplicationSubnetGroup;
(function (ReplicationSubnetGroup) {
    /**
     * @internal
     */
    ReplicationSubnetGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationSubnetGroup = exports.ReplicationSubnetGroup || (exports.ReplicationSubnetGroup = {}));
var VpcSecurityGroupMembership;
(function (VpcSecurityGroupMembership) {
    /**
     * @internal
     */
    VpcSecurityGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcSecurityGroupMembership = exports.VpcSecurityGroupMembership || (exports.VpcSecurityGroupMembership = {}));
var ReplicationInstance;
(function (ReplicationInstance) {
    /**
     * @internal
     */
    ReplicationInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationInstance = exports.ReplicationInstance || (exports.ReplicationInstance = {}));
var CreateReplicationInstanceResponse;
(function (CreateReplicationInstanceResponse) {
    /**
     * @internal
     */
    CreateReplicationInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationInstanceResponse = exports.CreateReplicationInstanceResponse || (exports.CreateReplicationInstanceResponse = {}));
var InsufficientResourceCapacityFault;
(function (InsufficientResourceCapacityFault) {
    /**
     * @internal
     */
    InsufficientResourceCapacityFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientResourceCapacityFault = exports.InsufficientResourceCapacityFault || (exports.InsufficientResourceCapacityFault = {}));
var InvalidSubnet;
(function (InvalidSubnet) {
    /**
     * @internal
     */
    InvalidSubnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSubnet = exports.InvalidSubnet || (exports.InvalidSubnet = {}));
var ReplicationSubnetGroupDoesNotCoverEnoughAZs;
(function (ReplicationSubnetGroupDoesNotCoverEnoughAZs) {
    /**
     * @internal
     */
    ReplicationSubnetGroupDoesNotCoverEnoughAZs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationSubnetGroupDoesNotCoverEnoughAZs = exports.ReplicationSubnetGroupDoesNotCoverEnoughAZs || (exports.ReplicationSubnetGroupDoesNotCoverEnoughAZs = {}));
var StorageQuotaExceededFault;
(function (StorageQuotaExceededFault) {
    /**
     * @internal
     */
    StorageQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageQuotaExceededFault = exports.StorageQuotaExceededFault || (exports.StorageQuotaExceededFault = {}));
var CreateReplicationSubnetGroupMessage;
(function (CreateReplicationSubnetGroupMessage) {
    /**
     * @internal
     */
    CreateReplicationSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationSubnetGroupMessage = exports.CreateReplicationSubnetGroupMessage || (exports.CreateReplicationSubnetGroupMessage = {}));
var CreateReplicationSubnetGroupResponse;
(function (CreateReplicationSubnetGroupResponse) {
    /**
     * @internal
     */
    CreateReplicationSubnetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationSubnetGroupResponse = exports.CreateReplicationSubnetGroupResponse || (exports.CreateReplicationSubnetGroupResponse = {}));
var MigrationTypeValue;
(function (MigrationTypeValue) {
    MigrationTypeValue["CDC"] = "cdc";
    MigrationTypeValue["FULL_LOAD"] = "full-load";
    MigrationTypeValue["FULL_LOAD_AND_CDC"] = "full-load-and-cdc";
})(MigrationTypeValue = exports.MigrationTypeValue || (exports.MigrationTypeValue = {}));
var CreateReplicationTaskMessage;
(function (CreateReplicationTaskMessage) {
    /**
     * @internal
     */
    CreateReplicationTaskMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationTaskMessage = exports.CreateReplicationTaskMessage || (exports.CreateReplicationTaskMessage = {}));
var ReplicationTaskStats;
(function (ReplicationTaskStats) {
    /**
     * @internal
     */
    ReplicationTaskStats.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationTaskStats = exports.ReplicationTaskStats || (exports.ReplicationTaskStats = {}));
var ReplicationTask;
(function (ReplicationTask) {
    /**
     * @internal
     */
    ReplicationTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationTask = exports.ReplicationTask || (exports.ReplicationTask = {}));
var CreateReplicationTaskResponse;
(function (CreateReplicationTaskResponse) {
    /**
     * @internal
     */
    CreateReplicationTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationTaskResponse = exports.CreateReplicationTaskResponse || (exports.CreateReplicationTaskResponse = {}));
var DeleteCertificateMessage;
(function (DeleteCertificateMessage) {
    /**
     * @internal
     */
    DeleteCertificateMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCertificateMessage = exports.DeleteCertificateMessage || (exports.DeleteCertificateMessage = {}));
var Certificate;
(function (Certificate) {
    /**
     * @internal
     */
    Certificate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Certificate = exports.Certificate || (exports.Certificate = {}));
var DeleteCertificateResponse;
(function (DeleteCertificateResponse) {
    /**
     * @internal
     */
    DeleteCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCertificateResponse = exports.DeleteCertificateResponse || (exports.DeleteCertificateResponse = {}));
var DeleteConnectionMessage;
(function (DeleteConnectionMessage) {
    /**
     * @internal
     */
    DeleteConnectionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionMessage = exports.DeleteConnectionMessage || (exports.DeleteConnectionMessage = {}));
var Connection;
(function (Connection) {
    /**
     * @internal
     */
    Connection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Connection = exports.Connection || (exports.Connection = {}));
var DeleteConnectionResponse;
(function (DeleteConnectionResponse) {
    /**
     * @internal
     */
    DeleteConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionResponse = exports.DeleteConnectionResponse || (exports.DeleteConnectionResponse = {}));
var DeleteEndpointMessage;
(function (DeleteEndpointMessage) {
    /**
     * @internal
     */
    DeleteEndpointMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEndpointMessage = exports.DeleteEndpointMessage || (exports.DeleteEndpointMessage = {}));
var DeleteEndpointResponse;
(function (DeleteEndpointResponse) {
    /**
     * @internal
     */
    DeleteEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Endpoint && { Endpoint: Endpoint.filterSensitiveLog(obj.Endpoint) }),
    });
})(DeleteEndpointResponse = exports.DeleteEndpointResponse || (exports.DeleteEndpointResponse = {}));
var DeleteEventSubscriptionMessage;
(function (DeleteEventSubscriptionMessage) {
    /**
     * @internal
     */
    DeleteEventSubscriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventSubscriptionMessage = exports.DeleteEventSubscriptionMessage || (exports.DeleteEventSubscriptionMessage = {}));
var DeleteEventSubscriptionResponse;
(function (DeleteEventSubscriptionResponse) {
    /**
     * @internal
     */
    DeleteEventSubscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventSubscriptionResponse = exports.DeleteEventSubscriptionResponse || (exports.DeleteEventSubscriptionResponse = {}));
var DeleteReplicationInstanceMessage;
(function (DeleteReplicationInstanceMessage) {
    /**
     * @internal
     */
    DeleteReplicationInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationInstanceMessage = exports.DeleteReplicationInstanceMessage || (exports.DeleteReplicationInstanceMessage = {}));
var DeleteReplicationInstanceResponse;
(function (DeleteReplicationInstanceResponse) {
    /**
     * @internal
     */
    DeleteReplicationInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationInstanceResponse = exports.DeleteReplicationInstanceResponse || (exports.DeleteReplicationInstanceResponse = {}));
var DeleteReplicationSubnetGroupMessage;
(function (DeleteReplicationSubnetGroupMessage) {
    /**
     * @internal
     */
    DeleteReplicationSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationSubnetGroupMessage = exports.DeleteReplicationSubnetGroupMessage || (exports.DeleteReplicationSubnetGroupMessage = {}));
var DeleteReplicationSubnetGroupResponse;
(function (DeleteReplicationSubnetGroupResponse) {
    /**
     * @internal
     */
    DeleteReplicationSubnetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationSubnetGroupResponse = exports.DeleteReplicationSubnetGroupResponse || (exports.DeleteReplicationSubnetGroupResponse = {}));
var DeleteReplicationTaskMessage;
(function (DeleteReplicationTaskMessage) {
    /**
     * @internal
     */
    DeleteReplicationTaskMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationTaskMessage = exports.DeleteReplicationTaskMessage || (exports.DeleteReplicationTaskMessage = {}));
var DeleteReplicationTaskResponse;
(function (DeleteReplicationTaskResponse) {
    /**
     * @internal
     */
    DeleteReplicationTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationTaskResponse = exports.DeleteReplicationTaskResponse || (exports.DeleteReplicationTaskResponse = {}));
var DeleteReplicationTaskAssessmentRunMessage;
(function (DeleteReplicationTaskAssessmentRunMessage) {
    /**
     * @internal
     */
    DeleteReplicationTaskAssessmentRunMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationTaskAssessmentRunMessage = exports.DeleteReplicationTaskAssessmentRunMessage || (exports.DeleteReplicationTaskAssessmentRunMessage = {}));
var DeleteReplicationTaskAssessmentRunResponse;
(function (DeleteReplicationTaskAssessmentRunResponse) {
    /**
     * @internal
     */
    DeleteReplicationTaskAssessmentRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationTaskAssessmentRunResponse = exports.DeleteReplicationTaskAssessmentRunResponse || (exports.DeleteReplicationTaskAssessmentRunResponse = {}));
var DescribeAccountAttributesMessage;
(function (DescribeAccountAttributesMessage) {
    /**
     * @internal
     */
    DescribeAccountAttributesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAttributesMessage = exports.DescribeAccountAttributesMessage || (exports.DescribeAccountAttributesMessage = {}));
var DescribeAccountAttributesResponse;
(function (DescribeAccountAttributesResponse) {
    /**
     * @internal
     */
    DescribeAccountAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAttributesResponse = exports.DescribeAccountAttributesResponse || (exports.DescribeAccountAttributesResponse = {}));
var DescribeApplicableIndividualAssessmentsMessage;
(function (DescribeApplicableIndividualAssessmentsMessage) {
    /**
     * @internal
     */
    DescribeApplicableIndividualAssessmentsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicableIndividualAssessmentsMessage = exports.DescribeApplicableIndividualAssessmentsMessage || (exports.DescribeApplicableIndividualAssessmentsMessage = {}));
var DescribeApplicableIndividualAssessmentsResponse;
(function (DescribeApplicableIndividualAssessmentsResponse) {
    /**
     * @internal
     */
    DescribeApplicableIndividualAssessmentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicableIndividualAssessmentsResponse = exports.DescribeApplicableIndividualAssessmentsResponse || (exports.DescribeApplicableIndividualAssessmentsResponse = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var DescribeCertificatesMessage;
(function (DescribeCertificatesMessage) {
    /**
     * @internal
     */
    DescribeCertificatesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCertificatesMessage = exports.DescribeCertificatesMessage || (exports.DescribeCertificatesMessage = {}));
var DescribeCertificatesResponse;
(function (DescribeCertificatesResponse) {
    /**
     * @internal
     */
    DescribeCertificatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCertificatesResponse = exports.DescribeCertificatesResponse || (exports.DescribeCertificatesResponse = {}));
var DescribeConnectionsMessage;
(function (DescribeConnectionsMessage) {
    /**
     * @internal
     */
    DescribeConnectionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConnectionsMessage = exports.DescribeConnectionsMessage || (exports.DescribeConnectionsMessage = {}));
var DescribeConnectionsResponse;
(function (DescribeConnectionsResponse) {
    /**
     * @internal
     */
    DescribeConnectionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConnectionsResponse = exports.DescribeConnectionsResponse || (exports.DescribeConnectionsResponse = {}));
var DescribeEndpointsMessage;
(function (DescribeEndpointsMessage) {
    /**
     * @internal
     */
    DescribeEndpointsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointsMessage = exports.DescribeEndpointsMessage || (exports.DescribeEndpointsMessage = {}));
var DescribeEndpointsResponse;
(function (DescribeEndpointsResponse) {
    /**
     * @internal
     */
    DescribeEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Endpoints && { Endpoints: obj.Endpoints.map((item) => Endpoint.filterSensitiveLog(item)) }),
    });
})(DescribeEndpointsResponse = exports.DescribeEndpointsResponse || (exports.DescribeEndpointsResponse = {}));
var DescribeEndpointSettingsMessage;
(function (DescribeEndpointSettingsMessage) {
    /**
     * @internal
     */
    DescribeEndpointSettingsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointSettingsMessage = exports.DescribeEndpointSettingsMessage || (exports.DescribeEndpointSettingsMessage = {}));
var EndpointSettingTypeValue;
(function (EndpointSettingTypeValue) {
    EndpointSettingTypeValue["BOOLEAN"] = "boolean";
    EndpointSettingTypeValue["ENUM"] = "enum";
    EndpointSettingTypeValue["INTEGER"] = "integer";
    EndpointSettingTypeValue["STRING"] = "string";
})(EndpointSettingTypeValue = exports.EndpointSettingTypeValue || (exports.EndpointSettingTypeValue = {}));
var EndpointSetting;
(function (EndpointSetting) {
    /**
     * @internal
     */
    EndpointSetting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointSetting = exports.EndpointSetting || (exports.EndpointSetting = {}));
var DescribeEndpointSettingsResponse;
(function (DescribeEndpointSettingsResponse) {
    /**
     * @internal
     */
    DescribeEndpointSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointSettingsResponse = exports.DescribeEndpointSettingsResponse || (exports.DescribeEndpointSettingsResponse = {}));
var DescribeEndpointTypesMessage;
(function (DescribeEndpointTypesMessage) {
    /**
     * @internal
     */
    DescribeEndpointTypesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointTypesMessage = exports.DescribeEndpointTypesMessage || (exports.DescribeEndpointTypesMessage = {}));
var SupportedEndpointType;
(function (SupportedEndpointType) {
    /**
     * @internal
     */
    SupportedEndpointType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SupportedEndpointType = exports.SupportedEndpointType || (exports.SupportedEndpointType = {}));
var DescribeEndpointTypesResponse;
(function (DescribeEndpointTypesResponse) {
    /**
     * @internal
     */
    DescribeEndpointTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointTypesResponse = exports.DescribeEndpointTypesResponse || (exports.DescribeEndpointTypesResponse = {}));
var DescribeEventCategoriesMessage;
(function (DescribeEventCategoriesMessage) {
    /**
     * @internal
     */
    DescribeEventCategoriesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventCategoriesMessage = exports.DescribeEventCategoriesMessage || (exports.DescribeEventCategoriesMessage = {}));
var EventCategoryGroup;
(function (EventCategoryGroup) {
    /**
     * @internal
     */
    EventCategoryGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventCategoryGroup = exports.EventCategoryGroup || (exports.EventCategoryGroup = {}));
var DescribeEventCategoriesResponse;
(function (DescribeEventCategoriesResponse) {
    /**
     * @internal
     */
    DescribeEventCategoriesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventCategoriesResponse = exports.DescribeEventCategoriesResponse || (exports.DescribeEventCategoriesResponse = {}));
var DescribeEventsMessage;
(function (DescribeEventsMessage) {
    /**
     * @internal
     */
    DescribeEventsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsMessage = exports.DescribeEventsMessage || (exports.DescribeEventsMessage = {}));
var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Event = exports.Event || (exports.Event = {}));
var DescribeEventsResponse;
(function (DescribeEventsResponse) {
    /**
     * @internal
     */
    DescribeEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsResponse = exports.DescribeEventsResponse || (exports.DescribeEventsResponse = {}));
var DescribeEventSubscriptionsMessage;
(function (DescribeEventSubscriptionsMessage) {
    /**
     * @internal
     */
    DescribeEventSubscriptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventSubscriptionsMessage = exports.DescribeEventSubscriptionsMessage || (exports.DescribeEventSubscriptionsMessage = {}));
var DescribeEventSubscriptionsResponse;
(function (DescribeEventSubscriptionsResponse) {
    /**
     * @internal
     */
    DescribeEventSubscriptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventSubscriptionsResponse = exports.DescribeEventSubscriptionsResponse || (exports.DescribeEventSubscriptionsResponse = {}));
var DescribeOrderableReplicationInstancesMessage;
(function (DescribeOrderableReplicationInstancesMessage) {
    /**
     * @internal
     */
    DescribeOrderableReplicationInstancesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrderableReplicationInstancesMessage = exports.DescribeOrderableReplicationInstancesMessage || (exports.DescribeOrderableReplicationInstancesMessage = {}));
var ReleaseStatusValues;
(function (ReleaseStatusValues) {
    ReleaseStatusValues["BETA"] = "beta";
})(ReleaseStatusValues = exports.ReleaseStatusValues || (exports.ReleaseStatusValues = {}));
var OrderableReplicationInstance;
(function (OrderableReplicationInstance) {
    /**
     * @internal
     */
    OrderableReplicationInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrderableReplicationInstance = exports.OrderableReplicationInstance || (exports.OrderableReplicationInstance = {}));
var DescribeOrderableReplicationInstancesResponse;
(function (DescribeOrderableReplicationInstancesResponse) {
    /**
     * @internal
     */
    DescribeOrderableReplicationInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrderableReplicationInstancesResponse = exports.DescribeOrderableReplicationInstancesResponse || (exports.DescribeOrderableReplicationInstancesResponse = {}));
var DescribePendingMaintenanceActionsMessage;
(function (DescribePendingMaintenanceActionsMessage) {
    /**
     * @internal
     */
    DescribePendingMaintenanceActionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePendingMaintenanceActionsMessage = exports.DescribePendingMaintenanceActionsMessage || (exports.DescribePendingMaintenanceActionsMessage = {}));
var DescribePendingMaintenanceActionsResponse;
(function (DescribePendingMaintenanceActionsResponse) {
    /**
     * @internal
     */
    DescribePendingMaintenanceActionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePendingMaintenanceActionsResponse = exports.DescribePendingMaintenanceActionsResponse || (exports.DescribePendingMaintenanceActionsResponse = {}));
var DescribeRefreshSchemasStatusMessage;
(function (DescribeRefreshSchemasStatusMessage) {
    /**
     * @internal
     */
    DescribeRefreshSchemasStatusMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRefreshSchemasStatusMessage = exports.DescribeRefreshSchemasStatusMessage || (exports.DescribeRefreshSchemasStatusMessage = {}));
var RefreshSchemasStatusTypeValue;
(function (RefreshSchemasStatusTypeValue) {
    RefreshSchemasStatusTypeValue["FAILED"] = "failed";
    RefreshSchemasStatusTypeValue["REFRESHING"] = "refreshing";
    RefreshSchemasStatusTypeValue["SUCCESSFUL"] = "successful";
})(RefreshSchemasStatusTypeValue = exports.RefreshSchemasStatusTypeValue || (exports.RefreshSchemasStatusTypeValue = {}));
var RefreshSchemasStatus;
(function (RefreshSchemasStatus) {
    /**
     * @internal
     */
    RefreshSchemasStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RefreshSchemasStatus = exports.RefreshSchemasStatus || (exports.RefreshSchemasStatus = {}));
var DescribeRefreshSchemasStatusResponse;
(function (DescribeRefreshSchemasStatusResponse) {
    /**
     * @internal
     */
    DescribeRefreshSchemasStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRefreshSchemasStatusResponse = exports.DescribeRefreshSchemasStatusResponse || (exports.DescribeRefreshSchemasStatusResponse = {}));
var DescribeReplicationInstancesMessage;
(function (DescribeReplicationInstancesMessage) {
    /**
     * @internal
     */
    DescribeReplicationInstancesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationInstancesMessage = exports.DescribeReplicationInstancesMessage || (exports.DescribeReplicationInstancesMessage = {}));
var DescribeReplicationInstancesResponse;
(function (DescribeReplicationInstancesResponse) {
    /**
     * @internal
     */
    DescribeReplicationInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationInstancesResponse = exports.DescribeReplicationInstancesResponse || (exports.DescribeReplicationInstancesResponse = {}));
var DescribeReplicationInstanceTaskLogsMessage;
(function (DescribeReplicationInstanceTaskLogsMessage) {
    /**
     * @internal
     */
    DescribeReplicationInstanceTaskLogsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationInstanceTaskLogsMessage = exports.DescribeReplicationInstanceTaskLogsMessage || (exports.DescribeReplicationInstanceTaskLogsMessage = {}));
var ReplicationInstanceTaskLog;
(function (ReplicationInstanceTaskLog) {
    /**
     * @internal
     */
    ReplicationInstanceTaskLog.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationInstanceTaskLog = exports.ReplicationInstanceTaskLog || (exports.ReplicationInstanceTaskLog = {}));
var DescribeReplicationInstanceTaskLogsResponse;
(function (DescribeReplicationInstanceTaskLogsResponse) {
    /**
     * @internal
     */
    DescribeReplicationInstanceTaskLogsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationInstanceTaskLogsResponse = exports.DescribeReplicationInstanceTaskLogsResponse || (exports.DescribeReplicationInstanceTaskLogsResponse = {}));
var DescribeReplicationSubnetGroupsMessage;
(function (DescribeReplicationSubnetGroupsMessage) {
    /**
     * @internal
     */
    DescribeReplicationSubnetGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationSubnetGroupsMessage = exports.DescribeReplicationSubnetGroupsMessage || (exports.DescribeReplicationSubnetGroupsMessage = {}));
var DescribeReplicationSubnetGroupsResponse;
(function (DescribeReplicationSubnetGroupsResponse) {
    /**
     * @internal
     */
    DescribeReplicationSubnetGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationSubnetGroupsResponse = exports.DescribeReplicationSubnetGroupsResponse || (exports.DescribeReplicationSubnetGroupsResponse = {}));
var DescribeReplicationTaskAssessmentResultsMessage;
(function (DescribeReplicationTaskAssessmentResultsMessage) {
    /**
     * @internal
     */
    DescribeReplicationTaskAssessmentResultsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationTaskAssessmentResultsMessage = exports.DescribeReplicationTaskAssessmentResultsMessage || (exports.DescribeReplicationTaskAssessmentResultsMessage = {}));
var ReplicationTaskAssessmentResult;
(function (ReplicationTaskAssessmentResult) {
    /**
     * @internal
     */
    ReplicationTaskAssessmentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationTaskAssessmentResult = exports.ReplicationTaskAssessmentResult || (exports.ReplicationTaskAssessmentResult = {}));
var DescribeReplicationTaskAssessmentResultsResponse;
(function (DescribeReplicationTaskAssessmentResultsResponse) {
    /**
     * @internal
     */
    DescribeReplicationTaskAssessmentResultsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationTaskAssessmentResultsResponse = exports.DescribeReplicationTaskAssessmentResultsResponse || (exports.DescribeReplicationTaskAssessmentResultsResponse = {}));
var DescribeReplicationTaskAssessmentRunsMessage;
(function (DescribeReplicationTaskAssessmentRunsMessage) {
    /**
     * @internal
     */
    DescribeReplicationTaskAssessmentRunsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationTaskAssessmentRunsMessage = exports.DescribeReplicationTaskAssessmentRunsMessage || (exports.DescribeReplicationTaskAssessmentRunsMessage = {}));
var DescribeReplicationTaskAssessmentRunsResponse;
(function (DescribeReplicationTaskAssessmentRunsResponse) {
    /**
     * @internal
     */
    DescribeReplicationTaskAssessmentRunsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationTaskAssessmentRunsResponse = exports.DescribeReplicationTaskAssessmentRunsResponse || (exports.DescribeReplicationTaskAssessmentRunsResponse = {}));
var DescribeReplicationTaskIndividualAssessmentsMessage;
(function (DescribeReplicationTaskIndividualAssessmentsMessage) {
    /**
     * @internal
     */
    DescribeReplicationTaskIndividualAssessmentsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationTaskIndividualAssessmentsMessage = exports.DescribeReplicationTaskIndividualAssessmentsMessage || (exports.DescribeReplicationTaskIndividualAssessmentsMessage = {}));
var ReplicationTaskIndividualAssessment;
(function (ReplicationTaskIndividualAssessment) {
    /**
     * @internal
     */
    ReplicationTaskIndividualAssessment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationTaskIndividualAssessment = exports.ReplicationTaskIndividualAssessment || (exports.ReplicationTaskIndividualAssessment = {}));
var DescribeReplicationTaskIndividualAssessmentsResponse;
(function (DescribeReplicationTaskIndividualAssessmentsResponse) {
    /**
     * @internal
     */
    DescribeReplicationTaskIndividualAssessmentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationTaskIndividualAssessmentsResponse = exports.DescribeReplicationTaskIndividualAssessmentsResponse || (exports.DescribeReplicationTaskIndividualAssessmentsResponse = {}));
var DescribeReplicationTasksMessage;
(function (DescribeReplicationTasksMessage) {
    /**
     * @internal
     */
    DescribeReplicationTasksMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationTasksMessage = exports.DescribeReplicationTasksMessage || (exports.DescribeReplicationTasksMessage = {}));
var DescribeReplicationTasksResponse;
(function (DescribeReplicationTasksResponse) {
    /**
     * @internal
     */
    DescribeReplicationTasksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationTasksResponse = exports.DescribeReplicationTasksResponse || (exports.DescribeReplicationTasksResponse = {}));
var DescribeSchemasMessage;
(function (DescribeSchemasMessage) {
    /**
     * @internal
     */
    DescribeSchemasMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSchemasMessage = exports.DescribeSchemasMessage || (exports.DescribeSchemasMessage = {}));
var DescribeSchemasResponse;
(function (DescribeSchemasResponse) {
    /**
     * @internal
     */
    DescribeSchemasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSchemasResponse = exports.DescribeSchemasResponse || (exports.DescribeSchemasResponse = {}));
var DescribeTableStatisticsMessage;
(function (DescribeTableStatisticsMessage) {
    /**
     * @internal
     */
    DescribeTableStatisticsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTableStatisticsMessage = exports.DescribeTableStatisticsMessage || (exports.DescribeTableStatisticsMessage = {}));
var TableStatistics;
(function (TableStatistics) {
    /**
     * @internal
     */
    TableStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableStatistics = exports.TableStatistics || (exports.TableStatistics = {}));
var DescribeTableStatisticsResponse;
(function (DescribeTableStatisticsResponse) {
    /**
     * @internal
     */
    DescribeTableStatisticsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTableStatisticsResponse = exports.DescribeTableStatisticsResponse || (exports.DescribeTableStatisticsResponse = {}));
var ImportCertificateMessage;
(function (ImportCertificateMessage) {
    /**
     * @internal
     */
    ImportCertificateMessage.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.CertificatePem && { CertificatePem: smithy_client_1.SENSITIVE_STRING }),
    });
})(ImportCertificateMessage = exports.ImportCertificateMessage || (exports.ImportCertificateMessage = {}));
var ImportCertificateResponse;
(function (ImportCertificateResponse) {
    /**
     * @internal
     */
    ImportCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportCertificateResponse = exports.ImportCertificateResponse || (exports.ImportCertificateResponse = {}));
var InvalidCertificateFault;
(function (InvalidCertificateFault) {
    /**
     * @internal
     */
    InvalidCertificateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCertificateFault = exports.InvalidCertificateFault || (exports.InvalidCertificateFault = {}));
var ListTagsForResourceMessage;
(function (ListTagsForResourceMessage) {
    /**
     * @internal
     */
    ListTagsForResourceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceMessage = exports.ListTagsForResourceMessage || (exports.ListTagsForResourceMessage = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ModifyEndpointMessage;
(function (ModifyEndpointMessage) {
    /**
     * @internal
     */
    ModifyEndpointMessage.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.MongoDbSettings && { MongoDbSettings: MongoDbSettings.filterSensitiveLog(obj.MongoDbSettings) }),
        ...(obj.KafkaSettings && { KafkaSettings: KafkaSettings.filterSensitiveLog(obj.KafkaSettings) }),
        ...(obj.RedshiftSettings && { RedshiftSettings: RedshiftSettings.filterSensitiveLog(obj.RedshiftSettings) }),
        ...(obj.PostgreSQLSettings && {
            PostgreSQLSettings: PostgreSQLSettings.filterSensitiveLog(obj.PostgreSQLSettings),
        }),
        ...(obj.MySQLSettings && { MySQLSettings: MySQLSettings.filterSensitiveLog(obj.MySQLSettings) }),
        ...(obj.OracleSettings && { OracleSettings: OracleSettings.filterSensitiveLog(obj.OracleSettings) }),
        ...(obj.SybaseSettings && { SybaseSettings: SybaseSettings.filterSensitiveLog(obj.SybaseSettings) }),
        ...(obj.MicrosoftSQLServerSettings && {
            MicrosoftSQLServerSettings: MicrosoftSQLServerSettings.filterSensitiveLog(obj.MicrosoftSQLServerSettings),
        }),
        ...(obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2Settings.filterSensitiveLog(obj.IBMDb2Settings) }),
        ...(obj.DocDbSettings && { DocDbSettings: DocDbSettings.filterSensitiveLog(obj.DocDbSettings) }),
    });
})(ModifyEndpointMessage = exports.ModifyEndpointMessage || (exports.ModifyEndpointMessage = {}));
var ModifyEndpointResponse;
(function (ModifyEndpointResponse) {
    /**
     * @internal
     */
    ModifyEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Endpoint && { Endpoint: Endpoint.filterSensitiveLog(obj.Endpoint) }),
    });
})(ModifyEndpointResponse = exports.ModifyEndpointResponse || (exports.ModifyEndpointResponse = {}));
var ModifyEventSubscriptionMessage;
(function (ModifyEventSubscriptionMessage) {
    /**
     * @internal
     */
    ModifyEventSubscriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyEventSubscriptionMessage = exports.ModifyEventSubscriptionMessage || (exports.ModifyEventSubscriptionMessage = {}));
var ModifyEventSubscriptionResponse;
(function (ModifyEventSubscriptionResponse) {
    /**
     * @internal
     */
    ModifyEventSubscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyEventSubscriptionResponse = exports.ModifyEventSubscriptionResponse || (exports.ModifyEventSubscriptionResponse = {}));
var ModifyReplicationInstanceMessage;
(function (ModifyReplicationInstanceMessage) {
    /**
     * @internal
     */
    ModifyReplicationInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReplicationInstanceMessage = exports.ModifyReplicationInstanceMessage || (exports.ModifyReplicationInstanceMessage = {}));
var ModifyReplicationInstanceResponse;
(function (ModifyReplicationInstanceResponse) {
    /**
     * @internal
     */
    ModifyReplicationInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReplicationInstanceResponse = exports.ModifyReplicationInstanceResponse || (exports.ModifyReplicationInstanceResponse = {}));
var UpgradeDependencyFailureFault;
(function (UpgradeDependencyFailureFault) {
    /**
     * @internal
     */
    UpgradeDependencyFailureFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpgradeDependencyFailureFault = exports.UpgradeDependencyFailureFault || (exports.UpgradeDependencyFailureFault = {}));
var ModifyReplicationSubnetGroupMessage;
(function (ModifyReplicationSubnetGroupMessage) {
    /**
     * @internal
     */
    ModifyReplicationSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReplicationSubnetGroupMessage = exports.ModifyReplicationSubnetGroupMessage || (exports.ModifyReplicationSubnetGroupMessage = {}));
var ModifyReplicationSubnetGroupResponse;
(function (ModifyReplicationSubnetGroupResponse) {
    /**
     * @internal
     */
    ModifyReplicationSubnetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReplicationSubnetGroupResponse = exports.ModifyReplicationSubnetGroupResponse || (exports.ModifyReplicationSubnetGroupResponse = {}));
var SubnetAlreadyInUse;
(function (SubnetAlreadyInUse) {
    /**
     * @internal
     */
    SubnetAlreadyInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetAlreadyInUse = exports.SubnetAlreadyInUse || (exports.SubnetAlreadyInUse = {}));
var ModifyReplicationTaskMessage;
(function (ModifyReplicationTaskMessage) {
    /**
     * @internal
     */
    ModifyReplicationTaskMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReplicationTaskMessage = exports.ModifyReplicationTaskMessage || (exports.ModifyReplicationTaskMessage = {}));
var ModifyReplicationTaskResponse;
(function (ModifyReplicationTaskResponse) {
    /**
     * @internal
     */
    ModifyReplicationTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReplicationTaskResponse = exports.ModifyReplicationTaskResponse || (exports.ModifyReplicationTaskResponse = {}));
var MoveReplicationTaskMessage;
(function (MoveReplicationTaskMessage) {
    /**
     * @internal
     */
    MoveReplicationTaskMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MoveReplicationTaskMessage = exports.MoveReplicationTaskMessage || (exports.MoveReplicationTaskMessage = {}));
var MoveReplicationTaskResponse;
(function (MoveReplicationTaskResponse) {
    /**
     * @internal
     */
    MoveReplicationTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MoveReplicationTaskResponse = exports.MoveReplicationTaskResponse || (exports.MoveReplicationTaskResponse = {}));
var RebootReplicationInstanceMessage;
(function (RebootReplicationInstanceMessage) {
    /**
     * @internal
     */
    RebootReplicationInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootReplicationInstanceMessage = exports.RebootReplicationInstanceMessage || (exports.RebootReplicationInstanceMessage = {}));
var RebootReplicationInstanceResponse;
(function (RebootReplicationInstanceResponse) {
    /**
     * @internal
     */
    RebootReplicationInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootReplicationInstanceResponse = exports.RebootReplicationInstanceResponse || (exports.RebootReplicationInstanceResponse = {}));
var RefreshSchemasMessage;
(function (RefreshSchemasMessage) {
    /**
     * @internal
     */
    RefreshSchemasMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RefreshSchemasMessage = exports.RefreshSchemasMessage || (exports.RefreshSchemasMessage = {}));
var RefreshSchemasResponse;
(function (RefreshSchemasResponse) {
    /**
     * @internal
     */
    RefreshSchemasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RefreshSchemasResponse = exports.RefreshSchemasResponse || (exports.RefreshSchemasResponse = {}));
var ReloadOptionValue;
(function (ReloadOptionValue) {
    ReloadOptionValue["DATA_RELOAD"] = "data-reload";
    ReloadOptionValue["VALIDATE_ONLY"] = "validate-only";
})(ReloadOptionValue = exports.ReloadOptionValue || (exports.ReloadOptionValue = {}));
var TableToReload;
(function (TableToReload) {
    /**
     * @internal
     */
    TableToReload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableToReload = exports.TableToReload || (exports.TableToReload = {}));
var ReloadTablesMessage;
(function (ReloadTablesMessage) {
    /**
     * @internal
     */
    ReloadTablesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReloadTablesMessage = exports.ReloadTablesMessage || (exports.ReloadTablesMessage = {}));
var ReloadTablesResponse;
(function (ReloadTablesResponse) {
    /**
     * @internal
     */
    ReloadTablesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReloadTablesResponse = exports.ReloadTablesResponse || (exports.ReloadTablesResponse = {}));
var RemoveTagsFromResourceMessage;
(function (RemoveTagsFromResourceMessage) {
    /**
     * @internal
     */
    RemoveTagsFromResourceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromResourceMessage = exports.RemoveTagsFromResourceMessage || (exports.RemoveTagsFromResourceMessage = {}));
var RemoveTagsFromResourceResponse;
(function (RemoveTagsFromResourceResponse) {
    /**
     * @internal
     */
    RemoveTagsFromResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromResourceResponse = exports.RemoveTagsFromResourceResponse || (exports.RemoveTagsFromResourceResponse = {}));
var StartReplicationTaskTypeValue;
(function (StartReplicationTaskTypeValue) {
    StartReplicationTaskTypeValue["RELOAD_TARGET"] = "reload-target";
    StartReplicationTaskTypeValue["RESUME_PROCESSING"] = "resume-processing";
    StartReplicationTaskTypeValue["START_REPLICATION"] = "start-replication";
})(StartReplicationTaskTypeValue = exports.StartReplicationTaskTypeValue || (exports.StartReplicationTaskTypeValue = {}));
var StartReplicationTaskMessage;
(function (StartReplicationTaskMessage) {
    /**
     * @internal
     */
    StartReplicationTaskMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartReplicationTaskMessage = exports.StartReplicationTaskMessage || (exports.StartReplicationTaskMessage = {}));
var StartReplicationTaskResponse;
(function (StartReplicationTaskResponse) {
    /**
     * @internal
     */
    StartReplicationTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartReplicationTaskResponse = exports.StartReplicationTaskResponse || (exports.StartReplicationTaskResponse = {}));
var StartReplicationTaskAssessmentMessage;
(function (StartReplicationTaskAssessmentMessage) {
    /**
     * @internal
     */
    StartReplicationTaskAssessmentMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartReplicationTaskAssessmentMessage = exports.StartReplicationTaskAssessmentMessage || (exports.StartReplicationTaskAssessmentMessage = {}));
var StartReplicationTaskAssessmentResponse;
(function (StartReplicationTaskAssessmentResponse) {
    /**
     * @internal
     */
    StartReplicationTaskAssessmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartReplicationTaskAssessmentResponse = exports.StartReplicationTaskAssessmentResponse || (exports.StartReplicationTaskAssessmentResponse = {}));
var KMSFault;
(function (KMSFault) {
    /**
     * @internal
     */
    KMSFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSFault = exports.KMSFault || (exports.KMSFault = {}));
var S3ResourceNotFoundFault;
(function (S3ResourceNotFoundFault) {
    /**
     * @internal
     */
    S3ResourceNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ResourceNotFoundFault = exports.S3ResourceNotFoundFault || (exports.S3ResourceNotFoundFault = {}));
var StartReplicationTaskAssessmentRunMessage;
(function (StartReplicationTaskAssessmentRunMessage) {
    /**
     * @internal
     */
    StartReplicationTaskAssessmentRunMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartReplicationTaskAssessmentRunMessage = exports.StartReplicationTaskAssessmentRunMessage || (exports.StartReplicationTaskAssessmentRunMessage = {}));
var StartReplicationTaskAssessmentRunResponse;
(function (StartReplicationTaskAssessmentRunResponse) {
    /**
     * @internal
     */
    StartReplicationTaskAssessmentRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartReplicationTaskAssessmentRunResponse = exports.StartReplicationTaskAssessmentRunResponse || (exports.StartReplicationTaskAssessmentRunResponse = {}));
var StopReplicationTaskMessage;
(function (StopReplicationTaskMessage) {
    /**
     * @internal
     */
    StopReplicationTaskMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopReplicationTaskMessage = exports.StopReplicationTaskMessage || (exports.StopReplicationTaskMessage = {}));
var StopReplicationTaskResponse;
(function (StopReplicationTaskResponse) {
    /**
     * @internal
     */
    StopReplicationTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopReplicationTaskResponse = exports.StopReplicationTaskResponse || (exports.StopReplicationTaskResponse = {}));
var TestConnectionMessage;
(function (TestConnectionMessage) {
    /**
     * @internal
     */
    TestConnectionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestConnectionMessage = exports.TestConnectionMessage || (exports.TestConnectionMessage = {}));
var TestConnectionResponse;
(function (TestConnectionResponse) {
    /**
     * @internal
     */
    TestConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestConnectionResponse = exports.TestConnectionResponse || (exports.TestConnectionResponse = {}));
//# sourceMappingURL=models_0.js.map