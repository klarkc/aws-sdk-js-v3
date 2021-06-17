"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitExceededException = exports.InvalidRequestException = exports.InternalFailureException = exports.CreateAlarmModelResponse = exports.CreateAlarmModelRequest = exports.Tag = exports.Attribute = exports.AnalysisStatus = exports.AnalysisResult = exports.AnalysisResultLocation = exports.AnalysisResultLevel = exports.AlarmRule = exports.SimpleRule = exports.ComparisonOperator = exports.AlarmNotification = exports.NotificationAction = exports.SMSConfiguration = exports.EmailConfiguration = exports.EmailRecipients = exports.RecipientDetail = exports.SSOIdentity = exports.EmailContent = exports.NotificationTargetActions = exports.AlarmModelVersionSummary = exports.AlarmModelVersionStatus = exports.AlarmModelSummary = exports.AlarmEventActions = exports.AlarmCapabilities = exports.InitializationConfiguration = exports.AlarmAction = exports.Action = exports.SqsAction = exports.SNSTopicPublishAction = exports.SetVariableAction = exports.SetTimerAction = exports.ResetTimerAction = exports.LambdaAction = exports.IotTopicPublishAction = exports.IotSiteWiseAction = exports.AssetPropertyValue = exports.AssetPropertyVariant = exports.AssetPropertyTimestamp = exports.IotEventsAction = exports.FirehoseAction = exports.DynamoDBv2Action = exports.DynamoDBAction = exports.Payload = exports.PayloadType = exports.ClearTimerAction = exports.AcknowledgeFlow = void 0;
exports.IotSiteWiseAssetModelPropertyIdentifier = exports.IotEventsInputIdentifier = exports.GetDetectorModelAnalysisResultsResponse = exports.GetDetectorModelAnalysisResultsRequest = exports.DetectorModelVersionSummary = exports.DetectorModelSummary = exports.UnsupportedOperationException = exports.DescribeLoggingOptionsResponse = exports.LoggingOptions = exports.LoggingLevel = exports.DetectorDebugOption = exports.DescribeLoggingOptionsRequest = exports.DescribeInputResponse = exports.Input = exports.DescribeInputRequest = exports.DescribeDetectorModelAnalysisResponse = exports.DescribeDetectorModelAnalysisRequest = exports.DescribeDetectorModelResponse = exports.DetectorModel = exports.DescribeDetectorModelRequest = exports.DescribeAlarmModelResponse = exports.DescribeAlarmModelRequest = exports.DeleteInputResponse = exports.DeleteInputRequest = exports.DeleteDetectorModelResponse = exports.DeleteDetectorModelRequest = exports.ResourceNotFoundException = exports.DeleteAlarmModelResponse = exports.DeleteAlarmModelRequest = exports.CreateInputResponse = exports.InputConfiguration = exports.InputStatus = exports.CreateInputRequest = exports.InputDefinition = exports.CreateDetectorModelResponse = exports.DetectorModelConfiguration = exports.DetectorModelVersionStatus = exports.CreateDetectorModelRequest = exports.EvaluationMethod = exports.DetectorModelDefinition = exports.State = exports.OnInputLifecycle = exports.TransitionEvent = exports.OnExitLifecycle = exports.OnEnterLifecycle = exports.Event = exports.ThrottlingException = exports.ServiceUnavailableException = exports.ResourceInUseException = exports.ResourceAlreadyExistsException = void 0;
exports.UpdateInputResponse = exports.UpdateInputRequest = exports.UpdateDetectorModelResponse = exports.UpdateDetectorModelRequest = exports.UpdateAlarmModelResponse = exports.UpdateAlarmModelRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StartDetectorModelAnalysisResponse = exports.StartDetectorModelAnalysisRequest = exports.PutLoggingOptionsRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListInputsResponse = exports.ListInputsRequest = exports.ListInputRoutingsResponse = exports.RoutedResource = exports.ListInputRoutingsRequest = exports.ListDetectorModelVersionsResponse = exports.ListDetectorModelVersionsRequest = exports.ListDetectorModelsResponse = exports.ListDetectorModelsRequest = exports.ListAlarmModelVersionsResponse = exports.ListAlarmModelVersionsRequest = exports.ListAlarmModelsResponse = exports.ListAlarmModelsRequest = exports.InputSummary = exports.InputIdentifier = exports.IotSiteWiseInputIdentifier = void 0;
var AcknowledgeFlow;
(function (AcknowledgeFlow) {
    /**
     * @internal
     */
    AcknowledgeFlow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcknowledgeFlow = exports.AcknowledgeFlow || (exports.AcknowledgeFlow = {}));
var ClearTimerAction;
(function (ClearTimerAction) {
    /**
     * @internal
     */
    ClearTimerAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClearTimerAction = exports.ClearTimerAction || (exports.ClearTimerAction = {}));
var PayloadType;
(function (PayloadType) {
    PayloadType["JSON"] = "JSON";
    PayloadType["STRING"] = "STRING";
})(PayloadType = exports.PayloadType || (exports.PayloadType = {}));
var Payload;
(function (Payload) {
    /**
     * @internal
     */
    Payload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Payload = exports.Payload || (exports.Payload = {}));
var DynamoDBAction;
(function (DynamoDBAction) {
    /**
     * @internal
     */
    DynamoDBAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DynamoDBAction = exports.DynamoDBAction || (exports.DynamoDBAction = {}));
var DynamoDBv2Action;
(function (DynamoDBv2Action) {
    /**
     * @internal
     */
    DynamoDBv2Action.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DynamoDBv2Action = exports.DynamoDBv2Action || (exports.DynamoDBv2Action = {}));
var FirehoseAction;
(function (FirehoseAction) {
    /**
     * @internal
     */
    FirehoseAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirehoseAction = exports.FirehoseAction || (exports.FirehoseAction = {}));
var IotEventsAction;
(function (IotEventsAction) {
    /**
     * @internal
     */
    IotEventsAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IotEventsAction = exports.IotEventsAction || (exports.IotEventsAction = {}));
var AssetPropertyTimestamp;
(function (AssetPropertyTimestamp) {
    /**
     * @internal
     */
    AssetPropertyTimestamp.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetPropertyTimestamp = exports.AssetPropertyTimestamp || (exports.AssetPropertyTimestamp = {}));
var AssetPropertyVariant;
(function (AssetPropertyVariant) {
    /**
     * @internal
     */
    AssetPropertyVariant.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetPropertyVariant = exports.AssetPropertyVariant || (exports.AssetPropertyVariant = {}));
var AssetPropertyValue;
(function (AssetPropertyValue) {
    /**
     * @internal
     */
    AssetPropertyValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetPropertyValue = exports.AssetPropertyValue || (exports.AssetPropertyValue = {}));
var IotSiteWiseAction;
(function (IotSiteWiseAction) {
    /**
     * @internal
     */
    IotSiteWiseAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IotSiteWiseAction = exports.IotSiteWiseAction || (exports.IotSiteWiseAction = {}));
var IotTopicPublishAction;
(function (IotTopicPublishAction) {
    /**
     * @internal
     */
    IotTopicPublishAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IotTopicPublishAction = exports.IotTopicPublishAction || (exports.IotTopicPublishAction = {}));
var LambdaAction;
(function (LambdaAction) {
    /**
     * @internal
     */
    LambdaAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaAction = exports.LambdaAction || (exports.LambdaAction = {}));
var ResetTimerAction;
(function (ResetTimerAction) {
    /**
     * @internal
     */
    ResetTimerAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetTimerAction = exports.ResetTimerAction || (exports.ResetTimerAction = {}));
var SetTimerAction;
(function (SetTimerAction) {
    /**
     * @internal
     */
    SetTimerAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetTimerAction = exports.SetTimerAction || (exports.SetTimerAction = {}));
var SetVariableAction;
(function (SetVariableAction) {
    /**
     * @internal
     */
    SetVariableAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetVariableAction = exports.SetVariableAction || (exports.SetVariableAction = {}));
var SNSTopicPublishAction;
(function (SNSTopicPublishAction) {
    /**
     * @internal
     */
    SNSTopicPublishAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SNSTopicPublishAction = exports.SNSTopicPublishAction || (exports.SNSTopicPublishAction = {}));
var SqsAction;
(function (SqsAction) {
    /**
     * @internal
     */
    SqsAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqsAction = exports.SqsAction || (exports.SqsAction = {}));
var Action;
(function (Action) {
    /**
     * @internal
     */
    Action.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Action = exports.Action || (exports.Action = {}));
var AlarmAction;
(function (AlarmAction) {
    /**
     * @internal
     */
    AlarmAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmAction = exports.AlarmAction || (exports.AlarmAction = {}));
var InitializationConfiguration;
(function (InitializationConfiguration) {
    /**
     * @internal
     */
    InitializationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitializationConfiguration = exports.InitializationConfiguration || (exports.InitializationConfiguration = {}));
var AlarmCapabilities;
(function (AlarmCapabilities) {
    /**
     * @internal
     */
    AlarmCapabilities.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmCapabilities = exports.AlarmCapabilities || (exports.AlarmCapabilities = {}));
var AlarmEventActions;
(function (AlarmEventActions) {
    /**
     * @internal
     */
    AlarmEventActions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmEventActions = exports.AlarmEventActions || (exports.AlarmEventActions = {}));
var AlarmModelSummary;
(function (AlarmModelSummary) {
    /**
     * @internal
     */
    AlarmModelSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmModelSummary = exports.AlarmModelSummary || (exports.AlarmModelSummary = {}));
var AlarmModelVersionStatus;
(function (AlarmModelVersionStatus) {
    AlarmModelVersionStatus["ACTIVATING"] = "ACTIVATING";
    AlarmModelVersionStatus["ACTIVE"] = "ACTIVE";
    AlarmModelVersionStatus["FAILED"] = "FAILED";
    AlarmModelVersionStatus["INACTIVE"] = "INACTIVE";
})(AlarmModelVersionStatus = exports.AlarmModelVersionStatus || (exports.AlarmModelVersionStatus = {}));
var AlarmModelVersionSummary;
(function (AlarmModelVersionSummary) {
    /**
     * @internal
     */
    AlarmModelVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmModelVersionSummary = exports.AlarmModelVersionSummary || (exports.AlarmModelVersionSummary = {}));
var NotificationTargetActions;
(function (NotificationTargetActions) {
    /**
     * @internal
     */
    NotificationTargetActions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationTargetActions = exports.NotificationTargetActions || (exports.NotificationTargetActions = {}));
var EmailContent;
(function (EmailContent) {
    /**
     * @internal
     */
    EmailContent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailContent = exports.EmailContent || (exports.EmailContent = {}));
var SSOIdentity;
(function (SSOIdentity) {
    /**
     * @internal
     */
    SSOIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSOIdentity = exports.SSOIdentity || (exports.SSOIdentity = {}));
var RecipientDetail;
(function (RecipientDetail) {
    /**
     * @internal
     */
    RecipientDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecipientDetail = exports.RecipientDetail || (exports.RecipientDetail = {}));
var EmailRecipients;
(function (EmailRecipients) {
    /**
     * @internal
     */
    EmailRecipients.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailRecipients = exports.EmailRecipients || (exports.EmailRecipients = {}));
var EmailConfiguration;
(function (EmailConfiguration) {
    /**
     * @internal
     */
    EmailConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailConfiguration = exports.EmailConfiguration || (exports.EmailConfiguration = {}));
var SMSConfiguration;
(function (SMSConfiguration) {
    /**
     * @internal
     */
    SMSConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SMSConfiguration = exports.SMSConfiguration || (exports.SMSConfiguration = {}));
var NotificationAction;
(function (NotificationAction) {
    /**
     * @internal
     */
    NotificationAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationAction = exports.NotificationAction || (exports.NotificationAction = {}));
var AlarmNotification;
(function (AlarmNotification) {
    /**
     * @internal
     */
    AlarmNotification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmNotification = exports.AlarmNotification || (exports.AlarmNotification = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["EQUAL"] = "EQUAL";
    ComparisonOperator["GREATER"] = "GREATER";
    ComparisonOperator["GREATER_OR_EQUAL"] = "GREATER_OR_EQUAL";
    ComparisonOperator["LESS"] = "LESS";
    ComparisonOperator["LESS_OR_EQUAL"] = "LESS_OR_EQUAL";
    ComparisonOperator["NOT_EQUAL"] = "NOT_EQUAL";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var SimpleRule;
(function (SimpleRule) {
    /**
     * @internal
     */
    SimpleRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimpleRule = exports.SimpleRule || (exports.SimpleRule = {}));
var AlarmRule;
(function (AlarmRule) {
    /**
     * @internal
     */
    AlarmRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmRule = exports.AlarmRule || (exports.AlarmRule = {}));
var AnalysisResultLevel;
(function (AnalysisResultLevel) {
    AnalysisResultLevel["ERROR"] = "ERROR";
    AnalysisResultLevel["INFO"] = "INFO";
    AnalysisResultLevel["WARNING"] = "WARNING";
})(AnalysisResultLevel = exports.AnalysisResultLevel || (exports.AnalysisResultLevel = {}));
var AnalysisResultLocation;
(function (AnalysisResultLocation) {
    /**
     * @internal
     */
    AnalysisResultLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisResultLocation = exports.AnalysisResultLocation || (exports.AnalysisResultLocation = {}));
var AnalysisResult;
(function (AnalysisResult) {
    /**
     * @internal
     */
    AnalysisResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisResult = exports.AnalysisResult || (exports.AnalysisResult = {}));
var AnalysisStatus;
(function (AnalysisStatus) {
    AnalysisStatus["COMPLETE"] = "COMPLETE";
    AnalysisStatus["FAILED"] = "FAILED";
    AnalysisStatus["RUNNING"] = "RUNNING";
})(AnalysisStatus = exports.AnalysisStatus || (exports.AnalysisStatus = {}));
var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateAlarmModelRequest;
(function (CreateAlarmModelRequest) {
    /**
     * @internal
     */
    CreateAlarmModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAlarmModelRequest = exports.CreateAlarmModelRequest || (exports.CreateAlarmModelRequest = {}));
var CreateAlarmModelResponse;
(function (CreateAlarmModelResponse) {
    /**
     * @internal
     */
    CreateAlarmModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAlarmModelResponse = exports.CreateAlarmModelResponse || (exports.CreateAlarmModelResponse = {}));
var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Event = exports.Event || (exports.Event = {}));
var OnEnterLifecycle;
(function (OnEnterLifecycle) {
    /**
     * @internal
     */
    OnEnterLifecycle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnEnterLifecycle = exports.OnEnterLifecycle || (exports.OnEnterLifecycle = {}));
var OnExitLifecycle;
(function (OnExitLifecycle) {
    /**
     * @internal
     */
    OnExitLifecycle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnExitLifecycle = exports.OnExitLifecycle || (exports.OnExitLifecycle = {}));
var TransitionEvent;
(function (TransitionEvent) {
    /**
     * @internal
     */
    TransitionEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitionEvent = exports.TransitionEvent || (exports.TransitionEvent = {}));
var OnInputLifecycle;
(function (OnInputLifecycle) {
    /**
     * @internal
     */
    OnInputLifecycle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnInputLifecycle = exports.OnInputLifecycle || (exports.OnInputLifecycle = {}));
var State;
(function (State) {
    /**
     * @internal
     */
    State.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(State = exports.State || (exports.State = {}));
var DetectorModelDefinition;
(function (DetectorModelDefinition) {
    /**
     * @internal
     */
    DetectorModelDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectorModelDefinition = exports.DetectorModelDefinition || (exports.DetectorModelDefinition = {}));
var EvaluationMethod;
(function (EvaluationMethod) {
    EvaluationMethod["BATCH"] = "BATCH";
    EvaluationMethod["SERIAL"] = "SERIAL";
})(EvaluationMethod = exports.EvaluationMethod || (exports.EvaluationMethod = {}));
var CreateDetectorModelRequest;
(function (CreateDetectorModelRequest) {
    /**
     * @internal
     */
    CreateDetectorModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDetectorModelRequest = exports.CreateDetectorModelRequest || (exports.CreateDetectorModelRequest = {}));
var DetectorModelVersionStatus;
(function (DetectorModelVersionStatus) {
    DetectorModelVersionStatus["ACTIVATING"] = "ACTIVATING";
    DetectorModelVersionStatus["ACTIVE"] = "ACTIVE";
    DetectorModelVersionStatus["DEPRECATED"] = "DEPRECATED";
    DetectorModelVersionStatus["DRAFT"] = "DRAFT";
    DetectorModelVersionStatus["FAILED"] = "FAILED";
    DetectorModelVersionStatus["INACTIVE"] = "INACTIVE";
    DetectorModelVersionStatus["PAUSED"] = "PAUSED";
})(DetectorModelVersionStatus = exports.DetectorModelVersionStatus || (exports.DetectorModelVersionStatus = {}));
var DetectorModelConfiguration;
(function (DetectorModelConfiguration) {
    /**
     * @internal
     */
    DetectorModelConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectorModelConfiguration = exports.DetectorModelConfiguration || (exports.DetectorModelConfiguration = {}));
var CreateDetectorModelResponse;
(function (CreateDetectorModelResponse) {
    /**
     * @internal
     */
    CreateDetectorModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDetectorModelResponse = exports.CreateDetectorModelResponse || (exports.CreateDetectorModelResponse = {}));
var InputDefinition;
(function (InputDefinition) {
    /**
     * @internal
     */
    InputDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDefinition = exports.InputDefinition || (exports.InputDefinition = {}));
var CreateInputRequest;
(function (CreateInputRequest) {
    /**
     * @internal
     */
    CreateInputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInputRequest = exports.CreateInputRequest || (exports.CreateInputRequest = {}));
var InputStatus;
(function (InputStatus) {
    InputStatus["ACTIVE"] = "ACTIVE";
    InputStatus["CREATING"] = "CREATING";
    InputStatus["DELETING"] = "DELETING";
    InputStatus["UPDATING"] = "UPDATING";
})(InputStatus = exports.InputStatus || (exports.InputStatus = {}));
var InputConfiguration;
(function (InputConfiguration) {
    /**
     * @internal
     */
    InputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputConfiguration = exports.InputConfiguration || (exports.InputConfiguration = {}));
var CreateInputResponse;
(function (CreateInputResponse) {
    /**
     * @internal
     */
    CreateInputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInputResponse = exports.CreateInputResponse || (exports.CreateInputResponse = {}));
var DeleteAlarmModelRequest;
(function (DeleteAlarmModelRequest) {
    /**
     * @internal
     */
    DeleteAlarmModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAlarmModelRequest = exports.DeleteAlarmModelRequest || (exports.DeleteAlarmModelRequest = {}));
var DeleteAlarmModelResponse;
(function (DeleteAlarmModelResponse) {
    /**
     * @internal
     */
    DeleteAlarmModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAlarmModelResponse = exports.DeleteAlarmModelResponse || (exports.DeleteAlarmModelResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DeleteDetectorModelRequest;
(function (DeleteDetectorModelRequest) {
    /**
     * @internal
     */
    DeleteDetectorModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDetectorModelRequest = exports.DeleteDetectorModelRequest || (exports.DeleteDetectorModelRequest = {}));
var DeleteDetectorModelResponse;
(function (DeleteDetectorModelResponse) {
    /**
     * @internal
     */
    DeleteDetectorModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDetectorModelResponse = exports.DeleteDetectorModelResponse || (exports.DeleteDetectorModelResponse = {}));
var DeleteInputRequest;
(function (DeleteInputRequest) {
    /**
     * @internal
     */
    DeleteInputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInputRequest = exports.DeleteInputRequest || (exports.DeleteInputRequest = {}));
var DeleteInputResponse;
(function (DeleteInputResponse) {
    /**
     * @internal
     */
    DeleteInputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInputResponse = exports.DeleteInputResponse || (exports.DeleteInputResponse = {}));
var DescribeAlarmModelRequest;
(function (DescribeAlarmModelRequest) {
    /**
     * @internal
     */
    DescribeAlarmModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlarmModelRequest = exports.DescribeAlarmModelRequest || (exports.DescribeAlarmModelRequest = {}));
var DescribeAlarmModelResponse;
(function (DescribeAlarmModelResponse) {
    /**
     * @internal
     */
    DescribeAlarmModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlarmModelResponse = exports.DescribeAlarmModelResponse || (exports.DescribeAlarmModelResponse = {}));
var DescribeDetectorModelRequest;
(function (DescribeDetectorModelRequest) {
    /**
     * @internal
     */
    DescribeDetectorModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDetectorModelRequest = exports.DescribeDetectorModelRequest || (exports.DescribeDetectorModelRequest = {}));
var DetectorModel;
(function (DetectorModel) {
    /**
     * @internal
     */
    DetectorModel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectorModel = exports.DetectorModel || (exports.DetectorModel = {}));
var DescribeDetectorModelResponse;
(function (DescribeDetectorModelResponse) {
    /**
     * @internal
     */
    DescribeDetectorModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDetectorModelResponse = exports.DescribeDetectorModelResponse || (exports.DescribeDetectorModelResponse = {}));
var DescribeDetectorModelAnalysisRequest;
(function (DescribeDetectorModelAnalysisRequest) {
    /**
     * @internal
     */
    DescribeDetectorModelAnalysisRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDetectorModelAnalysisRequest = exports.DescribeDetectorModelAnalysisRequest || (exports.DescribeDetectorModelAnalysisRequest = {}));
var DescribeDetectorModelAnalysisResponse;
(function (DescribeDetectorModelAnalysisResponse) {
    /**
     * @internal
     */
    DescribeDetectorModelAnalysisResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDetectorModelAnalysisResponse = exports.DescribeDetectorModelAnalysisResponse || (exports.DescribeDetectorModelAnalysisResponse = {}));
var DescribeInputRequest;
(function (DescribeInputRequest) {
    /**
     * @internal
     */
    DescribeInputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInputRequest = exports.DescribeInputRequest || (exports.DescribeInputRequest = {}));
var Input;
(function (Input) {
    /**
     * @internal
     */
    Input.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Input = exports.Input || (exports.Input = {}));
var DescribeInputResponse;
(function (DescribeInputResponse) {
    /**
     * @internal
     */
    DescribeInputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInputResponse = exports.DescribeInputResponse || (exports.DescribeInputResponse = {}));
var DescribeLoggingOptionsRequest;
(function (DescribeLoggingOptionsRequest) {
    /**
     * @internal
     */
    DescribeLoggingOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLoggingOptionsRequest = exports.DescribeLoggingOptionsRequest || (exports.DescribeLoggingOptionsRequest = {}));
var DetectorDebugOption;
(function (DetectorDebugOption) {
    /**
     * @internal
     */
    DetectorDebugOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectorDebugOption = exports.DetectorDebugOption || (exports.DetectorDebugOption = {}));
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["DEBUG"] = "DEBUG";
    LoggingLevel["ERROR"] = "ERROR";
    LoggingLevel["INFO"] = "INFO";
})(LoggingLevel = exports.LoggingLevel || (exports.LoggingLevel = {}));
var LoggingOptions;
(function (LoggingOptions) {
    /**
     * @internal
     */
    LoggingOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingOptions = exports.LoggingOptions || (exports.LoggingOptions = {}));
var DescribeLoggingOptionsResponse;
(function (DescribeLoggingOptionsResponse) {
    /**
     * @internal
     */
    DescribeLoggingOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLoggingOptionsResponse = exports.DescribeLoggingOptionsResponse || (exports.DescribeLoggingOptionsResponse = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    /**
     * @internal
     */
    UnsupportedOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
var DetectorModelSummary;
(function (DetectorModelSummary) {
    /**
     * @internal
     */
    DetectorModelSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectorModelSummary = exports.DetectorModelSummary || (exports.DetectorModelSummary = {}));
var DetectorModelVersionSummary;
(function (DetectorModelVersionSummary) {
    /**
     * @internal
     */
    DetectorModelVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectorModelVersionSummary = exports.DetectorModelVersionSummary || (exports.DetectorModelVersionSummary = {}));
var GetDetectorModelAnalysisResultsRequest;
(function (GetDetectorModelAnalysisResultsRequest) {
    /**
     * @internal
     */
    GetDetectorModelAnalysisResultsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDetectorModelAnalysisResultsRequest = exports.GetDetectorModelAnalysisResultsRequest || (exports.GetDetectorModelAnalysisResultsRequest = {}));
var GetDetectorModelAnalysisResultsResponse;
(function (GetDetectorModelAnalysisResultsResponse) {
    /**
     * @internal
     */
    GetDetectorModelAnalysisResultsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDetectorModelAnalysisResultsResponse = exports.GetDetectorModelAnalysisResultsResponse || (exports.GetDetectorModelAnalysisResultsResponse = {}));
var IotEventsInputIdentifier;
(function (IotEventsInputIdentifier) {
    /**
     * @internal
     */
    IotEventsInputIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IotEventsInputIdentifier = exports.IotEventsInputIdentifier || (exports.IotEventsInputIdentifier = {}));
var IotSiteWiseAssetModelPropertyIdentifier;
(function (IotSiteWiseAssetModelPropertyIdentifier) {
    /**
     * @internal
     */
    IotSiteWiseAssetModelPropertyIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IotSiteWiseAssetModelPropertyIdentifier = exports.IotSiteWiseAssetModelPropertyIdentifier || (exports.IotSiteWiseAssetModelPropertyIdentifier = {}));
var IotSiteWiseInputIdentifier;
(function (IotSiteWiseInputIdentifier) {
    /**
     * @internal
     */
    IotSiteWiseInputIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IotSiteWiseInputIdentifier = exports.IotSiteWiseInputIdentifier || (exports.IotSiteWiseInputIdentifier = {}));
var InputIdentifier;
(function (InputIdentifier) {
    /**
     * @internal
     */
    InputIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputIdentifier = exports.InputIdentifier || (exports.InputIdentifier = {}));
var InputSummary;
(function (InputSummary) {
    /**
     * @internal
     */
    InputSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputSummary = exports.InputSummary || (exports.InputSummary = {}));
var ListAlarmModelsRequest;
(function (ListAlarmModelsRequest) {
    /**
     * @internal
     */
    ListAlarmModelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAlarmModelsRequest = exports.ListAlarmModelsRequest || (exports.ListAlarmModelsRequest = {}));
var ListAlarmModelsResponse;
(function (ListAlarmModelsResponse) {
    /**
     * @internal
     */
    ListAlarmModelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAlarmModelsResponse = exports.ListAlarmModelsResponse || (exports.ListAlarmModelsResponse = {}));
var ListAlarmModelVersionsRequest;
(function (ListAlarmModelVersionsRequest) {
    /**
     * @internal
     */
    ListAlarmModelVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAlarmModelVersionsRequest = exports.ListAlarmModelVersionsRequest || (exports.ListAlarmModelVersionsRequest = {}));
var ListAlarmModelVersionsResponse;
(function (ListAlarmModelVersionsResponse) {
    /**
     * @internal
     */
    ListAlarmModelVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAlarmModelVersionsResponse = exports.ListAlarmModelVersionsResponse || (exports.ListAlarmModelVersionsResponse = {}));
var ListDetectorModelsRequest;
(function (ListDetectorModelsRequest) {
    /**
     * @internal
     */
    ListDetectorModelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDetectorModelsRequest = exports.ListDetectorModelsRequest || (exports.ListDetectorModelsRequest = {}));
var ListDetectorModelsResponse;
(function (ListDetectorModelsResponse) {
    /**
     * @internal
     */
    ListDetectorModelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDetectorModelsResponse = exports.ListDetectorModelsResponse || (exports.ListDetectorModelsResponse = {}));
var ListDetectorModelVersionsRequest;
(function (ListDetectorModelVersionsRequest) {
    /**
     * @internal
     */
    ListDetectorModelVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDetectorModelVersionsRequest = exports.ListDetectorModelVersionsRequest || (exports.ListDetectorModelVersionsRequest = {}));
var ListDetectorModelVersionsResponse;
(function (ListDetectorModelVersionsResponse) {
    /**
     * @internal
     */
    ListDetectorModelVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDetectorModelVersionsResponse = exports.ListDetectorModelVersionsResponse || (exports.ListDetectorModelVersionsResponse = {}));
var ListInputRoutingsRequest;
(function (ListInputRoutingsRequest) {
    /**
     * @internal
     */
    ListInputRoutingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInputRoutingsRequest = exports.ListInputRoutingsRequest || (exports.ListInputRoutingsRequest = {}));
var RoutedResource;
(function (RoutedResource) {
    /**
     * @internal
     */
    RoutedResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoutedResource = exports.RoutedResource || (exports.RoutedResource = {}));
var ListInputRoutingsResponse;
(function (ListInputRoutingsResponse) {
    /**
     * @internal
     */
    ListInputRoutingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInputRoutingsResponse = exports.ListInputRoutingsResponse || (exports.ListInputRoutingsResponse = {}));
var ListInputsRequest;
(function (ListInputsRequest) {
    /**
     * @internal
     */
    ListInputsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInputsRequest = exports.ListInputsRequest || (exports.ListInputsRequest = {}));
var ListInputsResponse;
(function (ListInputsResponse) {
    /**
     * @internal
     */
    ListInputsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInputsResponse = exports.ListInputsResponse || (exports.ListInputsResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var PutLoggingOptionsRequest;
(function (PutLoggingOptionsRequest) {
    /**
     * @internal
     */
    PutLoggingOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLoggingOptionsRequest = exports.PutLoggingOptionsRequest || (exports.PutLoggingOptionsRequest = {}));
var StartDetectorModelAnalysisRequest;
(function (StartDetectorModelAnalysisRequest) {
    /**
     * @internal
     */
    StartDetectorModelAnalysisRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDetectorModelAnalysisRequest = exports.StartDetectorModelAnalysisRequest || (exports.StartDetectorModelAnalysisRequest = {}));
var StartDetectorModelAnalysisResponse;
(function (StartDetectorModelAnalysisResponse) {
    /**
     * @internal
     */
    StartDetectorModelAnalysisResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDetectorModelAnalysisResponse = exports.StartDetectorModelAnalysisResponse || (exports.StartDetectorModelAnalysisResponse = {}));
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
var UpdateAlarmModelRequest;
(function (UpdateAlarmModelRequest) {
    /**
     * @internal
     */
    UpdateAlarmModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAlarmModelRequest = exports.UpdateAlarmModelRequest || (exports.UpdateAlarmModelRequest = {}));
var UpdateAlarmModelResponse;
(function (UpdateAlarmModelResponse) {
    /**
     * @internal
     */
    UpdateAlarmModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAlarmModelResponse = exports.UpdateAlarmModelResponse || (exports.UpdateAlarmModelResponse = {}));
var UpdateDetectorModelRequest;
(function (UpdateDetectorModelRequest) {
    /**
     * @internal
     */
    UpdateDetectorModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDetectorModelRequest = exports.UpdateDetectorModelRequest || (exports.UpdateDetectorModelRequest = {}));
var UpdateDetectorModelResponse;
(function (UpdateDetectorModelResponse) {
    /**
     * @internal
     */
    UpdateDetectorModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDetectorModelResponse = exports.UpdateDetectorModelResponse || (exports.UpdateDetectorModelResponse = {}));
var UpdateInputRequest;
(function (UpdateInputRequest) {
    /**
     * @internal
     */
    UpdateInputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInputRequest = exports.UpdateInputRequest || (exports.UpdateInputRequest = {}));
var UpdateInputResponse;
(function (UpdateInputResponse) {
    /**
     * @internal
     */
    UpdateInputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInputResponse = exports.UpdateInputResponse || (exports.UpdateInputResponse = {}));
//# sourceMappingURL=models_0.js.map