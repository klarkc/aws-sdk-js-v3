import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { SendDataToWirelessDeviceRequest, SendDataToWirelessDeviceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendDataToWirelessDeviceCommandInput extends SendDataToWirelessDeviceRequest {
}
export interface SendDataToWirelessDeviceCommandOutput extends SendDataToWirelessDeviceResponse, __MetadataBearer {
}
/**
 * <p>Sends a decrypted application data frame to a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, SendDataToWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, SendDataToWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new SendDataToWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendDataToWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link SendDataToWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendDataToWirelessDeviceCommand extends $Command<SendDataToWirelessDeviceCommandInput, SendDataToWirelessDeviceCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: SendDataToWirelessDeviceCommandInput;
    constructor(input: SendDataToWirelessDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendDataToWirelessDeviceCommandInput, SendDataToWirelessDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
