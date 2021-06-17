import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetRemoteAccessSessionRequest, GetRemoteAccessSessionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRemoteAccessSessionCommandInput extends GetRemoteAccessSessionRequest {
}
export interface GetRemoteAccessSessionCommandOutput extends GetRemoteAccessSessionResult, __MetadataBearer {
}
/**
 * <p>Returns a link to a currently running remote access session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link GetRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRemoteAccessSessionCommand extends $Command<GetRemoteAccessSessionCommandInput, GetRemoteAccessSessionCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetRemoteAccessSessionCommandInput;
    constructor(input: GetRemoteAccessSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRemoteAccessSessionCommandInput, GetRemoteAccessSessionCommandOutput>;
    private serialize;
    private deserialize;
}
