"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrder = exports.GetEnabledStandardsResponse = exports.GetEnabledStandardsRequest = exports.GetAdministratorAccountResponse = exports.Invitation = exports.GetAdministratorAccountRequest = exports.EnableSecurityHubResponse = exports.EnableSecurityHubRequest = exports.EnableOrganizationAdminAccountResponse = exports.EnableOrganizationAdminAccountRequest = exports.EnableImportFindingsForProductResponse = exports.EnableImportFindingsForProductRequest = exports.DisassociateMembersResponse = exports.DisassociateMembersRequest = exports.DisassociateFromMasterAccountResponse = exports.DisassociateFromMasterAccountRequest = exports.DisassociateFromAdministratorAccountResponse = exports.DisassociateFromAdministratorAccountRequest = exports.DisableSecurityHubResponse = exports.DisableSecurityHubRequest = exports.DisableOrganizationAdminAccountResponse = exports.DisableOrganizationAdminAccountRequest = exports.DisableImportFindingsForProductResponse = exports.DisableImportFindingsForProductRequest = exports.DescribeStandardsControlsResponse = exports.StandardsControl = exports.SeverityRating = exports.DescribeStandardsControlsRequest = exports.DescribeStandardsResponse = exports.Standard = exports.DescribeStandardsRequest = exports.DescribeProductsResponse = exports.Product = exports.IntegrationType = exports.DescribeProductsRequest = exports.DescribeOrganizationConfigurationResponse = exports.DescribeOrganizationConfigurationRequest = exports.DescribeHubResponse = exports.DescribeHubRequest = exports.DescribeActionTargetsResponse = exports.DescribeActionTargetsRequest = exports.DeleteMembersResponse = exports.DeleteMembersRequest = exports.DeleteInvitationsResponse = exports.DeleteInvitationsRequest = exports.DeleteInsightResponse = exports.DeleteInsightRequest = exports.DeleteActionTargetResponse = exports.DeleteActionTargetRequest = exports.DeclineInvitationsResponse = void 0;
exports.UpdateStandardsControlResponse = exports.UpdateStandardsControlRequest = exports.UpdateSecurityHubConfigurationResponse = exports.UpdateSecurityHubConfigurationRequest = exports.UpdateOrganizationConfigurationResponse = exports.UpdateOrganizationConfigurationRequest = exports.UpdateInsightResponse = exports.UpdateInsightRequest = exports.UpdateFindingsResponse = exports.UpdateFindingsRequest = exports.UpdateActionTargetResponse = exports.UpdateActionTargetRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListOrganizationAdminAccountsResponse = exports.ListOrganizationAdminAccountsRequest = exports.ListMembersResponse = exports.ListMembersRequest = exports.ListInvitationsResponse = exports.ListInvitationsRequest = exports.ListEnabledProductsForImportResponse = exports.ListEnabledProductsForImportRequest = exports.InviteMembersResponse = exports.InviteMembersRequest = exports.GetMembersResponse = exports.Member = exports.GetMembersRequest = exports.GetMasterAccountResponse = exports.GetMasterAccountRequest = exports.GetInvitationsCountResponse = exports.GetInvitationsCountRequest = exports.GetInsightsResponse = exports.Insight = exports.GetInsightsRequest = exports.GetInsightResultsResponse = exports.InsightResults = exports.InsightResultValue = exports.GetInsightResultsRequest = exports.GetFindingsResponse = exports.GetFindingsRequest = exports.SortCriterion = void 0;
var DeclineInvitationsResponse;
(function (DeclineInvitationsResponse) {
    /**
     * @internal
     */
    DeclineInvitationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeclineInvitationsResponse = exports.DeclineInvitationsResponse || (exports.DeclineInvitationsResponse = {}));
var DeleteActionTargetRequest;
(function (DeleteActionTargetRequest) {
    /**
     * @internal
     */
    DeleteActionTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteActionTargetRequest = exports.DeleteActionTargetRequest || (exports.DeleteActionTargetRequest = {}));
var DeleteActionTargetResponse;
(function (DeleteActionTargetResponse) {
    /**
     * @internal
     */
    DeleteActionTargetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteActionTargetResponse = exports.DeleteActionTargetResponse || (exports.DeleteActionTargetResponse = {}));
var DeleteInsightRequest;
(function (DeleteInsightRequest) {
    /**
     * @internal
     */
    DeleteInsightRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInsightRequest = exports.DeleteInsightRequest || (exports.DeleteInsightRequest = {}));
var DeleteInsightResponse;
(function (DeleteInsightResponse) {
    /**
     * @internal
     */
    DeleteInsightResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInsightResponse = exports.DeleteInsightResponse || (exports.DeleteInsightResponse = {}));
var DeleteInvitationsRequest;
(function (DeleteInvitationsRequest) {
    /**
     * @internal
     */
    DeleteInvitationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInvitationsRequest = exports.DeleteInvitationsRequest || (exports.DeleteInvitationsRequest = {}));
var DeleteInvitationsResponse;
(function (DeleteInvitationsResponse) {
    /**
     * @internal
     */
    DeleteInvitationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInvitationsResponse = exports.DeleteInvitationsResponse || (exports.DeleteInvitationsResponse = {}));
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
var DescribeActionTargetsRequest;
(function (DescribeActionTargetsRequest) {
    /**
     * @internal
     */
    DescribeActionTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeActionTargetsRequest = exports.DescribeActionTargetsRequest || (exports.DescribeActionTargetsRequest = {}));
var DescribeActionTargetsResponse;
(function (DescribeActionTargetsResponse) {
    /**
     * @internal
     */
    DescribeActionTargetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeActionTargetsResponse = exports.DescribeActionTargetsResponse || (exports.DescribeActionTargetsResponse = {}));
var DescribeHubRequest;
(function (DescribeHubRequest) {
    /**
     * @internal
     */
    DescribeHubRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHubRequest = exports.DescribeHubRequest || (exports.DescribeHubRequest = {}));
var DescribeHubResponse;
(function (DescribeHubResponse) {
    /**
     * @internal
     */
    DescribeHubResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHubResponse = exports.DescribeHubResponse || (exports.DescribeHubResponse = {}));
var DescribeOrganizationConfigurationRequest;
(function (DescribeOrganizationConfigurationRequest) {
    /**
     * @internal
     */
    DescribeOrganizationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConfigurationRequest = exports.DescribeOrganizationConfigurationRequest || (exports.DescribeOrganizationConfigurationRequest = {}));
var DescribeOrganizationConfigurationResponse;
(function (DescribeOrganizationConfigurationResponse) {
    /**
     * @internal
     */
    DescribeOrganizationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConfigurationResponse = exports.DescribeOrganizationConfigurationResponse || (exports.DescribeOrganizationConfigurationResponse = {}));
var DescribeProductsRequest;
(function (DescribeProductsRequest) {
    /**
     * @internal
     */
    DescribeProductsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProductsRequest = exports.DescribeProductsRequest || (exports.DescribeProductsRequest = {}));
var IntegrationType;
(function (IntegrationType) {
    IntegrationType["RECEIVE_FINDINGS_FROM_SECURITY_HUB"] = "RECEIVE_FINDINGS_FROM_SECURITY_HUB";
    IntegrationType["SEND_FINDINGS_TO_SECURITY_HUB"] = "SEND_FINDINGS_TO_SECURITY_HUB";
    IntegrationType["UPDATE_FINDINGS_IN_SECURITY_HUB"] = "UPDATE_FINDINGS_IN_SECURITY_HUB";
})(IntegrationType = exports.IntegrationType || (exports.IntegrationType = {}));
var Product;
(function (Product) {
    /**
     * @internal
     */
    Product.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Product = exports.Product || (exports.Product = {}));
var DescribeProductsResponse;
(function (DescribeProductsResponse) {
    /**
     * @internal
     */
    DescribeProductsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProductsResponse = exports.DescribeProductsResponse || (exports.DescribeProductsResponse = {}));
var DescribeStandardsRequest;
(function (DescribeStandardsRequest) {
    /**
     * @internal
     */
    DescribeStandardsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStandardsRequest = exports.DescribeStandardsRequest || (exports.DescribeStandardsRequest = {}));
var Standard;
(function (Standard) {
    /**
     * @internal
     */
    Standard.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Standard = exports.Standard || (exports.Standard = {}));
var DescribeStandardsResponse;
(function (DescribeStandardsResponse) {
    /**
     * @internal
     */
    DescribeStandardsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStandardsResponse = exports.DescribeStandardsResponse || (exports.DescribeStandardsResponse = {}));
var DescribeStandardsControlsRequest;
(function (DescribeStandardsControlsRequest) {
    /**
     * @internal
     */
    DescribeStandardsControlsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStandardsControlsRequest = exports.DescribeStandardsControlsRequest || (exports.DescribeStandardsControlsRequest = {}));
var SeverityRating;
(function (SeverityRating) {
    SeverityRating["CRITICAL"] = "CRITICAL";
    SeverityRating["HIGH"] = "HIGH";
    SeverityRating["LOW"] = "LOW";
    SeverityRating["MEDIUM"] = "MEDIUM";
})(SeverityRating = exports.SeverityRating || (exports.SeverityRating = {}));
var StandardsControl;
(function (StandardsControl) {
    /**
     * @internal
     */
    StandardsControl.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StandardsControl = exports.StandardsControl || (exports.StandardsControl = {}));
var DescribeStandardsControlsResponse;
(function (DescribeStandardsControlsResponse) {
    /**
     * @internal
     */
    DescribeStandardsControlsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStandardsControlsResponse = exports.DescribeStandardsControlsResponse || (exports.DescribeStandardsControlsResponse = {}));
var DisableImportFindingsForProductRequest;
(function (DisableImportFindingsForProductRequest) {
    /**
     * @internal
     */
    DisableImportFindingsForProductRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableImportFindingsForProductRequest = exports.DisableImportFindingsForProductRequest || (exports.DisableImportFindingsForProductRequest = {}));
var DisableImportFindingsForProductResponse;
(function (DisableImportFindingsForProductResponse) {
    /**
     * @internal
     */
    DisableImportFindingsForProductResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableImportFindingsForProductResponse = exports.DisableImportFindingsForProductResponse || (exports.DisableImportFindingsForProductResponse = {}));
var DisableOrganizationAdminAccountRequest;
(function (DisableOrganizationAdminAccountRequest) {
    /**
     * @internal
     */
    DisableOrganizationAdminAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableOrganizationAdminAccountRequest = exports.DisableOrganizationAdminAccountRequest || (exports.DisableOrganizationAdminAccountRequest = {}));
var DisableOrganizationAdminAccountResponse;
(function (DisableOrganizationAdminAccountResponse) {
    /**
     * @internal
     */
    DisableOrganizationAdminAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableOrganizationAdminAccountResponse = exports.DisableOrganizationAdminAccountResponse || (exports.DisableOrganizationAdminAccountResponse = {}));
var DisableSecurityHubRequest;
(function (DisableSecurityHubRequest) {
    /**
     * @internal
     */
    DisableSecurityHubRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableSecurityHubRequest = exports.DisableSecurityHubRequest || (exports.DisableSecurityHubRequest = {}));
var DisableSecurityHubResponse;
(function (DisableSecurityHubResponse) {
    /**
     * @internal
     */
    DisableSecurityHubResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableSecurityHubResponse = exports.DisableSecurityHubResponse || (exports.DisableSecurityHubResponse = {}));
var DisassociateFromAdministratorAccountRequest;
(function (DisassociateFromAdministratorAccountRequest) {
    /**
     * @internal
     */
    DisassociateFromAdministratorAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFromAdministratorAccountRequest = exports.DisassociateFromAdministratorAccountRequest || (exports.DisassociateFromAdministratorAccountRequest = {}));
var DisassociateFromAdministratorAccountResponse;
(function (DisassociateFromAdministratorAccountResponse) {
    /**
     * @internal
     */
    DisassociateFromAdministratorAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFromAdministratorAccountResponse = exports.DisassociateFromAdministratorAccountResponse || (exports.DisassociateFromAdministratorAccountResponse = {}));
var DisassociateFromMasterAccountRequest;
(function (DisassociateFromMasterAccountRequest) {
    /**
     * @internal
     */
    DisassociateFromMasterAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFromMasterAccountRequest = exports.DisassociateFromMasterAccountRequest || (exports.DisassociateFromMasterAccountRequest = {}));
var DisassociateFromMasterAccountResponse;
(function (DisassociateFromMasterAccountResponse) {
    /**
     * @internal
     */
    DisassociateFromMasterAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFromMasterAccountResponse = exports.DisassociateFromMasterAccountResponse || (exports.DisassociateFromMasterAccountResponse = {}));
var DisassociateMembersRequest;
(function (DisassociateMembersRequest) {
    /**
     * @internal
     */
    DisassociateMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateMembersRequest = exports.DisassociateMembersRequest || (exports.DisassociateMembersRequest = {}));
var DisassociateMembersResponse;
(function (DisassociateMembersResponse) {
    /**
     * @internal
     */
    DisassociateMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateMembersResponse = exports.DisassociateMembersResponse || (exports.DisassociateMembersResponse = {}));
var EnableImportFindingsForProductRequest;
(function (EnableImportFindingsForProductRequest) {
    /**
     * @internal
     */
    EnableImportFindingsForProductRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableImportFindingsForProductRequest = exports.EnableImportFindingsForProductRequest || (exports.EnableImportFindingsForProductRequest = {}));
var EnableImportFindingsForProductResponse;
(function (EnableImportFindingsForProductResponse) {
    /**
     * @internal
     */
    EnableImportFindingsForProductResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableImportFindingsForProductResponse = exports.EnableImportFindingsForProductResponse || (exports.EnableImportFindingsForProductResponse = {}));
var EnableOrganizationAdminAccountRequest;
(function (EnableOrganizationAdminAccountRequest) {
    /**
     * @internal
     */
    EnableOrganizationAdminAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableOrganizationAdminAccountRequest = exports.EnableOrganizationAdminAccountRequest || (exports.EnableOrganizationAdminAccountRequest = {}));
var EnableOrganizationAdminAccountResponse;
(function (EnableOrganizationAdminAccountResponse) {
    /**
     * @internal
     */
    EnableOrganizationAdminAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableOrganizationAdminAccountResponse = exports.EnableOrganizationAdminAccountResponse || (exports.EnableOrganizationAdminAccountResponse = {}));
var EnableSecurityHubRequest;
(function (EnableSecurityHubRequest) {
    /**
     * @internal
     */
    EnableSecurityHubRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableSecurityHubRequest = exports.EnableSecurityHubRequest || (exports.EnableSecurityHubRequest = {}));
var EnableSecurityHubResponse;
(function (EnableSecurityHubResponse) {
    /**
     * @internal
     */
    EnableSecurityHubResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableSecurityHubResponse = exports.EnableSecurityHubResponse || (exports.EnableSecurityHubResponse = {}));
var GetAdministratorAccountRequest;
(function (GetAdministratorAccountRequest) {
    /**
     * @internal
     */
    GetAdministratorAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAdministratorAccountRequest = exports.GetAdministratorAccountRequest || (exports.GetAdministratorAccountRequest = {}));
var Invitation;
(function (Invitation) {
    /**
     * @internal
     */
    Invitation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Invitation = exports.Invitation || (exports.Invitation = {}));
var GetAdministratorAccountResponse;
(function (GetAdministratorAccountResponse) {
    /**
     * @internal
     */
    GetAdministratorAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAdministratorAccountResponse = exports.GetAdministratorAccountResponse || (exports.GetAdministratorAccountResponse = {}));
var GetEnabledStandardsRequest;
(function (GetEnabledStandardsRequest) {
    /**
     * @internal
     */
    GetEnabledStandardsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEnabledStandardsRequest = exports.GetEnabledStandardsRequest || (exports.GetEnabledStandardsRequest = {}));
var GetEnabledStandardsResponse;
(function (GetEnabledStandardsResponse) {
    /**
     * @internal
     */
    GetEnabledStandardsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEnabledStandardsResponse = exports.GetEnabledStandardsResponse || (exports.GetEnabledStandardsResponse = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "asc";
    SortOrder["DESCENDING"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var SortCriterion;
(function (SortCriterion) {
    /**
     * @internal
     */
    SortCriterion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SortCriterion = exports.SortCriterion || (exports.SortCriterion = {}));
var GetFindingsRequest;
(function (GetFindingsRequest) {
    /**
     * @internal
     */
    GetFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsRequest = exports.GetFindingsRequest || (exports.GetFindingsRequest = {}));
var GetFindingsResponse;
(function (GetFindingsResponse) {
    /**
     * @internal
     */
    GetFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsResponse = exports.GetFindingsResponse || (exports.GetFindingsResponse = {}));
var GetInsightResultsRequest;
(function (GetInsightResultsRequest) {
    /**
     * @internal
     */
    GetInsightResultsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightResultsRequest = exports.GetInsightResultsRequest || (exports.GetInsightResultsRequest = {}));
var InsightResultValue;
(function (InsightResultValue) {
    /**
     * @internal
     */
    InsightResultValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightResultValue = exports.InsightResultValue || (exports.InsightResultValue = {}));
var InsightResults;
(function (InsightResults) {
    /**
     * @internal
     */
    InsightResults.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightResults = exports.InsightResults || (exports.InsightResults = {}));
var GetInsightResultsResponse;
(function (GetInsightResultsResponse) {
    /**
     * @internal
     */
    GetInsightResultsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightResultsResponse = exports.GetInsightResultsResponse || (exports.GetInsightResultsResponse = {}));
var GetInsightsRequest;
(function (GetInsightsRequest) {
    /**
     * @internal
     */
    GetInsightsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightsRequest = exports.GetInsightsRequest || (exports.GetInsightsRequest = {}));
var Insight;
(function (Insight) {
    /**
     * @internal
     */
    Insight.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Insight = exports.Insight || (exports.Insight = {}));
var GetInsightsResponse;
(function (GetInsightsResponse) {
    /**
     * @internal
     */
    GetInsightsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightsResponse = exports.GetInsightsResponse || (exports.GetInsightsResponse = {}));
var GetInvitationsCountRequest;
(function (GetInvitationsCountRequest) {
    /**
     * @internal
     */
    GetInvitationsCountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInvitationsCountRequest = exports.GetInvitationsCountRequest || (exports.GetInvitationsCountRequest = {}));
var GetInvitationsCountResponse;
(function (GetInvitationsCountResponse) {
    /**
     * @internal
     */
    GetInvitationsCountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInvitationsCountResponse = exports.GetInvitationsCountResponse || (exports.GetInvitationsCountResponse = {}));
var GetMasterAccountRequest;
(function (GetMasterAccountRequest) {
    /**
     * @internal
     */
    GetMasterAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMasterAccountRequest = exports.GetMasterAccountRequest || (exports.GetMasterAccountRequest = {}));
var GetMasterAccountResponse;
(function (GetMasterAccountResponse) {
    /**
     * @internal
     */
    GetMasterAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMasterAccountResponse = exports.GetMasterAccountResponse || (exports.GetMasterAccountResponse = {}));
var GetMembersRequest;
(function (GetMembersRequest) {
    /**
     * @internal
     */
    GetMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMembersRequest = exports.GetMembersRequest || (exports.GetMembersRequest = {}));
var Member;
(function (Member) {
    /**
     * @internal
     */
    Member.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Member = exports.Member || (exports.Member = {}));
var GetMembersResponse;
(function (GetMembersResponse) {
    /**
     * @internal
     */
    GetMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMembersResponse = exports.GetMembersResponse || (exports.GetMembersResponse = {}));
var InviteMembersRequest;
(function (InviteMembersRequest) {
    /**
     * @internal
     */
    InviteMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InviteMembersRequest = exports.InviteMembersRequest || (exports.InviteMembersRequest = {}));
var InviteMembersResponse;
(function (InviteMembersResponse) {
    /**
     * @internal
     */
    InviteMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InviteMembersResponse = exports.InviteMembersResponse || (exports.InviteMembersResponse = {}));
var ListEnabledProductsForImportRequest;
(function (ListEnabledProductsForImportRequest) {
    /**
     * @internal
     */
    ListEnabledProductsForImportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEnabledProductsForImportRequest = exports.ListEnabledProductsForImportRequest || (exports.ListEnabledProductsForImportRequest = {}));
var ListEnabledProductsForImportResponse;
(function (ListEnabledProductsForImportResponse) {
    /**
     * @internal
     */
    ListEnabledProductsForImportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEnabledProductsForImportResponse = exports.ListEnabledProductsForImportResponse || (exports.ListEnabledProductsForImportResponse = {}));
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
var ListOrganizationAdminAccountsRequest;
(function (ListOrganizationAdminAccountsRequest) {
    /**
     * @internal
     */
    ListOrganizationAdminAccountsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOrganizationAdminAccountsRequest = exports.ListOrganizationAdminAccountsRequest || (exports.ListOrganizationAdminAccountsRequest = {}));
var ListOrganizationAdminAccountsResponse;
(function (ListOrganizationAdminAccountsResponse) {
    /**
     * @internal
     */
    ListOrganizationAdminAccountsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOrganizationAdminAccountsResponse = exports.ListOrganizationAdminAccountsResponse || (exports.ListOrganizationAdminAccountsResponse = {}));
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
var UpdateActionTargetRequest;
(function (UpdateActionTargetRequest) {
    /**
     * @internal
     */
    UpdateActionTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateActionTargetRequest = exports.UpdateActionTargetRequest || (exports.UpdateActionTargetRequest = {}));
var UpdateActionTargetResponse;
(function (UpdateActionTargetResponse) {
    /**
     * @internal
     */
    UpdateActionTargetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateActionTargetResponse = exports.UpdateActionTargetResponse || (exports.UpdateActionTargetResponse = {}));
var UpdateFindingsRequest;
(function (UpdateFindingsRequest) {
    /**
     * @internal
     */
    UpdateFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFindingsRequest = exports.UpdateFindingsRequest || (exports.UpdateFindingsRequest = {}));
var UpdateFindingsResponse;
(function (UpdateFindingsResponse) {
    /**
     * @internal
     */
    UpdateFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFindingsResponse = exports.UpdateFindingsResponse || (exports.UpdateFindingsResponse = {}));
var UpdateInsightRequest;
(function (UpdateInsightRequest) {
    /**
     * @internal
     */
    UpdateInsightRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInsightRequest = exports.UpdateInsightRequest || (exports.UpdateInsightRequest = {}));
var UpdateInsightResponse;
(function (UpdateInsightResponse) {
    /**
     * @internal
     */
    UpdateInsightResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInsightResponse = exports.UpdateInsightResponse || (exports.UpdateInsightResponse = {}));
var UpdateOrganizationConfigurationRequest;
(function (UpdateOrganizationConfigurationRequest) {
    /**
     * @internal
     */
    UpdateOrganizationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOrganizationConfigurationRequest = exports.UpdateOrganizationConfigurationRequest || (exports.UpdateOrganizationConfigurationRequest = {}));
var UpdateOrganizationConfigurationResponse;
(function (UpdateOrganizationConfigurationResponse) {
    /**
     * @internal
     */
    UpdateOrganizationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOrganizationConfigurationResponse = exports.UpdateOrganizationConfigurationResponse || (exports.UpdateOrganizationConfigurationResponse = {}));
var UpdateSecurityHubConfigurationRequest;
(function (UpdateSecurityHubConfigurationRequest) {
    /**
     * @internal
     */
    UpdateSecurityHubConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSecurityHubConfigurationRequest = exports.UpdateSecurityHubConfigurationRequest || (exports.UpdateSecurityHubConfigurationRequest = {}));
var UpdateSecurityHubConfigurationResponse;
(function (UpdateSecurityHubConfigurationResponse) {
    /**
     * @internal
     */
    UpdateSecurityHubConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSecurityHubConfigurationResponse = exports.UpdateSecurityHubConfigurationResponse || (exports.UpdateSecurityHubConfigurationResponse = {}));
var UpdateStandardsControlRequest;
(function (UpdateStandardsControlRequest) {
    /**
     * @internal
     */
    UpdateStandardsControlRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStandardsControlRequest = exports.UpdateStandardsControlRequest || (exports.UpdateStandardsControlRequest = {}));
var UpdateStandardsControlResponse;
(function (UpdateStandardsControlResponse) {
    /**
     * @internal
     */
    UpdateStandardsControlResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStandardsControlResponse = exports.UpdateStandardsControlResponse || (exports.UpdateStandardsControlResponse = {}));
//# sourceMappingURL=models_1.js.map