import { __extends } from "tslib";
import { QuickSightClient } from "./QuickSightClient";
import { CancelIngestionCommand, } from "./commands/CancelIngestionCommand";
import { CreateAccountCustomizationCommand, } from "./commands/CreateAccountCustomizationCommand";
import { CreateAnalysisCommand, } from "./commands/CreateAnalysisCommand";
import { CreateDashboardCommand, } from "./commands/CreateDashboardCommand";
import { CreateDataSetCommand, } from "./commands/CreateDataSetCommand";
import { CreateDataSourceCommand, } from "./commands/CreateDataSourceCommand";
import { CreateGroupCommand } from "./commands/CreateGroupCommand";
import { CreateGroupMembershipCommand, } from "./commands/CreateGroupMembershipCommand";
import { CreateIAMPolicyAssignmentCommand, } from "./commands/CreateIAMPolicyAssignmentCommand";
import { CreateIngestionCommand, } from "./commands/CreateIngestionCommand";
import { CreateNamespaceCommand, } from "./commands/CreateNamespaceCommand";
import { CreateTemplateAliasCommand, } from "./commands/CreateTemplateAliasCommand";
import { CreateTemplateCommand, } from "./commands/CreateTemplateCommand";
import { CreateThemeAliasCommand, } from "./commands/CreateThemeAliasCommand";
import { CreateThemeCommand } from "./commands/CreateThemeCommand";
import { DeleteAccountCustomizationCommand, } from "./commands/DeleteAccountCustomizationCommand";
import { DeleteAnalysisCommand, } from "./commands/DeleteAnalysisCommand";
import { DeleteDashboardCommand, } from "./commands/DeleteDashboardCommand";
import { DeleteDataSetCommand, } from "./commands/DeleteDataSetCommand";
import { DeleteDataSourceCommand, } from "./commands/DeleteDataSourceCommand";
import { DeleteGroupCommand } from "./commands/DeleteGroupCommand";
import { DeleteGroupMembershipCommand, } from "./commands/DeleteGroupMembershipCommand";
import { DeleteIAMPolicyAssignmentCommand, } from "./commands/DeleteIAMPolicyAssignmentCommand";
import { DeleteNamespaceCommand, } from "./commands/DeleteNamespaceCommand";
import { DeleteTemplateAliasCommand, } from "./commands/DeleteTemplateAliasCommand";
import { DeleteTemplateCommand, } from "./commands/DeleteTemplateCommand";
import { DeleteThemeAliasCommand, } from "./commands/DeleteThemeAliasCommand";
import { DeleteThemeCommand } from "./commands/DeleteThemeCommand";
import { DeleteUserByPrincipalIdCommand, } from "./commands/DeleteUserByPrincipalIdCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DescribeAccountCustomizationCommand, } from "./commands/DescribeAccountCustomizationCommand";
import { DescribeAccountSettingsCommand, } from "./commands/DescribeAccountSettingsCommand";
import { DescribeAnalysisCommand, } from "./commands/DescribeAnalysisCommand";
import { DescribeAnalysisPermissionsCommand, } from "./commands/DescribeAnalysisPermissionsCommand";
import { DescribeDashboardCommand, } from "./commands/DescribeDashboardCommand";
import { DescribeDashboardPermissionsCommand, } from "./commands/DescribeDashboardPermissionsCommand";
import { DescribeDataSetCommand, } from "./commands/DescribeDataSetCommand";
import { DescribeDataSetPermissionsCommand, } from "./commands/DescribeDataSetPermissionsCommand";
import { DescribeDataSourceCommand, } from "./commands/DescribeDataSourceCommand";
import { DescribeDataSourcePermissionsCommand, } from "./commands/DescribeDataSourcePermissionsCommand";
import { DescribeGroupCommand, } from "./commands/DescribeGroupCommand";
import { DescribeIAMPolicyAssignmentCommand, } from "./commands/DescribeIAMPolicyAssignmentCommand";
import { DescribeIngestionCommand, } from "./commands/DescribeIngestionCommand";
import { DescribeNamespaceCommand, } from "./commands/DescribeNamespaceCommand";
import { DescribeTemplateAliasCommand, } from "./commands/DescribeTemplateAliasCommand";
import { DescribeTemplateCommand, } from "./commands/DescribeTemplateCommand";
import { DescribeTemplatePermissionsCommand, } from "./commands/DescribeTemplatePermissionsCommand";
import { DescribeThemeAliasCommand, } from "./commands/DescribeThemeAliasCommand";
import { DescribeThemeCommand, } from "./commands/DescribeThemeCommand";
import { DescribeThemePermissionsCommand, } from "./commands/DescribeThemePermissionsCommand";
import { DescribeUserCommand, } from "./commands/DescribeUserCommand";
import { GetDashboardEmbedUrlCommand, } from "./commands/GetDashboardEmbedUrlCommand";
import { GetSessionEmbedUrlCommand, } from "./commands/GetSessionEmbedUrlCommand";
import { ListAnalysesCommand, } from "./commands/ListAnalysesCommand";
import { ListDashboardVersionsCommand, } from "./commands/ListDashboardVersionsCommand";
import { ListDashboardsCommand, } from "./commands/ListDashboardsCommand";
import { ListDataSetsCommand, } from "./commands/ListDataSetsCommand";
import { ListDataSourcesCommand, } from "./commands/ListDataSourcesCommand";
import { ListGroupMembershipsCommand, } from "./commands/ListGroupMembershipsCommand";
import { ListGroupsCommand } from "./commands/ListGroupsCommand";
import { ListIAMPolicyAssignmentsCommand, } from "./commands/ListIAMPolicyAssignmentsCommand";
import { ListIAMPolicyAssignmentsForUserCommand, } from "./commands/ListIAMPolicyAssignmentsForUserCommand";
import { ListIngestionsCommand, } from "./commands/ListIngestionsCommand";
import { ListNamespacesCommand, } from "./commands/ListNamespacesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListTemplateAliasesCommand, } from "./commands/ListTemplateAliasesCommand";
import { ListTemplateVersionsCommand, } from "./commands/ListTemplateVersionsCommand";
import { ListTemplatesCommand, } from "./commands/ListTemplatesCommand";
import { ListThemeAliasesCommand, } from "./commands/ListThemeAliasesCommand";
import { ListThemeVersionsCommand, } from "./commands/ListThemeVersionsCommand";
import { ListThemesCommand } from "./commands/ListThemesCommand";
import { ListUserGroupsCommand, } from "./commands/ListUserGroupsCommand";
import { ListUsersCommand } from "./commands/ListUsersCommand";
import { RegisterUserCommand, } from "./commands/RegisterUserCommand";
import { RestoreAnalysisCommand, } from "./commands/RestoreAnalysisCommand";
import { SearchAnalysesCommand, } from "./commands/SearchAnalysesCommand";
import { SearchDashboardsCommand, } from "./commands/SearchDashboardsCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAccountCustomizationCommand, } from "./commands/UpdateAccountCustomizationCommand";
import { UpdateAccountSettingsCommand, } from "./commands/UpdateAccountSettingsCommand";
import { UpdateAnalysisCommand, } from "./commands/UpdateAnalysisCommand";
import { UpdateAnalysisPermissionsCommand, } from "./commands/UpdateAnalysisPermissionsCommand";
import { UpdateDashboardCommand, } from "./commands/UpdateDashboardCommand";
import { UpdateDashboardPermissionsCommand, } from "./commands/UpdateDashboardPermissionsCommand";
import { UpdateDashboardPublishedVersionCommand, } from "./commands/UpdateDashboardPublishedVersionCommand";
import { UpdateDataSetCommand, } from "./commands/UpdateDataSetCommand";
import { UpdateDataSetPermissionsCommand, } from "./commands/UpdateDataSetPermissionsCommand";
import { UpdateDataSourceCommand, } from "./commands/UpdateDataSourceCommand";
import { UpdateDataSourcePermissionsCommand, } from "./commands/UpdateDataSourcePermissionsCommand";
import { UpdateGroupCommand } from "./commands/UpdateGroupCommand";
import { UpdateIAMPolicyAssignmentCommand, } from "./commands/UpdateIAMPolicyAssignmentCommand";
import { UpdateTemplateAliasCommand, } from "./commands/UpdateTemplateAliasCommand";
import { UpdateTemplateCommand, } from "./commands/UpdateTemplateCommand";
import { UpdateTemplatePermissionsCommand, } from "./commands/UpdateTemplatePermissionsCommand";
import { UpdateThemeAliasCommand, } from "./commands/UpdateThemeAliasCommand";
import { UpdateThemeCommand } from "./commands/UpdateThemeCommand";
import { UpdateThemePermissionsCommand, } from "./commands/UpdateThemePermissionsCommand";
import { UpdateUserCommand } from "./commands/UpdateUserCommand";
/**
 * <fullname>Amazon QuickSight API Reference</fullname>
 *         <p>Amazon QuickSight is a fully managed, serverless business intelligence service for the
 *             AWS Cloud that makes it easy to extend data and insights to every user in your
 *             organization. This API reference contains documentation for a programming interface that
 *             you can use to manage Amazon QuickSight. </p>
 */
var QuickSight = /** @class */ (function (_super) {
    __extends(QuickSight, _super);
    function QuickSight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickSight.prototype.cancelIngestion = function (args, optionsOrCb, cb) {
        var command = new CancelIngestionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createAccountCustomization = function (args, optionsOrCb, cb) {
        var command = new CreateAccountCustomizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createAnalysis = function (args, optionsOrCb, cb) {
        var command = new CreateAnalysisCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createDashboard = function (args, optionsOrCb, cb) {
        var command = new CreateDashboardCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createDataSet = function (args, optionsOrCb, cb) {
        var command = new CreateDataSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createDataSource = function (args, optionsOrCb, cb) {
        var command = new CreateDataSourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createGroup = function (args, optionsOrCb, cb) {
        var command = new CreateGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createGroupMembership = function (args, optionsOrCb, cb) {
        var command = new CreateGroupMembershipCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createIAMPolicyAssignment = function (args, optionsOrCb, cb) {
        var command = new CreateIAMPolicyAssignmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createIngestion = function (args, optionsOrCb, cb) {
        var command = new CreateIngestionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createNamespace = function (args, optionsOrCb, cb) {
        var command = new CreateNamespaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createTemplate = function (args, optionsOrCb, cb) {
        var command = new CreateTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createTemplateAlias = function (args, optionsOrCb, cb) {
        var command = new CreateTemplateAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createTheme = function (args, optionsOrCb, cb) {
        var command = new CreateThemeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.createThemeAlias = function (args, optionsOrCb, cb) {
        var command = new CreateThemeAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteAccountCustomization = function (args, optionsOrCb, cb) {
        var command = new DeleteAccountCustomizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteAnalysis = function (args, optionsOrCb, cb) {
        var command = new DeleteAnalysisCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteDashboard = function (args, optionsOrCb, cb) {
        var command = new DeleteDashboardCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteDataSet = function (args, optionsOrCb, cb) {
        var command = new DeleteDataSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteDataSource = function (args, optionsOrCb, cb) {
        var command = new DeleteDataSourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteGroupMembership = function (args, optionsOrCb, cb) {
        var command = new DeleteGroupMembershipCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteIAMPolicyAssignment = function (args, optionsOrCb, cb) {
        var command = new DeleteIAMPolicyAssignmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteNamespace = function (args, optionsOrCb, cb) {
        var command = new DeleteNamespaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteTemplate = function (args, optionsOrCb, cb) {
        var command = new DeleteTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteTemplateAlias = function (args, optionsOrCb, cb) {
        var command = new DeleteTemplateAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteTheme = function (args, optionsOrCb, cb) {
        var command = new DeleteThemeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteThemeAlias = function (args, optionsOrCb, cb) {
        var command = new DeleteThemeAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteUser = function (args, optionsOrCb, cb) {
        var command = new DeleteUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.deleteUserByPrincipalId = function (args, optionsOrCb, cb) {
        var command = new DeleteUserByPrincipalIdCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeAccountCustomization = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountCustomizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeAccountSettings = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeAnalysis = function (args, optionsOrCb, cb) {
        var command = new DescribeAnalysisCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeAnalysisPermissions = function (args, optionsOrCb, cb) {
        var command = new DescribeAnalysisPermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeDashboard = function (args, optionsOrCb, cb) {
        var command = new DescribeDashboardCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeDashboardPermissions = function (args, optionsOrCb, cb) {
        var command = new DescribeDashboardPermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeDataSet = function (args, optionsOrCb, cb) {
        var command = new DescribeDataSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeDataSetPermissions = function (args, optionsOrCb, cb) {
        var command = new DescribeDataSetPermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeDataSource = function (args, optionsOrCb, cb) {
        var command = new DescribeDataSourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeDataSourcePermissions = function (args, optionsOrCb, cb) {
        var command = new DescribeDataSourcePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeGroup = function (args, optionsOrCb, cb) {
        var command = new DescribeGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeIAMPolicyAssignment = function (args, optionsOrCb, cb) {
        var command = new DescribeIAMPolicyAssignmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeIngestion = function (args, optionsOrCb, cb) {
        var command = new DescribeIngestionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeNamespace = function (args, optionsOrCb, cb) {
        var command = new DescribeNamespaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeTemplate = function (args, optionsOrCb, cb) {
        var command = new DescribeTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeTemplateAlias = function (args, optionsOrCb, cb) {
        var command = new DescribeTemplateAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeTemplatePermissions = function (args, optionsOrCb, cb) {
        var command = new DescribeTemplatePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeTheme = function (args, optionsOrCb, cb) {
        var command = new DescribeThemeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeThemeAlias = function (args, optionsOrCb, cb) {
        var command = new DescribeThemeAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeThemePermissions = function (args, optionsOrCb, cb) {
        var command = new DescribeThemePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.describeUser = function (args, optionsOrCb, cb) {
        var command = new DescribeUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.getDashboardEmbedUrl = function (args, optionsOrCb, cb) {
        var command = new GetDashboardEmbedUrlCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.getSessionEmbedUrl = function (args, optionsOrCb, cb) {
        var command = new GetSessionEmbedUrlCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listAnalyses = function (args, optionsOrCb, cb) {
        var command = new ListAnalysesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listDashboards = function (args, optionsOrCb, cb) {
        var command = new ListDashboardsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listDashboardVersions = function (args, optionsOrCb, cb) {
        var command = new ListDashboardVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listDataSets = function (args, optionsOrCb, cb) {
        var command = new ListDataSetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listDataSources = function (args, optionsOrCb, cb) {
        var command = new ListDataSourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listGroupMemberships = function (args, optionsOrCb, cb) {
        var command = new ListGroupMembershipsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listGroups = function (args, optionsOrCb, cb) {
        var command = new ListGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listIAMPolicyAssignments = function (args, optionsOrCb, cb) {
        var command = new ListIAMPolicyAssignmentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listIAMPolicyAssignmentsForUser = function (args, optionsOrCb, cb) {
        var command = new ListIAMPolicyAssignmentsForUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listIngestions = function (args, optionsOrCb, cb) {
        var command = new ListIngestionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listNamespaces = function (args, optionsOrCb, cb) {
        var command = new ListNamespacesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listTemplateAliases = function (args, optionsOrCb, cb) {
        var command = new ListTemplateAliasesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listTemplates = function (args, optionsOrCb, cb) {
        var command = new ListTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listTemplateVersions = function (args, optionsOrCb, cb) {
        var command = new ListTemplateVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listThemeAliases = function (args, optionsOrCb, cb) {
        var command = new ListThemeAliasesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listThemes = function (args, optionsOrCb, cb) {
        var command = new ListThemesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listThemeVersions = function (args, optionsOrCb, cb) {
        var command = new ListThemeVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listUserGroups = function (args, optionsOrCb, cb) {
        var command = new ListUserGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.listUsers = function (args, optionsOrCb, cb) {
        var command = new ListUsersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.registerUser = function (args, optionsOrCb, cb) {
        var command = new RegisterUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.restoreAnalysis = function (args, optionsOrCb, cb) {
        var command = new RestoreAnalysisCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.searchAnalyses = function (args, optionsOrCb, cb) {
        var command = new SearchAnalysesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.searchDashboards = function (args, optionsOrCb, cb) {
        var command = new SearchDashboardsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateAccountCustomization = function (args, optionsOrCb, cb) {
        var command = new UpdateAccountCustomizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateAccountSettings = function (args, optionsOrCb, cb) {
        var command = new UpdateAccountSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateAnalysis = function (args, optionsOrCb, cb) {
        var command = new UpdateAnalysisCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateAnalysisPermissions = function (args, optionsOrCb, cb) {
        var command = new UpdateAnalysisPermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateDashboard = function (args, optionsOrCb, cb) {
        var command = new UpdateDashboardCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateDashboardPermissions = function (args, optionsOrCb, cb) {
        var command = new UpdateDashboardPermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateDashboardPublishedVersion = function (args, optionsOrCb, cb) {
        var command = new UpdateDashboardPublishedVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateDataSet = function (args, optionsOrCb, cb) {
        var command = new UpdateDataSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateDataSetPermissions = function (args, optionsOrCb, cb) {
        var command = new UpdateDataSetPermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateDataSource = function (args, optionsOrCb, cb) {
        var command = new UpdateDataSourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateDataSourcePermissions = function (args, optionsOrCb, cb) {
        var command = new UpdateDataSourcePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateIAMPolicyAssignment = function (args, optionsOrCb, cb) {
        var command = new UpdateIAMPolicyAssignmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateTemplate = function (args, optionsOrCb, cb) {
        var command = new UpdateTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateTemplateAlias = function (args, optionsOrCb, cb) {
        var command = new UpdateTemplateAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateTemplatePermissions = function (args, optionsOrCb, cb) {
        var command = new UpdateTemplatePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateTheme = function (args, optionsOrCb, cb) {
        var command = new UpdateThemeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateThemeAlias = function (args, optionsOrCb, cb) {
        var command = new UpdateThemeAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateThemePermissions = function (args, optionsOrCb, cb) {
        var command = new UpdateThemePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    QuickSight.prototype.updateUser = function (args, optionsOrCb, cb) {
        var command = new UpdateUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return QuickSight;
}(QuickSightClient));
export { QuickSight };
//# sourceMappingURL=QuickSight.js.map