import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { UpdateDeviceStateRequest, UpdateDeviceStateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDeviceStateCommandInput extends UpdateDeviceStateRequest {
}
export interface UpdateDeviceStateCommandOutput extends UpdateDeviceStateResponse, __MetadataBearer {
}
/**
 * <p>Using a Boolean value (true or false), this operation
 *  enables or disables the device given a device ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, UpdateDeviceStateCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, UpdateDeviceStateCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new UpdateDeviceStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceStateCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceStateCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDeviceStateCommand extends $Command<UpdateDeviceStateCommandInput, UpdateDeviceStateCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: UpdateDeviceStateCommandInput;
    constructor(input: UpdateDeviceStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeviceStateCommandInput, UpdateDeviceStateCommandOutput>;
    private serialize;
    private deserialize;
}
