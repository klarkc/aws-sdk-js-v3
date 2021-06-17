import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedFault;
(function (AccessDeniedFault) {
    /**
     * @internal
     */
    AccessDeniedFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedFault || (AccessDeniedFault = {}));
export var AccountQuota;
(function (AccountQuota) {
    /**
     * @internal
     */
    AccountQuota.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountQuota || (AccountQuota = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var AddTagsToResourceMessage;
(function (AddTagsToResourceMessage) {
    /**
     * @internal
     */
    AddTagsToResourceMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsToResourceMessage || (AddTagsToResourceMessage = {}));
export var AddTagsToResourceResponse;
(function (AddTagsToResourceResponse) {
    /**
     * @internal
     */
    AddTagsToResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsToResourceResponse || (AddTagsToResourceResponse = {}));
export var ResourceNotFoundFault;
(function (ResourceNotFoundFault) {
    /**
     * @internal
     */
    ResourceNotFoundFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundFault || (ResourceNotFoundFault = {}));
export var ApplyPendingMaintenanceActionMessage;
(function (ApplyPendingMaintenanceActionMessage) {
    /**
     * @internal
     */
    ApplyPendingMaintenanceActionMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ApplyPendingMaintenanceActionMessage || (ApplyPendingMaintenanceActionMessage = {}));
export var PendingMaintenanceAction;
(function (PendingMaintenanceAction) {
    /**
     * @internal
     */
    PendingMaintenanceAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PendingMaintenanceAction || (PendingMaintenanceAction = {}));
export var ResourcePendingMaintenanceActions;
(function (ResourcePendingMaintenanceActions) {
    /**
     * @internal
     */
    ResourcePendingMaintenanceActions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourcePendingMaintenanceActions || (ResourcePendingMaintenanceActions = {}));
export var ApplyPendingMaintenanceActionResponse;
(function (ApplyPendingMaintenanceActionResponse) {
    /**
     * @internal
     */
    ApplyPendingMaintenanceActionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ApplyPendingMaintenanceActionResponse || (ApplyPendingMaintenanceActionResponse = {}));
export var CancelReplicationTaskAssessmentRunMessage;
(function (CancelReplicationTaskAssessmentRunMessage) {
    /**
     * @internal
     */
    CancelReplicationTaskAssessmentRunMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelReplicationTaskAssessmentRunMessage || (CancelReplicationTaskAssessmentRunMessage = {}));
export var ReplicationTaskAssessmentRunProgress;
(function (ReplicationTaskAssessmentRunProgress) {
    /**
     * @internal
     */
    ReplicationTaskAssessmentRunProgress.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationTaskAssessmentRunProgress || (ReplicationTaskAssessmentRunProgress = {}));
export var ReplicationTaskAssessmentRun;
(function (ReplicationTaskAssessmentRun) {
    /**
     * @internal
     */
    ReplicationTaskAssessmentRun.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationTaskAssessmentRun || (ReplicationTaskAssessmentRun = {}));
export var CancelReplicationTaskAssessmentRunResponse;
(function (CancelReplicationTaskAssessmentRunResponse) {
    /**
     * @internal
     */
    CancelReplicationTaskAssessmentRunResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelReplicationTaskAssessmentRunResponse || (CancelReplicationTaskAssessmentRunResponse = {}));
export var InvalidResourceStateFault;
(function (InvalidResourceStateFault) {
    /**
     * @internal
     */
    InvalidResourceStateFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidResourceStateFault || (InvalidResourceStateFault = {}));
export var DmsTransferSettings;
(function (DmsTransferSettings) {
    /**
     * @internal
     */
    DmsTransferSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DmsTransferSettings || (DmsTransferSettings = {}));
export var NestingLevelValue;
(function (NestingLevelValue) {
    NestingLevelValue["NONE"] = "none";
    NestingLevelValue["ONE"] = "one";
})(NestingLevelValue || (NestingLevelValue = {}));
export var DocDbSettings;
(function (DocDbSettings) {
    /**
     * @internal
     */
    DocDbSettings.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(DocDbSettings || (DocDbSettings = {}));
export var DynamoDbSettings;
(function (DynamoDbSettings) {
    /**
     * @internal
     */
    DynamoDbSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DynamoDbSettings || (DynamoDbSettings = {}));
export var ElasticsearchSettings;
(function (ElasticsearchSettings) {
    /**
     * @internal
     */
    ElasticsearchSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElasticsearchSettings || (ElasticsearchSettings = {}));
export var ReplicationEndpointTypeValue;
(function (ReplicationEndpointTypeValue) {
    ReplicationEndpointTypeValue["SOURCE"] = "source";
    ReplicationEndpointTypeValue["TARGET"] = "target";
})(ReplicationEndpointTypeValue || (ReplicationEndpointTypeValue = {}));
export var IBMDb2Settings;
(function (IBMDb2Settings) {
    /**
     * @internal
     */
    IBMDb2Settings.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(IBMDb2Settings || (IBMDb2Settings = {}));
export var MessageFormatValue;
(function (MessageFormatValue) {
    MessageFormatValue["JSON"] = "json";
    MessageFormatValue["JSON_UNFORMATTED"] = "json-unformatted";
})(MessageFormatValue || (MessageFormatValue = {}));
export var KafkaSecurityProtocol;
(function (KafkaSecurityProtocol) {
    KafkaSecurityProtocol["PLAINTEXT"] = "plaintext";
    KafkaSecurityProtocol["SASL_SSL"] = "sasl-ssl";
    KafkaSecurityProtocol["SSL_AUTHENTICATION"] = "ssl-authentication";
    KafkaSecurityProtocol["SSL_ENCRYPTION"] = "ssl-encryption";
})(KafkaSecurityProtocol || (KafkaSecurityProtocol = {}));
export var KafkaSettings;
(function (KafkaSettings) {
    /**
     * @internal
     */
    KafkaSettings.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.SslClientKeyPassword && { SslClientKeyPassword: SENSITIVE_STRING })), (obj.SaslPassword && { SaslPassword: SENSITIVE_STRING }))); };
})(KafkaSettings || (KafkaSettings = {}));
export var KinesisSettings;
(function (KinesisSettings) {
    /**
     * @internal
     */
    KinesisSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KinesisSettings || (KinesisSettings = {}));
export var SafeguardPolicy;
(function (SafeguardPolicy) {
    SafeguardPolicy["EXCLUSIVE_AUTOMATIC_TRUNCATION"] = "exclusive-automatic-truncation";
    SafeguardPolicy["RELY_ON_SQL_SERVER_REPLICATION_AGENT"] = "rely-on-sql-server-replication-agent";
    SafeguardPolicy["SHARED_AUTOMATIC_TRUNCATION"] = "shared-automatic-truncation";
})(SafeguardPolicy || (SafeguardPolicy = {}));
export var MicrosoftSQLServerSettings;
(function (MicrosoftSQLServerSettings) {
    /**
     * @internal
     */
    MicrosoftSQLServerSettings.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(MicrosoftSQLServerSettings || (MicrosoftSQLServerSettings = {}));
export var AuthMechanismValue;
(function (AuthMechanismValue) {
    AuthMechanismValue["DEFAULT"] = "default";
    AuthMechanismValue["MONGODB_CR"] = "mongodb_cr";
    AuthMechanismValue["SCRAM_SHA_1"] = "scram_sha_1";
})(AuthMechanismValue || (AuthMechanismValue = {}));
export var AuthTypeValue;
(function (AuthTypeValue) {
    AuthTypeValue["NO"] = "no";
    AuthTypeValue["PASSWORD"] = "password";
})(AuthTypeValue || (AuthTypeValue = {}));
export var MongoDbSettings;
(function (MongoDbSettings) {
    /**
     * @internal
     */
    MongoDbSettings.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(MongoDbSettings || (MongoDbSettings = {}));
export var TargetDbType;
(function (TargetDbType) {
    TargetDbType["MULTIPLE_DATABASES"] = "multiple-databases";
    TargetDbType["SPECIFIC_DATABASE"] = "specific-database";
})(TargetDbType || (TargetDbType = {}));
export var MySQLSettings;
(function (MySQLSettings) {
    /**
     * @internal
     */
    MySQLSettings.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(MySQLSettings || (MySQLSettings = {}));
export var NeptuneSettings;
(function (NeptuneSettings) {
    /**
     * @internal
     */
    NeptuneSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NeptuneSettings || (NeptuneSettings = {}));
export var CharLengthSemantics;
(function (CharLengthSemantics) {
    CharLengthSemantics["BYTE"] = "byte";
    CharLengthSemantics["CHAR"] = "char";
    CharLengthSemantics["DEFAULT"] = "default";
})(CharLengthSemantics || (CharLengthSemantics = {}));
export var OracleSettings;
(function (OracleSettings) {
    /**
     * @internal
     */
    OracleSettings.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.AsmPassword && { AsmPassword: SENSITIVE_STRING })), (obj.Password && { Password: SENSITIVE_STRING })), (obj.SecurityDbEncryption && { SecurityDbEncryption: SENSITIVE_STRING }))); };
})(OracleSettings || (OracleSettings = {}));
export var PostgreSQLSettings;
(function (PostgreSQLSettings) {
    /**
     * @internal
     */
    PostgreSQLSettings.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(PostgreSQLSettings || (PostgreSQLSettings = {}));
export var EncryptionModeValue;
(function (EncryptionModeValue) {
    EncryptionModeValue["SSE_KMS"] = "sse-kms";
    EncryptionModeValue["SSE_S3"] = "sse-s3";
})(EncryptionModeValue || (EncryptionModeValue = {}));
export var RedshiftSettings;
(function (RedshiftSettings) {
    /**
     * @internal
     */
    RedshiftSettings.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(RedshiftSettings || (RedshiftSettings = {}));
export var CompressionTypeValue;
(function (CompressionTypeValue) {
    CompressionTypeValue["GZIP"] = "gzip";
    CompressionTypeValue["NONE"] = "none";
})(CompressionTypeValue || (CompressionTypeValue = {}));
export var DataFormatValue;
(function (DataFormatValue) {
    DataFormatValue["CSV"] = "csv";
    DataFormatValue["PARQUET"] = "parquet";
})(DataFormatValue || (DataFormatValue = {}));
export var DatePartitionDelimiterValue;
(function (DatePartitionDelimiterValue) {
    DatePartitionDelimiterValue["DASH"] = "DASH";
    DatePartitionDelimiterValue["NONE"] = "NONE";
    DatePartitionDelimiterValue["SLASH"] = "SLASH";
    DatePartitionDelimiterValue["UNDERSCORE"] = "UNDERSCORE";
})(DatePartitionDelimiterValue || (DatePartitionDelimiterValue = {}));
export var DatePartitionSequenceValue;
(function (DatePartitionSequenceValue) {
    DatePartitionSequenceValue["DDMMYYYY"] = "DDMMYYYY";
    DatePartitionSequenceValue["MMYYYYDD"] = "MMYYYYDD";
    DatePartitionSequenceValue["YYYYMM"] = "YYYYMM";
    DatePartitionSequenceValue["YYYYMMDD"] = "YYYYMMDD";
    DatePartitionSequenceValue["YYYYMMDDHH"] = "YYYYMMDDHH";
})(DatePartitionSequenceValue || (DatePartitionSequenceValue = {}));
export var EncodingTypeValue;
(function (EncodingTypeValue) {
    EncodingTypeValue["PLAIN"] = "plain";
    EncodingTypeValue["PLAIN_DICTIONARY"] = "plain-dictionary";
    EncodingTypeValue["RLE_DICTIONARY"] = "rle-dictionary";
})(EncodingTypeValue || (EncodingTypeValue = {}));
export var ParquetVersionValue;
(function (ParquetVersionValue) {
    ParquetVersionValue["PARQUET_1_0"] = "parquet-1-0";
    ParquetVersionValue["PARQUET_2_0"] = "parquet-2-0";
})(ParquetVersionValue || (ParquetVersionValue = {}));
export var S3Settings;
(function (S3Settings) {
    /**
     * @internal
     */
    S3Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Settings || (S3Settings = {}));
export var DmsSslModeValue;
(function (DmsSslModeValue) {
    DmsSslModeValue["NONE"] = "none";
    DmsSslModeValue["REQUIRE"] = "require";
    DmsSslModeValue["VERIFY_CA"] = "verify-ca";
    DmsSslModeValue["VERIFY_FULL"] = "verify-full";
})(DmsSslModeValue || (DmsSslModeValue = {}));
export var SybaseSettings;
(function (SybaseSettings) {
    /**
     * @internal
     */
    SybaseSettings.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(SybaseSettings || (SybaseSettings = {}));
export var CreateEndpointMessage;
(function (CreateEndpointMessage) {
    /**
     * @internal
     */
    CreateEndpointMessage.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING })), (obj.MongoDbSettings && { MongoDbSettings: MongoDbSettings.filterSensitiveLog(obj.MongoDbSettings) })), (obj.KafkaSettings && { KafkaSettings: KafkaSettings.filterSensitiveLog(obj.KafkaSettings) })), (obj.RedshiftSettings && { RedshiftSettings: RedshiftSettings.filterSensitiveLog(obj.RedshiftSettings) })), (obj.PostgreSQLSettings && {
        PostgreSQLSettings: PostgreSQLSettings.filterSensitiveLog(obj.PostgreSQLSettings),
    })), (obj.MySQLSettings && { MySQLSettings: MySQLSettings.filterSensitiveLog(obj.MySQLSettings) })), (obj.OracleSettings && { OracleSettings: OracleSettings.filterSensitiveLog(obj.OracleSettings) })), (obj.SybaseSettings && { SybaseSettings: SybaseSettings.filterSensitiveLog(obj.SybaseSettings) })), (obj.MicrosoftSQLServerSettings && {
        MicrosoftSQLServerSettings: MicrosoftSQLServerSettings.filterSensitiveLog(obj.MicrosoftSQLServerSettings),
    })), (obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2Settings.filterSensitiveLog(obj.IBMDb2Settings) })), (obj.DocDbSettings && { DocDbSettings: DocDbSettings.filterSensitiveLog(obj.DocDbSettings) }))); };
})(CreateEndpointMessage || (CreateEndpointMessage = {}));
export var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, obj), (obj.MongoDbSettings && { MongoDbSettings: MongoDbSettings.filterSensitiveLog(obj.MongoDbSettings) })), (obj.KafkaSettings && { KafkaSettings: KafkaSettings.filterSensitiveLog(obj.KafkaSettings) })), (obj.RedshiftSettings && { RedshiftSettings: RedshiftSettings.filterSensitiveLog(obj.RedshiftSettings) })), (obj.PostgreSQLSettings && {
        PostgreSQLSettings: PostgreSQLSettings.filterSensitiveLog(obj.PostgreSQLSettings),
    })), (obj.MySQLSettings && { MySQLSettings: MySQLSettings.filterSensitiveLog(obj.MySQLSettings) })), (obj.OracleSettings && { OracleSettings: OracleSettings.filterSensitiveLog(obj.OracleSettings) })), (obj.SybaseSettings && { SybaseSettings: SybaseSettings.filterSensitiveLog(obj.SybaseSettings) })), (obj.MicrosoftSQLServerSettings && {
        MicrosoftSQLServerSettings: MicrosoftSQLServerSettings.filterSensitiveLog(obj.MicrosoftSQLServerSettings),
    })), (obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2Settings.filterSensitiveLog(obj.IBMDb2Settings) })), (obj.DocDbSettings && { DocDbSettings: DocDbSettings.filterSensitiveLog(obj.DocDbSettings) }))); };
})(Endpoint || (Endpoint = {}));
export var CreateEndpointResponse;
(function (CreateEndpointResponse) {
    /**
     * @internal
     */
    CreateEndpointResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Endpoint && { Endpoint: Endpoint.filterSensitiveLog(obj.Endpoint) }))); };
})(CreateEndpointResponse || (CreateEndpointResponse = {}));
export var KMSKeyNotAccessibleFault;
(function (KMSKeyNotAccessibleFault) {
    /**
     * @internal
     */
    KMSKeyNotAccessibleFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSKeyNotAccessibleFault || (KMSKeyNotAccessibleFault = {}));
export var ResourceAlreadyExistsFault;
(function (ResourceAlreadyExistsFault) {
    /**
     * @internal
     */
    ResourceAlreadyExistsFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyExistsFault || (ResourceAlreadyExistsFault = {}));
export var ResourceQuotaExceededFault;
(function (ResourceQuotaExceededFault) {
    /**
     * @internal
     */
    ResourceQuotaExceededFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceQuotaExceededFault || (ResourceQuotaExceededFault = {}));
export var S3AccessDeniedFault;
(function (S3AccessDeniedFault) {
    /**
     * @internal
     */
    S3AccessDeniedFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3AccessDeniedFault || (S3AccessDeniedFault = {}));
export var CreateEventSubscriptionMessage;
(function (CreateEventSubscriptionMessage) {
    /**
     * @internal
     */
    CreateEventSubscriptionMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEventSubscriptionMessage || (CreateEventSubscriptionMessage = {}));
export var EventSubscription;
(function (EventSubscription) {
    /**
     * @internal
     */
    EventSubscription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventSubscription || (EventSubscription = {}));
export var CreateEventSubscriptionResponse;
(function (CreateEventSubscriptionResponse) {
    /**
     * @internal
     */
    CreateEventSubscriptionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEventSubscriptionResponse || (CreateEventSubscriptionResponse = {}));
export var KMSAccessDeniedFault;
(function (KMSAccessDeniedFault) {
    /**
     * @internal
     */
    KMSAccessDeniedFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSAccessDeniedFault || (KMSAccessDeniedFault = {}));
export var KMSDisabledFault;
(function (KMSDisabledFault) {
    /**
     * @internal
     */
    KMSDisabledFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSDisabledFault || (KMSDisabledFault = {}));
export var KMSInvalidStateFault;
(function (KMSInvalidStateFault) {
    /**
     * @internal
     */
    KMSInvalidStateFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSInvalidStateFault || (KMSInvalidStateFault = {}));
export var KMSNotFoundFault;
(function (KMSNotFoundFault) {
    /**
     * @internal
     */
    KMSNotFoundFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSNotFoundFault || (KMSNotFoundFault = {}));
export var KMSThrottlingFault;
(function (KMSThrottlingFault) {
    /**
     * @internal
     */
    KMSThrottlingFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSThrottlingFault || (KMSThrottlingFault = {}));
export var SNSInvalidTopicFault;
(function (SNSInvalidTopicFault) {
    /**
     * @internal
     */
    SNSInvalidTopicFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SNSInvalidTopicFault || (SNSInvalidTopicFault = {}));
export var SNSNoAuthorizationFault;
(function (SNSNoAuthorizationFault) {
    /**
     * @internal
     */
    SNSNoAuthorizationFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SNSNoAuthorizationFault || (SNSNoAuthorizationFault = {}));
export var CreateReplicationInstanceMessage;
(function (CreateReplicationInstanceMessage) {
    /**
     * @internal
     */
    CreateReplicationInstanceMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReplicationInstanceMessage || (CreateReplicationInstanceMessage = {}));
export var ReplicationPendingModifiedValues;
(function (ReplicationPendingModifiedValues) {
    /**
     * @internal
     */
    ReplicationPendingModifiedValues.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationPendingModifiedValues || (ReplicationPendingModifiedValues = {}));
export var AvailabilityZone;
(function (AvailabilityZone) {
    /**
     * @internal
     */
    AvailabilityZone.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AvailabilityZone || (AvailabilityZone = {}));
export var Subnet;
(function (Subnet) {
    /**
     * @internal
     */
    Subnet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Subnet || (Subnet = {}));
export var ReplicationSubnetGroup;
(function (ReplicationSubnetGroup) {
    /**
     * @internal
     */
    ReplicationSubnetGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationSubnetGroup || (ReplicationSubnetGroup = {}));
export var VpcSecurityGroupMembership;
(function (VpcSecurityGroupMembership) {
    /**
     * @internal
     */
    VpcSecurityGroupMembership.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcSecurityGroupMembership || (VpcSecurityGroupMembership = {}));
export var ReplicationInstance;
(function (ReplicationInstance) {
    /**
     * @internal
     */
    ReplicationInstance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationInstance || (ReplicationInstance = {}));
export var CreateReplicationInstanceResponse;
(function (CreateReplicationInstanceResponse) {
    /**
     * @internal
     */
    CreateReplicationInstanceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReplicationInstanceResponse || (CreateReplicationInstanceResponse = {}));
export var InsufficientResourceCapacityFault;
(function (InsufficientResourceCapacityFault) {
    /**
     * @internal
     */
    InsufficientResourceCapacityFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InsufficientResourceCapacityFault || (InsufficientResourceCapacityFault = {}));
export var InvalidSubnet;
(function (InvalidSubnet) {
    /**
     * @internal
     */
    InvalidSubnet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidSubnet || (InvalidSubnet = {}));
export var ReplicationSubnetGroupDoesNotCoverEnoughAZs;
(function (ReplicationSubnetGroupDoesNotCoverEnoughAZs) {
    /**
     * @internal
     */
    ReplicationSubnetGroupDoesNotCoverEnoughAZs.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationSubnetGroupDoesNotCoverEnoughAZs || (ReplicationSubnetGroupDoesNotCoverEnoughAZs = {}));
export var StorageQuotaExceededFault;
(function (StorageQuotaExceededFault) {
    /**
     * @internal
     */
    StorageQuotaExceededFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageQuotaExceededFault || (StorageQuotaExceededFault = {}));
export var CreateReplicationSubnetGroupMessage;
(function (CreateReplicationSubnetGroupMessage) {
    /**
     * @internal
     */
    CreateReplicationSubnetGroupMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReplicationSubnetGroupMessage || (CreateReplicationSubnetGroupMessage = {}));
export var CreateReplicationSubnetGroupResponse;
(function (CreateReplicationSubnetGroupResponse) {
    /**
     * @internal
     */
    CreateReplicationSubnetGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReplicationSubnetGroupResponse || (CreateReplicationSubnetGroupResponse = {}));
export var MigrationTypeValue;
(function (MigrationTypeValue) {
    MigrationTypeValue["CDC"] = "cdc";
    MigrationTypeValue["FULL_LOAD"] = "full-load";
    MigrationTypeValue["FULL_LOAD_AND_CDC"] = "full-load-and-cdc";
})(MigrationTypeValue || (MigrationTypeValue = {}));
export var CreateReplicationTaskMessage;
(function (CreateReplicationTaskMessage) {
    /**
     * @internal
     */
    CreateReplicationTaskMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReplicationTaskMessage || (CreateReplicationTaskMessage = {}));
export var ReplicationTaskStats;
(function (ReplicationTaskStats) {
    /**
     * @internal
     */
    ReplicationTaskStats.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationTaskStats || (ReplicationTaskStats = {}));
export var ReplicationTask;
(function (ReplicationTask) {
    /**
     * @internal
     */
    ReplicationTask.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationTask || (ReplicationTask = {}));
export var CreateReplicationTaskResponse;
(function (CreateReplicationTaskResponse) {
    /**
     * @internal
     */
    CreateReplicationTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReplicationTaskResponse || (CreateReplicationTaskResponse = {}));
export var DeleteCertificateMessage;
(function (DeleteCertificateMessage) {
    /**
     * @internal
     */
    DeleteCertificateMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCertificateMessage || (DeleteCertificateMessage = {}));
export var Certificate;
(function (Certificate) {
    /**
     * @internal
     */
    Certificate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Certificate || (Certificate = {}));
export var DeleteCertificateResponse;
(function (DeleteCertificateResponse) {
    /**
     * @internal
     */
    DeleteCertificateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCertificateResponse || (DeleteCertificateResponse = {}));
export var DeleteConnectionMessage;
(function (DeleteConnectionMessage) {
    /**
     * @internal
     */
    DeleteConnectionMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConnectionMessage || (DeleteConnectionMessage = {}));
export var Connection;
(function (Connection) {
    /**
     * @internal
     */
    Connection.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Connection || (Connection = {}));
export var DeleteConnectionResponse;
(function (DeleteConnectionResponse) {
    /**
     * @internal
     */
    DeleteConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConnectionResponse || (DeleteConnectionResponse = {}));
export var DeleteEndpointMessage;
(function (DeleteEndpointMessage) {
    /**
     * @internal
     */
    DeleteEndpointMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEndpointMessage || (DeleteEndpointMessage = {}));
export var DeleteEndpointResponse;
(function (DeleteEndpointResponse) {
    /**
     * @internal
     */
    DeleteEndpointResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Endpoint && { Endpoint: Endpoint.filterSensitiveLog(obj.Endpoint) }))); };
})(DeleteEndpointResponse || (DeleteEndpointResponse = {}));
export var DeleteEventSubscriptionMessage;
(function (DeleteEventSubscriptionMessage) {
    /**
     * @internal
     */
    DeleteEventSubscriptionMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEventSubscriptionMessage || (DeleteEventSubscriptionMessage = {}));
export var DeleteEventSubscriptionResponse;
(function (DeleteEventSubscriptionResponse) {
    /**
     * @internal
     */
    DeleteEventSubscriptionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEventSubscriptionResponse || (DeleteEventSubscriptionResponse = {}));
export var DeleteReplicationInstanceMessage;
(function (DeleteReplicationInstanceMessage) {
    /**
     * @internal
     */
    DeleteReplicationInstanceMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationInstanceMessage || (DeleteReplicationInstanceMessage = {}));
export var DeleteReplicationInstanceResponse;
(function (DeleteReplicationInstanceResponse) {
    /**
     * @internal
     */
    DeleteReplicationInstanceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationInstanceResponse || (DeleteReplicationInstanceResponse = {}));
export var DeleteReplicationSubnetGroupMessage;
(function (DeleteReplicationSubnetGroupMessage) {
    /**
     * @internal
     */
    DeleteReplicationSubnetGroupMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationSubnetGroupMessage || (DeleteReplicationSubnetGroupMessage = {}));
export var DeleteReplicationSubnetGroupResponse;
(function (DeleteReplicationSubnetGroupResponse) {
    /**
     * @internal
     */
    DeleteReplicationSubnetGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationSubnetGroupResponse || (DeleteReplicationSubnetGroupResponse = {}));
export var DeleteReplicationTaskMessage;
(function (DeleteReplicationTaskMessage) {
    /**
     * @internal
     */
    DeleteReplicationTaskMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationTaskMessage || (DeleteReplicationTaskMessage = {}));
export var DeleteReplicationTaskResponse;
(function (DeleteReplicationTaskResponse) {
    /**
     * @internal
     */
    DeleteReplicationTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationTaskResponse || (DeleteReplicationTaskResponse = {}));
export var DeleteReplicationTaskAssessmentRunMessage;
(function (DeleteReplicationTaskAssessmentRunMessage) {
    /**
     * @internal
     */
    DeleteReplicationTaskAssessmentRunMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationTaskAssessmentRunMessage || (DeleteReplicationTaskAssessmentRunMessage = {}));
export var DeleteReplicationTaskAssessmentRunResponse;
(function (DeleteReplicationTaskAssessmentRunResponse) {
    /**
     * @internal
     */
    DeleteReplicationTaskAssessmentRunResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationTaskAssessmentRunResponse || (DeleteReplicationTaskAssessmentRunResponse = {}));
export var DescribeAccountAttributesMessage;
(function (DescribeAccountAttributesMessage) {
    /**
     * @internal
     */
    DescribeAccountAttributesMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccountAttributesMessage || (DescribeAccountAttributesMessage = {}));
export var DescribeAccountAttributesResponse;
(function (DescribeAccountAttributesResponse) {
    /**
     * @internal
     */
    DescribeAccountAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccountAttributesResponse || (DescribeAccountAttributesResponse = {}));
export var DescribeApplicableIndividualAssessmentsMessage;
(function (DescribeApplicableIndividualAssessmentsMessage) {
    /**
     * @internal
     */
    DescribeApplicableIndividualAssessmentsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeApplicableIndividualAssessmentsMessage || (DescribeApplicableIndividualAssessmentsMessage = {}));
export var DescribeApplicableIndividualAssessmentsResponse;
(function (DescribeApplicableIndividualAssessmentsResponse) {
    /**
     * @internal
     */
    DescribeApplicableIndividualAssessmentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeApplicableIndividualAssessmentsResponse || (DescribeApplicableIndividualAssessmentsResponse = {}));
export var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Filter || (Filter = {}));
export var DescribeCertificatesMessage;
(function (DescribeCertificatesMessage) {
    /**
     * @internal
     */
    DescribeCertificatesMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCertificatesMessage || (DescribeCertificatesMessage = {}));
export var DescribeCertificatesResponse;
(function (DescribeCertificatesResponse) {
    /**
     * @internal
     */
    DescribeCertificatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCertificatesResponse || (DescribeCertificatesResponse = {}));
export var DescribeConnectionsMessage;
(function (DescribeConnectionsMessage) {
    /**
     * @internal
     */
    DescribeConnectionsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeConnectionsMessage || (DescribeConnectionsMessage = {}));
export var DescribeConnectionsResponse;
(function (DescribeConnectionsResponse) {
    /**
     * @internal
     */
    DescribeConnectionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeConnectionsResponse || (DescribeConnectionsResponse = {}));
export var DescribeEndpointsMessage;
(function (DescribeEndpointsMessage) {
    /**
     * @internal
     */
    DescribeEndpointsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointsMessage || (DescribeEndpointsMessage = {}));
export var DescribeEndpointsResponse;
(function (DescribeEndpointsResponse) {
    /**
     * @internal
     */
    DescribeEndpointsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Endpoints && { Endpoints: obj.Endpoints.map(function (item) { return Endpoint.filterSensitiveLog(item); }) }))); };
})(DescribeEndpointsResponse || (DescribeEndpointsResponse = {}));
export var DescribeEndpointSettingsMessage;
(function (DescribeEndpointSettingsMessage) {
    /**
     * @internal
     */
    DescribeEndpointSettingsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointSettingsMessage || (DescribeEndpointSettingsMessage = {}));
export var EndpointSettingTypeValue;
(function (EndpointSettingTypeValue) {
    EndpointSettingTypeValue["BOOLEAN"] = "boolean";
    EndpointSettingTypeValue["ENUM"] = "enum";
    EndpointSettingTypeValue["INTEGER"] = "integer";
    EndpointSettingTypeValue["STRING"] = "string";
})(EndpointSettingTypeValue || (EndpointSettingTypeValue = {}));
export var EndpointSetting;
(function (EndpointSetting) {
    /**
     * @internal
     */
    EndpointSetting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointSetting || (EndpointSetting = {}));
export var DescribeEndpointSettingsResponse;
(function (DescribeEndpointSettingsResponse) {
    /**
     * @internal
     */
    DescribeEndpointSettingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointSettingsResponse || (DescribeEndpointSettingsResponse = {}));
export var DescribeEndpointTypesMessage;
(function (DescribeEndpointTypesMessage) {
    /**
     * @internal
     */
    DescribeEndpointTypesMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointTypesMessage || (DescribeEndpointTypesMessage = {}));
export var SupportedEndpointType;
(function (SupportedEndpointType) {
    /**
     * @internal
     */
    SupportedEndpointType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SupportedEndpointType || (SupportedEndpointType = {}));
export var DescribeEndpointTypesResponse;
(function (DescribeEndpointTypesResponse) {
    /**
     * @internal
     */
    DescribeEndpointTypesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointTypesResponse || (DescribeEndpointTypesResponse = {}));
export var DescribeEventCategoriesMessage;
(function (DescribeEventCategoriesMessage) {
    /**
     * @internal
     */
    DescribeEventCategoriesMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventCategoriesMessage || (DescribeEventCategoriesMessage = {}));
export var EventCategoryGroup;
(function (EventCategoryGroup) {
    /**
     * @internal
     */
    EventCategoryGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventCategoryGroup || (EventCategoryGroup = {}));
export var DescribeEventCategoriesResponse;
(function (DescribeEventCategoriesResponse) {
    /**
     * @internal
     */
    DescribeEventCategoriesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventCategoriesResponse || (DescribeEventCategoriesResponse = {}));
export var DescribeEventsMessage;
(function (DescribeEventsMessage) {
    /**
     * @internal
     */
    DescribeEventsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventsMessage || (DescribeEventsMessage = {}));
export var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Event || (Event = {}));
export var DescribeEventsResponse;
(function (DescribeEventsResponse) {
    /**
     * @internal
     */
    DescribeEventsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventsResponse || (DescribeEventsResponse = {}));
export var DescribeEventSubscriptionsMessage;
(function (DescribeEventSubscriptionsMessage) {
    /**
     * @internal
     */
    DescribeEventSubscriptionsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventSubscriptionsMessage || (DescribeEventSubscriptionsMessage = {}));
export var DescribeEventSubscriptionsResponse;
(function (DescribeEventSubscriptionsResponse) {
    /**
     * @internal
     */
    DescribeEventSubscriptionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventSubscriptionsResponse || (DescribeEventSubscriptionsResponse = {}));
export var DescribeOrderableReplicationInstancesMessage;
(function (DescribeOrderableReplicationInstancesMessage) {
    /**
     * @internal
     */
    DescribeOrderableReplicationInstancesMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeOrderableReplicationInstancesMessage || (DescribeOrderableReplicationInstancesMessage = {}));
export var ReleaseStatusValues;
(function (ReleaseStatusValues) {
    ReleaseStatusValues["BETA"] = "beta";
})(ReleaseStatusValues || (ReleaseStatusValues = {}));
export var OrderableReplicationInstance;
(function (OrderableReplicationInstance) {
    /**
     * @internal
     */
    OrderableReplicationInstance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrderableReplicationInstance || (OrderableReplicationInstance = {}));
export var DescribeOrderableReplicationInstancesResponse;
(function (DescribeOrderableReplicationInstancesResponse) {
    /**
     * @internal
     */
    DescribeOrderableReplicationInstancesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeOrderableReplicationInstancesResponse || (DescribeOrderableReplicationInstancesResponse = {}));
export var DescribePendingMaintenanceActionsMessage;
(function (DescribePendingMaintenanceActionsMessage) {
    /**
     * @internal
     */
    DescribePendingMaintenanceActionsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePendingMaintenanceActionsMessage || (DescribePendingMaintenanceActionsMessage = {}));
export var DescribePendingMaintenanceActionsResponse;
(function (DescribePendingMaintenanceActionsResponse) {
    /**
     * @internal
     */
    DescribePendingMaintenanceActionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePendingMaintenanceActionsResponse || (DescribePendingMaintenanceActionsResponse = {}));
export var DescribeRefreshSchemasStatusMessage;
(function (DescribeRefreshSchemasStatusMessage) {
    /**
     * @internal
     */
    DescribeRefreshSchemasStatusMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRefreshSchemasStatusMessage || (DescribeRefreshSchemasStatusMessage = {}));
export var RefreshSchemasStatusTypeValue;
(function (RefreshSchemasStatusTypeValue) {
    RefreshSchemasStatusTypeValue["FAILED"] = "failed";
    RefreshSchemasStatusTypeValue["REFRESHING"] = "refreshing";
    RefreshSchemasStatusTypeValue["SUCCESSFUL"] = "successful";
})(RefreshSchemasStatusTypeValue || (RefreshSchemasStatusTypeValue = {}));
export var RefreshSchemasStatus;
(function (RefreshSchemasStatus) {
    /**
     * @internal
     */
    RefreshSchemasStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RefreshSchemasStatus || (RefreshSchemasStatus = {}));
export var DescribeRefreshSchemasStatusResponse;
(function (DescribeRefreshSchemasStatusResponse) {
    /**
     * @internal
     */
    DescribeRefreshSchemasStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRefreshSchemasStatusResponse || (DescribeRefreshSchemasStatusResponse = {}));
export var DescribeReplicationInstancesMessage;
(function (DescribeReplicationInstancesMessage) {
    /**
     * @internal
     */
    DescribeReplicationInstancesMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationInstancesMessage || (DescribeReplicationInstancesMessage = {}));
export var DescribeReplicationInstancesResponse;
(function (DescribeReplicationInstancesResponse) {
    /**
     * @internal
     */
    DescribeReplicationInstancesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationInstancesResponse || (DescribeReplicationInstancesResponse = {}));
export var DescribeReplicationInstanceTaskLogsMessage;
(function (DescribeReplicationInstanceTaskLogsMessage) {
    /**
     * @internal
     */
    DescribeReplicationInstanceTaskLogsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationInstanceTaskLogsMessage || (DescribeReplicationInstanceTaskLogsMessage = {}));
export var ReplicationInstanceTaskLog;
(function (ReplicationInstanceTaskLog) {
    /**
     * @internal
     */
    ReplicationInstanceTaskLog.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationInstanceTaskLog || (ReplicationInstanceTaskLog = {}));
export var DescribeReplicationInstanceTaskLogsResponse;
(function (DescribeReplicationInstanceTaskLogsResponse) {
    /**
     * @internal
     */
    DescribeReplicationInstanceTaskLogsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationInstanceTaskLogsResponse || (DescribeReplicationInstanceTaskLogsResponse = {}));
export var DescribeReplicationSubnetGroupsMessage;
(function (DescribeReplicationSubnetGroupsMessage) {
    /**
     * @internal
     */
    DescribeReplicationSubnetGroupsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationSubnetGroupsMessage || (DescribeReplicationSubnetGroupsMessage = {}));
export var DescribeReplicationSubnetGroupsResponse;
(function (DescribeReplicationSubnetGroupsResponse) {
    /**
     * @internal
     */
    DescribeReplicationSubnetGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationSubnetGroupsResponse || (DescribeReplicationSubnetGroupsResponse = {}));
export var DescribeReplicationTaskAssessmentResultsMessage;
(function (DescribeReplicationTaskAssessmentResultsMessage) {
    /**
     * @internal
     */
    DescribeReplicationTaskAssessmentResultsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationTaskAssessmentResultsMessage || (DescribeReplicationTaskAssessmentResultsMessage = {}));
export var ReplicationTaskAssessmentResult;
(function (ReplicationTaskAssessmentResult) {
    /**
     * @internal
     */
    ReplicationTaskAssessmentResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationTaskAssessmentResult || (ReplicationTaskAssessmentResult = {}));
export var DescribeReplicationTaskAssessmentResultsResponse;
(function (DescribeReplicationTaskAssessmentResultsResponse) {
    /**
     * @internal
     */
    DescribeReplicationTaskAssessmentResultsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationTaskAssessmentResultsResponse || (DescribeReplicationTaskAssessmentResultsResponse = {}));
export var DescribeReplicationTaskAssessmentRunsMessage;
(function (DescribeReplicationTaskAssessmentRunsMessage) {
    /**
     * @internal
     */
    DescribeReplicationTaskAssessmentRunsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationTaskAssessmentRunsMessage || (DescribeReplicationTaskAssessmentRunsMessage = {}));
export var DescribeReplicationTaskAssessmentRunsResponse;
(function (DescribeReplicationTaskAssessmentRunsResponse) {
    /**
     * @internal
     */
    DescribeReplicationTaskAssessmentRunsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationTaskAssessmentRunsResponse || (DescribeReplicationTaskAssessmentRunsResponse = {}));
export var DescribeReplicationTaskIndividualAssessmentsMessage;
(function (DescribeReplicationTaskIndividualAssessmentsMessage) {
    /**
     * @internal
     */
    DescribeReplicationTaskIndividualAssessmentsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationTaskIndividualAssessmentsMessage || (DescribeReplicationTaskIndividualAssessmentsMessage = {}));
export var ReplicationTaskIndividualAssessment;
(function (ReplicationTaskIndividualAssessment) {
    /**
     * @internal
     */
    ReplicationTaskIndividualAssessment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationTaskIndividualAssessment || (ReplicationTaskIndividualAssessment = {}));
export var DescribeReplicationTaskIndividualAssessmentsResponse;
(function (DescribeReplicationTaskIndividualAssessmentsResponse) {
    /**
     * @internal
     */
    DescribeReplicationTaskIndividualAssessmentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationTaskIndividualAssessmentsResponse || (DescribeReplicationTaskIndividualAssessmentsResponse = {}));
export var DescribeReplicationTasksMessage;
(function (DescribeReplicationTasksMessage) {
    /**
     * @internal
     */
    DescribeReplicationTasksMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationTasksMessage || (DescribeReplicationTasksMessage = {}));
export var DescribeReplicationTasksResponse;
(function (DescribeReplicationTasksResponse) {
    /**
     * @internal
     */
    DescribeReplicationTasksResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationTasksResponse || (DescribeReplicationTasksResponse = {}));
export var DescribeSchemasMessage;
(function (DescribeSchemasMessage) {
    /**
     * @internal
     */
    DescribeSchemasMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSchemasMessage || (DescribeSchemasMessage = {}));
export var DescribeSchemasResponse;
(function (DescribeSchemasResponse) {
    /**
     * @internal
     */
    DescribeSchemasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSchemasResponse || (DescribeSchemasResponse = {}));
export var DescribeTableStatisticsMessage;
(function (DescribeTableStatisticsMessage) {
    /**
     * @internal
     */
    DescribeTableStatisticsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTableStatisticsMessage || (DescribeTableStatisticsMessage = {}));
export var TableStatistics;
(function (TableStatistics) {
    /**
     * @internal
     */
    TableStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TableStatistics || (TableStatistics = {}));
export var DescribeTableStatisticsResponse;
(function (DescribeTableStatisticsResponse) {
    /**
     * @internal
     */
    DescribeTableStatisticsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTableStatisticsResponse || (DescribeTableStatisticsResponse = {}));
export var ImportCertificateMessage;
(function (ImportCertificateMessage) {
    /**
     * @internal
     */
    ImportCertificateMessage.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.CertificatePem && { CertificatePem: SENSITIVE_STRING }))); };
})(ImportCertificateMessage || (ImportCertificateMessage = {}));
export var ImportCertificateResponse;
(function (ImportCertificateResponse) {
    /**
     * @internal
     */
    ImportCertificateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportCertificateResponse || (ImportCertificateResponse = {}));
export var InvalidCertificateFault;
(function (InvalidCertificateFault) {
    /**
     * @internal
     */
    InvalidCertificateFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidCertificateFault || (InvalidCertificateFault = {}));
export var ListTagsForResourceMessage;
(function (ListTagsForResourceMessage) {
    /**
     * @internal
     */
    ListTagsForResourceMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceMessage || (ListTagsForResourceMessage = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var ModifyEndpointMessage;
(function (ModifyEndpointMessage) {
    /**
     * @internal
     */
    ModifyEndpointMessage.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING })), (obj.MongoDbSettings && { MongoDbSettings: MongoDbSettings.filterSensitiveLog(obj.MongoDbSettings) })), (obj.KafkaSettings && { KafkaSettings: KafkaSettings.filterSensitiveLog(obj.KafkaSettings) })), (obj.RedshiftSettings && { RedshiftSettings: RedshiftSettings.filterSensitiveLog(obj.RedshiftSettings) })), (obj.PostgreSQLSettings && {
        PostgreSQLSettings: PostgreSQLSettings.filterSensitiveLog(obj.PostgreSQLSettings),
    })), (obj.MySQLSettings && { MySQLSettings: MySQLSettings.filterSensitiveLog(obj.MySQLSettings) })), (obj.OracleSettings && { OracleSettings: OracleSettings.filterSensitiveLog(obj.OracleSettings) })), (obj.SybaseSettings && { SybaseSettings: SybaseSettings.filterSensitiveLog(obj.SybaseSettings) })), (obj.MicrosoftSQLServerSettings && {
        MicrosoftSQLServerSettings: MicrosoftSQLServerSettings.filterSensitiveLog(obj.MicrosoftSQLServerSettings),
    })), (obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2Settings.filterSensitiveLog(obj.IBMDb2Settings) })), (obj.DocDbSettings && { DocDbSettings: DocDbSettings.filterSensitiveLog(obj.DocDbSettings) }))); };
})(ModifyEndpointMessage || (ModifyEndpointMessage = {}));
export var ModifyEndpointResponse;
(function (ModifyEndpointResponse) {
    /**
     * @internal
     */
    ModifyEndpointResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Endpoint && { Endpoint: Endpoint.filterSensitiveLog(obj.Endpoint) }))); };
})(ModifyEndpointResponse || (ModifyEndpointResponse = {}));
export var ModifyEventSubscriptionMessage;
(function (ModifyEventSubscriptionMessage) {
    /**
     * @internal
     */
    ModifyEventSubscriptionMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyEventSubscriptionMessage || (ModifyEventSubscriptionMessage = {}));
export var ModifyEventSubscriptionResponse;
(function (ModifyEventSubscriptionResponse) {
    /**
     * @internal
     */
    ModifyEventSubscriptionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyEventSubscriptionResponse || (ModifyEventSubscriptionResponse = {}));
export var ModifyReplicationInstanceMessage;
(function (ModifyReplicationInstanceMessage) {
    /**
     * @internal
     */
    ModifyReplicationInstanceMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyReplicationInstanceMessage || (ModifyReplicationInstanceMessage = {}));
export var ModifyReplicationInstanceResponse;
(function (ModifyReplicationInstanceResponse) {
    /**
     * @internal
     */
    ModifyReplicationInstanceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyReplicationInstanceResponse || (ModifyReplicationInstanceResponse = {}));
export var UpgradeDependencyFailureFault;
(function (UpgradeDependencyFailureFault) {
    /**
     * @internal
     */
    UpgradeDependencyFailureFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpgradeDependencyFailureFault || (UpgradeDependencyFailureFault = {}));
export var ModifyReplicationSubnetGroupMessage;
(function (ModifyReplicationSubnetGroupMessage) {
    /**
     * @internal
     */
    ModifyReplicationSubnetGroupMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyReplicationSubnetGroupMessage || (ModifyReplicationSubnetGroupMessage = {}));
export var ModifyReplicationSubnetGroupResponse;
(function (ModifyReplicationSubnetGroupResponse) {
    /**
     * @internal
     */
    ModifyReplicationSubnetGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyReplicationSubnetGroupResponse || (ModifyReplicationSubnetGroupResponse = {}));
export var SubnetAlreadyInUse;
(function (SubnetAlreadyInUse) {
    /**
     * @internal
     */
    SubnetAlreadyInUse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubnetAlreadyInUse || (SubnetAlreadyInUse = {}));
export var ModifyReplicationTaskMessage;
(function (ModifyReplicationTaskMessage) {
    /**
     * @internal
     */
    ModifyReplicationTaskMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyReplicationTaskMessage || (ModifyReplicationTaskMessage = {}));
export var ModifyReplicationTaskResponse;
(function (ModifyReplicationTaskResponse) {
    /**
     * @internal
     */
    ModifyReplicationTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyReplicationTaskResponse || (ModifyReplicationTaskResponse = {}));
export var MoveReplicationTaskMessage;
(function (MoveReplicationTaskMessage) {
    /**
     * @internal
     */
    MoveReplicationTaskMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MoveReplicationTaskMessage || (MoveReplicationTaskMessage = {}));
export var MoveReplicationTaskResponse;
(function (MoveReplicationTaskResponse) {
    /**
     * @internal
     */
    MoveReplicationTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MoveReplicationTaskResponse || (MoveReplicationTaskResponse = {}));
export var RebootReplicationInstanceMessage;
(function (RebootReplicationInstanceMessage) {
    /**
     * @internal
     */
    RebootReplicationInstanceMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RebootReplicationInstanceMessage || (RebootReplicationInstanceMessage = {}));
export var RebootReplicationInstanceResponse;
(function (RebootReplicationInstanceResponse) {
    /**
     * @internal
     */
    RebootReplicationInstanceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RebootReplicationInstanceResponse || (RebootReplicationInstanceResponse = {}));
export var RefreshSchemasMessage;
(function (RefreshSchemasMessage) {
    /**
     * @internal
     */
    RefreshSchemasMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RefreshSchemasMessage || (RefreshSchemasMessage = {}));
export var RefreshSchemasResponse;
(function (RefreshSchemasResponse) {
    /**
     * @internal
     */
    RefreshSchemasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RefreshSchemasResponse || (RefreshSchemasResponse = {}));
export var ReloadOptionValue;
(function (ReloadOptionValue) {
    ReloadOptionValue["DATA_RELOAD"] = "data-reload";
    ReloadOptionValue["VALIDATE_ONLY"] = "validate-only";
})(ReloadOptionValue || (ReloadOptionValue = {}));
export var TableToReload;
(function (TableToReload) {
    /**
     * @internal
     */
    TableToReload.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TableToReload || (TableToReload = {}));
export var ReloadTablesMessage;
(function (ReloadTablesMessage) {
    /**
     * @internal
     */
    ReloadTablesMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReloadTablesMessage || (ReloadTablesMessage = {}));
export var ReloadTablesResponse;
(function (ReloadTablesResponse) {
    /**
     * @internal
     */
    ReloadTablesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReloadTablesResponse || (ReloadTablesResponse = {}));
export var RemoveTagsFromResourceMessage;
(function (RemoveTagsFromResourceMessage) {
    /**
     * @internal
     */
    RemoveTagsFromResourceMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsFromResourceMessage || (RemoveTagsFromResourceMessage = {}));
export var RemoveTagsFromResourceResponse;
(function (RemoveTagsFromResourceResponse) {
    /**
     * @internal
     */
    RemoveTagsFromResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsFromResourceResponse || (RemoveTagsFromResourceResponse = {}));
export var StartReplicationTaskTypeValue;
(function (StartReplicationTaskTypeValue) {
    StartReplicationTaskTypeValue["RELOAD_TARGET"] = "reload-target";
    StartReplicationTaskTypeValue["RESUME_PROCESSING"] = "resume-processing";
    StartReplicationTaskTypeValue["START_REPLICATION"] = "start-replication";
})(StartReplicationTaskTypeValue || (StartReplicationTaskTypeValue = {}));
export var StartReplicationTaskMessage;
(function (StartReplicationTaskMessage) {
    /**
     * @internal
     */
    StartReplicationTaskMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartReplicationTaskMessage || (StartReplicationTaskMessage = {}));
export var StartReplicationTaskResponse;
(function (StartReplicationTaskResponse) {
    /**
     * @internal
     */
    StartReplicationTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartReplicationTaskResponse || (StartReplicationTaskResponse = {}));
export var StartReplicationTaskAssessmentMessage;
(function (StartReplicationTaskAssessmentMessage) {
    /**
     * @internal
     */
    StartReplicationTaskAssessmentMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartReplicationTaskAssessmentMessage || (StartReplicationTaskAssessmentMessage = {}));
export var StartReplicationTaskAssessmentResponse;
(function (StartReplicationTaskAssessmentResponse) {
    /**
     * @internal
     */
    StartReplicationTaskAssessmentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartReplicationTaskAssessmentResponse || (StartReplicationTaskAssessmentResponse = {}));
export var KMSFault;
(function (KMSFault) {
    /**
     * @internal
     */
    KMSFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSFault || (KMSFault = {}));
export var S3ResourceNotFoundFault;
(function (S3ResourceNotFoundFault) {
    /**
     * @internal
     */
    S3ResourceNotFoundFault.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3ResourceNotFoundFault || (S3ResourceNotFoundFault = {}));
export var StartReplicationTaskAssessmentRunMessage;
(function (StartReplicationTaskAssessmentRunMessage) {
    /**
     * @internal
     */
    StartReplicationTaskAssessmentRunMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartReplicationTaskAssessmentRunMessage || (StartReplicationTaskAssessmentRunMessage = {}));
export var StartReplicationTaskAssessmentRunResponse;
(function (StartReplicationTaskAssessmentRunResponse) {
    /**
     * @internal
     */
    StartReplicationTaskAssessmentRunResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartReplicationTaskAssessmentRunResponse || (StartReplicationTaskAssessmentRunResponse = {}));
export var StopReplicationTaskMessage;
(function (StopReplicationTaskMessage) {
    /**
     * @internal
     */
    StopReplicationTaskMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopReplicationTaskMessage || (StopReplicationTaskMessage = {}));
export var StopReplicationTaskResponse;
(function (StopReplicationTaskResponse) {
    /**
     * @internal
     */
    StopReplicationTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopReplicationTaskResponse || (StopReplicationTaskResponse = {}));
export var TestConnectionMessage;
(function (TestConnectionMessage) {
    /**
     * @internal
     */
    TestConnectionMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestConnectionMessage || (TestConnectionMessage = {}));
export var TestConnectionResponse;
(function (TestConnectionResponse) {
    /**
     * @internal
     */
    TestConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestConnectionResponse || (TestConnectionResponse = {}));
//# sourceMappingURL=models_0.js.map