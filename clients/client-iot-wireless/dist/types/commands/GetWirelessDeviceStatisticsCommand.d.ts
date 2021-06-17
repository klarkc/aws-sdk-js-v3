import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessDeviceStatisticsRequest, GetWirelessDeviceStatisticsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWirelessDeviceStatisticsCommandInput extends GetWirelessDeviceStatisticsRequest {
}
export interface GetWirelessDeviceStatisticsCommandOutput extends GetWirelessDeviceStatisticsResponse, __MetadataBearer {
}
/**
 * <p>Gets operating information about a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessDeviceStatisticsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessDeviceStatisticsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessDeviceStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessDeviceStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetWirelessDeviceStatisticsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWirelessDeviceStatisticsCommand extends $Command<GetWirelessDeviceStatisticsCommandInput, GetWirelessDeviceStatisticsCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: GetWirelessDeviceStatisticsCommandInput;
    constructor(input: GetWirelessDeviceStatisticsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWirelessDeviceStatisticsCommandInput, GetWirelessDeviceStatisticsCommandOutput>;
    private serialize;
    private deserialize;
}
