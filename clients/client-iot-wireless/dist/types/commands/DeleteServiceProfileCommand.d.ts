import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DeleteServiceProfileRequest, DeleteServiceProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteServiceProfileCommandInput extends DeleteServiceProfileRequest {
}
export interface DeleteServiceProfileCommandOutput extends DeleteServiceProfileResponse, __MetadataBearer {
}
/**
 * <p>Deletes a service profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteServiceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteServiceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DeleteServiceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteServiceProfileCommand extends $Command<DeleteServiceProfileCommandInput, DeleteServiceProfileCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: DeleteServiceProfileCommandInput;
    constructor(input: DeleteServiceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServiceProfileCommandInput, DeleteServiceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
