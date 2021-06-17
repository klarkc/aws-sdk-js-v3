import { QuickSightClient } from "./QuickSightClient";
import { CancelIngestionCommandInput, CancelIngestionCommandOutput } from "./commands/CancelIngestionCommand";
import { CreateAccountCustomizationCommandInput, CreateAccountCustomizationCommandOutput } from "./commands/CreateAccountCustomizationCommand";
import { CreateAnalysisCommandInput, CreateAnalysisCommandOutput } from "./commands/CreateAnalysisCommand";
import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "./commands/CreateDashboardCommand";
import { CreateDataSetCommandInput, CreateDataSetCommandOutput } from "./commands/CreateDataSetCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { CreateGroupMembershipCommandInput, CreateGroupMembershipCommandOutput } from "./commands/CreateGroupMembershipCommand";
import { CreateIAMPolicyAssignmentCommandInput, CreateIAMPolicyAssignmentCommandOutput } from "./commands/CreateIAMPolicyAssignmentCommand";
import { CreateIngestionCommandInput, CreateIngestionCommandOutput } from "./commands/CreateIngestionCommand";
import { CreateNamespaceCommandInput, CreateNamespaceCommandOutput } from "./commands/CreateNamespaceCommand";
import { CreateTemplateAliasCommandInput, CreateTemplateAliasCommandOutput } from "./commands/CreateTemplateAliasCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "./commands/CreateTemplateCommand";
import { CreateThemeAliasCommandInput, CreateThemeAliasCommandOutput } from "./commands/CreateThemeAliasCommand";
import { CreateThemeCommandInput, CreateThemeCommandOutput } from "./commands/CreateThemeCommand";
import { DeleteAccountCustomizationCommandInput, DeleteAccountCustomizationCommandOutput } from "./commands/DeleteAccountCustomizationCommand";
import { DeleteAnalysisCommandInput, DeleteAnalysisCommandOutput } from "./commands/DeleteAnalysisCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "./commands/DeleteDashboardCommand";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "./commands/DeleteDataSetCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DeleteGroupMembershipCommandInput, DeleteGroupMembershipCommandOutput } from "./commands/DeleteGroupMembershipCommand";
import { DeleteIAMPolicyAssignmentCommandInput, DeleteIAMPolicyAssignmentCommandOutput } from "./commands/DeleteIAMPolicyAssignmentCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import { DeleteTemplateAliasCommandInput, DeleteTemplateAliasCommandOutput } from "./commands/DeleteTemplateAliasCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "./commands/DeleteTemplateCommand";
import { DeleteThemeAliasCommandInput, DeleteThemeAliasCommandOutput } from "./commands/DeleteThemeAliasCommand";
import { DeleteThemeCommandInput, DeleteThemeCommandOutput } from "./commands/DeleteThemeCommand";
import { DeleteUserByPrincipalIdCommandInput, DeleteUserByPrincipalIdCommandOutput } from "./commands/DeleteUserByPrincipalIdCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DescribeAccountCustomizationCommandInput, DescribeAccountCustomizationCommandOutput } from "./commands/DescribeAccountCustomizationCommand";
import { DescribeAccountSettingsCommandInput, DescribeAccountSettingsCommandOutput } from "./commands/DescribeAccountSettingsCommand";
import { DescribeAnalysisCommandInput, DescribeAnalysisCommandOutput } from "./commands/DescribeAnalysisCommand";
import { DescribeAnalysisPermissionsCommandInput, DescribeAnalysisPermissionsCommandOutput } from "./commands/DescribeAnalysisPermissionsCommand";
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "./commands/DescribeDashboardCommand";
import { DescribeDashboardPermissionsCommandInput, DescribeDashboardPermissionsCommandOutput } from "./commands/DescribeDashboardPermissionsCommand";
import { DescribeDataSetCommandInput, DescribeDataSetCommandOutput } from "./commands/DescribeDataSetCommand";
import { DescribeDataSetPermissionsCommandInput, DescribeDataSetPermissionsCommandOutput } from "./commands/DescribeDataSetPermissionsCommand";
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "./commands/DescribeDataSourceCommand";
import { DescribeDataSourcePermissionsCommandInput, DescribeDataSourcePermissionsCommandOutput } from "./commands/DescribeDataSourcePermissionsCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import { DescribeIAMPolicyAssignmentCommandInput, DescribeIAMPolicyAssignmentCommandOutput } from "./commands/DescribeIAMPolicyAssignmentCommand";
import { DescribeIngestionCommandInput, DescribeIngestionCommandOutput } from "./commands/DescribeIngestionCommand";
import { DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput } from "./commands/DescribeNamespaceCommand";
import { DescribeTemplateAliasCommandInput, DescribeTemplateAliasCommandOutput } from "./commands/DescribeTemplateAliasCommand";
import { DescribeTemplateCommandInput, DescribeTemplateCommandOutput } from "./commands/DescribeTemplateCommand";
import { DescribeTemplatePermissionsCommandInput, DescribeTemplatePermissionsCommandOutput } from "./commands/DescribeTemplatePermissionsCommand";
import { DescribeThemeAliasCommandInput, DescribeThemeAliasCommandOutput } from "./commands/DescribeThemeAliasCommand";
import { DescribeThemeCommandInput, DescribeThemeCommandOutput } from "./commands/DescribeThemeCommand";
import { DescribeThemePermissionsCommandInput, DescribeThemePermissionsCommandOutput } from "./commands/DescribeThemePermissionsCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import { GetDashboardEmbedUrlCommandInput, GetDashboardEmbedUrlCommandOutput } from "./commands/GetDashboardEmbedUrlCommand";
import { GetSessionEmbedUrlCommandInput, GetSessionEmbedUrlCommandOutput } from "./commands/GetSessionEmbedUrlCommand";
import { ListAnalysesCommandInput, ListAnalysesCommandOutput } from "./commands/ListAnalysesCommand";
import { ListDashboardVersionsCommandInput, ListDashboardVersionsCommandOutput } from "./commands/ListDashboardVersionsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "./commands/ListDataSetsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import { ListGroupMembershipsCommandInput, ListGroupMembershipsCommandOutput } from "./commands/ListGroupMembershipsCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { ListIAMPolicyAssignmentsCommandInput, ListIAMPolicyAssignmentsCommandOutput } from "./commands/ListIAMPolicyAssignmentsCommand";
import { ListIAMPolicyAssignmentsForUserCommandInput, ListIAMPolicyAssignmentsForUserCommandOutput } from "./commands/ListIAMPolicyAssignmentsForUserCommand";
import { ListIngestionsCommandInput, ListIngestionsCommandOutput } from "./commands/ListIngestionsCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "./commands/ListNamespacesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTemplateAliasesCommandInput, ListTemplateAliasesCommandOutput } from "./commands/ListTemplateAliasesCommand";
import { ListTemplateVersionsCommandInput, ListTemplateVersionsCommandOutput } from "./commands/ListTemplateVersionsCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "./commands/ListTemplatesCommand";
import { ListThemeAliasesCommandInput, ListThemeAliasesCommandOutput } from "./commands/ListThemeAliasesCommand";
import { ListThemeVersionsCommandInput, ListThemeVersionsCommandOutput } from "./commands/ListThemeVersionsCommand";
import { ListThemesCommandInput, ListThemesCommandOutput } from "./commands/ListThemesCommand";
import { ListUserGroupsCommandInput, ListUserGroupsCommandOutput } from "./commands/ListUserGroupsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { RegisterUserCommandInput, RegisterUserCommandOutput } from "./commands/RegisterUserCommand";
import { RestoreAnalysisCommandInput, RestoreAnalysisCommandOutput } from "./commands/RestoreAnalysisCommand";
import { SearchAnalysesCommandInput, SearchAnalysesCommandOutput } from "./commands/SearchAnalysesCommand";
import { SearchDashboardsCommandInput, SearchDashboardsCommandOutput } from "./commands/SearchDashboardsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccountCustomizationCommandInput, UpdateAccountCustomizationCommandOutput } from "./commands/UpdateAccountCustomizationCommand";
import { UpdateAccountSettingsCommandInput, UpdateAccountSettingsCommandOutput } from "./commands/UpdateAccountSettingsCommand";
import { UpdateAnalysisCommandInput, UpdateAnalysisCommandOutput } from "./commands/UpdateAnalysisCommand";
import { UpdateAnalysisPermissionsCommandInput, UpdateAnalysisPermissionsCommandOutput } from "./commands/UpdateAnalysisPermissionsCommand";
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "./commands/UpdateDashboardCommand";
import { UpdateDashboardPermissionsCommandInput, UpdateDashboardPermissionsCommandOutput } from "./commands/UpdateDashboardPermissionsCommand";
import { UpdateDashboardPublishedVersionCommandInput, UpdateDashboardPublishedVersionCommandOutput } from "./commands/UpdateDashboardPublishedVersionCommand";
import { UpdateDataSetCommandInput, UpdateDataSetCommandOutput } from "./commands/UpdateDataSetCommand";
import { UpdateDataSetPermissionsCommandInput, UpdateDataSetPermissionsCommandOutput } from "./commands/UpdateDataSetPermissionsCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateDataSourcePermissionsCommandInput, UpdateDataSourcePermissionsCommandOutput } from "./commands/UpdateDataSourcePermissionsCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import { UpdateIAMPolicyAssignmentCommandInput, UpdateIAMPolicyAssignmentCommandOutput } from "./commands/UpdateIAMPolicyAssignmentCommand";
import { UpdateTemplateAliasCommandInput, UpdateTemplateAliasCommandOutput } from "./commands/UpdateTemplateAliasCommand";
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "./commands/UpdateTemplateCommand";
import { UpdateTemplatePermissionsCommandInput, UpdateTemplatePermissionsCommandOutput } from "./commands/UpdateTemplatePermissionsCommand";
import { UpdateThemeAliasCommandInput, UpdateThemeAliasCommandOutput } from "./commands/UpdateThemeAliasCommand";
import { UpdateThemeCommandInput, UpdateThemeCommandOutput } from "./commands/UpdateThemeCommand";
import { UpdateThemePermissionsCommandInput, UpdateThemePermissionsCommandOutput } from "./commands/UpdateThemePermissionsCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon QuickSight API Reference</fullname>
 *         <p>Amazon QuickSight is a fully managed, serverless business intelligence service for the
 *             AWS Cloud that makes it easy to extend data and insights to every user in your
 *             organization. This API reference contains documentation for a programming interface that
 *             you can use to manage Amazon QuickSight. </p>
 */
export declare class QuickSight extends QuickSightClient {
    /**
     * <p>Cancels an ongoing ingestion of data into SPICE.</p>
     */
    cancelIngestion(args: CancelIngestionCommandInput, options?: __HttpHandlerOptions): Promise<CancelIngestionCommandOutput>;
    cancelIngestion(args: CancelIngestionCommandInput, cb: (err: any, data?: CancelIngestionCommandOutput) => void): void;
    cancelIngestion(args: CancelIngestionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelIngestionCommandOutput) => void): void;
    /**
     * <p>Creates Amazon QuickSight customizations the current AWS Region. Currently, you can
     *             add a custom default theme by using the <code>CreateAccountCustomization</code> or
     *                 <code>UpdateAccountCustomization</code> API operation. To further customize
     *             QuickSight by removing QuickSight sample assets and videos for all new users, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight.html">Customizing QuickSight</a> in the <i>Amazon QuickSight User
     *                 Guide.</i>
     *          </p>
     *         <p>You can create customizations for your AWS account or, if you specify a namespace, for
     *             a QuickSight namespace instead. Customizations that apply to a namespace always override
     *             customizations that apply to an AWS account. To find out which customizations apply, use
     *             the <code>DescribeAccountCustomization</code> API operation.</p>
     *         <p>Before you use the <code>CreateAccountCustomization</code> API operation to add a theme
     *             as the namespace default, make sure that you first share the theme with the namespace.
     *             If you don't share it with the namespace, the theme isn't visible to your users
     *             even if you make it the default theme.
     *             To check if the theme is shared, view the current permissions by using the
     *             <code>
     *                <a>DescribeThemePermissions</a>
     *             </code> API operation.
     *             To share the theme, grant permissions by using the
     *             <code>
     *                <a>UpdateThemePermissions</a>
     *             </code> API operation. </p>
     */
    createAccountCustomization(args: CreateAccountCustomizationCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccountCustomizationCommandOutput>;
    createAccountCustomization(args: CreateAccountCustomizationCommandInput, cb: (err: any, data?: CreateAccountCustomizationCommandOutput) => void): void;
    createAccountCustomization(args: CreateAccountCustomizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAccountCustomizationCommandOutput) => void): void;
    /**
     * <p>Creates an analysis in Amazon QuickSight.</p>
     */
    createAnalysis(args: CreateAnalysisCommandInput, options?: __HttpHandlerOptions): Promise<CreateAnalysisCommandOutput>;
    createAnalysis(args: CreateAnalysisCommandInput, cb: (err: any, data?: CreateAnalysisCommandOutput) => void): void;
    createAnalysis(args: CreateAnalysisCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAnalysisCommandOutput) => void): void;
    /**
     * <p>Creates a dashboard from a template. To first create a template, see the <code>
     *                <a>CreateTemplate</a>
     *             </code> API operation.</p>
     *         <p>A dashboard is an entity in QuickSight that identifies QuickSight reports, created
     *             from analyses. You can share QuickSight dashboards. With the right permissions, you can
     *             create scheduled email reports from them. If you have the correct permissions, you can
     *             create a dashboard from a template that exists in a different AWS account.</p>
     */
    createDashboard(args: CreateDashboardCommandInput, options?: __HttpHandlerOptions): Promise<CreateDashboardCommandOutput>;
    createDashboard(args: CreateDashboardCommandInput, cb: (err: any, data?: CreateDashboardCommandOutput) => void): void;
    createDashboard(args: CreateDashboardCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDashboardCommandOutput) => void): void;
    /**
     * <p>Creates a dataset.</p>
     */
    createDataSet(args: CreateDataSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDataSetCommandOutput>;
    createDataSet(args: CreateDataSetCommandInput, cb: (err: any, data?: CreateDataSetCommandOutput) => void): void;
    createDataSet(args: CreateDataSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDataSetCommandOutput) => void): void;
    /**
     * <p>Creates a data source.</p>
     */
    createDataSource(args: CreateDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<CreateDataSourceCommandOutput>;
    createDataSource(args: CreateDataSourceCommandInput, cb: (err: any, data?: CreateDataSourceCommandOutput) => void): void;
    createDataSource(args: CreateDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDataSourceCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon QuickSight group.</p>
     * 		       <p>The permissions resource is
     * 					<code>arn:aws:quicksight:us-east-1:<i><relevant-aws-account-id></i>:group/default/<i><group-name></i>
     *             </code>.</p>
     * 		       <p>The response is a group object.</p>
     */
    createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
    createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    createGroup(args: CreateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    /**
     * <p>Adds an Amazon QuickSight user to an Amazon QuickSight group. </p>
     */
    createGroupMembership(args: CreateGroupMembershipCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupMembershipCommandOutput>;
    createGroupMembership(args: CreateGroupMembershipCommandInput, cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void): void;
    createGroupMembership(args: CreateGroupMembershipCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void): void;
    /**
     * <p>Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name
     * 			(ARN). This policy assignment is attached to the specified groups or users of Amazon QuickSight.
     * 			Assignment names are unique per AWS account. To avoid overwriting rules in other namespaces,
     * 			use assignment names that are unique.</p>
     */
    createIAMPolicyAssignment(args: CreateIAMPolicyAssignmentCommandInput, options?: __HttpHandlerOptions): Promise<CreateIAMPolicyAssignmentCommandOutput>;
    createIAMPolicyAssignment(args: CreateIAMPolicyAssignmentCommandInput, cb: (err: any, data?: CreateIAMPolicyAssignmentCommandOutput) => void): void;
    createIAMPolicyAssignment(args: CreateIAMPolicyAssignmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateIAMPolicyAssignmentCommandOutput) => void): void;
    /**
     * <p>Creates and starts a new SPICE ingestion on a dataset</p>
     *
     * 		       <p>Any ingestions operating on tagged datasets inherit the same tags automatically for use in
     * 			access control. For an example, see <a href="http://aws.amazon.com/premiumsupport/knowledge-center/iam-ec2-resource-tags/">How do I create an IAM policy to control access to Amazon EC2 resources using
     * 				tags?</a> in the AWS Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.</p>
     */
    createIngestion(args: CreateIngestionCommandInput, options?: __HttpHandlerOptions): Promise<CreateIngestionCommandOutput>;
    createIngestion(args: CreateIngestionCommandInput, cb: (err: any, data?: CreateIngestionCommandOutput) => void): void;
    createIngestion(args: CreateIngestionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateIngestionCommandOutput) => void): void;
    /**
     * <p>(Enterprise edition only) Creates a new namespace for you to use with Amazon QuickSight.</p>
     *         <p>A namespace allows you to isolate the QuickSight users and groups that are registered
     *             for that namespace. Users that access the namespace can share assets only with other
     *             users or groups in the same namespace. They can't see users and groups in other
     *             namespaces. You can create a namespace after your AWS account is subscribed to
     *             QuickSight. The namespace must be unique within the AWS account. By default, there is a
     *             limit of 100 namespaces per AWS account. To increase your limit, create a ticket with
     *             AWS Support. </p>
     */
    createNamespace(args: CreateNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<CreateNamespaceCommandOutput>;
    createNamespace(args: CreateNamespaceCommandInput, cb: (err: any, data?: CreateNamespaceCommandOutput) => void): void;
    createNamespace(args: CreateNamespaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNamespaceCommandOutput) => void): void;
    /**
     * <p>Creates a template from an existing QuickSight analysis or template. You can use the resulting
     * 			template to create a dashboard.</p>
     * 		       <p>A <i>template</i> is an entity in QuickSight that encapsulates the metadata
     * 			required to create an analysis and that you can use to create s dashboard. A template adds
     * 			a layer of abstraction by using placeholders to replace the dataset associated with the
     * 			analysis. You can use templates to create dashboards by replacing dataset placeholders
     * 			with datasets that follow the same schema that was used to create the source analysis
     * 			and template.</p>
     */
    createTemplate(args: CreateTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateTemplateCommandOutput>;
    createTemplate(args: CreateTemplateCommandInput, cb: (err: any, data?: CreateTemplateCommandOutput) => void): void;
    createTemplate(args: CreateTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTemplateCommandOutput) => void): void;
    /**
     * <p>Creates a template alias for a template.</p>
     */
    createTemplateAlias(args: CreateTemplateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateTemplateAliasCommandOutput>;
    createTemplateAlias(args: CreateTemplateAliasCommandInput, cb: (err: any, data?: CreateTemplateAliasCommandOutput) => void): void;
    createTemplateAlias(args: CreateTemplateAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTemplateAliasCommandOutput) => void): void;
    /**
     * <p>Creates a theme.</p>
     * 		       <p>A <i>theme</i> is set of configuration options for color and layout.
     * 			Themes apply to analyses and dashboards. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using
     * 			Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
     */
    createTheme(args: CreateThemeCommandInput, options?: __HttpHandlerOptions): Promise<CreateThemeCommandOutput>;
    createTheme(args: CreateThemeCommandInput, cb: (err: any, data?: CreateThemeCommandOutput) => void): void;
    createTheme(args: CreateThemeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateThemeCommandOutput) => void): void;
    /**
     * <p>Creates a theme alias for a theme.</p>
     */
    createThemeAlias(args: CreateThemeAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateThemeAliasCommandOutput>;
    createThemeAlias(args: CreateThemeAliasCommandInput, cb: (err: any, data?: CreateThemeAliasCommandOutput) => void): void;
    createThemeAlias(args: CreateThemeAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateThemeAliasCommandOutput) => void): void;
    /**
     * <p>Deletes all Amazon QuickSight customizations in this AWS Region for the specified AWS
     *             account and QuickSight namespace.</p>
     */
    deleteAccountCustomization(args: DeleteAccountCustomizationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccountCustomizationCommandOutput>;
    deleteAccountCustomization(args: DeleteAccountCustomizationCommandInput, cb: (err: any, data?: DeleteAccountCustomizationCommandOutput) => void): void;
    deleteAccountCustomization(args: DeleteAccountCustomizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccountCustomizationCommandOutput) => void): void;
    /**
     * <p>Deletes an analysis from Amazon QuickSight. You can optionally include a recovery window during
     *             which you can restore the analysis. If you don't specify a recovery window value, the
     *             operation defaults to 30 days. QuickSight attaches a <code>DeletionTime</code> stamp to
     *             the response that specifies the end of the recovery window. At the end of the recovery
     *             window, QuickSight deletes the analysis permanently.</p>
     *         <p>At any time before recovery window ends, you can use the <code>RestoreAnalysis</code>
     *             API operation to remove the <code>DeletionTime</code> stamp and cancel the deletion of
     *             the analysis. The analysis remains visible in the API until it's deleted, so you can
     *             describe it but you can't make a template from it.</p>
     *         <p>An analysis that's scheduled for deletion isn't accessible in the QuickSight console.
     *             To access it in the console, restore it. Deleting an analysis doesn't delete the
     *             dashboards that you publish from it.</p>
     */
    deleteAnalysis(args: DeleteAnalysisCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAnalysisCommandOutput>;
    deleteAnalysis(args: DeleteAnalysisCommandInput, cb: (err: any, data?: DeleteAnalysisCommandOutput) => void): void;
    deleteAnalysis(args: DeleteAnalysisCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAnalysisCommandOutput) => void): void;
    /**
     * <p>Deletes a dashboard.</p>
     */
    deleteDashboard(args: DeleteDashboardCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDashboardCommandOutput>;
    deleteDashboard(args: DeleteDashboardCommandInput, cb: (err: any, data?: DeleteDashboardCommandOutput) => void): void;
    deleteDashboard(args: DeleteDashboardCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDashboardCommandOutput) => void): void;
    /**
     * <p>Deletes a dataset.</p>
     */
    deleteDataSet(args: DeleteDataSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDataSetCommandOutput>;
    deleteDataSet(args: DeleteDataSetCommandInput, cb: (err: any, data?: DeleteDataSetCommandOutput) => void): void;
    deleteDataSet(args: DeleteDataSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDataSetCommandOutput) => void): void;
    /**
     * <p>Deletes the data source permanently. This operation breaks
     * 			all the datasets that reference the deleted data source.</p>
     */
    deleteDataSource(args: DeleteDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDataSourceCommandOutput>;
    deleteDataSource(args: DeleteDataSourceCommandInput, cb: (err: any, data?: DeleteDataSourceCommandOutput) => void): void;
    deleteDataSource(args: DeleteDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDataSourceCommandOutput) => void): void;
    /**
     * <p>Removes a user group from Amazon QuickSight. </p>
     */
    deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
    deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    deleteGroup(args: DeleteGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    /**
     * <p>Removes a user from a group so that the user is no longer a member of the group.</p>
     */
    deleteGroupMembership(args: DeleteGroupMembershipCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupMembershipCommandOutput>;
    deleteGroupMembership(args: DeleteGroupMembershipCommandInput, cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void): void;
    deleteGroupMembership(args: DeleteGroupMembershipCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void): void;
    /**
     * <p>Deletes an existing IAM policy assignment.</p>
     */
    deleteIAMPolicyAssignment(args: DeleteIAMPolicyAssignmentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIAMPolicyAssignmentCommandOutput>;
    deleteIAMPolicyAssignment(args: DeleteIAMPolicyAssignmentCommandInput, cb: (err: any, data?: DeleteIAMPolicyAssignmentCommandOutput) => void): void;
    deleteIAMPolicyAssignment(args: DeleteIAMPolicyAssignmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIAMPolicyAssignmentCommandOutput) => void): void;
    /**
     * <p>Deletes a namespace and the users and groups that are associated with the namespace.
     *         This is an asynchronous process. Assets including dashboards, analyses, datasets and data sources are not
     *         deleted. To delete these assets, you use the API operations for the relevant asset. </p>
     */
    deleteNamespace(args: DeleteNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNamespaceCommandOutput>;
    deleteNamespace(args: DeleteNamespaceCommandInput, cb: (err: any, data?: DeleteNamespaceCommandOutput) => void): void;
    deleteNamespace(args: DeleteNamespaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNamespaceCommandOutput) => void): void;
    /**
     * <p>Deletes a template.</p>
     */
    deleteTemplate(args: DeleteTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTemplateCommandOutput>;
    deleteTemplate(args: DeleteTemplateCommandInput, cb: (err: any, data?: DeleteTemplateCommandOutput) => void): void;
    deleteTemplate(args: DeleteTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes the item that the specified template alias points to. If you provide a specific
     * 			alias, you delete the version of the template that the alias points to.</p>
     */
    deleteTemplateAlias(args: DeleteTemplateAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTemplateAliasCommandOutput>;
    deleteTemplateAlias(args: DeleteTemplateAliasCommandInput, cb: (err: any, data?: DeleteTemplateAliasCommandOutput) => void): void;
    deleteTemplateAlias(args: DeleteTemplateAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTemplateAliasCommandOutput) => void): void;
    /**
     * <p>Deletes a theme.</p>
     */
    deleteTheme(args: DeleteThemeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThemeCommandOutput>;
    deleteTheme(args: DeleteThemeCommandInput, cb: (err: any, data?: DeleteThemeCommandOutput) => void): void;
    deleteTheme(args: DeleteThemeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteThemeCommandOutput) => void): void;
    /**
     * <p>Deletes the version of the theme that the specified theme alias points to.
     * 			If you provide a specific alias, you delete the version of the theme
     * 			that the alias points to.</p>
     */
    deleteThemeAlias(args: DeleteThemeAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThemeAliasCommandOutput>;
    deleteThemeAlias(args: DeleteThemeAliasCommandInput, cb: (err: any, data?: DeleteThemeAliasCommandOutput) => void): void;
    deleteThemeAlias(args: DeleteThemeAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteThemeAliasCommandOutput) => void): void;
    /**
     * <p>Deletes the Amazon QuickSight user that is associated with the identity of the AWS
     * 			Identity and Access Management (IAM) user or role that's making the call. The IAM user
     * 			isn't deleted as a result of this call. </p>
     */
    deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
    deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    deleteUser(args: DeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    /**
     * <p>Deletes a user identified by its principal ID. </p>
     */
    deleteUserByPrincipalId(args: DeleteUserByPrincipalIdCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserByPrincipalIdCommandOutput>;
    deleteUserByPrincipalId(args: DeleteUserByPrincipalIdCommandInput, cb: (err: any, data?: DeleteUserByPrincipalIdCommandOutput) => void): void;
    deleteUserByPrincipalId(args: DeleteUserByPrincipalIdCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserByPrincipalIdCommandOutput) => void): void;
    /**
     * <p>Describes the customizations associated with the provided AWS account and Amazon
     *             QuickSight namespace in an AWS Region. The QuickSight console evaluates which
     *             customizations to apply by running this API operation with the <code>Resolved</code> flag
     *             included. </p>
     *         <p>To determine what customizations display when you run this command, it can help to
     *             visualize the relationship of the entities involved. </p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>AWS Account</code> - The AWS account exists at the top of the hierarchy.
     *                     It has the potential to use all of the AWS Regions and AWS Services. When you
     *                     subscribe to QuickSight, you choose one AWS Region to use as your home Region.
     *                     That's where your free SPICE capacity is located. You can use QuickSight in any
     *                     supported AWS Region. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>AWS Region</code> - In each AWS Region where you sign in to QuickSight
     *                     at least once, QuickSight acts as a separate instance of the same service. If
     *                     you have a user directory, it resides in us-east-1, which is the US East (N.
     *                     Virginia). Generally speaking, these users have access to QuickSight in any AWS
     *                     Region, unless they are constrained to a namespace. </p>
     *                 <p>To run the command in a different AWS Region, you change your Region settings.
     *                     If you're using the AWS CLI, you can use one of the following options:</p>
     *                 <ul>
     *                   <li>
     *                         <p>Use <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-options.html">command line options</a>. </p>
     *                     </li>
     *                   <li>
     *                         <p>Use <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html">named profiles</a>. </p>
     *                     </li>
     *                   <li>
     *                         <p>Run <code>aws configure</code> to change your default AWS Region. Use
     *                             Enter to key the same settings for your keys. For more information, see
     *                             <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html">Configuring the AWS CLI</a>.</p>
     *                     </li>
     *                </ul>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Namespace</code> - A QuickSight namespace is a partition that contains
     *                     users and assets (data sources, datasets, dashboards, and so on). To access
     *                     assets that are in a specific namespace, users and groups must also be part of
     *                     the same namespace. People who share a namespace are completely isolated from
     *                     users and assets in other namespaces, even if they are in the same AWS account
     *                     and AWS Region.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Applied customizations</code> -  Within an AWS Region, a set of
     *                     QuickSight customizations can apply to an AWS account or to a namespace.
     *                     Settings that you apply to a namespace override settings that you apply to an
     *                     AWS account. All settings are isolated to a single AWS Region. To apply them in
     *                     other AWS Regions, run the <code>CreateAccountCustomization</code> command in
     *                     each AWS Region where you want to apply the same customizations. </p>
     *             </li>
     *          </ul>
     */
    describeAccountCustomization(args: DescribeAccountCustomizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountCustomizationCommandOutput>;
    describeAccountCustomization(args: DescribeAccountCustomizationCommandInput, cb: (err: any, data?: DescribeAccountCustomizationCommandOutput) => void): void;
    describeAccountCustomization(args: DescribeAccountCustomizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountCustomizationCommandOutput) => void): void;
    /**
     * <p>Describes the settings that were used when your QuickSight subscription was first
     *             created in this AWS account.</p>
     */
    describeAccountSettings(args: DescribeAccountSettingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountSettingsCommandOutput>;
    describeAccountSettings(args: DescribeAccountSettingsCommandInput, cb: (err: any, data?: DescribeAccountSettingsCommandOutput) => void): void;
    describeAccountSettings(args: DescribeAccountSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountSettingsCommandOutput) => void): void;
    /**
     * <p>Provides a summary of the metadata for an analysis.</p>
     */
    describeAnalysis(args: DescribeAnalysisCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAnalysisCommandOutput>;
    describeAnalysis(args: DescribeAnalysisCommandInput, cb: (err: any, data?: DescribeAnalysisCommandOutput) => void): void;
    describeAnalysis(args: DescribeAnalysisCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAnalysisCommandOutput) => void): void;
    /**
     * <p>Provides the read and write permissions for an analysis.</p>
     */
    describeAnalysisPermissions(args: DescribeAnalysisPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAnalysisPermissionsCommandOutput>;
    describeAnalysisPermissions(args: DescribeAnalysisPermissionsCommandInput, cb: (err: any, data?: DescribeAnalysisPermissionsCommandOutput) => void): void;
    describeAnalysisPermissions(args: DescribeAnalysisPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAnalysisPermissionsCommandOutput) => void): void;
    /**
     * <p>Provides a summary for a dashboard.</p>
     */
    describeDashboard(args: DescribeDashboardCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDashboardCommandOutput>;
    describeDashboard(args: DescribeDashboardCommandInput, cb: (err: any, data?: DescribeDashboardCommandOutput) => void): void;
    describeDashboard(args: DescribeDashboardCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDashboardCommandOutput) => void): void;
    /**
     * <p>Describes read and write permissions for a dashboard.</p>
     */
    describeDashboardPermissions(args: DescribeDashboardPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDashboardPermissionsCommandOutput>;
    describeDashboardPermissions(args: DescribeDashboardPermissionsCommandInput, cb: (err: any, data?: DescribeDashboardPermissionsCommandOutput) => void): void;
    describeDashboardPermissions(args: DescribeDashboardPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDashboardPermissionsCommandOutput) => void): void;
    /**
     * <p>Describes a dataset. </p>
     */
    describeDataSet(args: DescribeDataSetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDataSetCommandOutput>;
    describeDataSet(args: DescribeDataSetCommandInput, cb: (err: any, data?: DescribeDataSetCommandOutput) => void): void;
    describeDataSet(args: DescribeDataSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDataSetCommandOutput) => void): void;
    /**
     * <p>Describes the permissions on a dataset.</p>
     * 		       <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/data-set-id</code>.</p>
     */
    describeDataSetPermissions(args: DescribeDataSetPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDataSetPermissionsCommandOutput>;
    describeDataSetPermissions(args: DescribeDataSetPermissionsCommandInput, cb: (err: any, data?: DescribeDataSetPermissionsCommandOutput) => void): void;
    describeDataSetPermissions(args: DescribeDataSetPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDataSetPermissionsCommandOutput) => void): void;
    /**
     * <p>Describes a data source.</p>
     */
    describeDataSource(args: DescribeDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDataSourceCommandOutput>;
    describeDataSource(args: DescribeDataSourceCommandInput, cb: (err: any, data?: DescribeDataSourceCommandOutput) => void): void;
    describeDataSource(args: DescribeDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDataSourceCommandOutput) => void): void;
    /**
     * <p>Describes the resource permissions for a data source.</p>
     */
    describeDataSourcePermissions(args: DescribeDataSourcePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDataSourcePermissionsCommandOutput>;
    describeDataSourcePermissions(args: DescribeDataSourcePermissionsCommandInput, cb: (err: any, data?: DescribeDataSourcePermissionsCommandOutput) => void): void;
    describeDataSourcePermissions(args: DescribeDataSourcePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDataSourcePermissionsCommandOutput) => void): void;
    /**
     * <p>Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN). </p>
     */
    describeGroup(args: DescribeGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGroupCommandOutput>;
    describeGroup(args: DescribeGroupCommandInput, cb: (err: any, data?: DescribeGroupCommandOutput) => void): void;
    describeGroup(args: DescribeGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeGroupCommandOutput) => void): void;
    /**
     * <p>Describes an existing IAM policy assignment, as specified by the assignment name.</p>
     */
    describeIAMPolicyAssignment(args: DescribeIAMPolicyAssignmentCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIAMPolicyAssignmentCommandOutput>;
    describeIAMPolicyAssignment(args: DescribeIAMPolicyAssignmentCommandInput, cb: (err: any, data?: DescribeIAMPolicyAssignmentCommandOutput) => void): void;
    describeIAMPolicyAssignment(args: DescribeIAMPolicyAssignmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeIAMPolicyAssignmentCommandOutput) => void): void;
    /**
     * <p>Describes a SPICE ingestion.</p>
     */
    describeIngestion(args: DescribeIngestionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIngestionCommandOutput>;
    describeIngestion(args: DescribeIngestionCommandInput, cb: (err: any, data?: DescribeIngestionCommandOutput) => void): void;
    describeIngestion(args: DescribeIngestionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeIngestionCommandOutput) => void): void;
    /**
     * <p>Describes the current namespace.</p>
     */
    describeNamespace(args: DescribeNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNamespaceCommandOutput>;
    describeNamespace(args: DescribeNamespaceCommandInput, cb: (err: any, data?: DescribeNamespaceCommandOutput) => void): void;
    describeNamespace(args: DescribeNamespaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNamespaceCommandOutput) => void): void;
    /**
     * <p>Describes a template's metadata.</p>
     */
    describeTemplate(args: DescribeTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTemplateCommandOutput>;
    describeTemplate(args: DescribeTemplateCommandInput, cb: (err: any, data?: DescribeTemplateCommandOutput) => void): void;
    describeTemplate(args: DescribeTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTemplateCommandOutput) => void): void;
    /**
     * <p>Describes the template alias for a template.</p>
     */
    describeTemplateAlias(args: DescribeTemplateAliasCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTemplateAliasCommandOutput>;
    describeTemplateAlias(args: DescribeTemplateAliasCommandInput, cb: (err: any, data?: DescribeTemplateAliasCommandOutput) => void): void;
    describeTemplateAlias(args: DescribeTemplateAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTemplateAliasCommandOutput) => void): void;
    /**
     * <p>Describes read and write permissions on a template.</p>
     */
    describeTemplatePermissions(args: DescribeTemplatePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTemplatePermissionsCommandOutput>;
    describeTemplatePermissions(args: DescribeTemplatePermissionsCommandInput, cb: (err: any, data?: DescribeTemplatePermissionsCommandOutput) => void): void;
    describeTemplatePermissions(args: DescribeTemplatePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTemplatePermissionsCommandOutput) => void): void;
    /**
     * <p>Describes a theme.</p>
     */
    describeTheme(args: DescribeThemeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeThemeCommandOutput>;
    describeTheme(args: DescribeThemeCommandInput, cb: (err: any, data?: DescribeThemeCommandOutput) => void): void;
    describeTheme(args: DescribeThemeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeThemeCommandOutput) => void): void;
    /**
     * <p>Describes the alias for a theme.</p>
     */
    describeThemeAlias(args: DescribeThemeAliasCommandInput, options?: __HttpHandlerOptions): Promise<DescribeThemeAliasCommandOutput>;
    describeThemeAlias(args: DescribeThemeAliasCommandInput, cb: (err: any, data?: DescribeThemeAliasCommandOutput) => void): void;
    describeThemeAlias(args: DescribeThemeAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeThemeAliasCommandOutput) => void): void;
    /**
     * <p>Describes the read and write permissions for a theme.</p>
     */
    describeThemePermissions(args: DescribeThemePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeThemePermissionsCommandOutput>;
    describeThemePermissions(args: DescribeThemePermissionsCommandInput, cb: (err: any, data?: DescribeThemePermissionsCommandOutput) => void): void;
    describeThemePermissions(args: DescribeThemePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeThemePermissionsCommandOutput) => void): void;
    /**
     * <p>Returns information about a user, given the user name. </p>
     */
    describeUser(args: DescribeUserCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserCommandOutput>;
    describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    describeUser(args: DescribeUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    /**
     * <p>Generates a session URL and authorization code that you can use to embed an Amazon
     *             QuickSight read-only dashboard in your web server code. Before you use this command,
     *             make sure that you have configured the dashboards and permissions. </p>
     *         <p>Currently, you can use <code>GetDashboardEmbedURL</code> only from the server, not
     *             from the user's browser. The following rules apply to the combination of URL and
     *             authorization code:</p>
     *         <ul>
     *             <li>
     *                 <p>They must be used together.</p>
     *             </li>
     *             <li>
     *                 <p>They can be used one time only.</p>
     *             </li>
     *             <li>
     *                 <p>They are valid for 5 minutes after you run this command.</p>
     *             </li>
     *             <li>
     *                 <p>The resulting user session is valid for 10 hours.</p>
     *             </li>
     *          </ul>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html">Embedded Analytics</a> in the <i>Amazon QuickSight User
     *             Guide</i>.</p>
     */
    getDashboardEmbedUrl(args: GetDashboardEmbedUrlCommandInput, options?: __HttpHandlerOptions): Promise<GetDashboardEmbedUrlCommandOutput>;
    getDashboardEmbedUrl(args: GetDashboardEmbedUrlCommandInput, cb: (err: any, data?: GetDashboardEmbedUrlCommandOutput) => void): void;
    getDashboardEmbedUrl(args: GetDashboardEmbedUrlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDashboardEmbedUrlCommandOutput) => void): void;
    /**
     * <p>Generates a session URL and authorization code that you can use to embed the Amazon
     *             QuickSight console in your web server code. Use <code>GetSessionEmbedUrl</code> where
     *             you want to provide an authoring portal that allows users to create data sources,
     *             datasets, analyses, and dashboards. The users who access an embedded QuickSight console
     *             need belong to the author or admin security cohort. If you want to restrict permissions
     *             to some of these features, add a custom permissions profile to the user with the
     *             <code>
     *                <a>UpdateUser</a>
     *             </code> API operation. Use <code>
     *                <a>RegisterUser</a>
     *             </code> API operation to add a new user with a custom permission profile attached. For more
     *             information, see the following sections in the <i>Amazon QuickSight User
     *             Guide</i>:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-the-quicksight-console.html">Embedding the Amazon QuickSight Console</a>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html">Customizing Access to the Amazon QuickSight Console</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    getSessionEmbedUrl(args: GetSessionEmbedUrlCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionEmbedUrlCommandOutput>;
    getSessionEmbedUrl(args: GetSessionEmbedUrlCommandInput, cb: (err: any, data?: GetSessionEmbedUrlCommandOutput) => void): void;
    getSessionEmbedUrl(args: GetSessionEmbedUrlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSessionEmbedUrlCommandOutput) => void): void;
    /**
     * <p>Lists Amazon QuickSight analyses that exist in the specified AWS account.</p>
     */
    listAnalyses(args: ListAnalysesCommandInput, options?: __HttpHandlerOptions): Promise<ListAnalysesCommandOutput>;
    listAnalyses(args: ListAnalysesCommandInput, cb: (err: any, data?: ListAnalysesCommandOutput) => void): void;
    listAnalyses(args: ListAnalysesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAnalysesCommandOutput) => void): void;
    /**
     * <p>Lists dashboards in an AWS account.</p>
     */
    listDashboards(args: ListDashboardsCommandInput, options?: __HttpHandlerOptions): Promise<ListDashboardsCommandOutput>;
    listDashboards(args: ListDashboardsCommandInput, cb: (err: any, data?: ListDashboardsCommandOutput) => void): void;
    listDashboards(args: ListDashboardsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDashboardsCommandOutput) => void): void;
    /**
     * <p>Lists all the versions of the dashboards in the QuickSight subscription.</p>
     */
    listDashboardVersions(args: ListDashboardVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListDashboardVersionsCommandOutput>;
    listDashboardVersions(args: ListDashboardVersionsCommandInput, cb: (err: any, data?: ListDashboardVersionsCommandOutput) => void): void;
    listDashboardVersions(args: ListDashboardVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDashboardVersionsCommandOutput) => void): void;
    /**
     * <p>Lists all of the datasets belonging to the current AWS account in an AWS Region.</p>
     * 		       <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/*</code>.</p>
     */
    listDataSets(args: ListDataSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDataSetsCommandOutput>;
    listDataSets(args: ListDataSetsCommandInput, cb: (err: any, data?: ListDataSetsCommandOutput) => void): void;
    listDataSets(args: ListDataSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDataSetsCommandOutput) => void): void;
    /**
     * <p>Lists data sources in current AWS Region that belong to this AWS account.</p>
     */
    listDataSources(args: ListDataSourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListDataSourcesCommandOutput>;
    listDataSources(args: ListDataSourcesCommandInput, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
    listDataSources(args: ListDataSourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
    /**
     * <p>Lists member users in a group.</p>
     */
    listGroupMemberships(args: ListGroupMembershipsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupMembershipsCommandOutput>;
    listGroupMemberships(args: ListGroupMembershipsCommandInput, cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void): void;
    listGroupMemberships(args: ListGroupMembershipsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void): void;
    /**
     * <p>Lists all user groups in Amazon QuickSight. </p>
     */
    listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
    listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    listGroups(args: ListGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    /**
     * <p>Lists IAM policy assignments in the current Amazon QuickSight account.</p>
     */
    listIAMPolicyAssignments(args: ListIAMPolicyAssignmentsCommandInput, options?: __HttpHandlerOptions): Promise<ListIAMPolicyAssignmentsCommandOutput>;
    listIAMPolicyAssignments(args: ListIAMPolicyAssignmentsCommandInput, cb: (err: any, data?: ListIAMPolicyAssignmentsCommandOutput) => void): void;
    listIAMPolicyAssignments(args: ListIAMPolicyAssignmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIAMPolicyAssignmentsCommandOutput) => void): void;
    /**
     * <p>Lists all the IAM policy assignments, including the Amazon Resource Names (ARNs) for the IAM
     * 			policies assigned to the specified user and group or groups that the user belongs
     * 			to.</p>
     */
    listIAMPolicyAssignmentsForUser(args: ListIAMPolicyAssignmentsForUserCommandInput, options?: __HttpHandlerOptions): Promise<ListIAMPolicyAssignmentsForUserCommandOutput>;
    listIAMPolicyAssignmentsForUser(args: ListIAMPolicyAssignmentsForUserCommandInput, cb: (err: any, data?: ListIAMPolicyAssignmentsForUserCommandOutput) => void): void;
    listIAMPolicyAssignmentsForUser(args: ListIAMPolicyAssignmentsForUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIAMPolicyAssignmentsForUserCommandOutput) => void): void;
    /**
     * <p>Lists the history of SPICE ingestions for a dataset.</p>
     */
    listIngestions(args: ListIngestionsCommandInput, options?: __HttpHandlerOptions): Promise<ListIngestionsCommandOutput>;
    listIngestions(args: ListIngestionsCommandInput, cb: (err: any, data?: ListIngestionsCommandOutput) => void): void;
    listIngestions(args: ListIngestionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIngestionsCommandOutput) => void): void;
    /**
     * <p>Lists the namespaces for the specified AWS account.</p>
     */
    listNamespaces(args: ListNamespacesCommandInput, options?: __HttpHandlerOptions): Promise<ListNamespacesCommandOutput>;
    listNamespaces(args: ListNamespacesCommandInput, cb: (err: any, data?: ListNamespacesCommandOutput) => void): void;
    listNamespaces(args: ListNamespacesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNamespacesCommandOutput) => void): void;
    /**
     * <p>Lists the tags assigned to a resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists all the aliases of a template.</p>
     */
    listTemplateAliases(args: ListTemplateAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListTemplateAliasesCommandOutput>;
    listTemplateAliases(args: ListTemplateAliasesCommandInput, cb: (err: any, data?: ListTemplateAliasesCommandOutput) => void): void;
    listTemplateAliases(args: ListTemplateAliasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTemplateAliasesCommandOutput) => void): void;
    /**
     * <p>Lists all the templates in the current Amazon QuickSight account.</p>
     */
    listTemplates(args: ListTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListTemplatesCommandOutput>;
    listTemplates(args: ListTemplatesCommandInput, cb: (err: any, data?: ListTemplatesCommandOutput) => void): void;
    listTemplates(args: ListTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTemplatesCommandOutput) => void): void;
    /**
     * <p>Lists all the versions of the templates in the current Amazon QuickSight account.</p>
     */
    listTemplateVersions(args: ListTemplateVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListTemplateVersionsCommandOutput>;
    listTemplateVersions(args: ListTemplateVersionsCommandInput, cb: (err: any, data?: ListTemplateVersionsCommandOutput) => void): void;
    listTemplateVersions(args: ListTemplateVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTemplateVersionsCommandOutput) => void): void;
    /**
     * <p>Lists all the aliases of a theme.</p>
     */
    listThemeAliases(args: ListThemeAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListThemeAliasesCommandOutput>;
    listThemeAliases(args: ListThemeAliasesCommandInput, cb: (err: any, data?: ListThemeAliasesCommandOutput) => void): void;
    listThemeAliases(args: ListThemeAliasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThemeAliasesCommandOutput) => void): void;
    /**
     * <p>Lists all the themes in the current AWS account.</p>
     */
    listThemes(args: ListThemesCommandInput, options?: __HttpHandlerOptions): Promise<ListThemesCommandOutput>;
    listThemes(args: ListThemesCommandInput, cb: (err: any, data?: ListThemesCommandOutput) => void): void;
    listThemes(args: ListThemesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThemesCommandOutput) => void): void;
    /**
     * <p>Lists all the versions of the themes in the current AWS account.</p>
     */
    listThemeVersions(args: ListThemeVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListThemeVersionsCommandOutput>;
    listThemeVersions(args: ListThemeVersionsCommandInput, cb: (err: any, data?: ListThemeVersionsCommandOutput) => void): void;
    listThemeVersions(args: ListThemeVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThemeVersionsCommandOutput) => void): void;
    /**
     * <p>Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of.</p>
     */
    listUserGroups(args: ListUserGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListUserGroupsCommandOutput>;
    listUserGroups(args: ListUserGroupsCommandInput, cb: (err: any, data?: ListUserGroupsCommandOutput) => void): void;
    listUserGroups(args: ListUserGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUserGroupsCommandOutput) => void): void;
    /**
     * <p>Returns a list of all of the Amazon QuickSight users belonging to this account. </p>
     */
    listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
    listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    listUsers(args: ListUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon QuickSight user, whose identity is associated with the AWS Identity
     * 			and Access Management (IAM) identity or role specified in the request. </p>
     */
    registerUser(args: RegisterUserCommandInput, options?: __HttpHandlerOptions): Promise<RegisterUserCommandOutput>;
    registerUser(args: RegisterUserCommandInput, cb: (err: any, data?: RegisterUserCommandOutput) => void): void;
    registerUser(args: RegisterUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterUserCommandOutput) => void): void;
    /**
     * <p>Restores an analysis.</p>
     */
    restoreAnalysis(args: RestoreAnalysisCommandInput, options?: __HttpHandlerOptions): Promise<RestoreAnalysisCommandOutput>;
    restoreAnalysis(args: RestoreAnalysisCommandInput, cb: (err: any, data?: RestoreAnalysisCommandOutput) => void): void;
    restoreAnalysis(args: RestoreAnalysisCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreAnalysisCommandOutput) => void): void;
    /**
     * <p>Searches for analyses that belong to the user specified in the filter.</p>
     */
    searchAnalyses(args: SearchAnalysesCommandInput, options?: __HttpHandlerOptions): Promise<SearchAnalysesCommandOutput>;
    searchAnalyses(args: SearchAnalysesCommandInput, cb: (err: any, data?: SearchAnalysesCommandOutput) => void): void;
    searchAnalyses(args: SearchAnalysesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchAnalysesCommandOutput) => void): void;
    /**
     * <p>Searches for dashboards that belong to a user. </p>
     */
    searchDashboards(args: SearchDashboardsCommandInput, options?: __HttpHandlerOptions): Promise<SearchDashboardsCommandOutput>;
    searchDashboards(args: SearchDashboardsCommandInput, cb: (err: any, data?: SearchDashboardsCommandOutput) => void): void;
    searchDashboards(args: SearchDashboardsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchDashboardsCommandOutput) => void): void;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the specified QuickSight resource. </p>
     * 		       <p>Tags can help you organize and categorize your resources. You can also use them to
     * 			scope user permissions, by granting a user permission to access or change only resources
     * 			with certain tag values. You can use the <code>TagResource</code> operation with a
     * 			resource that already has tags. If you specify a new tag key for the resource, this tag
     * 			is appended to the list of tags associated with the resource. If you specify a tag key
     * 			that is already associated with the resource, the new tag value that you specify
     * 			replaces the previous value for that tag.</p>
     * 		       <p>You can associate as many as 50 tags with a resource. QuickSight supports tagging on data
     * 			set, data source, dashboard, and template. </p>
     * 		       <p>Tagging for QuickSight works in a similar way to tagging for other AWS services, except for
     * 			the following:</p>
     * 		       <ul>
     *             <li>
     *                <p>You can't use tags to track AWS costs for QuickSight. This restriction is because QuickSight
     * 					costs are based on users and SPICE capacity, which aren't taggable
     * 					resources.</p>
     *             </li>
     *             <li>
     *                <p>QuickSight doesn't currently support the Tag Editor for AWS Resource Groups.</p>
     *             </li>
     *          </ul>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes a tag or tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates Amazon QuickSight customizations the current AWS Region. Currently, the only
     *             customization you can use is a theme.</p>
     *         <p>You can use customizations for your AWS account or, if you specify a namespace, for a
     *             QuickSight namespace instead. Customizations that apply to a namespace override
     *             customizations that apply to an AWS account. To find out which customizations apply, use
     *             the <code>DescribeAccountCustomization</code> API operation. </p>
     */
    updateAccountCustomization(args: UpdateAccountCustomizationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccountCustomizationCommandOutput>;
    updateAccountCustomization(args: UpdateAccountCustomizationCommandInput, cb: (err: any, data?: UpdateAccountCustomizationCommandOutput) => void): void;
    updateAccountCustomization(args: UpdateAccountCustomizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAccountCustomizationCommandOutput) => void): void;
    /**
     * <p>Updates the Amazon QuickSight settings in your AWS account.</p>
     */
    updateAccountSettings(args: UpdateAccountSettingsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccountSettingsCommandOutput>;
    updateAccountSettings(args: UpdateAccountSettingsCommandInput, cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void): void;
    updateAccountSettings(args: UpdateAccountSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void): void;
    /**
     * <p>Updates an analysis in Amazon QuickSight</p>
     */
    updateAnalysis(args: UpdateAnalysisCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAnalysisCommandOutput>;
    updateAnalysis(args: UpdateAnalysisCommandInput, cb: (err: any, data?: UpdateAnalysisCommandOutput) => void): void;
    updateAnalysis(args: UpdateAnalysisCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAnalysisCommandOutput) => void): void;
    /**
     * <p>Updates the read and write permissions for an analysis.</p>
     */
    updateAnalysisPermissions(args: UpdateAnalysisPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAnalysisPermissionsCommandOutput>;
    updateAnalysisPermissions(args: UpdateAnalysisPermissionsCommandInput, cb: (err: any, data?: UpdateAnalysisPermissionsCommandOutput) => void): void;
    updateAnalysisPermissions(args: UpdateAnalysisPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAnalysisPermissionsCommandOutput) => void): void;
    /**
     * <p>Updates a dashboard in an AWS account.</p>
     */
    updateDashboard(args: UpdateDashboardCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDashboardCommandOutput>;
    updateDashboard(args: UpdateDashboardCommandInput, cb: (err: any, data?: UpdateDashboardCommandOutput) => void): void;
    updateDashboard(args: UpdateDashboardCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDashboardCommandOutput) => void): void;
    /**
     * <p>Updates read and write permissions on a dashboard.</p>
     */
    updateDashboardPermissions(args: UpdateDashboardPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDashboardPermissionsCommandOutput>;
    updateDashboardPermissions(args: UpdateDashboardPermissionsCommandInput, cb: (err: any, data?: UpdateDashboardPermissionsCommandOutput) => void): void;
    updateDashboardPermissions(args: UpdateDashboardPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDashboardPermissionsCommandOutput) => void): void;
    /**
     * <p>Updates the published version of a dashboard.</p>
     */
    updateDashboardPublishedVersion(args: UpdateDashboardPublishedVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDashboardPublishedVersionCommandOutput>;
    updateDashboardPublishedVersion(args: UpdateDashboardPublishedVersionCommandInput, cb: (err: any, data?: UpdateDashboardPublishedVersionCommandOutput) => void): void;
    updateDashboardPublishedVersion(args: UpdateDashboardPublishedVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDashboardPublishedVersionCommandOutput) => void): void;
    /**
     * <p>Updates a dataset.</p>
     */
    updateDataSet(args: UpdateDataSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDataSetCommandOutput>;
    updateDataSet(args: UpdateDataSetCommandInput, cb: (err: any, data?: UpdateDataSetCommandOutput) => void): void;
    updateDataSet(args: UpdateDataSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDataSetCommandOutput) => void): void;
    /**
     * <p>Updates the permissions on a dataset.</p>
     * 		       <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/data-set-id</code>.</p>
     */
    updateDataSetPermissions(args: UpdateDataSetPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDataSetPermissionsCommandOutput>;
    updateDataSetPermissions(args: UpdateDataSetPermissionsCommandInput, cb: (err: any, data?: UpdateDataSetPermissionsCommandOutput) => void): void;
    updateDataSetPermissions(args: UpdateDataSetPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDataSetPermissionsCommandOutput) => void): void;
    /**
     * <p>Updates a data source.</p>
     */
    updateDataSource(args: UpdateDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDataSourceCommandOutput>;
    updateDataSource(args: UpdateDataSourceCommandInput, cb: (err: any, data?: UpdateDataSourceCommandOutput) => void): void;
    updateDataSource(args: UpdateDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDataSourceCommandOutput) => void): void;
    /**
     * <p>Updates the permissions to a data source.</p>
     */
    updateDataSourcePermissions(args: UpdateDataSourcePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDataSourcePermissionsCommandOutput>;
    updateDataSourcePermissions(args: UpdateDataSourcePermissionsCommandInput, cb: (err: any, data?: UpdateDataSourcePermissionsCommandOutput) => void): void;
    updateDataSourcePermissions(args: UpdateDataSourcePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDataSourcePermissionsCommandOutput) => void): void;
    /**
     * <p>Changes a group description. </p>
     */
    updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
    updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
    updateGroup(args: UpdateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
    /**
     * <p>Updates an existing IAM policy assignment. This operation updates only the optional
     * 			parameter or parameters that are specified in the request.
     * 		    This overwrites all of the users included in <code>Identities</code>.
     * 		</p>
     */
    updateIAMPolicyAssignment(args: UpdateIAMPolicyAssignmentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIAMPolicyAssignmentCommandOutput>;
    updateIAMPolicyAssignment(args: UpdateIAMPolicyAssignmentCommandInput, cb: (err: any, data?: UpdateIAMPolicyAssignmentCommandOutput) => void): void;
    updateIAMPolicyAssignment(args: UpdateIAMPolicyAssignmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateIAMPolicyAssignmentCommandOutput) => void): void;
    /**
     * <p>Updates a template from an existing Amazon QuickSight analysis or another template.</p>
     */
    updateTemplate(args: UpdateTemplateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTemplateCommandOutput>;
    updateTemplate(args: UpdateTemplateCommandInput, cb: (err: any, data?: UpdateTemplateCommandOutput) => void): void;
    updateTemplate(args: UpdateTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTemplateCommandOutput) => void): void;
    /**
     * <p>Updates the template alias of a template.</p>
     */
    updateTemplateAlias(args: UpdateTemplateAliasCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTemplateAliasCommandOutput>;
    updateTemplateAlias(args: UpdateTemplateAliasCommandInput, cb: (err: any, data?: UpdateTemplateAliasCommandOutput) => void): void;
    updateTemplateAlias(args: UpdateTemplateAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTemplateAliasCommandOutput) => void): void;
    /**
     * <p>Updates the resource permissions for a template.</p>
     */
    updateTemplatePermissions(args: UpdateTemplatePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTemplatePermissionsCommandOutput>;
    updateTemplatePermissions(args: UpdateTemplatePermissionsCommandInput, cb: (err: any, data?: UpdateTemplatePermissionsCommandOutput) => void): void;
    updateTemplatePermissions(args: UpdateTemplatePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTemplatePermissionsCommandOutput) => void): void;
    /**
     * <p>Updates a theme.</p>
     */
    updateTheme(args: UpdateThemeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThemeCommandOutput>;
    updateTheme(args: UpdateThemeCommandInput, cb: (err: any, data?: UpdateThemeCommandOutput) => void): void;
    updateTheme(args: UpdateThemeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateThemeCommandOutput) => void): void;
    /**
     * <p>Updates an alias of a theme.</p>
     */
    updateThemeAlias(args: UpdateThemeAliasCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThemeAliasCommandOutput>;
    updateThemeAlias(args: UpdateThemeAliasCommandInput, cb: (err: any, data?: UpdateThemeAliasCommandOutput) => void): void;
    updateThemeAlias(args: UpdateThemeAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateThemeAliasCommandOutput) => void): void;
    /**
     * <p>Updates the resource permissions for a theme. Permissions apply to the action to grant or
     * 			revoke permissions on, for example <code>"quicksight:DescribeTheme"</code>.</p>
     * 		       <p>Theme permissions apply in groupings. Valid groupings include the following for the three
     * 			levels of permissions, which are user, owner, or no permissions: </p>
     * 			      <ul>
     *             <li>
     *                <p>User</p>
     * 					          <ul>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:DescribeTheme"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:DescribeThemeAlias"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:ListThemeAliases"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:ListThemeVersions"</code>
     *                      </p>
     *                   </li>
     *                </ul>
     * 				        </li>
     *             <li>
     *                <p>Owner</p>
     * 					          <ul>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:DescribeTheme"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:DescribeThemeAlias"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:ListThemeAliases"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:ListThemeVersions"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:DeleteTheme"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:UpdateTheme"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:CreateThemeAlias"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:DeleteThemeAlias"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:UpdateThemeAlias"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:UpdateThemePermissions"</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>"quicksight:DescribeThemePermissions"</code>
     *                      </p>
     *                   </li>
     *                </ul>
     * 				        </li>
     *             <li>
     *                <p>To specify no permissions, omit the permissions list.</p>
     *             </li>
     *          </ul>
     */
    updateThemePermissions(args: UpdateThemePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThemePermissionsCommandOutput>;
    updateThemePermissions(args: UpdateThemePermissionsCommandInput, cb: (err: any, data?: UpdateThemePermissionsCommandOutput) => void): void;
    updateThemePermissions(args: UpdateThemePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateThemePermissionsCommandOutput) => void): void;
    /**
     * <p>Updates an Amazon QuickSight user.</p>
     */
    updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
    updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
    updateUser(args: UpdateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
}
