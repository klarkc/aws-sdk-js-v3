import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessGatewayRequest, GetWirelessGatewayResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWirelessGatewayCommandInput extends GetWirelessGatewayRequest {
}
export interface GetWirelessGatewayCommandOutput extends GetWirelessGatewayResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWirelessGatewayCommand extends $Command<GetWirelessGatewayCommandInput, GetWirelessGatewayCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: GetWirelessGatewayCommandInput;
    constructor(input: GetWirelessGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWirelessGatewayCommandInput, GetWirelessGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
