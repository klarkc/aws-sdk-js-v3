import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { StopRemoteAccessSessionRequest, StopRemoteAccessSessionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopRemoteAccessSessionCommandInput extends StopRemoteAccessSessionRequest {
}
export interface StopRemoteAccessSessionCommandOutput extends StopRemoteAccessSessionResult, __MetadataBearer {
}
/**
 * <p>Ends a specified remote access session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, StopRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, StopRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new StopRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link StopRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopRemoteAccessSessionCommand extends $Command<StopRemoteAccessSessionCommandInput, StopRemoteAccessSessionCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: StopRemoteAccessSessionCommandInput;
    constructor(input: StopRemoteAccessSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopRemoteAccessSessionCommandInput, StopRemoteAccessSessionCommandOutput>;
    private serialize;
    private deserialize;
}
