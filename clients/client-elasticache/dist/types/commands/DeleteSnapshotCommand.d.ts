import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteSnapshotMessage, DeleteSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSnapshotCommandInput extends DeleteSnapshotMessage {
}
export interface DeleteSnapshotCommandOutput extends DeleteSnapshotResult, __MetadataBearer {
}
/**
 * <p>Deletes an existing snapshot. When you receive a
 *             successful response from this operation, ElastiCache immediately begins deleting the snapshot;
 *             you cannot cancel or revert this operation.</p>
 *
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSnapshotCommand extends $Command<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DeleteSnapshotCommandInput;
    constructor(input: DeleteSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
