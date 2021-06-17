import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheParameterGroupNameMessage, ModifyCacheParameterGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyCacheParameterGroupCommandInput extends ModifyCacheParameterGroupMessage {
}
export interface ModifyCacheParameterGroupCommandOutput extends CacheParameterGroupNameMessage, __MetadataBearer {
}
/**
 * <p>Modifies the parameters of a cache
 *             parameter group. You can modify up to 20 parameters in a single request by submitting a
 *             list parameter name and value pairs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyCacheParameterGroupCommand extends $Command<ModifyCacheParameterGroupCommandInput, ModifyCacheParameterGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ModifyCacheParameterGroupCommandInput;
    constructor(input: ModifyCacheParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyCacheParameterGroupCommandInput, ModifyCacheParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
