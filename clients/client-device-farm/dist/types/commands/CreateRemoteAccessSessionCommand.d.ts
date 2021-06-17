import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateRemoteAccessSessionRequest, CreateRemoteAccessSessionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRemoteAccessSessionCommandInput extends CreateRemoteAccessSessionRequest {
}
export interface CreateRemoteAccessSessionCommandOutput extends CreateRemoteAccessSessionResult, __MetadataBearer {
}
/**
 * <p>Specifies and starts a remote access session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link CreateRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRemoteAccessSessionCommand extends $Command<CreateRemoteAccessSessionCommandInput, CreateRemoteAccessSessionCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateRemoteAccessSessionCommandInput;
    constructor(input: CreateRemoteAccessSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRemoteAccessSessionCommandInput, CreateRemoteAccessSessionCommandOutput>;
    private serialize;
    private deserialize;
}
