import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyCacheClusterMessage, ModifyCacheClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyCacheClusterCommandInput extends ModifyCacheClusterMessage {
}
export interface ModifyCacheClusterCommandOutput extends ModifyCacheClusterResult, __MetadataBearer {
}
/**
 * <p>Modifies the settings for a cluster. You
 *             can use this operation to change one or more cluster configuration parameters by
 *             specifying the parameters and the new values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyCacheClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCacheClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyCacheClusterCommand extends $Command<ModifyCacheClusterCommandInput, ModifyCacheClusterCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ModifyCacheClusterCommandInput;
    constructor(input: ModifyCacheClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyCacheClusterCommandInput, ModifyCacheClusterCommandOutput>;
    private serialize;
    private deserialize;
}
