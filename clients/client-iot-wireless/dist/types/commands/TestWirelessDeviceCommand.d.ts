import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { TestWirelessDeviceRequest, TestWirelessDeviceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TestWirelessDeviceCommandInput extends TestWirelessDeviceRequest {
}
export interface TestWirelessDeviceCommandOutput extends TestWirelessDeviceResponse, __MetadataBearer {
}
/**
 * <p>Simulates a provisioned device by sending an uplink data payload of <code>Hello</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, TestWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, TestWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new TestWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link TestWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TestWirelessDeviceCommand extends $Command<TestWirelessDeviceCommandInput, TestWirelessDeviceCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: TestWirelessDeviceCommandInput;
    constructor(input: TestWirelessDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestWirelessDeviceCommandInput, TestWirelessDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
