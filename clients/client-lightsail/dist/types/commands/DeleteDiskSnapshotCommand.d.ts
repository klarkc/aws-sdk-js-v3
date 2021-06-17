import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteDiskSnapshotRequest, DeleteDiskSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDiskSnapshotCommandInput extends DeleteDiskSnapshotRequest {
}
export interface DeleteDiskSnapshotCommandOutput extends DeleteDiskSnapshotResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified disk snapshot.</p>
 *          <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the
 *       blocks on the device that have changed since your last snapshot are saved in the new snapshot.
 *       When you delete a snapshot, only the data not needed for any other snapshot is removed. So
 *       regardless of which prior snapshots have been deleted, all active snapshots will have access
 *       to all the information needed to restore the disk.</p>
 *          <p>The <code>delete disk snapshot</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>disk snapshot name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteDiskSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteDiskSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteDiskSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDiskSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteDiskSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDiskSnapshotCommand extends $Command<DeleteDiskSnapshotCommandInput, DeleteDiskSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteDiskSnapshotCommandInput;
    constructor(input: DeleteDiskSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDiskSnapshotCommandInput, DeleteDiskSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
