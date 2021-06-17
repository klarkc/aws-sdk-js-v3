import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateNetworkProfileRequest, CreateNetworkProfileResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateNetworkProfileCommandInput extends CreateNetworkProfileRequest {
}
export interface CreateNetworkProfileCommandOutput extends CreateNetworkProfileResult, __MetadataBearer {
}
/**
 * <p>Creates a network profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateNetworkProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateNetworkProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateNetworkProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateNetworkProfileCommand extends $Command<CreateNetworkProfileCommandInput, CreateNetworkProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateNetworkProfileCommandInput;
    constructor(input: CreateNetworkProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNetworkProfileCommandInput, CreateNetworkProfileCommandOutput>;
    private serialize;
    private deserialize;
}
