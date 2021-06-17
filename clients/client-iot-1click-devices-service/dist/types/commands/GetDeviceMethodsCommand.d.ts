import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { GetDeviceMethodsRequest, GetDeviceMethodsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDeviceMethodsCommandInput extends GetDeviceMethodsRequest {
}
export interface GetDeviceMethodsCommandOutput extends GetDeviceMethodsResponse, __MetadataBearer {
}
/**
 * <p>Given a device ID, returns the invokable methods associated with the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, GetDeviceMethodsCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, GetDeviceMethodsCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new GetDeviceMethodsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceMethodsCommandInput} for command's `input` shape.
 * @see {@link GetDeviceMethodsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDeviceMethodsCommand extends $Command<GetDeviceMethodsCommandInput, GetDeviceMethodsCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: GetDeviceMethodsCommandInput;
    constructor(input: GetDeviceMethodsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeviceMethodsCommandInput, GetDeviceMethodsCommandOutput>;
    private serialize;
    private deserialize;
}
