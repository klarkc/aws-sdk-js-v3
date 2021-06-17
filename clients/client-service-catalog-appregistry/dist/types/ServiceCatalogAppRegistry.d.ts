import { ServiceCatalogAppRegistryClient } from "./ServiceCatalogAppRegistryClient";
import { AssociateAttributeGroupCommandInput, AssociateAttributeGroupCommandOutput } from "./commands/AssociateAttributeGroupCommand";
import { AssociateResourceCommandInput, AssociateResourceCommandOutput } from "./commands/AssociateResourceCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { CreateAttributeGroupCommandInput, CreateAttributeGroupCommandOutput } from "./commands/CreateAttributeGroupCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import { DeleteAttributeGroupCommandInput, DeleteAttributeGroupCommandOutput } from "./commands/DeleteAttributeGroupCommand";
import { DisassociateAttributeGroupCommandInput, DisassociateAttributeGroupCommandOutput } from "./commands/DisassociateAttributeGroupCommand";
import { DisassociateResourceCommandInput, DisassociateResourceCommandOutput } from "./commands/DisassociateResourceCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import { GetAttributeGroupCommandInput, GetAttributeGroupCommandOutput } from "./commands/GetAttributeGroupCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import { ListAssociatedAttributeGroupsCommandInput, ListAssociatedAttributeGroupsCommandOutput } from "./commands/ListAssociatedAttributeGroupsCommand";
import { ListAssociatedResourcesCommandInput, ListAssociatedResourcesCommandOutput } from "./commands/ListAssociatedResourcesCommand";
import { ListAttributeGroupsCommandInput, ListAttributeGroupsCommandOutput } from "./commands/ListAttributeGroupsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { SyncResourceCommandInput, SyncResourceCommandOutput } from "./commands/SyncResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import { UpdateAttributeGroupCommandInput, UpdateAttributeGroupCommandOutput } from "./commands/UpdateAttributeGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p> AWS Service Catalog AppRegistry enables organizations to understand the application context of their AWS resources. AppRegistry provides a repository of your applications, their resources, and the application metadata that you use within your enterprise.</p>
 */
export declare class ServiceCatalogAppRegistry extends ServiceCatalogAppRegistryClient {
    /**
     * <p>Associates an attribute group with an application to augment the application's metadata
     *       with the group's attributes. This feature enables applications to be described with
     *       user-defined details that are machine-readable, such as third-party integrations.</p>
     */
    associateAttributeGroup(args: AssociateAttributeGroupCommandInput, options?: __HttpHandlerOptions): Promise<AssociateAttributeGroupCommandOutput>;
    associateAttributeGroup(args: AssociateAttributeGroupCommandInput, cb: (err: any, data?: AssociateAttributeGroupCommandOutput) => void): void;
    associateAttributeGroup(args: AssociateAttributeGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateAttributeGroupCommandOutput) => void): void;
    /**
     * <p>Associates a resource with an application. Both the resource and the application can be specified either by ID or name.</p>
     */
    associateResource(args: AssociateResourceCommandInput, options?: __HttpHandlerOptions): Promise<AssociateResourceCommandOutput>;
    associateResource(args: AssociateResourceCommandInput, cb: (err: any, data?: AssociateResourceCommandOutput) => void): void;
    associateResource(args: AssociateResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateResourceCommandOutput) => void): void;
    /**
     * <p>Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.</p>
     */
    createApplication(args: CreateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationCommandOutput>;
    createApplication(args: CreateApplicationCommandInput, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    createApplication(args: CreateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    /**
     * <p>Creates a new attribute group as a container for user-defined attributes. This feature
     *       enables users to have full control over their cloud application's metadata in a rich
     *       machine-readable format to facilitate integration with automated workflows and third-party
     *       tools.</p>
     */
    createAttributeGroup(args: CreateAttributeGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateAttributeGroupCommandOutput>;
    createAttributeGroup(args: CreateAttributeGroupCommandInput, cb: (err: any, data?: CreateAttributeGroupCommandOutput) => void): void;
    createAttributeGroup(args: CreateAttributeGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAttributeGroupCommandOutput) => void): void;
    /**
     * <p>Deletes an application that is specified either by its application ID or name. All associated attribute groups and resources must be disassociated from it before deleting an application.</p>
     */
    deleteApplication(args: DeleteApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationCommandOutput>;
    deleteApplication(args: DeleteApplicationCommandInput, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    deleteApplication(args: DeleteApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    /**
     * <p>Deletes an attribute group, specified either by its attribute group ID or name.</p>
     */
    deleteAttributeGroup(args: DeleteAttributeGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAttributeGroupCommandOutput>;
    deleteAttributeGroup(args: DeleteAttributeGroupCommandInput, cb: (err: any, data?: DeleteAttributeGroupCommandOutput) => void): void;
    deleteAttributeGroup(args: DeleteAttributeGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAttributeGroupCommandOutput) => void): void;
    /**
     * <p>Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.</p>
     */
    disassociateAttributeGroup(args: DisassociateAttributeGroupCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateAttributeGroupCommandOutput>;
    disassociateAttributeGroup(args: DisassociateAttributeGroupCommandInput, cb: (err: any, data?: DisassociateAttributeGroupCommandOutput) => void): void;
    disassociateAttributeGroup(args: DisassociateAttributeGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateAttributeGroupCommandOutput) => void): void;
    /**
     * <p>Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.</p>
     */
    disassociateResource(args: DisassociateResourceCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateResourceCommandOutput>;
    disassociateResource(args: DisassociateResourceCommandInput, cb: (err: any, data?: DisassociateResourceCommandOutput) => void): void;
    disassociateResource(args: DisassociateResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateResourceCommandOutput) => void): void;
    /**
     * <p>Retrieves metadata information about one of your applications. The application can be specified either by its unique ID or by its name (which is unique within one account in one region at a given point in time). Specify by ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem.</p>
     */
    getApplication(args: GetApplicationCommandInput, options?: __HttpHandlerOptions): Promise<GetApplicationCommandOutput>;
    getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
    getApplication(args: GetApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
    /**
     * <p>Retrieves an attribute group, either by its name or its ID. The attribute group can be specified either by its unique ID or by its name.</p>
     */
    getAttributeGroup(args: GetAttributeGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetAttributeGroupCommandOutput>;
    getAttributeGroup(args: GetAttributeGroupCommandInput, cb: (err: any, data?: GetAttributeGroupCommandOutput) => void): void;
    getAttributeGroup(args: GetAttributeGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAttributeGroupCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of all of your applications. Results are paginated.</p>
     */
    listApplications(args: ListApplicationsCommandInput, options?: __HttpHandlerOptions): Promise<ListApplicationsCommandOutput>;
    listApplications(args: ListApplicationsCommandInput, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    listApplications(args: ListApplicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    /**
     * <p>Lists all attribute groups that are associated with specified application.  Results are paginated.</p>
     */
    listAssociatedAttributeGroups(args: ListAssociatedAttributeGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssociatedAttributeGroupsCommandOutput>;
    listAssociatedAttributeGroups(args: ListAssociatedAttributeGroupsCommandInput, cb: (err: any, data?: ListAssociatedAttributeGroupsCommandOutput) => void): void;
    listAssociatedAttributeGroups(args: ListAssociatedAttributeGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssociatedAttributeGroupsCommandOutput) => void): void;
    /**
     * <p>Lists all resources that are associated with specified application. Results are paginated.</p>
     */
    listAssociatedResources(args: ListAssociatedResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListAssociatedResourcesCommandOutput>;
    listAssociatedResources(args: ListAssociatedResourcesCommandInput, cb: (err: any, data?: ListAssociatedResourcesCommandOutput) => void): void;
    listAssociatedResources(args: ListAssociatedResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssociatedResourcesCommandOutput) => void): void;
    /**
     * <p>Lists all attribute groups which you have access to. Results are paginated.</p>
     */
    listAttributeGroups(args: ListAttributeGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListAttributeGroupsCommandOutput>;
    listAttributeGroups(args: ListAttributeGroupsCommandInput, cb: (err: any, data?: ListAttributeGroupsCommandOutput) => void): void;
    listAttributeGroups(args: ListAttributeGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAttributeGroupsCommandOutput) => void): void;
    /**
     * <p>Lists all of the tags on the resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Syncs the resource with what is currently recorded in App registry. Specifically, the resource’s App registry system tags are synced with its associated application. The resource is removed if it is not associated with the application. The caller must have permissions to read and update the resource.</p>
     */
    syncResource(args: SyncResourceCommandInput, options?: __HttpHandlerOptions): Promise<SyncResourceCommandOutput>;
    syncResource(args: SyncResourceCommandInput, cb: (err: any, data?: SyncResourceCommandOutput) => void): void;
    syncResource(args: SyncResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SyncResourceCommandOutput) => void): void;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the specified resource.</p>
     *          <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>
     *          <p>This operation returns an empty response if the call was successful.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from a resource.</p>
     *          <p>This operation returns an empty response if the call was successful.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates an existing application with new attributes.</p>
     */
    updateApplication(args: UpdateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApplicationCommandOutput>;
    updateApplication(args: UpdateApplicationCommandInput, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    updateApplication(args: UpdateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    /**
     * <p>Updates an existing attribute group with new details. </p>
     */
    updateAttributeGroup(args: UpdateAttributeGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAttributeGroupCommandOutput>;
    updateAttributeGroup(args: UpdateAttributeGroupCommandInput, cb: (err: any, data?: UpdateAttributeGroupCommandOutput) => void): void;
    updateAttributeGroup(args: UpdateAttributeGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAttributeGroupCommandOutput) => void): void;
}
