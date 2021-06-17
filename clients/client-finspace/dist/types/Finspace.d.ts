import { FinspaceClient } from "./FinspaceClient";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "./commands/CreateEnvironmentCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "./commands/DeleteEnvironmentCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "./commands/GetEnvironmentCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The FinSpace management service provides the APIs for managing the FinSpace
 *            environments. </p>
 */
export declare class Finspace extends FinspaceClient {
    /**
     * <p>Create a new FinSpace environment.</p>
     */
    createEnvironment(args: CreateEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<CreateEnvironmentCommandOutput>;
    createEnvironment(args: CreateEnvironmentCommandInput, cb: (err: any, data?: CreateEnvironmentCommandOutput) => void): void;
    createEnvironment(args: CreateEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEnvironmentCommandOutput) => void): void;
    /**
     * <p>Delete an FinSpace environment.</p>
     */
    deleteEnvironment(args: DeleteEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEnvironmentCommandOutput>;
    deleteEnvironment(args: DeleteEnvironmentCommandInput, cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void): void;
    deleteEnvironment(args: DeleteEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void): void;
    /**
     * <p>Returns the FinSpace environment object.</p>
     */
    getEnvironment(args: GetEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<GetEnvironmentCommandOutput>;
    getEnvironment(args: GetEnvironmentCommandInput, cb: (err: any, data?: GetEnvironmentCommandOutput) => void): void;
    getEnvironment(args: GetEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEnvironmentCommandOutput) => void): void;
    /**
     * <p>A list of all of your FinSpace environments.</p>
     */
    listEnvironments(args: ListEnvironmentsCommandInput, options?: __HttpHandlerOptions): Promise<ListEnvironmentsCommandOutput>;
    listEnvironments(args: ListEnvironmentsCommandInput, cb: (err: any, data?: ListEnvironmentsCommandOutput) => void): void;
    listEnvironments(args: ListEnvironmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEnvironmentsCommandOutput) => void): void;
    /**
     * <p>A list of all tags for a resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Adds metadata tags to a FinSpace resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes metadata tags from a FinSpace resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Update your FinSpace environment.</p>
     */
    updateEnvironment(args: UpdateEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEnvironmentCommandOutput>;
    updateEnvironment(args: UpdateEnvironmentCommandInput, cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void): void;
    updateEnvironment(args: UpdateEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void): void;
}
