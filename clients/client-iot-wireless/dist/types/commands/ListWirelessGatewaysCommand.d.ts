import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListWirelessGatewaysRequest, ListWirelessGatewaysResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWirelessGatewaysCommandInput extends ListWirelessGatewaysRequest {
}
export interface ListWirelessGatewaysCommandOutput extends ListWirelessGatewaysResponse, __MetadataBearer {
}
/**
 * <p>Lists the wireless gateways registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListWirelessGatewaysCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListWirelessGatewaysCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ListWirelessGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWirelessGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListWirelessGatewaysCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWirelessGatewaysCommand extends $Command<ListWirelessGatewaysCommandInput, ListWirelessGatewaysCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: ListWirelessGatewaysCommandInput;
    constructor(input: ListWirelessGatewaysCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWirelessGatewaysCommandInput, ListWirelessGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
