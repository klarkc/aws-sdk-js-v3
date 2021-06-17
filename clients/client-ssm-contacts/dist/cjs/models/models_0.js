"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListContactChannelsResult = exports.ListContactChannelsRequest = exports.GetContactPolicyResult = exports.GetContactPolicyRequest = exports.GetContactChannelResult = exports.GetContactChannelRequest = exports.GetContactResult = exports.GetContactRequest = exports.Engagement = exports.DescribePageResult = exports.DescribePageRequest = exports.DescribeEngagementResult = exports.DescribeEngagementRequest = exports.DeleteContactChannelResult = exports.DeleteContactChannelRequest = exports.DeleteContactResult = exports.DeleteContactRequest = exports.DeactivateContactChannelResult = exports.DeactivateContactChannelRequest = exports.CreateContactChannelResult = exports.CreateContactChannelRequest = exports.ServiceQuotaExceededException = exports.DataEncryptionException = exports.CreateContactResult = exports.CreateContactRequest = exports.Tag = exports.Plan = exports.Stage = exports.Target = exports.ContactTargetInfo = exports.ContactChannel = exports.ContactChannelAddress = exports.Contact = exports.ContactType = exports.ConflictException = exports.ChannelType = exports.ChannelTargetInfo = exports.ActivationStatus = exports.ActivateContactChannelResult = exports.ActivateContactChannelRequest = exports.ValidationException = exports.ValidationExceptionReason = exports.ValidationExceptionField = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InternalServerException = exports.AccessDeniedException = exports.AcceptPageResult = exports.AcceptPageRequest = exports.AcceptType = void 0;
exports.UpdateContactChannelResult = exports.UpdateContactChannelRequest = exports.UpdateContactResult = exports.UpdateContactRequest = exports.UntagResourceResult = exports.UntagResourceRequest = exports.TagResourceResult = exports.TagResourceRequest = exports.StopEngagementResult = exports.StopEngagementRequest = exports.StartEngagementResult = exports.StartEngagementRequest = exports.SendActivationCodeResult = exports.SendActivationCodeRequest = exports.PutContactPolicyResult = exports.PutContactPolicyRequest = exports.ListTagsForResourceResult = exports.ListTagsForResourceRequest = exports.ListPagesByEngagementResult = exports.ListPagesByEngagementRequest = exports.ListPagesByContactResult = exports.Page = exports.ListPagesByContactRequest = exports.ListPageReceiptsResult = exports.Receipt = exports.ReceiptType = exports.ListPageReceiptsRequest = exports.ListEngagementsResult = exports.ListEngagementsRequest = exports.TimeRange = exports.ListContactsResult = exports.ListContactsRequest = void 0;
var AcceptType;
(function (AcceptType) {
    AcceptType["DELIVERED"] = "DELIVERED";
    AcceptType["READ"] = "READ";
})(AcceptType = exports.AcceptType || (exports.AcceptType = {}));
var AcceptPageRequest;
(function (AcceptPageRequest) {
    /**
     * @internal
     */
    AcceptPageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptPageRequest = exports.AcceptPageRequest || (exports.AcceptPageRequest = {}));
var AcceptPageResult;
(function (AcceptPageResult) {
    /**
     * @internal
     */
    AcceptPageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptPageResult = exports.AcceptPageResult || (exports.AcceptPageResult = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationExceptionField;
(function (ValidationExceptionField) {
    /**
     * @internal
     */
    ValidationExceptionField.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationExceptionField = exports.ValidationExceptionField || (exports.ValidationExceptionField = {}));
var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["CANNOT_PARSE"] = "CANNOT_PARSE";
    ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "FIELD_VALIDATION_FAILED";
    ValidationExceptionReason["OTHER"] = "OTHER";
    ValidationExceptionReason["UNKNOWN_OPERATION"] = "UNKNOWN_OPERATION";
})(ValidationExceptionReason = exports.ValidationExceptionReason || (exports.ValidationExceptionReason = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var ActivateContactChannelRequest;
(function (ActivateContactChannelRequest) {
    /**
     * @internal
     */
    ActivateContactChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivateContactChannelRequest = exports.ActivateContactChannelRequest || (exports.ActivateContactChannelRequest = {}));
var ActivateContactChannelResult;
(function (ActivateContactChannelResult) {
    /**
     * @internal
     */
    ActivateContactChannelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivateContactChannelResult = exports.ActivateContactChannelResult || (exports.ActivateContactChannelResult = {}));
var ActivationStatus;
(function (ActivationStatus) {
    ActivationStatus["ACTIVATED"] = "ACTIVATED";
    ActivationStatus["NOT_ACTIVATED"] = "NOT_ACTIVATED";
})(ActivationStatus = exports.ActivationStatus || (exports.ActivationStatus = {}));
var ChannelTargetInfo;
(function (ChannelTargetInfo) {
    /**
     * @internal
     */
    ChannelTargetInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelTargetInfo = exports.ChannelTargetInfo || (exports.ChannelTargetInfo = {}));
var ChannelType;
(function (ChannelType) {
    ChannelType["EMAIL"] = "EMAIL";
    ChannelType["SMS"] = "SMS";
    ChannelType["VOICE"] = "VOICE";
})(ChannelType = exports.ChannelType || (exports.ChannelType = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var ContactType;
(function (ContactType) {
    ContactType["ESCALATION"] = "ESCALATION";
    ContactType["PERSONAL"] = "PERSONAL";
})(ContactType = exports.ContactType || (exports.ContactType = {}));
var Contact;
(function (Contact) {
    /**
     * @internal
     */
    Contact.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Contact = exports.Contact || (exports.Contact = {}));
var ContactChannelAddress;
(function (ContactChannelAddress) {
    /**
     * @internal
     */
    ContactChannelAddress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactChannelAddress = exports.ContactChannelAddress || (exports.ContactChannelAddress = {}));
var ContactChannel;
(function (ContactChannel) {
    /**
     * @internal
     */
    ContactChannel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactChannel = exports.ContactChannel || (exports.ContactChannel = {}));
var ContactTargetInfo;
(function (ContactTargetInfo) {
    /**
     * @internal
     */
    ContactTargetInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactTargetInfo = exports.ContactTargetInfo || (exports.ContactTargetInfo = {}));
var Target;
(function (Target) {
    /**
     * @internal
     */
    Target.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Target = exports.Target || (exports.Target = {}));
var Stage;
(function (Stage) {
    /**
     * @internal
     */
    Stage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Stage = exports.Stage || (exports.Stage = {}));
var Plan;
(function (Plan) {
    /**
     * @internal
     */
    Plan.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Plan = exports.Plan || (exports.Plan = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateContactRequest;
(function (CreateContactRequest) {
    /**
     * @internal
     */
    CreateContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContactRequest = exports.CreateContactRequest || (exports.CreateContactRequest = {}));
var CreateContactResult;
(function (CreateContactResult) {
    /**
     * @internal
     */
    CreateContactResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContactResult = exports.CreateContactResult || (exports.CreateContactResult = {}));
var DataEncryptionException;
(function (DataEncryptionException) {
    /**
     * @internal
     */
    DataEncryptionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataEncryptionException = exports.DataEncryptionException || (exports.DataEncryptionException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var CreateContactChannelRequest;
(function (CreateContactChannelRequest) {
    /**
     * @internal
     */
    CreateContactChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContactChannelRequest = exports.CreateContactChannelRequest || (exports.CreateContactChannelRequest = {}));
var CreateContactChannelResult;
(function (CreateContactChannelResult) {
    /**
     * @internal
     */
    CreateContactChannelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContactChannelResult = exports.CreateContactChannelResult || (exports.CreateContactChannelResult = {}));
var DeactivateContactChannelRequest;
(function (DeactivateContactChannelRequest) {
    /**
     * @internal
     */
    DeactivateContactChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeactivateContactChannelRequest = exports.DeactivateContactChannelRequest || (exports.DeactivateContactChannelRequest = {}));
var DeactivateContactChannelResult;
(function (DeactivateContactChannelResult) {
    /**
     * @internal
     */
    DeactivateContactChannelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeactivateContactChannelResult = exports.DeactivateContactChannelResult || (exports.DeactivateContactChannelResult = {}));
var DeleteContactRequest;
(function (DeleteContactRequest) {
    /**
     * @internal
     */
    DeleteContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContactRequest = exports.DeleteContactRequest || (exports.DeleteContactRequest = {}));
var DeleteContactResult;
(function (DeleteContactResult) {
    /**
     * @internal
     */
    DeleteContactResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContactResult = exports.DeleteContactResult || (exports.DeleteContactResult = {}));
var DeleteContactChannelRequest;
(function (DeleteContactChannelRequest) {
    /**
     * @internal
     */
    DeleteContactChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContactChannelRequest = exports.DeleteContactChannelRequest || (exports.DeleteContactChannelRequest = {}));
var DeleteContactChannelResult;
(function (DeleteContactChannelResult) {
    /**
     * @internal
     */
    DeleteContactChannelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContactChannelResult = exports.DeleteContactChannelResult || (exports.DeleteContactChannelResult = {}));
var DescribeEngagementRequest;
(function (DescribeEngagementRequest) {
    /**
     * @internal
     */
    DescribeEngagementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEngagementRequest = exports.DescribeEngagementRequest || (exports.DescribeEngagementRequest = {}));
var DescribeEngagementResult;
(function (DescribeEngagementResult) {
    /**
     * @internal
     */
    DescribeEngagementResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEngagementResult = exports.DescribeEngagementResult || (exports.DescribeEngagementResult = {}));
var DescribePageRequest;
(function (DescribePageRequest) {
    /**
     * @internal
     */
    DescribePageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePageRequest = exports.DescribePageRequest || (exports.DescribePageRequest = {}));
var DescribePageResult;
(function (DescribePageResult) {
    /**
     * @internal
     */
    DescribePageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePageResult = exports.DescribePageResult || (exports.DescribePageResult = {}));
var Engagement;
(function (Engagement) {
    /**
     * @internal
     */
    Engagement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Engagement = exports.Engagement || (exports.Engagement = {}));
var GetContactRequest;
(function (GetContactRequest) {
    /**
     * @internal
     */
    GetContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactRequest = exports.GetContactRequest || (exports.GetContactRequest = {}));
var GetContactResult;
(function (GetContactResult) {
    /**
     * @internal
     */
    GetContactResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactResult = exports.GetContactResult || (exports.GetContactResult = {}));
var GetContactChannelRequest;
(function (GetContactChannelRequest) {
    /**
     * @internal
     */
    GetContactChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactChannelRequest = exports.GetContactChannelRequest || (exports.GetContactChannelRequest = {}));
var GetContactChannelResult;
(function (GetContactChannelResult) {
    /**
     * @internal
     */
    GetContactChannelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactChannelResult = exports.GetContactChannelResult || (exports.GetContactChannelResult = {}));
var GetContactPolicyRequest;
(function (GetContactPolicyRequest) {
    /**
     * @internal
     */
    GetContactPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactPolicyRequest = exports.GetContactPolicyRequest || (exports.GetContactPolicyRequest = {}));
var GetContactPolicyResult;
(function (GetContactPolicyResult) {
    /**
     * @internal
     */
    GetContactPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactPolicyResult = exports.GetContactPolicyResult || (exports.GetContactPolicyResult = {}));
var ListContactChannelsRequest;
(function (ListContactChannelsRequest) {
    /**
     * @internal
     */
    ListContactChannelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactChannelsRequest = exports.ListContactChannelsRequest || (exports.ListContactChannelsRequest = {}));
var ListContactChannelsResult;
(function (ListContactChannelsResult) {
    /**
     * @internal
     */
    ListContactChannelsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactChannelsResult = exports.ListContactChannelsResult || (exports.ListContactChannelsResult = {}));
var ListContactsRequest;
(function (ListContactsRequest) {
    /**
     * @internal
     */
    ListContactsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactsRequest = exports.ListContactsRequest || (exports.ListContactsRequest = {}));
var ListContactsResult;
(function (ListContactsResult) {
    /**
     * @internal
     */
    ListContactsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactsResult = exports.ListContactsResult || (exports.ListContactsResult = {}));
var TimeRange;
(function (TimeRange) {
    /**
     * @internal
     */
    TimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeRange = exports.TimeRange || (exports.TimeRange = {}));
var ListEngagementsRequest;
(function (ListEngagementsRequest) {
    /**
     * @internal
     */
    ListEngagementsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEngagementsRequest = exports.ListEngagementsRequest || (exports.ListEngagementsRequest = {}));
var ListEngagementsResult;
(function (ListEngagementsResult) {
    /**
     * @internal
     */
    ListEngagementsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEngagementsResult = exports.ListEngagementsResult || (exports.ListEngagementsResult = {}));
var ListPageReceiptsRequest;
(function (ListPageReceiptsRequest) {
    /**
     * @internal
     */
    ListPageReceiptsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPageReceiptsRequest = exports.ListPageReceiptsRequest || (exports.ListPageReceiptsRequest = {}));
var ReceiptType;
(function (ReceiptType) {
    ReceiptType["DELIVERED"] = "DELIVERED";
    ReceiptType["ERROR"] = "ERROR";
    ReceiptType["READ"] = "READ";
    ReceiptType["SENT"] = "SENT";
    ReceiptType["STOP"] = "STOP";
})(ReceiptType = exports.ReceiptType || (exports.ReceiptType = {}));
var Receipt;
(function (Receipt) {
    /**
     * @internal
     */
    Receipt.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Receipt = exports.Receipt || (exports.Receipt = {}));
var ListPageReceiptsResult;
(function (ListPageReceiptsResult) {
    /**
     * @internal
     */
    ListPageReceiptsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPageReceiptsResult = exports.ListPageReceiptsResult || (exports.ListPageReceiptsResult = {}));
var ListPagesByContactRequest;
(function (ListPagesByContactRequest) {
    /**
     * @internal
     */
    ListPagesByContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPagesByContactRequest = exports.ListPagesByContactRequest || (exports.ListPagesByContactRequest = {}));
var Page;
(function (Page) {
    /**
     * @internal
     */
    Page.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Page = exports.Page || (exports.Page = {}));
var ListPagesByContactResult;
(function (ListPagesByContactResult) {
    /**
     * @internal
     */
    ListPagesByContactResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPagesByContactResult = exports.ListPagesByContactResult || (exports.ListPagesByContactResult = {}));
var ListPagesByEngagementRequest;
(function (ListPagesByEngagementRequest) {
    /**
     * @internal
     */
    ListPagesByEngagementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPagesByEngagementRequest = exports.ListPagesByEngagementRequest || (exports.ListPagesByEngagementRequest = {}));
var ListPagesByEngagementResult;
(function (ListPagesByEngagementResult) {
    /**
     * @internal
     */
    ListPagesByEngagementResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPagesByEngagementResult = exports.ListPagesByEngagementResult || (exports.ListPagesByEngagementResult = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    /**
     * @internal
     */
    ListTagsForResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResult = exports.ListTagsForResourceResult || (exports.ListTagsForResourceResult = {}));
var PutContactPolicyRequest;
(function (PutContactPolicyRequest) {
    /**
     * @internal
     */
    PutContactPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutContactPolicyRequest = exports.PutContactPolicyRequest || (exports.PutContactPolicyRequest = {}));
var PutContactPolicyResult;
(function (PutContactPolicyResult) {
    /**
     * @internal
     */
    PutContactPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutContactPolicyResult = exports.PutContactPolicyResult || (exports.PutContactPolicyResult = {}));
var SendActivationCodeRequest;
(function (SendActivationCodeRequest) {
    /**
     * @internal
     */
    SendActivationCodeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendActivationCodeRequest = exports.SendActivationCodeRequest || (exports.SendActivationCodeRequest = {}));
var SendActivationCodeResult;
(function (SendActivationCodeResult) {
    /**
     * @internal
     */
    SendActivationCodeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendActivationCodeResult = exports.SendActivationCodeResult || (exports.SendActivationCodeResult = {}));
var StartEngagementRequest;
(function (StartEngagementRequest) {
    /**
     * @internal
     */
    StartEngagementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartEngagementRequest = exports.StartEngagementRequest || (exports.StartEngagementRequest = {}));
var StartEngagementResult;
(function (StartEngagementResult) {
    /**
     * @internal
     */
    StartEngagementResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartEngagementResult = exports.StartEngagementResult || (exports.StartEngagementResult = {}));
var StopEngagementRequest;
(function (StopEngagementRequest) {
    /**
     * @internal
     */
    StopEngagementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopEngagementRequest = exports.StopEngagementRequest || (exports.StopEngagementRequest = {}));
var StopEngagementResult;
(function (StopEngagementResult) {
    /**
     * @internal
     */
    StopEngagementResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopEngagementResult = exports.StopEngagementResult || (exports.StopEngagementResult = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResult;
(function (TagResourceResult) {
    /**
     * @internal
     */
    TagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResult = exports.TagResourceResult || (exports.TagResourceResult = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResult;
(function (UntagResourceResult) {
    /**
     * @internal
     */
    UntagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResult = exports.UntagResourceResult || (exports.UntagResourceResult = {}));
var UpdateContactRequest;
(function (UpdateContactRequest) {
    /**
     * @internal
     */
    UpdateContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContactRequest = exports.UpdateContactRequest || (exports.UpdateContactRequest = {}));
var UpdateContactResult;
(function (UpdateContactResult) {
    /**
     * @internal
     */
    UpdateContactResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContactResult = exports.UpdateContactResult || (exports.UpdateContactResult = {}));
var UpdateContactChannelRequest;
(function (UpdateContactChannelRequest) {
    /**
     * @internal
     */
    UpdateContactChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContactChannelRequest = exports.UpdateContactChannelRequest || (exports.UpdateContactChannelRequest = {}));
var UpdateContactChannelResult;
(function (UpdateContactChannelResult) {
    /**
     * @internal
     */
    UpdateContactChannelResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContactChannelResult = exports.UpdateContactChannelResult || (exports.UpdateContactChannelResult = {}));
//# sourceMappingURL=models_0.js.map