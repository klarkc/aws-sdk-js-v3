import { S3OutpostsClient } from "./S3OutpostsClient";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "./commands/ListEndpointsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon S3 on Outposts provides access to S3 on Outposts operations.</p>
 */
export declare class S3Outposts extends S3OutpostsClient {
    /**
     * <p>S3 on Outposts access points simplify managing data access at scale for shared datasets
     *             in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform
     *             actions within your virtual private cloud (VPC). </p>
     *         <p>This action creates an endpoint and associates it with the specified Outpost. </p>
     *         <p></p>
     *         <p>Related actions include:</p>
     *         <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    createEndpoint(args: CreateEndpointCommandInput, options?: __HttpHandlerOptions): Promise<CreateEndpointCommandOutput>;
    createEndpoint(args: CreateEndpointCommandInput, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
    createEndpoint(args: CreateEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
    /**
     * <p>S3 on Outposts access points simplify managing data access at scale for shared datasets
     *             in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform
     *             actions within your virtual private cloud (VPC). </p>
     *         <p>This action deletes an endpoint.
     *             </p>
     *         <p></p>
     *         <p>Related actions include:</p>
     *         <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    deleteEndpoint(args: DeleteEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEndpointCommandOutput>;
    deleteEndpoint(args: DeleteEndpointCommandInput, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
    deleteEndpoint(args: DeleteEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
    /**
     * <p>S3 on Outposts access points simplify managing data access at scale for shared datasets
     *             in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform
     *             actions within your virtual private cloud (VPC). </p>
     *         <p>This action lists endpoints associated with the Outpost.
     *             </p>
     *         <p></p>
     *         <p>Related actions include:</p>
     *         <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    listEndpoints(args: ListEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<ListEndpointsCommandOutput>;
    listEndpoints(args: ListEndpointsCommandInput, cb: (err: any, data?: ListEndpointsCommandOutput) => void): void;
    listEndpoints(args: ListEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEndpointsCommandOutput) => void): void;
}
