import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DisassociateGlobalReplicationGroupMessage, DisassociateGlobalReplicationGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateGlobalReplicationGroupCommandInput extends DisassociateGlobalReplicationGroupMessage {
}
export interface DisassociateGlobalReplicationGroupCommandOutput extends DisassociateGlobalReplicationGroupResult, __MetadataBearer {
}
/**
 * <p>Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that AWS region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DisassociateGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DisassociateGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DisassociateGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateGlobalReplicationGroupCommand extends $Command<DisassociateGlobalReplicationGroupCommandInput, DisassociateGlobalReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DisassociateGlobalReplicationGroupCommandInput;
    constructor(input: DisassociateGlobalReplicationGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateGlobalReplicationGroupCommandInput, DisassociateGlobalReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
