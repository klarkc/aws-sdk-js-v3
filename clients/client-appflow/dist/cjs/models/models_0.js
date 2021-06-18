"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesforceConnectorOperator =
  exports.S3ConnectorOperator =
  exports.MarketoConnectorOperator =
  exports.InforNexusConnectorOperator =
  exports.GoogleAnalyticsConnectorOperator =
  exports.DynatraceConnectorOperator =
  exports.DatadogConnectorOperator =
  exports.ConnectorOAuthRequest =
  exports.ConnectorEntityField =
  exports.SupportedFieldTypeDetails =
  exports.FieldTypeDetails =
  exports.Operator =
  exports.SourceFieldProperties =
  exports.DestinationFieldProperties =
  exports.WriteOperationType =
  exports.ConnectorEntity =
  exports.ConnectorConfiguration =
  exports.TriggerType =
  exports.ScheduleFrequencyType =
  exports.ConnectorType =
  exports.ConnectorMetadata =
  exports.ZendeskMetadata =
  exports.VeevaMetadata =
  exports.UpsolverMetadata =
  exports.TrendmicroMetadata =
  exports.SnowflakeMetadata =
  exports.SlackMetadata =
  exports.SingularMetadata =
  exports.ServiceNowMetadata =
  exports.SalesforceMetadata =
  exports.S3Metadata =
  exports.RedshiftMetadata =
  exports.MarketoMetadata =
  exports.InforNexusMetadata =
  exports.HoneycodeMetadata =
  exports.GoogleAnalyticsMetadata =
  exports.EventBridgeMetadata =
  exports.DynatraceMetadata =
  exports.DatadogMetadata =
  exports.CustomerProfilesMetadata =
  exports.ConnectorAuthenticationException =
  exports.ConnectionMode =
  exports.ConflictException =
  exports.AmplitudeSourceProperties =
  exports.AmplitudeMetadata =
  exports.AmplitudeConnectorProfileProperties =
  exports.AmplitudeConnectorProfileCredentials =
  exports.AmplitudeConnectorOperator =
  exports.AggregationConfig =
  exports.AggregationType =
    void 0;
exports.EventBridgeDestinationProperties =
  exports.ErrorHandlingConfig =
  exports.CustomerProfilesDestinationProperties =
  exports.ValidationException =
  exports.ServiceQuotaExceededException =
  exports.InternalServerException =
  exports.CreateConnectorProfileResponse =
  exports.CreateConnectorProfileRequest =
  exports.ConnectorServerException =
  exports.ConnectorProfileConfig =
  exports.ConnectorProfileCredentials =
  exports.ZendeskConnectorProfileCredentials =
  exports.VeevaConnectorProfileCredentials =
  exports.TrendmicroConnectorProfileCredentials =
  exports.SnowflakeConnectorProfileCredentials =
  exports.SlackConnectorProfileCredentials =
  exports.SingularConnectorProfileCredentials =
  exports.ServiceNowConnectorProfileCredentials =
  exports.SalesforceConnectorProfileCredentials =
  exports.RedshiftConnectorProfileCredentials =
  exports.MarketoConnectorProfileCredentials =
  exports.InforNexusConnectorProfileCredentials =
  exports.HoneycodeConnectorProfileCredentials =
  exports.GoogleAnalyticsConnectorProfileCredentials =
  exports.DynatraceConnectorProfileCredentials =
  exports.DatadogConnectorProfileCredentials =
  exports.ConnectorProfile =
  exports.ConnectorProfileProperties =
  exports.ZendeskConnectorProfileProperties =
  exports.VeevaConnectorProfileProperties =
  exports.TrendmicroConnectorProfileProperties =
  exports.SnowflakeConnectorProfileProperties =
  exports.SlackConnectorProfileProperties =
  exports.SingularConnectorProfileProperties =
  exports.ServiceNowConnectorProfileProperties =
  exports.SalesforceConnectorProfileProperties =
  exports.RedshiftConnectorProfileProperties =
  exports.MarketoConnectorProfileProperties =
  exports.InforNexusConnectorProfileProperties =
  exports.HoneycodeConnectorProfileProperties =
  exports.GoogleAnalyticsConnectorProfileProperties =
  exports.DynatraceConnectorProfileProperties =
  exports.DatadogConnectorProfileProperties =
  exports.ConnectorOperator =
  exports.ZendeskConnectorOperator =
  exports.VeevaConnectorOperator =
  exports.TrendmicroConnectorOperator =
  exports.SlackConnectorOperator =
  exports.SingularConnectorOperator =
  exports.ServiceNowConnectorOperator =
    void 0;
exports.DescribeConnectorProfilesRequest =
  exports.DescribeConnectorEntityResponse =
  exports.DescribeConnectorEntityRequest =
  exports.DeleteFlowResponse =
  exports.DeleteFlowRequest =
  exports.DeleteConnectorProfileResponse =
  exports.DeleteConnectorProfileRequest =
  exports.ResourceNotFoundException =
  exports.CreateFlowResponse =
  exports.FlowStatus =
  exports.CreateFlowRequest =
  exports.TriggerConfig =
  exports.TriggerProperties =
  exports.ScheduledTriggerProperties =
  exports.DataPullMode =
  exports.Task =
  exports.TaskType =
  exports.OperatorPropertiesKeys =
  exports.SourceFlowConfig =
  exports.SourceConnectorProperties =
  exports.ZendeskSourceProperties =
  exports.VeevaSourceProperties =
  exports.TrendmicroSourceProperties =
  exports.SlackSourceProperties =
  exports.SingularSourceProperties =
  exports.ServiceNowSourceProperties =
  exports.SalesforceSourceProperties =
  exports.S3SourceProperties =
  exports.MarketoSourceProperties =
  exports.InforNexusSourceProperties =
  exports.GoogleAnalyticsSourceProperties =
  exports.DynatraceSourceProperties =
  exports.DatadogSourceProperties =
  exports.IncrementalPullConfig =
  exports.DestinationFlowConfig =
  exports.DestinationConnectorProperties =
  exports.ZendeskDestinationProperties =
  exports.UpsolverDestinationProperties =
  exports.UpsolverS3OutputFormatConfig =
  exports.SnowflakeDestinationProperties =
  exports.SalesforceDestinationProperties =
  exports.S3DestinationProperties =
  exports.S3OutputFormatConfig =
  exports.PrefixConfig =
  exports.PrefixType =
  exports.PrefixFormat =
  exports.FileType =
  exports.RedshiftDestinationProperties =
  exports.LookoutMetricsDestinationProperties =
  exports.HoneycodeDestinationProperties =
    void 0;
exports.UpdateFlowResponse =
  exports.UpdateFlowRequest =
  exports.UpdateConnectorProfileResponse =
  exports.UpdateConnectorProfileRequest =
  exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.UnsupportedOperationException =
  exports.StopFlowResponse =
  exports.StopFlowRequest =
  exports.StartFlowResponse =
  exports.StartFlowRequest =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.ListFlowsResponse =
  exports.ListFlowsRequest =
  exports.ListConnectorEntitiesResponse =
  exports.ListConnectorEntitiesRequest =
  exports.FlowDefinition =
  exports.DescribeFlowExecutionRecordsResponse =
  exports.ExecutionRecord =
  exports.ExecutionResult =
  exports.ErrorInfo =
  exports.DescribeFlowExecutionRecordsRequest =
  exports.DescribeFlowResponse =
  exports.ExecutionDetails =
  exports.ExecutionStatus =
  exports.DescribeFlowRequest =
  exports.DescribeConnectorsResponse =
  exports.DescribeConnectorsRequest =
  exports.DescribeConnectorProfilesResponse =
    void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AggregationType;
(function (AggregationType) {
  AggregationType["NONE"] = "None";
  AggregationType["SINGLE_FILE"] = "SingleFile";
})((AggregationType = exports.AggregationType || (exports.AggregationType = {})));
var AggregationConfig;
(function (AggregationConfig) {
  /**
   * @internal
   */
  AggregationConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AggregationConfig = exports.AggregationConfig || (exports.AggregationConfig = {})));
var AmplitudeConnectorOperator;
(function (AmplitudeConnectorOperator) {
  AmplitudeConnectorOperator["BETWEEN"] = "BETWEEN";
})((AmplitudeConnectorOperator = exports.AmplitudeConnectorOperator || (exports.AmplitudeConnectorOperator = {})));
var AmplitudeConnectorProfileCredentials;
(function (AmplitudeConnectorProfileCredentials) {
  /**
   * @internal
   */
  AmplitudeConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.secretKey && { secretKey: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (AmplitudeConnectorProfileCredentials =
    exports.AmplitudeConnectorProfileCredentials || (exports.AmplitudeConnectorProfileCredentials = {}))
);
var AmplitudeConnectorProfileProperties;
(function (AmplitudeConnectorProfileProperties) {
  /**
   * @internal
   */
  AmplitudeConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AmplitudeConnectorProfileProperties =
    exports.AmplitudeConnectorProfileProperties || (exports.AmplitudeConnectorProfileProperties = {}))
);
var AmplitudeMetadata;
(function (AmplitudeMetadata) {
  /**
   * @internal
   */
  AmplitudeMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AmplitudeMetadata = exports.AmplitudeMetadata || (exports.AmplitudeMetadata = {})));
var AmplitudeSourceProperties;
(function (AmplitudeSourceProperties) {
  /**
   * @internal
   */
  AmplitudeSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AmplitudeSourceProperties = exports.AmplitudeSourceProperties || (exports.AmplitudeSourceProperties = {})));
var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConflictException = exports.ConflictException || (exports.ConflictException = {})));
var ConnectionMode;
(function (ConnectionMode) {
  ConnectionMode["PRIVATE"] = "Private";
  ConnectionMode["PUBLIC"] = "Public";
})((ConnectionMode = exports.ConnectionMode || (exports.ConnectionMode = {})));
var ConnectorAuthenticationException;
(function (ConnectorAuthenticationException) {
  /**
   * @internal
   */
  ConnectorAuthenticationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ConnectorAuthenticationException =
    exports.ConnectorAuthenticationException || (exports.ConnectorAuthenticationException = {}))
);
var CustomerProfilesMetadata;
(function (CustomerProfilesMetadata) {
  /**
   * @internal
   */
  CustomerProfilesMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CustomerProfilesMetadata = exports.CustomerProfilesMetadata || (exports.CustomerProfilesMetadata = {})));
var DatadogMetadata;
(function (DatadogMetadata) {
  /**
   * @internal
   */
  DatadogMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DatadogMetadata = exports.DatadogMetadata || (exports.DatadogMetadata = {})));
var DynatraceMetadata;
(function (DynatraceMetadata) {
  /**
   * @internal
   */
  DynatraceMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DynatraceMetadata = exports.DynatraceMetadata || (exports.DynatraceMetadata = {})));
var EventBridgeMetadata;
(function (EventBridgeMetadata) {
  /**
   * @internal
   */
  EventBridgeMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EventBridgeMetadata = exports.EventBridgeMetadata || (exports.EventBridgeMetadata = {})));
var GoogleAnalyticsMetadata;
(function (GoogleAnalyticsMetadata) {
  /**
   * @internal
   */
  GoogleAnalyticsMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GoogleAnalyticsMetadata = exports.GoogleAnalyticsMetadata || (exports.GoogleAnalyticsMetadata = {})));
var HoneycodeMetadata;
(function (HoneycodeMetadata) {
  /**
   * @internal
   */
  HoneycodeMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((HoneycodeMetadata = exports.HoneycodeMetadata || (exports.HoneycodeMetadata = {})));
var InforNexusMetadata;
(function (InforNexusMetadata) {
  /**
   * @internal
   */
  InforNexusMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InforNexusMetadata = exports.InforNexusMetadata || (exports.InforNexusMetadata = {})));
var MarketoMetadata;
(function (MarketoMetadata) {
  /**
   * @internal
   */
  MarketoMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MarketoMetadata = exports.MarketoMetadata || (exports.MarketoMetadata = {})));
var RedshiftMetadata;
(function (RedshiftMetadata) {
  /**
   * @internal
   */
  RedshiftMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RedshiftMetadata = exports.RedshiftMetadata || (exports.RedshiftMetadata = {})));
var S3Metadata;
(function (S3Metadata) {
  /**
   * @internal
   */
  S3Metadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((S3Metadata = exports.S3Metadata || (exports.S3Metadata = {})));
var SalesforceMetadata;
(function (SalesforceMetadata) {
  /**
   * @internal
   */
  SalesforceMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SalesforceMetadata = exports.SalesforceMetadata || (exports.SalesforceMetadata = {})));
var ServiceNowMetadata;
(function (ServiceNowMetadata) {
  /**
   * @internal
   */
  ServiceNowMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ServiceNowMetadata = exports.ServiceNowMetadata || (exports.ServiceNowMetadata = {})));
var SingularMetadata;
(function (SingularMetadata) {
  /**
   * @internal
   */
  SingularMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SingularMetadata = exports.SingularMetadata || (exports.SingularMetadata = {})));
var SlackMetadata;
(function (SlackMetadata) {
  /**
   * @internal
   */
  SlackMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SlackMetadata = exports.SlackMetadata || (exports.SlackMetadata = {})));
var SnowflakeMetadata;
(function (SnowflakeMetadata) {
  /**
   * @internal
   */
  SnowflakeMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SnowflakeMetadata = exports.SnowflakeMetadata || (exports.SnowflakeMetadata = {})));
var TrendmicroMetadata;
(function (TrendmicroMetadata) {
  /**
   * @internal
   */
  TrendmicroMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TrendmicroMetadata = exports.TrendmicroMetadata || (exports.TrendmicroMetadata = {})));
var UpsolverMetadata;
(function (UpsolverMetadata) {
  /**
   * @internal
   */
  UpsolverMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpsolverMetadata = exports.UpsolverMetadata || (exports.UpsolverMetadata = {})));
var VeevaMetadata;
(function (VeevaMetadata) {
  /**
   * @internal
   */
  VeevaMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VeevaMetadata = exports.VeevaMetadata || (exports.VeevaMetadata = {})));
var ZendeskMetadata;
(function (ZendeskMetadata) {
  /**
   * @internal
   */
  ZendeskMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ZendeskMetadata = exports.ZendeskMetadata || (exports.ZendeskMetadata = {})));
var ConnectorMetadata;
(function (ConnectorMetadata) {
  /**
   * @internal
   */
  ConnectorMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConnectorMetadata = exports.ConnectorMetadata || (exports.ConnectorMetadata = {})));
var ConnectorType;
(function (ConnectorType) {
  ConnectorType["AMPLITUDE"] = "Amplitude";
  ConnectorType["CUSTOMERPROFILES"] = "CustomerProfiles";
  ConnectorType["DATADOG"] = "Datadog";
  ConnectorType["DYNATRACE"] = "Dynatrace";
  ConnectorType["EVENTBRIDGE"] = "EventBridge";
  ConnectorType["GOOGLEANALYTICS"] = "Googleanalytics";
  ConnectorType["HONEYCODE"] = "Honeycode";
  ConnectorType["INFORNEXUS"] = "Infornexus";
  ConnectorType["LOOKOUTMETRICS"] = "LookoutMetrics";
  ConnectorType["MARKETO"] = "Marketo";
  ConnectorType["REDSHIFT"] = "Redshift";
  ConnectorType["S3"] = "S3";
  ConnectorType["SALESFORCE"] = "Salesforce";
  ConnectorType["SERVICENOW"] = "Servicenow";
  ConnectorType["SINGULAR"] = "Singular";
  ConnectorType["SLACK"] = "Slack";
  ConnectorType["SNOWFLAKE"] = "Snowflake";
  ConnectorType["TRENDMICRO"] = "Trendmicro";
  ConnectorType["UPSOLVER"] = "Upsolver";
  ConnectorType["VEEVA"] = "Veeva";
  ConnectorType["ZENDESK"] = "Zendesk";
})((ConnectorType = exports.ConnectorType || (exports.ConnectorType = {})));
var ScheduleFrequencyType;
(function (ScheduleFrequencyType) {
  ScheduleFrequencyType["BYMINUTE"] = "BYMINUTE";
  ScheduleFrequencyType["DAILY"] = "DAILY";
  ScheduleFrequencyType["HOURLY"] = "HOURLY";
  ScheduleFrequencyType["MONTHLY"] = "MONTHLY";
  ScheduleFrequencyType["ONCE"] = "ONCE";
  ScheduleFrequencyType["WEEKLY"] = "WEEKLY";
})((ScheduleFrequencyType = exports.ScheduleFrequencyType || (exports.ScheduleFrequencyType = {})));
var TriggerType;
(function (TriggerType) {
  TriggerType["EVENT"] = "Event";
  TriggerType["ONDEMAND"] = "OnDemand";
  TriggerType["SCHEDULED"] = "Scheduled";
})((TriggerType = exports.TriggerType || (exports.TriggerType = {})));
var ConnectorConfiguration;
(function (ConnectorConfiguration) {
  /**
   * @internal
   */
  ConnectorConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConnectorConfiguration = exports.ConnectorConfiguration || (exports.ConnectorConfiguration = {})));
var ConnectorEntity;
(function (ConnectorEntity) {
  /**
   * @internal
   */
  ConnectorEntity.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConnectorEntity = exports.ConnectorEntity || (exports.ConnectorEntity = {})));
var WriteOperationType;
(function (WriteOperationType) {
  WriteOperationType["INSERT"] = "INSERT";
  WriteOperationType["UPDATE"] = "UPDATE";
  WriteOperationType["UPSERT"] = "UPSERT";
})((WriteOperationType = exports.WriteOperationType || (exports.WriteOperationType = {})));
var DestinationFieldProperties;
(function (DestinationFieldProperties) {
  /**
   * @internal
   */
  DestinationFieldProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DestinationFieldProperties = exports.DestinationFieldProperties || (exports.DestinationFieldProperties = {})));
var SourceFieldProperties;
(function (SourceFieldProperties) {
  /**
   * @internal
   */
  SourceFieldProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SourceFieldProperties = exports.SourceFieldProperties || (exports.SourceFieldProperties = {})));
var Operator;
(function (Operator) {
  Operator["ADDITION"] = "ADDITION";
  Operator["BETWEEN"] = "BETWEEN";
  Operator["CONTAINS"] = "CONTAINS";
  Operator["DIVISION"] = "DIVISION";
  Operator["EQUAL_TO"] = "EQUAL_TO";
  Operator["GREATER_THAN"] = "GREATER_THAN";
  Operator["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
  Operator["LESS_THAN"] = "LESS_THAN";
  Operator["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
  Operator["MASK_ALL"] = "MASK_ALL";
  Operator["MASK_FIRST_N"] = "MASK_FIRST_N";
  Operator["MASK_LAST_N"] = "MASK_LAST_N";
  Operator["MULTIPLICATION"] = "MULTIPLICATION";
  Operator["NOT_EQUAL_TO"] = "NOT_EQUAL_TO";
  Operator["NO_OP"] = "NO_OP";
  Operator["PROJECTION"] = "PROJECTION";
  Operator["SUBTRACTION"] = "SUBTRACTION";
  Operator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
  Operator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
  Operator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
  Operator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})((Operator = exports.Operator || (exports.Operator = {})));
var FieldTypeDetails;
(function (FieldTypeDetails) {
  /**
   * @internal
   */
  FieldTypeDetails.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FieldTypeDetails = exports.FieldTypeDetails || (exports.FieldTypeDetails = {})));
var SupportedFieldTypeDetails;
(function (SupportedFieldTypeDetails) {
  /**
   * @internal
   */
  SupportedFieldTypeDetails.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SupportedFieldTypeDetails = exports.SupportedFieldTypeDetails || (exports.SupportedFieldTypeDetails = {})));
var ConnectorEntityField;
(function (ConnectorEntityField) {
  /**
   * @internal
   */
  ConnectorEntityField.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConnectorEntityField = exports.ConnectorEntityField || (exports.ConnectorEntityField = {})));
var ConnectorOAuthRequest;
(function (ConnectorOAuthRequest) {
  /**
   * @internal
   */
  ConnectorOAuthRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConnectorOAuthRequest = exports.ConnectorOAuthRequest || (exports.ConnectorOAuthRequest = {})));
var DatadogConnectorOperator;
(function (DatadogConnectorOperator) {
  DatadogConnectorOperator["ADDITION"] = "ADDITION";
  DatadogConnectorOperator["BETWEEN"] = "BETWEEN";
  DatadogConnectorOperator["DIVISION"] = "DIVISION";
  DatadogConnectorOperator["EQUAL_TO"] = "EQUAL_TO";
  DatadogConnectorOperator["MASK_ALL"] = "MASK_ALL";
  DatadogConnectorOperator["MASK_FIRST_N"] = "MASK_FIRST_N";
  DatadogConnectorOperator["MASK_LAST_N"] = "MASK_LAST_N";
  DatadogConnectorOperator["MULTIPLICATION"] = "MULTIPLICATION";
  DatadogConnectorOperator["NO_OP"] = "NO_OP";
  DatadogConnectorOperator["PROJECTION"] = "PROJECTION";
  DatadogConnectorOperator["SUBTRACTION"] = "SUBTRACTION";
  DatadogConnectorOperator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
  DatadogConnectorOperator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
  DatadogConnectorOperator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
  DatadogConnectorOperator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})((DatadogConnectorOperator = exports.DatadogConnectorOperator || (exports.DatadogConnectorOperator = {})));
var DynatraceConnectorOperator;
(function (DynatraceConnectorOperator) {
  DynatraceConnectorOperator["ADDITION"] = "ADDITION";
  DynatraceConnectorOperator["BETWEEN"] = "BETWEEN";
  DynatraceConnectorOperator["DIVISION"] = "DIVISION";
  DynatraceConnectorOperator["EQUAL_TO"] = "EQUAL_TO";
  DynatraceConnectorOperator["MASK_ALL"] = "MASK_ALL";
  DynatraceConnectorOperator["MASK_FIRST_N"] = "MASK_FIRST_N";
  DynatraceConnectorOperator["MASK_LAST_N"] = "MASK_LAST_N";
  DynatraceConnectorOperator["MULTIPLICATION"] = "MULTIPLICATION";
  DynatraceConnectorOperator["NO_OP"] = "NO_OP";
  DynatraceConnectorOperator["PROJECTION"] = "PROJECTION";
  DynatraceConnectorOperator["SUBTRACTION"] = "SUBTRACTION";
  DynatraceConnectorOperator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
  DynatraceConnectorOperator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
  DynatraceConnectorOperator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
  DynatraceConnectorOperator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})((DynatraceConnectorOperator = exports.DynatraceConnectorOperator || (exports.DynatraceConnectorOperator = {})));
var GoogleAnalyticsConnectorOperator;
(function (GoogleAnalyticsConnectorOperator) {
  GoogleAnalyticsConnectorOperator["BETWEEN"] = "BETWEEN";
  GoogleAnalyticsConnectorOperator["PROJECTION"] = "PROJECTION";
})(
  (GoogleAnalyticsConnectorOperator =
    exports.GoogleAnalyticsConnectorOperator || (exports.GoogleAnalyticsConnectorOperator = {}))
);
var InforNexusConnectorOperator;
(function (InforNexusConnectorOperator) {
  InforNexusConnectorOperator["ADDITION"] = "ADDITION";
  InforNexusConnectorOperator["BETWEEN"] = "BETWEEN";
  InforNexusConnectorOperator["DIVISION"] = "DIVISION";
  InforNexusConnectorOperator["EQUAL_TO"] = "EQUAL_TO";
  InforNexusConnectorOperator["MASK_ALL"] = "MASK_ALL";
  InforNexusConnectorOperator["MASK_FIRST_N"] = "MASK_FIRST_N";
  InforNexusConnectorOperator["MASK_LAST_N"] = "MASK_LAST_N";
  InforNexusConnectorOperator["MULTIPLICATION"] = "MULTIPLICATION";
  InforNexusConnectorOperator["NO_OP"] = "NO_OP";
  InforNexusConnectorOperator["PROJECTION"] = "PROJECTION";
  InforNexusConnectorOperator["SUBTRACTION"] = "SUBTRACTION";
  InforNexusConnectorOperator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
  InforNexusConnectorOperator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
  InforNexusConnectorOperator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
  InforNexusConnectorOperator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})((InforNexusConnectorOperator = exports.InforNexusConnectorOperator || (exports.InforNexusConnectorOperator = {})));
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
})((MarketoConnectorOperator = exports.MarketoConnectorOperator || (exports.MarketoConnectorOperator = {})));
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
})((S3ConnectorOperator = exports.S3ConnectorOperator || (exports.S3ConnectorOperator = {})));
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
})((SalesforceConnectorOperator = exports.SalesforceConnectorOperator || (exports.SalesforceConnectorOperator = {})));
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
})((ServiceNowConnectorOperator = exports.ServiceNowConnectorOperator || (exports.ServiceNowConnectorOperator = {})));
var SingularConnectorOperator;
(function (SingularConnectorOperator) {
  SingularConnectorOperator["ADDITION"] = "ADDITION";
  SingularConnectorOperator["DIVISION"] = "DIVISION";
  SingularConnectorOperator["EQUAL_TO"] = "EQUAL_TO";
  SingularConnectorOperator["MASK_ALL"] = "MASK_ALL";
  SingularConnectorOperator["MASK_FIRST_N"] = "MASK_FIRST_N";
  SingularConnectorOperator["MASK_LAST_N"] = "MASK_LAST_N";
  SingularConnectorOperator["MULTIPLICATION"] = "MULTIPLICATION";
  SingularConnectorOperator["NO_OP"] = "NO_OP";
  SingularConnectorOperator["PROJECTION"] = "PROJECTION";
  SingularConnectorOperator["SUBTRACTION"] = "SUBTRACTION";
  SingularConnectorOperator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
  SingularConnectorOperator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
  SingularConnectorOperator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
  SingularConnectorOperator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})((SingularConnectorOperator = exports.SingularConnectorOperator || (exports.SingularConnectorOperator = {})));
var SlackConnectorOperator;
(function (SlackConnectorOperator) {
  SlackConnectorOperator["ADDITION"] = "ADDITION";
  SlackConnectorOperator["BETWEEN"] = "BETWEEN";
  SlackConnectorOperator["DIVISION"] = "DIVISION";
  SlackConnectorOperator["EQUAL_TO"] = "EQUAL_TO";
  SlackConnectorOperator["GREATER_THAN"] = "GREATER_THAN";
  SlackConnectorOperator["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
  SlackConnectorOperator["LESS_THAN"] = "LESS_THAN";
  SlackConnectorOperator["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
  SlackConnectorOperator["MASK_ALL"] = "MASK_ALL";
  SlackConnectorOperator["MASK_FIRST_N"] = "MASK_FIRST_N";
  SlackConnectorOperator["MASK_LAST_N"] = "MASK_LAST_N";
  SlackConnectorOperator["MULTIPLICATION"] = "MULTIPLICATION";
  SlackConnectorOperator["NO_OP"] = "NO_OP";
  SlackConnectorOperator["PROJECTION"] = "PROJECTION";
  SlackConnectorOperator["SUBTRACTION"] = "SUBTRACTION";
  SlackConnectorOperator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
  SlackConnectorOperator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
  SlackConnectorOperator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
  SlackConnectorOperator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})((SlackConnectorOperator = exports.SlackConnectorOperator || (exports.SlackConnectorOperator = {})));
var TrendmicroConnectorOperator;
(function (TrendmicroConnectorOperator) {
  TrendmicroConnectorOperator["ADDITION"] = "ADDITION";
  TrendmicroConnectorOperator["DIVISION"] = "DIVISION";
  TrendmicroConnectorOperator["EQUAL_TO"] = "EQUAL_TO";
  TrendmicroConnectorOperator["MASK_ALL"] = "MASK_ALL";
  TrendmicroConnectorOperator["MASK_FIRST_N"] = "MASK_FIRST_N";
  TrendmicroConnectorOperator["MASK_LAST_N"] = "MASK_LAST_N";
  TrendmicroConnectorOperator["MULTIPLICATION"] = "MULTIPLICATION";
  TrendmicroConnectorOperator["NO_OP"] = "NO_OP";
  TrendmicroConnectorOperator["PROJECTION"] = "PROJECTION";
  TrendmicroConnectorOperator["SUBTRACTION"] = "SUBTRACTION";
  TrendmicroConnectorOperator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
  TrendmicroConnectorOperator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
  TrendmicroConnectorOperator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
  TrendmicroConnectorOperator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})((TrendmicroConnectorOperator = exports.TrendmicroConnectorOperator || (exports.TrendmicroConnectorOperator = {})));
var VeevaConnectorOperator;
(function (VeevaConnectorOperator) {
  VeevaConnectorOperator["ADDITION"] = "ADDITION";
  VeevaConnectorOperator["BETWEEN"] = "BETWEEN";
  VeevaConnectorOperator["CONTAINS"] = "CONTAINS";
  VeevaConnectorOperator["DIVISION"] = "DIVISION";
  VeevaConnectorOperator["EQUAL_TO"] = "EQUAL_TO";
  VeevaConnectorOperator["GREATER_THAN"] = "GREATER_THAN";
  VeevaConnectorOperator["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
  VeevaConnectorOperator["LESS_THAN"] = "LESS_THAN";
  VeevaConnectorOperator["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
  VeevaConnectorOperator["MASK_ALL"] = "MASK_ALL";
  VeevaConnectorOperator["MASK_FIRST_N"] = "MASK_FIRST_N";
  VeevaConnectorOperator["MASK_LAST_N"] = "MASK_LAST_N";
  VeevaConnectorOperator["MULTIPLICATION"] = "MULTIPLICATION";
  VeevaConnectorOperator["NOT_EQUAL_TO"] = "NOT_EQUAL_TO";
  VeevaConnectorOperator["NO_OP"] = "NO_OP";
  VeevaConnectorOperator["PROJECTION"] = "PROJECTION";
  VeevaConnectorOperator["SUBTRACTION"] = "SUBTRACTION";
  VeevaConnectorOperator["VALIDATE_NON_NEGATIVE"] = "VALIDATE_NON_NEGATIVE";
  VeevaConnectorOperator["VALIDATE_NON_NULL"] = "VALIDATE_NON_NULL";
  VeevaConnectorOperator["VALIDATE_NON_ZERO"] = "VALIDATE_NON_ZERO";
  VeevaConnectorOperator["VALIDATE_NUMERIC"] = "VALIDATE_NUMERIC";
})((VeevaConnectorOperator = exports.VeevaConnectorOperator || (exports.VeevaConnectorOperator = {})));
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
})((ZendeskConnectorOperator = exports.ZendeskConnectorOperator || (exports.ZendeskConnectorOperator = {})));
var ConnectorOperator;
(function (ConnectorOperator) {
  /**
   * @internal
   */
  ConnectorOperator.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConnectorOperator = exports.ConnectorOperator || (exports.ConnectorOperator = {})));
var DatadogConnectorProfileProperties;
(function (DatadogConnectorProfileProperties) {
  /**
   * @internal
   */
  DatadogConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DatadogConnectorProfileProperties =
    exports.DatadogConnectorProfileProperties || (exports.DatadogConnectorProfileProperties = {}))
);
var DynatraceConnectorProfileProperties;
(function (DynatraceConnectorProfileProperties) {
  /**
   * @internal
   */
  DynatraceConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DynatraceConnectorProfileProperties =
    exports.DynatraceConnectorProfileProperties || (exports.DynatraceConnectorProfileProperties = {}))
);
var GoogleAnalyticsConnectorProfileProperties;
(function (GoogleAnalyticsConnectorProfileProperties) {
  /**
   * @internal
   */
  GoogleAnalyticsConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GoogleAnalyticsConnectorProfileProperties =
    exports.GoogleAnalyticsConnectorProfileProperties || (exports.GoogleAnalyticsConnectorProfileProperties = {}))
);
var HoneycodeConnectorProfileProperties;
(function (HoneycodeConnectorProfileProperties) {
  /**
   * @internal
   */
  HoneycodeConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (HoneycodeConnectorProfileProperties =
    exports.HoneycodeConnectorProfileProperties || (exports.HoneycodeConnectorProfileProperties = {}))
);
var InforNexusConnectorProfileProperties;
(function (InforNexusConnectorProfileProperties) {
  /**
   * @internal
   */
  InforNexusConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InforNexusConnectorProfileProperties =
    exports.InforNexusConnectorProfileProperties || (exports.InforNexusConnectorProfileProperties = {}))
);
var MarketoConnectorProfileProperties;
(function (MarketoConnectorProfileProperties) {
  /**
   * @internal
   */
  MarketoConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (MarketoConnectorProfileProperties =
    exports.MarketoConnectorProfileProperties || (exports.MarketoConnectorProfileProperties = {}))
);
var RedshiftConnectorProfileProperties;
(function (RedshiftConnectorProfileProperties) {
  /**
   * @internal
   */
  RedshiftConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RedshiftConnectorProfileProperties =
    exports.RedshiftConnectorProfileProperties || (exports.RedshiftConnectorProfileProperties = {}))
);
var SalesforceConnectorProfileProperties;
(function (SalesforceConnectorProfileProperties) {
  /**
   * @internal
   */
  SalesforceConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SalesforceConnectorProfileProperties =
    exports.SalesforceConnectorProfileProperties || (exports.SalesforceConnectorProfileProperties = {}))
);
var ServiceNowConnectorProfileProperties;
(function (ServiceNowConnectorProfileProperties) {
  /**
   * @internal
   */
  ServiceNowConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ServiceNowConnectorProfileProperties =
    exports.ServiceNowConnectorProfileProperties || (exports.ServiceNowConnectorProfileProperties = {}))
);
var SingularConnectorProfileProperties;
(function (SingularConnectorProfileProperties) {
  /**
   * @internal
   */
  SingularConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SingularConnectorProfileProperties =
    exports.SingularConnectorProfileProperties || (exports.SingularConnectorProfileProperties = {}))
);
var SlackConnectorProfileProperties;
(function (SlackConnectorProfileProperties) {
  /**
   * @internal
   */
  SlackConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SlackConnectorProfileProperties =
    exports.SlackConnectorProfileProperties || (exports.SlackConnectorProfileProperties = {}))
);
var SnowflakeConnectorProfileProperties;
(function (SnowflakeConnectorProfileProperties) {
  /**
   * @internal
   */
  SnowflakeConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SnowflakeConnectorProfileProperties =
    exports.SnowflakeConnectorProfileProperties || (exports.SnowflakeConnectorProfileProperties = {}))
);
var TrendmicroConnectorProfileProperties;
(function (TrendmicroConnectorProfileProperties) {
  /**
   * @internal
   */
  TrendmicroConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TrendmicroConnectorProfileProperties =
    exports.TrendmicroConnectorProfileProperties || (exports.TrendmicroConnectorProfileProperties = {}))
);
var VeevaConnectorProfileProperties;
(function (VeevaConnectorProfileProperties) {
  /**
   * @internal
   */
  VeevaConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (VeevaConnectorProfileProperties =
    exports.VeevaConnectorProfileProperties || (exports.VeevaConnectorProfileProperties = {}))
);
var ZendeskConnectorProfileProperties;
(function (ZendeskConnectorProfileProperties) {
  /**
   * @internal
   */
  ZendeskConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ZendeskConnectorProfileProperties =
    exports.ZendeskConnectorProfileProperties || (exports.ZendeskConnectorProfileProperties = {}))
);
var ConnectorProfileProperties;
(function (ConnectorProfileProperties) {
  /**
   * @internal
   */
  ConnectorProfileProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConnectorProfileProperties = exports.ConnectorProfileProperties || (exports.ConnectorProfileProperties = {})));
var ConnectorProfile;
(function (ConnectorProfile) {
  /**
   * @internal
   */
  ConnectorProfile.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConnectorProfile = exports.ConnectorProfile || (exports.ConnectorProfile = {})));
var DatadogConnectorProfileCredentials;
(function (DatadogConnectorProfileCredentials) {
  /**
   * @internal
   */
  DatadogConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DatadogConnectorProfileCredentials =
    exports.DatadogConnectorProfileCredentials || (exports.DatadogConnectorProfileCredentials = {}))
);
var DynatraceConnectorProfileCredentials;
(function (DynatraceConnectorProfileCredentials) {
  /**
   * @internal
   */
  DynatraceConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DynatraceConnectorProfileCredentials =
    exports.DynatraceConnectorProfileCredentials || (exports.DynatraceConnectorProfileCredentials = {}))
);
var GoogleAnalyticsConnectorProfileCredentials;
(function (GoogleAnalyticsConnectorProfileCredentials) {
  /**
   * @internal
   */
  GoogleAnalyticsConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (GoogleAnalyticsConnectorProfileCredentials =
    exports.GoogleAnalyticsConnectorProfileCredentials || (exports.GoogleAnalyticsConnectorProfileCredentials = {}))
);
var HoneycodeConnectorProfileCredentials;
(function (HoneycodeConnectorProfileCredentials) {
  /**
   * @internal
   */
  HoneycodeConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (HoneycodeConnectorProfileCredentials =
    exports.HoneycodeConnectorProfileCredentials || (exports.HoneycodeConnectorProfileCredentials = {}))
);
var InforNexusConnectorProfileCredentials;
(function (InforNexusConnectorProfileCredentials) {
  /**
   * @internal
   */
  InforNexusConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessKeyId && { accessKeyId: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (InforNexusConnectorProfileCredentials =
    exports.InforNexusConnectorProfileCredentials || (exports.InforNexusConnectorProfileCredentials = {}))
);
var MarketoConnectorProfileCredentials;
(function (MarketoConnectorProfileCredentials) {
  /**
   * @internal
   */
  MarketoConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (MarketoConnectorProfileCredentials =
    exports.MarketoConnectorProfileCredentials || (exports.MarketoConnectorProfileCredentials = {}))
);
var RedshiftConnectorProfileCredentials;
(function (RedshiftConnectorProfileCredentials) {
  /**
   * @internal
   */
  RedshiftConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.password && { password: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (RedshiftConnectorProfileCredentials =
    exports.RedshiftConnectorProfileCredentials || (exports.RedshiftConnectorProfileCredentials = {}))
);
var SalesforceConnectorProfileCredentials;
(function (SalesforceConnectorProfileCredentials) {
  /**
   * @internal
   */
  SalesforceConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.clientCredentialsArn && { clientCredentialsArn: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (SalesforceConnectorProfileCredentials =
    exports.SalesforceConnectorProfileCredentials || (exports.SalesforceConnectorProfileCredentials = {}))
);
var ServiceNowConnectorProfileCredentials;
(function (ServiceNowConnectorProfileCredentials) {
  /**
   * @internal
   */
  ServiceNowConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.password && { password: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ServiceNowConnectorProfileCredentials =
    exports.ServiceNowConnectorProfileCredentials || (exports.ServiceNowConnectorProfileCredentials = {}))
);
var SingularConnectorProfileCredentials;
(function (SingularConnectorProfileCredentials) {
  /**
   * @internal
   */
  SingularConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SingularConnectorProfileCredentials =
    exports.SingularConnectorProfileCredentials || (exports.SingularConnectorProfileCredentials = {}))
);
var SlackConnectorProfileCredentials;
(function (SlackConnectorProfileCredentials) {
  /**
   * @internal
   */
  SlackConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (SlackConnectorProfileCredentials =
    exports.SlackConnectorProfileCredentials || (exports.SlackConnectorProfileCredentials = {}))
);
var SnowflakeConnectorProfileCredentials;
(function (SnowflakeConnectorProfileCredentials) {
  /**
   * @internal
   */
  SnowflakeConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.password && { password: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (SnowflakeConnectorProfileCredentials =
    exports.SnowflakeConnectorProfileCredentials || (exports.SnowflakeConnectorProfileCredentials = {}))
);
var TrendmicroConnectorProfileCredentials;
(function (TrendmicroConnectorProfileCredentials) {
  /**
   * @internal
   */
  TrendmicroConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.apiSecretKey && { apiSecretKey: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (TrendmicroConnectorProfileCredentials =
    exports.TrendmicroConnectorProfileCredentials || (exports.TrendmicroConnectorProfileCredentials = {}))
);
var VeevaConnectorProfileCredentials;
(function (VeevaConnectorProfileCredentials) {
  /**
   * @internal
   */
  VeevaConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.password && { password: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (VeevaConnectorProfileCredentials =
    exports.VeevaConnectorProfileCredentials || (exports.VeevaConnectorProfileCredentials = {}))
);
var ZendeskConnectorProfileCredentials;
(function (ZendeskConnectorProfileCredentials) {
  /**
   * @internal
   */
  ZendeskConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ZendeskConnectorProfileCredentials =
    exports.ZendeskConnectorProfileCredentials || (exports.ZendeskConnectorProfileCredentials = {}))
);
var ConnectorProfileCredentials;
(function (ConnectorProfileCredentials) {
  /**
   * @internal
   */
  ConnectorProfileCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Amplitude && { Amplitude: AmplitudeConnectorProfileCredentials.filterSensitiveLog(obj.Amplitude) }),
    ...(obj.GoogleAnalytics && {
      GoogleAnalytics: GoogleAnalyticsConnectorProfileCredentials.filterSensitiveLog(obj.GoogleAnalytics),
    }),
    ...(obj.Honeycode && { Honeycode: HoneycodeConnectorProfileCredentials.filterSensitiveLog(obj.Honeycode) }),
    ...(obj.InforNexus && { InforNexus: InforNexusConnectorProfileCredentials.filterSensitiveLog(obj.InforNexus) }),
    ...(obj.Marketo && { Marketo: MarketoConnectorProfileCredentials.filterSensitiveLog(obj.Marketo) }),
    ...(obj.Redshift && { Redshift: RedshiftConnectorProfileCredentials.filterSensitiveLog(obj.Redshift) }),
    ...(obj.Salesforce && { Salesforce: SalesforceConnectorProfileCredentials.filterSensitiveLog(obj.Salesforce) }),
    ...(obj.ServiceNow && { ServiceNow: ServiceNowConnectorProfileCredentials.filterSensitiveLog(obj.ServiceNow) }),
    ...(obj.Slack && { Slack: SlackConnectorProfileCredentials.filterSensitiveLog(obj.Slack) }),
    ...(obj.Snowflake && { Snowflake: SnowflakeConnectorProfileCredentials.filterSensitiveLog(obj.Snowflake) }),
    ...(obj.Trendmicro && { Trendmicro: TrendmicroConnectorProfileCredentials.filterSensitiveLog(obj.Trendmicro) }),
    ...(obj.Veeva && { Veeva: VeevaConnectorProfileCredentials.filterSensitiveLog(obj.Veeva) }),
    ...(obj.Zendesk && { Zendesk: ZendeskConnectorProfileCredentials.filterSensitiveLog(obj.Zendesk) }),
  });
})((ConnectorProfileCredentials = exports.ConnectorProfileCredentials || (exports.ConnectorProfileCredentials = {})));
var ConnectorProfileConfig;
(function (ConnectorProfileConfig) {
  /**
   * @internal
   */
  ConnectorProfileConfig.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.connectorProfileCredentials && {
      connectorProfileCredentials: ConnectorProfileCredentials.filterSensitiveLog(obj.connectorProfileCredentials),
    }),
  });
})((ConnectorProfileConfig = exports.ConnectorProfileConfig || (exports.ConnectorProfileConfig = {})));
var ConnectorServerException;
(function (ConnectorServerException) {
  /**
   * @internal
   */
  ConnectorServerException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConnectorServerException = exports.ConnectorServerException || (exports.ConnectorServerException = {})));
var CreateConnectorProfileRequest;
(function (CreateConnectorProfileRequest) {
  /**
   * @internal
   */
  CreateConnectorProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateConnectorProfileRequest =
    exports.CreateConnectorProfileRequest || (exports.CreateConnectorProfileRequest = {}))
);
var CreateConnectorProfileResponse;
(function (CreateConnectorProfileResponse) {
  /**
   * @internal
   */
  CreateConnectorProfileResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateConnectorProfileResponse =
    exports.CreateConnectorProfileResponse || (exports.CreateConnectorProfileResponse = {}))
);
var InternalServerException;
(function (InternalServerException) {
  /**
   * @internal
   */
  InternalServerException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalServerException = exports.InternalServerException || (exports.InternalServerException = {})));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
  /**
   * @internal
   */
  ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ServiceQuotaExceededException =
    exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}))
);
var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationException = exports.ValidationException || (exports.ValidationException = {})));
var CustomerProfilesDestinationProperties;
(function (CustomerProfilesDestinationProperties) {
  /**
   * @internal
   */
  CustomerProfilesDestinationProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CustomerProfilesDestinationProperties =
    exports.CustomerProfilesDestinationProperties || (exports.CustomerProfilesDestinationProperties = {}))
);
var ErrorHandlingConfig;
(function (ErrorHandlingConfig) {
  /**
   * @internal
   */
  ErrorHandlingConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ErrorHandlingConfig = exports.ErrorHandlingConfig || (exports.ErrorHandlingConfig = {})));
var EventBridgeDestinationProperties;
(function (EventBridgeDestinationProperties) {
  /**
   * @internal
   */
  EventBridgeDestinationProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (EventBridgeDestinationProperties =
    exports.EventBridgeDestinationProperties || (exports.EventBridgeDestinationProperties = {}))
);
var HoneycodeDestinationProperties;
(function (HoneycodeDestinationProperties) {
  /**
   * @internal
   */
  HoneycodeDestinationProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (HoneycodeDestinationProperties =
    exports.HoneycodeDestinationProperties || (exports.HoneycodeDestinationProperties = {}))
);
var LookoutMetricsDestinationProperties;
(function (LookoutMetricsDestinationProperties) {
  /**
   * @internal
   */
  LookoutMetricsDestinationProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (LookoutMetricsDestinationProperties =
    exports.LookoutMetricsDestinationProperties || (exports.LookoutMetricsDestinationProperties = {}))
);
var RedshiftDestinationProperties;
(function (RedshiftDestinationProperties) {
  /**
   * @internal
   */
  RedshiftDestinationProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RedshiftDestinationProperties =
    exports.RedshiftDestinationProperties || (exports.RedshiftDestinationProperties = {}))
);
var FileType;
(function (FileType) {
  FileType["CSV"] = "CSV";
  FileType["JSON"] = "JSON";
  FileType["PARQUET"] = "PARQUET";
})((FileType = exports.FileType || (exports.FileType = {})));
var PrefixFormat;
(function (PrefixFormat) {
  PrefixFormat["DAY"] = "DAY";
  PrefixFormat["HOUR"] = "HOUR";
  PrefixFormat["MINUTE"] = "MINUTE";
  PrefixFormat["MONTH"] = "MONTH";
  PrefixFormat["YEAR"] = "YEAR";
})((PrefixFormat = exports.PrefixFormat || (exports.PrefixFormat = {})));
var PrefixType;
(function (PrefixType) {
  PrefixType["FILENAME"] = "FILENAME";
  PrefixType["PATH"] = "PATH";
  PrefixType["PATH_AND_FILENAME"] = "PATH_AND_FILENAME";
})((PrefixType = exports.PrefixType || (exports.PrefixType = {})));
var PrefixConfig;
(function (PrefixConfig) {
  /**
   * @internal
   */
  PrefixConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PrefixConfig = exports.PrefixConfig || (exports.PrefixConfig = {})));
var S3OutputFormatConfig;
(function (S3OutputFormatConfig) {
  /**
   * @internal
   */
  S3OutputFormatConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((S3OutputFormatConfig = exports.S3OutputFormatConfig || (exports.S3OutputFormatConfig = {})));
var S3DestinationProperties;
(function (S3DestinationProperties) {
  /**
   * @internal
   */
  S3DestinationProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((S3DestinationProperties = exports.S3DestinationProperties || (exports.S3DestinationProperties = {})));
var SalesforceDestinationProperties;
(function (SalesforceDestinationProperties) {
  /**
   * @internal
   */
  SalesforceDestinationProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SalesforceDestinationProperties =
    exports.SalesforceDestinationProperties || (exports.SalesforceDestinationProperties = {}))
);
var SnowflakeDestinationProperties;
(function (SnowflakeDestinationProperties) {
  /**
   * @internal
   */
  SnowflakeDestinationProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SnowflakeDestinationProperties =
    exports.SnowflakeDestinationProperties || (exports.SnowflakeDestinationProperties = {}))
);
var UpsolverS3OutputFormatConfig;
(function (UpsolverS3OutputFormatConfig) {
  /**
   * @internal
   */
  UpsolverS3OutputFormatConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpsolverS3OutputFormatConfig = exports.UpsolverS3OutputFormatConfig || (exports.UpsolverS3OutputFormatConfig = {}))
);
var UpsolverDestinationProperties;
(function (UpsolverDestinationProperties) {
  /**
   * @internal
   */
  UpsolverDestinationProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpsolverDestinationProperties =
    exports.UpsolverDestinationProperties || (exports.UpsolverDestinationProperties = {}))
);
var ZendeskDestinationProperties;
(function (ZendeskDestinationProperties) {
  /**
   * @internal
   */
  ZendeskDestinationProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ZendeskDestinationProperties = exports.ZendeskDestinationProperties || (exports.ZendeskDestinationProperties = {}))
);
var DestinationConnectorProperties;
(function (DestinationConnectorProperties) {
  /**
   * @internal
   */
  DestinationConnectorProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DestinationConnectorProperties =
    exports.DestinationConnectorProperties || (exports.DestinationConnectorProperties = {}))
);
var DestinationFlowConfig;
(function (DestinationFlowConfig) {
  /**
   * @internal
   */
  DestinationFlowConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DestinationFlowConfig = exports.DestinationFlowConfig || (exports.DestinationFlowConfig = {})));
var IncrementalPullConfig;
(function (IncrementalPullConfig) {
  /**
   * @internal
   */
  IncrementalPullConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((IncrementalPullConfig = exports.IncrementalPullConfig || (exports.IncrementalPullConfig = {})));
var DatadogSourceProperties;
(function (DatadogSourceProperties) {
  /**
   * @internal
   */
  DatadogSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DatadogSourceProperties = exports.DatadogSourceProperties || (exports.DatadogSourceProperties = {})));
var DynatraceSourceProperties;
(function (DynatraceSourceProperties) {
  /**
   * @internal
   */
  DynatraceSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DynatraceSourceProperties = exports.DynatraceSourceProperties || (exports.DynatraceSourceProperties = {})));
var GoogleAnalyticsSourceProperties;
(function (GoogleAnalyticsSourceProperties) {
  /**
   * @internal
   */
  GoogleAnalyticsSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GoogleAnalyticsSourceProperties =
    exports.GoogleAnalyticsSourceProperties || (exports.GoogleAnalyticsSourceProperties = {}))
);
var InforNexusSourceProperties;
(function (InforNexusSourceProperties) {
  /**
   * @internal
   */
  InforNexusSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InforNexusSourceProperties = exports.InforNexusSourceProperties || (exports.InforNexusSourceProperties = {})));
var MarketoSourceProperties;
(function (MarketoSourceProperties) {
  /**
   * @internal
   */
  MarketoSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MarketoSourceProperties = exports.MarketoSourceProperties || (exports.MarketoSourceProperties = {})));
var S3SourceProperties;
(function (S3SourceProperties) {
  /**
   * @internal
   */
  S3SourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((S3SourceProperties = exports.S3SourceProperties || (exports.S3SourceProperties = {})));
var SalesforceSourceProperties;
(function (SalesforceSourceProperties) {
  /**
   * @internal
   */
  SalesforceSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SalesforceSourceProperties = exports.SalesforceSourceProperties || (exports.SalesforceSourceProperties = {})));
var ServiceNowSourceProperties;
(function (ServiceNowSourceProperties) {
  /**
   * @internal
   */
  ServiceNowSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ServiceNowSourceProperties = exports.ServiceNowSourceProperties || (exports.ServiceNowSourceProperties = {})));
var SingularSourceProperties;
(function (SingularSourceProperties) {
  /**
   * @internal
   */
  SingularSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SingularSourceProperties = exports.SingularSourceProperties || (exports.SingularSourceProperties = {})));
var SlackSourceProperties;
(function (SlackSourceProperties) {
  /**
   * @internal
   */
  SlackSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SlackSourceProperties = exports.SlackSourceProperties || (exports.SlackSourceProperties = {})));
var TrendmicroSourceProperties;
(function (TrendmicroSourceProperties) {
  /**
   * @internal
   */
  TrendmicroSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TrendmicroSourceProperties = exports.TrendmicroSourceProperties || (exports.TrendmicroSourceProperties = {})));
var VeevaSourceProperties;
(function (VeevaSourceProperties) {
  /**
   * @internal
   */
  VeevaSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VeevaSourceProperties = exports.VeevaSourceProperties || (exports.VeevaSourceProperties = {})));
var ZendeskSourceProperties;
(function (ZendeskSourceProperties) {
  /**
   * @internal
   */
  ZendeskSourceProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ZendeskSourceProperties = exports.ZendeskSourceProperties || (exports.ZendeskSourceProperties = {})));
var SourceConnectorProperties;
(function (SourceConnectorProperties) {
  /**
   * @internal
   */
  SourceConnectorProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SourceConnectorProperties = exports.SourceConnectorProperties || (exports.SourceConnectorProperties = {})));
var SourceFlowConfig;
(function (SourceFlowConfig) {
  /**
   * @internal
   */
  SourceFlowConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SourceFlowConfig = exports.SourceFlowConfig || (exports.SourceFlowConfig = {})));
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
})((OperatorPropertiesKeys = exports.OperatorPropertiesKeys || (exports.OperatorPropertiesKeys = {})));
var TaskType;
(function (TaskType) {
  TaskType["ARITHMETIC"] = "Arithmetic";
  TaskType["FILTER"] = "Filter";
  TaskType["MAP"] = "Map";
  TaskType["MASK"] = "Mask";
  TaskType["MERGE"] = "Merge";
  TaskType["TRUNCATE"] = "Truncate";
  TaskType["VALIDATE"] = "Validate";
})((TaskType = exports.TaskType || (exports.TaskType = {})));
var Task;
(function (Task) {
  /**
   * @internal
   */
  Task.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Task = exports.Task || (exports.Task = {})));
var DataPullMode;
(function (DataPullMode) {
  DataPullMode["COMPLETE"] = "Complete";
  DataPullMode["INCREMENTAL"] = "Incremental";
})((DataPullMode = exports.DataPullMode || (exports.DataPullMode = {})));
var ScheduledTriggerProperties;
(function (ScheduledTriggerProperties) {
  /**
   * @internal
   */
  ScheduledTriggerProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScheduledTriggerProperties = exports.ScheduledTriggerProperties || (exports.ScheduledTriggerProperties = {})));
var TriggerProperties;
(function (TriggerProperties) {
  /**
   * @internal
   */
  TriggerProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TriggerProperties = exports.TriggerProperties || (exports.TriggerProperties = {})));
var TriggerConfig;
(function (TriggerConfig) {
  /**
   * @internal
   */
  TriggerConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TriggerConfig = exports.TriggerConfig || (exports.TriggerConfig = {})));
var CreateFlowRequest;
(function (CreateFlowRequest) {
  /**
   * @internal
   */
  CreateFlowRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateFlowRequest = exports.CreateFlowRequest || (exports.CreateFlowRequest = {})));
var FlowStatus;
(function (FlowStatus) {
  FlowStatus["ACTIVE"] = "Active";
  FlowStatus["DELETED"] = "Deleted";
  FlowStatus["DEPRECATED"] = "Deprecated";
  FlowStatus["DRAFT"] = "Draft";
  FlowStatus["ERRORED"] = "Errored";
  FlowStatus["SUSPENDED"] = "Suspended";
})((FlowStatus = exports.FlowStatus || (exports.FlowStatus = {})));
var CreateFlowResponse;
(function (CreateFlowResponse) {
  /**
   * @internal
   */
  CreateFlowResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateFlowResponse = exports.CreateFlowResponse || (exports.CreateFlowResponse = {})));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var DeleteConnectorProfileRequest;
(function (DeleteConnectorProfileRequest) {
  /**
   * @internal
   */
  DeleteConnectorProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteConnectorProfileRequest =
    exports.DeleteConnectorProfileRequest || (exports.DeleteConnectorProfileRequest = {}))
);
var DeleteConnectorProfileResponse;
(function (DeleteConnectorProfileResponse) {
  /**
   * @internal
   */
  DeleteConnectorProfileResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteConnectorProfileResponse =
    exports.DeleteConnectorProfileResponse || (exports.DeleteConnectorProfileResponse = {}))
);
var DeleteFlowRequest;
(function (DeleteFlowRequest) {
  /**
   * @internal
   */
  DeleteFlowRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteFlowRequest = exports.DeleteFlowRequest || (exports.DeleteFlowRequest = {})));
var DeleteFlowResponse;
(function (DeleteFlowResponse) {
  /**
   * @internal
   */
  DeleteFlowResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteFlowResponse = exports.DeleteFlowResponse || (exports.DeleteFlowResponse = {})));
var DescribeConnectorEntityRequest;
(function (DescribeConnectorEntityRequest) {
  /**
   * @internal
   */
  DescribeConnectorEntityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeConnectorEntityRequest =
    exports.DescribeConnectorEntityRequest || (exports.DescribeConnectorEntityRequest = {}))
);
var DescribeConnectorEntityResponse;
(function (DescribeConnectorEntityResponse) {
  /**
   * @internal
   */
  DescribeConnectorEntityResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeConnectorEntityResponse =
    exports.DescribeConnectorEntityResponse || (exports.DescribeConnectorEntityResponse = {}))
);
var DescribeConnectorProfilesRequest;
(function (DescribeConnectorProfilesRequest) {
  /**
   * @internal
   */
  DescribeConnectorProfilesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeConnectorProfilesRequest =
    exports.DescribeConnectorProfilesRequest || (exports.DescribeConnectorProfilesRequest = {}))
);
var DescribeConnectorProfilesResponse;
(function (DescribeConnectorProfilesResponse) {
  /**
   * @internal
   */
  DescribeConnectorProfilesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeConnectorProfilesResponse =
    exports.DescribeConnectorProfilesResponse || (exports.DescribeConnectorProfilesResponse = {}))
);
var DescribeConnectorsRequest;
(function (DescribeConnectorsRequest) {
  /**
   * @internal
   */
  DescribeConnectorsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeConnectorsRequest = exports.DescribeConnectorsRequest || (exports.DescribeConnectorsRequest = {})));
var DescribeConnectorsResponse;
(function (DescribeConnectorsResponse) {
  /**
   * @internal
   */
  DescribeConnectorsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeConnectorsResponse = exports.DescribeConnectorsResponse || (exports.DescribeConnectorsResponse = {})));
var DescribeFlowRequest;
(function (DescribeFlowRequest) {
  /**
   * @internal
   */
  DescribeFlowRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeFlowRequest = exports.DescribeFlowRequest || (exports.DescribeFlowRequest = {})));
var ExecutionStatus;
(function (ExecutionStatus) {
  ExecutionStatus["ERROR"] = "Error";
  ExecutionStatus["INPROGRESS"] = "InProgress";
  ExecutionStatus["SUCCESSFUL"] = "Successful";
})((ExecutionStatus = exports.ExecutionStatus || (exports.ExecutionStatus = {})));
var ExecutionDetails;
(function (ExecutionDetails) {
  /**
   * @internal
   */
  ExecutionDetails.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExecutionDetails = exports.ExecutionDetails || (exports.ExecutionDetails = {})));
var DescribeFlowResponse;
(function (DescribeFlowResponse) {
  /**
   * @internal
   */
  DescribeFlowResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeFlowResponse = exports.DescribeFlowResponse || (exports.DescribeFlowResponse = {})));
var DescribeFlowExecutionRecordsRequest;
(function (DescribeFlowExecutionRecordsRequest) {
  /**
   * @internal
   */
  DescribeFlowExecutionRecordsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeFlowExecutionRecordsRequest =
    exports.DescribeFlowExecutionRecordsRequest || (exports.DescribeFlowExecutionRecordsRequest = {}))
);
var ErrorInfo;
(function (ErrorInfo) {
  /**
   * @internal
   */
  ErrorInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ErrorInfo = exports.ErrorInfo || (exports.ErrorInfo = {})));
var ExecutionResult;
(function (ExecutionResult) {
  /**
   * @internal
   */
  ExecutionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExecutionResult = exports.ExecutionResult || (exports.ExecutionResult = {})));
var ExecutionRecord;
(function (ExecutionRecord) {
  /**
   * @internal
   */
  ExecutionRecord.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExecutionRecord = exports.ExecutionRecord || (exports.ExecutionRecord = {})));
var DescribeFlowExecutionRecordsResponse;
(function (DescribeFlowExecutionRecordsResponse) {
  /**
   * @internal
   */
  DescribeFlowExecutionRecordsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeFlowExecutionRecordsResponse =
    exports.DescribeFlowExecutionRecordsResponse || (exports.DescribeFlowExecutionRecordsResponse = {}))
);
var FlowDefinition;
(function (FlowDefinition) {
  /**
   * @internal
   */
  FlowDefinition.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FlowDefinition = exports.FlowDefinition || (exports.FlowDefinition = {})));
var ListConnectorEntitiesRequest;
(function (ListConnectorEntitiesRequest) {
  /**
   * @internal
   */
  ListConnectorEntitiesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListConnectorEntitiesRequest = exports.ListConnectorEntitiesRequest || (exports.ListConnectorEntitiesRequest = {}))
);
var ListConnectorEntitiesResponse;
(function (ListConnectorEntitiesResponse) {
  /**
   * @internal
   */
  ListConnectorEntitiesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListConnectorEntitiesResponse =
    exports.ListConnectorEntitiesResponse || (exports.ListConnectorEntitiesResponse = {}))
);
var ListFlowsRequest;
(function (ListFlowsRequest) {
  /**
   * @internal
   */
  ListFlowsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListFlowsRequest = exports.ListFlowsRequest || (exports.ListFlowsRequest = {})));
var ListFlowsResponse;
(function (ListFlowsResponse) {
  /**
   * @internal
   */
  ListFlowsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListFlowsResponse = exports.ListFlowsResponse || (exports.ListFlowsResponse = {})));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {})));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {})));
var StartFlowRequest;
(function (StartFlowRequest) {
  /**
   * @internal
   */
  StartFlowRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartFlowRequest = exports.StartFlowRequest || (exports.StartFlowRequest = {})));
var StartFlowResponse;
(function (StartFlowResponse) {
  /**
   * @internal
   */
  StartFlowResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartFlowResponse = exports.StartFlowResponse || (exports.StartFlowResponse = {})));
var StopFlowRequest;
(function (StopFlowRequest) {
  /**
   * @internal
   */
  StopFlowRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopFlowRequest = exports.StopFlowRequest || (exports.StopFlowRequest = {})));
var StopFlowResponse;
(function (StopFlowResponse) {
  /**
   * @internal
   */
  StopFlowResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopFlowResponse = exports.StopFlowResponse || (exports.StopFlowResponse = {})));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
  /**
   * @internal
   */
  UnsupportedOperationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UnsupportedOperationException =
    exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}))
);
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {})));
var UpdateConnectorProfileRequest;
(function (UpdateConnectorProfileRequest) {
  /**
   * @internal
   */
  UpdateConnectorProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateConnectorProfileRequest =
    exports.UpdateConnectorProfileRequest || (exports.UpdateConnectorProfileRequest = {}))
);
var UpdateConnectorProfileResponse;
(function (UpdateConnectorProfileResponse) {
  /**
   * @internal
   */
  UpdateConnectorProfileResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateConnectorProfileResponse =
    exports.UpdateConnectorProfileResponse || (exports.UpdateConnectorProfileResponse = {}))
);
var UpdateFlowRequest;
(function (UpdateFlowRequest) {
  /**
   * @internal
   */
  UpdateFlowRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateFlowRequest = exports.UpdateFlowRequest || (exports.UpdateFlowRequest = {})));
var UpdateFlowResponse;
(function (UpdateFlowResponse) {
  /**
   * @internal
   */
  UpdateFlowResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateFlowResponse = exports.UpdateFlowResponse || (exports.UpdateFlowResponse = {})));
//# sourceMappingURL=models_0.js.map
