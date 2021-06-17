import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DeleteDeviceRequest, DeleteDeviceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDeviceCommandInput extends DeleteDeviceRequest {
}
export interface DeleteDeviceCommandOutput extends DeleteDeviceResponse, __MetadataBearer {
}
/**
 * <p>Deletes an existing device. You must first disassociate the device from any links and
 *             customer gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteDeviceCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteDeviceCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DeleteDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDeviceCommand extends $Command<DeleteDeviceCommandInput, DeleteDeviceCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: DeleteDeviceCommandInput;
    constructor(input: DeleteDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeviceCommandInput, DeleteDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
