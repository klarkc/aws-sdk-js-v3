import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetDeviceProfileRequest, GetDeviceProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDeviceProfileCommandInput extends GetDeviceProfileRequest {
}
export interface GetDeviceProfileCommandOutput extends GetDeviceProfileResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a device profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetDeviceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetDeviceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetDeviceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceProfileCommandInput} for command's `input` shape.
 * @see {@link GetDeviceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDeviceProfileCommand extends $Command<GetDeviceProfileCommandInput, GetDeviceProfileCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: GetDeviceProfileCommandInput;
    constructor(input: GetDeviceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeviceProfileCommandInput, GetDeviceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
