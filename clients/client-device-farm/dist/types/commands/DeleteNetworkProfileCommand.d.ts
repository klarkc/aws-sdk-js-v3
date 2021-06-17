import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteNetworkProfileRequest, DeleteNetworkProfileResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteNetworkProfileCommandInput extends DeleteNetworkProfileRequest {
}
export interface DeleteNetworkProfileCommandOutput extends DeleteNetworkProfileResult, __MetadataBearer {
}
/**
 * <p>Deletes a network profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteNetworkProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteNetworkProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteNetworkProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNetworkProfileCommand extends $Command<DeleteNetworkProfileCommandInput, DeleteNetworkProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: DeleteNetworkProfileCommandInput;
    constructor(input: DeleteNetworkProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNetworkProfileCommandInput, DeleteNetworkProfileCommandOutput>;
    private serialize;
    private deserialize;
}
