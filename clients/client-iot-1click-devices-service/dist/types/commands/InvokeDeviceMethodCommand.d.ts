import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { InvokeDeviceMethodRequest, InvokeDeviceMethodResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InvokeDeviceMethodCommandInput extends InvokeDeviceMethodRequest {
}
export interface InvokeDeviceMethodCommandOutput extends InvokeDeviceMethodResponse, __MetadataBearer {
}
/**
 * <p>Given a device ID, issues a request to invoke a named device method (with possible
 *  parameters). See the "Example POST" code snippet below.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, InvokeDeviceMethodCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, InvokeDeviceMethodCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new InvokeDeviceMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeDeviceMethodCommandInput} for command's `input` shape.
 * @see {@link InvokeDeviceMethodCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InvokeDeviceMethodCommand extends $Command<InvokeDeviceMethodCommandInput, InvokeDeviceMethodCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: InvokeDeviceMethodCommandInput;
    constructor(input: InvokeDeviceMethodCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InvokeDeviceMethodCommandInput, InvokeDeviceMethodCommandOutput>;
    private serialize;
    private deserialize;
}
