import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AggregationType;
(function (AggregationType) {
  AggregationType["NONE"] = "None";
  AggregationType["SINGLE_FILE"] = "SingleFile";
})(AggregationType || (AggregationType = {}));
export var AggregationConfig;
(function (AggregationConfig) {
  /**
   * @internal
   */
  AggregationConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AggregationConfig || (AggregationConfig = {}));
export var AmplitudeConnectorOperator;
(function (AmplitudeConnectorOperator) {
  AmplitudeConnectorOperator["BETWEEN"] = "BETWEEN";
})(AmplitudeConnectorOperator || (AmplitudeConnectorOperator = {}));
export var AmplitudeConnectorProfileCredentials;
(function (AmplitudeConnectorProfileCredentials) {
  /**
   * @internal
   */
  AmplitudeConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.secretKey && { secretKey: SENSITIVE_STRING });
  };
})(AmplitudeConnectorProfileCredentials || (AmplitudeConnectorProfileCredentials = {}));
export var AmplitudeConnectorProfileProperties;
(function (AmplitudeConnectorProfileProperties) {
  /**
   * @internal
   */
  AmplitudeConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AmplitudeConnectorProfileProperties || (AmplitudeConnectorProfileProperties = {}));
export var AmplitudeMetadata;
(function (AmplitudeMetadata) {
  /**
   * @internal
   */
  AmplitudeMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AmplitudeMetadata || (AmplitudeMetadata = {}));
export var AmplitudeSourceProperties;
(function (AmplitudeSourceProperties) {
  /**
   * @internal
   */
  AmplitudeSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AmplitudeSourceProperties || (AmplitudeSourceProperties = {}));
export var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConflictException || (ConflictException = {}));
export var ConnectionMode;
(function (ConnectionMode) {
  ConnectionMode["PRIVATE"] = "Private";
  ConnectionMode["PUBLIC"] = "Public";
})(ConnectionMode || (ConnectionMode = {}));
export var ConnectorAuthenticationException;
(function (ConnectorAuthenticationException) {
  /**
   * @internal
   */
  ConnectorAuthenticationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConnectorAuthenticationException || (ConnectorAuthenticationException = {}));
export var CustomerProfilesMetadata;
(function (CustomerProfilesMetadata) {
  /**
   * @internal
   */
  CustomerProfilesMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CustomerProfilesMetadata || (CustomerProfilesMetadata = {}));
export var DatadogMetadata;
(function (DatadogMetadata) {
  /**
   * @internal
   */
  DatadogMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DatadogMetadata || (DatadogMetadata = {}));
export var DynatraceMetadata;
(function (DynatraceMetadata) {
  /**
   * @internal
   */
  DynatraceMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DynatraceMetadata || (DynatraceMetadata = {}));
export var EventBridgeMetadata;
(function (EventBridgeMetadata) {
  /**
   * @internal
   */
  EventBridgeMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EventBridgeMetadata || (EventBridgeMetadata = {}));
export var GoogleAnalyticsMetadata;
(function (GoogleAnalyticsMetadata) {
  /**
   * @internal
   */
  GoogleAnalyticsMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GoogleAnalyticsMetadata || (GoogleAnalyticsMetadata = {}));
export var HoneycodeMetadata;
(function (HoneycodeMetadata) {
  /**
   * @internal
   */
  HoneycodeMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HoneycodeMetadata || (HoneycodeMetadata = {}));
export var InforNexusMetadata;
(function (InforNexusMetadata) {
  /**
   * @internal
   */
  InforNexusMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InforNexusMetadata || (InforNexusMetadata = {}));
export var MarketoMetadata;
(function (MarketoMetadata) {
  /**
   * @internal
   */
  MarketoMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MarketoMetadata || (MarketoMetadata = {}));
export var RedshiftMetadata;
(function (RedshiftMetadata) {
  /**
   * @internal
   */
  RedshiftMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RedshiftMetadata || (RedshiftMetadata = {}));
export var S3Metadata;
(function (S3Metadata) {
  /**
   * @internal
   */
  S3Metadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(S3Metadata || (S3Metadata = {}));
export var SalesforceMetadata;
(function (SalesforceMetadata) {
  /**
   * @internal
   */
  SalesforceMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SalesforceMetadata || (SalesforceMetadata = {}));
export var ServiceNowMetadata;
(function (ServiceNowMetadata) {
  /**
   * @internal
   */
  ServiceNowMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceNowMetadata || (ServiceNowMetadata = {}));
export var SingularMetadata;
(function (SingularMetadata) {
  /**
   * @internal
   */
  SingularMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SingularMetadata || (SingularMetadata = {}));
export var SlackMetadata;
(function (SlackMetadata) {
  /**
   * @internal
   */
  SlackMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SlackMetadata || (SlackMetadata = {}));
export var SnowflakeMetadata;
(function (SnowflakeMetadata) {
  /**
   * @internal
   */
  SnowflakeMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SnowflakeMetadata || (SnowflakeMetadata = {}));
export var TrendmicroMetadata;
(function (TrendmicroMetadata) {
  /**
   * @internal
   */
  TrendmicroMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TrendmicroMetadata || (TrendmicroMetadata = {}));
export var UpsolverMetadata;
(function (UpsolverMetadata) {
  /**
   * @internal
   */
  UpsolverMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpsolverMetadata || (UpsolverMetadata = {}));
export var VeevaMetadata;
(function (VeevaMetadata) {
  /**
   * @internal
   */
  VeevaMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VeevaMetadata || (VeevaMetadata = {}));
export var ZendeskMetadata;
(function (ZendeskMetadata) {
  /**
   * @internal
   */
  ZendeskMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ZendeskMetadata || (ZendeskMetadata = {}));
export var ConnectorMetadata;
(function (ConnectorMetadata) {
  /**
   * @internal
   */
  ConnectorMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConnectorMetadata || (ConnectorMetadata = {}));
export var ConnectorType;
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
})(ConnectorType || (ConnectorType = {}));
export var ScheduleFrequencyType;
(function (ScheduleFrequencyType) {
  ScheduleFrequencyType["BYMINUTE"] = "BYMINUTE";
  ScheduleFrequencyType["DAILY"] = "DAILY";
  ScheduleFrequencyType["HOURLY"] = "HOURLY";
  ScheduleFrequencyType["MONTHLY"] = "MONTHLY";
  ScheduleFrequencyType["ONCE"] = "ONCE";
  ScheduleFrequencyType["WEEKLY"] = "WEEKLY";
})(ScheduleFrequencyType || (ScheduleFrequencyType = {}));
export var TriggerType;
(function (TriggerType) {
  TriggerType["EVENT"] = "Event";
  TriggerType["ONDEMAND"] = "OnDemand";
  TriggerType["SCHEDULED"] = "Scheduled";
})(TriggerType || (TriggerType = {}));
export var ConnectorConfiguration;
(function (ConnectorConfiguration) {
  /**
   * @internal
   */
  ConnectorConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConnectorConfiguration || (ConnectorConfiguration = {}));
export var ConnectorEntity;
(function (ConnectorEntity) {
  /**
   * @internal
   */
  ConnectorEntity.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConnectorEntity || (ConnectorEntity = {}));
export var WriteOperationType;
(function (WriteOperationType) {
  WriteOperationType["INSERT"] = "INSERT";
  WriteOperationType["UPDATE"] = "UPDATE";
  WriteOperationType["UPSERT"] = "UPSERT";
})(WriteOperationType || (WriteOperationType = {}));
export var DestinationFieldProperties;
(function (DestinationFieldProperties) {
  /**
   * @internal
   */
  DestinationFieldProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DestinationFieldProperties || (DestinationFieldProperties = {}));
export var SourceFieldProperties;
(function (SourceFieldProperties) {
  /**
   * @internal
   */
  SourceFieldProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SourceFieldProperties || (SourceFieldProperties = {}));
export var Operator;
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
})(Operator || (Operator = {}));
export var FieldTypeDetails;
(function (FieldTypeDetails) {
  /**
   * @internal
   */
  FieldTypeDetails.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FieldTypeDetails || (FieldTypeDetails = {}));
export var SupportedFieldTypeDetails;
(function (SupportedFieldTypeDetails) {
  /**
   * @internal
   */
  SupportedFieldTypeDetails.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SupportedFieldTypeDetails || (SupportedFieldTypeDetails = {}));
export var ConnectorEntityField;
(function (ConnectorEntityField) {
  /**
   * @internal
   */
  ConnectorEntityField.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConnectorEntityField || (ConnectorEntityField = {}));
export var ConnectorOAuthRequest;
(function (ConnectorOAuthRequest) {
  /**
   * @internal
   */
  ConnectorOAuthRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConnectorOAuthRequest || (ConnectorOAuthRequest = {}));
export var DatadogConnectorOperator;
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
})(DatadogConnectorOperator || (DatadogConnectorOperator = {}));
export var DynatraceConnectorOperator;
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
})(DynatraceConnectorOperator || (DynatraceConnectorOperator = {}));
export var GoogleAnalyticsConnectorOperator;
(function (GoogleAnalyticsConnectorOperator) {
  GoogleAnalyticsConnectorOperator["BETWEEN"] = "BETWEEN";
  GoogleAnalyticsConnectorOperator["PROJECTION"] = "PROJECTION";
})(GoogleAnalyticsConnectorOperator || (GoogleAnalyticsConnectorOperator = {}));
export var InforNexusConnectorOperator;
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
})(InforNexusConnectorOperator || (InforNexusConnectorOperator = {}));
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
export var SingularConnectorOperator;
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
})(SingularConnectorOperator || (SingularConnectorOperator = {}));
export var SlackConnectorOperator;
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
})(SlackConnectorOperator || (SlackConnectorOperator = {}));
export var TrendmicroConnectorOperator;
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
})(TrendmicroConnectorOperator || (TrendmicroConnectorOperator = {}));
export var VeevaConnectorOperator;
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
})(VeevaConnectorOperator || (VeevaConnectorOperator = {}));
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
  ConnectorOperator.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConnectorOperator || (ConnectorOperator = {}));
export var DatadogConnectorProfileProperties;
(function (DatadogConnectorProfileProperties) {
  /**
   * @internal
   */
  DatadogConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DatadogConnectorProfileProperties || (DatadogConnectorProfileProperties = {}));
export var DynatraceConnectorProfileProperties;
(function (DynatraceConnectorProfileProperties) {
  /**
   * @internal
   */
  DynatraceConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DynatraceConnectorProfileProperties || (DynatraceConnectorProfileProperties = {}));
export var GoogleAnalyticsConnectorProfileProperties;
(function (GoogleAnalyticsConnectorProfileProperties) {
  /**
   * @internal
   */
  GoogleAnalyticsConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GoogleAnalyticsConnectorProfileProperties || (GoogleAnalyticsConnectorProfileProperties = {}));
export var HoneycodeConnectorProfileProperties;
(function (HoneycodeConnectorProfileProperties) {
  /**
   * @internal
   */
  HoneycodeConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HoneycodeConnectorProfileProperties || (HoneycodeConnectorProfileProperties = {}));
export var InforNexusConnectorProfileProperties;
(function (InforNexusConnectorProfileProperties) {
  /**
   * @internal
   */
  InforNexusConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InforNexusConnectorProfileProperties || (InforNexusConnectorProfileProperties = {}));
export var MarketoConnectorProfileProperties;
(function (MarketoConnectorProfileProperties) {
  /**
   * @internal
   */
  MarketoConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MarketoConnectorProfileProperties || (MarketoConnectorProfileProperties = {}));
export var RedshiftConnectorProfileProperties;
(function (RedshiftConnectorProfileProperties) {
  /**
   * @internal
   */
  RedshiftConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RedshiftConnectorProfileProperties || (RedshiftConnectorProfileProperties = {}));
export var SalesforceConnectorProfileProperties;
(function (SalesforceConnectorProfileProperties) {
  /**
   * @internal
   */
  SalesforceConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SalesforceConnectorProfileProperties || (SalesforceConnectorProfileProperties = {}));
export var ServiceNowConnectorProfileProperties;
(function (ServiceNowConnectorProfileProperties) {
  /**
   * @internal
   */
  ServiceNowConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceNowConnectorProfileProperties || (ServiceNowConnectorProfileProperties = {}));
export var SingularConnectorProfileProperties;
(function (SingularConnectorProfileProperties) {
  /**
   * @internal
   */
  SingularConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SingularConnectorProfileProperties || (SingularConnectorProfileProperties = {}));
export var SlackConnectorProfileProperties;
(function (SlackConnectorProfileProperties) {
  /**
   * @internal
   */
  SlackConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SlackConnectorProfileProperties || (SlackConnectorProfileProperties = {}));
export var SnowflakeConnectorProfileProperties;
(function (SnowflakeConnectorProfileProperties) {
  /**
   * @internal
   */
  SnowflakeConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SnowflakeConnectorProfileProperties || (SnowflakeConnectorProfileProperties = {}));
export var TrendmicroConnectorProfileProperties;
(function (TrendmicroConnectorProfileProperties) {
  /**
   * @internal
   */
  TrendmicroConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TrendmicroConnectorProfileProperties || (TrendmicroConnectorProfileProperties = {}));
export var VeevaConnectorProfileProperties;
(function (VeevaConnectorProfileProperties) {
  /**
   * @internal
   */
  VeevaConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VeevaConnectorProfileProperties || (VeevaConnectorProfileProperties = {}));
export var ZendeskConnectorProfileProperties;
(function (ZendeskConnectorProfileProperties) {
  /**
   * @internal
   */
  ZendeskConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ZendeskConnectorProfileProperties || (ZendeskConnectorProfileProperties = {}));
export var ConnectorProfileProperties;
(function (ConnectorProfileProperties) {
  /**
   * @internal
   */
  ConnectorProfileProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConnectorProfileProperties || (ConnectorProfileProperties = {}));
export var ConnectorProfile;
(function (ConnectorProfile) {
  /**
   * @internal
   */
  ConnectorProfile.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConnectorProfile || (ConnectorProfile = {}));
export var DatadogConnectorProfileCredentials;
(function (DatadogConnectorProfileCredentials) {
  /**
   * @internal
   */
  DatadogConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DatadogConnectorProfileCredentials || (DatadogConnectorProfileCredentials = {}));
export var DynatraceConnectorProfileCredentials;
(function (DynatraceConnectorProfileCredentials) {
  /**
   * @internal
   */
  DynatraceConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DynatraceConnectorProfileCredentials || (DynatraceConnectorProfileCredentials = {}));
export var GoogleAnalyticsConnectorProfileCredentials;
(function (GoogleAnalyticsConnectorProfileCredentials) {
  /**
   * @internal
   */
  GoogleAnalyticsConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
      obj.accessToken && { accessToken: SENSITIVE_STRING }
    );
  };
})(GoogleAnalyticsConnectorProfileCredentials || (GoogleAnalyticsConnectorProfileCredentials = {}));
export var HoneycodeConnectorProfileCredentials;
(function (HoneycodeConnectorProfileCredentials) {
  /**
   * @internal
   */
  HoneycodeConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.accessToken && { accessToken: SENSITIVE_STRING });
  };
})(HoneycodeConnectorProfileCredentials || (HoneycodeConnectorProfileCredentials = {}));
export var InforNexusConnectorProfileCredentials;
(function (InforNexusConnectorProfileCredentials) {
  /**
   * @internal
   */
  InforNexusConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.accessKeyId && { accessKeyId: SENSITIVE_STRING });
  };
})(InforNexusConnectorProfileCredentials || (InforNexusConnectorProfileCredentials = {}));
export var MarketoConnectorProfileCredentials;
(function (MarketoConnectorProfileCredentials) {
  /**
   * @internal
   */
  MarketoConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
      obj.accessToken && { accessToken: SENSITIVE_STRING }
    );
  };
})(MarketoConnectorProfileCredentials || (MarketoConnectorProfileCredentials = {}));
export var RedshiftConnectorProfileCredentials;
(function (RedshiftConnectorProfileCredentials) {
  /**
   * @internal
   */
  RedshiftConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.password && { password: SENSITIVE_STRING });
  };
})(RedshiftConnectorProfileCredentials || (RedshiftConnectorProfileCredentials = {}));
export var SalesforceConnectorProfileCredentials;
(function (SalesforceConnectorProfileCredentials) {
  /**
   * @internal
   */
  SalesforceConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.accessToken && { accessToken: SENSITIVE_STRING }),
      obj.clientCredentialsArn && { clientCredentialsArn: SENSITIVE_STRING }
    );
  };
})(SalesforceConnectorProfileCredentials || (SalesforceConnectorProfileCredentials = {}));
export var ServiceNowConnectorProfileCredentials;
(function (ServiceNowConnectorProfileCredentials) {
  /**
   * @internal
   */
  ServiceNowConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.password && { password: SENSITIVE_STRING });
  };
})(ServiceNowConnectorProfileCredentials || (ServiceNowConnectorProfileCredentials = {}));
export var SingularConnectorProfileCredentials;
(function (SingularConnectorProfileCredentials) {
  /**
   * @internal
   */
  SingularConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SingularConnectorProfileCredentials || (SingularConnectorProfileCredentials = {}));
export var SlackConnectorProfileCredentials;
(function (SlackConnectorProfileCredentials) {
  /**
   * @internal
   */
  SlackConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
      obj.accessToken && { accessToken: SENSITIVE_STRING }
    );
  };
})(SlackConnectorProfileCredentials || (SlackConnectorProfileCredentials = {}));
export var SnowflakeConnectorProfileCredentials;
(function (SnowflakeConnectorProfileCredentials) {
  /**
   * @internal
   */
  SnowflakeConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.password && { password: SENSITIVE_STRING });
  };
})(SnowflakeConnectorProfileCredentials || (SnowflakeConnectorProfileCredentials = {}));
export var TrendmicroConnectorProfileCredentials;
(function (TrendmicroConnectorProfileCredentials) {
  /**
   * @internal
   */
  TrendmicroConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.apiSecretKey && { apiSecretKey: SENSITIVE_STRING });
  };
})(TrendmicroConnectorProfileCredentials || (TrendmicroConnectorProfileCredentials = {}));
export var VeevaConnectorProfileCredentials;
(function (VeevaConnectorProfileCredentials) {
  /**
   * @internal
   */
  VeevaConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.password && { password: SENSITIVE_STRING });
  };
})(VeevaConnectorProfileCredentials || (VeevaConnectorProfileCredentials = {}));
export var ZendeskConnectorProfileCredentials;
(function (ZendeskConnectorProfileCredentials) {
  /**
   * @internal
   */
  ZendeskConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
      obj.accessToken && { accessToken: SENSITIVE_STRING }
    );
  };
})(ZendeskConnectorProfileCredentials || (ZendeskConnectorProfileCredentials = {}));
export var ConnectorProfileCredentials;
(function (ConnectorProfileCredentials) {
  /**
   * @internal
   */
  ConnectorProfileCredentials.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            __assign(
                              __assign({}, obj),
                              obj.Amplitude && {
                                Amplitude: AmplitudeConnectorProfileCredentials.filterSensitiveLog(obj.Amplitude),
                              }
                            ),
                            obj.GoogleAnalytics && {
                              GoogleAnalytics: GoogleAnalyticsConnectorProfileCredentials.filterSensitiveLog(
                                obj.GoogleAnalytics
                              ),
                            }
                          ),
                          obj.Honeycode && {
                            Honeycode: HoneycodeConnectorProfileCredentials.filterSensitiveLog(obj.Honeycode),
                          }
                        ),
                        obj.InforNexus && {
                          InforNexus: InforNexusConnectorProfileCredentials.filterSensitiveLog(obj.InforNexus),
                        }
                      ),
                      obj.Marketo && { Marketo: MarketoConnectorProfileCredentials.filterSensitiveLog(obj.Marketo) }
                    ),
                    obj.Redshift && { Redshift: RedshiftConnectorProfileCredentials.filterSensitiveLog(obj.Redshift) }
                  ),
                  obj.Salesforce && {
                    Salesforce: SalesforceConnectorProfileCredentials.filterSensitiveLog(obj.Salesforce),
                  }
                ),
                obj.ServiceNow && {
                  ServiceNow: ServiceNowConnectorProfileCredentials.filterSensitiveLog(obj.ServiceNow),
                }
              ),
              obj.Slack && { Slack: SlackConnectorProfileCredentials.filterSensitiveLog(obj.Slack) }
            ),
            obj.Snowflake && { Snowflake: SnowflakeConnectorProfileCredentials.filterSensitiveLog(obj.Snowflake) }
          ),
          obj.Trendmicro && { Trendmicro: TrendmicroConnectorProfileCredentials.filterSensitiveLog(obj.Trendmicro) }
        ),
        obj.Veeva && { Veeva: VeevaConnectorProfileCredentials.filterSensitiveLog(obj.Veeva) }
      ),
      obj.Zendesk && { Zendesk: ZendeskConnectorProfileCredentials.filterSensitiveLog(obj.Zendesk) }
    );
  };
})(ConnectorProfileCredentials || (ConnectorProfileCredentials = {}));
export var ConnectorProfileConfig;
(function (ConnectorProfileConfig) {
  /**
   * @internal
   */
  ConnectorProfileConfig.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.connectorProfileCredentials && {
        connectorProfileCredentials: ConnectorProfileCredentials.filterSensitiveLog(obj.connectorProfileCredentials),
      }
    );
  };
})(ConnectorProfileConfig || (ConnectorProfileConfig = {}));
export var ConnectorServerException;
(function (ConnectorServerException) {
  /**
   * @internal
   */
  ConnectorServerException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConnectorServerException || (ConnectorServerException = {}));
export var CreateConnectorProfileRequest;
(function (CreateConnectorProfileRequest) {
  /**
   * @internal
   */
  CreateConnectorProfileRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateConnectorProfileRequest || (CreateConnectorProfileRequest = {}));
export var CreateConnectorProfileResponse;
(function (CreateConnectorProfileResponse) {
  /**
   * @internal
   */
  CreateConnectorProfileResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateConnectorProfileResponse || (CreateConnectorProfileResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
  /**
   * @internal
   */
  InternalServerException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalServerException || (InternalServerException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
  /**
   * @internal
   */
  ServiceQuotaExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidationException || (ValidationException = {}));
export var CustomerProfilesDestinationProperties;
(function (CustomerProfilesDestinationProperties) {
  /**
   * @internal
   */
  CustomerProfilesDestinationProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CustomerProfilesDestinationProperties || (CustomerProfilesDestinationProperties = {}));
export var ErrorHandlingConfig;
(function (ErrorHandlingConfig) {
  /**
   * @internal
   */
  ErrorHandlingConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ErrorHandlingConfig || (ErrorHandlingConfig = {}));
export var EventBridgeDestinationProperties;
(function (EventBridgeDestinationProperties) {
  /**
   * @internal
   */
  EventBridgeDestinationProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EventBridgeDestinationProperties || (EventBridgeDestinationProperties = {}));
export var HoneycodeDestinationProperties;
(function (HoneycodeDestinationProperties) {
  /**
   * @internal
   */
  HoneycodeDestinationProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HoneycodeDestinationProperties || (HoneycodeDestinationProperties = {}));
export var LookoutMetricsDestinationProperties;
(function (LookoutMetricsDestinationProperties) {
  /**
   * @internal
   */
  LookoutMetricsDestinationProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LookoutMetricsDestinationProperties || (LookoutMetricsDestinationProperties = {}));
export var RedshiftDestinationProperties;
(function (RedshiftDestinationProperties) {
  /**
   * @internal
   */
  RedshiftDestinationProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RedshiftDestinationProperties || (RedshiftDestinationProperties = {}));
export var FileType;
(function (FileType) {
  FileType["CSV"] = "CSV";
  FileType["JSON"] = "JSON";
  FileType["PARQUET"] = "PARQUET";
})(FileType || (FileType = {}));
export var PrefixFormat;
(function (PrefixFormat) {
  PrefixFormat["DAY"] = "DAY";
  PrefixFormat["HOUR"] = "HOUR";
  PrefixFormat["MINUTE"] = "MINUTE";
  PrefixFormat["MONTH"] = "MONTH";
  PrefixFormat["YEAR"] = "YEAR";
})(PrefixFormat || (PrefixFormat = {}));
export var PrefixType;
(function (PrefixType) {
  PrefixType["FILENAME"] = "FILENAME";
  PrefixType["PATH"] = "PATH";
  PrefixType["PATH_AND_FILENAME"] = "PATH_AND_FILENAME";
})(PrefixType || (PrefixType = {}));
export var PrefixConfig;
(function (PrefixConfig) {
  /**
   * @internal
   */
  PrefixConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PrefixConfig || (PrefixConfig = {}));
export var S3OutputFormatConfig;
(function (S3OutputFormatConfig) {
  /**
   * @internal
   */
  S3OutputFormatConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(S3OutputFormatConfig || (S3OutputFormatConfig = {}));
export var S3DestinationProperties;
(function (S3DestinationProperties) {
  /**
   * @internal
   */
  S3DestinationProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(S3DestinationProperties || (S3DestinationProperties = {}));
export var SalesforceDestinationProperties;
(function (SalesforceDestinationProperties) {
  /**
   * @internal
   */
  SalesforceDestinationProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SalesforceDestinationProperties || (SalesforceDestinationProperties = {}));
export var SnowflakeDestinationProperties;
(function (SnowflakeDestinationProperties) {
  /**
   * @internal
   */
  SnowflakeDestinationProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SnowflakeDestinationProperties || (SnowflakeDestinationProperties = {}));
export var UpsolverS3OutputFormatConfig;
(function (UpsolverS3OutputFormatConfig) {
  /**
   * @internal
   */
  UpsolverS3OutputFormatConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpsolverS3OutputFormatConfig || (UpsolverS3OutputFormatConfig = {}));
export var UpsolverDestinationProperties;
(function (UpsolverDestinationProperties) {
  /**
   * @internal
   */
  UpsolverDestinationProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpsolverDestinationProperties || (UpsolverDestinationProperties = {}));
export var ZendeskDestinationProperties;
(function (ZendeskDestinationProperties) {
  /**
   * @internal
   */
  ZendeskDestinationProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ZendeskDestinationProperties || (ZendeskDestinationProperties = {}));
export var DestinationConnectorProperties;
(function (DestinationConnectorProperties) {
  /**
   * @internal
   */
  DestinationConnectorProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DestinationConnectorProperties || (DestinationConnectorProperties = {}));
export var DestinationFlowConfig;
(function (DestinationFlowConfig) {
  /**
   * @internal
   */
  DestinationFlowConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DestinationFlowConfig || (DestinationFlowConfig = {}));
export var IncrementalPullConfig;
(function (IncrementalPullConfig) {
  /**
   * @internal
   */
  IncrementalPullConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(IncrementalPullConfig || (IncrementalPullConfig = {}));
export var DatadogSourceProperties;
(function (DatadogSourceProperties) {
  /**
   * @internal
   */
  DatadogSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DatadogSourceProperties || (DatadogSourceProperties = {}));
export var DynatraceSourceProperties;
(function (DynatraceSourceProperties) {
  /**
   * @internal
   */
  DynatraceSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DynatraceSourceProperties || (DynatraceSourceProperties = {}));
export var GoogleAnalyticsSourceProperties;
(function (GoogleAnalyticsSourceProperties) {
  /**
   * @internal
   */
  GoogleAnalyticsSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GoogleAnalyticsSourceProperties || (GoogleAnalyticsSourceProperties = {}));
export var InforNexusSourceProperties;
(function (InforNexusSourceProperties) {
  /**
   * @internal
   */
  InforNexusSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InforNexusSourceProperties || (InforNexusSourceProperties = {}));
export var MarketoSourceProperties;
(function (MarketoSourceProperties) {
  /**
   * @internal
   */
  MarketoSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MarketoSourceProperties || (MarketoSourceProperties = {}));
export var S3SourceProperties;
(function (S3SourceProperties) {
  /**
   * @internal
   */
  S3SourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(S3SourceProperties || (S3SourceProperties = {}));
export var SalesforceSourceProperties;
(function (SalesforceSourceProperties) {
  /**
   * @internal
   */
  SalesforceSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SalesforceSourceProperties || (SalesforceSourceProperties = {}));
export var ServiceNowSourceProperties;
(function (ServiceNowSourceProperties) {
  /**
   * @internal
   */
  ServiceNowSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceNowSourceProperties || (ServiceNowSourceProperties = {}));
export var SingularSourceProperties;
(function (SingularSourceProperties) {
  /**
   * @internal
   */
  SingularSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SingularSourceProperties || (SingularSourceProperties = {}));
export var SlackSourceProperties;
(function (SlackSourceProperties) {
  /**
   * @internal
   */
  SlackSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SlackSourceProperties || (SlackSourceProperties = {}));
export var TrendmicroSourceProperties;
(function (TrendmicroSourceProperties) {
  /**
   * @internal
   */
  TrendmicroSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TrendmicroSourceProperties || (TrendmicroSourceProperties = {}));
export var VeevaSourceProperties;
(function (VeevaSourceProperties) {
  /**
   * @internal
   */
  VeevaSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VeevaSourceProperties || (VeevaSourceProperties = {}));
export var ZendeskSourceProperties;
(function (ZendeskSourceProperties) {
  /**
   * @internal
   */
  ZendeskSourceProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ZendeskSourceProperties || (ZendeskSourceProperties = {}));
export var SourceConnectorProperties;
(function (SourceConnectorProperties) {
  /**
   * @internal
   */
  SourceConnectorProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SourceConnectorProperties || (SourceConnectorProperties = {}));
export var SourceFlowConfig;
(function (SourceFlowConfig) {
  /**
   * @internal
   */
  SourceFlowConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
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
  Task.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
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
  ScheduledTriggerProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ScheduledTriggerProperties || (ScheduledTriggerProperties = {}));
export var TriggerProperties;
(function (TriggerProperties) {
  /**
   * @internal
   */
  TriggerProperties.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TriggerProperties || (TriggerProperties = {}));
export var TriggerConfig;
(function (TriggerConfig) {
  /**
   * @internal
   */
  TriggerConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TriggerConfig || (TriggerConfig = {}));
export var CreateFlowRequest;
(function (CreateFlowRequest) {
  /**
   * @internal
   */
  CreateFlowRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateFlowRequest || (CreateFlowRequest = {}));
export var FlowStatus;
(function (FlowStatus) {
  FlowStatus["ACTIVE"] = "Active";
  FlowStatus["DELETED"] = "Deleted";
  FlowStatus["DEPRECATED"] = "Deprecated";
  FlowStatus["DRAFT"] = "Draft";
  FlowStatus["ERRORED"] = "Errored";
  FlowStatus["SUSPENDED"] = "Suspended";
})(FlowStatus || (FlowStatus = {}));
export var CreateFlowResponse;
(function (CreateFlowResponse) {
  /**
   * @internal
   */
  CreateFlowResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateFlowResponse || (CreateFlowResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var DeleteConnectorProfileRequest;
(function (DeleteConnectorProfileRequest) {
  /**
   * @internal
   */
  DeleteConnectorProfileRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteConnectorProfileRequest || (DeleteConnectorProfileRequest = {}));
export var DeleteConnectorProfileResponse;
(function (DeleteConnectorProfileResponse) {
  /**
   * @internal
   */
  DeleteConnectorProfileResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteConnectorProfileResponse || (DeleteConnectorProfileResponse = {}));
export var DeleteFlowRequest;
(function (DeleteFlowRequest) {
  /**
   * @internal
   */
  DeleteFlowRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteFlowRequest || (DeleteFlowRequest = {}));
export var DeleteFlowResponse;
(function (DeleteFlowResponse) {
  /**
   * @internal
   */
  DeleteFlowResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteFlowResponse || (DeleteFlowResponse = {}));
export var DescribeConnectorEntityRequest;
(function (DescribeConnectorEntityRequest) {
  /**
   * @internal
   */
  DescribeConnectorEntityRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeConnectorEntityRequest || (DescribeConnectorEntityRequest = {}));
export var DescribeConnectorEntityResponse;
(function (DescribeConnectorEntityResponse) {
  /**
   * @internal
   */
  DescribeConnectorEntityResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeConnectorEntityResponse || (DescribeConnectorEntityResponse = {}));
export var DescribeConnectorProfilesRequest;
(function (DescribeConnectorProfilesRequest) {
  /**
   * @internal
   */
  DescribeConnectorProfilesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeConnectorProfilesRequest || (DescribeConnectorProfilesRequest = {}));
export var DescribeConnectorProfilesResponse;
(function (DescribeConnectorProfilesResponse) {
  /**
   * @internal
   */
  DescribeConnectorProfilesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeConnectorProfilesResponse || (DescribeConnectorProfilesResponse = {}));
export var DescribeConnectorsRequest;
(function (DescribeConnectorsRequest) {
  /**
   * @internal
   */
  DescribeConnectorsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeConnectorsRequest || (DescribeConnectorsRequest = {}));
export var DescribeConnectorsResponse;
(function (DescribeConnectorsResponse) {
  /**
   * @internal
   */
  DescribeConnectorsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeConnectorsResponse || (DescribeConnectorsResponse = {}));
export var DescribeFlowRequest;
(function (DescribeFlowRequest) {
  /**
   * @internal
   */
  DescribeFlowRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeFlowRequest || (DescribeFlowRequest = {}));
export var ExecutionStatus;
(function (ExecutionStatus) {
  ExecutionStatus["ERROR"] = "Error";
  ExecutionStatus["INPROGRESS"] = "InProgress";
  ExecutionStatus["SUCCESSFUL"] = "Successful";
})(ExecutionStatus || (ExecutionStatus = {}));
export var ExecutionDetails;
(function (ExecutionDetails) {
  /**
   * @internal
   */
  ExecutionDetails.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExecutionDetails || (ExecutionDetails = {}));
export var DescribeFlowResponse;
(function (DescribeFlowResponse) {
  /**
   * @internal
   */
  DescribeFlowResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeFlowResponse || (DescribeFlowResponse = {}));
export var DescribeFlowExecutionRecordsRequest;
(function (DescribeFlowExecutionRecordsRequest) {
  /**
   * @internal
   */
  DescribeFlowExecutionRecordsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeFlowExecutionRecordsRequest || (DescribeFlowExecutionRecordsRequest = {}));
export var ErrorInfo;
(function (ErrorInfo) {
  /**
   * @internal
   */
  ErrorInfo.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ErrorInfo || (ErrorInfo = {}));
export var ExecutionResult;
(function (ExecutionResult) {
  /**
   * @internal
   */
  ExecutionResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExecutionResult || (ExecutionResult = {}));
export var ExecutionRecord;
(function (ExecutionRecord) {
  /**
   * @internal
   */
  ExecutionRecord.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExecutionRecord || (ExecutionRecord = {}));
export var DescribeFlowExecutionRecordsResponse;
(function (DescribeFlowExecutionRecordsResponse) {
  /**
   * @internal
   */
  DescribeFlowExecutionRecordsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeFlowExecutionRecordsResponse || (DescribeFlowExecutionRecordsResponse = {}));
export var FlowDefinition;
(function (FlowDefinition) {
  /**
   * @internal
   */
  FlowDefinition.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FlowDefinition || (FlowDefinition = {}));
export var ListConnectorEntitiesRequest;
(function (ListConnectorEntitiesRequest) {
  /**
   * @internal
   */
  ListConnectorEntitiesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListConnectorEntitiesRequest || (ListConnectorEntitiesRequest = {}));
export var ListConnectorEntitiesResponse;
(function (ListConnectorEntitiesResponse) {
  /**
   * @internal
   */
  ListConnectorEntitiesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListConnectorEntitiesResponse || (ListConnectorEntitiesResponse = {}));
export var ListFlowsRequest;
(function (ListFlowsRequest) {
  /**
   * @internal
   */
  ListFlowsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFlowsRequest || (ListFlowsRequest = {}));
export var ListFlowsResponse;
(function (ListFlowsResponse) {
  /**
   * @internal
   */
  ListFlowsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFlowsResponse || (ListFlowsResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var StartFlowRequest;
(function (StartFlowRequest) {
  /**
   * @internal
   */
  StartFlowRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartFlowRequest || (StartFlowRequest = {}));
export var StartFlowResponse;
(function (StartFlowResponse) {
  /**
   * @internal
   */
  StartFlowResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartFlowResponse || (StartFlowResponse = {}));
export var StopFlowRequest;
(function (StopFlowRequest) {
  /**
   * @internal
   */
  StopFlowRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StopFlowRequest || (StopFlowRequest = {}));
export var StopFlowResponse;
(function (StopFlowResponse) {
  /**
   * @internal
   */
  StopFlowResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StopFlowResponse || (StopFlowResponse = {}));
export var UnsupportedOperationException;
(function (UnsupportedOperationException) {
  /**
   * @internal
   */
  UnsupportedOperationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UnsupportedOperationException || (UnsupportedOperationException = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateConnectorProfileRequest;
(function (UpdateConnectorProfileRequest) {
  /**
   * @internal
   */
  UpdateConnectorProfileRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateConnectorProfileRequest || (UpdateConnectorProfileRequest = {}));
export var UpdateConnectorProfileResponse;
(function (UpdateConnectorProfileResponse) {
  /**
   * @internal
   */
  UpdateConnectorProfileResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateConnectorProfileResponse || (UpdateConnectorProfileResponse = {}));
export var UpdateFlowRequest;
(function (UpdateFlowRequest) {
  /**
   * @internal
   */
  UpdateFlowRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateFlowRequest || (UpdateFlowRequest = {}));
export var UpdateFlowResponse;
(function (UpdateFlowResponse) {
  /**
   * @internal
   */
  UpdateFlowResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateFlowResponse || (UpdateFlowResponse = {}));
//# sourceMappingURL=models_0.js.map
