import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateStorediSCSIVolumeInput, CreateStorediSCSIVolumeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateStorediSCSIVolumeCommandInput extends CreateStorediSCSIVolumeInput {
}
export interface CreateStorediSCSIVolumeCommandOutput extends CreateStorediSCSIVolumeOutput, __MetadataBearer {
}
/**
 * <p>Creates a volume on a specified gateway. This operation is only supported in the stored
 *          volume gateway type.</p>
 *
 *          <p>The size of the volume to create is inferred from the disk size. You can choose to
 *          preserve existing data on the disk, create volume from an existing snapshot, or create an
 *          empty volume. If you choose to create an empty gateway volume, then any existing data on
 *          the disk is erased.</p>
 *
 *          <p>In the request, you must specify the gateway and the disk information on which you are
 *          creating the volume. In response, the gateway creates the volume and returns volume
 *          information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target
 *          ARN that initiators can use to connect to the volume target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateStorediSCSIVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateStorediSCSIVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateStorediSCSIVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStorediSCSIVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateStorediSCSIVolumeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateStorediSCSIVolumeCommand extends $Command<CreateStorediSCSIVolumeCommandInput, CreateStorediSCSIVolumeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CreateStorediSCSIVolumeCommandInput;
    constructor(input: CreateStorediSCSIVolumeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStorediSCSIVolumeCommandInput, CreateStorediSCSIVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
