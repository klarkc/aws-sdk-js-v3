import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetNetworkProfileRequest, GetNetworkProfileResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetNetworkProfileCommandInput extends GetNetworkProfileRequest {
}
export interface GetNetworkProfileCommandOutput extends GetNetworkProfileResult, __MetadataBearer {
}
/**
 * <p>Returns information about a network profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetNetworkProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetNetworkProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetNetworkProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link GetNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetNetworkProfileCommand extends $Command<GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetNetworkProfileCommandInput;
    constructor(input: GetNetworkProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput>;
    private serialize;
    private deserialize;
}
