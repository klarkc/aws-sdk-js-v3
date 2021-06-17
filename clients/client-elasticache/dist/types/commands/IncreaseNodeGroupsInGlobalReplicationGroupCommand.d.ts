import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { IncreaseNodeGroupsInGlobalReplicationGroupMessage, IncreaseNodeGroupsInGlobalReplicationGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface IncreaseNodeGroupsInGlobalReplicationGroupCommandInput extends IncreaseNodeGroupsInGlobalReplicationGroupMessage {
}
export interface IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput extends IncreaseNodeGroupsInGlobalReplicationGroupResult, __MetadataBearer {
}
/**
 * <p>Increase the number of node groups in the Global datastore</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, IncreaseNodeGroupsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, IncreaseNodeGroupsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new IncreaseNodeGroupsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class IncreaseNodeGroupsInGlobalReplicationGroupCommand extends $Command<IncreaseNodeGroupsInGlobalReplicationGroupCommandInput, IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput;
    constructor(input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IncreaseNodeGroupsInGlobalReplicationGroupCommandInput, IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
