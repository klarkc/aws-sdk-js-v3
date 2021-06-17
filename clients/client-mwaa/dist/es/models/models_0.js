import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var CreateCliTokenRequest;
(function (CreateCliTokenRequest) {
    /**
     * @internal
     */
    CreateCliTokenRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCliTokenRequest || (CreateCliTokenRequest = {}));
export var CreateCliTokenResponse;
(function (CreateCliTokenResponse) {
    /**
     * @internal
     */
    CreateCliTokenResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.CliToken && { CliToken: SENSITIVE_STRING }))); };
})(CreateCliTokenResponse || (CreateCliTokenResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["CRITICAL"] = "CRITICAL";
    LoggingLevel["DEBUG"] = "DEBUG";
    LoggingLevel["ERROR"] = "ERROR";
    LoggingLevel["INFO"] = "INFO";
    LoggingLevel["WARNING"] = "WARNING";
})(LoggingLevel || (LoggingLevel = {}));
export var ModuleLoggingConfigurationInput;
(function (ModuleLoggingConfigurationInput) {
    /**
     * @internal
     */
    ModuleLoggingConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModuleLoggingConfigurationInput || (ModuleLoggingConfigurationInput = {}));
export var LoggingConfigurationInput;
(function (LoggingConfigurationInput) {
    /**
     * @internal
     */
    LoggingConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoggingConfigurationInput || (LoggingConfigurationInput = {}));
export var NetworkConfiguration;
(function (NetworkConfiguration) {
    /**
     * @internal
     */
    NetworkConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkConfiguration || (NetworkConfiguration = {}));
export var WebserverAccessMode;
(function (WebserverAccessMode) {
    WebserverAccessMode["PRIVATE_ONLY"] = "PRIVATE_ONLY";
    WebserverAccessMode["PUBLIC_ONLY"] = "PUBLIC_ONLY";
})(WebserverAccessMode || (WebserverAccessMode = {}));
export var CreateEnvironmentInput;
(function (CreateEnvironmentInput) {
    /**
     * @internal
     */
    CreateEnvironmentInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AirflowConfigurationOptions && { AirflowConfigurationOptions: SENSITIVE_STRING }))); };
})(CreateEnvironmentInput || (CreateEnvironmentInput = {}));
export var CreateEnvironmentOutput;
(function (CreateEnvironmentOutput) {
    /**
     * @internal
     */
    CreateEnvironmentOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEnvironmentOutput || (CreateEnvironmentOutput = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var CreateWebLoginTokenRequest;
(function (CreateWebLoginTokenRequest) {
    /**
     * @internal
     */
    CreateWebLoginTokenRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWebLoginTokenRequest || (CreateWebLoginTokenRequest = {}));
export var CreateWebLoginTokenResponse;
(function (CreateWebLoginTokenResponse) {
    /**
     * @internal
     */
    CreateWebLoginTokenResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.WebToken && { WebToken: SENSITIVE_STRING }))); };
})(CreateWebLoginTokenResponse || (CreateWebLoginTokenResponse = {}));
export var DeleteEnvironmentInput;
(function (DeleteEnvironmentInput) {
    /**
     * @internal
     */
    DeleteEnvironmentInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEnvironmentInput || (DeleteEnvironmentInput = {}));
export var DeleteEnvironmentOutput;
(function (DeleteEnvironmentOutput) {
    /**
     * @internal
     */
    DeleteEnvironmentOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEnvironmentOutput || (DeleteEnvironmentOutput = {}));
export var GetEnvironmentInput;
(function (GetEnvironmentInput) {
    /**
     * @internal
     */
    GetEnvironmentInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEnvironmentInput || (GetEnvironmentInput = {}));
export var UpdateError;
(function (UpdateError) {
    /**
     * @internal
     */
    UpdateError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateError || (UpdateError = {}));
export var UpdateStatus;
(function (UpdateStatus) {
    UpdateStatus["FAILED"] = "FAILED";
    UpdateStatus["PENDING"] = "PENDING";
    UpdateStatus["SUCCESS"] = "SUCCESS";
})(UpdateStatus || (UpdateStatus = {}));
export var LastUpdate;
(function (LastUpdate) {
    /**
     * @internal
     */
    LastUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LastUpdate || (LastUpdate = {}));
export var ModuleLoggingConfiguration;
(function (ModuleLoggingConfiguration) {
    /**
     * @internal
     */
    ModuleLoggingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModuleLoggingConfiguration || (ModuleLoggingConfiguration = {}));
export var LoggingConfiguration;
(function (LoggingConfiguration) {
    /**
     * @internal
     */
    LoggingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoggingConfiguration || (LoggingConfiguration = {}));
export var EnvironmentStatus;
(function (EnvironmentStatus) {
    EnvironmentStatus["AVAILABLE"] = "AVAILABLE";
    EnvironmentStatus["CREATE_FAILED"] = "CREATE_FAILED";
    EnvironmentStatus["CREATING"] = "CREATING";
    EnvironmentStatus["DELETED"] = "DELETED";
    EnvironmentStatus["DELETING"] = "DELETING";
    EnvironmentStatus["UNAVAILABLE"] = "UNAVAILABLE";
    EnvironmentStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    EnvironmentStatus["UPDATING"] = "UPDATING";
})(EnvironmentStatus || (EnvironmentStatus = {}));
export var Environment;
(function (Environment) {
    /**
     * @internal
     */
    Environment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Environment || (Environment = {}));
export var GetEnvironmentOutput;
(function (GetEnvironmentOutput) {
    /**
     * @internal
     */
    GetEnvironmentOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEnvironmentOutput || (GetEnvironmentOutput = {}));
export var ListEnvironmentsInput;
(function (ListEnvironmentsInput) {
    /**
     * @internal
     */
    ListEnvironmentsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEnvironmentsInput || (ListEnvironmentsInput = {}));
export var ListEnvironmentsOutput;
(function (ListEnvironmentsOutput) {
    /**
     * @internal
     */
    ListEnvironmentsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEnvironmentsOutput || (ListEnvironmentsOutput = {}));
export var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceInput || (ListTagsForResourceInput = {}));
export var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceOutput || (ListTagsForResourceOutput = {}));
export var Dimension;
(function (Dimension) {
    /**
     * @internal
     */
    Dimension.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Dimension || (Dimension = {}));
export var StatisticSet;
(function (StatisticSet) {
    /**
     * @internal
     */
    StatisticSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StatisticSet || (StatisticSet = {}));
export var Unit;
(function (Unit) {
    Unit["BITS"] = "Bits";
    Unit["BITS_PER_SECOND"] = "Bits/Second";
    Unit["BYTES"] = "Bytes";
    Unit["BYTES_PER_SECOND"] = "Bytes/Second";
    Unit["COUNT"] = "Count";
    Unit["COUNT_PER_SECOND"] = "Count/Second";
    Unit["GIGABITS"] = "Gigabits";
    Unit["GIGABITS_PER_SECOND"] = "Gigabits/Second";
    Unit["GIGABYTES"] = "Gigabytes";
    Unit["GIGABYTES_PER_SECOND"] = "Gigabytes/Second";
    Unit["KILOBITS"] = "Kilobits";
    Unit["KILOBITS_PER_SECOND"] = "Kilobits/Second";
    Unit["KILOBYTES"] = "Kilobytes";
    Unit["KILOBYTES_PER_SECOND"] = "Kilobytes/Second";
    Unit["MEGABITS"] = "Megabits";
    Unit["MEGABITS_PER_SECOND"] = "Megabits/Second";
    Unit["MEGABYTES"] = "Megabytes";
    Unit["MEGABYTES_PER_SECOND"] = "Megabytes/Second";
    Unit["MICROSECONDS"] = "Microseconds";
    Unit["MILLISECONDS"] = "Milliseconds";
    Unit["NONE"] = "None";
    Unit["PERCENT"] = "Percent";
    Unit["SECONDS"] = "Seconds";
    Unit["TERABITS"] = "Terabits";
    Unit["TERABITS_PER_SECOND"] = "Terabits/Second";
    Unit["TERABYTES"] = "Terabytes";
    Unit["TERABYTES_PER_SECOND"] = "Terabytes/Second";
})(Unit || (Unit = {}));
export var MetricDatum;
(function (MetricDatum) {
    /**
     * @internal
     */
    MetricDatum.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricDatum || (MetricDatum = {}));
export var PublishMetricsInput;
(function (PublishMetricsInput) {
    /**
     * @internal
     */
    PublishMetricsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PublishMetricsInput || (PublishMetricsInput = {}));
export var PublishMetricsOutput;
(function (PublishMetricsOutput) {
    /**
     * @internal
     */
    PublishMetricsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PublishMetricsOutput || (PublishMetricsOutput = {}));
export var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceInput || (TagResourceInput = {}));
export var TagResourceOutput;
(function (TagResourceOutput) {
    /**
     * @internal
     */
    TagResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceOutput || (TagResourceOutput = {}));
export var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceInput || (UntagResourceInput = {}));
export var UntagResourceOutput;
(function (UntagResourceOutput) {
    /**
     * @internal
     */
    UntagResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceOutput || (UntagResourceOutput = {}));
export var UpdateNetworkConfigurationInput;
(function (UpdateNetworkConfigurationInput) {
    /**
     * @internal
     */
    UpdateNetworkConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNetworkConfigurationInput || (UpdateNetworkConfigurationInput = {}));
export var UpdateEnvironmentInput;
(function (UpdateEnvironmentInput) {
    /**
     * @internal
     */
    UpdateEnvironmentInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AirflowConfigurationOptions && { AirflowConfigurationOptions: SENSITIVE_STRING }))); };
})(UpdateEnvironmentInput || (UpdateEnvironmentInput = {}));
export var UpdateEnvironmentOutput;
(function (UpdateEnvironmentOutput) {
    /**
     * @internal
     */
    UpdateEnvironmentOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateEnvironmentOutput || (UpdateEnvironmentOutput = {}));
//# sourceMappingURL=models_0.js.map