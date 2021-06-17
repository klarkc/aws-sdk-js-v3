import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessGatewayStatisticsRequest, GetWirelessGatewayStatisticsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWirelessGatewayStatisticsCommandInput extends GetWirelessGatewayStatisticsRequest {
}
export interface GetWirelessGatewayStatisticsCommandOutput extends GetWirelessGatewayStatisticsResponse, __MetadataBearer {
}
/**
 * <p>Gets operating information about a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayStatisticsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayStatisticsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessGatewayStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessGatewayStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayStatisticsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWirelessGatewayStatisticsCommand extends $Command<GetWirelessGatewayStatisticsCommandInput, GetWirelessGatewayStatisticsCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: GetWirelessGatewayStatisticsCommandInput;
    constructor(input: GetWirelessGatewayStatisticsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWirelessGatewayStatisticsCommandInput, GetWirelessGatewayStatisticsCommandOutput>;
    private serialize;
    private deserialize;
}
