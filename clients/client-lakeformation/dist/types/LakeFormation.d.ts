import { LakeFormationClient } from "./LakeFormationClient";
import { AddLFTagsToResourceCommandInput, AddLFTagsToResourceCommandOutput } from "./commands/AddLFTagsToResourceCommand";
import { BatchGrantPermissionsCommandInput, BatchGrantPermissionsCommandOutput } from "./commands/BatchGrantPermissionsCommand";
import { BatchRevokePermissionsCommandInput, BatchRevokePermissionsCommandOutput } from "./commands/BatchRevokePermissionsCommand";
import { CreateLFTagCommandInput, CreateLFTagCommandOutput } from "./commands/CreateLFTagCommand";
import { DeleteLFTagCommandInput, DeleteLFTagCommandOutput } from "./commands/DeleteLFTagCommand";
import { DeregisterResourceCommandInput, DeregisterResourceCommandOutput } from "./commands/DeregisterResourceCommand";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "./commands/DescribeResourceCommand";
import { GetDataLakeSettingsCommandInput, GetDataLakeSettingsCommandOutput } from "./commands/GetDataLakeSettingsCommand";
import { GetEffectivePermissionsForPathCommandInput, GetEffectivePermissionsForPathCommandOutput } from "./commands/GetEffectivePermissionsForPathCommand";
import { GetLFTagCommandInput, GetLFTagCommandOutput } from "./commands/GetLFTagCommand";
import { GetResourceLFTagsCommandInput, GetResourceLFTagsCommandOutput } from "./commands/GetResourceLFTagsCommand";
import { GrantPermissionsCommandInput, GrantPermissionsCommandOutput } from "./commands/GrantPermissionsCommand";
import { ListLFTagsCommandInput, ListLFTagsCommandOutput } from "./commands/ListLFTagsCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import { PutDataLakeSettingsCommandInput, PutDataLakeSettingsCommandOutput } from "./commands/PutDataLakeSettingsCommand";
import { RegisterResourceCommandInput, RegisterResourceCommandOutput } from "./commands/RegisterResourceCommand";
import { RemoveLFTagsFromResourceCommandInput, RemoveLFTagsFromResourceCommandOutput } from "./commands/RemoveLFTagsFromResourceCommand";
import { RevokePermissionsCommandInput, RevokePermissionsCommandOutput } from "./commands/RevokePermissionsCommand";
import { SearchDatabasesByLFTagsCommandInput, SearchDatabasesByLFTagsCommandOutput } from "./commands/SearchDatabasesByLFTagsCommand";
import { SearchTablesByLFTagsCommandInput, SearchTablesByLFTagsCommandOutput } from "./commands/SearchTablesByLFTagsCommand";
import { UpdateLFTagCommandInput, UpdateLFTagCommandOutput } from "./commands/UpdateLFTagCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Lake Formation</fullname>
 *          <p>Defines the public endpoint for the AWS Lake Formation service.</p>
 */
export declare class LakeFormation extends LakeFormationClient {
    /**
     * <p>Attaches one or more tags to an existing resource.</p>
     */
    addLFTagsToResource(args: AddLFTagsToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AddLFTagsToResourceCommandOutput>;
    addLFTagsToResource(args: AddLFTagsToResourceCommandInput, cb: (err: any, data?: AddLFTagsToResourceCommandOutput) => void): void;
    addLFTagsToResource(args: AddLFTagsToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddLFTagsToResourceCommandOutput) => void): void;
    /**
     * <p>Batch operation to grant permissions to the principal.</p>
     */
    batchGrantPermissions(args: BatchGrantPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGrantPermissionsCommandOutput>;
    batchGrantPermissions(args: BatchGrantPermissionsCommandInput, cb: (err: any, data?: BatchGrantPermissionsCommandOutput) => void): void;
    batchGrantPermissions(args: BatchGrantPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGrantPermissionsCommandOutput) => void): void;
    /**
     * <p>Batch operation to revoke permissions from the principal.</p>
     */
    batchRevokePermissions(args: BatchRevokePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<BatchRevokePermissionsCommandOutput>;
    batchRevokePermissions(args: BatchRevokePermissionsCommandInput, cb: (err: any, data?: BatchRevokePermissionsCommandOutput) => void): void;
    batchRevokePermissions(args: BatchRevokePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchRevokePermissionsCommandOutput) => void): void;
    /**
     * <p>Creates a tag with the specified name and values.</p>
     */
    createLFTag(args: CreateLFTagCommandInput, options?: __HttpHandlerOptions): Promise<CreateLFTagCommandOutput>;
    createLFTag(args: CreateLFTagCommandInput, cb: (err: any, data?: CreateLFTagCommandOutput) => void): void;
    createLFTag(args: CreateLFTagCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLFTagCommandOutput) => void): void;
    /**
     * <p>Deletes the specified tag key name. If the attribute key does not exist or the tag does not exist, then the operation will not do anything. If the attribute key exists, then the operation checks if any resources are tagged with this attribute key, if yes, the API throws a 400 Exception with the message "Delete not allowed" as the tag key is still attached with resources. You can consider untagging resources with this tag key.</p>
     */
    deleteLFTag(args: DeleteLFTagCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLFTagCommandOutput>;
    deleteLFTag(args: DeleteLFTagCommandInput, cb: (err: any, data?: DeleteLFTagCommandOutput) => void): void;
    deleteLFTag(args: DeleteLFTagCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLFTagCommandOutput) => void): void;
    /**
     * <p>Deregisters the resource as managed by the Data Catalog.</p>
     *
     *          <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
     */
    deregisterResource(args: DeregisterResourceCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterResourceCommandOutput>;
    deregisterResource(args: DeregisterResourceCommandInput, cb: (err: any, data?: DeregisterResourceCommandOutput) => void): void;
    deregisterResource(args: DeregisterResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterResourceCommandOutput) => void): void;
    /**
     * <p>Retrieves the current data access role for the given resource registered in AWS Lake Formation.</p>
     */
    describeResource(args: DescribeResourceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeResourceCommandOutput>;
    describeResource(args: DescribeResourceCommandInput, cb: (err: any, data?: DescribeResourceCommandOutput) => void): void;
    describeResource(args: DescribeResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeResourceCommandOutput) => void): void;
    /**
     * <p>Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. </p>
     */
    getDataLakeSettings(args: GetDataLakeSettingsCommandInput, options?: __HttpHandlerOptions): Promise<GetDataLakeSettingsCommandOutput>;
    getDataLakeSettings(args: GetDataLakeSettingsCommandInput, cb: (err: any, data?: GetDataLakeSettingsCommandOutput) => void): void;
    getDataLakeSettings(args: GetDataLakeSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDataLakeSettingsCommandOutput) => void): void;
    /**
     * <p>Returns the Lake Formation permissions for a specified table or database resource located
     *       at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.</p>
     */
    getEffectivePermissionsForPath(args: GetEffectivePermissionsForPathCommandInput, options?: __HttpHandlerOptions): Promise<GetEffectivePermissionsForPathCommandOutput>;
    getEffectivePermissionsForPath(args: GetEffectivePermissionsForPathCommandInput, cb: (err: any, data?: GetEffectivePermissionsForPathCommandOutput) => void): void;
    getEffectivePermissionsForPath(args: GetEffectivePermissionsForPathCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEffectivePermissionsForPathCommandOutput) => void): void;
    /**
     * <p>Returns a tag definition.</p>
     */
    getLFTag(args: GetLFTagCommandInput, options?: __HttpHandlerOptions): Promise<GetLFTagCommandOutput>;
    getLFTag(args: GetLFTagCommandInput, cb: (err: any, data?: GetLFTagCommandOutput) => void): void;
    getLFTag(args: GetLFTagCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLFTagCommandOutput) => void): void;
    /**
     * <p>Returns the tags applied to a resource.</p>
     */
    getResourceLFTags(args: GetResourceLFTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceLFTagsCommandOutput>;
    getResourceLFTags(args: GetResourceLFTagsCommandInput, cb: (err: any, data?: GetResourceLFTagsCommandOutput) => void): void;
    getResourceLFTags(args: GetResourceLFTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourceLFTagsCommandOutput) => void): void;
    /**
     * <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p>
     * 	        <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
     */
    grantPermissions(args: GrantPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<GrantPermissionsCommandOutput>;
    grantPermissions(args: GrantPermissionsCommandInput, cb: (err: any, data?: GrantPermissionsCommandOutput) => void): void;
    grantPermissions(args: GrantPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GrantPermissionsCommandOutput) => void): void;
    /**
     * <p>Lists tags that the requester has permission to view. </p>
     */
    listLFTags(args: ListLFTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListLFTagsCommandOutput>;
    listLFTags(args: ListLFTagsCommandInput, cb: (err: any, data?: ListLFTagsCommandOutput) => void): void;
    listLFTags(args: ListLFTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLFTagsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p>
     * 	        <p>This operation returns only those permissions that have been explicitly granted.</p>
     * 	        <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
     */
    listPermissions(args: ListPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<ListPermissionsCommandOutput>;
    listPermissions(args: ListPermissionsCommandInput, cb: (err: any, data?: ListPermissionsCommandOutput) => void): void;
    listPermissions(args: ListPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPermissionsCommandOutput) => void): void;
    /**
     * <p>Lists the resources registered to be managed by the Data Catalog.</p>
     */
    listResources(args: ListResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesCommandOutput>;
    listResources(args: ListResourcesCommandInput, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
    listResources(args: ListResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
    /**
     * <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p>
     *
     * 	        <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
     */
    putDataLakeSettings(args: PutDataLakeSettingsCommandInput, options?: __HttpHandlerOptions): Promise<PutDataLakeSettingsCommandOutput>;
    putDataLakeSettings(args: PutDataLakeSettingsCommandInput, cb: (err: any, data?: PutDataLakeSettingsCommandOutput) => void): void;
    putDataLakeSettings(args: PutDataLakeSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutDataLakeSettingsCommandOutput) => void): void;
    /**
     * <p>Registers the resource as managed by the Data Catalog.</p>
     *
     * 	        <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p>
     *
     *          <p>The following request registers a new location and gives AWS Lake Formation permission to use the service-linked role to access that location.</p>
     *
     *          <p>
     *             <code>ResourceArn = arn:aws:s3:::my-bucket
     * UseServiceLinkedRole = true</code>
     *          </p>
     *
     * 	        <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p>
     *
     *          <p>
     *             <code>arn:aws:iam::12345:role/my-data-access-role</code>
     *          </p>
     */
    registerResource(args: RegisterResourceCommandInput, options?: __HttpHandlerOptions): Promise<RegisterResourceCommandOutput>;
    registerResource(args: RegisterResourceCommandInput, cb: (err: any, data?: RegisterResourceCommandOutput) => void): void;
    registerResource(args: RegisterResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterResourceCommandOutput) => void): void;
    /**
     * <p>Removes a tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.</p>
     */
    removeLFTagsFromResource(args: RemoveLFTagsFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveLFTagsFromResourceCommandOutput>;
    removeLFTagsFromResource(args: RemoveLFTagsFromResourceCommandInput, cb: (err: any, data?: RemoveLFTagsFromResourceCommandOutput) => void): void;
    removeLFTagsFromResource(args: RemoveLFTagsFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveLFTagsFromResourceCommandOutput) => void): void;
    /**
     * <p>Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p>
     */
    revokePermissions(args: RevokePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<RevokePermissionsCommandOutput>;
    revokePermissions(args: RevokePermissionsCommandInput, cb: (err: any, data?: RevokePermissionsCommandOutput) => void): void;
    revokePermissions(args: RevokePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokePermissionsCommandOutput) => void): void;
    /**
     * <p>This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.</p>
     */
    searchDatabasesByLFTags(args: SearchDatabasesByLFTagsCommandInput, options?: __HttpHandlerOptions): Promise<SearchDatabasesByLFTagsCommandOutput>;
    searchDatabasesByLFTags(args: SearchDatabasesByLFTagsCommandInput, cb: (err: any, data?: SearchDatabasesByLFTagsCommandOutput) => void): void;
    searchDatabasesByLFTags(args: SearchDatabasesByLFTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchDatabasesByLFTagsCommandOutput) => void): void;
    /**
     * <p>This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LFTags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.</p>
     */
    searchTablesByLFTags(args: SearchTablesByLFTagsCommandInput, options?: __HttpHandlerOptions): Promise<SearchTablesByLFTagsCommandOutput>;
    searchTablesByLFTags(args: SearchTablesByLFTagsCommandInput, cb: (err: any, data?: SearchTablesByLFTagsCommandOutput) => void): void;
    searchTablesByLFTags(args: SearchTablesByLFTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchTablesByLFTagsCommandOutput) => void): void;
    /**
     * <p>Updates the list of possible values for the specified tag key. If the tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the tag key's value.  </p>
     */
    updateLFTag(args: UpdateLFTagCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLFTagCommandOutput>;
    updateLFTag(args: UpdateLFTagCommandInput, cb: (err: any, data?: UpdateLFTagCommandOutput) => void): void;
    updateLFTag(args: UpdateLFTagCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLFTagCommandOutput) => void): void;
    /**
     * <p>Updates the data access role used for vending access to the given (registered) resource in AWS Lake Formation. </p>
     */
    updateResource(args: UpdateResourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResourceCommandOutput>;
    updateResource(args: UpdateResourceCommandInput, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
    updateResource(args: UpdateResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
}
