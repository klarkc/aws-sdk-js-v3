import { IoT1ClickProjectsClient } from "./IoT1ClickProjectsClient";
import { AssociateDeviceWithPlacementCommandInput, AssociateDeviceWithPlacementCommandOutput } from "./commands/AssociateDeviceWithPlacementCommand";
import { CreatePlacementCommandInput, CreatePlacementCommandOutput } from "./commands/CreatePlacementCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { DeletePlacementCommandInput, DeletePlacementCommandOutput } from "./commands/DeletePlacementCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DescribePlacementCommandInput, DescribePlacementCommandOutput } from "./commands/DescribePlacementCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import { DisassociateDeviceFromPlacementCommandInput, DisassociateDeviceFromPlacementCommandOutput } from "./commands/DisassociateDeviceFromPlacementCommand";
import { GetDevicesInPlacementCommandInput, GetDevicesInPlacementCommandOutput } from "./commands/GetDevicesInPlacementCommand";
import { ListPlacementsCommandInput, ListPlacementsCommandOutput } from "./commands/ListPlacementsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdatePlacementCommandInput, UpdatePlacementCommandOutput } from "./commands/UpdatePlacementCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The AWS IoT 1-Click Projects API Reference</p>
 */
export declare class IoT1ClickProjects extends IoT1ClickProjectsClient {
    /**
     * <p>Associates a physical device with a placement.</p>
     */
    associateDeviceWithPlacement(args: AssociateDeviceWithPlacementCommandInput, options?: __HttpHandlerOptions): Promise<AssociateDeviceWithPlacementCommandOutput>;
    associateDeviceWithPlacement(args: AssociateDeviceWithPlacementCommandInput, cb: (err: any, data?: AssociateDeviceWithPlacementCommandOutput) => void): void;
    associateDeviceWithPlacement(args: AssociateDeviceWithPlacementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateDeviceWithPlacementCommandOutput) => void): void;
    /**
     * <p>Creates an empty placement.</p>
     */
    createPlacement(args: CreatePlacementCommandInput, options?: __HttpHandlerOptions): Promise<CreatePlacementCommandOutput>;
    createPlacement(args: CreatePlacementCommandInput, cb: (err: any, data?: CreatePlacementCommandOutput) => void): void;
    createPlacement(args: CreatePlacementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePlacementCommandOutput) => void): void;
    /**
     * <p>Creates an empty project with a placement template. A project contains zero or more
     *       placements that adhere to the placement template defined in the project.</p>
     */
    createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
    createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    createProject(args: CreateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    /**
     * <p>Deletes a placement. To delete a placement, it must not have any devices associated with
     *       it.</p>
     *          <note>
     *             <p>When you delete a placement, all associated data becomes irretrievable.</p>
     *          </note>
     */
    deletePlacement(args: DeletePlacementCommandInput, options?: __HttpHandlerOptions): Promise<DeletePlacementCommandOutput>;
    deletePlacement(args: DeletePlacementCommandInput, cb: (err: any, data?: DeletePlacementCommandOutput) => void): void;
    deletePlacement(args: DeletePlacementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePlacementCommandOutput) => void): void;
    /**
     * <p>Deletes a project. To delete a project, it must not have any placements associated with
     *       it.</p>
     *          <note>
     *             <p>When you delete a project, all associated data becomes irretrievable.</p>
     *          </note>
     */
    deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
    deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    deleteProject(args: DeleteProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    /**
     * <p>Describes a placement in a project.</p>
     */
    describePlacement(args: DescribePlacementCommandInput, options?: __HttpHandlerOptions): Promise<DescribePlacementCommandOutput>;
    describePlacement(args: DescribePlacementCommandInput, cb: (err: any, data?: DescribePlacementCommandOutput) => void): void;
    describePlacement(args: DescribePlacementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePlacementCommandOutput) => void): void;
    /**
     * <p>Returns an object describing a project.</p>
     */
    describeProject(args: DescribeProjectCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProjectCommandOutput>;
    describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    describeProject(args: DescribeProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    /**
     * <p>Removes a physical device from a placement.</p>
     */
    disassociateDeviceFromPlacement(args: DisassociateDeviceFromPlacementCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateDeviceFromPlacementCommandOutput>;
    disassociateDeviceFromPlacement(args: DisassociateDeviceFromPlacementCommandInput, cb: (err: any, data?: DisassociateDeviceFromPlacementCommandOutput) => void): void;
    disassociateDeviceFromPlacement(args: DisassociateDeviceFromPlacementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateDeviceFromPlacementCommandOutput) => void): void;
    /**
     * <p>Returns an object enumerating the devices in a placement.</p>
     */
    getDevicesInPlacement(args: GetDevicesInPlacementCommandInput, options?: __HttpHandlerOptions): Promise<GetDevicesInPlacementCommandOutput>;
    getDevicesInPlacement(args: GetDevicesInPlacementCommandInput, cb: (err: any, data?: GetDevicesInPlacementCommandOutput) => void): void;
    getDevicesInPlacement(args: GetDevicesInPlacementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDevicesInPlacementCommandOutput) => void): void;
    /**
     * <p>Lists the placement(s) of a project.</p>
     */
    listPlacements(args: ListPlacementsCommandInput, options?: __HttpHandlerOptions): Promise<ListPlacementsCommandOutput>;
    listPlacements(args: ListPlacementsCommandInput, cb: (err: any, data?: ListPlacementsCommandOutput) => void): void;
    listPlacements(args: ListPlacementsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPlacementsCommandOutput) => void): void;
    /**
     * <p>Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.</p>
     */
    listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
    listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    listProjects(args: ListProjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    /**
     * <p>Lists the tags (metadata key/value pairs) which you have assigned to the resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be
     *       used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging
     *         Strategies</a>.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags (metadata key/value pairs) from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates a placement with the given attributes. To clear an attribute, pass an empty value
     *       (i.e., "").</p>
     */
    updatePlacement(args: UpdatePlacementCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePlacementCommandOutput>;
    updatePlacement(args: UpdatePlacementCommandInput, cb: (err: any, data?: UpdatePlacementCommandOutput) => void): void;
    updatePlacement(args: UpdatePlacementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePlacementCommandOutput) => void): void;
    /**
     * <p>Updates a project associated with your AWS account and region. With the exception of
     *       device template names, you can pass just the values that need to be updated because the update
     *       request will change only the values that are provided. To clear a value, pass the empty string
     *       (i.e., <code>""</code>).</p>
     */
    updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
    updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
    updateProject(args: UpdateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
}
