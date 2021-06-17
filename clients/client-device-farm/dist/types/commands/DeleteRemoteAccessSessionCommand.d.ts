import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteRemoteAccessSessionRequest, DeleteRemoteAccessSessionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRemoteAccessSessionCommandInput extends DeleteRemoteAccessSessionRequest {
}
export interface DeleteRemoteAccessSessionCommandOutput extends DeleteRemoteAccessSessionResult, __MetadataBearer {
}
/**
 * <p>Deletes a completed remote access session and its results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRemoteAccessSessionCommand extends $Command<DeleteRemoteAccessSessionCommandInput, DeleteRemoteAccessSessionCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: DeleteRemoteAccessSessionCommandInput;
    constructor(input: DeleteRemoteAccessSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRemoteAccessSessionCommandInput, DeleteRemoteAccessSessionCommandOutput>;
    private serialize;
    private deserialize;
}
