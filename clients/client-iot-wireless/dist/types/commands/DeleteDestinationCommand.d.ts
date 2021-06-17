import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DeleteDestinationRequest, DeleteDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDestinationCommandInput extends DeleteDestinationRequest {
}
export interface DeleteDestinationCommandOutput extends DeleteDestinationResponse, __MetadataBearer {
}
/**
 * <p>Deletes a destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteDestinationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteDestinationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DeleteDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDestinationCommand extends $Command<DeleteDestinationCommandInput, DeleteDestinationCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: DeleteDestinationCommandInput;
    constructor(input: DeleteDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDestinationCommandInput, DeleteDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
