import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteReplicationGroupMessage, DeleteReplicationGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteReplicationGroupCommandInput extends DeleteReplicationGroupMessage {
}
export interface DeleteReplicationGroupCommandOutput extends DeleteReplicationGroupResult, __MetadataBearer {
}
/**
 * <p>Deletes an existing replication group.
 *             By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas.
 *             If the replication group has only one primary,
 *             you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p>
 *         <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources;
 *             you cannot cancel or revert this operation.</p>
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteReplicationGroupCommand extends $Command<DeleteReplicationGroupCommandInput, DeleteReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DeleteReplicationGroupCommandInput;
    constructor(input: DeleteReplicationGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReplicationGroupCommandInput, DeleteReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
