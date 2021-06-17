import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateNetworkProfileRequest, UpdateNetworkProfileResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateNetworkProfileCommandInput extends UpdateNetworkProfileRequest {
}
export interface UpdateNetworkProfileCommandOutput extends UpdateNetworkProfileResult, __MetadataBearer {
}
/**
 * <p>Updates the network profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateNetworkProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateNetworkProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateNetworkProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateNetworkProfileCommand extends $Command<UpdateNetworkProfileCommandInput, UpdateNetworkProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateNetworkProfileCommandInput;
    constructor(input: UpdateNetworkProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNetworkProfileCommandInput, UpdateNetworkProfileCommandOutput>;
    private serialize;
    private deserialize;
}
