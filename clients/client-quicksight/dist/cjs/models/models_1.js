"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDashboardPermissionsResponse = exports.UpdateDashboardPermissionsRequest = exports.UpdateDashboardResponse = exports.UpdateDashboardRequest = exports.UpdateAnalysisPermissionsResponse = exports.UpdateAnalysisPermissionsRequest = exports.UpdateAnalysisResponse = exports.UpdateAnalysisRequest = exports.UpdateAccountSettingsResponse = exports.UpdateAccountSettingsRequest = exports.UpdateAccountCustomizationResponse = exports.UpdateAccountCustomizationRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.SearchDashboardsResponse = exports.SearchDashboardsRequest = exports.SearchAnalysesResponse = exports.SearchAnalysesRequest = exports.RestoreAnalysisResponse = exports.RestoreAnalysisRequest = exports.RegisterUserResponse = exports.RegisterUserRequest = exports.ListUsersResponse = exports.ListUsersRequest = exports.ListUserGroupsResponse = exports.ListUserGroupsRequest = exports.ListThemeVersionsResponse = exports.ThemeVersionSummary = exports.ListThemeVersionsRequest = exports.ListThemesResponse = exports.ThemeSummary = exports.ListThemesRequest = exports.ListThemeAliasesResponse = exports.ListThemeAliasesRequest = exports.ListTemplateVersionsResponse = exports.TemplateVersionSummary = exports.ListTemplateVersionsRequest = exports.ListTemplatesResponse = exports.TemplateSummary = exports.ListTemplatesRequest = exports.ListTemplateAliasesResponse = exports.ListTemplateAliasesRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListNamespacesResponse = exports.ListNamespacesRequest = exports.ListIngestionsResponse = exports.ListIngestionsRequest = void 0;
exports.UpdateUserResponse = exports.UpdateUserRequest = exports.UpdateThemePermissionsResponse = exports.UpdateThemePermissionsRequest = exports.UpdateThemeAliasResponse = exports.UpdateThemeAliasRequest = exports.UpdateThemeResponse = exports.UpdateThemeRequest = exports.UpdateTemplatePermissionsResponse = exports.UpdateTemplatePermissionsRequest = exports.UpdateTemplateAliasResponse = exports.UpdateTemplateAliasRequest = exports.UpdateTemplateResponse = exports.UpdateTemplateRequest = exports.UpdateIAMPolicyAssignmentResponse = exports.UpdateIAMPolicyAssignmentRequest = exports.UpdateGroupResponse = exports.UpdateGroupRequest = exports.UpdateDataSourcePermissionsResponse = exports.UpdateDataSourcePermissionsRequest = exports.UpdateDataSourceResponse = exports.UpdateDataSourceRequest = exports.UpdateDataSetPermissionsResponse = exports.UpdateDataSetPermissionsRequest = exports.UpdateDataSetResponse = exports.UpdateDataSetRequest = exports.UpdateDashboardPublishedVersionResponse = exports.UpdateDashboardPublishedVersionRequest = void 0;
const models_0_1 = require("./models_0");
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ListIngestionsRequest;
(function (ListIngestionsRequest) {
    /**
     * @internal
     */
    ListIngestionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIngestionsRequest = exports.ListIngestionsRequest || (exports.ListIngestionsRequest = {}));
var ListIngestionsResponse;
(function (ListIngestionsResponse) {
    /**
     * @internal
     */
    ListIngestionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIngestionsResponse = exports.ListIngestionsResponse || (exports.ListIngestionsResponse = {}));
var ListNamespacesRequest;
(function (ListNamespacesRequest) {
    /**
     * @internal
     */
    ListNamespacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNamespacesRequest = exports.ListNamespacesRequest || (exports.ListNamespacesRequest = {}));
var ListNamespacesResponse;
(function (ListNamespacesResponse) {
    /**
     * @internal
     */
    ListNamespacesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNamespacesResponse = exports.ListNamespacesResponse || (exports.ListNamespacesResponse = {}));
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
var ListTemplateAliasesRequest;
(function (ListTemplateAliasesRequest) {
    /**
     * @internal
     */
    ListTemplateAliasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTemplateAliasesRequest = exports.ListTemplateAliasesRequest || (exports.ListTemplateAliasesRequest = {}));
var ListTemplateAliasesResponse;
(function (ListTemplateAliasesResponse) {
    /**
     * @internal
     */
    ListTemplateAliasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTemplateAliasesResponse = exports.ListTemplateAliasesResponse || (exports.ListTemplateAliasesResponse = {}));
var ListTemplatesRequest;
(function (ListTemplatesRequest) {
    /**
     * @internal
     */
    ListTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTemplatesRequest = exports.ListTemplatesRequest || (exports.ListTemplatesRequest = {}));
var TemplateSummary;
(function (TemplateSummary) {
    /**
     * @internal
     */
    TemplateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateSummary = exports.TemplateSummary || (exports.TemplateSummary = {}));
var ListTemplatesResponse;
(function (ListTemplatesResponse) {
    /**
     * @internal
     */
    ListTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTemplatesResponse = exports.ListTemplatesResponse || (exports.ListTemplatesResponse = {}));
var ListTemplateVersionsRequest;
(function (ListTemplateVersionsRequest) {
    /**
     * @internal
     */
    ListTemplateVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTemplateVersionsRequest = exports.ListTemplateVersionsRequest || (exports.ListTemplateVersionsRequest = {}));
var TemplateVersionSummary;
(function (TemplateVersionSummary) {
    /**
     * @internal
     */
    TemplateVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateVersionSummary = exports.TemplateVersionSummary || (exports.TemplateVersionSummary = {}));
var ListTemplateVersionsResponse;
(function (ListTemplateVersionsResponse) {
    /**
     * @internal
     */
    ListTemplateVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTemplateVersionsResponse = exports.ListTemplateVersionsResponse || (exports.ListTemplateVersionsResponse = {}));
var ListThemeAliasesRequest;
(function (ListThemeAliasesRequest) {
    /**
     * @internal
     */
    ListThemeAliasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThemeAliasesRequest = exports.ListThemeAliasesRequest || (exports.ListThemeAliasesRequest = {}));
var ListThemeAliasesResponse;
(function (ListThemeAliasesResponse) {
    /**
     * @internal
     */
    ListThemeAliasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThemeAliasesResponse = exports.ListThemeAliasesResponse || (exports.ListThemeAliasesResponse = {}));
var ListThemesRequest;
(function (ListThemesRequest) {
    /**
     * @internal
     */
    ListThemesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThemesRequest = exports.ListThemesRequest || (exports.ListThemesRequest = {}));
var ThemeSummary;
(function (ThemeSummary) {
    /**
     * @internal
     */
    ThemeSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThemeSummary = exports.ThemeSummary || (exports.ThemeSummary = {}));
var ListThemesResponse;
(function (ListThemesResponse) {
    /**
     * @internal
     */
    ListThemesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThemesResponse = exports.ListThemesResponse || (exports.ListThemesResponse = {}));
var ListThemeVersionsRequest;
(function (ListThemeVersionsRequest) {
    /**
     * @internal
     */
    ListThemeVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThemeVersionsRequest = exports.ListThemeVersionsRequest || (exports.ListThemeVersionsRequest = {}));
var ThemeVersionSummary;
(function (ThemeVersionSummary) {
    /**
     * @internal
     */
    ThemeVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThemeVersionSummary = exports.ThemeVersionSummary || (exports.ThemeVersionSummary = {}));
var ListThemeVersionsResponse;
(function (ListThemeVersionsResponse) {
    /**
     * @internal
     */
    ListThemeVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThemeVersionsResponse = exports.ListThemeVersionsResponse || (exports.ListThemeVersionsResponse = {}));
var ListUserGroupsRequest;
(function (ListUserGroupsRequest) {
    /**
     * @internal
     */
    ListUserGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserGroupsRequest = exports.ListUserGroupsRequest || (exports.ListUserGroupsRequest = {}));
var ListUserGroupsResponse;
(function (ListUserGroupsResponse) {
    /**
     * @internal
     */
    ListUserGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserGroupsResponse = exports.ListUserGroupsResponse || (exports.ListUserGroupsResponse = {}));
var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersRequest = exports.ListUsersRequest || (exports.ListUsersRequest = {}));
var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersResponse = exports.ListUsersResponse || (exports.ListUsersResponse = {}));
var RegisterUserRequest;
(function (RegisterUserRequest) {
    /**
     * @internal
     */
    RegisterUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterUserRequest = exports.RegisterUserRequest || (exports.RegisterUserRequest = {}));
var RegisterUserResponse;
(function (RegisterUserResponse) {
    /**
     * @internal
     */
    RegisterUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterUserResponse = exports.RegisterUserResponse || (exports.RegisterUserResponse = {}));
var RestoreAnalysisRequest;
(function (RestoreAnalysisRequest) {
    /**
     * @internal
     */
    RestoreAnalysisRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreAnalysisRequest = exports.RestoreAnalysisRequest || (exports.RestoreAnalysisRequest = {}));
var RestoreAnalysisResponse;
(function (RestoreAnalysisResponse) {
    /**
     * @internal
     */
    RestoreAnalysisResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreAnalysisResponse = exports.RestoreAnalysisResponse || (exports.RestoreAnalysisResponse = {}));
var SearchAnalysesRequest;
(function (SearchAnalysesRequest) {
    /**
     * @internal
     */
    SearchAnalysesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchAnalysesRequest = exports.SearchAnalysesRequest || (exports.SearchAnalysesRequest = {}));
var SearchAnalysesResponse;
(function (SearchAnalysesResponse) {
    /**
     * @internal
     */
    SearchAnalysesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchAnalysesResponse = exports.SearchAnalysesResponse || (exports.SearchAnalysesResponse = {}));
var SearchDashboardsRequest;
(function (SearchDashboardsRequest) {
    /**
     * @internal
     */
    SearchDashboardsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchDashboardsRequest = exports.SearchDashboardsRequest || (exports.SearchDashboardsRequest = {}));
var SearchDashboardsResponse;
(function (SearchDashboardsResponse) {
    /**
     * @internal
     */
    SearchDashboardsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchDashboardsResponse = exports.SearchDashboardsResponse || (exports.SearchDashboardsResponse = {}));
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
var UpdateAccountCustomizationRequest;
(function (UpdateAccountCustomizationRequest) {
    /**
     * @internal
     */
    UpdateAccountCustomizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAccountCustomizationRequest = exports.UpdateAccountCustomizationRequest || (exports.UpdateAccountCustomizationRequest = {}));
var UpdateAccountCustomizationResponse;
(function (UpdateAccountCustomizationResponse) {
    /**
     * @internal
     */
    UpdateAccountCustomizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAccountCustomizationResponse = exports.UpdateAccountCustomizationResponse || (exports.UpdateAccountCustomizationResponse = {}));
var UpdateAccountSettingsRequest;
(function (UpdateAccountSettingsRequest) {
    /**
     * @internal
     */
    UpdateAccountSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAccountSettingsRequest = exports.UpdateAccountSettingsRequest || (exports.UpdateAccountSettingsRequest = {}));
var UpdateAccountSettingsResponse;
(function (UpdateAccountSettingsResponse) {
    /**
     * @internal
     */
    UpdateAccountSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAccountSettingsResponse = exports.UpdateAccountSettingsResponse || (exports.UpdateAccountSettingsResponse = {}));
var UpdateAnalysisRequest;
(function (UpdateAnalysisRequest) {
    /**
     * @internal
     */
    UpdateAnalysisRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAnalysisRequest = exports.UpdateAnalysisRequest || (exports.UpdateAnalysisRequest = {}));
var UpdateAnalysisResponse;
(function (UpdateAnalysisResponse) {
    /**
     * @internal
     */
    UpdateAnalysisResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAnalysisResponse = exports.UpdateAnalysisResponse || (exports.UpdateAnalysisResponse = {}));
var UpdateAnalysisPermissionsRequest;
(function (UpdateAnalysisPermissionsRequest) {
    /**
     * @internal
     */
    UpdateAnalysisPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAnalysisPermissionsRequest = exports.UpdateAnalysisPermissionsRequest || (exports.UpdateAnalysisPermissionsRequest = {}));
var UpdateAnalysisPermissionsResponse;
(function (UpdateAnalysisPermissionsResponse) {
    /**
     * @internal
     */
    UpdateAnalysisPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAnalysisPermissionsResponse = exports.UpdateAnalysisPermissionsResponse || (exports.UpdateAnalysisPermissionsResponse = {}));
var UpdateDashboardRequest;
(function (UpdateDashboardRequest) {
    /**
     * @internal
     */
    UpdateDashboardRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDashboardRequest = exports.UpdateDashboardRequest || (exports.UpdateDashboardRequest = {}));
var UpdateDashboardResponse;
(function (UpdateDashboardResponse) {
    /**
     * @internal
     */
    UpdateDashboardResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDashboardResponse = exports.UpdateDashboardResponse || (exports.UpdateDashboardResponse = {}));
var UpdateDashboardPermissionsRequest;
(function (UpdateDashboardPermissionsRequest) {
    /**
     * @internal
     */
    UpdateDashboardPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDashboardPermissionsRequest = exports.UpdateDashboardPermissionsRequest || (exports.UpdateDashboardPermissionsRequest = {}));
var UpdateDashboardPermissionsResponse;
(function (UpdateDashboardPermissionsResponse) {
    /**
     * @internal
     */
    UpdateDashboardPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDashboardPermissionsResponse = exports.UpdateDashboardPermissionsResponse || (exports.UpdateDashboardPermissionsResponse = {}));
var UpdateDashboardPublishedVersionRequest;
(function (UpdateDashboardPublishedVersionRequest) {
    /**
     * @internal
     */
    UpdateDashboardPublishedVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDashboardPublishedVersionRequest = exports.UpdateDashboardPublishedVersionRequest || (exports.UpdateDashboardPublishedVersionRequest = {}));
var UpdateDashboardPublishedVersionResponse;
(function (UpdateDashboardPublishedVersionResponse) {
    /**
     * @internal
     */
    UpdateDashboardPublishedVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDashboardPublishedVersionResponse = exports.UpdateDashboardPublishedVersionResponse || (exports.UpdateDashboardPublishedVersionResponse = {}));
var UpdateDataSetRequest;
(function (UpdateDataSetRequest) {
    /**
     * @internal
     */
    UpdateDataSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.PhysicalTableMap && {
            PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: models_0_1.PhysicalTable.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.LogicalTableMap && {
            LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: models_0_1.LogicalTable.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(UpdateDataSetRequest = exports.UpdateDataSetRequest || (exports.UpdateDataSetRequest = {}));
var UpdateDataSetResponse;
(function (UpdateDataSetResponse) {
    /**
     * @internal
     */
    UpdateDataSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataSetResponse = exports.UpdateDataSetResponse || (exports.UpdateDataSetResponse = {}));
var UpdateDataSetPermissionsRequest;
(function (UpdateDataSetPermissionsRequest) {
    /**
     * @internal
     */
    UpdateDataSetPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataSetPermissionsRequest = exports.UpdateDataSetPermissionsRequest || (exports.UpdateDataSetPermissionsRequest = {}));
var UpdateDataSetPermissionsResponse;
(function (UpdateDataSetPermissionsResponse) {
    /**
     * @internal
     */
    UpdateDataSetPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataSetPermissionsResponse = exports.UpdateDataSetPermissionsResponse || (exports.UpdateDataSetPermissionsResponse = {}));
var UpdateDataSourceRequest;
(function (UpdateDataSourceRequest) {
    /**
     * @internal
     */
    UpdateDataSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DataSourceParameters && {
            DataSourceParameters: models_0_1.DataSourceParameters.filterSensitiveLog(obj.DataSourceParameters),
        }),
        ...(obj.Credentials && { Credentials: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateDataSourceRequest = exports.UpdateDataSourceRequest || (exports.UpdateDataSourceRequest = {}));
var UpdateDataSourceResponse;
(function (UpdateDataSourceResponse) {
    /**
     * @internal
     */
    UpdateDataSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataSourceResponse = exports.UpdateDataSourceResponse || (exports.UpdateDataSourceResponse = {}));
var UpdateDataSourcePermissionsRequest;
(function (UpdateDataSourcePermissionsRequest) {
    /**
     * @internal
     */
    UpdateDataSourcePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataSourcePermissionsRequest = exports.UpdateDataSourcePermissionsRequest || (exports.UpdateDataSourcePermissionsRequest = {}));
var UpdateDataSourcePermissionsResponse;
(function (UpdateDataSourcePermissionsResponse) {
    /**
     * @internal
     */
    UpdateDataSourcePermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataSourcePermissionsResponse = exports.UpdateDataSourcePermissionsResponse || (exports.UpdateDataSourcePermissionsResponse = {}));
var UpdateGroupRequest;
(function (UpdateGroupRequest) {
    /**
     * @internal
     */
    UpdateGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupRequest = exports.UpdateGroupRequest || (exports.UpdateGroupRequest = {}));
var UpdateGroupResponse;
(function (UpdateGroupResponse) {
    /**
     * @internal
     */
    UpdateGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupResponse = exports.UpdateGroupResponse || (exports.UpdateGroupResponse = {}));
var UpdateIAMPolicyAssignmentRequest;
(function (UpdateIAMPolicyAssignmentRequest) {
    /**
     * @internal
     */
    UpdateIAMPolicyAssignmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIAMPolicyAssignmentRequest = exports.UpdateIAMPolicyAssignmentRequest || (exports.UpdateIAMPolicyAssignmentRequest = {}));
var UpdateIAMPolicyAssignmentResponse;
(function (UpdateIAMPolicyAssignmentResponse) {
    /**
     * @internal
     */
    UpdateIAMPolicyAssignmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIAMPolicyAssignmentResponse = exports.UpdateIAMPolicyAssignmentResponse || (exports.UpdateIAMPolicyAssignmentResponse = {}));
var UpdateTemplateRequest;
(function (UpdateTemplateRequest) {
    /**
     * @internal
     */
    UpdateTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTemplateRequest = exports.UpdateTemplateRequest || (exports.UpdateTemplateRequest = {}));
var UpdateTemplateResponse;
(function (UpdateTemplateResponse) {
    /**
     * @internal
     */
    UpdateTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTemplateResponse = exports.UpdateTemplateResponse || (exports.UpdateTemplateResponse = {}));
var UpdateTemplateAliasRequest;
(function (UpdateTemplateAliasRequest) {
    /**
     * @internal
     */
    UpdateTemplateAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTemplateAliasRequest = exports.UpdateTemplateAliasRequest || (exports.UpdateTemplateAliasRequest = {}));
var UpdateTemplateAliasResponse;
(function (UpdateTemplateAliasResponse) {
    /**
     * @internal
     */
    UpdateTemplateAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTemplateAliasResponse = exports.UpdateTemplateAliasResponse || (exports.UpdateTemplateAliasResponse = {}));
var UpdateTemplatePermissionsRequest;
(function (UpdateTemplatePermissionsRequest) {
    /**
     * @internal
     */
    UpdateTemplatePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTemplatePermissionsRequest = exports.UpdateTemplatePermissionsRequest || (exports.UpdateTemplatePermissionsRequest = {}));
var UpdateTemplatePermissionsResponse;
(function (UpdateTemplatePermissionsResponse) {
    /**
     * @internal
     */
    UpdateTemplatePermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTemplatePermissionsResponse = exports.UpdateTemplatePermissionsResponse || (exports.UpdateTemplatePermissionsResponse = {}));
var UpdateThemeRequest;
(function (UpdateThemeRequest) {
    /**
     * @internal
     */
    UpdateThemeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThemeRequest = exports.UpdateThemeRequest || (exports.UpdateThemeRequest = {}));
var UpdateThemeResponse;
(function (UpdateThemeResponse) {
    /**
     * @internal
     */
    UpdateThemeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThemeResponse = exports.UpdateThemeResponse || (exports.UpdateThemeResponse = {}));
var UpdateThemeAliasRequest;
(function (UpdateThemeAliasRequest) {
    /**
     * @internal
     */
    UpdateThemeAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThemeAliasRequest = exports.UpdateThemeAliasRequest || (exports.UpdateThemeAliasRequest = {}));
var UpdateThemeAliasResponse;
(function (UpdateThemeAliasResponse) {
    /**
     * @internal
     */
    UpdateThemeAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThemeAliasResponse = exports.UpdateThemeAliasResponse || (exports.UpdateThemeAliasResponse = {}));
var UpdateThemePermissionsRequest;
(function (UpdateThemePermissionsRequest) {
    /**
     * @internal
     */
    UpdateThemePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThemePermissionsRequest = exports.UpdateThemePermissionsRequest || (exports.UpdateThemePermissionsRequest = {}));
var UpdateThemePermissionsResponse;
(function (UpdateThemePermissionsResponse) {
    /**
     * @internal
     */
    UpdateThemePermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThemePermissionsResponse = exports.UpdateThemePermissionsResponse || (exports.UpdateThemePermissionsResponse = {}));
var UpdateUserRequest;
(function (UpdateUserRequest) {
    /**
     * @internal
     */
    UpdateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserRequest = exports.UpdateUserRequest || (exports.UpdateUserRequest = {}));
var UpdateUserResponse;
(function (UpdateUserResponse) {
    /**
     * @internal
     */
    UpdateUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserResponse = exports.UpdateUserResponse || (exports.UpdateUserResponse = {}));
//# sourceMappingURL=models_1.js.map