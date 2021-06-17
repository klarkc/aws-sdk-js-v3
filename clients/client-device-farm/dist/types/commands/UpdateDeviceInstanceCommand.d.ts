import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateDeviceInstanceRequest, UpdateDeviceInstanceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDeviceInstanceCommandInput extends UpdateDeviceInstanceRequest {
}
export interface UpdateDeviceInstanceCommandOutput extends UpdateDeviceInstanceResult, __MetadataBearer {
}
/**
 * <p>Updates information about a private device instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateDeviceInstanceCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateDeviceInstanceCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateDeviceInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceInstanceCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDeviceInstanceCommand extends $Command<UpdateDeviceInstanceCommandInput, UpdateDeviceInstanceCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateDeviceInstanceCommandInput;
    constructor(input: UpdateDeviceInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeviceInstanceCommandInput, UpdateDeviceInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
