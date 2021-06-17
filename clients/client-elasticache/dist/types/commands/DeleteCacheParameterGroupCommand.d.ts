import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteCacheParameterGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCacheParameterGroupCommandInput extends DeleteCacheParameterGroupMessage {
}
export interface DeleteCacheParameterGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified cache parameter
 *             group. You cannot delete a cache parameter group if it is associated with any cache
 *             clusters. You cannot delete the default cache parameter groups in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCacheParameterGroupCommand extends $Command<DeleteCacheParameterGroupCommandInput, DeleteCacheParameterGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DeleteCacheParameterGroupCommandInput;
    constructor(input: DeleteCacheParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCacheParameterGroupCommandInput, DeleteCacheParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
