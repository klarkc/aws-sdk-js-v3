import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ResetResourceLogLevelRequest, ResetResourceLogLevelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetResourceLogLevelCommandInput extends ResetResourceLogLevelRequest {
}
export interface ResetResourceLogLevelCommandOutput extends ResetResourceLogLevelResponse, __MetadataBearer {
}
/**
 * <p>Remove log-level override if any for a specific resource-ID and resource-type, could be a wireless device or a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ResetResourceLogLevelCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ResetResourceLogLevelCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ResetResourceLogLevelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetResourceLogLevelCommandInput} for command's `input` shape.
 * @see {@link ResetResourceLogLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetResourceLogLevelCommand extends $Command<ResetResourceLogLevelCommandInput, ResetResourceLogLevelCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: ResetResourceLogLevelCommandInput;
    constructor(input: ResetResourceLogLevelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetResourceLogLevelCommandInput, ResetResourceLogLevelCommandOutput>;
    private serialize;
    private deserialize;
}
