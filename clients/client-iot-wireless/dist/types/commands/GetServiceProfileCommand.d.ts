import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetServiceProfileRequest, GetServiceProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetServiceProfileCommandInput extends GetServiceProfileRequest {
}
export interface GetServiceProfileCommandOutput extends GetServiceProfileResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a service profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetServiceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetServiceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetServiceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceProfileCommandInput} for command's `input` shape.
 * @see {@link GetServiceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetServiceProfileCommand extends $Command<GetServiceProfileCommandInput, GetServiceProfileCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: GetServiceProfileCommandInput;
    constructor(input: GetServiceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceProfileCommandInput, GetServiceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
