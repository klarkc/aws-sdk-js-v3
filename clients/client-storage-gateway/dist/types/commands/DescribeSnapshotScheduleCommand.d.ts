import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeSnapshotScheduleInput, DescribeSnapshotScheduleOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSnapshotScheduleCommandInput extends DescribeSnapshotScheduleInput {
}
export interface DescribeSnapshotScheduleCommandOutput extends DescribeSnapshotScheduleOutput, __MetadataBearer {
}
/**
 * <p>Describes the snapshot schedule for the specified gateway volume. The snapshot schedule
 *          information includes intervals at which snapshots are automatically initiated on the
 *          volume. This operation is only supported in the cached volume and stored volume
 *          types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeSnapshotScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeSnapshotScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSnapshotScheduleCommand extends $Command<DescribeSnapshotScheduleCommandInput, DescribeSnapshotScheduleCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeSnapshotScheduleCommandInput;
    constructor(input: DescribeSnapshotScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSnapshotScheduleCommandInput, DescribeSnapshotScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
