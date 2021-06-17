import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteCacheSubnetGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCacheSubnetGroupCommandInput extends DeleteCacheSubnetGroupMessage {
}
export interface DeleteCacheSubnetGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a cache subnet group.</p>
 *         <note>
 *             <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheSubnetGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheSubnetGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteCacheSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCacheSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCacheSubnetGroupCommand extends $Command<DeleteCacheSubnetGroupCommandInput, DeleteCacheSubnetGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DeleteCacheSubnetGroupCommandInput;
    constructor(input: DeleteCacheSubnetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCacheSubnetGroupCommandInput, DeleteCacheSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
