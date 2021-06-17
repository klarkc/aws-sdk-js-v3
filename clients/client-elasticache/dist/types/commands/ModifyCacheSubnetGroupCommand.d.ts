import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyCacheSubnetGroupMessage, ModifyCacheSubnetGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyCacheSubnetGroupCommandInput extends ModifyCacheSubnetGroupMessage {
}
export interface ModifyCacheSubnetGroupCommandOutput extends ModifyCacheSubnetGroupResult, __MetadataBearer {
}
/**
 * <p>Modifies an existing cache subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyCacheSubnetGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyCacheSubnetGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyCacheSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCacheSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyCacheSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyCacheSubnetGroupCommand extends $Command<ModifyCacheSubnetGroupCommandInput, ModifyCacheSubnetGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ModifyCacheSubnetGroupCommandInput;
    constructor(input: ModifyCacheSubnetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyCacheSubnetGroupCommandInput, ModifyCacheSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
