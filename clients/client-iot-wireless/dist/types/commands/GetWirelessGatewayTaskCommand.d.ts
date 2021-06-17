import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessGatewayTaskRequest, GetWirelessGatewayTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWirelessGatewayTaskCommandInput extends GetWirelessGatewayTaskRequest {
}
export interface GetWirelessGatewayTaskCommandOutput extends GetWirelessGatewayTaskResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a wireless gateway task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessGatewayTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessGatewayTaskCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWirelessGatewayTaskCommand extends $Command<GetWirelessGatewayTaskCommandInput, GetWirelessGatewayTaskCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: GetWirelessGatewayTaskCommandInput;
    constructor(input: GetWirelessGatewayTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWirelessGatewayTaskCommandInput, GetWirelessGatewayTaskCommandOutput>;
    private serialize;
    private deserialize;
}
