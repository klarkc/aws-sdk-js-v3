import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteVolumeInput, DeleteVolumeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVolumeCommandInput extends DeleteVolumeInput {
}
export interface DeleteVolumeCommandOutput extends DeleteVolumeOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified storage volume that you previously created using the <a>CreateCachediSCSIVolume</a> or <a>CreateStorediSCSIVolume</a> API.
 *          This operation is only supported in the cached volume and stored volume types. For stored
 *          volume gateways, the local disk that was configured as the storage volume is not deleted.
 *          You can reuse the local disk to create another storage volume.</p>
 *
 *          <p>Before you delete a volume, make sure there are no iSCSI connections to the volume you
 *          are deleting. You should also make sure there is no snapshot in progress. You can use the
 *          Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are
 *          deleting and check the snapshot status. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
 *             Reference</i>.</p>
 *
 *          <p>In the request, you must provide the Amazon Resource Name (ARN) of the storage volume
 *          you want to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVolumeCommandInput} for command's `input` shape.
 * @see {@link DeleteVolumeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVolumeCommand extends $Command<DeleteVolumeCommandInput, DeleteVolumeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteVolumeCommandInput;
    constructor(input: DeleteVolumeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVolumeCommandInput, DeleteVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
