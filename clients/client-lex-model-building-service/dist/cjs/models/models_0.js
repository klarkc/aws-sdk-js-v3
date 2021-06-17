"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBotAliasRequest = exports.GetBotResponse = exports.GetBotRequest = exports.DeleteUtterancesRequest = exports.DeleteSlotTypeVersionRequest = exports.DeleteSlotTypeRequest = exports.DeleteIntentVersionRequest = exports.DeleteIntentRequest = exports.DeleteBotVersionRequest = exports.DeleteBotChannelAssociationRequest = exports.DeleteBotAliasRequest = exports.ResourceInUseException = exports.ReferenceType = exports.ResourceReference = exports.DeleteBotRequest = exports.CreateSlotTypeVersionResponse = exports.SlotValueSelectionStrategy = exports.SlotTypeConfiguration = exports.SlotTypeRegexConfiguration = exports.EnumerationValue = exports.CreateSlotTypeVersionRequest = exports.CreateIntentVersionResponse = exports.Slot = exports.SlotConstraint = exports.ObfuscationSetting = exports.SlotDefaultValueSpec = exports.SlotDefaultValue = exports.OutputContext = exports.KendraConfiguration = exports.InputContext = exports.FulfillmentActivity = exports.FulfillmentActivityType = exports.FollowUpPrompt = exports.CodeHook = exports.CreateIntentVersionRequest = exports.PreconditionFailedException = exports.NotFoundException = exports.LimitExceededException = exports.InternalFailureException = exports.CreateBotVersionResponse = exports.Status = exports.Locale = exports.Intent = exports.Prompt = exports.Statement = exports.Message = exports.ContentType = exports.CreateBotVersionRequest = exports.ConflictException = exports.BadRequestException = void 0;
exports.GetSlotTypesResponse = exports.SlotTypeMetadata = exports.GetSlotTypesRequest = exports.GetSlotTypeResponse = exports.GetSlotTypeRequest = exports.GetIntentVersionsResponse = exports.GetIntentVersionsRequest = exports.GetIntentsResponse = exports.IntentMetadata = exports.GetIntentsRequest = exports.GetIntentResponse = exports.GetIntentRequest = exports.GetImportResponse = exports.MergeStrategy = exports.ImportStatus = exports.GetImportRequest = exports.GetExportResponse = exports.ExportStatus = exports.GetExportRequest = exports.ResourceType = exports.ExportType = exports.GetBuiltinSlotTypesResponse = exports.BuiltinSlotTypeMetadata = exports.GetBuiltinSlotTypesRequest = exports.GetBuiltinIntentsResponse = exports.BuiltinIntentMetadata = exports.GetBuiltinIntentsRequest = exports.GetBuiltinIntentResponse = exports.BuiltinIntentSlot = exports.GetBuiltinIntentRequest = exports.GetBotVersionsResponse = exports.GetBotVersionsRequest = exports.GetBotsResponse = exports.BotMetadata = exports.GetBotsRequest = exports.GetBotChannelAssociationsResponse = exports.BotChannelAssociation = exports.GetBotChannelAssociationsRequest = exports.GetBotChannelAssociationResponse = exports.ChannelType = exports.ChannelStatus = exports.GetBotChannelAssociationRequest = exports.GetBotAliasesResponse = exports.BotAliasMetadata = exports.GetBotAliasesRequest = exports.GetBotAliasResponse = exports.ConversationLogsResponse = exports.LogSettingsResponse = exports.LogType = exports.Destination = void 0;
exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StartImportResponse = exports.StartImportRequest = exports.PutSlotTypeResponse = exports.PutSlotTypeRequest = exports.PutIntentResponse = exports.PutIntentRequest = exports.PutBotAliasResponse = exports.PutBotAliasRequest = exports.ConversationLogsRequest = exports.LogSettingsRequest = exports.PutBotResponse = exports.PutBotRequest = exports.ProcessBehavior = exports.ListTagsForResourceResponse = exports.Tag = exports.ListTagsForResourceRequest = exports.GetUtterancesViewResponse = exports.UtteranceList = exports.UtteranceData = exports.GetUtterancesViewRequest = exports.StatusType = exports.GetSlotTypeVersionsResponse = exports.GetSlotTypeVersionsRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateBotVersionRequest;
(function (CreateBotVersionRequest) {
    /**
     * @internal
     */
    CreateBotVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBotVersionRequest = exports.CreateBotVersionRequest || (exports.CreateBotVersionRequest = {}));
var ContentType;
(function (ContentType) {
    ContentType["CUSTOM_PAYLOAD"] = "CustomPayload";
    ContentType["PLAIN_TEXT"] = "PlainText";
    ContentType["SSML"] = "SSML";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Message = exports.Message || (exports.Message = {}));
var Statement;
(function (Statement) {
    /**
     * @internal
     */
    Statement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Statement = exports.Statement || (exports.Statement = {}));
var Prompt;
(function (Prompt) {
    /**
     * @internal
     */
    Prompt.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Prompt = exports.Prompt || (exports.Prompt = {}));
var Intent;
(function (Intent) {
    /**
     * @internal
     */
    Intent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Intent = exports.Intent || (exports.Intent = {}));
var Locale;
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
})(Locale = exports.Locale || (exports.Locale = {}));
var Status;
(function (Status) {
    Status["BUILDING"] = "BUILDING";
    Status["FAILED"] = "FAILED";
    Status["NOT_BUILT"] = "NOT_BUILT";
    Status["READY"] = "READY";
    Status["READY_BASIC_TESTING"] = "READY_BASIC_TESTING";
})(Status = exports.Status || (exports.Status = {}));
var CreateBotVersionResponse;
(function (CreateBotVersionResponse) {
    /**
     * @internal
     */
    CreateBotVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBotVersionResponse = exports.CreateBotVersionResponse || (exports.CreateBotVersionResponse = {}));
var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var PreconditionFailedException;
(function (PreconditionFailedException) {
    /**
     * @internal
     */
    PreconditionFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PreconditionFailedException = exports.PreconditionFailedException || (exports.PreconditionFailedException = {}));
var CreateIntentVersionRequest;
(function (CreateIntentVersionRequest) {
    /**
     * @internal
     */
    CreateIntentVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIntentVersionRequest = exports.CreateIntentVersionRequest || (exports.CreateIntentVersionRequest = {}));
var CodeHook;
(function (CodeHook) {
    /**
     * @internal
     */
    CodeHook.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeHook = exports.CodeHook || (exports.CodeHook = {}));
var FollowUpPrompt;
(function (FollowUpPrompt) {
    /**
     * @internal
     */
    FollowUpPrompt.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FollowUpPrompt = exports.FollowUpPrompt || (exports.FollowUpPrompt = {}));
var FulfillmentActivityType;
(function (FulfillmentActivityType) {
    FulfillmentActivityType["CODE_HOOK"] = "CodeHook";
    FulfillmentActivityType["RETURN_INTENT"] = "ReturnIntent";
})(FulfillmentActivityType = exports.FulfillmentActivityType || (exports.FulfillmentActivityType = {}));
var FulfillmentActivity;
(function (FulfillmentActivity) {
    /**
     * @internal
     */
    FulfillmentActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FulfillmentActivity = exports.FulfillmentActivity || (exports.FulfillmentActivity = {}));
var InputContext;
(function (InputContext) {
    /**
     * @internal
     */
    InputContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputContext = exports.InputContext || (exports.InputContext = {}));
var KendraConfiguration;
(function (KendraConfiguration) {
    /**
     * @internal
     */
    KendraConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KendraConfiguration = exports.KendraConfiguration || (exports.KendraConfiguration = {}));
var OutputContext;
(function (OutputContext) {
    /**
     * @internal
     */
    OutputContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputContext = exports.OutputContext || (exports.OutputContext = {}));
var SlotDefaultValue;
(function (SlotDefaultValue) {
    /**
     * @internal
     */
    SlotDefaultValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SlotDefaultValue = exports.SlotDefaultValue || (exports.SlotDefaultValue = {}));
var SlotDefaultValueSpec;
(function (SlotDefaultValueSpec) {
    /**
     * @internal
     */
    SlotDefaultValueSpec.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SlotDefaultValueSpec = exports.SlotDefaultValueSpec || (exports.SlotDefaultValueSpec = {}));
var ObfuscationSetting;
(function (ObfuscationSetting) {
    ObfuscationSetting["DEFAULT_OBFUSCATION"] = "DEFAULT_OBFUSCATION";
    ObfuscationSetting["NONE"] = "NONE";
})(ObfuscationSetting = exports.ObfuscationSetting || (exports.ObfuscationSetting = {}));
var SlotConstraint;
(function (SlotConstraint) {
    SlotConstraint["OPTIONAL"] = "Optional";
    SlotConstraint["REQUIRED"] = "Required";
})(SlotConstraint = exports.SlotConstraint || (exports.SlotConstraint = {}));
var Slot;
(function (Slot) {
    /**
     * @internal
     */
    Slot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Slot = exports.Slot || (exports.Slot = {}));
var CreateIntentVersionResponse;
(function (CreateIntentVersionResponse) {
    /**
     * @internal
     */
    CreateIntentVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIntentVersionResponse = exports.CreateIntentVersionResponse || (exports.CreateIntentVersionResponse = {}));
var CreateSlotTypeVersionRequest;
(function (CreateSlotTypeVersionRequest) {
    /**
     * @internal
     */
    CreateSlotTypeVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSlotTypeVersionRequest = exports.CreateSlotTypeVersionRequest || (exports.CreateSlotTypeVersionRequest = {}));
var EnumerationValue;
(function (EnumerationValue) {
    /**
     * @internal
     */
    EnumerationValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnumerationValue = exports.EnumerationValue || (exports.EnumerationValue = {}));
var SlotTypeRegexConfiguration;
(function (SlotTypeRegexConfiguration) {
    /**
     * @internal
     */
    SlotTypeRegexConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SlotTypeRegexConfiguration = exports.SlotTypeRegexConfiguration || (exports.SlotTypeRegexConfiguration = {}));
var SlotTypeConfiguration;
(function (SlotTypeConfiguration) {
    /**
     * @internal
     */
    SlotTypeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SlotTypeConfiguration = exports.SlotTypeConfiguration || (exports.SlotTypeConfiguration = {}));
var SlotValueSelectionStrategy;
(function (SlotValueSelectionStrategy) {
    SlotValueSelectionStrategy["ORIGINAL_VALUE"] = "ORIGINAL_VALUE";
    SlotValueSelectionStrategy["TOP_RESOLUTION"] = "TOP_RESOLUTION";
})(SlotValueSelectionStrategy = exports.SlotValueSelectionStrategy || (exports.SlotValueSelectionStrategy = {}));
var CreateSlotTypeVersionResponse;
(function (CreateSlotTypeVersionResponse) {
    /**
     * @internal
     */
    CreateSlotTypeVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSlotTypeVersionResponse = exports.CreateSlotTypeVersionResponse || (exports.CreateSlotTypeVersionResponse = {}));
var DeleteBotRequest;
(function (DeleteBotRequest) {
    /**
     * @internal
     */
    DeleteBotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBotRequest = exports.DeleteBotRequest || (exports.DeleteBotRequest = {}));
var ResourceReference;
(function (ResourceReference) {
    /**
     * @internal
     */
    ResourceReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceReference = exports.ResourceReference || (exports.ResourceReference = {}));
var ReferenceType;
(function (ReferenceType) {
    ReferenceType["BOT"] = "Bot";
    ReferenceType["BOTALIAS"] = "BotAlias";
    ReferenceType["BOTCHANNEL"] = "BotChannel";
    ReferenceType["INTENT"] = "Intent";
})(ReferenceType = exports.ReferenceType || (exports.ReferenceType = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var DeleteBotAliasRequest;
(function (DeleteBotAliasRequest) {
    /**
     * @internal
     */
    DeleteBotAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBotAliasRequest = exports.DeleteBotAliasRequest || (exports.DeleteBotAliasRequest = {}));
var DeleteBotChannelAssociationRequest;
(function (DeleteBotChannelAssociationRequest) {
    /**
     * @internal
     */
    DeleteBotChannelAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBotChannelAssociationRequest = exports.DeleteBotChannelAssociationRequest || (exports.DeleteBotChannelAssociationRequest = {}));
var DeleteBotVersionRequest;
(function (DeleteBotVersionRequest) {
    /**
     * @internal
     */
    DeleteBotVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBotVersionRequest = exports.DeleteBotVersionRequest || (exports.DeleteBotVersionRequest = {}));
var DeleteIntentRequest;
(function (DeleteIntentRequest) {
    /**
     * @internal
     */
    DeleteIntentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIntentRequest = exports.DeleteIntentRequest || (exports.DeleteIntentRequest = {}));
var DeleteIntentVersionRequest;
(function (DeleteIntentVersionRequest) {
    /**
     * @internal
     */
    DeleteIntentVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIntentVersionRequest = exports.DeleteIntentVersionRequest || (exports.DeleteIntentVersionRequest = {}));
var DeleteSlotTypeRequest;
(function (DeleteSlotTypeRequest) {
    /**
     * @internal
     */
    DeleteSlotTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSlotTypeRequest = exports.DeleteSlotTypeRequest || (exports.DeleteSlotTypeRequest = {}));
var DeleteSlotTypeVersionRequest;
(function (DeleteSlotTypeVersionRequest) {
    /**
     * @internal
     */
    DeleteSlotTypeVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSlotTypeVersionRequest = exports.DeleteSlotTypeVersionRequest || (exports.DeleteSlotTypeVersionRequest = {}));
var DeleteUtterancesRequest;
(function (DeleteUtterancesRequest) {
    /**
     * @internal
     */
    DeleteUtterancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUtterancesRequest = exports.DeleteUtterancesRequest || (exports.DeleteUtterancesRequest = {}));
var GetBotRequest;
(function (GetBotRequest) {
    /**
     * @internal
     */
    GetBotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBotRequest = exports.GetBotRequest || (exports.GetBotRequest = {}));
var GetBotResponse;
(function (GetBotResponse) {
    /**
     * @internal
     */
    GetBotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBotResponse = exports.GetBotResponse || (exports.GetBotResponse = {}));
var GetBotAliasRequest;
(function (GetBotAliasRequest) {
    /**
     * @internal
     */
    GetBotAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBotAliasRequest = exports.GetBotAliasRequest || (exports.GetBotAliasRequest = {}));
var Destination;
(function (Destination) {
    Destination["CLOUDWATCH_LOGS"] = "CLOUDWATCH_LOGS";
    Destination["S3"] = "S3";
})(Destination = exports.Destination || (exports.Destination = {}));
var LogType;
(function (LogType) {
    LogType["AUDIO"] = "AUDIO";
    LogType["TEXT"] = "TEXT";
})(LogType = exports.LogType || (exports.LogType = {}));
var LogSettingsResponse;
(function (LogSettingsResponse) {
    /**
     * @internal
     */
    LogSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogSettingsResponse = exports.LogSettingsResponse || (exports.LogSettingsResponse = {}));
var ConversationLogsResponse;
(function (ConversationLogsResponse) {
    /**
     * @internal
     */
    ConversationLogsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConversationLogsResponse = exports.ConversationLogsResponse || (exports.ConversationLogsResponse = {}));
var GetBotAliasResponse;
(function (GetBotAliasResponse) {
    /**
     * @internal
     */
    GetBotAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBotAliasResponse = exports.GetBotAliasResponse || (exports.GetBotAliasResponse = {}));
var GetBotAliasesRequest;
(function (GetBotAliasesRequest) {
    /**
     * @internal
     */
    GetBotAliasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBotAliasesRequest = exports.GetBotAliasesRequest || (exports.GetBotAliasesRequest = {}));
var BotAliasMetadata;
(function (BotAliasMetadata) {
    /**
     * @internal
     */
    BotAliasMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BotAliasMetadata = exports.BotAliasMetadata || (exports.BotAliasMetadata = {}));
var GetBotAliasesResponse;
(function (GetBotAliasesResponse) {
    /**
     * @internal
     */
    GetBotAliasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBotAliasesResponse = exports.GetBotAliasesResponse || (exports.GetBotAliasesResponse = {}));
var GetBotChannelAssociationRequest;
(function (GetBotChannelAssociationRequest) {
    /**
     * @internal
     */
    GetBotChannelAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBotChannelAssociationRequest = exports.GetBotChannelAssociationRequest || (exports.GetBotChannelAssociationRequest = {}));
var ChannelStatus;
(function (ChannelStatus) {
    ChannelStatus["CREATED"] = "CREATED";
    ChannelStatus["FAILED"] = "FAILED";
    ChannelStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(ChannelStatus = exports.ChannelStatus || (exports.ChannelStatus = {}));
var ChannelType;
(function (ChannelType) {
    ChannelType["FACEBOOK"] = "Facebook";
    ChannelType["KIK"] = "Kik";
    ChannelType["SLACK"] = "Slack";
    ChannelType["TWILIO_SMS"] = "Twilio-Sms";
})(ChannelType = exports.ChannelType || (exports.ChannelType = {}));
var GetBotChannelAssociationResponse;
(function (GetBotChannelAssociationResponse) {
    /**
     * @internal
     */
    GetBotChannelAssociationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.botConfiguration && { botConfiguration: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetBotChannelAssociationResponse = exports.GetBotChannelAssociationResponse || (exports.GetBotChannelAssociationResponse = {}));
var GetBotChannelAssociationsRequest;
(function (GetBotChannelAssociationsRequest) {
    /**
     * @internal
     */
    GetBotChannelAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBotChannelAssociationsRequest = exports.GetBotChannelAssociationsRequest || (exports.GetBotChannelAssociationsRequest = {}));
var BotChannelAssociation;
(function (BotChannelAssociation) {
    /**
     * @internal
     */
    BotChannelAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.botConfiguration && { botConfiguration: smithy_client_1.SENSITIVE_STRING }),
    });
})(BotChannelAssociation = exports.BotChannelAssociation || (exports.BotChannelAssociation = {}));
var GetBotChannelAssociationsResponse;
(function (GetBotChannelAssociationsResponse) {
    /**
     * @internal
     */
    GetBotChannelAssociationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.botChannelAssociations && {
            botChannelAssociations: obj.botChannelAssociations.map((item) => BotChannelAssociation.filterSensitiveLog(item)),
        }),
    });
})(GetBotChannelAssociationsResponse = exports.GetBotChannelAssociationsResponse || (exports.GetBotChannelAssociationsResponse = {}));
var GetBotsRequest;
(function (GetBotsRequest) {
    /**
     * @internal
     */
    GetBotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBotsRequest = exports.GetBotsRequest || (exports.GetBotsRequest = {}));
var BotMetadata;
(function (BotMetadata) {
    /**
     * @internal
     */
    BotMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BotMetadata = exports.BotMetadata || (exports.BotMetadata = {}));
var GetBotsResponse;
(function (GetBotsResponse) {
    /**
     * @internal
     */
    GetBotsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBotsResponse = exports.GetBotsResponse || (exports.GetBotsResponse = {}));
var GetBotVersionsRequest;
(function (GetBotVersionsRequest) {
    /**
     * @internal
     */
    GetBotVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBotVersionsRequest = exports.GetBotVersionsRequest || (exports.GetBotVersionsRequest = {}));
var GetBotVersionsResponse;
(function (GetBotVersionsResponse) {
    /**
     * @internal
     */
    GetBotVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBotVersionsResponse = exports.GetBotVersionsResponse || (exports.GetBotVersionsResponse = {}));
var GetBuiltinIntentRequest;
(function (GetBuiltinIntentRequest) {
    /**
     * @internal
     */
    GetBuiltinIntentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBuiltinIntentRequest = exports.GetBuiltinIntentRequest || (exports.GetBuiltinIntentRequest = {}));
var BuiltinIntentSlot;
(function (BuiltinIntentSlot) {
    /**
     * @internal
     */
    BuiltinIntentSlot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuiltinIntentSlot = exports.BuiltinIntentSlot || (exports.BuiltinIntentSlot = {}));
var GetBuiltinIntentResponse;
(function (GetBuiltinIntentResponse) {
    /**
     * @internal
     */
    GetBuiltinIntentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBuiltinIntentResponse = exports.GetBuiltinIntentResponse || (exports.GetBuiltinIntentResponse = {}));
var GetBuiltinIntentsRequest;
(function (GetBuiltinIntentsRequest) {
    /**
     * @internal
     */
    GetBuiltinIntentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBuiltinIntentsRequest = exports.GetBuiltinIntentsRequest || (exports.GetBuiltinIntentsRequest = {}));
var BuiltinIntentMetadata;
(function (BuiltinIntentMetadata) {
    /**
     * @internal
     */
    BuiltinIntentMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuiltinIntentMetadata = exports.BuiltinIntentMetadata || (exports.BuiltinIntentMetadata = {}));
var GetBuiltinIntentsResponse;
(function (GetBuiltinIntentsResponse) {
    /**
     * @internal
     */
    GetBuiltinIntentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBuiltinIntentsResponse = exports.GetBuiltinIntentsResponse || (exports.GetBuiltinIntentsResponse = {}));
var GetBuiltinSlotTypesRequest;
(function (GetBuiltinSlotTypesRequest) {
    /**
     * @internal
     */
    GetBuiltinSlotTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBuiltinSlotTypesRequest = exports.GetBuiltinSlotTypesRequest || (exports.GetBuiltinSlotTypesRequest = {}));
var BuiltinSlotTypeMetadata;
(function (BuiltinSlotTypeMetadata) {
    /**
     * @internal
     */
    BuiltinSlotTypeMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuiltinSlotTypeMetadata = exports.BuiltinSlotTypeMetadata || (exports.BuiltinSlotTypeMetadata = {}));
var GetBuiltinSlotTypesResponse;
(function (GetBuiltinSlotTypesResponse) {
    /**
     * @internal
     */
    GetBuiltinSlotTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBuiltinSlotTypesResponse = exports.GetBuiltinSlotTypesResponse || (exports.GetBuiltinSlotTypesResponse = {}));
var ExportType;
(function (ExportType) {
    ExportType["ALEXA_SKILLS_KIT"] = "ALEXA_SKILLS_KIT";
    ExportType["LEX"] = "LEX";
})(ExportType = exports.ExportType || (exports.ExportType = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["BOT"] = "BOT";
    ResourceType["INTENT"] = "INTENT";
    ResourceType["SLOT_TYPE"] = "SLOT_TYPE";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var GetExportRequest;
(function (GetExportRequest) {
    /**
     * @internal
     */
    GetExportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExportRequest = exports.GetExportRequest || (exports.GetExportRequest = {}));
var ExportStatus;
(function (ExportStatus) {
    ExportStatus["FAILED"] = "FAILED";
    ExportStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ExportStatus["READY"] = "READY";
})(ExportStatus = exports.ExportStatus || (exports.ExportStatus = {}));
var GetExportResponse;
(function (GetExportResponse) {
    /**
     * @internal
     */
    GetExportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExportResponse = exports.GetExportResponse || (exports.GetExportResponse = {}));
var GetImportRequest;
(function (GetImportRequest) {
    /**
     * @internal
     */
    GetImportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImportRequest = exports.GetImportRequest || (exports.GetImportRequest = {}));
var ImportStatus;
(function (ImportStatus) {
    ImportStatus["COMPLETE"] = "COMPLETE";
    ImportStatus["FAILED"] = "FAILED";
    ImportStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(ImportStatus = exports.ImportStatus || (exports.ImportStatus = {}));
var MergeStrategy;
(function (MergeStrategy) {
    MergeStrategy["FAIL_ON_CONFLICT"] = "FAIL_ON_CONFLICT";
    MergeStrategy["OVERWRITE_LATEST"] = "OVERWRITE_LATEST";
})(MergeStrategy = exports.MergeStrategy || (exports.MergeStrategy = {}));
var GetImportResponse;
(function (GetImportResponse) {
    /**
     * @internal
     */
    GetImportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImportResponse = exports.GetImportResponse || (exports.GetImportResponse = {}));
var GetIntentRequest;
(function (GetIntentRequest) {
    /**
     * @internal
     */
    GetIntentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIntentRequest = exports.GetIntentRequest || (exports.GetIntentRequest = {}));
var GetIntentResponse;
(function (GetIntentResponse) {
    /**
     * @internal
     */
    GetIntentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIntentResponse = exports.GetIntentResponse || (exports.GetIntentResponse = {}));
var GetIntentsRequest;
(function (GetIntentsRequest) {
    /**
     * @internal
     */
    GetIntentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIntentsRequest = exports.GetIntentsRequest || (exports.GetIntentsRequest = {}));
var IntentMetadata;
(function (IntentMetadata) {
    /**
     * @internal
     */
    IntentMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntentMetadata = exports.IntentMetadata || (exports.IntentMetadata = {}));
var GetIntentsResponse;
(function (GetIntentsResponse) {
    /**
     * @internal
     */
    GetIntentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIntentsResponse = exports.GetIntentsResponse || (exports.GetIntentsResponse = {}));
var GetIntentVersionsRequest;
(function (GetIntentVersionsRequest) {
    /**
     * @internal
     */
    GetIntentVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIntentVersionsRequest = exports.GetIntentVersionsRequest || (exports.GetIntentVersionsRequest = {}));
var GetIntentVersionsResponse;
(function (GetIntentVersionsResponse) {
    /**
     * @internal
     */
    GetIntentVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIntentVersionsResponse = exports.GetIntentVersionsResponse || (exports.GetIntentVersionsResponse = {}));
var GetSlotTypeRequest;
(function (GetSlotTypeRequest) {
    /**
     * @internal
     */
    GetSlotTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSlotTypeRequest = exports.GetSlotTypeRequest || (exports.GetSlotTypeRequest = {}));
var GetSlotTypeResponse;
(function (GetSlotTypeResponse) {
    /**
     * @internal
     */
    GetSlotTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSlotTypeResponse = exports.GetSlotTypeResponse || (exports.GetSlotTypeResponse = {}));
var GetSlotTypesRequest;
(function (GetSlotTypesRequest) {
    /**
     * @internal
     */
    GetSlotTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSlotTypesRequest = exports.GetSlotTypesRequest || (exports.GetSlotTypesRequest = {}));
var SlotTypeMetadata;
(function (SlotTypeMetadata) {
    /**
     * @internal
     */
    SlotTypeMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SlotTypeMetadata = exports.SlotTypeMetadata || (exports.SlotTypeMetadata = {}));
var GetSlotTypesResponse;
(function (GetSlotTypesResponse) {
    /**
     * @internal
     */
    GetSlotTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSlotTypesResponse = exports.GetSlotTypesResponse || (exports.GetSlotTypesResponse = {}));
var GetSlotTypeVersionsRequest;
(function (GetSlotTypeVersionsRequest) {
    /**
     * @internal
     */
    GetSlotTypeVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSlotTypeVersionsRequest = exports.GetSlotTypeVersionsRequest || (exports.GetSlotTypeVersionsRequest = {}));
var GetSlotTypeVersionsResponse;
(function (GetSlotTypeVersionsResponse) {
    /**
     * @internal
     */
    GetSlotTypeVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSlotTypeVersionsResponse = exports.GetSlotTypeVersionsResponse || (exports.GetSlotTypeVersionsResponse = {}));
var StatusType;
(function (StatusType) {
    StatusType["DETECTED"] = "Detected";
    StatusType["MISSED"] = "Missed";
})(StatusType = exports.StatusType || (exports.StatusType = {}));
var GetUtterancesViewRequest;
(function (GetUtterancesViewRequest) {
    /**
     * @internal
     */
    GetUtterancesViewRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUtterancesViewRequest = exports.GetUtterancesViewRequest || (exports.GetUtterancesViewRequest = {}));
var UtteranceData;
(function (UtteranceData) {
    /**
     * @internal
     */
    UtteranceData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UtteranceData = exports.UtteranceData || (exports.UtteranceData = {}));
var UtteranceList;
(function (UtteranceList) {
    /**
     * @internal
     */
    UtteranceList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UtteranceList = exports.UtteranceList || (exports.UtteranceList = {}));
var GetUtterancesViewResponse;
(function (GetUtterancesViewResponse) {
    /**
     * @internal
     */
    GetUtterancesViewResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUtterancesViewResponse = exports.GetUtterancesViewResponse || (exports.GetUtterancesViewResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ProcessBehavior;
(function (ProcessBehavior) {
    ProcessBehavior["BUILD"] = "BUILD";
    ProcessBehavior["SAVE"] = "SAVE";
})(ProcessBehavior = exports.ProcessBehavior || (exports.ProcessBehavior = {}));
var PutBotRequest;
(function (PutBotRequest) {
    /**
     * @internal
     */
    PutBotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBotRequest = exports.PutBotRequest || (exports.PutBotRequest = {}));
var PutBotResponse;
(function (PutBotResponse) {
    /**
     * @internal
     */
    PutBotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBotResponse = exports.PutBotResponse || (exports.PutBotResponse = {}));
var LogSettingsRequest;
(function (LogSettingsRequest) {
    /**
     * @internal
     */
    LogSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogSettingsRequest = exports.LogSettingsRequest || (exports.LogSettingsRequest = {}));
var ConversationLogsRequest;
(function (ConversationLogsRequest) {
    /**
     * @internal
     */
    ConversationLogsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConversationLogsRequest = exports.ConversationLogsRequest || (exports.ConversationLogsRequest = {}));
var PutBotAliasRequest;
(function (PutBotAliasRequest) {
    /**
     * @internal
     */
    PutBotAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBotAliasRequest = exports.PutBotAliasRequest || (exports.PutBotAliasRequest = {}));
var PutBotAliasResponse;
(function (PutBotAliasResponse) {
    /**
     * @internal
     */
    PutBotAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBotAliasResponse = exports.PutBotAliasResponse || (exports.PutBotAliasResponse = {}));
var PutIntentRequest;
(function (PutIntentRequest) {
    /**
     * @internal
     */
    PutIntentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutIntentRequest = exports.PutIntentRequest || (exports.PutIntentRequest = {}));
var PutIntentResponse;
(function (PutIntentResponse) {
    /**
     * @internal
     */
    PutIntentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutIntentResponse = exports.PutIntentResponse || (exports.PutIntentResponse = {}));
var PutSlotTypeRequest;
(function (PutSlotTypeRequest) {
    /**
     * @internal
     */
    PutSlotTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutSlotTypeRequest = exports.PutSlotTypeRequest || (exports.PutSlotTypeRequest = {}));
var PutSlotTypeResponse;
(function (PutSlotTypeResponse) {
    /**
     * @internal
     */
    PutSlotTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutSlotTypeResponse = exports.PutSlotTypeResponse || (exports.PutSlotTypeResponse = {}));
var StartImportRequest;
(function (StartImportRequest) {
    /**
     * @internal
     */
    StartImportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartImportRequest = exports.StartImportRequest || (exports.StartImportRequest = {}));
var StartImportResponse;
(function (StartImportResponse) {
    /**
     * @internal
     */
    StartImportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartImportResponse = exports.StartImportResponse || (exports.StartImportResponse = {}));
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
//# sourceMappingURL=models_0.js.map