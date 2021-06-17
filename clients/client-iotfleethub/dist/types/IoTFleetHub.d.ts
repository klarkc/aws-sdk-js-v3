import { IoTFleetHubClient } from "./IoTFleetHubClient";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import { DescribeApplicationCommandInput, DescribeApplicationCommandOutput } from "./commands/DescribeApplicationCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>With Fleet Hub for AWS IoT Device Management you can build stand-alone web applications for monitoring the health of your device fleets.</p>
 *          <note>
 *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
 *          </note>
 */
export declare class IoTFleetHub extends IoTFleetHubClient {
    /**
     * <p>Creates a Fleet Hub for AWS IoT Device Management web application.</p>
     *          <note>
     *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
     *          </note>
     */
    createApplication(args: CreateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationCommandOutput>;
    createApplication(args: CreateApplicationCommandInput, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    createApplication(args: CreateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    /**
     * <p>Deletes a Fleet Hub for AWS IoT Device Management web application.</p>
     *          <note>
     *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
     *          </note>
     */
    deleteApplication(args: DeleteApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationCommandOutput>;
    deleteApplication(args: DeleteApplicationCommandInput, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    deleteApplication(args: DeleteApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    /**
     * <p>Gets information about a Fleet Hub for AWS IoT Device Management web application.</p>
     *          <note>
     *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
     *          </note>
     */
    describeApplication(args: DescribeApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeApplicationCommandOutput>;
    describeApplication(args: DescribeApplicationCommandInput, cb: (err: any, data?: DescribeApplicationCommandOutput) => void): void;
    describeApplication(args: DescribeApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeApplicationCommandOutput) => void): void;
    /**
     * <p>Gets a list of Fleet Hub for AWS IoT Device Management web applications for the current account.</p>
     *          <note>
     *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
     *          </note>
     */
    listApplications(args: ListApplicationsCommandInput, options?: __HttpHandlerOptions): Promise<ListApplicationsCommandOutput>;
    listApplications(args: ListApplicationsCommandInput, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    listApplications(args: ListApplicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    /**
     * <p>Lists the tags for the specified resource.</p>
     *          <note>
     *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
     *          </note>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Adds to or modifies the tags of the specified resource. Tags are metadata which can be used to manage a resource.</p>
     *          <note>
     *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
     *          </note>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags (metadata) from the resource.</p>
     *          <note>
     *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
     *          </note>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates information about a Fleet Hub for a AWS IoT Device Management web application.</p>
     *          <note>
     *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
     *          </note>
     */
    updateApplication(args: UpdateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApplicationCommandOutput>;
    updateApplication(args: UpdateApplicationCommandInput, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    updateApplication(args: UpdateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
}
