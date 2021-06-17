import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DeleteDeviceProfileRequest, DeleteDeviceProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDeviceProfileCommandInput extends DeleteDeviceProfileRequest {
}
export interface DeleteDeviceProfileCommandOutput extends DeleteDeviceProfileResponse, __MetadataBearer {
}
/**
 * <p>Deletes a device profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteDeviceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteDeviceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DeleteDeviceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDeviceProfileCommand extends $Command<DeleteDeviceProfileCommandInput, DeleteDeviceProfileCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: DeleteDeviceProfileCommandInput;
    constructor(input: DeleteDeviceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeviceProfileCommandInput, DeleteDeviceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
