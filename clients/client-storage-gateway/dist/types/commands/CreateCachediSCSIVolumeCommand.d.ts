import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateCachediSCSIVolumeInput, CreateCachediSCSIVolumeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCachediSCSIVolumeCommandInput extends CreateCachediSCSIVolumeInput {
}
export interface CreateCachediSCSIVolumeCommandOutput extends CreateCachediSCSIVolumeOutput, __MetadataBearer {
}
/**
 * <p>Creates a cached volume on a specified cached volume gateway. This operation is only
 *          supported in the cached volume gateway type.</p>
 *
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create a cached volume.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 *
 *          <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI
 *          target name, an IP address on which to expose the target, and a unique client token. In
 *          response, the gateway creates the volume and returns information about it. This information
 *          includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that
 *          initiators can use to connect to the volume target.</p>
 *
 *          <p>Optionally, you can provide the ARN for an existing volume as the
 *             <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the
 *          existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be
 *          equal to or larger than the size of the copied volume, in bytes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateCachediSCSIVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateCachediSCSIVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateCachediSCSIVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCachediSCSIVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateCachediSCSIVolumeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCachediSCSIVolumeCommand extends $Command<CreateCachediSCSIVolumeCommandInput, CreateCachediSCSIVolumeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CreateCachediSCSIVolumeCommandInput;
    constructor(input: CreateCachediSCSIVolumeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCachediSCSIVolumeCommandInput, CreateCachediSCSIVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
