import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { CreateWirelessGatewayRequest, CreateWirelessGatewayResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWirelessGatewayCommandInput extends CreateWirelessGatewayRequest {
}
export interface CreateWirelessGatewayCommandOutput extends CreateWirelessGatewayResponse, __MetadataBearer {
}
/**
 * <p>Provisions a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new CreateWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateWirelessGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWirelessGatewayCommand extends $Command<CreateWirelessGatewayCommandInput, CreateWirelessGatewayCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: CreateWirelessGatewayCommandInput;
    constructor(input: CreateWirelessGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWirelessGatewayCommandInput, CreateWirelessGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
