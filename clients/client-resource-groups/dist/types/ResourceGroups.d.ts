import { ResourceGroupsClient } from "./ResourceGroupsClient";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import { GetGroupConfigurationCommandInput, GetGroupConfigurationCommandOutput } from "./commands/GetGroupConfigurationCommand";
import { GetGroupQueryCommandInput, GetGroupQueryCommandOutput } from "./commands/GetGroupQueryCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GroupResourcesCommandInput, GroupResourcesCommandOutput } from "./commands/GroupResourcesCommand";
import { ListGroupResourcesCommandInput, ListGroupResourcesCommandOutput } from "./commands/ListGroupResourcesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { PutGroupConfigurationCommandInput, PutGroupConfigurationCommandOutput } from "./commands/PutGroupConfigurationCommand";
import { SearchResourcesCommandInput, SearchResourcesCommandOutput } from "./commands/SearchResourcesCommand";
import { TagCommandInput, TagCommandOutput } from "./commands/TagCommand";
import { UngroupResourcesCommandInput, UngroupResourcesCommandOutput } from "./commands/UngroupResourcesCommand";
import { UntagCommandInput, UntagCommandOutput } from "./commands/UntagCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import { UpdateGroupQueryCommandInput, UpdateGroupQueryCommandOutput } from "./commands/UpdateGroupQueryCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Resource Groups</fullname>
 *
 *         <p>AWS Resource Groups lets you organize AWS resources such as Amazon EC2 instances, Amazon Relational Database Service
 *             databases, and Amazon S3 buckets into groups using criteria that you define as tags. A
 *             resource group is a collection of resources that match the resource types specified in a
 *             query, and share one or more tags or portions of tags. You can create a group of
 *             resources based on their roles in your cloud infrastructure, lifecycle stages, regions,
 *             application layers, or virtually any criteria. Resource Groups enable you to automate management
 *             tasks, such as those in AWS Systems Manager Automation documents, on tag-related resources in
 *             AWS Systems Manager. Groups of tagged resources also let you quickly view a custom console in
 *             AWS Systems Manager that shows AWS Config compliance and other monitoring data about member
 *             resources.</p>
 *         <p>To create a resource group, build a resource query, and specify tags that identify the
 *             criteria that members of the group have in common. Tags are key-value pairs.</p>
 *         <p>For more information about Resource Groups, see the <a href="https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html">AWS Resource Groups User Guide</a>.</p>
 *         <p>AWS Resource Groups uses a REST-compliant API that you can use to perform the following types of
 *             operations.</p>
 *         <ul>
 *             <li>
 *                 <p>Create, Read, Update, and Delete (CRUD) operations on resource groups and
 *                     resource query entities</p>
 *             </li>
 *             <li>
 *                 <p>Applying, editing, and removing tags from resource groups</p>
 *             </li>
 *             <li>
 *                 <p>Resolving resource group member ARNs so they can be returned as search
 *                     results</p>
 *             </li>
 *             <li>
 *                 <p>Getting data about resources that are members of a group</p>
 *             </li>
 *             <li>
 *                 <p>Searching AWS resources based on a resource query</p>
 *             </li>
 *          </ul>
 */
export declare class ResourceGroups extends ResourceGroupsClient {
    /**
     * <p>Creates a resource group with the specified name and description. You can optionally
     *             include a resource query, or a service configuration. For more information about
     *             constructing a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>. For more
     *             information about service configurations, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource
     *                 groups</a>.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:CreateGroup</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
    createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    createGroup(args: CreateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the specified resource group. Deleting a resource group does not delete any
     *             resources that are members of the group; it only deletes the group structure.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:DeleteGroup</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
    deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    deleteGroup(args: DeleteGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    /**
     * <p>Returns information about a specified resource group.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:GetGroup</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
    getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
    getGroup(args: GetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
    /**
     * <p>Returns the service configuration associated with the specified resource group. For
     *             details about the service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource
     *                 groups</a>.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:GetGroupConfiguration</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    getGroupConfiguration(args: GetGroupConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupConfigurationCommandOutput>;
    getGroupConfiguration(args: GetGroupConfigurationCommandInput, cb: (err: any, data?: GetGroupConfigurationCommandOutput) => void): void;
    getGroupConfiguration(args: GetGroupConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGroupConfigurationCommandOutput) => void): void;
    /**
     * <p>Retrieves the resource query associated with the specified resource group. For more
     *             information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create
     *                 a tag-based group in Resource Groups</a>.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:GetGroupQuery</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    getGroupQuery(args: GetGroupQueryCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupQueryCommandOutput>;
    getGroupQuery(args: GetGroupQueryCommandInput, cb: (err: any, data?: GetGroupQueryCommandOutput) => void): void;
    getGroupQuery(args: GetGroupQueryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGroupQueryCommandOutput) => void): void;
    /**
     * <p>Returns a list of tags that are associated with a resource group, specified by an
     *             ARN.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:GetTags</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
    getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
    getTags(args: GetTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
    /**
     * <p>Adds the specified resources to the specified group.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:GroupResources</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    groupResources(args: GroupResourcesCommandInput, options?: __HttpHandlerOptions): Promise<GroupResourcesCommandOutput>;
    groupResources(args: GroupResourcesCommandInput, cb: (err: any, data?: GroupResourcesCommandOutput) => void): void;
    groupResources(args: GroupResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GroupResourcesCommandOutput) => void): void;
    /**
     * <p>Returns a list of ARNs of the resources that are members of a specified resource
     *             group.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:ListGroupResources</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>cloudformation:DescribeStacks</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>cloudformation:ListStackResources</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>tag:GetResources</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    listGroupResources(args: ListGroupResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupResourcesCommandOutput>;
    listGroupResources(args: ListGroupResourcesCommandInput, cb: (err: any, data?: ListGroupResourcesCommandOutput) => void): void;
    listGroupResources(args: ListGroupResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupResourcesCommandOutput) => void): void;
    /**
     * <p>Returns a list of existing resource groups in your account.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:ListGroups</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
    listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    listGroups(args: ListGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    /**
     * <p>Attaches a service configuration to the specified group. This occurs asynchronously,
     *             and can take time to complete. You can use <a>GetGroupConfiguration</a> to
     *             check the status of the update.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:PutGroupConfiguration</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    putGroupConfiguration(args: PutGroupConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutGroupConfigurationCommandOutput>;
    putGroupConfiguration(args: PutGroupConfigurationCommandInput, cb: (err: any, data?: PutGroupConfigurationCommandOutput) => void): void;
    putGroupConfiguration(args: PutGroupConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutGroupConfigurationCommandOutput) => void): void;
    /**
     * <p>Returns a list of AWS resource identifiers that matches the specified query. The
     *             query uses the same format as a resource query in a CreateGroup or UpdateGroupQuery
     *             operation.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:SearchResources</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>cloudformation:DescribeStacks</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>cloudformation:ListStackResources</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>tag:GetResources</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    searchResources(args: SearchResourcesCommandInput, options?: __HttpHandlerOptions): Promise<SearchResourcesCommandOutput>;
    searchResources(args: SearchResourcesCommandInput, cb: (err: any, data?: SearchResourcesCommandOutput) => void): void;
    searchResources(args: SearchResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchResourcesCommandOutput) => void): void;
    /**
     * <p>Adds tags to a resource group with the specified ARN. Existing tags on a resource
     *             group are not changed if they are not specified in the request parameters.</p>
     *         <important>
     *             <p>Do not store personally identifiable information (PII) or other confidential or
     *                 sensitive information in tags. We use tags to provide you with billing and
     *                 administration services. Tags are not intended to be used for private or sensitive
     *                 data.</p>
     *         </important>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:Tag</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    tag(args: TagCommandInput, options?: __HttpHandlerOptions): Promise<TagCommandOutput>;
    tag(args: TagCommandInput, cb: (err: any, data?: TagCommandOutput) => void): void;
    tag(args: TagCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagCommandOutput) => void): void;
    /**
     * <p>Removes the specified resources from the specified group.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:UngroupResources</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    ungroupResources(args: UngroupResourcesCommandInput, options?: __HttpHandlerOptions): Promise<UngroupResourcesCommandOutput>;
    ungroupResources(args: UngroupResourcesCommandInput, cb: (err: any, data?: UngroupResourcesCommandOutput) => void): void;
    ungroupResources(args: UngroupResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UngroupResourcesCommandOutput) => void): void;
    /**
     * <p>Deletes tags from a specified resource group.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:Untag</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    untag(args: UntagCommandInput, options?: __HttpHandlerOptions): Promise<UntagCommandOutput>;
    untag(args: UntagCommandInput, cb: (err: any, data?: UntagCommandOutput) => void): void;
    untag(args: UntagCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagCommandOutput) => void): void;
    /**
     * <p>Updates the description for an existing group. You cannot update the name of a
     *             resource group.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:UpdateGroup</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
    updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
    updateGroup(args: UpdateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
    /**
     * <p>Updates the resource query of a group. For more information about resource queries,
     *             see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>.</p>
     *         <p>
     *             <b>Minimum permissions</b>
     *          </p>
     *          <p>To run this command, you must have the following permissions:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>resource-groups:UpdateGroupQuery</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    updateGroupQuery(args: UpdateGroupQueryCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupQueryCommandOutput>;
    updateGroupQuery(args: UpdateGroupQueryCommandInput, cb: (err: any, data?: UpdateGroupQueryCommandOutput) => void): void;
    updateGroupQuery(args: UpdateGroupQueryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGroupQueryCommandOutput) => void): void;
}
