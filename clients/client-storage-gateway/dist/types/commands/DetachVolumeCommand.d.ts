import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DetachVolumeInput, DetachVolumeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachVolumeCommandInput extends DetachVolumeInput {
}
export interface DetachVolumeCommandOutput extends DetachVolumeOutput, __MetadataBearer {
}
/**
 * <p>Disconnects a volume from an iSCSI connection and then detaches the volume from the
 *          specified gateway. Detaching and attaching a volume enables you to recover your data from
 *          one gateway to a different gateway without creating a snapshot. It also makes it easier to
 *          move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2
 *          instance. This operation is only supported in the volume gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DetachVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DetachVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DetachVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachVolumeCommandInput} for command's `input` shape.
 * @see {@link DetachVolumeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachVolumeCommand extends $Command<DetachVolumeCommandInput, DetachVolumeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DetachVolumeCommandInput;
    constructor(input: DetachVolumeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachVolumeCommandInput, DetachVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
