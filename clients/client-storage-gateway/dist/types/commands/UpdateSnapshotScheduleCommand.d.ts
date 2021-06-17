import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateSnapshotScheduleInput, UpdateSnapshotScheduleOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSnapshotScheduleCommandInput extends UpdateSnapshotScheduleInput {
}
export interface UpdateSnapshotScheduleCommandOutput extends UpdateSnapshotScheduleOutput, __MetadataBearer {
}
/**
 * <p>Updates a snapshot schedule configured for a gateway volume. This operation is only
 *          supported in the cached volume and stored volume gateway types.</p>
 *
 *          <p>The default snapshot schedule for volume is once every 24 hours, starting at the
 *          creation time of the volume. You can use this API to change the snapshot schedule
 *          configured for the volume.</p>
 *
 *          <p>In the request you must identify the gateway volume whose snapshot schedule you want to
 *          update, and the schedule information, including when you want the snapshot to begin on a
 *          day and the frequency (in hours) of snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSnapshotScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSnapshotScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSnapshotScheduleCommand extends $Command<UpdateSnapshotScheduleCommandInput, UpdateSnapshotScheduleCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateSnapshotScheduleCommandInput;
    constructor(input: UpdateSnapshotScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSnapshotScheduleCommandInput, UpdateSnapshotScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
