import { ElasticInferenceClient } from "./ElasticInferenceClient";
import { DescribeAcceleratorOfferingsCommandInput, DescribeAcceleratorOfferingsCommandOutput } from "./commands/DescribeAcceleratorOfferingsCommand";
import { DescribeAcceleratorTypesCommandInput, DescribeAcceleratorTypesCommandOutput } from "./commands/DescribeAcceleratorTypesCommand";
import { DescribeAcceleratorsCommandInput, DescribeAcceleratorsCommandOutput } from "./commands/DescribeAcceleratorsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>
 *             Elastic Inference public APIs.
 *         </p>
 */
export declare class ElasticInference extends ElasticInferenceClient {
    /**
     * <p>
     *             Describes the locations in which a given accelerator type or set of types is present in a given region.
     *         </p>
     */
    describeAcceleratorOfferings(args: DescribeAcceleratorOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAcceleratorOfferingsCommandOutput>;
    describeAcceleratorOfferings(args: DescribeAcceleratorOfferingsCommandInput, cb: (err: any, data?: DescribeAcceleratorOfferingsCommandOutput) => void): void;
    describeAcceleratorOfferings(args: DescribeAcceleratorOfferingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAcceleratorOfferingsCommandOutput) => void): void;
    /**
     * <p>
     *             Describes information over a provided set of accelerators belonging to an account.
     *         </p>
     */
    describeAccelerators(args: DescribeAcceleratorsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAcceleratorsCommandOutput>;
    describeAccelerators(args: DescribeAcceleratorsCommandInput, cb: (err: any, data?: DescribeAcceleratorsCommandOutput) => void): void;
    describeAccelerators(args: DescribeAcceleratorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAcceleratorsCommandOutput) => void): void;
    /**
     * <p>
     *             Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput.
     *         </p>
     */
    describeAcceleratorTypes(args: DescribeAcceleratorTypesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAcceleratorTypesCommandOutput>;
    describeAcceleratorTypes(args: DescribeAcceleratorTypesCommandInput, cb: (err: any, data?: DescribeAcceleratorTypesCommandOutput) => void): void;
    describeAcceleratorTypes(args: DescribeAcceleratorTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAcceleratorTypesCommandOutput) => void): void;
    /**
     * <p>
     *             Returns all tags of an Elastic Inference Accelerator.
     *         </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>
     *             Adds the specified tags to an Elastic Inference Accelerator.
     *         </p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>
     *             Removes the specified tags from an Elastic Inference Accelerator.
     *         </p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
