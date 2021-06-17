import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { AssociateWirelessGatewayWithThingRequest, AssociateWirelessGatewayWithThingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateWirelessGatewayWithThingCommandInput extends AssociateWirelessGatewayWithThingRequest {
}
export interface AssociateWirelessGatewayWithThingCommandOutput extends AssociateWirelessGatewayWithThingResponse, __MetadataBearer {
}
/**
 * <p>Associates a wireless gateway with a thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateWirelessGatewayWithThingCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateWirelessGatewayWithThingCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new AssociateWirelessGatewayWithThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWirelessGatewayWithThingCommandInput} for command's `input` shape.
 * @see {@link AssociateWirelessGatewayWithThingCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateWirelessGatewayWithThingCommand extends $Command<AssociateWirelessGatewayWithThingCommandInput, AssociateWirelessGatewayWithThingCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: AssociateWirelessGatewayWithThingCommandInput;
    constructor(input: AssociateWirelessGatewayWithThingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateWirelessGatewayWithThingCommandInput, AssociateWirelessGatewayWithThingCommandOutput>;
    private serialize;
    private deserialize;
}
