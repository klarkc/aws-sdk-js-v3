import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { CreateDeviceProfileRequest, CreateDeviceProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDeviceProfileCommandInput extends CreateDeviceProfileRequest {
}
export interface CreateDeviceProfileCommandOutput extends CreateDeviceProfileResponse, __MetadataBearer {
}
/**
 * <p>Creates a new device profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateDeviceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateDeviceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new CreateDeviceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeviceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDeviceProfileCommand extends $Command<CreateDeviceProfileCommandInput, CreateDeviceProfileCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: CreateDeviceProfileCommandInput;
    constructor(input: CreateDeviceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeviceProfileCommandInput, CreateDeviceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
