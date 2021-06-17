import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteGlobalReplicationGroupMessage, DeleteGlobalReplicationGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteGlobalReplicationGroupCommandInput extends DeleteGlobalReplicationGroupMessage {
}
export interface DeleteGlobalReplicationGroupCommandOutput extends DeleteGlobalReplicationGroupResult, __MetadataBearer {
}
/**
 * <p>Deleting a Global datastore is a two-step process: </p>
 *             <ul>
 *             <li>
 *                <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p>
 *             </li>
 *             <li>
 *                <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p>
 *             </li>
 *          </ul>
 *
 *
 *           <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore
 *              while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a
 *           Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p>
 *
 *         <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources;
 *             you cannot cancel or revert this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteGlobalReplicationGroupCommand extends $Command<DeleteGlobalReplicationGroupCommandInput, DeleteGlobalReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DeleteGlobalReplicationGroupCommandInput;
    constructor(input: DeleteGlobalReplicationGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGlobalReplicationGroupCommandInput, DeleteGlobalReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
