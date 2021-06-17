import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateDiskSnapshotRequest, CreateDiskSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDiskSnapshotCommandInput extends CreateDiskSnapshotRequest {
}
export interface CreateDiskSnapshotCommandOutput extends CreateDiskSnapshotResult, __MetadataBearer {
}
/**
 * <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make
 *       copies of disks, and to save data before shutting down a Lightsail instance.</p>
 *          <p>You can take a snapshot of an attached disk that is in use; however, snapshots only
 *       capture data that has been written to your disk at the time the snapshot command is issued.
 *       This may exclude any data that has been cached by any applications or the operating system. If
 *       you can pause any file systems on the disk long enough to take a snapshot, your snapshot
 *       should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should
 *       unmount the disk from within the Lightsail instance, issue the create disk snapshot command,
 *       and then remount the disk to ensure a consistent and complete snapshot. You may remount and
 *       use your disk while the snapshot status is pending.</p>
 *          <p>You can also use this operation to create a snapshot of an instance's system volume. You
 *       might want to do this, for example, to recover data from the system volume of a botched
 *       instance or to create a backup of the system volume like you would for a block storage disk.
 *       To create a snapshot of a system volume, just define the <code>instance name</code> parameter
 *       when issuing the snapshot command, and a snapshot of the defined instance's system volume will
 *       be created. After the snapshot is available, you can create a block storage disk from the
 *       snapshot and attach it to a running instance to access the data on the disk.</p>
 *
 *          <p>The <code>create disk snapshot</code> operation supports tag-based access control via
 *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateDiskSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateDiskSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateDiskSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDiskSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDiskSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDiskSnapshotCommand extends $Command<CreateDiskSnapshotCommandInput, CreateDiskSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateDiskSnapshotCommandInput;
    constructor(input: CreateDiskSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDiskSnapshotCommandInput, CreateDiskSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
