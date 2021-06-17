import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { CreateServiceProfileRequest, CreateServiceProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateServiceProfileCommandInput extends CreateServiceProfileRequest {
}
export interface CreateServiceProfileCommandOutput extends CreateServiceProfileResponse, __MetadataBearer {
}
/**
 * <p>Creates a new service profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateServiceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateServiceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new CreateServiceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServiceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateServiceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateServiceProfileCommand extends $Command<CreateServiceProfileCommandInput, CreateServiceProfileCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: CreateServiceProfileCommandInput;
    constructor(input: CreateServiceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateServiceProfileCommandInput, CreateServiceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
