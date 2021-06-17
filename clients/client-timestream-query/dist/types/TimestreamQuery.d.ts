import { TimestreamQueryClient } from "./TimestreamQueryClient";
import { CancelQueryCommandInput, CancelQueryCommandOutput } from "./commands/CancelQueryCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "./commands/DescribeEndpointsCommand";
import { QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>
 *
 *         </p>
 */
export declare class TimestreamQuery extends TimestreamQueryClient {
    /**
     * <p>
     *         Cancels a query that has been issued. Cancellation is guaranteed only if the query has not
     *         completed execution before the cancellation request was issued. Because cancellation is an idempotent operation,
     *         subsequent cancellation requests will return a <code>CancellationMessage</code>, indicating that the query has already been canceled.
     *     </p>
     */
    cancelQuery(args: CancelQueryCommandInput, options?: __HttpHandlerOptions): Promise<CancelQueryCommandOutput>;
    cancelQuery(args: CancelQueryCommandInput, cb: (err: any, data?: CancelQueryCommandOutput) => void): void;
    cancelQuery(args: CancelQueryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelQueryCommandOutput) => void): void;
    /**
     * <p>DescribeEndpoints returns a list of available endpoints to make Timestream API calls against.
     *             This API is available through both Write and Query.</p>
     *         <p>Because Timestream’s SDKs are designed to transparently work with the service’s architecture,
     *             including the management and mapping of the service endpoints,
     *             <i>it is not recommended that you use this API unless</i>:</p>
     *         <ul>
     *             <li>
     *                <p>Your application uses a programming language that does not yet have SDK support</p>
     *             </li>
     *             <li>
     *                <p>You require better control over the client-side implementation</p>
     *             </li>
     *          </ul>
     *         <p>For detailed information on how to use DescribeEndpoints,
     *             see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using-API.endpoint-discovery.html">The Endpoint Discovery Pattern and REST APIs</a>.</p>
     */
    describeEndpoints(args: DescribeEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointsCommandOutput>;
    describeEndpoints(args: DescribeEndpointsCommandInput, cb: (err: any, data?: DescribeEndpointsCommandOutput) => void): void;
    describeEndpoints(args: DescribeEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointsCommandOutput) => void): void;
    /**
     * <p>
     *             Query is a synchronous operation that enables you to execute a query. Query will timeout after 60 seconds. You must update the default timeout in the SDK to support a timeout of 60 seconds. The result set will be truncated to 1MB. Service quotas apply. For more information, see Quotas in the Timestream Developer Guide.
     *         </p>
     */
    query(args: QueryCommandInput, options?: __HttpHandlerOptions): Promise<QueryCommandOutput>;
    query(args: QueryCommandInput, cb: (err: any, data?: QueryCommandOutput) => void): void;
    query(args: QueryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: QueryCommandOutput) => void): void;
}
