import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { ListDeviceEventsRequest, ListDeviceEventsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDeviceEventsCommandInput extends ListDeviceEventsRequest {
}
export interface ListDeviceEventsCommandOutput extends ListDeviceEventsResponse, __MetadataBearer {
}
/**
 * <p>Using a device ID, returns a DeviceEventsResponse object containing an
 *  array of events for the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, ListDeviceEventsCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, ListDeviceEventsCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new ListDeviceEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceEventsCommandInput} for command's `input` shape.
 * @see {@link ListDeviceEventsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeviceEventsCommand extends $Command<ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: ListDeviceEventsCommandInput;
    constructor(input: ListDeviceEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput>;
    private serialize;
    private deserialize;
}
