import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { InstallToRemoteAccessSessionRequest, InstallToRemoteAccessSessionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InstallToRemoteAccessSessionCommandInput extends InstallToRemoteAccessSessionRequest {
}
export interface InstallToRemoteAccessSessionCommandOutput extends InstallToRemoteAccessSessionResult, __MetadataBearer {
}
/**
 * <p>Installs an application to the device in a remote access session. For Android
 *             applications, the file must be in .apk format. For iOS applications, the file must be in
 *             .ipa format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, InstallToRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, InstallToRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new InstallToRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InstallToRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link InstallToRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InstallToRemoteAccessSessionCommand extends $Command<InstallToRemoteAccessSessionCommandInput, InstallToRemoteAccessSessionCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: InstallToRemoteAccessSessionCommandInput;
    constructor(input: InstallToRemoteAccessSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InstallToRemoteAccessSessionCommandInput, InstallToRemoteAccessSessionCommandOutput>;
    private serialize;
    private deserialize;
}
