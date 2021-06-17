"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateS3ResourcesResult = exports.UpdateS3ResourcesRequest = exports.S3ResourceClassificationUpdate = exports.ListS3ResourcesResult = exports.ListS3ResourcesRequest = exports.ListMemberAccountsResult = exports.MemberAccount = exports.ListMemberAccountsRequest = exports.DisassociateS3ResourcesResult = exports.DisassociateS3ResourcesRequest = exports.DisassociateMemberAccountRequest = exports.ClassificationTypeUpdate = exports.AssociateS3ResourcesResult = exports.FailedS3Resource = exports.S3Resource = exports.AssociateS3ResourcesRequest = exports.S3ResourceClassification = exports.ClassificationType = exports.S3OneTimeClassificationType = exports.S3ContinuousClassificationType = exports.LimitExceededException = exports.InvalidInputException = exports.InternalException = exports.AssociateMemberAccountRequest = exports.AccessDeniedException = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AssociateMemberAccountRequest;
(function (AssociateMemberAccountRequest) {
    /**
     * @internal
     */
    AssociateMemberAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateMemberAccountRequest = exports.AssociateMemberAccountRequest || (exports.AssociateMemberAccountRequest = {}));
var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalException = exports.InternalException || (exports.InternalException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var S3ContinuousClassificationType;
(function (S3ContinuousClassificationType) {
    S3ContinuousClassificationType["FULL"] = "FULL";
})(S3ContinuousClassificationType = exports.S3ContinuousClassificationType || (exports.S3ContinuousClassificationType = {}));
var S3OneTimeClassificationType;
(function (S3OneTimeClassificationType) {
    S3OneTimeClassificationType["FULL"] = "FULL";
    S3OneTimeClassificationType["NONE"] = "NONE";
})(S3OneTimeClassificationType = exports.S3OneTimeClassificationType || (exports.S3OneTimeClassificationType = {}));
var ClassificationType;
(function (ClassificationType) {
    /**
     * @internal
     */
    ClassificationType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassificationType = exports.ClassificationType || (exports.ClassificationType = {}));
var S3ResourceClassification;
(function (S3ResourceClassification) {
    /**
     * @internal
     */
    S3ResourceClassification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ResourceClassification = exports.S3ResourceClassification || (exports.S3ResourceClassification = {}));
var AssociateS3ResourcesRequest;
(function (AssociateS3ResourcesRequest) {
    /**
     * @internal
     */
    AssociateS3ResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateS3ResourcesRequest = exports.AssociateS3ResourcesRequest || (exports.AssociateS3ResourcesRequest = {}));
var S3Resource;
(function (S3Resource) {
    /**
     * @internal
     */
    S3Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Resource = exports.S3Resource || (exports.S3Resource = {}));
var FailedS3Resource;
(function (FailedS3Resource) {
    /**
     * @internal
     */
    FailedS3Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedS3Resource = exports.FailedS3Resource || (exports.FailedS3Resource = {}));
var AssociateS3ResourcesResult;
(function (AssociateS3ResourcesResult) {
    /**
     * @internal
     */
    AssociateS3ResourcesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateS3ResourcesResult = exports.AssociateS3ResourcesResult || (exports.AssociateS3ResourcesResult = {}));
var ClassificationTypeUpdate;
(function (ClassificationTypeUpdate) {
    /**
     * @internal
     */
    ClassificationTypeUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassificationTypeUpdate = exports.ClassificationTypeUpdate || (exports.ClassificationTypeUpdate = {}));
var DisassociateMemberAccountRequest;
(function (DisassociateMemberAccountRequest) {
    /**
     * @internal
     */
    DisassociateMemberAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateMemberAccountRequest = exports.DisassociateMemberAccountRequest || (exports.DisassociateMemberAccountRequest = {}));
var DisassociateS3ResourcesRequest;
(function (DisassociateS3ResourcesRequest) {
    /**
     * @internal
     */
    DisassociateS3ResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateS3ResourcesRequest = exports.DisassociateS3ResourcesRequest || (exports.DisassociateS3ResourcesRequest = {}));
var DisassociateS3ResourcesResult;
(function (DisassociateS3ResourcesResult) {
    /**
     * @internal
     */
    DisassociateS3ResourcesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateS3ResourcesResult = exports.DisassociateS3ResourcesResult || (exports.DisassociateS3ResourcesResult = {}));
var ListMemberAccountsRequest;
(function (ListMemberAccountsRequest) {
    /**
     * @internal
     */
    ListMemberAccountsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMemberAccountsRequest = exports.ListMemberAccountsRequest || (exports.ListMemberAccountsRequest = {}));
var MemberAccount;
(function (MemberAccount) {
    /**
     * @internal
     */
    MemberAccount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MemberAccount = exports.MemberAccount || (exports.MemberAccount = {}));
var ListMemberAccountsResult;
(function (ListMemberAccountsResult) {
    /**
     * @internal
     */
    ListMemberAccountsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMemberAccountsResult = exports.ListMemberAccountsResult || (exports.ListMemberAccountsResult = {}));
var ListS3ResourcesRequest;
(function (ListS3ResourcesRequest) {
    /**
     * @internal
     */
    ListS3ResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListS3ResourcesRequest = exports.ListS3ResourcesRequest || (exports.ListS3ResourcesRequest = {}));
var ListS3ResourcesResult;
(function (ListS3ResourcesResult) {
    /**
     * @internal
     */
    ListS3ResourcesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListS3ResourcesResult = exports.ListS3ResourcesResult || (exports.ListS3ResourcesResult = {}));
var S3ResourceClassificationUpdate;
(function (S3ResourceClassificationUpdate) {
    /**
     * @internal
     */
    S3ResourceClassificationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ResourceClassificationUpdate = exports.S3ResourceClassificationUpdate || (exports.S3ResourceClassificationUpdate = {}));
var UpdateS3ResourcesRequest;
(function (UpdateS3ResourcesRequest) {
    /**
     * @internal
     */
    UpdateS3ResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateS3ResourcesRequest = exports.UpdateS3ResourcesRequest || (exports.UpdateS3ResourcesRequest = {}));
var UpdateS3ResourcesResult;
(function (UpdateS3ResourcesResult) {
    /**
     * @internal
     */
    UpdateS3ResourcesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateS3ResourcesResult = exports.UpdateS3ResourcesResult || (exports.UpdateS3ResourcesResult = {}));
//# sourceMappingURL=models_0.js.map