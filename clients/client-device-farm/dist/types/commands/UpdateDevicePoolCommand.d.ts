import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateDevicePoolRequest, UpdateDevicePoolResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDevicePoolCommandInput extends UpdateDevicePoolRequest {
}
export interface UpdateDevicePoolCommandOutput extends UpdateDevicePoolResult, __MetadataBearer {
}
/**
 * <p>Modifies the name, description, and rules in a device pool given the attributes and
 *             the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a
 *             whole (or not at all).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateDevicePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDevicePoolCommandInput} for command's `input` shape.
 * @see {@link UpdateDevicePoolCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDevicePoolCommand extends $Command<UpdateDevicePoolCommandInput, UpdateDevicePoolCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateDevicePoolCommandInput;
    constructor(input: UpdateDevicePoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDevicePoolCommandInput, UpdateDevicePoolCommandOutput>;
    private serialize;
    private deserialize;
}
