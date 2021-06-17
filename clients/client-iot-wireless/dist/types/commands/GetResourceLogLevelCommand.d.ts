import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetResourceLogLevelRequest, GetResourceLogLevelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourceLogLevelCommandInput extends GetResourceLogLevelRequest {
}
export interface GetResourceLogLevelCommandOutput extends GetResourceLogLevelResponse, __MetadataBearer {
}
/**
 * <p>Fetches the log-level override if any for a given resource-ID and resource-type, coulde be a wireless device or a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetResourceLogLevelCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetResourceLogLevelCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetResourceLogLevelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceLogLevelCommandInput} for command's `input` shape.
 * @see {@link GetResourceLogLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourceLogLevelCommand extends $Command<GetResourceLogLevelCommandInput, GetResourceLogLevelCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: GetResourceLogLevelCommandInput;
    constructor(input: GetResourceLogLevelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourceLogLevelCommandInput, GetResourceLogLevelCommandOutput>;
    private serialize;
    private deserialize;
}
