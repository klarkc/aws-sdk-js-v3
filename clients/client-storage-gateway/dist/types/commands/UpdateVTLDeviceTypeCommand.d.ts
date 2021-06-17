import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateVTLDeviceTypeInput, UpdateVTLDeviceTypeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateVTLDeviceTypeCommandInput extends UpdateVTLDeviceTypeInput {
}
export interface UpdateVTLDeviceTypeCommandOutput extends UpdateVTLDeviceTypeOutput, __MetadataBearer {
}
/**
 * <p>Updates the type of medium changer in a tape gateway. When you activate a tape gateway,
 *          you select a medium changer type for the tape gateway. This operation enables you to select
 *          a different type of medium changer after a tape gateway is activated. This operation is
 *          only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateVTLDeviceTypeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateVTLDeviceTypeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateVTLDeviceTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVTLDeviceTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateVTLDeviceTypeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateVTLDeviceTypeCommand extends $Command<UpdateVTLDeviceTypeCommandInput, UpdateVTLDeviceTypeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateVTLDeviceTypeCommandInput;
    constructor(input: UpdateVTLDeviceTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVTLDeviceTypeCommandInput, UpdateVTLDeviceTypeCommandOutput>;
    private serialize;
    private deserialize;
}
