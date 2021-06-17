import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { PutResourceLogLevelRequest, PutResourceLogLevelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutResourceLogLevelCommandInput extends PutResourceLogLevelRequest {
}
export interface PutResourceLogLevelCommandOutput extends PutResourceLogLevelResponse, __MetadataBearer {
}
/**
 * <p>Sets the log-level override for a resource-ID and resource-type, could be a wireless gateway or a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, PutResourceLogLevelCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, PutResourceLogLevelCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new PutResourceLogLevelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourceLogLevelCommandInput} for command's `input` shape.
 * @see {@link PutResourceLogLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutResourceLogLevelCommand extends $Command<PutResourceLogLevelCommandInput, PutResourceLogLevelCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: PutResourceLogLevelCommandInput;
    constructor(input: PutResourceLogLevelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutResourceLogLevelCommandInput, PutResourceLogLevelCommandOutput>;
    private serialize;
    private deserialize;
}
