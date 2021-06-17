"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEnvironmentOutput = exports.UpdateEnvironmentInput = exports.UpdateNetworkConfigurationInput = exports.UntagResourceOutput = exports.UntagResourceInput = exports.TagResourceOutput = exports.TagResourceInput = exports.PublishMetricsOutput = exports.PublishMetricsInput = exports.MetricDatum = exports.Unit = exports.StatisticSet = exports.Dimension = exports.ListTagsForResourceOutput = exports.ListTagsForResourceInput = exports.ListEnvironmentsOutput = exports.ListEnvironmentsInput = exports.GetEnvironmentOutput = exports.Environment = exports.EnvironmentStatus = exports.LoggingConfiguration = exports.ModuleLoggingConfiguration = exports.LastUpdate = exports.UpdateStatus = exports.UpdateError = exports.GetEnvironmentInput = exports.DeleteEnvironmentOutput = exports.DeleteEnvironmentInput = exports.CreateWebLoginTokenResponse = exports.CreateWebLoginTokenRequest = exports.ValidationException = exports.InternalServerException = exports.CreateEnvironmentOutput = exports.CreateEnvironmentInput = exports.WebserverAccessMode = exports.NetworkConfiguration = exports.LoggingConfigurationInput = exports.ModuleLoggingConfigurationInput = exports.LoggingLevel = exports.ResourceNotFoundException = exports.CreateCliTokenResponse = exports.CreateCliTokenRequest = exports.AccessDeniedException = void 0;
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
var CreateCliTokenRequest;
(function (CreateCliTokenRequest) {
    /**
     * @internal
     */
    CreateCliTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCliTokenRequest = exports.CreateCliTokenRequest || (exports.CreateCliTokenRequest = {}));
var CreateCliTokenResponse;
(function (CreateCliTokenResponse) {
    /**
     * @internal
     */
    CreateCliTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.CliToken && { CliToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateCliTokenResponse = exports.CreateCliTokenResponse || (exports.CreateCliTokenResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["CRITICAL"] = "CRITICAL";
    LoggingLevel["DEBUG"] = "DEBUG";
    LoggingLevel["ERROR"] = "ERROR";
    LoggingLevel["INFO"] = "INFO";
    LoggingLevel["WARNING"] = "WARNING";
})(LoggingLevel = exports.LoggingLevel || (exports.LoggingLevel = {}));
var ModuleLoggingConfigurationInput;
(function (ModuleLoggingConfigurationInput) {
    /**
     * @internal
     */
    ModuleLoggingConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModuleLoggingConfigurationInput = exports.ModuleLoggingConfigurationInput || (exports.ModuleLoggingConfigurationInput = {}));
var LoggingConfigurationInput;
(function (LoggingConfigurationInput) {
    /**
     * @internal
     */
    LoggingConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingConfigurationInput = exports.LoggingConfigurationInput || (exports.LoggingConfigurationInput = {}));
var NetworkConfiguration;
(function (NetworkConfiguration) {
    /**
     * @internal
     */
    NetworkConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkConfiguration = exports.NetworkConfiguration || (exports.NetworkConfiguration = {}));
var WebserverAccessMode;
(function (WebserverAccessMode) {
    WebserverAccessMode["PRIVATE_ONLY"] = "PRIVATE_ONLY";
    WebserverAccessMode["PUBLIC_ONLY"] = "PUBLIC_ONLY";
})(WebserverAccessMode = exports.WebserverAccessMode || (exports.WebserverAccessMode = {}));
var CreateEnvironmentInput;
(function (CreateEnvironmentInput) {
    /**
     * @internal
     */
    CreateEnvironmentInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AirflowConfigurationOptions && { AirflowConfigurationOptions: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateEnvironmentInput = exports.CreateEnvironmentInput || (exports.CreateEnvironmentInput = {}));
var CreateEnvironmentOutput;
(function (CreateEnvironmentOutput) {
    /**
     * @internal
     */
    CreateEnvironmentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEnvironmentOutput = exports.CreateEnvironmentOutput || (exports.CreateEnvironmentOutput = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var CreateWebLoginTokenRequest;
(function (CreateWebLoginTokenRequest) {
    /**
     * @internal
     */
    CreateWebLoginTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWebLoginTokenRequest = exports.CreateWebLoginTokenRequest || (exports.CreateWebLoginTokenRequest = {}));
var CreateWebLoginTokenResponse;
(function (CreateWebLoginTokenResponse) {
    /**
     * @internal
     */
    CreateWebLoginTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.WebToken && { WebToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateWebLoginTokenResponse = exports.CreateWebLoginTokenResponse || (exports.CreateWebLoginTokenResponse = {}));
var DeleteEnvironmentInput;
(function (DeleteEnvironmentInput) {
    /**
     * @internal
     */
    DeleteEnvironmentInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEnvironmentInput = exports.DeleteEnvironmentInput || (exports.DeleteEnvironmentInput = {}));
var DeleteEnvironmentOutput;
(function (DeleteEnvironmentOutput) {
    /**
     * @internal
     */
    DeleteEnvironmentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEnvironmentOutput = exports.DeleteEnvironmentOutput || (exports.DeleteEnvironmentOutput = {}));
var GetEnvironmentInput;
(function (GetEnvironmentInput) {
    /**
     * @internal
     */
    GetEnvironmentInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEnvironmentInput = exports.GetEnvironmentInput || (exports.GetEnvironmentInput = {}));
var UpdateError;
(function (UpdateError) {
    /**
     * @internal
     */
    UpdateError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateError = exports.UpdateError || (exports.UpdateError = {}));
var UpdateStatus;
(function (UpdateStatus) {
    UpdateStatus["FAILED"] = "FAILED";
    UpdateStatus["PENDING"] = "PENDING";
    UpdateStatus["SUCCESS"] = "SUCCESS";
})(UpdateStatus = exports.UpdateStatus || (exports.UpdateStatus = {}));
var LastUpdate;
(function (LastUpdate) {
    /**
     * @internal
     */
    LastUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LastUpdate = exports.LastUpdate || (exports.LastUpdate = {}));
var ModuleLoggingConfiguration;
(function (ModuleLoggingConfiguration) {
    /**
     * @internal
     */
    ModuleLoggingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModuleLoggingConfiguration = exports.ModuleLoggingConfiguration || (exports.ModuleLoggingConfiguration = {}));
var LoggingConfiguration;
(function (LoggingConfiguration) {
    /**
     * @internal
     */
    LoggingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingConfiguration = exports.LoggingConfiguration || (exports.LoggingConfiguration = {}));
var EnvironmentStatus;
(function (EnvironmentStatus) {
    EnvironmentStatus["AVAILABLE"] = "AVAILABLE";
    EnvironmentStatus["CREATE_FAILED"] = "CREATE_FAILED";
    EnvironmentStatus["CREATING"] = "CREATING";
    EnvironmentStatus["DELETED"] = "DELETED";
    EnvironmentStatus["DELETING"] = "DELETING";
    EnvironmentStatus["UNAVAILABLE"] = "UNAVAILABLE";
    EnvironmentStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    EnvironmentStatus["UPDATING"] = "UPDATING";
})(EnvironmentStatus = exports.EnvironmentStatus || (exports.EnvironmentStatus = {}));
var Environment;
(function (Environment) {
    /**
     * @internal
     */
    Environment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Environment = exports.Environment || (exports.Environment = {}));
var GetEnvironmentOutput;
(function (GetEnvironmentOutput) {
    /**
     * @internal
     */
    GetEnvironmentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEnvironmentOutput = exports.GetEnvironmentOutput || (exports.GetEnvironmentOutput = {}));
var ListEnvironmentsInput;
(function (ListEnvironmentsInput) {
    /**
     * @internal
     */
    ListEnvironmentsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEnvironmentsInput = exports.ListEnvironmentsInput || (exports.ListEnvironmentsInput = {}));
var ListEnvironmentsOutput;
(function (ListEnvironmentsOutput) {
    /**
     * @internal
     */
    ListEnvironmentsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEnvironmentsOutput = exports.ListEnvironmentsOutput || (exports.ListEnvironmentsOutput = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var Dimension;
(function (Dimension) {
    /**
     * @internal
     */
    Dimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Dimension = exports.Dimension || (exports.Dimension = {}));
var StatisticSet;
(function (StatisticSet) {
    /**
     * @internal
     */
    StatisticSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatisticSet = exports.StatisticSet || (exports.StatisticSet = {}));
var Unit;
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
})(Unit = exports.Unit || (exports.Unit = {}));
var MetricDatum;
(function (MetricDatum) {
    /**
     * @internal
     */
    MetricDatum.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricDatum = exports.MetricDatum || (exports.MetricDatum = {}));
var PublishMetricsInput;
(function (PublishMetricsInput) {
    /**
     * @internal
     */
    PublishMetricsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublishMetricsInput = exports.PublishMetricsInput || (exports.PublishMetricsInput = {}));
var PublishMetricsOutput;
(function (PublishMetricsOutput) {
    /**
     * @internal
     */
    PublishMetricsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublishMetricsOutput = exports.PublishMetricsOutput || (exports.PublishMetricsOutput = {}));
var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceOutput;
(function (TagResourceOutput) {
    /**
     * @internal
     */
    TagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceOutput;
(function (UntagResourceOutput) {
    /**
     * @internal
     */
    UntagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {}));
var UpdateNetworkConfigurationInput;
(function (UpdateNetworkConfigurationInput) {
    /**
     * @internal
     */
    UpdateNetworkConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNetworkConfigurationInput = exports.UpdateNetworkConfigurationInput || (exports.UpdateNetworkConfigurationInput = {}));
var UpdateEnvironmentInput;
(function (UpdateEnvironmentInput) {
    /**
     * @internal
     */
    UpdateEnvironmentInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AirflowConfigurationOptions && { AirflowConfigurationOptions: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateEnvironmentInput = exports.UpdateEnvironmentInput || (exports.UpdateEnvironmentInput = {}));
var UpdateEnvironmentOutput;
(function (UpdateEnvironmentOutput) {
    /**
     * @internal
     */
    UpdateEnvironmentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEnvironmentOutput = exports.UpdateEnvironmentOutput || (exports.UpdateEnvironmentOutput = {}));
//# sourceMappingURL=models_0.js.map