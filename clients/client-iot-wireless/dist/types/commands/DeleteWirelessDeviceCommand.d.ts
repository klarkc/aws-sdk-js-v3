import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DeleteWirelessDeviceRequest, DeleteWirelessDeviceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteWirelessDeviceCommandInput extends DeleteWirelessDeviceRequest {
}
export interface DeleteWirelessDeviceCommandOutput extends DeleteWirelessDeviceResponse, __MetadataBearer {
}
/**
 * <p>Deletes a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DeleteWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteWirelessDeviceCommand extends $Command<DeleteWirelessDeviceCommandInput, DeleteWirelessDeviceCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: DeleteWirelessDeviceCommandInput;
    constructor(input: DeleteWirelessDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWirelessDeviceCommandInput, DeleteWirelessDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
