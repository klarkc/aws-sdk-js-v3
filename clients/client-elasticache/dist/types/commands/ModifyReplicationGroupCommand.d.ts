import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyReplicationGroupMessage, ModifyReplicationGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyReplicationGroupCommandInput extends ModifyReplicationGroupMessage {
}
export interface ModifyReplicationGroupCommandOutput extends ModifyReplicationGroupResult, __MetadataBearer {
}
/**
 * <p>Modifies the settings for a replication group.</p>
 *
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a>
 *                     in the ElastiCache User Guide</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a>
 *                     in the ElastiCache API Reference</p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyReplicationGroupCommand extends $Command<ModifyReplicationGroupCommandInput, ModifyReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ModifyReplicationGroupCommandInput;
    constructor(input: ModifyReplicationGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyReplicationGroupCommandInput, ModifyReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
