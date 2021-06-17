import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { CreateWirelessGatewayTaskDefinitionRequest, CreateWirelessGatewayTaskDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWirelessGatewayTaskDefinitionCommandInput extends CreateWirelessGatewayTaskDefinitionRequest {
}
export interface CreateWirelessGatewayTaskDefinitionCommandOutput extends CreateWirelessGatewayTaskDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Creates a gateway task definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateWirelessGatewayTaskDefinitionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateWirelessGatewayTaskDefinitionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new CreateWirelessGatewayTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWirelessGatewayTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateWirelessGatewayTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWirelessGatewayTaskDefinitionCommand extends $Command<CreateWirelessGatewayTaskDefinitionCommandInput, CreateWirelessGatewayTaskDefinitionCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: CreateWirelessGatewayTaskDefinitionCommandInput;
    constructor(input: CreateWirelessGatewayTaskDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWirelessGatewayTaskDefinitionCommandInput, CreateWirelessGatewayTaskDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
