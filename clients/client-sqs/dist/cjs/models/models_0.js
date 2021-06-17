"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchRequestTooLong = exports.UnsupportedOperation = exports.SendMessageResult = exports.SendMessageRequest = exports.MessageSystemAttributeValue = exports.InvalidMessageContents = exports.RemovePermissionRequest = exports.ReceiveMessageResult = exports.Message = exports.MessageAttributeValue = exports.ReceiveMessageRequest = exports.PurgeQueueRequest = exports.PurgeQueueInProgress = exports.ListQueueTagsResult = exports.ListQueueTagsRequest = exports.ListQueuesResult = exports.ListQueuesRequest = exports.ListDeadLetterSourceQueuesResult = exports.ListDeadLetterSourceQueuesRequest = exports.QueueDoesNotExist = exports.GetQueueUrlResult = exports.GetQueueUrlRequest = exports.InvalidAttributeName = exports.GetQueueAttributesResult = exports.GetQueueAttributesRequest = exports.DeleteQueueRequest = exports.DeleteMessageBatchResult = exports.DeleteMessageBatchResultEntry = exports.DeleteMessageBatchRequest = exports.DeleteMessageBatchRequestEntry = exports.InvalidIdFormat = exports.DeleteMessageRequest = exports.QueueNameExists = exports.QueueDeletedRecently = exports.CreateQueueResult = exports.CreateQueueRequest = exports.TooManyEntriesInBatchRequest = exports.InvalidBatchEntryId = exports.EmptyBatchRequest = exports.ChangeMessageVisibilityBatchResult = exports.ChangeMessageVisibilityBatchResultEntry = exports.BatchResultErrorEntry = exports.ChangeMessageVisibilityBatchRequest = exports.ChangeMessageVisibilityBatchRequestEntry = exports.BatchEntryIdsNotDistinct = exports.ReceiptHandleIsInvalid = exports.MessageNotInflight = exports.ChangeMessageVisibilityRequest = exports.OverLimit = exports.AddPermissionRequest = void 0;
exports.UntagQueueRequest = exports.TagQueueRequest = exports.SetQueueAttributesRequest = exports.SendMessageBatchResult = exports.SendMessageBatchResultEntry = exports.SendMessageBatchRequest = exports.SendMessageBatchRequestEntry = void 0;
var AddPermissionRequest;
(function (AddPermissionRequest) {
    /**
     * @internal
     */
    AddPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddPermissionRequest = exports.AddPermissionRequest || (exports.AddPermissionRequest = {}));
var OverLimit;
(function (OverLimit) {
    /**
     * @internal
     */
    OverLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OverLimit = exports.OverLimit || (exports.OverLimit = {}));
var ChangeMessageVisibilityRequest;
(function (ChangeMessageVisibilityRequest) {
    /**
     * @internal
     */
    ChangeMessageVisibilityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeMessageVisibilityRequest = exports.ChangeMessageVisibilityRequest || (exports.ChangeMessageVisibilityRequest = {}));
var MessageNotInflight;
(function (MessageNotInflight) {
    /**
     * @internal
     */
    MessageNotInflight.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageNotInflight = exports.MessageNotInflight || (exports.MessageNotInflight = {}));
var ReceiptHandleIsInvalid;
(function (ReceiptHandleIsInvalid) {
    /**
     * @internal
     */
    ReceiptHandleIsInvalid.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReceiptHandleIsInvalid = exports.ReceiptHandleIsInvalid || (exports.ReceiptHandleIsInvalid = {}));
var BatchEntryIdsNotDistinct;
(function (BatchEntryIdsNotDistinct) {
    /**
     * @internal
     */
    BatchEntryIdsNotDistinct.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchEntryIdsNotDistinct = exports.BatchEntryIdsNotDistinct || (exports.BatchEntryIdsNotDistinct = {}));
var ChangeMessageVisibilityBatchRequestEntry;
(function (ChangeMessageVisibilityBatchRequestEntry) {
    /**
     * @internal
     */
    ChangeMessageVisibilityBatchRequestEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeMessageVisibilityBatchRequestEntry = exports.ChangeMessageVisibilityBatchRequestEntry || (exports.ChangeMessageVisibilityBatchRequestEntry = {}));
var ChangeMessageVisibilityBatchRequest;
(function (ChangeMessageVisibilityBatchRequest) {
    /**
     * @internal
     */
    ChangeMessageVisibilityBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeMessageVisibilityBatchRequest = exports.ChangeMessageVisibilityBatchRequest || (exports.ChangeMessageVisibilityBatchRequest = {}));
var BatchResultErrorEntry;
(function (BatchResultErrorEntry) {
    /**
     * @internal
     */
    BatchResultErrorEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchResultErrorEntry = exports.BatchResultErrorEntry || (exports.BatchResultErrorEntry = {}));
var ChangeMessageVisibilityBatchResultEntry;
(function (ChangeMessageVisibilityBatchResultEntry) {
    /**
     * @internal
     */
    ChangeMessageVisibilityBatchResultEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeMessageVisibilityBatchResultEntry = exports.ChangeMessageVisibilityBatchResultEntry || (exports.ChangeMessageVisibilityBatchResultEntry = {}));
var ChangeMessageVisibilityBatchResult;
(function (ChangeMessageVisibilityBatchResult) {
    /**
     * @internal
     */
    ChangeMessageVisibilityBatchResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeMessageVisibilityBatchResult = exports.ChangeMessageVisibilityBatchResult || (exports.ChangeMessageVisibilityBatchResult = {}));
var EmptyBatchRequest;
(function (EmptyBatchRequest) {
    /**
     * @internal
     */
    EmptyBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmptyBatchRequest = exports.EmptyBatchRequest || (exports.EmptyBatchRequest = {}));
var InvalidBatchEntryId;
(function (InvalidBatchEntryId) {
    /**
     * @internal
     */
    InvalidBatchEntryId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidBatchEntryId = exports.InvalidBatchEntryId || (exports.InvalidBatchEntryId = {}));
var TooManyEntriesInBatchRequest;
(function (TooManyEntriesInBatchRequest) {
    /**
     * @internal
     */
    TooManyEntriesInBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyEntriesInBatchRequest = exports.TooManyEntriesInBatchRequest || (exports.TooManyEntriesInBatchRequest = {}));
var CreateQueueRequest;
(function (CreateQueueRequest) {
    /**
     * @internal
     */
    CreateQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQueueRequest = exports.CreateQueueRequest || (exports.CreateQueueRequest = {}));
var CreateQueueResult;
(function (CreateQueueResult) {
    /**
     * @internal
     */
    CreateQueueResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQueueResult = exports.CreateQueueResult || (exports.CreateQueueResult = {}));
var QueueDeletedRecently;
(function (QueueDeletedRecently) {
    /**
     * @internal
     */
    QueueDeletedRecently.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueueDeletedRecently = exports.QueueDeletedRecently || (exports.QueueDeletedRecently = {}));
var QueueNameExists;
(function (QueueNameExists) {
    /**
     * @internal
     */
    QueueNameExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueueNameExists = exports.QueueNameExists || (exports.QueueNameExists = {}));
var DeleteMessageRequest;
(function (DeleteMessageRequest) {
    /**
     * @internal
     */
    DeleteMessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMessageRequest = exports.DeleteMessageRequest || (exports.DeleteMessageRequest = {}));
var InvalidIdFormat;
(function (InvalidIdFormat) {
    /**
     * @internal
     */
    InvalidIdFormat.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidIdFormat = exports.InvalidIdFormat || (exports.InvalidIdFormat = {}));
var DeleteMessageBatchRequestEntry;
(function (DeleteMessageBatchRequestEntry) {
    /**
     * @internal
     */
    DeleteMessageBatchRequestEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMessageBatchRequestEntry = exports.DeleteMessageBatchRequestEntry || (exports.DeleteMessageBatchRequestEntry = {}));
var DeleteMessageBatchRequest;
(function (DeleteMessageBatchRequest) {
    /**
     * @internal
     */
    DeleteMessageBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMessageBatchRequest = exports.DeleteMessageBatchRequest || (exports.DeleteMessageBatchRequest = {}));
var DeleteMessageBatchResultEntry;
(function (DeleteMessageBatchResultEntry) {
    /**
     * @internal
     */
    DeleteMessageBatchResultEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMessageBatchResultEntry = exports.DeleteMessageBatchResultEntry || (exports.DeleteMessageBatchResultEntry = {}));
var DeleteMessageBatchResult;
(function (DeleteMessageBatchResult) {
    /**
     * @internal
     */
    DeleteMessageBatchResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMessageBatchResult = exports.DeleteMessageBatchResult || (exports.DeleteMessageBatchResult = {}));
var DeleteQueueRequest;
(function (DeleteQueueRequest) {
    /**
     * @internal
     */
    DeleteQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQueueRequest = exports.DeleteQueueRequest || (exports.DeleteQueueRequest = {}));
var GetQueueAttributesRequest;
(function (GetQueueAttributesRequest) {
    /**
     * @internal
     */
    GetQueueAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQueueAttributesRequest = exports.GetQueueAttributesRequest || (exports.GetQueueAttributesRequest = {}));
var GetQueueAttributesResult;
(function (GetQueueAttributesResult) {
    /**
     * @internal
     */
    GetQueueAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQueueAttributesResult = exports.GetQueueAttributesResult || (exports.GetQueueAttributesResult = {}));
var InvalidAttributeName;
(function (InvalidAttributeName) {
    /**
     * @internal
     */
    InvalidAttributeName.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAttributeName = exports.InvalidAttributeName || (exports.InvalidAttributeName = {}));
var GetQueueUrlRequest;
(function (GetQueueUrlRequest) {
    /**
     * @internal
     */
    GetQueueUrlRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQueueUrlRequest = exports.GetQueueUrlRequest || (exports.GetQueueUrlRequest = {}));
var GetQueueUrlResult;
(function (GetQueueUrlResult) {
    /**
     * @internal
     */
    GetQueueUrlResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQueueUrlResult = exports.GetQueueUrlResult || (exports.GetQueueUrlResult = {}));
var QueueDoesNotExist;
(function (QueueDoesNotExist) {
    /**
     * @internal
     */
    QueueDoesNotExist.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueueDoesNotExist = exports.QueueDoesNotExist || (exports.QueueDoesNotExist = {}));
var ListDeadLetterSourceQueuesRequest;
(function (ListDeadLetterSourceQueuesRequest) {
    /**
     * @internal
     */
    ListDeadLetterSourceQueuesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeadLetterSourceQueuesRequest = exports.ListDeadLetterSourceQueuesRequest || (exports.ListDeadLetterSourceQueuesRequest = {}));
var ListDeadLetterSourceQueuesResult;
(function (ListDeadLetterSourceQueuesResult) {
    /**
     * @internal
     */
    ListDeadLetterSourceQueuesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeadLetterSourceQueuesResult = exports.ListDeadLetterSourceQueuesResult || (exports.ListDeadLetterSourceQueuesResult = {}));
var ListQueuesRequest;
(function (ListQueuesRequest) {
    /**
     * @internal
     */
    ListQueuesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueuesRequest = exports.ListQueuesRequest || (exports.ListQueuesRequest = {}));
var ListQueuesResult;
(function (ListQueuesResult) {
    /**
     * @internal
     */
    ListQueuesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueuesResult = exports.ListQueuesResult || (exports.ListQueuesResult = {}));
var ListQueueTagsRequest;
(function (ListQueueTagsRequest) {
    /**
     * @internal
     */
    ListQueueTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueueTagsRequest = exports.ListQueueTagsRequest || (exports.ListQueueTagsRequest = {}));
var ListQueueTagsResult;
(function (ListQueueTagsResult) {
    /**
     * @internal
     */
    ListQueueTagsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueueTagsResult = exports.ListQueueTagsResult || (exports.ListQueueTagsResult = {}));
var PurgeQueueInProgress;
(function (PurgeQueueInProgress) {
    /**
     * @internal
     */
    PurgeQueueInProgress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurgeQueueInProgress = exports.PurgeQueueInProgress || (exports.PurgeQueueInProgress = {}));
var PurgeQueueRequest;
(function (PurgeQueueRequest) {
    /**
     * @internal
     */
    PurgeQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurgeQueueRequest = exports.PurgeQueueRequest || (exports.PurgeQueueRequest = {}));
var ReceiveMessageRequest;
(function (ReceiveMessageRequest) {
    /**
     * @internal
     */
    ReceiveMessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReceiveMessageRequest = exports.ReceiveMessageRequest || (exports.ReceiveMessageRequest = {}));
var MessageAttributeValue;
(function (MessageAttributeValue) {
    /**
     * @internal
     */
    MessageAttributeValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageAttributeValue = exports.MessageAttributeValue || (exports.MessageAttributeValue = {}));
var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Message = exports.Message || (exports.Message = {}));
var ReceiveMessageResult;
(function (ReceiveMessageResult) {
    /**
     * @internal
     */
    ReceiveMessageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReceiveMessageResult = exports.ReceiveMessageResult || (exports.ReceiveMessageResult = {}));
var RemovePermissionRequest;
(function (RemovePermissionRequest) {
    /**
     * @internal
     */
    RemovePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemovePermissionRequest = exports.RemovePermissionRequest || (exports.RemovePermissionRequest = {}));
var InvalidMessageContents;
(function (InvalidMessageContents) {
    /**
     * @internal
     */
    InvalidMessageContents.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidMessageContents = exports.InvalidMessageContents || (exports.InvalidMessageContents = {}));
var MessageSystemAttributeValue;
(function (MessageSystemAttributeValue) {
    /**
     * @internal
     */
    MessageSystemAttributeValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageSystemAttributeValue = exports.MessageSystemAttributeValue || (exports.MessageSystemAttributeValue = {}));
var SendMessageRequest;
(function (SendMessageRequest) {
    /**
     * @internal
     */
    SendMessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageRequest = exports.SendMessageRequest || (exports.SendMessageRequest = {}));
var SendMessageResult;
(function (SendMessageResult) {
    /**
     * @internal
     */
    SendMessageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageResult = exports.SendMessageResult || (exports.SendMessageResult = {}));
var UnsupportedOperation;
(function (UnsupportedOperation) {
    /**
     * @internal
     */
    UnsupportedOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperation = exports.UnsupportedOperation || (exports.UnsupportedOperation = {}));
var BatchRequestTooLong;
(function (BatchRequestTooLong) {
    /**
     * @internal
     */
    BatchRequestTooLong.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchRequestTooLong = exports.BatchRequestTooLong || (exports.BatchRequestTooLong = {}));
var SendMessageBatchRequestEntry;
(function (SendMessageBatchRequestEntry) {
    /**
     * @internal
     */
    SendMessageBatchRequestEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageBatchRequestEntry = exports.SendMessageBatchRequestEntry || (exports.SendMessageBatchRequestEntry = {}));
var SendMessageBatchRequest;
(function (SendMessageBatchRequest) {
    /**
     * @internal
     */
    SendMessageBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageBatchRequest = exports.SendMessageBatchRequest || (exports.SendMessageBatchRequest = {}));
var SendMessageBatchResultEntry;
(function (SendMessageBatchResultEntry) {
    /**
     * @internal
     */
    SendMessageBatchResultEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageBatchResultEntry = exports.SendMessageBatchResultEntry || (exports.SendMessageBatchResultEntry = {}));
var SendMessageBatchResult;
(function (SendMessageBatchResult) {
    /**
     * @internal
     */
    SendMessageBatchResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageBatchResult = exports.SendMessageBatchResult || (exports.SendMessageBatchResult = {}));
var SetQueueAttributesRequest;
(function (SetQueueAttributesRequest) {
    /**
     * @internal
     */
    SetQueueAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetQueueAttributesRequest = exports.SetQueueAttributesRequest || (exports.SetQueueAttributesRequest = {}));
var TagQueueRequest;
(function (TagQueueRequest) {
    /**
     * @internal
     */
    TagQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagQueueRequest = exports.TagQueueRequest || (exports.TagQueueRequest = {}));
var UntagQueueRequest;
(function (UntagQueueRequest) {
    /**
     * @internal
     */
    UntagQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagQueueRequest = exports.UntagQueueRequest || (exports.UntagQueueRequest = {}));
//# sourceMappingURL=models_0.js.map