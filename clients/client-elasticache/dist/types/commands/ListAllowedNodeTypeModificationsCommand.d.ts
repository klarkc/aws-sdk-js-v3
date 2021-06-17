import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { AllowedNodeTypeModificationsMessage, ListAllowedNodeTypeModificationsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAllowedNodeTypeModificationsCommandInput extends ListAllowedNodeTypeModificationsMessage {
}
export interface ListAllowedNodeTypeModificationsCommandOutput extends AllowedNodeTypeModificationsMessage, __MetadataBearer {
}
/**
 * <p>Lists all available node types that you
 *             can scale your Redis cluster's or replication group's current node type.</p>
 *
 *         <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to
 *             scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter
 *             must be one of the node types returned by this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ListAllowedNodeTypeModificationsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ListAllowedNodeTypeModificationsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ListAllowedNodeTypeModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAllowedNodeTypeModificationsCommandInput} for command's `input` shape.
 * @see {@link ListAllowedNodeTypeModificationsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAllowedNodeTypeModificationsCommand extends $Command<ListAllowedNodeTypeModificationsCommandInput, ListAllowedNodeTypeModificationsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ListAllowedNodeTypeModificationsCommandInput;
    constructor(input: ListAllowedNodeTypeModificationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAllowedNodeTypeModificationsCommandInput, ListAllowedNodeTypeModificationsCommandOutput>;
    private serialize;
    private deserialize;
}
