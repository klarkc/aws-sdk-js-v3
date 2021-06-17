import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetDestinationRequest, GetDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDestinationCommandInput extends GetDestinationRequest {
}
export interface GetDestinationCommandOutput extends GetDestinationResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetDestinationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetDestinationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDestinationCommandInput} for command's `input` shape.
 * @see {@link GetDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDestinationCommand extends $Command<GetDestinationCommandInput, GetDestinationCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: GetDestinationCommandInput;
    constructor(input: GetDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDestinationCommandInput, GetDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
