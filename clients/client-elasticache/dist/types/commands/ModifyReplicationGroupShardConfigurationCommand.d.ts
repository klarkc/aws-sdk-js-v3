import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyReplicationGroupShardConfigurationMessage, ModifyReplicationGroupShardConfigurationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyReplicationGroupShardConfigurationCommandInput extends ModifyReplicationGroupShardConfigurationMessage {
}
export interface ModifyReplicationGroupShardConfigurationCommandOutput extends ModifyReplicationGroupShardConfigurationResult, __MetadataBearer {
}
/**
 * <p>Modifies a replication group's shards (node groups) by allowing you to
 *             add shards, remove shards, or rebalance the keyspaces among existing shards.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyReplicationGroupShardConfigurationCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyReplicationGroupShardConfigurationCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyReplicationGroupShardConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReplicationGroupShardConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationGroupShardConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyReplicationGroupShardConfigurationCommand extends $Command<ModifyReplicationGroupShardConfigurationCommandInput, ModifyReplicationGroupShardConfigurationCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ModifyReplicationGroupShardConfigurationCommandInput;
    constructor(input: ModifyReplicationGroupShardConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyReplicationGroupShardConfigurationCommandInput, ModifyReplicationGroupShardConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
