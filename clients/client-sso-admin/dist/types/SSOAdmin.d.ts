import { SSOAdminClient } from "./SSOAdminClient";
import { AttachManagedPolicyToPermissionSetCommandInput, AttachManagedPolicyToPermissionSetCommandOutput } from "./commands/AttachManagedPolicyToPermissionSetCommand";
import { CreateAccountAssignmentCommandInput, CreateAccountAssignmentCommandOutput } from "./commands/CreateAccountAssignmentCommand";
import { CreateInstanceAccessControlAttributeConfigurationCommandInput, CreateInstanceAccessControlAttributeConfigurationCommandOutput } from "./commands/CreateInstanceAccessControlAttributeConfigurationCommand";
import { CreatePermissionSetCommandInput, CreatePermissionSetCommandOutput } from "./commands/CreatePermissionSetCommand";
import { DeleteAccountAssignmentCommandInput, DeleteAccountAssignmentCommandOutput } from "./commands/DeleteAccountAssignmentCommand";
import { DeleteInlinePolicyFromPermissionSetCommandInput, DeleteInlinePolicyFromPermissionSetCommandOutput } from "./commands/DeleteInlinePolicyFromPermissionSetCommand";
import { DeleteInstanceAccessControlAttributeConfigurationCommandInput, DeleteInstanceAccessControlAttributeConfigurationCommandOutput } from "./commands/DeleteInstanceAccessControlAttributeConfigurationCommand";
import { DeletePermissionSetCommandInput, DeletePermissionSetCommandOutput } from "./commands/DeletePermissionSetCommand";
import { DescribeAccountAssignmentCreationStatusCommandInput, DescribeAccountAssignmentCreationStatusCommandOutput } from "./commands/DescribeAccountAssignmentCreationStatusCommand";
import { DescribeAccountAssignmentDeletionStatusCommandInput, DescribeAccountAssignmentDeletionStatusCommandOutput } from "./commands/DescribeAccountAssignmentDeletionStatusCommand";
import { DescribeInstanceAccessControlAttributeConfigurationCommandInput, DescribeInstanceAccessControlAttributeConfigurationCommandOutput } from "./commands/DescribeInstanceAccessControlAttributeConfigurationCommand";
import { DescribePermissionSetCommandInput, DescribePermissionSetCommandOutput } from "./commands/DescribePermissionSetCommand";
import { DescribePermissionSetProvisioningStatusCommandInput, DescribePermissionSetProvisioningStatusCommandOutput } from "./commands/DescribePermissionSetProvisioningStatusCommand";
import { DetachManagedPolicyFromPermissionSetCommandInput, DetachManagedPolicyFromPermissionSetCommandOutput } from "./commands/DetachManagedPolicyFromPermissionSetCommand";
import { GetInlinePolicyForPermissionSetCommandInput, GetInlinePolicyForPermissionSetCommandOutput } from "./commands/GetInlinePolicyForPermissionSetCommand";
import { ListAccountAssignmentCreationStatusCommandInput, ListAccountAssignmentCreationStatusCommandOutput } from "./commands/ListAccountAssignmentCreationStatusCommand";
import { ListAccountAssignmentDeletionStatusCommandInput, ListAccountAssignmentDeletionStatusCommandOutput } from "./commands/ListAccountAssignmentDeletionStatusCommand";
import { ListAccountAssignmentsCommandInput, ListAccountAssignmentsCommandOutput } from "./commands/ListAccountAssignmentsCommand";
import { ListAccountsForProvisionedPermissionSetCommandInput, ListAccountsForProvisionedPermissionSetCommandOutput } from "./commands/ListAccountsForProvisionedPermissionSetCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand";
import { ListManagedPoliciesInPermissionSetCommandInput, ListManagedPoliciesInPermissionSetCommandOutput } from "./commands/ListManagedPoliciesInPermissionSetCommand";
import { ListPermissionSetProvisioningStatusCommandInput, ListPermissionSetProvisioningStatusCommandOutput } from "./commands/ListPermissionSetProvisioningStatusCommand";
import { ListPermissionSetsCommandInput, ListPermissionSetsCommandOutput } from "./commands/ListPermissionSetsCommand";
import { ListPermissionSetsProvisionedToAccountCommandInput, ListPermissionSetsProvisionedToAccountCommandOutput } from "./commands/ListPermissionSetsProvisionedToAccountCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ProvisionPermissionSetCommandInput, ProvisionPermissionSetCommandOutput } from "./commands/ProvisionPermissionSetCommand";
import { PutInlinePolicyToPermissionSetCommandInput, PutInlinePolicyToPermissionSetCommandOutput } from "./commands/PutInlinePolicyToPermissionSetCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateInstanceAccessControlAttributeConfigurationCommandInput, UpdateInstanceAccessControlAttributeConfigurationCommandOutput } from "./commands/UpdateInstanceAccessControlAttributeConfigurationCommand";
import { UpdatePermissionSetCommandInput, UpdatePermissionSetCommandOutput } from "./commands/UpdatePermissionSetCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
export declare class SSOAdmin extends SSOAdminClient {
    /**
     * <p>Attaches an IAM managed policy ARN to a permission set.</p>
     *          <note>
     *             <p>If the permission set is already referenced by one or more account assignments, you will need to call <code>
     *                   <a>ProvisionPermissionSet</a>
     *                </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p>
     *          </note>
     */
    attachManagedPolicyToPermissionSet(args: AttachManagedPolicyToPermissionSetCommandInput, options?: __HttpHandlerOptions): Promise<AttachManagedPolicyToPermissionSetCommandOutput>;
    attachManagedPolicyToPermissionSet(args: AttachManagedPolicyToPermissionSetCommandInput, cb: (err: any, data?: AttachManagedPolicyToPermissionSetCommandOutput) => void): void;
    attachManagedPolicyToPermissionSet(args: AttachManagedPolicyToPermissionSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachManagedPolicyToPermissionSetCommandOutput) => void): void;
    /**
     * <p>Assigns access to a principal for a specified AWS account using a specified permission
     *       set.</p>
     *          <note>
     *             <p>The term <i>principal</i> here refers to a user or group that is defined in AWS SSO.</p>
     *          </note>
     *          <note>
     *             <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy attached to the SSO-created IAM role. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you will need to call <code>
     *                   <a>ProvisionPermissionSet</a>
     *                </code> to make these updates.</p>
     *          </note>
     */
    createAccountAssignment(args: CreateAccountAssignmentCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccountAssignmentCommandOutput>;
    createAccountAssignment(args: CreateAccountAssignmentCommandInput, cb: (err: any, data?: CreateAccountAssignmentCommandOutput) => void): void;
    createAccountAssignment(args: CreateAccountAssignmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAccountAssignmentCommandOutput) => void): void;
    /**
     * <p>Enables the attributes-based access control (ABAC) feature for the specified AWS SSO instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
     */
    createInstanceAccessControlAttributeConfiguration(args: CreateInstanceAccessControlAttributeConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateInstanceAccessControlAttributeConfigurationCommandOutput>;
    createInstanceAccessControlAttributeConfiguration(args: CreateInstanceAccessControlAttributeConfigurationCommandInput, cb: (err: any, data?: CreateInstanceAccessControlAttributeConfigurationCommandOutput) => void): void;
    createInstanceAccessControlAttributeConfiguration(args: CreateInstanceAccessControlAttributeConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInstanceAccessControlAttributeConfigurationCommandOutput) => void): void;
    /**
     * <p>Creates a permission set within a specified SSO instance.</p>
     *          <note>
     *             <p>To grant users and groups access to AWS account resources, use <code>
     *                   <a>CreateAccountAssignment</a>
     *                </code>.</p>
     *          </note>
     */
    createPermissionSet(args: CreatePermissionSetCommandInput, options?: __HttpHandlerOptions): Promise<CreatePermissionSetCommandOutput>;
    createPermissionSet(args: CreatePermissionSetCommandInput, cb: (err: any, data?: CreatePermissionSetCommandOutput) => void): void;
    createPermissionSet(args: CreatePermissionSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePermissionSetCommandOutput) => void): void;
    /**
     * <p>Deletes a principal's access from a specified AWS account using a specified permission
     *       set.</p>
     */
    deleteAccountAssignment(args: DeleteAccountAssignmentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccountAssignmentCommandOutput>;
    deleteAccountAssignment(args: DeleteAccountAssignmentCommandInput, cb: (err: any, data?: DeleteAccountAssignmentCommandOutput) => void): void;
    deleteAccountAssignment(args: DeleteAccountAssignmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccountAssignmentCommandOutput) => void): void;
    /**
     * <p>Deletes the inline policy from a specified permission set.</p>
     */
    deleteInlinePolicyFromPermissionSet(args: DeleteInlinePolicyFromPermissionSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInlinePolicyFromPermissionSetCommandOutput>;
    deleteInlinePolicyFromPermissionSet(args: DeleteInlinePolicyFromPermissionSetCommandInput, cb: (err: any, data?: DeleteInlinePolicyFromPermissionSetCommandOutput) => void): void;
    deleteInlinePolicyFromPermissionSet(args: DeleteInlinePolicyFromPermissionSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInlinePolicyFromPermissionSetCommandOutput) => void): void;
    /**
     * <p>Disables the attributes-based access control (ABAC) feature for the specified AWS SSO instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
     */
    deleteInstanceAccessControlAttributeConfiguration(args: DeleteInstanceAccessControlAttributeConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInstanceAccessControlAttributeConfigurationCommandOutput>;
    deleteInstanceAccessControlAttributeConfiguration(args: DeleteInstanceAccessControlAttributeConfigurationCommandInput, cb: (err: any, data?: DeleteInstanceAccessControlAttributeConfigurationCommandOutput) => void): void;
    deleteInstanceAccessControlAttributeConfiguration(args: DeleteInstanceAccessControlAttributeConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInstanceAccessControlAttributeConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes the specified permission set.</p>
     */
    deletePermissionSet(args: DeletePermissionSetCommandInput, options?: __HttpHandlerOptions): Promise<DeletePermissionSetCommandOutput>;
    deletePermissionSet(args: DeletePermissionSetCommandInput, cb: (err: any, data?: DeletePermissionSetCommandOutput) => void): void;
    deletePermissionSet(args: DeletePermissionSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePermissionSetCommandOutput) => void): void;
    /**
     * <p>Describes the status of the assignment creation request.</p>
     */
    describeAccountAssignmentCreationStatus(args: DescribeAccountAssignmentCreationStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountAssignmentCreationStatusCommandOutput>;
    describeAccountAssignmentCreationStatus(args: DescribeAccountAssignmentCreationStatusCommandInput, cb: (err: any, data?: DescribeAccountAssignmentCreationStatusCommandOutput) => void): void;
    describeAccountAssignmentCreationStatus(args: DescribeAccountAssignmentCreationStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountAssignmentCreationStatusCommandOutput) => void): void;
    /**
     * <p>Describes the status of the assignment deletion request.</p>
     */
    describeAccountAssignmentDeletionStatus(args: DescribeAccountAssignmentDeletionStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountAssignmentDeletionStatusCommandOutput>;
    describeAccountAssignmentDeletionStatus(args: DescribeAccountAssignmentDeletionStatusCommandInput, cb: (err: any, data?: DescribeAccountAssignmentDeletionStatusCommandOutput) => void): void;
    describeAccountAssignmentDeletionStatus(args: DescribeAccountAssignmentDeletionStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountAssignmentDeletionStatusCommandOutput) => void): void;
    /**
     * <p>Returns the list of AWS SSO identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified AWS SSO instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
     */
    describeInstanceAccessControlAttributeConfiguration(args: DescribeInstanceAccessControlAttributeConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInstanceAccessControlAttributeConfigurationCommandOutput>;
    describeInstanceAccessControlAttributeConfiguration(args: DescribeInstanceAccessControlAttributeConfigurationCommandInput, cb: (err: any, data?: DescribeInstanceAccessControlAttributeConfigurationCommandOutput) => void): void;
    describeInstanceAccessControlAttributeConfiguration(args: DescribeInstanceAccessControlAttributeConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInstanceAccessControlAttributeConfigurationCommandOutput) => void): void;
    /**
     * <p>Gets the details of the permission set.</p>
     */
    describePermissionSet(args: DescribePermissionSetCommandInput, options?: __HttpHandlerOptions): Promise<DescribePermissionSetCommandOutput>;
    describePermissionSet(args: DescribePermissionSetCommandInput, cb: (err: any, data?: DescribePermissionSetCommandOutput) => void): void;
    describePermissionSet(args: DescribePermissionSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePermissionSetCommandOutput) => void): void;
    /**
     * <p>Describes the status for the given permission set provisioning request.</p>
     */
    describePermissionSetProvisioningStatus(args: DescribePermissionSetProvisioningStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribePermissionSetProvisioningStatusCommandOutput>;
    describePermissionSetProvisioningStatus(args: DescribePermissionSetProvisioningStatusCommandInput, cb: (err: any, data?: DescribePermissionSetProvisioningStatusCommandOutput) => void): void;
    describePermissionSetProvisioningStatus(args: DescribePermissionSetProvisioningStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePermissionSetProvisioningStatusCommandOutput) => void): void;
    /**
     * <p>Detaches the attached IAM managed policy ARN from the specified permission set.</p>
     */
    detachManagedPolicyFromPermissionSet(args: DetachManagedPolicyFromPermissionSetCommandInput, options?: __HttpHandlerOptions): Promise<DetachManagedPolicyFromPermissionSetCommandOutput>;
    detachManagedPolicyFromPermissionSet(args: DetachManagedPolicyFromPermissionSetCommandInput, cb: (err: any, data?: DetachManagedPolicyFromPermissionSetCommandOutput) => void): void;
    detachManagedPolicyFromPermissionSet(args: DetachManagedPolicyFromPermissionSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachManagedPolicyFromPermissionSetCommandOutput) => void): void;
    /**
     * <p>Obtains the inline policy assigned to the permission set.</p>
     */
    getInlinePolicyForPermissionSet(args: GetInlinePolicyForPermissionSetCommandInput, options?: __HttpHandlerOptions): Promise<GetInlinePolicyForPermissionSetCommandOutput>;
    getInlinePolicyForPermissionSet(args: GetInlinePolicyForPermissionSetCommandInput, cb: (err: any, data?: GetInlinePolicyForPermissionSetCommandOutput) => void): void;
    getInlinePolicyForPermissionSet(args: GetInlinePolicyForPermissionSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInlinePolicyForPermissionSetCommandOutput) => void): void;
    /**
     * <p>Lists the status of the AWS account assignment creation requests for a specified SSO
     *        instance.</p>
     */
    listAccountAssignmentCreationStatus(args: ListAccountAssignmentCreationStatusCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountAssignmentCreationStatusCommandOutput>;
    listAccountAssignmentCreationStatus(args: ListAccountAssignmentCreationStatusCommandInput, cb: (err: any, data?: ListAccountAssignmentCreationStatusCommandOutput) => void): void;
    listAccountAssignmentCreationStatus(args: ListAccountAssignmentCreationStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccountAssignmentCreationStatusCommandOutput) => void): void;
    /**
     * <p>Lists the status of the AWS account assignment deletion requests for a specified SSO
     *        instance.</p>
     */
    listAccountAssignmentDeletionStatus(args: ListAccountAssignmentDeletionStatusCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountAssignmentDeletionStatusCommandOutput>;
    listAccountAssignmentDeletionStatus(args: ListAccountAssignmentDeletionStatusCommandInput, cb: (err: any, data?: ListAccountAssignmentDeletionStatusCommandOutput) => void): void;
    listAccountAssignmentDeletionStatus(args: ListAccountAssignmentDeletionStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccountAssignmentDeletionStatusCommandOutput) => void): void;
    /**
     * <p>Lists the assignee of the specified AWS account with the specified permission
     *        set.</p>
     */
    listAccountAssignments(args: ListAccountAssignmentsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountAssignmentsCommandOutput>;
    listAccountAssignments(args: ListAccountAssignmentsCommandInput, cb: (err: any, data?: ListAccountAssignmentsCommandOutput) => void): void;
    listAccountAssignments(args: ListAccountAssignmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccountAssignmentsCommandOutput) => void): void;
    /**
     * <p>Lists all the AWS accounts where the specified permission set is provisioned.</p>
     */
    listAccountsForProvisionedPermissionSet(args: ListAccountsForProvisionedPermissionSetCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountsForProvisionedPermissionSetCommandOutput>;
    listAccountsForProvisionedPermissionSet(args: ListAccountsForProvisionedPermissionSetCommandInput, cb: (err: any, data?: ListAccountsForProvisionedPermissionSetCommandOutput) => void): void;
    listAccountsForProvisionedPermissionSet(args: ListAccountsForProvisionedPermissionSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccountsForProvisionedPermissionSetCommandOutput) => void): void;
    /**
     * <p>Lists the SSO instances that the caller has access to.</p>
     */
    listInstances(args: ListInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstancesCommandOutput>;
    listInstances(args: ListInstancesCommandInput, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
    listInstances(args: ListInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
    /**
     * <p>Lists the IAM managed policy that is attached to a specified permission set.</p>
     */
    listManagedPoliciesInPermissionSet(args: ListManagedPoliciesInPermissionSetCommandInput, options?: __HttpHandlerOptions): Promise<ListManagedPoliciesInPermissionSetCommandOutput>;
    listManagedPoliciesInPermissionSet(args: ListManagedPoliciesInPermissionSetCommandInput, cb: (err: any, data?: ListManagedPoliciesInPermissionSetCommandOutput) => void): void;
    listManagedPoliciesInPermissionSet(args: ListManagedPoliciesInPermissionSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListManagedPoliciesInPermissionSetCommandOutput) => void): void;
    /**
     * <p>Lists the status of the permission set provisioning requests for a specified SSO
     *       instance.</p>
     */
    listPermissionSetProvisioningStatus(args: ListPermissionSetProvisioningStatusCommandInput, options?: __HttpHandlerOptions): Promise<ListPermissionSetProvisioningStatusCommandOutput>;
    listPermissionSetProvisioningStatus(args: ListPermissionSetProvisioningStatusCommandInput, cb: (err: any, data?: ListPermissionSetProvisioningStatusCommandOutput) => void): void;
    listPermissionSetProvisioningStatus(args: ListPermissionSetProvisioningStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPermissionSetProvisioningStatusCommandOutput) => void): void;
    /**
     * <p>Lists the <a>PermissionSet</a>s in an SSO instance.</p>
     */
    listPermissionSets(args: ListPermissionSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListPermissionSetsCommandOutput>;
    listPermissionSets(args: ListPermissionSetsCommandInput, cb: (err: any, data?: ListPermissionSetsCommandOutput) => void): void;
    listPermissionSets(args: ListPermissionSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPermissionSetsCommandOutput) => void): void;
    /**
     * <p>Lists all the permission sets that are provisioned to a specified AWS account.</p>
     */
    listPermissionSetsProvisionedToAccount(args: ListPermissionSetsProvisionedToAccountCommandInput, options?: __HttpHandlerOptions): Promise<ListPermissionSetsProvisionedToAccountCommandOutput>;
    listPermissionSetsProvisionedToAccount(args: ListPermissionSetsProvisionedToAccountCommandInput, cb: (err: any, data?: ListPermissionSetsProvisionedToAccountCommandOutput) => void): void;
    listPermissionSetsProvisionedToAccount(args: ListPermissionSetsProvisionedToAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPermissionSetsProvisionedToAccountCommandOutput) => void): void;
    /**
     * <p>Lists the tags that are attached to a specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>The process by which a specified permission set is provisioned to the specified target.</p>
     */
    provisionPermissionSet(args: ProvisionPermissionSetCommandInput, options?: __HttpHandlerOptions): Promise<ProvisionPermissionSetCommandOutput>;
    provisionPermissionSet(args: ProvisionPermissionSetCommandInput, cb: (err: any, data?: ProvisionPermissionSetCommandOutput) => void): void;
    provisionPermissionSet(args: ProvisionPermissionSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ProvisionPermissionSetCommandOutput) => void): void;
    /**
     * <p>Attaches an IAM inline policy to a permission set.</p>
     *          <note>
     *             <p>If the permission set is already referenced by one or more account assignments, you will need to call <code>
     *                   <a>ProvisionPermissionSet</a>
     *                </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p>
     *          </note>
     */
    putInlinePolicyToPermissionSet(args: PutInlinePolicyToPermissionSetCommandInput, options?: __HttpHandlerOptions): Promise<PutInlinePolicyToPermissionSetCommandOutput>;
    putInlinePolicyToPermissionSet(args: PutInlinePolicyToPermissionSetCommandInput, cb: (err: any, data?: PutInlinePolicyToPermissionSetCommandOutput) => void): void;
    putInlinePolicyToPermissionSet(args: PutInlinePolicyToPermissionSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutInlinePolicyToPermissionSetCommandOutput) => void): void;
    /**
     * <p>Associates a set of tags with a specified resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Disassociates a set of tags from a specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the AWS SSO identity store attributes to use with the AWS SSO instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the AWS SSO identity store. If a SAML assertion passes any of these attributes, AWS SSO will replace the attribute value with the value from the AWS SSO identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
     */
    updateInstanceAccessControlAttributeConfiguration(args: UpdateInstanceAccessControlAttributeConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInstanceAccessControlAttributeConfigurationCommandOutput>;
    updateInstanceAccessControlAttributeConfiguration(args: UpdateInstanceAccessControlAttributeConfigurationCommandInput, cb: (err: any, data?: UpdateInstanceAccessControlAttributeConfigurationCommandOutput) => void): void;
    updateInstanceAccessControlAttributeConfiguration(args: UpdateInstanceAccessControlAttributeConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInstanceAccessControlAttributeConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates an existing permission set.</p>
     */
    updatePermissionSet(args: UpdatePermissionSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePermissionSetCommandOutput>;
    updatePermissionSet(args: UpdatePermissionSetCommandInput, cb: (err: any, data?: UpdatePermissionSetCommandOutput) => void): void;
    updatePermissionSet(args: UpdatePermissionSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePermissionSetCommandOutput) => void): void;
}
