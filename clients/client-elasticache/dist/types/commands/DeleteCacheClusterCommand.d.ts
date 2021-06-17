import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteCacheClusterMessage, DeleteCacheClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCacheClusterCommandInput extends DeleteCacheClusterMessage {
}
export interface DeleteCacheClusterCommandOutput extends DeleteCacheClusterResult, __MetadataBearer {
}
/**
 * <p>Deletes a previously provisioned cluster.
 *                 <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the
 *             cluster itself. When you receive a successful response from this operation,
 *             Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert
 *             this operation.</p>
 *         <p>This operation is not valid for:</p>
 *         <ul>
 *             <li>
 *                 <p>Redis (cluster mode enabled) clusters</p>
 *             </li>
 *             <li>
 *                 <p>Redis (cluster mode disabled) clusters</p>
 *             </li>
 *             <li>
 *
 *                 <p>A cluster that is the last read replica of a replication group</p>
 *             </li>
 *             <li>
 *                 <p>A cluster that is the primary node of a replication group</p>
 *             </li>
 *             <li>
 *                 <p>A node group (shard) that has Multi-AZ mode enabled</p>
 *             </li>
 *             <li>
 *                 <p>A cluster from a Redis (cluster mode enabled) replication group</p>
 *             </li>
 *             <li>
 *                 <p>A cluster that is not in the <code>available</code> state</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteCacheClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCacheClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCacheClusterCommand extends $Command<DeleteCacheClusterCommandInput, DeleteCacheClusterCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DeleteCacheClusterCommandInput;
    constructor(input: DeleteCacheClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCacheClusterCommandInput, DeleteCacheClusterCommandOutput>;
    private serialize;
    private deserialize;
}
