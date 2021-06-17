import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { RebalanceSlotsInGlobalReplicationGroupMessage, RebalanceSlotsInGlobalReplicationGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebalanceSlotsInGlobalReplicationGroupCommandInput extends RebalanceSlotsInGlobalReplicationGroupMessage {
}
export interface RebalanceSlotsInGlobalReplicationGroupCommandOutput extends RebalanceSlotsInGlobalReplicationGroupResult, __MetadataBearer {
}
/**
 * <p>Redistribute slots to ensure uniform distribution across existing shards in the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, RebalanceSlotsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, RebalanceSlotsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new RebalanceSlotsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebalanceSlotsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link RebalanceSlotsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebalanceSlotsInGlobalReplicationGroupCommand extends $Command<RebalanceSlotsInGlobalReplicationGroupCommandInput, RebalanceSlotsInGlobalReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: RebalanceSlotsInGlobalReplicationGroupCommandInput;
    constructor(input: RebalanceSlotsInGlobalReplicationGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebalanceSlotsInGlobalReplicationGroupCommandInput, RebalanceSlotsInGlobalReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
