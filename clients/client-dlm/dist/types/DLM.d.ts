import { DLMClient } from "./DLMClient";
import { CreateLifecyclePolicyCommandInput, CreateLifecyclePolicyCommandOutput } from "./commands/CreateLifecyclePolicyCommand";
import { DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput } from "./commands/DeleteLifecyclePolicyCommand";
import { GetLifecyclePoliciesCommandInput, GetLifecyclePoliciesCommandOutput } from "./commands/GetLifecyclePoliciesCommand";
import { GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput } from "./commands/GetLifecyclePolicyCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateLifecyclePolicyCommandInput, UpdateLifecyclePolicyCommandOutput } from "./commands/UpdateLifecyclePolicyCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Data Lifecycle Manager</fullname>
 * 		       <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your AWS resources. You create
 * 			lifecycle policies, which are used to automate operations on the specified
 * 			resources.</p>
 * 		       <p>Amazon DLM supports Amazon EBS volumes and snapshots. For information about using Amazon DLM
 * 			with Amazon EBS, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html">Automating the Amazon EBS
 * 				Snapshot Lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export declare class DLM extends DLMClient {
    /**
     * <p>Creates a policy to manage the lifecycle of the specified AWS resources. You can
     * 			create up to 100 lifecycle policies.</p>
     */
    createLifecyclePolicy(args: CreateLifecyclePolicyCommandInput, options?: __HttpHandlerOptions): Promise<CreateLifecyclePolicyCommandOutput>;
    createLifecyclePolicy(args: CreateLifecyclePolicyCommandInput, cb: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void): void;
    createLifecyclePolicy(args: CreateLifecyclePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the specified lifecycle policy and halts the automated operations that the
     * 			policy specified.</p>
     */
    deleteLifecyclePolicy(args: DeleteLifecyclePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLifecyclePolicyCommandOutput>;
    deleteLifecyclePolicy(args: DeleteLifecyclePolicyCommandInput, cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void): void;
    deleteLifecyclePolicy(args: DeleteLifecyclePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void): void;
    /**
     * <p>Gets summary information about all or the specified data lifecycle policies.</p>
     * 		       <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
     */
    getLifecyclePolicies(args: GetLifecyclePoliciesCommandInput, options?: __HttpHandlerOptions): Promise<GetLifecyclePoliciesCommandOutput>;
    getLifecyclePolicies(args: GetLifecyclePoliciesCommandInput, cb: (err: any, data?: GetLifecyclePoliciesCommandOutput) => void): void;
    getLifecyclePolicies(args: GetLifecyclePoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLifecyclePoliciesCommandOutput) => void): void;
    /**
     * <p>Gets detailed information about the specified lifecycle policy.</p>
     */
    getLifecyclePolicy(args: GetLifecyclePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetLifecyclePolicyCommandOutput>;
    getLifecyclePolicy(args: GetLifecyclePolicyCommandInput, cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void): void;
    getLifecyclePolicy(args: GetLifecyclePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void): void;
    /**
     * <p>Lists the tags for the specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Adds the specified tags to the specified resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the specified lifecycle policy.</p>
     */
    updateLifecyclePolicy(args: UpdateLifecyclePolicyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLifecyclePolicyCommandOutput>;
    updateLifecyclePolicy(args: UpdateLifecyclePolicyCommandInput, cb: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void): void;
    updateLifecyclePolicy(args: UpdateLifecyclePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void): void;
}
