import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DisassociateWirelessDeviceFromThingRequest, DisassociateWirelessDeviceFromThingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateWirelessDeviceFromThingCommandInput extends DisassociateWirelessDeviceFromThingRequest {
}
export interface DisassociateWirelessDeviceFromThingCommandOutput extends DisassociateWirelessDeviceFromThingResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a wireless device from its currently associated thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessDeviceFromThingCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessDeviceFromThingCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DisassociateWirelessDeviceFromThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWirelessDeviceFromThingCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessDeviceFromThingCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateWirelessDeviceFromThingCommand extends $Command<DisassociateWirelessDeviceFromThingCommandInput, DisassociateWirelessDeviceFromThingCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: DisassociateWirelessDeviceFromThingCommandInput;
    constructor(input: DisassociateWirelessDeviceFromThingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateWirelessDeviceFromThingCommandInput, DisassociateWirelessDeviceFromThingCommandOutput>;
    private serialize;
    private deserialize;
}
