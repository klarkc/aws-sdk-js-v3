import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { IncreaseReplicaCountMessage, IncreaseReplicaCountResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface IncreaseReplicaCountCommandInput extends IncreaseReplicaCountMessage {
}
export interface IncreaseReplicaCountCommandOutput extends IncreaseReplicaCountResult, __MetadataBearer {
}
/**
 * <p>Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of
 *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
 *             is performed with no cluster down time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, IncreaseReplicaCountCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, IncreaseReplicaCountCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new IncreaseReplicaCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IncreaseReplicaCountCommandInput} for command's `input` shape.
 * @see {@link IncreaseReplicaCountCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class IncreaseReplicaCountCommand extends $Command<IncreaseReplicaCountCommandInput, IncreaseReplicaCountCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: IncreaseReplicaCountCommandInput;
    constructor(input: IncreaseReplicaCountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IncreaseReplicaCountCommandInput, IncreaseReplicaCountCommandOutput>;
    private serialize;
    private deserialize;
}
