"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFileUploadURLRequest = exports.GetAssignmentResponse = exports.GetAssignmentRequest = exports.GetAccountBalanceResponse = exports.GetAccountBalanceRequest = exports.EventType = exports.DisassociateQualificationFromWorkerResponse = exports.DisassociateQualificationFromWorkerRequest = exports.DeleteWorkerBlockResponse = exports.DeleteWorkerBlockRequest = exports.DeleteQualificationTypeResponse = exports.DeleteQualificationTypeRequest = exports.DeleteHITResponse = exports.DeleteHITRequest = exports.CreateWorkerBlockResponse = exports.CreateWorkerBlockRequest = exports.CreateQualificationTypeResponse = exports.QualificationType = exports.CreateQualificationTypeRequest = exports.QualificationTypeStatus = exports.CreateHITWithHITTypeResponse = exports.CreateHITWithHITTypeRequest = exports.CreateHITTypeResponse = exports.CreateHITTypeRequest = exports.CreateHITResponse = exports.HIT = exports.HITStatus = exports.HITReviewStatus = exports.CreateHITRequest = exports.QualificationRequirement = exports.Locale = exports.HITAccessActions = exports.HITLayoutParameter = exports.ReviewPolicy = exports.PolicyParameter = exports.ParameterMapEntry = exports.CreateAdditionalAssignmentsForHITResponse = exports.CreateAdditionalAssignmentsForHITRequest = exports.Comparator = exports.BonusPayment = exports.AssociateQualificationWithWorkerResponse = exports.AssociateQualificationWithWorkerRequest = exports.Assignment = exports.AssignmentStatus = exports.ApproveAssignmentResponse = exports.ApproveAssignmentRequest = exports.ServiceFault = exports.RequestError = exports.AcceptQualificationRequestResponse = exports.AcceptQualificationRequestRequest = void 0;
exports.SendTestEventNotificationRequest = exports.NotificationSpecification = exports.NotificationTransport = exports.SendBonusResponse = exports.SendBonusRequest = exports.RejectQualificationRequestResponse = exports.RejectQualificationRequestRequest = exports.RejectAssignmentResponse = exports.RejectAssignmentRequest = exports.NotifyWorkersResponse = exports.NotifyWorkersFailureStatus = exports.NotifyWorkersFailureCode = exports.NotifyWorkersRequest = exports.ListWorkersWithQualificationTypeResponse = exports.ListWorkersWithQualificationTypeRequest = exports.ListWorkerBlocksResponse = exports.WorkerBlock = exports.ListWorkerBlocksRequest = exports.ListReviewPolicyResultsForHITResponse = exports.ReviewReport = exports.ReviewResultDetail = exports.ReviewActionDetail = exports.ReviewActionStatus = exports.ListReviewPolicyResultsForHITRequest = exports.ReviewPolicyLevel = exports.ListReviewableHITsResponse = exports.ListReviewableHITsRequest = exports.ReviewableHITStatus = exports.ListQualificationTypesResponse = exports.ListQualificationTypesRequest = exports.ListQualificationRequestsResponse = exports.QualificationRequest = exports.ListQualificationRequestsRequest = exports.ListHITsForQualificationTypeResponse = exports.ListHITsForQualificationTypeRequest = exports.ListHITsResponse = exports.ListHITsRequest = exports.ListBonusPaymentsResponse = exports.ListBonusPaymentsRequest = exports.ListAssignmentsForHITResponse = exports.ListAssignmentsForHITRequest = exports.GetQualificationTypeResponse = exports.GetQualificationTypeRequest = exports.GetQualificationScoreResponse = exports.Qualification = exports.QualificationStatus = exports.GetQualificationScoreRequest = exports.GetHITResponse = exports.GetHITRequest = exports.GetFileUploadURLResponse = void 0;
exports.UpdateQualificationTypeResponse = exports.UpdateQualificationTypeRequest = exports.UpdateNotificationSettingsResponse = exports.UpdateNotificationSettingsRequest = exports.UpdateHITTypeOfHITResponse = exports.UpdateHITTypeOfHITRequest = exports.UpdateHITReviewStatusResponse = exports.UpdateHITReviewStatusRequest = exports.UpdateExpirationForHITResponse = exports.UpdateExpirationForHITRequest = exports.SendTestEventNotificationResponse = void 0;
var AcceptQualificationRequestRequest;
(function (AcceptQualificationRequestRequest) {
    /**
     * @internal
     */
    AcceptQualificationRequestRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptQualificationRequestRequest = exports.AcceptQualificationRequestRequest || (exports.AcceptQualificationRequestRequest = {}));
var AcceptQualificationRequestResponse;
(function (AcceptQualificationRequestResponse) {
    /**
     * @internal
     */
    AcceptQualificationRequestResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptQualificationRequestResponse = exports.AcceptQualificationRequestResponse || (exports.AcceptQualificationRequestResponse = {}));
var RequestError;
(function (RequestError) {
    /**
     * @internal
     */
    RequestError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestError = exports.RequestError || (exports.RequestError = {}));
var ServiceFault;
(function (ServiceFault) {
    /**
     * @internal
     */
    ServiceFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceFault = exports.ServiceFault || (exports.ServiceFault = {}));
var ApproveAssignmentRequest;
(function (ApproveAssignmentRequest) {
    /**
     * @internal
     */
    ApproveAssignmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApproveAssignmentRequest = exports.ApproveAssignmentRequest || (exports.ApproveAssignmentRequest = {}));
var ApproveAssignmentResponse;
(function (ApproveAssignmentResponse) {
    /**
     * @internal
     */
    ApproveAssignmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApproveAssignmentResponse = exports.ApproveAssignmentResponse || (exports.ApproveAssignmentResponse = {}));
var AssignmentStatus;
(function (AssignmentStatus) {
    AssignmentStatus["Approved"] = "Approved";
    AssignmentStatus["Rejected"] = "Rejected";
    AssignmentStatus["Submitted"] = "Submitted";
})(AssignmentStatus = exports.AssignmentStatus || (exports.AssignmentStatus = {}));
var Assignment;
(function (Assignment) {
    /**
     * @internal
     */
    Assignment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Assignment = exports.Assignment || (exports.Assignment = {}));
var AssociateQualificationWithWorkerRequest;
(function (AssociateQualificationWithWorkerRequest) {
    /**
     * @internal
     */
    AssociateQualificationWithWorkerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateQualificationWithWorkerRequest = exports.AssociateQualificationWithWorkerRequest || (exports.AssociateQualificationWithWorkerRequest = {}));
var AssociateQualificationWithWorkerResponse;
(function (AssociateQualificationWithWorkerResponse) {
    /**
     * @internal
     */
    AssociateQualificationWithWorkerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateQualificationWithWorkerResponse = exports.AssociateQualificationWithWorkerResponse || (exports.AssociateQualificationWithWorkerResponse = {}));
var BonusPayment;
(function (BonusPayment) {
    /**
     * @internal
     */
    BonusPayment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BonusPayment = exports.BonusPayment || (exports.BonusPayment = {}));
var Comparator;
(function (Comparator) {
    Comparator["DoesNotExist"] = "DoesNotExist";
    Comparator["EqualTo"] = "EqualTo";
    Comparator["Exists"] = "Exists";
    Comparator["GreaterThan"] = "GreaterThan";
    Comparator["GreaterThanOrEqualTo"] = "GreaterThanOrEqualTo";
    Comparator["In"] = "In";
    Comparator["LessThan"] = "LessThan";
    Comparator["LessThanOrEqualTo"] = "LessThanOrEqualTo";
    Comparator["NotEqualTo"] = "NotEqualTo";
    Comparator["NotIn"] = "NotIn";
})(Comparator = exports.Comparator || (exports.Comparator = {}));
var CreateAdditionalAssignmentsForHITRequest;
(function (CreateAdditionalAssignmentsForHITRequest) {
    /**
     * @internal
     */
    CreateAdditionalAssignmentsForHITRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAdditionalAssignmentsForHITRequest = exports.CreateAdditionalAssignmentsForHITRequest || (exports.CreateAdditionalAssignmentsForHITRequest = {}));
var CreateAdditionalAssignmentsForHITResponse;
(function (CreateAdditionalAssignmentsForHITResponse) {
    /**
     * @internal
     */
    CreateAdditionalAssignmentsForHITResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAdditionalAssignmentsForHITResponse = exports.CreateAdditionalAssignmentsForHITResponse || (exports.CreateAdditionalAssignmentsForHITResponse = {}));
var ParameterMapEntry;
(function (ParameterMapEntry) {
    /**
     * @internal
     */
    ParameterMapEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterMapEntry = exports.ParameterMapEntry || (exports.ParameterMapEntry = {}));
var PolicyParameter;
(function (PolicyParameter) {
    /**
     * @internal
     */
    PolicyParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyParameter = exports.PolicyParameter || (exports.PolicyParameter = {}));
var ReviewPolicy;
(function (ReviewPolicy) {
    /**
     * @internal
     */
    ReviewPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReviewPolicy = exports.ReviewPolicy || (exports.ReviewPolicy = {}));
var HITLayoutParameter;
(function (HITLayoutParameter) {
    /**
     * @internal
     */
    HITLayoutParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HITLayoutParameter = exports.HITLayoutParameter || (exports.HITLayoutParameter = {}));
var HITAccessActions;
(function (HITAccessActions) {
    HITAccessActions["Accept"] = "Accept";
    HITAccessActions["DiscoverPreviewAndAccept"] = "DiscoverPreviewAndAccept";
    HITAccessActions["PreviewAndAccept"] = "PreviewAndAccept";
})(HITAccessActions = exports.HITAccessActions || (exports.HITAccessActions = {}));
var Locale;
(function (Locale) {
    /**
     * @internal
     */
    Locale.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Locale = exports.Locale || (exports.Locale = {}));
var QualificationRequirement;
(function (QualificationRequirement) {
    /**
     * @internal
     */
    QualificationRequirement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QualificationRequirement = exports.QualificationRequirement || (exports.QualificationRequirement = {}));
var CreateHITRequest;
(function (CreateHITRequest) {
    /**
     * @internal
     */
    CreateHITRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHITRequest = exports.CreateHITRequest || (exports.CreateHITRequest = {}));
var HITReviewStatus;
(function (HITReviewStatus) {
    HITReviewStatus["MarkedForReview"] = "MarkedForReview";
    HITReviewStatus["NotReviewed"] = "NotReviewed";
    HITReviewStatus["ReviewedAppropriate"] = "ReviewedAppropriate";
    HITReviewStatus["ReviewedInappropriate"] = "ReviewedInappropriate";
})(HITReviewStatus = exports.HITReviewStatus || (exports.HITReviewStatus = {}));
var HITStatus;
(function (HITStatus) {
    HITStatus["Assignable"] = "Assignable";
    HITStatus["Disposed"] = "Disposed";
    HITStatus["Reviewable"] = "Reviewable";
    HITStatus["Reviewing"] = "Reviewing";
    HITStatus["Unassignable"] = "Unassignable";
})(HITStatus = exports.HITStatus || (exports.HITStatus = {}));
var HIT;
(function (HIT) {
    /**
     * @internal
     */
    HIT.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HIT = exports.HIT || (exports.HIT = {}));
var CreateHITResponse;
(function (CreateHITResponse) {
    /**
     * @internal
     */
    CreateHITResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHITResponse = exports.CreateHITResponse || (exports.CreateHITResponse = {}));
var CreateHITTypeRequest;
(function (CreateHITTypeRequest) {
    /**
     * @internal
     */
    CreateHITTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHITTypeRequest = exports.CreateHITTypeRequest || (exports.CreateHITTypeRequest = {}));
var CreateHITTypeResponse;
(function (CreateHITTypeResponse) {
    /**
     * @internal
     */
    CreateHITTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHITTypeResponse = exports.CreateHITTypeResponse || (exports.CreateHITTypeResponse = {}));
var CreateHITWithHITTypeRequest;
(function (CreateHITWithHITTypeRequest) {
    /**
     * @internal
     */
    CreateHITWithHITTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHITWithHITTypeRequest = exports.CreateHITWithHITTypeRequest || (exports.CreateHITWithHITTypeRequest = {}));
var CreateHITWithHITTypeResponse;
(function (CreateHITWithHITTypeResponse) {
    /**
     * @internal
     */
    CreateHITWithHITTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHITWithHITTypeResponse = exports.CreateHITWithHITTypeResponse || (exports.CreateHITWithHITTypeResponse = {}));
var QualificationTypeStatus;
(function (QualificationTypeStatus) {
    QualificationTypeStatus["Active"] = "Active";
    QualificationTypeStatus["Inactive"] = "Inactive";
})(QualificationTypeStatus = exports.QualificationTypeStatus || (exports.QualificationTypeStatus = {}));
var CreateQualificationTypeRequest;
(function (CreateQualificationTypeRequest) {
    /**
     * @internal
     */
    CreateQualificationTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQualificationTypeRequest = exports.CreateQualificationTypeRequest || (exports.CreateQualificationTypeRequest = {}));
var QualificationType;
(function (QualificationType) {
    /**
     * @internal
     */
    QualificationType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QualificationType = exports.QualificationType || (exports.QualificationType = {}));
var CreateQualificationTypeResponse;
(function (CreateQualificationTypeResponse) {
    /**
     * @internal
     */
    CreateQualificationTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQualificationTypeResponse = exports.CreateQualificationTypeResponse || (exports.CreateQualificationTypeResponse = {}));
var CreateWorkerBlockRequest;
(function (CreateWorkerBlockRequest) {
    /**
     * @internal
     */
    CreateWorkerBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkerBlockRequest = exports.CreateWorkerBlockRequest || (exports.CreateWorkerBlockRequest = {}));
var CreateWorkerBlockResponse;
(function (CreateWorkerBlockResponse) {
    /**
     * @internal
     */
    CreateWorkerBlockResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkerBlockResponse = exports.CreateWorkerBlockResponse || (exports.CreateWorkerBlockResponse = {}));
var DeleteHITRequest;
(function (DeleteHITRequest) {
    /**
     * @internal
     */
    DeleteHITRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHITRequest = exports.DeleteHITRequest || (exports.DeleteHITRequest = {}));
var DeleteHITResponse;
(function (DeleteHITResponse) {
    /**
     * @internal
     */
    DeleteHITResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHITResponse = exports.DeleteHITResponse || (exports.DeleteHITResponse = {}));
var DeleteQualificationTypeRequest;
(function (DeleteQualificationTypeRequest) {
    /**
     * @internal
     */
    DeleteQualificationTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQualificationTypeRequest = exports.DeleteQualificationTypeRequest || (exports.DeleteQualificationTypeRequest = {}));
var DeleteQualificationTypeResponse;
(function (DeleteQualificationTypeResponse) {
    /**
     * @internal
     */
    DeleteQualificationTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQualificationTypeResponse = exports.DeleteQualificationTypeResponse || (exports.DeleteQualificationTypeResponse = {}));
var DeleteWorkerBlockRequest;
(function (DeleteWorkerBlockRequest) {
    /**
     * @internal
     */
    DeleteWorkerBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkerBlockRequest = exports.DeleteWorkerBlockRequest || (exports.DeleteWorkerBlockRequest = {}));
var DeleteWorkerBlockResponse;
(function (DeleteWorkerBlockResponse) {
    /**
     * @internal
     */
    DeleteWorkerBlockResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkerBlockResponse = exports.DeleteWorkerBlockResponse || (exports.DeleteWorkerBlockResponse = {}));
var DisassociateQualificationFromWorkerRequest;
(function (DisassociateQualificationFromWorkerRequest) {
    /**
     * @internal
     */
    DisassociateQualificationFromWorkerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateQualificationFromWorkerRequest = exports.DisassociateQualificationFromWorkerRequest || (exports.DisassociateQualificationFromWorkerRequest = {}));
var DisassociateQualificationFromWorkerResponse;
(function (DisassociateQualificationFromWorkerResponse) {
    /**
     * @internal
     */
    DisassociateQualificationFromWorkerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateQualificationFromWorkerResponse = exports.DisassociateQualificationFromWorkerResponse || (exports.DisassociateQualificationFromWorkerResponse = {}));
var EventType;
(function (EventType) {
    EventType["AssignmentAbandoned"] = "AssignmentAbandoned";
    EventType["AssignmentAccepted"] = "AssignmentAccepted";
    EventType["AssignmentApproved"] = "AssignmentApproved";
    EventType["AssignmentRejected"] = "AssignmentRejected";
    EventType["AssignmentReturned"] = "AssignmentReturned";
    EventType["AssignmentSubmitted"] = "AssignmentSubmitted";
    EventType["HITCreated"] = "HITCreated";
    EventType["HITDisposed"] = "HITDisposed";
    EventType["HITExpired"] = "HITExpired";
    EventType["HITExtended"] = "HITExtended";
    EventType["HITReviewable"] = "HITReviewable";
    EventType["Ping"] = "Ping";
})(EventType = exports.EventType || (exports.EventType = {}));
var GetAccountBalanceRequest;
(function (GetAccountBalanceRequest) {
    /**
     * @internal
     */
    GetAccountBalanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountBalanceRequest = exports.GetAccountBalanceRequest || (exports.GetAccountBalanceRequest = {}));
var GetAccountBalanceResponse;
(function (GetAccountBalanceResponse) {
    /**
     * @internal
     */
    GetAccountBalanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountBalanceResponse = exports.GetAccountBalanceResponse || (exports.GetAccountBalanceResponse = {}));
var GetAssignmentRequest;
(function (GetAssignmentRequest) {
    /**
     * @internal
     */
    GetAssignmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssignmentRequest = exports.GetAssignmentRequest || (exports.GetAssignmentRequest = {}));
var GetAssignmentResponse;
(function (GetAssignmentResponse) {
    /**
     * @internal
     */
    GetAssignmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssignmentResponse = exports.GetAssignmentResponse || (exports.GetAssignmentResponse = {}));
var GetFileUploadURLRequest;
(function (GetFileUploadURLRequest) {
    /**
     * @internal
     */
    GetFileUploadURLRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFileUploadURLRequest = exports.GetFileUploadURLRequest || (exports.GetFileUploadURLRequest = {}));
var GetFileUploadURLResponse;
(function (GetFileUploadURLResponse) {
    /**
     * @internal
     */
    GetFileUploadURLResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFileUploadURLResponse = exports.GetFileUploadURLResponse || (exports.GetFileUploadURLResponse = {}));
var GetHITRequest;
(function (GetHITRequest) {
    /**
     * @internal
     */
    GetHITRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHITRequest = exports.GetHITRequest || (exports.GetHITRequest = {}));
var GetHITResponse;
(function (GetHITResponse) {
    /**
     * @internal
     */
    GetHITResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHITResponse = exports.GetHITResponse || (exports.GetHITResponse = {}));
var GetQualificationScoreRequest;
(function (GetQualificationScoreRequest) {
    /**
     * @internal
     */
    GetQualificationScoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQualificationScoreRequest = exports.GetQualificationScoreRequest || (exports.GetQualificationScoreRequest = {}));
var QualificationStatus;
(function (QualificationStatus) {
    QualificationStatus["Granted"] = "Granted";
    QualificationStatus["Revoked"] = "Revoked";
})(QualificationStatus = exports.QualificationStatus || (exports.QualificationStatus = {}));
var Qualification;
(function (Qualification) {
    /**
     * @internal
     */
    Qualification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Qualification = exports.Qualification || (exports.Qualification = {}));
var GetQualificationScoreResponse;
(function (GetQualificationScoreResponse) {
    /**
     * @internal
     */
    GetQualificationScoreResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQualificationScoreResponse = exports.GetQualificationScoreResponse || (exports.GetQualificationScoreResponse = {}));
var GetQualificationTypeRequest;
(function (GetQualificationTypeRequest) {
    /**
     * @internal
     */
    GetQualificationTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQualificationTypeRequest = exports.GetQualificationTypeRequest || (exports.GetQualificationTypeRequest = {}));
var GetQualificationTypeResponse;
(function (GetQualificationTypeResponse) {
    /**
     * @internal
     */
    GetQualificationTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQualificationTypeResponse = exports.GetQualificationTypeResponse || (exports.GetQualificationTypeResponse = {}));
var ListAssignmentsForHITRequest;
(function (ListAssignmentsForHITRequest) {
    /**
     * @internal
     */
    ListAssignmentsForHITRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssignmentsForHITRequest = exports.ListAssignmentsForHITRequest || (exports.ListAssignmentsForHITRequest = {}));
var ListAssignmentsForHITResponse;
(function (ListAssignmentsForHITResponse) {
    /**
     * @internal
     */
    ListAssignmentsForHITResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssignmentsForHITResponse = exports.ListAssignmentsForHITResponse || (exports.ListAssignmentsForHITResponse = {}));
var ListBonusPaymentsRequest;
(function (ListBonusPaymentsRequest) {
    /**
     * @internal
     */
    ListBonusPaymentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBonusPaymentsRequest = exports.ListBonusPaymentsRequest || (exports.ListBonusPaymentsRequest = {}));
var ListBonusPaymentsResponse;
(function (ListBonusPaymentsResponse) {
    /**
     * @internal
     */
    ListBonusPaymentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBonusPaymentsResponse = exports.ListBonusPaymentsResponse || (exports.ListBonusPaymentsResponse = {}));
var ListHITsRequest;
(function (ListHITsRequest) {
    /**
     * @internal
     */
    ListHITsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHITsRequest = exports.ListHITsRequest || (exports.ListHITsRequest = {}));
var ListHITsResponse;
(function (ListHITsResponse) {
    /**
     * @internal
     */
    ListHITsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHITsResponse = exports.ListHITsResponse || (exports.ListHITsResponse = {}));
var ListHITsForQualificationTypeRequest;
(function (ListHITsForQualificationTypeRequest) {
    /**
     * @internal
     */
    ListHITsForQualificationTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHITsForQualificationTypeRequest = exports.ListHITsForQualificationTypeRequest || (exports.ListHITsForQualificationTypeRequest = {}));
var ListHITsForQualificationTypeResponse;
(function (ListHITsForQualificationTypeResponse) {
    /**
     * @internal
     */
    ListHITsForQualificationTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHITsForQualificationTypeResponse = exports.ListHITsForQualificationTypeResponse || (exports.ListHITsForQualificationTypeResponse = {}));
var ListQualificationRequestsRequest;
(function (ListQualificationRequestsRequest) {
    /**
     * @internal
     */
    ListQualificationRequestsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQualificationRequestsRequest = exports.ListQualificationRequestsRequest || (exports.ListQualificationRequestsRequest = {}));
var QualificationRequest;
(function (QualificationRequest) {
    /**
     * @internal
     */
    QualificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QualificationRequest = exports.QualificationRequest || (exports.QualificationRequest = {}));
var ListQualificationRequestsResponse;
(function (ListQualificationRequestsResponse) {
    /**
     * @internal
     */
    ListQualificationRequestsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQualificationRequestsResponse = exports.ListQualificationRequestsResponse || (exports.ListQualificationRequestsResponse = {}));
var ListQualificationTypesRequest;
(function (ListQualificationTypesRequest) {
    /**
     * @internal
     */
    ListQualificationTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQualificationTypesRequest = exports.ListQualificationTypesRequest || (exports.ListQualificationTypesRequest = {}));
var ListQualificationTypesResponse;
(function (ListQualificationTypesResponse) {
    /**
     * @internal
     */
    ListQualificationTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQualificationTypesResponse = exports.ListQualificationTypesResponse || (exports.ListQualificationTypesResponse = {}));
var ReviewableHITStatus;
(function (ReviewableHITStatus) {
    ReviewableHITStatus["Reviewable"] = "Reviewable";
    ReviewableHITStatus["Reviewing"] = "Reviewing";
})(ReviewableHITStatus = exports.ReviewableHITStatus || (exports.ReviewableHITStatus = {}));
var ListReviewableHITsRequest;
(function (ListReviewableHITsRequest) {
    /**
     * @internal
     */
    ListReviewableHITsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReviewableHITsRequest = exports.ListReviewableHITsRequest || (exports.ListReviewableHITsRequest = {}));
var ListReviewableHITsResponse;
(function (ListReviewableHITsResponse) {
    /**
     * @internal
     */
    ListReviewableHITsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReviewableHITsResponse = exports.ListReviewableHITsResponse || (exports.ListReviewableHITsResponse = {}));
var ReviewPolicyLevel;
(function (ReviewPolicyLevel) {
    ReviewPolicyLevel["Assignment"] = "Assignment";
    ReviewPolicyLevel["HIT"] = "HIT";
})(ReviewPolicyLevel = exports.ReviewPolicyLevel || (exports.ReviewPolicyLevel = {}));
var ListReviewPolicyResultsForHITRequest;
(function (ListReviewPolicyResultsForHITRequest) {
    /**
     * @internal
     */
    ListReviewPolicyResultsForHITRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReviewPolicyResultsForHITRequest = exports.ListReviewPolicyResultsForHITRequest || (exports.ListReviewPolicyResultsForHITRequest = {}));
var ReviewActionStatus;
(function (ReviewActionStatus) {
    ReviewActionStatus["Cancelled"] = "Cancelled";
    ReviewActionStatus["Failed"] = "Failed";
    ReviewActionStatus["Intended"] = "Intended";
    ReviewActionStatus["Succeeded"] = "Succeeded";
})(ReviewActionStatus = exports.ReviewActionStatus || (exports.ReviewActionStatus = {}));
var ReviewActionDetail;
(function (ReviewActionDetail) {
    /**
     * @internal
     */
    ReviewActionDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReviewActionDetail = exports.ReviewActionDetail || (exports.ReviewActionDetail = {}));
var ReviewResultDetail;
(function (ReviewResultDetail) {
    /**
     * @internal
     */
    ReviewResultDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReviewResultDetail = exports.ReviewResultDetail || (exports.ReviewResultDetail = {}));
var ReviewReport;
(function (ReviewReport) {
    /**
     * @internal
     */
    ReviewReport.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReviewReport = exports.ReviewReport || (exports.ReviewReport = {}));
var ListReviewPolicyResultsForHITResponse;
(function (ListReviewPolicyResultsForHITResponse) {
    /**
     * @internal
     */
    ListReviewPolicyResultsForHITResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReviewPolicyResultsForHITResponse = exports.ListReviewPolicyResultsForHITResponse || (exports.ListReviewPolicyResultsForHITResponse = {}));
var ListWorkerBlocksRequest;
(function (ListWorkerBlocksRequest) {
    /**
     * @internal
     */
    ListWorkerBlocksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkerBlocksRequest = exports.ListWorkerBlocksRequest || (exports.ListWorkerBlocksRequest = {}));
var WorkerBlock;
(function (WorkerBlock) {
    /**
     * @internal
     */
    WorkerBlock.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkerBlock = exports.WorkerBlock || (exports.WorkerBlock = {}));
var ListWorkerBlocksResponse;
(function (ListWorkerBlocksResponse) {
    /**
     * @internal
     */
    ListWorkerBlocksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkerBlocksResponse = exports.ListWorkerBlocksResponse || (exports.ListWorkerBlocksResponse = {}));
var ListWorkersWithQualificationTypeRequest;
(function (ListWorkersWithQualificationTypeRequest) {
    /**
     * @internal
     */
    ListWorkersWithQualificationTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkersWithQualificationTypeRequest = exports.ListWorkersWithQualificationTypeRequest || (exports.ListWorkersWithQualificationTypeRequest = {}));
var ListWorkersWithQualificationTypeResponse;
(function (ListWorkersWithQualificationTypeResponse) {
    /**
     * @internal
     */
    ListWorkersWithQualificationTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkersWithQualificationTypeResponse = exports.ListWorkersWithQualificationTypeResponse || (exports.ListWorkersWithQualificationTypeResponse = {}));
var NotifyWorkersRequest;
(function (NotifyWorkersRequest) {
    /**
     * @internal
     */
    NotifyWorkersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyWorkersRequest = exports.NotifyWorkersRequest || (exports.NotifyWorkersRequest = {}));
var NotifyWorkersFailureCode;
(function (NotifyWorkersFailureCode) {
    NotifyWorkersFailureCode["HardFailure"] = "HardFailure";
    NotifyWorkersFailureCode["SoftFailure"] = "SoftFailure";
})(NotifyWorkersFailureCode = exports.NotifyWorkersFailureCode || (exports.NotifyWorkersFailureCode = {}));
var NotifyWorkersFailureStatus;
(function (NotifyWorkersFailureStatus) {
    /**
     * @internal
     */
    NotifyWorkersFailureStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyWorkersFailureStatus = exports.NotifyWorkersFailureStatus || (exports.NotifyWorkersFailureStatus = {}));
var NotifyWorkersResponse;
(function (NotifyWorkersResponse) {
    /**
     * @internal
     */
    NotifyWorkersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyWorkersResponse = exports.NotifyWorkersResponse || (exports.NotifyWorkersResponse = {}));
var RejectAssignmentRequest;
(function (RejectAssignmentRequest) {
    /**
     * @internal
     */
    RejectAssignmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectAssignmentRequest = exports.RejectAssignmentRequest || (exports.RejectAssignmentRequest = {}));
var RejectAssignmentResponse;
(function (RejectAssignmentResponse) {
    /**
     * @internal
     */
    RejectAssignmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectAssignmentResponse = exports.RejectAssignmentResponse || (exports.RejectAssignmentResponse = {}));
var RejectQualificationRequestRequest;
(function (RejectQualificationRequestRequest) {
    /**
     * @internal
     */
    RejectQualificationRequestRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectQualificationRequestRequest = exports.RejectQualificationRequestRequest || (exports.RejectQualificationRequestRequest = {}));
var RejectQualificationRequestResponse;
(function (RejectQualificationRequestResponse) {
    /**
     * @internal
     */
    RejectQualificationRequestResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectQualificationRequestResponse = exports.RejectQualificationRequestResponse || (exports.RejectQualificationRequestResponse = {}));
var SendBonusRequest;
(function (SendBonusRequest) {
    /**
     * @internal
     */
    SendBonusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendBonusRequest = exports.SendBonusRequest || (exports.SendBonusRequest = {}));
var SendBonusResponse;
(function (SendBonusResponse) {
    /**
     * @internal
     */
    SendBonusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendBonusResponse = exports.SendBonusResponse || (exports.SendBonusResponse = {}));
var NotificationTransport;
(function (NotificationTransport) {
    NotificationTransport["Email"] = "Email";
    NotificationTransport["SNS"] = "SNS";
    NotificationTransport["SQS"] = "SQS";
})(NotificationTransport = exports.NotificationTransport || (exports.NotificationTransport = {}));
var NotificationSpecification;
(function (NotificationSpecification) {
    /**
     * @internal
     */
    NotificationSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationSpecification = exports.NotificationSpecification || (exports.NotificationSpecification = {}));
var SendTestEventNotificationRequest;
(function (SendTestEventNotificationRequest) {
    /**
     * @internal
     */
    SendTestEventNotificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendTestEventNotificationRequest = exports.SendTestEventNotificationRequest || (exports.SendTestEventNotificationRequest = {}));
var SendTestEventNotificationResponse;
(function (SendTestEventNotificationResponse) {
    /**
     * @internal
     */
    SendTestEventNotificationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendTestEventNotificationResponse = exports.SendTestEventNotificationResponse || (exports.SendTestEventNotificationResponse = {}));
var UpdateExpirationForHITRequest;
(function (UpdateExpirationForHITRequest) {
    /**
     * @internal
     */
    UpdateExpirationForHITRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateExpirationForHITRequest = exports.UpdateExpirationForHITRequest || (exports.UpdateExpirationForHITRequest = {}));
var UpdateExpirationForHITResponse;
(function (UpdateExpirationForHITResponse) {
    /**
     * @internal
     */
    UpdateExpirationForHITResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateExpirationForHITResponse = exports.UpdateExpirationForHITResponse || (exports.UpdateExpirationForHITResponse = {}));
var UpdateHITReviewStatusRequest;
(function (UpdateHITReviewStatusRequest) {
    /**
     * @internal
     */
    UpdateHITReviewStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateHITReviewStatusRequest = exports.UpdateHITReviewStatusRequest || (exports.UpdateHITReviewStatusRequest = {}));
var UpdateHITReviewStatusResponse;
(function (UpdateHITReviewStatusResponse) {
    /**
     * @internal
     */
    UpdateHITReviewStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateHITReviewStatusResponse = exports.UpdateHITReviewStatusResponse || (exports.UpdateHITReviewStatusResponse = {}));
var UpdateHITTypeOfHITRequest;
(function (UpdateHITTypeOfHITRequest) {
    /**
     * @internal
     */
    UpdateHITTypeOfHITRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateHITTypeOfHITRequest = exports.UpdateHITTypeOfHITRequest || (exports.UpdateHITTypeOfHITRequest = {}));
var UpdateHITTypeOfHITResponse;
(function (UpdateHITTypeOfHITResponse) {
    /**
     * @internal
     */
    UpdateHITTypeOfHITResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateHITTypeOfHITResponse = exports.UpdateHITTypeOfHITResponse || (exports.UpdateHITTypeOfHITResponse = {}));
var UpdateNotificationSettingsRequest;
(function (UpdateNotificationSettingsRequest) {
    /**
     * @internal
     */
    UpdateNotificationSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNotificationSettingsRequest = exports.UpdateNotificationSettingsRequest || (exports.UpdateNotificationSettingsRequest = {}));
var UpdateNotificationSettingsResponse;
(function (UpdateNotificationSettingsResponse) {
    /**
     * @internal
     */
    UpdateNotificationSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNotificationSettingsResponse = exports.UpdateNotificationSettingsResponse || (exports.UpdateNotificationSettingsResponse = {}));
var UpdateQualificationTypeRequest;
(function (UpdateQualificationTypeRequest) {
    /**
     * @internal
     */
    UpdateQualificationTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQualificationTypeRequest = exports.UpdateQualificationTypeRequest || (exports.UpdateQualificationTypeRequest = {}));
var UpdateQualificationTypeResponse;
(function (UpdateQualificationTypeResponse) {
    /**
     * @internal
     */
    UpdateQualificationTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQualificationTypeResponse = exports.UpdateQualificationTypeResponse || (exports.UpdateQualificationTypeResponse = {}));
//# sourceMappingURL=models_0.js.map