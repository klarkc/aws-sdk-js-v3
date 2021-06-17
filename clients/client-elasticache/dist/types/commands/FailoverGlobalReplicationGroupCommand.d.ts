import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { FailoverGlobalReplicationGroupMessage, FailoverGlobalReplicationGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface FailoverGlobalReplicationGroupCommandInput extends FailoverGlobalReplicationGroupMessage {
}
export interface FailoverGlobalReplicationGroupCommandOutput extends FailoverGlobalReplicationGroupResult, __MetadataBearer {
}
/**
 * <p>Used to failover the primary region to a selected secondary region. The selected secondary region will become primary, and all other clusters will become secondary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, FailoverGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, FailoverGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new FailoverGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FailoverGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link FailoverGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class FailoverGlobalReplicationGroupCommand extends $Command<FailoverGlobalReplicationGroupCommandInput, FailoverGlobalReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: FailoverGlobalReplicationGroupCommandInput;
    constructor(input: FailoverGlobalReplicationGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<FailoverGlobalReplicationGroupCommandInput, FailoverGlobalReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
