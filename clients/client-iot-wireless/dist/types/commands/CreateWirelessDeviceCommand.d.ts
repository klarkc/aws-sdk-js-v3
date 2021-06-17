import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { CreateWirelessDeviceRequest, CreateWirelessDeviceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWirelessDeviceCommandInput extends CreateWirelessDeviceRequest {
}
export interface CreateWirelessDeviceCommandOutput extends CreateWirelessDeviceResponse, __MetadataBearer {
}
/**
 * <p>Provisions a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new CreateWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link CreateWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWirelessDeviceCommand extends $Command<CreateWirelessDeviceCommandInput, CreateWirelessDeviceCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: CreateWirelessDeviceCommandInput;
    constructor(input: CreateWirelessDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWirelessDeviceCommandInput, CreateWirelessDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
