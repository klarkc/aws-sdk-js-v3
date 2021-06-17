import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { CreateDeviceRequest, CreateDeviceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDeviceCommandInput extends CreateDeviceRequest {
}
export interface CreateDeviceCommandOutput extends CreateDeviceResponse, __MetadataBearer {
}
/**
 * <p>Creates a new device in a global network. If you specify both a site ID and a
 *             location, the location of the site is used for visualization in the Network Manager console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateDeviceCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateDeviceCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new CreateDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeviceCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDeviceCommand extends $Command<CreateDeviceCommandInput, CreateDeviceCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: CreateDeviceCommandInput;
    constructor(input: CreateDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeviceCommandInput, CreateDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
