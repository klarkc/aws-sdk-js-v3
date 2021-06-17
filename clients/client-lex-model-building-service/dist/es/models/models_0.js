import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var CreateBotVersionRequest;
(function (CreateBotVersionRequest) {
    /**
     * @internal
     */
    CreateBotVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBotVersionRequest || (CreateBotVersionRequest = {}));
export var ContentType;
(function (ContentType) {
    ContentType["CUSTOM_PAYLOAD"] = "CustomPayload";
    ContentType["PLAIN_TEXT"] = "PlainText";
    ContentType["SSML"] = "SSML";
})(ContentType || (ContentType = {}));
export var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Message || (Message = {}));
export var Statement;
(function (Statement) {
    /**
     * @internal
     */
    Statement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Statement || (Statement = {}));
export var Prompt;
(function (Prompt) {
    /**
     * @internal
     */
    Prompt.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Prompt || (Prompt = {}));
export var Intent;
(function (Intent) {
    /**
     * @internal
     */
    Intent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Intent || (Intent = {}));
export var Locale;
(function (Locale) {
    Locale["DE_DE"] = "de-DE";
    Locale["EN_AU"] = "en-AU";
    Locale["EN_GB"] = "en-GB";
    Locale["EN_US"] = "en-US";
    Locale["ES_419"] = "es-419";
    Locale["ES_ES"] = "es-ES";
    Locale["ES_US"] = "es-US";
    Locale["FR_CA"] = "fr-CA";
    Locale["FR_FR"] = "fr-FR";
    Locale["IT_IT"] = "it-IT";
    Locale["JA_JP"] = "ja-JP";
})(Locale || (Locale = {}));
export var Status;
(function (Status) {
    Status["BUILDING"] = "BUILDING";
    Status["FAILED"] = "FAILED";
    Status["NOT_BUILT"] = "NOT_BUILT";
    Status["READY"] = "READY";
    Status["READY_BASIC_TESTING"] = "READY_BASIC_TESTING";
})(Status || (Status = {}));
export var CreateBotVersionResponse;
(function (CreateBotVersionResponse) {
    /**
     * @internal
     */
    CreateBotVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBotVersionResponse || (CreateBotVersionResponse = {}));
export var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalFailureException || (InternalFailureException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var PreconditionFailedException;
(function (PreconditionFailedException) {
    /**
     * @internal
     */
    PreconditionFailedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PreconditionFailedException || (PreconditionFailedException = {}));
export var CreateIntentVersionRequest;
(function (CreateIntentVersionRequest) {
    /**
     * @internal
     */
    CreateIntentVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIntentVersionRequest || (CreateIntentVersionRequest = {}));
export var CodeHook;
(function (CodeHook) {
    /**
     * @internal
     */
    CodeHook.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeHook || (CodeHook = {}));
export var FollowUpPrompt;
(function (FollowUpPrompt) {
    /**
     * @internal
     */
    FollowUpPrompt.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FollowUpPrompt || (FollowUpPrompt = {}));
export var FulfillmentActivityType;
(function (FulfillmentActivityType) {
    FulfillmentActivityType["CODE_HOOK"] = "CodeHook";
    FulfillmentActivityType["RETURN_INTENT"] = "ReturnIntent";
})(FulfillmentActivityType || (FulfillmentActivityType = {}));
export var FulfillmentActivity;
(function (FulfillmentActivity) {
    /**
     * @internal
     */
    FulfillmentActivity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FulfillmentActivity || (FulfillmentActivity = {}));
export var InputContext;
(function (InputContext) {
    /**
     * @internal
     */
    InputContext.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputContext || (InputContext = {}));
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
export var SlotDefaultValue;
(function (SlotDefaultValue) {
    /**
     * @internal
     */
    SlotDefaultValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotDefaultValue || (SlotDefaultValue = {}));
export var SlotDefaultValueSpec;
(function (SlotDefaultValueSpec) {
    /**
     * @internal
     */
    SlotDefaultValueSpec.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotDefaultValueSpec || (SlotDefaultValueSpec = {}));
export var ObfuscationSetting;
(function (ObfuscationSetting) {
    ObfuscationSetting["DEFAULT_OBFUSCATION"] = "DEFAULT_OBFUSCATION";
    ObfuscationSetting["NONE"] = "NONE";
})(ObfuscationSetting || (ObfuscationSetting = {}));
export var SlotConstraint;
(function (SlotConstraint) {
    SlotConstraint["OPTIONAL"] = "Optional";
    SlotConstraint["REQUIRED"] = "Required";
})(SlotConstraint || (SlotConstraint = {}));
export var Slot;
(function (Slot) {
    /**
     * @internal
     */
    Slot.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Slot || (Slot = {}));
export var CreateIntentVersionResponse;
(function (CreateIntentVersionResponse) {
    /**
     * @internal
     */
    CreateIntentVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIntentVersionResponse || (CreateIntentVersionResponse = {}));
export var CreateSlotTypeVersionRequest;
(function (CreateSlotTypeVersionRequest) {
    /**
     * @internal
     */
    CreateSlotTypeVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSlotTypeVersionRequest || (CreateSlotTypeVersionRequest = {}));
export var EnumerationValue;
(function (EnumerationValue) {
    /**
     * @internal
     */
    EnumerationValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnumerationValue || (EnumerationValue = {}));
export var SlotTypeRegexConfiguration;
(function (SlotTypeRegexConfiguration) {
    /**
     * @internal
     */
    SlotTypeRegexConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotTypeRegexConfiguration || (SlotTypeRegexConfiguration = {}));
export var SlotTypeConfiguration;
(function (SlotTypeConfiguration) {
    /**
     * @internal
     */
    SlotTypeConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotTypeConfiguration || (SlotTypeConfiguration = {}));
export var SlotValueSelectionStrategy;
(function (SlotValueSelectionStrategy) {
    SlotValueSelectionStrategy["ORIGINAL_VALUE"] = "ORIGINAL_VALUE";
    SlotValueSelectionStrategy["TOP_RESOLUTION"] = "TOP_RESOLUTION";
})(SlotValueSelectionStrategy || (SlotValueSelectionStrategy = {}));
export var CreateSlotTypeVersionResponse;
(function (CreateSlotTypeVersionResponse) {
    /**
     * @internal
     */
    CreateSlotTypeVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSlotTypeVersionResponse || (CreateSlotTypeVersionResponse = {}));
export var DeleteBotRequest;
(function (DeleteBotRequest) {
    /**
     * @internal
     */
    DeleteBotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBotRequest || (DeleteBotRequest = {}));
export var ResourceReference;
(function (ResourceReference) {
    /**
     * @internal
     */
    ResourceReference.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceReference || (ResourceReference = {}));
export var ReferenceType;
(function (ReferenceType) {
    ReferenceType["BOT"] = "Bot";
    ReferenceType["BOTALIAS"] = "BotAlias";
    ReferenceType["BOTCHANNEL"] = "BotChannel";
    ReferenceType["INTENT"] = "Intent";
})(ReferenceType || (ReferenceType = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInUseException || (ResourceInUseException = {}));
export var DeleteBotAliasRequest;
(function (DeleteBotAliasRequest) {
    /**
     * @internal
     */
    DeleteBotAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBotAliasRequest || (DeleteBotAliasRequest = {}));
export var DeleteBotChannelAssociationRequest;
(function (DeleteBotChannelAssociationRequest) {
    /**
     * @internal
     */
    DeleteBotChannelAssociationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBotChannelAssociationRequest || (DeleteBotChannelAssociationRequest = {}));
export var DeleteBotVersionRequest;
(function (DeleteBotVersionRequest) {
    /**
     * @internal
     */
    DeleteBotVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBotVersionRequest || (DeleteBotVersionRequest = {}));
export var DeleteIntentRequest;
(function (DeleteIntentRequest) {
    /**
     * @internal
     */
    DeleteIntentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteIntentRequest || (DeleteIntentRequest = {}));
export var DeleteIntentVersionRequest;
(function (DeleteIntentVersionRequest) {
    /**
     * @internal
     */
    DeleteIntentVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteIntentVersionRequest || (DeleteIntentVersionRequest = {}));
export var DeleteSlotTypeRequest;
(function (DeleteSlotTypeRequest) {
    /**
     * @internal
     */
    DeleteSlotTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSlotTypeRequest || (DeleteSlotTypeRequest = {}));
export var DeleteSlotTypeVersionRequest;
(function (DeleteSlotTypeVersionRequest) {
    /**
     * @internal
     */
    DeleteSlotTypeVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSlotTypeVersionRequest || (DeleteSlotTypeVersionRequest = {}));
export var DeleteUtterancesRequest;
(function (DeleteUtterancesRequest) {
    /**
     * @internal
     */
    DeleteUtterancesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUtterancesRequest || (DeleteUtterancesRequest = {}));
export var GetBotRequest;
(function (GetBotRequest) {
    /**
     * @internal
     */
    GetBotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBotRequest || (GetBotRequest = {}));
export var GetBotResponse;
(function (GetBotResponse) {
    /**
     * @internal
     */
    GetBotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBotResponse || (GetBotResponse = {}));
export var GetBotAliasRequest;
(function (GetBotAliasRequest) {
    /**
     * @internal
     */
    GetBotAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBotAliasRequest || (GetBotAliasRequest = {}));
export var Destination;
(function (Destination) {
    Destination["CLOUDWATCH_LOGS"] = "CLOUDWATCH_LOGS";
    Destination["S3"] = "S3";
})(Destination || (Destination = {}));
export var LogType;
(function (LogType) {
    LogType["AUDIO"] = "AUDIO";
    LogType["TEXT"] = "TEXT";
})(LogType || (LogType = {}));
export var LogSettingsResponse;
(function (LogSettingsResponse) {
    /**
     * @internal
     */
    LogSettingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogSettingsResponse || (LogSettingsResponse = {}));
export var ConversationLogsResponse;
(function (ConversationLogsResponse) {
    /**
     * @internal
     */
    ConversationLogsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConversationLogsResponse || (ConversationLogsResponse = {}));
export var GetBotAliasResponse;
(function (GetBotAliasResponse) {
    /**
     * @internal
     */
    GetBotAliasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBotAliasResponse || (GetBotAliasResponse = {}));
export var GetBotAliasesRequest;
(function (GetBotAliasesRequest) {
    /**
     * @internal
     */
    GetBotAliasesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBotAliasesRequest || (GetBotAliasesRequest = {}));
export var BotAliasMetadata;
(function (BotAliasMetadata) {
    /**
     * @internal
     */
    BotAliasMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotAliasMetadata || (BotAliasMetadata = {}));
export var GetBotAliasesResponse;
(function (GetBotAliasesResponse) {
    /**
     * @internal
     */
    GetBotAliasesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBotAliasesResponse || (GetBotAliasesResponse = {}));
export var GetBotChannelAssociationRequest;
(function (GetBotChannelAssociationRequest) {
    /**
     * @internal
     */
    GetBotChannelAssociationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBotChannelAssociationRequest || (GetBotChannelAssociationRequest = {}));
export var ChannelStatus;
(function (ChannelStatus) {
    ChannelStatus["CREATED"] = "CREATED";
    ChannelStatus["FAILED"] = "FAILED";
    ChannelStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(ChannelStatus || (ChannelStatus = {}));
export var ChannelType;
(function (ChannelType) {
    ChannelType["FACEBOOK"] = "Facebook";
    ChannelType["KIK"] = "Kik";
    ChannelType["SLACK"] = "Slack";
    ChannelType["TWILIO_SMS"] = "Twilio-Sms";
})(ChannelType || (ChannelType = {}));
export var GetBotChannelAssociationResponse;
(function (GetBotChannelAssociationResponse) {
    /**
     * @internal
     */
    GetBotChannelAssociationResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.botConfiguration && { botConfiguration: SENSITIVE_STRING }))); };
})(GetBotChannelAssociationResponse || (GetBotChannelAssociationResponse = {}));
export var GetBotChannelAssociationsRequest;
(function (GetBotChannelAssociationsRequest) {
    /**
     * @internal
     */
    GetBotChannelAssociationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBotChannelAssociationsRequest || (GetBotChannelAssociationsRequest = {}));
export var BotChannelAssociation;
(function (BotChannelAssociation) {
    /**
     * @internal
     */
    BotChannelAssociation.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.botConfiguration && { botConfiguration: SENSITIVE_STRING }))); };
})(BotChannelAssociation || (BotChannelAssociation = {}));
export var GetBotChannelAssociationsResponse;
(function (GetBotChannelAssociationsResponse) {
    /**
     * @internal
     */
    GetBotChannelAssociationsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.botChannelAssociations && {
        botChannelAssociations: obj.botChannelAssociations.map(function (item) { return BotChannelAssociation.filterSensitiveLog(item); }),
    }))); };
})(GetBotChannelAssociationsResponse || (GetBotChannelAssociationsResponse = {}));
export var GetBotsRequest;
(function (GetBotsRequest) {
    /**
     * @internal
     */
    GetBotsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBotsRequest || (GetBotsRequest = {}));
export var BotMetadata;
(function (BotMetadata) {
    /**
     * @internal
     */
    BotMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BotMetadata || (BotMetadata = {}));
export var GetBotsResponse;
(function (GetBotsResponse) {
    /**
     * @internal
     */
    GetBotsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBotsResponse || (GetBotsResponse = {}));
export var GetBotVersionsRequest;
(function (GetBotVersionsRequest) {
    /**
     * @internal
     */
    GetBotVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBotVersionsRequest || (GetBotVersionsRequest = {}));
export var GetBotVersionsResponse;
(function (GetBotVersionsResponse) {
    /**
     * @internal
     */
    GetBotVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBotVersionsResponse || (GetBotVersionsResponse = {}));
export var GetBuiltinIntentRequest;
(function (GetBuiltinIntentRequest) {
    /**
     * @internal
     */
    GetBuiltinIntentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBuiltinIntentRequest || (GetBuiltinIntentRequest = {}));
export var BuiltinIntentSlot;
(function (BuiltinIntentSlot) {
    /**
     * @internal
     */
    BuiltinIntentSlot.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuiltinIntentSlot || (BuiltinIntentSlot = {}));
export var GetBuiltinIntentResponse;
(function (GetBuiltinIntentResponse) {
    /**
     * @internal
     */
    GetBuiltinIntentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBuiltinIntentResponse || (GetBuiltinIntentResponse = {}));
export var GetBuiltinIntentsRequest;
(function (GetBuiltinIntentsRequest) {
    /**
     * @internal
     */
    GetBuiltinIntentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBuiltinIntentsRequest || (GetBuiltinIntentsRequest = {}));
export var BuiltinIntentMetadata;
(function (BuiltinIntentMetadata) {
    /**
     * @internal
     */
    BuiltinIntentMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuiltinIntentMetadata || (BuiltinIntentMetadata = {}));
export var GetBuiltinIntentsResponse;
(function (GetBuiltinIntentsResponse) {
    /**
     * @internal
     */
    GetBuiltinIntentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBuiltinIntentsResponse || (GetBuiltinIntentsResponse = {}));
export var GetBuiltinSlotTypesRequest;
(function (GetBuiltinSlotTypesRequest) {
    /**
     * @internal
     */
    GetBuiltinSlotTypesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBuiltinSlotTypesRequest || (GetBuiltinSlotTypesRequest = {}));
export var BuiltinSlotTypeMetadata;
(function (BuiltinSlotTypeMetadata) {
    /**
     * @internal
     */
    BuiltinSlotTypeMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuiltinSlotTypeMetadata || (BuiltinSlotTypeMetadata = {}));
export var GetBuiltinSlotTypesResponse;
(function (GetBuiltinSlotTypesResponse) {
    /**
     * @internal
     */
    GetBuiltinSlotTypesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBuiltinSlotTypesResponse || (GetBuiltinSlotTypesResponse = {}));
export var ExportType;
(function (ExportType) {
    ExportType["ALEXA_SKILLS_KIT"] = "ALEXA_SKILLS_KIT";
    ExportType["LEX"] = "LEX";
})(ExportType || (ExportType = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["BOT"] = "BOT";
    ResourceType["INTENT"] = "INTENT";
    ResourceType["SLOT_TYPE"] = "SLOT_TYPE";
})(ResourceType || (ResourceType = {}));
export var GetExportRequest;
(function (GetExportRequest) {
    /**
     * @internal
     */
    GetExportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExportRequest || (GetExportRequest = {}));
export var ExportStatus;
(function (ExportStatus) {
    ExportStatus["FAILED"] = "FAILED";
    ExportStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ExportStatus["READY"] = "READY";
})(ExportStatus || (ExportStatus = {}));
export var GetExportResponse;
(function (GetExportResponse) {
    /**
     * @internal
     */
    GetExportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExportResponse || (GetExportResponse = {}));
export var GetImportRequest;
(function (GetImportRequest) {
    /**
     * @internal
     */
    GetImportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImportRequest || (GetImportRequest = {}));
export var ImportStatus;
(function (ImportStatus) {
    ImportStatus["COMPLETE"] = "COMPLETE";
    ImportStatus["FAILED"] = "FAILED";
    ImportStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(ImportStatus || (ImportStatus = {}));
export var MergeStrategy;
(function (MergeStrategy) {
    MergeStrategy["FAIL_ON_CONFLICT"] = "FAIL_ON_CONFLICT";
    MergeStrategy["OVERWRITE_LATEST"] = "OVERWRITE_LATEST";
})(MergeStrategy || (MergeStrategy = {}));
export var GetImportResponse;
(function (GetImportResponse) {
    /**
     * @internal
     */
    GetImportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImportResponse || (GetImportResponse = {}));
export var GetIntentRequest;
(function (GetIntentRequest) {
    /**
     * @internal
     */
    GetIntentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIntentRequest || (GetIntentRequest = {}));
export var GetIntentResponse;
(function (GetIntentResponse) {
    /**
     * @internal
     */
    GetIntentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIntentResponse || (GetIntentResponse = {}));
export var GetIntentsRequest;
(function (GetIntentsRequest) {
    /**
     * @internal
     */
    GetIntentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIntentsRequest || (GetIntentsRequest = {}));
export var IntentMetadata;
(function (IntentMetadata) {
    /**
     * @internal
     */
    IntentMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntentMetadata || (IntentMetadata = {}));
export var GetIntentsResponse;
(function (GetIntentsResponse) {
    /**
     * @internal
     */
    GetIntentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIntentsResponse || (GetIntentsResponse = {}));
export var GetIntentVersionsRequest;
(function (GetIntentVersionsRequest) {
    /**
     * @internal
     */
    GetIntentVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIntentVersionsRequest || (GetIntentVersionsRequest = {}));
export var GetIntentVersionsResponse;
(function (GetIntentVersionsResponse) {
    /**
     * @internal
     */
    GetIntentVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIntentVersionsResponse || (GetIntentVersionsResponse = {}));
export var GetSlotTypeRequest;
(function (GetSlotTypeRequest) {
    /**
     * @internal
     */
    GetSlotTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSlotTypeRequest || (GetSlotTypeRequest = {}));
export var GetSlotTypeResponse;
(function (GetSlotTypeResponse) {
    /**
     * @internal
     */
    GetSlotTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSlotTypeResponse || (GetSlotTypeResponse = {}));
export var GetSlotTypesRequest;
(function (GetSlotTypesRequest) {
    /**
     * @internal
     */
    GetSlotTypesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSlotTypesRequest || (GetSlotTypesRequest = {}));
export var SlotTypeMetadata;
(function (SlotTypeMetadata) {
    /**
     * @internal
     */
    SlotTypeMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SlotTypeMetadata || (SlotTypeMetadata = {}));
export var GetSlotTypesResponse;
(function (GetSlotTypesResponse) {
    /**
     * @internal
     */
    GetSlotTypesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSlotTypesResponse || (GetSlotTypesResponse = {}));
export var GetSlotTypeVersionsRequest;
(function (GetSlotTypeVersionsRequest) {
    /**
     * @internal
     */
    GetSlotTypeVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSlotTypeVersionsRequest || (GetSlotTypeVersionsRequest = {}));
export var GetSlotTypeVersionsResponse;
(function (GetSlotTypeVersionsResponse) {
    /**
     * @internal
     */
    GetSlotTypeVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSlotTypeVersionsResponse || (GetSlotTypeVersionsResponse = {}));
export var StatusType;
(function (StatusType) {
    StatusType["DETECTED"] = "Detected";
    StatusType["MISSED"] = "Missed";
})(StatusType || (StatusType = {}));
export var GetUtterancesViewRequest;
(function (GetUtterancesViewRequest) {
    /**
     * @internal
     */
    GetUtterancesViewRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUtterancesViewRequest || (GetUtterancesViewRequest = {}));
export var UtteranceData;
(function (UtteranceData) {
    /**
     * @internal
     */
    UtteranceData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UtteranceData || (UtteranceData = {}));
export var UtteranceList;
(function (UtteranceList) {
    /**
     * @internal
     */
    UtteranceList.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UtteranceList || (UtteranceList = {}));
export var GetUtterancesViewResponse;
(function (GetUtterancesViewResponse) {
    /**
     * @internal
     */
    GetUtterancesViewResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUtterancesViewResponse || (GetUtterancesViewResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var ProcessBehavior;
(function (ProcessBehavior) {
    ProcessBehavior["BUILD"] = "BUILD";
    ProcessBehavior["SAVE"] = "SAVE";
})(ProcessBehavior || (ProcessBehavior = {}));
export var PutBotRequest;
(function (PutBotRequest) {
    /**
     * @internal
     */
    PutBotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBotRequest || (PutBotRequest = {}));
export var PutBotResponse;
(function (PutBotResponse) {
    /**
     * @internal
     */
    PutBotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBotResponse || (PutBotResponse = {}));
export var LogSettingsRequest;
(function (LogSettingsRequest) {
    /**
     * @internal
     */
    LogSettingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogSettingsRequest || (LogSettingsRequest = {}));
export var ConversationLogsRequest;
(function (ConversationLogsRequest) {
    /**
     * @internal
     */
    ConversationLogsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConversationLogsRequest || (ConversationLogsRequest = {}));
export var PutBotAliasRequest;
(function (PutBotAliasRequest) {
    /**
     * @internal
     */
    PutBotAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBotAliasRequest || (PutBotAliasRequest = {}));
export var PutBotAliasResponse;
(function (PutBotAliasResponse) {
    /**
     * @internal
     */
    PutBotAliasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBotAliasResponse || (PutBotAliasResponse = {}));
export var PutIntentRequest;
(function (PutIntentRequest) {
    /**
     * @internal
     */
    PutIntentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutIntentRequest || (PutIntentRequest = {}));
export var PutIntentResponse;
(function (PutIntentResponse) {
    /**
     * @internal
     */
    PutIntentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutIntentResponse || (PutIntentResponse = {}));
export var PutSlotTypeRequest;
(function (PutSlotTypeRequest) {
    /**
     * @internal
     */
    PutSlotTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutSlotTypeRequest || (PutSlotTypeRequest = {}));
export var PutSlotTypeResponse;
(function (PutSlotTypeResponse) {
    /**
     * @internal
     */
    PutSlotTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutSlotTypeResponse || (PutSlotTypeResponse = {}));
export var StartImportRequest;
(function (StartImportRequest) {
    /**
     * @internal
     */
    StartImportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
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
//# sourceMappingURL=models_0.js.map