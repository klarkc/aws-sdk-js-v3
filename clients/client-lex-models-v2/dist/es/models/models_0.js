import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var S3BucketLogDestination;
(function (S3BucketLogDestination) {
    /**
     * @internal
     */
    S3BucketLogDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3BucketLogDestination || (S3BucketLogDestination = {}));
export var AudioLogDestination;
(function (AudioLogDestination) {
    /**
     * @internal
     */
    AudioLogDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioLogDestination || (AudioLogDestination = {}));
export var AudioLogSetting;
(function (AudioLogSetting) {
    /**
     * @internal
     */
    AudioLogSetting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioLogSetting || (AudioLogSetting = {}));
export var BotAliasHistoryEvent;
(function (BotAliasHistoryEvent) {
    /**
     * @internal
     */
    BotAliasHistoryEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotAliasHistoryEvent || (BotAliasHistoryEvent = {}));
export var LambdaCodeHook;
(function (LambdaCodeHook) {
    /**
     * @internal
     */
    LambdaCodeHook.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaCodeHook || (LambdaCodeHook = {}));
export var CodeHookSpecification;
(function (CodeHookSpecification) {
    /**
     * @internal
     */
    CodeHookSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeHookSpecification || (CodeHookSpecification = {}));
export var BotAliasLocaleSettings;
(function (BotAliasLocaleSettings) {
    /**
     * @internal
     */
    BotAliasLocaleSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotAliasLocaleSettings || (BotAliasLocaleSettings = {}));
export var BotAliasStatus;
(function (BotAliasStatus) {
    BotAliasStatus["Available"] = "Available";
    BotAliasStatus["Creating"] = "Creating";
    BotAliasStatus["Deleting"] = "Deleting";
    BotAliasStatus["Failed"] = "Failed";
})(BotAliasStatus || (BotAliasStatus = {}));
export var BotAliasSummary;
(function (BotAliasSummary) {
    /**
     * @internal
     */
    BotAliasSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotAliasSummary || (BotAliasSummary = {}));
export var BotExportSpecification;
(function (BotExportSpecification) {
    /**
     * @internal
     */
    BotExportSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotExportSpecification || (BotExportSpecification = {}));
export var BotFilterName;
(function (BotFilterName) {
    BotFilterName["BotName"] = "BotName";
})(BotFilterName || (BotFilterName = {}));
export var BotFilterOperator;
(function (BotFilterOperator) {
    BotFilterOperator["Contains"] = "CO";
    BotFilterOperator["Equals"] = "EQ";
})(BotFilterOperator || (BotFilterOperator = {}));
export var BotFilter;
(function (BotFilter) {
    /**
     * @internal
     */
    BotFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotFilter || (BotFilter = {}));
export var DataPrivacy;
(function (DataPrivacy) {
    /**
     * @internal
     */
    DataPrivacy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataPrivacy || (DataPrivacy = {}));
export var BotImportSpecification;
(function (BotImportSpecification) {
    /**
     * @internal
     */
    BotImportSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotImportSpecification || (BotImportSpecification = {}));
export var BotLocaleExportSpecification;
(function (BotLocaleExportSpecification) {
    /**
     * @internal
     */
    BotLocaleExportSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotLocaleExportSpecification || (BotLocaleExportSpecification = {}));
export var BotLocaleFilterName;
(function (BotLocaleFilterName) {
    BotLocaleFilterName["BotLocaleName"] = "BotLocaleName";
})(BotLocaleFilterName || (BotLocaleFilterName = {}));
export var BotLocaleFilterOperator;
(function (BotLocaleFilterOperator) {
    BotLocaleFilterOperator["Contains"] = "CO";
    BotLocaleFilterOperator["Equals"] = "EQ";
})(BotLocaleFilterOperator || (BotLocaleFilterOperator = {}));
export var BotLocaleFilter;
(function (BotLocaleFilter) {
    /**
     * @internal
     */
    BotLocaleFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotLocaleFilter || (BotLocaleFilter = {}));
export var BotLocaleHistoryEvent;
(function (BotLocaleHistoryEvent) {
    /**
     * @internal
     */
    BotLocaleHistoryEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotLocaleHistoryEvent || (BotLocaleHistoryEvent = {}));
export var VoiceSettings;
(function (VoiceSettings) {
    /**
     * @internal
     */
    VoiceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VoiceSettings || (VoiceSettings = {}));
export var BotLocaleImportSpecification;
(function (BotLocaleImportSpecification) {
    /**
     * @internal
     */
    BotLocaleImportSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotLocaleImportSpecification || (BotLocaleImportSpecification = {}));
export var BotLocaleSortAttribute;
(function (BotLocaleSortAttribute) {
    BotLocaleSortAttribute["BotLocaleName"] = "BotLocaleName";
})(BotLocaleSortAttribute || (BotLocaleSortAttribute = {}));
export var SortOrder;
(function (SortOrder) {
    SortOrder["Ascending"] = "Ascending";
    SortOrder["Descending"] = "Descending";
})(SortOrder || (SortOrder = {}));
export var BotLocaleSortBy;
(function (BotLocaleSortBy) {
    /**
     * @internal
     */
    BotLocaleSortBy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotLocaleSortBy || (BotLocaleSortBy = {}));
export var BotLocaleStatus;
(function (BotLocaleStatus) {
    BotLocaleStatus["Building"] = "Building";
    BotLocaleStatus["Built"] = "Built";
    BotLocaleStatus["Creating"] = "Creating";
    BotLocaleStatus["Deleting"] = "Deleting";
    BotLocaleStatus["Failed"] = "Failed";
    BotLocaleStatus["Importing"] = "Importing";
    BotLocaleStatus["NotBuilt"] = "NotBuilt";
    BotLocaleStatus["ReadyExpressTesting"] = "ReadyExpressTesting";
})(BotLocaleStatus || (BotLocaleStatus = {}));
export var BotLocaleSummary;
(function (BotLocaleSummary) {
    /**
     * @internal
     */
    BotLocaleSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotLocaleSummary || (BotLocaleSummary = {}));
export var BotSortAttribute;
(function (BotSortAttribute) {
    BotSortAttribute["BotName"] = "BotName";
})(BotSortAttribute || (BotSortAttribute = {}));
export var BotSortBy;
(function (BotSortBy) {
    /**
     * @internal
     */
    BotSortBy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotSortBy || (BotSortBy = {}));
export var BotStatus;
(function (BotStatus) {
    BotStatus["Available"] = "Available";
    BotStatus["Creating"] = "Creating";
    BotStatus["Deleting"] = "Deleting";
    BotStatus["Failed"] = "Failed";
    BotStatus["Importing"] = "Importing";
    BotStatus["Inactive"] = "Inactive";
    BotStatus["Versioning"] = "Versioning";
})(BotStatus || (BotStatus = {}));
export var BotSummary;
(function (BotSummary) {
    /**
     * @internal
     */
    BotSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotSummary || (BotSummary = {}));
export var BotVersionLocaleDetails;
(function (BotVersionLocaleDetails) {
    /**
     * @internal
     */
    BotVersionLocaleDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotVersionLocaleDetails || (BotVersionLocaleDetails = {}));
export var BotVersionSortAttribute;
(function (BotVersionSortAttribute) {
    BotVersionSortAttribute["BotVersion"] = "BotVersion";
})(BotVersionSortAttribute || (BotVersionSortAttribute = {}));
export var BotVersionSortBy;
(function (BotVersionSortBy) {
    /**
     * @internal
     */
    BotVersionSortBy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotVersionSortBy || (BotVersionSortBy = {}));
export var BotVersionSummary;
(function (BotVersionSummary) {
    /**
     * @internal
     */
    BotVersionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotVersionSummary || (BotVersionSummary = {}));
export var BuildBotLocaleRequest;
(function (BuildBotLocaleRequest) {
    /**
     * @internal
     */
    BuildBotLocaleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuildBotLocaleRequest || (BuildBotLocaleRequest = {}));
export var BuildBotLocaleResponse;
(function (BuildBotLocaleResponse) {
    /**
     * @internal
     */
    BuildBotLocaleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuildBotLocaleResponse || (BuildBotLocaleResponse = {}));
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
export var PreconditionFailedException;
(function (PreconditionFailedException) {
    /**
     * @internal
     */
    PreconditionFailedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PreconditionFailedException || (PreconditionFailedException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
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
export var BuiltInIntentSortAttribute;
(function (BuiltInIntentSortAttribute) {
    BuiltInIntentSortAttribute["IntentSignature"] = "IntentSignature";
})(BuiltInIntentSortAttribute || (BuiltInIntentSortAttribute = {}));
export var BuiltInIntentSortBy;
(function (BuiltInIntentSortBy) {
    /**
     * @internal
     */
    BuiltInIntentSortBy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuiltInIntentSortBy || (BuiltInIntentSortBy = {}));
export var BuiltInIntentSummary;
(function (BuiltInIntentSummary) {
    /**
     * @internal
     */
    BuiltInIntentSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuiltInIntentSummary || (BuiltInIntentSummary = {}));
export var BuiltInSlotTypeSortAttribute;
(function (BuiltInSlotTypeSortAttribute) {
    BuiltInSlotTypeSortAttribute["SlotTypeSignature"] = "SlotTypeSignature";
})(BuiltInSlotTypeSortAttribute || (BuiltInSlotTypeSortAttribute = {}));
export var BuiltInSlotTypeSortBy;
(function (BuiltInSlotTypeSortBy) {
    /**
     * @internal
     */
    BuiltInSlotTypeSortBy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuiltInSlotTypeSortBy || (BuiltInSlotTypeSortBy = {}));
export var BuiltInSlotTypeSummary;
(function (BuiltInSlotTypeSummary) {
    /**
     * @internal
     */
    BuiltInSlotTypeSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuiltInSlotTypeSummary || (BuiltInSlotTypeSummary = {}));
export var Button;
(function (Button) {
    /**
     * @internal
     */
    Button.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Button || (Button = {}));
export var CloudWatchLogGroupLogDestination;
(function (CloudWatchLogGroupLogDestination) {
    /**
     * @internal
     */
    CloudWatchLogGroupLogDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudWatchLogGroupLogDestination || (CloudWatchLogGroupLogDestination = {}));
export var TextLogDestination;
(function (TextLogDestination) {
    /**
     * @internal
     */
    TextLogDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TextLogDestination || (TextLogDestination = {}));
export var TextLogSetting;
(function (TextLogSetting) {
    /**
     * @internal
     */
    TextLogSetting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TextLogSetting || (TextLogSetting = {}));
export var ConversationLogSettings;
(function (ConversationLogSettings) {
    /**
     * @internal
     */
    ConversationLogSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConversationLogSettings || (ConversationLogSettings = {}));
export var CreateBotRequest;
(function (CreateBotRequest) {
    /**
     * @internal
     */
    CreateBotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBotRequest || (CreateBotRequest = {}));
export var CreateBotResponse;
(function (CreateBotResponse) {
    /**
     * @internal
     */
    CreateBotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBotResponse || (CreateBotResponse = {}));
export var SentimentAnalysisSettings;
(function (SentimentAnalysisSettings) {
    /**
     * @internal
     */
    SentimentAnalysisSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SentimentAnalysisSettings || (SentimentAnalysisSettings = {}));
export var CreateBotAliasRequest;
(function (CreateBotAliasRequest) {
    /**
     * @internal
     */
    CreateBotAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBotAliasRequest || (CreateBotAliasRequest = {}));
export var CreateBotAliasResponse;
(function (CreateBotAliasResponse) {
    /**
     * @internal
     */
    CreateBotAliasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBotAliasResponse || (CreateBotAliasResponse = {}));
export var CreateBotLocaleRequest;
(function (CreateBotLocaleRequest) {
    /**
     * @internal
     */
    CreateBotLocaleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBotLocaleRequest || (CreateBotLocaleRequest = {}));
export var CreateBotLocaleResponse;
(function (CreateBotLocaleResponse) {
    /**
     * @internal
     */
    CreateBotLocaleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBotLocaleResponse || (CreateBotLocaleResponse = {}));
export var CreateBotVersionRequest;
(function (CreateBotVersionRequest) {
    /**
     * @internal
     */
    CreateBotVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBotVersionRequest || (CreateBotVersionRequest = {}));
export var CreateBotVersionResponse;
(function (CreateBotVersionResponse) {
    /**
     * @internal
     */
    CreateBotVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBotVersionResponse || (CreateBotVersionResponse = {}));
export var ImportExportFileFormat;
(function (ImportExportFileFormat) {
    ImportExportFileFormat["LexJson"] = "LexJson";
})(ImportExportFileFormat || (ImportExportFileFormat = {}));
export var ExportResourceSpecification;
(function (ExportResourceSpecification) {
    /**
     * @internal
     */
    ExportResourceSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportResourceSpecification || (ExportResourceSpecification = {}));
export var CreateExportRequest;
(function (CreateExportRequest) {
    /**
     * @internal
     */
    CreateExportRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.filePassword && { filePassword: SENSITIVE_STRING }))); };
})(CreateExportRequest || (CreateExportRequest = {}));
export var ExportStatus;
(function (ExportStatus) {
    ExportStatus["Completed"] = "Completed";
    ExportStatus["Deleting"] = "Deleting";
    ExportStatus["Failed"] = "Failed";
    ExportStatus["InProgress"] = "InProgress";
})(ExportStatus || (ExportStatus = {}));
export var CreateExportResponse;
(function (CreateExportResponse) {
    /**
     * @internal
     */
    CreateExportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateExportResponse || (CreateExportResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var DialogCodeHookSettings;
(function (DialogCodeHookSettings) {
    /**
     * @internal
     */
    DialogCodeHookSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DialogCodeHookSettings || (DialogCodeHookSettings = {}));
export var FulfillmentCodeHookSettings;
(function (FulfillmentCodeHookSettings) {
    /**
     * @internal
     */
    FulfillmentCodeHookSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FulfillmentCodeHookSettings || (FulfillmentCodeHookSettings = {}));
export var InputContext;
(function (InputContext) {
    /**
     * @internal
     */
    InputContext.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputContext || (InputContext = {}));
export var CustomPayload;
(function (CustomPayload) {
    /**
     * @internal
     */
    CustomPayload.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomPayload || (CustomPayload = {}));
export var ImageResponseCard;
(function (ImageResponseCard) {
    /**
     * @internal
     */
    ImageResponseCard.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageResponseCard || (ImageResponseCard = {}));
export var PlainTextMessage;
(function (PlainTextMessage) {
    /**
     * @internal
     */
    PlainTextMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlainTextMessage || (PlainTextMessage = {}));
export var SSMLMessage;
(function (SSMLMessage) {
    /**
     * @internal
     */
    SSMLMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SSMLMessage || (SSMLMessage = {}));
export var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Message || (Message = {}));
export var MessageGroup;
(function (MessageGroup) {
    /**
     * @internal
     */
    MessageGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MessageGroup || (MessageGroup = {}));
export var ResponseSpecification;
(function (ResponseSpecification) {
    /**
     * @internal
     */
    ResponseSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResponseSpecification || (ResponseSpecification = {}));
export var IntentClosingSetting;
(function (IntentClosingSetting) {
    /**
     * @internal
     */
    IntentClosingSetting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntentClosingSetting || (IntentClosingSetting = {}));
export var PromptSpecification;
(function (PromptSpecification) {
    /**
     * @internal
     */
    PromptSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PromptSpecification || (PromptSpecification = {}));
export var IntentConfirmationSetting;
(function (IntentConfirmationSetting) {
    /**
     * @internal
     */
    IntentConfirmationSetting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntentConfirmationSetting || (IntentConfirmationSetting = {}));
export var KendraConfiguration;
(function (KendraConfiguration) {
    /**
     * @internal
     */
    KendraConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KendraConfiguration || (KendraConfiguration = {}));
export var OutputContext;
(function (OutputContext) {
    /**
     * @internal
     */
    OutputContext.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputContext || (OutputContext = {}));
export var SampleUtterance;
(function (SampleUtterance) {
    /**
     * @internal
     */
    SampleUtterance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SampleUtterance || (SampleUtterance = {}));
export var CreateIntentRequest;
(function (CreateIntentRequest) {
    /**
     * @internal
     */
    CreateIntentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIntentRequest || (CreateIntentRequest = {}));
export var CreateIntentResponse;
(function (CreateIntentResponse) {
    /**
     * @internal
     */
    CreateIntentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIntentResponse || (CreateIntentResponse = {}));
export var CreateResourcePolicyRequest;
(function (CreateResourcePolicyRequest) {
    /**
     * @internal
     */
    CreateResourcePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateResourcePolicyRequest || (CreateResourcePolicyRequest = {}));
export var CreateResourcePolicyResponse;
(function (CreateResourcePolicyResponse) {
    /**
     * @internal
     */
    CreateResourcePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateResourcePolicyResponse || (CreateResourcePolicyResponse = {}));
export var Effect;
(function (Effect) {
    Effect["Allow"] = "Allow";
    Effect["Deny"] = "Deny";
})(Effect || (Effect = {}));
export var Principal;
(function (Principal) {
    /**
     * @internal
     */
    Principal.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Principal || (Principal = {}));
export var CreateResourcePolicyStatementRequest;
(function (CreateResourcePolicyStatementRequest) {
    /**
     * @internal
     */
    CreateResourcePolicyStatementRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateResourcePolicyStatementRequest || (CreateResourcePolicyStatementRequest = {}));
export var CreateResourcePolicyStatementResponse;
(function (CreateResourcePolicyStatementResponse) {
    /**
     * @internal
     */
    CreateResourcePolicyStatementResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateResourcePolicyStatementResponse || (CreateResourcePolicyStatementResponse = {}));
export var ObfuscationSettingType;
(function (ObfuscationSettingType) {
    ObfuscationSettingType["DefaultObfuscation"] = "DefaultObfuscation";
    ObfuscationSettingType["None"] = "None";
})(ObfuscationSettingType || (ObfuscationSettingType = {}));
export var ObfuscationSetting;
(function (ObfuscationSetting) {
    /**
     * @internal
     */
    ObfuscationSetting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObfuscationSetting || (ObfuscationSetting = {}));
export var SlotDefaultValue;
(function (SlotDefaultValue) {
    /**
     * @internal
     */
    SlotDefaultValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotDefaultValue || (SlotDefaultValue = {}));
export var SlotDefaultValueSpecification;
(function (SlotDefaultValueSpecification) {
    /**
     * @internal
     */
    SlotDefaultValueSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotDefaultValueSpecification || (SlotDefaultValueSpecification = {}));
export var SlotConstraint;
(function (SlotConstraint) {
    SlotConstraint["Optional"] = "Optional";
    SlotConstraint["Required"] = "Required";
})(SlotConstraint || (SlotConstraint = {}));
export var StillWaitingResponseSpecification;
(function (StillWaitingResponseSpecification) {
    /**
     * @internal
     */
    StillWaitingResponseSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StillWaitingResponseSpecification || (StillWaitingResponseSpecification = {}));
export var WaitAndContinueSpecification;
(function (WaitAndContinueSpecification) {
    /**
     * @internal
     */
    WaitAndContinueSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WaitAndContinueSpecification || (WaitAndContinueSpecification = {}));
export var SlotValueElicitationSetting;
(function (SlotValueElicitationSetting) {
    /**
     * @internal
     */
    SlotValueElicitationSetting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotValueElicitationSetting || (SlotValueElicitationSetting = {}));
export var CreateSlotRequest;
(function (CreateSlotRequest) {
    /**
     * @internal
     */
    CreateSlotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSlotRequest || (CreateSlotRequest = {}));
export var CreateSlotResponse;
(function (CreateSlotResponse) {
    /**
     * @internal
     */
    CreateSlotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSlotResponse || (CreateSlotResponse = {}));
export var SampleValue;
(function (SampleValue) {
    /**
     * @internal
     */
    SampleValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SampleValue || (SampleValue = {}));
export var SlotTypeValue;
(function (SlotTypeValue) {
    /**
     * @internal
     */
    SlotTypeValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotTypeValue || (SlotTypeValue = {}));
export var SlotValueRegexFilter;
(function (SlotValueRegexFilter) {
    /**
     * @internal
     */
    SlotValueRegexFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotValueRegexFilter || (SlotValueRegexFilter = {}));
export var SlotValueResolutionStrategy;
(function (SlotValueResolutionStrategy) {
    SlotValueResolutionStrategy["OriginalValue"] = "OriginalValue";
    SlotValueResolutionStrategy["TopResolution"] = "TopResolution";
})(SlotValueResolutionStrategy || (SlotValueResolutionStrategy = {}));
export var SlotValueSelectionSetting;
(function (SlotValueSelectionSetting) {
    /**
     * @internal
     */
    SlotValueSelectionSetting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotValueSelectionSetting || (SlotValueSelectionSetting = {}));
export var CreateSlotTypeRequest;
(function (CreateSlotTypeRequest) {
    /**
     * @internal
     */
    CreateSlotTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSlotTypeRequest || (CreateSlotTypeRequest = {}));
export var CreateSlotTypeResponse;
(function (CreateSlotTypeResponse) {
    /**
     * @internal
     */
    CreateSlotTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSlotTypeResponse || (CreateSlotTypeResponse = {}));
export var CreateUploadUrlRequest;
(function (CreateUploadUrlRequest) {
    /**
     * @internal
     */
    CreateUploadUrlRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUploadUrlRequest || (CreateUploadUrlRequest = {}));
export var CreateUploadUrlResponse;
(function (CreateUploadUrlResponse) {
    /**
     * @internal
     */
    CreateUploadUrlResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUploadUrlResponse || (CreateUploadUrlResponse = {}));
export var DeleteBotRequest;
(function (DeleteBotRequest) {
    /**
     * @internal
     */
    DeleteBotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBotRequest || (DeleteBotRequest = {}));
export var DeleteBotResponse;
(function (DeleteBotResponse) {
    /**
     * @internal
     */
    DeleteBotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBotResponse || (DeleteBotResponse = {}));
export var DeleteBotAliasRequest;
(function (DeleteBotAliasRequest) {
    /**
     * @internal
     */
    DeleteBotAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBotAliasRequest || (DeleteBotAliasRequest = {}));
export var DeleteBotAliasResponse;
(function (DeleteBotAliasResponse) {
    /**
     * @internal
     */
    DeleteBotAliasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBotAliasResponse || (DeleteBotAliasResponse = {}));
export var DeleteBotLocaleRequest;
(function (DeleteBotLocaleRequest) {
    /**
     * @internal
     */
    DeleteBotLocaleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBotLocaleRequest || (DeleteBotLocaleRequest = {}));
export var DeleteBotLocaleResponse;
(function (DeleteBotLocaleResponse) {
    /**
     * @internal
     */
    DeleteBotLocaleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBotLocaleResponse || (DeleteBotLocaleResponse = {}));
export var DeleteBotVersionRequest;
(function (DeleteBotVersionRequest) {
    /**
     * @internal
     */
    DeleteBotVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBotVersionRequest || (DeleteBotVersionRequest = {}));
export var DeleteBotVersionResponse;
(function (DeleteBotVersionResponse) {
    /**
     * @internal
     */
    DeleteBotVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBotVersionResponse || (DeleteBotVersionResponse = {}));
export var DeleteExportRequest;
(function (DeleteExportRequest) {
    /**
     * @internal
     */
    DeleteExportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteExportRequest || (DeleteExportRequest = {}));
export var DeleteExportResponse;
(function (DeleteExportResponse) {
    /**
     * @internal
     */
    DeleteExportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteExportResponse || (DeleteExportResponse = {}));
export var DeleteImportRequest;
(function (DeleteImportRequest) {
    /**
     * @internal
     */
    DeleteImportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteImportRequest || (DeleteImportRequest = {}));
export var ImportStatus;
(function (ImportStatus) {
    ImportStatus["Completed"] = "Completed";
    ImportStatus["Deleting"] = "Deleting";
    ImportStatus["Failed"] = "Failed";
    ImportStatus["InProgress"] = "InProgress";
})(ImportStatus || (ImportStatus = {}));
export var DeleteImportResponse;
(function (DeleteImportResponse) {
    /**
     * @internal
     */
    DeleteImportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteImportResponse || (DeleteImportResponse = {}));
export var DeleteIntentRequest;
(function (DeleteIntentRequest) {
    /**
     * @internal
     */
    DeleteIntentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteIntentRequest || (DeleteIntentRequest = {}));
export var DeleteResourcePolicyRequest;
(function (DeleteResourcePolicyRequest) {
    /**
     * @internal
     */
    DeleteResourcePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourcePolicyRequest || (DeleteResourcePolicyRequest = {}));
export var DeleteResourcePolicyResponse;
(function (DeleteResourcePolicyResponse) {
    /**
     * @internal
     */
    DeleteResourcePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourcePolicyResponse || (DeleteResourcePolicyResponse = {}));
export var DeleteResourcePolicyStatementRequest;
(function (DeleteResourcePolicyStatementRequest) {
    /**
     * @internal
     */
    DeleteResourcePolicyStatementRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourcePolicyStatementRequest || (DeleteResourcePolicyStatementRequest = {}));
export var DeleteResourcePolicyStatementResponse;
(function (DeleteResourcePolicyStatementResponse) {
    /**
     * @internal
     */
    DeleteResourcePolicyStatementResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourcePolicyStatementResponse || (DeleteResourcePolicyStatementResponse = {}));
export var DeleteSlotRequest;
(function (DeleteSlotRequest) {
    /**
     * @internal
     */
    DeleteSlotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSlotRequest || (DeleteSlotRequest = {}));
export var DeleteSlotTypeRequest;
(function (DeleteSlotTypeRequest) {
    /**
     * @internal
     */
    DeleteSlotTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSlotTypeRequest || (DeleteSlotTypeRequest = {}));
export var DescribeBotRequest;
(function (DescribeBotRequest) {
    /**
     * @internal
     */
    DescribeBotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBotRequest || (DescribeBotRequest = {}));
export var DescribeBotResponse;
(function (DescribeBotResponse) {
    /**
     * @internal
     */
    DescribeBotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBotResponse || (DescribeBotResponse = {}));
export var DescribeBotAliasRequest;
(function (DescribeBotAliasRequest) {
    /**
     * @internal
     */
    DescribeBotAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBotAliasRequest || (DescribeBotAliasRequest = {}));
export var DescribeBotAliasResponse;
(function (DescribeBotAliasResponse) {
    /**
     * @internal
     */
    DescribeBotAliasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBotAliasResponse || (DescribeBotAliasResponse = {}));
export var DescribeBotLocaleRequest;
(function (DescribeBotLocaleRequest) {
    /**
     * @internal
     */
    DescribeBotLocaleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBotLocaleRequest || (DescribeBotLocaleRequest = {}));
export var DescribeBotLocaleResponse;
(function (DescribeBotLocaleResponse) {
    /**
     * @internal
     */
    DescribeBotLocaleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBotLocaleResponse || (DescribeBotLocaleResponse = {}));
export var DescribeBotVersionRequest;
(function (DescribeBotVersionRequest) {
    /**
     * @internal
     */
    DescribeBotVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBotVersionRequest || (DescribeBotVersionRequest = {}));
export var DescribeBotVersionResponse;
(function (DescribeBotVersionResponse) {
    /**
     * @internal
     */
    DescribeBotVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBotVersionResponse || (DescribeBotVersionResponse = {}));
export var DescribeExportRequest;
(function (DescribeExportRequest) {
    /**
     * @internal
     */
    DescribeExportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeExportRequest || (DescribeExportRequest = {}));
export var DescribeExportResponse;
(function (DescribeExportResponse) {
    /**
     * @internal
     */
    DescribeExportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeExportResponse || (DescribeExportResponse = {}));
export var DescribeImportRequest;
(function (DescribeImportRequest) {
    /**
     * @internal
     */
    DescribeImportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImportRequest || (DescribeImportRequest = {}));
export var MergeStrategy;
(function (MergeStrategy) {
    MergeStrategy["FailOnConflict"] = "FailOnConflict";
    MergeStrategy["Overwrite"] = "Overwrite";
})(MergeStrategy || (MergeStrategy = {}));
export var ImportResourceSpecification;
(function (ImportResourceSpecification) {
    /**
     * @internal
     */
    ImportResourceSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportResourceSpecification || (ImportResourceSpecification = {}));
export var DescribeImportResponse;
(function (DescribeImportResponse) {
    /**
     * @internal
     */
    DescribeImportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImportResponse || (DescribeImportResponse = {}));
export var DescribeIntentRequest;
(function (DescribeIntentRequest) {
    /**
     * @internal
     */
    DescribeIntentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeIntentRequest || (DescribeIntentRequest = {}));
export var SlotPriority;
(function (SlotPriority) {
    /**
     * @internal
     */
    SlotPriority.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotPriority || (SlotPriority = {}));
export var DescribeIntentResponse;
(function (DescribeIntentResponse) {
    /**
     * @internal
     */
    DescribeIntentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeIntentResponse || (DescribeIntentResponse = {}));
export var DescribeResourcePolicyRequest;
(function (DescribeResourcePolicyRequest) {
    /**
     * @internal
     */
    DescribeResourcePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeResourcePolicyRequest || (DescribeResourcePolicyRequest = {}));
export var DescribeResourcePolicyResponse;
(function (DescribeResourcePolicyResponse) {
    /**
     * @internal
     */
    DescribeResourcePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeResourcePolicyResponse || (DescribeResourcePolicyResponse = {}));
export var DescribeSlotRequest;
(function (DescribeSlotRequest) {
    /**
     * @internal
     */
    DescribeSlotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSlotRequest || (DescribeSlotRequest = {}));
export var DescribeSlotResponse;
(function (DescribeSlotResponse) {
    /**
     * @internal
     */
    DescribeSlotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSlotResponse || (DescribeSlotResponse = {}));
export var DescribeSlotTypeRequest;
(function (DescribeSlotTypeRequest) {
    /**
     * @internal
     */
    DescribeSlotTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSlotTypeRequest || (DescribeSlotTypeRequest = {}));
export var DescribeSlotTypeResponse;
(function (DescribeSlotTypeResponse) {
    /**
     * @internal
     */
    DescribeSlotTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSlotTypeResponse || (DescribeSlotTypeResponse = {}));
export var ExportFilterName;
(function (ExportFilterName) {
    ExportFilterName["ExportResourceType"] = "ExportResourceType";
})(ExportFilterName || (ExportFilterName = {}));
export var ExportFilterOperator;
(function (ExportFilterOperator) {
    ExportFilterOperator["Contains"] = "CO";
    ExportFilterOperator["Equals"] = "EQ";
})(ExportFilterOperator || (ExportFilterOperator = {}));
export var ExportFilter;
(function (ExportFilter) {
    /**
     * @internal
     */
    ExportFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportFilter || (ExportFilter = {}));
export var ExportSortAttribute;
(function (ExportSortAttribute) {
    ExportSortAttribute["LastUpdatedDateTime"] = "LastUpdatedDateTime";
})(ExportSortAttribute || (ExportSortAttribute = {}));
export var ExportSortBy;
(function (ExportSortBy) {
    /**
     * @internal
     */
    ExportSortBy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportSortBy || (ExportSortBy = {}));
export var ExportSummary;
(function (ExportSummary) {
    /**
     * @internal
     */
    ExportSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportSummary || (ExportSummary = {}));
export var ImportFilterName;
(function (ImportFilterName) {
    ImportFilterName["ImportResourceType"] = "ImportResourceType";
})(ImportFilterName || (ImportFilterName = {}));
export var ImportFilterOperator;
(function (ImportFilterOperator) {
    ImportFilterOperator["Contains"] = "CO";
    ImportFilterOperator["Equals"] = "EQ";
})(ImportFilterOperator || (ImportFilterOperator = {}));
export var ImportFilter;
(function (ImportFilter) {
    /**
     * @internal
     */
    ImportFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportFilter || (ImportFilter = {}));
export var ImportSortAttribute;
(function (ImportSortAttribute) {
    ImportSortAttribute["LastUpdatedDateTime"] = "LastUpdatedDateTime";
})(ImportSortAttribute || (ImportSortAttribute = {}));
export var ImportSortBy;
(function (ImportSortBy) {
    /**
     * @internal
     */
    ImportSortBy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportSortBy || (ImportSortBy = {}));
export var ImportSummary;
(function (ImportSummary) {
    /**
     * @internal
     */
    ImportSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportSummary || (ImportSummary = {}));
export var IntentFilterName;
(function (IntentFilterName) {
    IntentFilterName["IntentName"] = "IntentName";
})(IntentFilterName || (IntentFilterName = {}));
export var IntentFilterOperator;
(function (IntentFilterOperator) {
    IntentFilterOperator["Contains"] = "CO";
    IntentFilterOperator["Equals"] = "EQ";
})(IntentFilterOperator || (IntentFilterOperator = {}));
export var IntentFilter;
(function (IntentFilter) {
    /**
     * @internal
     */
    IntentFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntentFilter || (IntentFilter = {}));
export var IntentSortAttribute;
(function (IntentSortAttribute) {
    IntentSortAttribute["IntentName"] = "IntentName";
    IntentSortAttribute["LastUpdatedDateTime"] = "LastUpdatedDateTime";
})(IntentSortAttribute || (IntentSortAttribute = {}));
export var IntentSortBy;
(function (IntentSortBy) {
    /**
     * @internal
     */
    IntentSortBy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntentSortBy || (IntentSortBy = {}));
export var IntentSummary;
(function (IntentSummary) {
    /**
     * @internal
     */
    IntentSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntentSummary || (IntentSummary = {}));
export var ListBotAliasesRequest;
(function (ListBotAliasesRequest) {
    /**
     * @internal
     */
    ListBotAliasesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBotAliasesRequest || (ListBotAliasesRequest = {}));
export var ListBotAliasesResponse;
(function (ListBotAliasesResponse) {
    /**
     * @internal
     */
    ListBotAliasesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBotAliasesResponse || (ListBotAliasesResponse = {}));
export var ListBotLocalesRequest;
(function (ListBotLocalesRequest) {
    /**
     * @internal
     */
    ListBotLocalesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBotLocalesRequest || (ListBotLocalesRequest = {}));
export var ListBotLocalesResponse;
(function (ListBotLocalesResponse) {
    /**
     * @internal
     */
    ListBotLocalesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBotLocalesResponse || (ListBotLocalesResponse = {}));
export var ListBotsRequest;
(function (ListBotsRequest) {
    /**
     * @internal
     */
    ListBotsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBotsRequest || (ListBotsRequest = {}));
export var ListBotsResponse;
(function (ListBotsResponse) {
    /**
     * @internal
     */
    ListBotsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBotsResponse || (ListBotsResponse = {}));
export var ListBotVersionsRequest;
(function (ListBotVersionsRequest) {
    /**
     * @internal
     */
    ListBotVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBotVersionsRequest || (ListBotVersionsRequest = {}));
export var ListBotVersionsResponse;
(function (ListBotVersionsResponse) {
    /**
     * @internal
     */
    ListBotVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBotVersionsResponse || (ListBotVersionsResponse = {}));
export var ListBuiltInIntentsRequest;
(function (ListBuiltInIntentsRequest) {
    /**
     * @internal
     */
    ListBuiltInIntentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuiltInIntentsRequest || (ListBuiltInIntentsRequest = {}));
export var ListBuiltInIntentsResponse;
(function (ListBuiltInIntentsResponse) {
    /**
     * @internal
     */
    ListBuiltInIntentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuiltInIntentsResponse || (ListBuiltInIntentsResponse = {}));
export var ListBuiltInSlotTypesRequest;
(function (ListBuiltInSlotTypesRequest) {
    /**
     * @internal
     */
    ListBuiltInSlotTypesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuiltInSlotTypesRequest || (ListBuiltInSlotTypesRequest = {}));
export var ListBuiltInSlotTypesResponse;
(function (ListBuiltInSlotTypesResponse) {
    /**
     * @internal
     */
    ListBuiltInSlotTypesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuiltInSlotTypesResponse || (ListBuiltInSlotTypesResponse = {}));
export var ListExportsRequest;
(function (ListExportsRequest) {
    /**
     * @internal
     */
    ListExportsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListExportsRequest || (ListExportsRequest = {}));
export var ListExportsResponse;
(function (ListExportsResponse) {
    /**
     * @internal
     */
    ListExportsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListExportsResponse || (ListExportsResponse = {}));
export var ListImportsRequest;
(function (ListImportsRequest) {
    /**
     * @internal
     */
    ListImportsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImportsRequest || (ListImportsRequest = {}));
export var ListImportsResponse;
(function (ListImportsResponse) {
    /**
     * @internal
     */
    ListImportsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImportsResponse || (ListImportsResponse = {}));
export var ListIntentsRequest;
(function (ListIntentsRequest) {
    /**
     * @internal
     */
    ListIntentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIntentsRequest || (ListIntentsRequest = {}));
export var ListIntentsResponse;
(function (ListIntentsResponse) {
    /**
     * @internal
     */
    ListIntentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIntentsResponse || (ListIntentsResponse = {}));
export var SlotFilterName;
(function (SlotFilterName) {
    SlotFilterName["SlotName"] = "SlotName";
})(SlotFilterName || (SlotFilterName = {}));
export var SlotFilterOperator;
(function (SlotFilterOperator) {
    SlotFilterOperator["Contains"] = "CO";
    SlotFilterOperator["Equals"] = "EQ";
})(SlotFilterOperator || (SlotFilterOperator = {}));
export var SlotFilter;
(function (SlotFilter) {
    /**
     * @internal
     */
    SlotFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotFilter || (SlotFilter = {}));
export var SlotSortAttribute;
(function (SlotSortAttribute) {
    SlotSortAttribute["LastUpdatedDateTime"] = "LastUpdatedDateTime";
    SlotSortAttribute["SlotName"] = "SlotName";
})(SlotSortAttribute || (SlotSortAttribute = {}));
export var SlotSortBy;
(function (SlotSortBy) {
    /**
     * @internal
     */
    SlotSortBy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotSortBy || (SlotSortBy = {}));
export var ListSlotsRequest;
(function (ListSlotsRequest) {
    /**
     * @internal
     */
    ListSlotsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSlotsRequest || (ListSlotsRequest = {}));
export var SlotSummary;
(function (SlotSummary) {
    /**
     * @internal
     */
    SlotSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotSummary || (SlotSummary = {}));
export var ListSlotsResponse;
(function (ListSlotsResponse) {
    /**
     * @internal
     */
    ListSlotsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSlotsResponse || (ListSlotsResponse = {}));
export var SlotTypeFilterName;
(function (SlotTypeFilterName) {
    SlotTypeFilterName["SlotTypeName"] = "SlotTypeName";
})(SlotTypeFilterName || (SlotTypeFilterName = {}));
export var SlotTypeFilterOperator;
(function (SlotTypeFilterOperator) {
    SlotTypeFilterOperator["Contains"] = "CO";
    SlotTypeFilterOperator["Equals"] = "EQ";
})(SlotTypeFilterOperator || (SlotTypeFilterOperator = {}));
export var SlotTypeFilter;
(function (SlotTypeFilter) {
    /**
     * @internal
     */
    SlotTypeFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotTypeFilter || (SlotTypeFilter = {}));
export var SlotTypeSortAttribute;
(function (SlotTypeSortAttribute) {
    SlotTypeSortAttribute["LastUpdatedDateTime"] = "LastUpdatedDateTime";
    SlotTypeSortAttribute["SlotTypeName"] = "SlotTypeName";
})(SlotTypeSortAttribute || (SlotTypeSortAttribute = {}));
export var SlotTypeSortBy;
(function (SlotTypeSortBy) {
    /**
     * @internal
     */
    SlotTypeSortBy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotTypeSortBy || (SlotTypeSortBy = {}));
export var ListSlotTypesRequest;
(function (ListSlotTypesRequest) {
    /**
     * @internal
     */
    ListSlotTypesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSlotTypesRequest || (ListSlotTypesRequest = {}));
export var SlotTypeSummary;
(function (SlotTypeSummary) {
    /**
     * @internal
     */
    SlotTypeSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotTypeSummary || (SlotTypeSummary = {}));
export var ListSlotTypesResponse;
(function (ListSlotTypesResponse) {
    /**
     * @internal
     */
    ListSlotTypesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSlotTypesResponse || (ListSlotTypesResponse = {}));
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
export var StartImportRequest;
(function (StartImportRequest) {
    /**
     * @internal
     */
    StartImportRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.filePassword && { filePassword: SENSITIVE_STRING }))); };
})(StartImportRequest || (StartImportRequest = {}));
export var StartImportResponse;
(function (StartImportResponse) {
    /**
     * @internal
     */
    StartImportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartImportResponse || (StartImportResponse = {}));
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
export var UpdateBotRequest;
(function (UpdateBotRequest) {
    /**
     * @internal
     */
    UpdateBotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBotRequest || (UpdateBotRequest = {}));
export var UpdateBotResponse;
(function (UpdateBotResponse) {
    /**
     * @internal
     */
    UpdateBotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBotResponse || (UpdateBotResponse = {}));
export var UpdateBotAliasRequest;
(function (UpdateBotAliasRequest) {
    /**
     * @internal
     */
    UpdateBotAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBotAliasRequest || (UpdateBotAliasRequest = {}));
export var UpdateBotAliasResponse;
(function (UpdateBotAliasResponse) {
    /**
     * @internal
     */
    UpdateBotAliasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBotAliasResponse || (UpdateBotAliasResponse = {}));
export var UpdateBotLocaleRequest;
(function (UpdateBotLocaleRequest) {
    /**
     * @internal
     */
    UpdateBotLocaleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBotLocaleRequest || (UpdateBotLocaleRequest = {}));
export var UpdateBotLocaleResponse;
(function (UpdateBotLocaleResponse) {
    /**
     * @internal
     */
    UpdateBotLocaleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBotLocaleResponse || (UpdateBotLocaleResponse = {}));
export var UpdateExportRequest;
(function (UpdateExportRequest) {
    /**
     * @internal
     */
    UpdateExportRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.filePassword && { filePassword: SENSITIVE_STRING }))); };
})(UpdateExportRequest || (UpdateExportRequest = {}));
export var UpdateExportResponse;
(function (UpdateExportResponse) {
    /**
     * @internal
     */
    UpdateExportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateExportResponse || (UpdateExportResponse = {}));
export var UpdateIntentRequest;
(function (UpdateIntentRequest) {
    /**
     * @internal
     */
    UpdateIntentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIntentRequest || (UpdateIntentRequest = {}));
export var UpdateIntentResponse;
(function (UpdateIntentResponse) {
    /**
     * @internal
     */
    UpdateIntentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIntentResponse || (UpdateIntentResponse = {}));
export var UpdateResourcePolicyRequest;
(function (UpdateResourcePolicyRequest) {
    /**
     * @internal
     */
    UpdateResourcePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateResourcePolicyRequest || (UpdateResourcePolicyRequest = {}));
export var UpdateResourcePolicyResponse;
(function (UpdateResourcePolicyResponse) {
    /**
     * @internal
     */
    UpdateResourcePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateResourcePolicyResponse || (UpdateResourcePolicyResponse = {}));
export var UpdateSlotRequest;
(function (UpdateSlotRequest) {
    /**
     * @internal
     */
    UpdateSlotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSlotRequest || (UpdateSlotRequest = {}));
export var UpdateSlotResponse;
(function (UpdateSlotResponse) {
    /**
     * @internal
     */
    UpdateSlotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSlotResponse || (UpdateSlotResponse = {}));
export var UpdateSlotTypeRequest;
(function (UpdateSlotTypeRequest) {
    /**
     * @internal
     */
    UpdateSlotTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSlotTypeRequest || (UpdateSlotTypeRequest = {}));
export var UpdateSlotTypeResponse;
(function (UpdateSlotTypeResponse) {
    /**
     * @internal
     */
    UpdateSlotTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSlotTypeResponse || (UpdateSlotTypeResponse = {}));
//# sourceMappingURL=models_0.js.map