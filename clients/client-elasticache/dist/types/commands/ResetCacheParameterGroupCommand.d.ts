import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheParameterGroupNameMessage, ResetCacheParameterGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetCacheParameterGroupCommandInput extends ResetCacheParameterGroupMessage {
}
export interface ResetCacheParameterGroupCommandOutput extends CacheParameterGroupNameMessage, __MetadataBearer {
}
/**
 * <p>Modifies the parameters of a cache
 *             parameter group to the engine or system default value. You can reset specific parameters
 *             by submitting a list of parameter names. To reset the entire cache parameter group,
 *             specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ResetCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ResetCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ResetCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetCacheParameterGroupCommand extends $Command<ResetCacheParameterGroupCommandInput, ResetCacheParameterGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ResetCacheParameterGroupCommandInput;
    constructor(input: ResetCacheParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetCacheParameterGroupCommandInput, ResetCacheParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
