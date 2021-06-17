import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DecreaseNodeGroupsInGlobalReplicationGroupMessage, DecreaseNodeGroupsInGlobalReplicationGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DecreaseNodeGroupsInGlobalReplicationGroupCommandInput extends DecreaseNodeGroupsInGlobalReplicationGroupMessage {
}
export interface DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput extends DecreaseNodeGroupsInGlobalReplicationGroupResult, __MetadataBearer {
}
/**
 * <p>Decreases the number of node groups in a Global datastore</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DecreaseNodeGroupsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DecreaseNodeGroupsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DecreaseNodeGroupsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DecreaseNodeGroupsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DecreaseNodeGroupsInGlobalReplicationGroupCommand extends $Command<DecreaseNodeGroupsInGlobalReplicationGroupCommandInput, DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput;
    constructor(input: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DecreaseNodeGroupsInGlobalReplicationGroupCommandInput, DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
