import { WorkSpacesClient } from "./WorkSpacesClient";
import { AssociateConnectionAliasCommandInput, AssociateConnectionAliasCommandOutput } from "./commands/AssociateConnectionAliasCommand";
import { AssociateIpGroupsCommandInput, AssociateIpGroupsCommandOutput } from "./commands/AssociateIpGroupsCommand";
import { AuthorizeIpRulesCommandInput, AuthorizeIpRulesCommandOutput } from "./commands/AuthorizeIpRulesCommand";
import { CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput } from "./commands/CopyWorkspaceImageCommand";
import { CreateConnectionAliasCommandInput, CreateConnectionAliasCommandOutput } from "./commands/CreateConnectionAliasCommand";
import { CreateIpGroupCommandInput, CreateIpGroupCommandOutput } from "./commands/CreateIpGroupCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import { CreateWorkspaceBundleCommandInput, CreateWorkspaceBundleCommandOutput } from "./commands/CreateWorkspaceBundleCommand";
import { CreateWorkspacesCommandInput, CreateWorkspacesCommandOutput } from "./commands/CreateWorkspacesCommand";
import { DeleteConnectionAliasCommandInput, DeleteConnectionAliasCommandOutput } from "./commands/DeleteConnectionAliasCommand";
import { DeleteIpGroupCommandInput, DeleteIpGroupCommandOutput } from "./commands/DeleteIpGroupCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DeleteWorkspaceBundleCommandInput, DeleteWorkspaceBundleCommandOutput } from "./commands/DeleteWorkspaceBundleCommand";
import { DeleteWorkspaceImageCommandInput, DeleteWorkspaceImageCommandOutput } from "./commands/DeleteWorkspaceImageCommand";
import { DeregisterWorkspaceDirectoryCommandInput, DeregisterWorkspaceDirectoryCommandOutput } from "./commands/DeregisterWorkspaceDirectoryCommand";
import { DescribeAccountCommandInput, DescribeAccountCommandOutput } from "./commands/DescribeAccountCommand";
import { DescribeAccountModificationsCommandInput, DescribeAccountModificationsCommandOutput } from "./commands/DescribeAccountModificationsCommand";
import { DescribeClientPropertiesCommandInput, DescribeClientPropertiesCommandOutput } from "./commands/DescribeClientPropertiesCommand";
import { DescribeConnectionAliasPermissionsCommandInput, DescribeConnectionAliasPermissionsCommandOutput } from "./commands/DescribeConnectionAliasPermissionsCommand";
import { DescribeConnectionAliasesCommandInput, DescribeConnectionAliasesCommandOutput } from "./commands/DescribeConnectionAliasesCommand";
import { DescribeIpGroupsCommandInput, DescribeIpGroupsCommandOutput } from "./commands/DescribeIpGroupsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import { DescribeWorkspaceBundlesCommandInput, DescribeWorkspaceBundlesCommandOutput } from "./commands/DescribeWorkspaceBundlesCommand";
import { DescribeWorkspaceDirectoriesCommandInput, DescribeWorkspaceDirectoriesCommandOutput } from "./commands/DescribeWorkspaceDirectoriesCommand";
import { DescribeWorkspaceImagePermissionsCommandInput, DescribeWorkspaceImagePermissionsCommandOutput } from "./commands/DescribeWorkspaceImagePermissionsCommand";
import { DescribeWorkspaceImagesCommandInput, DescribeWorkspaceImagesCommandOutput } from "./commands/DescribeWorkspaceImagesCommand";
import { DescribeWorkspaceSnapshotsCommandInput, DescribeWorkspaceSnapshotsCommandOutput } from "./commands/DescribeWorkspaceSnapshotsCommand";
import { DescribeWorkspacesCommandInput, DescribeWorkspacesCommandOutput } from "./commands/DescribeWorkspacesCommand";
import { DescribeWorkspacesConnectionStatusCommandInput, DescribeWorkspacesConnectionStatusCommandOutput } from "./commands/DescribeWorkspacesConnectionStatusCommand";
import { DisassociateConnectionAliasCommandInput, DisassociateConnectionAliasCommandOutput } from "./commands/DisassociateConnectionAliasCommand";
import { DisassociateIpGroupsCommandInput, DisassociateIpGroupsCommandOutput } from "./commands/DisassociateIpGroupsCommand";
import { ImportWorkspaceImageCommandInput, ImportWorkspaceImageCommandOutput } from "./commands/ImportWorkspaceImageCommand";
import { ListAvailableManagementCidrRangesCommandInput, ListAvailableManagementCidrRangesCommandOutput } from "./commands/ListAvailableManagementCidrRangesCommand";
import { MigrateWorkspaceCommandInput, MigrateWorkspaceCommandOutput } from "./commands/MigrateWorkspaceCommand";
import { ModifyAccountCommandInput, ModifyAccountCommandOutput } from "./commands/ModifyAccountCommand";
import { ModifyClientPropertiesCommandInput, ModifyClientPropertiesCommandOutput } from "./commands/ModifyClientPropertiesCommand";
import { ModifySelfservicePermissionsCommandInput, ModifySelfservicePermissionsCommandOutput } from "./commands/ModifySelfservicePermissionsCommand";
import { ModifyWorkspaceAccessPropertiesCommandInput, ModifyWorkspaceAccessPropertiesCommandOutput } from "./commands/ModifyWorkspaceAccessPropertiesCommand";
import { ModifyWorkspaceCreationPropertiesCommandInput, ModifyWorkspaceCreationPropertiesCommandOutput } from "./commands/ModifyWorkspaceCreationPropertiesCommand";
import { ModifyWorkspacePropertiesCommandInput, ModifyWorkspacePropertiesCommandOutput } from "./commands/ModifyWorkspacePropertiesCommand";
import { ModifyWorkspaceStateCommandInput, ModifyWorkspaceStateCommandOutput } from "./commands/ModifyWorkspaceStateCommand";
import { RebootWorkspacesCommandInput, RebootWorkspacesCommandOutput } from "./commands/RebootWorkspacesCommand";
import { RebuildWorkspacesCommandInput, RebuildWorkspacesCommandOutput } from "./commands/RebuildWorkspacesCommand";
import { RegisterWorkspaceDirectoryCommandInput, RegisterWorkspaceDirectoryCommandOutput } from "./commands/RegisterWorkspaceDirectoryCommand";
import { RestoreWorkspaceCommandInput, RestoreWorkspaceCommandOutput } from "./commands/RestoreWorkspaceCommand";
import { RevokeIpRulesCommandInput, RevokeIpRulesCommandOutput } from "./commands/RevokeIpRulesCommand";
import { StartWorkspacesCommandInput, StartWorkspacesCommandOutput } from "./commands/StartWorkspacesCommand";
import { StopWorkspacesCommandInput, StopWorkspacesCommandOutput } from "./commands/StopWorkspacesCommand";
import { TerminateWorkspacesCommandInput, TerminateWorkspacesCommandOutput } from "./commands/TerminateWorkspacesCommand";
import { UpdateConnectionAliasPermissionCommandInput, UpdateConnectionAliasPermissionCommandOutput } from "./commands/UpdateConnectionAliasPermissionCommand";
import { UpdateRulesOfIpGroupCommandInput, UpdateRulesOfIpGroupCommandOutput } from "./commands/UpdateRulesOfIpGroupCommand";
import { UpdateWorkspaceBundleCommandInput, UpdateWorkspaceBundleCommandOutput } from "./commands/UpdateWorkspaceBundleCommand";
import { UpdateWorkspaceImagePermissionCommandInput, UpdateWorkspaceImagePermissionCommandOutput } from "./commands/UpdateWorkspaceImagePermissionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon WorkSpaces Service</fullname>
 *          <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows and
 *          Amazon Linux desktops for your users.</p>
 */
export declare class WorkSpaces extends WorkSpacesClient {
    /**
     * <p>Associates the specified connection alias with the specified directory to enable cross-Region redirection.
     *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
     *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
     *
     *          <note>
     *             <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
     *             DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p>
     *          </note>
     */
    associateConnectionAlias(args: AssociateConnectionAliasCommandInput, options?: __HttpHandlerOptions): Promise<AssociateConnectionAliasCommandOutput>;
    associateConnectionAlias(args: AssociateConnectionAliasCommandInput, cb: (err: any, data?: AssociateConnectionAliasCommandOutput) => void): void;
    associateConnectionAlias(args: AssociateConnectionAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateConnectionAliasCommandOutput) => void): void;
    /**
     * <p>Associates the specified IP access control group with the specified directory.</p>
     */
    associateIpGroups(args: AssociateIpGroupsCommandInput, options?: __HttpHandlerOptions): Promise<AssociateIpGroupsCommandOutput>;
    associateIpGroups(args: AssociateIpGroupsCommandInput, cb: (err: any, data?: AssociateIpGroupsCommandOutput) => void): void;
    associateIpGroups(args: AssociateIpGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateIpGroupsCommandOutput) => void): void;
    /**
     * <p>Adds one or more rules to the specified IP access control group.</p>
     *          <p>This action gives users permission to access their WorkSpaces from the CIDR address
     *          ranges specified in the rules.</p>
     */
    authorizeIpRules(args: AuthorizeIpRulesCommandInput, options?: __HttpHandlerOptions): Promise<AuthorizeIpRulesCommandOutput>;
    authorizeIpRules(args: AuthorizeIpRulesCommandInput, cb: (err: any, data?: AuthorizeIpRulesCommandOutput) => void): void;
    authorizeIpRules(args: AuthorizeIpRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AuthorizeIpRulesCommandOutput) => void): void;
    /**
     * <p>Copies the specified image from the specified Region to the current Region.
     *          For more information about copying images, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html">
     *             Copy a Custom WorkSpaces Image</a>.</p>
     *
     *          <note>
     *             <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p>
     *
     *             <p>In the AWS GovCloud (US-West) Region, to copy images to and from other AWS Regions,
     *             contact AWS Support.</p>
     *          </note>
     *
     *          <important>
     *             <p>Before copying a shared image, be sure to verify that it has been shared from the
     *             correct AWS account. To determine if an image has been shared and to see the AWS
     *             account ID that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p>
     *          </important>
     */
    copyWorkspaceImage(args: CopyWorkspaceImageCommandInput, options?: __HttpHandlerOptions): Promise<CopyWorkspaceImageCommandOutput>;
    copyWorkspaceImage(args: CopyWorkspaceImageCommandInput, cb: (err: any, data?: CopyWorkspaceImageCommandOutput) => void): void;
    copyWorkspaceImage(args: CopyWorkspaceImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyWorkspaceImageCommandOutput) => void): void;
    /**
     * <p>Creates the specified connection alias for use with cross-Region redirection. For more information, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
     *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
     */
    createConnectionAlias(args: CreateConnectionAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateConnectionAliasCommandOutput>;
    createConnectionAlias(args: CreateConnectionAliasCommandInput, cb: (err: any, data?: CreateConnectionAliasCommandOutput) => void): void;
    createConnectionAlias(args: CreateConnectionAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConnectionAliasCommandOutput) => void): void;
    /**
     * <p>Creates an IP access control group.</p>
     *          <p>An IP access control group provides you with the ability to control the IP addresses
     *          from which users are allowed to access their WorkSpaces. To specify the CIDR address
     *          ranges, add rules to your IP access control group and then associate the group with your
     *          directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p>
     *
     *          <p>There is a default IP access control group associated with your directory. If you don't
     *          associate an IP access control group with your directory, the default group is used. The
     *          default group includes a default rule that allows users to access their WorkSpaces from
     *          anywhere. You cannot modify the default IP access control group for your directory.</p>
     */
    createIpGroup(args: CreateIpGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateIpGroupCommandOutput>;
    createIpGroup(args: CreateIpGroupCommandInput, cb: (err: any, data?: CreateIpGroupCommandOutput) => void): void;
    createIpGroup(args: CreateIpGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateIpGroupCommandOutput) => void): void;
    /**
     * <p>Creates the specified tags for the specified WorkSpaces resource.</p>
     */
    createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
    createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
    createTags(args: CreateTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
    /**
     * <p>Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html">
     *             Create a Custom WorkSpaces Image and Bundle</a>.</p>
     */
    createWorkspaceBundle(args: CreateWorkspaceBundleCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorkspaceBundleCommandOutput>;
    createWorkspaceBundle(args: CreateWorkspaceBundleCommandInput, cb: (err: any, data?: CreateWorkspaceBundleCommandOutput) => void): void;
    createWorkspaceBundle(args: CreateWorkspaceBundleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWorkspaceBundleCommandOutput) => void): void;
    /**
     * <p>Creates one or more WorkSpaces.</p>
     *          <p>This operation is asynchronous and returns before the WorkSpaces are created.</p>
     */
    createWorkspaces(args: CreateWorkspacesCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorkspacesCommandOutput>;
    createWorkspaces(args: CreateWorkspacesCommandInput, cb: (err: any, data?: CreateWorkspacesCommandOutput) => void): void;
    createWorkspaces(args: CreateWorkspacesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWorkspacesCommandOutput) => void): void;
    /**
     * <p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
     *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
     *
     *          <important>
     *             <p>
     *                <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code
     *             for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b>
     *             For more information, see
     *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations">
     *                Security Considerations if You Stop Using Cross-Region Redirection</a>.</p>
     *          </important>
     *
     *          <note>
     *             <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias
     *             from any directories it has been associated with. Then you must unshare the connection alias from the account it has
     *             been shared with. You can delete a connection alias only after it is no longer shared with any accounts or
     *             associated with any directories.</p>
     *          </note>
     */
    deleteConnectionAlias(args: DeleteConnectionAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConnectionAliasCommandOutput>;
    deleteConnectionAlias(args: DeleteConnectionAliasCommandInput, cb: (err: any, data?: DeleteConnectionAliasCommandOutput) => void): void;
    deleteConnectionAlias(args: DeleteConnectionAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConnectionAliasCommandOutput) => void): void;
    /**
     * <p>Deletes the specified IP access control group.</p>
     *          <p>You cannot delete an IP access control group that is associated with a directory.</p>
     */
    deleteIpGroup(args: DeleteIpGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIpGroupCommandOutput>;
    deleteIpGroup(args: DeleteIpGroupCommandInput, cb: (err: any, data?: DeleteIpGroupCommandOutput) => void): void;
    deleteIpGroup(args: DeleteIpGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIpGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the specified tags from the specified WorkSpaces resource.</p>
     */
    deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
    deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    deleteTags(args: DeleteTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    /**
     * <p>Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html">
     *             Delete a Custom WorkSpaces Bundle or Image</a>.</p>
     */
    deleteWorkspaceBundle(args: DeleteWorkspaceBundleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWorkspaceBundleCommandOutput>;
    deleteWorkspaceBundle(args: DeleteWorkspaceBundleCommandInput, cb: (err: any, data?: DeleteWorkspaceBundleCommandOutput) => void): void;
    deleteWorkspaceBundle(args: DeleteWorkspaceBundleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWorkspaceBundleCommandOutput) => void): void;
    /**
     * <p>Deletes the specified image from your account. To delete an image, you must first delete
     *          any bundles that are associated with the image and unshare the image if it is shared with
     *          other accounts. </p>
     */
    deleteWorkspaceImage(args: DeleteWorkspaceImageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWorkspaceImageCommandOutput>;
    deleteWorkspaceImage(args: DeleteWorkspaceImageCommandInput, cb: (err: any, data?: DeleteWorkspaceImageCommandOutput) => void): void;
    deleteWorkspaceImage(args: DeleteWorkspaceImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWorkspaceImageCommandOutput) => void): void;
    /**
     * <p>Deregisters the specified directory. This operation is asynchronous
     *          and returns before the WorkSpace directory is deregistered. If any WorkSpaces are
     *       registered to this directory, you must remove them before you can deregister the directory.</p>
     *
     *          <note>
     *             <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces.
     *             If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30
     *             consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces,
     *             and you will be charged for this directory as per the
     *             <a href="http://aws.amazon.com/directoryservice/pricing/">AWS Directory Services pricing terms</a>.</p>
     *
     *             <p>To delete empty directories, see
     *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html">
     *                Delete the Directory for Your WorkSpaces</a>. If you delete your
     *             Simple AD or AD Connector directory, you can always create a new one when you want to start using
     *             WorkSpaces again.</p>
     *          </note>
     */
    deregisterWorkspaceDirectory(args: DeregisterWorkspaceDirectoryCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterWorkspaceDirectoryCommandOutput>;
    deregisterWorkspaceDirectory(args: DeregisterWorkspaceDirectoryCommandInput, cb: (err: any, data?: DeregisterWorkspaceDirectoryCommandOutput) => void): void;
    deregisterWorkspaceDirectory(args: DeregisterWorkspaceDirectoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterWorkspaceDirectoryCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for
     *          the specified account.</p>
     */
    describeAccount(args: DescribeAccountCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountCommandOutput>;
    describeAccount(args: DescribeAccountCommandInput, cb: (err: any, data?: DescribeAccountCommandOutput) => void): void;
    describeAccount(args: DescribeAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes modifications to the configuration of Bring Your Own
     *          License (BYOL) for the specified account.</p>
     */
    describeAccountModifications(args: DescribeAccountModificationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountModificationsCommandOutput>;
    describeAccountModifications(args: DescribeAccountModificationsCommandInput, cb: (err: any, data?: DescribeAccountModificationsCommandOutput) => void): void;
    describeAccountModifications(args: DescribeAccountModificationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountModificationsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes one or more specified Amazon WorkSpaces clients.</p>
     */
    describeClientProperties(args: DescribeClientPropertiesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClientPropertiesCommandOutput>;
    describeClientProperties(args: DescribeClientPropertiesCommandInput, cb: (err: any, data?: DescribeClientPropertiesCommandOutput) => void): void;
    describeClientProperties(args: DescribeClientPropertiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClientPropertiesCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
     *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
     */
    describeConnectionAliases(args: DescribeConnectionAliasesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConnectionAliasesCommandOutput>;
    describeConnectionAliases(args: DescribeConnectionAliasesCommandInput, cb: (err: any, data?: DescribeConnectionAliasesCommandOutput) => void): void;
    describeConnectionAliases(args: DescribeConnectionAliasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConnectionAliasesCommandOutput) => void): void;
    /**
     * <p>Describes the permissions that the owner of a connection alias has granted to another AWS account for
     *          the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
     *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
     */
    describeConnectionAliasPermissions(args: DescribeConnectionAliasPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConnectionAliasPermissionsCommandOutput>;
    describeConnectionAliasPermissions(args: DescribeConnectionAliasPermissionsCommandInput, cb: (err: any, data?: DescribeConnectionAliasPermissionsCommandOutput) => void): void;
    describeConnectionAliasPermissions(args: DescribeConnectionAliasPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConnectionAliasPermissionsCommandOutput) => void): void;
    /**
     * <p>Describes one or more of your IP access control groups.</p>
     */
    describeIpGroups(args: DescribeIpGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIpGroupsCommandOutput>;
    describeIpGroups(args: DescribeIpGroupsCommandInput, cb: (err: any, data?: DescribeIpGroupsCommandOutput) => void): void;
    describeIpGroups(args: DescribeIpGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeIpGroupsCommandOutput) => void): void;
    /**
     * <p>Describes the specified tags for the specified WorkSpaces resource.</p>
     */
    describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
    describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    describeTags(args: DescribeTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes the available WorkSpace bundles.</p>
     *          <p>You can filter the results using either bundle ID or owner, but not both.</p>
     */
    describeWorkspaceBundles(args: DescribeWorkspaceBundlesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkspaceBundlesCommandOutput>;
    describeWorkspaceBundles(args: DescribeWorkspaceBundlesCommandInput, cb: (err: any, data?: DescribeWorkspaceBundlesCommandOutput) => void): void;
    describeWorkspaceBundles(args: DescribeWorkspaceBundlesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkspaceBundlesCommandOutput) => void): void;
    /**
     * <p>Describes the available directories that are registered with
     *          Amazon WorkSpaces.</p>
     */
    describeWorkspaceDirectories(args: DescribeWorkspaceDirectoriesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkspaceDirectoriesCommandOutput>;
    describeWorkspaceDirectories(args: DescribeWorkspaceDirectoriesCommandInput, cb: (err: any, data?: DescribeWorkspaceDirectoriesCommandOutput) => void): void;
    describeWorkspaceDirectories(args: DescribeWorkspaceDirectoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkspaceDirectoriesCommandOutput) => void): void;
    /**
     * <p>Describes the permissions that the owner of an image has granted to other
     *          AWS accounts for an image.</p>
     */
    describeWorkspaceImagePermissions(args: DescribeWorkspaceImagePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkspaceImagePermissionsCommandOutput>;
    describeWorkspaceImagePermissions(args: DescribeWorkspaceImagePermissionsCommandInput, cb: (err: any, data?: DescribeWorkspaceImagePermissionsCommandOutput) => void): void;
    describeWorkspaceImagePermissions(args: DescribeWorkspaceImagePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkspaceImagePermissionsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes one or more specified images, if the image identifiers
     *          are provided. Otherwise, all images in the account are described. </p>
     */
    describeWorkspaceImages(args: DescribeWorkspaceImagesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkspaceImagesCommandOutput>;
    describeWorkspaceImages(args: DescribeWorkspaceImagesCommandInput, cb: (err: any, data?: DescribeWorkspaceImagesCommandOutput) => void): void;
    describeWorkspaceImages(args: DescribeWorkspaceImagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkspaceImagesCommandOutput) => void): void;
    /**
     * <p>Describes the specified WorkSpaces.</p>
     *          <p>You can filter the results by using the bundle identifier, directory identifier, or
     *          owner, but you can specify only one filter at a time.</p>
     */
    describeWorkspaces(args: DescribeWorkspacesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkspacesCommandOutput>;
    describeWorkspaces(args: DescribeWorkspacesCommandInput, cb: (err: any, data?: DescribeWorkspacesCommandOutput) => void): void;
    describeWorkspaces(args: DescribeWorkspacesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkspacesCommandOutput) => void): void;
    /**
     * <p>Describes the connection status of the specified WorkSpaces.</p>
     */
    describeWorkspacesConnectionStatus(args: DescribeWorkspacesConnectionStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkspacesConnectionStatusCommandOutput>;
    describeWorkspacesConnectionStatus(args: DescribeWorkspacesConnectionStatusCommandInput, cb: (err: any, data?: DescribeWorkspacesConnectionStatusCommandOutput) => void): void;
    describeWorkspacesConnectionStatus(args: DescribeWorkspacesConnectionStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkspacesConnectionStatusCommandOutput) => void): void;
    /**
     * <p>Describes the snapshots for the specified WorkSpace.</p>
     */
    describeWorkspaceSnapshots(args: DescribeWorkspaceSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkspaceSnapshotsCommandOutput>;
    describeWorkspaceSnapshots(args: DescribeWorkspaceSnapshotsCommandInput, cb: (err: any, data?: DescribeWorkspaceSnapshotsCommandOutput) => void): void;
    describeWorkspaceSnapshots(args: DescribeWorkspaceSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkspaceSnapshotsCommandOutput) => void): void;
    /**
     * <p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region
     *          redirection between two directories in different AWS Regions. For more information, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
     *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
     *
     *          <note>
     *             <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
     *             DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p>
     *          </note>
     */
    disassociateConnectionAlias(args: DisassociateConnectionAliasCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateConnectionAliasCommandOutput>;
    disassociateConnectionAlias(args: DisassociateConnectionAliasCommandInput, cb: (err: any, data?: DisassociateConnectionAliasCommandOutput) => void): void;
    disassociateConnectionAlias(args: DisassociateConnectionAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateConnectionAliasCommandOutput) => void): void;
    /**
     * <p>Disassociates the specified IP access control group from the specified directory.</p>
     */
    disassociateIpGroups(args: DisassociateIpGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateIpGroupsCommandOutput>;
    disassociateIpGroups(args: DisassociateIpGroupsCommandInput, cb: (err: any, data?: DisassociateIpGroupsCommandOutput) => void): void;
    disassociateIpGroups(args: DisassociateIpGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateIpGroupsCommandOutput) => void): void;
    /**
     * <p>Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon
     *          WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your AWS
     *          account, and you must own the image. For more information about creating BYOL images, see
     *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">
     *             Bring Your Own Windows Desktop Licenses</a>.</p>
     */
    importWorkspaceImage(args: ImportWorkspaceImageCommandInput, options?: __HttpHandlerOptions): Promise<ImportWorkspaceImageCommandOutput>;
    importWorkspaceImage(args: ImportWorkspaceImageCommandInput, cb: (err: any, data?: ImportWorkspaceImageCommandOutput) => void): void;
    importWorkspaceImage(args: ImportWorkspaceImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportWorkspaceImageCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use
     *          for the network management interface when you enable Bring Your Own License (BYOL). </p>
     *
     *          <p>This operation can be run only by AWS accounts that are enabled for BYOL. If your account
     *          isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p>
     *
     *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
     *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
     *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
     */
    listAvailableManagementCidrRanges(args: ListAvailableManagementCidrRangesCommandInput, options?: __HttpHandlerOptions): Promise<ListAvailableManagementCidrRangesCommandOutput>;
    listAvailableManagementCidrRanges(args: ListAvailableManagementCidrRangesCommandInput, cb: (err: any, data?: ListAvailableManagementCidrRangesCommandOutput) => void): void;
    listAvailableManagementCidrRanges(args: ListAvailableManagementCidrRangesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAvailableManagementCidrRangesCommandOutput) => void): void;
    /**
     * <p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p>
     *
     *          <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume
     *          from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code>
     *          user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code>
     *          folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p>
     *
     *          <p>For available migration scenarios, details about what happens during migration, and best practices, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>
     */
    migrateWorkspace(args: MigrateWorkspaceCommandInput, options?: __HttpHandlerOptions): Promise<MigrateWorkspaceCommandOutput>;
    migrateWorkspace(args: MigrateWorkspaceCommandInput, cb: (err: any, data?: MigrateWorkspaceCommandOutput) => void): void;
    migrateWorkspace(args: MigrateWorkspaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MigrateWorkspaceCommandOutput) => void): void;
    /**
     * <p>Modifies the configuration of Bring Your Own License (BYOL) for the specified
     *          account.</p>
     */
    modifyAccount(args: ModifyAccountCommandInput, options?: __HttpHandlerOptions): Promise<ModifyAccountCommandOutput>;
    modifyAccount(args: ModifyAccountCommandInput, cb: (err: any, data?: ModifyAccountCommandOutput) => void): void;
    modifyAccount(args: ModifyAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyAccountCommandOutput) => void): void;
    /**
     * <p>Modifies the properties of the specified Amazon WorkSpaces clients.</p>
     */
    modifyClientProperties(args: ModifyClientPropertiesCommandInput, options?: __HttpHandlerOptions): Promise<ModifyClientPropertiesCommandOutput>;
    modifyClientProperties(args: ModifyClientPropertiesCommandInput, cb: (err: any, data?: ModifyClientPropertiesCommandOutput) => void): void;
    modifyClientProperties(args: ModifyClientPropertiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyClientPropertiesCommandOutput) => void): void;
    /**
     * <p>Modifies the self-service WorkSpace management capabilities for your users. For more
     *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
     */
    modifySelfservicePermissions(args: ModifySelfservicePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<ModifySelfservicePermissionsCommandOutput>;
    modifySelfservicePermissions(args: ModifySelfservicePermissionsCommandInput, cb: (err: any, data?: ModifySelfservicePermissionsCommandOutput) => void): void;
    modifySelfservicePermissions(args: ModifySelfservicePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifySelfservicePermissionsCommandOutput) => void): void;
    /**
     * <p>Specifies which devices and operating systems users can use to access their WorkSpaces.
     *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access">
     *             Control Device Access</a>.</p>
     */
    modifyWorkspaceAccessProperties(args: ModifyWorkspaceAccessPropertiesCommandInput, options?: __HttpHandlerOptions): Promise<ModifyWorkspaceAccessPropertiesCommandOutput>;
    modifyWorkspaceAccessProperties(args: ModifyWorkspaceAccessPropertiesCommandInput, cb: (err: any, data?: ModifyWorkspaceAccessPropertiesCommandOutput) => void): void;
    modifyWorkspaceAccessProperties(args: ModifyWorkspaceAccessPropertiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyWorkspaceAccessPropertiesCommandOutput) => void): void;
    /**
     * <p>Modify the default properties used to create WorkSpaces.</p>
     */
    modifyWorkspaceCreationProperties(args: ModifyWorkspaceCreationPropertiesCommandInput, options?: __HttpHandlerOptions): Promise<ModifyWorkspaceCreationPropertiesCommandOutput>;
    modifyWorkspaceCreationProperties(args: ModifyWorkspaceCreationPropertiesCommandInput, cb: (err: any, data?: ModifyWorkspaceCreationPropertiesCommandOutput) => void): void;
    modifyWorkspaceCreationProperties(args: ModifyWorkspaceCreationPropertiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyWorkspaceCreationPropertiesCommandOutput) => void): void;
    /**
     * <p>Modifies the specified WorkSpace properties. For important information about how
     *          to modify the size of the root and user volumes, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">
     *             Modify a WorkSpace</a>.
     *       </p>
     */
    modifyWorkspaceProperties(args: ModifyWorkspacePropertiesCommandInput, options?: __HttpHandlerOptions): Promise<ModifyWorkspacePropertiesCommandOutput>;
    modifyWorkspaceProperties(args: ModifyWorkspacePropertiesCommandInput, cb: (err: any, data?: ModifyWorkspacePropertiesCommandOutput) => void): void;
    modifyWorkspaceProperties(args: ModifyWorkspacePropertiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyWorkspacePropertiesCommandOutput) => void): void;
    /**
     * <p>Sets the state of the specified WorkSpace.</p>
     *          <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to
     *             <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to
     *          reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not
     *          stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code>
     *          state.</p>
     */
    modifyWorkspaceState(args: ModifyWorkspaceStateCommandInput, options?: __HttpHandlerOptions): Promise<ModifyWorkspaceStateCommandOutput>;
    modifyWorkspaceState(args: ModifyWorkspaceStateCommandInput, cb: (err: any, data?: ModifyWorkspaceStateCommandOutput) => void): void;
    modifyWorkspaceState(args: ModifyWorkspaceStateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyWorkspaceStateCommandOutput) => void): void;
    /**
     * <p>Reboots the specified WorkSpaces.</p>
     *          <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or
     *             <code>UNHEALTHY</code>.</p>
     *          <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
     */
    rebootWorkspaces(args: RebootWorkspacesCommandInput, options?: __HttpHandlerOptions): Promise<RebootWorkspacesCommandOutput>;
    rebootWorkspaces(args: RebootWorkspacesCommandInput, cb: (err: any, data?: RebootWorkspacesCommandOutput) => void): void;
    rebootWorkspaces(args: RebootWorkspacesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootWorkspacesCommandOutput) => void): void;
    /**
     * <p>Rebuilds the specified WorkSpace.</p>
     *          <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>,
     *             <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p>
     *          <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss
     *          of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a
     *          WorkSpace</a>.</p>
     *          <p>This operation is asynchronous and returns before the WorkSpaces have been completely
     *          rebuilt.</p>
     */
    rebuildWorkspaces(args: RebuildWorkspacesCommandInput, options?: __HttpHandlerOptions): Promise<RebuildWorkspacesCommandOutput>;
    rebuildWorkspaces(args: RebuildWorkspacesCommandInput, cb: (err: any, data?: RebuildWorkspacesCommandOutput) => void): void;
    rebuildWorkspaces(args: RebuildWorkspacesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebuildWorkspacesCommandOutput) => void): void;
    /**
     * <p>Registers the specified directory. This operation is asynchronous
     *          and returns before the WorkSpace directory is registered. If this is the first time you are
     *          registering a directory, you will need to create the workspaces_DefaultRole role before you can
     *          register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">
     *             Creating the workspaces_DefaultRole Role</a>.</p>
     */
    registerWorkspaceDirectory(args: RegisterWorkspaceDirectoryCommandInput, options?: __HttpHandlerOptions): Promise<RegisterWorkspaceDirectoryCommandOutput>;
    registerWorkspaceDirectory(args: RegisterWorkspaceDirectoryCommandInput, cb: (err: any, data?: RegisterWorkspaceDirectoryCommandOutput) => void): void;
    registerWorkspaceDirectory(args: RegisterWorkspaceDirectoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterWorkspaceDirectoryCommandOutput) => void): void;
    /**
     * <p>Restores the specified WorkSpace to its last known healthy state.</p>
     *          <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>,
     *             <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p>
     *          <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of
     *          data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a
     *          WorkSpace</a>.</p>
     *          <p>This operation is asynchronous and returns before the WorkSpace is completely
     *          restored.</p>
     */
    restoreWorkspace(args: RestoreWorkspaceCommandInput, options?: __HttpHandlerOptions): Promise<RestoreWorkspaceCommandOutput>;
    restoreWorkspace(args: RestoreWorkspaceCommandInput, cb: (err: any, data?: RestoreWorkspaceCommandOutput) => void): void;
    restoreWorkspace(args: RestoreWorkspaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreWorkspaceCommandOutput) => void): void;
    /**
     * <p>Removes one or more rules from the specified IP access control group.</p>
     */
    revokeIpRules(args: RevokeIpRulesCommandInput, options?: __HttpHandlerOptions): Promise<RevokeIpRulesCommandOutput>;
    revokeIpRules(args: RevokeIpRulesCommandInput, cb: (err: any, data?: RevokeIpRulesCommandOutput) => void): void;
    revokeIpRules(args: RevokeIpRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokeIpRulesCommandOutput) => void): void;
    /**
     * <p>Starts the specified WorkSpaces.</p>
     *          <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a
     *          state of <code>STOPPED</code>.</p>
     */
    startWorkspaces(args: StartWorkspacesCommandInput, options?: __HttpHandlerOptions): Promise<StartWorkspacesCommandOutput>;
    startWorkspaces(args: StartWorkspacesCommandInput, cb: (err: any, data?: StartWorkspacesCommandOutput) => void): void;
    startWorkspaces(args: StartWorkspacesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartWorkspacesCommandOutput) => void): void;
    /**
     * <p> Stops the specified WorkSpaces.</p>
     *          <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a
     *          state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or
     *             <code>ERROR</code>.</p>
     */
    stopWorkspaces(args: StopWorkspacesCommandInput, options?: __HttpHandlerOptions): Promise<StopWorkspacesCommandOutput>;
    stopWorkspaces(args: StopWorkspacesCommandInput, cb: (err: any, data?: StopWorkspacesCommandOutput) => void): void;
    stopWorkspaces(args: StopWorkspacesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopWorkspacesCommandOutput) => void): void;
    /**
     * <p>Terminates the specified WorkSpaces.</p>
     *
     *          <important>
     *             <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is
     *             destroyed. If you need to archive any user data, contact AWS Support before
     *             terminating the WorkSpace.</p>
     *          </important>
     *
     *          <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p>
     *          <p>This operation is asynchronous and returns before the WorkSpaces have been completely
     *          terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned
     *          only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely
     *          returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
     *             DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has
     *          been successfully terminated.</p>
     *
     *          <note>
     *             <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces.
     *             If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30
     *             consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces,
     *             and you will be charged for this directory as per the
     *             <a href="http://aws.amazon.com/directoryservice/pricing/">AWS Directory Services pricing terms</a>.</p>
     *
     *             <p>To delete empty directories, see
     *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html">
     *                Delete the Directory for Your WorkSpaces</a>. If you delete your
     *             Simple AD or AD Connector directory, you can always create a new one when you want to start using
     *             WorkSpaces again.</p>
     *          </note>
     */
    terminateWorkspaces(args: TerminateWorkspacesCommandInput, options?: __HttpHandlerOptions): Promise<TerminateWorkspacesCommandOutput>;
    terminateWorkspaces(args: TerminateWorkspacesCommandInput, cb: (err: any, data?: TerminateWorkspacesCommandOutput) => void): void;
    terminateWorkspaces(args: TerminateWorkspacesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TerminateWorkspacesCommandOutput) => void): void;
    /**
     * <p>Shares or unshares a connection alias with one account by specifying whether that account has permission to
     *          associate the connection alias with a directory. If the association permission is granted, the connection alias
     *          is shared with that account. If the association permission is revoked, the connection alias is unshared with the
     *          account. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
     *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
     *
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
     *                   DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p>
     *                </li>
     *                <li>
     *                   <p>To delete a connection alias that has been shared, the shared account must first disassociate the
     *                   connection alias from any directories it has been associated with. Then you must unshare the connection
     *                   alias from the account it has been shared with. You can delete a connection alias only after it is no
     *                   longer shared with any accounts or associated with any directories.</p>
     *                </li>
     *             </ul>
     *          </note>
     */
    updateConnectionAliasPermission(args: UpdateConnectionAliasPermissionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConnectionAliasPermissionCommandOutput>;
    updateConnectionAliasPermission(args: UpdateConnectionAliasPermissionCommandInput, cb: (err: any, data?: UpdateConnectionAliasPermissionCommandOutput) => void): void;
    updateConnectionAliasPermission(args: UpdateConnectionAliasPermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConnectionAliasPermissionCommandOutput) => void): void;
    /**
     * <p>Replaces the current rules of the specified IP access control group with the specified
     *          rules.</p>
     */
    updateRulesOfIpGroup(args: UpdateRulesOfIpGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRulesOfIpGroupCommandOutput>;
    updateRulesOfIpGroup(args: UpdateRulesOfIpGroupCommandInput, cb: (err: any, data?: UpdateRulesOfIpGroupCommandOutput) => void): void;
    updateRulesOfIpGroup(args: UpdateRulesOfIpGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRulesOfIpGroupCommandOutput) => void): void;
    /**
     * <p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html">
     *             Update a Custom WorkSpaces Bundle</a>.</p>
     *
     *          <important>
     *             <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're
     *             based on. To update existing WorkSpaces that are based on a bundle that you've updated, you
     *             must either rebuild the WorkSpaces or delete and recreate them.</p>
     *          </important>
     */
    updateWorkspaceBundle(args: UpdateWorkspaceBundleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWorkspaceBundleCommandOutput>;
    updateWorkspaceBundle(args: UpdateWorkspaceBundleCommandInput, cb: (err: any, data?: UpdateWorkspaceBundleCommandOutput) => void): void;
    updateWorkspaceBundle(args: UpdateWorkspaceBundleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWorkspaceBundleCommandOutput) => void): void;
    /**
     * <p>Shares or unshares an image with one account in the same AWS Region by specifying whether that account has
     *          permission to copy the image. If the copy image permission is granted, the image is shared with that account.
     *          If the copy image permission is revoked, the image is unshared with the account.</p>
     *
     *          <p>After an image has been shared, the recipient account can copy the image to other AWS Regions as needed.</p>
     *
     *          <note>
     *             <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p>
     *
     *             <p>In the AWS GovCloud (US-West) Region, to copy images to and from other AWS Regions,
     *             contact AWS Support.</p>
     *          </note>
     *
     *          <p>For more information about sharing images, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html">
     *             Share or Unshare a Custom WorkSpaces Image</a>.</p>
     *
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>To delete an image that has been shared, you must unshare the image before you delete it.</p>
     *                </li>
     *                <li>
     *                   <p>Sharing Bring Your Own License (BYOL) images across AWS accounts isn't supported at
     *                   this time in the AWS GovCloud (US-West) Region. To share BYOL images across accounts in
     *                   the AWS GovCloud (US-West) Region, contact AWS Support.</p>
     *                </li>
     *             </ul>
     *          </note>
     */
    updateWorkspaceImagePermission(args: UpdateWorkspaceImagePermissionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWorkspaceImagePermissionCommandOutput>;
    updateWorkspaceImagePermission(args: UpdateWorkspaceImagePermissionCommandInput, cb: (err: any, data?: UpdateWorkspaceImagePermissionCommandOutput) => void): void;
    updateWorkspaceImagePermission(args: UpdateWorkspaceImagePermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWorkspaceImagePermissionCommandOutput) => void): void;
}
