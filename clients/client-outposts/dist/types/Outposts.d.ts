import { OutpostsClient } from "./OutpostsClient";
import { CreateOutpostCommandInput, CreateOutpostCommandOutput } from "./commands/CreateOutpostCommand";
import { DeleteOutpostCommandInput, DeleteOutpostCommandOutput } from "./commands/DeleteOutpostCommand";
import { DeleteSiteCommandInput, DeleteSiteCommandOutput } from "./commands/DeleteSiteCommand";
import { GetOutpostCommandInput, GetOutpostCommandOutput } from "./commands/GetOutpostCommand";
import { GetOutpostInstanceTypesCommandInput, GetOutpostInstanceTypesCommandOutput } from "./commands/GetOutpostInstanceTypesCommand";
import { ListOutpostsCommandInput, ListOutpostsCommandOutput } from "./commands/ListOutpostsCommand";
import { ListSitesCommandInput, ListSitesCommandOutput } from "./commands/ListSitesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Outposts is a fully managed service that extends AWS infrastructure, APIs, and tools
 *       to customer premises. By providing local access to AWS managed infrastructure, AWS Outposts
 *       enables customers to build and run applications on premises using the same programming
 *       interfaces as in AWS Regions, while using local compute and storage resources for lower
 *       latency and local data processing needs.</p>
 */
export declare class Outposts extends OutpostsClient {
    /**
     * <p>Creates an Outpost.</p>
     */
    createOutpost(args: CreateOutpostCommandInput, options?: __HttpHandlerOptions): Promise<CreateOutpostCommandOutput>;
    createOutpost(args: CreateOutpostCommandInput, cb: (err: any, data?: CreateOutpostCommandOutput) => void): void;
    createOutpost(args: CreateOutpostCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateOutpostCommandOutput) => void): void;
    /**
     * <p>Deletes the Outpost.</p>
     */
    deleteOutpost(args: DeleteOutpostCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOutpostCommandOutput>;
    deleteOutpost(args: DeleteOutpostCommandInput, cb: (err: any, data?: DeleteOutpostCommandOutput) => void): void;
    deleteOutpost(args: DeleteOutpostCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteOutpostCommandOutput) => void): void;
    /**
     * <p>Deletes the site.</p>
     */
    deleteSite(args: DeleteSiteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSiteCommandOutput>;
    deleteSite(args: DeleteSiteCommandInput, cb: (err: any, data?: DeleteSiteCommandOutput) => void): void;
    deleteSite(args: DeleteSiteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSiteCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified Outpost.</p>
     */
    getOutpost(args: GetOutpostCommandInput, options?: __HttpHandlerOptions): Promise<GetOutpostCommandOutput>;
    getOutpost(args: GetOutpostCommandInput, cb: (err: any, data?: GetOutpostCommandOutput) => void): void;
    getOutpost(args: GetOutpostCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOutpostCommandOutput) => void): void;
    /**
     * <p>Lists the instance types for the specified Outpost.</p>
     */
    getOutpostInstanceTypes(args: GetOutpostInstanceTypesCommandInput, options?: __HttpHandlerOptions): Promise<GetOutpostInstanceTypesCommandOutput>;
    getOutpostInstanceTypes(args: GetOutpostInstanceTypesCommandInput, cb: (err: any, data?: GetOutpostInstanceTypesCommandOutput) => void): void;
    getOutpostInstanceTypes(args: GetOutpostInstanceTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOutpostInstanceTypesCommandOutput) => void): void;
    /**
     * <p>List the Outposts for your AWS account.</p>
     */
    listOutposts(args: ListOutpostsCommandInput, options?: __HttpHandlerOptions): Promise<ListOutpostsCommandOutput>;
    listOutposts(args: ListOutpostsCommandInput, cb: (err: any, data?: ListOutpostsCommandOutput) => void): void;
    listOutposts(args: ListOutpostsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOutpostsCommandOutput) => void): void;
    /**
     * <p>Lists the sites for the specified AWS account.</p>
     */
    listSites(args: ListSitesCommandInput, options?: __HttpHandlerOptions): Promise<ListSitesCommandOutput>;
    listSites(args: ListSitesCommandInput, cb: (err: any, data?: ListSitesCommandOutput) => void): void;
    listSites(args: ListSitesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSitesCommandOutput) => void): void;
    /**
     * <p>Lists the tags for the specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Adds tags to the specified resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from the specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
