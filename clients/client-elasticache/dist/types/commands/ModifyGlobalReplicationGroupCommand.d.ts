import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyGlobalReplicationGroupMessage, ModifyGlobalReplicationGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyGlobalReplicationGroupCommandInput extends ModifyGlobalReplicationGroupMessage {
}
export interface ModifyGlobalReplicationGroupCommandOutput extends ModifyGlobalReplicationGroupResult, __MetadataBearer {
}
/**
 * <p>Modifies the settings for a Global datastore.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyGlobalReplicationGroupCommand extends $Command<ModifyGlobalReplicationGroupCommandInput, ModifyGlobalReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ModifyGlobalReplicationGroupCommandInput;
    constructor(input: ModifyGlobalReplicationGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyGlobalReplicationGroupCommandInput, ModifyGlobalReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
