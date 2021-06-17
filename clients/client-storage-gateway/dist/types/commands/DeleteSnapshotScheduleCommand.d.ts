import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteSnapshotScheduleInput, DeleteSnapshotScheduleOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSnapshotScheduleCommandInput extends DeleteSnapshotScheduleInput {
}
export interface DeleteSnapshotScheduleCommandOutput extends DeleteSnapshotScheduleOutput, __MetadataBearer {
}
/**
 * <p>Deletes a snapshot of a volume.</p>
 *
 *          <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API
 *          action enables you to delete a snapshot schedule for a volume. For more information, see
 *             <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/backing-up-volumes.html">Backing up your
 *             volumes</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the
 *          volume by providing its Amazon Resource Name (ARN). This operation is only supported in
 *          stored and cached volume gateway types.</p>
 *
 *          <note>
 *
 *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 *             go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
 *             in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteSnapshotScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteSnapshotScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSnapshotScheduleCommand extends $Command<DeleteSnapshotScheduleCommandInput, DeleteSnapshotScheduleCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteSnapshotScheduleCommandInput;
    constructor(input: DeleteSnapshotScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSnapshotScheduleCommandInput, DeleteSnapshotScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
