import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdateDestinationRequest, UpdateDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDestinationCommandInput extends UpdateDestinationRequest {
}
export interface UpdateDestinationCommandOutput extends UpdateDestinationResponse, __MetadataBearer {
}
/**
 * <p>Updates properties of a destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateDestinationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateDestinationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new UpdateDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDestinationCommand extends $Command<UpdateDestinationCommandInput, UpdateDestinationCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: UpdateDestinationCommandInput;
    constructor(input: UpdateDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDestinationCommandInput, UpdateDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
