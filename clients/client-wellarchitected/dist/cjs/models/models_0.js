"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LensReviewSummary = exports.ImprovementSummary = exports.GetWorkloadOutput = exports.GetWorkloadInput = exports.GetMilestoneOutput = exports.Milestone = exports.Workload = exports.WorkloadImprovementStatus = exports.GetMilestoneInput = exports.GetLensVersionDifferenceOutput = exports.VersionDifferences = exports.PillarDifference = exports.QuestionDifference = exports.GetLensVersionDifferenceInput = exports.GetLensReviewReportOutput = exports.LensReviewReport = exports.GetLensReviewReportInput = exports.GetLensReviewOutput = exports.LensReview = exports.PillarReviewSummary = exports.LensStatus = exports.GetLensReviewInput = exports.GetAnswerOutput = exports.GetAnswerInput = exports.DisassociateLensesInput = exports.DifferenceStatus = exports.DeleteWorkloadShareInput = exports.DeleteWorkloadInput = exports.CreateWorkloadShareOutput = exports.CreateWorkloadShareInput = exports.PermissionType = exports.CreateWorkloadOutput = exports.CreateWorkloadInput = exports.WorkloadEnvironment = exports.ServiceQuotaExceededException = exports.CreateMilestoneOutput = exports.CreateMilestoneInput = exports.ValidationException = exports.ValidationExceptionReason = exports.ValidationExceptionField = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.AssociateLensesInput = exports.AnswerSummary = exports.Answer = exports.Risk = exports.Choice = exports.AccessDeniedException = void 0;
exports.UpgradeLensReviewInput = exports.UpdateWorkloadShareOutput = exports.WorkloadShare = exports.UpdateWorkloadShareInput = exports.UpdateWorkloadOutput = exports.UpdateWorkloadInput = exports.UpdateShareInvitationOutput = exports.UpdateShareInvitationInput = exports.UpdateLensReviewOutput = exports.UpdateLensReviewInput = exports.UpdateAnswerOutput = exports.UpdateAnswerInput = exports.UntagResourceOutput = exports.UntagResourceInput = exports.TagResourceOutput = exports.TagResourceInput = exports.ShareInvitationAction = exports.ShareInvitation = exports.ListWorkloadSharesOutput = exports.WorkloadShareSummary = exports.ShareStatus = exports.ListWorkloadSharesInput = exports.ListWorkloadsOutput = exports.ListWorkloadsInput = exports.ListTagsForResourceOutput = exports.ListTagsForResourceInput = exports.ListShareInvitationsOutput = exports.ShareInvitationSummary = exports.ListShareInvitationsInput = exports.ListNotificationsOutput = exports.NotificationSummary = exports.NotificationType = exports.ListNotificationsInput = exports.ListMilestonesOutput = exports.MilestoneSummary = exports.WorkloadSummary = exports.ListMilestonesInput = exports.ListLensReviewsOutput = exports.ListLensReviewsInput = exports.ListLensReviewImprovementsOutput = exports.ListLensReviewImprovementsInput = exports.ListLensesOutput = exports.ListLensesInput = exports.ListAnswersOutput = exports.ListAnswersInput = exports.LensUpgradeSummary = exports.LensSummary = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var Choice;
(function (Choice) {
    /**
     * @internal
     */
    Choice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Choice = exports.Choice || (exports.Choice = {}));
var Risk;
(function (Risk) {
    Risk["HIGH"] = "HIGH";
    Risk["MEDIUM"] = "MEDIUM";
    Risk["NONE"] = "NONE";
    Risk["NOT_APPLICABLE"] = "NOT_APPLICABLE";
    Risk["UNANSWERED"] = "UNANSWERED";
})(Risk = exports.Risk || (exports.Risk = {}));
var Answer;
(function (Answer) {
    /**
     * @internal
     */
    Answer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Answer = exports.Answer || (exports.Answer = {}));
var AnswerSummary;
(function (AnswerSummary) {
    /**
     * @internal
     */
    AnswerSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnswerSummary = exports.AnswerSummary || (exports.AnswerSummary = {}));
var AssociateLensesInput;
(function (AssociateLensesInput) {
    /**
     * @internal
     */
    AssociateLensesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateLensesInput = exports.AssociateLensesInput || (exports.AssociateLensesInput = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
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
var CreateMilestoneInput;
(function (CreateMilestoneInput) {
    /**
     * @internal
     */
    CreateMilestoneInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMilestoneInput = exports.CreateMilestoneInput || (exports.CreateMilestoneInput = {}));
var CreateMilestoneOutput;
(function (CreateMilestoneOutput) {
    /**
     * @internal
     */
    CreateMilestoneOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMilestoneOutput = exports.CreateMilestoneOutput || (exports.CreateMilestoneOutput = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var WorkloadEnvironment;
(function (WorkloadEnvironment) {
    WorkloadEnvironment["PREPRODUCTION"] = "PREPRODUCTION";
    WorkloadEnvironment["PRODUCTION"] = "PRODUCTION";
})(WorkloadEnvironment = exports.WorkloadEnvironment || (exports.WorkloadEnvironment = {}));
var CreateWorkloadInput;
(function (CreateWorkloadInput) {
    /**
     * @internal
     */
    CreateWorkloadInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkloadInput = exports.CreateWorkloadInput || (exports.CreateWorkloadInput = {}));
var CreateWorkloadOutput;
(function (CreateWorkloadOutput) {
    /**
     * @internal
     */
    CreateWorkloadOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkloadOutput = exports.CreateWorkloadOutput || (exports.CreateWorkloadOutput = {}));
var PermissionType;
(function (PermissionType) {
    PermissionType["CONTRIBUTOR"] = "CONTRIBUTOR";
    PermissionType["READONLY"] = "READONLY";
})(PermissionType = exports.PermissionType || (exports.PermissionType = {}));
var CreateWorkloadShareInput;
(function (CreateWorkloadShareInput) {
    /**
     * @internal
     */
    CreateWorkloadShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkloadShareInput = exports.CreateWorkloadShareInput || (exports.CreateWorkloadShareInput = {}));
var CreateWorkloadShareOutput;
(function (CreateWorkloadShareOutput) {
    /**
     * @internal
     */
    CreateWorkloadShareOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkloadShareOutput = exports.CreateWorkloadShareOutput || (exports.CreateWorkloadShareOutput = {}));
var DeleteWorkloadInput;
(function (DeleteWorkloadInput) {
    /**
     * @internal
     */
    DeleteWorkloadInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkloadInput = exports.DeleteWorkloadInput || (exports.DeleteWorkloadInput = {}));
var DeleteWorkloadShareInput;
(function (DeleteWorkloadShareInput) {
    /**
     * @internal
     */
    DeleteWorkloadShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkloadShareInput = exports.DeleteWorkloadShareInput || (exports.DeleteWorkloadShareInput = {}));
var DifferenceStatus;
(function (DifferenceStatus) {
    DifferenceStatus["DELETED"] = "DELETED";
    DifferenceStatus["NEW"] = "NEW";
    DifferenceStatus["UPDATED"] = "UPDATED";
})(DifferenceStatus = exports.DifferenceStatus || (exports.DifferenceStatus = {}));
var DisassociateLensesInput;
(function (DisassociateLensesInput) {
    /**
     * @internal
     */
    DisassociateLensesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateLensesInput = exports.DisassociateLensesInput || (exports.DisassociateLensesInput = {}));
var GetAnswerInput;
(function (GetAnswerInput) {
    /**
     * @internal
     */
    GetAnswerInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAnswerInput = exports.GetAnswerInput || (exports.GetAnswerInput = {}));
var GetAnswerOutput;
(function (GetAnswerOutput) {
    /**
     * @internal
     */
    GetAnswerOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAnswerOutput = exports.GetAnswerOutput || (exports.GetAnswerOutput = {}));
var GetLensReviewInput;
(function (GetLensReviewInput) {
    /**
     * @internal
     */
    GetLensReviewInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLensReviewInput = exports.GetLensReviewInput || (exports.GetLensReviewInput = {}));
var LensStatus;
(function (LensStatus) {
    LensStatus["CURRENT"] = "CURRENT";
    LensStatus["DEPRECATED"] = "DEPRECATED";
    LensStatus["NOT_CURRENT"] = "NOT_CURRENT";
})(LensStatus = exports.LensStatus || (exports.LensStatus = {}));
var PillarReviewSummary;
(function (PillarReviewSummary) {
    /**
     * @internal
     */
    PillarReviewSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PillarReviewSummary = exports.PillarReviewSummary || (exports.PillarReviewSummary = {}));
var LensReview;
(function (LensReview) {
    /**
     * @internal
     */
    LensReview.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LensReview = exports.LensReview || (exports.LensReview = {}));
var GetLensReviewOutput;
(function (GetLensReviewOutput) {
    /**
     * @internal
     */
    GetLensReviewOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLensReviewOutput = exports.GetLensReviewOutput || (exports.GetLensReviewOutput = {}));
var GetLensReviewReportInput;
(function (GetLensReviewReportInput) {
    /**
     * @internal
     */
    GetLensReviewReportInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLensReviewReportInput = exports.GetLensReviewReportInput || (exports.GetLensReviewReportInput = {}));
var LensReviewReport;
(function (LensReviewReport) {
    /**
     * @internal
     */
    LensReviewReport.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LensReviewReport = exports.LensReviewReport || (exports.LensReviewReport = {}));
var GetLensReviewReportOutput;
(function (GetLensReviewReportOutput) {
    /**
     * @internal
     */
    GetLensReviewReportOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLensReviewReportOutput = exports.GetLensReviewReportOutput || (exports.GetLensReviewReportOutput = {}));
var GetLensVersionDifferenceInput;
(function (GetLensVersionDifferenceInput) {
    /**
     * @internal
     */
    GetLensVersionDifferenceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLensVersionDifferenceInput = exports.GetLensVersionDifferenceInput || (exports.GetLensVersionDifferenceInput = {}));
var QuestionDifference;
(function (QuestionDifference) {
    /**
     * @internal
     */
    QuestionDifference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QuestionDifference = exports.QuestionDifference || (exports.QuestionDifference = {}));
var PillarDifference;
(function (PillarDifference) {
    /**
     * @internal
     */
    PillarDifference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PillarDifference = exports.PillarDifference || (exports.PillarDifference = {}));
var VersionDifferences;
(function (VersionDifferences) {
    /**
     * @internal
     */
    VersionDifferences.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VersionDifferences = exports.VersionDifferences || (exports.VersionDifferences = {}));
var GetLensVersionDifferenceOutput;
(function (GetLensVersionDifferenceOutput) {
    /**
     * @internal
     */
    GetLensVersionDifferenceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLensVersionDifferenceOutput = exports.GetLensVersionDifferenceOutput || (exports.GetLensVersionDifferenceOutput = {}));
var GetMilestoneInput;
(function (GetMilestoneInput) {
    /**
     * @internal
     */
    GetMilestoneInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMilestoneInput = exports.GetMilestoneInput || (exports.GetMilestoneInput = {}));
var WorkloadImprovementStatus;
(function (WorkloadImprovementStatus) {
    WorkloadImprovementStatus["COMPLETE"] = "COMPLETE";
    WorkloadImprovementStatus["IN_PROGRESS"] = "IN_PROGRESS";
    WorkloadImprovementStatus["NOT_APPLICABLE"] = "NOT_APPLICABLE";
    WorkloadImprovementStatus["NOT_STARTED"] = "NOT_STARTED";
    WorkloadImprovementStatus["RISK_ACKNOWLEDGED"] = "RISK_ACKNOWLEDGED";
})(WorkloadImprovementStatus = exports.WorkloadImprovementStatus || (exports.WorkloadImprovementStatus = {}));
var Workload;
(function (Workload) {
    /**
     * @internal
     */
    Workload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Workload = exports.Workload || (exports.Workload = {}));
var Milestone;
(function (Milestone) {
    /**
     * @internal
     */
    Milestone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Milestone = exports.Milestone || (exports.Milestone = {}));
var GetMilestoneOutput;
(function (GetMilestoneOutput) {
    /**
     * @internal
     */
    GetMilestoneOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMilestoneOutput = exports.GetMilestoneOutput || (exports.GetMilestoneOutput = {}));
var GetWorkloadInput;
(function (GetWorkloadInput) {
    /**
     * @internal
     */
    GetWorkloadInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkloadInput = exports.GetWorkloadInput || (exports.GetWorkloadInput = {}));
var GetWorkloadOutput;
(function (GetWorkloadOutput) {
    /**
     * @internal
     */
    GetWorkloadOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkloadOutput = exports.GetWorkloadOutput || (exports.GetWorkloadOutput = {}));
var ImprovementSummary;
(function (ImprovementSummary) {
    /**
     * @internal
     */
    ImprovementSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImprovementSummary = exports.ImprovementSummary || (exports.ImprovementSummary = {}));
var LensReviewSummary;
(function (LensReviewSummary) {
    /**
     * @internal
     */
    LensReviewSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LensReviewSummary = exports.LensReviewSummary || (exports.LensReviewSummary = {}));
var LensSummary;
(function (LensSummary) {
    /**
     * @internal
     */
    LensSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LensSummary = exports.LensSummary || (exports.LensSummary = {}));
var LensUpgradeSummary;
(function (LensUpgradeSummary) {
    /**
     * @internal
     */
    LensUpgradeSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LensUpgradeSummary = exports.LensUpgradeSummary || (exports.LensUpgradeSummary = {}));
var ListAnswersInput;
(function (ListAnswersInput) {
    /**
     * @internal
     */
    ListAnswersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAnswersInput = exports.ListAnswersInput || (exports.ListAnswersInput = {}));
var ListAnswersOutput;
(function (ListAnswersOutput) {
    /**
     * @internal
     */
    ListAnswersOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAnswersOutput = exports.ListAnswersOutput || (exports.ListAnswersOutput = {}));
var ListLensesInput;
(function (ListLensesInput) {
    /**
     * @internal
     */
    ListLensesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLensesInput = exports.ListLensesInput || (exports.ListLensesInput = {}));
var ListLensesOutput;
(function (ListLensesOutput) {
    /**
     * @internal
     */
    ListLensesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLensesOutput = exports.ListLensesOutput || (exports.ListLensesOutput = {}));
var ListLensReviewImprovementsInput;
(function (ListLensReviewImprovementsInput) {
    /**
     * @internal
     */
    ListLensReviewImprovementsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLensReviewImprovementsInput = exports.ListLensReviewImprovementsInput || (exports.ListLensReviewImprovementsInput = {}));
var ListLensReviewImprovementsOutput;
(function (ListLensReviewImprovementsOutput) {
    /**
     * @internal
     */
    ListLensReviewImprovementsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLensReviewImprovementsOutput = exports.ListLensReviewImprovementsOutput || (exports.ListLensReviewImprovementsOutput = {}));
var ListLensReviewsInput;
(function (ListLensReviewsInput) {
    /**
     * @internal
     */
    ListLensReviewsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLensReviewsInput = exports.ListLensReviewsInput || (exports.ListLensReviewsInput = {}));
var ListLensReviewsOutput;
(function (ListLensReviewsOutput) {
    /**
     * @internal
     */
    ListLensReviewsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLensReviewsOutput = exports.ListLensReviewsOutput || (exports.ListLensReviewsOutput = {}));
var ListMilestonesInput;
(function (ListMilestonesInput) {
    /**
     * @internal
     */
    ListMilestonesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMilestonesInput = exports.ListMilestonesInput || (exports.ListMilestonesInput = {}));
var WorkloadSummary;
(function (WorkloadSummary) {
    /**
     * @internal
     */
    WorkloadSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkloadSummary = exports.WorkloadSummary || (exports.WorkloadSummary = {}));
var MilestoneSummary;
(function (MilestoneSummary) {
    /**
     * @internal
     */
    MilestoneSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MilestoneSummary = exports.MilestoneSummary || (exports.MilestoneSummary = {}));
var ListMilestonesOutput;
(function (ListMilestonesOutput) {
    /**
     * @internal
     */
    ListMilestonesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMilestonesOutput = exports.ListMilestonesOutput || (exports.ListMilestonesOutput = {}));
var ListNotificationsInput;
(function (ListNotificationsInput) {
    /**
     * @internal
     */
    ListNotificationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotificationsInput = exports.ListNotificationsInput || (exports.ListNotificationsInput = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["LENS_VERSION_DEPRECATED"] = "LENS_VERSION_DEPRECATED";
    NotificationType["LENS_VERSION_UPGRADED"] = "LENS_VERSION_UPGRADED";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
var NotificationSummary;
(function (NotificationSummary) {
    /**
     * @internal
     */
    NotificationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationSummary = exports.NotificationSummary || (exports.NotificationSummary = {}));
var ListNotificationsOutput;
(function (ListNotificationsOutput) {
    /**
     * @internal
     */
    ListNotificationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotificationsOutput = exports.ListNotificationsOutput || (exports.ListNotificationsOutput = {}));
var ListShareInvitationsInput;
(function (ListShareInvitationsInput) {
    /**
     * @internal
     */
    ListShareInvitationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListShareInvitationsInput = exports.ListShareInvitationsInput || (exports.ListShareInvitationsInput = {}));
var ShareInvitationSummary;
(function (ShareInvitationSummary) {
    /**
     * @internal
     */
    ShareInvitationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShareInvitationSummary = exports.ShareInvitationSummary || (exports.ShareInvitationSummary = {}));
var ListShareInvitationsOutput;
(function (ListShareInvitationsOutput) {
    /**
     * @internal
     */
    ListShareInvitationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListShareInvitationsOutput = exports.ListShareInvitationsOutput || (exports.ListShareInvitationsOutput = {}));
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
var ListWorkloadsInput;
(function (ListWorkloadsInput) {
    /**
     * @internal
     */
    ListWorkloadsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkloadsInput = exports.ListWorkloadsInput || (exports.ListWorkloadsInput = {}));
var ListWorkloadsOutput;
(function (ListWorkloadsOutput) {
    /**
     * @internal
     */
    ListWorkloadsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkloadsOutput = exports.ListWorkloadsOutput || (exports.ListWorkloadsOutput = {}));
var ListWorkloadSharesInput;
(function (ListWorkloadSharesInput) {
    /**
     * @internal
     */
    ListWorkloadSharesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkloadSharesInput = exports.ListWorkloadSharesInput || (exports.ListWorkloadSharesInput = {}));
var ShareStatus;
(function (ShareStatus) {
    ShareStatus["ACCEPTED"] = "ACCEPTED";
    ShareStatus["EXPIRED"] = "EXPIRED";
    ShareStatus["PENDING"] = "PENDING";
    ShareStatus["REJECTED"] = "REJECTED";
    ShareStatus["REVOKED"] = "REVOKED";
})(ShareStatus = exports.ShareStatus || (exports.ShareStatus = {}));
var WorkloadShareSummary;
(function (WorkloadShareSummary) {
    /**
     * @internal
     */
    WorkloadShareSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkloadShareSummary = exports.WorkloadShareSummary || (exports.WorkloadShareSummary = {}));
var ListWorkloadSharesOutput;
(function (ListWorkloadSharesOutput) {
    /**
     * @internal
     */
    ListWorkloadSharesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkloadSharesOutput = exports.ListWorkloadSharesOutput || (exports.ListWorkloadSharesOutput = {}));
var ShareInvitation;
(function (ShareInvitation) {
    /**
     * @internal
     */
    ShareInvitation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShareInvitation = exports.ShareInvitation || (exports.ShareInvitation = {}));
var ShareInvitationAction;
(function (ShareInvitationAction) {
    ShareInvitationAction["ACCEPT"] = "ACCEPT";
    ShareInvitationAction["REJECT"] = "REJECT";
})(ShareInvitationAction = exports.ShareInvitationAction || (exports.ShareInvitationAction = {}));
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
var UpdateAnswerInput;
(function (UpdateAnswerInput) {
    /**
     * @internal
     */
    UpdateAnswerInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAnswerInput = exports.UpdateAnswerInput || (exports.UpdateAnswerInput = {}));
var UpdateAnswerOutput;
(function (UpdateAnswerOutput) {
    /**
     * @internal
     */
    UpdateAnswerOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAnswerOutput = exports.UpdateAnswerOutput || (exports.UpdateAnswerOutput = {}));
var UpdateLensReviewInput;
(function (UpdateLensReviewInput) {
    /**
     * @internal
     */
    UpdateLensReviewInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLensReviewInput = exports.UpdateLensReviewInput || (exports.UpdateLensReviewInput = {}));
var UpdateLensReviewOutput;
(function (UpdateLensReviewOutput) {
    /**
     * @internal
     */
    UpdateLensReviewOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLensReviewOutput = exports.UpdateLensReviewOutput || (exports.UpdateLensReviewOutput = {}));
var UpdateShareInvitationInput;
(function (UpdateShareInvitationInput) {
    /**
     * @internal
     */
    UpdateShareInvitationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateShareInvitationInput = exports.UpdateShareInvitationInput || (exports.UpdateShareInvitationInput = {}));
var UpdateShareInvitationOutput;
(function (UpdateShareInvitationOutput) {
    /**
     * @internal
     */
    UpdateShareInvitationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateShareInvitationOutput = exports.UpdateShareInvitationOutput || (exports.UpdateShareInvitationOutput = {}));
var UpdateWorkloadInput;
(function (UpdateWorkloadInput) {
    /**
     * @internal
     */
    UpdateWorkloadInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkloadInput = exports.UpdateWorkloadInput || (exports.UpdateWorkloadInput = {}));
var UpdateWorkloadOutput;
(function (UpdateWorkloadOutput) {
    /**
     * @internal
     */
    UpdateWorkloadOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkloadOutput = exports.UpdateWorkloadOutput || (exports.UpdateWorkloadOutput = {}));
var UpdateWorkloadShareInput;
(function (UpdateWorkloadShareInput) {
    /**
     * @internal
     */
    UpdateWorkloadShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkloadShareInput = exports.UpdateWorkloadShareInput || (exports.UpdateWorkloadShareInput = {}));
var WorkloadShare;
(function (WorkloadShare) {
    /**
     * @internal
     */
    WorkloadShare.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkloadShare = exports.WorkloadShare || (exports.WorkloadShare = {}));
var UpdateWorkloadShareOutput;
(function (UpdateWorkloadShareOutput) {
    /**
     * @internal
     */
    UpdateWorkloadShareOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkloadShareOutput = exports.UpdateWorkloadShareOutput || (exports.UpdateWorkloadShareOutput = {}));
var UpgradeLensReviewInput;
(function (UpgradeLensReviewInput) {
    /**
     * @internal
     */
    UpgradeLensReviewInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpgradeLensReviewInput = exports.UpgradeLensReviewInput || (exports.UpgradeLensReviewInput = {}));
//# sourceMappingURL=models_0.js.map