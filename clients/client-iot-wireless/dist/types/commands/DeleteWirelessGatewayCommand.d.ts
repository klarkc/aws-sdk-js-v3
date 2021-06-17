import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DeleteWirelessGatewayRequest, DeleteWirelessGatewayResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteWirelessGatewayCommandInput extends DeleteWirelessGatewayRequest {
}
export interface DeleteWirelessGatewayCommandOutput extends DeleteWirelessGatewayResponse, __MetadataBearer {
}
/**
 * <p>Deletes a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DeleteWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteWirelessGatewayCommand extends $Command<DeleteWirelessGatewayCommandInput, DeleteWirelessGatewayCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: DeleteWirelessGatewayCommandInput;
    constructor(input: DeleteWirelessGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWirelessGatewayCommandInput, DeleteWirelessGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
