import { RAMClient } from "./RAMClient";
import { AcceptResourceShareInvitationCommandInput, AcceptResourceShareInvitationCommandOutput } from "./commands/AcceptResourceShareInvitationCommand";
import { AssociateResourceShareCommandInput, AssociateResourceShareCommandOutput } from "./commands/AssociateResourceShareCommand";
import { AssociateResourceSharePermissionCommandInput, AssociateResourceSharePermissionCommandOutput } from "./commands/AssociateResourceSharePermissionCommand";
import { CreateResourceShareCommandInput, CreateResourceShareCommandOutput } from "./commands/CreateResourceShareCommand";
import { DeleteResourceShareCommandInput, DeleteResourceShareCommandOutput } from "./commands/DeleteResourceShareCommand";
import { DisassociateResourceShareCommandInput, DisassociateResourceShareCommandOutput } from "./commands/DisassociateResourceShareCommand";
import { DisassociateResourceSharePermissionCommandInput, DisassociateResourceSharePermissionCommandOutput } from "./commands/DisassociateResourceSharePermissionCommand";
import { EnableSharingWithAwsOrganizationCommandInput, EnableSharingWithAwsOrganizationCommandOutput } from "./commands/EnableSharingWithAwsOrganizationCommand";
import { GetPermissionCommandInput, GetPermissionCommandOutput } from "./commands/GetPermissionCommand";
import { GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput } from "./commands/GetResourcePoliciesCommand";
import { GetResourceShareAssociationsCommandInput, GetResourceShareAssociationsCommandOutput } from "./commands/GetResourceShareAssociationsCommand";
import { GetResourceShareInvitationsCommandInput, GetResourceShareInvitationsCommandOutput } from "./commands/GetResourceShareInvitationsCommand";
import { GetResourceSharesCommandInput, GetResourceSharesCommandOutput } from "./commands/GetResourceSharesCommand";
import { ListPendingInvitationResourcesCommandInput, ListPendingInvitationResourcesCommandOutput } from "./commands/ListPendingInvitationResourcesCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand";
import { ListPrincipalsCommandInput, ListPrincipalsCommandOutput } from "./commands/ListPrincipalsCommand";
import { ListResourceSharePermissionsCommandInput, ListResourceSharePermissionsCommandOutput } from "./commands/ListResourceSharePermissionsCommand";
import { ListResourceTypesCommandInput, ListResourceTypesCommandOutput } from "./commands/ListResourceTypesCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import { PromoteResourceShareCreatedFromPolicyCommandInput, PromoteResourceShareCreatedFromPolicyCommandOutput } from "./commands/PromoteResourceShareCreatedFromPolicyCommand";
import { RejectResourceShareInvitationCommandInput, RejectResourceShareInvitationCommandOutput } from "./commands/RejectResourceShareInvitationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateResourceShareCommandInput, UpdateResourceShareCommandOutput } from "./commands/UpdateResourceShareCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Use AWS Resource Access Manager to share AWS resources between AWS accounts. To share a resource, you
 *           create a resource share, associate the resource with the resource share, and specify the principals that
 *           can access the resources associated with the resource share. The following principals are supported:
 *           AWS accounts, organizational units (OU) from AWS Organizations, and organizations from
 *           AWS Organizations.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/ram/latest/userguide/">AWS Resource Access Manager User Guide</a>.</p>
 */
export declare class RAM extends RAMClient {
    /**
     * <p>Accepts an invitation to a resource share from another AWS account.</p>
     */
    acceptResourceShareInvitation(args: AcceptResourceShareInvitationCommandInput, options?: __HttpHandlerOptions): Promise<AcceptResourceShareInvitationCommandOutput>;
    acceptResourceShareInvitation(args: AcceptResourceShareInvitationCommandInput, cb: (err: any, data?: AcceptResourceShareInvitationCommandOutput) => void): void;
    acceptResourceShareInvitation(args: AcceptResourceShareInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptResourceShareInvitationCommandOutput) => void): void;
    /**
     * <p>Associates the specified resource share with the specified principals and resources.</p>
     */
    associateResourceShare(args: AssociateResourceShareCommandInput, options?: __HttpHandlerOptions): Promise<AssociateResourceShareCommandOutput>;
    associateResourceShare(args: AssociateResourceShareCommandInput, cb: (err: any, data?: AssociateResourceShareCommandOutput) => void): void;
    associateResourceShare(args: AssociateResourceShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateResourceShareCommandOutput) => void): void;
    /**
     * <p>Associates a permission with a resource share.</p>
     */
    associateResourceSharePermission(args: AssociateResourceSharePermissionCommandInput, options?: __HttpHandlerOptions): Promise<AssociateResourceSharePermissionCommandOutput>;
    associateResourceSharePermission(args: AssociateResourceSharePermissionCommandInput, cb: (err: any, data?: AssociateResourceSharePermissionCommandOutput) => void): void;
    associateResourceSharePermission(args: AssociateResourceSharePermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateResourceSharePermissionCommandOutput) => void): void;
    /**
     * <p>Creates a resource share.</p>
     */
    createResourceShare(args: CreateResourceShareCommandInput, options?: __HttpHandlerOptions): Promise<CreateResourceShareCommandOutput>;
    createResourceShare(args: CreateResourceShareCommandInput, cb: (err: any, data?: CreateResourceShareCommandOutput) => void): void;
    createResourceShare(args: CreateResourceShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResourceShareCommandOutput) => void): void;
    /**
     * <p>Deletes the specified resource share.</p>
     */
    deleteResourceShare(args: DeleteResourceShareCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourceShareCommandOutput>;
    deleteResourceShare(args: DeleteResourceShareCommandInput, cb: (err: any, data?: DeleteResourceShareCommandOutput) => void): void;
    deleteResourceShare(args: DeleteResourceShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourceShareCommandOutput) => void): void;
    /**
     * <p>Disassociates the specified principals or resources from the specified resource share.</p>
     */
    disassociateResourceShare(args: DisassociateResourceShareCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateResourceShareCommandOutput>;
    disassociateResourceShare(args: DisassociateResourceShareCommandInput, cb: (err: any, data?: DisassociateResourceShareCommandOutput) => void): void;
    disassociateResourceShare(args: DisassociateResourceShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateResourceShareCommandOutput) => void): void;
    /**
     * <p>Disassociates an AWS RAM permission from a resource share.</p>
     */
    disassociateResourceSharePermission(args: DisassociateResourceSharePermissionCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateResourceSharePermissionCommandOutput>;
    disassociateResourceSharePermission(args: DisassociateResourceSharePermissionCommandInput, cb: (err: any, data?: DisassociateResourceSharePermissionCommandOutput) => void): void;
    disassociateResourceSharePermission(args: DisassociateResourceSharePermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateResourceSharePermissionCommandOutput) => void): void;
    /**
     * <p>Enables resource sharing within your AWS Organization.</p>
     *          <p>The caller must be the master account for the AWS Organization.</p>
     */
    enableSharingWithAwsOrganization(args: EnableSharingWithAwsOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<EnableSharingWithAwsOrganizationCommandOutput>;
    enableSharingWithAwsOrganization(args: EnableSharingWithAwsOrganizationCommandInput, cb: (err: any, data?: EnableSharingWithAwsOrganizationCommandOutput) => void): void;
    enableSharingWithAwsOrganization(args: EnableSharingWithAwsOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableSharingWithAwsOrganizationCommandOutput) => void): void;
    /**
     * <p>Gets the contents of an AWS RAM permission in JSON format.</p>
     */
    getPermission(args: GetPermissionCommandInput, options?: __HttpHandlerOptions): Promise<GetPermissionCommandOutput>;
    getPermission(args: GetPermissionCommandInput, cb: (err: any, data?: GetPermissionCommandOutput) => void): void;
    getPermission(args: GetPermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPermissionCommandOutput) => void): void;
    /**
     * <p>Gets the policies for the specified resources that you own and have shared.</p>
     */
    getResourcePolicies(args: GetResourcePoliciesCommandInput, options?: __HttpHandlerOptions): Promise<GetResourcePoliciesCommandOutput>;
    getResourcePolicies(args: GetResourcePoliciesCommandInput, cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void): void;
    getResourcePolicies(args: GetResourcePoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void): void;
    /**
     * <p>Gets the resources or principals for the resource shares that you own.</p>
     */
    getResourceShareAssociations(args: GetResourceShareAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceShareAssociationsCommandOutput>;
    getResourceShareAssociations(args: GetResourceShareAssociationsCommandInput, cb: (err: any, data?: GetResourceShareAssociationsCommandOutput) => void): void;
    getResourceShareAssociations(args: GetResourceShareAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourceShareAssociationsCommandOutput) => void): void;
    /**
     * <p>Gets the invitations for resource sharing that you've received.</p>
     */
    getResourceShareInvitations(args: GetResourceShareInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceShareInvitationsCommandOutput>;
    getResourceShareInvitations(args: GetResourceShareInvitationsCommandInput, cb: (err: any, data?: GetResourceShareInvitationsCommandOutput) => void): void;
    getResourceShareInvitations(args: GetResourceShareInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourceShareInvitationsCommandOutput) => void): void;
    /**
     * <p>Gets the resource shares that you own or the resource shares that are shared with you.</p>
     */
    getResourceShares(args: GetResourceSharesCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceSharesCommandOutput>;
    getResourceShares(args: GetResourceSharesCommandInput, cb: (err: any, data?: GetResourceSharesCommandOutput) => void): void;
    getResourceShares(args: GetResourceSharesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourceSharesCommandOutput) => void): void;
    /**
     * <p>Lists the resources in a resource share that is shared with you but that the invitation is still pending for.</p>
     */
    listPendingInvitationResources(args: ListPendingInvitationResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListPendingInvitationResourcesCommandOutput>;
    listPendingInvitationResources(args: ListPendingInvitationResourcesCommandInput, cb: (err: any, data?: ListPendingInvitationResourcesCommandOutput) => void): void;
    listPendingInvitationResources(args: ListPendingInvitationResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPendingInvitationResourcesCommandOutput) => void): void;
    /**
     * <p>Lists the AWS RAM permissions.</p>
     */
    listPermissions(args: ListPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<ListPermissionsCommandOutput>;
    listPermissions(args: ListPermissionsCommandInput, cb: (err: any, data?: ListPermissionsCommandOutput) => void): void;
    listPermissions(args: ListPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPermissionsCommandOutput) => void): void;
    /**
     * <p>Lists the principals that you have shared resources with or that have shared resources
     * 			with you.</p>
     */
    listPrincipals(args: ListPrincipalsCommandInput, options?: __HttpHandlerOptions): Promise<ListPrincipalsCommandOutput>;
    listPrincipals(args: ListPrincipalsCommandInput, cb: (err: any, data?: ListPrincipalsCommandOutput) => void): void;
    listPrincipals(args: ListPrincipalsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPrincipalsCommandOutput) => void): void;
    /**
     * <p>Lists the resources that you added to a resource shares or the resources that are shared with you.</p>
     */
    listResources(args: ListResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesCommandOutput>;
    listResources(args: ListResourcesCommandInput, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
    listResources(args: ListResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
    /**
     * <p>Lists the AWS RAM permissions that are associated with a resource share.</p>
     */
    listResourceSharePermissions(args: ListResourceSharePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<ListResourceSharePermissionsCommandOutput>;
    listResourceSharePermissions(args: ListResourceSharePermissionsCommandInput, cb: (err: any, data?: ListResourceSharePermissionsCommandOutput) => void): void;
    listResourceSharePermissions(args: ListResourceSharePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourceSharePermissionsCommandOutput) => void): void;
    /**
     * <p>Lists the shareable resource types supported by AWS RAM.</p>
     */
    listResourceTypes(args: ListResourceTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourceTypesCommandOutput>;
    listResourceTypes(args: ListResourceTypesCommandInput, cb: (err: any, data?: ListResourceTypesCommandOutput) => void): void;
    listResourceTypes(args: ListResourceTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourceTypesCommandOutput) => void): void;
    /**
     * <p>Resource shares that were created by attaching a policy to a resource are visible only to
     * 			the resource share owner, and the resource share cannot be modified in AWS RAM.</p>
     *
     *     	    <p>Use this API action to promote the resource share. When you promote the resource share,
     * 			it becomes:</p>
     *     	    <ul>
     *             <li>
     *     			        <p>Visible to all principals that it is shared with.</p>
     *     		      </li>
     *             <li>
     *     			        <p>Modifiable in AWS RAM.</p>
     *     		      </li>
     *          </ul>
     */
    promoteResourceShareCreatedFromPolicy(args: PromoteResourceShareCreatedFromPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput>;
    promoteResourceShareCreatedFromPolicy(args: PromoteResourceShareCreatedFromPolicyCommandInput, cb: (err: any, data?: PromoteResourceShareCreatedFromPolicyCommandOutput) => void): void;
    promoteResourceShareCreatedFromPolicy(args: PromoteResourceShareCreatedFromPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PromoteResourceShareCreatedFromPolicyCommandOutput) => void): void;
    /**
     * <p>Rejects an invitation to a resource share from another AWS account.</p>
     */
    rejectResourceShareInvitation(args: RejectResourceShareInvitationCommandInput, options?: __HttpHandlerOptions): Promise<RejectResourceShareInvitationCommandOutput>;
    rejectResourceShareInvitation(args: RejectResourceShareInvitationCommandInput, cb: (err: any, data?: RejectResourceShareInvitationCommandOutput) => void): void;
    rejectResourceShareInvitation(args: RejectResourceShareInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RejectResourceShareInvitationCommandOutput) => void): void;
    /**
     * <p>Adds the specified tags to the specified resource share that you own.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the specified resource share that you own.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the specified resource share that you own.</p>
     */
    updateResourceShare(args: UpdateResourceShareCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResourceShareCommandOutput>;
    updateResourceShare(args: UpdateResourceShareCommandInput, cb: (err: any, data?: UpdateResourceShareCommandOutput) => void): void;
    updateResourceShare(args: UpdateResourceShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResourceShareCommandOutput) => void): void;
}
