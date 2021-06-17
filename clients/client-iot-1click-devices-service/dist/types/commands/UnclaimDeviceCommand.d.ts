import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { UnclaimDeviceRequest, UnclaimDeviceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UnclaimDeviceCommandInput extends UnclaimDeviceRequest {
}
export interface UnclaimDeviceCommandOutput extends UnclaimDeviceResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a device from your AWS account using its device ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, UnclaimDeviceCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, UnclaimDeviceCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new UnclaimDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnclaimDeviceCommandInput} for command's `input` shape.
 * @see {@link UnclaimDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UnclaimDeviceCommand extends $Command<UnclaimDeviceCommandInput, UnclaimDeviceCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: UnclaimDeviceCommandInput;
    constructor(input: UnclaimDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnclaimDeviceCommandInput, UnclaimDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
