import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteDevicePoolRequest, DeleteDevicePoolResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDevicePoolCommandInput extends DeleteDevicePoolRequest {
}
export interface DeleteDevicePoolCommandOutput extends DeleteDevicePoolResult, __MetadataBearer {
}
/**
 * <p>Deletes a device pool given the pool ARN. Does not allow deletion of curated pools
 *             owned by the system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteDevicePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDevicePoolCommandInput} for command's `input` shape.
 * @see {@link DeleteDevicePoolCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDevicePoolCommand extends $Command<DeleteDevicePoolCommandInput, DeleteDevicePoolCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: DeleteDevicePoolCommandInput;
    constructor(input: DeleteDevicePoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDevicePoolCommandInput, DeleteDevicePoolCommandOutput>;
    private serialize;
    private deserialize;
}
