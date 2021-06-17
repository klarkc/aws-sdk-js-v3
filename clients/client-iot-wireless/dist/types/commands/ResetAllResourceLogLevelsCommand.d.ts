import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ResetAllResourceLogLevelsRequest, ResetAllResourceLogLevelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetAllResourceLogLevelsCommandInput extends ResetAllResourceLogLevelsRequest {
}
export interface ResetAllResourceLogLevelsCommandOutput extends ResetAllResourceLogLevelsResponse, __MetadataBearer {
}
/**
 * <p>Remove log-level overrides if any for all resources (both wireless devices and wireless gateways).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ResetAllResourceLogLevelsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ResetAllResourceLogLevelsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ResetAllResourceLogLevelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetAllResourceLogLevelsCommandInput} for command's `input` shape.
 * @see {@link ResetAllResourceLogLevelsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetAllResourceLogLevelsCommand extends $Command<ResetAllResourceLogLevelsCommandInput, ResetAllResourceLogLevelsCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: ResetAllResourceLogLevelsCommandInput;
    constructor(input: ResetAllResourceLogLevelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetAllResourceLogLevelsCommandInput, ResetAllResourceLogLevelsCommandOutput>;
    private serialize;
    private deserialize;
}
