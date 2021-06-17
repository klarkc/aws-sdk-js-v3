import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DecreaseReplicaCountMessage, DecreaseReplicaCountResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DecreaseReplicaCountCommandInput extends DecreaseReplicaCountMessage {
}
export interface DecreaseReplicaCountCommandOutput extends DecreaseReplicaCountResult, __MetadataBearer {
}
/**
 * <p>Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of
 *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
 *             is performed with no cluster down time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DecreaseReplicaCountCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DecreaseReplicaCountCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DecreaseReplicaCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DecreaseReplicaCountCommandInput} for command's `input` shape.
 * @see {@link DecreaseReplicaCountCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DecreaseReplicaCountCommand extends $Command<DecreaseReplicaCountCommandInput, DecreaseReplicaCountCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DecreaseReplicaCountCommandInput;
    constructor(input: DecreaseReplicaCountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DecreaseReplicaCountCommandInput, DecreaseReplicaCountCommandOutput>;
    private serialize;
    private deserialize;
}
