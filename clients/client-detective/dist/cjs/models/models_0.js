"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StartMonitoringMemberRequest = exports.RejectInvitationRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListMembersResponse = exports.ListMembersRequest = exports.ListInvitationsResponse = exports.ListInvitationsRequest = exports.ListGraphsResponse = exports.Graph = exports.ListGraphsRequest = exports.GetMembersResponse = exports.GetMembersRequest = exports.DisassociateMembershipRequest = exports.DeleteMembersResponse = exports.DeleteMembersRequest = exports.DeleteGraphRequest = exports.CreateMembersResponse = exports.UnprocessedAccount = exports.MemberDetail = exports.MemberStatus = exports.MemberDisabledReason = exports.CreateMembersRequest = exports.ServiceQuotaExceededException = exports.CreateGraphResponse = exports.CreateGraphRequest = exports.Account = exports.ValidationException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.AcceptInvitationRequest = void 0;
var AcceptInvitationRequest;
(function (AcceptInvitationRequest) {
    /**
     * @internal
     */
    AcceptInvitationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptInvitationRequest = exports.AcceptInvitationRequest || (exports.AcceptInvitationRequest = {}));
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
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var Account;
(function (Account) {
    /**
     * @internal
     */
    Account.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Account = exports.Account || (exports.Account = {}));
var CreateGraphRequest;
(function (CreateGraphRequest) {
    /**
     * @internal
     */
    CreateGraphRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGraphRequest = exports.CreateGraphRequest || (exports.CreateGraphRequest = {}));
var CreateGraphResponse;
(function (CreateGraphResponse) {
    /**
     * @internal
     */
    CreateGraphResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGraphResponse = exports.CreateGraphResponse || (exports.CreateGraphResponse = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var CreateMembersRequest;
(function (CreateMembersRequest) {
    /**
     * @internal
     */
    CreateMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMembersRequest = exports.CreateMembersRequest || (exports.CreateMembersRequest = {}));
var MemberDisabledReason;
(function (MemberDisabledReason) {
    MemberDisabledReason["VOLUME_TOO_HIGH"] = "VOLUME_TOO_HIGH";
    MemberDisabledReason["VOLUME_UNKNOWN"] = "VOLUME_UNKNOWN";
})(MemberDisabledReason = exports.MemberDisabledReason || (exports.MemberDisabledReason = {}));
var MemberStatus;
(function (MemberStatus) {
    MemberStatus["ACCEPTED_BUT_DISABLED"] = "ACCEPTED_BUT_DISABLED";
    MemberStatus["ENABLED"] = "ENABLED";
    MemberStatus["INVITED"] = "INVITED";
    MemberStatus["VERIFICATION_FAILED"] = "VERIFICATION_FAILED";
    MemberStatus["VERIFICATION_IN_PROGRESS"] = "VERIFICATION_IN_PROGRESS";
})(MemberStatus = exports.MemberStatus || (exports.MemberStatus = {}));
var MemberDetail;
(function (MemberDetail) {
    /**
     * @internal
     */
    MemberDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MemberDetail = exports.MemberDetail || (exports.MemberDetail = {}));
var UnprocessedAccount;
(function (UnprocessedAccount) {
    /**
     * @internal
     */
    UnprocessedAccount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnprocessedAccount = exports.UnprocessedAccount || (exports.UnprocessedAccount = {}));
var CreateMembersResponse;
(function (CreateMembersResponse) {
    /**
     * @internal
     */
    CreateMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMembersResponse = exports.CreateMembersResponse || (exports.CreateMembersResponse = {}));
var DeleteGraphRequest;
(function (DeleteGraphRequest) {
    /**
     * @internal
     */
    DeleteGraphRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGraphRequest = exports.DeleteGraphRequest || (exports.DeleteGraphRequest = {}));
var DeleteMembersRequest;
(function (DeleteMembersRequest) {
    /**
     * @internal
     */
    DeleteMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMembersRequest = exports.DeleteMembersRequest || (exports.DeleteMembersRequest = {}));
var DeleteMembersResponse;
(function (DeleteMembersResponse) {
    /**
     * @internal
     */
    DeleteMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMembersResponse = exports.DeleteMembersResponse || (exports.DeleteMembersResponse = {}));
var DisassociateMembershipRequest;
(function (DisassociateMembershipRequest) {
    /**
     * @internal
     */
    DisassociateMembershipRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateMembershipRequest = exports.DisassociateMembershipRequest || (exports.DisassociateMembershipRequest = {}));
var GetMembersRequest;
(function (GetMembersRequest) {
    /**
     * @internal
     */
    GetMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMembersRequest = exports.GetMembersRequest || (exports.GetMembersRequest = {}));
var GetMembersResponse;
(function (GetMembersResponse) {
    /**
     * @internal
     */
    GetMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMembersResponse = exports.GetMembersResponse || (exports.GetMembersResponse = {}));
var ListGraphsRequest;
(function (ListGraphsRequest) {
    /**
     * @internal
     */
    ListGraphsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGraphsRequest = exports.ListGraphsRequest || (exports.ListGraphsRequest = {}));
var Graph;
(function (Graph) {
    /**
     * @internal
     */
    Graph.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Graph = exports.Graph || (exports.Graph = {}));
var ListGraphsResponse;
(function (ListGraphsResponse) {
    /**
     * @internal
     */
    ListGraphsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGraphsResponse = exports.ListGraphsResponse || (exports.ListGraphsResponse = {}));
var ListInvitationsRequest;
(function (ListInvitationsRequest) {
    /**
     * @internal
     */
    ListInvitationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInvitationsRequest = exports.ListInvitationsRequest || (exports.ListInvitationsRequest = {}));
var ListInvitationsResponse;
(function (ListInvitationsResponse) {
    /**
     * @internal
     */
    ListInvitationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInvitationsResponse = exports.ListInvitationsResponse || (exports.ListInvitationsResponse = {}));
var ListMembersRequest;
(function (ListMembersRequest) {
    /**
     * @internal
     */
    ListMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMembersRequest = exports.ListMembersRequest || (exports.ListMembersRequest = {}));
var ListMembersResponse;
(function (ListMembersResponse) {
    /**
     * @internal
     */
    ListMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMembersResponse = exports.ListMembersResponse || (exports.ListMembersResponse = {}));
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
var RejectInvitationRequest;
(function (RejectInvitationRequest) {
    /**
     * @internal
     */
    RejectInvitationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectInvitationRequest = exports.RejectInvitationRequest || (exports.RejectInvitationRequest = {}));
var StartMonitoringMemberRequest;
(function (StartMonitoringMemberRequest) {
    /**
     * @internal
     */
    StartMonitoringMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMonitoringMemberRequest = exports.StartMonitoringMemberRequest || (exports.StartMonitoringMemberRequest = {}));
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